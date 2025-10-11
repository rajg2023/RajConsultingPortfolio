import React, { useState, lazy, Suspense, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
const DocumentResume = lazy(() => import('../components/About/DocumentResume'));

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
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  
  // Fetch resume data
  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        // Use relative path that works in both dev and production
        const baseUrl = process.env.NODE_ENV === 'production' ? '/RajConsultingPortfolio' : '';
        const response = await fetch(`${baseUrl}/content/resume.json`);
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
  }, [location.state]);

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
    
    switch(activeSection) {
      case 'home':
        return <AboutSection resumeData={resumeData} isLoading={loading} error={error} />;
      case 'resume':
        return <ResumeSelector />;
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

  // Tabs configuration
  const tabs = [
    { id: 'home', name: 'About Me', icon: User },
    { id: 'resume', name: 'Resume', icon: FileText },
    { id: 'skills', name: 'Skills', icon: FileText },
    { id: 'services', name: 'Services', icon: FileText },
    { id: 'projects', name: 'Projects', icon: FileText },
    { id: 'experience', name: 'Experience', icon: FileText },
    { id: 'education', name: 'Education', icon: FileText },
    { id: 'contact', name: 'Contact', icon: MessageCircle }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main Content */}
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          {renderSection()}
        </Suspense>
      </main>
      
      <Footer contact={resumeData?.contact} />
    </div>
  );
};

export default HomePage;
