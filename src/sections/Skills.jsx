import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
      <p className="mb-8">A comprehensive set of technical and analytical skills honed through years of diverse consulting projects.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 shadow rounded bg-blue-50">
          <h4 className="font-semibold mb-2">QA Analysis</h4>
          <p>Expert in quality assurance methodologies, test planning, and defect tracking.</p>
          <small className="italic">Skill Level: Expert</small>
        </div>
        <div className="p-4 shadow rounded bg-blue-50">
          <h4 className="font-semibold mb-2">Software Development</h4>
          <p>Proficient in multiple programming languages and development methodologies.</p>
          <small className="italic">Skill Level: Advanced</small>
        </div>
        <div className="p-4 shadow rounded bg-blue-50">
          <h4 className="font-semibold mb-2">Test Automation</h4>
          <p>Skilled in creating and maintaining automated test frameworks.</p>
          <small className="italic">Skill Level: Expert</small>
        </div>
      </div>
    </section>
  );
}

export default Skills;
