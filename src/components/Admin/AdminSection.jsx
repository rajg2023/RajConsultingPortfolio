import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import LoginScreen from './LoginScreen';
import AdminDashboard from './AdminDashboard';

const AdminSection = ({ setActiveSection }) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(true);

  const handleLogout = () => {
    console.log('🔴 Logout button clicked from AdminSection');
    setIsLoggingOut(true);

    setTimeout(() => {
      logout();
      setIsLoggingOut(false);
    }, 500);
  };

  if (isLoading || isLoggingOut) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        {isLoggingOut ? 'Logging out...' : 'Loading...'}
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <LoginScreen />;
  }

  return <AdminDashboard setActiveSection={setActiveSection}/>;
};

export default AdminSection;
