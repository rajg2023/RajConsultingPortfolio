import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Download, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './DocumentResume.css'; // We'll create this file next

const RESUME_DATA = [
  {
    id: 'qa',
    title: 'Software QA Engineer',
    description: 'Expert in manual and automated testing, test planning, and quality assurance best practices.',
    file: 'resume/Rajiv_Giri_QA_Resume.docx',
    htmlFile: '/resume/Rajiv_Giri_QA_Resume.html',
    lastUpdated: 'October 2023',
    tags: ['Manual Testing', 'Test Automation', 'Quality Assurance']
  },
  {
    id: 'sdet',
    title: 'Software Development Engineer in Test',
    description: 'Skilled in developing automated test frameworks and ensuring software quality through code.',
    file: 'resume/Rajiv_Giri_SDET_Resume.docx',
    htmlFile: '/resume/Rajiv_Giri_SDET_Resume.html',
    lastUpdated: 'October 2023',
    tags: ['Test Automation', 'Selenium', 'Java', 'Python']
  },
  {
    id: 'business-analyst',
    title: 'Business Systems Analyst',
    description: 'Bridging the gap between business needs and technical solutions with analytical expertise.',
    file: 'resume/Rajiv_Giri_Business_Systems_Analyst.docx',
    htmlFile: '/resume/Rajiv_Giri_Business_Systems_Analyst.html',
    lastUpdated: 'October 2023',
    tags: ['Requirements Gathering', 'Process Improvement', 'Documentation']
  },
  {
    id: 'support',
    title: 'Application Support Engineer',
    description: 'Providing exceptional technical support and troubleshooting for enterprise applications.',
    file: 'resume/Rajiv_Giri_Application_Support_Engineer_Resume.docx',
    htmlFile: '/resume/Rajiv_Giri_Application_Support_Engineer_Resume.html',
    lastUpdated: 'October 2023',
    tags: ['Troubleshooting', 'Customer Support', 'Incident Management']
  },
  {
    id: 'consultant',
    title: 'Technical Consultant',
    description: 'Delivering expert technical guidance and solutions to optimize business processes.',
    file: 'resume/Rajiv_Giri_Technical_Consultant.docx',
    htmlFile: '/resume/Rajiv_Giri_Technical_Consultant.html',
    lastUpdated: 'October 2023',
    tags: ['Solution Design', 'Technical Leadership', 'Client Consulting']
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Transforming complex data into actionable insights and business intelligence.',
    file: 'resume/Rajiv_Giri_Data_Analyst_Resume.docx',
    htmlFile: '/resume/Rajiv_Giri_Data_Analyst_Resume.html',
    lastUpdated: 'October 2023',
    tags: ['Data Analysis', 'SQL', 'Visualization', 'Reporting']
  }
];

const ResumeCard = ({ resume, isSelected, onSelect }) => {
  const color = useMemo(() => {
    const colorMap = {
      'QA': { 
        bg: 'bg-blue-50', 
        border: 'border-blue-200', 
        text: 'text-blue-700', 
        hover: 'hover:bg-blue-100',
        selected: 'ring-2 ring-offset-1 ring-blue-500 bg-blue-100'
      },
      'Software Development Engineer in Test': {
        bg: 'bg-green-50', 
        border: 'border-green-200', 
        text: 'text-green-700', 
        hover: 'hover:bg-green-100',
        selected: 'ring-2 ring-offset-1 ring-green-500 bg-green-100'
      },
      'Business': { 
        bg: 'bg-purple-50', 
        border: 'border-purple-200', 
        text: 'text-purple-700', 
        hover: 'hover:bg-purple-100',
        selected: 'ring-2 ring-offset-1 ring-purple-500 bg-purple-100'
      },
      'Support': { 
        bg: 'bg-pink-50', 
        border: 'border-pink-200', 
        text: 'text-pink-700', 
        hover: 'hover:bg-pink-100',
        selected: 'ring-2 ring-offset-1 ring-pink-500 bg-pink-100'
      },
      'Consultant': { 
        bg: 'bg-indigo-50', 
        border: 'border-indigo-200', 
        text: 'text-indigo-700', 
        hover: 'hover:bg-indigo-100',
        selected: 'ring-2 ring-offset-1 ring-indigo-500 bg-indigo-100'
      },
      'Data': { 
        bg: 'bg-cyan-50', 
        border: 'border-cyan-200', 
        text: 'text-cyan-700', 
        hover: 'hover:bg-cyan-100',
        selected: 'ring-2 ring-offset-1 ring-cyan-500 bg-cyan-100'
      }
    };
    
    // Find the first matching color based on the title
    const [colorKey] = Object.entries(colorMap).find(([key]) => 
      resume.title.toLowerCase().includes(key.toLowerCase())
    ) || [];
    
    return colorMap[colorKey] || colorMap['QA'];
  }, [resume.title]);

  return (
    <motion.button
      onClick={(e) => {
        e.stopPropagation();
        onSelect(resume);
      }}
      className={`px-4 py-2 rounded-md border ${color.bg} ${color.border} ${color.text} ${isSelected ? color.selected : ''} ${color.hover} font-medium text-sm transition-all duration-150`}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      title={`View ${resume.title} resume`}
    >
      {resume.title}
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
      // Use the correct base URL for both development and production
      const isProduction = window.location.hostname === 'rajg2023.github.io';
      const baseUrl = isProduction ? '/RajConsultingPortfolio' : '';
      const filePath = `${baseUrl}/${resume.file}`;
      
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

  // Get the HTML file path with correct base URL
  const getHtmlFilePath = (resume) => {
    const isProduction = window.location.hostname === 'rajg2023.github.io';
    const baseUrl = isProduction ? '/RajConsultingPortfolio' : '';
    return `${baseUrl}${resume.htmlFile}`;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Role Selection Buttons - Now in a single row */}
      <div className="w-full px-6 py-4">
        <div className="flex justify-center">
          <div className="flex flex-nowrap gap-2 max-w-full">
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
        <div className="w-full px-6">
          <div className="max-w-[90rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="resume-preview-container bg-white rounded-lg shadow-sm border border-gray-200"
            >
              {/* Resume header with colorful action buttons */}
              <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 p-4 text-white">
                <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedResume.title}</h2>
                    <p className="text-blue-100 text-sm">Professional Resume</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleDownload(selectedResume)}
                      className="flex items-center px-4 py-2 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download CV
                    </button>
                    <a
                      href={getHtmlFilePath(selectedResume)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-yellow-400 text-gray-900 rounded-md font-medium hover:bg-yellow-300 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Preview in New Tab
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-200"></div>
              </div>

              {/* Resume content */}
              <div className="resume-frame-container">
                <iframe
                  src={getHtmlFilePath(selectedResume)}
                  title={`${selectedResume.title} Preview`}
                  className="resume-iframe"
                  sandbox="allow-scripts allow-forms allow-popups"
                  loading="lazy"
                  scrolling="no"
                  onLoad={(e) => {
                    const iframe = e.target;
                    if (iframe.contentDocument) {
                      iframe.contentDocument.body.style.margin = '0';
                      iframe.contentDocument.body.style.padding = '0';
                      iframe.contentDocument.body.style.overflow = 'hidden';
                    }
                    iframe.style.height = '1400px';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentResume;
