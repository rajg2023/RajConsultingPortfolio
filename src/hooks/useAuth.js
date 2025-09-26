import { useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Remove the useEffect completely - no automatic auth check

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
    }, 2000);
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
