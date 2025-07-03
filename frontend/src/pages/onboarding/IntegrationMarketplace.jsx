import React, { useState, useEffect } from 'react';
import { 
  Store, 
  Search, 
  Filter, 
  Star, 
  Download, 
  Settings, 
  Plus, 
  Check, 
  X, 
  ExternalLink, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Clock, 
  Globe, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  CreditCard, 
  BarChart3, 
  FileText, 
  Camera, 
  Video, 
  Music, 
  Headphones, 
  Mic, 
  Speaker, 
  Radio, 
  Tv, 
  Monitor, 
  Laptop, 
  Tablet, 
  Watch, 
  Gamepad2, 
  Joystick, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  SdCard, 
  Usb, 
  Wifi, 
  Bluetooth, 
  Power, 
  Battery, 
  Plug, 
  Lightbulb, 
  Sun, 
  Moon, 
  Star as StarIcon, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  Flag, 
  Tag, 
  Hash, 
  AtSign, 
  DollarSign, 
  Percent, 
  Euro, 
  PoundSterling, 
  Yen, 
  Bitcoin, 
  Banknote, 
  Wallet, 
  Home, 
  Building, 
  Warehouse, 
  Factory, 
  Hospital, 
  School, 
  University, 
  GraduationCap, 
  BookOpen, 
  Book, 
  Newspaper, 
  File, 
  Folder, 
  FolderOpen, 
  Archive, 
  Paperclip, 
  Scissors, 
  Clipboard, 
  Edit, 
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
  AlignJustify, 
  List, 
  ListOrdered, 
  Indent, 
  Outdent, 
  Quote, 
  Code2, 
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
  CapsLock, 
  Escape, 
  Function, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
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
  Move, 
  MousePointer, 
  MousePointer2, 
  Hand, 
  Grab, 
  GrabHand, 
  Pointer, 
  Click, 
  Touch, 
  Fingerprint, 
  Glasses, 
  SunMedium, 
  CloudSun, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Umbrella, 
  Thermometer, 
  Wind, 
  Tornado, 
  Waves, 
  Droplets, 
  Snowflake, 
  Sunrise, 
  Sunset, 
  Eclipse, 
  Cloudy, 
  PartlyCloudy, 
  Overcast, 
  Drizzle, 
  Rain, 
  Snow, 
  Sleet, 
  Hail, 
  Thunder, 
  Lightning, 
  Fog, 
  Mist, 
  Haze, 
  Dust, 
  Smoke, 
  Fire, 
  Flame, 
  Candle, 
  Flashlight, 
  Lamp, 
  Lantern, 
  Torch, 
  Spotlight, 
  Laser, 
  Beam, 
  Rainbow, 
  Prism, 
  Crystal, 
  Diamond, 
  Gem, 
  Ring, 
  Crown, 
  Trophy, 
  Medal, 
  Award, 
  Ribbon, 
  Rosette, 
  Badge, 
  Certificate, 
  Diploma, 
  Scroll, 
  Document, 
  Contract, 
  Invoice, 
  Receipt, 
  Ticket, 
  Coupon, 
  Voucher, 
  Gift, 
  Present, 
  Balloon, 
  Party, 
  Cake, 
  Candles, 
  Confetti, 
  Fireworks, 
  Sparkles, 
  Sparkler, 
  Wand, 
  Magic, 
  Potion, 
  Elixir, 
  Bottle, 
  Flask, 
  TestTube, 
  Beaker, 
  Microscope, 
  Telescope, 
  Binoculars, 
  Magnifier, 
  MagnifyingGlass, 
  Lens, 
  Focus, 
  Zoom, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  Maximize2, 
  Minimize2, 
  Expand, 
  Shrink, 
  Fullscreen, 
  ExitFullscreen, 
  PictureInPicture, 
  PictureInPicture2, 
  Sidebar, 
  PanelLeft, 
  PanelRight, 
  PanelTop, 
  PanelBottom, 
  Layout, 
  LayoutGrid, 
  LayoutList, 
  LayoutTemplate, 
  Columns, 
  Rows, 
  Grid, 
  Table, 
  TableProperties, 
  Spreadsheet, 
  Calculator, 
  Abacus, 
  Ruler, 
  Triangle, 
  Square, 
  Circle, 
  Pentagon, 
  Hexagon, 
  Octagon, 
  Spade, 
  Club, 
  Dice1, 
  Dice2, 
  Dice3, 
  Dice4, 
  Dice5, 
  Dice6, 
  Puzzle, 
  PuzzlePiece, 
  Jigsaw, 
  Blocks, 
  Brick, 
  Wall, 
  Fence, 
  Gate, 
  Door, 
  DoorOpen, 
  DoorClosed, 
  Window, 
  Blinds, 
  Curtains, 
  Bed, 
  Pillow, 
  Blanket, 
  Sofa, 
  Chair, 
  Desk, 
  Alarm, 
  Timer, 
  Stopwatch, 
  Hourglass, 
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
  Schedule, 
  Agenda, 
  Appointment, 
  Meeting, 
  Conference, 
  Presentation, 
  Projector, 
  Screen, 
  Whiteboard, 
  Blackboard, 
  Chalkboard, 
  Easel, 
  Canvas, 
  Palette, 
  Brush, 
  Paintbrush, 
  Pencil, 
  Pen, 
  Marker, 
  Crayon, 
  Eraser, 
  Sharpener, 
  Stapler, 
  PaperClip, 
  Pushpin, 
  Thumbtack, 
  Pin, 
  Needle, 
  Thread, 
  Knife, 
  Fork, 
  Spoon, 
  Plate, 
  Bowl, 
  Cup, 
  Mug, 
  Glass, 
  Can, 
  Jar, 
  Box, 
  Container, 
  Basket, 
  Bag, 
  Suitcase, 
  Backpack, 
  Briefcase, 
  Handbag, 
  Purse, 
  Pocket, 
  Zipper, 
  Button, 
  Buckle, 
  Belt, 
  Tie, 
  Bowtie, 
  Scarf, 
  Hat, 
  Cap, 
  Helmet, 
  Mask, 
  Sunglasses, 
  Monocle, 
  Eyepatch, 
  Bandage, 
  Plaster, 
  Pill, 
  Capsule, 
  Syringe, 
  Stethoscope, 
  Bandaid, 
  FirstAid, 
  Medical, 
  Health, 
  Fitness, 
  Dumbbell, 
  Barbell, 
  Weight, 
  Scale, 
  Treadmill, 
  Bike, 
  Swim, 
  Run, 
  Walk, 
  Yoga, 
  Meditation, 
  Zen, 
  Peace, 
  Love, 
  Hug, 
  Kiss, 
  Smile, 
  Laugh, 
  Cry, 
  Sad, 
  Angry, 
  Mad, 
  Surprised, 
  Shocked, 
  Confused, 
  Worried, 
  Scared, 
  Happy, 
  Joy, 
  Excited, 
  Calm, 
  Relaxed, 
  Sleepy, 
  Tired, 
  Energetic, 
  Strong, 
  Weak, 
  Sick, 
  Healthy, 
  Hot, 
  Cold, 
  Warm, 
  Cool, 
  Dry, 
  Wet, 
  Clean, 
  Dirty, 
  Fresh, 
  Stale, 
  New, 
  Old, 
  Young, 
  Adult, 
  Child, 
  Baby, 
  Family, 
  Parents, 
  Mother, 
  Father, 
  Sister, 
  Brother, 
  Grandmother, 
  Grandfather, 
  Aunt, 
  Uncle, 
  Cousin, 
  Friend, 
  Stranger, 
  Neighbor, 
  Colleague, 
  Boss, 
  Employee, 
  Student, 
  Teacher, 
  Doctor, 
  Nurse, 
  Lawyer, 
  Judge, 
  Police, 
  Firefighter, 
  Soldier, 
  Pilot, 
  Driver, 
  Chef, 
  Waiter, 
  Cashier, 
  Salesperson, 
  Manager, 
  Director, 
  CEO, 
  President, 
  King, 
  Queen, 
  Prince, 
  Princess, 
  Knight, 
  Wizard, 
  Witch, 
  Angel, 
  Devil, 
  Ghost, 
  Monster, 
  Alien, 
  Robot, 
  Cyborg, 
  Android, 
  AI, 
  Computer, 
  Desktop, 
  Mainframe, 
  Supercomputer, 
  Quantum, 
  Processor, 
  Chip, 
  Circuit, 
  Board, 
  Wire, 
  Cable, 
  Connector, 
  Port, 
  Socket, 
  Adapter, 
  Converter, 
  Transformer, 
  Generator, 
  Charger, 
  Energy, 
  Electricity, 
  Voltage, 
  Current, 
  Resistance, 
  Capacitor, 
  Inductor, 
  Resistor, 
  Transistor, 
  Diode, 
  LED, 
  Fiber, 
  Optic, 
  Light, 
  Photon, 
  Electron, 
  Proton, 
  Neutron, 
  Atom, 
  Molecule, 
  Element, 
  Compound, 
  Chemical, 
  Formula, 
  Equation, 
  Math, 
  Number, 
  Digit, 
  Zero, 
  One, 
  Two, 
  Three, 
  Four, 
  Five, 
  Six, 
  Seven, 
  Eight, 
  Nine, 
  Ten, 
  Hundred, 
  Thousand, 
  Million, 
  Billion, 
  Trillion, 
  Infinity, 
  Pi, 
  E, 
  Phi, 
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
  Sigma, 
  Tau, 
  Upsilon, 
  Chi, 
  Psi, 
  Omega, 
  A, 
  B, 
  C, 
  D, 
  F, 
  G, 
  H, 
  I, 
  J, 
  K, 
  L, 
  M, 
  N, 
  O, 
  P, 
  Q, 
  R, 
  S, 
  T, 
  U, 
  V, 
  W, 
  Y, 
  Z,
  MoreVertical,
  Info,
  HelpCircle,
  Eye,
  Package,
  Truck,
  ShoppingCart,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Pause,
  Play
} from 'lucide-react';

