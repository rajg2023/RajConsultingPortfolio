import React, { useState, useEffect } from 'react';
import { Github, Shield, CheckCircle, Users, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginScreen = ({ setActiveSection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginWithGitHub, isLoading, isAuthenticated, authError } = useAuth();
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [error, setError] = useState(null);

  // Get environment variables
  const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || '';
  const APP_URL = import.meta.env.VITE_APP_URL || window.location.origin;

  // Redirect to admin if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    try {
      setError(null);
      setLoginAttempted(true);
      
      // Generate a random state string for CSRF protection
      const state = Math.random().toString(36).substring(2);
      sessionStorage.setItem('oauth_state', state);
      
      // Redirect to GitHub OAuth page - must match exactly with GitHub OAuth App settings
      const redirectUri = 'https://rajg2023.github.io/RajConsultingPortfolio/admin';
      const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}&scope=user:email`;
      
      window.location.href = githubAuthUrl;
    } catch (error) {
      console.error('Login failed:', error);
      setError('Failed to initiate GitHub login. Please try again.');
      setLoginAttempted(false);
    }
  };

  // Show loading state
  if (isLoading || loginAttempted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Authenticating with GitHub...</p>
        </div>
      </div>
    );
  }

  // Show error message if authentication failed
  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md text-center">
          <div className="flex justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Authentication Failed</h2>
          <p className="text-gray-600 mb-6">
            {authError === 'User not authorized' 
              ? 'Your GitHub account is not authorized to access the admin panel.'
              : 'An error occurred during authentication. Please try again.'}
          </p>
          <button
            onClick={handleLogin}
            className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>Try Again with GitHub</span>
          </button>
        </div>
      </div>
    );
  }

  // Show the login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="px-8 py-10">
          <div className="text-center mb-8">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Sign in with GitHub to continue</p>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-3 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Github className="h-5 w-5" />
              <span>Continue with GitHub</span>
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">Secure Access</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Secure Authentication</h3>
                  <p className="text-sm text-gray-500">Uses GitHub OAuth for secure, passwordless login</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Authorized Access Only</h3>
                  <p className="text-sm text-gray-500">Only approved GitHub accounts can access the admin panel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
