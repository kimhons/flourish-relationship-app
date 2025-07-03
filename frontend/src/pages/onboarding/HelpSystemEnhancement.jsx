import React, { useState, useEffect } from 'react';
import { 
  Search, 
  HelpCircle, 
  Book, 
  Video, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronRight, 
  ChevronDown, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  ExternalLink, 
  Download, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  FastForward, 
  SkipBack, 
  SkipForward, 
  Maximize, 
  Minimize, 
  X, 
  Plus, 
  Minus, 
  Edit, 
  Save, 
  Share, 
  Bookmark, 
  Flag, 
  Archive, 
  Trash2, 
  MoreHorizontal, 
  Filter, 
  SortAsc, 
  Grid, 
  List, 
  Tag, 
  Clock, 
  User, 
  Users, 
  Globe, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Wifi, 
  Settings, 
  Shield, 
  Lock, 
  Key, 
  Bell, 
  Calendar, 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Heart, 
  Target, 
  Award, 
  Trophy, 
  Gift, 
  Sparkles, 
  Zap, 
  Lightbulb, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  Upload, 
  Camera, 
  MapPin, 
  Headphones, 
  Mic, 
  MicOff, 
  Volume1, 
  VolumeOff, 
  Repeat, 
  Shuffle, 
  Home, 
  Menu, 
  Navigation, 
  Compass 
} from 'lucide-react';

