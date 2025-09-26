import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('admin_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('admin_user');
      }
    }
  }, []); // Fixed: Added proper closing braces

  const loginWithGitHub = () => {
    setIsLoading(true);
    // Simulate GitHub OAuth flow
    setTimeout(() => {
      const demoUser = {
        id: Date.now(),
        login: 'rajg2023',
        name: 'Raj G',
        avatar_url: 'https://github.com/rajg2023.png',
        email: 'raj@consulting.com',
        bio: 'QA/SDET Consultant - Portfolio Admin',
        location: 'Available Remote/Hybrid',
        company: 'Independent Consultant'
      };

      // Save to localStorage
      localStorage.setItem('admin_user', JSON.stringify(demoUser));
      
      // Update state
      setUser(demoUser);
      setIsAuthenticated(true);
      setIsLoading(false);
      
      console.log('Demo login successful:', demoUser);
    }, 2000); // 2-second delay to simulate OAuth flow
  };

  const logout = () => {
    localStorage.removeItem('admin_user');
    localStorage.removeItem('github_access_token');
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  return { user, isAuthenticated, isLoading, loginWithGitHub, logout };
};
