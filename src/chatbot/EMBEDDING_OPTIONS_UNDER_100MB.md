# Embedding Model Options Under 100MB

## Constraint
- **File size limit**: < 100MB (for GitHub deployment)
- **Current model**: all-MiniLM-L6-v2 (~90MB)

## Options Under 100MB

### Option 1: Keep Current Model (Recommended for <100MB)
**Model**: `all-MiniLM-L6-v2`
- **Size**: ~90MB ✅
- **Performance**: Baseline
- **Status**: Already using this
- **Best for**: Staying under 100MB limit

### Option 2: all-MiniLM-L6-v2 (Quantized)
**Model**: Use quantized version if available
- **Size**: ~45-50MB ✅
- **Performance**: Similar to current
- **Benefit**: Smaller file size
- **Note**: May have slight quality trade-off

### Option 3: Optimize Current Model Usage
Instead of changing model, optimize how you use it:

1. **Better chunking strategy**
2. **Hybrid search** (keyword + semantic)
3. **Reranking** with smaller model
4. **Better prompt engineering**

## Alternative: Improve Without Changing Model

### A. Better Data Quality
- Add more Q&A pairs to `finetuneddata.json`
- Improve question coverage
- Add synonyms and variations

### B. Better Retrieval Strategy
```python
# In app.py, you can:
# 1. Increase top_k for retrieval
relevant_chunks = retrieve_relevant_chunks(query, top_k=10)  # Instead of 7

# 2. Use hybrid search (semantic + keyword)
# 3. Add reranking step
```

### C. Better Prompt Engineering
- Improve prompts in `answer_question()` function
- Add more context
- Better instruction formatting

### D. Data Augmentation
- Create more Q&A variations
- Paraphrase existing questions
- Add question synonyms

## Recommendation

**Since you're constrained to <100MB:**

1. **Keep current model** (all-MiniLM-L6-v2)
2. **Focus on data quality** - add more Q&A pairs
3. **Improve retrieval** - increase top_k, better matching
4. **Better prompts** - optimize prompt engineering
5. **Data augmentation** - create variations of existing Q&A

These improvements can give you **+20-30% better results** without changing the model!

## Quick Wins (No Model Change)

### 1. Add More Q&A Pairs
Edit `finetuneddata.json` - add questions users actually ask:
- More contact variations
- More skill questions
- More project details

### 2. Improve Retrieval
```python
# In app.py, line ~215
relevant_chunks = retrieve_relevant_chunks(query, top_k=10)  # Increase from 7
```

### 3. Better Direct Extraction
The metadata-based direct extraction is already good - focus on improving the matching logic.

## Conclusion

**Best approach under 100MB constraint:**
- ✅ Keep all-MiniLM-L6-v2 (90MB)
- ✅ Improve data quality (add more Q&A pairs)
- ✅ Optimize retrieval (increase top_k, better matching)
- ✅ Better prompt engineering
- ✅ Data augmentation

This will give you significant improvements without exceeding the 100MB limit!