const HelpSystemEnhancement = () => {
  const [activeTab, setActiveTab] = useState('help-center');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [helpRating, setHelpRating] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState({});

  // Help categories
  const helpCategories = [
    { id: 'all', label: 'All Topics', icon: Grid, count: 156 },
    { id: 'getting-started', label: 'Getting Started', icon: Play, count: 24 },
    { id: 'relationship-tools', label: 'Relationship Tools', icon: Heart, count: 32 },
    { id: 'ai-coaching', label: 'AI Coaching', icon: MessageSquare, count: 18 },
    { id: 'assessments', label: 'Assessments', icon: BarChart3, count: 15 },
    { id: 'premium-features', label: 'Premium Features', icon: Star, count: 22 },
    { id: 'account-billing', label: 'Account & Billing', icon: User, count: 19 },
    { id: 'technical-support', label: 'Technical Support', icon: Settings, count: 26 }
  ];

  // FAQ data
  const faqData = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I create my first relationship goal?',
      answer: 'To create your first relationship goal, navigate to the Goals section in your dashboard. Click "Add New Goal" and choose from our pre-defined templates or create a custom goal. Set a timeline, add specific actions, and invite your partner to collaborate.',
      helpful: 89,
      views: 1247,
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
      category: 'ai-coaching',
      question: 'How does Dr. Love AI coaching work?',
      answer: 'Dr. Love uses advanced AI to provide personalized relationship advice based on your interactions, goals, and assessment results. The AI learns from your patterns and provides contextual guidance, exercise recommendations, and conflict resolution strategies.',
      helpful: 94,
      views: 2156,
      lastUpdated: '2024-01-20'
    },
    {
      id: 3,
      category: 'premium-features',
      question: 'What\'s included in the Premium subscription?',
      answer: 'Premium includes unlimited AI coaching sessions, advanced analytics, exclusive content library, priority support, couples assessments, expert-led workshops, and access to professional relationship coaches.',
      helpful: 91,
      views: 1834,
      lastUpdated: '2024-01-18'
    },
    {
      id: 4,
      category: 'technical-support',
      question: 'Why isn\'t my data syncing across devices?',
      answer: 'Data sync issues can occur due to poor internet connection or outdated app versions. Try refreshing the app, checking your internet connection, and ensuring you\'re logged into the same account on all devices. If issues persist, contact support.',
      helpful: 76,
      views: 892,
      lastUpdated: '2024-01-22'
    },
    {
      id: 5,
      category: 'relationship-tools',
      question: 'How often should we do relationship exercises?',
      answer: 'We recommend starting with 2-3 exercises per week, focusing on areas identified in your relationship assessment. Consistency is more important than frequency - even 10 minutes daily can make a significant impact on your relationship.',
      helpful: 88,
      views: 1567,
      lastUpdated: '2024-01-16'
    }
  ];

  // Help articles
  const helpArticles = [
    {
      id: 1,
      title: 'Complete Guide to Relationship Goal Setting',
      category: 'getting-started',
      type: 'article',
      readTime: '8 min',
      difficulty: 'Beginner',
      rating: 4.8,
      views: 3421,
      description: 'Learn how to set meaningful, achievable relationship goals that strengthen your bond.',
      content: 'Detailed article content would go here...',
      lastUpdated: '2024-01-20'
    },
    {
      id: 2,
      title: 'Mastering Daily Check-ins',
      category: 'relationship-tools',
      type: 'video',
      duration: '12 min',
      difficulty: 'Beginner',
      rating: 4.9,
      views: 2876,
      description: 'Video tutorial on how to make the most of your daily relationship check-ins.',
      videoUrl: '/videos/daily-checkins.mp4',
      lastUpdated: '2024-01-18'
    },
    {
      id: 3,
      title: 'Advanced AI Coaching Techniques',
      category: 'ai-coaching',
      type: 'interactive',
      duration: '15 min',
      difficulty: 'Advanced',
      rating: 4.7,
      views: 1543,
      description: 'Interactive guide to getting the most from Dr. Love AI coaching.',
      lastUpdated: '2024-01-22'
    }
  ];

  // Contact options
  const contactOptions = [
    {
      type: 'live-chat',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available now',
      responseTime: 'Usually responds in 2-3 minutes',
      icon: MessageSquare,
      available: true
    },
    {
      type: 'email',
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: 'Usually responds within 4 hours',
      icon: Mail,
      available: true
    },
    {
      type: 'phone',
      title: 'Phone Support',
      description: 'Speak directly with a specialist',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Call now: +1 (555) 123-4567',
      icon: Phone,
      available: false
    },
    {
      type: 'video-call',
      title: 'Video Consultation',
      description: 'Schedule a video call with an expert',
      availability: 'Premium feature',
      responseTime: 'Book 30-min session',
      icon: Video,
      available: true
    }
  ];

  const filteredFAQs = faqData.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (searchQuery === '' || 
     faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredArticles = helpArticles.filter(article => 
    (selectedCategory === 'all' || article.category === selectedCategory) &&
    (searchQuery === '' || 
     article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     article.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleFAQToggle = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const handleHelpfulVote = (faqId, isHelpful) => {
    setHelpRating(prev => ({
      ...prev,
      [faqId]: isHelpful
    }));
  };

  const renderHelpCenter = () => (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search help articles, FAQs, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {helpCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { title: 'Getting Started Guide', icon: Play, description: 'New to Flourish? Start here' },
          { title: 'Video Tutorials', icon: Video, description: 'Watch step-by-step guides' },
          { title: 'Contact Support', icon: MessageSquare, description: 'Get personalized help' },
          { title: 'Community Forum', icon: Users, description: 'Connect with other couples' }
        ].map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow text-left"
            >
              <Icon className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </button>
          );
        })}
      </div>

      {/* Popular Articles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Popular Help Articles</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div key={article.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-2 mb-3">
                {article.type === 'video' ? (
                  <Video className="w-5 h-5 text-red-600" />
                ) : article.type === 'interactive' ? (
                  <Zap className="w-5 h-5 text-purple-600" />
                ) : (
                  <Book className="w-5 h-5 text-blue-600" />
                )}
                <span className="text-sm text-gray-600">
                  {article.type === 'video' ? article.duration : article.readTime}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                  article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {article.difficulty}
                </span>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2">{article.title}</h4>
              <p className="text-sm text-gray-600 mb-4">{article.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{article.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{article.views} views</span>
                </div>
                
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => handleFAQToggle(faq.id)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {expandedFAQ === faq.id ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedFAQ === faq.id && (
                <div className="px-4 pb-4">
                  <p className="text-gray-600 mb-4">{faq.answer}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Was this helpful?</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleHelpfulVote(faq.id, true)}
                          className={`p-1 rounded ${
                            helpRating[faq.id] === true
                              ? 'bg-green-100 text-green-600'
                              : 'text-gray-400 hover:text-green-600'
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleHelpfulVote(faq.id, false)}
                          className={`p-1 rounded ${
                            helpRating[faq.id] === false
                              ? 'bg-red-100 text-red-600'
                              : 'text-gray-400 hover:text-red-600'
                          }`}
                        >
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{faq.helpful}% found helpful</span>
                      <span>•</span>
                      <span>{faq.views} views</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSupport = () => (
    <div className="space-y-8">
      {/* Contact Options */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact Support</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.type}
                className={`p-6 border-2 rounded-lg transition-all ${
                  option.available
                    ? 'border-gray-200 hover:border-blue-300 cursor-pointer'
                    : 'border-gray-100 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg ${
                    option.available ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{option.title}</h4>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Availability:</span>
                    <span className={`text-sm font-medium ${
                      option.available ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {option.availability}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Response time:</span>
                    <span className="text-sm text-gray-900">{option.responseTime}</span>
                  </div>
                </div>
                
                {option.available && (
                  <button
                    onClick={() => option.type === 'email' && setShowContactForm(true)}
                    className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    {option.type === 'live-chat' ? 'Start Chat' :
                     option.type === 'email' ? 'Send Email' :
                     option.type === 'phone' ? 'Call Now' :
                     'Schedule Call'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Support Statistics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Support Performance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Average Response Time', value: '2.3 hours', icon: Clock },
            { label: 'Customer Satisfaction', value: '4.8/5', icon: Star },
            { label: 'First Contact Resolution', value: '89%', icon: CheckCircle },
            { label: 'Support Tickets Resolved', value: '1,247', icon: TrendingUp }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Contact Support</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Select a category</option>
                    <option>Technical Issue</option>
                    <option>Account & Billing</option>
                    <option>Feature Request</option>
                    <option>General Question</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of your issue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please provide as much detail as possible..."
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderContextualHelp = () => (
    <div className="space-y-8">
      {/* Contextual Help Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Contextual Help System</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Smart Help Triggers</h4>
            <div className="space-y-3">
              {[
                { trigger: 'User spends >30s on a page', action: 'Show helpful tips tooltip' },
                { trigger: 'Multiple failed attempts', action: 'Offer guided tutorial' },
                { trigger: 'New feature accessed', action: 'Display feature introduction' },
                { trigger: 'Error encountered', action: 'Provide specific help content' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">Trigger: {item.trigger}</div>
                  <div className="text-sm text-gray-600">Action: {item.action}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Help Content Types</h4>
            <div className="space-y-3">
              {[
                { type: 'Tooltips', description: 'Quick explanations for UI elements', icon: Info },
                { type: 'Guided Tours', description: 'Step-by-step feature walkthroughs', icon: Navigation },
                { type: 'Video Overlays', description: 'Contextual video demonstrations', icon: Video },
                { type: 'Interactive Hints', description: 'Progressive disclosure of help', icon: Lightbulb }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-gray-900">{item.type}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Help Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Help System Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {[
            { label: 'Help Requests', value: '2,847', change: '+12%' },
            { label: 'Self-Service Rate', value: '78%', change: '+5%' },
            { label: 'Help Satisfaction', value: '4.6/5', change: '+0.3' }
          ].map((metric, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">{metric.label}</span>
                <span className="text-sm text-green-600 font-medium">{metric.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Most Requested Help Topics</h4>
            <div className="space-y-2">
              {[
                { topic: 'Setting up relationship goals', requests: 342 },
                { topic: 'Using AI coaching features', requests: 298 },
                { topic: 'Syncing data across devices', requests: 267 },
                { topic: 'Understanding assessment results', requests: 234 },
                { topic: 'Managing subscription settings', requests: 189 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm text-gray-900">{item.topic}</span>
                  <span className="text-sm text-gray-600">{item.requests} requests</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Help Content Performance</h4>
            <div className="space-y-2">
              {[
                { content: 'Getting Started Video', effectiveness: 94 },
                { content: 'Goal Setting Guide', effectiveness: 89 },
                { content: 'AI Coach Tutorial', effectiveness: 87 },
                { content: 'Assessment FAQ', effectiveness: 82 },
                { content: 'Sync Troubleshooting', effectiveness: 76 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <span className="text-sm text-gray-900">{item.content}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 bg-green-600 rounded-full"
                        style={{ width: `${item.effectiveness}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600">{item.effectiveness}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKnowledgeBase = () => (
    <div className="space-y-8">
      {/* Knowledge Base Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Knowledge Base</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: 'Total Articles', value: '156', icon: Book },
            { label: 'Video Tutorials', value: '43', icon: Video },
            { label: 'Interactive Guides', value: '28', icon: Zap }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg text-center">
                <Icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Featured Content */}
        <div>
          <h4 className="font-medium text-gray-900 mb-4">Featured Content</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Complete Relationship Assessment Guide',
                type: 'Guide',
                readTime: '15 min',
                rating: 4.9,
                featured: true
              },
              {
                title: 'Mastering Conflict Resolution',
                type: 'Video Series',
                duration: '45 min',
                rating: 4.8,
                featured: true
              },
              {
                title: 'AI Coaching Best Practices',
                type: 'Interactive',
                duration: '20 min',
                rating: 4.7,
                featured: true
              }
            ].map((content, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {content.type}
                  </span>
                  {content.featured && (
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h5 className="font-medium text-gray-900 mb-2">{content.title}</h5>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{content.readTime || content.duration}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span>{content.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Content Creation Tools</h4>
            <div className="space-y-3">
              {[
                { tool: 'Article Editor', description: 'Rich text editor with templates' },
                { tool: 'Video Uploader', description: 'Upload and manage video content' },
                { tool: 'Interactive Builder', description: 'Create guided tutorials' },
                { tool: 'FAQ Manager', description: 'Organize frequently asked questions' }
              ].map((item, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">{item.tool}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Content Analytics</h4>
            <div className="space-y-3">
              {[
                { metric: 'Most Viewed', value: 'Relationship Goals Guide (3.2k views)' },
                { metric: 'Highest Rated', value: 'AI Coaching Tutorial (4.9/5)' },
                { metric: 'Most Helpful', value: 'Sync Troubleshooting (96% helpful)' },
                { metric: 'Needs Update', value: 'Premium Features FAQ (outdated)' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-gray-900 mb-1">{item.metric}</div>
                  <div className="text-sm text-gray-600">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'help-center', label: 'Help Center', icon: HelpCircle },
    { id: 'contact-support', label: 'Contact Support', icon: MessageSquare },
    { id: 'contextual-help', label: 'Contextual Help', icon: Lightbulb },
    { id: 'knowledge-base', label: 'Knowledge Base', icon: Book }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Help System Enhancement</h1>
          <p className="text-gray-600">Comprehensive help and support system with intelligent search, contextual assistance, multi-format content, and analytics-driven optimization for superior user support.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm border border-gray-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'help-center' && renderHelpCenter()}
          {activeTab === 'contact-support' && renderContactSupport()}
          {activeTab === 'contextual-help' && renderContextualHelp()}
          {activeTab === 'knowledge-base' && renderKnowledgeBase()}
        </div>
      </div>
    </div>
  );
};

export default HelpSystemEnhancement;

