import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  useEffect(() => {
    const savedUser = localStorage.getItem('admin_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
        setRenderKey(prev => prev + 1);
      } catch (error) {
        localStorage.removeItem('admin_user');
      }
    }
  }, []);

  const loginWithGitHub = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const adminUser = {
        id: Date.now(),
        login: 'rajg2023',
        name: 'Raj G',
        avatar_url: 'https://github.com/rajg2023.png',
        email: 'rajivgiri513@gmail.com',
        bio: 'QA/SDET Consultant - Portfolio Admin',
        location: 'Available Remote/Hybrid',
        company: 'Independent Consultant',
        role: 'admin'
      };

      localStorage.setItem('admin_user', JSON.stringify(adminUser));
      setUser(adminUser);
      setIsAuthenticated(true);
      setIsLoading(false);
      setRenderKey(prev => prev + 1);
    }, 2000);
  };

  const logout = () => {
    localStorage.removeItem('admin_user');
    setUser(null);
    setIsAuthenticated(false);
    setRenderKey(prev => prev + 1);
  };

  return { user, isAuthenticated, isLoading, loginWithGitHub, logout, renderKey };
};
