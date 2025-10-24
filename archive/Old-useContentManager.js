import { useState, useEffect } from 'react';

const defaultContent = {
  about: {
    name: 'Raj G',
    title: 'QA/SDET Consultant',
    bio: 'With over 10 years of experience in technology and business consulting, I help organizations optimize their processes, implement cutting-edge solutions, and drive digital transformation.',
    email: '',
    phone: '',
    location: 'Available Remote/Hybrid',
    specializations: [
      'QA & Testing',
      'SDET Solutions', 
      'Data Analytics'
    ],
    achievements: [
      '50+ Projects Delivered',
      '40% Efficiency Gains',
      '15+ Certifications'
    ]
  },
  skills: [
    { id: 1, name: 'Manual Testing', category: 'Testing & QA', level: 85, years: '2+ years', certified: true },
    { id: 2, name: 'Test Automation', category: 'Testing & QA', level: 70, years: '1+ years', certified: false },
    { id: 3, name: 'JavaScript', category: 'Technical', level: 75, years: '2+ years', certified: false },
    { id: 4, name: 'Python', category: 'Technical', level: 65, years: '1+ years', certified: false },
    { id: 5, name: 'SQL', category: 'Data Analytics', level: 80, years: '2+ years', certified: true },
    { id: 6, name: 'Selenium', category: 'Testing & QA', level: 70, years: '1+ years', certified: false },
    { id: 7, name: 'JIRA', category: 'Tools & Platforms', level: 90, years: '3+ years', certified: true },
    { id: 8, name: 'API Testing', category: 'Testing & QA', level: 75, years: '1+ years', certified: false }
  ],
  services: [
    {
      id: 1,
      name: 'QA & Testing',
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive manual testing services for web and mobile applications, ensuring quality and reliability.',
      skills: ['Test Case Design', 'Bug Reporting', 'Cross-browser Testing', 'User Acceptance Testing'],
      pricing: 'Starting at $50/hour',
      duration: '2-8 weeks typical',
      icon: 'TestTube'
    },
    {
      id: 2,
      name: 'SDET (Automation)',
      title: 'Test Automation & SDET',
      description: 'Building automated testing frameworks and implementing continuous testing practices.',
      skills: ['Selenium WebDriver', 'API Automation', 'CI/CD Integration', 'Framework Development'],
      pricing: 'Starting at $60/hour',
      duration: '4-12 weeks typical',
      icon: 'Zap'
    },
    {
      id: 3,
      name: 'Data Analytics',
      title: 'QA Data Analytics',
      description: 'Analyzing testing data, creating dashboards, and providing insights for quality improvements.',
      skills: ['Test Metrics', 'Dashboard Creation', 'Quality Reports', 'Trend Analysis'],
      pricing: 'Starting at $55/hour',
      duration: '1-4 weeks typical',
      icon: 'BarChart'
    }
  ],
  projects: [
    {
      id: 1,
      title: 'E-commerce Testing Project',
      description: 'Comprehensive manual testing of a full-featured online shopping platform including user registration, product catalog, shopping cart, and payment processing.',
      technologies: ['Manual Testing', 'Chrome DevTools', 'JIRA', 'Test Case Design'],
      duration: '2 weeks',
      status: 'Completed',
      challenges: 'Complex user workflows and payment integrations',
      outcome: 'Identified and resolved 15+ critical bugs before launch',
      type: 'QA Testing'
    },
    {
      id: 2,
      title: 'API Automation Framework',
      description: 'Built a basic API testing framework using Python and Requests library for a REST API service.',
      technologies: ['Python', 'Requests Library', 'pytest', 'JSON'],
      duration: '3 weeks',
      status: 'In Progress',
      challenges: 'Learning API testing concepts and automation best practices',
      outcome: 'Successfully automated 20+ API endpoints with basic validations',
      type: 'Automation'
    },
    {
      id: 3,
      title: 'Test Metrics Dashboard',
      description: 'Created a simple dashboard to track testing progress and bug metrics using Excel and basic charts.',
      technologies: ['Excel', 'Charts & Graphs', 'Data Analysis', 'JIRA Integration'],
      duration: '1 week',
      status: 'Completed',
      challenges: 'Data organization and meaningful visualization',
      outcome: 'Improved testing transparency and progress tracking',
      type: 'Analytics'
    }
  ],
  experience: [
    {
      id: 1,
      year: '2023',
      period: 'Past',
      title: 'Career Transition to QA',
      company: 'Self-directed Learning',
      description: 'Made the decision to transition into QA/Testing field. Completed foundational courses and started building testing knowledge.',
      skills: ['Career Planning', 'Learning Strategy', 'Goal Setting'],
      achievements: ['Completed QA fundamentals course', 'Built first test cases', 'Joined testing communities']
    },
    {
      id: 2,
      year: '2024',
      period: 'Present',
      title: 'Building QA Expertise',
      company: 'Continuous Learning & Practice',
      description: 'Actively building QA skills through hands-on practice, online courses, and real-world projects. Currently seeking opportunities to apply skills professionally.',
      skills: ['Manual Testing', 'Test Case Design', 'Bug Reporting', 'Basic Automation'],
      achievements: ['Completed 3 practice projects', 'Learned automation basics', 'Building professional portfolio']
    },
    {
      id: 3,
      year: '2025',
      period: 'Future',
      title: 'Professional QA Career Goals',
      company: 'Target: QA/SDET Role',
      description: 'Goal to secure a junior QA position and continue growing expertise in testing and automation. Planning to specialize in SDET and test automation.',
      skills: ['Advanced Automation', 'CI/CD Integration', 'Performance Testing', 'Leadership'],
      achievements: ['Target: First QA role', 'Advanced certifications', 'Mentoring others']
    }
  ],
  education: [
    {
      id: 1,
      type: 'Formal Education',
      title: "Bachelor's Degree",
      institution: 'University Name',
      year: '2020',
      description: 'Computer Science or related technical field providing foundation in programming and problem-solving.',
      skills: ['Programming Fundamentals', 'Problem Solving', 'Technical Writing', 'Project Management'],
      achievements: ['Dean\'s List', 'Relevant Coursework in Software Engineering', 'Team Project Leadership']
    },
    {
      id: 2,
      type: 'IT Training',
      title: 'QA Testing Bootcamp',
      institution: 'Online Learning Platform',
      year: '2024',
      description: 'Intensive training program covering manual testing, automation basics, and industry best practices.',
      skills: ['Manual Testing', 'Test Automation', 'Agile Methodology', 'Quality Processes'],
      achievements: ['Course Completion Certificate', 'Capstone Project', 'Industry Best Practices']
    },
    {
      id: 3,
      type: 'Certifications',
      title: 'ISTQB Foundation Level',
      institution: 'International Software Testing Qualifications Board',
      year: '2024',
      description: 'Industry-standard certification demonstrating fundamental knowledge of software testing principles.',
      skills: ['Testing Fundamentals', 'Test Design Techniques', 'Test Management', 'Tool Support'],
      achievements: ['ISTQB FL Certificate', 'Industry Recognition', 'Professional Credibility']
    }
  ],
  contact: {
    email: 'raj@consulting.com',
    phone: '(555) 123-4567',
    location: 'Available Remote/Hybrid',
    linkedin: 'linkedin.com/in/rajg2023',
    github: 'github.com/rajg2023',
    website: 'https://rajg2023.github.io/RajConsultingPortfolio',
    availability: 'Available for new projects'
  }
};

