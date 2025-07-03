import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Video, 
  Headphones, 
  FileText, 
  Star, 
  Clock, 
  Users, 
  Heart,
  Play,
  Pause,
  Download,
  Bookmark,
  Share2,
  Filter,
  Search,
  Grid,
  List,
  Crown,
  Lock,
  Unlock,
  Eye,
  ThumbsUp,
  MessageCircle,
  Award,
  Zap,
  Lightbulb,
  Target,
  TrendingUp,
  Calendar,
  User,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  RotateCcw,
  Settings,
  ExternalLink,
  Info,
  AlertCircle,
  Gift,
  Sparkles,
  Flame,
  Coffee,
  Moon,
  Sun,
  Brain,
  Compass,
  Map,
  Flag,
  Trophy,
  Medal,
  Gem,
  Shield,
  Feather,
  Layers,
  Archive,
  Folder,
  Tag,
  Hash,
  AtSign,
  Link,
  Globe,
  Wifi,
  WifiOff
} from 'lucide-react';

const ExclusiveRelationshipContent = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [content, setContent] = useState([]);
  const [myLibrary, setMyLibrary] = useState([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [playbackProgress, setPlaybackProgress] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Content categories
  const categories = [
    { id: 'all', name: 'All Categories', icon: BookOpen, color: 'bg-blue-500' },
    { id: 'communication', name: 'Communication', icon: MessageCircle, color: 'bg-green-500' },
    { id: 'intimacy', name: 'Intimacy', icon: Heart, color: 'bg-red-500' },
    { id: 'conflict', name: 'Conflict Resolution', icon: Shield, color: 'bg-purple-500' },
    { id: 'growth', name: 'Personal Growth', icon: TrendingUp, color: 'bg-orange-500' },
    { id: 'dating', name: 'Dating & Romance', icon: Sparkles, color: 'bg-pink-500' },
    { id: 'marriage', name: 'Marriage & Commitment', icon: Crown, color: 'bg-indigo-500' },
    { id: 'family', name: 'Family & Parenting', icon: Users, color: 'bg-teal-500' },
    { id: 'wellness', name: 'Relationship Wellness', icon: Zap, color: 'bg-yellow-500' },
    { id: 'expert', name: 'Expert Insights', icon: Brain, color: 'bg-gray-500' }
  ];

  const contentTypes = [
    { id: 'all', name: 'All Types', icon: Layers },
    { id: 'article', name: 'Articles', icon: FileText },
    { id: 'video', name: 'Videos', icon: Video },
    { id: 'audio', name: 'Podcasts', icon: Headphones },
    { id: 'course', name: 'Courses', icon: BookOpen },
    { id: 'guide', name: 'Guides', icon: Map },
    { id: 'worksheet', name: 'Worksheets', icon: Edit3 }
  ];

  // Sample exclusive content
  useEffect(() => {
    setContent([
      {
        id: 1,
        title: "The Science of Lasting Love: What Research Reveals",
        type: "article",
        category: "expert",
        author: "Dr. Sarah Johnson",
        authorTitle: "Relationship Psychologist",
        duration: "12 min read",
        publishDate: "2025-07-01",
        description: "Discover the latest scientific research on what makes relationships last, including insights from the Gottman Institute and Harvard's Grant Study.",
        thumbnail: "/api/placeholder/400/300",
        premium: true,
        featured: true,
        rating: 4.9,
        views: 15847,
        likes: 2341,
        comments: 156,
        tags: ["Research", "Science", "Longevity", "Psychology"],
        readTime: 12,
        difficulty: "Intermediate",
        keyTakeaways: [
          "The Four Horsemen that predict relationship failure",
          "How to build emotional bank accounts",
          "The importance of turning towards each other",
          "Creating shared meaning in relationships"
        ],
        relatedContent: [2, 3, 5],
        downloadable: true,
        bookmarked: false,
        progress: 0
      },
      {
        id: 2,
        title: "Mastering Difficult Conversations in Relationships",
        type: "video",
        category: "communication",
        author: "Dr. Michael Chen",
        authorTitle: "Communication Expert",
        duration: "45 minutes",
        publishDate: "2025-06-28",
        description: "Learn proven techniques for navigating challenging conversations with your partner, including de-escalation strategies and active listening skills.",
        thumbnail: "/api/placeholder/400/300",
        premium: true,
        featured: true,
        rating: 4.8,
        views: 12456,
        likes: 1876,
        comments: 234,
        tags: ["Communication", "Conflict", "Skills", "Video Course"],
        videoLength: 45,
        difficulty: "Beginner",
        chapters: [
          { title: "Understanding Communication Patterns", duration: "8 min" },
          { title: "The PEACE Method for Difficult Conversations", duration: "12 min" },
          { title: "Active Listening Techniques", duration: "10 min" },
          { title: "De-escalation Strategies", duration: "8 min" },
          { title: "Practice Scenarios", duration: "7 min" }
        ],
        relatedContent: [1, 4, 6],
        downloadable: false,
        bookmarked: true,
        progress: 65
      },
      {
        id: 3,
        title: "Intimacy After Trauma: A Healing Journey",
        type: "course",
        category: "intimacy",
        author: "Dr. Lisa Rodriguez",
        authorTitle: "Trauma-Informed Therapist",
        duration: "6 modules",
        publishDate: "2025-06-25",
        description: "A comprehensive course on rebuilding intimacy and trust after experiencing trauma, with practical exercises and healing strategies.",
        thumbnail: "/api/placeholder/400/300",
        premium: true,
        featured: false,
        rating: 4.9,
        views: 8934,
        likes: 1654,
        comments: 89,
        tags: ["Trauma", "Healing", "Intimacy", "Recovery"],
        moduleCount: 6,
        difficulty: "Advanced",
        modules: [
          { title: "Understanding Trauma's Impact on Relationships", completed: true },
          { title: "Creating Safety and Trust", completed: true },
          { title: "Rebuilding Physical Intimacy", completed: false },
          { title: "Emotional Reconnection Strategies", completed: false },
          { title: "Communication During Healing", completed: false },
          { title: "Moving Forward Together", completed: false }
        ],
        relatedContent: [1, 7, 9],
        downloadable: true,
        bookmarked: false,
        progress: 33
      },
      {
        id: 4,
        title: "The Weekly Relationship Check-In Podcast",
        type: "audio",
        category: "wellness",
        author: "Emma & James Thompson",
        authorTitle: "Relationship Coaches",
        duration: "35 minutes",
        publishDate: "2025-07-03",
        description: "Weekly insights and practical tips for maintaining relationship health, featuring real couple stories and expert advice.",
        thumbnail: "/api/placeholder/400/300",
        premium: true,
        featured: true,
        rating: 4.7,
        views: 23567,
        likes: 3421,
        comments: 567,
        tags: ["Podcast", "Weekly", "Tips", "Real Stories"],
        episodeNumber: 47,
        difficulty: "All Levels",
        episodes: [
          { title: "Building Daily Connection Rituals", duration: "32 min", date: "2025-07-03" },
          { title: "Managing Stress Together", duration: "28 min", date: "2025-06-26" },
          { title: "The Art of Appreciation", duration: "35 min", date: "2025-06-19" }
        ],
        relatedContent: [2, 5, 8],
        downloadable: true,
        bookmarked: true,
        progress: 0
      },
      {
        id: 5,
        title: "Love Languages in Action: Interactive Workbook",
        type: "worksheet",
        category: "communication",
        author: "Dr. Gary Chapman",
        authorTitle: "Author of The 5 Love Languages",
        duration: "2-3 hours",
        publishDate: "2025-06-20",
        description: "An interactive workbook to discover and practice your love languages with exercises, assessments, and action plans.",
        thumbnail: "/api/placeholder/400/300",
        premium: true,
        featured: false,
        rating: 4.8,
        views: 18923,
        likes: 2876,
        comments: 234,
        tags: ["Love Languages", "Interactive", "Assessment", "Practice"],
        pageCount: 24,
        difficulty: "Beginner",
        sections: [
          { title: "Love Language Assessment", completed: true },
          { title: "Understanding Your Partner's Language", completed: false },
          { title: "Daily Practice Exercises", completed: false },
          { title: "Creating Your Action Plan", completed: false }
        ],
        relatedContent: [1, 2, 6],
        downloadable: true,
        bookmarked: false,
        progress: 25
      },
      {
        id: 6,
        title: "Rebuilding Trust: A Step-by-Step Guide",
        type: "guide",
        category: "conflict",
        author: "Dr. John Gottman",
        authorTitle: "Relationship Researcher",
        duration: "8 chapters",
        publishDate: "2025-06-15",
        description: "A comprehensive guide to rebuilding trust after betrayal, with practical steps, exercises, and real-world examples.",
        thumbnail: "/api/placeholder/400/300",
        premium: true,
        featured: false,
        rating: 4.9,
        views: 11234,
        likes: 1987,
        comments: 123,
        tags: ["Trust", "Betrayal", "Recovery", "Step-by-Step"],
        chapterCount: 8,
        difficulty: "Advanced",
        chapters: [
          { title: "Understanding the Impact of Betrayal", completed: false },
          { title: "The Atonement Process", completed: false },
          { title: "Rebuilding Safety", completed: false },
          { title: "Processing Emotions Together", completed: false }
        ],
        relatedContent: [3, 7, 9],
        downloadable: true,
        bookmarked: true,
        progress: 0
      }
    ]);

    setMyLibrary([1, 2, 4, 5]);
    setFavorites([2, 4, 6]);
    setRecentlyViewed([1, 2, 3]);
    
    setPlaybackProgress({
      2: 65, // 65% through video
      3: 33, // 33% through course
      5: 25  // 25% through workbook
    });
  }, []);

  const filteredContent = content.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesType = selectedType === 'all' || item.type === selectedType;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const featuredContent = content.filter(item => item.featured);
  const libraryContent = content.filter(item => myLibrary.includes(item.id));
  const favoriteContent = content.filter(item => favorites.includes(item.id));

  const getTypeIcon = (type) => {
    const typeObj = contentTypes.find(t => t.id === type);
    return typeObj ? typeObj.icon : FileText;
  };

  const formatDuration = (item) => {
    switch (item.type) {
      case 'video':
        return `${item.videoLength} min`;
      case 'audio':
        return item.duration;
      case 'article':
        return `${item.readTime} min read`;
      case 'course':
        return `${item.moduleCount} modules`;
      case 'worksheet':
        return `${item.pageCount} pages`;
      case 'guide':
        return `${item.chapterCount} chapters`;
      default:
        return item.duration;
    }
  };

  const renderContentCard = (item) => {
    const TypeIcon = getTypeIcon(item.type);
    const category = categories.find(c => c.id === item.category);
    const CategoryIcon = category?.icon || BookOpen;
    const progress = playbackProgress[item.id] || 0;
    const isBookmarked = favorites.includes(item.id);
    const isInLibrary = myLibrary.includes(item.id);

    return (
      <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          
          {/* Overlay Icons */}
          <div className="absolute top-4 left-4">
            <div className={`h-8 w-8 ${category?.color} rounded-lg flex items-center justify-center`}>
              <CategoryIcon className="h-4 w-4 text-white" />
            </div>
          </div>
          
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <div className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
              <Crown className="h-3 w-3" />
              <span>Exclusive</span>
            </div>
            <button
              onClick={() => {
                if (isBookmarked) {
                  setFavorites(favorites.filter(id => id !== item.id));
                } else {
                  setFavorites([...favorites, item.id]);
                }
              }}
              className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
                isBookmarked 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white bg-opacity-90 text-gray-600 hover:bg-opacity-100'
              }`}
            >
              <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
          
          {/* Play Button for Video/Audio */}
          {(item.type === 'video' || item.type === 'audio') && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setCurrentlyPlaying(item.id)}
                className="h-16 w-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-colors"
              >
                <Play className="h-8 w-8 text-gray-700 ml-1" />
              </button>
            </div>
          )}
          
          {/* Progress Bar */}
          {progress > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-20">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          
          {/* Type Badge */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
            <TypeIcon className="h-3 w-3" />
            <span className="capitalize">{item.type}</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">{item.title}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                <span>{item.author}</span>
                <span>•</span>
                <span>{formatDuration(item)}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                {tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{item.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{item.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{item.likes.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{item.comments}</span>
              </div>
            </div>
            <span className="text-xs">{item.publishDate}</span>
          </div>
          
          {/* Progress for Courses/Guides */}
          {(item.type === 'course' || item.type === 'guide') && progress > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-blue-600 font-medium">{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              {item.downloadable && (
                <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </button>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              {!isInLibrary && (
                <button
                  onClick={() => setMyLibrary([...myLibrary, item.id])}
                  className="px-3 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Add to Library
                </button>
              )}
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                {progress > 0 ? 'Continue' : 'Start'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderFilters = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Discover Exclusive Content</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-1 text-purple-600 hover:text-purple-700"
          >
            <Filter className="h-4 w-4" />
            <span>{showFilters ? 'Hide' : 'Show'} Filters</span>
          </button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.slice(0, 6).map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{category.name}</span>
            </button>
          );
        })}
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Content Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {contentTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
              <option>Most Popular</option>
              <option>Newest First</option>
              <option>Highest Rated</option>
              <option>Most Viewed</option>
              <option>Recently Added</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );

  const renderFeaturedTab = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Exclusive Relationship Content</h2>
            <p className="text-purple-100 mb-4">
              Access premium articles, videos, courses, and resources from world-renowned relationship experts
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{content.length}+</div>
                <div className="text-sm text-purple-100">Premium Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-purple-100">Expert Authors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-sm text-purple-100">Avg Rating</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="h-24 w-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Crown className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      {renderFilters()}

      {/* Featured Content */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured This Week</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredContent.map(renderContentCard)}
        </div>
      </div>

      {/* All Content */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            All Content ({filteredContent.length})
          </h3>
        </div>
        
        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {filteredContent.map(renderContentCard)}
        </div>
      </div>
    </div>
  );

  const renderMyLibraryTab = () => (
    <div className="space-y-6">
      {/* Library Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-purple-600">{libraryContent.length}</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-blue-600">
                {Object.keys(playbackProgress).length}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Favorites</p>
              <p className="text-2xl font-bold text-red-600">{favoriteContent.length}</p>
            </div>
            <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Downloads</p>
              <p className="text-2xl font-bold text-green-600">
                {libraryContent.filter(item => item.downloadable).length}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Download className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Continue Watching/Reading */}
      {Object.keys(playbackProgress).length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Where You Left Off</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {content
              .filter(item => playbackProgress[item.id] > 0)
              .map(renderContentCard)}
          </div>
        </div>
      )}

      {/* My Library */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">My Library</h3>
        
        {libraryContent.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {libraryContent.map(renderContentCard)}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-gray-900 mb-2">Your library is empty</h4>
            <p className="text-gray-600 mb-4">Add content to your library to access it quickly.</p>
            <button
              onClick={() => setActiveTab('featured')}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Browse Content
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Exclusive Content Library</h1>
                <p className="text-sm text-gray-600">Premium relationship resources from world-class experts</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Crown className="h-4 w-4 text-purple-600" />
                <span>Premium Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('featured')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'featured'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Featured Content
            </button>
            <button
              onClick={() => setActiveTab('library')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'library'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              My Library
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'favorites'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Favorites
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'featured' && renderFeaturedTab()}
        {activeTab === 'library' && renderMyLibraryTab()}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Favorite Content</h3>
              {favoriteContent.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {favoriteContent.map(renderContentCard)}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h4>
                  <p className="text-gray-600 mb-4">Heart content you love to add it to your favorites.</p>
                  <button
                    onClick={() => setActiveTab('featured')}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Discover Content
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExclusiveRelationshipContent;

