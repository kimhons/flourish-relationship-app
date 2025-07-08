import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Heart, 
  MessageCircle, 
  Share, 
  Bookmark,
  Play,
  Eye,
  Clock,
  MapPin,
  Star,
  Flame,
  Users,
  Music,
  Camera,
  Video,
  Image,
  Hash,
  AtSign,
  Globe,
  Calendar,
  Award,
  Zap,
  Coffee,
  Plane,
  Car,
  Home,
  Dumbbell,
  Palette,
  Book,
  Gamepad2,
  Utensils
} from 'lucide-react';

const ExploreFeed = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    contentType: 'all',
    location: 'all',
    timeframe: 'week'
  });

  const categories = [
    { id: 'trending', label: 'Trending', icon: <TrendingUp className="w-4 h-4" />, color: 'text-red-500' },
    { id: 'nearby', label: 'Nearby', icon: <MapPin className="w-4 h-4" />, color: 'text-blue-500' },
    { id: 'popular', label: 'Popular', icon: <Flame className="w-4 h-4" />, color: 'text-orange-500' },
    { id: 'recent', label: 'Recent', icon: <Clock className="w-4 h-4" />, color: 'text-green-500' },
    { id: 'featured', label: 'Featured', icon: <Star className="w-4 h-4" />, color: 'text-yellow-500' }
  ];

  const interests = [
    { id: 'food', label: 'Food', icon: <Utensils className="w-4 h-4" />, count: '2.3k' },
    { id: 'travel', label: 'Travel', icon: <Plane className="w-4 h-4" />, count: '1.8k' },
    { id: 'fitness', label: 'Fitness', icon: <Dumbbell className="w-4 h-4" />, count: '1.5k' },
    { id: 'art', label: 'Art', icon: <Palette className="w-4 h-4" />, count: '1.2k' },
    { id: 'music', label: 'Music', icon: <Music className="w-4 h-4" />, count: '2.1k' },
    { id: 'books', label: 'Books', icon: <Book className="w-4 h-4" />, count: '890' },
    { id: 'gaming', label: 'Gaming', icon: <Gamepad2 className="w-4 h-4" />, count: '1.4k' },
    { id: 'coffee', label: 'Coffee', icon: <Coffee className="w-4 h-4" />, count: '967' }
  ];

  const exploreContent = [
    {
      id: 1,
      type: 'reel',
      user: {
        name: 'Alex Chen',
        username: '@alex_adventures',
        avatar: '/api/placeholder/40/40',
        verified: true,
        location: 'San Francisco, CA'
      },
      content: {
        thumbnail: '/api/placeholder/200/300',
        caption: 'Morning hike with the best view! Who wants to join next time? 🏔️',
        duration: '0:24',
        music: 'Adventure Vibes - Indie Folk'
      },
      stats: {
        likes: 3247,
        comments: 156,
        shares: 89,
        views: 45230
      },
      tags: ['#hiking', '#adventure', '#nature', '#sanfrancisco'],
      trending: true,
      timestamp: '3 hours ago'
    },
    {
      id: 2,
      type: 'post',
      user: {
        name: 'Maria Rodriguez',
        username: '@maria_creates',
        avatar: '/api/placeholder/40/40',
        verified: false,
        location: 'Los Angeles, CA'
      },
      content: {
        images: ['/api/placeholder/200/200', '/api/placeholder/200/200'],
        caption: 'Homemade pasta night! Recipe in comments 🍝 Perfect for date nights at home',
        location: 'Downtown LA'
      },
      stats: {
        likes: 1892,
        comments: 234,
        shares: 67,
        views: 12450
      },
      tags: ['#cooking', '#pasta', '#datenight', '#homemade'],
      trending: false,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      type: 'reel',
      user: {
        name: 'David Kim',
        username: '@david_fitness',
        avatar: '/api/placeholder/40/40',
        verified: true,
        location: 'New York, NY'
      },
      content: {
        thumbnail: '/api/placeholder/200/300',
        caption: '5-minute morning workout routine! Start your day right 💪',
        duration: '0:45',
        music: 'Workout Beats - Electronic'
      },
      stats: {
        likes: 5634,
        comments: 289,
        shares: 156,
        views: 78920
      },
      tags: ['#fitness', '#workout', '#morning', '#motivation'],
      trending: true,
      timestamp: '1 day ago'
    },
    {
      id: 4,
      type: 'post',
      user: {
        name: 'Emma Wilson',
        username: '@emma_art',
        avatar: '/api/placeholder/40/40',
        verified: false,
        location: 'Portland, OR'
      },
      content: {
        images: ['/api/placeholder/200/200']
      },
      caption: 'Latest painting finished! Inspired by the sunset last night 🎨',
      stats: {
        likes: 967,
        comments: 78,
        shares: 23,
        views: 5670
      },
      tags: ['#art', '#painting', '#sunset', '#creative'],
      trending: false,
      timestamp: '2 days ago'
    }
  ];

  const trendingHashtags = [
    { tag: '#DateNight', posts: '12.3k', growth: '+15%' },
    { tag: '#Adventure', posts: '8.7k', growth: '+22%' },
    { tag: '#Foodie', posts: '15.6k', growth: '+8%' },
    { tag: '#Fitness', posts: '9.2k', growth: '+18%' },
    { tag: '#Travel', posts: '11.4k', growth: '+12%' }
  ];

  const renderContentGrid = () => (
    <div className="grid grid-cols-2 gap-1">
      {exploreContent.map((item) => (
        <div key={item.id} className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={item.type === 'reel' ? item.content.thumbnail : item.content.images[0]}
            alt="Content"
            className="w-full h-full object-cover"
          />
          
          {/* Content Type Indicator */}
          <div className="absolute top-2 right-2">
            {item.type === 'reel' ? (
              <div className="bg-black bg-opacity-60 rounded-full p-1">
                <Play className="w-4 h-4 text-white" />
              </div>
            ) : (
              <div className="bg-black bg-opacity-60 rounded-full p-1">
                <Image className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          {/* Trending Badge */}
          {item.trending && (
            <div className="absolute top-2 left-2">
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                <Flame className="w-3 h-3" />
                <span>Trending</span>
              </div>
            </div>
          )}

          {/* Stats Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{item.stats.likes > 1000 ? `${(item.stats.likes/1000).toFixed(1)}k` : item.stats.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{item.stats.comments}</span>
                </div>
              </div>
              {item.type === 'reel' && (
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{item.stats.views > 1000 ? `${(item.stats.views/1000).toFixed(1)}k` : item.stats.views}</span>
                </div>
              )}
            </div>
          </div>

          {/* Duration for Reels */}
          {item.type === 'reel' && (
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
              {item.content.duration}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderTrendingSection = () => (
    <div className="space-y-4">
      {/* Trending Hashtags */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
          <Hash className="w-5 h-5 mr-2 text-blue-500" />
          Trending Hashtags
        </h3>
        <div className="space-y-2">
          {trendingHashtags.map((hashtag, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <span className="font-medium text-blue-600">{hashtag.tag}</span>
                <span className="text-sm text-gray-500 ml-2">{hashtag.posts} posts</span>
              </div>
              <span className="text-sm text-green-600 font-medium">{hashtag.growth}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interest Categories */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="font-semibold text-gray-900 mb-3">Popular Interests</h3>
        <div className="grid grid-cols-2 gap-3">
          {interests.map((interest) => (
            <button
              key={interest.id}
              className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-600">{interest.icon}</div>
              <div className="flex-1 text-left">
                <div className="font-medium text-gray-900">{interest.label}</div>
                <div className="text-sm text-gray-500">{interest.count} posts</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      {renderContentGrid()}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search posts, people, hashtags..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b">
          <div className="max-w-md mx-auto px-4 py-3">
            <div className="grid grid-cols-3 gap-3">
              <select
                value={selectedFilters.contentType}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, contentType: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500"
              >
                <option value="all">All Content</option>
                <option value="posts">Posts Only</option>
                <option value="reels">Reels Only</option>
              </select>
              <select
                value={selectedFilters.location}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, location: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500"
              >
                <option value="all">All Locations</option>
                <option value="nearby">Nearby</option>
                <option value="city">Same City</option>
              </select>
              <select
                value={selectedFilters.timeframe}
                onChange={(e) => setSelectedFilters(prev => ({ ...prev, timeframe: e.target.value }))}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-pink-500"
              >
                <option value="day">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Category Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto px-4 py-3">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-pink-100 text-pink-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className={activeCategory === category.id ? category.color : 'text-gray-500'}>
                  {category.icon}
                </span>
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-4 py-4">
        {activeCategory === 'trending' ? renderTrendingSection() : renderContentGrid()}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-6">
        <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all">
          <Camera className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ExploreFeed;

