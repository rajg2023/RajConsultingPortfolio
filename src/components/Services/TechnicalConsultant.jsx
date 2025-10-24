import React from 'react';
import { Terminal, Workflow, TrendingUp, Code, Cloud, Cpu, FileText, Zap, Server, GitMerge, CpuIcon, BarChart3 } from 'lucide-react';

const TechnicalConsultant = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-8 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Terminal className="text-red-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Technical Consultant</h1>
        <p className="text-gray-700 text-lg">
          Guiding organizations through technology decisions with strategic insight and technical expertise.
        </p>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Code className="text-red-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Strategy</h3>
        <p className="text-gray-600">
          Developing comprehensive technology roadmaps aligned with business objectives and industry best practices.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Architecture', 'Cloud Strategy', 'Digital Transformation', 'Tech Stacks'].map((item, i) => (
            <span key={i} className="bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Cloud className="text-red-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud & Infrastructure</h3>
        <p className="text-gray-600">
          Designing and optimizing cloud-native solutions for scalability, security, and cost-efficiency.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['AWS', 'Azure', 'GCP', 'Kubernetes'].map((item, i) => (
            <span key={i} className="bg-red-50 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Consulting Framework */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-red-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">Consulting Framework</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <FileText size={20} className="text-red-600" />,
            title: 'Needs Assessment',
            desc: 'Understanding business challenges and technical requirements through stakeholder interviews.'
          },
          { 
            icon: <Cpu size={20} className="text-red-600" />,
            title: 'Solution Design',
            desc: 'Creating tailored technical architectures and implementation plans.'
          },
          { 
            icon: <GitMerge size={20} className="text-red-600" />,
            title: 'Implementation',
            desc: 'Guiding development teams through the execution of technical solutions.'
          },
          { 
            icon: <Server size={20} className="text-red-600" />,
            title: 'Infrastructure',
            desc: 'Designing and optimizing cloud and on-premises infrastructure.'
          },
          { 
            icon: <BarChart3 size={20} className="text-red-600" />,
            title: 'Performance',
            desc: 'Conducting system audits and performance optimization.'
          },
          { 
            icon: <Zap size={20} className="text-red-600" />,
            title: 'Optimization',
            desc: 'Continuously improving systems for efficiency and cost-effectiveness.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-red-50 p-2 rounded-lg mr-3">
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
    <div className="bg-gradient-to-r from-red-50 to-rose-50 p-8 border border-red-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Approach to Technical Consulting</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          I believe in a collaborative, transparent approach to technical consulting. By combining deep technical 
          expertise with strong business acumen, I help organizations navigate complex technology decisions. 
          My focus is on delivering practical, scalable solutions that align with both current needs and future growth, 
          while maintaining clear communication and measurable results.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-red-700 bg-red-100 px-4 py-2 rounded-full">
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium">Bridging technology and business strategy</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TechnicalConsultant;
