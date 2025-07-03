import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Smartphone, 
  Tablet, 
  Monitor, 
  Settings, 
  Zap, 
  TouchpadIcon as Touch, 
  Wifi, 
  Battery, 
  Signal, 
  Download, 
  Upload, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  Volume2, 
  VolumeX, 
  Vibrate, 
  Sun, 
  Moon, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Move, 
  Hand, 
  Fingerprint, 
  Lock, 
  Unlock, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Info, 
  Star, 
  Heart, 
  Bookmark, 
  Share, 
  MessageCircle, 
  Phone, 
  Video, 
  Camera, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Stop, 
  SkipBack, 
  SkipForward, 
  FastForward, 
  Rewind, 
  Shuffle, 
  Repeat, 
  Clock, 
  Calendar, 
  MapPin, 
  Navigation, 
  Compass, 
  Map, 
  Globe, 
  Wifi as WifiIcon, 
  Bluetooth, 
  Airplay, 
  Cast, 
  Headphones, 
  Speaker, 
  Microphone, 
  Radio, 
  Tv, 
  Monitor as MonitorIcon, 
  Laptop, 
  Tablet as TabletIcon, 
  Smartphone as SmartphoneIcon, 
  Watch, 
  Gamepad2, 
  Joystick, 
  Mouse, 
  Keyboard, 
  Printer, 
  Scanner, 
  Fax, 
  HardDrive, 
  Usb, 
  SdCard, 
  Disc, 
  Database, 
  Server, 
  Cloud, 
  CloudDownload, 
  CloudUpload, 
  CloudSync, 
  CloudOff, 
  Folder, 
  File, 
  FileText, 
  FileImage, 
  FileVideo, 
  FileAudio, 
  FilePlus, 
  FileMinus, 
  FileEdit, 
  FileCheck, 
  FileX, 
  FolderPlus, 
  FolderMinus, 
  FolderEdit, 
  FolderCheck, 
  FolderX, 
  Archive, 
  Package, 
  Box, 
  Inbox, 
  Outbox, 
  Send, 
  Mail, 
  MailOpen, 
  MailCheck, 
  MailX, 
  MessageSquare, 
  MessageCircle as MessageCircleIcon, 
  MessagesSquare, 
  ChatBubbleIcon as Chat, 
  Users, 
  User, 
  UserPlus, 
  UserMinus, 
  UserCheck, 
  UserX, 
  Team, 
  Crown, 
  Award, 
  Trophy, 
  Medal, 
  Target, 
  Goal, 
  Flag, 
  Bookmark as BookmarkIcon, 
  Tag, 
  Tags, 
  Hash, 
  AtSign, 
  Percent, 
  DollarSign, 
  Euro, 
  Pound, 
  Yen, 
  Bitcoin, 
  CreditCard, 
  Wallet, 
  Banknote, 
  Coins, 
  PiggyBank, 
  TrendingUp, 
  TrendingDown, 
  BarChart, 
  LineChart, 
  PieChart, 
  Activity, 
  Pulse, 
  Gauge, 
  Speedometer, 
  Timer, 
  Stopwatch, 
  Hourglass, 
  Clock as ClockIcon, 
  Watch as WatchIcon, 
  Calendar as CalendarIcon, 
  CalendarDays, 
  CalendarCheck, 
  CalendarX, 
  CalendarPlus, 
  CalendarMinus, 
  CalendarClock, 
  CalendarHeart, 
  CalendarRange, 
  Date, 
  Time, 
  Sunrise, 
  Sunset, 
  Sun as SunIcon, 
  Moon as MoonIcon, 
  Star as StarIcon, 
  Stars, 
  Cloud as CloudIcon, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudDrizzle, 
  CloudHail, 
  Tornado, 
  Hurricane, 
  Snowflake, 
  Droplets, 
  Umbrella, 
  Rainbow, 
  Thermometer, 
  Wind, 
  Eye as EyeIcon, 
  EyeOff as EyeOffIcon, 
  Glasses, 
  Sunglasses, 
  Telescope, 
  Microscope, 
  Search, 
  SearchCheck, 
  SearchX, 
  Filter, 
  FilterX, 
  Sort, 
  SortAsc, 
  SortDesc, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpDown, 
  ArrowLeftRight, 
  ArrowUpLeft, 
  ArrowUpRight, 
  ArrowDownLeft, 
  ArrowDownRight, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsUp, 
  ChevronsDown, 
  ChevronsLeft, 
  ChevronsRight, 
  CornerUpLeft, 
  CornerUpRight, 
  CornerDownLeft, 
  CornerDownRight, 
  Move3d, 
  MousePointer, 
  MousePointer2, 
  Cursor, 
  Click, 
  Pointer, 
  Hand as HandIcon, 
  Grab, 
  GrabHand, 
  Pinch, 
  Swipe, 
  Tap, 
  DoubleTap, 
  LongPress, 
  Drag, 
  Drop, 
  Scroll, 
  Pan, 
  Zoom, 
  Rotate, 
  Flip, 
  Mirror, 
  Crop, 
  Resize, 
  Scale, 
  Stretch, 
  Squeeze, 
  Expand, 
  Collapse, 
  Fold, 
  Unfold, 
  Wrap, 
  Unwrap, 
  Group, 
  Ungroup, 
  Combine, 
  Separate, 
  Merge, 
  Split, 
  Join, 
  Divide, 
  Multiply, 
  Add, 
  Subtract, 
  Plus, 
  Minus, 
  Equal, 
  NotEqual, 
  GreaterThan, 
  LessThan, 
  GreaterThanEqual, 
  LessThanEqual, 
  Approximately, 
  Infinity, 
  Percent as PercentIcon, 
  Fraction, 
  Decimal, 
  Binary, 
  Hexadecimal, 
  Octal, 
  Roman, 
  Greek, 
  Arabic, 
  Chinese, 
  Japanese, 
  Korean, 
  Hindi, 
  Thai, 
  Vietnamese, 
  Russian, 
  Spanish, 
  French, 
  German, 
  Italian, 
  Portuguese, 
  Dutch, 
  Swedish, 
  Norwegian, 
  Danish, 
  Finnish, 
  Polish, 
  Czech, 
  Hungarian, 
  Romanian, 
  Bulgarian, 
  Croatian, 
  Serbian, 
  Slovenian, 
  Slovak, 
  Estonian, 
  Latvian, 
  Lithuanian, 
  Ukrainian, 
  Belarusian, 
  Georgian, 
  Armenian, 
  Hebrew, 
  Turkish, 
  Persian, 
  Urdu, 
  Bengali, 
  Tamil, 
  Telugu, 
  Kannada, 
  Malayalam, 
  Gujarati, 
  Punjabi, 
  Marathi, 
  Nepali, 
  Sinhala, 
  Burmese, 
  Khmer, 
  Lao, 
  Mongolian, 
  Tibetan, 
  Uyghur, 
  Kazakh, 
  Kyrgyz, 
  Tajik, 
  Turkmen, 
  Uzbek, 
  Azerbaijani, 
  Kurdish, 
  Pashto, 
  Dari, 
  Farsi, 
  Balochi, 
  Sindhi, 
  Saraiki, 
  Brahui, 
  Balti, 
  Shina, 
  Khowar, 
  Wakhi, 
  Burushaski, 
  Kalasha, 
  Nuristani, 
  Pashai, 
  Pamiri, 
  Yaghnobi, 
  Ossetic, 
  Chechen, 
  Ingush, 
  Avar, 
  Dargin, 
  Lezgian, 
  Tabasaran, 
  Lak, 
  Rutul, 
  Tsakhur, 
  Agul, 
  Archi, 
  Budukh, 
  Kryz, 
  Udi, 
  Khinalug, 
  Jek, 
  Khaput, 
  Shahdagh, 
  Quba, 
  Qabala, 
  Shaki, 
  Zagatala, 
  Balakan, 
  Qax, 
  Oguz, 
  Gabala, 
  Ismayilli, 
  Agsu, 
  Kurdamir, 
  Zardab, 
  Ujar, 
  Goychay, 
  Agdash, 
  Yevlax, 
  Mingachevir, 
  Ganja, 
  Goranboy, 
  Samukh, 
  Shamkir, 
  Tovuz, 
  Gadabay, 
  Dashkasan, 
  Kalbajar, 
  Lachin, 
  Shusha, 
  Khojaly, 
  Khojavend, 
  Fuzuli, 
  Jabrayil, 
  Zangilan, 
  Qubadli, 
  Agdam, 
  Tartar, 
  Barda, 
  Agjabadi, 
  Beylagan, 
  Imishli, 
  Sabirabad, 
  Saatly, 
  Shirvan, 
  Hajigabul, 
  Gobustan, 
  Shamakhi, 
  Maraza, 
  Siyazan, 
  Shabran, 
  Khachmaz, 
  Quba as QubaIcon, 
  Qusar, 
  Khizi, 
  Divichi, 
  Sumgayit, 
  Baku, 
  Absheron, 
  Khirdalan, 
  Pirallahi, 
  Neftchala, 
  Salyan, 
  Neftchala as NeftchalaIcon, 
  Bilasuvar, 
  Jalilabad, 
  Masalli, 
  Yardimli, 
  Lerik, 
  Lankaran, 
  Astara
} from 'lucide-react';

