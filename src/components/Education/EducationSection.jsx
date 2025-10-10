import React, { useState } from 'react';
import { GraduationCap, Book, Award, CheckCircle, Star, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const [activeEducation, setActiveEducation] = useState('Formal Education');

  const education = {
    'Formal Education': {
      title: 'Bachelor\'s Degree & Academic Foundation',
      description: 'My formal educational background that provided the analytical and problem-solving foundation for my IT career.',
      icon: GraduationCap,
      color: 'blue',
      details: [
        'Graduated with strong analytical and critical thinking skills',
        'Developed research methodologies and data analysis capabilities',
        'Gained experience in project management and team collaboration',
        'Built excellent written and verbal communication skills',
        'Learned systematic problem-solving approaches',
        'Practiced attention to detail through academic assignments',
        'Developed time management and organizational skills',
        'Built foundation in logical reasoning and structured thinking'
      ],
      achievements: ['Bachelor\'s Degree', 'Academic Excellence', 'Research Projects', 'Team Leadership'],
      duration: '4 years',
      institution: 'University Name',
      learnings: 'Strong academic foundation that translates directly to systematic approaches in QA and testing.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    'IT Training': {
      title: 'Quality Assurance & Testing Training',
      description: 'Focused IT training programs to build practical QA and testing skills for career transition.',
      icon: Book,
      color: 'green',
      details: [
        'Completed comprehensive QA testing fundamentals course (40+ hours)',
        'Learned SDLC, STLC, and testing methodologies',
        'Practiced manual testing techniques and best practices',
        'Mastered test case design and execution strategies',
        'Gained hands-on experience with bug reporting and tracking',
        'Studied Agile and Scrum testing approaches',
        'Learned API testing concepts and tools',
        'Practiced cross-browser and mobile testing techniques'
      ],
      achievements: ['QA Fundamentals Certificate', 'Manual Testing', 'Test Documentation', 'Agile Testing'],
      duration: '6 months',
      institution: 'Online Learning Platforms',
      learnings: 'Gained practical QA skills and industry-standard testing methodologies through structured learning.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    'Certifications': {
      title: 'Professional Certifications & Continuous Learning',
      description: 'Ongoing certification journey to validate skills and stay current with industry best practices.',
      icon: Award,
      color: 'purple',
      details: [
        'ISTQB Foundation Level certification (In Progress)',
        'Selenium WebDriver with Python certification completed',
        'Postman API Testing certification earned',
        'Agile Testing methodology course completed',
        'Basic SQL for testers course finished',
        'Chrome DevTools for testing workshop attended',
        'Git and version control for testers course completed',
        'Continuous learning through online communities and forums'
      ],
      achievements: ['Selenium Certification', 'API Testing Certificate', 'Agile Testing', 'ISTQB (Planned)'],
      duration: 'Ongoing',
      institution: 'Various Certification Bodies',
      learnings: 'Building credible professional credentials while staying updated with latest testing tools and practices.',
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const educationNames = Object.keys(education);
  const currentEducation = education[activeEducation];
  const IconComponent = currentEducation.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
    };
    return colorMap[color] || '';
  };

  return (
    <section className="py-16 bg-gray-50 px-0 sm:px-0">
      <div className="w-full max-w-none mx-0 px-4 sm:px-6 lg:px-8">
        {/* Education Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 px-4 sm:px-6">
          {educationNames.map((educationName) => {
            const educationItem = education[educationName];
            const EducationIconComponent = educationItem.icon;
            const isActive = activeEducation === educationName;
            
            return (
              <button
                key={educationName}
                onClick={() => setActiveEducation(educationName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(educationItem.color, isActive)}`}
              >
                <EducationIconComponent size={18} />
                <span>{educationName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Education Details */}
        <div className={`bg-white rounded-none sm:rounded-2xl shadow-lg border-2 ${currentEducation.border} overflow-hidden`}>
          
          {/* Education Header */}
          <div className={`${currentEducation.icon_bg} px-6 py-4 border-b ${currentEducation.border}`}>
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${currentEducation.icon_bg} ${currentEducation.icon_text} mr-4`}>
                <IconComponent size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentEducation.title}</h3>
                <p className="text-gray-600">{currentEducation.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Education Details */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Learning Outcomes
                </h4>
                <div className="space-y-3">
                  {currentEducation.details.map((detail, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Info */}
              <div className="space-y-6">
                
                {/* Key Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="text-yellow-500 mr-2" size={20} />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentEducation.achievements.map((achievement, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education Details */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Calendar className="text-blue-600 mr-2" size={20} />
                    Education Details
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-gray-900">{currentEducation.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Institution:</span>
                      <span className="font-medium text-gray-900">{currentEducation.institution}</span>
                    </div>
                  </div>
                </div>

                {/* Key Learnings */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={20} />
                    Impact on Career
                  </h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-gray-700">{currentEducation.learnings}</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Continuous Learning</h4>
                  <p className="text-blue-700 mb-4 text-sm">
                    I believe in lifelong learning and staying current with industry trends and best practices.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Let's Discuss
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

export default EducationSection;
