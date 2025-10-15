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
      description: 'Programming languages and technical skills'
    },
    { 
      name: 'Testing & QA', 
      icon: TestTube, 
      color: 'green',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200',
      description: 'Quality assurance and testing expertise'
    },
    { 
      name: 'Data Analytics', 
      icon: BarChart3, 
      color: 'purple',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200',
      description: 'Data analysis and visualization skills'
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
      name: 'Tools & Platforms', 
      icon: Settings, 
      color: 'gray',
      icon_bg: 'bg-gray-50',
      icon_text: 'text-gray-600',
      border: 'border-gray-200',
      description: 'Development tools and platforms'
    }
  ];

  const skillsData = {
    'Technical': [
      { name: 'Java', level: 90, years: '8 years', certified: true },
      { name: 'Python', level: 85, years: '5 years', certified: true },
      { name: 'JavaScript', level: 90, years: '6 years', certified: true },
      { name: 'TypeScript', level: 80, years: '4 years', certified: true },
      { name: 'SQL', level: 90, years: '8 years', certified: true },
      { name: 'Bash/Shell', level: 80, years: '5 years', certified: false }
    ],
    'Testing & QA': [
      { name: 'Cypress', level: 85, years: '3 years', certified: false },
      { name: 'Selenium', level: 80, years: '4 years', certified: true },
      { name: 'JUnit', level: 75, years: '5 years', certified: false },
      { name: 'TestNG', level: 80, years: '4 years', certified: true },
      { name: 'Postman', level: 85, years: '5 years', certified: true }
    ],
    'Data Analytics': [
      { name: 'SQL', level: 90, years: '8 years', certified: true },
      { name: 'Tableau', level: 85, years: '4 years', certified: true },
      { name: 'Power BI', level: 80, years: '3 years', certified: false },
      { name: 'Python', level: 80, years: '5 years', certified: false },
      { name: 'Excel', level: 90, years: '10 years', certified: true },
      { name: 'R', level: 70, years: '2 years', certified: false }
    ],
    'Leadership': [
      { name: 'Team Leadership', level: 90, years: '8 years', certified: true },
      { name: 'Project Management', level: 85, years: '6 years', certified: true },
      { name: 'Agile/Scrum', level: 90, years: '7 years', certified: true },
      { name: 'Mentoring', level: 85, years: '5 years', certified: false },
      { name: 'Public Speaking', level: 80, years: '4 years', certified: false },
      { name: 'Strategic Planning', level: 85, years: '6 years', certified: false }
    ],
    'Tools & Platforms': [
      { name: 'Git', level: 95, years: '8 years', certified: true },
      { name: 'Docker', level: 85, years: '4 years', certified: true },
      { name: 'AWS', level: 80, years: '3 years', certified: true },
      { name: 'Azure', level: 75, years: '2 years', certified: false },
      { name: 'Jenkins', level: 85, years: '5 years', certified: false },
      { name: 'Kubernetes', level: 70, years: '2 years', certified: false }
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
