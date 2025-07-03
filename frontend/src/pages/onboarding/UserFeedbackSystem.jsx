import React, { useState, useRef } from 'react';
import { 
  Star, ThumbsUp, ThumbsDown, MessageSquare, Send, 
  Camera, Paperclip, Smile, Frown, Meh, Heart,
  Bug, Lightbulb, AlertTriangle, CheckCircle, 
  Filter, Search, Calendar, User, Tag, Award,
  TrendingUp, BarChart3, Users, Clock, Eye,
  Plus, Edit3, Trash2, Flag, Share2, Download
} from 'lucide-react';

const UserFeedbackSystem = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [feedbackType, setFeedbackType] = useState('general');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState('medium');
  const [attachments, setAttachments] = useState([]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('');
  
  const fileInputRef = useRef(null);

  // Sample feedback data
  const feedbackHistory = [
    {
      id: 1,
      type: 'suggestion',
      title: 'Add dark mode option',
      description: 'Would love to have a dark mode for evening use',
      category: 'UI/UX',
      rating: 4,
      status: 'in-progress',
      date: '2025-06-28',
      upvotes: 23,
      comments: 5,
      priority: 'medium'
    },
    {
      id: 2,
      type: 'bug',
      title: 'Calendar sync issue',
      description: 'Events not syncing properly with Google Calendar',
      category: 'Integration',
      rating: 2,
      status: 'resolved',
      date: '2025-06-25',
      upvotes: 8,
      comments: 12,
      priority: 'high'
    },
    {
      id: 3,
      type: 'feature',
      title: 'Voice message support',
      description: 'Allow voice messages in couple communication',
      category: 'Communication',
      rating: 5,
      status: 'planned',
      date: '2025-06-20',
      upvotes: 45,
      comments: 18,
      priority: 'low'
    }
  ];

  // Sample community feedback
  const communityFeedback = [
    {
      id: 4,
      type: 'suggestion',
      title: 'Meditation timer for couples',
      description: 'A shared meditation timer that both partners can use together',
      author: 'Sarah M.',
      category: 'Wellness',
      upvotes: 67,
      comments: 24,
      date: '2025-07-01',
      status: 'under-review'
    },
    {
      id: 5,
      type: 'feature',
      title: 'Relationship milestone tracker',
      description: 'Track and celebrate important relationship milestones automatically',
      author: 'Mike & Jenny',
      category: 'Features',
      upvotes: 89,
      comments: 31,
      date: '2025-06-30',
      status: 'planned'
    }
  ];

  const feedbackTypes = [
    { id: 'general', name: 'General Feedback', icon: MessageSquare, color: 'blue' },
    { id: 'bug', name: 'Bug Report', icon: Bug, color: 'red' },
    { id: 'feature', name: 'Feature Request', icon: Lightbulb, color: 'yellow' },
    { id: 'suggestion', name: 'Suggestion', icon: TrendingUp, color: 'green' }
  ];

  const categories = [
    'UI/UX', 'Communication', 'Features', 'Performance', 'Integration', 
    'Content', 'Analytics', 'Mobile', 'Wellness', 'Gaming', 'Other'
  ];

  const features = [
    'Daily Connection Hub', 'Couples Games', 'Relationship Toolkit', 
    'Analytics Dashboard', 'Coaching Sessions', 'Event Access',
    'Content Creation', 'Mobile App', 'Notifications', 'Profile Settings'
  ];

  const priorities = [
    { value: 'low', label: 'Low', color: 'green' },
    { value: 'medium', label: 'Medium', color: 'yellow' },
    { value: 'high', label: 'High', color: 'red' }
  ];

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmitFeedback = () => {
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    const feedbackData = {
      type: feedbackType,
      title,
      description,
      category,
      priority,
      rating,
      feature: selectedFeature,
      attachments: attachments.map(file => file.name),
      anonymous: isAnonymous,
      date: new Date().toISOString().split('T')[0]
    };

    console.log('Submitting feedback:', feedbackData);
    alert('Thank you for your feedback! We\'ll review it and get back to you soon.');
    
    // Reset form
    setTitle('');
    setDescription('');
    setRating(0);
    setCategory('');
    setSelectedFeature('');
    setAttachments([]);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'submitted': { color: 'bg-blue-100 text-blue-700', text: 'Submitted' },
      'under-review': { color: 'bg-yellow-100 text-yellow-700', text: 'Under Review' },
      'in-progress': { color: 'bg-purple-100 text-purple-700', text: 'In Progress' },
      'planned': { color: 'bg-indigo-100 text-indigo-700', text: 'Planned' },
      'resolved': { color: 'bg-green-100 text-green-700', text: 'Resolved' },
      'closed': { color: 'bg-gray-100 text-gray-700', text: 'Closed' }
    };
    
    const config = statusConfig[status] || statusConfig['submitted'];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      'low': { color: 'bg-green-100 text-green-700', text: 'Low' },
      'medium': { color: 'bg-yellow-100 text-yellow-700', text: 'Medium' },
      'high': { color: 'bg-red-100 text-red-700', text: 'High' }
    };
    
    const config = priorityConfig[priority] || priorityConfig['medium'];
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.text}
      </span>
    );
  };

  const renderFeedbackCard = (feedback, showAuthor = false) => (
    <div key={feedback.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              feedback.type === 'bug' ? 'bg-red-100 text-red-700' :
              feedback.type === 'feature' ? 'bg-blue-100 text-blue-700' :
              feedback.type === 'suggestion' ? 'bg-green-100 text-green-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {feedback.type}
            </span>
            <span className="text-xs text-gray-500">{feedback.category}</span>
            {feedback.priority && getPriorityBadge(feedback.priority)}
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{feedback.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{feedback.description}</p>
          {showAuthor && feedback.author && (
            <p className="text-xs text-gray-500 mb-2">by {feedback.author}</p>
          )}
        </div>
        <div className="text-right">
          {feedback.status && getStatusBadge(feedback.status)}
          {feedback.rating && (
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {feedback.date}
          </span>
          <span className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            {feedback.upvotes}
          </span>
          <span className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            {feedback.comments}
          </span>
        </div>
        <div className="flex space-x-2">
          <button className="text-purple-600 hover:text-purple-700">
            <Eye className="w-4 h-4" />
          </button>
          <button className="text-purple-600 hover:text-purple-700">
            <ThumbsUp className="w-4 h-4" />
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
            User Feedback System
          </h1>
          <p className="text-gray-600">
            Share your thoughts, report issues, and help us improve your Flourish experience
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'submit', label: 'Submit Feedback', icon: Plus },
            { id: 'my-feedback', label: 'My Feedback', icon: User },
            { id: 'community', label: 'Community Ideas', icon: Users },
            { id: 'insights', label: 'Feedback Insights', icon: BarChart3 }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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

        {/* Submit Feedback Tab */}
        {activeTab === 'submit' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Submit Your Feedback</h2>
            
            {/* Feedback Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Feedback Type
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {feedbackTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFeedbackType(type.id)}
                      className={`p-4 border rounded-lg text-center transition-colors ${
                        feedbackType === type.id
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                        feedbackType === type.id ? 'text-purple-600' : 'text-gray-400'
                      }`} />
                      <div className="text-sm font-medium">{type.name}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Brief summary of your feedback"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Feature Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Related Feature (Optional)
              </label>
              <select
                value={selectedFeature}
                onChange={(e) => setSelectedFeature(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select a feature</option>
                {features.map((feature) => (
                  <option key={feature} value={feature}>{feature}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide detailed information about your feedback..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Rating */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overall Rating
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="transition-colors"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoverRating || rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-sm text-gray-600 ml-4">
                  {rating > 0 && `${rating} out of 5 stars`}
                </span>
              </div>
            </div>

            {/* Priority */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority Level
              </label>
              <div className="flex space-x-4">
                {priorities.map((p) => (
                  <button
                    key={p.value}
                    onClick={() => setPriority(p.value)}
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                      priority === p.value
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Attachments */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attachments (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">Upload screenshots or files</p>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Choose Files
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
              
              {attachments.length > 0 && (
                <div className="mt-4 space-y-2">
                  {attachments.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <span className="text-sm text-gray-700">{file.name}</span>
                      <button
                        onClick={() => removeAttachment(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Anonymous Option */}
            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Submit anonymously
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmitFeedback}
                className="flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Feedback
              </button>
            </div>
          </div>
        )}

        {/* My Feedback Tab */}
        {activeTab === 'my-feedback' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Feedback History</h2>
              <button
                onClick={() => setActiveTab('submit')}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Feedback
              </button>
            </div>
            
            <div className="space-y-6">
              {feedbackHistory.map(feedback => renderFeedbackCard(feedback))}
            </div>
          </div>
        )}

        {/* Community Ideas Tab */}
        {activeTab === 'community' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Community Feedback</h2>
              <p className="text-gray-600">See what other users are suggesting and vote on ideas you like</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search community feedback..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Most Popular</option>
                <option>Most Recent</option>
                <option>Most Comments</option>
              </select>
            </div>
            
            <div className="space-y-6">
              {communityFeedback.map(feedback => renderFeedbackCard(feedback, true))}
            </div>
          </div>
        )}

        {/* Feedback Insights Tab */}
        {activeTab === 'insights' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Feedback Insights</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Feedback</p>
                    <p className="text-2xl font-bold text-gray-900">1,247</p>
                  </div>
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Average Rating</p>
                    <p className="text-2xl font-bold text-gray-900">4.6</p>
                  </div>
                  <Star className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Response Rate</p>
                    <p className="text-2xl font-bold text-gray-900">94%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Updates</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Dark mode feature implemented</p>
                    <p className="text-xs text-gray-600">Based on 23 user requests</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Calendar sync improvements in progress</p>
                    <p className="text-xs text-gray-600">Addressing 8 reported issues</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Voice message feature planned for next release</p>
                    <p className="text-xs text-gray-600">45 upvotes from community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserFeedbackSystem;

