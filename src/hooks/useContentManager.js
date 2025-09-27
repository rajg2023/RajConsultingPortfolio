import { useState, useEffect } from 'react';

const defaultContent = {
  about: {
    name: 'Raj G',
    title: 'QA/SDET Consultant',
    bio: 'With over 10 years of experience in technology and business consulting, I help organizations optimize their processes, implement cutting-edge solutions, and drive digital transformation.',
    email: 'raj@consulting.com',
    phone: '555-123-4567',
    location: 'Available Remote/Hybrid',
    specializations: ['QA Testing', 'SDET Solutions', 'Data Analytics'],
    achievements: ['50+ Projects Delivered', '40% Efficiency Gains', '15+ Certifications']
  },
  skills: [],
  services: [],
  projects: [],
  experience: [],
  education: [],
  contact: {
    email: 'raj@consulting.com',
    phone: '555-123-4567',
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
    const currentSection = content[section];
    updateSection(section, [...currentSection, newItem]);
    return newItem;
  };

  const editItem = (section, itemId, updatedItem) => {
    const currentSection = content[section];
    const updatedSection = currentSection.map(item => 
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    updateSection(section, updatedSection);
  };

  const deleteItem = (section, itemId) => {
    const currentSection = content[section];
    const updatedSection = currentSection.filter(item => item.id !== itemId);
    updateSection(section, updatedSection);
  };

  const exportContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `portfolio-content-${new Date().toISOString().split('T')[0]}.json`;
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
