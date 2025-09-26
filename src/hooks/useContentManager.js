import { useState, useEffect } from 'react';

const defaultContent = {
  // ... your default content structure
};

export const useContentManager = () => {
  const [content, setContent] = useState(defaultContent);
  const [hasChanges, setHasChanges] = useState(false);

  // Fixed: Add empty dependency array to run only once
  useEffect(() => {
    // Load content from localStorage only on mount
    const savedContent = localStorage.getItem('portfolio_content');
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent);
        setContent(prev => ({ ...defaultContent, ...parsedContent }));
      } catch (error) {
        console.error('Error parsing saved content:', error);
      }
    }
  }, []); // Empty dependency array - runs only once on mount

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

  // ... rest of your functions

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
