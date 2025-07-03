import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  Tag, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Download, 
  Upload, 
  Copy, 
  Share2, 
  Settings, 
  Filter, 
  Search, 
  RefreshCw, 
  Save, 
  FileText, 
  Code, 
  Database, 
  Server, 
  Globe, 
  Shield, 
  Lock, 
  Key, 
  User, 
  Users, 
  Calendar, 
  Activity, 
  BarChart3, 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Zap, 
  Star, 
  Bookmark, 
  Flag, 
  Hash, 
  Link, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
  Info, 
  HelpCircle, 
  Bell, 
  BellOff, 
  Mail, 
  MessageSquare, 
  Phone, 
  Video, 
  Image, 
  File, 
  Folder, 
  Archive, 
  Package, 
  Box, 
  Layers, 
  Grid, 
  List, 
  Table, 
  Layout, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Desktop, 
  Cloud, 
  CloudUpload, 
  CloudDownload, 
  Wifi, 
  Network, 
  Router, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Power, 
  Battery, 
  Plug, 
  Lightbulb, 
  Sun, 
  Moon, 
  Palette, 
  Brush, 
  Pen, 
  PenTool, 
  Edit2, 
  Edit3, 
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
  Book, 
  Newspaper, 
  Paperclip, 
  Scissors, 
  Clipboard, 
  Highlighter, 
  Sparkles, 
  Wand, 
  Magic, 
  Crown, 
  Trophy, 
  Medal, 
  Award, 
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
  Fireworks
} from 'lucide-react';

