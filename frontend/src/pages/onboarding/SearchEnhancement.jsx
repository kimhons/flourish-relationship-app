import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  SortAsc, 
  X, 
  Clock, 
  TrendingUp, 
  Star, 
  Bookmark, 
  Heart, 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  User, 
  Settings, 
  Tag, 
  MapPin, 
  Globe, 
  Zap,
  ChevronDown,
  ChevronRight,
  ArrowUpDown,
  Grid,
  List,
  Eye,
  Download,
  Share,
  MoreHorizontal,
  CheckCircle,
  AlertCircle,
  Info,
  Plus,
  Minus,
  Target,
  Trophy,
  Book,
  Video,
  Headphones,
  FileText,
  Image,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RefreshCw,
  ExternalLink,
  Copy,
  Edit,
  Trash2
} from 'lucide-react';

const SearchEnhancement = () => {
  const [activeTab, setActiveTab] = useState('search-interface');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Sample search data
  const sampleContent = [
    {
      id: 1,
      title: 'Communication Exercises for Couples',
      type: 'article',
      category: 'Communication',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      rating: 4.8,
      views: 1250,
      tags: ['communication', 'exercises', 'relationship'],
      description: 'Learn effective communication techniques to strengthen your relationship bond.',
      thumbnail: '/api/placeholder/300/200',
      duration: '5 min read'
    },
    {
      id: 2,
      title: 'Building Intimacy Through Daily Habits',
      type: 'video',
      category: 'Intimacy',
      author: 'Dr. Michael Chen',
      date: '2024-01-12',
      rating: 4.9,
      views: 2100,
      tags: ['intimacy', 'habits', 'daily routine'],
      description: 'Discover simple daily practices that can enhance emotional and physical intimacy.',
      thumbnail: '/api/placeholder/300/200',
      duration: '12 min'
    },
    {
      id: 3,
      title: 'Conflict Resolution Strategies',
      type: 'course',
      category: 'Conflict Resolution',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-10',
      rating: 4.7,
      views: 890,
      tags: ['conflict', 'resolution', 'strategies'],
      description: 'Master the art of resolving conflicts constructively in your relationship.',
      thumbnail: '/api/placeholder/300/200',
      duration: '2 hours'
    },
    {
      id: 4,
      title: 'Goal Setting for Couples',
      type: 'worksheet',
      category: 'Goals',
      author: 'Dr. David Kim',
      date: '2024-01-08',
      rating: 4.6,
      views: 750,
      tags: ['goals', 'planning', 'future'],
      description: 'Interactive worksheet to help couples set and achieve shared goals.',
      thumbnail: '/api/placeholder/300/200',
      duration: '30 min'
    },
    {
      id: 5,
      title: 'Understanding Love Languages',
      type: 'assessment',
      category: 'Assessment',
      author: 'Dr. Lisa Park',
      date: '2024-01-05',
      rating: 4.9,
      views: 3200,
      tags: ['love languages', 'assessment', 'understanding'],
      description: 'Discover your and your partner\'s love languages for better connection.',
      thumbnail: '/api/placeholder/300/200',
      duration: '15 min'
    }
  ];

  const categories = [
    'All Categories',
    'Communication',
    'Intimacy',
    'Conflict Resolution',
    'Goals',
    'Assessment',
    'Activities',
    'Coaching'
  ];

  const contentTypes = [
    'All Types',
    'Article',
    'Video',
    'Course',
    'Worksheet',
    'Assessment',
    'Audio',
    'Tool'
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'date', label: 'Most Recent' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'views', label: 'Most Popular' },
    { value: 'title', label: 'Alphabetical' }
  ];

  const recentSearches = [
    'communication exercises',
    'intimacy building',
    'conflict resolution',
    'love languages',
    'relationship goals'
  ];

  const trendingSearches = [
    'daily connection rituals',
    'emotional intelligence',
    'trust building exercises',
    'long distance relationships',
    'marriage counseling'
  ];

  const suggestedSearches = [
    'How to improve communication',
    'Building trust after conflict',
    'Romantic date ideas',
    'Relationship assessment tools',
    'Couples therapy techniques'
  ];

  // Search functionality
  useEffect(() => {
    if (searchQuery.length > 0) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = sampleContent.filter(item =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setSearchResults(filtered);
        setIsSearching(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleFilterToggle = (filter) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article': return FileText;
      case 'video': return Video;
      case 'course': return Book;
      case 'worksheet': return Edit;
      case 'assessment': return BarChart3;
      case 'audio': return Headphones;
      default: return FileText;
    }
  };

  const renderSearchInterface = () => (
    <div className="space-y-8">
      {/* Main Search Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Enhanced Search Interface</h3>
        
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for relationship tools, articles, videos, and more..."
              className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Search Suggestions */}
          {searchQuery.length > 0 && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-10">
              <div className="p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-3">Suggestions</h4>
                <div className="space-y-2">
                  {suggestedSearches
                    .filter(suggestion => suggestion.toLowerCase().includes(searchQuery.toLowerCase()))
                    .slice(0, 5)
                    .map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setSearchQuery(suggestion)}
                        className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Search className="w-4 h-4 inline mr-3 text-gray-400" />
                        {suggestion}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-2 mt-4">
          {categories.slice(1, 6).map((category) => (
            <button
              key={category}
              onClick={() => handleFilterToggle(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedFilters.includes(category)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center space-x-1"
          >
            <Filter className="w-4 h-4" />
            <span>More Filters</span>
          </button>
        </div>

        {/* Advanced Filters */}
        {showAdvancedFilters && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {contentTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Any Duration</option>
                  <option>Under 5 minutes</option>
                  <option>5-15 minutes</option>
                  <option>15-30 minutes</option>
                  <option>Over 30 minutes</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Any Rating</option>
                  <option>4.5+ Stars</option>
                  <option>4.0+ Stars</option>
                  <option>3.5+ Stars</option>
                  <option>3.0+ Stars</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {searchQuery && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Search Results</h3>
              <p className="text-gray-600">
                {isSearching ? 'Searching...' : `${searchResults.length} results for "${searchQuery}"`}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
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

          {isSearching ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {searchResults.map((result) => {
                const TypeIcon = getTypeIcon(result.type);
                return (
                  <div
                    key={result.id}
                    className={`border border-gray-200 rounded-lg hover:shadow-md transition-shadow ${
                      viewMode === 'grid' ? 'p-4' : 'p-4 flex items-center space-x-4'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      <>
                        <div className="aspect-video bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                          <TypeIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {result.type}
                            </span>
                            <span className="text-xs text-gray-500">{result.duration}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-2">{result.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{result.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>By {result.author}</span>
                            <div className="flex items-center space-x-2">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{result.rating}</span>
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
                              {result.type}
                            </span>
                            <span className="text-xs text-gray-500">{result.duration}</span>
                          </div>
                          <h4 className="font-semibold text-gray-900 mb-1">{result.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>By {result.author}</span>
                            <div className="flex items-center space-x-2">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{result.rating}</span>
                              <Eye className="w-3 h-3" />
                              <span>{result.views}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Search History & Suggestions */}
      {!searchQuery && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Recent Searches
            </h3>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Trending Searches
            </h3>
            <div className="space-y-2">
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Star className="w-5 h-5 mr-2" />
              Suggested for You
            </h3>
            <div className="space-y-2">
              {suggestedSearches.slice(0, 5).map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderSmartFilters = () => (
    <div className="space-y-8">
      {/* Filter Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Smart Filtering System</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Content Type Filters */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Content Type
            </h4>
            <div className="space-y-2">
              {contentTypes.slice(1).map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(type)}
                    onChange={() => handleFilterToggle(type)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <Tag className="w-4 h-4 mr-2" />
              Category
            </h4>
            <div className="space-y-2">
              {categories.slice(1).map((category) => (
                <label key={category} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(category)}
                    onChange={() => handleFilterToggle(category)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filters */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Duration
            </h4>
            <div className="space-y-2">
              {[
                'Under 5 minutes',
                '5-15 minutes',
                '15-30 minutes',
                '30-60 minutes',
                'Over 1 hour'
              ].map((duration) => (
                <label key={duration} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(duration)}
                    onChange={() => handleFilterToggle(duration)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{duration}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filters */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center">
              <Star className="w-4 h-4 mr-2" />
              Rating
            </h4>
            <div className="space-y-2">
              {[
                '4.5+ Stars',
                '4.0+ Stars',
                '3.5+ Stars',
                '3.0+ Stars'
              ].map((rating) => (
                <label key={rating} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(rating)}
                    onChange={() => handleFilterToggle(rating)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{rating}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {selectedFilters.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-gray-900">Active Filters</h4>
              <button
                onClick={() => setSelectedFilters([])}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <span
                  key={filter}
                  className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {filter}
                  <button
                    onClick={() => handleFilterToggle(filter)}
                    className="ml-2 text-blue-600 hover:text-blue-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Smart Filter Suggestions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Smart Filter Suggestions</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Based on Your Activity</h4>
            <div className="space-y-3">
              {[
                { label: 'Communication Tools', count: 24, trend: 'up' },
                { label: 'Short Videos (< 10 min)', count: 18, trend: 'up' },
                { label: 'Beginner Level', count: 15, trend: 'stable' },
                { label: 'Interactive Content', count: 12, trend: 'up' }
              ].map((suggestion, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      {suggestion.label}
                    </button>
                    <span className="text-sm text-gray-500">({suggestion.count} items)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {suggestion.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <div className="w-4 h-4" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Popular Combinations</h4>
            <div className="space-y-3">
              {[
                { filters: ['Communication', 'Video', '5-15 minutes'], count: 8 },
                { filters: ['Intimacy', 'Article', 'Beginner'], count: 12 },
                { filters: ['Conflict Resolution', 'Course', '4.5+ Stars'], count: 6 },
                { filters: ['Goals', 'Worksheet', 'Interactive'], count: 9 }
              ].map((combo, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {combo.filters.map((filter, filterIndex) => (
                      <span
                        key={filterIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {filter}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{combo.count} matching items</span>
                    <button className="text-sm text-blue-600 hover:text-blue-700">
                      Apply Filters
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSearchAnalytics = () => (
    <div className="space-y-8">
      {/* Search Performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Search Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Searches', value: '12,450', change: '+15%', icon: Search },
            { label: 'Avg. Results Found', value: '8.3', change: '+5%', icon: Target },
            { label: 'Click-through Rate', value: '68%', change: '+12%', icon: Eye },
            { label: 'Search Success Rate', value: '92%', change: '+8%', icon: CheckCircle }
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

        {/* Search Trends Chart */}
        <div className="mb-8">
          <h4 className="font-medium text-gray-900 mb-4">Search Volume Trends</h4>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Search trends visualization would appear here</p>
            </div>
          </div>
        </div>

        {/* Top Search Terms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Top Search Terms</h4>
            <div className="space-y-3">
              {[
                { term: 'communication exercises', searches: 1250, trend: 'up' },
                { term: 'love languages', searches: 980, trend: 'up' },
                { term: 'conflict resolution', searches: 750, trend: 'stable' },
                { term: 'intimacy building', searches: 620, trend: 'up' },
                { term: 'relationship goals', searches: 580, trend: 'down' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{item.term}</div>
                    <div className="text-sm text-gray-600">{item.searches} searches</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-500" />}
                    {item.trend === 'down' && <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />}
                    {item.trend === 'stable' && <div className="w-4 h-0.5 bg-gray-400" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Search Patterns</h4>
            <div className="space-y-3">
              {[
                { pattern: 'Mobile searches', percentage: 68, color: 'bg-blue-500' },
                { pattern: 'Voice searches', percentage: 15, color: 'bg-green-500' },
                { pattern: 'Filter usage', percentage: 45, color: 'bg-purple-500' },
                { pattern: 'Advanced search', percentage: 12, color: 'bg-orange-500' }
              ].map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.pattern}</span>
                    <span className="text-sm text-gray-600">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Optimization */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Search Optimization</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Performance Metrics</h4>
            <div className="space-y-4">
              {[
                { metric: 'Average Search Time', value: '0.3s', status: 'good' },
                { metric: 'Index Coverage', value: '98.5%', status: 'good' },
                { metric: 'Search Accuracy', value: '94.2%', status: 'good' },
                { metric: 'Zero Results Rate', value: '2.1%', status: 'warning' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600">{item.value}</span>
                    {item.status === 'good' && <CheckCircle className="w-4 h-4 text-green-500" />}
                    {item.status === 'warning' && <AlertCircle className="w-4 h-4 text-yellow-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Optimization Suggestions</h4>
            <div className="space-y-3">
              {[
                {
                  suggestion: 'Add synonyms for "intimacy" searches',
                  impact: 'High',
                  effort: 'Low'
                },
                {
                  suggestion: 'Improve mobile search interface',
                  impact: 'Medium',
                  effort: 'Medium'
                },
                {
                  suggestion: 'Add voice search capabilities',
                  impact: 'High',
                  effort: 'High'
                },
                {
                  suggestion: 'Enhance autocomplete suggestions',
                  impact: 'Medium',
                  effort: 'Low'
                }
              ].map((item, index) => (
                <div key={index} className="p-3 border border-gray-200 rounded-lg">
                  <div className="font-medium text-gray-900 mb-2">{item.suggestion}</div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-gray-600">Impact: 
                      <span className={`ml-1 font-medium ${
                        item.impact === 'High' ? 'text-green-600' :
                        item.impact === 'Medium' ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        {item.impact}
                      </span>
                    </span>
                    <span className="text-gray-600">Effort: 
                      <span className={`ml-1 font-medium ${
                        item.effort === 'Low' ? 'text-green-600' :
                        item.effort === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.effort}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVoiceSearch = () => (
    <div className="space-y-8">
      {/* Voice Search Interface */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Voice Search Integration</h3>
        
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Volume2 className="w-12 h-12 text-white" />
          </div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Voice Search</h4>
          <p className="text-gray-600 mb-6">Tap the microphone and speak your search query</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
            <Volume2 className="w-5 h-5" />
            <span>Start Voice Search</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Voice Commands</h4>
            <div className="space-y-3">
              {[
                '"Find communication exercises"',
                '"Show me videos about intimacy"',
                '"Search for conflict resolution tools"',
                '"What are love languages?"',
                '"Find beginner relationship courses"'
              ].map((command, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Volume2 className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-700">{command}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Voice Search Features</h4>
            <div className="space-y-3">
              {[
                { feature: 'Natural Language Processing', status: 'active' },
                { feature: 'Multi-language Support', status: 'active' },
                { feature: 'Noise Cancellation', status: 'active' },
                { feature: 'Offline Voice Recognition', status: 'coming-soon' },
                { feature: 'Voice Shortcuts', status: 'coming-soon' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{item.feature}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.status === 'active' ? 'Active' : 'Coming Soon'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Voice Search Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Voice Search Analytics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-1">15%</div>
            <div className="text-sm text-gray-600">Voice Search Usage</div>
            <div className="text-xs text-green-600 mt-1">+8% from last month</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-1">92%</div>
            <div className="text-sm text-gray-600">Recognition Accuracy</div>
            <div className="text-xs text-green-600 mt-1">+3% improvement</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-900 mb-1">2.3s</div>
            <div className="text-sm text-gray-600">Avg. Processing Time</div>
            <div className="text-xs text-green-600 mt-1">-0.5s faster</div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium text-gray-900 mb-4">Common Voice Queries</h4>
          <div className="space-y-2">
            {[
              { query: 'How to improve communication', frequency: 28 },
              { query: 'Find relationship exercises', frequency: 22 },
              { query: 'Show intimacy tips', frequency: 18 },
              { query: 'Conflict resolution help', frequency: 15 },
              { query: 'Love language test', frequency: 12 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">"{item.query}"</span>
                <span className="text-sm text-gray-600">{item.frequency}% of queries</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'search-interface', label: 'Search Interface', icon: Search },
    { id: 'smart-filters', label: 'Smart Filters', icon: Filter },
    { id: 'search-analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'voice-search', label: 'Voice Search', icon: Volume2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Enhancement</h1>
          <p className="text-gray-600">Advanced search capabilities with intelligent filtering, real-time suggestions, voice search, and comprehensive analytics for optimal content discovery.</p>
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
          {activeTab === 'search-interface' && renderSearchInterface()}
          {activeTab === 'smart-filters' && renderSmartFilters()}
          {activeTab === 'search-analytics' && renderSearchAnalytics()}
          {activeTab === 'voice-search' && renderVoiceSearch()}
        </div>
      </div>
    </div>
  );
};

export default SearchEnhancement;

