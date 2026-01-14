import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Bot, User, Info } from 'lucide-react';
import { SimpleChatbot } from '../../utils/chatbotLogic';
import knowledgeBase from '../../utils/finetuneddata.json'; // Your Q&A data

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Raj's chatbot assistant ViRe.I am NOT an AI assistant yet. Ask me anything about his experience, skills, or projects!",
      displayText: "Hi! I'm Raj's chatbot assistant ViRe. I am NOT an AI assistant yet. Ask me anything about his experience, skills, or projects!",
      sender: 'ai',
      isTyping: false
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
   const [suggestions, setSuggestions] = useState([]);  // Add this line
  const messagesEndRef = useRef(null);
  const chatbot = new SimpleChatbot(knowledgeBase);
  const messagesContainerRef = useRef(null);
   // Initialize suggestions
  useEffect(() => {
    setSuggestions(chatbot.getRandomQuestions(5));
  }, []);

   // Handle scroll to bottom
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };
  // Add this function near the top of your component, after the state declarations
const updateSuggestions = useCallback(() => {
  try {
    const recentMessages = messages
      .filter(msg => msg.sender === 'user')
      .slice(-3)
      .map(msg => msg.text);

    if (recentMessages.length === 0) {
      const randomSuggestions = chatbot.getRandomQuestions(5);
      setSuggestions(randomSuggestions);
      return;
    }

    const contextBased = chatbot.generateDynamicSuggestions(recentMessages);
    const newSuggestions = [...new Set([
      ...contextBased,
      ...chatbot.getRandomQuestions(5)
    ])].slice(0, 5);

    setSuggestions(newSuggestions.length >= 3 ? newSuggestions : chatbot.getRandomQuestions(5));
  } catch (error) {
    console.error("Error updating suggestions:", error);
    setSuggestions(chatbot.getRandomQuestions(5));
  }
}, [messages]);

 
    // Add this new useEffect hook right after your other hooks
    useEffect(() => {
      
      // Update suggestions when messages change, but not too frequently
      const timer = setTimeout(updateSuggestions, 300);
      return () => clearTimeout(timer);
    }, [updateSuggestions]);



  // Function to simulate typing effect
  const typeText = (text, messageId) => {
    // Ensure text is a string
    const textStr = String(text || '');
    let i = 0;
    const speed = 20; // Adjust typing speed (lower = faster)

    const type = () => {
      if (i < textStr.length) {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === messageId
              ? { ...msg, displayText: text.substring(0, i + 1) }
              : msg
          )
        );
        i++;
        setTimeout(type, speed);
      } else {
        setMessages(prev =>
          prev.map(msg =>
            msg.id === messageId
              ? { ...msg, isTyping: false }
              : msg
          )
        );
        setIsTyping(false);
      }
    };

    type();
  };

  // Add this function inside your AIChat component
  const getSuggestions = (currentMessage) => {
    const commonQuestions = [
      "Who is Rajiv Giri?",
      "What are Rajiv's technical skills?",
      "What projects has Rajiv worked on?",
      "What is Rajiv's educational background?",
      "How can I contact Rajiv?"
    ];

    // Filter out the current question if it's in the suggestions
    return commonQuestions.filter(q =>
      !currentMessage || !currentMessage.toLowerCase().includes(q.toLowerCase())
    ).slice(0, 3); // Show max 3 suggestions
  };

  const handleSendMessage = async (e) => {
     e.preventDefault();
  if (!inputText.trim() || isTyping) return;

  const userMessage = {
    id: Date.now(),
    text: inputText,
    sender: 'user',
    displayText: inputText,
    isTyping: false
  };

  setMessages(prev => [...prev, userMessage]);
  setInputText('');
  setIsTyping(true);

  try {
    // Get bot response
    const response = await chatbot.getResponse(inputText);
    
    // Add bot's typing indicator
    const botMessage = {
      id: Date.now() + 1,
      text: response,
      sender: 'ai',
      displayText: '',
      isTyping: true
    };

    setMessages(prev => [...prev, botMessage]);
    await typeText(response, botMessage.id);
    updateSuggestions(); // Update suggestions after bot responds
    
    /* // Update suggestions after a short delay
    setTimeout(() => {
      const recentMessages = [inputText];
      const contextBased = chatbot.generateDynamicSuggestions(recentMessages);
      const newSuggestions = [...new Set([
        ...contextBased,
        ...chatbot.getRandomQuestions(5)
      ])].slice(0, 5);
      
      setSuggestions(newSuggestions.length >= 3 ? newSuggestions : chatbot.getRandomQuestions(5));
    }, 500);

    // Simulate typing effect
    await typeText(response, botMessage.id); */

  } catch (error) {
    console.error('Error getting response:', error);
    // Add error message
    const errorMessage = {
      id: Date.now() + 1,
      text: "I'm sorry, I encountered an error. Please try again.",
      sender: 'ai',
      displayText: "I'm sorry, I encountered an error. Please try again.",
      isTyping: false
    };
    setMessages(prev => [...prev, errorMessage]);
  } finally {
    setIsTyping(false);
  }
  };
  // Add this function to handle suggestion clicks
  const handleSuggestionClick = async (suggestion) => {
    setInputText(suggestion);
    // Trigger send automatically
    const fakeEvent = { preventDefault: () => { } };
    await handleSendMessage(fakeEvent);
  };

  const getDynamicSuggestions = useCallback(() => {
    return suggestions;
  }, [suggestions]);

  return (
    <div className="p-8 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Update Notice Banner */}
        <div className="max-w-2x2 mx-auto bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md shadow-sm mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-sm text-yellow-700 space-y-1">
                <p><strong>Important Notice:</strong> This is a ChatBot and NOT an AI assistant.The ChatBot is currently being updated and is also under training and information provided by this chatbot assistant is for general informational purposes only and may not be 100% accurate or up-to-date.For the most current and accurate information, or for specific inquiries, please contact me directly through official channels.</p>
                <p><strong>Privacy Notice:</strong> Please do not share any personal, sensitive, or confidential information in this chat. This is a chatbot assistant and not a secure communication channel.</p>

              </div>
            </div>
          </div>
        </div>


        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
          <div ref={messagesContainerRef}
            className="h-[500px] overflow-y-auto"
            style={{
              scrollBehavior: 'smooth',
              display: 'flex',
              flexDirection: 'column-reverse'
            }}>
            <div className="p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  
                  <div className="max-w-4xl w-full">
                    <div className={`flex items-start ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                      {message.sender === 'ai' && (
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <Bot size={20} className="text-blue-600" />
                        </div>
                      )}
                      <div
                        className={`px-4 py-2 rounded-lg ${message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                          }`}
                          
                      >
                        
                        {message.isTyping && message.displayText === '' ? (
                          <span className="inline-block w-2 h-4 bg-gray-400 animate-pulse"></span>
                        ) : (
                          <div className="whitespace-pre-wrap">
                            {message.displayText || message.text}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggestions section */}
          <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
            <div className="text-sm font-medium text-gray-500 mb-2">You might want to ask:</div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="text-xs bg-white hover:bg-gray-100 text-blue-600 border border-blue-200 px-3 py-1.5 rounded-full transition-colors shadow-sm"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input form */}
          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Typing is currently disabled and will be enabled upon the integration of AI models. Please select the preset questions. Thanks!"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={true}
                
              />
              <button
                type="submit"
                className={`px-4 py-2 rounded-lg transition-colors ${isTyping || !inputText.trim()
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                disabled={isTyping || !inputText.trim()}
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        <br></br>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      <strong>Note:</strong> Typing is currently disabled and will be enabled upon the integration of AI models. Once integrated with AI models the chat function will be available. Please select the preset questions from above to generate the answers or reach out to me for more information. Thanks!
                    </p>
                  </div>
                </div>
              </div>
      </div>
    </div>
  );
};

export default AIChat;