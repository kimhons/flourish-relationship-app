import React, { useState, useEffect } from 'react';
import { 
  Shield, Eye, Lock, Unlock, AlertTriangle, CheckCircle,
  User, MapPin, Smartphone, Monitor, Clock, Calendar,
  Download, Filter, Search, RefreshCw, Bell, Settings
} from 'lucide-react';

const SecurityAuditTrail = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');
  const [selectedEventType, setSelectedEventType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Security events for dating app
  const securityEvents = [
    {
      id: 1,
      timestamp: '2025-01-07 14:32:15',
      event_type: 'login_success',
      severity: 'info',
      user_id: 'user_12345',
      ip_address: '192.168.1.100',
      location: 'San Francisco, CA',
      device: 'iPhone 15 Pro',
      browser: 'Safari 17.2',
      details: 'Successful login with Face ID authentication',
      risk_score: 1
    },
    {
      id: 2,
      timestamp: '2025-01-07 14:15:42',
      event_type: 'profile_photo_upload',
      severity: 'info',
      user_id: 'user_12345',
      ip_address: '192.168.1.100',
      location: 'San Francisco, CA',
      device: 'iPhone 15 Pro',
      browser: 'Safari 17.2',
      details: 'New profile photo uploaded and verified',
      risk_score: 2
    },
    {
      id: 3,
      timestamp: '2025-01-07 13:45:23',
      event_type: 'suspicious_message',
      severity: 'warning',
      user_id: 'user_67890',
      ip_address: '203.45.67.89',
      location: 'Unknown',
      device: 'Android Device',
      browser: 'Chrome 120',
      details: 'Message flagged for potential scam content',
      risk_score: 7
    },
    {
      id: 4,
      timestamp: '2025-01-07 12:20:11',
      event_type: 'location_access',
      severity: 'info',
      user_id: 'user_12345',
      ip_address: '192.168.1.100',
      location: 'San Francisco, CA',
      device: 'iPhone 15 Pro',
      browser: 'Safari 17.2',
      details: 'Location permission granted for matching',
      risk_score: 3
    },
    {
      id: 5,
      timestamp: '2025-01-07 11:55:33',
      event_type: 'failed_verification',
      severity: 'warning',
      user_id: 'user_11111',
      ip_address: '45.123.67.89',
      location: 'Miami, FL',
      device: 'Samsung Galaxy S24',
      browser: 'Chrome 120',
      details: 'Photo verification failed - potential fake profile',
      risk_score: 8
    },
    {
      id: 6,
      timestamp: '2025-01-07 10:30:45',
      event_type: 'privacy_settings_change',
      severity: 'info',
      user_id: 'user_12345',
      ip_address: '192.168.1.100',
      location: 'San Francisco, CA',
      device: 'iPhone 15 Pro',
      browser: 'Safari 17.2',
      details: 'Changed profile visibility to verified users only',
      risk_score: 1
    },
    {
      id: 7,
      timestamp: '2025-01-07 09:15:22',
      event_type: 'multiple_login_attempts',
      severity: 'critical',
      user_id: 'user_22222',
      ip_address: '123.45.67.89',
      location: 'Unknown',
      device: 'Unknown',
      browser: 'Unknown',
      details: '5 failed login attempts from suspicious IP',
      risk_score: 9
    },
    {
      id: 8,
      timestamp: '2025-01-07 08:45:17',
      event_type: 'data_export_request',
      severity: 'info',
      user_id: 'user_12345',
      ip_address: '192.168.1.100',
      location: 'San Francisco, CA',
      device: 'iPhone 15 Pro',
      browser: 'Safari 17.2',
      details: 'User requested complete data export',
      risk_score: 2
    },
    {
      id: 9,
      timestamp: '2025-01-07 07:30:55',
      event_type: 'report_submitted',
      severity: 'warning',
      user_id: 'user_33333',
      ip_address: '67.89.123.45',
      location: 'New York, NY',
      device: 'MacBook Pro',
      browser: 'Chrome 120',
      details: 'User reported inappropriate behavior',
      risk_score: 6
    },
    {
      id: 10,
      timestamp: '2025-01-07 06:15:33',
      event_type: 'account_verification',
      severity: 'info',
      user_id: 'user_44444',
      ip_address: '89.123.45.67',
      location: 'Los Angeles, CA',
      device: 'iPad Pro',
      browser: 'Safari 17.2',
      details: 'Phone number verification completed',
      risk_score: 1
    }
  ];

  // Event type categories
  const eventTypes = [
    { id: 'all', name: 'All Events', count: 10 },
    { id: 'login_success', name: 'Successful Logins', count: 1 },
    { id: 'login_failed', name: 'Failed Logins', count: 0 },
    { id: 'profile_changes', name: 'Profile Changes', count: 2 },
    { id: 'security_alerts', name: 'Security Alerts', count: 3 },
    { id: 'verification', name: 'Verification Events', count: 2 },
    { id: 'privacy_changes', name: 'Privacy Changes', count: 1 },
    { id: 'data_access', name: 'Data Access', count: 1 }
  ];

  // Security metrics
  const securityMetrics = [
    {
      metric: 'Security Score',
      value: '94/100',
      change: '+2',
      trend: 'up',
      description: 'Overall account security'
    },
    {
      metric: 'Risk Events',
      value: '3',
      change: '-1',
      trend: 'down',
      description: 'High-risk events today'
    },
    {
      metric: 'Login Success Rate',
      value: '99.2%',
      change: '+0.3%',
      trend: 'up',
      description: 'Successful authentications'
    },
    {
      metric: 'Verification Status',
      value: 'Verified',
      change: 'Complete',
      trend: 'stable',
      description: 'Account verification level'
    }
  ];

  // Device and location summary
  const deviceSummary = [
    { device: 'iPhone 15 Pro', sessions: 45, last_used: '2025-01-07 14:32', trusted: true },
    { device: 'MacBook Pro', sessions: 12, last_used: '2025-01-06 22:15', trusted: true },
    { device: 'iPad Pro', sessions: 8, last_used: '2025-01-05 19:30', trusted: true },
    { device: 'Unknown Device', sessions: 1, last_used: '2025-01-03 15:45', trusted: false }
  ];

  const locationSummary = [
    { location: 'San Francisco, CA', sessions: 52, percentage: 78 },
    { location: 'Los Angeles, CA', sessions: 8, percentage: 12 },
    { location: 'New York, NY', sessions: 4, percentage: 6 },
    { location: 'Unknown', sessions: 3, percentage: 4 }
  ];

  // Security recommendations
  const securityRecommendations = [
    {
      priority: 'high',
      title: 'Enable Two-Factor Authentication',
      description: 'Add an extra layer of security to your account',
      action: 'Enable 2FA',
      completed: false
    },
    {
      priority: 'medium',
      title: 'Review Login Locations',
      description: 'Check recent login locations for suspicious activity',
      action: 'Review Locations',
      completed: true
    },
    {
      priority: 'medium',
      title: 'Update Privacy Settings',
      description: 'Review and update your privacy preferences',
      action: 'Update Settings',
      completed: true
    },
    {
      priority: 'low',
      title: 'Verify Profile Photos',
      description: 'Complete photo verification for enhanced trust',
      action: 'Verify Photos',
      completed: true
    }
  ];

  const getFilteredEvents = () => {
    let filtered = securityEvents;
    
    if (selectedEventType !== 'all') {
      filtered = filtered.filter(event => event.event_type === selectedEventType);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(event => 
        event.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.device.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'info': return 'text-blue-600 bg-blue-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'info': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <Shield className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getEventIcon = (eventType) => {
    switch (eventType) {
      case 'login_success': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'login_failed': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'profile_photo_upload': return <User className="w-4 h-4 text-blue-600" />;
      case 'location_access': return <MapPin className="w-4 h-4 text-purple-600" />;
      case 'privacy_settings_change': return <Settings className="w-4 h-4 text-gray-600" />;
      case 'data_export_request': return <Download className="w-4 h-4 text-blue-600" />;
      case 'suspicious_message': return <AlertTriangle className="w-4 h-4 text-orange-600" />;
      case 'failed_verification': return <Shield className="w-4 h-4 text-red-600" />;
      case 'multiple_login_attempts': return <Lock className="w-4 h-4 text-red-600" />;
      case 'report_submitted': return <Bell className="w-4 h-4 text-yellow-600" />;
      case 'account_verification': return <CheckCircle className="w-4 h-4 text-green-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getRiskColor = (score) => {
    if (score <= 3) return 'text-green-600';
    if (score <= 6) return 'text-yellow-600';
    if (score <= 8) return 'text-orange-600';
    return 'text-red-600';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  useEffect(() => {
    if (autoRefresh) {
      const interval = setInterval(() => {
        console.log('Refreshing security events...');
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600" />
              Security Audit Trail
            </h1>
            <p className="text-gray-600">
              Monitor security events, track access patterns, and review account activity
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1day">Last 24 Hours</option>
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="90days">Last 90 Days</option>
            </select>
            
            <button
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                autoRefresh 
                  ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              Auto-Refresh: {autoRefresh ? 'ON' : 'OFF'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="w-4 h-4" />
              Export Log
            </button>
          </div>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {securityMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 
                metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Event Type Filter */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Event Types</h3>
            <div className="space-y-2">
              {eventTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedEventType(type.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                    selectedEventType === type.id 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span>{type.name}</span>
                  <span className="text-sm font-medium">{type.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Device Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Devices</h3>
            <div className="space-y-3">
              {deviceSummary.map((device, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-gray-600" />
                      <span className="font-medium text-gray-900">{device.device}</span>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${device.trusted ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{device.sessions} sessions</div>
                  <div className="text-xs text-gray-500">Last: {device.last_used}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Summary */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Login Locations</h3>
            <div className="space-y-3">
              {locationSummary.map((location, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-gray-900">{location.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{location.sessions} sessions</span>
                    <span className="text-sm font-medium text-blue-600">{location.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${location.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Recommendations */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Security Recommendations</h3>
            <div className="space-y-3">
              {securityRecommendations.map((rec, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                      {rec.priority}
                    </span>
                    {rec.completed && <CheckCircle className="w-4 h-4 text-green-600" />}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">{rec.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                  {!rec.completed && (
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      {rec.action}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Security Events */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Security Events</h3>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-2 px-3 py-1 text-sm text-blue-600 hover:text-blue-700"
                >
                  <Eye className="w-4 h-4" />
                  {showDetails ? 'Hide' : 'Show'} Details
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {getFilteredEvents().map((event) => (
                <div key={event.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {getEventIcon(event.event_type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="font-medium text-gray-900">{event.details}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getSeverityColor(event.severity)}`}>
                            {getSeverityIcon(event.severity)}
                            {event.severity}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${getRiskColor(event.risk_score)}`}>
                            Risk: {event.risk_score}/10
                          </span>
                          <span className="text-sm text-gray-500">{event.timestamp}</span>
                        </div>
                      </div>
                      
                      {showDetails && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Location & IP</div>
                            <div className="text-sm text-gray-900">{event.location}</div>
                            <div className="text-xs text-gray-600">{event.ip_address}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Device & Browser</div>
                            <div className="text-sm text-gray-900">{event.device}</div>
                            <div className="text-xs text-gray-600">{event.browser}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 mb-1">User & Event</div>
                            <div className="text-sm text-gray-900">{event.user_id}</div>
                            <div className="text-xs text-gray-600">{event.event_type}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {getFilteredEvents().length === 0 && (
              <div className="p-12 text-center">
                <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Events Found</h3>
                <p className="text-gray-600">No security events match your current filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAuditTrail;

