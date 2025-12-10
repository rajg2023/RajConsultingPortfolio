import React from 'react';
import { Terminal, Workflow, Zap, Server, GitMerge, FileText, Database, Code, Shield, Clock, Activity, Settings } from 'lucide-react';

const TechnicalConsultantImplementation = () => (
  <div className="space-y-8">
    {/* Hero Section: Focused on Implementation (Added 'relative' class here) */}
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 w-full">
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 me-1.5 bg-yellow-500 rounded-full"></span>
          Learning in Progress
        </span>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Server className="text-blue-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Technical Consultant : System Implementation</h1>
        <p className="text-gray-700 text-lg">
          Executing reliable deployment, configuration, and integration of new technology solutions to ensure seamless operation and project success.
        </p>
         <div className="text-sm text-gray-600 bg-white/50 rounded-lg p-3 max-w-2xl mx-auto">
          <p> 🚀 <span className="font-medium">Transparency Note:</span> I'm currently expanding my expertise in this area. I bring strong technical skills and a passion for problem-solving, and I'm excited to apply these while growing my System Implementation toolkit. I'll be transparent about my experience level as we collaborate on solutions.</p>
        </div>
      </div>
    </div>

    {/* Core Service Offerings: Implementation Focus */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <GitMerge className="text-blue-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment & Release Management</h3>
        <p className="text-gray-600">
          Managing the execution of deployment plans and providing critical go-live support ("hypercare").
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Go-Live Support', 'Release Coordination', 'Version Control', 'Deployment Planning'].map((item, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Settings className="text-blue-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuration & Integration Support</h3>
        <p className="text-gray-600">
          Ensuring all system components are correctly configured and integrated within the existing tech stack.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Configuration Mgmt', 'Integration Support', 'API Connectivity', 'SQL Database Setup'].map((item, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Implementation Workflow */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-blue-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">Implementation Workflow</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <FileText size={20} className="text-blue-600" />,
            title: 'Requirements Validation',
            desc: 'Reviewing functional specs to ensure alignment during execution.'
          },
          { 
            icon: <Code size={20} className="text-blue-600" />,
            title: 'Configuration & Scripting',
            desc: 'Executing necessary configuration and automation scripting (Python/Bash/Java/JS).'
          },
          { 
            icon: <Activity size={20} className="text-blue-600" />,
            title: 'Testing Coordination',
            desc: 'Managing UAT logistics, functional testing, and bug tracking.'
          },
          { 
            icon: <Server size={20} className="text-blue-600" />,
            title: 'Deployment Execution',
            desc: 'Managing technical execution for moving solutions into production environments.'
          },
          { 
            icon: <Database size={20} className="text-blue-600" />,
            title: 'Data Migration Assistance',
            desc: 'Supporting data migration efforts during system switchovers.'
          },
          { 
            icon: <Shield size={20} className="text-blue-600" />,
            title: 'Documentation & Handoff',
            desc: 'Creating "as-built" documentation and leading knowledge transfer to support teams.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-blue-50 p-2 rounded-lg mr-3">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Value Proposition Section */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border border-blue-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Value Proposition</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          By engaging in Implementation-focused Technical Consultant services, you ensure reliable deployments and seamless integration. My versatile expertise spans configuration, coding (Python, Java, JS), and project coordination, ensuring new systems work harmoniously within your environment.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-blue-700 bg-blue-100 px-4 py-2 rounded-full">
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium">Delivering reliable, functional systems efficiently</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechnicalConsultantImplementation;
