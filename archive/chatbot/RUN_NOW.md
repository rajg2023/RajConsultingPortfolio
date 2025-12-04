# 🚀 Run the App Now!

## ✅ Dependencies are Already Installed!

Your virtual environment is set up and all dependencies are installed. Here's how to run:

## Quick Start (2 Commands)


```bash
# 1. Add and activate virtual environment
python -m venv venv  

source venv/bin/activate

# 2. Run the app
python app.py
```

Then open: **http://localhost:5000**

---

## Or Use the Startup Script

```bash
./start.sh
```

This will automatically:
- Activate the virtual environment
- Start the Flask server
- Show you the URL

---

## What Happens Next?

### First Run (2-5 minutes):
1. Downloads SmolLM-135M-Instruct model (~500MB)
2. Downloads embedding model (~90MB)  
3. Indexes your portfolio data
4. Starts web server

### You'll See:
```
==================================================
Initializing Portfolio Chatbot...
==================================================
[INFO] Initializing embedding model...
[INFO] Loading LLM and tokenizer...
[INFO] Indexed 50 chunks.
[INFO] Chatbot ready!
==================================================
Starting web server...
==================================================
 * Running on http://0.0.0.0:5000
```

### Then:
- Open browser to `http://localhost:5000`
- Start chatting!

---

## Test Questions

Try these:
- "Who is Rajiv Giri?"
- "What are Rajiv's skills?"
- "Tell me about his projects"
- "Hello"

---

## Troubleshooting

### "Command not found: python"
Use `python3` instead:
```bash
python3 app.py
```

### Port 5000 in use?
Change port in `app.py` line 219:
```python
app.run(host='0.0.0.0', port=8080, debug=False)
```

### Need to deactivate venv later?
```bash
deactivate
```

---

**Ready? Run these commands now:**

```bash
source venv/bin/activate
python app.py
```

