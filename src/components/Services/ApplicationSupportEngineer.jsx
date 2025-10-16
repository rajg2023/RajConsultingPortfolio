import React from 'react';
import { Headphones, Workflow, TrendingUp } from 'lucide-react';

const ApplicationSupportEngineer = () => (
  <div className="space-y-8">
    <div className="bg-purple-50 border border-purple-200 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Application Support?</h2>
      <p className="text-gray-700">
        Application Support Engineers ensure applications perform smoothly after deployment 
        by diagnosing, monitoring, and resolving production issues while maintaining uptime.
      </p>
    </div>

    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Focus Areas</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Incident response and ticket triaging</li>
        <li>Database troubleshooting and log analysis</li>
        <li>Patch deployment and version updates</li>
        <li>Performance monitoring and RCA reporting</li>
      </ul>
    </div>

    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 p-8 rounded-2xl">
      <Workflow className="text-purple-600 mb-3" size={26} />
      <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Support Lifecycle</h3>
      <p className="text-gray-700">
        Detect alert → diagnose → apply fix or escalate → verify resolution → document knowledge. 
        Continuous monitoring ensures service reliability and client satisfaction.
      </p>
    </div>

    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 text-center">
      <h3 className="text-2xl font-bold mb-3 text-gray-900">Commitment to Learning</h3>
      <p className="text-gray-700 leading-relaxed">
        I may be early in my application support journey, but I’m eager to master monitoring tools 
        and system diagnostics. My focus is understanding root causes, not just reacting to symptoms.
      </p>
      <div className="flex justify-center items-center mt-4 text-purple-700">
        <TrendingUp size={22} className="mr-2" />
        <span className="text-sm font-medium">Learning constantly to improve reliability.</span>
      </div>
    </div>
  </div>
);

export default ApplicationSupportEngineer;
