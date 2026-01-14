import React, { useState } from 'react';
import { User, Play, FileText, MessageCircle, CheckCircle, Award } from 'lucide-react';
import DocumentResume from './About/DocumentResume';
import AIChat from './About/AIChat';

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
    { label: 'SDET Specialist', color: 'bg-green-100 text-green-800' },
    { label: 'Data Analyst', color: 'bg-purple-100 text-purple-800' },
    { label: 'Process Optimizer', color: 'bg-orange-100 text-orange-800' },
    { label: 'Team Leader', color: 'bg-red-100 text-red-800' }
  ];

  // About Me Component
  const AboutMe = () => (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column - Profile */}
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6">
            JD
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rajiv Giri</h1>
          <p className="text-blue-600 font-medium mb-8">Independent Consultant</p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
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
              
            </p>
            <p className="text-gray-700 leading-relaxed">
              
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
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">ConsultantPro</div>
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Skills', 'Services', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-8 pt-8">
              <div className="flex space-x-8">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex items-center space-x-2 pb-4 px-2 border-b-2 transition-colors duration-200 ${
                        activeTab === tab.name
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {activeTab === 'About Me' && <AboutMe />}
            {activeTab === 'Document Resume' && <DocumentResume />}
            {activeTab === 'AI Chat' && <AIChat />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConsultantPortfolio;
