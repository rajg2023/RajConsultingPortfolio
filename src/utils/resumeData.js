// Utility to load resume data
let resumeData = null;

export const loadResumeData = async () => {
  if (!resumeData) {
    try {
      const response = await fetch('/content/resume.json');
      if (!response.ok) {
        throw new Error('Failed to load resume data');
      }
      resumeData = await response.json();
    } catch (error) {
      console.error('Error loading resume data:', error);
      // Return a default object if loading fails
      resumeData = {
        name: 'Your Name',
        title: 'Professional Title',
        contact: {},
        summary: '',
        experience: [],
        education: [],
        skills: { technical: [], soft: [] },
        projects: []
      };
    }
  }
  return resumeData;
};

export default loadResumeData;
