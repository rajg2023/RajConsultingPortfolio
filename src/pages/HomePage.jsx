import React, { useState, lazy, Suspense, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Lazy load components - only load when needed
const AboutSection = lazy(() => import('../components/About/AboutSection'));
const SkillsSection = lazy(() => import('../components/Skills/SkillsSection'));
const ServicesSection = lazy(() => import('../components/Services/ServicesSection'));
const ProjectsSection = lazy(() => import('../components/Projects/ProjectsSection'));
const ExperienceSection = lazy(() => import('../components/Experience/ExperienceSection'));
const EducationSection = lazy(() => import('../components/Education/EducationSection'));
const AdminSection = lazy(() => import('../components/Admin/AdminSection'));
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

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // If we navigated here with a target section (from admin/login), honor it
  useEffect(() => {
    const target = location.state?.section;
    if (target) {
      setActiveSection(target);
      // Optionally, we could clean the history state here, but not necessary
    }
  }, [location.state]);

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'services':
        return <ServicesSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'education':
        return <EducationSection />;
      case 'admin':
        return <AdminSection setActiveSection={setActiveSection} />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        disabledNav={isAuthenticated && activeSection === 'admin'}
      />
      <main className="flex-1 overflow-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          {renderSection()}
        </Suspense>
      </main>
      <Footer activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

export default HomePage;
