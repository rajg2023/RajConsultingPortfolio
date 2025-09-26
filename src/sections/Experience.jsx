import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('2020-Present');

  const tabs = ['2020-Present', '2017-2020', '2014-2017'];
  const experiences = {
    '2020-Present': {
      role: 'Senior QA Consultant',
      company: 'TechSolutions Inc.',
      description: 'Leading QA initiatives for Fortune 500 clients, implementing test automation strategies, and mentoring junior consultants.',
      achievements: [
        'Led QA initiatives for Fortune 500 clients',
        'Implemented test automation strategies across multiple projects',
        'Mentored junior consultants and improved team productivity',
      ],
    },
    '2017-2020': {
      role: 'QA Lead',
      company: 'InnovateSoft',
      description: 'Managed QA teams and coordinated multi-project test plans.',
      achievements: [
        'Reduced bug backlog by 30%',
        'Introduced automated regression testing',
      ],
    },
    '2014-2017': {
      role: 'QA Analyst',
      company: 'SoftWare Hub',
      description: 'Executed manual and automated tests and reported defects.',
      achievements: [
        'Improved test case coverage from 65% to 90%',
        'Trained new QA team members',
      ],
    },
  };

  return (
    <section id="experience" className="container mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>
      <p className="mb-8">My career journey and the roles that have shaped my consulting expertise.</p>

      <nav className="flex space-x-6 border-b mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`pb-2 ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 font-semibold' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="flex gap-8">
        <div className="bg-blue-600 text-white rounded-lg p-12 flex-grow flex items-center justify-center text-4xl font-bold">
          {activeTab === '2020-Present' ? 'Current Role' : activeTab}
        </div>
        <div className="flex-grow bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">{experiences[activeTab].role}</h3>
          <a href="#" className="text-blue-600 underline mb-2 block">{experiences[activeTab].company}</a>
          <p className="mb-4">{experiences[activeTab].description}</p>
          <h4 className="font-semibold mb-2">Key Achievements</h4>
          <ul className="list-disc list-inside text-gray-700">
            {experiences[activeTab].achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
