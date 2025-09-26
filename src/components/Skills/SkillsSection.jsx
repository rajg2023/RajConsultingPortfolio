import React, { useState } from 'react';
import { Code, Database, TestTube, BarChart3, Users, Settings, CheckCircle, Star } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Technical');

  const skillCategories = [
    { name: 'Technical', icon: Code, color: 'blue' },
    { name: 'Testing & QA', icon: TestTube, color: 'green' },
    { name: 'Data Analytics', icon: BarChart3, color: 'purple' },
    { name: 'Leadership', icon: Users, color: 'orange' },
    { name: 'Tools & Platforms', icon: Settings, color: 'gray' }
  ];

  const skillsData = {
    'Technical': [
      { name: 'JavaScript', level: 90, years: '8 years', certified: true },
      { name: 'Python', level: 85, years: '6 years', certified: true },
      { name: 'Java', level: 80, years: '7 years', certified: false },
      { name: 'C#', level: 75, years: '5 years', certified: false },
      { name: 'SQL', level: 95, years: '10 years', certified: true },
      { name: 'HTML/CSS', level: 90, years: '8 years', certified: false },
      { name: 'React', level: 85, years: '4 years', certified: false },
      { name: 'Node.js', level: 80, years: '5 years', certified: false }
    ],
    'Testing & QA': [
      { name: 'Test Automation', level: 95, years: '8 years', certified: true },
      { name: 'Selenium', level: 90, years: '7 years', certified: true },
      { name: 'API Testing', level: 90, years: '6 years', certified: true },
      { name: 'Performance Testing', level: 85, years: '5 years', certified: false },
      { name: 'Load Testing', level: 80, years: '4 years', certified: false },
      { name: 'Security Testing', level: 75, years: '3 years', certified: false },
      { name: 'Mobile Testing', level: 85, years: '5 years', certified: false },
      { name: 'ISTQB Standards', level: 95, years: '10 years', certified: true }
    ],
    'Data Analytics': [
      { name: 'Tableau', level: 90, years: '5 years', certified: true },
      { name: 'Power BI', level: 85, years: '4 years', certified: true },
      { name: 'Excel Advanced', level: 95, years: '10 years', certified: false },
      { name: 'R Programming', level: 75, years: '3 years', certified: false },
      { name: 'Statistical Analysis', level: 80, years: '6 years', certified: false },
      { name: 'Data Visualization', level: 90, years: '5 years', certified: false },
      { name: 'ETL Processes', level: 85, years: '4 years', certified: false },
      { name: 'Big Data', level: 70, years: '2 years', certified: false }
    ],
    'Leadership': [
      { name: 'Team Management', level: 90, years: '8 years', certified: false },
      { name: 'Project Planning', level: 95, years: '10 years', certified: true },
      { name: 'Agile/Scrum', level: 90, years: '7 years', certified: true },
      { name: 'Mentoring', level: 85, years: '6 years', certified: false },
      { name: 'Client Relations', level: 90, years: '8 years', certified: false },
      { name: 'Process Improvement', level: 95, years: '9 years', certified: false },
      { name: 'Training & Development', level: 85, years: '5 years', certified: false },
      { name: 'Strategic Planning', level: 80, years: '4 years', certified: false }
    ],
    'Tools & Platforms': [
      { name: 'Jenkins', level: 85, years: '5 years', certified: false },
      { name: 'Docker', level: 80, years: '3 years', certified: false },
      { name: 'AWS', level: 85, years: '4 years', certified: true },
      { name: 'Azure', level: 75, years: '3 years', certified: false },
      { name: 'Git/GitHub', level: 90, years: '8 years', certified: false },
      { name: 'Jira', level: 95, years: '9 years', certified: false },
      { name: 'TestRail', level: 85, years: '6 years', certified: false },
      { name: 'Postman', level: 90, years: '5 years', certified: false }
    ]
  };

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', light: 'bg-orange-50', border: 'border-orange-200' },
      gray: { bg: 'bg-gray-500', text: 'text-gray-600', light: 'bg-gray-50', border: 'border-gray-200' }
    };
    return colorMap[color][type] || colorMap.blue[type];
  };

  const getCurrentCategoryColor = () => {
    const category = skillCategories.find(cat => cat.name === activeCategory);
    return category ? category.color : 'blue';
  };

  return (
    <section className="min-h-screen flex items-center py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 10 years of hands-on experience across multiple technologies, testing frameworks,
            and data analytics platforms with industry certifications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const isActive = activeCategory === category.name;

            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${isActive
                    ? `${getColorClasses(category.color, 'bg')} text-white shadow-lg`
                    : `bg-white text-gray-600 hover:${getColorClasses(category.color, 'light')} hover:${getColorClasses(category.color, 'text')} shadow-sm border ${getColorClasses(category.color, 'border')}`
                  }`}
              >
                <IconComponent size={20} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData[activeCategory].map((skill, index) => (
            <div key={skill.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                <div className="flex items-center space-x-2">
                  {skill.certified && (
                    <div className="bg-green-100 p-1 rounded-full">
                      <CheckCircle className="text-green-600 w-4 h-4" />
                    </div>
                  )}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${i < Math.floor(skill.level / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`${getColorClasses(getCurrentCategoryColor(), 'bg')} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Experience: {skill.years}</span>
                {skill.certified && (
                  <span className="text-green-600 font-medium">Certified</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Skills Summary</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