const ApiVersioningManager = () => {
  const [activeTab, setActiveTab] = useState('versions');
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [isCreatingVersion, setIsCreatingVersion] = useState(false);
  const [versions, setVersions] = useState([]);
  const [migrationStatus, setMigrationStatus] = useState({});

  // Sample API versions
  const sampleVersions = [
    {
      id: 'v3.2.1',
      version: '3.2.1',
      name: 'Enhanced Security Update',
      description: 'Major security enhancements and performance improvements',
      status: 'Current',
      releaseDate: '2025-01-07T00:00:00Z',
      deprecationDate: null,
      endOfLifeDate: null,
      usage: 78.5,
      endpoints: 45,
      changes: [
        { type: 'Added', description: 'New OAuth 2.1 authentication endpoints' },
        { type: 'Enhanced', description: 'Improved rate limiting algorithms' },
        { type: 'Fixed', description: 'Resolved data synchronization issues' }
      ],
      compatibility: 'Backward Compatible',
      documentation: 'Complete',
      testCoverage: 96.8,
      migrationPath: 'Automatic'
    },
    {
      id: 'v3.1.5',
      version: '3.1.5',
      name: 'Stability Release',
      description: 'Bug fixes and stability improvements',
      status: 'Supported',
      releaseDate: '2024-12-15T00:00:00Z',
      deprecationDate: '2025-06-15T00:00:00Z',
      endOfLifeDate: '2025-12-15T00:00:00Z',
      usage: 18.2,
      endpoints: 42,
      changes: [
        { type: 'Fixed', description: 'Memory leak in webhook processing' },
        { type: 'Improved', description: 'Error message clarity' },
        { type: 'Updated', description: 'Dependencies to latest versions' }
      ],
      compatibility: 'Backward Compatible',
      documentation: 'Complete',
      testCoverage: 94.2,
      migrationPath: 'Recommended'
    },
    {
      id: 'v3.0.8',
      version: '3.0.8',
      name: 'Legacy Support',
      description: 'Final update for v3.0 series',
      status: 'Deprecated',
      releaseDate: '2024-09-20T00:00:00Z',
      deprecationDate: '2024-12-20T00:00:00Z',
      endOfLifeDate: '2025-03-20T00:00:00Z',
      usage: 2.8,
      endpoints: 38,
      changes: [
        { type: 'Security', description: 'Critical security patches only' },
        { type: 'Notice', description: 'No new features will be added' }
      ],
      compatibility: 'Legacy',
      documentation: 'Archived',
      testCoverage: 89.5,
      migrationPath: 'Required'
    },
    {
      id: 'v2.9.12',
      version: '2.9.12',
      name: 'End of Life',
      description: 'Final version of v2.x series',
      status: 'End of Life',
      releaseDate: '2024-06-01T00:00:00Z',
      deprecationDate: '2024-09-01T00:00:00Z',
      endOfLifeDate: '2024-12-01T00:00:00Z',
      usage: 0.5,
      endpoints: 32,
      changes: [
        { type: 'Notice', description: 'No longer supported' },
        { type: 'Warning', description: 'Security vulnerabilities will not be patched' }
      ],
      compatibility: 'Incompatible',
      documentation: 'Archived',
      testCoverage: 85.0,
      migrationPath: 'Mandatory'
    }
  ];

  // Sample migration data
  const migrationData = [
    {
      fromVersion: 'v2.9.12',
      toVersion: 'v3.2.1',
      status: 'Completed',
      progress: 100,
      affectedClients: 45,
      migratedClients: 45,
      startDate: '2024-11-01T00:00:00Z',
      completionDate: '2024-12-01T00:00:00Z',
      issues: 0
    },
    {
      fromVersion: 'v3.0.8',
      toVersion: 'v3.2.1',
      status: 'In Progress',
      progress: 67,
      affectedClients: 128,
      migratedClients: 86,
      startDate: '2024-12-15T00:00:00Z',
      completionDate: null,
      issues: 3
    },
    {
      fromVersion: 'v3.1.5',
      toVersion: 'v3.2.1',
      status: 'Planned',
      progress: 0,
      affectedClients: 234,
      migratedClients: 0,
      startDate: '2025-02-01T00:00:00Z',
      completionDate: null,
      issues: 0
    }
  ];

  // Sample changelog
  const changelog = [
    {
      version: 'v3.2.1',
      date: '2025-01-07T00:00:00Z',
      type: 'Major Release',
      changes: [
        { category: 'Security', items: ['Implemented OAuth 2.1 support', 'Enhanced API key encryption', 'Added request signing validation'] },
        { category: 'Performance', items: ['Optimized database queries', 'Improved caching mechanisms', 'Reduced response times by 40%'] },
        { category: 'Features', items: ['New webhook retry logic', 'Advanced rate limiting', 'Real-time API monitoring'] },
        { category: 'Bug Fixes', items: ['Fixed data synchronization issues', 'Resolved memory leaks', 'Corrected timezone handling'] }
      ]
    },
    {
      version: 'v3.1.5',
      date: '2024-12-15T00:00:00Z',
      type: 'Patch Release',
      changes: [
        { category: 'Bug Fixes', items: ['Fixed webhook processing memory leak', 'Corrected error message formatting', 'Resolved timeout issues'] },
        { category: 'Improvements', items: ['Enhanced error logging', 'Updated documentation', 'Improved test coverage'] }
      ]
    }
  ];

  useEffect(() => {
    setVersions(sampleVersions);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Current': 'bg-green-100 text-green-800',
      'Supported': 'bg-blue-100 text-blue-800',
      'Deprecated': 'bg-yellow-100 text-yellow-800',
      'End of Life': 'bg-red-100 text-red-800',
      'Beta': 'bg-purple-100 text-purple-800',
      'Alpha': 'bg-orange-100 text-orange-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getChangeTypeColor = (type) => {
    const colors = {
      'Added': 'bg-green-100 text-green-800',
      'Enhanced': 'bg-blue-100 text-blue-800',
      'Fixed': 'bg-yellow-100 text-yellow-800',
      'Removed': 'bg-red-100 text-red-800',
      'Security': 'bg-purple-100 text-purple-800',
      'Notice': 'bg-gray-100 text-gray-800',
      'Warning': 'bg-orange-100 text-orange-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getMigrationStatusColor = (status) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Planned': 'bg-yellow-100 text-yellow-800',
      'Failed': 'bg-red-100 text-red-800',
      'Cancelled': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const createNewVersion = () => {
    setIsCreatingVersion(true);
    // Simulate version creation
    setTimeout(() => {
      setIsCreatingVersion(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">API Versioning Manager</h1>
              <p className="mt-2 text-gray-400">Manage API versions, migrations, and backward compatibility</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-sm text-gray-400">All Systems Operational</span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export Schema</span>
              </button>
              <button 
                onClick={createNewVersion}
                disabled={isCreatingVersion}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50"
              >
                {isCreatingVersion ? (
                  <>
                    <RefreshCw className="h-5 w-5 animate-spin" />
                    <span>Creating...</span>
                  </>
                ) : (
                  <>
                    <Plus className="h-5 w-5" />
                    <span>New Version</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option value="all">All Versions</option>
                  <option value="current">Current Only</option>
                  <option value="supported">Supported</option>
                  <option value="deprecated">Deprecated</option>
                  <option value="eol">End of Life</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-5 w-5 text-gray-400" />
                <select className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option value="all">All Types</option>
                  <option value="major">Major Releases</option>
                  <option value="minor">Minor Updates</option>
                  <option value="patch">Patch Releases</option>
                  <option value="security">Security Updates</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                <RefreshCw className="h-5 w-5" />
                <span>Refresh</span>
              </button>
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search versions..."
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
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
              { id: 'versions', label: 'Versions', icon: GitBranch },
              { id: 'migrations', label: 'Migrations', icon: ArrowRight },
              { id: 'changelog', label: 'Changelog', icon: FileText },
              { id: 'compatibility', label: 'Compatibility', icon: Shield },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
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
        {/* Versions Tab */}
        {activeTab === 'versions' && (
          <div className="space-y-8">
            {/* Version Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Current Version</p>
                    <p className="text-2xl font-bold text-green-400">v3.2.1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <GitBranch className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Versions</p>
                    <p className="text-2xl font-bold text-blue-400">{versions.length}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Deprecated</p>
                    <p className="text-2xl font-bold text-yellow-400">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">End of Life</p>
                    <p className="text-2xl font-bold text-red-400">1</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Versions List */}
            <div className="space-y-6">
              {versions.map((version) => (
                <div key={version.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-purple-900 rounded-lg">
                        <Tag className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-xl font-bold text-white">{version.version}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(version.status)}`}>
                            {version.status}
                          </span>
                        </div>
                        <p className="text-lg text-gray-300 mb-1">{version.name}</p>
                        <p className="text-gray-400">{version.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Edit className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Download className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Release Date</p>
                      <p className="text-white">{formatDate(version.releaseDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Usage</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-purple-500 h-2 rounded-full" 
                            style={{ width: `${version.usage}%` }}
                          ></div>
                        </div>
                        <span className="text-white text-sm">{version.usage}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Endpoints</p>
                      <p className="text-white">{version.endpoints}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Test Coverage</p>
                      <p className="text-white">{version.testCoverage}%</p>
                    </div>
                  </div>
                  
                  {version.deprecationDate && (
                    <div className="bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded-lg p-4 mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">Deprecation Notice</span>
                      </div>
                      <p className="text-yellow-300 text-sm">
                        This version will be deprecated on {formatDate(version.deprecationDate)}
                        {version.endOfLifeDate && ` and reach end of life on ${formatDate(version.endOfLifeDate)}`}.
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white">Recent Changes</h4>
                    <div className="space-y-2">
                      {version.changes.map((change, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getChangeTypeColor(change.type)}`}>
                            {change.type}
                          </span>
                          <p className="text-gray-300 text-sm">{change.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Compatibility: {version.compatibility}</span>
                      <span>Documentation: {version.documentation}</span>
                      <span>Migration: {version.migrationPath}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        View Details
                      </button>
                      {version.status === 'Deprecated' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Migrate Users
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Migrations Tab */}
        {activeTab === 'migrations' && (
          <div className="space-y-8">
            {/* Migration Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Completed</p>
                    <p className="text-2xl font-bold text-green-400">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">In Progress</p>
                    <p className="text-2xl font-bold text-blue-400">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Planned</p>
                    <p className="text-2xl font-bold text-yellow-400">1</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Clients</p>
                    <p className="text-2xl font-bold text-purple-400">407</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Migration Progress */}
            <div className="space-y-6">
              {migrationData.map((migration, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-blue-900 rounded-lg">
                        <ArrowRight className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-lg font-bold text-white">
                            {migration.fromVersion} → {migration.toVersion}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMigrationStatusColor(migration.status)}`}>
                            {migration.status}
                          </span>
                        </div>
                        <p className="text-gray-400">
                          {migration.migratedClients} of {migration.affectedClients} clients migrated
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                        <Settings className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-white">{migration.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${
                          migration.status === 'Completed' ? 'bg-green-500' :
                          migration.status === 'In Progress' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${migration.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Start Date</p>
                      <p className="text-white">{formatDate(migration.startDate)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Completion Date</p>
                      <p className="text-white">
                        {migration.completionDate ? formatDate(migration.completionDate) : 'TBD'}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Issues</p>
                      <p className={`font-semibold ${migration.issues > 0 ? 'text-red-400' : 'text-green-400'}`}>
                        {migration.issues}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Success Rate</p>
                      <p className="text-white">
                        {migration.affectedClients > 0 ? 
                          ((migration.migratedClients / migration.affectedClients) * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Affected Clients: {migration.affectedClients}</span>
                      <span>Migrated: {migration.migratedClients}</span>
                      {migration.issues > 0 && (
                        <span className="text-red-400">Issues: {migration.issues}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      {migration.status === 'Planned' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Start Migration
                        </button>
                      )}
                      {migration.status === 'In Progress' && (
                        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors">
                          Pause Migration
                        </button>
                      )}
                      <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Create New Migration */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Create New Migration</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">From Version</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select source version...</option>
                    <option value="v3.1.5">v3.1.5</option>
                    <option value="v3.0.8">v3.0.8</option>
                    <option value="v2.9.12">v2.9.12</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">To Version</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option value="">Select target version...</option>
                    <option value="v3.2.1">v3.2.1 (Current)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Start Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-6">
                <button className="flex items-center space-x-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  <Plus className="h-5 w-5" />
                  <span>Create Migration</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Settings className="h-5 w-5" />
                  <span>Advanced Options</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Changelog Tab */}
        {activeTab === 'changelog' && (
          <div className="space-y-8">
            {/* Changelog Timeline */}
            <div className="space-y-8">
              {changelog.map((entry, index) => (
                <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 bg-purple-900 rounded-lg">
                      <Tag className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{entry.version}</h3>
                        <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">
                          {entry.type}
                        </span>
                      </div>
                      <p className="text-gray-400">{formatDate(entry.date)}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {entry.changes.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <h4 className="text-lg font-semibold text-white mb-3">{category.category}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-300">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Compatibility Tab */}
        {activeTab === 'compatibility' && (
          <div className="space-y-8">
            {/* Compatibility Matrix */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Version Compatibility Matrix</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4 text-gray-400">Version</th>
                      <th className="text-center py-3 px-4 text-gray-400">v3.2.1</th>
                      <th className="text-center py-3 px-4 text-gray-400">v3.1.5</th>
                      <th className="text-center py-3 px-4 text-gray-400">v3.0.8</th>
                      <th className="text-center py-3 px-4 text-gray-400">v2.9.12</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['v3.2.1', 'v3.1.5', 'v3.0.8', 'v2.9.12'].map((version, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-3 px-4 text-white font-medium">{version}</td>
                        <td className="text-center py-3 px-4">
                          <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                        </td>
                        <td className="text-center py-3 px-4">
                          {index <= 1 ? (
                            <CheckCircle className="h-5 w-5 text-green-400 mx-auto" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-yellow-400 mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3 px-4">
                          {index <= 2 ? (
                            <AlertCircle className="h-5 w-5 text-yellow-400 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-3 px-4">
                          <XCircle className="h-5 w-5 text-red-400 mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex items-center space-x-6 mt-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-gray-400">Fully Compatible</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-400">Partial Compatibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <XCircle className="h-4 w-4 text-red-400" />
                  <span className="text-gray-400">Incompatible</span>
                </div>
              </div>
            </div>

            {/* Breaking Changes */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Breaking Changes</h3>
              <div className="space-y-4">
                {[
                  {
                    version: 'v3.0.0',
                    change: 'Authentication method changed from API keys to OAuth 2.0',
                    impact: 'High',
                    mitigation: 'Use migration tool to convert API keys to OAuth tokens'
                  },
                  {
                    version: 'v2.8.0',
                    change: 'Deprecated webhook format removed',
                    impact: 'Medium',
                    mitigation: 'Update webhook handlers to use new format'
                  },
                  {
                    version: 'v2.5.0',
                    change: 'Legacy endpoint /api/v1/ removed',
                    impact: 'High',
                    mitigation: 'Migrate to /api/v2/ endpoints'
                  }
                ].map((breakingChange, index) => (
                  <div key={index} className="p-4 bg-red-900 bg-opacity-20 border border-red-700 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-medium">{breakingChange.version}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        breakingChange.impact === 'High' ? 'bg-red-600 text-white' :
                        breakingChange.impact === 'Medium' ? 'bg-yellow-600 text-white' :
                        'bg-blue-600 text-white'
                      }`}>
                        {breakingChange.impact} Impact
                      </span>
                    </div>
                    <p className="text-red-300 mb-2">{breakingChange.change}</p>
                    <p className="text-gray-400 text-sm">
                      <strong>Mitigation:</strong> {breakingChange.mitigation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Usage Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Version Usage Over Time</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Version adoption trends</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Current Version Distribution</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Version usage breakdown</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Version Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mb-3">
                    <TrendingUp className="h-8 w-8 text-green-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Adoption Rate</p>
                  <p className="text-2xl font-bold text-green-400">94.2%</p>
                  <p className="text-xs text-gray-500">for current version</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-blue-900 rounded-lg mb-3">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Avg Migration Time</p>
                  <p className="text-2xl font-bold text-blue-400">14 days</p>
                  <p className="text-xs text-gray-500">per major version</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mb-3">
                    <Shield className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Compatibility Score</p>
                  <p className="text-2xl font-bold text-purple-400">87.5%</p>
                  <p className="text-xs text-gray-500">backward compatibility</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-yellow-900 rounded-lg mb-3">
                    <Target className="h-8 w-8 text-yellow-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-yellow-400">96.8%</p>
                  <p className="text-xs text-gray-500">migration success</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="space-y-8">
            {/* Version Settings */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Version Management Settings</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Default Deprecation Period</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="18">18 months</option>
                      <option value="24">24 months</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">End of Life Period</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option value="6">6 months after deprecation</option>
                      <option value="12">12 months after deprecation</option>
                      <option value="18">18 months after deprecation</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Automatic Migration Notifications</p>
                      <p className="text-sm text-gray-400">Send notifications to clients about upcoming migrations</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Backward Compatibility Checks</p>
                      <p className="text-sm text-gray-400">Automatically check for breaking changes</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Version Analytics</p>
                      <p className="text-sm text-gray-400">Collect usage analytics for version planning</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Notification Settings</h3>
              <div className="space-y-4">
                {[
                  { label: 'New Version Released', description: 'Notify when a new API version is released' },
                  { label: 'Version Deprecated', description: 'Notify when a version is marked as deprecated' },
                  { label: 'Migration Started', description: 'Notify when a migration process begins' },
                  { label: 'Migration Completed', description: 'Notify when a migration is completed' },
                  { label: 'Breaking Changes', description: 'Notify about breaking changes in new versions' },
                  { label: 'End of Life Warning', description: 'Notify before a version reaches end of life' }
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{setting.label}</p>
                      <p className="text-sm text-gray-400">{setting.description}</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white transition translate-x-6"></span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Save Settings */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                <Save className="h-5 w-5" />
                <span>Save Settings</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                <RefreshCw className="h-5 w-5" />
                <span>Reset to Defaults</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiVersioningManager;

