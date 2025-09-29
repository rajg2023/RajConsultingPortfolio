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
      } catch {
        localStorage.removeItem('admin_user');
      }
    }
  }, []);

  const loginWithGitHub = () => {
    if (isLoading) return; // prevent multiple clicks while loading

    // Public client_id is safe to expose on the frontend
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    if (!clientId) {
      setAuthError('GitHub OAuth is not configured. Missing VITE_GITHUB_CLIENT_ID');
      return;
    }

    setIsLoading(true);
    setAuthError(null);

    // Use Vite's BASE_URL and URL() to build correct callback under subpath on Pages
    const baseUrl = import.meta.env.BASE_URL || '/';
    const redirectUri = new URL('oauth/callback', window.location.origin + baseUrl).href;

    // CSRF protection: random state stored in sessionStorage
    const state = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem('oauth_state', state);
    sessionStorage.setItem('oauth_redirect_uri', redirectUri);

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'read:user user:email',
      state,
      // allow signup stays default; add 'allow_signup=false' if desired
    });

    const authorizeUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;
    window.location.assign(authorizeUrl);
  };

  const logout = () => {
    if (loginTimeoutRef.current) {
      clearTimeout(loginTimeoutRef.current);
      loginTimeoutRef.current = null;
    }

    localStorage.removeItem('admin_user');
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
    setAuthError(null);
  };

  const clearError = () => setAuthError(null);

  // Finalize OAuth login by storing user and updating state
  const completeOAuthLogin = (profile) => {
    try {
      const safeUser = {
        id: profile.id,
        login: profile.login,
        name: profile.name || profile.login,
        avatar_url: profile.avatar_url,
        email: profile.email || null,
        bio: profile.bio || '',
        location: profile.location || '',
        company: profile.company || '',
        role: 'admin',
        authenticated_at: new Date().toISOString(),
      };
      localStorage.setItem('admin_user', JSON.stringify(safeUser));
      setUser(safeUser);
      setIsAuthenticated(true);
      setIsLoading(false);
      setAuthError(null);
    } catch (e) {
      console.error('Failed to finalize OAuth login', e);
      setAuthError('Failed to finalize login');
      setIsLoading(false);
    }
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
        clearError,
        completeOAuthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Export your useAuth hook properly:
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth() must be used within an <AuthProvider>');
  }
  return context;
};
