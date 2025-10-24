import React from 'react';
import { Headphones, Workflow, TrendingUp, AlertTriangle, Database, RefreshCw, Activity, Terminal, Server, Shield, Clock, Zap, Search } from 'lucide-react';

const ApplicationSupportEngineer = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Headphones className="text-purple-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Support Engineer</h1>
        <p className="text-gray-700 text-lg">
          Ensuring optimal application performance and reliability through proactive monitoring and rapid issue resolution.
        </p>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <AlertTriangle className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Management</h3>
        <p className="text-gray-600">
          Rapid response to production issues with systematic triage and resolution to minimize downtime.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['JIRA', 'ServiceNow', 'PagerDuty', 'SLA Management'].map((item, i) => (
            <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Database className="text-purple-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">System Health</h3>
        <p className="text-gray-600">
          Proactive monitoring and maintenance of application infrastructure and databases.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['New Relic', 'Datadog', 'Splunk', 'Grafana'].map((item, i) => (
            <span key={i} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Support Process */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-purple-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">Support Lifecycle</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <AlertTriangle size={20} className="text-purple-600" />,
            title: 'Incident Detection',
            desc: 'Monitoring systems and responding to alerts to identify potential issues.'
          },
          { 
            icon: <Search size={20} className="text-purple-600" />,
            title: 'Root Cause Analysis',
            desc: 'Investigating and diagnosing the underlying cause of issues.'
          },
          { 
            icon: <Terminal size={20} className="text-purple-600" />,
            title: 'Troubleshooting',
            desc: 'Applying technical knowledge to resolve application issues.'
          },
          { 
            icon: <RefreshCw size={20} className="text-purple-600" />,
            title: 'Resolution & Recovery',
            desc: 'Implementing fixes and restoring normal service operations.'
          },
          { 
            icon: <Shield size={20} className="text-purple-600" />,
            title: 'Prevention',
            desc: 'Documenting solutions and implementing measures to prevent recurrence.'
          },
          { 
            icon: <Activity size={20} className="text-purple-600" />,
            title: 'Performance Monitoring',
            desc: 'Continuous monitoring to ensure system health and performance.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-purple-50 p-2 rounded-lg mr-3">
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
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 border border-purple-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Approach to Application Support</h3>
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

export default ApplicationSupportEngineer;
