import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Plus, 
  Edit, 
  Trash2, 
  Play, 
  Pause, 
  Stop, 
  RefreshCw, 
  Settings, 
  Eye, 
  EyeOff, 
  Copy, 
  Download, 
  Upload, 
  Search, 
  Filter, 
  Check, 
  X, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Calendar, 
  Activity, 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Lock, 
  Key, 
  Code, 
  Code2, 
  FileText, 
  File, 
  Folder, 
  Link, 
  ExternalLink, 
  Send, 
  Mail, 
  MessageSquare, 
  Bell, 
  BellOff, 
  Volume2, 
  VolumeX, 
  Target, 
  Flag, 
  Tag, 
  Hash, 
  User, 
  Users, 
  Heart, 
  Star, 
  Bookmark, 
  Share2, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
  Info, 
  HelpCircle, 
  Lightbulb, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Wifi, 
  Router, 
  Network, 
  Bluetooth, 
  Usb, 
  Hdmi, 
  Ethernet, 
  QrCode, 
  Barcode, 
  ScanLine, 
  Fingerprint, 
  FaceId, 
  Retina, 
  Iris, 
  Dna, 
  Atom, 
  Molecule, 
  Microscope, 
  Telescope, 
  Satellite, 
  Radar, 
  Sonar, 
  Gps, 
  Location, 
  Crosshairs, 
  Bullseye, 
  Dartboard, 
  Archery, 
  Bow, 
  Arrow, 
  Sword, 
  Armor, 
  Crown, 
  Trophy, 
  Medal, 
  Award, 
  Ribbon, 
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
  ExitFullscreen, 
  Layout, 
  Grid, 
  Table, 
  Spreadsheet, 
  Calculator, 
  Ruler, 
  Triangle, 
  Square, 
  Circle, 
  Pentagon, 
  Hexagon, 
  Octagon, 
  Dice1, 
  Dice2, 
  Dice3, 
  Dice4, 
  Dice5, 
  Dice6, 
  Puzzle, 
  PuzzlePiece, 
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
  Archive, 
  Paperclip, 
  Scissors, 
  Clipboard, 
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
  List, 
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
  Glasses, 
  Sun, 
  Moon, 
  CloudSun, 
  CloudRain, 
  CloudSnow, 
  Umbrella, 
  Thermometer, 
  Wind, 
  Waves, 
  Droplets, 
  Snowflake, 
  Fire, 
  Flame, 
  Candle, 
  Flashlight, 
  Lamp, 
  Torch, 
  Rainbow, 
  Prism, 
  Crystal, 
  Diamond, 
  Gem, 
  Ring, 
  Scepter, 
  Orb, 
  Throne, 
  Castle, 
  Tower, 
  Bridge, 
  Lighthouse, 
  Windmill, 
  Dam, 
  Well, 
  Fountain, 
  Lake, 
  River, 
  Ocean, 
  Beach, 
  Island, 
  Mountain, 
  Hill, 
  Valley, 
  Desert, 
  Forest, 
  Tree, 
  Palm, 
  Cactus, 
  Flower, 
  Rose, 
  Leaf, 
  Branch, 
  Seed, 
  Sprout, 
  Bush, 
  Grass, 
  Vine, 
  Bamboo, 
  Wheat, 
  Corn, 
  Rice, 
  Apple, 
  Orange, 
  Banana, 
  Grape, 
  Strawberry, 
  Cherry, 
  Pineapple, 
  Coconut, 
  Avocado, 
  Carrot, 
  Potato, 
  Tomato, 
  Pepper, 
  Onion, 
  Garlic, 
  Herbs, 
  Spices, 
  Salt, 
  Sugar, 
  Honey, 
  Milk, 
  Cheese, 
  Bread, 
  Meat, 
  Fish, 
  Egg, 
  Rice, 
  Pasta, 
  Pizza, 
  Burger, 
  Sandwich, 
  Salad, 
  Soup, 
  Coffee, 
  Tea, 
  Water, 
  Juice, 
  Wine, 
  Beer, 
  Cocktail, 
  Soda, 
  Ice, 
  Cake, 
  Cookie, 
  Candy, 
  Chocolate, 
  Donut, 
  Pie, 
  Muffin, 
  Cupcake, 
  Pancake, 
  Waffle, 
  Toast, 
  Cereal, 
  Yogurt, 
  Smoothie, 
  Shake, 
  Lemonade, 
  Iced, 
  Hot, 
  Cold, 
  Warm, 
  Cool, 
  Fresh, 
  Frozen, 
  Cooked, 
  Raw, 
  Spicy, 
  Sweet, 
  Sour, 
  Bitter, 
  Salty, 
  Savory, 
  Crispy, 
  Soft, 
  Hard, 
  Smooth, 
  Rough, 
  Thick, 
  Thin, 
  Heavy, 
  Light, 
  Big, 
  Small, 
  Large, 
  Tiny, 
  Huge, 
  Mini, 
  Giant, 
  Long, 
  Short, 
  Tall, 
  Wide, 
  Narrow, 
  Deep, 
  Shallow, 
  High, 
  Low, 
  Fast, 
  Slow, 
  Quick, 
  Rapid, 
  Instant, 
  Delayed, 
  Early, 
  Late, 
  On, 
  Off, 
  Open, 
  Closed, 
  Full, 
  Empty, 
  Complete, 
  Incomplete, 
  Finished, 
  Unfinished, 
  Started, 
  Stopped, 
  Running, 
  Paused, 
  Active, 
  Inactive, 
  Enabled, 
  Disabled, 
  Available, 
  Unavailable, 
  Online, 
  Offline, 
  Connected, 
  Disconnected, 
  Synced, 
  Unsynced, 
  Saved, 
  Unsaved, 
  Loaded, 
  Loading, 
  Pending, 
  Processing, 
  Complete, 
  Failed, 
  Success, 
  Error, 
  Warning, 
  Info, 
  Debug, 
  Trace, 
  Log, 
  Event, 
  Action, 
  Trigger, 
  Response, 
  Request, 
  Data, 
  Message, 
  Signal, 
  Notification, 
  Alert, 
  Reminder, 
  Update, 
  Change, 
  Modification, 
  Addition, 
  Deletion, 
  Creation, 
  Destruction, 
  Build, 
  Deploy, 
  Release, 
  Version, 
  Patch, 
  Fix, 
  Bug, 
  Feature, 
  Enhancement, 
  Improvement, 
  Optimization, 
  Performance, 
  Speed, 
  Efficiency, 
  Quality, 
  Reliability, 
  Stability, 
  Security, 
  Privacy, 
  Safety, 
  Protection, 
  Defense, 
  Attack, 
  Threat, 
  Risk, 
  Vulnerability, 
  Exploit, 
  Breach, 
  Leak, 
  Exposure, 
  Disclosure, 
  Access, 
  Permission, 
  Authorization, 
  Authentication, 
  Verification, 
  Validation, 
  Confirmation, 
  Approval, 
  Rejection, 
  Acceptance, 
  Denial, 
  Grant, 
  Revoke, 
  Allow, 
  Block, 
  Ban, 
  Restrict, 
  Limit, 
  Control, 
  Manage, 
  Monitor, 
  Track, 
  Trace, 
  Follow, 
  Watch, 
  Observe, 
  Inspect, 
  Examine, 
  Analyze, 
  Study, 
  Research, 
  Investigate, 
  Explore, 
  Discover, 
  Find, 
  Search, 
  Locate, 
  Identify, 
  Recognize, 
  Detect, 
  Sense, 
  Feel, 
  Touch, 
  Hear, 
  Listen, 
  See, 
  Look, 
  View, 
  Watch, 
  Read, 
  Write, 
  Type, 
  Input, 
  Output, 
  Import, 
  Export, 
  Transfer, 
  Move, 
  Copy, 
  Paste, 
  Cut, 
  Delete, 
  Remove, 
  Add, 
  Insert, 
  Append, 
  Prepend, 
  Replace, 
  Substitute, 
  Swap, 
  Exchange, 
  Trade, 
  Convert, 
  Transform, 
  Translate, 
  Encode, 
  Decode, 
  Encrypt, 
  Decrypt, 
  Compress, 
  Decompress, 
  Archive, 
  Extract, 
  Backup, 
  Restore, 
  Recover, 
  Repair, 
  Fix, 
  Solve, 
  Resolve, 
  Address, 
  Handle, 
  Process, 
  Execute, 
  Run, 
  Start, 
  Stop, 
  Pause, 
  Resume, 
  Continue, 
  Finish, 
  End, 
  Close, 
  Exit, 
  Quit, 
  Cancel, 
  Abort, 
  Retry, 
  Repeat, 
  Redo, 
  Undo, 
  Revert, 
  Reset, 
  Clear, 
  Clean, 
  Purge, 
  Flush, 
  Refresh, 
  Reload, 
  Update, 
  Upgrade, 
  Downgrade, 
  Install, 
  Uninstall, 
  Setup, 
  Configure, 
  Customize, 
  Personalize, 
  Adjust, 
  Tune, 
  Calibrate, 
  Balance, 
  Align, 
  Center, 
  Focus, 
  Zoom, 
  Scale, 
  Resize, 
  Rotate, 
  Flip, 
  Mirror, 
  Invert, 
  Reverse, 
  Forward, 
  Backward, 
  Left, 
  Right, 
  Up, 
  Down, 
  North, 
  South, 
  East, 
  West, 
  Top, 
  Bottom, 
  Front, 
  Back, 
  Inside, 
  Outside, 
  Above, 
  Below, 
  Over, 
  Under, 
  Before, 
  After, 
  First, 
  Last, 
  Next, 
  Previous, 
  Current, 
  Past, 
  Future, 
  Present, 
  Now, 
  Then, 
  Today, 
  Yesterday, 
  Tomorrow, 
  Week, 
  Month, 
  Year, 
  Decade, 
  Century, 
  Millennium, 
  Second, 
  Minute, 
  Hour, 
  Day, 
  Morning, 
  Afternoon, 
  Evening, 
  Night, 
  Dawn, 
  Dusk, 
  Sunrise, 
  Sunset, 
  Noon, 
  Midnight, 
  Spring, 
  Summer, 
  Autumn, 
  Winter, 
  Season, 
  Weather, 
  Climate, 
  Temperature, 
  Humidity, 
  Pressure, 
  Wind, 
  Rain, 
  Snow, 
  Ice, 
  Hail, 
  Storm, 
  Thunder, 
  Lightning, 
  Fog, 
  Mist, 
  Cloud, 
  Sky, 
  Atmosphere, 
  Air, 
  Oxygen, 
  Carbon, 
  Nitrogen, 
  Hydrogen, 
  Helium, 
  Neon, 
  Argon, 
  Krypton, 
  Xenon, 
  Radon, 
  Francium, 
  Radium, 
  Actinium, 
  Thorium, 
  Protactinium, 
  Uranium, 
  Neptunium, 
  Plutonium, 
  Americium, 
  Curium, 
  Berkelium, 
  Californium, 
  Einsteinium, 
  Fermium, 
  Mendelevium, 
  Nobelium, 
  Lawrencium, 
  Rutherfordium, 
  Dubnium, 
  Seaborgium, 
  Bohrium, 
  Hassium, 
  Meitnerium, 
  Darmstadtium, 
  Roentgenium, 
  Copernicium, 
  Nihonium, 
  Flerovium, 
  Moscovium, 
  Livermorium, 
  Tennessine, 
  Oganesson
} from 'lucide-react';

