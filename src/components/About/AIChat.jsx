import React, { useState, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Raj's AI assistant ViRe. Ask me anything about his experience, skills, or projects!",
      displayText: "Hi! I'm Raj's AI assistant ViRe. Ask me anything about his experience, skills, or projects!",
      sender: 'ai',
      isTyping: false
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Function to simulate typing effect
  const typeText = (text, messageId) => {
    let i = 0;
    const speed = 20; // Adjust typing speed (lower = faster)

    const type = () => {
      if (i < text.length) {
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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    // Add user message to chat
    const userMessage = {
      id: Date.now(),
      text: inputText,
      displayText: inputText,
      sender: 'user',
      isTyping: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Generate a unique ID for the bot's response
    const botMessageId = Date.now() + 1;

    // Add the bot's message with empty displayText
    setMessages(prev => [
      ...prev,
      {
        id: botMessageId,
        text: '', // This will store the full response
        displayText: '', // This will be updated during typing
        sender: 'ai',
        isTyping: true
      }
    ]);

    try {
      const response = await fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputText })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      // Update the message with the response text
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessageId
            ? { ...msg, text: data.response, isTyping: true }
            : msg
        )
      );

      // Start typing effect
      typeText(data.response, botMessageId);

    } catch (error) {
      console.error('Error:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessageId
            ? {
              ...msg,
              text: `Error: ${error.message}`,
              displayText: `Error: ${error.message}`,
              isTyping: false
            }
            : msg
        )
      );
      setIsTyping(false);
    }
  };

  return (
    <div className="p-8 w-full">
      <div className="max-w-6xl mx-auto">
        {/* <div className="flex items-center mb-6">
          <Bot className="text-blue-600 mr-3" size={32} />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">AI Chat Assistant</h2>
            <p className="text-gray-600">Ask me anything about Raj's professional background</p>
          </div>
        </div> */}
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
                <p><strong>Important Notice:</strong> The information provided by this AI assistant is for general informational purposes only and may not be 100% accurate or up-to-date.</p>
                <p>🔒 <strong>Privacy Notice:</strong> Please do not share any personal, sensitive, or confidential information in this chat. This is an AI assistant and not a secure communication channel.</p>
                <p>For the most current and accurate information, or for specific inquiries, please contact me directly through official channels.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-full">
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
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
                        message.displayText || message.text
                      )}
                    </div>
                    {message.sender === 'user' && (
                      <div className="bg-gray-200 p-2 rounded-full ml-3">
                        <User size={20} className="text-gray-600" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Raj's experience..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                disabled={isTyping}
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

      </div>
    </div>
  );
};

export default AIChat;