import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useContentManager } from '../../hooks/useContentManager';
import AdminToolbar from './AdminToolbar';
import AdminAboutEditor from './editors/AdminAboutEditor';
import AdminProjectsEditor from './editors/AdminProjectsEditor';
import AdminSiteSettingsEditor from './editors/AdminSiteSettingsEditor';
import AdminSkillsEditor from './editors/AdminSkillsEditor';
import AdminServicesEditor from './editors/AdminServicesEditor';
import { 
  BarChart3, User, Star, Briefcase, FolderOpen, Clock, 
  GraduationCap, Mail, LogOut, Save, Download, Upload,
  Bell, Settings as SettingsIcon, Edit3, Plus, Trash2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  // ALL HOOKS MUST BE CALLED FIRST
  const { user, logout } = useAuth();
   const navigate = useNavigate();
  const { content, hasChanges, saveContent, exportContent, isLoading } = useContentManager();
  const [activeEditor, setActiveEditor] = useState('overview');
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  console.log('🟢 AdminDashboard render:', { 
    user: !!user, 
    hasContent: !!content,
    isLoggingOut 
  });
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin panel...</p>
        </div>
      </div>
    );
  }
  
  // Handle logout properly
  /* const handleLogout = async () => {
    console.log('🔴 Logout button clicked');
    setIsLoggingOut(true);
    
    // Small delay to show logout feedback
    setTimeout(() => {
      logout();
      setIsLoggingOut(false);
      navigate('/admin/login');
    }, 500);
  }; */

   const handleLogout = () => {
    console.log('🔴 Logout button clicked');
    setIsLoggingOut(true);

    setTimeout(() => {
      logout();               // ✅ Clear auth state
      setIsLoggingOut(false);
      navigate('/login');     // ✅ Redirect to login screen
    }, 500);
  };


  // If logging out, show logout message
  if (isLoggingOut) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Logging out...</p>
        </div>
      </div>
    );
  }

  console.log('🟢 AdminDashboard: User exists, rendering dashboard...');
  


  const editorSections = [
    { id: 'overview', name: 'Overview', icon: BarChart3, color: 'blue' },
    { id: 'about', name: 'About Me', icon: User, color: 'green' },
    { id: 'skills', name: 'Skills', icon: Star, color: 'purple' },
    { id: 'services', name: 'Services', icon: Briefcase, color: 'orange' },
    { id: 'projects', name: 'Projects', icon: FolderOpen, color: 'red' },
    { id: 'experience', name: 'Experience', icon: Clock, color: 'indigo' },
    { id: 'education', name: 'Education', icon: GraduationCap, color: 'pink' },
    { id: 'contact', name: 'Contact', icon: Mail, color: 'gray' },
    { id: 'settings', name: 'Site Settings', icon: SettingsIcon, color: 'blue' }
  ];

  const handleSave = () => {
    if (saveContent()) {
      alert('Content saved successfully!');
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-4">
          <img 
            src={user?.avatar_url || `https://ui-avatars.com/api/?name=Admin&background=ffffff&color=000000`} 
            alt={user?.name || 'Admin'}
            className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
          />
          <div>
            <h2 className="text-2xl font-bold">Welcome back, {user.name || 'Admin'}!</h2>
            <p className="text-blue-100">Manage your portfolio content from this dashboard</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Skills Listed</p>
              <p className="text-3xl font-bold text-blue-600">{content?.skills?.length || 0}</p>
            </div>
            <Star className="text-blue-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Projects</p>
              <p className="text-3xl font-bold text-green-600">{content?.projects?.length || 0}</p>
            </div>
            <FolderOpen className="text-green-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Services</p>
              <p className="text-3xl font-bold text-purple-600">{content?.services?.length || 0}</p>
            </div>
            <Briefcase className="text-purple-500" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Experience Years</p>
              <p className="text-3xl font-bold text-orange-600">{content?.experience?.length || 0}</p>
            </div>
            <Clock className="text-orange-500" size={32} />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={handleSave}
            disabled={!hasChanges}
            className={`p-4 rounded-lg text-left transition-all duration-200 ${
              hasChanges 
                ? 'bg-blue-50 border-2 border-blue-200 hover:bg-blue-100' 
                : 'bg-gray-50 border-2 border-gray-200 cursor-not-allowed opacity-50'
            }`}
          >
            <Save className={`${hasChanges ? 'text-blue-600' : 'text-gray-400'} mb-2`} size={24} />
            <h4 className={`font-semibold ${hasChanges ? 'text-blue-900' : 'text-gray-500'}`}>
              Save Changes
            </h4>
            <p className={`text-sm ${hasChanges ? 'text-blue-700' : 'text-gray-400'}`}>
              {hasChanges ? 'You have unsaved changes' : 'No changes to save'}
            </p>
          </button>
          
          <button
            onClick={exportContent}
            className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-left hover:bg-green-100 transition-all duration-200"
          >
            <Download className="text-green-600 mb-2" size={24} />
            <h4 className="font-semibold text-green-900">Export Data</h4>
            <p className="text-sm text-green-700">Download portfolio backup</p>
          </button>
          
          <button
            onClick={() => setActiveEditor('about')}
            className="p-4 bg-purple-50 border-2 border-purple-200 rounded-lg text-left hover:bg-purple-100 transition-all duration-200"
          >
            <Edit3 className="text-purple-600 mb-2" size={24} />
            <h4 className="font-semibold text-purple-900">Edit Profile</h4>
            <p className="text-sm text-purple-700">Update personal information</p>
          </button>
        </div>
      </div>

      {/* Portfolio Status */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Portfolio Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="text-green-800">Portfolio is live and accessible</span>
            <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-800">Admin panel is secured with GitHub OAuth</span>
            <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Secure</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
            <span className="text-yellow-800">Consider adding more projects and skills</span>
            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">Suggestion</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderComingSoon = (sectionName) => (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
        <SettingsIcon className="text-gray-400" size={32} />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{sectionName} Editor</h2>
      <p className="text-gray-600 mb-6">
        The {sectionName.toLowerCase()} editor is coming soon! You'll be able to add, edit, and delete {sectionName.toLowerCase()} entries.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 text-sm">
          <strong>Coming Features:</strong> Add new entries, edit existing content, reorder items, and more!
        </p>
      </div>
    </div>
  );

  const renderEditor = () => {
    if (isLoading) {
      return (
        <div className="min-h-[200px] flex items-center justify-center text-gray-600">
          Loading content...
        </div>
      );
    }
    switch(activeEditor) {
      case 'overview': 
        return renderOverview();
      case 'about': 
        return <AdminAboutEditor />;
      case 'skills': 
        return <AdminSkillsEditor />;
      case 'services': 
        return <AdminServicesEditor />;
      case 'projects': 
        return <AdminProjectsEditor />;
      case 'experience': 
        return renderComingSoon('Experience');
      case 'education': 
        return renderComingSoon('Education');
      case 'contact': 
        return renderComingSoon('Contact');
      case 'settings':
        return <AdminSiteSettingsEditor />;
      default: 
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Admin Sidebar */}
      <div className="w-64 bg-white shadow-xl relative">
        {/* User Profile */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="flex items-center space-x-3">
            <img 
              src={user.avatar_url || `https://ui-avatars.com/api/?name=Admin&background=ffffff&color=000000`}
              alt={user.name || 'Admin'} 
              className="w-12 h-12 rounded-full border-2 border-white shadow-lg" 
            />
            <div>
              <h3 className="font-semibold text-white">{user.name || 'Admin'}</h3>
              <p className="text-blue-100 text-sm">@{user.login || 'admin'}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {editorSections.map((section) => {
            const IconComponent = section.icon;
            const isActive = activeEditor === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => setActiveEditor(section.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 shadow-md'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-medium">{section.name}</span>
                {isActive && <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
          {hasChanges && (
            <div className="mb-3">
              <button
                onClick={handleSave}
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                <Save size={16} />
                <span>Save All Changes</span>
              </button>
            </div>
          )}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`w-full py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm ${
              isLoggingOut 
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            <LogOut size={16} />
            <span>{isLoggingOut ? 'Logging out...' : 'Logout'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <AdminToolbar />
          {renderEditor()}
        </div>
      </div>

      {/* Unsaved Changes Notification */}
      {hasChanges && (
        <div className="fixed bottom-4 right-4 bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
          <div className="flex items-center space-x-2">
            <Bell className="text-white" size={20} />
            <span className="font-medium">You have unsaved changes</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
