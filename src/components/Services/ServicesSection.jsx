import React, { useState } from 'react';
import { TestTube, Code, BarChart3, CheckCircle, Star, Users } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState('QA & Testing');

  const services = {
    'QA & Testing': {
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive manual testing services to ensure software quality and reliability.',
      icon: TestTube,
      color: 'blue',
      skills: [
        'Manual Testing - Expert in exploratory, functional, and regression testing',
        'Test Case Development - Creating detailed test cases and test plans',
        'Defect Management - Tracking and reporting bugs with clear reproduction steps',
        'Cross-Browser Testing - Ensuring compatibility across multiple browsers',
        'Mobile Testing - Testing applications on various devices and OS versions',
        'Test Documentation - Creating test strategies, plans, and reports',
        'Agile Testing - Working in fast-paced Agile/Scrum environments',
        'Accessibility Testing - Ensuring compliance with WCAG guidelines'
      ],
      tools: ['JIRA', 'TestRail', 'Postman', 'BrowserStack', 'Sauce Labs', 'Charles Proxy'],
      experience: '5+ years of hands-on experience in software testing',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    'Test Automation': {
      title: 'Test Automation',
      description: 'Building robust test automation frameworks to improve testing efficiency.',
      icon: Code,
      color: 'green',
      skills: [
        'Selenium WebDriver - Building maintainable test frameworks',
        'API Automation - REST and GraphQL testing with RestAssured/Postman',
        'Mobile Automation - Appium for native and hybrid mobile apps',
        'Performance Testing - Load and stress testing with JMeter',
        'CI/CD Integration - Setting up test automation in CI/CD pipelines',
        'BDD/TDD - Implementing Behavior-Driven Development practices',
        'Containerization - Docker for test environment consistency',
        'Cloud Testing - Leveraging AWS Device Farm and BrowserStack'
      ],
      experience: '3+ years of test automation experience',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    'Test Metrics & Reporting': {
      title: 'Test Metrics & Reporting',
      description: 'Comprehensive test metrics and reporting to drive quality improvements.',
      icon: BarChart3,
      color: 'purple',
      skills: [
        'Test Metrics - Tracking and analyzing key quality indicators',
        'Defect Analysis - Identifying trends and patterns in reported issues',
        'Test Coverage - Measuring code and requirement coverage',
        'Quality Gates - Defining and enforcing quality benchmarks',
        'Test Efficiency - Optimizing test execution and resource allocation',
        'Root Cause Analysis - Identifying underlying causes of defects',
        'Stakeholder Reporting - Creating executive-level test reports',
        'Test Maturity Assessment - Evaluating and improving test processes'
      ],
      tools: ['JIRA', 'TestRail', 'Power BI', 'Tableau', 'Grafana', 'ELK Stack'],
      experience: 'Creating actionable insights from test data',
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
    <section className="py-16 bg-gray-50 px-0 sm:px-0">
      <div className="w-full max-w-none mx-0 px-4 sm:px-6 lg:px-8">
        {/* Service Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 sm:px-6">
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
        <div className={`bg-white rounded-none sm:rounded-2xl shadow-lg border-2 ${currentService.border} overflow-hidden`}>

          {/* Service Header */}
          <div className={`${currentService.icon_bg} px-6 py-4 border-b ${currentService.border}`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${currentService.icon_bg} ${currentService.icon_text} mr-4`}>
                <IconComponent size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentService.title}</h3>
                <p className="text-gray-600">{currentService.description}</p>
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
                    {currentService?.tools?.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    )) || (
                      <span className="text-gray-500 text-sm">No tools specified</span>
                    )}
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
