import React, { useState } from 'react';
import { TestTube, Code, BarChart3, CheckCircle, Star, Calendar, Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState('QA Testing Project');

  const projects = {
    'QA Testing Project': {
      title: 'E-commerce Website Testing',
      description: 'Manual testing of an online shopping website including user registration, product search, cart functionality, and checkout process.',
      icon: TestTube,
      color: 'blue',
      details: [
        'Created 50+ test cases for different user scenarios',
        'Found and documented 15+ UI/UX issues',
        'Tested cross-browser compatibility (Chrome, Firefox, Safari)',
        'Performed mobile responsiveness testing on 3+ devices',
        'Executed regression testing after bug fixes',
        'Validated user registration and login flows',
        'Tested payment gateway integration',
        'Performed usability testing and provided UX feedback'
      ],
      technologies: ['Manual Testing', 'Test Cases', 'Bug Reports', 'Chrome DevTools', 'Cross-browser Testing'],
      duration: '2 weeks',
      status: 'Completed',
      learnings: 'Gained hands-on experience with systematic testing approaches and learned how to document bugs effectively.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    'Automation Project': {
      title: 'Selenium WebDriver Automation',
      description: 'First automation project using Selenium WebDriver with Python to automate login and form submission processes.',
      icon: Code,
      color: 'green',
      details: [
        'Automated login functionality with multiple test data sets',
        'Created reusable functions for common web actions',
        'Implemented basic Page Object Model structure',
        'Set up test execution with pytest framework',
        'Added screenshot capture for failed tests',
        'Created data-driven tests using CSV files',
        'Implemented basic reporting with HTML output',
        'Set up Chrome WebDriver configuration'
      ],
      technologies: ['Selenium WebDriver', 'Python', 'pytest', 'Chrome Driver', 'Page Object Model'],
      duration: '3 weeks',
      status: 'In Progress',
      learnings: 'Learning the fundamentals of test automation and understanding how to structure maintainable test code.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    'Data Analysis Project': {
      title: 'Test Results Analytics Dashboard',
      description: 'Using Excel and Tableau to analyze test execution data, create charts for bug trends, and present testing metrics.',
      icon: BarChart3,
      color: 'purple',
      details: [
        'Analyzed 200+ test execution records from multiple projects',
        'Created bug trend analysis charts and graphs',
        'Built interactive dashboard for test coverage metrics',
        'Generated weekly testing progress reports',
        'Identified patterns in defect distribution by modules',
        'Created KPI indicators for testing effectiveness',
        'Designed visual reports for stakeholder presentations',
        'Set up automated data refresh for live dashboards'
      ],
      technologies: ['Excel', 'Tableau Public', 'Data Visualization', 'Pivot Tables', 'Interactive Charts'],
      duration: '2 weeks',
      status: 'Completed',
      learnings: 'Learned how to turn raw testing data into meaningful insights and create visual reports for better decision-making.',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const projectNames = Object.keys(projects);
  const currentProject = projects[activeProject];
  const IconComponent = currentProject.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100'
    };
    return colorMap[color];
  };

  return (
    <section className="min-h-screen flex items-center py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Learning Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some projects I've worked on while learning QA, automation, and data analysis.
            Each project helped me build practical skills and gain hands-on experience.
          </p>
        </div>

        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectNames.map((projectName) => {
            const project = projects[projectName];
            const ProjectIconComponent = project.icon;
            const isActive = activeProject === projectName;

            return (
              <button
                key={projectName}
                onClick={() => setActiveProject(projectName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(project.color, isActive)}`}
              >
                <ProjectIconComponent size={18} />
                <span>{projectName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Project Details */}
        <div className={`bg-white rounded-2xl shadow-lg border-2 ${currentProject.border} overflow-hidden`}>

          {/* Project Header */}
          <div className={`${currentProject.icon_bg} px-8 py-6 border-b border-gray-200`}>
            <div className="flex items-center">
              <div className={`p-4 rounded-xl ${currentProject.icon_bg} ${currentProject.icon_text} mr-6`}>
                <IconComponent size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentProject.title}</h3>
                <p className="text-gray-600 text-lg">{currentProject.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Project Details */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  What I Did
                </h4>
                <div className="space-y-3">
                  {currentProject.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info & Learnings */}
              <div className="space-y-6">

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Code className="text-blue-600 mr-2" size={20} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="text-purple-600 mr-2" size={20} />
                    Project Details
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{currentProject.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className={`font-medium ${currentProject.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                        {currentProject.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    What I Learned
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">{currentProject.learnings}</p>
                  </div>
                </div>

                {/* Project Links */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Want to See More?</h4>
                  <p className="text-blue-700 mb-4 text-sm">
                    Check out the code and documentation for this project, or let's discuss how similar work could help your team.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center">
                      <Github size={16} className="mr-2" />
                      View Code
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
