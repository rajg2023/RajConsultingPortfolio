import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Download, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const RESUME_DATA = [
  {
    id: 'qa',
    title: 'Quality Assurance Engineer',
    description: 'Expert in manual and automated testing, test planning, and quality assurance best practices.',
    file: 'resume/Rajiv_Giri_QA_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Manual Testing', 'Test Automation', 'Quality Assurance']
  },
  {
    id: 'sdet',
    title: 'SDET (Software Development Engineer in Test)',
    description: 'Skilled in building robust test automation frameworks and CI/CD integration.',
    file: 'resume/Rajiv_Giri_SDET_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Test Automation', 'Selenium', 'Java', 'Python', 'CI/CD']
  },
  {
    id: 'bsa',
    title: 'Business Systems Analyst',
    description: 'Bridging the gap between business needs and technical solutions with strong analytical skills.',
    file: 'resume/Rajiv_Giri_ Business_Systems_Analyst.docx',
    lastUpdated: 'October 2023',
    tags: ['Requirements Gathering', 'Process Improvement', 'Documentation']
  },
  {
    id: 'support',
    title: 'Application Support Engineer',
    description: 'Providing exceptional technical support and troubleshooting for enterprise applications.',
    file: 'resume/Rajiv_Giri_Application_Support_Engineer_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Troubleshooting', 'Customer Support', 'Incident Management']
  },
  {
    id: 'consultant',
    title: 'Technical Consultant',
    description: 'Delivering expert technical guidance and solutions to optimize business processes.',
    file: 'resume/Rajiv_Giri_Technical_Consultant.docx',
    lastUpdated: 'October 2023',
    tags: ['Solution Design', 'Technical Leadership', 'Client Consulting']
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Transforming complex data into actionable insights and business intelligence.',
    file: 'resume/Rajiv_Giri_Data_Analyst_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Data Analysis', 'SQL', 'Visualization', 'Reporting']
  }
];

const ResumeCard = ({ resume, isSelected, onSelect }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(resume);
  };

  const color = useMemo(() => {
    const colors = ['teal', 'blue', 'indigo', 'purple', 'pink', 'red', 'orange'];
    const colorName = colors[resume.title.length % colors.length];
    
    return {
      bg: `bg-${colorName}-50`,
      text: `text-${colorName}-700`,
      border: `border-${colorName}-200`,
      hover: `hover:bg-${colorName}-100`,
      active: `bg-${colorName}-100 border-${colorName}-300 shadow-inner`,
      icon: `text-${colorName}-600`
    };
  }, [resume.title]);

  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        onSelect(resume);
      }}
      onDoubleClick={() => handlePreview(resume)}
      className={`flex items-center h-8 px-3 rounded-md border ${color.bg} ${color.border} ${color.text} ${color.hover} font-medium text-sm transition-all duration-150 whitespace-nowrap ${isSelected ? 'ring-2 ring-offset-1 ring-indigo-500' : ''}`}
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      title="Click to select, double-click for more options"
    >
      <span className="whitespace-nowrap">{resume.title}</span>
    </motion.button>
  );
};

const DocumentResume = () => {
  const [selectedResume, setSelectedResume] = useState(null);
  const [error, setError] = useState(null);

  // Auto-select first resume on component mount
  useEffect(() => {
    if (RESUME_DATA.length > 0 && !selectedResume) {
      setSelectedResume(RESUME_DATA[0]);
    }
  }, [selectedResume]);

  const handleResumeSelect = useCallback((resume) => {
    try {
      setSelectedResume(resume);
      setError(null);
    } catch (err) {
      console.error('Error selecting resume:', err);
      setError('Failed to select resume. Please try again.');
    }
  }, []);

  const handleDownload = useCallback((resume) => {
    try {
      const link = document.createElement('a');
      // Direct path since files are in the public directory
      const filePath = `/${resume.file}`;
      
      if (!filePath) {
        throw new Error('File path is undefined');
      }
      
      link.href = filePath;
      link.download = resume.file.split('/').pop() || 'resume.docx';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download resume. Please try again.');
    }
  }, []);

  const handlePreview = useCallback((resume) => {
    try {
      // For DOCX files, we'll show a message that preview isn't available
      // and suggest downloading instead
      const previewWindow = window.open('', '_blank', 'noopener,noreferrer');
      if (previewWindow) {
        previewWindow.document.write(`
          <html>
            <head>
              <title>Preview Not Available</title>
              <style>
                body { 
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  background-color: #f9fafb;
                  color: #1f2937;
                }
                .container {
                  text-align: center;
                  max-width: 400px;
                  padding: 2rem;
                  background: white;
                  border-radius: 0.5rem;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                h2 { 
                  color: #1f2937;
                  margin-bottom: 1rem;
                }
                p {
                  color: #6b7280;
                  margin-bottom: 1.5rem;
                }
                .btn {
                  display: inline-flex;
                  align-items: center;
                  padding: 0.5rem 1rem;
                  background-color: #4f46e5;
                  color: white;
                  border-radius: 0.375rem;
                  text-decoration: none;
                  font-weight: 500;
                  transition: background-color 0.2s;
                }
                .btn:hover {
                  background-color: #4338ca;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>Preview Not Available</h2>
                <p>For the best experience, please download the resume to view it in full.</p>
                <a href="/${resume.file}" download="${resume.file.split('/').pop()}" class="btn">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </body>
          </html>
        `);
        previewWindow.document.close();
      }
    } catch (err) {
      console.error('Preview error:', err);
      setError('Failed to open preview. Please try again.');
    }
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-50 border-l-4 border-red-400">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="px-2 sm:px-4">
        <div className="max-w-full overflow-x-auto py-1">
          <div className="flex flex-nowrap gap-1.5 px-1">
            {RESUME_DATA.map((resume) => (
              <ResumeCard 
                key={resume.id} 
                resume={resume} 
                isSelected={selectedResume?.id === resume.id}
                onSelect={handleResumeSelect}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedResume && (
        <div className="mt-4 border rounded-lg overflow-hidden bg-white shadow-sm">
          <div className="p-4 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">{selectedResume.title}</h3>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <a
                href={`/${selectedResume.file}`}
                download={selectedResume.file.split('/').pop()}
                className="px-3 py-1.5 text-sm font-medium rounded-md border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center space-x-1 flex-1 sm:flex-none justify-center"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </a>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">{selectedResume.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedResume.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Last updated: {selectedResume.lastUpdated}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentResume;
