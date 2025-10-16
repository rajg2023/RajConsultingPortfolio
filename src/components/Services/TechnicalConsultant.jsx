import React from 'react';
import { Terminal, Workflow, TrendingUp } from 'lucide-react';

const TechnicalConsultant = () => (
  <div className="space-y-8">
    <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Technical Consulting?</h2>
      <p className="text-gray-700 leading-relaxed">
        Technical Consultants advise organizations on technology solutions that meet strategic goals. 
        They design scalable architectures, optimize processes, and guide modern integrations.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Focus Domains</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>System Architecture Design & API Strategy</li>
        <li>Cloud Adoption (AWS / Azure) and DevOps Practices</li>
        <li>Performance Tuning and Technical Audits</li>
        <li>Technology Modernization and Documentation</li>
      </ul>
    </div>

    <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 p-8 rounded-2xl">
      <Workflow className="text-red-600 mb-3" size={26} />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Consulting Framework</h3>
      <p className="text-gray-700">
        Assess needs → Design recommendations → Collaborate for implementation → Measure impact → 
        Document and optimize processes for efficiency.
      </p>
    </div>

    <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Building Trust Through Transparency</h3>
      <p className="text-gray-700 leading-relaxed">
        I focus on clear, empathetic communication and a willingness to research the best 
        solutions. Even when learning something new, I prioritize honesty and accountability.
      </p>
      <div className="flex justify-center items-center mt-4 text-red-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Committed to guiding with integrity and curiosity.</span>
      </div>
    </div>
  </div>
);

export default TechnicalConsultant;
