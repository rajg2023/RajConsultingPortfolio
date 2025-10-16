import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { FileText, BookOpen, Code as CodeIcon, Database, Cpu, ExternalLink, Info } from 'lucide-react';

const AISkills = () => {
  const vantaRef = useRef(null);

  // AI/LLM Platforms
  const aiPlatforms = [
    {
      name: 'OpenAI Models',
      description: 'Advanced AI models including GPT-4, DALL-E, and Whisper for text generation, image creation, and speech recognition.',
      useCase: 'Content generation, code completion, language translation, and more.',

    },
    {
      name: 'ChatGPT',
      description: 'Conversational AI assistant based on GPT architecture, capable of natural language understanding and generation.',
      useCase: 'Customer support, content creation, brainstorming, and programming assistance.',

    },
    {
      name: 'Hugging Face',
      description: 'Open-source hub with thousands of pre-trained models for NLP, computer vision, and more.',
      useCase: 'Model hosting, fine-tuning, and deployment for various AI tasks.',
      
    },

    {
      name: 'Google Gemini',
      description: 'Multimodal AI model that can understand and generate text, code, and other types of content.',
      useCase: 'Complex reasoning, code generation, and multimodal tasks.',

    },
    {
      name: 'GitHub Copilot',
      description: 'AI pair programmer that helps write code faster with whole line or function suggestions.',
      useCase: 'Code completion, documentation, and learning new programming languages.',

    },
    {
      name: 'Perplexity AI',
      description: 'AI-powered search engine that provides comprehensive, well-cited answers to complex questions.',
      useCase: 'Research, fact-checking, and in-depth information gathering.',

    },
    {
    name: 'Meta LLaMA',
    description: 'Collection of large language models by Meta, available in various sizes for different computational needs.',
    useCase: 'Research, experimentation, and applications requiring open-weight models.',
    
    },
    {
      name: 'Claude AI',
      description: 'AI assistant focused on helpful, harmless, and honest interactions with strong reasoning capabilities.',
      useCase: 'Content analysis, summarization, and ethical AI applications.',

    }
  ];

  // Documentation Resources
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
  // Documentation Note Component
  const DocumentationNote = () => (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
      <div className="flex">
        <div className="flex-shrink-0">
          <Info className="h-5 w-5 text-blue-400" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-blue-700">
            <strong>Note:</strong> The documentation for AI models and frameworks is frequently updated.
            Please refer to each model's official documentation for the most current information.
            Always refer to the latest documentation. If you have any questions
            about specific implementations or need assistance with a particular model, feel free to reach out.
          </p>
        </div>
      </div>
    </div>
  );

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI/LLM Expertise</h1>
          <p className="text-lg text-gray-600">Comprehensive resources and documentation for AI and Large Language Models</p>
        </div>

        {/* AI/LLM Platforms Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">AI/LLM Platforms & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiPlatforms.map((platform, index) => (
              <a
                key={index}

                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2 group-hover:text-indigo-800">
                  {platform.name}

                </h3>
                <p className="text-gray-600 mb-3">{platform.description}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Use cases:</span> {platform.useCase}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Documentation Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Documentation & Resources</h2>
          <DocumentationNote />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <a
                  key={index}

                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                >
                  <div className="flex items-center">
                    <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-4 group-hover:bg-indigo-200 transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 group-hover:text-indigo-700">
                      {doc.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-gray-600">{doc.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISkills;