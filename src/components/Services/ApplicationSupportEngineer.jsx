import React from 'react';
import { Layers, Activity, TrendingUp, AlertTriangle, Database, Search, Users, Settings, Briefcase, FileText, Zap, Shield, HelpCircle, Code } from 'lucide-react';

const ApplicationAnalyst = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Layers className="text-purple-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Analyst</h1>
        <p className="text-gray-700 text-lg">
          Bridging the gap between your business operations and your technology infrastructure to ensure applications meet user needs and drive business value.
        </p>
      </div>
    </div>

    {/* Core Service Offerings (Matching the text description) */}
    <div className="grid md:grid-cols-2 gap-6">
      {/* 1. Business & Systems Analysis */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Briefcase className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Analysis</h3>
        <p className="text-gray-600">
          We ensure that your applications effectively serve your operational requirements by translating needs into technical solutions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Requirements Gathering', 'Gap Analysis', 'Workflow Optimization'].map((item, i) => (
            <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Technical Support & Problem Management */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <AlertTriangle className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support & Problem Management</h3>
        <p className="text-gray-600">
          Providing high-tier support, diagnosing complex errors, performing RCA, and coordinating with vendors/devs for resolution.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['L2/L3 Support', 'RCA', 'Vendor Liaison', 'SQL Querying'].map((item, i) => (
            <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 3. Configuration Management & Implementation */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Settings className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuration Management & Implementation</h3>
        <p className="text-gray-600">
          Managing system configurations, UAT, deployments, and using technical skills in SQL, Java, Python, and Javascript.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Configuration Mgmt', 'UAT Support', 'Java', 'Python', 'Javascript'].map((item, i) => (
            <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* 4. Documentation & Knowledge Management */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <FileText className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation & Knowledge Management</h3>
        <p className="text-gray-600">
          Creating clear technical documentation, SOPs, and user guides to empower staff and ensure consistency.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Technical Docs', 'SOPs', 'User Training', 'Knowledge Base Mgmt'].map((item, i) => (
            <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Commitment */}
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 border border-purple-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Approach to Application Analysis</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          I believe in a proactive approach to application support, focusing on both rapid issue resolution
          and long-term system stability. My goal is to not just fix problems, but to understand their
          root causes and prevent them from recurring. With strong problem-solving skills and a commitment
          to continuous learning, I ensure systems remain reliable and performant.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-purple-700 bg-purple-100 px-4 py-2 rounded-full">
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium">Ensuring maximum uptime and performance</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ApplicationAnalyst;
