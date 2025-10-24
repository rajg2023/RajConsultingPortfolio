import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left-aligned links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-100 mb-3 md:mb-0">
              <Link to="/legal#privacy" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
              <Link to="/legal#terms" className="hover:text-gray-200 transition-colors">Terms</Link>
              <Link to="/legal#data" className="hover:text-gray-200 transition-colors">Data Collection</Link>
            </div>
            
            {/* Centered copyright */}
            <div className="text-xs text-gray-200">
              © {currentYear} RajTechConsulting. All Rights Reserved
            </div>
            
            {/* Empty div to balance the flex layout */}
            <div className="hidden md:block w-1/3"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
