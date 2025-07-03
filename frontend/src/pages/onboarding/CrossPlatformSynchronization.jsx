import React, { useState, useEffect, useRef } from 'react';
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  Wifi, 
  WifiOff, 
  Sync, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Settings, 
  RefreshCw, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  Activity,
  Globe,
  Lock,
  Users,
  FileText,
  Image,
  Video,
  Music,
  Calendar,
  MessageSquare,
  Heart,
  Target,
  TrendingUp,
  Bell,
  Download,
  Upload,
  HardDrive,
  Server
} from 'lucide-react';

const CrossPlatformSynchronization = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [syncStatus, setSyncStatus] = useState('synced');
  const [devices, setDevices] = useState([
    { id: 1, name: 'iPhone 15 Pro', type: 'mobile', status: 'synced', lastSync: '2 minutes ago', data: '2.4 GB' },
    { id: 2, name: 'MacBook Pro', type: 'desktop', status: 'syncing', lastSync: 'Now', data: '3.1 GB' },
    { id: 3, name: 'iPad Air', type: 'tablet', status: 'synced', lastSync: '5 minutes ago', data: '1.8 GB' },
    { id: 4, name: 'Windows PC', type: 'desktop', status: 'offline', lastSync: '2 hours ago', data: '2.9 GB' }
  ]);
  const [syncSettings, setSyncSettings] = useState({
    autoSync: true,
    wifiOnly: false,
    backgroundSync: true,
    conflictResolution: 'latest',
    dataTypes: {
      profiles: true,
      messages: true,
      photos: true,
      videos: false,
      audio: true,
      calendar: true,
      goals: true,
      assessments: true,
      analytics: true,
      preferences: true
    }
  });
  const [syncActivity, setSyncActivity] = useState([
    { id: 1, action: 'Profile updated', device: 'iPhone 15 Pro', time: '2 minutes ago', status: 'success' },
    { id: 2, action: 'Photos synced (24 items)', device: 'MacBook Pro', time: '5 minutes ago', status: 'success' },
    { id: 3, action: 'Messages synchronized', device: 'iPad Air', time: '8 minutes ago', status: 'success' },
    { id: 4, action: 'Sync failed - network error', device: 'Windows PC', time: '2 hours ago', status: 'error' },
    { id: 5, action: 'Goals updated', device: 'iPhone 15 Pro', time: '3 hours ago', status: 'success' }
  ]);
  const [conflictResolution, setConflictResolution] = useState([]);
  const [storageUsage, setStorageUsage] = useState({
    total: '10 GB',
    used: '6.2 GB',
    available: '3.8 GB',
    breakdown: {
      profiles: '0.5 GB',
      messages: '1.2 GB',
      photos: '2.8 GB',
      videos: '1.1 GB',
      audio: '0.4 GB',
      other: '0.2 GB'
    }
  });

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />;
      case 'tablet': return <Tablet className="w-5 h-5" />;
      case 'desktop': return <Monitor className="w-5 h-5" />;
      default: return <Monitor className="w-5 h-5" />;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'synced': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'syncing': return <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />;
      case 'offline': return <WifiOff className="w-4 h-4 text-gray-400" />;
      case 'error': return <AlertCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  const handleSyncNow = () => {
    setSyncStatus('syncing');
    // Simulate sync process
    setTimeout(() => {
      setSyncStatus('synced');
      setDevices(prev => prev.map(device => ({
        ...device,
        status: device.id === 4 ? 'offline' : 'synced',
        lastSync: device.id === 4 ? device.lastSync : 'Just now'
      })));
    }, 3000);
  };

  const handleSettingChange = (setting, value) => {
    setSyncSettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const handleDataTypeChange = (dataType, enabled) => {
    setSyncSettings(prev => ({
      ...prev,
      dataTypes: {
        ...prev.dataTypes,
        [dataType]: enabled
      }
    }));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Sync Status Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Sync className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Sync Status</h3>
              <p className="text-sm text-gray-600">Real-time synchronization across all devices</p>
            </div>
          </div>
          <button
            onClick={handleSyncNow}
            disabled={syncStatus === 'syncing'}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <RefreshCw className={`w-4 h-4 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} />
            <span>{syncStatus === 'syncing' ? 'Syncing...' : 'Sync Now'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-green-700">All Synced</p>
            <p className="text-xs text-green-600">3 of 4 devices</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Cloud className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-blue-700">Cloud Storage</p>
            <p className="text-xs text-blue-600">{storageUsage.used} used</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-purple-700">Real-time</p>
            <p className="text-xs text-purple-600">Instant updates</p>
          </div>
        </div>
      </div>

      {/* Connected Devices */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Connected Devices</h3>
        <div className="space-y-3">
          {devices.map((device) => (
            <div key={device.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  {getDeviceIcon(device.type)}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{device.name}</p>
                  <p className="text-sm text-gray-600">Last sync: {device.lastSync}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500">{device.data}</span>
                {getStatusIcon(device.status)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Sync Activity</h3>
        <div className="space-y-3">
          {syncActivity.slice(0, 5).map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.device}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDevices = () => (
    <div className="space-y-6">
      {/* Device Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Device Management</h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Add Device</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devices.map((device) => (
            <div key={device.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    {getDeviceIcon(device.type)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{device.name}</h4>
                    <p className="text-sm text-gray-600 capitalize">{device.type}</p>
                  </div>
                </div>
                {getStatusIcon(device.status)}
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Last Sync:</span>
                  <span className="text-gray-900">{device.lastSync}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Data Size:</span>
                  <span className="text-gray-900">{device.data}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className={`capitalize ${
                    device.status === 'synced' ? 'text-green-600' :
                    device.status === 'syncing' ? 'text-blue-600' :
                    device.status === 'offline' ? 'text-gray-600' : 'text-red-600'
                  }`}>
                    {device.status}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 flex space-x-2">
                <button className="flex-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
                  Sync Now
                </button>
                <button className="flex-1 px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100">
                  Settings
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Device Security */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Security</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-900">End-to-End Encryption</p>
                  <p className="text-sm text-green-700">All data encrypted in transit</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Lock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-blue-900">Device Authentication</p>
                  <p className="text-sm text-blue-700">Secure device verification</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5 text-purple-600" />
                <div>
                  <p className="font-medium text-purple-900">Secure Storage</p>
                  <p className="text-sm text-purple-700">Encrypted cloud storage</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Activity className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-orange-900">Activity Monitoring</p>
                  <p className="text-sm text-orange-700">Real-time security alerts</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-orange-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      {/* Sync Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Synchronization Settings</h3>
        
        <div className="space-y-6">
          {/* General Settings */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">General Settings</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Auto Sync</p>
                  <p className="text-sm text-gray-600">Automatically sync data across devices</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={syncSettings.autoSync}
                    onChange={(e) => handleSettingChange('autoSync', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">WiFi Only</p>
                  <p className="text-sm text-gray-600">Only sync when connected to WiFi</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={syncSettings.wifiOnly}
                    onChange={(e) => handleSettingChange('wifiOnly', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Background Sync</p>
                  <p className="text-sm text-gray-600">Sync data in the background</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={syncSettings.backgroundSync}
                    onChange={(e) => handleSettingChange('backgroundSync', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Conflict Resolution */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Conflict Resolution</h4>
            <div className="space-y-3">
              {[
                { value: 'latest', label: 'Use Latest Version', desc: 'Always use the most recently modified version' },
                { value: 'manual', label: 'Manual Resolution', desc: 'Ask me to choose when conflicts occur' },
                { value: 'device', label: 'Device Priority', desc: 'Prioritize changes from specific devices' }
              ].map((option) => (
                <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="conflictResolution"
                    value={option.value}
                    checked={syncSettings.conflictResolution === option.value}
                    onChange={(e) => handleSettingChange('conflictResolution', e.target.value)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-600">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Types */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Data Types to Sync</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(syncSettings.dataTypes).map(([dataType, enabled]) => {
            const icons = {
              profiles: Users,
              messages: MessageSquare,
              photos: Image,
              videos: Video,
              audio: Music,
              calendar: Calendar,
              goals: Target,
              assessments: FileText,
              analytics: TrendingUp,
              preferences: Settings
            };
            const Icon = icons[dataType] || FileText;
            
            return (
              <div key={dataType} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900 capitalize">{dataType}</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={enabled}
                    onChange={(e) => handleDataTypeChange(dataType, e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderStorage = () => (
    <div className="space-y-6">
      {/* Storage Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Storage Usage</h3>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Used Storage</span>
            <span className="text-sm text-gray-600">{storageUsage.used} of {storageUsage.total}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: '62%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{storageUsage.available} available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(storageUsage.breakdown).map(([type, size]) => {
            const icons = {
              profiles: Users,
              messages: MessageSquare,
              photos: Image,
              videos: Video,
              audio: Music,
              other: HardDrive
            };
            const Icon = icons[type] || HardDrive;
            
            return (
              <div key={type} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-gray-600" />
                  <span className="font-medium text-gray-900 capitalize">{type}</span>
                </div>
                <span className="text-sm text-gray-600">{size}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Storage Management */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Storage Management</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition-colors">
            <Cloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="font-medium text-blue-900">Upgrade Storage</p>
            <p className="text-sm text-blue-700">Get more space</p>
          </button>
          
          <button className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition-colors">
            <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="font-medium text-green-900">Download Data</p>
            <p className="text-sm text-green-700">Export your data</p>
          </button>
          
          <button className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition-colors">
            <HardDrive className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <p className="font-medium text-red-900">Clear Cache</p>
            <p className="text-sm text-red-700">Free up space</p>
          </button>
        </div>
      </div>

      {/* Backup Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Backup & Recovery</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Server className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Automatic Backup</p>
                <p className="text-sm text-gray-600">Daily backup to secure cloud storage</p>
              </div>
            </div>
            <span className="text-sm text-green-600 font-medium">Active</span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Upload className="w-5 h-5 text-gray-600" />
              <div>
                <p className="font-medium text-gray-900">Last Backup</p>
                <p className="text-sm text-gray-600">Today at 3:00 AM</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
              Backup Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'devices', label: 'Devices', icon: Monitor },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'storage', label: 'Storage', icon: Database }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cross-Platform Synchronization</h1>
          <p className="text-gray-600">Seamlessly sync your relationship data across all devices with real-time updates and secure cloud storage.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-sm border border-gray-200">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-300">
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'devices' && renderDevices()}
          {activeTab === 'settings' && renderSettings()}
          {activeTab === 'storage' && renderStorage()}
        </div>
      </div>
    </div>
  );
};

export default CrossPlatformSynchronization;

