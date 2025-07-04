import React, { useState, useEffect, useRef } from 'react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  Zap, Database, Cpu, Activity, Clock, Server, 
  Play, Pause, Square, RefreshCw, Settings, AlertTriangle,
  CheckCircle, XCircle, Info, TrendingUp, TrendingDown,
  Users, MessageCircle, Heart, Target, Filter, Download,
  Monitor, HardDrive, Wifi, Globe, BarChart3, Eye,
  ArrowUp, ArrowDown, Circle, Triangle, Square as SquareIcon
} from 'lucide-react';

const RealTimeDataProcessingCenter = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [selectedStream, setSelectedStream] = useState('user_activity');
  const [processingRate, setProcessingRate] = useState(15420);
  const [systemHealth, setSystemHealth] = useState(98.5);
  const [activeStreams, setActiveStreams] = useState(8);
  const [showSystemMetrics, setShowSystemMetrics] = useState(true);
  const [alertsCount, setAlertsCount] = useState(2);
  const intervalRef = useRef(null);

  // Data streams configuration
  const dataStreams = [
    {
      id: 'user_activity',
      name: 'User Activity Stream',
      description: 'Real-time user interactions and behaviors',
      status: 'active',
      throughput: 2450,
      latency: 12,
      icon: Users,
      color: '#8b5cf6'
    },
    {
      id: 'messaging',
      name: 'Messaging Stream',
      description: 'Live message exchanges and conversations',
      status: 'active',
      throughput: 1890,
      latency: 8,
      icon: MessageCircle,
      color: '#06b6d4'
    },
    {
      id: 'matching',
      name: 'Matching Engine Stream',
      description: 'Real-time matching and compatibility processing',
      status: 'active',
      throughput: 890,
      latency: 15,
      icon: Heart,
      color: '#ef4444'
    },
    {
      id: 'analytics',
      name: 'Analytics Stream',
      description: 'Live analytics and metrics computation',
      status: 'active',
      throughput: 3200,
      latency: 5,
      icon: BarChart3,
      color: '#10b981'
    },
    {
      id: 'notifications',
      name: 'Notification Stream',
      description: 'Real-time notification delivery system',
      status: 'warning',
      throughput: 1200,
      latency: 25,
      icon: Target,
      color: '#f59e0b'
    },
    {
      id: 'system_logs',
      name: 'System Logs Stream',
      description: 'Application and system log processing',
      status: 'active',
      throughput: 5600,
      latency: 3,
      icon: Monitor,
      color: '#6b7280'
    }
  ];

  // Real-time data simulation
  const [realtimeData, setRealtimeData] = useState([]);
  const [systemMetrics, setSystemMetrics] = useState([]);
  const [streamMetrics, setStreamMetrics] = useState({});

  // System alerts
  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High Latency Detected',
      message: 'Notification stream latency increased to 25ms',
      timestamp: new Date(Date.now() - 300000),
      stream: 'notifications'
    },
    {
      id: 2,
      type: 'info',
      title: 'Processing Rate Spike',
      message: 'User activity stream throughput increased by 35%',
      timestamp: new Date(Date.now() - 600000),
      stream: 'user_activity'
    }
  ];

  // Performance metrics
  const performanceMetrics = [
    { name: 'CPU Usage', value: 68, max: 100, color: '#8b5cf6', status: 'normal' },
    { name: 'Memory Usage', value: 72, max: 100, color: '#06b6d4', status: 'normal' },
    { name: 'Disk I/O', value: 45, max: 100, color: '#10b981', status: 'normal' },
    { name: 'Network I/O', value: 89, max: 100, color: '#f59e0b', status: 'warning' }
  ];

  useEffect(() => {
    if (isProcessing) {
      intervalRef.current = setInterval(() => {
        // Simulate real-time data updates
        const newDataPoint = {
          timestamp: new Date().toLocaleTimeString(),
          userActivity: Math.floor(Math.random() * 1000) + 2000,
          messaging: Math.floor(Math.random() * 500) + 1500,
          matching: Math.floor(Math.random() * 300) + 700,
          analytics: Math.floor(Math.random() * 800) + 2800,
          notifications: Math.floor(Math.random() * 400) + 1000,
          systemLogs: Math.floor(Math.random() * 1000) + 5000
        };

        setRealtimeData(prev => {
          const updated = [...prev, newDataPoint];
          return updated.slice(-20); // Keep last 20 data points
        });

        // Update system metrics
        const newSystemMetric = {
          timestamp: new Date().toLocaleTimeString(),
          cpu: Math.floor(Math.random() * 20) + 60,
          memory: Math.floor(Math.random() * 15) + 65,
          disk: Math.floor(Math.random() * 30) + 35,
          network: Math.floor(Math.random() * 25) + 75
        };

        setSystemMetrics(prev => {
          const updated = [...prev, newSystemMetric];
          return updated.slice(-20);
        });

        // Update processing rate
        setProcessingRate(prev => prev + Math.floor(Math.random() * 200) - 100);
      }, 2000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isProcessing]);

  const toggleProcessing = () => {
    setIsProcessing(!isProcessing);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      case 'inactive': return Circle;
      default: return Circle;
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'error': return XCircle;
      case 'info': return Info;
      default: return Info;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'error': return 'text-red-600 bg-red-50 border-red-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Zap className="w-8 h-8 text-blue-600" />
              Real-time Data Processing Center
            </h1>
            <p className="text-gray-600">
              Monitor and manage live data streams and processing pipelines
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-gray-200">
              <div className={`w-2 h-2 rounded-full ${isProcessing ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-sm text-gray-600">
                {isProcessing ? 'Processing' : 'Stopped'}
              </span>
            </div>
            
            <button
              onClick={toggleProcessing}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isProcessing 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isProcessing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isProcessing ? 'Pause' : 'Start'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Settings className="w-4 h-4" />
              Configure
            </button>
          </div>
        </div>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Database className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{processingRate.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Records/min</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900">Processing Rate</h3>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{systemHealth}%</div>
              <div className="text-sm text-gray-600">Health Score</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900">System Health</h3>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{activeStreams}</div>
              <div className="text-sm text-gray-600">Active Streams</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900">Data Streams</h3>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{alertsCount}</div>
              <div className="text-sm text-gray-600">Active Alerts</div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-900">System Alerts</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Data Streams Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Real-time Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Live Data Throughput</h3>
              <div className="flex items-center gap-2">
                <select
                  value={selectedStream}
                  onChange={(e) => setSelectedStream(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Streams</option>
                  {dataStreams.map(stream => (
                    <option key={stream.id} value={stream.id}>{stream.name}</option>
                  ))}
                </select>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={realtimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                {selectedStream === 'all' ? (
                  <>
                    <Area type="monotone" dataKey="userActivity" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="messaging" stackId="1" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="matching" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="analytics" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  </>
                ) : (
                  <Area type="monotone" dataKey={selectedStream} stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Data Streams List */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Streams</h3>
            <div className="space-y-4">
              {dataStreams.map((stream) => {
                const IconComponent = stream.icon;
                const StatusIcon = getStatusIcon(stream.status);
                return (
                  <div key={stream.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: `${stream.color}20` }}>
                        <IconComponent className="w-5 h-5" style={{ color: stream.color }} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{stream.name}</h4>
                        <p className="text-sm text-gray-600">{stream.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{stream.throughput.toLocaleString()}/min</div>
                        <div className="text-xs text-gray-600">Throughput</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-900">{stream.latency}ms</div>
                        <div className="text-xs text-gray-600">Latency</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <StatusIcon className="w-4 h-4" />
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(stream.status)}`}>
                          {stream.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* System Performance */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">System Performance</h3>
              <button
                onClick={() => setShowSystemMetrics(!showSystemMetrics)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>
            
            {showSystemMetrics && (
              <div className="space-y-4">
                {performanceMetrics.map((metric, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{metric.name}</span>
                      <span className="text-sm text-gray-600">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${metric.value}%`,
                          backgroundColor: metric.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {showSystemMetrics && systemMetrics.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Real-time Metrics</h4>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={systemMetrics}>
                    <XAxis dataKey="timestamp" hide />
                    <YAxis hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="cpu" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="memory" stroke="#06b6d4" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          {/* System Alerts */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">System Alerts</h3>
            <div className="space-y-3">
              {systemAlerts.map((alert) => {
                const AlertIcon = getAlertIcon(alert.type);
                return (
                  <div
                    key={alert.id}
                    className={`p-3 rounded-lg border ${getAlertColor(alert.type)}`}
                  >
                    <div className="flex items-start gap-3">
                      <AlertIcon className="w-4 h-4 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{alert.title}</div>
                        <div className="text-sm opacity-90 mt-1">{alert.message}</div>
                        <div className="text-xs opacity-75 mt-2">
                          {alert.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Processing Controls */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Processing Controls</h3>
            <div className="space-y-3">
              <button
                onClick={toggleProcessing}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isProcessing 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isProcessing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isProcessing ? 'Pause All' : 'Start All'}
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                <Square className="w-4 h-4" />
                Stop All
              </button>
              
              <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <RefreshCw className="w-4 h-4" />
                Restart All
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Records Today</span>
                <span className="font-semibold text-gray-900">2.4M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg Latency</span>
                <span className="font-semibold text-gray-900">12ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Error Rate</span>
                <span className="font-semibold text-green-600">0.02%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Uptime</span>
                <span className="font-semibold text-gray-900">99.98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeDataProcessingCenter;

