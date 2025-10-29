import React, { useState } from 'react';
import { User, Play, FileText, MessageCircle, CheckCircle, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = [
    { name: 'About Me', icon: User },
    { name: 'Video Resume', icon: Play },
    { name: 'Document Resume', icon: FileText },
    { name: 'AI Chat', icon: MessageCircle }
  ];

  const contactInfo = [
    { icon: <Mail className="h-5 w-5 text-gray-500" />, text: 'rajivgiri2025@gmail.com' },
    { icon: <Phone className="h-5 w-5 text-gray-500" />, text: '(513) 834-3371' },
    { icon: <MapPin className="h-5 w-5 text-gray-500" />, text: 'Cincinnati, OH' },
    { 
      icon: <Linkedin className="h-5 w-5 text-blue-600" />, 
      text: 'linkedin.com/in/girirajiv',
      link: 'https://linkedin.com/in/girirajiv' 
    },
    { 
      icon: <Github className="h-5 w-5 text-gray-700" />, 
      text: 'github.com/rajg2023',
      link: 'https://github.com/rajg2023' 
    }
  ];

  const specializations = [
    'QA & Testing',
    'SDET Solutions', 
    'Data Analytics'
  ];

  const aboutContent = {
    title: "Google Data Analytics Professional | Data/Application Analyst | Application Engineer | Software/Data Engineer | Business Systems Analyst",
    businessStatus: "I operate as an independent contractor, specializing in digital and technology solutions. I am not a registered business entity; rather, I provide my expertise directly to clients on a project basis. My focus is on delivering personalized, high-quality service tailored to your specific needs.",
    intro: "I am a Digital and Technology Solutions professional with 9+ years in data-intensive environments, whose 3+ years of hands-on IT experience are built upon a foundation of 6+ years in pharmaceutical operations, where I developed important skills in data entry, validation, and process optimization within a highly regulated healthcare setting. These skills helped me succeed in IT, providing a strong foundation for data analysis, application support, and maintaining data accuracy.",
    focus: "My primary focus is on data/application analyst/testing roles, using analytical skills and attention to detail for data quality and application reliability. I'm also interested in exploring related areas like AI and software development. As a Senior Analyst at Robert Half & Protiviti (May 2022 - Jan 2024), I worked on a variety of client projects, developing a strong understanding of business processes, technical requirements, and client needs.",
    highlights: [
      {
        title: "Application Support (POS)",
        description: "Provided 3rd/4th level support for Vision Commerce Suite, triaging, diagnosing, and reproducing application defects via error logs, SQL queries, and code review. Tested and deployed patches/releases."
      },
      {
        title: "Data Analysis & Testing (ETL)",
        description: "Performed data warehouse integration testing post-ETL, identifying/documenting data discrepancies. Analyzed data quality issues, contributing to improved data accuracy/reliability. Created process flowcharts (Visio) to document data flows."
      },
      {
        title: "Security GRC",
        description: "Resolved security issues/exceptions, validated data on TVM dashboards, ensuring data accuracy for case processing and providing data-driven recommendations."
      },
      {
        title: "OFSAA",
        description: "Created/maintained RTMs for 500+ KDEs using data mappings, layouts, and data repositories. Validated data integrity/accuracy after OFSAA configuration."
      },
      {
        title: "CRM Implementation",
        description: "Collaborated on business needs analysis, process mapping, and successful CRM launches."
      }
    ],
    closing: "My healthcare background and IT experience have cultivated a strong commitment to data accuracy, security, and privacy. I excel at collaborating and using analytical problem-solving to drive business growth. I approach challenges proactively and collaboratively.\n\nI am looking to work on Data Analytics, Data/Application Analysis, Application Engineering, Software/Data Engineering, Business Systems Analysis projects. I'm also open to AI/software engineering opportunities.\n\nLet's connect and explore how I can contribute to your project/team!\n\nThank you for visiting my portfolio."
  };

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
              
              {/* Contact Information */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  {contactInfo.map((item, index) => (
                    item.link ? (
                      <a 
                        key={index} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center hover:text-blue-600 hover:underline"
                      >
                        {item.icon}
                        <span className="ml-2">{item.text}</span>
                      </a>
                    ) : (
                      <p key={index} className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.text}</span>
                      </p>
                    )
                  ))}
                </div>
              </div>
              
              {/* Specializations */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
                <div className="space-y-3">
                  {specializations.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-blue-500 w-5 h-5 mr-2" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Main Content */}
            <div className="lg:w-2/3 space-y-8">
              <h1 className="text-3xl font-bold text-center text-gray-900 lg:hidden">About Me</h1>
              
              {/* Business Status Card */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-blue-700">{aboutContent.businessStatus}</p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{aboutContent.intro}</p>
              <p className="text-gray-700 leading-relaxed">{aboutContent.focus}</p>
              
              <div className="mt-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Career Highlights & Key Contributions:</h2>
                <ul className="space-y-4">
                  {aboutContent.highlights.map((item, index) => (
                    <li key={index} className="border-l-4 border-blue-200 pl-4 py-1">
                      <strong className="text-blue-800">{item.title}:</strong> {item.description}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                {aboutContent.closing.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Signature */}
              <div className="mt-8 text-left">
                <div className="font-['Brush_Script_MT'] text-3xl text-blue-900">Rajiv Giri</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;