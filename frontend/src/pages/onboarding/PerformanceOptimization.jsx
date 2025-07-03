import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Zap, 
  Activity, 
  Gauge, 
  Speedometer, 
  Timer, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  LineChart, 
  PieChart, 
  Settings, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Wifi, 
  Signal, 
  Battery, 
  HardDrive, 
  Cpu, 
  MemoryStick, 
  Database, 
  Server, 
  Cloud, 
  Globe, 
  MapPin, 
  Navigation, 
  Target, 
  CheckCircle, 
  AlertCircle, 
  AlertTriangle, 
  Info, 
  Star, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  Eye, 
  EyeOff, 
  Play, 
  Pause, 
  Stop, 
  SkipBack, 
  SkipForward, 
  FastForward, 
  Rewind, 
  Refresh, 
  RotateCcw, 
  RotateCw, 
  Download, 
  Upload, 
  Share, 
  Copy, 
  Save, 
  FileText, 
  File, 
  Folder, 
  Search, 
  Filter, 
  Sort, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Minus, 
  X, 
  Check, 
  MoreHorizontal, 
  MoreVertical, 
  Menu, 
  Home, 
  User, 
  Users, 
  Mail, 
  Phone, 
  MessageCircle, 
  Video, 
  Camera, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Calendar, 
  Bookmark, 
  Tag, 
  Hash, 
  AtSign, 
  Percent, 
  DollarSign, 
  CreditCard, 
  ShoppingCart, 
  Gift, 
  Package, 
  Truck, 
  Plane, 
  Car, 
  Bike, 
  Walk, 
  Run, 
  Dumbbell, 
  Pulse, 
  Thermometer, 
  Droplets, 
  Flame, 
  Bolt, 
  Flash, 
  Lightning, 
  Storm, 
  Sun, 
  Moon, 
  Cloud as CloudIcon, 
  CloudRain, 
  Umbrella, 
  Wind, 
  Snowflake, 
  Mountain, 
  Tree, 
  Leaf, 
  Flower, 
  Grass, 
  Apple, 
  Coffee, 
  Wine, 
  Music, 
  Film, 
  Book, 
  Gamepad2, 
  Headphones, 
  Keyboard, 
  Mouse, 
  Printer, 
  Scanner, 
  Usb, 
  Bluetooth, 
  WifiOff, 
  SignalLow, 
  SignalMedium, 
  SignalHigh, 
  BatteryLow, 
  BatteryCharging, 
  BatteryFull, 
  Power, 
  PowerOff, 
  Plug, 
  Unplug, 
  Lock, 
  Unlock, 
  Key, 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX, 
  Security, 
  Fingerprint, 
  Scan, 
  QrCode, 
  Barcode, 
  CreditCard as CreditCardIcon, 
  Wallet, 
  Coins, 
  Banknote, 
  Receipt, 
  Calculator, 
  Abacus, 
  PiggyBank, 
  TrendingUp as TrendingUpIcon, 
  TrendingDown as TrendingDownIcon, 
  BarChart, 
  BarChart2, 
  BarChart4, 
  LineChart as LineChartIcon, 
  PieChart as PieChartIcon, 
  Donut, 
  Activity as ActivityIcon, 
  Pulse as PulseIcon, 
  Heartbeat, 
  Stethoscope, 
  Pill, 
  Syringe, 
  Bandage, 
  Cross, 
  Plus as PlusIcon, 
  Minus as MinusIcon, 
  Equal, 
  Divide, 
  Multiply, 
  Percent as PercentIcon, 
  Pi, 
  Infinity, 
  Sigma, 
  Alpha, 
  Beta, 
  Gamma, 
  Delta, 
  Epsilon, 
  Zeta, 
  Eta, 
  Theta, 
  Iota, 
  Kappa, 
  Lambda, 
  Mu, 
  Nu, 
  Xi, 
  Omicron, 
  Rho, 
  Tau, 
  Upsilon, 
  Phi, 
  Chi, 
  Psi, 
  Omega, 
  AlphaIcon, 
  BetaIcon, 
  GammaIcon, 
  DeltaIcon, 
  EpsilonIcon, 
  ZetaIcon, 
  EtaIcon, 
  ThetaIcon, 
  IotaIcon, 
  KappaIcon, 
  LambdaIcon, 
  MuIcon, 
  NuIcon, 
  XiIcon, 
  OmicronIcon, 
  RhoIcon, 
  TauIcon, 
  UpsilonIcon, 
  PhiIcon, 
  ChiIcon, 
  PsiIcon, 
  OmegaIcon
} from 'lucide-react';

