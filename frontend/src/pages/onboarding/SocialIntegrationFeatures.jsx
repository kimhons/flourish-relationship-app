import React, { useState, useEffect } from 'react';
import { 
  Share2, Users, Heart, Calendar, Camera, Gift,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  Lock, Unlock, Eye, EyeOff, Settings, Plus,
  CheckCircle, AlertTriangle, Info, Star, Award,
  MessageSquare, ThumbsUp, Download, Upload,
  Globe, Shield, UserCheck, UserX, Bell, Zap
} from 'lucide-react';

const SocialIntegrationFeatures = () => {
  const [activeTab, setActiveTab] = useState('connections');
  const [connectedPlatforms, setConnectedPlatforms] = useState({
    facebook: false,
    instagram: false,
    twitter: false,
    linkedin: false,
    google: true
  });
  
  const [sharingSettings, setSharingSettings] = useState({
    milestones: 'private',
    achievements: 'friends',
    activities: 'private',
    photos: 'partner-only',
    progress: 'private'
  });

  const [milestones, setMilestones] = useState([
    {
      id: 1,
      type: 'anniversary',
      title: '6 Month Anniversary',
      date: '2025-07-01',
      description: 'Celebrating 6 amazing months together!',
      photo: '/api/placeholder/400/300',
      shared: false,
      likes: 0,
      comments: []
    },
    {
      id: 2,
      type: 'achievement',
      title: 'Communication Master',
      date: '2025-06-28',
      description: 'Completed 30 days of daily check-ins',
      badge: 'communication-expert',
      shared: true,
      likes: 12,
      comments: ['Amazing progress!', 'So inspiring!']
    },
    {
      id: 3,
      type: 'goal',
      title: 'Date Night Goal Achieved',
      date: '2025-06-25',
      description: 'Had 4 quality date nights this month',
      photo: '/api/placeholder/400/300',
      shared: false,
      likes: 0,
      comments: []
    }
  ]);

  const socialPlatforms = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: Facebook,
      color: 'blue',
      description: 'Share milestones with friends and family',
      features: ['Milestone sharing', 'Photo albums', 'Event creation']
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: Instagram,
      color: 'pink',
      description: 'Share beautiful moments and stories',
      features: ['Photo sharing', 'Story updates', 'Hashtag integration']
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: Twitter,
      color: 'blue',
      description: 'Share achievements and inspiration',
      features: ['Achievement tweets', 'Progress updates', 'Community engagement']
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'blue',
      description: 'Professional relationship insights',
      features: ['Work-life balance', 'Professional growth', 'Networking']
    }
  ];

  const privacyLevels = [
    { value: 'private', label: 'Private', description: 'Only you and your partner', icon: Lock },
    { value: 'friends', label: 'Friends', description: 'Close friends and family', icon: Users },
    { value: 'public', label: 'Public', description: 'Anyone can see', icon: Globe },
    { value: 'partner-only', label: 'Partner Only', description: 'Just between you two', icon: Heart }
  ];

  const handlePlatformToggle = (platformId) => {
    setConnectedPlatforms(prev => ({
      ...prev,
      [platformId]: !prev[platformId]
    }));
  };

  const handleSharingSettingChange = (setting, value) => {
    setSharingSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleShareMilestone = (milestoneId, platform) => {
    setMilestones(prev => 
      prev.map(milestone => 
        milestone.id === milestoneId 
          ? { ...milestone, shared: true, likes: milestone.likes + Math.floor(Math.random() * 5) + 1 }
          : milestone
      )
    );
  };

  const getPrivacyIcon = (level) => {
    const privacy = privacyLevels.find(p => p.value === level);
    return privacy ? privacy.icon : Lock;
  };

  const renderConnections = () => (
    <div className="space-y-8">
      {/* Connected Platforms */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Social Platform Connections</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {socialPlatforms.map((platform) => {
            const IconComponent = platform.icon;
            const isConnected = connectedPlatforms[platform.id];
            
            return (
              <div key={platform.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-${platform.color}-100`}>
                      <IconComponent className={`w-6 h-6 text-${platform.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{platform.name}</h4>
                      <p className="text-sm text-gray-600">{platform.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isConnected && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    <button
                      onClick={() => handlePlatformToggle(platform.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isConnected
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : `bg-${platform.color}-100 text-${platform.color}-700 hover:bg-${platform.color}-200`
                      }`}
                    >
                      {isConnected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-gray-700">Features:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {platform.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Connect Options */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-6 h-6 text-blue-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Import Contacts</div>
              <div className="text-sm text-gray-600">Find friends on Flourish</div>
            </div>
          </button>
          
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Share2 className="w-6 h-6 text-green-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Share App</div>
              <div className="text-sm text-gray-600">Invite friends to join</div>
            </div>
          </button>
          
          <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Settings className="w-6 h-6 text-purple-600 mr-3" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Sync Settings</div>
              <div className="text-sm text-gray-600">Manage integrations</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderSharing = () => (
    <div className="space-y-8">
      {/* Sharing Preferences */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sharing Preferences</h3>
        
        <div className="space-y-6">
          {Object.entries(sharingSettings).map(([setting, value]) => {
            const PrivacyIcon = getPrivacyIcon(value);
            return (
              <div key={setting} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 capitalize">
                    {setting.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Control who can see your {setting.toLowerCase()}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <PrivacyIcon className="w-4 h-4 text-gray-500" />
                  <select
                    value={value}
                    onChange={(e) => handleSharingSettingChange(setting, e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {privacyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Auto-Share Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Auto-Share Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Anniversary Reminders</h4>
              <p className="text-sm text-gray-600">Automatically share anniversary milestones</p>
            </div>
            <button className="text-purple-600">
              <CheckCircle className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Achievement Badges</h4>
              <p className="text-sm text-gray-600">Share when you earn new relationship badges</p>
            </div>
            <button className="text-gray-400">
              <AlertTriangle className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Weekly Highlights</h4>
              <p className="text-sm text-gray-600">Share a weekly summary of your relationship activities</p>
            </div>
            <button className="text-purple-600">
              <CheckCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Templates */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Sharing Templates</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Anniversary Post</h4>
            <p className="text-sm text-gray-600 mb-3">
              "Celebrating [X] amazing [months/years] with my favorite person! 💕 #RelationshipGoals #Flourish"
            </p>
            <button className="text-purple-600 text-sm hover:text-purple-700">
              Customize Template
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Achievement Share</h4>
            <p className="text-sm text-gray-600 mb-3">
              "Just earned the [Badge Name] badge on @FlourishApp! Working on our relationship every day 🌟"
            </p>
            <button className="text-purple-600 text-sm hover:text-purple-700">
              Customize Template
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Date Night Post</h4>
            <p className="text-sm text-gray-600 mb-3">
              "Perfect date night! Quality time is our love language ❤️ #DateNight #QualityTime"
            </p>
            <button className="text-purple-600 text-sm hover:text-purple-700">
              Customize Template
            </button>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Progress Update</h4>
            <p className="text-sm text-gray-600 mb-3">
              "Making great progress on our relationship goals! [X] days of consistent connection 💪"
            </p>
            <button className="text-purple-600 text-sm hover:text-purple-700">
              Customize Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMilestones = () => (
    <div className="space-y-8">
      {/* Recent Milestones */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Milestones</h3>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Milestone
          </button>
        </div>
        
        <div className="space-y-6">
          {milestones.map((milestone) => (
            <div key={milestone.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  {milestone.photo && (
                    <img
                      src={milestone.photo}
                      alt={milestone.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                  {milestone.badge && (
                    <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Award className="w-10 h-10 text-purple-600" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        milestone.type === 'anniversary' ? 'bg-pink-100 text-pink-700' :
                        milestone.type === 'achievement' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {milestone.type}
                      </span>
                      <span className="text-xs text-gray-500">{milestone.date}</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {milestone.shared ? (
                    <span className="flex items-center text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Shared
                    </span>
                  ) : (
                    <button
                      onClick={() => handleShareMilestone(milestone.id)}
                      className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
                    >
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </button>
                  )}
                </div>
              </div>
              
              {milestone.shared && (
                <div className="flex items-center space-x-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {milestone.likes} likes
                  </span>
                  <span className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {milestone.comments.length} comments
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Calendar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Milestones</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
            <Calendar className="w-8 h-8 text-purple-600" />
            <div>
              <h4 className="font-medium text-gray-900">1 Year Anniversary</h4>
              <p className="text-sm text-gray-600">January 15, 2026 • 6 months away</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
              Plan Celebration
            </button>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <Gift className="w-8 h-8 text-blue-600" />
            <div>
              <h4 className="font-medium text-gray-900">Valentine's Day</h4>
              <p className="text-sm text-gray-600">February 14, 2026 • 7 months away</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Set Reminder
            </button>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <Star className="w-8 h-8 text-green-600" />
            <div>
              <h4 className="font-medium text-gray-900">100 Days Streak</h4>
              <p className="text-sm text-gray-600">August 15, 2025 • 42 days away</p>
            </div>
            <button className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              Track Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Social Integration
          </h1>
          <p className="text-gray-600">
            Connect with social platforms and share your relationship journey
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'connections', label: 'Connections', icon: Users },
            { id: 'sharing', label: 'Sharing Settings', icon: Share2 },
            { id: 'milestones', label: 'Milestones', icon: Calendar }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'connections' && renderConnections()}
        {activeTab === 'sharing' && renderSharing()}
        {activeTab === 'milestones' && renderMilestones()}

        {/* Privacy Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Privacy & Security</h4>
              <p className="text-sm text-blue-700">
                Your privacy is our priority. All social integrations are optional and you maintain full control 
                over what information is shared. We never share personal relationship data without your explicit consent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIntegrationFeatures;

