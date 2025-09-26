import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Github, Shield, Lock, Key, Zap, CheckCircle } from 'lucide-react';

const LoginScreen = () => {
  const { loginWithGitHub, isLoading } = useAuth();
  const [isClicked, setIsClicked] = useState(false);

  const handleLogin = () => {
    setIsClicked(true);
    loginWithGitHub();
  };

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
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="text-white" size={40} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Admin</h1>
          <p className="text-gray-600">Secure access to your portfolio management</p>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center text-gray-700 text-sm">
            <div className="bg-green-100 p-2 rounded-full mr-3">
              <CheckCircle className="text-green-600" size={16} />
            </div>
            <span>Edit all portfolio sections</span>
          </div>
          <div className="flex items-center text-gray-700 text-sm">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Zap className="text-blue-600" size={16} />
            </div>
            <span>Real-time content updates</span>
          </div>
          <div className="flex items-center text-gray-700 text-sm">
            <div className="bg-purple-100 p-2 rounded-full mr-3">
              <Lock className="text-purple-600" size={16} />
            </div>
            <span>Secure GitHub authentication</span>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={isLoading || isClicked}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform ${
            isLoading || isClicked
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gray-900 hover:bg-gray-800 hover:scale-105 active:scale-95'
          } text-white shadow-lg`}
        >
          {isLoading || isClicked ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Connecting to GitHub...</span>
            </>
          ) : (
            <>
              <Github size={28} />
              <span>Continue with GitHub</span>
            </>
          )}
        </button>

        {/* Security Info */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex items-center justify-center text-gray-500 text-sm">
            <Key size={14} className="mr-2" />
            <span>Powered by GitHub OAuth 2.0</span>
          </div>
          <p className="text-center text-gray-400 text-xs mt-2">
            Your credentials are never stored. Authentication handled by GitHub.
          </p>
        </div>

        {/* Demo Mode Notice */}
        {!import.meta.env.VITE_GITHUB_CLIENT_ID && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm text-center">
              <strong>Demo Mode:</strong> Click to simulate GitHub login
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginScreen;
