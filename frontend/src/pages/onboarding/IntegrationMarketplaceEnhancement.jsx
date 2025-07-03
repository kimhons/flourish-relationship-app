import React, { useState, useEffect } from 'react';
import { 
  Store, 
  Star, 
  Download, 
  Heart, 
  Search, 
  Filter, 
  Grid, 
  List, 
  TrendingUp, 
  Award, 
  Shield, 
  Zap, 
  Clock, 
  Users, 
  Tag, 
  Eye, 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  Plus, 
  Settings, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Globe, 
  Lock, 
  Key, 
  User, 
  Mail, 
  Phone, 
  Video, 
  Image, 
  File, 
  FileText, 
  Folder, 
  Link, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
  HelpCircle, 
  Bell, 
  BellOff, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Desktop, 
  Watch, 
  Headphones, 
  Speaker, 
  Radio, 
  Tv, 
  Gamepad2, 
  Power, 
  Battery, 
  Plug, 
  Lightbulb, 
  Sun, 
  Moon, 
  CloudSun, 
  CloudRain, 
  Umbrella, 
  Wind, 
  Droplets, 
  Fire, 
  Flashlight, 
  Rainbow, 
  Diamond, 
  Crown, 
  Trophy, 
  Medal, 
  Ribbon, 
  Badge, 
  Certificate, 
  Scroll, 
  Document, 
  Contract, 
  Invoice, 
  Receipt, 
  Ticket, 
  Gift, 
  Present, 
  Balloon, 
  Party, 
  Cake, 
  Confetti, 
  Fireworks, 
  Sparkles, 
  Wand, 
  Magic, 
  Potion, 
  Bottle, 
  Flask, 
  TestTube, 
  Beaker, 
  Microscope, 
  Telescope, 
  Binoculars, 
  Magnifier, 
  Lens, 
  Focus, 
  Zoom, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  Expand, 
  Shrink, 
  Fullscreen, 
  Layout, 
  Table, 
  Spreadsheet, 
  Calculator, 
  Ruler, 
  Triangle, 
  Square, 
  Circle, 
  Pentagon, 
  Hexagon, 
  Dice1, 
  Dice2, 
  Dice3, 
  Dice4, 
  Dice5, 
  Dice6, 
  Puzzle, 
  Blocks, 
  Brick, 
  Wall, 
  Gate, 
  Door, 
  Window, 
  Home, 
  Building, 
  Warehouse, 
  Factory, 
  Hospital, 
  School, 
  University, 
  GraduationCap, 
  BookOpen, 
  Book, 
  Newspaper, 
  Archive, 
  Paperclip, 
  Scissors, 
  Clipboard, 
  Edit, 
  Edit2, 
  Edit3, 
  PenTool, 
  Highlighter, 
  Type, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  ListOrdered, 
  Quote, 
  Command, 
  Option, 
  Alt, 
  Shift, 
  Ctrl, 
  Space, 
  Enter, 
  Backspace, 
  Delete, 
  Tab, 
  Escape, 
  Function, 
  MousePointer, 
  Hand, 
  Grab, 
  Pointer, 
  Click, 
  Touch, 
  Fingerprint, 
  Glasses, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Wifi, 
  WifiOff, 
  Router, 
  Network, 
  BluetoothConnected, 
  BluetoothSearching, 
  BluetoothOff, 
  Usb, 
  Hdmi, 
  Ethernet, 
  Rss, 
  QrCode, 
  Barcode, 
  ScanLine, 
  Dna, 
  Atom, 
  Molecule, 
  Satellite, 
  Radar, 
  Sonar, 
  Gps, 
  Location, 
  Crosshairs, 
  Bullseye, 
  Dartboard, 
  Archery, 
  Bow, 
  Arrow, 
  Sword, 
  Armor, 
  Scepter, 
  Orb, 
  Throne, 
  Castle, 
  Tower, 
  Bridge, 
  Lighthouse, 
  Windmill, 
  Dam, 
  Well, 
  Fountain, 
  Lake, 
  River, 
  Ocean, 
  Beach, 
  Island, 
  Mountain, 
  Hill, 
  Valley, 
  Desert, 
  Forest, 
  Tree, 
  Palm, 
  Cactus, 
  Flower, 
  Rose, 
  Leaf, 
  Branch, 
  Seed, 
  Sprout, 
  Bush, 
  Grass, 
  Vine, 
  Bamboo, 
  Wheat, 
  Corn, 
  Rice
} from 'lucide-react';

