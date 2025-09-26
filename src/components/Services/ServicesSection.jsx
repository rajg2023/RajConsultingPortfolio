import React, { useState } from 'react';
import { TestTube, Code, BarChart3, CheckCircle, Star, Users } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('QA & Testing');

  const services = {
    'QA & Testing': {
      title: 'Quality Assurance & Testing',
      description: 'I help ensure your software works perfectly by finding bugs and testing functionality.',
      icon: TestTube,
      color: 'blue',
      skills: [
        'Manual Testing - Finding bugs by testing software manually',
        'Test Cases - Writing step-by-step testing instructions',
        'Bug Reporting - Documenting issues clearly for developers',
        'User Interface Testing - Making sure buttons and forms work',
        'Mobile App Testing - Testing apps on phones and tablets',
        'Website Testing - Checking websites work on different browsers',
        'Regression Testing - Making sure new changes don\'t break old features',
        'User Experience Testing - Ensuring software is easy to use'
      ],
      tools: ['Browser DevTools', 'JIRA', 'TestRail', 'Postman', 'Chrome/Firefox'],
      experience: 'Learning and practicing QA fundamentals',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    'SDET (Automation)': {
      title: 'Software Development Engineer in Test',
      description: 'I can help automate repetitive testing tasks to save time and catch bugs faster.',
      icon: Code,
      color: 'green',
      skills: [
        'Test Automation - Writing code to test software automatically',
        'Selenium WebDriver - Automating web browser testing',
        'API Testing - Testing how different software parts communicate',
        'Basic Programming - Writing simple test scripts in Python/Java',
        'CI/CD Integration - Running tests automatically when code changes',
        'Test Framework Setup - Organizing automated tests properly',
        'Data-Driven Testing - Running same test with different data',
        'Cross-Browser Testing - Making sure websites work everywhere'
      ],
      tools: ['Selenium', 'Python', 'Java', 'Git', 'Jenkins', 'REST APIs'],
      experience: 'Building automation skills and learning frameworks',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    'Data Analytics': {
      title: 'Testing Data Analysis',
      description: 'I can analyze testing data to find patterns and help improve the testing process.',
      icon: BarChart3,
      color: 'purple',
      skills: [
        'Test Metrics Analysis - Understanding testing progress and results',
        'Bug Trend Analysis - Finding patterns in where bugs occur most',
        'Test Coverage Reports - Showing what parts of software are tested',
        'Excel Data Analysis - Creating charts and reports from test data',
        'Basic SQL Queries - Getting data from testing databases',
        'Dashboard Creation - Making visual reports for team updates',
        'Performance Data Review - Understanding how fast software runs',
        'Quality Metrics - Measuring how well testing is going'
      ],
      tools: ['Excel', 'Google Sheets', 'Basic SQL', 'Tableau Public', 'Power BI'],
      experience: 'Learning to work with testing data and create simple reports',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const serviceNames = Object.keys(services);
  const currentService = services[activeService];
  const IconComponent = currentService.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100'
    };
    return colorMap[color];
  };

  return (
    <section className="min-h-screen flex items-center py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Can Help With</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As someone new to IT and building my consulting skills, here are the areas where I can contribute to your projects.
          </p>
        </div>

        {/* Service Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceNames.map((serviceName) => {
            const service = services[serviceName];
            const ServiceIconComponent = service.icon;
            const isActive = activeService === serviceName;

            return (
              <button
                key={serviceName}
                onClick={() => setActiveService(serviceName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(service.color, isActive)}`}
              >
                <ServiceIconComponent size={18} />
                <span>{serviceName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Service Details */}
        <div className={`bg-white rounded-2xl shadow-lg border-2 ${currentService.border} overflow-hidden`}>

          {/* Service Header */}
          <div className={`${currentService.icon_bg} px-8 py-6 border-b border-gray-200`}>
            <div className="flex items-center">
              <div className={`p-4 rounded-xl ${currentService.icon_bg} ${currentService.icon_text} mr-6`}>
                <IconComponent size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentService.title}</h3>
                <p className="text-gray-600 text-lg">{currentService.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Skills & Capabilities */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="text-blue-600 mr-2" size={20} />
                  Skills & Capabilities
                </h4>
                <div className="space-y-3">
                  {currentService.skills.map((skill, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Experience */}
              <div className="space-y-6">

                {/* Tools I Use */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Code className="text-green-600 mr-2" size={20} />
                    Tools I Use
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentService.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    My Experience Level
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">{currentService.experience}</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Let's Work Together!</h4>
                  <p className="text-blue-700 mb-4 text-sm">
                    I'm eager to learn and contribute to your projects. Perfect for small to medium projects where you need dedicated support.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Get in Touch
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
