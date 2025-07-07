import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Users, 
  Star, 
  Download, 
  GitBranch, 
  Package, 
  Zap, 
  Award,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Rocket,
  Shield,
  DollarSign,
  Globe,
  Heart,
  Coffee,
  Target,
  Lightbulb,
  Settings,
  Play,
  CheckCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  Github,
  Slack,
  Twitter
} from 'lucide-react';

const DeveloperEcosystemHub = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  // Sample developer projects data
  const developerProjects = [
    {
      id: 1,
      name: "Smart Match Algorithm",
      author: "Alex Chen",
      category: "AI/ML",
      description: "Advanced machine learning algorithm for improved compatibility matching",
      downloads: 15420,
      rating: 4.9,
      stars: 892,
      price: "Free",
      status: "Active",
      lastUpdated: "2 days ago",
      tags: ["AI", "Matching", "Algorithm"],
      revenue: "$12,500"
    },
    {
      id: 2,
      name: "Video Chat Enhancement",
      author: "Sarah Johnson",
      category: "Communication",
      description: "Real-time video filters and effects for enhanced video calling experience",
      downloads: 8750,
      rating: 4.7,
      stars: 543,
      price: "$29.99",
      status: "Active",
      lastUpdated: "1 week ago",
      tags: ["Video", "Filters", "Communication"],
      revenue: "$8,900"
    },
    {
      id: 3,
      name: "Cultural Bridge",
      author: "Maria Rodriguez",
      category: "Localization",
      description: "Cross-cultural communication tools and cultural insight widgets",
      downloads: 6230,
      rating: 4.8,
      stars: 321,
      price: "$19.99",
      status: "Beta",
      lastUpdated: "3 days ago",
      tags: ["Culture", "Translation", "Insights"],
      revenue: "$5,600"
    },
    {
      id: 4,
      name: "Date Planner Pro",
      author: "David Kim",
      category: "Utilities",
      description: "AI-powered date planning with location recommendations and booking",
      downloads: 12100,
      rating: 4.6,
      stars: 678,
      price: "$15.99",
      status: "Active",
      lastUpdated: "5 days ago",
      tags: ["Planning", "AI", "Booking"],
      revenue: "$7,800"
    },
    {
      id: 5,
      name: "Safety Shield",
      author: "Emma Wilson",
      category: "Security",
      description: "Enhanced safety features including background verification and emergency alerts",
      downloads: 9870,
      rating: 4.9,
      stars: 756,
      price: "$24.99",
      status: "Active",
      lastUpdated: "1 day ago",
      tags: ["Safety", "Verification", "Security"],
      revenue: "$11,200"
    }
  ];

  const ecosystemStats = {
    totalDevelopers: 2847,
    activeProjects: 156,
    totalDownloads: 847230,
    monthlyRevenue: 125600,
    averageRating: 4.7,
    communityMembers: 8940
  };

  const developmentTools = [
    {
      name: "Flourish SDK",
      description: "Complete software development kit for building Flourish integrations",
      icon: <Code className="w-6 h-6" />,
      status: "Stable",
      version: "v2.1.4"
    },
    {
      name: "API Documentation",
      description: "Comprehensive API documentation with interactive examples",
      icon: <BookOpen className="w-6 h-6" />,
      status: "Updated",
      version: "Latest"
    },
    {
      name: "Testing Framework",
      description: "Automated testing tools for quality assurance and validation",
      icon: <Shield className="w-6 h-6" />,
      status: "Beta",
      version: "v1.8.2"
    },
    {
      name: "Deployment Pipeline",
      description: "CI/CD pipeline for seamless deployment and updates",
      icon: <Rocket className="w-6 h-6" />,
      status: "Stable",
      version: "v3.0.1"
    }
  ];

  const communityEvents = [
    {
      title: "Flourish Developer Conference 2024",
      date: "March 15-17, 2024",
      type: "Conference",
      attendees: 1200,
      status: "Upcoming"
    },
    {
      title: "AI Matching Algorithm Workshop",
      date: "February 28, 2024",
      type: "Workshop",
      attendees: 85,
      status: "Registration Open"
    },
    {
      title: "Security Best Practices Webinar",
      date: "February 20, 2024",
      type: "Webinar",
      attendees: 340,
      status: "Completed"
    }
  ];

  const filteredProjects = developerProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'AI/ML', 'Communication', 'Localization', 'Utilities', 'Security'];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Ecosystem Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Developers</p>
              <p className="text-2xl font-bold">{ecosystemStats.totalDevelopers.toLocaleString()}</p>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Active Projects</p>
              <p className="text-2xl font-bold">{ecosystemStats.activeProjects}</p>
            </div>
            <Package className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Downloads</p>
              <p className="text-2xl font-bold">{(ecosystemStats.totalDownloads / 1000).toFixed(0)}K</p>
            </div>
            <Download className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Monthly Revenue</p>
              <p className="text-2xl font-bold">${(ecosystemStats.monthlyRevenue / 1000).toFixed(0)}K</p>
            </div>
            <DollarSign className="w-8 h-8 text-orange-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Average Rating</p>
              <p className="text-2xl font-bold">{ecosystemStats.averageRating}</p>
            </div>
            <Star className="w-8 h-8 text-yellow-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-100 text-sm">Community</p>
              <p className="text-2xl font-bold">{(ecosystemStats.communityMembers / 1000).toFixed(1)}K</p>
            </div>
            <Heart className="w-8 h-8 text-pink-200" />
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-500" />
          Featured Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developerProjects.slice(0, 3).map(project => (
            <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  <p className="text-sm text-gray-600">by {project.author}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {project.downloads.toLocaleString()}
                  </span>
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {project.rating}
                  </span>
                </div>
                <span className="font-semibold text-gray-900">{project.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Development Tools */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2 text-blue-500" />
          Development Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {developmentTools.map((tool, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50">
              <div className="text-blue-500">{tool.icon}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-gray-900">{tool.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    tool.status === 'Stable' ? 'bg-green-100 text-green-800' : 
                    tool.status === 'Beta' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{tool.description}</p>
                <p className="text-xs text-gray-500">{tool.version}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Submit Project
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <p className="text-sm text-gray-600">by {project.author}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                  {project.category}
                </span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  {project.downloads.toLocaleString()}
                </span>
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  {project.rating}
                </span>
                <span className="flex items-center">
                  <GitBranch className="w-4 h-4 mr-1" />
                  {project.stars}
                </span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{project.price}</p>
                <p className="text-xs text-gray-500">Revenue: {project.revenue}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-500">Updated {project.lastUpdated}</p>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
                  View Details
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                  Install
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCommunity = () => (
    <div className="space-y-6">
      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">1,247</p>
          <p className="text-sm text-gray-600">Forum Posts</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">8,940</p>
          <p className="text-sm text-gray-600">Active Members</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <Coffee className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-sm text-gray-600">Meetups</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6 text-center">
          <Lightbulb className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-2xl font-bold text-gray-900">89</p>
          <p className="text-sm text-gray-600">Ideas Shared</p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-purple-500" />
          Upcoming Events
        </h3>
        <div className="space-y-4">
          {communityEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <p className="text-sm text-gray-600">{event.date} • {event.type}</p>
                <p className="text-xs text-gray-500">{event.attendees} attendees</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  event.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                  event.status === 'Registration Open' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {event.status}
                </span>
                <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Links */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4">Connect with the Community</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <Github className="w-6 h-6 text-gray-700" />
            <div>
              <p className="font-semibold text-gray-900">GitHub</p>
              <p className="text-sm text-gray-600">Open source projects</p>
            </div>
          </a>
          <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <Slack className="w-6 h-6 text-purple-600" />
            <div>
              <p className="font-semibold text-gray-900">Slack</p>
              <p className="text-sm text-gray-600">Developer discussions</p>
            </div>
          </a>
          <a href="#" className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <Twitter className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-semibold text-gray-900">Twitter</p>
              <p className="text-sm text-gray-600">Latest updates</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );

  const renderResources = () => (
    <div className="space-y-6">
      {/* Documentation */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-blue-500" />
          Documentation & Guides
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Getting Started Guide</h4>
            <p className="text-sm text-gray-600 mb-3">Complete guide to building your first Flourish integration</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Updated 2 days ago</span>
              <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">API Reference</h4>
            <p className="text-sm text-gray-600 mb-3">Comprehensive API documentation with examples</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Updated 1 day ago</span>
              <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Best Practices</h4>
            <p className="text-sm text-gray-600 mb-3">Security, performance, and design best practices</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Updated 1 week ago</span>
              <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">Troubleshooting</h4>
            <p className="text-sm text-gray-600 mb-3">Common issues and solutions for developers</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">Updated 3 days ago</span>
              <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Code className="w-5 h-5 mr-2 text-green-500" />
          Code Examples & Templates
        </h3>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">React Integration Template</h4>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">React</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Complete React component template for Flourish integration</p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                <Github className="w-4 h-4 inline mr-1" />
                View on GitHub
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                <Download className="w-4 h-4 inline mr-1" />
                Download
              </button>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">Node.js Backend Example</h4>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Node.js</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">Backend integration example with authentication and API calls</p>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors text-sm">
                <Github className="w-4 h-4 inline mr-1" />
                View on GitHub
              </button>
              <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm">
                <Download className="w-4 h-4 inline mr-1" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-purple-500" />
          Developer Support
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center p-6 border rounded-lg">
            <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600 mb-4">Get help anytime with our dedicated developer support team</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
          </div>
          <div className="text-center p-6 border rounded-lg">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Community Forum</h4>
            <p className="text-sm text-gray-600 mb-4">Connect with other developers and share knowledge</p>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
              Join Forum
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Developer Ecosystem Hub</h1>
              <p className="text-gray-600">Build, share, and monetize your Flourish integrations</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                Start Building
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <TrendingUp className="w-4 h-4" /> },
              { id: 'projects', label: 'Projects', icon: <Package className="w-4 h-4" /> },
              { id: 'community', label: 'Community', icon: <Users className="w-4 h-4" /> },
              { id: 'resources', label: 'Resources', icon: <BookOpen className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'projects' && renderProjects()}
          {activeTab === 'community' && renderCommunity()}
          {activeTab === 'resources' && renderResources()}
        </div>
      </div>
    </div>
  );
};

export default DeveloperEcosystemHub;

