import React, { useState, useEffect } from 'react';
import { 
  Eye, EyeOff, Download, Trash2, Edit, Shield, Lock,
  User, Heart, MessageCircle, MapPin, Camera, Phone,
  Mail, Calendar, Clock, Settings, AlertTriangle, CheckCircle
} from 'lucide-react';

const DataPrivacyCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showSensitiveData, setShowSensitiveData] = useState(false);
  const [privacyLevel, setPrivacyLevel] = useState('balanced');
  const [dataExportRequested, setDataExportRequested] = useState(false);

  // User data categories
  const dataCategories = [
    {
      category: 'Profile Information',
      icon: User,
      items: [
        { field: 'Name', value: 'Sarah Johnson', sensitive: false, editable: true },
        { field: 'Age', value: '28', sensitive: false, editable: true },
        { field: 'Bio', value: 'Love hiking and coffee...', sensitive: false, editable: true },
        { field: 'Occupation', value: 'Marketing Manager', sensitive: false, editable: true },
        { field: 'Education', value: 'University of California', sensitive: false, editable: true },
        { field: 'Height', value: '5\'6"', sensitive: false, editable: true }
      ]
    },
    {
      category: 'Contact Information',
      icon: Phone,
      items: [
        { field: 'Email', value: 'sarah.j@email.com', sensitive: true, editable: false },
        { field: 'Phone Number', value: '+1 (555) 123-4567', sensitive: true, editable: false },
        { field: 'Emergency Contact', value: 'Mom - (555) 987-6543', sensitive: true, editable: true }
      ]
    },
    {
      category: 'Location Data',
      icon: MapPin,
      items: [
        { field: 'Current City', value: 'San Francisco, CA', sensitive: false, editable: true },
        { field: 'Home Address', value: '***Hidden***', sensitive: true, editable: true },
        { field: 'Work Location', value: 'Downtown SF', sensitive: false, editable: true },
        { field: 'Location History', value: '30 days of data', sensitive: true, editable: false }
      ]
    },
    {
      category: 'Dating Preferences',
      icon: Heart,
      items: [
        { field: 'Age Range', value: '25-35', sensitive: false, editable: true },
        { field: 'Distance Preference', value: '25 miles', sensitive: false, editable: true },
        { field: 'Relationship Goals', value: 'Long-term relationship', sensitive: false, editable: true },
        { field: 'Deal Breakers', value: 'Smoking, No pets', sensitive: false, editable: true }
      ]
    },
    {
      category: 'Photos & Media',
      icon: Camera,
      items: [
        { field: 'Profile Photos', value: '6 photos uploaded', sensitive: false, editable: true },
        { field: 'Private Photos', value: '3 photos (premium)', sensitive: true, editable: true },
        { field: 'Video Verification', value: 'Completed', sensitive: false, editable: false },
        { field: 'Photo Metadata', value: 'Location data removed', sensitive: true, editable: false }
      ]
    },
    {
      category: 'Communication Data',
      icon: MessageCircle,
      items: [
        { field: 'Messages Sent', value: '1,247 messages', sensitive: true, editable: false },
        { field: 'Messages Received', value: '1,089 messages', sensitive: true, editable: false },
        { field: 'Video Calls', value: '23 calls (45 hours)', sensitive: true, editable: false },
        { field: 'Voice Messages', value: '156 recordings', sensitive: true, editable: false }
      ]
    }
  ];

  // Privacy settings
  const privacySettings = [
    {
      setting: 'Profile Visibility',
      description: 'Who can see your profile',
      current: 'Verified users only',
      options: ['Everyone', 'Verified users only', 'Premium users only', 'Mutual matches only'],
      impact: 'Affects discoverability and match potential'
    },
    {
      setting: 'Location Precision',
      description: 'How precise your location is shown',
      current: 'City level',
      options: ['Exact location', 'Neighborhood', 'City level', 'Region only', 'Hidden'],
      impact: 'Balances privacy with local matching'
    },
    {
      setting: 'Last Active Status',
      description: 'When others see you were last online',
      current: 'Within 1 hour',
      options: ['Real-time', 'Within 1 hour', 'Within 24 hours', 'This week', 'Hidden'],
      impact: 'Shows engagement level to potential matches'
    },
    {
      setting: 'Read Receipts',
      description: 'Show when you\'ve read messages',
      current: 'Matches only',
      options: ['Always show', 'Matches only', 'Premium users only', 'Never show'],
      impact: 'Affects communication expectations'
    },
    {
      setting: 'Photo Access',
      description: 'Who can see your private photos',
      current: 'Request approval',
      options: ['All matches', 'Verified matches', 'Premium users', 'Request approval', 'Never share'],
      impact: 'Controls access to sensitive content'
    },
    {
      setting: 'Data Analytics',
      description: 'Allow anonymous usage analytics',
      current: 'Enabled',
      options: ['Enabled', 'Limited', 'Disabled'],
      impact: 'Helps improve app features and matching'
    }
  ];

  // Data usage summary
  const dataUsage = {
    total_data_points: 15847,
    categories: {
      profile: 45,
      preferences: 23,
      interactions: 8934,
      location: 2156,
      media: 4689
    },
    retention_period: '2 years after account deletion',
    last_backup: '2025-01-06 03:00 UTC',
    data_size: '2.3 GB'
  };

  // Privacy timeline
  const privacyTimeline = [
    {
      date: '2025-01-07',
      action: 'Privacy settings updated',
      details: 'Changed location precision to city level',
      type: 'settings_change'
    },
    {
      date: '2025-01-05',
      action: 'Data export requested',
      details: 'Complete data export generated and downloaded',
      type: 'data_export'
    },
    {
      date: '2025-01-03',
      action: 'Photo privacy updated',
      details: 'Set private photos to require approval',
      type: 'settings_change'
    },
    {
      date: '2024-12-28',
      action: 'Account verification',
      details: 'Phone number and email verified',
      type: 'verification'
    },
    {
      date: '2024-12-25',
      action: 'Profile created',
      details: 'Account created with initial privacy settings',
      type: 'account_creation'
    }
  ];

  // Data sharing partners
  const dataSharingPartners = [
    {
      partner: 'Analytics Provider',
      purpose: 'App improvement and user experience optimization',
      data_shared: 'Anonymous usage patterns, feature interactions',
      opt_out: true,
      status: 'active'
    },
    {
      partner: 'Safety Verification',
      purpose: 'Identity verification and fraud prevention',
      data_shared: 'Photo verification, phone number validation',
      opt_out: false,
      status: 'active'
    },
    {
      partner: 'Payment Processor',
      purpose: 'Subscription and payment processing',
      data_shared: 'Billing information, transaction history',
      opt_out: false,
      status: 'active'
    },
    {
      partner: 'Customer Support',
      purpose: 'User assistance and issue resolution',
      data_shared: 'Support tickets, communication history',
      opt_out: false,
      status: 'active'
    }
  ];

  // User rights and controls
  const userRights = [
    {
      right: 'Access Your Data',
      description: 'Download a complete copy of your personal data',
      action: 'Export Data',
      available: true,
      last_used: '2025-01-05'
    },
    {
      right: 'Correct Your Data',
      description: 'Update or correct inaccurate personal information',
      action: 'Edit Profile',
      available: true,
      last_used: '2025-01-07'
    },
    {
      right: 'Delete Your Data',
      description: 'Permanently delete your account and all associated data',
      action: 'Delete Account',
      available: true,
      last_used: 'Never'
    },
    {
      right: 'Restrict Processing',
      description: 'Limit how your data is used for certain purposes',
      action: 'Manage Restrictions',
      available: true,
      last_used: 'Never'
    },
    {
      right: 'Data Portability',
      description: 'Transfer your data to another service',
      action: 'Transfer Data',
      available: true,
      last_used: 'Never'
    },
    {
      right: 'Object to Processing',
      description: 'Object to certain uses of your personal data',
      action: 'File Objection',
      available: true,
      last_used: 'Never'
    }
  ];

  const handleDataExport = () => {
    setDataExportRequested(true);
    // Simulate export process
    setTimeout(() => {
      setDataExportRequested(false);
      alert('Data export completed! Download link sent to your email.');
    }, 3000);
  };

  const getPrivacyLevelColor = (level) => {
    switch (level) {
      case 'open': return 'text-red-600 bg-red-100';
      case 'balanced': return 'text-yellow-600 bg-yellow-100';
      case 'private': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTimelineIcon = (type) => {
    switch (type) {
      case 'settings_change': return <Settings className="w-4 h-4 text-blue-600" />;
      case 'data_export': return <Download className="w-4 h-4 text-green-600" />;
      case 'verification': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'account_creation': return <User className="w-4 h-4 text-purple-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              Data Privacy Center
            </h1>
            <p className="text-gray-600">
              Control your personal data, manage privacy settings, and understand how your information is used
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Privacy Protected</span>
            </div>
            
            <select
              value={privacyLevel}
              onChange={(e) => setPrivacyLevel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="open">Open Privacy</option>
              <option value="balanced">Balanced Privacy</option>
              <option value="private">Maximum Privacy</option>
            </select>
            
            <button
              onClick={() => setShowSensitiveData(!showSensitiveData)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showSensitiveData 
                  ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {showSensitiveData ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showSensitiveData ? 'Hide' : 'Show'} Sensitive Data
            </button>
            
            <button
              onClick={handleDataExport}
              disabled={dataExportRequested}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              {dataExportRequested ? 'Exporting...' : 'Export Data'}
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Level Indicator */}
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-900">Current Privacy Level:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPrivacyLevelColor(privacyLevel)}`}>
                {privacyLevel.charAt(0).toUpperCase() + privacyLevel.slice(1)}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Data Size: <span className="font-semibold">{dataUsage.data_size}</span> | 
              Last Backup: <span className="font-semibold">{dataUsage.last_backup}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'data', name: 'My Data', icon: User },
              { id: 'settings', name: 'Privacy Settings', icon: Settings },
              { id: 'rights', name: 'Your Rights', icon: Shield }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Data Usage Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Data Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Data Points</span>
                <span className="font-semibold text-purple-600">{dataUsage.total_data_points.toLocaleString()}</span>
              </div>
              <div className="space-y-2">
                {Object.entries(dataUsage.categories).map(([category, count]) => (
                  <div key={category} className="flex justify-between items-center text-sm">
                    <span className="text-gray-600 capitalize">{category}</span>
                    <span className="font-medium text-gray-900">{count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-gray-200">
                <div className="text-xs text-gray-500">
                  Retention: {dataUsage.retention_period}
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Timeline */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {privacyTimeline.slice(0, 5).map((event, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {getTimelineIcon(event.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{event.action}</p>
                    <p className="text-xs text-gray-600 mb-1">{event.details}</p>
                    <p className="text-xs text-gray-500">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export All Data
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Edit className="w-4 h-4" />
                Update Profile
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Privacy Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Data Sharing Partners */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Sharing & Partners</h3>
                <div className="space-y-4">
                  {dataSharingPartners.map((partner, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-gray-900">{partner.partner}</h4>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            partner.status === 'active' ? 'text-green-600 bg-green-100' : 'text-gray-600 bg-gray-100'
                          }`}>
                            {partner.status}
                          </span>
                          {partner.opt_out && (
                            <button className="text-xs text-red-600 hover:text-red-700">Opt Out</button>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{partner.purpose}</p>
                      <p className="text-xs text-gray-500">Data shared: {partner.data_shared}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privacy Impact Assessment */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Impact Assessment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">Low Risk</div>
                    <div className="text-sm text-gray-600">Data Collection</div>
                    <div className="text-xs text-gray-500 mt-1">Minimal personal data collected</div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-2">Medium Risk</div>
                    <div className="text-sm text-gray-600">Data Processing</div>
                    <div className="text-xs text-gray-500 mt-1">Automated matching algorithms</div>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">Low Risk</div>
                    <div className="text-sm text-gray-600">Data Sharing</div>
                    <div className="text-xs text-gray-500 mt-1">Limited to essential partners</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'data' && (
            <div className="space-y-6">
              {dataCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-gray-900">{item.field}</span>
                          <div className="flex items-center gap-2">
                            {item.sensitive && (
                              <AlertTriangle className="w-4 h-4 text-orange-500" />
                            )}
                            {item.editable && (
                              <button className="text-blue-600 hover:text-blue-700">
                                <Edit className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.sensitive && !showSensitiveData ? '***Hidden***' : item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
              <div className="space-y-6">
                {privacySettings.map((setting, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{setting.setting}</h4>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-purple-600">{setting.current}</div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        {setting.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option} selected={option === setting.current}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="text-xs text-gray-500">
                      Impact: {setting.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rights' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Privacy Rights</h3>
              <div className="space-y-4">
                {userRights.map((right, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{right.right}</h4>
                        <p className="text-sm text-gray-600">{right.description}</p>
                      </div>
                      <button 
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          right.available 
                            ? 'bg-purple-600 text-white hover:bg-purple-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!right.available}
                      >
                        {right.action}
                      </button>
                    </div>
                    <div className="text-xs text-gray-500">
                      Last used: {right.last_used}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 mb-1">Your Rights Are Protected</h4>
                    <p className="text-sm text-blue-700">
                      We comply with GDPR, CCPA, and other privacy regulations to ensure your data rights are respected. 
                      You can exercise these rights at any time without penalty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataPrivacyCenter;

