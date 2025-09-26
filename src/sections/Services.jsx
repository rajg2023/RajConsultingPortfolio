import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('QA');

  const tabs = ['QA', 'SDET', 'Data'];
  const content = {
    QA: [
      { title: 'QA Consulting', desc: 'Comprehensive quality assurance services including test strategy, automation, and process improvement.', price: '$150/hr' },
      { title: 'QA Automation', desc: 'Implement automated testing solutions to improve coverage and efficiency.', price: '$160/hr' },
      { title: 'QA Process Audit', desc: 'Review and optimize your existing QA processes and methodologies.', price: '$170/hr' },
    ],
    SDET: [
      { title: 'SDET Consulting', desc: 'Quality engineering solutions for continuous integration and deployment.', price: '$175/hr' },
      { title: 'Framework Development', desc: 'Develop robust test automation frameworks.', price: '$180/hr' },
      { title: 'Code Reviews', desc: 'Automated test script reviews and optimization.', price: '$165/hr' },
    ],
    Data: [
      { title: 'Data Analysis', desc: 'Insightful data analysis and visualization services.', price: '$140/hr' },
      { title: 'ETL Testing', desc: 'Validate and verify ETL processes for data integrity.', price: '$150/hr' },
      { title: 'BI Solutions', desc: 'Develop business intelligence dashboards and reports.', price: '$155/hr' },
    ],
  };

  return (
    <section id="services" className="container mx-auto my-12 p-6 bg-white rounded-lg shadow">
      <h2 className="text-3xl font-semibold mb-6">My Services</h2>
      <p className="mb-8">Comprehensive consulting services tailored to meet your business needs and drive measurable results.</p>
      <div>
        <ul className="flex space-x-6 border-b">
          {tabs.map(tab => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 ${activeTab === tab ? 'border-b-2 border-blue-600 text-blue-600 font-semibold' : 'text-gray-600'}`}
            >
              {tab} Services
            </li>
          ))}
        </ul>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {content[activeTab].map(({ title, desc, price }, idx) => (
            <div key={idx} className="p-4 shadow bg-blue-50 rounded">
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="mb-4">{desc}</p>
              <p className="text-sm font-bold">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
