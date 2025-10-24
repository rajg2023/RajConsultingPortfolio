import React, { useState } from 'react';
import { User, Star, Briefcase, FolderOpen, Clock, GraduationCap, Mail, Menu, X, FileText } from 'lucide-react';

const Header = ({ activeSection, setActiveSection, disabledNav = false, resumeData = null }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', name: 'Home', icon: User, color: 'blue' },
    { id: 'skills', name: 'Skills', icon: Star, color: 'green' },
    { id: 'services', name: 'Services', icon: Briefcase, color: 'purple', isNew: true },
    { id: 'projects', name: 'Projects', icon: FolderOpen, color: 'orange' },
    { id: 'experience', name: 'Experience', icon: Clock, color: 'red' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'indigo' },
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
    return colorMap[color] || colorMap.gray;
  };
  const handleClick = (sectionId) => {
    if (disabledNav) return;
    setActiveSection(sectionId);
  };

  const handleMobileNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="flex justify-between h-14 items-center">
          {/* Logo/Name */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              {resumeData?.name || 'WIP{Raj Technology Consulting (RTC)}'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const colorClasses = isActive 
                ? `bg-${item.color}-500 text-white shadow-lg` 
                : `bg-${item.color}-50 text-${item.color}-600 border border-${item.color}-200 hover:bg-${item.color}-100`;
              
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleClick(item.id)}
                    disabled={disabledNav}
                    className={`${colorClasses} px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 flex items-center space-x-2`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>{item.name}</span>
                  </button>
                  {item.isNew && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      NEW
                    </span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const colorClasses = isActive 
                ? `bg-${item.color}-50 border-l-4 border-${item.color}-500 text-${item.color}-700` 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800';
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  disabled={disabledNav}
                  className={`${colorClasses} block w-full text-left pl-3 pr-4 py-3 text-base font-medium transition-colors duration-200`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