const EnhancedMobileExperience = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [deviceType, setDeviceType] = useState('mobile');
  const [orientation, setOrientation] = useState('portrait');
  const [isOffline, setIsOffline] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(85);
  const [signalStrength, setSignalStrength] = useState(4);
  const [networkType, setNetworkType] = useState('5G');
  
  const [mobileSettings, setMobileSettings] = useState({
    touchSensitivity: 'medium',
    hapticFeedback: true,
    gestureNavigation: true,
    oneHandedMode: false,
    darkModeAuto: true,
    fontScaling: 100,
    animationSpeed: 'normal',
    dataUsageOptimization: true,
    offlineMode: true,
    backgroundSync: true
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: 1.2,
    renderTime: 0.8,
    interactionDelay: 0.1,
    memoryUsage: 45,
    batteryImpact: 'low',
    dataUsage: 2.3
  });

  const [gestureSettings, setGestureSettings] = useState({
    swipeNavigation: true,
    pinchZoom: true,
    doubleTapZoom: true,
    longPressMenu: true,
    shakeToRefresh: false,
    tiltControls: false
  });

  const touchAreaRef = useRef(null);
  const [touchDemo, setTouchDemo] = useState({
    active: false,
    gesture: null,
    coordinates: { x: 0, y: 0 }
  });

  const handleSettingChange = useCallback((category, key, value) => {
    if (category === 'mobile') {
      setMobileSettings(prev => ({ ...prev, [key]: value }));
    } else if (category === 'gesture') {
      setGestureSettings(prev => ({ ...prev, [key]: value }));
    }
  }, []);

  const handleTouchStart = useCallback((e) => {
    if (!touchAreaRef.current) return;
    
    const rect = touchAreaRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    setTouchDemo({
      active: true,
      gesture: 'touch',
      coordinates: { x, y }
    });
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!touchAreaRef.current || !touchDemo.active) return;
    
    const rect = touchAreaRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    
    setTouchDemo(prev => ({
      ...prev,
      gesture: 'swipe',
      coordinates: { x, y }
    }));
  }, [touchDemo.active]);

  const handleTouchEnd = useCallback(() => {
    setTimeout(() => {
      setTouchDemo({
        active: false,
        gesture: null,
        coordinates: { x: 0, y: 0 }
      });
    }, 500);
  }, []);

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    const handleOnlineStatus = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOnlineStatus);

    // Simulate battery and signal changes
    const interval = setInterval(() => {
      setBatteryLevel(prev => Math.max(20, prev - Math.random() * 2));
      setSignalStrength(prev => Math.max(1, Math.min(5, prev + (Math.random() - 0.5) * 2)));
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOnlineStatus);
      clearInterval(interval);
    };
  }, []);

  const MobileOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Smartphone className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Enhanced Mobile Experience</h3>
            <p className="text-sm text-gray-600">Optimized for touch, gestures, and mobile-first interactions</p>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">{Math.round(batteryLevel)}%</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1 h-3 rounded-full ${
                    i < Math.round(signalStrength) ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
              <span className="text-sm font-medium text-gray-700 ml-1">{networkType}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">Load Time</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">{performanceMetrics.loadTime}s</div>
            <div className="text-xs text-gray-500">50% faster than average</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Touch className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Touch Response</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">{performanceMetrics.interactionDelay}s</div>
            <div className="text-xs text-gray-500">Instant feedback</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Download className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Data Usage</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{performanceMetrics.dataUsage}MB</div>
            <div className="text-xs text-gray-500">Per session</div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Battery className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Battery Impact</span>
            </div>
            <div className="text-2xl font-bold text-blue-600 capitalize">{performanceMetrics.batteryImpact}</div>
            <div className="text-xs text-gray-500">Optimized usage</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Device Adaptation</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Current Device</div>
                  <div className="text-sm text-gray-600">iPhone 14 Pro (iOS 17.2)</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Optimized</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <RotateCw className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Orientation</div>
                  <div className="text-sm text-gray-600 capitalize">{orientation}</div>
                </div>
              </div>
              <div className="text-sm text-purple-600 font-medium">Auto-Adapt</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Wifi className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Connection</div>
                  <div className="text-sm text-gray-600">{isOffline ? 'Offline Mode' : `${networkType} Connected`}</div>
                </div>
              </div>
              <div className={`text-sm font-medium ${isOffline ? 'text-orange-600' : 'text-green-600'}`}>
                {isOffline ? 'Cached' : 'Live'}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Touch Gesture Demo</h4>
          
          <div
            ref={touchAreaRef}
            className="relative w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
          >
            {touchDemo.active ? (
              <div
                className="absolute w-8 h-8 bg-blue-500 rounded-full opacity-70 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-ping"
                style={{
                  left: touchDemo.coordinates.x,
                  top: touchDemo.coordinates.y
                }}
              />
            ) : (
              <div className="text-center">
                <Hand className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Touch or click to test gestures</p>
              </div>
            )}
            
            {touchDemo.gesture && (
              <div className="absolute top-2 left-2 bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 capitalize">
                {touchDemo.gesture}
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1 text-gray-600">
              <Touch className="w-3 h-3" />
              <span>Touch</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Move className="w-3 h-3" />
              <span>Swipe</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <ZoomIn className="w-3 h-3" />
              <span>Pinch</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <RotateCw className="w-3 h-3" />
              <span>Rotate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MobileSettings = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Touch & Interaction Settings</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Touch Sensitivity</label>
            <div className="flex items-center gap-4">
              {['low', 'medium', 'high', 'adaptive'].map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="touchSensitivity"
                    value={level}
                    checked={mobileSettings.touchSensitivity === level}
                    onChange={(e) => handleSettingChange('mobile', 'touchSensitivity', e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Haptic Feedback</label>
              <p className="text-xs text-gray-500">Vibration for touch interactions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.hapticFeedback}
                onChange={(e) => handleSettingChange('mobile', 'hapticFeedback', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Gesture Navigation</label>
              <p className="text-xs text-gray-500">Swipe gestures for navigation</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.gestureNavigation}
                onChange={(e) => handleSettingChange('mobile', 'gestureNavigation', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">One-Handed Mode</label>
              <p className="text-xs text-gray-500">Optimize for single-hand use</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.oneHandedMode}
                onChange={(e) => handleSettingChange('mobile', 'oneHandedMode', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Display & Performance</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Font Scaling</label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Small</span>
              <input
                type="range"
                min="75"
                max="150"
                value={mobileSettings.fontScaling}
                onChange={(e) => handleSettingChange('mobile', 'fontScaling', parseInt(e.target.value))}
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600">Large</span>
              <span className="text-sm font-medium text-gray-900 w-12">{mobileSettings.fontScaling}%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Animation Speed</label>
            <select
              value={mobileSettings.animationSpeed}
              onChange={(e) => handleSettingChange('mobile', 'animationSpeed', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="slow">Slow (Accessibility)</option>
              <option value="normal">Normal</option>
              <option value="fast">Fast</option>
              <option value="none">No Animations</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Auto Dark Mode</label>
              <p className="text-xs text-gray-500">Follow system settings</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.darkModeAuto}
                onChange={(e) => handleSettingChange('mobile', 'darkModeAuto', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Data & Connectivity</h4>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Data Usage Optimization</label>
              <p className="text-xs text-gray-500">Reduce data consumption</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.dataUsageOptimization}
                onChange={(e) => handleSettingChange('mobile', 'dataUsageOptimization', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Offline Mode</label>
              <p className="text-xs text-gray-500">Cache content for offline use</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.offlineMode}
                onChange={(e) => handleSettingChange('mobile', 'offlineMode', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">Background Sync</label>
              <p className="text-xs text-gray-500">Sync data when app is closed</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={mobileSettings.backgroundSync}
                onChange={(e) => handleSettingChange('mobile', 'backgroundSync', e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const GestureControls = () => (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Gesture Configuration</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                <div>
                  <label className="text-sm font-medium text-gray-700">Swipe Navigation</label>
                  <p className="text-xs text-gray-500">Left/right swipe to navigate</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gestureSettings.swipeNavigation}
                  onChange={(e) => handleSettingChange('gesture', 'swipeNavigation', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ZoomIn className="w-5 h-5 text-green-600" />
                <div>
                  <label className="text-sm font-medium text-gray-700">Pinch to Zoom</label>
                  <p className="text-xs text-gray-500">Two-finger zoom gesture</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gestureSettings.pinchZoom}
                  onChange={(e) => handleSettingChange('gesture', 'pinchZoom', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MousePointer2 className="w-5 h-5 text-purple-600" />
                <div>
                  <label className="text-sm font-medium text-gray-700">Double Tap Zoom</label>
                  <p className="text-xs text-gray-500">Quick zoom with double tap</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gestureSettings.doubleTapZoom}
                  onChange={(e) => handleSettingChange('gesture', 'doubleTapZoom', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <div>
                  <label className="text-sm font-medium text-gray-700">Long Press Menu</label>
                  <p className="text-xs text-gray-500">Context menu on long press</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gestureSettings.longPressMenu}
                  onChange={(e) => handleSettingChange('gesture', 'longPressMenu', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-red-600" />
                <div>
                  <label className="text-sm font-medium text-gray-700">Shake to Refresh</label>
                  <p className="text-xs text-gray-500">Shake device to refresh</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gestureSettings.shakeToRefresh}
                  onChange={(e) => handleSettingChange('gesture', 'shakeToRefresh', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-indigo-600" />
                <div>
                  <label className="text-sm font-medium text-gray-700">Tilt Controls</label>
                  <p className="text-xs text-gray-500">Device tilt for navigation</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={gestureSettings.tiltControls}
                  onChange={(e) => handleSettingChange('gesture', 'tiltControls', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Gesture Sensitivity</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Swipe Sensitivity</label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Low</span>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue="5"
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600">High</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pinch Sensitivity</label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Low</span>
              <input
                type="range"
                min="1"
                max="10"
                defaultValue="6"
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600">High</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Long Press Duration</label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">0.3s</span>
              <input
                type="range"
                min="300"
                max="1500"
                defaultValue="800"
                className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-sm text-gray-600">1.5s</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PerformancePanel = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <Zap className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Performance Metrics</h3>
            <p className="text-sm text-gray-600">Real-time mobile performance monitoring</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded-lg border border-green-100">
            <div className="text-sm text-gray-600">Load Time</div>
            <div className="text-xl font-bold text-green-600">{performanceMetrics.loadTime}s</div>
            <div className="text-xs text-gray-500">Target: <2s</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-green-100">
            <div className="text-sm text-gray-600">Render Time</div>
            <div className="text-xl font-bold text-blue-600">{performanceMetrics.renderTime}s</div>
            <div className="text-xs text-gray-500">Target: <1s</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-green-100">
            <div className="text-sm text-gray-600">Memory Usage</div>
            <div className="text-xl font-bold text-orange-600">{performanceMetrics.memoryUsage}MB</div>
            <div className="text-xs text-gray-500">Target: <100MB</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-green-100">
            <div className="text-sm text-gray-600">Battery Impact</div>
            <div className="text-xl font-bold text-purple-600 capitalize">{performanceMetrics.batteryImpact}</div>
            <div className="text-xs text-gray-500">Optimized</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Network Optimization</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Image Compression</div>
                  <div className="text-sm text-gray-600">WebP format, 80% quality</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Active</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-medium text-gray-900">Lazy Loading</div>
                  <div className="text-sm text-gray-600">Load content as needed</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Active</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Cloud className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">CDN Caching</div>
                  <div className="text-sm text-gray-600">Global content delivery</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Active</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <RefreshCw className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Background Sync</div>
                  <div className="text-sm text-gray-600">Smart data synchronization</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">Active</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Device Compatibility</h4>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">iOS Devices</div>
                  <div className="text-sm text-gray-600">iPhone 8+ / iOS 14+</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Supported</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-gray-900">Android Devices</div>
                  <div className="text-sm text-gray-600">Android 8+ / API 26+</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Supported</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Tablet className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium text-gray-900">Tablets</div>
                  <div className="text-sm text-gray-600">iPad / Android tablets</div>
                </div>
              </div>
              <div className="text-sm text-green-600 font-medium">✓ Optimized</div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Watch className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="font-medium text-gray-900">Wearables</div>
                  <div className="text-sm text-gray-600">Apple Watch / Wear OS</div>
                </div>
              </div>
              <div className="text-sm text-orange-600 font-medium">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Smartphone },
    { id: 'settings', label: 'Mobile Settings', icon: Settings },
    { id: 'gestures', label: 'Gesture Controls', icon: Hand },
    { id: 'performance', label: 'Performance', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Enhanced Mobile Experience</h1>
                <p className="text-gray-600">Optimized touch interactions, gestures, and mobile-first design</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
                {deviceType === 'mobile' && <Smartphone className="w-4 h-4 text-gray-600" />}
                {deviceType === 'tablet' && <Tablet className="w-4 h-4 text-gray-600" />}
                {deviceType === 'desktop' && <Monitor className="w-4 h-4 text-gray-600" />}
                <span className="text-sm font-medium text-gray-700 capitalize">{deviceType}</span>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Settings className="w-4 h-4" />
                Configure
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
          {activeTab === 'overview' && <MobileOverview />}
          {activeTab === 'settings' && <MobileSettings />}
          {activeTab === 'gestures' && <GestureControls />}
          {activeTab === 'performance' && <PerformancePanel />}
        </div>

        {/* Status Bar */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isOffline ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                <span className="text-gray-600">{isOffline ? 'Offline Mode' : 'Connected'}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Battery className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">{Math.round(batteryLevel)}%</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Signal className="w-4 h-4 text-gray-600" />
                <span className="text-gray-600">{networkType}</span>
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

export default EnhancedMobileExperience;

