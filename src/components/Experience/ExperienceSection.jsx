import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle, Star, Briefcase, GraduationCap, Award } from 'lucide-react';

const ExperienceSection = () => {
  const [activeYear, setActiveYear] = useState('2024');

  const experiences = {
    '2024': {
      title: '2024 - Learning & Building',
      description: 'Started my journey into IT and Quality Assurance. Focused on building foundational skills through online courses and hands-on practice.',
      icon: GraduationCap,
      color: 'blue',
      experiences: [
        {
          type: 'Learning',
          title: 'QA Fundamentals Course',
          organization: 'Online Learning Platform',
          duration: 'January 2024 - March 2024',
          location: 'Remote',
          achievements: [
            'Completed comprehensive QA testing course',
            'Learned manual testing methodologies and best practices',
            'Practiced writing test cases and bug reports',
            'Gained understanding of SDLC and testing lifecycle'
          ]
        },
        {
          type: 'Practice',
          title: 'Personal Testing Projects',
          organization: 'Self-directed Learning',
          duration: 'April 2024 - Present',
          location: 'Remote',
          achievements: [
            'Completed 5+ hands-on testing projects',
            'Practiced testing different types of applications',
            'Built portfolio of testing documentation',
            'Created test cases for real-world scenarios'
          ]
        }
      ],
      skills: ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Basic Automation'],
      highlights: 'Transitioned from different field into IT, showing commitment to learning and growth.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    '2023': {
      title: '2023 - Career Transition Preparation',
      description: 'Began exploring IT careers and started building technical knowledge while working in previous role.',
      icon: Briefcase,
      color: 'green',
      experiences: [
        {
          type: 'Preparation',
          title: 'Career Research & Planning',
          organization: 'Self-directed',
          duration: 'September 2023 - December 2023',
          location: 'Remote',
          achievements: [
            'Researched IT career paths and opportunities',
            'Identified QA and testing as primary interest area',
            'Started learning basic computer science concepts',
            'Connected with IT professionals for guidance'
          ]
        },
        {
          type: 'Previous Role',
          title: 'Previous Position (Non-IT)',
          organization: 'Previous Company',
          duration: 'January 2023 - August 2023',
          location: 'City, State',
          achievements: [
            'Developed strong analytical and problem-solving skills',
            'Gained experience in attention to detail and quality focus',
            'Built communication and documentation skills',
            'Learned to work with processes and procedures'
          ]
        }
      ],
      skills: ['Problem Solving', 'Analytical Thinking', 'Documentation', 'Process Improvement'],
      highlights: 'Developed transferable skills that are valuable in QA and testing roles.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    '2025': {
      title: '2025 - Goals & Aspirations',
      description: 'Planning to expand skills in automation and data analysis while seeking opportunities to contribute to real projects.',
      icon: Award,
      color: 'purple',
      experiences: [
        {
          type: 'Goals',
          title: 'Automation Skills Development',
          organization: 'Planned Learning',
          duration: 'January 2025 - June 2025',
          location: 'Remote',
          achievements: [
            'Master Selenium WebDriver with Python',
            'Learn API testing with Postman and REST Assured',
            'Build comprehensive test automation framework',
            'Practice CI/CD integration for automated testing'
          ]
        },
        {
          type: 'Goals',
          title: 'Professional Experience',
          organization: 'Seeking Opportunities',
          duration: 'Mid 2025 onwards',
          location: 'Remote/Hybrid',
          achievements: [
            'Secure first professional QA or SDET role',
            'Contribute to real-world testing projects',
            'Work with experienced team members and mentors',
            'Apply learned skills in production environment'
          ]
        }
      ],
      skills: ['Test Automation', 'API Testing', 'Framework Development', 'CI/CD Integration'],
      highlights: 'Ready to apply learned skills in professional environment and contribute to team success.',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const yearButtons = Object.keys(experiences);
  const currentExperience = experiences[activeYear];
  const IconComponent = currentExperience.icon;

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

        {/* Year Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 sm:px-6">
          {yearButtons.map((year) => {
            const experience = experiences[year];
            const YearIconComponent = experience.icon;
            const isActive = activeYear === year;

            return (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(experience.color, isActive)}`}
              >
                <YearIconComponent size={18} />
                <span>{year}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Year Experience */}
        <div className={`bg-white rounded-none sm:rounded-2xl shadow-lg border-2 ${currentExperience.border} overflow-hidden`}>

          {/* Experience Header */}
          <div className={`${currentExperience.icon_bg} px-6 py-4 border-b ${currentExperience.border}`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${currentExperience.icon_bg} ${currentExperience.icon_text} mr-4`}>
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

              {/* Experience Details */}
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
                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={14} />
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills & Highlights */}
              <div className="space-y-6">

                {/* Skills Developed */}
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

                {/* Year Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="text-purple-600 mr-2" size={20} />
                    Key Highlights
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">{currentExperience.highlights}</p>
                  </div>
                </div>

                {/* Professional Growth */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Professional Growth</h4>
                  <p className="text-blue-700 mb-4 text-sm">
                    {activeYear === '2025'
                      ? "Ready to take the next step in my QA career. Looking for opportunities to apply my skills and continue learning with experienced teams."
                      : activeYear === '2024'
                        ? "Currently focused on building practical skills and gaining hands-on experience in QA and testing."
                        : "The foundation years that prepared me for a successful transition into IT and quality assurance."
                    }
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Let's Connect
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

export default ExperienceSection;
