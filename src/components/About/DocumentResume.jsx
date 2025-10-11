import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Download, ExternalLink } from 'lucide-react';
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
    file: 'resume/Rajiv_Giri_Business_Systems_Analyst.docx',
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
  const color = useMemo(() => {
    const colorMap = {
      'QA': { 
        bg: 'bg-blue-50', 
        border: 'border-blue-200', 
        text: 'text-blue-700', 
        hover: 'hover:bg-blue-100',
        selected: 'ring-2 ring-offset-1 ring-blue-500 bg-blue-100'
      },
      'SDET': { 
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

  // Get the HTML file path by replacing .docx with .html
  const getHtmlFilePath = (filePath) => {
    return filePath.replace(/\.docx$/, '.html');
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* <h2 className="text-2xl font-bold text-gray-900 mb-6 px-4">My Resumes</h2> */}
      
      {/* Role Selection Buttons */}
      <div className="mb-6 px-4 flex-shrink-0">
        <div className="flex flex-wrap gap-2">
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

      {/* Resume Preview */}
      {selectedResume && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="flex-1 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden h-full"
          style={{ minHeight: '600px' }}
        >
          {/* Preview Header */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">{selectedResume.title}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => handleDownload(selectedResume)}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Download Word
              </button>
            </div>
          </div>
          
          {/* HTML Preview */}
          <div className="flex-1 overflow-hidden flex flex-col" style={{ minHeight: 0 }}>
            <iframe 
              src={`/${getHtmlFilePath(selectedResume.file)}`}
              title={`${selectedResume.title} Preview`}
              className="flex-1 w-full h-full border-0"
              style={{ minHeight: '500px' }}
              sandbox="allow-same-origin allow-scripts"
              loading="lazy"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DocumentResume;
