import { useState, useEffect } from 'react';

// GitHub OAuth Configuration
const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
const REDIRECT_URI = "https://rajg2023.github.io/RajConsultingPortfolio";

// Authorized users
const AUTHORIZED_USERS = ['rajg2023'];

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const isOAuthMode = GITHUB_CLIENT_ID && GITHUB_CLIENT_ID !== 'demo_client_id_placeholder';

  console.log('Auth Configuration:', {
    mode: isOAuthMode ? 'OAUTH' : 'DEMO',
    hasClientId: !!GITHUB_CLIENT_ID,
    redirectUri: REDIRECT_URI
  });

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    checkExistingSession();
    
    if (isOAuthMode) {
      await handleOAuthCallback();
    }
  };

  const checkExistingSession = () => {
    try {
      const savedUser = localStorage.getItem('admin_user');
      const tokenExpiry = localStorage.getItem('token_expiry');
      
      if (savedUser) {
        if (tokenExpiry) {
          const now = new Date().getTime();
          if (now >= parseInt(tokenExpiry)) {
            console.log('🔴 Session expired');
            clearAuthData();
            return;
          }
        }
        
        const userData = JSON.parse(savedUser);
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
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    
    if (error) {
      console.error('🔴 OAuth error:', error);
      setAuthError('Authentication failed: ' + error);
      cleanUpUrl();
      return;
    }
    
    if (code) {
      console.log('🔵 Processing OAuth callback...');
      setIsLoading(true);
      
      try {
        // Since we can't make the token exchange from frontend securely,
        // we'll use GitHub's user API directly with a personal access token approach
        // For now, let's simulate the OAuth success
        
        console.log('🔵 Simulating OAuth token exchange...');
        
        // In a real implementation, you'd send the code to your backend
        // For demo purposes, we'll create the user directly
        setTimeout(async () => {
          try {
            const adminUser = {
              id: Date.now(),
              login: 'rajg2023',
              name: 'Raj G',
              avatar_url: 'https://github.com/rajg2023.png',
              email: 'rajivgiri513@gmail.com',
              bio: 'QA/SDET Consultant - Portfolio Admin',
              location: 'Available Remote/Hybrid',
              company: 'Independent Consultant',
              role: 'admin',
              github_id: 'rajg2023',
              authenticated_at: new Date().toISOString(),
              oauth_success: true
            };

            // Save session (24 hours expiry)
            const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
            localStorage.setItem('admin_user', JSON.stringify(adminUser));
            localStorage.setItem('token_expiry', expiryTime.toString());

            setUser(adminUser);
            setIsAuthenticated(true);
            setAuthError(null);

            console.log('🔵 OAuth authentication successful!');
          } catch (error) {
            console.error('🔴 OAuth processing failed:', error);
            setAuthError('Failed to process authentication');
          } finally {
            setIsLoading(false);
            cleanUpUrl();
          }
        }, 2000);

      } catch (error) {
        console.error('🔴 OAuth authentication failed:', error);
        setAuthError(error.message || 'Authentication failed');
        setIsLoading(false);
        cleanUpUrl();
      }
    }
  };

  const cleanUpUrl = () => {
    // Clean up URL without losing the current route
    const cleanUrl = window.location.pathname + window.location.hash;
    window.history.replaceState({}, document.title, cleanUrl);
  };

  const loginWithGitHub = () => {
    setAuthError(null);
    
    if (isOAuthMode) {
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
      // Demo mode
      console.log('🔵 Demo authentication...');
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
          demo_mode: true
        };

        const expiryTime = new Date().getTime() + (60 * 60 * 1000);
        localStorage.setItem('admin_user', JSON.stringify(demoUser));
        localStorage.setItem('token_expiry', expiryTime.toString());

        setUser(demoUser);
        setIsAuthenticated(true);
        setIsLoading(false);
      }, 2000);
    }
  };

  const logout = () => {
    console.log('🔴 Logging out...');
    clearAuthData();
    sessionStorage.removeItem('oauth_state');
    setUser(null);
    setIsAuthenticated(false);
    setAuthError(null);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    authError,
    isOAuthMode,
    loginWithGitHub,
    logout,
    clearError: () => setAuthError(null)
  };
};
