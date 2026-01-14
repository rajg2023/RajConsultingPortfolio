import React, { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const resumeData = [
  {
    id: 'qa',
<<<<<<< HEAD
    title: 'Quality Assurance Analyst',
=======
    title: 'Software QA Engineer',
>>>>>>> 88dbca7531dbf14e1db541ee6126229ec171b353
    description: 'Expert in manual and automated testing, test planning, and quality assurance best practices.',
    previewFile: 'resume/Rajiv_Giri_QA_Resume.html',
    downloadFile: 'resume/Rajiv_Giri_QA_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Manual Testing', 'Test Automation', 'Quality Assurance']
  },
  {
    id: 'sdet',
    title: 'SDET (Software Development Engineer in Test)',
    description: 'Skilled in building robust test automation frameworks and CI/CD integration.',
    previewFile: 'resume/Rajiv_Giri_SDET_Resume.html',
    downloadFile: 'resume/Rajiv_Giri_SDET_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Test Automation', 'Selenium', 'Java', 'Python', 'CI/CD']
  },
  {
    id: 'bsa',
    title: 'Business Systems Analyst',
    description: 'Bridging the gap between business needs and technical solutions with strong analytical skills.',
    previewFile: 'resume/Rajiv_Giri_Business_Systems_Analyst.html',
    downloadFile: 'resume/Rajiv_Giri_Business_Systems_Analyst.docx',
    lastUpdated: 'October 2023',
    tags: ['Requirements Gathering', 'Process Improvement', 'Documentation']
  },
  {
    id: 'support',
    title: 'Application Support Engineer',
    description: 'Providing exceptional technical support and troubleshooting for enterprise applications.',
    previewFile: 'resume/Rajiv_Giri_Application_Support_Engineer_Resume.html',
    downloadFile: 'resume/Rajiv_Giri_Application_Support_Engineer_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Troubleshooting', 'Customer Support', 'Incident Management']
  },
  {
    id: 'consultant',
    title: 'Technical Consultant',
    description: 'Delivering expert technical guidance and solutions to optimize business processes.',
    previewFile: 'resume/Rajiv_Giri_Technical_Consultant.html',
    downloadFile: 'resume/Rajiv_Giri_Technical_Consultant.docx',
    lastUpdated: 'October 2023',
    tags: ['Solution Design', 'Technical Leadership', 'Client Consulting']
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Transforming complex data into actionable insights and business intelligence.',
    previewFile: 'resume/Rajiv_Giri_Data_Analyst_Resume.html',
    downloadFile: 'resume/Rajiv_Giri_Data_Analyst_Resume.docx',
    lastUpdated: 'October 2023',
    tags: ['Data Analysis', 'SQL', 'Visualization', 'Reporting']
  }
];

const ResumeCard = ({ resume }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleDownload = (e) => {
    e.stopPropagation();
    const isProduction = window.location.hostname === 'rajg2023.github.io';
    const baseUrl = isProduction ? '/RajConsultingPortfolio' : '';
    const link = document.createElement('a');
    link.href = `${baseUrl}/${resume.downloadFile}`;
    link.download = resume.downloadFile.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (e) => {
    e.stopPropagation();
    const isProduction = window.location.hostname === 'rajg2023.github.io';
    const baseUrl = isProduction ? '/RajConsultingPortfolio' : '';
    window.open(`${baseUrl}/${resume.previewFile}`, '_blank');
  };

  const colorVariants = {
    teal: 'from-teal-500 to-cyan-500',
    blue: 'from-blue-500 to-indigo-500',
    indigo: 'from-indigo-500 to-purple-500',
    purple: 'from-purple-500 to-pink-500',
    pink: 'from-pink-500 to-rose-500',
    red: 'from-red-500 to-orange-500',
    orange: 'from-orange-500 to-amber-500',
    amber: 'from-amber-500 to-yellow-500',
    yellow: 'from-yellow-500 to-lime-500',
    lime: 'from-lime-500 to-green-500',
    green: 'from-green-500 to-emerald-500',
    emerald: 'from-emerald-500 to-teal-500',
    cyan: 'from-cyan-500 to-sky-500',
    sky: 'from-sky-500 to-blue-500',
    violet: 'from-violet-500 to-purple-500',
    fuchsia: 'from-fuchsia-500 to-pink-500',
    rose: 'from-rose-500 to-pink-500',
  };

  const color = [
    'teal', 'blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'amber',
    'yellow', 'lime', 'green', 'emerald', 'cyan', 'sky', 'violet', 'fuchsia', 'rose'
  ][resume.title.length % 17];

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-2 ${colorVariants[color].replace('from-', 'bg-').replace(/ .*/, '')} bg-opacity-10 text-${color}-700`}>
              {resume.lastUpdated}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{resume.title}</h3>
            <p className="text-gray-600 text-sm">{resume.description}</p>
          </div>
          <div className={`p-2 rounded-lg ${colorVariants[color].replace(/ .*/, '')} bg-opacity-10`}>
            <FileText className={`h-6 w-6 text-${color}-600`} />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {resume.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorVariants[color].replace('from-', 'bg-').replace(/ .*/, '')} bg-opacity-10 text-${color}-700`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={handlePreview}
            className={`flex-1 flex items-center justify-center gap-2 bg-white border border-${color}-500 text-${color}-600 hover:bg-${color}-50 font-medium py-2 px-4 rounded-lg transition-colors`}
          >
            <Eye className="h-4 w-4" />
            Preview
          </button>
          <button
            onClick={handleDownload}
            className={`flex-1 flex items-center justify-center gap-2 bg-gradient-to-r ${colorVariants[color]} text-white hover:opacity-90 font-medium py-2 px-4 rounded-lg transition-all`}
          >
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>
      
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-r ${colorVariants[color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        style={{ zIndex: -1 }}
        animate={{ opacity: isHovered ? 0.03 : 0 }}
      />
    </motion.div>
  );
};

const ResumeSelector = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl mb-3">
            Professional Resumes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse and download my professional resumes tailored for different roles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeSelector;
