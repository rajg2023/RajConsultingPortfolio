import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Raj's AI assistant ViRe. Ask me anything about his experience, skills, or projects!",
      sender: 'ai'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: "Thanks for your question! Raj has extensive experience in that area. Would you like me to provide more specific details?",
          sender: 'ai'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
      
      setInputText('');
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <Bot className="text-blue-600 mr-3" size={32} />
          <div>
            <h2 className="text-3xl font-bold text-gray-900">AI Chat Assistant</h2>
            <p className="text-gray-600">Ask me anything about Raj's professional background</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md`}>
                  {message.sender === 'ai' && (
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Bot size={20} className="text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  {message.sender === 'user' && (
                    <div className="bg-gray-200 p-2 rounded-full">
                      <User size={20} className="text-gray-600" />
                    </div>
                  )}
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
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
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
