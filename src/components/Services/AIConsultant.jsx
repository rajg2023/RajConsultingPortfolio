import React from 'react';
import { Brain, Workflow, TrendingUp, Shield } from 'lucide-react';

const AIConsultant = () => (
  <div className="space-y-8">
    {/* Intro */}
    <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">AI & LLM Project Consulting</h2>
      <p className="text-gray-700 leading-relaxed">
        Artificial Intelligence is reshaping business and development workflows. 
        I’m actively studying AI fundamentals, machine learning, and large language models 
        (LLMs), and I apply this growing knowledge to help clients build intelligent, 
        ethical, and secure AI solutions responsibly.
      </p>
    </div>

    {/* Understanding AI & LLMs */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Understanding Modern AI and LLMs</h3>
      <p className="text-gray-700 mb-4">
        I understand how LLMs like GPT, Claude, and Gemini process natural language through 
        probability-based reasoning, transformer networks, and retrieval-augmented generation (RAG).
        My learning emphasizes responsible use — from data handling to output alignment.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Prompt engineering and structured context design</li>
        <li>Understanding embeddings, vector databases, and RAG workflows</li>
        <li>Integrating API-based AI models safely and efficiently</li>
        <li>Bias mitigation and privacy-aware AI development</li>
      </ul>
    </div>

    {/* Safe Integration Workflow */}
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 p-8 rounded-2xl">
      <Workflow className="text-indigo-600 mb-3" size={26} />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Collaborative AI Project Workflow</h3>
      <p className="text-gray-700">
        Ideation → Data Review → Model Selection / API Integration → Testing & Fine-tuning → 
        Validation and safe deployment.  
        Every step centers around transparency, safety, and accountability to the client.
      </p>
    </div>

    {/* Trust & Learning */}
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Focused on Ethical AI Learning</h3>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
        While I’m still growing my hands-on AI development experience, I stay up to date with 
        responsible AI practices. I prioritize safe deployment and transparency — ensuring 
        that AI assists business goals without compromising user trust or data privacy.
      </p>
      <div className="flex justify-center items-center mt-4 text-indigo-700">
        <Shield size={22} className="mr-2" />
        <span className="text-sm font-medium">
          Trusted AI collaboration built on learning, transparency, and safety.
        </span>
      </div>
      <div className="flex justify-center items-center mt-3 text-indigo-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">
          Continuously learning to help clients innovate responsibly.
        </span>
      </div>
    </div>
  </div>
);

export default AIConsultant;
