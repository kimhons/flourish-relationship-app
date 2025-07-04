import React, { useState, useEffect } from 'react';
import { 
  Shield, AlertTriangle, Eye, Target, Zap, Brain,
  Activity, TrendingUp, Clock, CheckCircle, XCircle,
  Search, Filter, Download, Settings, Bell, Users
} from 'lucide-react';
import { 
  BarChart as RechartsBarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const AdvancedThreatDetection = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [threatFilter, setThreatFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('24h');
  const [selectedThreat, setSelectedThreat] = useState(null);

  // Real-time threat data for dating app
  const threatData = [
    {
      id: 'THREAT-2025-001',
      type: 'fake_profile',
      severity: 'high',
      status: 'active',
      detected_time: '2025-01-07 14:23:15',
      source: 'AI Profile Analysis',
      target: 'User Registration',
      description: 'Multiple fake profiles detected using stolen photos',
      confidence: 94.7,
      affected_users: 23,
      location: 'New York, NY',
      indicators: [
        'Reverse image search matches',
        'Inconsistent profile information',
        'Rapid profile creation pattern',
        'Suspicious device fingerprints'
      ],
      mitigation_actions: [
        'Profiles flagged for manual review',
        'Photo verification required',
        'Account creation rate limited',
        'Enhanced monitoring activated'
      ],
      risk_score: 8.5
    },
    {
      id: 'THREAT-2025-002',
      type: 'catfishing_attempt',
      severity: 'critical',
      status: 'investigating',
      detected_time: '2025-01-07 13:45:32',
      source: 'Behavioral Analysis',
      target: 'Messaging System',
      description: 'Sophisticated catfishing operation targeting premium users',
      confidence: 97.2,
      affected_users: 8,
      location: 'Los Angeles, CA',
      indicators: [
        'Professional photo inconsistencies',
        'Scripted conversation patterns',
        'Financial request patterns',
        'Multiple identity claims'
      ],
      mitigation_actions: [
        'Accounts suspended pending investigation',
        'Affected users notified',
        'Enhanced verification required',
        'Law enforcement contacted'
      ],
      risk_score: 9.3
    },
    {
      id: 'THREAT-2025-003',
      type: 'romance_scam',
      severity: 'critical',
      status: 'blocked',
      detected_time: '2025-01-07 12:18:47',
      source: 'Financial Pattern Analysis',
      target: 'User Communications',
      description: 'Romance scam network attempting to solicit money from users',
      confidence: 98.9,
      affected_users: 12,
      location: 'Multiple International',
      indicators: [
        'Financial solicitation keywords',
        'Emotional manipulation tactics',
        'Coordinated account behavior',
        'International money transfer requests'
      ],
      mitigation_actions: [
        'Scammer accounts permanently banned',
        'Victims contacted and educated',
        'Financial institutions notified',
        'Pattern added to detection models'
      ],
      risk_score: 9.8
    },
    {
      id: 'THREAT-2025-004',
      type: 'harassment_campaign',
      severity: 'medium',
      status: 'monitoring',
      detected_time: '2025-01-07 11:32:19',
      source: 'Content Analysis',
      target: 'User Safety',
      description: 'Coordinated harassment targeting specific user demographics',
      confidence: 87.3,
      affected_users: 34,
      location: 'Chicago, IL',
      indicators: [
        'Coordinated messaging patterns',
        'Targeted demographic selection',
        'Escalating aggressive language',
        'Multiple account coordination'
      ],
      mitigation_actions: [
        'Enhanced content filtering activated',
        'Targeted users offered protection',
        'Harassment accounts flagged',
        'Community guidelines reinforced'
      ],
      risk_score: 6.7
    },
    {
      id: 'THREAT-2025-005',
      type: 'data_harvesting',
      severity: 'high',
      status: 'contained',
      detected_time: '2025-01-07 10:15:28',
      source: 'API Monitoring',
      target: 'User Data',
      description: 'Automated bot network attempting to harvest user profile data',
      confidence: 91.4,
      affected_users: 156,
      location: 'Various VPN Endpoints',
      indicators: [
        'Automated browsing patterns',
        'High-frequency API requests',
        'Systematic profile viewing',
        'Data extraction attempts'
      ],
      mitigation_actions: [
        'Bot accounts blocked',
        'Rate limiting enhanced',
        'CAPTCHA challenges increased',
        'API access restricted'
      ],
      risk_score: 7.8
    },
    {
      id: 'THREAT-2025-006',
      type: 'account_takeover',
      severity: 'high',
      status: 'resolved',
      detected_time: '2025-01-07 09:42:11',
      source: 'Login Anomaly Detection',
      target: 'User Accounts',
      description: 'Credential stuffing attack targeting user accounts',
      confidence: 95.6,
      affected_users: 7,
      location: 'Eastern Europe',
      indicators: [
        'Unusual login locations',
        'Failed authentication spikes',
        'Credential database matches',
        'Suspicious device characteristics'
      ],
      mitigation_actions: [
        'Affected accounts secured',
        'Password resets enforced',
        'Two-factor authentication enabled',
        'Security notifications sent'
      ],
      risk_score: 8.2
    }
  ];

  // Threat statistics
  const threatStats = {
    total_threats: 6,
    active_threats: 3,
    resolved_threats: 2,
    investigating: 1,
    avg_detection_time: '2.3 minutes',
    avg_response_time: '8.7 minutes',
    threat_prevention_rate: 94.2,
    false_positive_rate: 2.1
  };

  // Threat trends over time
  const trendData = [
    { hour: '00:00', fake_profiles: 2, catfishing: 0, scams: 1, harassment: 1, data_harvesting: 3 },
    { hour: '04:00', fake_profiles: 1, catfishing: 1, scams: 0, harassment: 0, data_harvesting: 2 },
    { hour: '08:00', fake_profiles: 4, catfishing: 2, scams: 1, harassment: 2, data_harvesting: 1 },
    { hour: '12:00', fake_profiles: 6, catfishing: 3, scams: 2, harassment: 3, data_harvesting: 4 },
    { hour: '16:00', fake_profiles: 8, catfishing: 1, scams: 1, harassment: 1, data_harvesting: 2 },
    { hour: '20:00', fake_profiles: 5, catfishing: 2, scams: 3, harassment: 4, data_harvesting: 3 }
  ];

  // Threat type distribution
  const threatTypeData = [
    { name: 'Fake Profiles', value: 35, color: '#ef4444' },
    { name: 'Catfishing', value: 20, color: '#f97316' },
    { name: 'Romance Scams', value: 25, color: '#eab308' },
    { name: 'Harassment', value: 15, color: '#22c55e' },
    { name: 'Data Harvesting', value: 5, color: '#3b82f6' }
  ];

  // Detection methods performance
  const detectionMethods = [
    {
      method: 'AI Profile Analysis',
      accuracy: 94.7,
      speed: '1.2s',
      threats_detected: 156,
      false_positives: 8,
      coverage: 'Profile Creation, Photo Verification'
    },
    {
      method: 'Behavioral Analysis',
      accuracy: 91.3,
      speed: '2.8s',
      threats_detected: 89,
      false_positives: 12,
      coverage: 'User Interactions, Communication Patterns'
    },
    {
      method: 'Financial Pattern Analysis',
      accuracy: 98.9,
      speed: '0.9s',
      threats_detected: 34,
      false_positives: 1,
      coverage: 'Money Requests, Financial Scams'
    },
    {
      method: 'Content Analysis',
      accuracy: 87.3,
      speed: '1.5s',
      threats_detected: 203,
      false_positives: 23,
      coverage: 'Messages, Profile Content, Media'
    },
    {
      method: 'Network Analysis',
      accuracy: 92.8,
      speed: '3.1s',
      threats_detected: 67,
      false_positives: 6,
      coverage: 'Coordinated Attacks, Bot Networks'
    }
  ];

  // Real-time alerts
  const recentAlerts = [
    {
      id: 1,
      timestamp: '2025-01-07 14:23:15',
      type: 'fake_profile',
      severity: 'high',
      message: 'Multiple fake profiles detected using stolen celebrity photos',
      action_taken: 'Profiles flagged for review'
    },
    {
      id: 2,
      timestamp: '2025-01-07 13:45:32',
      type: 'catfishing_attempt',
      severity: 'critical',
      message: 'Sophisticated catfishing operation targeting premium users',
      action_taken: 'Accounts suspended'
    },
    {
      id: 3,
      timestamp: '2025-01-07 12:18:47',
      type: 'romance_scam',
      severity: 'critical',
      message: 'Romance scam network requesting financial assistance',
      action_taken: 'Accounts banned'
    },
    {
      id: 4,
      timestamp: '2025-01-07 11:32:19',
      type: 'harassment_campaign',
      severity: 'medium',
      message: 'Coordinated harassment targeting specific demographics',
      action_taken: 'Enhanced monitoring'
    },
    {
      id: 5,
      timestamp: '2025-01-07 10:15:28',
      type: 'data_harvesting',
      severity: 'high',
      message: 'Bot network attempting systematic data collection',
      action_taken: 'Bots blocked'
    }
  ];

  const getFilteredThreats = () => {
    let filtered = threatData;
    
    if (threatFilter !== 'all') {
      filtered = filtered.filter(threat => threat.type === threatFilter);
    }
    
    return filtered;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-red-600 bg-red-100';
      case 'investigating': return 'text-blue-600 bg-blue-100';
      case 'monitoring': return 'text-yellow-600 bg-yellow-100';
      case 'blocked': return 'text-purple-600 bg-purple-100';
      case 'contained': return 'text-orange-600 bg-orange-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getThreatIcon = (type) => {
    switch (type) {
      case 'fake_profile': return <Users className="w-4 h-4" />;
      case 'catfishing_attempt': return <Eye className="w-4 h-4" />;
      case 'romance_scam': return <Target className="w-4 h-4" />;
      case 'harassment_campaign': return <AlertTriangle className="w-4 h-4" />;
      case 'data_harvesting': return <Search className="w-4 h-4" />;
      case 'account_takeover': return <Shield className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getRiskColor = (score) => {
    if (score >= 9.0) return 'text-red-600';
    if (score >= 7.0) return 'text-orange-600';
    if (score >= 5.0) return 'text-yellow-600';
    return 'text-green-600';
  };

  const blockThreat = (threatId) => {
    console.log(`Blocking threat: ${threatId}`);
    // In a real app, this would block the threat
  };

  const investigateThreat = (threatId) => {
    console.log(`Starting investigation for threat: ${threatId}`);
    // In a real app, this would start an investigation
  };

  const exportThreatReport = () => {
    console.log('Exporting threat intelligence report...');
    // In a real app, this would generate and download a report
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              Advanced Threat Detection
            </h1>
            <p className="text-gray-600">
              AI-powered threat detection and response for dating platform security
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={threatFilter}
              onChange={(e) => setThreatFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="all">All Threats</option>
              <option value="fake_profile">Fake Profiles</option>
              <option value="catfishing_attempt">Catfishing</option>
              <option value="romance_scam">Romance Scams</option>
              <option value="harassment_campaign">Harassment</option>
              <option value="data_harvesting">Data Harvesting</option>
              <option value="account_takeover">Account Takeover</option>
            </select>
            
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            
            <button 
              onClick={exportThreatReport}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export Report
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <Settings className="w-4 h-4" />
              Configure Detection
            </button>
          </div>
        </div>
      </div>

      {/* Threat Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-red-600">{threatStats.active_threats}</div>
              <div className="text-xs text-gray-500">of {threatStats.total_threats}</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Active Threats</h3>
            <p className="text-sm text-gray-600">Requiring immediate attention</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">{threatStats.threat_prevention_rate}%</div>
              <div className="text-xs text-gray-500">Prevention Rate</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Threat Prevention</h3>
            <p className="text-sm text-gray-600">Successfully blocked threats</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{threatStats.avg_detection_time}</div>
              <div className="text-xs text-gray-500">Detection Time</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Detection Speed</h3>
            <p className="text-sm text-gray-600">Average time to detect</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">{threatStats.avg_response_time}</div>
              <div className="text-xs text-gray-500">Response Time</div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Response Speed</h3>
            <p className="text-sm text-gray-600">Average time to respond</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'dashboard', name: 'Threat Dashboard', icon: Activity },
              { id: 'threats', name: 'Active Threats', icon: AlertTriangle },
              { id: 'detection', name: 'Detection Methods', icon: Brain },
              { id: 'analytics', name: 'Threat Analytics', icon: TrendingUp }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
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
          {/* Real-time Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Real-time Alerts
            </h3>
            <div className="space-y-3">
              {recentAlerts.slice(0, 5).map((alert) => (
                <div key={alert.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getThreatIcon(alert.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-900 mb-1">{alert.message}</p>
                      <p className="text-xs text-gray-600 mb-1">{alert.action_taken}</p>
                      <p className="text-xs text-gray-500">{alert.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Detection Performance */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Detection Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Accuracy Rate</span>
                <span className="font-semibold text-green-600">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">False Positives</span>
                <span className="font-semibold text-yellow-600">2.1%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Coverage</span>
                <span className="font-semibold text-blue-600">98.7%</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">Threat Score</span>
                  <span className="font-bold text-green-600">94/100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: '94%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Shield className="w-4 h-4" />
                Block All Active Threats
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                Start Investigation
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Threat Data
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Tune Detection Rules
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'dashboard' && (
            <>
              {/* Threat Trends */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Activity Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="fake_profiles" stroke="#ef4444" strokeWidth={2} name="Fake Profiles" />
                    <Line type="monotone" dataKey="catfishing" stroke="#f97316" strokeWidth={2} name="Catfishing" />
                    <Line type="monotone" dataKey="scams" stroke="#eab308" strokeWidth={2} name="Romance Scams" />
                    <Line type="monotone" dataKey="harassment" stroke="#22c55e" strokeWidth={2} name="Harassment" />
                    <Line type="monotone" dataKey="data_harvesting" stroke="#3b82f6" strokeWidth={2} name="Data Harvesting" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Threat Distribution and Top Threats */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Type Distribution</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={threatTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {threatTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Threats</h3>
                  <div className="space-y-4">
                    {threatData.filter(t => t.severity === 'critical').map((threat, index) => (
                      <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            {getThreatIcon(threat.type)}
                            <span className="font-medium text-red-900">{threat.type.replace('_', ' ')}</span>
                          </div>
                          <span className={`text-sm font-semibold ${getRiskColor(threat.risk_score)}`}>
                            Risk: {threat.risk_score}
                          </span>
                        </div>
                        <p className="text-sm text-red-700 mb-2">{threat.description}</p>
                        <div className="flex justify-between text-xs text-red-600">
                          <span>Confidence: {threat.confidence}%</span>
                          <span>Affected: {threat.affected_users} users</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'threats' && (
            <div className="space-y-6">
              {getFilteredThreats().map((threat) => (
                <div key={threat.id} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-100 rounded-lg">
                        {getThreatIcon(threat.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{threat.type.replace('_', ' ')}</h3>
                        <p className="text-sm text-gray-600">{threat.detected_time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(threat.severity)}`}>
                        {threat.severity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(threat.status)}`}>
                        {threat.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${getRiskColor(threat.risk_score)}`}>
                        Risk: {threat.risk_score}
                      </span>
                      <span className="text-sm text-gray-600">
                        Confidence: {threat.confidence}%
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{threat.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Source</div>
                      <div className="font-semibold text-gray-900">{threat.source}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Target</div>
                      <div className="font-semibold text-gray-900">{threat.target}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Affected Users</div>
                      <div className="font-semibold text-red-600">{threat.affected_users}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-semibold text-gray-900">{threat.location}</div>
                    </div>
                  </div>

                  {selectedThreat === threat.id && (
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Threat Indicators</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {threat.indicators.map((indicator, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                                {indicator}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Mitigation Actions</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {threat.mitigation_actions.map((action, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setSelectedThreat(selectedThreat === threat.id ? null : threat.id)}
                      className="flex items-center gap-2 px-3 py-1 text-red-600 hover:text-red-700"
                    >
                      <Eye className="w-4 h-4" />
                      {selectedThreat === threat.id ? 'Hide Details' : 'View Details'}
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => investigateThreat(threat.id)}
                        className="flex items-center gap-1 px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                      >
                        <Search className="w-3 h-3" />
                        Investigate
                      </button>
                      <button 
                        onClick={() => blockThreat(threat.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Shield className="w-4 h-4" />
                        Block Threat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'detection' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detection Methods Performance</h3>
              <div className="space-y-6">
                {detectionMethods.map((method, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Brain className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-gray-900">{method.method}</h4>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-green-600">Accuracy: {method.accuracy}%</span>
                        <span className="text-blue-600">Speed: {method.speed}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-gray-900">{method.threats_detected}</div>
                        <div className="text-xs text-gray-600">Threats Detected</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-yellow-600">{method.false_positives}</div>
                        <div className="text-xs text-gray-600">False Positives</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-green-600">{method.accuracy}%</div>
                        <div className="text-xs text-gray-600">Accuracy Rate</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded">
                        <div className="text-lg font-bold text-blue-600">{method.speed}</div>
                        <div className="text-xs text-gray-600">Response Time</div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <strong>Coverage:</strong> {method.coverage}
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Performance</span>
                        <span>{method.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${method.accuracy}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Threat Detection Analytics</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={detectionMethods}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="method" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="threats_detected" fill="#3b82f6" name="Threats Detected" />
                    <Bar dataKey="false_positives" fill="#f59e0b" name="False Positives" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Detection Accuracy</h3>
                  <div className="space-y-4">
                    {detectionMethods.map((method, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{method.method}</span>
                          <span className="font-semibold">{method.accuracy}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${method.accuracy}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time Analysis</h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium text-green-900">Average Detection Time</div>
                      <div className="text-2xl font-bold text-green-600">{threatStats.avg_detection_time}</div>
                      <div className="text-sm text-green-700">23% faster than industry average</div>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium text-blue-900">Average Response Time</div>
                      <div className="text-2xl font-bold text-blue-600">{threatStats.avg_response_time}</div>
                      <div className="text-sm text-blue-700">67% faster than previous month</div>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="font-medium text-purple-900">False Positive Rate</div>
                      <div className="text-2xl font-bold text-purple-600">{threatStats.false_positive_rate}%</div>
                      <div className="text-sm text-purple-700">Below industry benchmark</div>
                    </div>
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

export default AdvancedThreatDetection;

