import React, { useState, useEffect } from 'react';
import { 
  Key, 
  Settings, 
  BarChart3, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  Shield, 
  Zap, 
  Link, 
  Layers, 
  Network, 
  Server, 
  HardDrive, 
  Code, 
  Terminal, 
  BookOpen, 
  FileText, 
  Users, 
  DollarSign, 
  Percent, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Info, 
  HelpCircle, 
  Eye, 
  EyeOff, 
  Copy, 
  Trash2, 
  Edit, 
  MoreVertical, 
  ChevronDown, 
  ChevronUp, 
  ArrowUp, 
  ArrowDown, 
  ArrowRight,
  GitBranch,
  Webhook,
  Database,
  Cloud,
  Cpu,
  MemoryStick,
  Power,
  ToggleLeft,
  ToggleRight,
  Lock,
  Unlock,
  Globe,
  Mail,
  MessageSquare,
  Calendar,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Headphones,
  LifeBuoy,
  Smile,
  Frown,
  Meh,
  Route,
  Compass,
  Flag,
  Crosshair,
  Workflow,
  Layers3,
  TreePine,
  Waypoints,
  Brain,
  Lightbulb,
  Palette,
  Sliders,
  Fingerprint,
  Scan,
  Focus,
  Shuffle,
  Repeat,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  Check,
  Briefcase,
  Home,
  MapPin,
  Phone
} from 'lucide-react';

const ApiManagementDashboard = () => {
  const [activeTab, setActiveTab] = useState('keys');
  const [apiKey, setApiKey] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [dateRange, setDateRange] = useState('30days');
  const [apiKeys, setApiKeys] = useState([]);
  const [usageData, setUsageData] = useState([]);
  const [errorData, setErrorData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // API Key data
  useEffect(() => {
    const sampleApiKeys = [
      {
        id: 1,
        name: 'Default Production Key',
        key: 'sk_live_********************abcd',
        status: 'active',
        created: '2024-11-15',
        lastUsed: '2025-01-07',
        requests: 124567,
        errors: 234,
        latency: 120,
        permissions: ['read:all', 'write:all'],
        ipRestrictions: ['any']
      },
      {
        id: 2,
        name: 'Staging Environment Key',
        key: 'sk_test_********************efgh',
        status: 'active',
        created: '2024-10-20',
        lastUsed: '2025-01-06',
        requests: 89234,
        errors: 102,
        latency: 95,
        permissions: ['read:all', 'write:all'],
        ipRestrictions: ['192.168.1.1/24']
      },
      {
        id: 3,
        name: 'Mobile App Key',
        key: 'pk_live_********************ijkl',
        status: 'active',
        created: '2024-12-01',
        lastUsed: '2025-01-07',
        requests: 234567,
        errors: 456,
        latency: 150,
        permissions: ['read:public'],
        ipRestrictions: ['any']
      },
      {
        id: 4,
        name: 'Analytics Partner Key',
        key: 'sk_live_********************mnop',
        status: 'revoked',
        created: '2024-09-01',
        lastUsed: '2024-12-15',
        requests: 567890,
        errors: 1234,
        latency: 200,
        permissions: ['read:analytics'],
        ipRestrictions: ['54.123.45.67']
      }
    ];
    setApiKeys(sampleApiKeys);
  }, []);

  // API Usage data
  useEffect(() => {
    // Generate sample usage data for the last 30 days
    const sampleUsageData = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        requests: Math.floor(Math.random() * 10000) + 5000,
        errors: Math.floor(Math.random() * 200) + 50,
        latency: Math.floor(Math.random() * 50) + 100
      };
    });
    setUsageData(sampleUsageData);
  }, [dateRange]);

  // API Error data
  useEffect(() => {
    const sampleErrorData = [
      { code: 400, message: 'Bad Request', count: 123, trend: 5.2 },
      { code: 401, message: 'Unauthorized', count: 45, trend: -2.1 },
      { code: 403, message: 'Forbidden', count: 23, trend: 10.5 },
      { code: 404, message: 'Not Found', count: 89, trend: 1.2 },
      { code: 429, message: 'Too Many Requests', count: 12, trend: 25.8 },
      { code: 500, message: 'Internal Server Error', count: 34, trend: -8.7 },
      { code: 503, message: 'Service Unavailable', count: 8, trend: 0 }
    ];
    setErrorData(sampleErrorData);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const getStatusColor = (status) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      revoked: 'bg-red-100 text-red-800',
      expired: 'bg-yellow-100 text-yellow-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return <ArrowUp className="h-4 w-4 text-red-500" />;
    if (trend < 0) return <ArrowDown className="h-4 w-4 text-green-500" />;
    return <ArrowRight className="h-4 w-4 text-gray-500" />;
  };

  const getTrendColor = (trend) => {
    if (trend > 0) return 'text-red-600';
    if (trend < 0) return 'text-green-600';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">API Management</h1>
              <p className="mt-2 text-gray-400">Manage API keys, monitor usage, and control access</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>Create API Key</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'keys', label: 'API Keys', icon: Key },
              { id: 'usage', label: 'Usage Analytics', icon: BarChart3 },
              { id: 'errors', label: 'Error Monitoring', icon: AlertCircle },
              { id: 'webhooks', label: 'Webhooks', icon: Webhook },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-purple-400'
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
        {/* API Keys Tab */}
        {activeTab === 'keys' && (
          <div className="space-y-8">
            {/* Key Management */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Your API Keys</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search keys..."
                      className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Key</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Requests</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Used</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Created</th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {apiKeys.map((key) => (
                      <tr key={key.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{key.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400 font-mono">{key.key}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(key.status)}`}>
                            {key.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatNumber(key.requests)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{key.lastUsed}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{key.created}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex items-center justify-end space-x-2">
                            <button className="p-2 text-gray-400 hover:text-white"><Copy className="h-4 w-4" /></button>
                            <button className="p-2 text-gray-400 hover:text-white"><Edit className="h-4 w-4" /></button>
                            <button className="p-2 text-gray-400 hover:text-white"><Trash2 className="h-4 w-4" /></button>
                            <button className="p-2 text-gray-400 hover:text-white"><MoreVertical className="h-4 w-4" /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Usage Analytics Tab */}
        {activeTab === 'usage' && (
          <div className="space-y-8">
            {/* Usage Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Requests</p>
                    <p className="text-3xl font-bold text-white">{formatNumber(usageData.reduce((sum, d) => sum + d.requests, 0))}</p>
                  </div>
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Avg Latency</p>
                    <p className="text-3xl font-bold text-white">
                      {(usageData.reduce((sum, d) => sum + d.latency, 0) / usageData.length).toFixed(0)}ms
                    </p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Error Rate</p>
                    <p className="text-3xl font-bold text-white">
                      {( (usageData.reduce((sum, d) => sum + d.errors, 0) / usageData.reduce((sum, d) => sum + d.requests, 0)) * 100 ).toFixed(2)}%
                    </p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Chart */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">API Requests Over Time</h3>
              {/* Chart would be implemented here using a library like Recharts */}
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Chart Placeholder</p>
              </div>
            </div>

            {/* Top Endpoints */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Top Endpoints by Usage</h3>
              <div className="space-y-4">
                {[
                  { endpoint: '/v1/users/{id}', method: 'GET', requests: 123456, latency: 80 },
                  { endpoint: '/v1/relationships', method: 'POST', requests: 98765, latency: 150 },
                  { endpoint: '/v1/assessments', method: 'GET', requests: 76543, latency: 120 },
                  { endpoint: '/v1/messages', method: 'POST', requests: 54321, latency: 180 },
                  { endpoint: '/v1/analytics', method: 'GET', requests: 32109, latency: 250 }
                ].map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${endpoint.method === 'GET' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'}`}>
                        {endpoint.method}
                      </span>
                      <p className="font-mono text-sm text-white">{endpoint.endpoint}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <p className="font-semibold text-white">{formatNumber(endpoint.requests)}</p>
                        <p className="text-xs text-gray-400">requests</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-white">{endpoint.latency}ms</p>
                        <p className="text-xs text-gray-400">avg latency</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Error Monitoring Tab */}
        {activeTab === 'errors' && (
          <div className="space-y-8">
            {/* Error Overview */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Error Monitoring</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status Code</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Count</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {errorData.map((error) => (
                      <tr key={error.code}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{error.code}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{error.message}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatNumber(error.count)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(error.trend)}
                            <span className={getTrendColor(error.trend)}>{error.trend}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Webhooks Tab */}
        {activeTab === 'webhooks' && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Webhooks Management</h3>
            <div className="text-center text-gray-400 py-16">
              <Webhook className="h-16 w-16 mx-auto mb-4 text-gray-500" />
              <h4 className="text-xl font-semibold text-white mb-2">Coming Soon</h4>
              <p>Webhook configuration and management will be available here.</p>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">API Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">Rate Limiting</h4>
                <p className="text-sm text-gray-400 mb-2">Configure rate limits for your API keys.</p>
                <div className="flex items-center space-x-4">
                  <input type="number" defaultValue="1000" className="w-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg" />
                  <select className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg">
                    <option>requests per minute</option>
                    <option>requests per hour</option>
                    <option>requests per day</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">IP Restrictions</h4>
                <p className="text-sm text-gray-400 mb-2">Restrict API access to specific IP addresses or ranges.</p>
                <textarea
                  placeholder="Enter one IP address or range per line (e.g., 192.168.1.1 or 10.0.0.0/16)"
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg resize-none"
                />
              </div>
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">API Versioning</h4>
                <p className="text-sm text-gray-400 mb-2">Select the default API version for new keys.</p>
                <select className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg">
                  <option>2025-01-01 (latest)</option>
                  <option>2024-10-15</option>
                  <option>2024-07-01</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create API Key Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Create New API Key</h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Key Name</label>
                <input
                  type="text"
                  placeholder="e.g., My Production Key"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Permissions</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                    <span className="ml-2 text-sm text-gray-300">Read: All</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                    <span className="ml-2 text-sm text-gray-300">Write: All</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                    <span className="ml-2 text-sm text-gray-300">Read: Analytics</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">IP Address Restrictions</label>
                <textarea
                  placeholder="Enter one IP address or range per line (e.g., 192.168.1.1 or 10.0.0.0/16). Leave blank to allow any."
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg resize-none"
                />
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-700 flex justify-end space-x-4">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                Create Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApiManagementDashboard;

