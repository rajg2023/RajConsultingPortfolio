import React, { useState, lazy, Suspense } from 'react';
import { Code, TestTube, BarChart3, Users, Settings, CheckCircle } from 'lucide-react';

// Lazy load the TechnicalSkills component
const TechnicalSkills = lazy(() => import('./TechnicalSkills'));

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Technical');

  const skillCategories = [
    {
      name: 'Technical',
      icon: Code,
      color: 'blue',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200',
      description: 'Work and Hands on experience with technical skills'
    },
    {
      name: 'Domain/Compliance & Processes',
      icon: Code,
      color: 'green',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200',
      description: 'Domain/Compliance & Processes knowledge'
    },
    {
      name: 'Leadership',
      icon: Users,
      color: 'orange',
      icon_bg: 'bg-orange-50',
      icon_text: 'text-orange-600',
      border: 'border-orange-200',
      description: 'Team and project leadership abilities'
    },
    {
      name: 'Other Tools & Platforms',
      icon: Settings,
      color: 'purple',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200',
      description: 'Other tools and platforms knowledge from work and hands on experience'
    }
  ];

  const skillsData = {
    'Domain/Compliance & Processes': [
      // Compliance & Regulations
      { name: 'HIPAA Compliance', level: 70 },
      { name: 'PHI Protection', level: 75 },
      { name: 'GRC (Governance, Risk & Compliance)', level: 65 },
      { name: 'Security GRC', level: 70 },

      // Healthcare & Retail Systems
      { name: 'EHR Systems', level: 65 },
      { name: 'Retail POS Systems', level: 60 },

      // Testing Methodologies
      { name: 'Agile/Scrum', level: 80 },
      { name: 'SDLC', level: 85 },
      { name: 'STLC', level: 85 },
      { name: 'UAT (User Acceptance Testing)', level: 80 },
      { name: 'Integration Testing', level: 75 },

      // Data Management
      { name: 'ETL Testing', level: 70 },
      { name: 'Data Mapping', level: 75 },
      { name: 'Data Lineage', level: 70 },
      { name: 'Data Validation', level: 80 },
      { name: 'KDEs (Key Data Elements)', level: 65 },

      // Documentation
      { name: 'FSD (Functional Specification Document)', level: 75 },
      { name: 'TDD (Technical Design Document)', level: 70 },
      { name: 'RTM (Requirement Traceability Matrix)', level: 80 },
      { name: 'T2T (Table-to-Table) Mapping', level: 70 },

      // System Operations
      { name: 'System Migration', level: 75 },
      { name: 'Patch/Release Management', level: 70 },
      { name: 'TVM (Threat Vulnerability Management)', level: 65 },
      { name: 'Defect Reproduction', level: 80 },
      { name: 'Log Analysis', level: 75 }
    ],
    'Leadership': [
      { name: 'Team Leadership', level: 10 },
      { name: 'Mentoring & Coaching', level: 55 },
      { name: 'Strategic Planning', level: 40 },
      { name: 'Decision Making', level: 10 },

      // Communication & Collaboration
      { name: 'Cross-functional Collaboration', level: 90 },
      { name: 'Effective Communication', level: 90 },
      { name: 'Public Speaking', level: 75 },
      { name: 'Organizing Meetings', level: 85 },

      // Professional Skills
      { name: 'Critical Thinking', level: 80 },
      { name: 'Problem Solving', level: 80 },
      { name: 'Attention to Detail', level: 80 },
      { name: 'Time Management', level: 88 },

      // Personal Development
      { name: 'Eagerness to Learn', level: 95 },
      { name: 'Adaptability', level: 90 },
      { name: 'Initiative', level: 88 },
      { name: 'Project Management', level: 30 },
      { name: 'Agile/Scrum', level: 60 },
      { name: 'Mentoring', level: 50 },
      { name: 'Public Speaking', level: 70 },
      { name: 'Organaizating Meetings', level: 60 },
      { name: 'Organaizating Meetings', level: 60 },
      { name: 'Strategic Planning', level: 40 }
    ],
    'Other Tools & Platforms': [
      // Version Control & Development
      { name: 'Git', level: 70 },
      { name: 'GitHub', level: 75 },
      { name: 'GitBash', level: 70 },

      // Cloud & Virtualization
      { name: 'AWS', level: 30 },
      { name: 'Azure', level: 30 },
      { name: 'Heroku', level: 40 },
      { name: 'Google Workspace', level: 65 },
      { name: 'Big Query', level: 35 },
      { name: 'VirtualBox', level: 60 },
      { name: 'VMWare', level: 50 },

      // Development Tools
      { name: 'VS Code', level: 80 },
      { name: 'Eclipse', level: 70 },
      { name: 'NetBeans', level: 60 },

      // AI & ML Tools
      { name: 'ChatGPT', level: 75 },
      { name: 'Gemini', level: 70 },
      { name: 'Claude', level: 70 },
      { name: 'Perplexity', level: 75 },
      { name: 'CoPilot', level: 70 },
      { name: 'Llama', level: 60 },
      { name: 'DALL·E', level: 65 },
      { name: 'HuggingFace', level: 60 },
      { name: 'Bard', level: 70 },
      { name: 'OpenAI', level: 75 },
      { name: 'Other LLMs', level: 70 },

      // System & Network
      { name: 'Docker', level: 40 },
      { name: 'Kubernetes', level: 10 },
      { name: 'Jenkins', level: 20 },
      { name: 'WinSCP', level: 65 },
      { name: 'PuTTY', level: 70 },
      { name: 'AnyConnect', level: 60 },
      { name: 'WindSurf', level: 55 },

      // Office & Productivity
      { name: 'Microsoft Office Suite', level: 85 },

      // Hardware
      { name: 'CPUs', level: 75 },
      { name: 'SSDs', level: 80 },
      { name: 'RAM', level: 80 },
      { name: 'Adapters', level: 70 },
      { name: 'I/O Panels', level: 65 },
      { name: 'PSU', level: 70 }
    ]
  };

  const currentCategory = skillCategories.find(cat => cat.name === activeCategory) || skillCategories[0];
  const CategoryIcon = currentCategory?.icon;
  const skillsToShow = skillsData[activeCategory] || [];

  // Helper function to get button color classes
  const getButtonColorClasses = (color, isActive = false) => {
    const colorMap = {
      blue: isActive ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: isActive ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: isActive ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
      orange: isActive ? 'bg-orange-500 text-white shadow-lg' : 'bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100',
      gray: isActive ? 'bg-gray-500 text-white shadow-lg' : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-16 bg-gray-50 px-0 sm:px-0">
      <div className="w-full max-w-none mx-0 px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 sm:px-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getButtonColorClasses(category.color, isActive)}`}
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Content */}
        <div className="bg-white rounded-none sm:rounded-2xl shadow-lg border-2 overflow-hidden" style={{ borderColor: `var(--color-${currentCategory.color}-200)` }}>
          {/* Category Header */}
          <div
            className={`px-6 py-4 border-b`}
            style={{
              backgroundColor: `var(--color-${currentCategory.color}-50)`,
              borderColor: `var(--color-${currentCategory.color}-200)`
            }}
          >
            <div className="flex items-center">
              <div
                className={`p-3 rounded-lg mr-4`}
                style={{
                  backgroundColor: `var(--color-${currentCategory.color}-50)`,
                  color: `var(--color-${currentCategory.color}-600)`
                }}
              >
                <CategoryIcon size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ color: `var(--color-${currentCategory.color}-900)` }}>
                  {currentCategory.name} Skills
                </h3>
                <p className="text-gray-600">{currentCategory.description}</p>
              </div>
            </div>
          </div>

          {/* Skills Content */}
          <div className="p-6">
            {activeCategory === 'Technical' ? (
              <Suspense fallback={
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              }>
                <TechnicalSkills />
              </Suspense>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillsToShow.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-200 border border-gray-100">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                        {skill.years && <p className="text-sm text-gray-500">{skill.years} of experience</p>}
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500`}
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: `var(--color-${currentCategory.color}-500)`
                        }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 flex justify-between">
                      <span>Proficiency</span>
                      <span className="font-medium">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 border-t">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Technical Skills</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">9+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-600">Clients Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
