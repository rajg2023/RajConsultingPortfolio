import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

// Skeleton loading component
const SkeletonLoader = () => (
  <div className="w-full max-w-4xl mx-auto p-6 space-y-6 animate-pulse">
    <div className="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
    <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
    <div className="h-4 bg-gray-200 rounded w-full"></div>
    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    
    <div className="space-y-4 mt-8">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="flex items-center">
          <div className="h-6 w-6 bg-gray-200 rounded-full mr-2"></div>
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
      ))}
    </div>
  </div>
);

const AboutMe = ({ resumeData, isLoading, error }) => {
  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="text-red-500 mb-4">Error loading profile information</div>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!resumeData) {
    return (
      <div className="text-center p-8">
        <p>No profile data available</p>
      </div>
    );
  }

  // Default data in case resumeData is not provided
  const defaultData = {
    name: '',
    title: '',
    summary: '',
    contact: {
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      github: ''
    }
  };

  // Use provided resumeData or fall back to default data
  const { 
    name = defaultData.name, 
    title = defaultData.title, 
    summary = defaultData.summary,
    contact = defaultData.contact 
  } = resumeData || {};

  return (
    <div className="w-full py-2 sm:py-4">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1800px] mx-auto px-3 sm:px-5">
        {/* Left Column - Profile Image and Contact Info - Reduced width */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start">
          <div className="relative w-36 sm:w-40 md:w-48 lg:w-full max-w-xs mb-3 sm:mb-4">
            <div className="pb-[100%] relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="h-full w-full rounded-full bg-white p-0.5">
                  <img 
                    src={`${import.meta.env.BASE_URL || ''}images/ProfilePic.jpg`}
                    alt={name}
                    className="h-full w-full rounded-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      // Try with direct path if the first one fails
                      e.target.src = '/RajConsultingPortfolio/images/ProfilePic.jpg';
                      
                      // If that fails, use the fallback
                      e.target.onerror = () => {
                        e.target.src = 'images/ProfilePic.jpg';
                      };
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="text-center w-full mt-2">
              <h2 className="text-xl font-semibold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent 
                     bg-300% animate-gradient">
                  Hi, I'm {name || 'Rajiv Giri'}
                </span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 italic">
                Nice to e-meet you! 👋
              </p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="w-full space-y-1.5 sm:space-y-2">
            {contact.email && (
              <div className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <div className="p-1 bg-blue-50 rounded-md mr-2">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                </div>
                <a href={`mailto:${contact.email}`} className="hover:text-blue-500 transition-colors text-xs sm:text-sm font-medium">
                  {contact.email}
                </a>
              </div>
            )}
            
            {contact.phone && (
              <div className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <div className="p-1 bg-blue-50 rounded-md mr-2">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                </div>
                <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="hover:text-blue-500 transition-colors text-xs sm:text-sm font-medium">
                  {contact.phone}
                </a>
              </div>
            )}
            
            {contact.location && (
              <div className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <div className="p-1 bg-blue-50 rounded-md mr-2">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{contact.location}</span>
              </div>
            )}
            
            {contact.linkedin && (
              <div className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <div className="p-1 bg-blue-50 rounded-md mr-2">
                  <Linkedin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                </div>
                <a 
                  href={contact.linkedin.startsWith('http') ? contact.linkedin : `https://${contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors text-xs sm:text-sm font-medium truncate"
                >
                  {contact.linkedin.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
            
            {contact.github && (
              <div className="flex items-center p-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                <div className="p-1 bg-blue-50 rounded-md mr-2">
                  <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-500" />
                </div>
                <a 
                  href={contact.github.startsWith('http') ? contact.github : `https://github.com/${contact.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors text-xs sm:text-sm font-medium truncate"
                >
                  {contact.github.replace(/^https?:\/\//, '')}
                </a>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Column - Name, Title, and Summary - Expanded width */}
        <div className="w-full lg:w-3/4 mt-4 lg:mt-0 lg:pl-8">
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">{name}</h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-medium">{title}</h2>
            <div className="h-1.5 w-20 sm:w-24 bg-gradient-to-r from-blue-400 to-purple-500 my-3 sm:my-4 rounded-full"></div>
            <div 
              className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutMe);