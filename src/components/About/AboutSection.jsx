import React, { useState } from 'react';
import { User, Play, FileText, MessageCircle } from 'lucide-react';
import AboutMe from './AboutMe';
import VideoResume from './VideoResume';
import DocumentResume from './DocumentResume';
import AIChat from './AIChat';

// Replace the existing tab navigation with this colorful version:

const AboutSection = ({ resumeData, isLoading, error }) => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = [
    { 
      name: 'About Me', 
      icon: User, 
      color: 'blue',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    { 
      name: 'Video Resume', 
      icon: Play, 
      color: 'green',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    { 
      name: 'Document Resume', 
      icon: FileText, 
      color: 'purple',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    },
    { 
      name: 'Chat Bot', 
      icon: MessageCircle, 
      color: 'orange',
      icon_bg: 'bg-orange-50',
      icon_text: 'text-orange-600',
      border: 'border-orange-200'
    }
  ];

  const getTabColorClasses = (color, isActive) => {
    const colorMap = {
      blue: isActive ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: isActive ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: isActive ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
      orange: isActive ? 'bg-orange-500 text-white shadow-lg' : 'bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100'
    };
    return colorMap[color] || colorMap.blue;
  };

  const currentTabData = tabs.find(tab => tab.name === activeTab);
  const TabIcon = currentTabData?.icon;
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.name;
            
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getTabColorClasses(tab.color, isActive)}`}
              >
                <TabIcon size={18} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className={`bg-white rounded-none sm:rounded-2xl shadow-lg border-2 ${currentTabData?.border} overflow-hidden`}>
          {/* Tab Header */}
          <div className={`${currentTabData?.icon_bg} px-6 py-4 border-b ${currentTabData?.border}`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${currentTabData?.icon_bg} ${currentTabData?.icon_text} mr-4`}>
                {TabIcon && React.createElement(TabIcon, { size: 28 })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {activeTab === 'About Me' && 'Professional Profile'}
                  {activeTab === 'Video Resume' && 'Video Introduction'}
                  {activeTab === 'Document Resume' && 'Resume & Documents'}
                  {activeTab === 'Chat Bot' && 'Non AI Assistant'}
                </h3>
                <p className="text-gray-600 text-lg">
                  {activeTab === 'About Me' && 'Learn more about my background, skills, and experience'}
                  {activeTab === 'Video Resume' && 'Watch my video introduction and professional summary'}
                  {activeTab === 'Document Resume' && 'Download or view my resume and other documents'}
                  {activeTab === 'Chat Bot' && 'Chat with an Non AI assistant to learn more about me'}
                </p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className={`p-6 min-h-[500px] ${activeTab === 'Document Resume' ? 'flex flex-col' : ''}`}>
            {activeTab === 'About Me' && <AboutMe resumeData={resumeData} isLoading={isLoading} error={error} />}
            {activeTab === 'Video Resume' && <VideoResume />}
            {activeTab === 'Document Resume' && (
              <div className="flex-1">
                <DocumentResume />
              </div>
            )}
            {activeTab === 'Chat Bot' && <AIChat />}
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;
