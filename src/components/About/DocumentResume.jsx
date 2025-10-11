import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const DocumentResume = () => {
  const handleDownload = (format) => {
    const filePath = `${import.meta.env.BASE_URL || ''}resume/Word Resume2.${format.toLowerCase()}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `Raj_Govindarajan_Resume.${format.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open(`${import.meta.env.BASE_URL || ''}resume/Word Resume2.pdf`, '_blank');
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">My Resume</h2>
        
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
              <button 
                onClick={handlePreview}
                className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors flex items-center"
              >
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
              <button 
                onClick={handlePreview}
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center"
              >
                <Eye size={16} className="mr-2" />
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Resume Preview Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Resume Preview</h3>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="w-full h-[800px] rounded-lg overflow-hidden shadow-sm">
              <iframe 
                src="/resume/Word Resume2.pdf#toolbar=0&navpanes=0&view=FitH" 
                className="w-full h-full"
                title="Resume Preview"
              >
                Your browser does not support PDFs. 
                <a href="/resume/Word Resume2.pdf">Download the PDF</a> instead.
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentResume;
