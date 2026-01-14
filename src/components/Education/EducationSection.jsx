import React, { useState } from 'react';
import { GraduationCap, Book, Award, CheckCircle, Star, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const [activeEducation, setActiveEducation] = useState('Formal Education');

  const education = {
    'Formal Education': {
      title: "Bachelor's Degree & Academic Foundation",
      description: 'Formal education that built a strong analytical, research, and communication foundation for technology-driven roles.',
      icon: GraduationCap,
      color: 'blue',
      details: [
        'Studied Humanities, gaining multidisciplinary analytical skills',
        'Developed proficiency in critical thinking and problem-solving',
        'Completed research-based projects and academic writing assignments',
        'Improved time management through structured coursework and deadlines',
        'Collaborated in team-based projects focusing on human behavior and societal analysis',
        'Enhanced communication and logical reasoning through structured academic inquiry',
        'Built resilience and adaptability through independent study',
        'Applied systematic methodologies to research topics and presentations'
      ],
      achievements: ['Bachelor of Arts in Humanities', 'Academic Excellence', 'Research Projects', 'Team Collaboration'],
      duration: '2004 - 2007',
      institution: 'University of North Bengal',
      learnings: 'Provided a foundation in analytical and structured thinking, enabling transition into technology and data-driven work.',
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },

    'IT Training': {
      title: 'Technical & Software Training Programs',
      description: 'Intensive non-degree training programs to develop IT and software testing capabilities through hands-on learning.',
      icon: Book,
      color: 'green',
      details: [
        'Completed Java Software Development Bootcamp at Technical Training Institute',
        'Learned object-oriented programming fundamentals and Java syntax',
        'Gained practical experience with front-end and back-end integration',
        'Undertook QA Assurance Testing program at Technical Training Institute, focusing on SDLC and STLC processes',
        'Completed Java Software Development training at Software Development Bootcamp Institute',
        'Learned object-oriented programming fundamentals and Java syntax',
        'Gained practical experience with front-end and back-end integration',
        'Undertook QA Assurance Testing program at IT Training institute, focusing on SDLC and STLC processes',
        'Performed manual testing and documentation exercises for web apps',
        'Completed CompTIA A+ and Network+ technical support training at Technical Training Institute',
        'Built skills in hardware and network troubleshooting',
        'Strengthened understanding of technical operations and IT project workflows'
      ],
      achievements: ['Java Development Bootcamp', 'Software QA Testing', 'CompTIA A+ & Net+ Training', 'Scrum/Agile Fundamentals'],
      duration: '2016 - 2017',
      institution: 'Java Software Development Bootcamp, Software QA Analyst and IT support training',
      learnings: 'Hands-on IT training developed strong problem-solving and practical testing experience for software-focused roles.',
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },

    'Certifications': {
      title: 'Professional Certifications & Continuing Learning',
      description: 'Continual professional learning through recognized certifications to strengthen data and analytical expertise.',
      icon: Award,
      color: 'purple',
      details: [
        'Earned Google Data Analytics Professional Certificate on Coursera (2025)',
        'Mastered data cleaning, visualization, and statistical analysis techniques',
        'Applied SQL, Tableau, and R programming in real-world analytical scenarios',
        'Completed capstone projects focusing on business insights from data sets',
        'Enhanced understanding of data-driven decision-making frameworks',
        'Explored predictive analytics, KPI reporting, and dashboard automation',
        'Built transferable analytics skills for QA and testing data analysis integration',
        'Committed to continuous learning and certification updates'
      ],
      achievements: ['Google Data Analytics Certificate', 'Data Visualization Projects', 'SQL & Tableau Practice', 'Continuous Learning'],
      duration: '2025',
      institution: 'Coursera (Google)',
      learnings: 'Solidified analytical skills aligned with modern QA and technology environments, emphasizing data-driven excellence.',
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
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100'
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
