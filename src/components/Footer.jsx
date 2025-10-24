// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useBuildInfo } from '../hooks/useBuildInfo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { formattedDate, githubUsername, isLoading } = useBuildInfo();

  if (isLoading) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left-aligned links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-100">
              <Link to="/legal#privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
              <Link to="/legal#terms" className="hover:text-gray-200 transition-colors">Terms</Link>
              <Link to="/legal#data" className="hover:text-gray-200 transition-colors">Data Collection</Link>
            </div>
            
            {/* Centered copyright */}
            <div className="text-xs text-gray-200 whitespace-nowrap">
              © {currentYear} Raj Technology Consulting (RTC). All Rights Reserved
            </div>
            
            {/* Right-aligned build info */}
            <div className="text-right text-[10px] text-gray-100">
              <div>Last Updated: {formattedDate}</div>
              <a 
                href={`https://github.com/${githubUsername}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                @{githubUsername}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;