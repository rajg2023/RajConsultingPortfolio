import React, { useState, useEffect, useRef } from 'react';
import { GithubIcon, Shield, Lock, CheckCircle, Users } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginScreen = ({ setActiveSection }) => {
  const navigate = useNavigate();
  const { loginWithGitHub, isLoading, isAuthenticated, error: authError } = useAuth();
  const [loginAttempted, setLoginAttempted] = useState(false);
  const navigateToAdmin = useRef(false);

  const handleLogin = async () => {
    try {
      setLoginAttempted(true);
      navigateToAdmin.current = false; // Reset the navigation flag on new login attempt
      await loginWithGitHub();
    } catch (error) {
      console.error('Login failed:', error);
      setLoginAttempted(false);
    }
  };

  useEffect(() => {
    // Only attempt to navigate if we've tried to log in and are now authenticated
    if (loginAttempted && isAuthenticated && !navigateToAdmin.current) {
      navigateToAdmin.current = true;
      // Prefer routing to the admin page for consistent UX
      navigate('/admin', { replace: true });
      // For backward compatibility, also notify parent if provided
      if (setActiveSection) {
        setActiveSection('admin');
      }
    }
  }, [isAuthenticated, setActiveSection, loginAttempted, navigate]);

  // If already authenticated when visiting login page, redirect to admin
  useEffect(() => {
    if (isAuthenticated && !loginAttempted) {
      navigate('/admin', { replace: true });
    }
  }, [isAuthenticated, loginAttempted, navigate]);
  

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500 rounded-full opacity-5 animate-ping"></div>
      </div>

      <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md mx-4 backdrop-blur-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Shield className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Admin</h1>
          <p className="text-gray-600">Secure GitHub OAuth authentication</p>
        </div>

        {/* OAuth Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Lock className="text-blue-500 flex-shrink-0 mt-1" size={18} />
            <div>
              <h3 className="font-semibold text-blue-900 text-sm">OAuth Authentication</h3>
              <p className="text-blue-700 text-sm mt-1">
                Authenticate with your GitHub account to access the admin panel.
              </p>
            </div>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black transform hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white inline-block mr-2"></div>
              Processing OAuth...
            </>
          ) : (
            <>
              <GithubIcon className="inline-block mr-2" size={20} />
              Continue with GitHub
            </>
          )}
        </button>

        {/* Features List */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Admin Features</h4>
          <div className="space-y-2">
            {[
              'Edit all portfolio sections',
              'Real-time content updates',
              'Secure GitHub OAuth authentication',
              'Session-based access control'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="text-green-500" size={16} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized Users */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center space-x-2 text-gray-600 mb-2">
            <Users size={16} />
            <span className="text-sm font-medium">Authorized Access</span>
          </div>
          <p className="text-xs text-gray-500">
            Only authorized GitHub accounts can access this admin panel.
          </p>
        </div>

        {/* Security Info */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <Shield size={16} />
            <span className="text-sm">Secure OAuth - GitHub Authentication</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Your credentials are never stored locally
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;
