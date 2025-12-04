"""
Portfolio Chatbot Web Application
~~Main idea was to use SLM with RAG for portfolio Q&A, but could not do it within current application archetecture without using api's and application server due to time and budget constraints~~
"""
import json
import os
import torch
from flask import Flask, render_template, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
from sentence_transformers import SentenceTransformer
from flask_cors import CORS
import chromadb

app = Flask(__name__)
CORS(app, resources={
    r"/chat": {
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"],
        "supports_credentials": True
    }
})

# Configurations
JSON_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "finetuneddata.json")
CHROMA_PERSIST_DIR = "./chroma_db"
EMBEDDING_MODEL_NAME = "all-MiniLM-L6-v2"
# Force CPU - GPU (GTX 950M) is not compatible with current PyTorch CUDA version
DEVICE = torch.device("cpu")
CHECKPOINT = "HuggingFaceTB/SmolLM-135M-Instruct"

# Global variables for models (loaded once)
sentence_model = None
tokenizer = None
model = None
collection = None
json_metadata = {}  # Store metadata for direct answer extraction

def initialize_models():
    """Initialize all models and load data - called once at startup"""
    global sentence_model, tokenizer, model, collection
    
    print("[INFO] Initializing embedding model...")
    # Force CPU device for embedding model
    sentence_model = SentenceTransformer(EMBEDDING_MODEL_NAME, device="cpu")
    
    print("[INFO] Loading LLM and tokenizer...")
    tokenizer = AutoTokenizer.from_pretrained(CHECKPOINT)
    model = AutoModelForCausalLM.from_pretrained(CHECKPOINT).to(DEVICE)
    
    # Set pad token if not set
    if tokenizer.pad_token is None:
        tokenizer.pad_token = tokenizer.eos_token
    
    print("[INFO] Loading and indexing portfolio data...")
    # Load fine-tuned Q&A JSON data
    with open(JSON_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    def extract_texts(data):
        texts = []
        metadata_list = []
        for i, item in enumerate(data):
            # Create searchable text (instruction + input for better matching)
            searchable_text = item['instruction']
            if item.get('input'):
                searchable_text += "\n" + item['input']
            # Also include answer for semantic search
            searchable_text += "\n" + item['output']
            
            texts.append(searchable_text)
            # Store metadata with original output for direct extraction
            metadata_list.append({
                "source": f"text_block_{i}",
                "instruction": item['instruction'],
                "output": item['output'],
                "index": i
            })
        return texts, metadata_list
    
    all_texts, metadata_list = extract_texts(data)
    filtered_texts = [t for t in all_texts if len(t) > 20]
    filtered_metadata = [m for t, m in zip(all_texts, metadata_list) if len(t) > 20]
    
    print(f"[INFO] Total text blocks: {len(all_texts)}")
    print(f"[INFO] Filtered text blocks: {len(filtered_texts)}")
    
    # Generate embeddings
    chunk_embeddings = sentence_model.encode(filtered_texts, convert_to_tensor=True, show_progress_bar=True)
    
    # Initialize ChromaDB
    client = chromadb.PersistentClient(CHROMA_PERSIST_DIR)
    collection_name = "portfolio_qa_collection"
    
    try:
        collection = client.get_collection(collection_name)
        existing_ids = collection.get()['ids']
        if existing_ids:
            print(f"[INFO] Clearing existing collection with {len(existing_ids)} items...")
            collection.delete(ids=existing_ids)
    except:
        collection = client.create_collection(collection_name, embedding_function=None)
    
    # Store metadata globally for direct answer access
    global json_metadata
    json_metadata = {str(i): meta for i, meta in enumerate(filtered_metadata)}
    
    # Add documents to collection
    print("[INFO] Indexing chunks...")
    for i, (chunk, embedding) in enumerate(zip(filtered_texts, chunk_embeddings)):
        collection.add(
            documents=[chunk],
            metadatas=[filtered_metadata[i]],
            ids=[str(i)],
            embeddings=[embedding.cpu().numpy()]
        )
    
    print(f"[INFO] Indexed {len(filtered_texts)} chunks.")
    print("[INFO] Chatbot ready!")

def generate_answer(prompt, max_new_tokens=250, temperature=0.1):
    """Generate answer from the LLM with improved settings"""
    try:
        inputs = tokenizer(prompt, return_tensors="pt", truncation=True, max_length=2048).to(DEVICE)
        outputs = model.generate(
            **inputs,
            max_new_tokens=max_new_tokens,
            temperature=0.05,  # Very low temperature for deterministic, context-based answers
            do_sample=False,  # Greedy decoding to reduce hallucination
            pad_token_id=tokenizer.eos_token_id,
            eos_token_id=tokenizer.eos_token_id,
            no_repeat_ngram_size=4,  # Prevent repetition
            repetition_penalty=1.3,  # Prevent repetition
            length_penalty=1.1  # Slightly favor longer, more complete answers
        )
        full_response = tokenizer.decode(outputs[0], skip_special_tokens=True)
        
        # Extract only the answer part (after "ANSWER:")
        answer_marker = "ANSWER:"
        if answer_marker in full_response:
            answer = full_response.split(answer_marker, 1)[1].strip()
        else:
            # Fallback: remove the prompt if it's at the start
            if prompt in full_response:
                answer = full_response.replace(prompt, "").strip()
            else:
                answer = full_response.strip()
        
        # Remove any remaining prompt artifacts
        answer = answer.split("CONTEXT:")[0].strip()
        answer = answer.split("QUESTION:")[0].strip()
        
        return answer
    except Exception as e:
        print(f"[ERROR] Generation error: {e}")
        return "I apologize, but I encountered an error generating a response."

def retrieve_relevant_chunks(query, top_k=5):
    """Retrieve relevant chunks from ChromaDB with metadata"""
    try:
        query_emb = sentence_model.encode([query], convert_to_tensor=True).squeeze()
        results = collection.query(query_embeddings=[query_emb.cpu().numpy()], n_results=top_k)
        docs = results['documents'][0]
        metadatas = results['metadatas'][0]
        ids = results['ids'][0]
        scores = results['distances'][0]
        
        # Return docs with metadata for direct answer extraction
        scored_docs = sorted(zip(docs, scores, metadatas, ids), key=lambda x: x[1])  # lower distance = better
        return [(doc, meta, doc_id) for doc, _, meta, doc_id in scored_docs]
    except Exception as e:
        print(f"[ERROR] Retrieval error: {e}")
        return []

def extract_answer_from_metadata(metadatas, query):
    """Try to directly extract answer from metadata (most reliable) with improved matching"""
    query_lower = query.lower().strip()
    
    # Enhanced matching patterns with more variations
    contact_patterns = {
        'query': ['contact', 'phone', 'email', 'reach', 'number', 'call', 'get in touch', 'how to reach', 'how can i contact', 'how can i reach', 'what is the phone', 'what is the email'],
        'instruction': ['contact', 'phone', 'email', 'reach', 'direct contact']
    }
    
    skills_patterns = {
        'query': ['skill', 'technical skill', 'technology', 'expertise', 'capability', 'tools', 'proficiency', 'programming', 'languages', 'what can he do'],
        'instruction': ['skill', 'technical', 'expertise', 'proficiency', 'programming', 'tools']
    }
    
    education_patterns = {
        'query': ['education', 'educational', 'degree', 'university', 'certification', 'training', 'qualification', 'school', 'college', 'where did he study'],
        'instruction': ['education', 'educational', 'certification', 'degree', 'university', 'training']
    }
    
    background_patterns = {
        'query': ['background', 'about', 'who is', 'tell me about', 'describe', 'introduction', 'what is', 'who'],
        'instruction': ['who is', 'background', 'about']
    }
    
    project_patterns = {
        'query': ['project', 'work', 'experience', 'portfolio', 'work on', 'worked on', 'completed', 'what has he done'],
        'instruction': ['project', 'work experience', 'worked on', 'completed']
    }
    
    pricing_patterns = {
        'query': ['rate', 'price', 'cost', 'charge', 'pricing', 'how much', 'hourly', 'fee'],
        'instruction': ['rate', 'price', 'cost', 'charge', 'pricing', 'hourly']
    }
    
    availability_patterns = {
        'query': ['available', 'availability', 'hours', 'when', 'business hours', 'operation'],
        'instruction': ['available', 'availability', 'hours', 'operation']
    }
    
    # Check each metadata for direct output match
    for meta in metadatas:
        if meta and 'output' in meta:
            output = meta['output']
            instruction = meta.get('instruction', '').lower()
            
            # Match against all patterns
            patterns = [
                contact_patterns, skills_patterns, education_patterns,
                background_patterns, project_patterns, pricing_patterns, availability_patterns
            ]
            
            for pattern in patterns:
                if any(term in query_lower for term in pattern['query']):
                    if any(term in instruction for term in pattern['instruction']):
                        return output
            
            # Fuzzy match: check if query words appear in instruction
            query_words = set(query_lower.split())
            instruction_words = set(instruction.split())
            overlap = len(query_words.intersection(instruction_words))
            
            # If significant overlap, return this answer
            if overlap >= 2 and len(query_words) > 0:
                overlap_ratio = overlap / len(query_words)
                if overlap_ratio >= 0.3:  # 30% word overlap
                    return output
    
    # If no direct match, return the first (most relevant) output
    for meta in metadatas:
        if meta and 'output' in meta:
            return meta['output']
    
    return None

def answer_question(query):
    """Main function to answer questions"""
    # Handle greetings explicitly - expanded list
    query_lower = query.lower().strip()
    greetings = [
        "hi", "hello", "hey", "hi there", "hello there", "hey there",
        "good morning", "good evening", "good afternoon", "good night",
        "greetings", "howdy", "hiya", "sup", "what's up", "wassup"
    ]
    # Check if query is just a greeting (no other content)
    if query_lower in greetings or (len(query_lower.split()) <= 2 and any(g in query_lower for g in ["hi", "hello", "hey", "greet"])):
        return "Hello! How can I assist you today? Ask me about Rajiv's background, skills, projects, education, or experience."
    
    # Retrieve relevant chunks with metadata
    # Increased top_k for better matching (staying under 100MB constraint, optimizing retrieval instead)
    relevant_chunks = retrieve_relevant_chunks(query, top_k=10)  # Get more chunks for better matching
    
    if not relevant_chunks:
        return "I don't have information about that. Please ask about Rajiv's background, skills, projects, education, or experience."
    
    # Extract metadata for direct answer extraction
    metadatas = [meta for _, meta, _ in relevant_chunks if meta]
    relevant_docs = [d.strip() for d, _, _ in relevant_chunks if len(d.strip()) > 20]
    
    if not relevant_docs:
        return "I don't have information about that. Please ask about Rajiv's background, skills, projects, education, or experience."
    
    # Try to extract answer directly from metadata first (most reliable)
    direct_answer = extract_answer_from_metadata(metadatas, query)
    if direct_answer and len(direct_answer) > 30:
        # Validate it contains relevant terms
        if any(term in direct_answer.lower() for term in ["rajiv", "giri", "skills", "project", "experience", "education", "contact", "email", "phone"]):
            return direct_answer
    
    # Build context from top 5 most relevant documents for LLM
    # Include instruction in context for better matching
    context_parts = []
    for i in range(min(5, len(relevant_docs))):
        doc = relevant_docs[i]
        meta = metadatas[i] if i < len(metadatas) else None
        if meta and 'instruction' in meta:
            context_parts.append(f"Reference {i+1} (Question: {meta['instruction']}):\n{doc}")
        else:
            context_parts.append(f"Reference {i+1}:\n{doc}")
    context = "\n\n".join(context_parts)
    
    # If direct extraction didn't work, use LLM with very strict constraints
    # Create STRICT prompt - explicitly forbid using any knowledge outside the context
    prompt = f"""You are a helpful assistant answering questions about Rajiv Giri's portfolio. You MUST answer ONLY using the information provided in the CONTEXT below.

CRITICAL RULES:
- ONLY use information from the CONTEXT provided
- DO NOT use any external knowledge or information
- DO NOT make up or invent any facts
- DO NOT add information that is not in the CONTEXT
- If the answer is not in the CONTEXT, reply EXACTLY: "I don't know. Please ask about Rajiv's background, skills, projects, education, or experience."
- Extract the relevant answer from the CONTEXT - look for the "Answer:" section or the output text
- Copy the answer directly from the CONTEXT without modification
- Keep your answer concise and factual
- Do not add explanations or additional context

CONTEXT:
{context}

QUESTION: {query}

ANSWER:"""
    
    # Generate answer with improved settings
    answer = generate_answer(prompt, max_new_tokens=250).strip()
    
    # Clean up answer - remove any remaining prompt artifacts
    if "CONTEXT:" in answer:
        answer = answer.split("CONTEXT:")[0].strip()
    if "QUESTION:" in answer:
        answer = answer.split("QUESTION:")[0].strip()
    if "ANSWER:" in answer:
        # Extract only the part after the last ANSWER:
        parts = answer.split("ANSWER:")
        answer = parts[-1].strip()
    
    # Try to extract answer directly from context if LLM didn't work well
    # Look for "Answer:" in context and extract that part
    if ("Answer:" in context or len(answer) < 50) and not any(term in answer.lower() for term in ["rajiv", "giri", "contact", "email", "phone"]):
        for doc in relevant_docs[:3]:
            if "Answer:" in doc:
                parts = doc.split("Answer:")
                if len(parts) > 1:
                    extracted = parts[-1].strip()
                    # Remove any trailing instruction text
                    if "\n" in extracted:
                        extracted = extracted.split("\n")[0].strip()
                    # Use extracted if it's longer and more relevant
                    if len(extracted) > len(answer) and any(term in extracted.lower() for term in ["rajiv", "giri"]):
                        answer = extracted
                        break
    
    # Validate answer - check if it contains key terms from context
    context_lower = context.lower()
    answer_lower = answer.lower()
    
    # Check if answer seems to be from context (contains key terms like "Rajiv", "Giri", or context words)
    has_context_terms = any(term in answer_lower for term in ["rajiv", "giri", "portfolio", "experience", "skills", "project", "education", "contact", "email", "phone"])
    
    # Check for hallucination indicators - things that should NOT be in answers
    hallucination_indicators = [
        "jayanthi", "rajiva", "rajit",  # Wrong names
        "google cloud platform since 2015", "partnership between google and aws",  # Made-up facts
        "we've been working", "our partnership", "we've been",  # First person plural (not in JSON)
        "can you tell me more", "yes, rajiv has worked",  # Conversational patterns not in data
    ]
    
    has_hallucination = any(indicator in answer_lower for indicator in hallucination_indicators)
    
    # Check if answer contains words from the context
    context_words = set(context_lower.split()[:100])  # First 100 words for better matching
    answer_words = set(answer_lower.split())
    overlap = len(context_words.intersection(answer_words))
    
    # STRICT validation: Reject if hallucination detected
    if has_hallucination:
        print(f"[WARNING] Hallucination detected, rejecting: {answer[:100]}...")
        # Try direct metadata extraction as fallback
        direct_meta_answer = extract_answer_from_metadata(metadatas[:3], query)
        if direct_meta_answer and len(direct_meta_answer) > 30:
            return direct_meta_answer
        return "I don't have information about that. Please ask about Rajiv's background, skills, projects, education, or experience."
    
    # If answer doesn't seem related to context, try to use direct metadata extraction
    if not has_context_terms and overlap < 3 and len(answer) > 50:
        # Try one more time with direct metadata
        direct_meta_answer = extract_answer_from_metadata(metadatas[:3], query)
        if direct_meta_answer and len(direct_meta_answer) > 30:
            return direct_meta_answer
        print(f"[WARNING] Answer may be hallucinated (overlap: {overlap}), rejecting: {answer[:100]}...")
        return "I don't have information about that. Please ask about Rajiv's background, skills, projects, education, or experience."
    
    # Additional check: if answer mentions things not in context (like "Rajit" or "Rajiva" instead of "Rajiv")
    if any(wrong_name in answer_lower for wrong_name in ["rajit", "rajiva"]) and "rajiv" not in answer_lower:
        # Try direct metadata extraction
        direct_meta_answer = extract_answer_from_metadata(metadatas[:3], query)
        if direct_meta_answer:
            return direct_meta_answer
        print(f"[WARNING] Answer contains incorrect name, rejecting: {answer[:100]}...")
        return "I don't have information about that. Please ask about Rajiv's background, skills, projects, education, or experience."
    
    # Validate answer length and content
    if len(answer) < 15 or "i don't know" in answer.lower() or not answer:
        # Last resort: try direct metadata
        direct_meta_answer = extract_answer_from_metadata(metadatas[:3], query)
        if direct_meta_answer:
            return direct_meta_answer
        return "I don't have information about that. Please ask about Rajiv's background, skills, projects, education, or experience."
    
    return answer



@app.route('/chat', methods=['POST', 'OPTIONS'])
def chat():

    print("\n=== New Request ===")
    print("Headers:", dict(request.headers))
    print("Raw data:", request.get_data())

    """Handle chat requests with CORS support"""
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = jsonify({'status': 'ok'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
        return response
        
    try:
        data = request.get_json()
        print("Parsed JSON:", data)
        
        if not data or 'message' not in data:
            return jsonify({'response': 'No message provided'}), 400
            
        user_message = data['message'].strip()
        if not user_message:
            return jsonify({'response': 'Message cannot be empty'}), 400
        
        print("Processing message:", user_message)
        response = answer_question(user_message)
        print("Generated response:", response)
        
        result = jsonify({'response': response})
        result.headers.add('Access-Control-Allow-Origin', '*')
        return result
        
    except Exception as e:
        print(f"Error in chat endpoint: {str(e)}")
        print("Exception type:", type(e).__name__)
        import traceback
        traceback.print_exc()
        
        error = jsonify({
            'response': 'I apologize, but I encountered an error processing your request.',
            'error': str(e),
            'type': type(e).__name__
        })
        error.headers.add('Access-Control-Allow-Origin', '*')
        return error, 500

@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'model_loaded': model is not None})

if __name__ == '__main__':
    print("=" * 50)
    print("Initializing Portfolio Chatbot...")
    print("=" * 50)
    try:
        initialize_models()
        print("=" * 50)
        print("Starting web server...")
        print("=" * 50)
        app.run(host='0.0.0.0', port=5000, debug=True)  # Enable debug mode
    except Exception as e:
        print(f"Failed to start server: {str(e)}")
        raise

