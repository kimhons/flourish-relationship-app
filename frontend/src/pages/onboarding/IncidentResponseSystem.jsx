import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, Shield, Phone, MessageCircle, MapPin, Clock,
  User, Camera, FileText, Send, CheckCircle, XCircle,
  Bell, Settings, Download, Upload, Eye, Lock
} from 'lucide-react';

const IncidentResponseSystem = () => {
  const [activeTab, setActiveTab] = useState('report');
  const [incidentType, setIncidentType] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('medium');
  const [reportForm, setReportForm] = useState({
    incident_type: '',
    description: '',
    user_involved: '',
    location: '',
    evidence: [],
    contact_preference: 'app',
    anonymous: false
  });

  // Incident types specific to dating app
  const incidentTypes = [
    {
      id: 'harassment',
      name: 'Harassment or Abuse',
      description: 'Unwanted messages, threats, or abusive behavior',
      severity: 'high',
      response_time: '< 2 hours',
      icon: MessageCircle
    },
    {
      id: 'fake_profile',
      name: 'Fake Profile or Catfishing',
      description: 'Suspected fake identity or misleading profile information',
      severity: 'medium',
      response_time: '< 24 hours',
      icon: User
    },
    {
      id: 'inappropriate_content',
      name: 'Inappropriate Content',
      description: 'Explicit, offensive, or inappropriate photos or messages',
      severity: 'medium',
      response_time: '< 4 hours',
      icon: Camera
    },
    {
      id: 'safety_concern',
      name: 'Safety Concern',
      description: 'Feeling unsafe or threatened by another user',
      severity: 'high',
      response_time: '< 1 hour',
      icon: Shield
    },
    {
      id: 'scam_fraud',
      name: 'Scam or Fraud',
      description: 'Financial scams, fake charity requests, or fraud attempts',
      severity: 'high',
      response_time: '< 2 hours',
      icon: AlertTriangle
    },
    {
      id: 'stalking',
      name: 'Stalking or Following',
      description: 'Unwanted persistent contact or following behavior',
      severity: 'critical',
      response_time: '< 30 minutes',
      icon: MapPin
    },
    {
      id: 'underage_user',
      name: 'Underage User',
      description: 'Suspected user under 18 years old',
      severity: 'critical',
      response_time: '< 15 minutes',
      icon: User
    },
    {
      id: 'data_breach',
      name: 'Data Privacy Concern',
      description: 'Unauthorized access to personal information',
      severity: 'high',
      response_time: '< 1 hour',
      icon: Lock
    }
  ];

  // Recent incidents
  const recentIncidents = [
    {
      id: 'INC-2025-001',
      type: 'harassment',
      status: 'resolved',
      severity: 'high',
      reported_date: '2025-01-07 14:30',
      resolved_date: '2025-01-07 16:45',
      description: 'User reported receiving threatening messages',
      action_taken: 'Account suspended, user blocked, evidence preserved',
      reporter: 'user_12345'
    },
    {
      id: 'INC-2025-002',
      type: 'fake_profile',
      status: 'investigating',
      severity: 'medium',
      reported_date: '2025-01-07 12:15',
      resolved_date: null,
      description: 'Suspected fake profile using stolen photos',
      action_taken: 'Profile under review, photo verification requested',
      reporter: 'user_67890'
    },
    {
      id: 'INC-2025-003',
      type: 'safety_concern',
      status: 'escalated',
      severity: 'critical',
      reported_date: '2025-01-07 10:20',
      resolved_date: null,
      description: 'User feels unsafe after meeting, requesting emergency assistance',
      action_taken: 'Emergency contacts notified, local authorities contacted',
      reporter: 'user_11111'
    },
    {
      id: 'INC-2025-004',
      type: 'inappropriate_content',
      status: 'resolved',
      severity: 'medium',
      reported_date: '2025-01-06 18:45',
      resolved_date: '2025-01-06 20:30',
      description: 'Inappropriate photos shared in messages',
      action_taken: 'Content removed, warning issued to user',
      reporter: 'user_22222'
    },
    {
      id: 'INC-2025-005',
      type: 'scam_fraud',
      status: 'resolved',
      severity: 'high',
      reported_date: '2025-01-06 15:30',
      resolved_date: '2025-01-06 17:15',
      description: 'User attempted to solicit money for fake emergency',
      action_taken: 'Account permanently banned, evidence forwarded to authorities',
      reporter: 'user_33333'
    }
  ];

  // Emergency contacts and resources
  const emergencyResources = [
    {
      type: 'emergency',
      name: 'Emergency Services',
      number: '911',
      description: 'Immediate danger or emergency situations',
      available: '24/7'
    },
    {
      type: 'crisis',
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis support via text message',
      available: '24/7'
    },
    {
      type: 'domestic_violence',
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: 'Support for domestic violence situations',
      available: '24/7'
    },
    {
      type: 'sexual_assault',
      name: 'RAINN National Sexual Assault Hotline',
      number: '1-800-656-4673',
      description: 'Support for sexual assault survivors',
      available: '24/7'
    },
    {
      type: 'suicide_prevention',
      name: 'Suicide & Crisis Lifeline',
      number: '988',
      description: 'Mental health crisis support',
      available: '24/7'
    }
  ];

  // Safety tips
  const safetyTips = [
    {
      category: 'First Meeting',
      tips: [
        'Meet in a public place with lots of people around',
        'Tell a friend or family member where you\'re going',
        'Drive yourself or use your own transportation',
        'Keep your phone charged and accessible'
      ]
    },
    {
      category: 'Online Safety',
      tips: [
        'Don\'t share personal information too quickly',
        'Use the app\'s messaging system initially',
        'Trust your instincts if something feels off',
        'Report suspicious behavior immediately'
      ]
    },
    {
      category: 'Red Flags',
      tips: [
        'Asks for money or financial information',
        'Refuses to video chat or meet in person',
        'Has very few photos or photos seem fake',
        'Pressures you to move off the platform quickly'
      ]
    }
  ];

  // Incident statistics
  const incidentStats = {
    total_reports: 156,
    resolved: 142,
    investigating: 8,
    escalated: 6,
    response_time_avg: '1.2 hours',
    resolution_rate: '91.0%'
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting incident report:', reportForm);
    // In a real app, this would submit to the backend
    alert('Incident report submitted successfully. You will receive updates via your preferred contact method.');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'investigating': return 'text-blue-600 bg-blue-100';
      case 'escalated': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      case 'investigating': return <Clock className="w-4 h-4" />;
      case 'escalated': return <AlertTriangle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              Incident Response System
            </h1>
            <p className="text-gray-600">
              Report safety concerns, track incidents, and access emergency resources
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600">Response Team Active</span>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Phone className="w-4 h-4" />
              Emergency: 911
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <AlertTriangle className="w-4 h-4" />
              Report Incident
            </button>
          </div>
        </div>
      </div>

      {/* Incident Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{incidentStats.total_reports}</div>
          <div className="text-sm text-gray-600">Total Reports</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{incidentStats.resolved}</div>
          <div className="text-sm text-gray-600">Resolved</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-blue-600">{incidentStats.investigating}</div>
          <div className="text-sm text-gray-600">Investigating</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-red-600">{incidentStats.escalated}</div>
          <div className="text-sm text-gray-600">Escalated</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-purple-600">{incidentStats.response_time_avg}</div>
          <div className="text-sm text-gray-600">Avg Response</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{incidentStats.resolution_rate}</div>
          <div className="text-sm text-gray-600">Resolution Rate</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'report', name: 'Report Incident', icon: AlertTriangle },
              { id: 'incidents', name: 'My Reports', icon: FileText },
              { id: 'resources', name: 'Emergency Resources', icon: Phone },
              { id: 'safety', name: 'Safety Tips', icon: Shield }
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
          {/* Quick Emergency Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Emergency Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <Phone className="w-4 h-4" />
                Call 911
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                <AlertTriangle className="w-4 h-4" />
                Report Emergency
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
                Crisis Text Line
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <MapPin className="w-4 h-4" />
                Share Location
              </button>
            </div>
          </div>

          {/* Incident Types */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Incident Types</h3>
            <div className="space-y-2">
              {incidentTypes.map((type) => (
                <div key={type.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <type.icon className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-gray-900 text-sm">{type.name}</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-2">{type.description}</div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(type.severity)}`}>
                      {type.severity}
                    </span>
                    <span className="text-xs text-gray-500">{type.response_time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentIncidents.slice(0, 3).map((incident) => (
                <div key={incident.id} className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900 text-sm">{incident.id}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(incident.status)}`}>
                      {getStatusIcon(incident.status)}
                      {incident.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">{incident.description}</div>
                  <div className="text-xs text-gray-500">{incident.reported_date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'report' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Report an Incident</h3>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Incident Type *
                  </label>
                  <select
                    value={reportForm.incident_type}
                    onChange={(e) => setReportForm({...reportForm, incident_type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select incident type...</option>
                    {incidentTypes.map((type) => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    value={urgencyLevel}
                    onChange={(e) => setUrgencyLevel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="low">Low - Can wait 24+ hours</option>
                    <option value="medium">Medium - Needs attention within hours</option>
                    <option value="high">High - Needs immediate attention</option>
                    <option value="critical">Critical - Emergency situation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    value={reportForm.description}
                    onChange={(e) => setReportForm({...reportForm, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please describe what happened in detail..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Involved (if applicable)
                  </label>
                  <input
                    type="text"
                    value={reportForm.user_involved}
                    onChange={(e) => setReportForm({...reportForm, user_involved: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Username or profile name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location (if relevant)
                  </label>
                  <input
                    type="text"
                    value={reportForm.location}
                    onChange={(e) => setReportForm({...reportForm, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Where did this occur?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Evidence (Screenshots, Photos, etc.)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB each</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    value={reportForm.contact_preference}
                    onChange={(e) => setReportForm({...reportForm, contact_preference: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="app">In-app notifications</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone call</option>
                    <option value="text">Text message</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={reportForm.anonymous}
                    onChange={(e) => setReportForm({...reportForm, anonymous: e.target.checked})}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                    Submit this report anonymously
                  </label>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Submit Report
                  </button>
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Save Draft
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === 'incidents' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Incident Reports</h3>
              <div className="space-y-4">
                {recentIncidents.map((incident) => (
                  <div key={incident.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-gray-900">{incident.id}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(incident.status)}`}>
                          {getStatusIcon(incident.status)}
                          {incident.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{incident.reported_date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{incident.description}</p>
                    <p className="text-sm text-gray-700 mb-2"><strong>Action Taken:</strong> {incident.action_taken}</p>
                    {incident.resolved_date && (
                      <p className="text-sm text-green-600"><strong>Resolved:</strong> {incident.resolved_date}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Resources</h3>
              <div className="space-y-4">
                {emergencyResources.map((resource, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{resource.name}</h4>
                      <span className="text-sm text-green-600 font-medium">{resource.available}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-600" />
                      <span className="font-medium text-blue-600">{resource.number}</span>
                      <button className="ml-auto px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                        Call Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'safety' && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Safety Tips</h3>
              <div className="space-y-6">
                {safetyTips.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-gray-900 mb-3">{category.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {category.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncidentResponseSystem;

