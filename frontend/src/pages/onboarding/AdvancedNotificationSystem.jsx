import React, { useState, useEffect } from 'react';
import { 
  Bell, BellOff, Volume2, VolumeX, Smartphone, Mail,
  Clock, Calendar, Target, Zap, Heart, MessageSquare,
  Settings, ToggleLeft, ToggleRight, Plus, Edit3,
  CheckCircle, AlertTriangle, Info, Star, Award,
  User, Users, Globe, Lock, Eye, EyeOff, Filter,
  Trash2, Copy, Share2, Download, Upload, Pause,
  Play, RotateCcw, TrendingUp, BarChart3, Activity
} from 'lucide-react';

const AdvancedNotificationSystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notificationSettings, setNotificationSettings] = useState({
    push: true,
    email: false,
    sms: false,
    inApp: true,
    sound: true,
    vibration: true,
    quietHours: true,
    smartTiming: true
  });

  const [quietHours, setQuietHours] = useState({
    enabled: true,
    start: '22:00',
    end: '08:00',
    weekends: false
  });

  const [notificationTypes, setNotificationTypes] = useState({
    dailyReminders: { enabled: true, priority: 'high', time: '19:00' },
    milestones: { enabled: true, priority: 'high', time: 'immediate' },
    achievements: { enabled: true, priority: 'medium', time: 'immediate' },
    partnerActivity: { enabled: true, priority: 'medium', time: 'immediate' },
    weeklyReports: { enabled: true, priority: 'low', time: 'sunday-18:00' },
    coachingReminders: { enabled: true, priority: 'high', time: '30min-before' },
    eventReminders: { enabled: true, priority: 'high', time: '1hour-before' },
    contentSuggestions: { enabled: false, priority: 'low', time: 'smart' }
  });

  const [recentNotifications, setRecentNotifications] = useState([
    {
      id: 1,
      type: 'daily-reminder',
      title: 'Daily Connection Check-in',
      message: 'Time for your evening relationship check-in with your partner',
      time: '2025-07-03T19:00:00',
      read: false,
      priority: 'high',
      action: 'Start Check-in'
    },
    {
      id: 2,
      type: 'achievement',
      title: 'New Badge Earned!',
      message: 'Congratulations! You\'ve earned the "Communication Expert" badge',
      time: '2025-07-03T14:30:00',
      read: true,
      priority: 'medium',
      action: 'View Badge'
    },
    {
      id: 3,
      type: 'milestone',
      title: '6 Month Anniversary Approaching',
      message: 'Your 6-month anniversary is in 3 days. Plan something special!',
      time: '2025-07-03T10:00:00',
      read: true,
      priority: 'high',
      action: 'Plan Celebration'
    },
    {
      id: 4,
      type: 'partner-activity',
      title: 'Partner Completed Exercise',
      message: 'Sarah completed the "Gratitude Practice" exercise',
      time: '2025-07-03T08:15:00',
      read: true,
      priority: 'medium',
      action: 'View Progress'
    }
  ]);

  const [analytics, setAnalytics] = useState({
    totalSent: 1247,
    deliveryRate: 98.5,
    openRate: 87.3,
    actionRate: 64.2,
    optimalTime: '7:00 PM',
    engagementScore: 92
  });

  const notificationCategories = [
    {
      id: 'daily-reminders',
      name: 'Daily Reminders',
      description: 'Check-ins, exercises, and daily activities',
      icon: Clock,
      color: 'blue'
    },
    {
      id: 'milestones',
      name: 'Milestones & Anniversaries',
      description: 'Important relationship milestones and celebrations',
      icon: Calendar,
      color: 'pink'
    },
    {
      id: 'achievements',
      name: 'Achievements & Badges',
      description: 'Progress recognition and accomplishments',
      icon: Award,
      color: 'yellow'
    },
    {
      id: 'partner-activity',
      name: 'Partner Activity',
      description: 'Updates about your partner\'s progress and activities',
      icon: Users,
      color: 'green'
    },
    {
      id: 'coaching',
      name: 'Coaching & Events',
      description: 'Session reminders and event notifications',
      icon: User,
      color: 'purple'
    },
    {
      id: 'content',
      name: 'Content Suggestions',
      description: 'Personalized content recommendations',
      icon: Zap,
      color: 'orange'
    }
  ];

  const deliveryChannels = [
    { id: 'push', name: 'Push Notifications', icon: Smartphone, description: 'Mobile and desktop notifications' },
    { id: 'email', name: 'Email', icon: Mail, description: 'Email notifications and summaries' },
    { id: 'sms', name: 'SMS', icon: MessageSquare, description: 'Text message alerts' },
    { id: 'inApp', name: 'In-App', icon: Bell, description: 'Notifications within the app' }
  ];

  const priorityLevels = [
    { value: 'high', label: 'High', color: 'red', description: 'Immediate delivery' },
    { value: 'medium', label: 'Medium', color: 'yellow', description: 'Delivered within 1 hour' },
    { value: 'low', label: 'Low', color: 'green', description: 'Delivered at optimal time' }
  ];

  const handleNotificationToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleNotificationTypeToggle = (type) => {
    setNotificationTypes(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        enabled: !prev[type].enabled
      }
    }));
  };

  const handleNotificationTypeUpdate = (type, field, value) => {
    setNotificationTypes(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  };

  const markAsRead = (notificationId) => {
    setRecentNotifications(prev =>
      prev.map(notification =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: 'text-red-600 bg-red-100',
      medium: 'text-yellow-600 bg-yellow-100',
      low: 'text-green-600 bg-green-100'
    };
    return colors[priority] || colors.medium;
  };

  const getNotificationIcon = (type) => {
    const icons = {
      'daily-reminder': Clock,
      'achievement': Award,
      'milestone': Calendar,
      'partner-activity': Users,
      'coaching': User,
      'content': Zap
    };
    return icons[type] || Bell;
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Notification Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{analytics.totalSent}</div>
            <div className="text-sm text-gray-600">Total Sent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{analytics.deliveryRate}%</div>
            <div className="text-sm text-gray-600">Delivery Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">{analytics.openRate}%</div>
            <div className="text-sm text-gray-600">Open Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-1">{analytics.actionRate}%</div>
            <div className="text-sm text-gray-600">Action Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-1">{analytics.optimalTime}</div>
            <div className="text-sm text-gray-600">Optimal Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-1">{analytics.engagementScore}%</div>
            <div className="text-sm text-gray-600">Engagement Score</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <div>
              <h4 className="font-medium text-gray-900">Smart Timing Optimization</h4>
              <p className="text-sm text-gray-600">
                AI learns your engagement patterns to deliver notifications at the perfect time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Notifications</h3>
          <button className="text-purple-600 hover:text-purple-700 text-sm">
            Mark All as Read
          </button>
        </div>
        
        <div className="space-y-4">
          {recentNotifications.map((notification) => {
            const IconComponent = getNotificationIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`p-4 border rounded-lg transition-colors ${
                  notification.read ? 'border-gray-200 bg-gray-50' : 'border-purple-200 bg-purple-50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    notification.read ? 'bg-gray-200' : 'bg-purple-100'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      notification.read ? 'text-gray-500' : 'text-purple-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-medium ${
                          notification.read ? 'text-gray-700' : 'text-gray-900'
                        }`}>
                          {notification.title}
                        </h4>
                        <p className={`text-sm ${
                          notification.read ? 'text-gray-500' : 'text-gray-600'
                        }`}>
                          {notification.message}
                        </p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="text-xs text-gray-500">
                            {new Date(notification.time).toLocaleString()}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                            {notification.priority}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="text-purple-600 hover:text-purple-700 text-sm"
                          >
                            Mark Read
                          </button>
                        )}
                        <button className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition-colors">
                          {notification.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Settings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Push Notifications</h4>
                <p className="text-sm text-gray-600">Receive notifications on your device</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('push')}
                className={notificationSettings.push ? 'text-purple-600' : 'text-gray-400'}
              >
                {notificationSettings.push ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Smart Timing</h4>
                <p className="text-sm text-gray-600">AI optimizes delivery times</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('smartTiming')}
                className={notificationSettings.smartTiming ? 'text-purple-600' : 'text-gray-400'}
              >
                {notificationSettings.smartTiming ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Quiet Hours</h4>
                <p className="text-sm text-gray-600">Pause notifications during sleep</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('quietHours')}
                className={notificationSettings.quietHours ? 'text-purple-600' : 'text-gray-400'}
              >
                {notificationSettings.quietHours ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Sound & Vibration</h4>
                <p className="text-sm text-gray-600">Audio and haptic feedback</p>
              </div>
              <button
                onClick={() => handleNotificationToggle('sound')}
                className={notificationSettings.sound ? 'text-purple-600' : 'text-gray-400'}
              >
                {notificationSettings.sound ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      {/* Delivery Channels */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Delivery Channels</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deliveryChannels.map((channel) => {
            const IconComponent = channel.icon;
            const isEnabled = notificationSettings[channel.id];
            
            return (
              <div key={channel.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 ${isEnabled ? 'text-purple-600' : 'text-gray-400'}`} />
                    <h4 className="font-medium text-gray-900">{channel.name}</h4>
                  </div>
                  <button
                    onClick={() => handleNotificationToggle(channel.id)}
                    className={isEnabled ? 'text-purple-600' : 'text-gray-400'}
                  >
                    {isEnabled ? <ToggleRight className="w-6 h-6" /> : <ToggleLeft className="w-6 h-6" />}
                  </button>
                </div>
                <p className="text-sm text-gray-600">{channel.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notification Types */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Notification Types</h3>
        
        <div className="space-y-6">
          {Object.entries(notificationTypes).map(([type, settings]) => {
            const category = notificationCategories.find(cat => 
              type.toLowerCase().includes(cat.id.split('-')[0]) || 
              cat.id.includes(type.split(/(?=[A-Z])/).join('-').toLowerCase())
            );
            const IconComponent = category?.icon || Bell;
            
            return (
              <div key={type} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <IconComponent className={`w-5 h-5 mt-1 ${settings.enabled ? 'text-purple-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1">
                        {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Priority</label>
                          <select
                            value={settings.priority}
                            onChange={(e) => handleNotificationTypeUpdate(type, 'priority', e.target.value)}
                            disabled={!settings.enabled}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                          >
                            {priorityLevels.map((level) => (
                              <option key={level.value} value={level.value}>
                                {level.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Timing</label>
                          <select
                            value={settings.time}
                            onChange={(e) => handleNotificationTypeUpdate(type, 'time', e.target.value)}
                            disabled={!settings.enabled}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                          >
                            <option value="immediate">Immediate</option>
                            <option value="smart">Smart Timing</option>
                            <option value="30min-before">30 min before</option>
                            <option value="1hour-before">1 hour before</option>
                            <option value="daily-19:00">Daily at 7 PM</option>
                            <option value="sunday-18:00">Sunday at 6 PM</option>
                          </select>
                        </div>
                        
                        <div className="flex items-end">
                          <button
                            onClick={() => handleNotificationTypeToggle(type)}
                            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                              settings.enabled
                                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                : 'bg-green-100 text-green-700 hover:bg-green-200'
                            }`}
                          >
                            {settings.enabled ? 'Disable' : 'Enable'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiet Hours */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Quiet Hours</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
            <input
              type="time"
              value={quietHours.start}
              onChange={(e) => setQuietHours(prev => ({ ...prev, start: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
            <input
              type="time"
              value={quietHours.end}
              onChange={(e) => setQuietHours(prev => ({ ...prev, end: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={quietHours.weekends}
              onChange={(e) => setQuietHours(prev => ({ ...prev, weekends: e.target.checked }))}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-2 text-sm text-gray-700">
              Apply quiet hours on weekends
            </span>
          </label>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Performance Metrics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{analytics.deliveryRate}%</div>
            <div className="text-sm text-gray-600">Delivery Success</div>
          </div>
          
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">{analytics.openRate}%</div>
            <div className="text-sm text-gray-600">Open Rate</div>
          </div>
          
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">{analytics.actionRate}%</div>
            <div className="text-sm text-gray-600">Action Rate</div>
          </div>
          
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Activity className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">{analytics.engagementScore}%</div>
            <div className="text-sm text-gray-600">Engagement</div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Daily Reminders</span>
              <span className="text-sm text-gray-600">94% engagement</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Milestone Alerts</span>
              <span className="text-sm text-gray-600">98% engagement</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Achievement Notifications</span>
              <span className="text-sm text-gray-600">89% engagement</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Content Suggestions</span>
              <span className="text-sm text-gray-600">67% engagement</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Optimization Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">AI Optimization Insights</h3>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-green-900">Optimal Timing Identified</h4>
              <p className="text-sm text-green-700">
                Your highest engagement occurs at 7:00 PM. We've optimized daily reminders for this time.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
            <Info className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900">Channel Performance</h4>
              <p className="text-sm text-blue-700">
                Push notifications have 23% higher engagement than email. Consider prioritizing mobile delivery.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-900">Frequency Optimization</h4>
              <p className="text-sm text-yellow-700">
                Content suggestions show lower engagement. Consider reducing frequency to 2-3 times per week.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Export</h3>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Export Analytics
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <Copy className="w-5 h-5 mr-2" />
            Copy Settings
          </button>
          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset to Defaults
          </button>
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
            Advanced Notification System
          </h1>
          <p className="text-gray-600">
            Intelligent notification management with AI-powered optimization
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Overview', icon: Bell },
            { id: 'settings', label: 'Settings', icon: Settings },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 }
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
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'settings' && renderSettings()}
        {activeTab === 'analytics' && renderAnalytics()}

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedNotificationSystem;