const WebhookEventStudio = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [webhooks, setWebhooks] = useState([]);
  const [eventLogs, setEventLogs] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [testingWebhook, setTestingWebhook] = useState(null);

  // Sample webhook events
  const eventTypes = [
    {
      id: 'user.created',
      name: 'User Created',
      description: 'Triggered when a new user account is created',
      category: 'User Events',
      frequency: 'High',
      payload: {
        userId: 'string',
        email: 'string',
        firstName: 'string',
        lastName: 'string',
        createdAt: 'timestamp'
      }
    },
    {
      id: 'user.updated',
      name: 'User Updated',
      description: 'Triggered when user profile information is updated',
      category: 'User Events',
      frequency: 'Medium',
      payload: {
        userId: 'string',
        changes: 'object',
        updatedAt: 'timestamp'
      }
    },
    {
      id: 'relationship.created',
      name: 'Relationship Created',
      description: 'Triggered when a new relationship is established',
      category: 'Relationship Events',
      frequency: 'Medium',
      payload: {
        relationshipId: 'string',
        userId: 'string',
        partnerId: 'string',
        type: 'string',
        createdAt: 'timestamp'
      }
    },
    {
      id: 'assessment.completed',
      name: 'Assessment Completed',
      description: 'Triggered when a relationship assessment is completed',
      category: 'Assessment Events',
      frequency: 'High',
      payload: {
        assessmentId: 'string',
        userId: 'string',
        relationshipId: 'string',
        score: 'number',
        completedAt: 'timestamp'
      }
    },
    {
      id: 'goal.achieved',
      name: 'Goal Achieved',
      description: 'Triggered when a relationship goal is achieved',
      category: 'Goal Events',
      frequency: 'Low',
      payload: {
        goalId: 'string',
        userId: 'string',
        relationshipId: 'string',
        achievedAt: 'timestamp'
      }
    },
    {
      id: 'subscription.upgraded',
      name: 'Subscription Upgraded',
      description: 'Triggered when a user upgrades their subscription',
      category: 'Billing Events',
      frequency: 'Low',
      payload: {
        userId: 'string',
        oldPlan: 'string',
        newPlan: 'string',
        upgradedAt: 'timestamp'
      }
    }
  ];

  // Sample webhooks
  const sampleWebhooks = [
    {
      id: 'wh-001',
      name: 'CRM Integration Webhook',
      url: 'https://api.mycrm.com/webhooks/flourish',
      events: ['user.created', 'user.updated', 'relationship.created'],
      status: 'Active',
      lastDelivery: '2025-01-07T10:30:00Z',
      successRate: 98.5,
      totalDeliveries: 1247,
      secret: 'wh_secret_abc123...',
      retryPolicy: 'Exponential Backoff',
      timeout: 30
    },
    {
      id: 'wh-002',
      name: 'Analytics Dashboard Webhook',
      url: 'https://analytics.myapp.com/events',
      events: ['assessment.completed', 'goal.achieved'],
      status: 'Active',
      lastDelivery: '2025-01-07T09:45:00Z',
      successRate: 99.2,
      totalDeliveries: 3456,
      secret: 'wh_secret_def456...',
      retryPolicy: 'Linear Backoff',
      timeout: 15
    },
    {
      id: 'wh-003',
      name: 'Email Marketing Webhook',
      url: 'https://email.service.com/hooks/flourish',
      events: ['subscription.upgraded', 'user.created'],
      status: 'Paused',
      lastDelivery: '2025-01-06T16:20:00Z',
      successRate: 97.8,
      totalDeliveries: 567,
      secret: 'wh_secret_ghi789...',
      retryPolicy: 'Fixed Delay',
      timeout: 20
    }
  ];

  // Sample event logs
  const sampleEventLogs = [
    {
      id: 'evt-001',
      eventType: 'user.created',
      webhookId: 'wh-001',
      status: 'Success',
      timestamp: '2025-01-07T10:30:15Z',
      responseCode: 200,
      responseTime: 245,
      attempts: 1,
      payload: { userId: 'usr_123', email: 'john@example.com' }
    },
    {
      id: 'evt-002',
      eventType: 'assessment.completed',
      webhookId: 'wh-002',
      status: 'Success',
      timestamp: '2025-01-07T10:28:30Z',
      responseCode: 200,
      responseTime: 156,
      attempts: 1,
      payload: { assessmentId: 'ass_456', score: 85 }
    },
    {
      id: 'evt-003',
      eventType: 'relationship.created',
      webhookId: 'wh-001',
      status: 'Failed',
      timestamp: '2025-01-07T10:25:45Z',
      responseCode: 500,
      responseTime: 30000,
      attempts: 3,
      payload: { relationshipId: 'rel_789', userId: 'usr_123' }
    },
    {
      id: 'evt-004',
      eventType: 'goal.achieved',
      webhookId: 'wh-002',
      status: 'Success',
      timestamp: '2025-01-07T10:20:12Z',
      responseCode: 201,
      responseTime: 189,
      attempts: 1,
      payload: { goalId: 'goal_101', userId: 'usr_456' }
    }
  ];

  useEffect(() => {
    setWebhooks(sampleWebhooks);
    setEventLogs(sampleEventLogs);
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Paused': 'bg-yellow-100 text-yellow-800',
      'Failed': 'bg-red-100 text-red-800',
      'Success': 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getFrequencyColor = (frequency) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-green-100 text-green-800'
    };
    return colors[frequency] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const testWebhook = (webhookId) => {
    setTestingWebhook(webhookId);
    setTimeout(() => {
      setTestingWebhook(null);
      // Add test result to logs
      const newLog = {
        id: `evt-test-${Date.now()}`,
        eventType: 'webhook.test',
        webhookId: webhookId,
        status: 'Success',
        timestamp: new Date().toISOString(),
        responseCode: 200,
        responseTime: 123,
        attempts: 1,
        payload: { test: true, timestamp: new Date().toISOString() }
      };
      setEventLogs([newLog, ...eventLogs]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Webhook Event Studio</h1>
              <p className="mt-2 text-gray-400">Design, test, and monitor real-time webhook events with advanced debugging tools</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export Logs</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button 
                onClick={() => setIsCreating(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>Create Webhook</span>
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
              { id: 'events', label: 'Event Types', icon: Zap },
              { id: 'webhooks', label: 'Webhooks', icon: Globe },
              { id: 'logs', label: 'Event Logs', icon: Activity },
              { id: 'testing', label: 'Testing Studio', icon: Play },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 },
              { id: 'security', label: 'Security', icon: Shield }
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
        {/* Event Types Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            {/* Event Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event) => (
                <div key={event.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-purple-900 rounded-lg">
                        <Zap className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{event.name}</h3>
                        <p className="text-sm text-gray-400">{event.category}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFrequencyColor(event.frequency)}`}>
                      {event.frequency}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-2">Event ID:</p>
                      <code className="text-xs bg-gray-700 px-2 py-1 rounded text-purple-400">{event.id}</code>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-2">Payload Schema:</p>
                      <div className="bg-gray-900 rounded p-3">
                        <pre className="text-xs text-green-400 overflow-x-auto">
                          {JSON.stringify(event.payload, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-6">
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Copy className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Webhooks Tab */}
        {activeTab === 'webhooks' && (
          <div className="space-y-8">
            {/* Webhooks Management */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Webhook Endpoints</h2>
                <p className="text-gray-400">Manage your webhook endpoints and their configurations</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search webhooks..."
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Filter className="h-5 w-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Webhooks List */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Webhook</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Events</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Delivery</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {webhooks.map((webhook) => (
                      <tr key={webhook.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-white">{webhook.name}</div>
                            <div className="text-sm text-gray-400 font-mono">{webhook.url}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(webhook.status)}`}>
                            {webhook.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-wrap gap-1">
                            {webhook.events.slice(0, 2).map((event, index) => (
                              <span key={index} className="px-2 py-1 bg-purple-900 rounded text-xs text-purple-300">
                                {event}
                              </span>
                            ))}
                            {webhook.events.length > 2 && (
                              <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                                +{webhook.events.length - 2} more
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${webhook.successRate >= 99 ? 'text-green-400' : webhook.successRate >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                              {webhook.successRate}%
                            </span>
                            <span className="text-gray-400">({webhook.totalDeliveries})</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatDate(webhook.lastDelivery)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => testWebhook(webhook.id)}
                              disabled={testingWebhook === webhook.id}
                              className="text-green-400 hover:text-green-300 disabled:opacity-50"
                            >
                              {testingWebhook === webhook.id ? (
                                <RefreshCw className="h-4 w-4 animate-spin" />
                              ) : (
                                <Play className="h-4 w-4" />
                              )}
                            </button>
                            <button className="text-blue-400 hover:text-blue-300">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-red-400 hover:text-red-300">
                              <Trash2 className="h-4 w-4" />
                            </button>
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

        {/* Event Logs Tab */}
        {activeTab === 'logs' && (
          <div className="space-y-8">
            {/* Logs Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Event Delivery Logs</h2>
                <p className="text-gray-400">Monitor webhook delivery attempts and responses</p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                  <option>All Events</option>
                  <option>Success Only</option>
                  <option>Failed Only</option>
                  <option>Retries Only</option>
                </select>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <RefreshCw className="h-5 w-5" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Logs Table */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Event</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Webhook</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Response</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Attempts</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timestamp</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {eventLogs.map((log) => (
                      <tr key={log.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-purple-900 rounded">
                              <Zap className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{log.eventType}</div>
                              <div className="text-sm text-gray-400">{log.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {log.webhookId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(log.status)}`}>
                            {log.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${log.responseCode >= 200 && log.responseCode < 300 ? 'text-green-400' : 'text-red-400'}`}>
                              {log.responseCode}
                            </span>
                            <span className="text-gray-400">({log.responseTime}ms)</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {log.attempts}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatDate(log.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="text-green-400 hover:text-green-300">
                              <RefreshCw className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <Copy className="h-4 w-4" />
                            </button>
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

        {/* Testing Studio Tab */}
        {activeTab === 'testing' && (
          <div className="space-y-8">
            {/* Testing Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Webhook Testing</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Select Webhook</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                      {webhooks.map((webhook) => (
                        <option key={webhook.id} value={webhook.id}>{webhook.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Event Type</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500">
                      {eventTypes.map((event) => (
                        <option key={event.id} value={event.id}>{event.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Test Payload</label>
                    <textarea
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 font-mono text-sm"
                      rows="8"
                      placeholder="Enter test payload in JSON format..."
                      defaultValue={JSON.stringify({
                        userId: "usr_test_123",
                        email: "test@example.com",
                        firstName: "Test",
                        lastName: "User",
                        createdAt: new Date().toISOString()
                      }, null, 2)}
                    ></textarea>
                  </div>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Play className="h-5 w-5" />
                    <span>Send Test Event</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Test Results</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span className="text-green-400 font-medium">Test Successful</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Response Code:</span>
                        <span className="text-green-400">200 OK</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Response Time:</span>
                        <span className="text-white">156ms</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Timestamp:</span>
                        <span className="text-white">{new Date().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Response Headers</h4>
                    <div className="bg-gray-900 rounded p-3">
                      <pre className="text-xs text-gray-400">
{`Content-Type: application/json
Content-Length: 45
X-Webhook-ID: wh-001
X-Event-Type: user.created`}
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-2">Response Body</h4>
                    <div className="bg-gray-900 rounded p-3">
                      <pre className="text-xs text-green-400">
{`{
  "success": true,
  "message": "Event processed successfully"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-green-400">98.7%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">+2.3%</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Events</p>
                    <p className="text-2xl font-bold text-blue-400">5,270</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-blue-400" />
                  <span className="text-blue-400">+15.2%</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Avg Response Time</p>
                    <p className="text-2xl font-bold text-purple-400">187ms</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-12ms</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Failed Events</p>
                    <p className="text-2xl font-bold text-red-400">67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-8</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Event Volume Over Time</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Chart visualization would be rendered here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Success Rate by Webhook</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Chart visualization would be rendered here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Tab */}
        {activeTab === 'security' && (
          <div className="space-y-8">
            {/* Security Settings */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Security Configuration</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Webhook Signatures</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">HMAC-SHA256 Signatures</p>
                          <p className="text-sm text-gray-400">Verify webhook authenticity with cryptographic signatures</p>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Enabled
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Signature Verification</p>
                          <p className="text-sm text-gray-400">Automatically verify signatures on incoming requests</p>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Enabled
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Access Control</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">IP Whitelisting</p>
                          <p className="text-sm text-gray-400">Restrict webhook access to specific IP addresses</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
                          Configure
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Rate Limiting</p>
                          <p className="text-sm text-gray-400">Prevent abuse with configurable rate limits</p>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Active
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Encryption</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">TLS 1.3 Encryption</p>
                          <p className="text-sm text-gray-400">All webhook traffic encrypted with TLS 1.3</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Shield className="h-5 w-5 text-green-400" />
                          <span className="text-green-400">Active</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Payload Encryption</p>
                          <p className="text-sm text-gray-400">Optional end-to-end encryption for sensitive data</p>
                        </div>
                        <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Monitoring</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Security Alerts</p>
                          <p className="text-sm text-gray-400">Real-time alerts for security events</p>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Enabled
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                        <div>
                          <p className="text-white font-medium">Audit Logging</p>
                          <p className="text-sm text-gray-400">Comprehensive logs of all webhook activities</p>
                        </div>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                          Active
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebhookEventStudio;

