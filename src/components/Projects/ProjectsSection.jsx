import React, { useState } from 'react';
import { TestTube, Code, BarChart3, CheckCircle, Star, Calendar, Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = {
    'Google Analytics': {
      title: 'Google Data Analytics Capstone',
      description:
        'Analyzed Fitbit fitness tracker data to uncover trends in user activity and sleep patterns using SQL, Excel, R, BigQuery, and Tableau.',
      icon: BarChart3,
      color: 'blue',
      details: [
        'Collected, cleaned, and analyzed Fitbit datasets for trends in activity and rest.',
        'Used SQL, Excel, BigQuery, and R to process and visualize data.',
        'Identified weekend activity dips and correlation between exercise and sleep quality.',
        'Delivered insights to enhance Bellabeat’s user engagement and retention strategies.',
        'Created Tableau dashboards and visualizations with R ggplot2 for presentation.',
        'Formulated business recommendations for targeted marketing.',
        'Ensured data consistency by validating inputs and handling missing records.',
        'Prepared final presentation summarizing trends and business recommendations.'
      ],
      technologies: ['SQL', 'Excel', 'R (ggplot2)', 'BigQuery', 'Tableau'],
      duration: '2025',
      status: 'Completed',
      learnings:
        'Gained hands-on experience with end-to-end data analytics workflow, from cleaning and analyzing to deriving actionable insights aligned with business objectives.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },

    'Security GRC': {
      title: 'Security GRC Issue and Exception Analysis',
      description:
        'Supported Security Governance, Risk, and Compliance (GRC) operations by analyzing and resolving issues and exceptions raised by business stakeholders.',
      icon: TestTube,
      color: 'green',
      details: [
        'Worked with Security GRC team to evaluate stakeholder-submitted Issues and Exceptions.',
        'Validated cybersecurity data across Threat Vulnerability Management dashboards.',
        'Ensured precision in documentation of exceptions and approvals.',
        'Contributed to streamlining security data approval processes.',
        'Provided management with consistent data insights supporting remediation efforts.',
        'Managed Jira/Confluence cases with accurate documentation tracking.',
        'Verified alignment of cases with organizational security standards.',
        'Collaborated with IT teams to enhance processing efficiency and quality controls.'
      ],
      technologies: ['Threat Vulnerability Management (TVM)', 'Jira', 'Confluence', 'Security GRC', 'Case Processing'],
      duration: 'May 2023 - Jan 2024',
      status: 'Completed',
      learnings:
        'Developed a robust understanding of security compliance operations, issue tracking, and governance processes within enterprise GRC systems.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },

    'Data Configuration': {
      title: 'OFSAA Data Configuration Analysis (Banking)',
      description:
        'Supported the configuration and testing of data integrity within Oracle Financial Services Analytical Applications (OFSAA).',
      icon: Code,
      color: 'purple',
      details: [
        'Created and maintained RTM for over 500 Key Data Elements (KDEs) using T2T mappings.',
        'Converted FSD and TDD documents and migrated them into Confluence.',
        'Validated backend data integrity through SQL queries and database verification.',
        'Interacted with business teams for requirement clarification and handover layouts.',
        'Identified discrepancies between data dictionaries and technical builds.',
        'Ensured compliance with financial data governance standards.',
        'Collaborated in automation of configuration testing workflows.',
        'Maintained synchronization between technical design and business requirements.'
      ],
      technologies: ['OFSAA', 'SQL', 'FSD', 'TDD', 'Jira', 'Confluence', 'RDBMS'],
      duration: 'Oct 2022 - Mar 2023',
      status: 'Completed',
      learnings:
        'Enhanced knowledge of enterprise data management, system documentation, and traceability in compliance-driven financial environments.',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    },

    'CRM Implementation': {
      title: 'CRM Solution Implementation',
      description:
        'Worked as a Solution Implementation Manager, coordinating cross-functional teams to ensure seamless CRM deployment across customer operations.',
      icon: TestTube,
      color: 'green',
      details: [
        'Collaborated with Sales, Customer Success, and Training teams to implement CRM solutions.',
        'Used Smartsheet for project management, communication, and task tracking.',
        'Monitored launch milestones ensuring on-time delivery and data migration success.',
        'Facilitated stakeholder meetings to streamline implementation phases.',
        'Identified workflow gaps and proposed improvements in CRM onboarding steps.',
        'Assisted client teams during pilot phase and go-live preparation.',
        'Led CRM solution rollout for project and data tracking by importing, cleansing, and structuring datasets; building automated reports and dashboards; and streamlining workflows to enhance visibility and reduce manual effort.',
        'Documented implementation best practices for future CRM rollouts.'
      ],
      technologies: ['CRM Systems', 'Smartsheet', 'Project Management', 'Workflow Optimization'],
      duration: 'May 2022 - Sep 2022',
      status: 'Completed',
      learnings:
        'Learned to manage end-to-end solution deployment, strengthen interdepartmental collaboration, and measure success through operational performance metrics.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },

    'POS Support': {
      title: 'POS Maintenance and Support – Retail',
      description:
        'Provided advanced support for retail Point-of-Sale (POS) systems, conducting troubleshooting, defect replication, and system optimization.',
      icon: Code,
      color: 'blue',
      details: [
        'Investigated and reproduced application issues using SQL queries and testing scripts.',
        'Performed deep code reviews and analyzed application failure logs.',
        'Tested code patches and validated updates in staging environments.',
        'Collaborated with developers for defect root cause analysis and patch validation.',
        'Documented technical findings using Jira and Confluence.',
        'Ensured deployment readiness through regression and defect verification testing.',
        'Supported clients with issue resolution and stability improvements.'
      ],
      technologies: ['POS Systems', 'SQL', 'Jira', 'Confluence', 'Application Debugging'],
      duration: 'Oct 2017 - Jul 2018',
      status: 'Completed',
      learnings:
        'Strengthened practical debugging, defect analysis, and client communication skills through real-time issue resolution and technical troubleshooting.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },

    'Java Capstone': {
      title: 'Big Box Web Application (Java Capstone)',
      description:
        'Developed a dynamic web application as the final project of Java Bootcamp, implementing the DAO Factory Pattern using PL/SQL backend.',
      icon: Code,
      color: 'purple',
      details: [
        'Developed a dynamic Java web application with servlets, JSP, and HTML front-end.',
        'Implemented DAO Factory pattern integrating PL/SQL with Java.',
        'Created modules for users, divisions, stores, and sales with validation.',
        'Built secure user authentication and session management features.',
        'Documented system flow and data interactions between layers.',
        'Followed Agile iterations for incremental development.',
        'Uploaded code and documentation to GitHub repository.'
      ],
      technologies: ['Java', 'Servlets', 'JSP', 'DAO Factory Pattern', 'PL/SQL', 'HTML', 'CSS'],
      duration: 'Mar 2017 - Jun 2017',
      status: 'Completed',
      learnings:
        'Built foundational Java web application experience integrating data and UI layers through clean architecture and best practices.',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    },

    'Java Desktop POS App': {
      title: 'Desktop POS Application (Java Swing)',
      description:
        'Created a standalone POS desktop application using Java Swing and PostgreSQL database to simulate retail transactions.',
      icon: Code,
      color: 'green',
      details: [
        'Designed UI using Java Swing and JFrame components.',
        'Built local application requiring no servers, using embedded database.',
        'Implemented transaction recording and receipt generation.',
        'Used PGAdmin for managing data and user entries.',
        'Created JAR executable for easy installation and use.',
        'Followed modular coding principles for maintainability.'
      ],
      technologies: ['Java 8', 'Swing GUI', 'JFrame', 'PostgreSQL', 'PGAdmin'],
      duration: 'Jul 2018 - Oct 2018',
      status: 'Completed',
      learnings:
        'Improved application development and data management skills through standalone Java software creation with complete UI and DB interaction.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    }
  };

  const [activeProject, setActiveProject] = useState('Google Analytics');
  const projectNames = Object.keys(projects);
  const currentProject = projects[activeProject];
  const IconComponent = currentProject.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active
        ? 'bg-blue-500 text-white shadow-lg'
        : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active
        ? 'bg-green-500 text-white shadow-lg'
        : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active
        ? 'bg-purple-500 text-white shadow-lg'
        : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100'
    };
    return colorMap[color] || '';
  };

  return (
    <section className="py-16 bg-gray-50 px-0 sm:px-0">
      <div className="w-full max-w-none mx-0 px-4 sm:px-6 lg:px-8">
        {/* Project Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 sm:px-6">
          {projectNames.map((projectName) => {
            const project = projects[projectName];
            const ProjectIconComponent = project.icon;
            const isActive = activeProject === projectName;

            return (
              <button
                key={projectName}
                onClick={() => setActiveProject(projectName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(
                  project.color,
                  isActive
                )}`}
              >
                <ProjectIconComponent size={18} />
                <span>{projectName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Project Details */}
        <div
          className={`bg-white rounded-none sm:rounded-2xl shadow-lg border-2 ${currentProject.border} overflow-hidden`}
        >
          {/* Project Header */}
          <div className={`${currentProject.icon_bg} px-6 py-4 border-b ${currentProject.border}`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${currentProject.icon_bg} ${currentProject.icon_text} mr-4`}>
                <IconComponent size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentProject.title}</h3>
                <p className="text-gray-600">{currentProject.description}</p>
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
                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Code className="text-blue-600 mr-2" size={20} />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(currentProject.technologies || []).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Duration */}
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
                      <span
                        className={`font-medium ${
                          currentProject.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'
                        }`}
                      >
                        {currentProject.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Learnings */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    What I Learned
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">{currentProject.learnings}</p>
                  </div>
                </div>

                {/* Links */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Want to See or learn More about this projects?</h4>
                  <p className="text-blue-700 mb-4 text-sm">
                    Explore code, documentation, or live demos for each non-employer related hands-on experience projects on my GitHub. For Employer related projects (always maintaining employer-client confidentiality), please contact me for brief overview of the project.
                  </p>
                  <div className="flex space-x-3">
                    {currentProject.repo && (
                      <a
                        href={currentProject.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center"
                      >
                        <Github size={16} className="mr-2" />
                        View Code
                      </a>
                    )}
                    {currentProject.url && (
                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium flex items-center"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* GitHub Note Section */}
          <div className="px-8 pb-8 pt-4 border-t border-gray-100">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <Github className="h-5 w-5 text-gray-700 mr-2" />
                <p className="text-gray-700">
                  Want to see more of my work? Check out my GitHub for additional projects and code samples.
                </p>
              </div>
              <a 
                href="https://github.com/rajg2023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github className="h-4 w-4 mr-2" />
                View it on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