export const useContentManager = () => {
  const [content, setContent] = useState(defaultContent);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem('portfolio_content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent({ ...defaultContent, ...parsedContent });
      } catch (error) {
        console.error('Error parsing saved content:', error);
      }
    }
  }, []);

  const saveContent = () => {
    try {
      localStorage.setItem('portfolio_content', JSON.stringify(content));
      setHasChanges(false);
      return true;
    } catch (error) {
      console.error('Error saving content:', error);
      return false;
    }
  };

  const updateSection = (section, newContent) => {
    setContent(prev => ({ ...prev, [section]: newContent }));
    setHasChanges(true);
  };

  const addItem = (section, item) => {
    const newItem = { ...item, id: Date.now() };
    const currentSection = content[section] || [];
    updateSection(section, [...currentSection, newItem]);
    return newItem;
  };

  const editItem = (section, itemId, updatedItem) => {
    const currentSection = content[section] || [];
    const updatedSection = currentSection.map(item => 
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    updateSection(section, updatedSection);
  };

  const deleteItem = (section, itemId) => {
    const currentSection = content[section] || [];
    const updatedSection = currentSection.filter(item => item.id !== itemId);
    updateSection(section, updatedSection);
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio_content_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const importContent = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedContent = JSON.parse(e.target.result);
        setContent({ ...defaultContent, ...importedContent });
        setHasChanges(true);
        alert('Content imported successfully!');
      } catch (error) {
        alert('Error importing file: Invalid JSON format');
      }
    };
    reader.readAsText(file);
  };

  const resetToDefault = () => {
    if (confirm('Are you sure you want to reset all content to default? This cannot be undone.')) {
      setContent(defaultContent);
      setHasChanges(true);
      localStorage.removeItem('portfolio_content');
    }
  };

  return {
    content,
    hasChanges,
    updateSection,
    addItem,
    editItem,
    deleteItem,
    saveContent,
    exportContent,
    importContent,
    resetToDefault
  };
};
