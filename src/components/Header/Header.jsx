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
      <header className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 shadow-lg sticky top-0 z-50 w-full overflow-visible">
        {/* Night sky background */}
        <div className="absolute inset-0 w-full">
          {/* Deep space gradient */}
          <div className="absolute inset-0 w-full bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900"></div>
          
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
        <div className="w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full relative">
          {/* Logo/Name - Always visible */}
          <div className="flex-shrink-0 z-10 bg-gradient-to-r from-slate-950 to-indigo-950/50 pr-4 -ml-2 rounded-r-lg">
            <h1 className="text-base sm:text-lg font-bold text-white whitespace-nowrap overflow-visible">
              {resumeData?.name || 'WIP[RTC]'}
            </h1>
          </div>

          {/* Desktop Navigation - Shows on 1024px and above */}
          <nav className="hidden lg:flex space-x-2 flex-nowrap">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const colorClasses = getColorClasses(item.color, isActive);
              
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => handleClick(item.id)}
                    disabled={disabledNav}
                    className={`${colorClasses} px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center space-x-2`}
                  >
                    <Icon className="h-4 w-4" />
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

          {/* Mobile menu button - Shows below 1024px */}
          <div className="lg:hidden flex-shrink-0 ml-2 z-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-full text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-200"
              aria-expanded={isMobileMenuOpen}
              style={{
                width: '44px',
                height: '44px'
              }}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  handleMobileNavClick(item.id);
                  setIsMobileMenuOpen(false);
                }}
                disabled={disabledNav}
                className={`w-full text-left px-4 py-3 rounded-md text-base font-medium ${
                  isActive 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-white hover:bg-white/10'
                } transition-colors flex items-center gap-3`}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
                {item.isNew && (
                  <span className="ml-auto bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                    NEW
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