const PerformanceOptimization = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMonitoring, setIsMonitoring] = useState(true);
  const [performanceData, setPerformanceData] = useState({
    pageLoadTime: 1.2,
    firstContentfulPaint: 0.8,
    largestContentfulPaint: 1.5,
    cumulativeLayoutShift: 0.05,
    firstInputDelay: 12,
    timeToInteractive: 2.1,
    totalBlockingTime: 45,
    speedIndex: 1.8
  });

  const [resourceMetrics, setResourceMetrics] = useState({
    jsSize: 245,
    cssSize: 89,
    imageSize: 1240,
    fontSize: 156,
    totalSize: 1730,
    requests: 42,
    cachedRequests: 38,
    compressionRatio: 78
  });

  const [deviceMetrics, setDeviceMetrics] = useState({
    mobile: { score: 92, loadTime: 1.4, fcp: 0.9 },
    tablet: { score: 95, loadTime: 1.1, fcp: 0.7 },
    desktop: { score: 98, loadTime: 0.8, fcp: 0.5 }
  });

  const [networkMetrics, setNetworkMetrics] = useState({
    '4g': { score: 89, loadTime: 2.1, fcp: 1.2 },
    '3g': { score: 76, loadTime: 4.8, fcp: 2.9 },
    'wifi': { score: 98, loadTime: 0.9, fcp: 0.6 },
    'slow': { score: 68, loadTime: 8.2, fcp: 5.1 }
  });

  const [optimizationSettings, setOptimizationSettings] = useState({
    imageOptimization: true,
    codeMinification: true,
    gzipCompression: true,
    browserCaching: true,
    cdnEnabled: true,
    lazyLoading: true,
    preloading: true,
    serviceworker: true,
    http2: true,
    webp: true
  });

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Large image detected on homepage (2.1MB)', timestamp: '2 minutes ago' },
    { id: 2, type: 'info', message: 'CDN cache hit ratio improved to 94%', timestamp: '15 minutes ago' },
    { id: 3, type: 'success', message: 'Page load time improved by 23%', timestamp: '1 hour ago' }
  ]);

  const handleOptimizationToggle = useCallback((key) => {
    setOptimizationSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const getPerformanceScore = useCallback(() => {
    const { pageLoadTime, firstContentfulPaint, cumulativeLayoutShift, firstInputDelay } = performanceData;
    
    let score = 100;
    if (pageLoadTime > 2.5) score -= 20;
    else if (pageLoadTime > 1.5) score -= 10;
    
    if (firstContentfulPaint > 1.8) score -= 15;
    else if (firstContentfulPaint > 1.2) score -= 8;
    
    if (cumulativeLayoutShift > 0.1) score -= 15;
    else if (cumulativeLayoutShift > 0.05) score -= 8;
    
    if (firstInputDelay > 100) score -= 20;
    else if (firstInputDelay > 50) score -= 10;
    
    return Math.max(0, Math.round(score));
  }, [performanceData]);

  const PerformanceOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Zap className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Performance Score</h3>
            <p className="text-sm text-gray-600">Real-time performance monitoring and optimization</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="text-3xl font-bold text-blue-600">{getPerformanceScore()}</div>
            <div className="text-sm text-gray-600">/100</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Timer className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Page Load Time</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{performanceData.pageLoadTime}s</div>
            <div className="text-xs text-gray-500">Target: &lt;2.5s</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">First Contentful Paint</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{performanceData.firstContentfulPaint}s</div>
            <div className="text-xs text-gray-500">Target: &lt;1.8s</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Cumulative Layout Shift</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">{performanceData.cumulativeLayoutShift}</div>
            <div className="text-xs text-gray-500">Target: &lt;0.1</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Gauge className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">First Input Delay</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">{performanceData.firstInputDelay}ms</div>
            <div className="text-xs text-gray-500">Target: &lt;100ms</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Web Vitals</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Largest Contentful Paint</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-green-500 rounded-full" 
                    style={{ width: `${Math.min(100, (2.5 - performanceData.largestContentfulPaint) / 2.5 * 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{performanceData.largestContentfulPaint}s</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Time to Interactive</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: `${Math.min(100, (5 - performanceData.timeToInteractive) / 5 * 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{performanceData.timeToInteractive}s</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Blocking Time</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-purple-500 rounded-full" 
                    style={{ width: `${Math.min(100, (300 - performanceData.totalBlockingTime) / 300 * 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{performanceData.totalBlockingTime}ms</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Speed Index</span>
              <div className="flex items-center gap-2">
                <div className="w-20 h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-orange-500 rounded-full" 
                    style={{ width: `${Math.min(100, (4 - performanceData.speedIndex) / 4 * 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{performanceData.speedIndex}s</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Resource Optimization</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">JavaScript</div>
                  <div className="text-sm text-gray-600">{resourceMetrics.jsSize}KB compressed</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Optimized</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Palette className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">CSS</div>
                  <div className="text-sm text-gray-600">{resourceMetrics.cssSize}KB compressed</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Optimized</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Camera className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Images</div>
                  <div className="text-sm text-gray-600">{resourceMetrics.imageSize}KB WebP format</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Optimized</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Type className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-medium text-gray-900">Fonts</div>
                  <div className="text-sm text-gray-600">{resourceMetrics.fontSize}KB WOFF2 format</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Optimized</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DevicePerformance = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Device Performance Analysis</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-6 h-6 text-blue-600" />
              <div>
                <h5 className="font-semibold text-gray-900">Mobile</h5>
                <p className="text-sm text-gray-600">iOS & Android</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Performance Score</span>
                <span className="text-lg font-bold text-blue-600">{deviceMetrics.mobile.score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{deviceMetrics.mobile.loadTime}s</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">First Contentful Paint</span>
                <span className="text-sm font-medium text-gray-900">{deviceMetrics.mobile.fcp}s</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <Tablet className="w-6 h-6 text-purple-600" />
              <div>
                <h5 className="font-semibold text-gray-900">Tablet</h5>
                <p className="text-sm text-gray-600">iPad & Android tablets</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Performance Score</span>
                <span className="text-lg font-bold text-purple-600">{deviceMetrics.tablet.score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{deviceMetrics.tablet.loadTime}s</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">First Contentful Paint</span>
                <span className="text-sm font-medium text-gray-900">{deviceMetrics.tablet.fcp}s</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-6 h-6 text-green-600" />
              <div>
                <h5 className="font-semibold text-gray-900">Desktop</h5>
                <p className="text-sm text-gray-600">Windows, Mac, Linux</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Performance Score</span>
                <span className="text-lg font-bold text-green-600">{deviceMetrics.desktop.score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{deviceMetrics.desktop.loadTime}s</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">First Contentful Paint</span>
                <span className="text-sm font-medium text-gray-900">{deviceMetrics.desktop.fcp}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Network Performance Analysis</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Wifi className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">WiFi</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Score</span>
                <span className="text-lg font-bold text-green-600">{networkMetrics.wifi.score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{networkMetrics.wifi.loadTime}s</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Signal className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900">4G</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Score</span>
                <span className="text-lg font-bold text-blue-600">{networkMetrics['4g'].score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{networkMetrics['4g'].loadTime}s</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <SignalMedium className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-gray-900">3G</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Score</span>
                <span className="text-lg font-bold text-orange-600">{networkMetrics['3g'].score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{networkMetrics['3g'].loadTime}s</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <SignalLow className="w-5 h-5 text-red-600" />
              <span className="font-medium text-gray-900">Slow 2G</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Score</span>
                <span className="text-lg font-bold text-red-600">{networkMetrics.slow.score}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Load Time</span>
                <span className="text-sm font-medium text-gray-900">{networkMetrics.slow.loadTime}s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const OptimizationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Content Optimization</h4>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Image Optimization</label>
              <p className="text-xs text-gray-500">WebP format, compression, and responsive images</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.imageOptimization}
                onChange={() => handleOptimizationToggle('imageOptimization')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Code Minification</label>
              <p className="text-xs text-gray-500">Minify JavaScript, CSS, and HTML</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.codeMinification}
                onChange={() => handleOptimizationToggle('codeMinification')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">GZIP Compression</label>
              <p className="text-xs text-gray-500">Compress text-based resources</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.gzipCompression}
                onChange={() => handleOptimizationToggle('gzipCompression')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Lazy Loading</label>
              <p className="text-xs text-gray-500">Load images and content on demand</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.lazyLoading}
                onChange={() => handleOptimizationToggle('lazyLoading')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Caching & Delivery</h4>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Browser Caching</label>
              <p className="text-xs text-gray-500">Cache static resources in browser</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.browserCaching}
                onChange={() => handleOptimizationToggle('browserCaching')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">CDN Enabled</label>
              <p className="text-xs text-gray-500">Global content delivery network</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.cdnEnabled}
                onChange={() => handleOptimizationToggle('cdnEnabled')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Resource Preloading</label>
              <p className="text-xs text-gray-500">Preload critical resources</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.preloading}
                onChange={() => handleOptimizationToggle('preloading')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Service Worker</label>
              <p className="text-xs text-gray-500">Offline caching and background sync</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.serviceworker}
                onChange={() => handleOptimizationToggle('serviceworker')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Advanced Optimizations</h4>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">HTTP/2 Protocol</label>
              <p className="text-xs text-gray-500">Multiplexed connections and server push</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.http2}
                onChange={() => handleOptimizationToggle('http2')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">WebP Images</label>
              <p className="text-xs text-gray-500">Next-generation image format</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optimizationSettings.webp}
                onChange={() => handleOptimizationToggle('webp')}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const MonitoringPanel = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-gray-900">Real-time Monitoring</h4>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isMonitoring ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-600">{isMonitoring ? 'Active' : 'Inactive'}</span>
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                isMonitoring 
                  ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
            >
              {isMonitoring ? 'Stop' : 'Start'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">CPU Usage</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">23%</div>
            <div className="text-xs text-blue-600">Normal</div>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-2">
              <MemoryStick className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Memory Usage</span>
            </div>
            <div className="text-2xl font-bold text-green-600">156MB</div>
            <div className="text-xs text-green-600">Optimal</div>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Network</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">45ms</div>
            <div className="text-xs text-purple-600">Low latency</div>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <HardDrive className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Cache Hit</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">94%</div>
            <div className="text-xs text-orange-600">Excellent</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Alerts</h4>
        
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className={`p-3 rounded-lg border ${
              alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
              alert.type === 'success' ? 'bg-green-50 border-green-200' :
              'bg-blue-50 border-blue-200'
            }`}>
              <div className="flex items-center gap-3">
                {alert.type === 'warning' && <AlertTriangle className="w-4 h-4 text-yellow-600" />}
                {alert.type === 'success' && <CheckCircle className="w-4 h-4 text-green-600" />}
                {alert.type === 'info' && <Info className="w-4 h-4 text-blue-600" />}
                
                <div className="flex-1">
                  <div className={`text-sm font-medium ${
                    alert.type === 'warning' ? 'text-yellow-800' :
                    alert.type === 'success' ? 'text-green-800' :
                    'text-blue-800'
                  }`}>
                    {alert.message}
                  </div>
                  <div className="text-xs text-gray-500">{alert.timestamp}</div>
                </div>
                
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h5 className="font-medium text-gray-900">Load Time Trends</h5>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last 24 hours</span>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">-12%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last 7 days</span>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">-8%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last 30 days</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600">+3%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="font-medium text-gray-900">User Experience</h5>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">18%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Session Duration</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">4.2m</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Page Views</span>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-600">+15%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Zap },
    { id: 'devices', label: 'Device Performance', icon: Monitor },
    { id: 'settings', label: 'Optimization', icon: Settings },
    { id: 'monitoring', label: 'Monitoring', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Performance Optimization</h1>
                <p className="text-gray-600">Real-time monitoring and optimization for maximum performance</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Score: {getPerformanceScore()}</span>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Activity className="w-4 h-4" />
                Optimize
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="flex items-center gap-1 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && <PerformanceOverview />}
          {activeTab === 'devices' && <DevicePerformance />}
          {activeTab === 'settings' && <OptimizationSettings />}
          {activeTab === 'monitoring' && <MonitoringPanel />}
        </div>

        {/* Footer */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="text-gray-600">Performance Score: {getPerformanceScore()}/100</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-green-600" />
                <span className="text-gray-600">Load Time: {performanceData.pageLoadTime}s</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-600" />
                <span className="text-gray-600">Monitoring: {isMonitoring ? 'Active' : 'Inactive'}</span>
              </div>
            </div>
            
            <div className="text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimization;

