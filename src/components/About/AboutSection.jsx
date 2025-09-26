import React, { useState } from 'react';
import { User, Play, FileText, MessageCircle } from 'lucide-react';
import AboutMe from './AboutMe';
import VideoResume from './VideoResume';
import DocumentResume from './DocumentResume';
import AIChat from './AIChat';

// Replace the existing tab navigation with this colorful version:

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = [
    { name: 'About Me', icon: User, color: 'blue' },
    { name: 'Video Resume', icon: Play, color: 'green' },
    { name: 'Document Resume', icon: FileText, color: 'purple' },
    { name: 'AI Chat', icon: MessageCircle, color: 'orange' }
  ];

  const getColorClasses = (color, isActive) => {
    const colorMap = {
      blue: isActive
        ? 'bg-blue-500 text-white shadow-lg border-blue-500'
        : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: isActive
        ? 'bg-green-500 text-white shadow-lg border-green-500'
        : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: isActive
        ? 'bg-purple-500 text-white shadow-lg border-purple-500'
        : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
      orange: isActive
        ? 'bg-orange-500 text-white shadow-lg border-orange-500'
        : 'bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100'
    };
    return colorMap[color];
  };

  return (
    <section id="home" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Colorful Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="px-8 pt-8">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  const isActive = activeTab === tab.name;

                  return (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 mb-4 ${getColorClasses(tab.color, isActive)}`}
                    >
                      <IconComponent size={18} />
                      <span>{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tab Content - Keep your existing content */}
          <div className="min-h-[600px]">
            {activeTab === 'About Me' && <AboutMe />}
            {activeTab === 'Video Resume' && <VideoResume />}
            {activeTab === 'Document Resume' && <DocumentResume />}
            {activeTab === 'AI Chat' && <AIChat />}
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
