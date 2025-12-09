import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle, XCircleIcon } from 'lucide-react';

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

const AboutMe = () => {
  // Contact information
  const contactInfo = [
    { icon: <Mail className="h-5 w-5 text-gray-500" />, text: 'rajivgiri2025@gmail.com' },
    { icon: <Phone className="h-5 w-5 text-gray-500" />, text: '(513) 834-3371' },
    { icon: <MapPin className="h-5 w-5 text-gray-500" />, text: 'Cincinnati, OH' },
    {
      icon: <Linkedin className="h-5 w-5 text-blue-600" />,
      text: 'linkedin.com/in/girirajiv',
      link: 'https://linkedin.com/in/girirajiv'
    },
    {
      icon: <Github className="h-5 w-5 text-gray-700" />,
      text: 'github.com/rajg2023',
      link: 'https://github.com/rajg2023'
    }
  ];

  // Specializations
  const specializations = [
    'Google Data Analytics',
    'Data Analyst',
    'Quality Analyst',
    'Application Analyst',
    'Application Engineer',
    'Software Engineer',
    'Data Engineer',
    'Business Systems Analyst'
  ];

  // Specializations
  const unspecializations = [
    'Cyber Security',
    'DevOps',
    'AI/ML',
    'Legal Services',
    'Network Security',
    'Ethical Hacking',
    'Virtual Reality',
    'And more...'
  ];

  // Local content instead of using resumeData
  const aboutContent = {
    title: "Digital and Technology Solutions specialist | Data/Application Analyst | Application Engineer | Software/Data Engineer | Business Systems Analyst",
    businessStatus: "I am actively seeking full-time, temporary, and contract opportunities. While I remain primarily committed to my full-time role, but sometimes, I also operate as an independent contractor during gaps and holidays specializing in digital and technology solutions. I am not a registered business entity; rather, I provide my expertise directly to clients on a project basis. I occasionally take on freelance projects based on availability, always respecting my primary employer’s priorities and maintaining client confidentiality. My focus is on delivering personalized, high-quality service tailored to each client’s specific needs.",
    intro: "I am a Digital and Technology Solutions specialist with over 9 years of experience in regulated healthcare operations and IT, combining industry discipline with hands-on technical expertise. Passionate about data accuracy, system reliability, and process optimization, I consistently drive improvements in data integrity, application performance, and team collaboration.",
    focus: "With 6+ years in pharmaceutical operations and 3+ years in IT, I have developed a solid foundation in data validation, analysis, application support, quality assurance, and software development. As a Senior Analyst, I have contributed to diverse client projects by enhancing business processes, mentoring team members, and ensuring high-quality deliverables.",
    certification: "",
    highlights: [
      {
        title: "Google Data Analytics Professional Certificate",
        description: "Completed the Google Data Analytics Professional Certificate from Coursera, mastering data cleaning, analysis, visualization, and decision-making using spreadsheets, SQL, R, and Tableau."
      },
      {
        title: "Security GRC",
        description: "Assisted clients in resolving security issues/exceptions, validated data from TVM dashboards, ensured data accuracy for case processing, and provided data-driven recommendations."
      },
      {
        title: "OFSAA",
        description: "Built and maintained RTMs for 500+ KDEs, verified data mappings, and ensured configuration integrity."
      },
      {
        title: "CRM Implementation",
        description: "Requirement gathering, data automation, cleansing, visualization, reporting, and successful CRM launches."
      },
      {
        title: "Application Support (POS)",
        description: "POS application support, QA, patch management, code review, application and server management; collaborating with project teams to triage and resolve issues through log and code analysis primarily in Dev and QA environments."
      },
      {
        title: "Data Analysis & Testing (ETL)",
        description: "ETL testing, data QA, data warehouse validation, stored procedure and SQL troubleshooting, log collection, and process mapping (Visio). Completed multiple opensource trainings and hands-on projects in data QA, analysis and analytics independently."
      },
      {
        title: "Software Development & Deployment",
        description: "Completed and deployed desktop, Android, and web applications using Java, .NET, Python, AI models, JavaScript, SQL, Heroku, Docker, AWS, GitHub, and Azure independently, continuously enhancing skills beyond formal employment."
      }
    ],
    closing: "I thrive at the intersection of data, technology, and problem-solving, leveraging analytical precision and a collaborative spirit to achieve measurable business outcomes.\n\nLet’s connect to explore how I can contribute to your team or project!\n\nThank you for visiting my profile,\n"
  };

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
  } = {};

  return (
    <div className="w-full py-2 sm:py-4">
      <div className="flex flex-col lg:flex-row gap-6 max-w-[1800px] mx-auto px-3 sm:px-5">
        {/* Left Column - Profile */}
        <div className="w-full lg:w-1/4 flex flex-col items-center [&>*]:text-left">
          <div className="relative w-36 sm:w-40 md:w-48 lg:w-full max-w-xs mb-3 sm:mb-4">
            <div className="pb-[180%] relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                <div className="h-full w-full rounded-full bg-white p-0.5">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full rounded-full object-cover"
                    poster={`${import.meta.env.BASE_URL || ''}images/ProfilePic1.jpg`}
                  >
                    <source src="/videos/TestProfile1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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


          <br></br>

          {/* Container for both sections */}
          <div className="w-full mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Specializations */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">Ask Me</h3>
                <div className="space-y-3">
                  {specializations.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-blue-500 w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Specialized in */}
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">Don't Ask Me</h3>
                <div className="space-y-3">
                  {unspecializations.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      <XCircleIcon className="text-red-500 w-5 h-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Main Content */}
        {/* Right Column - Heading */}
        <div className="lg:w-2/3 space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 lg:hidden">About Me</h1>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"></h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 font-medium">Digital and Technology Professional Seeking Full-Time Opportunities | Independent Freelance Consultant</h2>
            <div className="h-1.5 w-20 sm:w-24 bg-gradient-to-r from-blue-400 to-purple-500 my-3 sm:my-4 rounded-full"></div>
          </div>

          {/* Business Status Card */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-blue-700">{aboutContent.businessStatus}</p>
          </div>

          <p className="text-gray-700 leading-relaxed">{aboutContent.intro}</p>
          <p className="text-gray-700 leading-relaxed">{aboutContent.focus}</p>

          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Career Highlights & Key Contributions:</h2>
            <ul className="space-y-4">
              {aboutContent.highlights.map((item, index) => (
                <li key={index} className="border-l-4 border-blue-200 pl-4 py-1">
                  <strong className="text-blue-800">{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {aboutContent.closing.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature */}
          <div className="mt-8 text-left">
            <div className="font-['Brush_Script_MT'] text-3xl text-blue-900">Rajiv Giri</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutMe);
