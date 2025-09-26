import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const DocumentResume = () => {
  const handleDownload = (format) => {
    console.log(`Downloading resume in ${format} format`);
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Document Resume</h2>
        
        {/* Download Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FileText className="text-red-500 mr-3" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">PDF Resume</h3>
                <p className="text-gray-600">Complete professional resume</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => handleDownload('PDF')}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </button>
              <button className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors flex items-center">
                <Eye size={16} className="mr-2" />
                Preview
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <FileText className="text-blue-500 mr-3" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Word Document</h3>
                <p className="text-gray-600">Editable resume format</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => handleDownload('DOCX')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download DOCX
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center">
                <Eye size={16} className="mr-2" />
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Resume Preview</h3>
          
          <div className="prose max-w-none">
            <div className="border-b pb-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
              <p className="text-xl text-blue-600 mb-2">Independent Consultant</p>
              <p className="text-gray-600">Email: john.doe@email.com | Phone: (555) 123-4567</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Summary</h2>
              <p className="text-gray-700">
                Experienced technology consultant with 10+ years in QA analysis, software development, 
                and data analytics. Proven track record of delivering high-impact solutions and 
                leading cross-functional teams to success.
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Skills</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900">QA & Testing</h4>
                  <p className="text-sm text-gray-600">Manual & Automation</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">SDET</h4>
                  <p className="text-sm text-gray-600">Framework Development</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Data Analytics</h4>
                  <p className="text-sm text-gray-600">Python, SQL, Tableau</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Professional Experience</h2>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">Senior QA Consultant</h4>
                <p className="text-blue-600 text-sm">TechCorp Solutions | 2020 - Present</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Led QA initiatives for 20+ enterprise-level projects</li>
                  <li>Improved testing efficiency by 40% through automation frameworks</li>
                  <li>Mentored team of 8 junior QA engineers</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900">SDET Specialist</h4>
                <p className="text-blue-600 text-sm">DataFlow Inc. | 2017 - 2020</p>
                <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                  <li>Developed comprehensive test automation suites</li>
                  <li>Implemented CI/CD pipelines for testing workflows</li>
                  <li>Reduced bug discovery time by 35%</li>
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Education</h2>
              <div>
                <h4 className="font-semibold text-gray-900">Master of Science in Computer Science</h4>
                <p className="text-blue-600 text-sm">University of Technology | 2015</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Certifications</h2>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Certified Software Test Engineer (CSTE)</li>
                <li>• AWS Certified Solutions Architect</li>
                <li>• Tableau Desktop Specialist</li>
                <li>• Agile Testing Certified</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentResume;
