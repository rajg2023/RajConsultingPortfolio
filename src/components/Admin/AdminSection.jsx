import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import LoginScreen from './LoginScreen';
import AdminDashboard from './AdminDashboard';

const AdminSection = () => {
  const { user, isAuthenticated, isLoading } = useAuth();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </section>
    );
  }

  // Show login screen if not authenticated
  if (!isAuthenticated || !user) {
    return <LoginScreen />;
  }

  // Show admin dashboard if authenticated
  return <AdminDashboard />;
};

export default AdminSection;
