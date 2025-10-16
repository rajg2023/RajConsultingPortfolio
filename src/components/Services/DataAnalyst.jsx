import React from 'react';
import { BarChart3, Workflow, TrendingUp } from 'lucide-react';

const DataAnalyst = () => (
  <div className="space-y-8">
    <div className="bg-cyan-50 border border-cyan-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Data Analysis?</h2>
      <p className="text-gray-700">
        Data analysis transforms raw information into insights that drive real‑world decisions. 
        It combines statistics, visualization, and business knowledge to identify patterns 
        and recommend improvements.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Core Techniques & Tools</h3>
      <div className="flex flex-wrap gap-4">
        {['Python', 'Excel', 'SQL', 'Power BI', 'Tableau', 'Google Data Studio'].map((tool, i) => (
          <span key={i} className="bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-full text-gray-800 font-medium shadow-sm">
            {tool}
          </span>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 rounded-2xl">
      <Workflow className="text-cyan-600 mb-3" size={26} />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Analytics Workflow</h3>
      <p className="text-gray-700">
        Collect → Clean → Analyze → Visualize → Communicate.  
        This structured process ensures that decisions are supported by evidence and transparency.
      </p>
    </div>

    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Confidence Through Curiosity</h3>
      <p className="text-gray-700">
        I continually enhance my proficiency in tools and storytelling with data. Although building 
        experience, I approach every project with inquisitiveness and accountability to deliver 
        meaningful insights.
      </p>
      <div className="flex justify-center items-center mt-4 text-cyan-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Empowering clients with clear, data‑driven insights.</span>
      </div>
    </div>
  </div>
);

export default DataAnalyst;
