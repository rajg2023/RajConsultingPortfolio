export class SimpleChatbot {
  constructor(knowledgeBase) {
    this.knowledgeBase = knowledgeBase.reduce((acc, item) => {
      const key = item.instruction.toLowerCase().replace(/\?/g, '').trim();
      acc[key] = item.output;
        return acc;
    }, {});
    this.knowledgeBase._originalData = knowledgeBase; // Store original data for reference
    }

   
// Add this method to the SimpleChatbot class
getRandomQuestions(count = 5) {
  try {
    // Get all unique instructions from knowledge base
    const allQuestions = [...new Set(
      this.knowledgeBase._originalData
        .map(item => String(item.instruction || '').trim())
        .filter(Boolean)
    )];

    // Remove the current question if it exists
    const currentQuestions = new Set();
    
    // Shuffle and get unique questions
    const shuffled = [...allQuestions]
      .sort(() => 0.5 - Math.random())
      .filter(question => {
        if (currentQuestions.has(question)) return false;
        currentQuestions.add(question);
        return true;
      })
      .slice(0, count);

    // If we don't have enough questions, add some defaults
    if (shuffled.length < count) {
      const defaults = [
        "What are Rajiv's technical skills?",
        "What projects has Rajiv worked on?",
        "Tell me about Rajiv's work experience",
        "What is Rajiv's educational background?",
        "How can I contact Rajiv?"
      ].filter(q => !currentQuestions.has(q));
      
      return [...shuffled, ...defaults].slice(0, count);
    }

    return shuffled;
  } catch (error) {
    console.error("Error getting random questions:", error);
    return [
      "What are Rajiv's technical skills?",
      "What projects has Rajiv worked on?",
      "Tell me about Rajiv's work experience",
      "What is Rajiv's educational background?",
      "How can I contact Rajiv?"
    ].slice(0, count);
  }
}

    generateDynamicSuggestions(conversationHistory) {
        try {

            if (!conversationHistory || conversationHistory.length === 0) {
                return this.getRandomQuestions(5);
            }
            const allMessages = Array.isArray(conversationHistory)
                ? conversationHistory.join(' ').toLowerCase()
                : '';
                 // If the conversation is just starting, return random questions
            if (allMessages.trim().length === 0) {
                return this.getRandomQuestions(5);
            }


            const suggestionCategories = {
                "skills": ["skill", "technical", "programming", "language", "expertise", "capability"],
                "projects": ["projects", "work", "portfolio", "experience", "built", "worked on"],
                "background": ["who is", "about", "background", "describe"],
                "experience": ["experience", "worked", "job", "role", "position"],
                "education": ["education", "degree", "school", "university", "certification"],
                "pricing": ["rate", "price", "cost", "charge", "pricing"],
                "availability": ["available", "availability", "hours"],
                "contact": ["contact", "phone", "email", "reach", "number", "call", "get in touch"]
            };

            // Count keyword matches
            const categoryScores = Object.entries(suggestionCategories).map(([category, keywords]) => {
                const score = keywords.reduce((count, keyword) =>
                    count + (allMessages.includes(keyword) ? 1 : 0), 0);
                return { category, score };
            });

      // Sort and get top 5
      const topCategories = categoryScores
        .sort((a, b) => b.score - a.score)
        .filter(item => item.score > 0)
        .slice(0, 5);

      // Default suggestions
      if (topCategories.length === 0) {
        return [
          "What are Rajiv's technical skills?",
          "What projects has Rajiv worked on?",
          "Tell me about Rajiv's work experience",
          "How can I contact Rajiv?",
          "What is Rajiv's educational background?"
        ];
      }

      // Map to questions
      const questions = {
        "skills": "What are Rajiv's technical skills?",
        "projects": "What projects has Rajiv worked on?",
        "experience": "Tell me about Rajiv's work experience",
        "education": "What is Rajiv's educational background?",
        "contact": "How can I contact Rajiv?"
      };

      return topCategories
        .map(item => questions[item.category])
        .filter(Boolean)
        .slice(0, 5);

    } catch (error) {
      console.error("Error in generateDynamicSuggestions:", error);
      return this.getRandomQuestions(5); // Fallback to random questions
    }
  }

  findBestMatch(question) {
    try {
      if (!question) return "I didn't catch that. Could you please rephrase your question?";
      
      const questionLower = question.toLowerCase().trim();
      const greetings = ["hi", "hello", "hey", "good morning", "good evening", "greetings"];
      
      // Handle greetings
      if (greetings.some(greeting => questionLower.includes(greeting)) && 
          questionLower.split(" ").length <= 5) {
        return this.knowledgeBase["hello"] || 
               "Hello! How can I assist you today? Ask me about Rajiv's background, skills, projects, education, or experience.";
      }

      // Direct match
      for (const [key, value] of Object.entries(this.knowledgeBase)) {
        if (questionLower.includes(key.toLowerCase())) {
          return value;
        }
      }

      // Fallback response
      return "I'm not sure about that. Could you try asking about Rajiv's skills, projects, or experience?";
      
    } catch (error) {
      console.error("Error in findBestMatch:", error);
      return "I'm sorry, I encountered an error processing your request. Please try again.";
    }
  }

  async getResponse(question) {
    return new Promise((resolve) => {
      try {
        const response = this.findBestMatch(question);
        resolve(response || "I'm not sure how to respond to that. Could you try rephrasing?");
      } catch (error) {
        console.error("Error in getResponse:", error);
        resolve("I'm sorry, I encountered an error. Please try again.");
      }
    });
  }
}