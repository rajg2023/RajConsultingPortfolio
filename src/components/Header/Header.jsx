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
    <>
      <header className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 shadow-lg sticky top-0 z-50 w-full overflow-hidden">
        {/* Night sky background */}
        <div className="absolute inset-0">
          {/* Deep space gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900"></div>
          
          {/* Subtle stars in header */}
          <div className="absolute inset-0 opacity-50">
            {/* Small stars */}
            <div className="absolute top-2 left-6 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0s', animationDuration: '2.5s'}}></div>
            <div className="absolute top-4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.2s', animationDuration: '3s'}}></div>
            <div className="absolute top-3 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.8s', animationDuration: '2.8s'}}></div>
            <div className="absolute top-6 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s', animationDuration: '3.2s'}}></div>
            <div className="absolute top-1 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '2.2s'}}></div>
            
            {/* Medium stars */}
            <div className="absolute top-3 left-12 w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{animationDelay: '0.3s', animationDuration: '3.5s'}}></div>
            <div className="absolute top-5 right-16 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '1.8s', animationDuration: '3s'}}></div>
          </div>
        </div>
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex justify-between h-14 items-center">
          {/* Logo/Name */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-lg sm:text-xl font-bold text-white">
              {resumeData?.name || 'WIP{Raj Technology Consulting (RTC)}'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const colorClasses = getColorClasses(item.color, isActive);
              
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
    
    {/* Animated Gradient Divider & Progress Indicator */}
    {/* <div className="relative h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-purple-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-slide-x"></div>
    </div> */}
    
    {/* Progress Indicator */}
    {/* <div className="bg-gray-50 border-b border-gray-100">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <span>Current Section:</span>
            <span className="font-medium text-gray-700 capitalize">
              {navigationItems.find(item => item.id === activeSection)?.name || 'Home'}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            {navigationItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const isCompleted = navigationItems.findIndex(nav => nav.id === activeSection) > index;
              return (
                <div
                  key={item.id}
                  className={`h-1 w-8 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-blue-500 shadow-sm' : isCompleted ? 'bg-green-400' : 'bg-gray-200'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Header;
