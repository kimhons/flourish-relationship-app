import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, XCircle, Clock, AlertTriangle, Eye, FileText,
  Shield, User, Heart, MessageCircle, Camera, MapPin,
  Settings, Bell, Calendar, Download, Edit, Trash2
} from 'lucide-react';

const UserConsentManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showHistory, setShowHistory] = useState(false);
  const [consentFilter, setConsentFilter] = useState('active');

  // Consent categories for dating app
  const consentCategories = [
    {
      id: 'profile_data',
      name: 'Profile & Personal Data',
      icon: User,
      description: 'Collection and use of profile information for matching',
      consents: [
        {
          id: 'basic_profile',
          title: 'Basic Profile Information',
          description: 'Name, age, photos, and bio for your dating profile',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: true,
          purpose: 'Essential for creating and displaying your dating profile'
        },
        {
          id: 'extended_profile',
          title: 'Extended Profile Details',
          description: 'Education, occupation, interests, and lifestyle preferences',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: false,
          purpose: 'Enhanced matching and profile completeness'
        },
        {
          id: 'personality_data',
          title: 'Personality Assessment Data',
          description: 'Results from personality tests and compatibility assessments',
          status: 'granted',
          granted_date: '2024-12-28',
          expires: null,
          required: false,
          purpose: 'Improved compatibility matching and recommendations'
        }
      ]
    },
    {
      id: 'matching_algorithms',
      name: 'Matching & Recommendations',
      icon: Heart,
      description: 'Use of your data for matching algorithms and suggestions',
      consents: [
        {
          id: 'basic_matching',
          title: 'Basic Matching Algorithm',
          description: 'Use profile data for finding compatible matches',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: true,
          purpose: 'Core functionality for finding potential matches'
        },
        {
          id: 'ai_matching',
          title: 'AI-Enhanced Matching',
          description: 'Advanced AI algorithms for improved match quality',
          status: 'granted',
          granted_date: '2024-12-26',
          expires: null,
          required: false,
          purpose: 'Better match accuracy and personalized recommendations'
        },
        {
          id: 'behavioral_matching',
          title: 'Behavioral Pattern Matching',
          description: 'Analysis of app usage patterns for matching improvements',
          status: 'granted',
          granted_date: '2024-12-27',
          expires: null,
          required: false,
          purpose: 'Understanding preferences through behavior for better matches'
        }
      ]
    },
    {
      id: 'communication',
      name: 'Communication & Messaging',
      icon: MessageCircle,
      description: 'Processing of messages and communication data',
      consents: [
        {
          id: 'message_processing',
          title: 'Message Processing',
          description: 'Processing messages for delivery and safety screening',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: true,
          purpose: 'Essential for messaging functionality and user safety'
        },
        {
          id: 'message_analysis',
          title: 'Message Content Analysis',
          description: 'Analysis of message content for safety and quality improvements',
          status: 'granted',
          granted_date: '2024-12-26',
          expires: null,
          required: false,
          purpose: 'Detecting inappropriate content and improving user experience'
        },
        {
          id: 'communication_insights',
          title: 'Communication Insights',
          description: 'Analysis of communication patterns for relationship insights',
          status: 'pending',
          granted_date: null,
          expires: null,
          required: false,
          purpose: 'Providing insights about communication compatibility'
        }
      ]
    },
    {
      id: 'location_services',
      name: 'Location & Geography',
      icon: MapPin,
      description: 'Use of location data for matching and safety features',
      consents: [
        {
          id: 'basic_location',
          title: 'Basic Location Services',
          description: 'City-level location for local matching',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: false,
          purpose: 'Finding matches in your area'
        },
        {
          id: 'precise_location',
          title: 'Precise Location Tracking',
          description: 'Exact location for distance-based matching and safety features',
          status: 'denied',
          granted_date: null,
          expires: null,
          required: false,
          purpose: 'Accurate distance calculations and safety check-ins'
        },
        {
          id: 'location_history',
          title: 'Location History',
          description: 'Storage of location history for travel matching features',
          status: 'denied',
          granted_date: null,
          expires: null,
          required: false,
          purpose: 'Connecting with people you\'ve encountered before'
        }
      ]
    },
    {
      id: 'media_content',
      name: 'Photos & Media',
      icon: Camera,
      description: 'Processing and analysis of photos and media content',
      consents: [
        {
          id: 'photo_processing',
          title: 'Photo Processing',
          description: 'Basic photo processing for profile display',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: true,
          purpose: 'Displaying photos on your profile'
        },
        {
          id: 'photo_verification',
          title: 'Photo Verification Analysis',
          description: 'AI analysis of photos for verification and authenticity',
          status: 'granted',
          granted_date: '2024-12-26',
          expires: null,
          required: false,
          purpose: 'Verifying profile authenticity and preventing fake accounts'
        },
        {
          id: 'facial_recognition',
          title: 'Facial Recognition',
          description: 'Facial recognition for enhanced verification and matching',
          status: 'denied',
          granted_date: null,
          expires: null,
          required: false,
          purpose: 'Advanced verification and potential visual compatibility matching'
        }
      ]
    },
    {
      id: 'marketing_analytics',
      name: 'Marketing & Analytics',
      icon: Settings,
      description: 'Use of data for marketing and app improvement',
      consents: [
        {
          id: 'usage_analytics',
          title: 'Usage Analytics',
          description: 'Anonymous analysis of app usage for improvements',
          status: 'granted',
          granted_date: '2024-12-25',
          expires: null,
          required: false,
          purpose: 'Improving app features and user experience'
        },
        {
          id: 'personalized_marketing',
          title: 'Personalized Marketing',
          description: 'Personalized promotional content and feature recommendations',
          status: 'granted',
          granted_date: '2024-12-27',
          expires: null,
          required: false,
          purpose: 'Showing relevant features and premium upgrade suggestions'
        },
        {
          id: 'third_party_marketing',
          title: 'Third-Party Marketing',
          description: 'Sharing data with marketing partners for targeted ads',
          status: 'denied',
          granted_date: null,
          expires: null,
          required: false,
          purpose: 'Relevant advertising from partner services'
        }
      ]
    }
  ];

  // Consent history
  const consentHistory = [
    {
      date: '2025-01-07',
      action: 'Updated',
      consent: 'Personalized Marketing',
      details: 'Enabled personalized feature recommendations',
      type: 'granted'
    },
    {
      date: '2025-01-05',
      action: 'Denied',
      consent: 'Facial Recognition',
      details: 'Declined facial recognition for verification',
      type: 'denied'
    },
    {
      date: '2025-01-03',
      action: 'Updated',
      consent: 'Location Services',
      details: 'Changed from precise to city-level location',
      type: 'modified'
    },
    {
      date: '2024-12-28',
      action: 'Granted',
      consent: 'Personality Assessment Data',
      details: 'Completed personality test and granted data usage',
      type: 'granted'
    },
    {
      date: '2024-12-27',
      action: 'Granted',
      consent: 'Behavioral Pattern Matching',
      details: 'Enabled behavioral analysis for better matching',
      type: 'granted'
    },
    {
      date: '2024-12-26',
      action: 'Granted',
      consent: 'AI-Enhanced Matching',
      details: 'Enabled advanced AI matching algorithms',
      type: 'granted'
    },
    {
      date: '2024-12-25',
      action: 'Initial Setup',
      consent: 'Basic Profile & Matching',
      details: 'Account creation with essential consents',
      type: 'granted'
    }
  ];

  // Consent statistics
  const consentStats = {
    total_consents: 18,
    granted: 12,
    denied: 4,
    pending: 2,
    expired: 0,
    last_updated: '2025-01-07'
  };

  // Pending consent requests
  const pendingConsents = [
    {
      id: 'communication_insights',
      title: 'Communication Insights',
      description: 'Analyze your communication patterns to provide relationship compatibility insights',
      category: 'Communication & Messaging',
      benefits: ['Better compatibility matching', 'Relationship advice', 'Communication tips'],
      risks: ['Message content analysis', 'Pattern tracking'],
      expires: '2025-01-14'
    },
    {
      id: 'advanced_safety',
      title: 'Advanced Safety Features',
      description: 'Enhanced safety monitoring including background check integration',
      category: 'Safety & Security',
      benefits: ['Enhanced safety verification', 'Background check alerts', 'Improved fraud detection'],
      risks: ['Additional personal data collection', 'Third-party data sharing'],
      expires: '2025-01-10'
    }
  ];

  const getAllConsents = () => {
    return consentCategories.flatMap(category => 
      category.consents.map(consent => ({
        ...consent,
        category: category.name,
        category_id: category.id
      }))
    );
  };

  const getFilteredConsents = () => {
    const allConsents = getAllConsents();
    
    let filtered = allConsents;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(consent => consent.category_id === selectedCategory);
    }
    
    if (consentFilter !== 'all') {
      filtered = filtered.filter(consent => consent.status === consentFilter);
    }
    
    return filtered;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'granted': return 'text-green-600 bg-green-100';
      case 'denied': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'expired': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'granted': return <CheckCircle className="w-4 h-4" />;
      case 'denied': return <XCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'expired': return <AlertTriangle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const getHistoryIcon = (type) => {
    switch (type) {
      case 'granted': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'denied': return <XCircle className="w-4 h-4 text-red-600" />;
      case 'modified': return <Edit className="w-4 h-4 text-blue-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const handleConsentChange = (consentId, newStatus) => {
    // Handle consent status change
    console.log(`Changing consent ${consentId} to ${newStatus}`);
    // In a real app, this would update the backend
  };

  const handleBulkAction = (action) => {
    // Handle bulk consent actions
    console.log(`Performing bulk action: ${action}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-600" />
              User Consent Management
            </h1>
            <p className="text-gray-600">
              Manage your data usage permissions and understand how your information is processed
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {consentCategories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
            
            <select
              value={consentFilter}
              onChange={(e) => setConsentFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="granted">Granted</option>
              <option value="denied">Denied</option>
              <option value="pending">Pending</option>
            </select>
            
            <button
              onClick={() => setShowHistory(!showHistory)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                showHistory 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              {showHistory ? 'Hide' : 'Show'} History
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Download className="w-4 h-4" />
              Export Consents
            </button>
          </div>
        </div>
      </div>

      {/* Consent Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">{consentStats.total_consents}</div>
          <div className="text-sm text-gray-600">Total Consents</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-green-600">{consentStats.granted}</div>
          <div className="text-sm text-gray-600">Granted</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-red-600">{consentStats.denied}</div>
          <div className="text-sm text-gray-600">Denied</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">{consentStats.pending}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-2xl font-bold text-gray-600">{consentStats.expired}</div>
          <div className="text-sm text-gray-600">Expired</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Pending Consent Requests */}
          {pendingConsents.length > 0 && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Pending Requests</h3>
              <div className="space-y-3">
                {pendingConsents.map((consent) => (
                  <div key={consent.id} className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="font-medium text-gray-900 mb-1">{consent.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{consent.description}</div>
                    <div className="text-xs text-gray-500 mb-3">Expires: {consent.expires}</div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleConsentChange(consent.id, 'granted')}
                        className="flex-1 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                      >
                        Grant
                      </button>
                      <button 
                        onClick={() => handleConsentChange(consent.id, 'denied')}
                        className="flex-1 px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                      >
                        Deny
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consent Categories */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Categories
              </button>
              {consentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleBulkAction('grant_all_optional')}
                className="w-full px-3 py-2 text-left text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Grant All Optional
              </button>
              <button 
                onClick={() => handleBulkAction('deny_all_marketing')}
                className="w-full px-3 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Deny All Marketing
              </button>
              <button 
                onClick={() => handleBulkAction('review_required')}
                className="w-full px-3 py-2 text-left text-yellow-600 hover:bg-yellow-50 rounded-lg transition-colors"
              >
                Review Required Only
              </button>
              <button 
                onClick={() => handleBulkAction('export_consents')}
                className="w-full px-3 py-2 text-left text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                Export All Consents
              </button>
            </div>
          </div>

          {/* Consent History */}
          {showHistory && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Recent Changes</h3>
              <div className="space-y-3">
                {consentHistory.slice(0, 5).map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getHistoryIcon(event.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{event.action}: {event.consent}</p>
                      <p className="text-xs text-gray-600 mb-1">{event.details}</p>
                      <p className="text-xs text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {selectedCategory === 'all' ? (
            // Show all categories
            consentCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-5 h-5 text-green-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {category.consents.map((consent) => (
                    <div key={consent.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900">{consent.title}</h4>
                            {consent.required && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                Required
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{consent.description}</p>
                          <p className="text-xs text-gray-500">{consent.purpose}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${getStatusColor(consent.status)}`}>
                            {getStatusIcon(consent.status)}
                            {consent.status}
                          </span>
                          {!consent.required && (
                            <div className="flex gap-1">
                              <button
                                onClick={() => handleConsentChange(consent.id, 'granted')}
                                className={`px-3 py-1 text-sm rounded transition-colors ${
                                  consent.status === 'granted' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                                }`}
                              >
                                Grant
                              </button>
                              <button
                                onClick={() => handleConsentChange(consent.id, 'denied')}
                                className={`px-3 py-1 text-sm rounded transition-colors ${
                                  consent.status === 'denied' 
                                    ? 'bg-red-600 text-white' 
                                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                                }`}
                              >
                                Deny
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                      {consent.granted_date && (
                        <div className="text-xs text-gray-500">
                          Granted: {consent.granted_date}
                          {consent.expires && ` | Expires: ${consent.expires}`}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Show specific category
            (() => {
              const category = consentCategories.find(cat => cat.id === selectedCategory);
              return category ? (
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {category.consents.map((consent) => (
                      <div key={consent.id} className="p-6 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-lg font-medium text-gray-900">{consent.title}</h4>
                              {consent.required && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                                  Required
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 mb-3">{consent.description}</p>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-700"><strong>Purpose:</strong> {consent.purpose}</p>
                            </div>
                          </div>
                          <div className="ml-6">
                            <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(consent.status)}`}>
                              {getStatusIcon(consent.status)}
                              {consent.status}
                            </span>
                          </div>
                        </div>
                        
                        {!consent.required && (
                          <div className="flex gap-3 mb-4">
                            <button
                              onClick={() => handleConsentChange(consent.id, 'granted')}
                              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                consent.status === 'granted' 
                                  ? 'bg-green-600 text-white' 
                                  : 'bg-green-100 text-green-700 hover:bg-green-200'
                              }`}
                            >
                              Grant Consent
                            </button>
                            <button
                              onClick={() => handleConsentChange(consent.id, 'denied')}
                              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                consent.status === 'denied' 
                                  ? 'bg-red-600 text-white' 
                                  : 'bg-red-100 text-red-700 hover:bg-red-200'
                              }`}
                            >
                              Deny Consent
                            </button>
                          </div>
                        )}
                        
                        {consent.granted_date && (
                          <div className="text-sm text-gray-500 border-t border-gray-200 pt-3">
                            <div className="flex justify-between">
                              <span>Granted: {consent.granted_date}</span>
                              {consent.expires && <span>Expires: {consent.expires}</span>}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null;
            })()
          )}
        </div>
      </div>
    </div>
  );
};

export default UserConsentManagement;

