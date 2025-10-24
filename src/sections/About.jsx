import React, { useState } from 'react';
import { User, Play, FileText, MessageCircle, CheckCircle } from 'lucide-react';

const ConsultantPortfolio = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = [
    { name: 'About Me', icon: User },
    { name: 'Video Resume', icon: Play },
    { name: 'Document Resume', icon: FileText },
    { name: 'AI Chat', icon: MessageCircle }
  ];

  const specializations = [
    'QA & Testing',
    'SDET Solutions', 
    'Data Analytics'
  ];

  const achievements = [
    { icon: '🏆', text: '50+ Projects Delivered' },
    { icon: '📈', text: '40% Efficiency Gains' },
    { icon: '🎓', text: '15+ Certifications' }
  ];

  const highlights = [
    { label: 'QA Expert', color: 'bg-blue-100 text-blue-800' },
    { label: 'Data Analyst', color: 'bg-purple-100 text-purple-800' },
    { label: 'Process Optimizer', color: 'bg-orange-100 text-orange-800' },
    { label: 'Team Leader', color: 'bg-red-100 text-red-800' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tabs Navigation - Sticky at the top */}
      <div className="bg-white shadow-sm sticky top-14 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto">
            <ul className="flex w-full">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;
                return (
                  <li key={tab.name} className="flex-1">
                    <button
                      onClick={() => setActiveTab(tab.name)}
                      className={`w-full px-4 py-3 text-sm font-medium flex items-center justify-center space-x-2 transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Profile */}
            <div className="lg:w-1/3 space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">Rajiv Giri</h1>
              <p className="text-blue-600 font-medium">Independent Consultant</p>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Get in Touch
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
                  View Services
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="lg:w-2/3 space-y-8">
              {/* About Text */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  With over 10 years of experience in technology and business consulting, I help organizations 
                  optimize their processes, implement cutting-edge solutions, and drive digital transformation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My expertise spans QA analysis, software development, data analytics, and strategic planning. I 
                  take a holistic approach to problem-solving, combining technical skills with business acumen to 
                  deliver measurable results.
                </p>
              </div>

              {/* Skills and Achievements Row */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Specializations */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
                  <div className="space-y-3">
                    {specializations.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="text-blue-500 w-5 h-5" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-xl">{achievement.icon}</span>
                        <span className="text-gray-700">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Professional Highlights */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {highlights.map((highlight, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${highlight.color}`}
                    >
                      {highlight.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsultantPortfolio;