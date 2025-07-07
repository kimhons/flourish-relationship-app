import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Package, 
  Download, 
  Star, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Search,
  Filter,
  ExternalLink,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Database,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  Activity
} from 'lucide-react';

const APIMarketplace = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popularity');

  const [marketplaceStats, setMarketplaceStats] = useState({
    totalAPIs: 247,
    activeIntegrations: 15678,
    developers: 3456,
    monthlyRequests: 45600000,
    averageRating: 4.7
  });

  const [apiCategories, setApiCategories] = useState([
    { id: 'all', name: 'All APIs', count: 247, icon: Package },
    { id: 'matching', name: 'Matching & AI', count: 34, icon: Zap },
    { id: 'communication', name: 'Communication', count: 28, icon: Globe },
    { id: 'payments', name: 'Payments', count: 19, icon: DollarSign },
    { id: 'analytics', name: 'Analytics', count: 31, icon: Activity },
    { id: 'security', name: 'Security', count: 22, icon: Shield },
    { id: 'social', name: 'Social Media', count: 25, icon: Users },
    { id: 'mobile', name: 'Mobile SDKs', count: 18, icon: Smartphone },
    { id: 'data', name: 'Data & ML', count: 26, icon: Database },
    { id: 'infrastructure', name: 'Infrastructure', count: 44, icon: Cloud }
  ]);

  const [featuredAPIs, setFeaturedAPIs] = useState([
    {
      id: 1,
      name: 'Advanced Matching Engine API',
      description: 'AI-powered compatibility matching with 96.8% accuracy',
      category: 'matching',
      provider: 'Flourish Labs',
      version: '2.1.0',
      rating: 4.9,
      downloads: 12847,
      price: 'Free',
      pricingModel: 'Freemium',
      documentation: 'Comprehensive',
      support: '24/7',
      features: ['Real-time matching', 'ML algorithms', 'Custom parameters', 'Webhook support'],
      endpoints: 15,
      rateLimit: '10,000/hour',
      uptime: 99.9,
      responseTime: '45ms'
    },
    {
      id: 2,
      name: 'Video Chat Integration',
      description: 'High-quality video calling with advanced features',
      category: 'communication',
      provider: 'VideoConnect Pro',
      version: '1.8.3',
      rating: 4.8,
      downloads: 8934,
      price: '$0.05/minute',
      pricingModel: 'Pay-per-use',
      documentation: 'Excellent',
      support: 'Business hours',
      features: ['HD video', 'Screen sharing', 'Recording', 'Virtual backgrounds'],
      endpoints: 8,
      rateLimit: '1,000/hour',
      uptime: 99.7,
      responseTime: '120ms'
    },
    {
      id: 3,
      name: 'Payment Gateway Plus',
      description: 'Secure payment processing for dating platforms',
      category: 'payments',
      provider: 'SecurePay Inc',
      version: '3.2.1',
      rating: 4.7,
      downloads: 15623,
      price: '2.9% + $0.30',
      pricingModel: 'Transaction fee',
      documentation: 'Good',
      support: '24/7',
      features: ['Multi-currency', 'Fraud detection', 'Recurring billing', 'Mobile payments'],
      endpoints: 12,
      rateLimit: '5,000/hour',
      uptime: 99.8,
      responseTime: '200ms'
    },
    {
      id: 4,
      name: 'Behavioral Analytics SDK',
      description: 'Deep user behavior analysis and insights',
      category: 'analytics',
      provider: 'DataInsights Co',
      version: '1.5.2',
      rating: 4.6,
      downloads: 6789,
      price: '$99/month',
      pricingModel: 'Subscription',
      documentation: 'Comprehensive',
      support: 'Email',
      features: ['Real-time tracking', 'Custom events', 'Funnel analysis', 'A/B testing'],
      endpoints: 20,
      rateLimit: '50,000/hour',
      uptime: 99.5,
      responseTime: '80ms'
    }
  ]);

  const [myIntegrations, setMyIntegrations] = useState([
    {
      id: 1,
      name: 'Advanced Matching Engine API',
      status: 'active',
      usage: 8547,
      limit: 10000,
      lastUsed: '2025-01-07 14:30',
      apiKey: 'ak_live_***************3456'
    },
    {
      id: 2,
      name: 'Payment Gateway Plus',
      status: 'active',
      usage: 234,
      limit: 5000,
      lastUsed: '2025-01-07 12:15',
      apiKey: 'pk_live_***************7890'
    },
    {
      id: 3,
      name: 'Behavioral Analytics SDK',
      status: 'inactive',
      usage: 0,
      limit: 50000,
      lastUsed: '2025-01-05 09:22',
      apiKey: 'ba_test_***************1234'
    }
  ]);

  const [apiDocumentation, setApiDocumentation] = useState({
    quickStart: [
      'Sign up for API access',
      'Generate your API key',
      'Install the SDK or use REST endpoints',
      'Authenticate your requests',
      'Start making API calls'
    ],
    authentication: 'Bearer token authentication with API keys',
    rateLimit: 'Rate limits vary by plan and endpoint',
    support: 'Documentation, community forum, and direct support available'
  });

  const filteredAPIs = featuredAPIs.filter(api => {
    const matchesCategory = selectedCategory === 'all' || api.category === selectedCategory;
    const matchesSearch = api.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         api.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedAPIs = [...filteredAPIs].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'newest':
        return new Date(b.version) - new Date(a.version);
      default:
        return 0;
    }
  });

  const renderBrowseAPIs = () => (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-lg border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {apiCategories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="popularity">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* API Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAPIs.map((api) => (
          <div key={api.id} className="bg-white rounded-lg border hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{api.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{api.description}</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>by {api.provider}</span>
                    <span>•</span>
                    <span>v{api.version}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{api.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{api.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{api.responseTime}</span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pricing:</span>
                  <span className="font-medium text-gray-900">{api.price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-medium text-green-600">{api.uptime}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Rate Limit:</span>
                  <span className="font-medium text-gray-900">{api.rateLimit}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {api.features.slice(0, 3).map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {feature}
                  </span>
                ))}
                {api.features.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{api.features.length - 3} more
                  </span>
                )}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 text-sm">
                  Install
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMyIntegrations = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Active Integrations</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Browse APIs
          </button>
        </div>

        <div className="space-y-4">
          {myIntegrations.map((integration) => (
            <div key={integration.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h4 className="font-medium text-gray-900">{integration.name}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    integration.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {integration.status}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
                    Configure
                  </button>
                  <button className="px-3 py-1 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50">
                    Remove
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Usage:</span>
                  <div className="font-medium">{integration.usage.toLocaleString()} / {integration.limit.toLocaleString()}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(integration.usage / integration.limit) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <span className="text-gray-600">Last Used:</span>
                  <div className="font-medium">{integration.lastUsed}</div>
                </div>
                <div>
                  <span className="text-gray-600">API Key:</span>
                  <div className="font-mono text-xs">{integration.apiKey}</div>
                </div>
                <div>
                  <span className="text-gray-600">Status:</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="font-medium">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Analytics */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Usage Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">8,781</div>
            <div className="text-sm text-gray-600">API Calls Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">156.7K</div>
            <div className="text-sm text-gray-600">This Month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">99.8%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">$47.23</div>
            <div className="text-sm text-gray-600">Monthly Cost</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentation = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Getting Started</h3>
        <div className="space-y-4">
          {apiDocumentation.quickStart.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <div className="text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentication</h3>
          <div className="space-y-3">
            <p className="text-gray-700">{apiDocumentation.authentication}</p>
            <div className="bg-gray-50 p-3 rounded-lg">
              <code className="text-sm">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rate Limits</h3>
          <div className="space-y-3">
            <p className="text-gray-700">{apiDocumentation.rateLimit}</p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Free Tier:</span>
                <span className="font-medium">1,000 requests/hour</span>
              </div>
              <div className="flex justify-between">
                <span>Pro Tier:</span>
                <span className="font-medium">10,000 requests/hour</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise:</span>
                <span className="font-medium">Custom limits</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Code Examples</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">JavaScript/Node.js</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`const response = await fetch('https://api.flourish.com/v1/matches', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const matches = await response.json();
console.log(matches);`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Python</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.flourish.com/v1/matches', headers=headers)
matches = response.json()
print(matches)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            API Marketplace
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover, integrate, and manage powerful APIs to enhance your dating platform. 
            Access advanced features, third-party services, and custom solutions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="text-2xl font-bold text-gray-900">{marketplaceStats.totalAPIs}</div>
            <div className="text-sm text-gray-600">Available APIs</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="text-2xl font-bold text-gray-900">{marketplaceStats.activeIntegrations.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Active Integrations</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="text-2xl font-bold text-gray-900">{marketplaceStats.developers.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Developers</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="text-2xl font-bold text-gray-900">{(marketplaceStats.monthlyRequests / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-gray-600">Monthly Requests</div>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="text-2xl font-bold text-gray-900">{marketplaceStats.averageRating}</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'browse', name: 'Browse APIs', icon: Package },
                { id: 'integrations', name: 'My Integrations', icon: CheckCircle },
                { id: 'docs', name: 'Documentation', icon: Code }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'browse' && renderBrowseAPIs()}
            {activeTab === 'integrations' && renderMyIntegrations()}
            {activeTab === 'docs' && renderDocumentation()}
          </div>
        </div>

        {/* Developer Resources */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Code className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Developer Resources</h4>
              <p className="text-sm text-blue-700">
                Access comprehensive documentation, SDKs, code examples, and developer support. 
                Join our developer community for updates, best practices, and technical discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIMarketplace;

