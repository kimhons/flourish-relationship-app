import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Star, 
  Send, 
  Upload, 
  Filter, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  BarChart3, 
  Eye, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
  Search,
  Download,
  Tag,
  Calendar,
  User,
  Mail,
  Phone,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Settings,
  Bell,
  Shield,
  Heart,
  Target,
  Zap,
  Award,
  Lightbulb,
  FileText,
  Image,
  Video,
  Mic,
  Link,
  Share2,
  Archive,
  Trash2,
  Edit3,
  Flag,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Plus,
  X,
  Check,
  Info,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const FeedbackCollectionSystem = () => {
  const [activeTab, setActiveTab] = useState('collect');
  const [feedbackType, setFeedbackType] = useState('general');
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');
  const [feedbackList, setFeedbackList] = useState([]);
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    rating: 'all',
    dateRange: '30days'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Feedback categories
  const categories = [
    { id: 'ui_ux', label: 'User Interface & Experience', icon: Monitor },
    { id: 'features', label: 'Features & Functionality', icon: Settings },
    { id: 'performance', label: 'Performance & Speed', icon: Zap },
    { id: 'content', label: 'Content Quality', icon: FileText },
    { id: 'coaching', label: 'Coaching & Guidance', icon: Target },
    { id: 'community', label: 'Community Features', icon: Users },
    { id: 'mobile', label: 'Mobile Experience', icon: Smartphone },
    { id: 'accessibility', label: 'Accessibility', icon: Eye },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'billing', label: 'Billing & Subscriptions', icon: Award },
    { id: 'support', label: 'Customer Support', icon: HelpCircle },
    { id: 'other', label: 'Other', icon: MessageCircle }
  ];

  // Feedback types
  const feedbackTypes = [
    { id: 'bug', label: 'Bug Report', icon: AlertCircle, color: 'text-red-600' },
    { id: 'feature', label: 'Feature Request', icon: Lightbulb, color: 'text-blue-600' },
    { id: 'improvement', label: 'Improvement Suggestion', icon: TrendingUp, color: 'text-green-600' },
    { id: 'compliment', label: 'Compliment', icon: Heart, color: 'text-pink-600' },
    { id: 'complaint', label: 'Complaint', icon: Flag, color: 'text-orange-600' },
    { id: 'general', label: 'General Feedback', icon: MessageSquare, color: 'text-gray-600' }
  ];

  // Sample feedback data
  useEffect(() => {
    const sampleFeedback = [
      {
        id: 1,
        type: 'feature',
        category: 'ui_ux',
        title: 'Dark mode for better night usage',
        content: 'Would love to have a dark mode option for using the app at night without straining my eyes.',
        rating: 4,
        status: 'under_review',
        priority: 'medium',
        author: 'Sarah M.',
        date: '2025-01-02',
        device: 'mobile',
        votes: { up: 23, down: 2 },
        responses: 3,
        tags: ['ui', 'accessibility', 'mobile'],
        anonymous: false
      },
      {
        id: 2,
        type: 'bug',
        category: 'performance',
        title: 'App crashes when uploading photos',
        content: 'The app consistently crashes when I try to upload photos to my relationship timeline. This happens on both WiFi and cellular.',
        rating: 2,
        status: 'in_progress',
        priority: 'high',
        author: 'Anonymous',
        date: '2025-01-01',
        device: 'mobile',
        votes: { up: 15, down: 1 },
        responses: 5,
        tags: ['crash', 'photos', 'mobile'],
        anonymous: true
      },
      {
        id: 3,
        type: 'compliment',
        category: 'coaching',
        title: 'Amazing AI coaching insights',
        content: 'The AI coaching feature has been incredibly helpful for our relationship. The insights are spot-on and the suggestions are practical.',
        rating: 5,
        status: 'acknowledged',
        priority: 'low',
        author: 'Mike & Lisa',
        date: '2024-12-30',
        device: 'desktop',
        votes: { up: 45, down: 0 },
        responses: 8,
        tags: ['ai', 'coaching', 'positive'],
        anonymous: false
      }
    ];
    setFeedbackList(sampleFeedback);
  }, []);

  // Analytics data
  const analyticsData = {
    totalFeedback: 1247,
    averageRating: 4.2,
    responseRate: 89,
    resolutionTime: 2.3,
    categoryBreakdown: [
      { category: 'UI/UX', count: 324, percentage: 26 },
      { category: 'Features', count: 298, percentage: 24 },
      { category: 'Performance', count: 187, percentage: 15 },
      { category: 'Content', count: 156, percentage: 12 },
      { category: 'Mobile', count: 134, percentage: 11 },
      { category: 'Other', count: 148, percentage: 12 }
    ],
    sentimentTrend: [
      { month: 'Jul', positive: 78, neutral: 15, negative: 7 },
      { month: 'Aug', positive: 82, neutral: 12, negative: 6 },
      { month: 'Sep', positive: 85, neutral: 10, negative: 5 },
      { month: 'Oct', positive: 88, neutral: 8, negative: 4 },
      { month: 'Nov', positive: 91, neutral: 6, negative: 3 },
      { month: 'Dec', positive: 93, neutral: 5, negative: 2 }
    ]
  };

  const handleSubmitFeedback = async () => {
    if (!feedbackText.trim() || !category) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newFeedback = {
      id: Date.now(),
      type: feedbackType,
      category,
      title: feedbackText.substring(0, 50) + (feedbackText.length > 50 ? '...' : ''),
      content: feedbackText,
      rating,
      status: 'pending',
      priority,
      author: isAnonymous ? 'Anonymous' : 'Current User',
      date: new Date().toISOString().split('T')[0],
      device: 'current',
      votes: { up: 0, down: 0 },
      responses: 0,
      tags: [],
      anonymous: isAnonymous,
      attachments
    };
    
    setFeedbackList(prev => [newFeedback, ...prev]);
    setFeedbackText('');
    setRating(0);
    setCategory('');
    setAttachments([]);
    setIsSubmitting(false);
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const newAttachments = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type
    }));
    setAttachments(prev => [...prev, ...newAttachments]);
  };

  const removeAttachment = (id) => {
    setAttachments(prev => prev.filter(att => att.id !== id));
  };

  const filteredFeedback = feedbackList.filter(feedback => {
    const matchesSearch = feedback.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filters.status === 'all' || feedback.status === filters.status;
    const matchesType = filters.type === 'all' || feedback.type === filters.type;
    const matchesRating = filters.rating === 'all' || 
                         (filters.rating === 'high' && feedback.rating >= 4) ||
                         (filters.rating === 'medium' && feedback.rating === 3) ||
                         (filters.rating === 'low' && feedback.rating <= 2);
    
    return matchesSearch && matchesStatus && matchesType && matchesRating;
  });

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      under_review: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-purple-100 text-purple-800',
      resolved: 'bg-green-100 text-green-800',
      acknowledged: 'bg-gray-100 text-gray-800',
      closed: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'text-green-600',
      medium: 'text-yellow-600',
      high: 'text-red-600',
      critical: 'text-red-800'
    };
    return colors[priority] || 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Feedback Collection System</h1>
              <p className="mt-2 text-gray-600">Share your thoughts and help us improve your experience</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-semibold">{analyticsData.totalFeedback} Total Feedback</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'collect', label: 'Submit Feedback', icon: Send },
              { id: 'browse', label: 'Browse Feedback', icon: Search },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-pink-500 text-pink-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Submit Feedback Tab */}
        {activeTab === 'collect' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Submit Your Feedback</h2>
                <p className="text-gray-600">Your feedback helps us create a better experience for all couples</p>
              </div>

              {/* Feedback Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Feedback Type</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {feedbackTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFeedbackType(type.id)}
                      className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                        feedbackType === type.id
                          ? 'border-pink-500 bg-pink-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <type.icon className={`h-5 w-5 ${type.color}`} />
                      <span className="font-medium text-gray-900">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Overall Rating</label>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className={`p-1 transition-colors ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'
                      }`}
                    >
                      <Star className="h-8 w-8 fill-current" />
                    </button>
                  ))}
                  <span className="ml-3 text-gray-600">
                    {rating > 0 ? `${rating} star${rating !== 1 ? 's' : ''}` : 'No rating'}
                  </span>
                </div>
              </div>

              {/* Feedback Content */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Your Feedback</label>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Please share your detailed feedback, suggestions, or report any issues you've encountered..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />
                <div className="mt-2 text-sm text-gray-500">
                  {feedbackText.length}/1000 characters
                </div>
              </div>

              {/* File Attachments */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Attachments (Optional)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-4">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <span className="mt-2 block text-sm font-medium text-gray-900">
                          Upload screenshots, videos, or documents
                        </span>
                        <span className="mt-1 block text-sm text-gray-500">
                          PNG, JPG, GIF, MP4, PDF up to 10MB each
                        </span>
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        accept="image/*,video/*,.pdf"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Attachment List */}
                {attachments.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {attachments.map((attachment) => (
                      <div key={attachment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{attachment.name}</p>
                            <p className="text-xs text-gray-500">{(attachment.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeAttachment(attachment.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Priority and Options */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Priority Level</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="low">Low - General suggestion</option>
                    <option value="medium">Medium - Improvement needed</option>
                    <option value="high">High - Significant issue</option>
                    <option value="critical">Critical - Blocking issue</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-center">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="h-5 w-5 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Submit anonymously</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmitFeedback}
                  disabled={!feedbackText.trim() || !category || isSubmitting}
                  className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-pink-600 hover:to-purple-700 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="h-5 w-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Feedback</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Feedback submitted successfully!</span>
              </div>
            )}
          </div>
        )}

        {/* Browse Feedback Tab */}
        {activeTab === 'browse' && (
          <div>
            {/* Filters and Search */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search feedback..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="under_review">Under Review</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                    <option value="acknowledged">Acknowledged</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    {feedbackTypes.map((type) => (
                      <option key={type.id} value={type.id}>{type.label}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select
                    value={filters.rating}
                    onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="all">All Ratings</option>
                    <option value="high">High (4-5 stars)</option>
                    <option value="medium">Medium (3 stars)</option>
                    <option value="low">Low (1-2 stars)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <select
                    value={filters.dateRange}
                    onChange={(e) => setFilters(prev => ({ ...prev, dateRange: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="7days">Last 7 days</option>
                    <option value="30days">Last 30 days</option>
                    <option value="90days">Last 90 days</option>
                    <option value="all">All time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Feedback List */}
            <div className="space-y-6">
              {filteredFeedback.map((feedback) => (
                <div key={feedback.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        feedbackTypes.find(t => t.id === feedback.type)?.color.includes('red') ? 'bg-red-100' :
                        feedbackTypes.find(t => t.id === feedback.type)?.color.includes('blue') ? 'bg-blue-100' :
                        feedbackTypes.find(t => t.id === feedback.type)?.color.includes('green') ? 'bg-green-100' :
                        feedbackTypes.find(t => t.id === feedback.type)?.color.includes('pink') ? 'bg-pink-100' :
                        feedbackTypes.find(t => t.id === feedback.type)?.color.includes('orange') ? 'bg-orange-100' :
                        'bg-gray-100'
                      }`}>
                        {React.createElement(feedbackTypes.find(t => t.id === feedback.type)?.icon || MessageSquare, {
                          className: `h-5 w-5 ${feedbackTypes.find(t => t.id === feedback.type)?.color || 'text-gray-600'}`
                        })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feedback.title}</h3>
                        <p className="text-gray-600 mb-3">{feedback.content}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{feedback.author}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{feedback.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            {feedback.device === 'mobile' ? <Smartphone className="h-4 w-4" /> : 
                             feedback.device === 'tablet' ? <Tablet className="h-4 w-4" /> : 
                             <Monitor className="h-4 w-4" />}
                            <span className="capitalize">{feedback.device}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {feedback.rating > 0 && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{feedback.rating}</span>
                        </div>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(feedback.status)}`}>
                        {feedback.status.replace('_', ' ').toUpperCase()}
                      </span>
                      <span className={`text-sm font-medium ${getPriorityColor(feedback.priority)}`}>
                        {feedback.priority.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  {feedback.tags.length > 0 && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Tag className="h-4 w-4 text-gray-400" />
                      <div className="flex flex-wrap gap-2">
                        {feedback.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="text-sm">{feedback.votes.up}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-red-600 transition-colors">
                        <ThumbsDown className="h-4 w-4" />
                        <span className="text-sm">{feedback.votes.down}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{feedback.responses} responses</span>
                      </button>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {filteredFeedback.length === 0 && (
                <div className="text-center py-12">
                  <MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No feedback found</h3>
                  <p className="mt-2 text-gray-500">Try adjusting your filters or search terms</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Feedback</p>
                    <p className="text-3xl font-bold text-gray-900">{analyticsData.totalFeedback.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+12% from last month</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Average Rating</p>
                    <p className="text-3xl font-bold text-gray-900">{analyticsData.averageRating}</p>
                  </div>
                  <div className="p-3 bg-yellow-100 rounded-lg">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+0.3 from last month</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Response Rate</p>
                    <p className="text-3xl font-bold text-gray-900">{analyticsData.responseRate}%</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+5% from last month</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Resolution Time</p>
                    <p className="text-3xl font-bold text-gray-900">{analyticsData.resolutionTime} days</p>
                  </div>
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">-0.5 days improvement</span>
                </div>
              </div>
            </div>

            {/* Category Breakdown */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Feedback by Category</h3>
              <div className="space-y-4">
                {analyticsData.categoryBreakdown.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                      <span className="font-medium text-gray-900">{category.category}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                          style={{ width: `${category.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-600 w-12 text-right">
                        {category.percentage}%
                      </span>
                      <span className="text-sm text-gray-500 w-16 text-right">
                        {category.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Trend */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Sentiment Trend</h3>
              <div className="space-y-4">
                {analyticsData.sentimentTrend.map((month, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium text-gray-600">{month.month}</div>
                    <div className="flex-1 flex h-6 rounded-full overflow-hidden">
                      <div 
                        className="bg-green-500"
                        style={{ width: `${month.positive}%` }}
                        title={`Positive: ${month.positive}%`}
                      ></div>
                      <div 
                        className="bg-yellow-500"
                        style={{ width: `${month.neutral}%` }}
                        title={`Neutral: ${month.neutral}%`}
                      ></div>
                      <div 
                        className="bg-red-500"
                        style={{ width: `${month.negative}%` }}
                        title={`Negative: ${month.negative}%`}
                      ></div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-green-600">{month.positive}%</span>
                      <span className="text-yellow-600">{month.neutral}%</span>
                      <span className="text-red-600">{month.negative}%</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Positive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Neutral</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Negative</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackCollectionSystem;

