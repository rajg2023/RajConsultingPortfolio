import React from 'react';
import { ClipboardCheck, Workflow, TrendingUp } from 'lucide-react';

const BusinessSystemsAnalyst = () => (
  <div className="space-y-8">
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Business Systems Analysis?</h2>
      <p className="text-gray-700">
        Business Systems Analysts bridge the gap between business needs and technical solutions. 
        They ensure that IT systems align with enterprise goals by translating requirements 
        into actionable specifications for development teams.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Responsibilities</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Requirements elicitation and stakeholder communication</li>
        <li>Process mapping and workflow documentation</li>
        <li>System integration and gap analysis</li>
        <li>UAT planning and business case validation</li>
      </ul>
    </div>

    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-8">
      <Workflow className="text-amber-600 mb-3" size={26} />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Sample Workflow</h3>
      <p className="text-gray-700">
        Define business requirements → collaborate with developers → validate design alignment → 
        support testing and user acceptance → ensure delivery meets objectives.
      </p>
    </div>

    <div className="bg-gradient-to-r from-amber-50 to-yellow-100 border border-yellow-200 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Building Client Confidence</h3>
      <p className="text-gray-700 leading-relaxed">
        While growing experience in systems analysis, I focus on strong communication, critical 
        thinking, and adaptability — ensuring I learn every client’s environment and business flow 
        to deliver results that make a difference.
      </p>
      <div className="flex justify-center items-center mt-4 text-amber-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Eager to learn, analyze, and improve your systems.</span>
      </div>
    </div>
  </div>
);

export default BusinessSystemsAnalyst;
