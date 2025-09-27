import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import LoginScreen from './LoginScreen';
import AdminDashboard from './AdminDashboard';

const AdminSection = () => {
  const { user, isAuthenticated, isLoading, renderKey } = useAuth(); // Added renderKey
  
  console.log('🟢 AdminSection render:', { 
    hasUser: !!user, 
    isAuthenticated, 
    isLoading,
    renderKey,
    userDetails: user ? { name: user.name, login: user.login } : null
  });

  // Force re-render when auth state changes
  useEffect(() => {
    console.log('🟢 AdminSection useEffect triggered:', { 
      hasUser: !!user, 
      isAuthenticated, 
      isLoading, 
      renderKey 
    });
  }, [user, isAuthenticated, isLoading, renderKey]);

  if (isLoading) {
    console.log('🟡 AdminSection: Showing loading...');
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </section>
    );
  }

  if (!isAuthenticated || !user) {
    console.log('🟡 AdminSection: Showing login screen...');
    return <LoginScreen />;
  }

  console.log('🟢 AdminSection: Showing admin dashboard...');
  return <AdminDashboard />;
};

export default AdminSection;
