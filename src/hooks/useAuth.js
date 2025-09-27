import { useState, useEffect } from 'react';

// GitHub OAuth configuration using environment variables
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = `${window.location.origin}/admin`;

// Authorized users (add your GitHub username here)
const AUTHORIZED_USERS = ['rajg2023']; // Replace with your actual GitHub username

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  console.log('Auth mode:', GITHUB_CLIENT_ID ? 'PRODUCTION_OAUTH' : 'DEMO');

  useEffect(() => {
    checkExistingSession();
    handleOAuthCallback();
  }, []);

  const checkExistingSession = () => {
    const savedUser = localStorage.getItem('admin_user');
    const tokenExpiry = localStorage.getItem('token_expiry');
    
    if (savedUser && tokenExpiry) {
      const now = new Date().getTime();
      if (now < parseInt(tokenExpiry)) {
        try {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setIsAuthenticated(true);
          setRenderKey(prev => prev + 1);
          return;
        } catch (error) {
          clearAuthData();
        }
      } else {
        clearAuthData();
      }
    }
  };

  const clearAuthData = () => {
    localStorage.removeItem('admin_user');
    localStorage.removeItem('github_access_token');
    localStorage.removeItem('token_expiry');
  };

  const handleOAuthCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code && GITHUB_CLIENT_ID) {
      console.log('🔵 Processing OAuth callback...');
      setIsLoading(true);
      
      try {
        // Get user info directly using the code (simplified approach)
        // In a real production app, you'd exchange the code for a token on your backend
        const response = await fetch(`https://api.github.com/user?access_token=${code}`);
        
        if (response.ok) {
          const githubUser = await response.json();
          
          // Check authorization
          if (AUTHORIZED_USERS.includes(githubUser.login)) {
            const adminUser = {
              id: githubUser.id,
              login: githubUser.login,
              name: githubUser.name || githubUser.login,
              avatar_url: githubUser.avatar_url,
              email: githubUser.email || 'rajivgiri513@gmail.com',
              bio: 'QA/SDET Consultant - Portfolio Admin',
              location: 'Available Remote/Hybrid',
              company: 'Independent Consultant',
              role: 'admin'
            };

            // Save session (1 hour expiry)
            const expiryTime = new Date().getTime() + (60 * 60 * 1000);
            localStorage.setItem('admin_user', JSON.stringify(adminUser));
            localStorage.setItem('token_expiry', expiryTime.toString());

            setUser(adminUser);
            setIsAuthenticated(true);
            setRenderKey(prev => prev + 1);
            
            console.log('🔵 OAuth authentication successful!');
          } else {
            alert('Access denied. Unauthorized user.');
          }
        }
      } catch (error) {
        console.error('OAuth error:', error);
        alert('Authentication failed. Please try again.');
      }
      
      setIsLoading(false);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  const loginWithGitHub = () => {
    if (GITHUB_CLIENT_ID) {
      // Production OAuth
      console.log('🔵 Redirecting to GitHub OAuth...');
      const authUrl = `https://github.com/login/oauth/authorize?` +
        `client_id=${GITHUB_CLIENT_ID}&` +
        `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
        `scope=read:user user:email`;
      
      window.location.href = authUrl;
    } else {
      // Demo fallback for local development
      console.log('🔵 Demo mode - simulating GitHub login...');
      setIsLoading(true);
      
      setTimeout(() => {
        const demoUser = {
          id: Date.now(),
          login: 'rajg2023',
          name: 'Raj G',
          avatar_url: 'https://github.com/rajg2023.png',
          email: 'rajivgiri513@gmail.com',
          bio: 'QA/SDET Consultant - Portfolio Admin',
          role: 'admin'
        };

        localStorage.setItem('admin_user', JSON.stringify(demoUser));
        setUser(demoUser);
        setIsAuthenticated(true);
        setIsLoading(false);
        setRenderKey(prev => prev + 1);
      }, 2000);
    }
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
    setIsAuthenticated(false);
    setRenderKey(prev => prev + 1);
  };

  return { user, isAuthenticated, isLoading, loginWithGitHub, logout, renderKey };
};
