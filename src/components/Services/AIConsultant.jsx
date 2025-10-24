import React from 'react';
import { Brain, Workflow, TrendingUp, Shield, Cpu, Code, Database, Zap, Lock, BarChart3, CpuIcon } from 'lucide-react';

const AIConsultant = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-8 w-full relative">
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 me-1.5 bg-yellow-500 rounded-full"></span>
          Learning in Progress
        </span>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Brain className="text-indigo-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">AI & LLM Consultant</h1>
        <p className="text-gray-700 text-lg mb-4">
          Guiding businesses in leveraging AI and large language models to solve complex problems and drive innovation.
        </p>
        <div className="text-sm text-gray-600 bg-white/50 rounded-lg p-3 max-w-2xl mx-auto">
          <p>🚀 <span className="font-medium">Transparency Note:</span> I'm actively expanding my expertise in AI and LLMs. While I have a solid technical foundation and am deeply passionate about this field, I want to be transparent that I'm continuously learning and growing. I'm excited to collaborate on AI projects while being upfront about my current experience level.</p>
        </div>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Cpu className="text-indigo-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Strategy & Implementation</h3>
        <p className="text-gray-600">
          Developing comprehensive AI strategies and implementing solutions that align with your business objectives.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['LLM Integration', 'Chatbots', 'Automation', 'AI Agents'].map((item, i) => (
            <span key={i} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Lock className="text-indigo-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Responsible AI</h3>
        <p className="text-gray-600">
          Ensuring ethical AI development with a focus on fairness, transparency, and privacy.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Ethics', 'Bias Mitigation', 'Privacy', 'Compliance'].map((item, i) => (
            <span key={i} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* AI Project Workflow */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-indigo-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">AI Project Workflow</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[/* eslint-disable */
          { 
            icon: <Code size={20} className="text-indigo-600" />,
            title: 'Prompt Engineering',
            desc: 'Designing effective prompts to get the most out of LLMs and AI models.'
          },
          { 
            icon: <Database size={20} className="text-indigo-600" />,
            title: 'RAG Systems',
            desc: 'Implementing Retrieval-Augmented Generation for accurate, up-to-date responses.'
          },
          { 
            icon: <CpuIcon size={20} className="text-indigo-600" />,
            title: 'Model Fine-Tuning',
            desc: 'Customizing AI models to better suit specific business needs and domains.'
          },
          { 
            icon: <Shield size={20} className="text-indigo-600" />,
            title: 'AI Safety',
            desc: 'Implementing safeguards to ensure responsible AI deployment.'
          },
          { 
            icon: <BarChart3 size={20} className="text-indigo-600" />,
            title: 'Performance Analysis',
            desc: 'Measuring and optimizing AI system performance and accuracy.'
          },
          { 
            icon: <Zap size={20} className="text-indigo-600" />,
            title: 'Deployment',
            desc: 'Seamlessly integrating AI solutions into existing workflows and systems.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-indigo-50 p-2 rounded-lg mr-3">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Commitment */}
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-8 border border-indigo-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Approach to AI Consulting</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          I believe in a practical, ethical approach to AI that prioritizes real business value and responsible implementation. 
          My focus is on understanding your unique challenges and designing AI solutions that are not just technologically 
          advanced but also aligned with your organizational values and long-term goals. I'm committed to continuous learning 
          in this rapidly evolving field to bring you the most effective and up-to-date AI strategies.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-indigo-700 bg-indigo-100 px-4 py-2 rounded-full">
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium">Empowering businesses with responsible AI solutions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AIConsultant;
