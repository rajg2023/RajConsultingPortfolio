import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginScreen from './components/Admin/LoginScreen';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminSection from './components/Admin/AdminSection';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // ✅ use context for protection
import Header from './components/Header';
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';
import OAuthCallback from './pages/OAuthCallback';

// Simple route guard for admin routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Note: We keep admin flows under '/', by redirecting /login and /admin to '/'

const App = () => {
  return (
      <AuthProvider> {/* 👈 Wrap entire app with your Auth context */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* OAuth callback must NOT be redirected */}
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          {/* Hide explicit login/admin routes by redirecting to Home with admin section */}
          <Route path="/login" element={<Navigate to="/" state={{ section: 'admin' }} replace />} />
          {/* Redirect common variations to the canonical admin route */}
          <Route path="/admin-panel" element={<Navigate to="/" state={{ section: 'admin' }} replace />} />
          <Route path="/admin%20panel" element={<Navigate to="/" state={{ section: 'admin' }} replace />} />
          <Route path="/admin" element={<Navigate to="/" state={{ section: 'admin' }} replace />} />
        </Routes>
      </AuthProvider>
  );
};

export default App;
