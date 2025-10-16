import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

import { FileText, BookOpen, Code as CodeIcon, Database, Cpu } from 'lucide-react';

const AISkills = () => {
  const vantaRef = useRef(null);
  
  const documents = [
    {
      title: 'LLM Prompt Engineering Guide',
      description: 'Best practices for crafting effective prompts for various LLMs',
      icon: FileText,
      link: '/documents/llm-prompt-guide.pdf'
    },
    {
      title: 'RAG Implementation',
      description: 'Guide to implementing Retrieval-Augmented Generation systems',
      icon: BookOpen,
      link: '/documents/rag-implementation.pdf'
    },
    {
      title: 'API Integration',
      description: 'Documentation for integrating with various AI/ML APIs',
      icon: CodeIcon,
      link: '/documents/api-integration.pdf'
    },
    {
      title: 'Vector Database Setup',
      description: 'Guide to setting up and using vector databases',
      icon: Database,
      link: '/documents/vector-db-guide.pdf'
    },
    {
      title: 'Model Fine-tuning',
      description: 'Approaches to fine-tuning pre-trained models',
      icon: Cpu,
      link: '/documents/model-finetuning.pdf'
    },
    {
      title: 'AI Safety & Ethics',
      description: 'Guidelines for responsible AI development',
      icon: FileText,
      link: '/documents/ai-safety-ethics.pdf'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Vanta.js background */}
      <div 
        ref={vantaRef} 
        className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none"
      ></div>
      
      {/* Main content */}
      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI/LLM Documentation</h1>
          <p className="text-lg text-gray-600">A comprehensive overview of AI/LLM resources and documentation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <a 
                key={index} 
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 mr-4">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-indigo-700">
                    {doc.title}
                  </h2>
                </div>
                <p className="mt-3 text-gray-600">{doc.description}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AISkills;