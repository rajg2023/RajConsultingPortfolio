import React from 'react';
import { CheckCircle } from 'lucide-react';
import { usePublishedContent } from '../../hooks/usePublishedContent';

const AboutMe = () => {
  const { content, isLoading } = usePublishedContent();
  const about = content?.about;

  const specializations = about?.specializations || ['QA & Testing', 'SDET Solutions', 'Data Analytics'];
  const achievements = (about?.achievements || ['50+ Projects Delivered', '40% Efficiency Gains', '15+ Certifications']).map((t) => ({ icon: '🏆', text: t }));

  return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          {about?.avatar ? (
            <img src={about.avatar} alt={about.name || 'Avatar'} className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow" />
          ) : (
            <div className="w-40 h-40 bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mb-6">
              {(about?.name || 'User').split(' ').map(w => w[0]).slice(0,2).join('')}
            </div>
          )}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{about?.name || 'Your Name'}</h1>
          <p className="text-blue-600 font-medium mb-8">{about?.title || 'Independent Consultant'}</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
            <a href={content?.contact?.email ? `mailto:${content.contact.email}` : '#'} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
              Get in Touch
            </a>
            <a href="#services" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200">
              View Services
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-8">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">{about?.bio || 'Add your bio in the Admin panel.'}</p>
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
