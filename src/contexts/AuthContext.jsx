// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get environment variables
  const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const APP_URL = import.meta.env.VITE_APP_URL || window.location.origin;
  const AUTHORIZED_USERS = ['rajg2023']; // Your GitHub username

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('admin_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem('admin_user');
      }
    }
    setIsLoading(false);
  }, []);

  // Handle OAuth callback
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('code');
    const state = params.get('state');
    const savedState = sessionStorage.getItem('oauth_state');

    if (code && state && state === savedState) {
      handleOAuthCallback(code);
    }
  }, [location]);

  const handleOAuthCallback = async (code) => {
    setIsLoading(true);
    setAuthError(null);

    try {
      // Get access token using the authorization code
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
          code: code
        })
      });

      const { access_token } = await tokenResponse.json();

      if (!access_token) {
        throw new Error('Failed to get access token');
      }

      // Get user data
      const userResponse = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `token ${access_token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (!userResponse.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await userResponse.json();

      // Check if user is authorized
      if (AUTHORIZED_USERS.includes(userData.login.toLowerCase())) {
        const adminUser = {
          id: userData.id,
          login: userData.login,
          name: userData.name || userData.login,
          avatar_url: userData.avatar_url,
          role: 'admin',
          authenticated_at: new Date().toISOString()
        };

        // Store minimal user data in localStorage
        localStorage.setItem('admin_user', JSON.stringify(adminUser));
        setUser(adminUser);
        setIsAuthenticated(true);
        
        // Clean up URL
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, document.title, cleanUrl);

        // Redirect to admin or previous location
        const from = location.state?.from?.pathname || '/admin';
        navigate(from, { replace: true });
      } else {
        throw new Error('User not authorized');
      }
    } catch (error) {
      console.error('OAuth error:', error);
      setAuthError(error.message || 'Authentication failed');
      logout();
    } finally {
      setIsLoading(false);
      sessionStorage.removeItem('oauth_state');
    }
  };

  const loginWithGitHub = () => {
    if (!GITHUB_CLIENT_ID) {
      setAuthError('GitHub OAuth not configured');
      return;
    }

    // Generate secure state parameter
    const state = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('oauth_state', state);
    
    // Build OAuth URL
    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', GITHUB_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', `${APP_URL}/admin`);
    authUrl.searchParams.set('scope', 'read:user');
    authUrl.searchParams.set('state', state);
    
    // Redirect to GitHub
    window.location.href = authUrl.toString();
  };

  const logout = () => {
    localStorage.removeItem('admin_user');
    sessionStorage.removeItem('oauth_state');
    setUser(null);
    setIsAuthenticated(false);
    setAuthError(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        authError,
        loginWithGitHub,
        logout,
        clearError: () => setAuthError(null)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};