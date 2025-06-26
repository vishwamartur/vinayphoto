import React, { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import PhotoUpload from '../components/Admin/PhotoUpload';
import PhotoManager from '../components/Admin/PhotoManager';
import { LogOut, Upload, Settings, BarChart3 } from 'lucide-react';

const AdminPage: React.FC = () => {
  const { logout } = useAuthContext();
  const [activeTab, setActiveTab] = useState<'upload' | 'manage' | 'stats'>('upload');

  const tabs = [
    { id: 'upload' as const, name: 'Upload Photos', icon: Upload },
    { id: 'manage' as const, name: 'Manage Gallery', icon: Settings },
    { id: 'stats' as const, name: 'Statistics', icon: BarChart3 }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your wedding photography portfolio</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-rose-500 text-rose-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'upload' && <PhotoUpload />}
            {activeTab === 'manage' && <PhotoManager />}
            {activeTab === 'stats' && <AdminStats />}
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminStats: React.FC = () => {
  const stats = [
    { label: 'Total Photos', value: '1,247', change: '+12%' },
    { label: 'Active Galleries', value: '18', change: '+2' },
    { label: 'Storage Used', value: '2.4 GB', change: '+0.3 GB' },
    { label: 'Page Views', value: '8,432', change: '+23%' }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Portfolio Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{stat.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-sm text-green-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">New gallery "Beach Sunset Ceremony" created</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">12 photos uploaded to "Romantic Garden"</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">Contact form submission received</span>
            <span className="text-sm text-gray-500">2 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;