const IntegrationMarketplaceEnhancement = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [integrations, setIntegrations] = useState([]);
  const [featuredIntegrations, setFeaturedIntegrations] = useState([]);

  // Sample integration data
  const sampleIntegrations = [
    {
      id: 'salesforce-crm',
      name: 'Salesforce CRM',
      description: 'Complete customer relationship management integration with advanced lead tracking and sales pipeline management.',
      category: 'CRM',
      developer: 'Salesforce Inc.',
      version: '2.4.1',
      rating: 4.8,
      reviews: 1247,
      downloads: 15420,
      price: 'Free',
      featured: true,
      verified: true,
      trending: true,
      tags: ['CRM', 'Sales', 'Lead Management', 'Pipeline'],
      lastUpdated: '2025-01-05T00:00:00Z',
      compatibility: ['v3.2.1', 'v3.1.5'],
      screenshots: 3,
      documentation: 'Complete',
      support: '24/7',
      installation: 'One-click',
      security: 'Enterprise Grade'
    },
    {
      id: 'stripe-payments',
      name: 'Stripe Payments',
      description: 'Secure payment processing with support for multiple currencies, subscriptions, and advanced fraud protection.',
      category: 'Payment',
      developer: 'Stripe Inc.',
      version: '3.1.0',
      rating: 4.9,
      reviews: 2156,
      downloads: 23890,
      price: 'Free',
      featured: true,
      verified: true,
      trending: false,
      tags: ['Payments', 'Subscriptions', 'Fraud Protection', 'Multi-currency'],
      lastUpdated: '2025-01-03T00:00:00Z',
      compatibility: ['v3.2.1', 'v3.1.5', 'v3.0.8'],
      screenshots: 5,
      documentation: 'Complete',
      support: '24/7',
      installation: 'One-click',
      security: 'PCI Compliant'
    },
    {
      id: 'mailchimp-email',
      name: 'Mailchimp Email Marketing',
      description: 'Powerful email marketing automation with advanced segmentation, A/B testing, and detailed analytics.',
      category: 'Marketing',
      developer: 'Mailchimp LLC',
      version: '1.8.3',
      rating: 4.6,
      reviews: 892,
      downloads: 8750,
      price: '$29/month',
      featured: false,
      verified: true,
      trending: true,
      tags: ['Email Marketing', 'Automation', 'Analytics', 'Segmentation'],
      lastUpdated: '2024-12-28T00:00:00Z',
      compatibility: ['v3.2.1', 'v3.1.5'],
      screenshots: 4,
      documentation: 'Complete',
      support: 'Business Hours',
      installation: 'Guided Setup',
      security: 'SOC 2 Compliant'
    },
    {
      id: 'slack-communication',
      name: 'Slack Team Communication',
      description: 'Seamless team communication integration with real-time notifications, file sharing, and workflow automation.',
      category: 'Communication',
      developer: 'Slack Technologies',
      version: '2.2.1',
      rating: 4.7,
      reviews: 1534,
      downloads: 12340,
      price: 'Free',
      featured: false,
      verified: true,
      trending: false,
      tags: ['Communication', 'Team Collaboration', 'Notifications', 'Workflows'],
      lastUpdated: '2025-01-01T00:00:00Z',
      compatibility: ['v3.2.1'],
      screenshots: 3,
      documentation: 'Complete',
      support: '24/7',
      installation: 'One-click',
      security: 'Enterprise Grade'
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      description: 'Comprehensive web analytics with advanced tracking, custom reports, and AI-powered insights.',
      category: 'Analytics',
      developer: 'Google LLC',
      version: '4.1.2',
      rating: 4.5,
      reviews: 3421,
      downloads: 28750,
      price: 'Free',
      featured: true,
      verified: true,
      trending: true,
      tags: ['Analytics', 'Tracking', 'Reports', 'AI Insights'],
      lastUpdated: '2024-12-30T00:00:00Z',
      compatibility: ['v3.2.1', 'v3.1.5', 'v3.0.8'],
      screenshots: 6,
      documentation: 'Complete',
      support: 'Community',
      installation: 'One-click',
      security: 'Google Security'
    },
    {
      id: 'hubspot-marketing',
      name: 'HubSpot Marketing Hub',
      description: 'All-in-one marketing platform with lead generation, content management, and marketing automation.',
      category: 'Marketing',
      developer: 'HubSpot Inc.',
      version: '3.0.5',
      rating: 4.4,
      reviews: 756,
      downloads: 6890,
      price: '$45/month',
      featured: false,
      verified: true,
      trending: false,
      tags: ['Marketing Automation', 'Lead Generation', 'Content Management', 'CRM'],
      lastUpdated: '2024-12-25T00:00:00Z',
      compatibility: ['v3.2.1', 'v3.1.5'],
      screenshots: 4,
      documentation: 'Complete',
      support: 'Business Hours',
      installation: 'Guided Setup',
      security: 'SOC 2 Compliant'
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Categories', count: sampleIntegrations.length, icon: Grid },
    { id: 'CRM', name: 'CRM & Sales', count: 1, icon: Users },
    { id: 'Payment', name: 'Payments', count: 1, icon: Shield },
    { id: 'Marketing', name: 'Marketing', count: 2, icon: TrendingUp },
    { id: 'Communication', name: 'Communication', count: 1, icon: MessageSquare },
    { id: 'Analytics', name: 'Analytics', count: 1, icon: BarChart3 }
  ];

  useEffect(() => {
    setIntegrations(sampleIntegrations);
    setFeaturedIntegrations(sampleIntegrations.filter(integration => integration.featured));
  }, []);

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedIntegrations = [...filteredIntegrations].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400 text-yellow-400 opacity-50" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-400" />);
    }

    return stars;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'CRM': 'bg-blue-100 text-blue-800',
      'Payment': 'bg-green-100 text-green-800',
      'Marketing': 'bg-purple-100 text-purple-800',
      'Communication': 'bg-yellow-100 text-yellow-800',
      'Analytics': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Integration Marketplace</h1>
              <p className="mt-2 text-gray-400">Discover, install, and manage integrations for your platform</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400">Marketplace Online</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Settings className="h-5 w-5" />
                <span>Manage</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                <Plus className="h-5 w-5" />
                <span>Submit Integration</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search integrations, categories, or features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
              
              <div className="flex items-center bg-gray-800 rounded-lg border border-gray-600">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'} rounded-l-lg transition-colors`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'} rounded-r-lg transition-colors`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'browse', label: 'Browse', icon: Store },
              { id: 'featured', label: 'Featured', icon: Star },
              { id: 'trending', label: 'Trending', icon: TrendingUp },
              { id: 'installed', label: 'Installed', icon: CheckCircle },
              { id: 'favorites', label: 'Favorites', icon: Heart },
              { id: 'reviews', label: 'Reviews', icon: MessageSquare }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
                    : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
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
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="h-5 w-5" />
                      <span>{category.name}</span>
                    </div>
                    <span className="text-sm bg-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-white mb-4">Marketplace Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Integrations</span>
                  <span className="text-white font-semibold">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Verified Publishers</span>
                  <span className="text-white font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Downloads</span>
                  <span className="text-white font-semibold">1.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Avg Rating</span>
                  <span className="text-white font-semibold">4.6★</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Section */}
            {activeTab === 'browse' && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Featured Integrations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredIntegrations.slice(0, 3).map((integration) => (
                    <div key={integration.id} className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-xl shadow-lg p-6 relative overflow-hidden">
                      <div className="absolute top-4 right-4">
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                          FEATURED
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-white bg-opacity-20 rounded-lg">
                          <Store className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                          <p className="text-blue-200 text-sm">{integration.developer}</p>
                        </div>
                      </div>
                      
                      <p className="text-blue-100 text-sm mb-4 line-clamp-2">{integration.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          {renderStars(integration.rating)}
                          <span className="text-white text-sm ml-1">{integration.rating}</span>
                        </div>
                        <span className="text-blue-200 text-sm">{formatNumber(integration.downloads)} downloads</span>
                      </div>
                      
                      <button className="w-full bg-white text-blue-800 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                        Install Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Integrations Grid/List */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {activeTab === 'browse' ? 'All Integrations' : 
                   activeTab === 'featured' ? 'Featured Integrations' :
                   activeTab === 'trending' ? 'Trending Integrations' :
                   activeTab === 'installed' ? 'Installed Integrations' :
                   activeTab === 'favorites' ? 'Favorite Integrations' :
                   'Integration Reviews'}
                </h2>
                <span className="text-gray-400">
                  {sortedIntegrations.length} integrations found
                </span>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedIntegrations.map((integration) => (
                    <div key={integration.id} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-3 bg-blue-900 rounded-lg">
                            <Store className="h-6 w-6 text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                            <p className="text-gray-400 text-sm">{integration.developer}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {integration.verified && (
                            <CheckCircle className="h-5 w-5 text-green-400" title="Verified Publisher" />
                          )}
                          {integration.trending && (
                            <TrendingUp className="h-5 w-5 text-yellow-400" title="Trending" />
                          )}
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{integration.description}</p>
                      
                      <div className="flex items-center space-x-2 mb-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(integration.category)}`}>
                          {integration.category}
                        </span>
                        <span className="text-gray-400 text-xs">v{integration.version}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1">
                          {renderStars(integration.rating)}
                          <span className="text-white text-sm ml-1">{integration.rating}</span>
                          <span className="text-gray-400 text-sm">({integration.reviews})</span>
                        </div>
                        <span className="text-gray-400 text-sm">{formatNumber(integration.downloads)} downloads</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {integration.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                        {integration.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                            +{integration.tags.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-green-400">{integration.price}</span>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                            <Heart className="h-4 w-4 text-gray-400" />
                          </button>
                          <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                            <Eye className="h-4 w-4 text-gray-400" />
                          </button>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Install
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {sortedIntegrations.map((integration) => (
                    <div key={integration.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-3 bg-blue-900 rounded-lg">
                            <Store className="h-6 w-6 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(integration.category)}`}>
                                {integration.category}
                              </span>
                              {integration.verified && (
                                <CheckCircle className="h-5 w-5 text-green-400" title="Verified Publisher" />
                              )}
                              {integration.trending && (
                                <TrendingUp className="h-5 w-5 text-yellow-400" title="Trending" />
                              )}
                            </div>
                            <p className="text-gray-400 text-sm mb-2">{integration.developer} • v{integration.version}</p>
                            <p className="text-gray-300 mb-3">{integration.description}</p>
                            <div className="flex items-center space-x-6 text-sm text-gray-400">
                              <div className="flex items-center space-x-1">
                                {renderStars(integration.rating)}
                                <span className="ml-1">{integration.rating} ({integration.reviews} reviews)</span>
                              </div>
                              <span>{formatNumber(integration.downloads)} downloads</span>
                              <span>Updated {formatDate(integration.lastUpdated)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 ml-4">
                          <span className="text-lg font-bold text-green-400">{integration.price}</span>
                          <div className="flex items-center space-x-2">
                            <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                              <Heart className="h-4 w-4 text-gray-400" />
                            </button>
                            <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                              <Eye className="h-4 w-4 text-gray-400" />
                            </button>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              Install
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                Showing 1-{sortedIntegrations.length} of {sortedIntegrations.length} integrations
              </span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">2</button>
                <button className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">3</button>
                <button className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationMarketplaceEnhancement;

