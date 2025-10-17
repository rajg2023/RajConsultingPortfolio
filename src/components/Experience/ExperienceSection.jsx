import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle, Star, Briefcase, GraduationCap, Award } from 'lucide-react';

const ExperienceSection = () => {
  const [activeYear, setActiveYear] = useState('2024 - 2022');

  const experiences = {
    '2024 - 2022': {
      title: 'Senior Analyst (Technology)',
      description:
        'Contributed to diverse client engagements across industries with focus on technical analysis, business processes, and client needs. Delivered high-quality analyst work, mentored junior team members, and identified process improvements.',
      icon: Briefcase,
      color: 'blue',
      experiences: [
        {
          type: 'Security GRC Issue & Exception Analysis',
          title: 'Security GRC Issue and Exception Analysis',
          
          duration: 'May 2023 - Jan 2024',
          location: 'Cincinnati, OH',
          achievements: [
            'Resolved stakeholder-raised Issues and Exceptions within Security GRC systems.',
            'Verified data accuracy on Security Bugs, Threat Vulnerability Management dashboards, and Security Standards.',
            'Collaborated with business teams on case reviews and approvals.',
            'Supported decision-making and improved documentation accuracy.'
          ]
        },
        {
          type: 'Data Configuration Analysis',
          title: 'OFSAA Data Configuration Analysis',
          
          duration: 'Oct 2022 - Mar 2023',
          location: 'Cincinnati, OH',
          achievements: [
            'Maintained RTMs for 500+ KDEs using complex T2T data mappings and data catalogs.',
            'Created and updated FSD and TDD documents in Confluence.',
            'Validated OFSAA configuration data with SQL and database testing.',
            'Ensured alignment between functional and technical documentation.'
          ]
        },
        {
          type: 'Project Management',
          title: 'CRM Solution Implementation Management',
          
          duration: 'May 2022 - Sep 2022',
          location: 'Cincinnati, OH',
          achievements: [
            'Collaborated across Sales, Client Success, and Training teams for CRM launch.',
            'Used Smartsheet to track implementation timelines and quality goals.',
            'Ensured end-to-end delivery within client engagement period.',
            'Optimized stakeholder communication and launch procedures.'
          ]
        }
      ],
      skills: [
        'Threat Vulnerability Management',
        'Security GRC',
        'Jira',
        'Confluence',
        'SQL',
        'Data Mapping',
        'CRM Implementation',
        'Process Improvement'
      ],
      highlights:
        'Built technical and procedural expertise in security, data quality, and documentation while supporting enterprise-scale clients.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },

    '2018 - 2017': {
      title: 'Technical Application Support Consultant',
      description:
        'Provided advanced POS application support for Vision Commerce Suite, diagnosing issues, coordinating releases, and maintaining system performance through code reviews and data analysis.',
      icon: GraduationCap,
      color: 'green',
      experiences: [
        {
          type: 'Application Support',
          title: 'POS Troubleshooting & Root Cause Analysis',
          
          duration: 'Oct 2017 - Jul 2018',
          location: 'Cincinnati Area, KY',
          achievements: [
            'Triaged, diagnosed, and reproduced POS system defects through SQL data analysis.',
            'Reviewed source code and logs to identify root causes.',
            'Collaborated internally to resolve critical software issues.',
            'Maintained and optimized Vision Commerce Suite functionality.'
          ]
        },
        {
          type: 'Release Management',
          title: 'Software Deployment & System Administration',
          
          duration: 'Oct 2017 - Jul 2018',
          location: 'Cincinnati Area, KY',
          achievements: [
            'Coordinated testing and deployment of releases from non-prod to production.',
            'Managed VM servers and application servers for Beanstore systems.',
            'Ensured high system uptime and stability through proactive maintenance.'
          ]
        }
      ],
      skills: ['POS Systems', 'Troubleshooting', 'SQL', 'Java', 'Virtual Machine Management', 'Release Management'],
      highlights:
        'Developed a strong base in technical troubleshooting, root cause analysis, and collaboration across engineering teams.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },

    '2017 - 2016': {
      title: 'Data Analyst (Technology)',
      description:
        'Supported technology-driven client engagement focusing on data quality improvement, integration testing, and compliance documentation.',
      icon: Award,
      color: 'purple',
      experiences: [
        {
          type: 'Data Analysis',
          title: 'Data Warehouse Integration Testing',
          
          duration: 'Jul 2016 - Feb 2017',
          location: 'Cincinnati, KY',
          achievements: [
            'Performed integration testing of ETL-loaded data against warehouse targets.',
            'Documented discrepancies and collaborated with developers on fixes.',
            'Improved data quality and consistency within analytics platforms.'
          ]
        },
        {
          type: 'Governance & Documentation',
          title: 'Data Governance, Process Mapping & Documentation',
          
          duration: 'Jul 2016 - Feb 2017',
          location: 'Cincinnati, KY',
          achievements: [
            'Redefined corporate data dictionary for improved governance.',
            'Used Visio to visualize ETL workflows and data flow processes.',
            'Created comprehensive testing and validation documentation for internal stakeholders.'
          ]
        }
      ],
      skills: [
        'ETL Testing',
        'Data Validation',
        'Data Governance',
        'Data Quality Assurance',
        'Visio',
        'SQL',
        'Process Mapping'
      ],
      highlights:
        'Established discipline in data accuracy, process visualization, and thorough technical documentation supporting technology modernization.',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    },

    '2015 - 2009': {
      title: 'Certified Pharmacy Technician',
      description:
        'Performed data-centric roles ensuring accuracy of patient and prescription records, supporting digital migrations and improving process efficiency.',
      icon: Briefcase,
      color: 'blue',
      experiences: [
        {
          type: 'Pharmacy Operations',
          title: 'Certified Pharmacy Technician - Mail Order',
          
          duration: 'Jan 2012 - Apr 2015',
          location: 'Cincinnati, KY',
          achievements: [
            'Validated and entered high volumes of patient data with accuracy and confidentiality.',
            'Created SIG short codes increasing productivity by 20% and reducing errors by 10%.',
            'Supported migration from legacy AS/400 system to web-based platform.',
            'Ensured operational completeness and customer service efficiency.'
          ]
        },
        {
          type: 'Retail Support',
          title: 'Certified Pharmacy Technician - Retail Pharmacy',
          
          duration: 'Feb 2009 - Jan 2012',
          location: 'Cincinnati, OH',
          achievements: [
            'Assisted pharmacists and customers in managing prescriptions and insurance data.',
            'Validated data accuracy during system upgrades and migrations.',
            'Supported migration from legacy AS/400 system to web-based platform.',
            'Handled daily transactions with exceptional attention to detail and compliance.'
          ]
        }
      ],
      skills: ['Data Entry', 'Data Validation', 'Process Optimization', 'Customer Service', 'System Testing'],
      highlights:
        'Cultivated precision, analytical focus, and data management foundations essential for transition into IT and QA fields.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    }
  };

  const yearButtons = Object.keys(experiences);
  const currentExperience = experiences[activeYear];
  const IconComponent = currentExperience.icon;

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
    return colorMap[color];
  };

  return (
    <section className="py-16 bg-gray-50 px-0 sm:px-0">
      <div className="w-full max-w-none mx-0 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 sm:px-6">
          {yearButtons.map((year) => {
            const experience = experiences[year];
            const YearIconComponent = experience.icon;
            const isActive = activeYear === year;
            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(
                  experience.color,
                  isActive
                )}`}
              >
                <YearIconComponent size={18} />
                <span>{year}</span>
              </button>
            );
          })}
        </div>

        <div
          className={`bg-white rounded-none sm:rounded-2xl shadow-lg border-2 ${currentExperience.border} overflow-hidden`}
        >
          <div className={`${currentExperience.icon_bg} px-6 py-4 border-b ${currentExperience.border}`}>
            <div className="flex items-center">
              <div
                className={`p-3 rounded-lg ${currentExperience.icon_bg} ${currentExperience.icon_text} mr-4`}
              >
                <IconComponent size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentExperience.title}</h3>
                <p className="text-gray-600">{currentExperience.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="text-blue-600 mr-2" size={20} />
                  Experience & Activities
                </h4>
                <div className="space-y-6">
                  {currentExperience.experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-6 pb-6">
                      <div className="mb-3">
                        <div className="flex items-center mb-1">
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium mr-3">
                            {exp.type}
                          </span>
                          <Calendar className="text-gray-400 mr-1" size={14} />
                          <span className="text-gray-500 text-sm">{exp.duration}</span>
                        </div>
                        <h5 className="text-lg font-semibold text-gray-900">{exp.title}</h5>
                        <div className="flex items-center text-gray-600 text-sm mt-1">
                          <span className="mr-3">{exp.organization}</span>
                          <MapPin className="mr-1" size={12} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3">
                            <CheckCircle
                              className="text-green-500 mt-1 flex-shrink-0"
                              size={14}
                            />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    Skills Developed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentExperience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="text-purple-600 mr-2" size={20} />
                    Key Highlights
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">{currentExperience.highlights}</p>
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

export default ExperienceSection;
