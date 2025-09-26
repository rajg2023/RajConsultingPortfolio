import React, { useState } from 'react';
import { 
  Settings, 
  User, 
  FileText, 
  BarChart3, 
  Shield, 
  Database,
  Edit3, 
  Save, 
  Eye, 
  Download,
  Upload,
  Trash2,
  Plus
} from 'lucide-react';

const AdminSection = () => {
  const [activeTab, setActiveTab] = useState('Profile Management');

  const adminTabs = {
    'Profile Management': {
      title: 'Profile & Personal Information',
      description: 'Update your personal details, bio, and professional information displayed across the portfolio.',
      icon: User,
      color: 'blue',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
              <input type="text" defaultValue="Independent Consultant" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" defaultValue="john.doe@email.com" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="text" defaultValue="(555) 123-4567" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Professional Bio</label>
            <textarea 
              rows={4} 
              defaultValue="With over 10 years of experience in technology and business consulting..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Eye size={16} className="mr-2" />
              Preview
            </button>
          </div>
        </div>
      ),
      icon_bg: 'bg-blue-50',
      icon_text: 'text-blue-600',
      border: 'border-blue-200'
    },
    'Content Management': {
      title: 'Manage Portfolio Content',
      description: 'Edit sections, add new projects, update skills, and manage all portfolio content.',
      icon: FileText,
      color: 'green',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Skills Management</h4>
              <p className="text-gray-600 text-sm mb-4">Add, edit, or remove skills and proficiency levels.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center text-sm">
                <Edit3 size={14} className="mr-2" />
                Edit Skills
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Projects Management</h4>
              <p className="text-gray-600 text-sm mb-4">Update project details, add new projects, or archive old ones.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center text-sm">
                <Plus size={14} className="mr-2" />
                Add Project
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Services Management</h4>
              <p className="text-gray-600 text-sm mb-4">Modify service offerings and descriptions.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center text-sm">
                <Edit3 size={14} className="mr-2" />
                Edit Services
              </button>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Recent Content Updates</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Skills section updated</span>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">New project added: "API Testing"</span>
                <span className="text-gray-500 text-sm">1 week ago</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-700">Profile bio updated</span>
                <span className="text-gray-500 text-sm">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      ),
      icon_bg: 'bg-green-50',
      icon_text: 'text-green-600',
      border: 'border-green-200'
    },
    'Analytics & Stats': {
      title: 'Portfolio Analytics',
      description: 'View portfolio performance, visitor statistics, and engagement metrics.',
      icon: BarChart3,
      color: 'purple',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">127</div>
              <div className="text-gray-600 text-sm">Total Views</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">23</div>
              <div className="text-gray-600 text-sm">Contact Inquiries</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600 text-sm">Project Views</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-600 text-sm">Resume Downloads</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Most Viewed Sections</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Skills Section</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">45 views</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Projects Section</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">38 views</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">About Section</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">32 views</span>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Recent Activity</h4>
              <div className="space-y-3 text-sm">
                <div className="text-gray-600">• Visitor viewed Skills section - 2 hours ago</div>
                <div className="text-gray-600">• Resume downloaded - 1 day ago</div>
                <div className="text-gray-600">• Contact form submitted - 2 days ago</div>
                <div className="text-gray-600">• Project details viewed - 3 days ago</div>
              </div>
            </div>
          </div>
        </div>
      ),
      icon_bg: 'bg-purple-50',
      icon_text: 'text-purple-600',
      border: 'border-purple-200'
    },
    'Settings': {
      title: 'Portfolio Settings & Configuration',
      description: 'Manage portfolio settings, backup data, and configure advanced options.',
      icon: Settings,
      color: 'gray',
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Portfolio Configuration</h4>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  <span className="text-gray-700">Show contact information publicly</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  <span className="text-gray-700">Enable resume downloads</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-3" />
                  <span className="text-gray-700">Enable analytics tracking</span>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Data Management</h4>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Export Portfolio Data
                </button>
                <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <Upload size={16} className="mr-2" />
                  Import Backup
                </button>
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                  <Trash2 size={16} className="mr-2" />
                  Reset All Data
                </button>
              </div>
            </div>
          </div>
          <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
            <div className="flex items-center">
              <Shield className="text-yellow-600 mr-3" size={20} />
              <div>
                <h4 className="font-semibold text-yellow-900">Security Notice</h4>
                <p className="text-yellow-700 text-sm">Make sure to backup your data regularly. All changes are saved locally in your browser.</p>
              </div>
            </div>
          </div>
        </div>
      ),
      icon_bg: 'bg-gray-50',
      icon_text: 'text-gray-600',
      border: 'border-gray-200'
    }
  };

  const tabNames = Object.keys(adminTabs);
  const currentTab = adminTabs[activeTab];
  const IconComponent = currentTab.icon;

  const getColorClasses = (color, active) => {
    const colorMap = {
      blue: active ? 'bg-blue-500 text-white shadow-lg' : 'bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100',
      green: active ? 'bg-green-500 text-white shadow-lg' : 'bg-green-50 text-green-600 border border-green-200 hover:bg-green-100',
      purple: active ? 'bg-purple-500 text-white shadow-lg' : 'bg-purple-50 text-purple-600 border border-purple-200 hover:bg-purple-100',
      gray: active ? 'bg-gray-500 text-white shadow-lg' : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
    };
    return colorMap[color];
  };

  return (
    <section className="min-h-screen flex items-center py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Admin Dashboard</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manage your portfolio content, view analytics, and configure settings from this central admin panel.
          </p>
        </div>

        {/* Admin Tab Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabNames.map((tabName) => {
            const tab = adminTabs[tabName];
            const TabIconComponent = tab.icon;
            const isActive = activeTab === tabName;
            
            return (
              <button
                key={tabName}
                onClick={() => setActiveTab(tabName)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${getColorClasses(tab.color, isActive)}`}
              >
                <TabIconComponent size={18} />
                <span>{tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tab Content */}
        <div className={`bg-white rounded-2xl shadow-lg border-2 ${currentTab.border} overflow-hidden`}>
          
          {/* Tab Header */}
          <div className={`${currentTab.icon_bg} px-8 py-6 border-b border-gray-200`}>
            <div className="flex items-center">
              <div className={`p-4 rounded-xl ${currentTab.icon_bg} ${currentTab.icon_text} mr-6`}>
                <IconComponent size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentTab.title}</h3>
                <p className="text-gray-600 text-lg">{currentTab.description}</p>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {currentTab.content}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdminSection;
