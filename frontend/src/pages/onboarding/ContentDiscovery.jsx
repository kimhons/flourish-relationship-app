import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  TrendingUp, 
  Star, 
  Bookmark, 
  Heart, 
  Share, 
  Play, 
  Clock, 
  User, 
  Tag, 
  Filter, 
  Grid, 
  List, 
  Eye, 
  ThumbsUp, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Zap, 
  Target, 
  Trophy, 
  Book, 
  Video, 
  Headphones, 
  FileText, 
  Image, 
  Download, 
  ExternalLink, 
  RefreshCw, 
  Settings, 
  ChevronRight, 
  ChevronDown, 
  Plus, 
  Minus, 
  X, 
  Search, 
  Globe, 
  MapPin, 
  Users, 
  Award, 
  Lightbulb, 
  Sparkles, 
  Flame, 
  Shuffle, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  MoreHorizontal 
} from 'lucide-react';

const ContentDiscovery = () => {
  const [activeTab, setActiveTab] = useState('personalized-feed');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const [likedItems, setLikedItems] = useState(new Set());
  const [discoveryPreferences, setDiscoveryPreferences] = useState({
    contentTypes: ['article', 'video', 'course'],
    difficulty: 'all',
    duration: 'all',
    topics: ['communication', 'intimacy', 'goals']
  });

  // Sample content data
  const sampleContent = [
    {
      id: 1,
      title: 'The Art of Active Listening in Relationships',
      type: 'article',
      category: 'Communication',
      author: 'Dr. Sarah Johnson',
      authorImage: '/api/placeholder/40/40',
      date: '2024-01-15',
      readTime: '8 min read',
      rating: 4.8,
      views: 2450,
      likes: 189,
      comments: 23,
      tags: ['communication', 'listening', 'skills'],
      description: 'Master the fundamental skill of active listening to transform your relationship communication.',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'beginner',
      trending: true,
      featured: false,
      personalizedScore: 95
    },
    {
      id: 2,
      title: 'Building Emotional Intimacy: A Complete Guide',
      type: 'video',
      category: 'Intimacy',
      author: 'Dr. Michael Chen',
      authorImage: '/api/placeholder/40/40',
      date: '2024-01-12',
      duration: '15 min',
      rating: 4.9,
      views: 3200,
      likes: 245,
      comments: 34,
      tags: ['intimacy', 'emotional connection', 'bonding'],
      description: 'Learn proven techniques to deepen emotional intimacy and strengthen your bond.',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'intermediate',
      trending: false,
      featured: true,
      personalizedScore: 88
    },
    {
      id: 3,
      title: 'Conflict Resolution Masterclass',
      type: 'course',
      category: 'Conflict Resolution',
      author: 'Dr. Emily Rodriguez',
      authorImage: '/api/placeholder/40/40',
      date: '2024-01-10',
      duration: '2 hours',
      rating: 4.7,
      views: 1890,
      likes: 156,
      comments: 45,
      tags: ['conflict', 'resolution', 'communication'],
      description: 'Comprehensive course on resolving conflicts constructively and strengthening relationships.',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'advanced',
      trending: false,
      featured: false,
      personalizedScore: 82
    },
    {
      id: 4,
      title: 'Daily Rituals for Stronger Connections',
      type: 'worksheet',
      category: 'Activities',
      author: 'Dr. Lisa Park',
      authorImage: '/api/placeholder/40/40',
      date: '2024-01-08',
      duration: '30 min',
      rating: 4.6,
      views: 1250,
      likes: 98,
      comments: 18,
      tags: ['daily habits', 'connection', 'rituals'],
      description: 'Interactive worksheet to establish meaningful daily connection rituals.',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'beginner',
      trending: true,
      featured: false,
      personalizedScore: 91
    },
    {
      id: 5,
      title: 'Understanding Your Love Language',
      type: 'assessment',
      category: 'Assessment',
      author: 'Dr. David Kim',
      authorImage: '/api/placeholder/40/40',
      date: '2024-01-05',
      duration: '15 min',
      rating: 4.9,
      views: 4100,
      likes: 312,
      comments: 67,
      tags: ['love languages', 'assessment', 'understanding'],
      description: 'Discover your primary love language and learn how to express love effectively.',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'beginner',
      trending: true,
      featured: true,
      personalizedScore: 97
    },
    {
      id: 6,
      title: 'Advanced Communication Techniques',
      type: 'audio',
      category: 'Communication',
      author: 'Dr. Rachel Green',
      authorImage: '/api/placeholder/40/40',
      date: '2024-01-03',
      duration: '25 min',
      rating: 4.5,
      views: 890,
      likes: 67,
      comments: 12,
      tags: ['communication', 'advanced', 'techniques'],
      description: 'Audio guide to mastering advanced communication strategies for deeper connection.',
      thumbnail: '/api/placeholder/400/250',
      difficulty: 'advanced',
      trending: false,
      featured: false,
      personalizedScore: 75
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', icon: Globe },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'intimacy', label: 'Intimacy', icon: Heart },
    { id: 'conflict-resolution', label: 'Conflict Resolution', icon: Target },
    { id: 'activities', label: 'Activities', icon: Zap },
    { id: 'assessment', label: 'Assessments', icon: BarChart3 },
    { id: 'goals', label: 'Goals', icon: Trophy }
  ];

  const contentTypes = [
    { id: 'article', label: 'Articles', icon: FileText },
    { id: 'video', label: 'Videos', icon: Video },
    { id: 'course', label: 'Courses', icon: Book },
    { id: 'worksheet', label: 'Worksheets', icon: FileText },
    { id: 'assessment', label: 'Assessments', icon: BarChart3 },
    { id: 'audio', label: 'Audio', icon: Headphones }
  ];

  const handleBookmark = (itemId) => {
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleLike = (itemId) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const getTypeIcon = (type) => {
    const typeMap = {
      article: FileText,
      video: Video,
      course: Book,
      worksheet: FileText,
      assessment: BarChart3,
      audio: Headphones
    };
    return typeMap[type] || FileText;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderPersonalizedFeed = () => (
    <div className="space-y-8">
      {/* Personalization Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <Sparkles className="w-5 h-5 mr-2" />
          Personalized for You
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content Types</label>
            <div className="space-y-2">
              {contentTypes.slice(0, 3).map((type) => (
                <label key={type.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={discoveryPreferences.contentTypes.includes(type.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDiscoveryPreferences(prev => ({
                          ...prev,
                          contentTypes: [...prev.contentTypes, type.id]
                        }));
                      } else {
                        setDiscoveryPreferences(prev => ({
                          ...prev,
                          contentTypes: prev.contentTypes.filter(t => t !== type.id)
                        }));
                      }
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{type.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
            <select
              value={discoveryPreferences.difficulty}
              onChange={(e) => setDiscoveryPreferences(prev => ({ ...prev, difficulty: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
            <select
              value={discoveryPreferences.duration}
              onChange={(e) => setDiscoveryPreferences(prev => ({ ...prev, duration: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Any Duration</option>
              <option value="short">Under 10 minutes</option>
              <option value="medium">10-30 minutes</option>
              <option value="long">Over 30 minutes</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">View Mode</label>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-4 h-4 mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4 mx-auto" />
              </button>
            </div>
          </div>
        </div>

        {/* Personalization Score */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Personalization Score</h4>
              <p className="text-sm text-gray-600">Based on your activity and preferences</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <div className="text-xs text-gray-500">Highly Personalized</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Feed */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recommended for You</h3>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <RefreshCw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {sampleContent
            .sort((a, b) => b.personalizedScore - a.personalizedScore)
            .map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div
                  key={item.id}
                  className={`border border-gray-200 rounded-lg hover:shadow-md transition-shadow ${
                    viewMode === 'grid' ? 'p-4' : 'p-4 flex items-start space-x-4'
                  }`}
                >
                  {viewMode === 'grid' ? (
                    <>
                      <div className="relative mb-4">
                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                          <TypeIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        {item.trending && (
                          <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center space-x-1">
                            <Flame className="w-3 h-3" />
                            <span>Trending</span>
                          </div>
                        )}
                        {item.featured && (
                          <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-white text-xs rounded-full flex items-center space-x-1">
                            <Star className="w-3 h-3" />
                            <span>Featured</span>
                          </div>
                        )}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                          {item.personalizedScore}% match
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {item.type}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                        <div className="flex items-center space-x-2 mb-3">
                          <img
                            src={item.authorImage}
                            alt={item.author}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-gray-600">{item.author}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <span>{item.readTime || item.duration}</span>
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-gray-500">
                            <button
                              onClick={() => handleLike(item.id)}
                              className={`flex items-center space-x-1 ${
                                likedItems.has(item.id) ? 'text-red-500' : 'hover:text-red-500'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                              <span>{item.likes}</span>
                            </button>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{item.views}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => handleBookmark(item.id)}
                            className={`p-1 ${
                              bookmarkedItems.has(item.id) ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                            }`}
                          >
                            <Bookmark className={`w-4 h-4 ${bookmarkedItems.has(item.id) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 relative">
                        <TypeIcon className="w-6 h-6 text-gray-400" />
                        {item.trending && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {item.type}
                            </span>
                            <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">
                              {item.personalizedScore}% match
                            </span>
                          </div>
                          <button
                            onClick={() => handleBookmark(item.id)}
                            className={`p-1 ${
                              bookmarkedItems.has(item.id) ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'
                            }`}
                          >
                            <Bookmark className={`w-4 h-4 ${bookmarkedItems.has(item.id) ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>By {item.author}</span>
                            <span>{item.readTime || item.duration}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{item.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => handleLike(item.id)}
                              className={`flex items-center space-x-1 ${
                                likedItems.has(item.id) ? 'text-red-500' : 'hover:text-red-500'
                              }`}
                            >
                              <Heart className={`w-3 h-3 ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                              <span>{item.likes}</span>
                            </button>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{item.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

  const renderTrendingContent = () => (
    <div className="space-y-8">
      {/* Trending Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Trending Now
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Most Viewed Today', value: 'Love Languages Quiz', icon: Eye },
            { label: 'Rising Fast', value: 'Communication Exercises', icon: TrendingUp },
            { label: 'Most Shared', value: 'Daily Connection Rituals', icon: Share },
            { label: 'Top Rated This Week', value: 'Conflict Resolution Guide', icon: Star }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600 mb-2" />
                <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                <div className="font-semibold text-gray-900">{item.value}</div>
              </div>
            );
          })}
        </div>

        {/* Trending Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(1).map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedCategory === category.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <div className="text-sm font-medium text-gray-900">{category.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trending Content Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Trending Content</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleContent
            .filter(item => item.trending)
            .map((item, index) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="relative mb-4">
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <TypeIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center space-x-1">
                      <Flame className="w-3 h-3" />
                      <span>#{index + 1} Trending</span>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-75 text-white text-xs rounded">
                      {item.readTime || item.duration}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {item.type}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>By {item.author}</span>
                      <div className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{item.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Trending Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Trending Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Top Trending Topics</h4>
            <div className="space-y-3">
              {[
                { topic: 'Love Languages', growth: '+45%', searches: 2340 },
                { topic: 'Communication Skills', growth: '+32%', searches: 1890 },
                { topic: 'Conflict Resolution', growth: '+28%', searches: 1560 },
                { topic: 'Emotional Intimacy', growth: '+25%', searches: 1340 },
                { topic: 'Daily Rituals', growth: '+22%', searches: 1120 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{item.topic}</div>
                    <div className="text-sm text-gray-600">{item.searches} searches</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-600 font-medium">{item.growth}</div>
                    <div className="text-xs text-gray-500">vs last week</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Content Performance</h4>
            <div className="space-y-3">
              {[
                { metric: 'Avg. Engagement Rate', value: '68%', trend: 'up' },
                { metric: 'Content Completion Rate', value: '82%', trend: 'up' },
                { metric: 'Share Rate', value: '15%', trend: 'up' },
                { metric: 'Bookmark Rate', value: '23%', trend: 'stable' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{item.value}</span>
                    {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                    {item.trend === 'stable' && <div className="w-4 h-0.5 bg-gray-400" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContentCategories = () => (
    <div className="space-y-8">
      {/* Category Navigation */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Browse by Category</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const categoryContent = sampleContent.filter(item => 
              category.id === 'all' || item.category.toLowerCase().includes(category.id.replace('-', ' '))
            );
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-6 rounded-lg border-2 transition-colors text-left ${
                  selectedCategory === category.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Icon className="w-8 h-8 mb-3 text-gray-600" />
                <div className="font-medium text-gray-900 mb-1">{category.label}</div>
                <div className="text-sm text-gray-600">{categoryContent.length} items</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {categories.find(c => c.id === selectedCategory)?.label || 'All Content'}
          </h3>
          <div className="flex items-center space-x-4">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Most Relevant</option>
            </select>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
          {sampleContent
            .filter(item => 
              selectedCategory === 'all' || 
              item.category.toLowerCase().includes(selectedCategory.replace('-', ' '))
            )
            .map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div
                  key={item.id}
                  className={`border border-gray-200 rounded-lg hover:shadow-md transition-shadow ${
                    viewMode === 'grid' ? 'p-4' : 'p-4 flex items-start space-x-4'
                  }`}
                >
                  {/* Content rendering similar to personalized feed */}
                  {viewMode === 'grid' ? (
                    <>
                      <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <TypeIcon className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {item.type}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>By {item.author}</span>
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{item.rating}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TypeIcon className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            {item.type}
                          </span>
                          <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>By {item.author}</span>
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{item.rating}</span>
                            <Eye className="w-3 h-3" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

  const renderDiscoveryInsights = () => (
    <div className="space-y-8">
      {/* Discovery Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Discovery Insights</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Content Discovered', value: '1,247', change: '+18%', icon: Compass },
            { label: 'Engagement Rate', value: '72%', change: '+5%', icon: Heart },
            { label: 'Completion Rate', value: '85%', change: '+12%', icon: CheckCircle },
            { label: 'Bookmark Rate', value: '28%', change: '+8%', icon: Bookmark }
          ].map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-green-600 font-medium">{metric.change}</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            );
          })}
        </div>

        {/* Discovery Patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Discovery Patterns</h4>
            <div className="space-y-3">
              {[
                { pattern: 'Browse by Category', percentage: 45, users: '2,340 users' },
                { pattern: 'Personalized Feed', percentage: 38, users: '1,980 users' },
                { pattern: 'Search Discovery', percentage: 25, users: '1,300 users' },
                { pattern: 'Trending Content', percentage: 22, users: '1,150 users' },
                { pattern: 'Recommendations', percentage: 18, users: '940 users' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.pattern}</span>
                    <span className="text-sm text-gray-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500">{item.users}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Content Preferences</h4>
            <div className="space-y-3">
              {[
                { type: 'Videos', preference: 68, engagement: '85%' },
                { type: 'Articles', preference: 52, engagement: '78%' },
                { type: 'Assessments', preference: 45, engagement: '92%' },
                { type: 'Courses', preference: 38, engagement: '88%' },
                { type: 'Worksheets', preference: 32, engagement: '75%' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.type}</span>
                    <span className="text-sm text-gray-600">{item.engagement} engagement</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-green-600"
                      style={{ width: `${item.preference}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{item.preference}% preference</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Personalization Effectiveness */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personalization Effectiveness</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Algorithm Performance</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Accuracy</span>
                <span className="text-sm font-medium">94.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Relevance</span>
                <span className="text-sm font-medium">91.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Diversity</span>
                <span className="text-sm font-medium">87.5%</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">User Satisfaction</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Content Quality</span>
                <span className="text-sm font-medium">4.7/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Relevance</span>
                <span className="text-sm font-medium">4.6/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Discovery</span>
                <span className="text-sm font-medium">4.5/5</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-3">Engagement Impact</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Time Spent</span>
                <span className="text-sm font-medium text-green-600">+32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Return Rate</span>
                <span className="text-sm font-medium text-green-600">+28%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Completion</span>
                <span className="text-sm font-medium text-green-600">+25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Suggestions */}
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3 flex items-center">
            <Lightbulb className="w-4 h-4 mr-2" />
            Optimization Suggestions
          </h4>
          <div className="space-y-2">
            {[
              'Increase diversity in video content recommendations',
              'Improve beginner-level content discovery',
              'Enhance cross-category content suggestions',
              'Optimize mobile discovery experience'
            ].map((suggestion, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'personalized-feed', label: 'Personalized Feed', icon: Sparkles },
    { id: 'trending-content', label: 'Trending', icon: TrendingUp },
    { id: 'content-categories', label: 'Categories', icon: Grid },
    { id: 'discovery-insights', label: 'Insights', icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Discovery</h1>
          <p className="text-gray-600">AI-powered content discovery with personalized recommendations, trending insights, intelligent categorization, and comprehensive analytics for optimal content exploration.</p>
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
          {activeTab === 'personalized-feed' && renderPersonalizedFeed()}
          {activeTab === 'trending-content' && renderTrendingContent()}
          {activeTab === 'content-categories' && renderContentCategories()}
          {activeTab === 'discovery-insights' && renderDiscoveryInsights()}
        </div>
      </div>
    </div>
  );
};

export default ContentDiscovery;

