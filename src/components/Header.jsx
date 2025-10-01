import React, { useState, useEffect } from 'react';
import { User, Star, Briefcase, FolderOpen, Clock, GraduationCap, Settings, Mail, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = ({ activeSection, setActiveSection, disabledNav = false }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, loginWithGitHub } = useAuth();
  
  // Debug log to track authentication state
  useEffect(() => {
    console.log('Header: isAuthenticated:', isAuthenticated);
    console.log('Header: Current user:', user);
  }, [isAuthenticated, user]);

  const navigationItems = [
    { id: 'home', name: 'Home', icon: User, color: 'blue' },
    { id: 'skills', name: 'Skills', icon: Star, color: 'green' },
    { id: 'services', name: 'Services', icon: Briefcase, color: 'purple' },
    { id: 'projects', name: 'Projects', icon: FolderOpen, color: 'orange' },
    { id: 'experience', name: 'Experience', icon: Clock, color: 'red' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'indigo' },
    { id: 'admin', name: 'Admin', icon: Settings, color: 'gray' },
    { id: 'contact', name: 'Contact', icon: Mail, color: 'pink' }
  ];

  const getColorClasses = (color, isActive) => {
    const colorMap = {
      blue: isActive 
        ? 'bg-blue-500 text-white shadow-lg' 
        : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: isActive 
        ? 'bg-green-500 text-white shadow-lg' 
        : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: isActive 
        ? 'bg-purple-500 text-white shadow-lg' 
        : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
      orange: isActive 
        ? 'bg-orange-500 text-white shadow-lg' 
        : 'bg-orange-50 text-orange-600 border border-orange-200 hover:bg-orange-100',
      red: isActive 
        ? 'bg-red-500 text-white shadow-lg' 
        : 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100',
      indigo: isActive 
        ? 'bg-indigo-500 text-white shadow-lg' 
        : 'bg-indigo-50 text-indigo-600 border border-indigo-200 hover:bg-indigo-100',
      gray: isActive 
        ? 'bg-gray-500 text-white shadow-lg' 
        : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100',
      pink: isActive 
        ? 'bg-pink-500 text-white shadow-lg' 
        : 'bg-pink-50 text-pink-600 border border-pink-200 hover:bg-pink-100'
    };
    return colorMap[color];
  };

  const handleClick = (sectionId) => {
    if (disabledNav) return;
    setActiveSection(sectionId);
  };

  const handleMobileNavClick = (sectionId) => {
    if (disabledNav) return;
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // Close menu after selection
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-100 relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">ConsultantPro</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-3">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    aria-disabled={disabledNav}
                    tabIndex={disabledNav ? -1 : 0}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${getColorClasses(item.color, isActive)} ${disabledNav ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                  >
                    <IconComponent size={16} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="transform rotate-180 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Cool Slide-out Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Mobile Menu Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h3 className="text-xl font-bold">ConsultantPro</h3>
              <p className="text-blue-100 text-sm">Navigate to section</p>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:bg-blue-400 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Items */}
        <div className="px-4 py-6 h-full overflow-y-auto">
          <nav className="space-y-2">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-left transform hover:scale-105 ${getColorClasses(item.color, isActive)}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <div className={`p-2 rounded-lg ${isActive ? 'bg-white bg-opacity-20' : 'bg-gray-100'}`}>
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className={`text-xs ${isActive ? 'text-white opacity-80' : 'text-gray-500'}`}>
                      {item.id === 'home' && 'About & Introduction'}
                      {item.id === 'skills' && 'Technical Expertise'}
                      {item.id === 'services' && 'What I Offer'}
                      {item.id === 'projects' && 'My Work Portfolio'}
                      {item.id === 'experience' && 'Career Journey'}
                      {item.id === 'education' && 'Learning & Training'}
                      {item.id === 'admin' && 'Manage Content'}
                      {item.id === 'contact' && 'Get In Touch'}
                    </div>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-4">Ready to work together?</p>
              <button 
                onClick={() => handleMobileNavClick('contact')}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                Let's Connect!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation classes are now handled by Tailwind */}
    </>
  );
};

export default Header;