const IntegrationMarketplace = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [integrations, setIntegrations] = useState([]);
  const [installedIntegrations, setInstalledIntegrations] = useState([]);
  const [categories, setCategories] = useState([]);

  // Integration data
  useEffect(() => {
    const sampleIntegrations = [
      {
        id: 1,
        name: 'Slack Integration',
        developer: 'Flourish Team',
        category: 'communication',
        description: 'Connect your relationship activities with Slack for team notifications and updates.',
        longDescription: 'The Slack Integration allows you to seamlessly connect your Flourish relationship activities with your Slack workspace. Get real-time notifications about relationship milestones, assessment completions, and coaching session reminders directly in your Slack channels.',
        icon: MessageSquare,
        rating: 4.8,
        reviews: 1247,
        downloads: 15420,
        price: 'Free',
        isPremium: false,
        isInstalled: true,
        version: '2.1.0',
        lastUpdated: '2025-01-05',
        screenshots: ['/screenshots/slack-1.png', '/screenshots/slack-2.png'],
        features: [
          'Real-time relationship milestone notifications',
          'Assessment completion alerts',
          'Coaching session reminders',
          'Custom channel configuration',
          'Rich message formatting',
          'Secure OAuth authentication'
        ],
        permissions: ['Send messages', 'Read channel information', 'Access user profile'],
        supportedPlatforms: ['Web', 'Mobile', 'Desktop'],
        tags: ['communication', 'notifications', 'team', 'productivity']
      },
      {
        id: 2,
        name: 'Google Calendar Sync',
        developer: 'Flourish Team',
        category: 'productivity',
        description: 'Automatically sync your relationship goals and coaching sessions with Google Calendar.',
        longDescription: 'Keep your relationship journey organized with automatic Google Calendar synchronization. This integration creates calendar events for coaching sessions, date nights, and relationship milestones, ensuring you never miss important moments.',
        icon: Calendar,
        rating: 4.9,
        reviews: 2156,
        downloads: 23890,
        price: 'Free',
        isPremium: false,
        isInstalled: true,
        version: '3.0.2',
        lastUpdated: '2025-01-03',
        screenshots: ['/screenshots/gcal-1.png', '/screenshots/gcal-2.png'],
        features: [
          'Automatic event creation',
          'Two-way calendar sync',
          'Smart scheduling suggestions',
          'Reminder notifications',
          'Multiple calendar support',
          'Timezone handling'
        ],
        permissions: ['Read calendar events', 'Create calendar events', 'Modify calendar events'],
        supportedPlatforms: ['Web', 'Mobile'],
        tags: ['calendar', 'scheduling', 'productivity', 'automation']
      },
      {
        id: 3,
        name: 'Spotify Mood Tracker',
        developer: 'MoodTech Solutions',
        category: 'entertainment',
        description: 'Track relationship moods through music preferences and create personalized playlists.',
        longDescription: 'Discover the connection between music and relationships with our Spotify Mood Tracker. Analyze listening patterns to understand emotional states and automatically generate playlists that enhance your relationship experiences.',
        icon: Music,
        rating: 4.6,
        reviews: 892,
        downloads: 8750,
        price: '$4.99/month',
        isPremium: true,
        isInstalled: false,
        version: '1.5.1',
        lastUpdated: '2024-12-28',
        screenshots: ['/screenshots/spotify-1.png', '/screenshots/spotify-2.png'],
        features: [
          'Mood-based music analysis',
          'Automatic playlist generation',
          'Relationship soundtrack creation',
          'Listening pattern insights',
          'Shared playlist collaboration',
          'Emotional trend tracking'
        ],
        permissions: ['Access Spotify library', 'Create playlists', 'Read listening history'],
        supportedPlatforms: ['Web', 'Mobile'],
        tags: ['music', 'mood', 'entertainment', 'analytics']
      },
      {
        id: 4,
        name: 'Zoom Video Sessions',
        developer: 'VideoConnect Inc.',
        category: 'communication',
        description: 'Seamlessly integrate Zoom for virtual coaching sessions and relationship meetings.',
        longDescription: 'Transform your virtual relationship coaching experience with seamless Zoom integration. Automatically schedule and join coaching sessions, record important conversations, and maintain secure video communications.',
        icon: Video,
        rating: 4.7,
        reviews: 1543,
        downloads: 12340,
        price: 'Free',
        isPremium: false,
        isInstalled: false,
        version: '2.3.0',
        lastUpdated: '2025-01-01',
        screenshots: ['/screenshots/zoom-1.png', '/screenshots/zoom-2.png'],
        features: [
          'One-click session joining',
          'Automatic meeting scheduling',
          'Session recording capabilities',
          'Secure end-to-end encryption',
          'Screen sharing support',
          'Waiting room management'
        ],
        permissions: ['Create meetings', 'Join meetings', 'Access recording'],
        supportedPlatforms: ['Web', 'Mobile', 'Desktop'],
        tags: ['video', 'coaching', 'communication', 'virtual']
      },
      {
        id: 5,
        name: 'Fitbit Wellness Sync',
        developer: 'HealthTech Partners',
        category: 'health',
        description: 'Connect fitness and wellness data to track relationship health correlations.',
        longDescription: 'Explore the connection between physical wellness and relationship health. This integration syncs Fitbit data to provide insights into how exercise, sleep, and stress levels impact your relationship dynamics.',
        icon: Heart,
        rating: 4.4,
        reviews: 678,
        downloads: 5420,
        price: '$2.99/month',
        isPremium: true,
        isInstalled: false,
        version: '1.2.3',
        lastUpdated: '2024-12-20',
        screenshots: ['/screenshots/fitbit-1.png', '/screenshots/fitbit-2.png'],
        features: [
          'Activity data synchronization',
          'Sleep pattern analysis',
          'Stress level monitoring',
          'Wellness goal tracking',
          'Health trend insights',
          'Partner comparison metrics'
        ],
        permissions: ['Read activity data', 'Access sleep data', 'View heart rate'],
        supportedPlatforms: ['Web', 'Mobile'],
        tags: ['health', 'fitness', 'wellness', 'analytics']
      },
      {
        id: 6,
        name: 'Stripe Payment Gateway',
        developer: 'Flourish Team',
        category: 'finance',
        description: 'Secure payment processing for premium features and coaching services.',
        longDescription: 'Enable secure and seamless payment processing for all premium Flourish features. Support multiple payment methods, subscription management, and automated billing for coaching services.',
        icon: CreditCard,
        rating: 4.9,
        reviews: 3421,
        downloads: 45670,
        price: 'Free',
        isPremium: false,
        isInstalled: true,
        version: '4.2.1',
        lastUpdated: '2025-01-06',
        screenshots: ['/screenshots/stripe-1.png', '/screenshots/stripe-2.png'],
        features: [
          'Secure payment processing',
          'Multiple payment methods',
          'Subscription management',
          'Automated billing',
          'Fraud protection',
          'International support'
        ],
        permissions: ['Process payments', 'Access billing information', 'Manage subscriptions'],
        supportedPlatforms: ['Web', 'Mobile'],
        tags: ['payments', 'billing', 'finance', 'security']
      },
      {
        id: 7,
        name: 'WhatsApp Notifications',
        developer: 'MessageFlow Ltd.',
        category: 'communication',
        description: 'Receive important relationship updates and reminders via WhatsApp.',
        longDescription: 'Stay connected with your relationship journey through WhatsApp notifications. Get timely reminders for date nights, coaching sessions, and relationship milestones directly on your phone.',
        icon: MessageSquare,
        rating: 4.5,
        reviews: 987,
        downloads: 11230,
        price: '$1.99/month',
        isPremium: true,
        isInstalled: false,
        version: '1.8.0',
        lastUpdated: '2024-12-15',
        screenshots: ['/screenshots/whatsapp-1.png', '/screenshots/whatsapp-2.png'],
        features: [
          'Instant message notifications',
          'Customizable reminder types',
          'Rich media support',
          'Group messaging',
          'Delivery confirmations',
          'Privacy controls'
        ],
        permissions: ['Send messages', 'Access contacts', 'Read message status'],
        supportedPlatforms: ['Mobile'],
        tags: ['messaging', 'notifications', 'mobile', 'reminders']
      },
      {
        id: 8,
        name: 'Notion Relationship Journal',
        developer: 'ProductivityPro',
        category: 'productivity',
        description: 'Create and maintain detailed relationship journals and progress tracking in Notion.',
        longDescription: 'Transform your relationship documentation with seamless Notion integration. Automatically create journal entries, track progress, and maintain detailed relationship databases with rich formatting and collaboration features.',
        icon: BookOpen,
        rating: 4.6,
        reviews: 756,
        downloads: 6890,
        price: '$3.99/month',
        isPremium: true,
        isInstalled: false,
        version: '2.0.5',
        lastUpdated: '2024-12-10',
        screenshots: ['/screenshots/notion-1.png', '/screenshots/notion-2.png'],
        features: [
          'Automatic journal creation',
          'Progress tracking templates',
          'Rich text formatting',
          'Database integration',
          'Collaboration features',
          'Custom property mapping'
        ],
        permissions: ['Create pages', 'Edit content', 'Access databases'],
        supportedPlatforms: ['Web', 'Mobile', 'Desktop'],
        tags: ['documentation', 'journaling', 'productivity', 'collaboration']
      }
    ];

    setIntegrations(sampleIntegrations);
    setInstalledIntegrations(sampleIntegrations.filter(i => i.isInstalled));
  }, []);

  // Categories
  useEffect(() => {
    const sampleCategories = [
      { id: 'all', name: 'All Categories', icon: Grid, count: 8 },
      { id: 'communication', name: 'Communication', icon: MessageSquare, count: 3 },
      { id: 'productivity', name: 'Productivity', icon: BarChart3, count: 2 },
      { id: 'entertainment', name: 'Entertainment', icon: Music, count: 1 },
      { id: 'health', name: 'Health & Wellness', icon: Heart, count: 1 },
      { id: 'finance', name: 'Finance', icon: CreditCard, count: 1 }
    ];
    setCategories(sampleCategories);
  }, []);

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         integration.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedIntegrations = [...filteredIntegrations].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  const handleInstall = (integrationId) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, isInstalled: true }
        : integration
    ));
    setInstalledIntegrations(prev => [...prev, integrations.find(i => i.id === integrationId)]);
  };

  const handleUninstall = (integrationId) => {
    setIntegrations(prev => prev.map(integration => 
      integration.id === integrationId 
        ? { ...integration, isInstalled: false }
        : integration
    ));
    setInstalledIntegrations(prev => prev.filter(i => i.id !== integrationId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Integration Marketplace</h1>
              <p className="mt-2 text-gray-400">Discover and install integrations to enhance your Flourish experience</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <RefreshCw className="h-5 w-5" />
                <span>Refresh</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-lg font-semibold hover:from-violet-700 hover:to-purple-700 transition-all">
                <Plus className="h-5 w-5" />
                <span>Submit Integration</span>
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
              { id: 'browse', label: 'Browse', icon: Store },
              { id: 'installed', label: 'Installed', icon: Download },
              { id: 'featured', label: 'Featured', icon: Star },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-violet-500 text-violet-400'
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
        {/* Browse Tab */}
        {activeTab === 'browse' && (
          <div className="space-y-8">
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-80 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Categories Sidebar */}
              <div className="lg:w-64 flex-shrink-0">
                <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-violet-900 text-violet-300'
                            : 'text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-5 w-5" />
                          <span>{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Integrations Grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {sortedIntegrations.map((integration) => (
                    <div key={integration.id} className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-violet-900 rounded-lg">
                            <integration.icon className="h-6 w-6 text-violet-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{integration.name}</h4>
                            <p className="text-sm text-gray-400">by {integration.developer}</p>
                          </div>
                        </div>
                        {integration.isPremium && (
                          <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs font-medium">
                            Premium
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2">{integration.description}</p>
                      
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center space-x-1">
                          {renderStars(integration.rating)}
                          <span className="text-sm text-gray-400 ml-1">{integration.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{formatNumber(integration.downloads)} downloads</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-violet-400">{integration.price}</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setSelectedIntegration(integration)}
                            className="p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          {integration.isInstalled ? (
                            <button
                              onClick={() => handleUninstall(integration.id)}
                              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                              Uninstall
                            </button>
                          ) : (
                            <button
                              onClick={() => handleInstall(integration.id)}
                              className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                            >
                              Install
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Installed Tab */}
        {activeTab === 'installed' && (
          <div className="space-y-8">
            {/* Installed Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Installed Integrations</p>
                    <p className="text-3xl font-bold text-white">{installedIntegrations.length}</p>
                  </div>
                  <div className="p-3 bg-violet-900 rounded-lg">
                    <Download className="h-6 w-6 text-violet-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Integrations</p>
                    <p className="text-3xl font-bold text-white">{installedIntegrations.length}</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Updates Available</p>
                    <p className="text-3xl font-bold text-white">2</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <RefreshCw className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Installed Integrations List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Your Installed Integrations</h3>
              {installedIntegrations.length > 0 ? (
                <div className="space-y-4">
                  {installedIntegrations.map((integration) => (
                    <div key={integration.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-violet-900 rounded-lg">
                          <integration.icon className="h-6 w-6 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{integration.name}</h4>
                          <p className="text-sm text-gray-400">Version {integration.version} • Last updated {integration.lastUpdated}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-green-900 text-green-300 rounded text-xs font-medium">
                          Active
                        </span>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Settings className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleUninstall(integration.id)}
                          className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Package className="h-16 w-16 mx-auto text-gray-500 mb-4" />
                  <h4 className="text-xl font-semibold text-white mb-2">No Integrations Installed</h4>
                  <p className="text-gray-400 mb-6">Browse the marketplace to find integrations that enhance your Flourish experience.</p>
                  <button
                    onClick={() => setActiveTab('browse')}
                    className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    Browse Marketplace
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Featured Tab */}
        {activeTab === 'featured' && (
          <div className="space-y-8">
            {/* Featured Hero */}
            <div className="bg-gradient-to-r from-violet-800 to-purple-800 rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Integration of the Month</h2>
                  <h3 className="text-xl font-semibold text-violet-200 mb-4">Google Calendar Sync</h3>
                  <p className="text-violet-100 mb-6 max-w-2xl">
                    Keep your relationship journey organized with automatic Google Calendar synchronization. 
                    This integration creates calendar events for coaching sessions, date nights, and relationship milestones.
                  </p>
                  <button className="px-6 py-3 bg-white text-violet-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="hidden lg:block">
                  <Calendar className="h-32 w-32 text-violet-200" />
                </div>
              </div>
            </div>

            {/* Featured Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Trending Now</h3>
                </div>
                <div className="space-y-3">
                  {integrations.slice(0, 3).map((integration) => (
                    <div key={integration.id} className="flex items-center space-x-3">
                      <integration.icon className="h-5 w-5 text-violet-400" />
                      <span className="text-sm text-gray-300">{integration.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-8 w-8 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Highest Rated</h3>
                </div>
                <div className="space-y-3">
                  {integrations
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 3)
                    .map((integration) => (
                      <div key={integration.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <integration.icon className="h-5 w-5 text-violet-400" />
                          <span className="text-sm text-gray-300">{integration.name}</span>
                        </div>
                        <span className="text-sm text-yellow-400">{integration.rating}</span>
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-8 w-8 text-blue-400" />
                  <h3 className="text-lg font-semibold text-white">Recently Added</h3>
                </div>
                <div className="space-y-3">
                  {integrations
                    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
                    .slice(0, 3)
                    .map((integration) => (
                      <div key={integration.id} className="flex items-center space-x-3">
                        <integration.icon className="h-5 w-5 text-violet-400" />
                        <span className="text-sm text-gray-300">{integration.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Integration Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">Auto-Update Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Automatically update integrations</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Notify me before updating</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Include beta versions</span>
                  </label>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">Privacy Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Share usage analytics with developers</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Allow integrations to access relationship data</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Require permission for data access</span>
                  </label>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">Marketplace Preferences</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Default Sort Order</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg">
                      <option>Most Popular</option>
                      <option>Highest Rated</option>
                      <option>Newest</option>
                      <option>Name A-Z</option>
                    </select>
                  </div>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Show premium integrations</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-600" />
                    <span className="ml-2 text-sm text-gray-300">Hide installed integrations from browse</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Integration Details Modal */}
      {selectedIntegration && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-violet-900 rounded-lg">
                    <selectedIntegration.icon className="h-8 w-8 text-violet-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedIntegration.name}</h2>
                    <p className="text-gray-400">by {selectedIntegration.developer}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedIntegration(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Description</h3>
                    <p className="text-gray-300">{selectedIntegration.longDescription}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Features</h3>
                    <ul className="space-y-2">
                      {selectedIntegration.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Permissions</h3>
                    <div className="space-y-2">
                      {selectedIntegration.permissions.map((permission, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-yellow-400" />
                          <span className="text-gray-300">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-700 rounded-lg p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-violet-400">{selectedIntegration.price}</span>
                      {selectedIntegration.isPremium && (
                        <span className="px-2 py-1 bg-yellow-900 text-yellow-300 rounded text-xs font-medium">
                          Premium
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {renderStars(selectedIntegration.rating)}
                        </div>
                        <span className="text-sm text-gray-400">
                          {selectedIntegration.rating} ({formatNumber(selectedIntegration.reviews)} reviews)
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {formatNumber(selectedIntegration.downloads)} downloads
                      </div>
                      <div className="text-sm text-gray-400">
                        Version {selectedIntegration.version}
                      </div>
                      <div className="text-sm text-gray-400">
                        Updated {selectedIntegration.lastUpdated}
                      </div>
                    </div>
                    
                    {selectedIntegration.isInstalled ? (
                      <button
                        onClick={() => {
                          handleUninstall(selectedIntegration.id);
                          setSelectedIntegration(null);
                        }}
                        className="w-full px-4 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
                      >
                        Uninstall
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleInstall(selectedIntegration.id);
                          setSelectedIntegration(null);
                        }}
                        className="w-full px-4 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-colors"
                      >
                        Install Integration
                      </button>
                    )}
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-6">
                    <h4 className="font-medium text-white mb-3">Supported Platforms</h4>
                    <div className="space-y-2">
                      {selectedIntegration.supportedPlatforms.map((platform, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-4 w-4 text-green-400" />
                          <span className="text-gray-300">{platform}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-medium text-white mb-3 mt-6">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedIntegration.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntegrationMarketplace;

