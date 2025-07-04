import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  Shield, Lock, Eye, EyeOff, AlertTriangle, CheckCircle,
  XCircle, UserCheck, Camera, Phone, Mail, MapPin,
  Heart, MessageCircle, Users, Settings, Bell, Clock
} from 'lucide-react';

const AdvancedSecurityFramework = () => {
  const [selectedTab, setSelectedTab] = useState('verification');
  const [privacyLevel, setPrivacyLevel] = useState('balanced');
  const [safetyMode, setSafetyMode] = useState(true);
  const [showSensitiveData, setShowSensitiveData] = useState(false);

  // User verification status
  const verificationStatus = {
    photo_verified: true,
    phone_verified: true,
    email_verified: true,
    identity_verified: false,
    social_media_verified: true,
    background_check: false
  };

  // Security metrics
  const securityMetrics = [
    {
      metric: 'Verified Users',
      value: '87.3%',
      change: '+5.2%',
      trend: 'up',
      description: 'Photo & phone verified'
    },
    {
      metric: 'Blocked Profiles',
      value: '2,341',
      change: '+127',
      trend: 'up',
      description: 'This month'
    },
    {
      metric: 'Safety Reports',
      value: '89',
      change: '-23',
      trend: 'down',
      description: 'Active investigations'
    },
    {
      metric: 'Privacy Score',
      value: '9.2/10',
      change: '+0.3',
      trend: 'up',
      description: 'User data protection'
    }
  ];

  // Privacy settings
  const privacySettings = [
    {
      setting: 'Profile Visibility',
      description: 'Who can see your profile',
      options: ['Everyone', 'Verified users only', 'Mutual matches only'],
      current: 'Verified users only',
      level: 'medium'
    },
    {
      setting: 'Location Sharing',
      description: 'How precise your location is shown',
      options: ['Exact location', 'City only', 'Region only', 'Hidden'],
      current: 'City only',
      level: 'medium'
    },
    {
      setting: 'Last Active',
      description: 'When others can see you were last online',
      options: ['Real-time', 'Within hour', 'Within day', 'Hidden'],
      current: 'Within hour',
      level: 'low'
    },
    {
      setting: 'Read Receipts',
      description: 'Show when you\'ve read messages',
      options: ['Always show', 'Matches only', 'Never show'],
      current: 'Matches only',
      level: 'medium'
    },
    {
      setting: 'Photo Access',
      description: 'Who can see your private photos',
      options: ['All matches', 'Verified matches', 'Premium users', 'Request only'],
      current: 'Request only',
      level: 'high'
    }
  ];

  // Safety features
  const safetyFeatures = [
    {
      feature: 'Photo Verification',
      description: 'Real-time selfie verification to confirm identity',
      enabled: true,
      usage: '94.2%',
      effectiveness: '98.7%'
    },
    {
      feature: 'Video Chat Verification',
      description: 'Verify matches through video calls before meeting',
      enabled: true,
      usage: '67.8%',
      effectiveness: '95.3%'
    },
    {
      feature: 'Location Sharing',
      description: 'Share live location with trusted contacts during dates',
      enabled: true,
      usage: '45.6%',
      effectiveness: '92.1%'
    },
    {
      feature: 'Check-in Reminders',
      description: 'Automated safety check-ins during dates',
      enabled: true,
      usage: '78.9%',
      effectiveness: '89.4%'
    },
    {
      feature: 'Emergency Contacts',
      description: 'Quick access to emergency services and contacts',
      enabled: true,
      usage: '23.4%',
      effectiveness: '96.8%'
    },
    {
      feature: 'Background Screening',
      description: 'Optional background checks for enhanced safety',
      enabled: false,
      usage: '12.1%',
      effectiveness: '99.2%'
    }
  ];

  // Fraud detection
  const fraudDetection = [
    {
      type: 'Fake Profiles',
      detected: 1247,
      blocked: 1198,
      accuracy: 96.1,
      method: 'AI Photo Analysis'
    },
    {
      type: 'Catfishing',
      detected: 89,
      blocked: 87,
      accuracy: 97.8,
      method: 'Behavioral Analysis'
    },
    {
      type: 'Scam Attempts',
      detected: 156,
      blocked: 152,
      accuracy: 97.4,
      method: 'Message Filtering'
    },
    {
      type: 'Spam Accounts',
      detected: 2341,
      blocked: 2298,
      accuracy: 98.2,
      method: 'Pattern Recognition'
    }
  ];

  // Security incidents over time
  const securityIncidents = [
    { month: 'Jul', fake_profiles: 45, harassment: 12, scams: 8, spam: 89 },
    { month: 'Aug', fake_profiles: 38, harassment: 9, scams: 6, spam: 76 },
    { month: 'Sep', fake_profiles: 42, harassment: 15, scams: 11, spam: 82 },
    { month: 'Oct', fake_profiles: 29, harassment: 7, scams: 4, spam: 65 },
    { month: 'Nov', fake_profiles: 33, harassment: 10, scams: 7, spam: 71 },
    { month: 'Dec', fake_profiles: 25, harassment: 6, scams: 3, spam: 58 },
    { month: 'Jan', fake_profiles: 21, harassment: 4, scams: 2, spam: 49 }
  ];

  // User safety education
  const safetyTips = [
    {
      category: 'Profile Safety',
      tips: [
        'Use recent, clear photos of yourself',
        'Avoid sharing personal information in your bio',
        'Don\'t include your full name or workplace',
        'Be cautious about sharing social media handles'
      ]
    },
    {
      category: 'Messaging Safety',
      tips: [
        'Keep conversations on the platform initially',
        'Be wary of users asking for money or gifts',
        'Report suspicious or inappropriate messages',
        'Don\'t share financial or personal details'
      ]
    },
    {
      category: 'Meeting Safety',
      tips: [
        'Meet in public places for first dates',
        'Tell a friend about your date plans',
        'Use the app\'s location sharing feature',
        'Trust your instincts and leave if uncomfortable'
      ]
    }
  ];

  // Privacy levels
  const privacyLevels = {
    open: {
      name: 'Open',
      description: 'Maximum visibility for more matches',
      settings: {
        profile_visibility: 'Everyone',
        location_precision: 'City level',
        last_active: 'Real-time',
        photo_access: 'All matches'
      }
    },
    balanced: {
      name: 'Balanced',
      description: 'Good balance of privacy and discoverability',
      settings: {
        profile_visibility: 'Verified users only',
        location_precision: 'City only',
        last_active: 'Within hour',
        photo_access: 'Verified matches'
      }
    },
    private: {
      name: 'Private',
      description: 'Maximum privacy with limited visibility',
      settings: {
        profile_visibility: 'Mutual matches only',
        location_precision: 'Region only',
        last_active: 'Hidden',
        photo_access: 'Request only'
      }
    }
  };

  // Recent security activities
  const recentActivities = [
    {
      id: 1,
      type: 'verification_completed',
      message: 'Photo verification completed successfully',
      timestamp: '2 hours ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'suspicious_activity',
      message: 'Suspicious login attempt blocked from new device',
      timestamp: '1 day ago',
      status: 'warning'
    },
    {
      id: 3,
      type: 'privacy_updated',
      message: 'Privacy settings updated to "Balanced" mode',
      timestamp: '3 days ago',
      status: 'info'
    },
    {
      id: 4,
      type: 'report_resolved',
      message: 'Safety report resolved - user was removed',
      timestamp: '5 days ago',
      status: 'success'
    }
  ];

  const getVerificationIcon = (verified) => {
    return verified ? (
      <CheckCircle className="w-5 h-5 text-green-600" />
    ) : (
      <XCircle className="w-5 h-5 text-red-600" />
    );
  };

  const getPrivacyLevelColor = (level) => {
    switch (level) {
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'verification_completed': return <UserCheck className="w-4 h-4 text-green-600" />;
      case 'suspicious_activity': return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'privacy_updated': return <Settings className="w-4 h-4 text-blue-600" />;
      case 'report_resolved': return <Shield className="w-4 h-4 text-green-600" />;
      default: return <Bell className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              Advanced Security Framework
            </h1>
            <p className="text-gray-600">
              Comprehensive safety, privacy, and security features to protect your dating experience
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">All Systems Secure</span>
            </div>
            
            <button
              onClick={() => setSafetyMode(!safetyMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                safetyMode 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Shield className="w-4 h-4" />
              Safety Mode: {safetyMode ? 'ON' : 'OFF'}
            </button>
            
            <select
              value={privacyLevel}
              onChange={(e) => setPrivacyLevel(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="open">Open Privacy</option>
              <option value="balanced">Balanced Privacy</option>
              <option value="private">Private Mode</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {securityMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-gray-600 text-sm mb-2">{metric.metric}</p>
              <p className="text-xs text-gray-500">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'verification', name: 'Verification', icon: UserCheck },
              { id: 'privacy', name: 'Privacy Settings', icon: Lock },
              { id: 'safety', name: 'Safety Features', icon: Shield },
              { id: 'fraud', name: 'Fraud Protection', icon: AlertTriangle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedTab === tab.id
                    ? 'border-red-500 text-red-600'
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
          {/* Verification Status */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Verification Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">Photo Verified</span>
                </div>
                {getVerificationIcon(verificationStatus.photo_verified)}
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">Phone Verified</span>
                </div>
                {getVerificationIcon(verificationStatus.phone_verified)}
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">Email Verified</span>
                </div>
                {getVerificationIcon(verificationStatus.email_verified)}
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-medium">Identity Verified</span>
                </div>
                {getVerificationIcon(verificationStatus.identity_verified)}
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Complete Verification
            </button>
          </div>

          {/* Privacy Level */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Privacy Level</h3>
            <div className="space-y-3">
              {Object.entries(privacyLevels).map(([key, level]) => (
                <button
                  key={key}
                  onClick={() => setPrivacyLevel(key)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    privacyLevel === key
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-gray-900 mb-1">{level.name}</div>
                  <div className="text-sm text-gray-600">{level.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 mb-1">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {selectedTab === 'verification' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Identity Verification</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Required Verifications</h4>
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Photo Verification</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">Take a real-time selfie to verify your photos</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Phone Number</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">Verify your phone number with SMS code</p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Email Address</span>
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">Confirm your email address</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Optional Verifications</h4>
                  <div className="space-y-3">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Government ID</span>
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Verify with official ID document</p>
                      <button className="text-sm text-red-600 hover:text-red-700">Start Verification</button>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">Background Check</span>
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Optional background screening</p>
                      <button className="text-sm text-red-600 hover:text-red-700">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'privacy' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Settings</h3>
              <div className="space-y-6">
                {privacySettings.map((setting, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900">{setting.setting}</h4>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPrivacyLevelColor(setting.level)}`}>
                        {setting.level} privacy
                      </span>
                    </div>
                    <div className="mt-3">
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                        {setting.options.map((option, optionIndex) => (
                          <option key={optionIndex} value={option} selected={option === setting.current}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'safety' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{feature.feature}</h4>
                      <div className={`w-10 h-6 rounded-full p-1 transition-colors ${
                        feature.enabled ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                          feature.enabled ? 'translate-x-4' : 'translate-x-0'
                        }`}></div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Usage:</span>
                        <div className="font-semibold text-blue-600">{feature.usage}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Effectiveness:</span>
                        <div className="font-semibold text-green-600">{feature.effectiveness}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-900 mb-4">Safety Education</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {safetyTips.map((category, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-3">{category.category}</h5>
                      <ul className="space-y-2">
                        {category.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'fraud' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Fraud Detection</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Threat Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Detected</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Blocked</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Accuracy</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Detection Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fraudDetection.map((fraud, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900">{fraud.type}</td>
                          <td className="py-3 px-4 text-red-600 font-semibold">{fraud.detected}</td>
                          <td className="py-3 px-4 text-green-600 font-semibold">{fraud.blocked}</td>
                          <td className="py-3 px-4 text-blue-600 font-semibold">{fraud.accuracy}%</td>
                          <td className="py-3 px-4 text-gray-600">{fraud.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Incidents Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={securityIncidents}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="fake_profiles" stroke="#ef4444" strokeWidth={2} name="Fake Profiles" />
                    <Line type="monotone" dataKey="harassment" stroke="#f59e0b" strokeWidth={2} name="Harassment" />
                    <Line type="monotone" dataKey="scams" stroke="#8b5cf6" strokeWidth={2} name="Scams" />
                    <Line type="monotone" dataKey="spam" stroke="#06b6d4" strokeWidth={2} name="Spam" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSecurityFramework;

