import { useState, useEffect } from 'react';

// GitHub OAuth Configuration
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const PRODUCTION_REDIRECT_URI = "https://rajg2023.github.io/RajConsultingPortfolio/admin";
const LOCAL_REDIRECT_URI = "http://localhost:5173/admin";

// Determine correct redirect URI based on environment
const REDIRECT_URI = window.location.hostname === 'localhost' 
  ? LOCAL_REDIRECT_URI 
  : PRODUCTION_REDIRECT_URI;

// Authorized GitHub usernames
const AUTHORIZED_USERS = ['rajg2023'];

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  // Determine if we're using OAuth or demo mode
  const isOAuthMode = GITHUB_CLIENT_ID && GITHUB_CLIENT_ID !== 'demo_client_id_placeholder';

  console.log('Auth Configuration:', {
    mode: isOAuthMode ? 'OAUTH' : 'DEMO',
    hasClientId: !!GITHUB_CLIENT_ID,
    redirectUri: REDIRECT_URI,
    hostname: window.location.hostname
  });

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    // Check for existing valid session
    checkExistingSession();
    
    // Handle OAuth callback if present
    if (isOAuthMode) {
      await handleOAuthCallback();
    }
  };

  const checkExistingSession = () => {
    try {
      const savedUser = localStorage.getItem('admin_user');
      const tokenExpiry = localStorage.getItem('token_expiry');
      
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        
        // Check if session is still valid
        if (tokenExpiry) {
          const now = new Date().getTime();
          if (now >= parseInt(tokenExpiry)) {
            console.log('🔴 Session expired, clearing data');
            clearAuthData();
            return;
          }
        }
        
        console.log('🔵 Found valid existing session');
        setUser(userData);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error checking existing session:', error);
      clearAuthData();
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
    const error = urlParams.get('error');
    
    if (error) {
      console.error('🔴 OAuth error:', error);
      setAuthError('Authentication was cancelled or failed');
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
    
    if (code) {
      console.log('🔵 Processing OAuth callback...');
      setIsLoading(true);
      
      try {
        // Exchange code for access token
        const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            client_id: GITHUB_CLIENT_ID,
            code: code,
            redirect_uri: REDIRECT_URI,
          }),
        });

        if (!tokenResponse.ok) {
          throw new Error('Failed to exchange code for token');
        }

        const tokenData = await tokenResponse.json();
        
        if (tokenData.error) {
          throw new Error(tokenData.error_description || tokenData.error);
        }

        const accessToken = tokenData.access_token;
        
        if (!accessToken) {
          throw new Error('No access token received');
        }

        // Get user information
        const userResponse = await fetch('https://api.github.com/user', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!userResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const githubUser = await userResponse.json();

        // Check authorization
        if (!AUTHORIZED_USERS.includes(githubUser.login)) {
          throw new Error(`Access denied. User ${githubUser.login} is not authorized.`);
        }

        // Create admin user object
        const adminUser = {
          id: githubUser.id,
          login: githubUser.login,
          name: githubUser.name || githubUser.login,
          avatar_url: githubUser.avatar_url,
          email: githubUser.email || 'rajivgiri513@gmail.com',
          bio: githubUser.bio || 'QA/SDET Consultant - Portfolio Admin',
          location: githubUser.location || 'Available Remote/Hybrid',
          company: githubUser.company || 'Independent Consultant',
          role: 'admin',
          github_id: githubUser.id,
          authenticated_at: new Date().toISOString()
        };

        // Save session (24 hours expiry)
        const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        localStorage.setItem('admin_user', JSON.stringify(adminUser));
        localStorage.setItem('github_access_token', accessToken);
        localStorage.setItem('token_expiry', expiryTime.toString());

        setUser(adminUser);
        setIsAuthenticated(true);
        setAuthError(null);

        console.log('🔵 OAuth authentication successful!', {
          user: githubUser.login,
          name: githubUser.name
        });

      } catch (error) {
        console.error('🔴 OAuth authentication failed:', error);
        setAuthError(error.message || 'Authentication failed');
        clearAuthData();
      } finally {
        setIsLoading(false);
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    }
  };

  const loginWithGitHub = () => {
    setAuthError(null);
    
    if (isOAuthMode) {
      // Production OAuth flow
      console.log('🔵 Redirecting to GitHub OAuth...');
      
      const state = Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('oauth_state', state);
      
      const authUrl = `https://github.com/login/oauth/authorize?` +
        `client_id=${GITHUB_CLIENT_ID}&` +
        `redirect_uri=${encodeURIComponent(REDIRECT_URI)}&` +
        `scope=read:user user:email&` +
        `state=${state}`;
      
      window.location.href = authUrl;
    } else {
      // Demo mode for development
      console.log('🔵 Demo authentication mode...');
      setIsLoading(true);
      
      setTimeout(() => {
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
          demo_mode: true,
          authenticated_at: new Date().toISOString()
        };

        // Save demo session (1 hour expiry)
        const expiryTime = new Date().getTime() + (60 * 60 * 1000);
        localStorage.setItem('admin_user', JSON.stringify(demoUser));
        localStorage.setItem('token_expiry', expiryTime.toString());

        setUser(demoUser);
        setIsAuthenticated(true);
        setIsLoading(false);
        
        console.log('🔵 Demo authentication successful!');
      }, 2000);
    }
  };

  const logout = () => {
    console.log('🔴 Logging out...');
    clearAuthData();
    sessionStorage.removeItem('oauth_state');
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
    setAuthError(null);
  };

  const clearError = () => {
    setAuthError(null);
  };

  return {
    // State
    user,
    isAuthenticated,
    isLoading,
    authError,
    
    // Config
    isOAuthMode,
    
    // Actions
    loginWithGitHub,
    logout,
    clearError
  };
};
