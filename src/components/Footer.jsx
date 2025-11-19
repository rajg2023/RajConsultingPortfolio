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
    <footer className="relative bg-gradient-to-t from-slate-950 via-indigo-950 to-slate-900 text-white w-full overflow-hidden">
      {/* Night sky background */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-indigo-950 to-slate-900"></div>
        
        {/* Subtle stars in footer */}
        <div className="absolute inset-0 opacity-60">
          {/* Small stars */}
          <div className="absolute top-4 left-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-8 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '2.5s'}}></div>
          <div className="absolute top-6 right-12 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-12 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2.8s'}}></div>
          <div className="absolute top-2 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
          
          {/* Medium stars */}
          <div className="absolute top-8 left-16 w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.3s', animationDuration: '4s'}}></div>
          <div className="absolute top-4 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '1.8s', animationDuration: '3.5s'}}></div>
          
          {/* Subtle nebula */}
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="max-w-7x2 mx-auto">
          {/* Work in Progress Notice */}
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-100">
                  <strong className="font-medium">Work in Progress Notice</strong>
                  <br />
                  Parts of this website and certain pages may be undergoing active development or updates. Features, text, images, or components displayed may not represent the final version. It reserves the right to modify, update, or remove content as work progresses.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left-aligned links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-100">
              <Link to="/legal/privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
              <Link to="/legal/terms" className="hover:text-gray-200 transition-colors">Terms</Link>
              <Link to="/legal/data" className="hover:text-gray-200 transition-colors">Data Collection</Link>
              <Link to="/legal/ai" className="hover:text-gray-200 transition-colors">AI Disclosure</Link>
              <Link to="/legal/security" className="hover:text-gray-200 transition-colors">Data Security</Link>
              <Link to="/legal/thirdParty" className="hover:text-gray-200 transition-colors">Third-Party Services</Link>
            </div>
            
            {/* Centered copyright */}
            <div className="text-xs text-gray-200 whitespace-nowrap">
              © {currentYear} Rajiv Giri. All Rights Reserved.
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