import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Book, 
  Download, 
  Play, 
  FileText, 
  MessageSquare, 
  Users, 
  Star, 
  Search, 
  Filter, 
  Grid, 
  List, 
  ExternalLink, 
  Copy, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Info, 
  HelpCircle, 
  Settings, 
  RefreshCw, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Share2, 
  Bookmark, 
  Tag, 
  Clock, 
  Activity, 
  BarChart3, 
  LineChart, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Lock, 
  Key, 
  User, 
  Mail, 
  Phone, 
  Video, 
  Image, 
  File, 
  Folder, 
  Link, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
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
  Store, 
  Warehouse, 
  Factory, 
  Hospital, 
  School, 
  University, 
  GraduationCap, 
  BookOpen, 
  Newspaper, 
  Archive, 
  Paperclip, 
  Scissors, 
  Clipboard, 
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

const DeveloperPortal = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample documentation sections
  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guide to begin developing with our platform',
      icon: Play,
      articles: 12,
      lastUpdated: '2025-01-07T00:00:00Z',
      difficulty: 'Beginner',
      estimatedTime: '15 minutes'
    },
    {
      id: 'authentication',
      title: 'Authentication',
      description: 'Learn how to authenticate your applications and users',
      icon: Shield,
      articles: 8,
      lastUpdated: '2025-01-05T00:00:00Z',
      difficulty: 'Intermediate',
      estimatedTime: '30 minutes'
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete reference for all API endpoints and methods',
      icon: Code,
      articles: 45,
      lastUpdated: '2025-01-06T00:00:00Z',
      difficulty: 'Advanced',
      estimatedTime: '2 hours'
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      description: 'Set up real-time notifications for your applications',
      icon: Zap,
      articles: 6,
      lastUpdated: '2025-01-04T00:00:00Z',
      difficulty: 'Intermediate',
      estimatedTime: '45 minutes'
    },
    {
      id: 'sdks',
      title: 'SDKs & Libraries',
      description: 'Official SDKs and community libraries for various languages',
      icon: Package,
      articles: 15,
      lastUpdated: '2025-01-03T00:00:00Z',
      difficulty: 'Beginner',
      estimatedTime: '20 minutes'
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step tutorials for common use cases',
      icon: BookOpen,
      articles: 24,
      lastUpdated: '2025-01-02T00:00:00Z',
      difficulty: 'All Levels',
      estimatedTime: '1 hour'
    }
  ];

  // Sample SDKs
  const sdks = [
    {
      id: 'javascript-sdk',
      name: 'JavaScript SDK',
      language: 'JavaScript',
      version: '2.4.1',
      description: 'Official JavaScript SDK for web and Node.js applications',
      downloads: 45230,
      stars: 1247,
      lastUpdated: '2025-01-07T00:00:00Z',
      documentation: 'Complete',
      examples: 15,
      size: '124 KB'
    },
    {
      id: 'python-sdk',
      name: 'Python SDK',
      language: 'Python',
      version: '1.8.3',
      description: 'Official Python SDK with async support',
      downloads: 32180,
      stars: 892,
      lastUpdated: '2025-01-05T00:00:00Z',
      documentation: 'Complete',
      examples: 12,
      size: '89 KB'
    },
    {
      id: 'php-sdk',
      name: 'PHP SDK',
      language: 'PHP',
      version: '3.1.0',
      description: 'Official PHP SDK with Laravel integration',
      downloads: 18750,
      stars: 567,
      lastUpdated: '2025-01-03T00:00:00Z',
      documentation: 'Complete',
      examples: 8,
      size: '156 KB'
    },
    {
      id: 'ruby-sdk',
      name: 'Ruby SDK',
      language: 'Ruby',
      version: '2.2.1',
      description: 'Official Ruby SDK with Rails support',
      downloads: 12340,
      stars: 423,
      lastUpdated: '2024-12-28T00:00:00Z',
      documentation: 'Complete',
      examples: 10,
      size: '98 KB'
    }
  ];

  // Sample code examples
  const codeExamples = {
    javascript: `// Initialize the SDK
import { FlourishAPI } from '@flourish/sdk';

const client = new FlourishAPI({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create a new user
const user = await client.users.create({
  email: 'user@example.com',
  name: 'John Doe',
  preferences: {
    notifications: true,
    theme: 'dark'
  }
});

console.log('User created:', user.id);`,
    python: `# Initialize the SDK
from flourish_sdk import FlourishAPI

client = FlourishAPI(
    api_key='your-api-key',
    environment='production'
)

# Create a new user
user = client.users.create(
    email='user@example.com',
    name='John Doe',
    preferences={
        'notifications': True,
        'theme': 'dark'
    }
)

print(f'User created: {user.id}')`,
    php: `<?php
// Initialize the SDK
use Flourish\\SDK\\FlourishAPI;

$client = new FlourishAPI([
    'api_key' => 'your-api-key',
    'environment' => 'production'
]);

// Create a new user
$user = $client->users->create([
    'email' => 'user@example.com',
    'name' => 'John Doe',
    'preferences' => [
        'notifications' => true,
        'theme' => 'dark'
    ]
]);

echo 'User created: ' . $user->id;`,
    ruby: `# Initialize the SDK
require 'flourish_sdk'

client = FlourishSDK::Client.new(
  api_key: 'your-api-key',
  environment: 'production'
)

# Create a new user
user = client.users.create(
  email: 'user@example.com',
  name: 'John Doe',
  preferences: {
    notifications: true,
    theme: 'dark'
  }
)

puts "User created: #{user.id}"`
  };

  // Sample community posts
  const communityPosts = [
    {
      id: 'post-001',
      title: 'Best practices for handling rate limits',
      author: 'Sarah Chen',
      avatar: 'SC',
      category: 'Best Practices',
      replies: 23,
      views: 1247,
      lastActivity: '2025-01-07T10:30:00Z',
      tags: ['rate-limiting', 'api', 'best-practices'],
      solved: true
    },
    {
      id: 'post-002',
      title: 'How to implement webhook retries?',
      author: 'Mike Johnson',
      avatar: 'MJ',
      category: 'Webhooks',
      replies: 15,
      views: 892,
      lastActivity: '2025-01-07T09:15:00Z',
      tags: ['webhooks', 'retries', 'error-handling'],
      solved: false
    },
    {
      id: 'post-003',
      title: 'New JavaScript SDK v2.4.1 released!',
      author: 'Flourish Team',
      avatar: 'FT',
      category: 'Announcements',
      replies: 8,
      views: 2156,
      lastActivity: '2025-01-07T08:00:00Z',
      tags: ['sdk', 'javascript', 'release'],
      solved: false
    },
    {
      id: 'post-004',
      title: 'Optimizing API performance for mobile apps',
      author: 'Alex Rodriguez',
      avatar: 'AR',
      category: 'Performance',
      replies: 31,
      views: 1534,
      lastActivity: '2025-01-06T16:45:00Z',
      tags: ['performance', 'mobile', 'optimization'],
      solved: true
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800',
      'All Levels': 'bg-blue-100 text-blue-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Best Practices': 'bg-blue-100 text-blue-800',
      'Webhooks': 'bg-purple-100 text-purple-800',
      'Announcements': 'bg-green-100 text-green-800',
      'Performance': 'bg-yellow-100 text-yellow-800',
      'API': 'bg-red-100 text-red-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Developer Portal</h1>
              <p className="mt-2 text-gray-400">Everything you need to build amazing integrations</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400">API Status: Operational</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Settings className="h-5 w-5" />
                <span>API Keys</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all">
                <Plus className="h-5 w-5" />
                <span>New Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Search */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation, guides, and examples..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
              <Filter className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Home },
              { id: 'documentation', label: 'Documentation', icon: Book },
              { id: 'api-reference', label: 'API Reference', icon: Code },
              { id: 'sdks', label: 'SDKs', icon: Package },
              { id: 'tutorials', label: 'Tutorials', icon: Play },
              { id: 'community', label: 'Community', icon: Users }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-400'
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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center py-12">
              <h2 className="text-4xl font-bold text-white mb-4">Build the Future of Relationships</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our comprehensive developer platform provides everything you need to create powerful integrations 
                and extend the Flourish ecosystem.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  <Play className="h-5 w-5" />
                  <span>Quick Start</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                  <Code className="h-5 w-5" />
                  <span>API Reference</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-indigo-900 rounded-lg mx-auto w-fit mb-4">
                  <Code className="h-8 w-8 text-indigo-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">150+</p>
                <p className="text-gray-400">API Endpoints</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-green-900 rounded-lg mx-auto w-fit mb-4">
                  <Users className="h-8 w-8 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">5,000+</p>
                <p className="text-gray-400">Developers</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-purple-900 rounded-lg mx-auto w-fit mb-4">
                  <Package className="h-8 w-8 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">12</p>
                <p className="text-gray-400">Official SDKs</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-yellow-900 rounded-lg mx-auto w-fit mb-4">
                  <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">99.9%</p>
                <p className="text-gray-400">Uptime</p>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Getting Started</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-indigo-900 rounded-lg mx-auto w-fit mb-4">
                    <Key className="h-8 w-8 text-indigo-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">1. Get API Keys</h4>
                  <p className="text-gray-400 mb-4">Create your developer account and generate API keys for authentication.</p>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Get Started
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mx-auto w-fit mb-4">
                    <Download className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">2. Install SDK</h4>
                  <p className="text-gray-400 mb-4">Choose your preferred language and install our official SDK.</p>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    View SDKs
                  </button>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mx-auto w-fit mb-4">
                    <Play className="h-8 w-8 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">3. Build & Deploy</h4>
                  <p className="text-gray-400 mb-4">Follow our tutorials and start building your integration.</p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Tutorials
                  </button>
                </div>
              </div>
            </div>

            {/* Popular Resources */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Popular Documentation</h3>
                <div className="space-y-4">
                  {documentationSections.slice(0, 4).map((section) => (
                    <div key={section.id} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="p-2 bg-indigo-900 rounded-lg">
                        <section.icon className="h-5 w-5 text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{section.title}</h4>
                        <p className="text-gray-400 text-sm">{section.articles} articles</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Latest Community Posts</h3>
                <div className="space-y-4">
                  {communityPosts.slice(0, 4).map((post) => (
                    <div key={post.id} className="p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {post.avatar}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-medium text-sm">{post.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-gray-400 text-xs">{post.author}</span>
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-400 text-xs">{post.replies} replies</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Documentation Tab */}
        {activeTab === 'documentation' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documentationSections.map((section) => (
                <div key={section.id} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-indigo-900 rounded-lg">
                      <section.icon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{section.title}</h3>
                      <p className="text-gray-400 text-sm">{section.articles} articles</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{section.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(section.difficulty)}`}>
                      {section.difficulty}
                    </span>
                    <span className="text-gray-400 text-sm">{section.estimatedTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Updated {formatDate(section.lastUpdated)}</span>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Reference Tab */}
        {activeTab === 'api-reference' && (
          <div className="space-y-8">
            {/* API Explorer */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-white mb-6">API Explorer</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Try it out</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Endpoint</label>
                      <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                        <option value="users">GET /api/v3/users</option>
                        <option value="user-create">POST /api/v3/users</option>
                        <option value="user-update">PUT /api/v3/users/:id</option>
                        <option value="user-delete">DELETE /api/v3/users/:id</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Headers</label>
                      <textarea
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        rows="3"
                        placeholder="Authorization: Bearer your-api-key"
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Request Body</label>
                      <textarea
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        rows="6"
                        placeholder='{\n  "email": "user@example.com",\n  "name": "John Doe"\n}'
                      ></textarea>
                    </div>
                    
                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      Send Request
                    </button>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Response</h4>
                  <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-auto">
                    <pre className="text-green-400 text-sm">
{`{
  "id": "user_1234567890",
  "email": "user@example.com",
  "name": "John Doe",
  "created_at": "2025-01-07T10:30:00Z",
  "updated_at": "2025-01-07T10:30:00Z",
  "preferences": {
    "notifications": true,
    "theme": "dark"
  },
  "status": "active"
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Code Examples</h3>
                <div className="flex items-center space-x-2">
                  <select 
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="php">PHP</option>
                    <option value="ruby">Ruby</option>
                  </select>
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <Copy className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-auto">
                <pre className="text-green-400 text-sm">
                  <code>{codeExamples[selectedLanguage]}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* SDKs Tab */}
        {activeTab === 'sdks' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sdks.map((sdk) => (
                <div key={sdk.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-indigo-900 rounded-lg">
                        <Code className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{sdk.name}</h3>
                        <p className="text-gray-400 text-sm">{sdk.language} • v{sdk.version}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span className="text-white text-sm">{formatNumber(sdk.stars)}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{sdk.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-400">Downloads:</span>
                      <span className="text-white ml-2">{formatNumber(sdk.downloads)}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Size:</span>
                      <span className="text-white ml-2">{sdk.size}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Examples:</span>
                      <span className="text-white ml-2">{sdk.examples}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Updated:</span>
                      <span className="text-white ml-2">{formatDate(sdk.lastUpdated)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                      <Download className="h-4 w-4 inline mr-2" />
                      Install
                    </button>
                    <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                      <Book className="h-4 w-4 inline mr-2" />
                      Docs
                    </button>
                    <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tutorials Tab */}
        {activeTab === 'tutorials' && (
          <div className="space-y-8">
            {/* Tutorial Categories */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Quick Start', description: 'Get up and running in 5 minutes', icon: Zap, tutorials: 3 },
                { title: 'Authentication', description: 'Secure your applications', icon: Shield, tutorials: 5 },
                { title: 'Webhooks', description: 'Real-time notifications', icon: Bell, tutorials: 4 },
                { title: 'Data Management', description: 'CRUD operations and best practices', icon: Database, tutorials: 8 },
                { title: 'Advanced Features', description: 'Power user techniques', icon: Star, tutorials: 6 },
                { title: 'Troubleshooting', description: 'Common issues and solutions', icon: HelpCircle, tutorials: 7 }
              ].map((category, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-indigo-900 rounded-lg">
                      <category.icon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-gray-400 text-sm">{category.tutorials} tutorials</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    View Tutorials
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <div className="space-y-8">
            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-blue-900 rounded-lg mx-auto w-fit mb-4">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">5,247</p>
                <p className="text-gray-400">Community Members</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-green-900 rounded-lg mx-auto w-fit mb-4">
                  <MessageSquare className="h-8 w-8 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">1,892</p>
                <p className="text-gray-400">Discussions</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-purple-900 rounded-lg mx-auto w-fit mb-4">
                  <CheckCircle className="h-8 w-8 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">1,456</p>
                <p className="text-gray-400">Solved Issues</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="p-3 bg-yellow-900 rounded-lg mx-auto w-fit mb-4">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-2">4.8</p>
                <p className="text-gray-400">Avg Rating</p>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Recent Discussions</h3>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  New Post
                </button>
              </div>
              
              <div className="space-y-4">
                {communityPosts.map((post) => (
                  <div key={post.id} className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-white font-medium">{post.title}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-gray-400 text-sm">{post.author}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                                {post.category}
                              </span>
                              {post.solved && (
                                <span className="px-2 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                                  Solved
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-gray-400 text-sm">{formatDate(post.lastActivity)}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>{post.replies} replies</span>
                          <span>{formatNumber(post.views)} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeveloperPortal;

