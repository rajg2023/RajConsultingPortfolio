import React from 'react';
import { Code, Workflow, Cpu, GitBranch, Zap, Terminal, Code2, GitCommit, BarChart3, ShieldCheck } from 'lucide-react';

const SDET = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Cpu className="text-green-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Software Development Engineer in Test</h1>
        <p className="text-gray-700 text-lg">
          Building robust test automation frameworks and infrastructure to ensure software quality at scale.
        </p>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Terminal className="text-green-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Test Framework Development</h3>
        <p className="text-gray-600">
          Designing and implementing scalable test automation frameworks for web, mobile, and API testing.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Selenium', 'Appium', 'RestAssured', 'JUnit'].map((tool, i) => (
            <span key={i} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <GitBranch className="text-green-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">CI/CD Integration</h3>
        <p className="text-gray-600">
          Seamless integration with CI/CD pipelines for continuous testing and deployment.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['GitHub Actions', 'Jenkins', 'CircleCI', 'Docker'].map((tool, i) => (
            <span key={i} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* SDET Process */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-green-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">SDET Workflow</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[ 
          { 
            icon: <Code2 size={20} className="text-green-600" />,
            title: 'Framework Design',
            desc: 'Architecting maintainable and scalable test automation frameworks.'
          },
          { 
            icon: <Zap size={20} className="text-green-600" />,
            title: 'Test Automation',
            desc: 'Developing reliable automated tests for UI, API, and integration layers.'
          },
          { 
            icon: <GitCommit size={20} className="text-green-600" />,
            title: 'CI/CD Integration',
            desc: 'Embedding automated tests into deployment pipelines.'
          },
          { 
            icon: <BarChart3 size={20} className="text-green-600" />,
            title: 'Performance Testing',
            desc: 'Ensuring system reliability under various load conditions.'
          },
          { 
            icon: <ShieldCheck size={20} className="text-green-600" />,
            title: 'Quality Gates',
            desc: 'Implementing quality checks throughout the development lifecycle.'
          },
          { 
            icon: <Code size={20} className="text-green-600" />,
            title: 'Code Quality',
            desc: 'Maintaining high standards in test code and infrastructure.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-green-50 p-2 rounded-lg mr-3">
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
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border border-green-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Commitment to Quality</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          I'm dedicated to building robust test automation solutions that enable faster releases 
          without compromising quality. By combining software development expertise with testing 
          best practices, I help teams deliver reliable software through continuous testing and 
          quality engineering.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-green-700 bg-green-100 px-4 py-2 rounded-full">
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium">Engineering quality into every release</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SDET;
