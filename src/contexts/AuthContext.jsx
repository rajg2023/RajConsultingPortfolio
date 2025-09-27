// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const initialized = useRef(false);
  const loginTimeoutRef = useRef(null);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const savedUser = localStorage.getItem('admin_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('admin_user');
      }
    }
  }, []);

  const loginWithGitHub = () => {
    if (loginTimeoutRef.current) {
      clearTimeout(loginTimeoutRef.current);
    }

    setIsLoading(true);
    setAuthError(null);

    loginTimeoutRef.current = setTimeout(() => {
      try {
        const demoUser = {
          id: Date.now(),
          login: 'rajg2023',
          name: 'Raj G',
          avatar_url: 'https://github.com/rajg2023.png',
          email: 'rajivgiri513@gmail.com',
          bio: 'QA/SDET Consultant - Portfolio Admin',
          location: 'Available Remote/Hybrid',
          company: 'Independent Consultant',
          role: 'admin',
          authenticated_at: new Date().toISOString()
        };

        localStorage.setItem('admin_user', JSON.stringify(demoUser));
        setUser(demoUser);
        setIsAuthenticated(true);
        setIsLoading(false);
      } catch (error) {
        console.error('🔴 Login failed:', error);
        setAuthError('Login failed. Please try again.');
        setIsLoading(false);
      }
    }, 2000);
  };

  const logout = () => {
    if (loginTimeoutRef.current) {
      clearTimeout(loginTimeoutRef.current);
    }

    localStorage.removeItem('admin_user');
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
    setAuthError(null);
  };

  const clearError = () => setAuthError(null);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      authError,
      loginWithGitHub,
      logout,
      clearError,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

/* export const useAuth = () => useContext(AuthContext); */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth() must be used within an <AuthProvider>');
  }
  return context;
};