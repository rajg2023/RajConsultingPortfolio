# How to Run and Test Locally

## 🚀 Quick Start (3 Commands)

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Run the app
python app.py

# 3. Open browser
# Navigate to: http://localhost:5000
```

## 📋 Detailed Steps

### Step 1: Install Dependencies

```bash
pip install -r requirements.txt
```

**What this installs:**
- Flask (web framework)
- PyTorch (ML framework)
- Transformers (HuggingFace models)
- Sentence Transformers (embeddings)
- ChromaDB (vector database)

**Expected output:**
```
Collecting flask==3.0.0
Collecting torch==2.1.0
...
Successfully installed flask-3.0.0 torch-2.1.0 ...
```

### Step 2: Run the Application

```bash
python app.py
```

**What happens:**
1. **First run only** (~2-5 minutes):
   - Downloads SmolLM-135M-Instruct model (~500MB)
   - Downloads all-MiniLM-L6-v2 embedding model (~90MB)
   - Creates embeddings for all Q&A pairs
   - Indexes data in ChromaDB

2. **Subsequent runs** (~5-10 seconds):
   - Loads cached models
   - Loads existing ChromaDB index
   - Starts web server

**Expected output:**
```
==================================================
Initializing Portfolio Chatbot...
==================================================
[INFO] Initializing embedding model...
[INFO] Loading LLM and tokenizer...
[INFO] Loading and indexing portfolio data...
[INFO] Total text blocks: 50
[INFO] Indexed 50 chunks.
[INFO] Chatbot ready!
==================================================
Starting web server...
==================================================
 * Running on http://0.0.0.0:5000
```

### Step 3: Test in Browser

1. **Open your browser**
   - Go to: `http://localhost:5000`
   - Or: `http://127.0.0.1:5000`

2. **You should see:**
   - Chat interface with header "Rajiv Giri Portfolio Chatbot"
   - Input field at the bottom
   - Welcome message

3. **Test questions to try:**
   - "Who is Rajiv Giri?"
   - "What are Rajiv's skills?"
   - "Tell me about his projects"
   - "Hello"

## 🧪 Alternative: Automated Test Script

Use the test script for automated checks:

```bash
./test_local.sh
```

This script will:
- ✅ Check Python installation
- ✅ Verify required files exist
- ✅ Install missing dependencies
- ✅ Check if port is available
- ✅ Start the application

## 🖥️ Command-Line Testing (Alternative)

If you prefer CLI over web interface:

```bash
python rag_chroma_chatbot.py
```

**Usage:**
- Type your question and press Enter
- Type 'exit' or 'quit' to stop

**Example:**
```
You: Who is Rajiv Giri?

Bot: Rajiv Giri is a Digital and Technology Solutions specialist...

You: exit

Bot: Goodbye!
```

## ✅ Verification Checklist

### Before Running
- [ ] Python 3.8+ installed (`python3 --version`)
- [ ] `finetuneddata.json` exists
- [ ] `app.py` exists
- [ ] `requirements.txt` exists
- [ ] ~2GB free disk space (for models)

### After Running
- [ ] Server starts without errors
- [ ] Browser can access `http://localhost:5000`
- [ ] Chat interface loads
- [ ] Can type and send messages
- [ ] Bot responds to questions
- [ ] Greetings work ("Hello", "Hi")

## 🐛 Troubleshooting

### "Module not found" Error

**Problem:** Missing dependencies

**Solution:**
```bash
pip install -r requirements.txt
```

### "Port 5000 already in use"

**Problem:** Another app is using port 5000

**Solution 1:** Find and stop the process
```bash
lsof -i :5000
kill -9 <PID>
```

**Solution 2:** Change port in `app.py`
```python
app.run(host='0.0.0.0', port=8080, debug=False)  # Change 5000 to 8080
```

### Models Not Downloading

**Problem:** No internet or HuggingFace access

**Check:**
```bash
# Test internet
ping -c 3 huggingface.co

# Test HuggingFace access
python -c "from transformers import AutoTokenizer; print('OK')"
```

### "Out of Memory" Error

**Problem:** Not enough RAM

**Solution:**
- Close other applications
- Edit `app.py`: `DEVICE = torch.device("cpu")`
- Reduce `max_new_tokens=150` in `generate_answer()`

### Slow First Run

**Normal!** First run downloads ~2GB of models. This is expected and only happens once.

### Browser Shows "Connection Refused"

**Problem:** Server not running or wrong URL

**Check:**
1. Is the server running? (Check terminal)
2. Correct URL? (`http://localhost:5000` not `https://`)
3. Firewall blocking? (Try `127.0.0.1:5000`)

## 📊 Expected Performance

### First Run
- Model download: 2-5 minutes
- Indexing: 10-30 seconds
- **Total: ~3-6 minutes**

### Subsequent Runs
- Model loading: 5-10 seconds
- **Total: ~5-10 seconds**

### Response Times
- First question: 2-5 seconds
- Subsequent questions: 1-3 seconds

## 🎯 Test Questions

### Should Work Well ✅
- "Who is Rajiv Giri?"
- "What are Rajiv's skills?"
- "What is his education?"
- "What certifications does he have?"
- "Tell me about his projects"
- "What is Rajiv's work experience?"

### Edge Cases
- "Hello" → Should get greeting
- "xyz123" → Should say "I don't know"
- "" (empty) → Should be handled gracefully

## 🔍 Health Check

Test if server is running:

```bash
curl http://localhost:5000/health
```

**Expected response:**
```json
{"status": "healthy", "model_loaded": true}
```

## 📝 Next Steps

Once local testing works:

1. ✅ Test all features
2. ✅ Verify responses are accurate
3. ✅ Check performance
4. ✅ Review `TESTING.md` for detailed tests
5. ✅ Ready for deployment! See `DEPLOYMENT.md`

---

**Need help?** Check `TESTING.md` for detailed troubleshooting or `README.md` for full documentation.

