import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, Filter, SortAsc, SortDesc, Grid, List,
  Star, Clock, Users, Calendar, MapPin, Tag,
  BookOpen, Video, Mic, Heart, Award, Zap,
  TrendingUp, Eye, Download, Share2, Bookmark,
  ChevronDown, ChevronRight, X, Plus, Settings,
  Play, Pause, Volume2, FileText, Image, Coffee
} from 'lucide-react';

const AdvancedSearchDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    contentType: [],
    category: [],
    difficulty: [],
    duration: [],
    rating: null
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    'communication exercises', 'date night ideas', 'conflict resolution', 'intimacy building'
  ]);
  const [suggestedSearches, setSuggestedSearches] = useState([
    'mindfulness for couples', 'trust building activities', 'long distance relationship tips'
  ]);

  const searchInputRef = useRef(null);

  // Sample search results data
  const allContent = [
    {
      id: 1,
      type: 'article',
      title: 'Building Trust Through Daily Conversations',
      description: 'Learn how small daily interactions can strengthen trust and intimacy in your relationship.',
      category: 'Communication',
      author: 'Dr. Sarah Johnson',
      rating: 4.8,
      duration: '8 min read',
      difficulty: 'Beginner',
      tags: ['trust', 'communication', 'daily habits'],
      thumbnail: '/api/placeholder/300/200',
      views: 1247,
      bookmarked: false,
      premium: false
    },
    {
      id: 2,
      type: 'video',
      title: 'Conflict Resolution Masterclass',
      description: 'A comprehensive guide to resolving conflicts constructively and strengthening your bond.',
      category: 'Conflict Resolution',
      author: 'Michael Chen',
      rating: 4.9,
      duration: '45 min',
      difficulty: 'Intermediate',
      tags: ['conflict', 'resolution', 'communication'],
      thumbnail: '/api/placeholder/300/200',
      views: 892,
      bookmarked: true,
      premium: true
    },
    {
      id: 3,
      type: 'exercise',
      title: 'Weekly Gratitude Practice',
      description: 'A simple but powerful exercise to increase appreciation and positive feelings.',
      category: 'Wellness',
      author: 'Flourish Team',
      rating: 4.7,
      duration: '15 min',
      difficulty: 'Beginner',
      tags: ['gratitude', 'mindfulness', 'weekly'],
      thumbnail: '/api/placeholder/300/200',
      views: 2156,
      bookmarked: false,
      premium: false
    },
    {
      id: 4,
      type: 'workshop',
      title: 'Intimacy and Connection Workshop',
      description: 'Live workshop on building deeper emotional and physical intimacy.',
      category: 'Intimacy',
      author: 'Dr. Emily Rodriguez',
      rating: 4.9,
      duration: '2 hours',
      difficulty: 'Advanced',
      tags: ['intimacy', 'connection', 'workshop'],
      thumbnail: '/api/placeholder/300/200',
      views: 567,
      bookmarked: true,
      premium: true
    },
    {
      id: 5,
      type: 'audio',
      title: 'Meditation for Couples',
      description: 'Guided meditation sessions designed specifically for couples to practice together.',
      category: 'Wellness',
      author: 'Mindful Relationships',
      rating: 4.6,
      duration: '20 min',
      difficulty: 'Beginner',
      tags: ['meditation', 'mindfulness', 'couples'],
      thumbnail: '/api/placeholder/300/200',
      views: 1834,
      bookmarked: false,
      premium: false
    },
    {
      id: 6,
      type: 'game',
      title: 'Love Language Discovery Game',
      description: 'Interactive game to discover and understand each other\'s love languages.',
      category: 'Games',
      author: 'Flourish Games',
      rating: 4.8,
      duration: '30 min',
      difficulty: 'Beginner',
      tags: ['love languages', 'discovery', 'interactive'],
      thumbnail: '/api/placeholder/300/200',
      views: 3421,
      bookmarked: true,
      premium: false
    }
  ];

  const filterOptions = {
    contentType: [
      { value: 'article', label: 'Articles', icon: FileText },
      { value: 'video', label: 'Videos', icon: Video },
      { value: 'audio', label: 'Audio', icon: Mic },
      { value: 'exercise', label: 'Exercises', icon: Heart },
      { value: 'workshop', label: 'Workshops', icon: Users },
      { value: 'game', label: 'Games', icon: Zap }
    ],
    category: [
      'Communication', 'Conflict Resolution', 'Intimacy', 'Wellness', 
      'Games', 'Personal Growth', 'Date Ideas', 'Trust Building'
    ],
    difficulty: ['Beginner', 'Intermediate', 'Advanced'],
    duration: ['Under 15 min', '15-30 min', '30-60 min', 'Over 1 hour']
  };

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'views', label: 'Most Popular' },
    { value: 'recent', label: 'Most Recent' },
    { value: 'duration', label: 'Shortest First' }
  ];

  useEffect(() => {
    if (searchQuery.trim()) {
      performSearch();
    } else {
      setSearchResults(allContent);
    }
  }, [searchQuery, selectedFilters, sortBy]);

  const performSearch = () => {
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      let results = allContent.filter(item => {
        const matchesQuery = searchQuery.trim() === '' || 
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesContentType = selectedFilters.contentType.length === 0 ||
          selectedFilters.contentType.includes(item.type);

        const matchesCategory = selectedFilters.category.length === 0 ||
          selectedFilters.category.includes(item.category);

        const matchesDifficulty = selectedFilters.difficulty.length === 0 ||
          selectedFilters.difficulty.includes(item.difficulty);

        const matchesRating = !selectedFilters.rating ||
          item.rating >= selectedFilters.rating;

        return matchesQuery && matchesContentType && matchesCategory && matchesDifficulty && matchesRating;
      });

      // Sort results
      results.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'views':
            return b.views - a.views;
          case 'duration':
            return a.duration.localeCompare(b.duration);
          default:
            return 0;
        }
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      
      if (filterType === 'rating') {
        newFilters.rating = newFilters.rating === value ? null : value;
      } else {
        if (newFilters[filterType].includes(value)) {
          newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
        } else {
          newFilters[filterType] = [...newFilters[filterType], value];
        }
      }
      
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({
      contentType: [],
      category: [],
      difficulty: [],
      duration: [],
      rating: null
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() && !recentSearches.includes(query)) {
      setRecentSearches(prev => [query, ...prev.slice(0, 4)]);
    }
  };

  const toggleBookmark = (id) => {
    setSearchResults(prev => 
      prev.map(item => 
        item.id === id ? { ...item, bookmarked: !item.bookmarked } : item
      )
    );
  };

  const getContentIcon = (type) => {
    const icons = {
      article: FileText,
      video: Video,
      audio: Mic,
      exercise: Heart,
      workshop: Users,
      game: Zap
    };
    return icons[type] || FileText;
  };

  const getContentColor = (type) => {
    const colors = {
      article: 'blue',
      video: 'red',
      audio: 'green',
      exercise: 'pink',
      workshop: 'purple',
      game: 'yellow'
    };
    return colors[type] || 'gray';
  };

  const renderSearchResult = (item) => {
    const IconComponent = getContentIcon(item.type);
    const color = getContentColor(item.type);

    if (viewMode === 'list') {
      return (
        <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start space-x-4">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <IconComponent className={`w-4 h-4 text-${color}-600`} />
                    <span className={`px-2 py-1 bg-${color}-100 text-${color}-700 text-xs rounded-full`}>
                      {item.type}
                    </span>
                    {item.premium && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                      {item.rating}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.duration}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {item.views}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(item.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    item.bookmarked ? 'text-purple-600 bg-purple-100' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 bg-${color}-100 text-${color}-700 text-xs rounded-full`}>
              {item.type}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <button
              onClick={() => toggleBookmark(item.id)}
              className={`p-2 rounded-lg transition-colors ${
                item.bookmarked ? 'text-purple-600 bg-white' : 'text-gray-400 bg-white hover:text-gray-600'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
          {item.premium && (
            <div className="absolute bottom-3 left-3">
              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                Premium
              </span>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3">{item.description}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
            <span className="flex items-center">
              <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
              {item.rating}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {item.duration}
            </span>
            <span className="flex items-center">
              <Eye className="w-3 h-3 mr-1" />
              {item.views}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            {item.type === 'video' ? 'Watch' : item.type === 'audio' ? 'Listen' : 'View'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Search & Discovery
          </h1>
          <p className="text-gray-600">
            Find the perfect content, activities, and resources for your relationship journey
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for articles, videos, exercises, workshops..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Quick Searches */}
          <div className="space-y-3">
            {recentSearches.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Suggested Searches</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(search)}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Filters */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-purple-600 hover:text-purple-700"
                >
                  Clear All
                </button>
              </div>

              {/* Content Type Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Content Type</h4>
                <div className="space-y-2">
                  {filterOptions.contentType.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <label key={type.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedFilters.contentType.includes(type.value)}
                          onChange={() => handleFilterChange('contentType', type.value)}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <IconComponent className="w-4 h-4 ml-2 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-700">{type.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Category</h4>
                <div className="space-y-2">
                  {filterOptions.category.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.category.includes(category)}
                        onChange={() => handleFilterChange('category', category)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Difficulty</h4>
                <div className="space-y-2">
                  {filterOptions.difficulty.map((difficulty) => (
                    <label key={difficulty} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.difficulty.includes(difficulty)}
                        onChange={() => handleFilterChange('difficulty', difficulty)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{difficulty}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Minimum Rating</h4>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        checked={selectedFilters.rating === rating}
                        onChange={() => handleFilterChange('rating', rating)}
                        className="border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <div className="ml-2 flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-sm text-gray-700">{rating}+ stars</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {isSearching ? 'Searching...' : `${searchResults.length} results found`}
                </span>
                {searchQuery && (
                  <span className="text-sm text-gray-500">
                    for "{searchQuery}"
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
                <div className="flex border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search Results */}
            {isSearching ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Searching for the best content...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                {searchResults.map(renderSearchResult)}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearchDiscovery;

