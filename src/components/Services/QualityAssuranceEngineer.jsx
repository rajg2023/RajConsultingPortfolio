import React from 'react';
import { CheckCircle, Workflow, Code, TrendingUp, ShieldCheck, Zap, Layers, Target, ClipboardCheck, AlertCircle } from 'lucide-react';

const QualityAssuranceEngineer = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <ClipboardCheck className="text-blue-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">QA Engineer</h1>
        <p className="text-gray-700 text-lg">
          Ensuring software quality through comprehensive testing methodologies and attention to detail.
        </p>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Zap className="text-blue-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Automation</h3>
        <p className="text-gray-600">
          Implementing robust test automation frameworks to accelerate testing cycles and improve coverage.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Selenium', 'JUnit', 'TestNG', 'Appium'].map((tool, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Layers className="text-blue-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Management</h3>
        <p className="text-gray-600">
          Comprehensive test planning, case design, and execution strategies for complete coverage.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['TestRail', 'JIRA', 'Zephyr', 'QTP'].map((tool, i) => (
            <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* STLC Process */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-blue-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">Software Testing Lifecycle (STLC)</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <Target size={20} className="text-blue-600" />,
            title: 'Requirement Analysis',
            desc: 'Thorough review of business and technical requirements to ensure testability.'
          },
          { 
            icon: <ClipboardCheck size={20} className="text-blue-600" />,
            title: 'Test Planning',
            desc: 'Comprehensive test strategy and resource planning for optimal coverage.'
          },
          { 
            icon: <Code size={20} className="text-blue-600" />,
            title: 'Test Design',
            desc: 'Creation of detailed test cases and automation scripts.'
          },
          { 
            icon: <Zap size={20} className="text-blue-600" />,
            title: 'Test Execution',
            desc: 'Rigorous testing across multiple environments and platforms.'
          },
          { 
            icon: <AlertCircle size={20} className="text-blue-600" />,
            title: 'Defect Management',
            desc: 'Comprehensive tracking and resolution of identified issues.'
          },
          { 
            icon: <CheckCircle size={20} className="text-blue-600" />,
            title: 'Closure',
            desc: 'Final evaluation and test summary reporting.'
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

    {/* Trust Section */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Work With Me?</h3>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Even though I’m still building my experience, I’m deeply committed to continuous learning 
        and applying best practices. I take every project as a chance to prove reliability and 
        attention to detail through disciplined, well‑structured testing processes.
      </p>
      <div className="flex items-center justify-center mt-4 text-amber-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Driven to deliver dependable results and earn your trust</span>
      </div>
    </div>
  </div>
);

export default QualityAssuranceEngineer;
