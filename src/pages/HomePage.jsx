import React, { useState, lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { User, FileText, MessageCircle } from 'lucide-react';
import ResumeSelector from '../components/Resume/ResumeSelector';


// Lazy load components - only load when needed
const AboutSection = lazy(() => import('../components/About/AboutSection'));
const SkillsSection = lazy(() => import('../components/Skills/SkillsSection'));
const ServicesSection = lazy(() => import('../components/Services/ServicesSection'));
const ProjectsSection = lazy(() => import('../components/Projects/ProjectsSection'));
const ExperienceSection = lazy(() => import('../components/Experience/ExperienceSection'));
const EducationSection = lazy(() => import('../components/Education/EducationSection'));
const ContactSection = lazy(() => import('../components/Contact/ContactSection'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const HomePage = ({ activeSection, setActiveSection }) => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Fetch resume data
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // Use root-relative path for custom domain
        const response = await fetch('/content/resume.json');
        if (!response.ok) {
          throw new Error('Failed to load resume data');
        }
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        console.error('Error loading resume data:', err);
        setError('Failed to load resume data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchResumeData();
  }, []);

  // Handle direct navigation to sections
  useEffect(() => {
    const target = location.state?.section;
    if (target) {
      setActiveSection(target);
    }
  }, [location.state, setActiveSection]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Content</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    if (!resumeData && !loading && !error) return null;

    const section = activeSection || 'home'; // Default to 'home' if undefined

    switch (section) {
      case 'home':
        return <AboutSection resumeData={resumeData} isLoading={loading} error={error} />;
      case 'skills':
        return resumeData ? <SkillsSection skills={resumeData.skills} /> : null;
      case 'services':
        return resumeData ? <ServicesSection services={resumeData.services} /> : null;
      case 'projects':
        return resumeData ? <ProjectsSection projects={resumeData.projects} /> : null;
      case 'experience':
        return resumeData ? <ExperienceSection experience={resumeData.experience} /> : null;
      case 'education':
        return resumeData ? <EducationSection education={resumeData.education} /> : null;
      case 'contact':
        return <ContactSection />;
    }
  };
  // Removed unused bg and pageStyle variables

  // Navigation items configuration
  const navigationItems = [
    { id: 'home', name: 'Home', icon: User, color: 'blue' },
    { id: 'skills', name: 'Skills', icon: FileText, color: 'green' },
    { id: 'services', name: 'Services', icon: FileText, color: 'purple' },
    { id: 'projects', name: 'Projects', icon: FileText, color: 'orange' },
    { id: 'experience', name: 'Experience', icon: FileText, color: 'red' },
    { id: 'education', name: 'Education', icon: FileText, color: 'indigo' },
    { id: 'contact', name: 'Contact', icon: MessageCircle, color: 'pink' }
  ];

  // Tabs configuration
  const tabs = [
    { id: 'home', name: 'About Me', icon: User },
    { id: 'skills', name: 'Skills', icon: FileText },
    { id: 'services', name: 'Services', icon: FileText },
    { id: 'projects', name: 'Projects', icon: FileText },
    { id: 'experience', name: 'Experience', icon: FileText },
    { id: 'education', name: 'Education', icon: FileText },
    { id: 'contact', name: 'Contact', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen flex flex-col">


      {/* Dynamic Quote/Motto Banner */}
      <div className="relative bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white overflow-hidden">
        {/* Night sky background with stars */}
        <div className="absolute inset-0">
          {/* Deep space gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>

          {/* Twinkling stars */}
          <div className="absolute inset-0">
            {/* Small stars */}
            <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
            <div className="absolute top-16 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
            <div className="absolute top-6 right-16 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
            <div className="absolute top-20 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '2s' }}></div>
            <div className="absolute top-12 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
            <div className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '2.8s' }}></div>
            <div className="absolute bottom-12 right-24 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '2.2s' }}></div>
            <div className="absolute bottom-16 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}></div>

            {/* Medium stars */}
            <div className="absolute top-4 left-8 w-2 h-2 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '2.5s' }}></div>
            <div className="absolute top-24 right-12 w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '2s' }}></div>
            <div className="absolute bottom-8 left-16 w-2 h-2 bg-white/90 rounded-full animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '3s' }}></div>

            {/* Large bright star */}
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" style={{ animationDelay: '0.4s', animationDuration: '2.3s' }}></div>

            {/* Shooting star effect */}
            <div className="absolute top-10 left-10 w-20 h-0.5 bg-gradient-to-r from-white/60 to-transparent animate-slide-x" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
            <div className="absolute bottom-16 right-20 w-16 h-0.5 bg-gradient-to-l from-white/40 to-transparent animate-slide-x" style={{ animationDelay: '5s', animationDuration: '3s' }}></div>

            {/* Nebula effect */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          </div>
        </div>

        {/* Quote content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8">
          <div className="text-center">
            {/* Quote icon */}
            <div className="flex justify-center mb-4">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Dynamic quote text */}
            <div className="mb-6">
              <p className="text-xl md:text-2xl lg:text-3xl font-light italic text-white/90 leading-relaxed">
                {(() => {
                  const mottoes = [
                    "Building tomorrow's solutions, today.",
                    "Where innovation meets implementation.",
                    "Transforming complex challenges into elegant solutions.",
                    "Code with purpose, design with passion.",
                    "Every great journey begins with a single step.",
                    "Excellence is not an act, but a habit.",
                    "The best time to start was yesterday. The next best time is now.",
                    "Technology works best when it brings people together.",
                    "Simplicity is the ultimate sophistication in design.",
                    "Future-proof solutions for today's challenges."
                  ];

                  // Use activeSection to select motto, or rotate based on time
                  const mottoIndex = navigationItems.findIndex(item => item.id === activeSection) % mottoes.length;

                  return mottoes[mottoIndex];
                })()}
              </p>
            </div>

            {/* Simple divider instead of author attribution */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-white/30 w-16"></div>
              <div className="mx-3 text-white/50 text-sm">✦</div>
              <div className="h-px bg-white/30 w-16"></div>
            </div>


          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-500 to-transparent"></div>
      </div>
      {/* Progress Indicator */}
      {/* Progress Dots - Full width on mobile, auto width on larger screens */}



      {/* Progress Indicator - Simplified */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 border-b border-gray-100 shadow-sm">

        <div className="py-4">
          {/* Centered Page Title with Progress Indicator */}
          {/* Simple Title Bar */}
          {/* Simple Title Bar */}
<div className={`backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-20 ${
  activeSection === 'home' ? 'bg-blue-50/80' :
  activeSection === 'skills' ? 'bg-green-50/80' :
  activeSection === 'services' ? 'bg-purple-50/80' :
  activeSection === 'projects' ? 'bg-orange-50/80' :
  activeSection === 'experience' ? 'bg-cyan-50/80' :
  activeSection === 'education' ? 'bg-emerald-50/80' :
  activeSection === 'contact' ? 'bg-rose-50/80' :
  'bg-white/80'
}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div className="flex items-center justify-center">
      <h2 className={`text-lg font-semibold flex items-center space-x-2 ${
        activeSection === 'home' ? 'text-blue-800' :
        activeSection === 'skills' ? 'text-green-800' :
        activeSection === 'services' ? 'text-purple-800' :
        activeSection === 'projects' ? 'text-orange-800' :
        activeSection === 'experience' ? 'text-cyan-800' :
        activeSection === 'education' ? 'text-emerald-800' :
        activeSection === 'contact' ? 'text-rose-800' :
        'text-gray-800'
      }`}>
        <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${
          activeSection === 'home' ? 'bg-blue-500' :
          activeSection === 'skills' ? 'bg-green-500' :
          activeSection === 'services' ? 'bg-purple-500' :
          activeSection === 'projects' ? 'bg-orange-500' :
          activeSection === 'experience' ? 'bg-cyan-500' :
          activeSection === 'education' ? 'bg-emerald-500' :
          activeSection === 'contact' ? 'bg-rose-500' :
          'bg-blue-500'
        }`}></span>
        <span>{navigationItems.find(item => item.id === activeSection)?.name || 'Home'}</span>
      </h2>
    </div>
  </div>
</div>
          <div className="relative">
            {/* Progress Bar Background */}
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
                style={{
                  width: `${((navigationItems.findIndex(item => item.id === activeSection) + 1) / navigationItems.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

        </div>
      </div>



      {/* Main Content */}
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          {renderSection()}
        </Suspense>
      </main>



    </div>
  );
};

export default HomePage;
