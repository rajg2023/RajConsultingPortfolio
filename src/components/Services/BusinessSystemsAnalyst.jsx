import React from 'react';
import { ClipboardCheck, Workflow, TrendingUp, Layers, GitMerge, Users, FileText, BarChart2, MessageSquare, Target, LayoutGrid } from 'lucide-react';

const BusinessSystemsAnalyst = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 w-full relative">
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
          <span className="w-2 h-2 me-1.5 bg-yellow-500 rounded-full"></span>
          Learning in Progress
        </span>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <LayoutGrid className="text-purple-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Business Systems Analyst</h1>
        <p className="text-gray-700 text-lg mb-4">
          Bridging the gap between business needs and technical solutions through comprehensive analysis and strategic planning.
        </p>
        <div className="text-sm text-gray-600 bg-white/50 rounded-lg p-3 max-w-2xl mx-auto">
          <p> <span className="font-medium">Transparency Note:</span> I'm currently expanding my expertise in this area. I bring strong analytical skills and a passion for problem-solving, and I'm excited to apply these while growing my BSA toolkit. I'll be transparent about my experience level as we collaborate on solutions.</p>
        </div>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <FileText className="text-amber-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
        <p className="text-gray-600">
          Eliciting, analyzing, and documenting business and technical requirements with precision.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['User Stories', 'Use Cases', 'BRDs', 'FRDs'].map((item, i) => (
            <span key={i} className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <GitMerge className="text-amber-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Process Optimization</h3>
        <p className="text-gray-600">
          Streamlining business processes and workflows for maximum efficiency.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['UML', 'Flowcharts', 'SOPs', 'Other'].map((item, i) => (
            <span key={i} className="bg-amber-50 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* BSA Process */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-amber-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">Business Analysis Process</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <Users size={20} className="text-amber-600" />,
            title: 'Stakeholder Analysis',
            desc: 'Identifying and engaging with key stakeholders to understand business needs.'
          },
          { 
            icon: <FileText size={20} className="text-amber-600" />,
            title: 'Requirements Elicitation',
            desc: 'Gathering and documenting detailed business and technical requirements.'
          },
          { 
            icon: <Layers size={20} className="text-amber-600" />,
            title: 'Solution Design',
            desc: 'Translating requirements into functional specifications and system designs.'
          },
          { 
            icon: <BarChart2 size={20} className="text-amber-600" />,
            title: 'Data Analysis',
            desc: 'Analyzing data to support business decisions and system improvements.'
          },
          { 
            icon: <MessageSquare size={20} className="text-amber-600" />,
            title: 'Stakeholder Communication',
            desc: 'Facilitating clear communication between business and technical teams.'
          },
          { 
            icon: <Target size={20} className="text-amber-600" />,
            title: 'Solution Validation',
            desc: 'Ensuring the final product meets business requirements and objectives.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-amber-50 p-2 rounded-lg mr-3">
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
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 border border-amber-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Approach to Business Analysis</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          With a strong foundation in both business and technology, I bridge the gap between stakeholders and development teams. 
          My focus on clear communication, analytical thinking, and problem-solving ensures that technology solutions 
          align with business objectives and deliver measurable value.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-amber-700 bg-amber-100 px-4 py-2 rounded-full">
            <TrendingUp size={18} className="mr-2" />
            <span className="text-sm font-medium">Driving business value through technology</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BusinessSystemsAnalyst;
