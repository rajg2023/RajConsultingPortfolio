# Portfolio Chatbot - SmolLM-135M RAG System

A lightweight RAG (Retrieval-Augmented Generation) chatbot built with SmolLM-135M-Instruct for answering questions about Rajiv Giri's portfolio. The chatbot uses ChromaDB for vector storage and Sentence Transformers for embeddings.

## Features

- 🤖 **Lightweight LLM**: Uses SmolLM-135M-Instruct (small, fast, efficient)
- 🔍 **RAG System**: Retrieval-Augmented Generation for accurate, context-aware answers
- 💬 **Web Interface**: Beautiful, responsive chat UI
- 📊 **Vector Search**: ChromaDB for efficient semantic search
- 🚀 **No External APIs**: Runs completely locally

## Requirements

- Python 3.8+
- 4GB+ RAM (8GB recommended)
- ~2GB disk space for models (downloaded automatically)

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tinylmchat
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Running the Web Application

1. **Start the Flask server**
   ```bash
   python app.py
   ```

2. **Open your browser**
   Navigate to `http://localhost:5000`

3. **Start chatting!**
   Ask questions like:
   - "What are Rajiv's skills?"
   - "Tell me about his projects"
   - "What is his educational background?"
   - "What certifications does he have?"

### Running the Command-Line Version

If you prefer the command-line interface:

```bash
python rag_chroma_chatbot.py
```

## How It Works

1. **Data Loading**: Loads Q&A pairs from `finetuneddata.json`
2. **Embedding**: Creates embeddings using Sentence Transformers (all-MiniLM-L6-v2)
3. **Indexing**: Stores embeddings in ChromaDB for fast retrieval
4. **Query Processing**:
   - User question is embedded
   - Similar chunks are retrieved from ChromaDB
   - Context is passed to SmolLM-135M-Instruct
   - LLM generates answer based on retrieved context

## File Structure

```
tinylmchat/
├── app.py                 # Flask web application
├── rag_chroma_chatbot.py  # Command-line chatbot
├── finetuneddata.json     # Portfolio Q&A data
├── requirements.txt       # Python dependencies
├── .gitignore            # Git ignore rules
├── README.md             # This file
├── templates/
│   └── index.html        # Web chat interface
└── chroma_db/            # ChromaDB storage (auto-created)
```

## Model Downloads

On first run, the following models will be automatically downloaded:

- **SmolLM-135M-Instruct**: ~500MB (from HuggingFace)
- **all-MiniLM-L6-v2**: ~90MB (sentence transformer)

These are cached in your HuggingFace cache directory and won't be re-downloaded.

## Deployment

### Local Deployment

The Flask app runs on `0.0.0.0:5000` by default. For production:

1. Use a production WSGI server like Gunicorn:
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

2. Or use uWSGI, Waitress, or other production servers

### GitHub Deployment

1. **Ensure `.gitignore` is in place** - Models and large files are excluded
2. **Push to GitHub** - Only code and data files are committed
3. **Deploy on your server** - Models download automatically on first run

### File Size Considerations

- ✅ Code files: < 1MB total
- ✅ `finetuneddata.json`: ~50KB
- ❌ Models: Excluded via `.gitignore` (downloaded on deployment)
- ❌ `chroma_db/`: Excluded (generated on first run)

Total repository size: **< 100MB** (models downloaded separately)

## Configuration

Edit `app.py` to customize:

- `CHECKPOINT`: Change the LLM model
- `EMBEDDING_MODEL_NAME`: Change the embedding model
- `DEVICE`: Switch between CPU/GPU
- `max_new_tokens`: Adjust response length
- `temperature`: Control randomness

## Troubleshooting

### Models not downloading
- Check internet connection
- Verify HuggingFace access (models are public)
- Check disk space (need ~2GB free)

### ChromaDB errors
- Delete `chroma_db/` folder and restart
- Check file permissions

### Out of memory
- Reduce `max_new_tokens` in `generate_answer()`
- Use CPU instead of GPU
- Close other applications

### Slow responses
- First run is slower (model loading)
- Consider using GPU if available
- Reduce `top_k` in `retrieve_relevant_chunks()`

## License

This project is for portfolio demonstration purposes.

## Contact

For questions about the portfolio chatbot, contact Rajiv Giri at rajivgiri2025@gmail.com

