import React, { useState, useEffect } from 'react';
import { 
  Shield, CheckCircle, XCircle, AlertTriangle, Settings,
  Key, Lock, Eye, Globe, Smartphone, Camera, Phone,
  User, CreditCard, MapPin, Clock, Bell, Download
} from 'lucide-react';

const ThirdPartySecurityIntegration = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [integrationStatus, setIntegrationStatus] = useState('active');

  // Security service providers for dating apps
  const securityProviders = [
    {
      id: 'identity_verification',
      name: 'Identity Verification Services',
      category: 'Identity & Verification',
      providers: [
        {
          name: 'Jumio',
          description: 'AI-powered identity verification and document authentication',
          status: 'active',
          integration_date: '2024-11-15',
          features: ['ID Document Verification', 'Biometric Face Matching', 'Liveness Detection', 'Age Verification'],
          api_calls_month: 45678,
          success_rate: 94.2,
          cost_per_verification: '$0.85',
          compliance: ['GDPR', 'CCPA', 'SOC 2']
        },
        {
          name: 'Onfido',
          description: 'Digital identity verification and background checks',
          status: 'active',
          integration_date: '2024-10-20',
          features: ['Document Verification', 'Facial Recognition', 'Background Checks', 'Watchlist Screening'],
          api_calls_month: 23456,
          success_rate: 96.8,
          cost_per_verification: '$1.20',
          compliance: ['GDPR', 'CCPA', 'ISO 27001']
        }
      ]
    },
    {
      id: 'background_checks',
      name: 'Background Check Services',
      category: 'Safety & Screening',
      providers: [
        {
          name: 'Checkr',
          description: 'Comprehensive background screening and criminal record checks',
          status: 'active',
          integration_date: '2024-12-01',
          features: ['Criminal Background Checks', 'Sex Offender Registry', 'Identity Verification', 'Employment History'],
          api_calls_month: 12345,
          success_rate: 98.5,
          cost_per_check: '$15.00',
          compliance: ['FCRA', 'GDPR', 'CCPA']
        },
        {
          name: 'Sterling',
          description: 'Professional background screening and verification services',
          status: 'testing',
          integration_date: '2025-01-05',
          features: ['Criminal History', 'Identity Verification', 'Education Verification', 'Professional License Checks'],
          api_calls_month: 234,
          success_rate: 97.3,
          cost_per_check: '$18.50',
          compliance: ['FCRA', 'GDPR', 'SOC 2']
        }
      ]
    },
    {
      id: 'fraud_detection',
      name: 'Fraud Detection & Prevention',
      category: 'Fraud Prevention',
      providers: [
        {
          name: 'Sift',
          description: 'Machine learning-powered fraud detection and prevention',
          status: 'active',
          integration_date: '2024-09-10',
          features: ['Account Takeover Protection', 'Fake Account Detection', 'Payment Fraud Prevention', 'Content Abuse Detection'],
          api_calls_month: 156789,
          success_rate: 92.7,
          cost_per_check: '$0.05',
          compliance: ['PCI DSS', 'GDPR', 'SOC 2']
        },
        {
          name: 'Forter',
          description: 'Real-time fraud prevention and identity protection',
          status: 'inactive',
          integration_date: '2024-08-15',
          features: ['Identity Verification', 'Device Fingerprinting', 'Behavioral Analysis', 'Risk Scoring'],
          api_calls_month: 0,
          success_rate: 89.4,
          cost_per_check: '$0.08',
          compliance: ['PCI DSS', 'GDPR', 'ISO 27001']
        }
      ]
    },
    {
      id: 'photo_verification',
      name: 'Photo & Content Moderation',
      category: 'Content Safety',
      providers: [
        {
          name: 'AWS Rekognition',
          description: 'AI-powered image and video analysis for content moderation',
          status: 'active',
          integration_date: '2024-10-01',
          features: ['Facial Analysis', 'Object Detection', 'Inappropriate Content Detection', 'Celebrity Recognition'],
          api_calls_month: 234567,
          success_rate: 95.8,
          cost_per_analysis: '$0.001',
          compliance: ['SOC 2', 'GDPR', 'HIPAA']
        },
        {
          name: 'Microsoft Content Moderator',
          description: 'Automated content moderation and human review workflows',
          status: 'active',
          integration_date: '2024-11-10',
          features: ['Image Moderation', 'Text Analysis', 'Video Moderation', 'Custom Models'],
          api_calls_month: 123456,
          success_rate: 93.2,
          cost_per_analysis: '$0.002',
          compliance: ['SOC 2', 'GDPR', 'ISO 27001']
        }
      ]
    },
    {
      id: 'location_safety',
      name: 'Location & Safety Services',
      category: 'Location Safety',
      providers: [
        {
          name: 'Life360',
          description: 'Location sharing and safety check-in services',
          status: 'testing',
          integration_date: '2025-01-03',
          features: ['Real-time Location Sharing', 'Safety Check-ins', 'Emergency Alerts', 'Geofencing'],
          api_calls_month: 567,
          success_rate: 99.1,
          cost_per_user: '$2.99',
          compliance: ['GDPR', 'CCPA', 'COPPA']
        },
        {
          name: 'Noonlight',
          description: 'Emergency response and safety monitoring platform',
          status: 'active',
          integration_date: '2024-12-15',
          features: ['Emergency Response', 'Silent Alarm', 'Location Tracking', '24/7 Monitoring'],
          api_calls_month: 8901,
          success_rate: 98.9,
          cost_per_incident: '$5.00',
          compliance: ['HIPAA', 'GDPR', 'SOC 2']
        }
      ]
    },
    {
      id: 'payment_security',
      name: 'Payment Security',
      category: 'Financial Security',
      providers: [
        {
          name: 'Stripe Radar',
          description: 'Machine learning-powered fraud detection for payments',
          status: 'active',
          integration_date: '2024-08-01',
          features: ['Fraud Detection', 'Risk Scoring', 'Chargeback Protection', '3D Secure'],
          api_calls_month: 67890,
          success_rate: 96.5,
          cost_per_transaction: '2.9% + $0.30',
          compliance: ['PCI DSS', 'GDPR', 'SOC 2']
        },
        {
          name: 'PayPal Risk Management',
          description: 'Advanced fraud protection and risk management',
          status: 'active',
          integration_date: '2024-09-20',
          features: ['Transaction Monitoring', 'Seller Protection', 'Buyer Protection', 'Dispute Resolution'],
          api_calls_month: 34567,
          success_rate: 94.8,
          cost_per_transaction: '2.9% + $0.30',
          compliance: ['PCI DSS', 'GDPR', 'CCPA']
        }
      ]
    }
  ];

  // Integration statistics
  const integrationStats = {
    total_providers: 12,
    active_integrations: 8,
    testing_integrations: 2,
    inactive_integrations: 2,
    monthly_api_calls: 1156789,
    average_success_rate: 95.2,
    total_monthly_cost: 8450.00
  };

  // Recent security events
  const recentEvents = [
    {
      id: 1,
      timestamp: '2025-01-07 14:30',
      provider: 'Jumio',
      event_type: 'verification_completed',
      status: 'success',
      details: 'ID verification completed successfully',
      user_id: 'user_12345'
    },
    {
      id: 2,
      timestamp: '2025-01-07 14:15',
      provider: 'Sift',
      event_type: 'fraud_detected',
      status: 'blocked',
      details: 'Suspicious account creation attempt blocked',
      user_id: 'user_67890'
    },
    {
      id: 3,
      timestamp: '2025-01-07 13:45',
      provider: 'AWS Rekognition',
      event_type: 'content_moderated',
      status: 'flagged',
      details: 'Inappropriate image content detected and removed',
      user_id: 'user_11111'
    },
    {
      id: 4,
      timestamp: '2025-01-07 13:20',
      provider: 'Checkr',
      event_type: 'background_check',
      status: 'completed',
      details: 'Background check completed - no issues found',
      user_id: 'user_22222'
    },
    {
      id: 5,
      timestamp: '2025-01-07 12:55',
      provider: 'Noonlight',
      event_type: 'safety_checkin',
      status: 'success',
      details: 'User safety check-in completed',
      user_id: 'user_33333'
    }
  ];

  // Security metrics by provider
  const providerMetrics = {
    jumio: { verifications: 45678, success_rate: 94.2, avg_time: '45s', cost: '$38,826' },
    onfido: { verifications: 23456, success_rate: 96.8, avg_time: '52s', cost: '$28,147' },
    checkr: { checks: 12345, success_rate: 98.5, avg_time: '2.3 days', cost: '$185,175' },
    sift: { analyses: 156789, success_rate: 92.7, avg_time: '0.2s', cost: '$7,839' },
    aws_rekognition: { analyses: 234567, success_rate: 95.8, avg_time: '0.1s', cost: '$235' },
    noonlight: { incidents: 8901, success_rate: 98.9, avg_time: '3.2 min', cost: '$44,505' }
  };

  const getAllProviders = () => {
    return securityProviders.flatMap(category => 
      category.providers.map(provider => ({
        ...provider,
        category: category.category,
        category_id: category.id
      }))
    );
  };

  const getFilteredProviders = () => {
    const allProviders = getAllProviders();
    
    let filtered = allProviders;
    
    if (selectedProvider !== 'all') {
      filtered = filtered.filter(provider => provider.category_id === selectedProvider);
    }
    
    if (integrationStatus !== 'all') {
      filtered = filtered.filter(provider => provider.status === integrationStatus);
    }
    
    return filtered;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'testing': return 'text-blue-600 bg-blue-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'testing': return <Clock className="w-4 h-4" />;
      case 'inactive': return <XCircle className="w-4 h-4" />;
      case 'error': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getEventIcon = (eventType) => {
    switch (eventType) {
      case 'verification_completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'fraud_detected': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'content_moderated': return <Eye className="w-4 h-4 text-orange-600" />;
      case 'background_check': return <Shield className="w-4 h-4 text-blue-600" />;
      case 'safety_checkin': return <MapPin className="w-4 h-4 text-green-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryIcon = (categoryId) => {
    switch (categoryId) {
      case 'identity_verification': return <User className="w-5 h-5" />;
      case 'background_checks': return <Shield className="w-5 h-5" />;
      case 'fraud_detection': return <AlertTriangle className="w-5 h-5" />;
      case 'photo_verification': return <Camera className="w-5 h-5" />;
      case 'location_safety': return <MapPin className="w-5 h-5" />;
      case 'payment_security': return <CreditCard className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  const toggleProviderStatus = (providerName) => {
    console.log(`Toggling status for provider: ${providerName}`);
    // In a real app, this would update the provider status
  };

  const configureProvider = (providerName) => {
    console.log(`Configuring provider: ${providerName}`);
    // In a real app, this would open configuration modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-cyan-600" />
              Third-Party Security Integration
            </h1>
            <p className="text-gray-600">
              Manage security service integrations, monitor performance, and configure safety features
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {securityProviders.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            
            <select
              value={integrationStatus}
              onChange={(e) => setIntegrationStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="testing">Testing</option>
              <option value="inactive">Inactive</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Settings className="w-4 h-4" />
              Add Integration
            </button>
          </div>
        </div>
      </div>

      {/* Integration Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{integrationStats.total_providers}</div>
          <div className="text-sm text-gray-600">Total Providers</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{integrationStats.active_integrations}</div>
          <div className="text-sm text-gray-600">Active</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{integrationStats.testing_integrations}</div>
          <div className="text-sm text-gray-600">Testing</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-cyan-600">{integrationStats.monthly_api_calls.toLocaleString()}</div>
          <div className="text-sm text-gray-600">API Calls/Month</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-purple-600">{integrationStats.average_success_rate}%</div>
          <div className="text-sm text-gray-600">Avg Success Rate</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-orange-600">${integrationStats.total_monthly_cost.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Monthly Cost</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: Eye },
              { id: 'providers', name: 'Providers', icon: Settings },
              { id: 'events', name: 'Security Events', icon: Bell },
              { id: 'metrics', name: 'Performance Metrics', icon: BarChart }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-cyan-500 text-cyan-600'
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
          {/* Provider Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Security Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedProvider('all')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedProvider === 'all' 
                    ? 'bg-cyan-100 text-cyan-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Categories
              </button>
              {securityProviders.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedProvider(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    selectedProvider === category.id 
                      ? 'bg-cyan-100 text-cyan-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {getCategoryIcon(category.id)}
                  <span className="text-sm">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Events */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Events</h3>
            <div className="space-y-3">
              {recentEvents.slice(0, 5).map((event) => (
                <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getEventIcon(event.event_type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{event.provider}</p>
                      <p className="text-xs text-gray-600 mb-1">{event.details}</p>
                      <p className="text-xs text-gray-500">{event.timestamp}</p>
                    </div>
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
                <Settings className="w-4 h-4" />
                Configure Webhooks
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Key className="w-4 h-4" />
                Manage API Keys
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Bell className="w-4 h-4" />
                Alert Settings
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Export Logs
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'overview' && (
            <>
              {/* Integration Overview */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Integration Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {securityProviders.map((category) => (
                    <div key={category.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        {getCategoryIcon(category.id)}
                        <h4 className="font-medium text-gray-900">{category.name}</h4>
                      </div>
                      <div className="space-y-2">
                        {category.providers.map((provider, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">{provider.name}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(provider.status)}`}>
                              {getStatusIcon(provider.status)}
                              {provider.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Analysis */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Cost Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Identity Verification</span>
                    <span className="font-bold text-blue-600">$66,973</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Background Checks</span>
                    <span className="font-bold text-green-600">$185,175</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Fraud Detection</span>
                    <span className="font-bold text-orange-600">$7,839</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Content Moderation</span>
                    <span className="font-bold text-purple-600">$481</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">Safety Services</span>
                    <span className="font-bold text-red-600">$44,505</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Monthly Cost</span>
                      <span className="text-xl font-bold text-gray-900">$304,973</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'providers' && (
            <div className="space-y-6">
              {getFilteredProviders().map((provider, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {provider.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(provider.status)}`}>
                        {getStatusIcon(provider.status)}
                        {provider.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => configureProvider(provider.name)}
                        className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50"
                      >
                        Configure
                      </button>
                      <button 
                        onClick={() => toggleProviderStatus(provider.name)}
                        className={`px-3 py-1 text-sm rounded ${
                          provider.status === 'active' 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                      >
                        {provider.status === 'active' ? 'Disable' : 'Enable'}
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{provider.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">API Calls/Month</div>
                      <div className="font-semibold text-gray-900">{provider.api_calls_month.toLocaleString()}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Success Rate</div>
                      <div className="font-semibold text-green-600">{provider.success_rate}%</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Cost</div>
                      <div className="font-semibold text-blue-600">{provider.cost_per_verification || provider.cost_per_check || provider.cost_per_analysis || provider.cost_per_user || provider.cost_per_incident || provider.cost_per_transaction}</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-500">Integration Date</div>
                      <div className="font-semibold text-gray-900">{provider.integration_date}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {provider.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm font-medium text-gray-700 mb-2">Compliance:</div>
                    <div className="flex flex-wrap gap-2">
                      {provider.compliance.map((comp, compIndex) => (
                        <span key={compIndex} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Events</h3>
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div key={event.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getEventIcon(event.event_type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{event.provider}</h4>
                          <span className="text-sm text-gray-500">{event.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{event.details}</p>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                            {event.status}
                          </span>
                          <span className="text-xs text-gray-500">User: {event.user_id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Provider Performance Metrics</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Provider</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Volume</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Success Rate</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Avg Time</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Monthly Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(providerMetrics).map(([provider, metrics]) => (
                        <tr key={provider} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium text-gray-900 capitalize">
                            {provider.replace('_', ' ')}
                          </td>
                          <td className="py-3 px-4 text-gray-600">
                            {(metrics.verifications || metrics.checks || metrics.analyses || metrics.incidents).toLocaleString()}
                          </td>
                          <td className="py-3 px-4">
                            <span className="font-semibold text-green-600">{metrics.success_rate}%</span>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{metrics.avg_time}</td>
                          <td className="py-3 px-4 font-semibold text-blue-600">{metrics.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdPartySecurityIntegration;

