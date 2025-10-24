import React from 'react';
import { CheckCircle, Workflow, Code, TrendingUp } from 'lucide-react';

const QualityAssuranceEngineer = () => (
  <div className="space-y-8">
    {/* Introduction */}
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Software QA Testing?</h2>
      <p className="text-gray-700 leading-relaxed">
        Quality Assurance Testing ensures that software meets its functional and performance 
        expectations before release. It focuses on detecting issues early, improving user 
        experience, and maintaining system reliability.
      </p>
    </div>

    {/* Manual vs Automation */}
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual and Automation Testing</h3>
      <p className="text-gray-700 mb-4">
        Manual testing involves hands‑on verification of application behavior, while automation 
        testing uses scripts and tools to accelerate testing cycles. Both are essential parts of 
        a modern QA workflow.
      </p>
      <div className="flex flex-wrap gap-4">
        {['Selenium', 'JUnit', 'Postman', 'Appium', 'QTP', 'UFT'].map((tool, i) => (
          <span
            key={i}
            className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-full text-base font-medium shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>

    {/* STLC Overview */}
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
      <div className="flex items-center mb-4">
        <Workflow className="text-blue-600 mr-3" size={26} />
        <h3 className="text-2xl font-bold text-gray-900">Software Testing Lifecycle (STLC)</h3>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>1. Requirement Analysis</strong> – Review business and technical needs.</li>
        <li><strong>2. Test Planning</strong> – Define scope, types, and timelines.</li>
        <li><strong>3. Test Case Design</strong> – Prepare detailed steps and expected results.</li>
        <li><strong>4. Test Execution</strong> – Run tests, compare outputs, and report defects.</li>
        <li><strong>5. Defect Tracking</strong> – Analyze, retest, and validate fixes.</li>
        <li><strong>6. Closure</strong> – Evaluate coverage and prepare release notes.</li>
      </ul>
    </div>

    {/* Trust Section */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Why Work With Me?</h3>
      <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
        Even though I’m still building my experience, I’m deeply committed to continuous learning 
        and applying best practices. I take every project as a chance to prove reliability and 
        attention to detail through disciplined, well‑structured testing processes.
      </p>
      <div className="flex items-center justify-center mt-4 text-amber-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Driven to deliver dependable results and earn your trust</span>
      </div>
    </div>
  </div>
);

export default QualityAssuranceEngineer;
