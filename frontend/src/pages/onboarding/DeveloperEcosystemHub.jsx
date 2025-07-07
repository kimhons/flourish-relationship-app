import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Star, 
  Download, 
  GitBranch, 
  Zap, 
  Trophy, 
  Calendar,
  Search,
  Filter,
  Plus,
  ExternalLink,
  Heart,
  Share2,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Shield,
  Globe
} from 'lucide-react';

const DeveloperEcosystemHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Simulated real-time data
  const [ecosystemStats, setEcosystemStats] = useState({
    totalDevelopers: 12847,
    activeProjects: 2156,
    totalDownloads: 847293,
    communityScore: 94.7,
    monthlyGrowth: 23.4,
    satisfaction: 96.2
  });

  const [featuredProjects, setFeaturedProjects] = useState([
    {
      id: 1,
      name: "Smart Matching SDK",
      author: "FlourischCore",
      description: "Advanced AI-powered matching algorithms with 97.3% accuracy",
      category: "AI/ML",
      downloads: 45672,
      stars: 1247,
      language: "JavaScript",
      lastUpdated: "2 days ago",
      featured: true,
      tags: ["matching", "ai", "sdk"]
    },
    {
      id: 2,
      name: "Video Chat Widget",
      author: "CommunityDev",
      description: "Embeddable video chat component with advanced features",
      category: "Communication",
      downloads: 32145,
      stars: 892,
      language: "React",
      lastUpdated: "1 week ago",
      featured: true,
      tags: ["video", "chat", "widget"]
    },
    {
      id: 3,
      name: "Cultural Insights API",
      author: "GlobalTeam",
      description: "Cross-cultural compatibility and insights for international dating",
      category: "Analytics",
      downloads: 28934,
      stars: 756,
      language: "Python",
      lastUpdated: "3 days ago",
      featured: true,
      tags: ["culture", "analytics", "api"]
    }
  ]);

  const [communityEvents, setCommunityEvents] = useState([
    {
      id: 1,
      title: "Flourish Developer Conference 2025",
      date: "March 15-17, 2025",
      type: "Conference",
      attendees: 2847,
      location: "Virtual + San Francisco",
      status: "upcoming"
    },
    {
      id: 2,
      title: "AI Matching Hackathon",
      date: "February 28 - March 2, 2025",
      type: "Hackathon",
      attendees: 1256,
      location: "Global Virtual Event",
      status: "registration_open"
    },
    {
      id: 3,
      title: "Monthly Developer Meetup",
      date: "January 25, 2025",
      type: "Meetup",
      attendees: 456,
      location: "Online",
      status: "upcoming"
    }
  ]);

  const [topContributors, setTopContributors] = useState([
    {
      id: 1,
      name: "Alex Chen",
      avatar: "AC",
      contributions: 247,
      reputation: 9847,
      specialties: ["AI/ML", "Backend"],
      badge: "Core Contributor"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      avatar: "SJ",
      contributions: 189,
      reputation: 8234,
      specialties: ["Frontend", "UX"],
      badge: "Design Expert"
    },
    {
      id: 3,
      name: "Miguel Rodriguez",
      avatar: "MR",
      contributions: 156,
      reputation: 7456,
      specialties: ["Security", "DevOps"],
      badge: "Security Specialist"
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Categories', count: 2156 },
    { id: 'ai-ml', name: 'AI/ML', count: 456 },
    { id: 'communication', name: 'Communication', count: 342 },
    { id: 'analytics', name: 'Analytics', count: 289 },
    { id: 'security', name: 'Security', count: 234 },
    { id: 'ui-ux', name: 'UI/UX', count: 198 },
    { id: 'integration', name: 'Integration', count: 167 }
  ];

  const resources = [
    {
      id: 1,
      title: "Getting Started Guide",
      description: "Complete guide to building your first Flourish integration",
      type: "Documentation",
      difficulty: "Beginner",
      readTime: "15 min",
      rating: 4.9
    },
    {
      id: 2,
      title: "Advanced API Reference",
      description: "Comprehensive API documentation with examples",
      type: "API Docs",
      difficulty: "Advanced",
      readTime: "45 min",
      rating: 4.8
    },
    {
      id: 3,
      title: "Best Practices Guide",
      description: "Industry best practices for dating app development",
      type: "Guide",
      difficulty: "Intermediate",
      readTime: "30 min",
      rating: 4.9
    }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEcosystemStats(prev => ({
        ...prev,
        totalDevelopers: prev.totalDevelopers + Math.floor(Math.random() * 3),
        totalDownloads: prev.totalDownloads + Math.floor(Math.random() * 50)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Flourish Developer Ecosystem</h2>
            <p className="text-lg opacity-90 mb-6">
              Build, share, and monetize amazing dating experiences with our comprehensive developer platform
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Building
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{ecosystemStats.totalDevelopers.toLocaleString()}</div>
            <div className="text-lg opacity-90">Active Developers</div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+{ecosystemStats.monthlyGrowth}%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{ecosystemStats.activeProjects.toLocaleString()}</div>
          <div className="text-gray-600">Active Projects</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Download className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+15.7%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{ecosystemStats.totalDownloads.toLocaleString()}</div>
          <div className="text-gray-600">Total Downloads</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+2.1%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{ecosystemStats.communityScore}%</div>
          <div className="text-gray-600">Community Score</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Heart className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+1.8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{ecosystemStats.satisfaction}%</div>
          <div className="text-gray-600">Satisfaction Rate</div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Featured Projects</h3>
          <button className="text-purple-600 hover:text-purple-700 font-medium">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-600">by {project.author}</p>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    {project.stars}
                  </span>
                  <span className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {project.downloads.toLocaleString()}
                  </span>
                </div>
                <span>{project.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects, SDKs, and tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name} ({category.count})
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create Project
          </button>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600">by {project.author}</p>
              </div>
              {project.featured && (
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>
            
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-500" />
                {project.stars}
              </span>
              <span className="flex items-center">
                <Download className="h-4 w-4 mr-1" />
                {project.downloads.toLocaleString()}
              </span>
              <span>{project.language}</span>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                View Details
              </button>
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-8">
      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{ecosystemStats.totalDevelopers.toLocaleString()}</div>
              <div className="text-gray-600">Active Developers</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">24,567</div>
              <div className="text-gray-600">Forum Posts</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="text-gray-600">Events This Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Top Contributors</h3>
        <div className="space-y-4">
          {topContributors.map((contributor, index) => (
            <div key={contributor.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mr-4">
                  <span className="text-purple-600 font-bold">{contributor.avatar}</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="font-semibold text-gray-900 mr-2">{contributor.name}</h4>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      {contributor.badge}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-4">{contributor.contributions} contributions</span>
                    <span className="mr-4">{contributor.reputation.toLocaleString()} reputation</span>
                  </div>
                  <div className="flex space-x-2 mt-1">
                    {contributor.specialties.map((specialty) => (
                      <span key={specialty} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">#{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
          <button className="text-purple-600 hover:text-purple-700 font-medium">View All Events</button>
        </div>
        <div className="space-y-4">
          {communityEvents.map((event) => (
            <div key={event.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{event.date}</span>
                    <span className="mr-4">{event.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{event.attendees.toLocaleString()} attendees</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-xs px-2 py-1 rounded-full mb-2 ${
                    event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
                    event.status === 'registration_open' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="space-y-6">
      {/* Resource Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="p-3 bg-blue-100 rounded-lg mx-auto mb-4 w-fit">
            <BookOpen className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
          <p className="text-gray-600 text-sm mb-4">Comprehensive guides and API references</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">Browse Docs</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="p-3 bg-green-100 rounded-lg mx-auto mb-4 w-fit">
            <Lightbulb className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Tutorials</h3>
          <p className="text-gray-600 text-sm mb-4">Step-by-step learning resources</p>
          <button className="text-green-600 hover:text-green-700 font-medium">Start Learning</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="p-3 bg-purple-100 rounded-lg mx-auto mb-4 w-fit">
            <Code className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Code Samples</h3>
          <p className="text-gray-600 text-sm mb-4">Ready-to-use code examples</p>
          <button className="text-purple-600 hover:text-purple-700 font-medium">View Samples</button>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
          <div className="p-3 bg-orange-100 rounded-lg mx-auto mb-4 w-fit">
            <Rocket className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Quick Start</h3>
          <p className="text-gray-600 text-sm mb-4">Get up and running in minutes</p>
          <button className="text-orange-600 hover:text-orange-700 font-medium">Quick Start</button>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Resources</h3>
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h4 className="font-semibold text-gray-900 mr-3">{resource.title}</h4>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      resource.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      resource.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {resource.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{resource.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">{resource.type}</span>
                    <span className="mr-4">{resource.readTime}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="ml-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Developer Ecosystem Hub</h1>
                  <p className="text-sm text-gray-600">Build the future of dating technology</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <MessageSquare className="h-5 w-5" />
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: Target },
              { id: 'projects', name: 'Projects', icon: GitBranch },
              { id: 'community', name: 'Community', icon: Users },
              { id: 'resources', name: 'Resources', icon: BookOpen }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'projects' && renderProjects()}
        {activeTab === 'community' && renderCommunity()}
        {activeTab === 'resources' && renderResources()}
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Create New Project</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>Select category</option>
                  <option>AI/ML</option>
                  <option>Communication</option>
                  <option>Analytics</option>
                  <option>Security</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Describe your project"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperEcosystemHub;

