import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'E-commerce Platform QA',
      desc: 'Led QA efforts for a major e-commerce platform, reducing defects by 40%.',
      tags: ['QA', 'Automation', 'E-commerce'],
      achievements: [
        'Reduced defects by 40% through comprehensive test automation',
        'Implemented CI/CD pipeline reducing release cycles from 2 weeks to 2 days',
        'Mentored junior QA engineers on automation best practices',
      ],
    },
    {
      title: 'Mobile App Testing',
      desc: 'Led manual and automation tests for a high-traffic mobile app.',
      tags: ['Mobile', 'Test Automation', 'Manual Testing'],
      achievements: [
        'Designed test cases for 20+ releases',
        'Automated regression tests improving release quality',
      ],
    },
    {
      title: 'Data Migration Verification',
      desc: 'Validated data accuracy during large-scale database migration.',
      tags: ['Data Migration', 'ETL', 'SQL'],
      achievements: [
        'Verified 99.9% data accuracy',
        'Created SQL scripts for data validation',
      ],
    },
  ];

  return (
    <section id="projects" className="container mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-2">Featured Projects</h2>
      <p className="mb-6">A selection of impactful projects demonstrating my expertise and approach to problem-solving.</p>
      <nav className="flex space-x-4 border-b mb-6">
        {projects.map((proj, idx) => (
          <button
            key={idx}
            className={`pb-2 ${activeProject === idx ? 'border-b-2 border-blue-600 text-blue-600 font-semibold' : 'text-gray-600'}`}
            onClick={() => setActiveProject(idx)}
          >
            Project {idx + 1}
          </button>
        ))}
      </nav>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-blue-600 text-white flex items-center justify-center rounded-lg p-12 flex-1 text-4xl font-bold">
          Project {activeProject + 1}
        </div>
        <div className="bg-gray-50 flex-1 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">{projects[activeProject].title}</h3>
          <p className="mb-4">{projects[activeProject].desc}</p>
          <div className="space-x-2 mb-4">
            {projects[activeProject].tags.map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">{tag}</span>
            ))}
          </div>
          <h4 className="font-semibold mb-2">Key Achievements</h4>
          <ul className="list-disc list-inside text-gray-700">
            {projects[activeProject].achievements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
