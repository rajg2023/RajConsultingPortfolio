import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutMe = () => {
  const specializations = ['QA & Testing', 'SDET Solutions', 'Data Analytics'];
  const achievements = [
    { icon: '🏆', text: '50+ Projects Delivered' },
    { icon: '📈', text: '40% Efficiency Gains' },
    { icon: '🎓', text: '15+ Certifications' }
  ];
  const highlights = [
    { label: 'QA Expert', color: 'bg-blue-100 text-blue-800' },
    { label: 'SDET Specialist', color: 'bg-green-100 text-green-800' },
    { label: 'Data Analyst', color: 'bg-purple-100 text-purple-800' },
    { label: 'Process Optimizer', color: 'bg-orange-100 text-orange-800' },
    { label: 'Team Leader', color: 'bg-red-100 text-red-800' }
  ];

  return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-6">
            JD
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
          <p className="text-blue-600 font-medium mb-8">Independent Consultant</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Get in Touch
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
              View Services
            </button>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 10 years of experience in technology and business consulting, I help organizations 
              optimize their processes, implement cutting-edge solutions, and drive digital transformation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My expertise spans QA analysis, software development, data analytics, and strategic planning. I 
              take a holistic approach to problem-solving, combining technical skills with business acumen to 
              deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specializations</h3>
              <div className="space-y-3">
                {specializations.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-blue-500 w-5 h-5" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-xl">{achievement.icon}</span>
                    <span className="text-gray-700">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Highlights</h3>
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight, index) => (
                <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${highlight.color}`}>
                  {highlight.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
