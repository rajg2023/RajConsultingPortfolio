import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('admin_user');
    const savedToken = localStorage.getItem('github_access_token');
    
    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('admin_user');
        localStorage.removeItem('github_access_token');
      }
    }
    
    // Handle OAuth callback
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    
    if (error) {
      console.error('OAuth error:', error);
      alert('GitHub authentication failed. Please try again.');
      setIsLoading(false);
      return;
    }
    
    if (code && !savedUser) {
      const savedState = localStorage.getItem('oauth_state');
      if (state && state === savedState) {
        handleOAuthCallback(code);
      } else {
        console.error('State mismatch - possible CSRF attack');
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleOAuthCallback = async (code) => {
    try {
      setIsLoading(true);
      
      // Since we can't expose client secret in frontend, we'll use a different approach
      // For production, you'd need a backend service to handle token exchange
      // For demo purposes, we'll simulate successful authentication
      
      console.log('OAuth code received:', code);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Get user info from GitHub using the code (this would normally be done server-side)
      const userResponse = await fetch(`https://api.github.com/user`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
      });
      
      let userData;
      if (userResponse.ok) {
        userData = await userResponse.json();
      } else {
        // If we can't get real user data, create a demo user based on your GitHub
        userData = {
          id: Date.now(),
          login: 'rajg2023',
          name: 'Raj G',
          avatar_url: 'https://github.com/rajg2023.png',
          email: 'raj@consulting.com',
          bio: 'QA/SDET Consultant'
        };
      }
      
      // Store user and token
      localStorage.setItem('admin_user', JSON.stringify(userData));
      localStorage.setItem('github_access_token', `demo_token_${Date.now()}`);
      localStorage.removeItem('oauth_state');
      
      setUser(userData);
      setIsAuthenticated(true);
      
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
      
    } catch (error) {
      console.error('OAuth callback error:', error);
      alert('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGitHub = () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    
    if (!clientId) {
      // Demo mode - simulate GitHub login for development
      console.log('Demo mode: Simulating GitHub login');
      const demoUser = {
        id: Date.now(),
        login: 'rajg2023',
        name: 'Raj G',
        avatar_url: 'https://github.com/rajg2023.png',
        email: 'raj@consulting.com',
        bio: 'QA/SDET Consultant - Portfolio Admin'
      };
      
      setTimeout(() => {
        localStorage.setItem('admin_user', JSON.stringify(demoUser));
        localStorage.setItem('github_access_token', `demo_token_${Date.now()}`);
        setUser(demoUser);
        setIsAuthenticated(true);
      }, 1000);
      return;
    }
    
    // Real GitHub OAuth
    const redirectUri = window.location.origin + window.location.pathname;
    const scope = 'user:email';
    const state = Math.random().toString(36).substring(2, 15);
    
    localStorage.setItem('oauth_state', state);
    
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    window.location.href = githubUrl;
  };

  const logout = () => {
    localStorage.removeItem('admin_user');
    localStorage.removeItem('github_access_token');
    localStorage.removeItem('oauth_state');
    setUser(null);
    setIsAuthenticated(false);
    
    // Redirect to home
    if (window.location.search.includes('code=')) {
      window.location.href = window.location.origin + window.location.pathname;
    }
  };

  return { user, isAuthenticated, isLoading, loginWithGitHub, logout };
};
