# GPU Compatibility Fix

## Problem
Your GPU (NVIDIA GeForce GTX 950M) has CUDA capability 5.0, but the current PyTorch installation requires CUDA capability 7.0 or higher. This causes the error:
```
CUDA error: no kernel image is available for execution on the device
```

## Solution Applied
✅ **Forced CPU usage** - The code now explicitly uses CPU instead of trying to use the incompatible GPU.

## Changes Made
1. `app.py` - Set `DEVICE = torch.device("cpu")`
2. `app.py` - Added `device="cpu"` to SentenceTransformer initialization
3. `rag_chroma_chatbot.py` - Same fixes applied

## Performance Note
- CPU will be slower than GPU, but it will work
- For 56 text blocks, embedding generation will take ~30-60 seconds on CPU
- Model inference will be slower but still functional

## If You Want to Use GPU Later
You would need to:
1. Install an older PyTorch version compatible with CUDA 5.0 (not recommended)
2. Or upgrade to a newer GPU with CUDA capability 7.0+

For now, CPU mode is the best solution.

## Run Again
```bash
source venv/bin/activate
python app.py
```

It should now work on CPU without GPU errors!

