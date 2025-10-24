import React from 'react';
import { Code, Workflow, CheckCircle, TrendingUp } from 'lucide-react';

const SDET = () => (
  <div className="space-y-8">
    {/* Intro */}
    <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">What is SDET?</h2>
      <p className="text-gray-700 leading-relaxed">
        A Software Development Engineer in Test (SDET) blends development and testing expertise to 
        build, automate, and maintain testing frameworks that guarantee software reliability 
        throughout CI/CD pipelines.
      </p>
    </div>

    {/* Frameworks & Tools */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Automation Frameworks & Tools</h3>
      <div className="flex flex-wrap gap-4">
        {['Selenium', 'Appium', 'JUnit', 'RestAssured', 'GitHub Actions'].map((tool, i) => (
          <span key={i} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-full font-medium shadow-sm">
            {tool}
          </span>
        ))}
      </div>
    </div>

    {/* Workflow */}
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
      <div className="flex items-center mb-4">
        <Workflow className="text-green-600 mr-3" size={26} />
        <h3 className="text-2xl font-bold text-gray-900">Automation Testing Lifecycle</h3>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Planning automation scope and selecting frameworks</li>
        <li>Developing reusable test scripts and libraries</li>
        <li>Integrating with CI/CD tools for automated runs</li>
        <li>Monitoring execution results and defect reporting</li>
        <li>Continuous improvement through code review</li>
      </ul>
    </div>

    {/* Trust */}
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 border border-green-200 rounded-2xl text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">My Commitment</h3>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
        I’m expanding my skills to master automation frameworks and collaborate with 
        development teams. Each project helps me enhance testing quality while learning 
        continuously — ensuring technical growth and reliable deliveries.
      </p>
      <div className="flex justify-center items-center mt-4 text-green-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Focused on delivering scalable, automated QA solutions.</span>
      </div>
    </div>
  </div>
);

export default SDET;
