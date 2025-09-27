import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import LoginScreen from './LoginScreen';
import AdminDashboard from './AdminDashboard';

const AdminSection = () => {
  const { user, isAuthenticated, isLoading, renderKey } = useAuth();

  useEffect(() => {
    console.log('AdminSection state:', { hasUser: !!user, isAuthenticated, isLoading });
  }, [user, isAuthenticated, isLoading, renderKey]);

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Authenticating...</p>
        </div>
      </section>
    );
  }

  if (!isAuthenticated || !user) {
    return <LoginScreen />;
  }

  return <AdminDashboard />;
};

export default AdminSection;
