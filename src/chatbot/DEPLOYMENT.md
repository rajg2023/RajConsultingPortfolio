# Deployment Guide

## Quick Start

### Option 1: Using the startup script (Recommended)
```bash
./start.sh
```

### Option 2: Manual setup
```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

## Production Deployment

### Using Gunicorn

1. **Install Gunicorn**
   ```bash
   pip install gunicorn
   ```

2. **Run with Gunicorn**
   ```bash
   gunicorn -w 4 -b 0.0.0.0:5000 --timeout 120 app:app
   ```

### Using systemd (Linux)

Create `/etc/systemd/system/portfolio-chatbot.service`:

```ini
[Unit]
Description=Portfolio Chatbot
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/tinylmchat
Environment="PATH=/path/to/tinylmchat/venv/bin"
ExecStart=/path/to/tinylmchat/venv/bin/python app.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Then:
```bash
sudo systemctl enable portfolio-chatbot
sudo systemctl start portfolio-chatbot
```

### Using Docker (Optional)

Create `Dockerfile`:

```dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
```

Build and run:
```bash
docker build -t portfolio-chatbot .
docker run -p 5000:5000 portfolio-chatbot
```

## GitHub Deployment Checklist

- [x] `.gitignore` excludes models and large files
- [x] `requirements.txt` includes all dependencies
- [x] `README.md` has setup instructions
- [x] Code is tested and working
- [ ] Models download successfully on first run
- [ ] ChromaDB initializes correctly
- [ ] Web interface loads and responds

## File Size Verification

Check repository size:
```bash
du -sh .
git ls-files | xargs du -ch | tail -1
```

Ensure it's under 100MB (models excluded via .gitignore).

## Troubleshooting

### Port already in use
```bash
# Find process using port 5000
lsof -i :5000
# Kill it or change port in app.py
```

### Permission errors
```bash
chmod +x start.sh
chmod -R 755 .
```

### Model download issues
- Check internet connection
- Verify HuggingFace access
- Check disk space (need ~2GB)

