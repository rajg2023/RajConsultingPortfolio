import { useState, useEffect } from 'react';

const defaultContent = {
  site: {
    title: 'ConsultantPro',
    description: 'QA/SDET consultant portfolio',
    theme: {
      mode: 'light',
      backgroundColor: '#0f172a',
      backgroundImage: ''
    },
    social: {
      linkedin: 'linkedin.com/in/rajg2023',
      github: 'github.com/rajg2023',
      website: 'https://rajg2023.github.io/RajConsultingPortfolio'
    }
  },
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch base content from the static file
        let fileContent = {};
        try {
          const res = await fetch('/content.json', { cache: 'no-store' });
          if (res.ok) {
            fileContent = await res.json();
          }
        } catch (e) {
          // If file missing or not served locally, proceed with defaults
          console.warn('content.json not found or failed to load; using defaults');
        }

        // Overlay with any local draft stored in localStorage
        const savedContent = localStorage.getItem('portfolio_content');
        const draft = savedContent ? JSON.parse(savedContent) : {};

        const merged = { ...defaultContent, ...fileContent, ...draft };
        setContent(merged);
      } catch (e) {
        console.error('Error loading content:', e);
        setError('Failed to load content');
      } finally {
        setIsLoading(false);
      }
    };
    load();
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

  // Publish helper: download as content.json to overwrite public/content.json in repo
  const publishContent = () => {
    const dataStr = JSON.stringify(content, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Optional: Save directly to disk using File System Access API (supported in Chromium-based browsers)
  const saveToDisk = async () => {
    try {
      if (!('showSaveFilePicker' in window)) {
        alert('Direct save not supported in this browser. Please use Export/Publish.');
        return;
      }
      const handle = await window.showSaveFilePicker({
        suggestedName: 'content.json',
        types: [{ description: 'JSON', accept: { 'application/json': ['.json'] } }]
      });
      const writable = await handle.createWritable();
      await writable.write(JSON.stringify(content, null, 2));
      await writable.close();
      alert('Saved to disk. Copy this file into public/content.json and commit.');
    } catch (e) {
      console.error('Save to disk failed:', e);
      alert('Save to disk failed.');
    }
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
    isLoading,
    error,
    updateSection,
    addItem,
    editItem,
    deleteItem,
    saveContent,
    exportContent,
    publishContent,
    saveToDisk,
    importContent,
    resetToDefault
  };
};
