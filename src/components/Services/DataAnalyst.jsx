import React from 'react';
import { BarChart3, Workflow, TrendingUp, Database, LayoutDashboard, Code2, LineChart, PieChart, Filter, Zap, Search } from 'lucide-react';

const DataAnalyst = () => (
  <div className="space-y-8">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-2xl p-8 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <div className="bg-cyan-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <BarChart3 className="text-cyan-600" size={28} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Analyst</h1>
        <p className="text-gray-700 text-lg">
          Transforming raw data into actionable insights that drive informed business decisions and strategies.
        </p>
      </div>
    </div>

    {/* Key Services */}
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-cyan-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <Database className="text-cyan-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analysis</h3>
        <p className="text-gray-600">
          Extracting meaningful insights from complex datasets to inform business decisions and strategies.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['SQL', 'Python', 'R', 'Excel'].map((item, i) => (
            <span key={i} className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-cyan-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
          <LayoutDashboard className="text-cyan-600" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Visualization</h3>
        <p className="text-gray-600">
          Creating clear, impactful visualizations that communicate complex data insights effectively.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {['Tableau', 'Power BI', 'Looker', 'Excel', 'Smartsheet'].map((item, i) => (
            <span key={i} className="bg-cyan-50 text-cyan-700 text-xs font-medium px-3 py-1 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Analytics Process */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center mb-6">
        <Workflow className="text-cyan-600 mr-3" size={26} />
        <h2 className="text-2xl font-bold text-gray-900">Analytics Workflow</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            icon: <Search size={20} className="text-cyan-600" />,
            title: 'Data Collection',
            desc: 'Gathering data from various sources including databases, APIs, and spreadsheets.'
          },
          { 
            icon: <Filter size={20} className="text-cyan-600" />,
            title: 'Data Cleaning',
            desc: 'Preprocessing and transforming raw data into a usable format for analysis.'
          },
          { 
            icon: <BarChart3 size={20} className="text-cyan-600" />,
            title: 'Exploratory Analysis',
            desc: 'Identifying patterns, trends, and relationships in the data.'
          },
          { 
            icon: <LineChart size={20} className="text-cyan-600" />,
            title: 'Statistical Analysis',
            desc: 'Applying statistical methods to validate findings and test hypotheses.'
          },
          { 
            icon: <PieChart size={20} className="text-cyan-600" />,
            title: 'Data Visualization',
            desc: 'Creating charts, graphs, and dashboards to communicate insights.'
          },
          { 
            icon: <Code2 size={20} className="text-cyan-600" />,
            title: 'Reporting',
            desc: 'Documenting findings and presenting recommendations to stakeholders.'
          }
        ].map((step, index) => (
          <div key={index} className="border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="bg-cyan-50 p-2 rounded-lg mr-3">
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
    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 border border-cyan-200 rounded-2xl w-full">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">My Approach to Data Analysis</h3>
        <p className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          I believe in a structured, hypothesis-driven approach to data analysis. By combining technical skills with 
          business acumen, I help organizations make data-informed decisions. My focus is on delivering clear, 
          actionable insights that drive real business value. I'm committed to continuous learning and staying 
          current with the latest tools and techniques in data analytics.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="flex items-center text-cyan-700 bg-cyan-100 px-4 py-2 rounded-full">
            <Zap size={18} className="mr-2" />
            <span className="text-sm font-medium">Transforming data into strategic assets</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DataAnalyst;
