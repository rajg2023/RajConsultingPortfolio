# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Run the Application
```bash
python app.py
```

### 3. Open in Browser
Navigate to: `http://localhost:5000`

## 📋 What Happens on First Run?

1. **Model Downloads** (automatic, ~2GB total):
   - SmolLM-135M-Instruct (~500MB)
   - all-MiniLM-L6-v2 embedding model (~90MB)
   - These are cached and won't re-download

2. **Data Indexing**:
   - Loads `finetuneddata.json`
   - Creates embeddings for all Q&A pairs
   - Stores in ChromaDB (auto-created in `chroma_db/`)

3. **Server Starts**:
   - Flask server runs on port 5000
   - Web interface is ready

## 🎯 Test Questions

Try these to verify it's working:

- "Who is Rajiv Giri?"
- "What are Rajiv's skills?"
- "Tell me about his projects"
- "What is his educational background?"
- "What certifications does he have?"

## ⚙️ Configuration

Edit `app.py` to customize:

- **Port**: Change `port=5000` in the last line
- **Host**: Change `host='0.0.0.0'` (use `'127.0.0.1'` for local only)
- **Response length**: Adjust `max_new_tokens=200`
- **Temperature**: Adjust `temperature=0.1` (lower = more deterministic)

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Find what's using port 5000
lsof -i :5000
# Or change port in app.py
```

**Models not downloading?**
- Check internet connection
- Verify you have ~2GB free disk space
- Check HuggingFace access (models are public)

**Out of memory?**
- Close other applications
- Reduce `max_new_tokens` in `generate_answer()`
- Use CPU: Set `DEVICE = torch.device("cpu")` in app.py

**Slow responses?**
- First run is slower (model loading)
- Subsequent requests are faster
- Consider using GPU if available

## 📁 Project Structure

```
tinylmchat/
├── app.py              # Main Flask application
├── rag_chroma_chatbot.py  # CLI version
├── finetuneddata.json  # Portfolio Q&A data
├── requirements.txt    # Dependencies
├── templates/
│   └── index.html      # Web UI
└── chroma_db/          # Vector DB (auto-created)
```

## 🔒 Security Notes

- The app runs on `0.0.0.0` by default (accessible from network)
- For local-only access, change to `host='127.0.0.1'`
- No authentication is implemented (add if needed for production)

## 📊 File Sizes

- Code files: < 10KB each
- Data file: ~42KB
- **Total repository: < 100MB** ✅
- Models: Excluded from git (downloaded on first run)

## 🎨 Customization

### Change the UI Theme

Edit `templates/index.html`:
- Colors: Change gradient colors in CSS
- Fonts: Modify `font-family` in styles
- Layout: Adjust container sizes

### Add More Data

1. Edit `finetuneddata.json`
2. Add new Q&A entries in the same format
3. Restart the app (it will re-index)

## 📞 Support

For issues or questions, check:
1. `README.md` - Full documentation
2. `DEPLOYMENT.md` - Deployment guide
3. Error messages in terminal

---

**Ready to deploy?** See `DEPLOYMENT.md` for production setup!

