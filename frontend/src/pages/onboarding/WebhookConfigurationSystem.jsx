import React, { useState, useEffect } from 'react';
import { 
  Webhook, 
  Settings, 
  Plus, 
  Search, 
  Filter, 
  RefreshCw, 
  Play, 
  Pause, 
  Edit, 
  Trash2, 
  Copy, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Send, 
  ArrowRight, 
  Code, 
  FileText, 
  Key, 
  Shield, 
  Zap, 
  Link, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Terminal, 
  GitBranch, 
  Network, 
  Layers, 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Users, 
  MessageSquare, 
  Mail, 
  Calendar, 
  CreditCard, 
  ShoppingCart, 
  Package, 
  Truck, 
  Bell, 
  Notification, 
  Volume2, 
  VolumeX, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Watch, 
  Headphones, 
  Camera, 
  Mic, 
  Speaker, 
  Radio, 
  Tv, 
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
  Star, 
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
  File, 
  Folder, 
  FolderOpen, 
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
  Laptop, 
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
  X, 
  Y, 
  Z,
  MoreVertical,
  ExternalLink,
  Info,
  HelpCircle
} from 'lucide-react';

const WebhookConfigurationSystem = () => {
  const [activeTab, setActiveTab] = useState('webhooks');
  const [selectedWebhook, setSelectedWebhook] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showTestModal, setShowTestModal] = useState(false);
  const [webhooks, setWebhooks] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Webhook data
  useEffect(() => {
    const sampleWebhooks = [
      {
        id: 1,
        name: 'User Registration Webhook',
        url: 'https://api.example.com/webhooks/user-registration',
        events: ['user.created', 'user.updated'],
        status: 'active',
        created: '2024-12-01',
        lastDelivery: '2025-01-07T10:30:00Z',
        deliveries: 1234,
        failures: 12,
        successRate: 99.0,
        secret: 'whsec_********************abcd',
        retryPolicy: 'exponential',
        timeout: 30,
        headers: {
          'Content-Type': 'application/json',
          'X-Custom-Header': 'flourish-webhook'
        }
      },
      {
        id: 2,
        name: 'Relationship Status Updates',
        url: 'https://partner.example.com/relationship-updates',
        events: ['relationship.created', 'relationship.updated', 'relationship.ended'],
        status: 'active',
        created: '2024-11-15',
        lastDelivery: '2025-01-07T09:45:00Z',
        deliveries: 2567,
        failures: 45,
        successRate: 98.2,
        secret: 'whsec_********************efgh',
        retryPolicy: 'linear',
        timeout: 15,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer token123'
        }
      },
      {
        id: 3,
        name: 'Assessment Completion Webhook',
        url: 'https://analytics.example.com/assessment-complete',
        events: ['assessment.completed', 'assessment.scored'],
        status: 'paused',
        created: '2024-10-20',
        lastDelivery: '2025-01-05T14:20:00Z',
        deliveries: 890,
        failures: 156,
        successRate: 82.5,
        secret: 'whsec_********************ijkl',
        retryPolicy: 'exponential',
        timeout: 45,
        headers: {
          'Content-Type': 'application/json'
        }
      },
      {
        id: 4,
        name: 'Payment Processing Webhook',
        url: 'https://billing.example.com/payment-events',
        events: ['payment.succeeded', 'payment.failed', 'subscription.updated'],
        status: 'failed',
        created: '2024-09-10',
        lastDelivery: '2025-01-06T16:15:00Z',
        deliveries: 3456,
        failures: 234,
        successRate: 93.2,
        secret: 'whsec_********************mnop',
        retryPolicy: 'exponential',
        timeout: 20,
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Source': 'flourish-payments'
        }
      }
    ];
    setWebhooks(sampleWebhooks);
  }, []);

  // Available events
  useEffect(() => {
    const availableEvents = [
      { id: 'user.created', name: 'User Created', description: 'Triggered when a new user registers' },
      { id: 'user.updated', name: 'User Updated', description: 'Triggered when user profile is updated' },
      { id: 'user.deleted', name: 'User Deleted', description: 'Triggered when user account is deleted' },
      { id: 'relationship.created', name: 'Relationship Created', description: 'Triggered when a new relationship is established' },
      { id: 'relationship.updated', name: 'Relationship Updated', description: 'Triggered when relationship status changes' },
      { id: 'relationship.ended', name: 'Relationship Ended', description: 'Triggered when a relationship ends' },
      { id: 'assessment.started', name: 'Assessment Started', description: 'Triggered when user begins an assessment' },
      { id: 'assessment.completed', name: 'Assessment Completed', description: 'Triggered when assessment is finished' },
      { id: 'assessment.scored', name: 'Assessment Scored', description: 'Triggered when assessment results are calculated' },
      { id: 'payment.succeeded', name: 'Payment Succeeded', description: 'Triggered when payment is successful' },
      { id: 'payment.failed', name: 'Payment Failed', description: 'Triggered when payment fails' },
      { id: 'subscription.created', name: 'Subscription Created', description: 'Triggered when new subscription is created' },
      { id: 'subscription.updated', name: 'Subscription Updated', description: 'Triggered when subscription is modified' },
      { id: 'subscription.cancelled', name: 'Subscription Cancelled', description: 'Triggered when subscription is cancelled' },
      { id: 'message.sent', name: 'Message Sent', description: 'Triggered when a message is sent' },
      { id: 'message.received', name: 'Message Received', description: 'Triggered when a message is received' },
      { id: 'goal.created', name: 'Goal Created', description: 'Triggered when a new goal is set' },
      { id: 'goal.completed', name: 'Goal Completed', description: 'Triggered when a goal is achieved' },
      { id: 'session.started', name: 'Session Started', description: 'Triggered when user starts a session' },
      { id: 'session.ended', name: 'Session Ended', description: 'Triggered when user ends a session' }
    ];
    setEvents(availableEvents);
  }, []);

  // Recent deliveries
  useEffect(() => {
    const sampleDeliveries = Array.from({ length: 20 }, (_, i) => {
      const statuses = ['success', 'failed', 'pending'];
      const events = ['user.created', 'relationship.updated', 'payment.succeeded', 'assessment.completed'];
      const webhookIds = [1, 2, 3, 4];
      
      return {
        id: i + 1,
        webhookId: webhookIds[Math.floor(Math.random() * webhookIds.length)],
        event: events[Math.floor(Math.random() * events.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
        responseCode: Math.random() > 0.8 ? 500 : 200,
        responseTime: Math.floor(Math.random() * 1000) + 100,
        attempts: Math.floor(Math.random() * 3) + 1
      };
    });
    setDeliveries(sampleDeliveries);
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
      paused: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800',
      success: 'bg-green-100 text-green-800',
      pending: 'bg-blue-100 text-blue-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    const icons = {
      active: CheckCircle,
      paused: Pause,
      failed: XCircle,
      success: CheckCircle,
      pending: Clock
    };
    const Icon = icons[status] || AlertCircle;
    return <Icon className="h-4 w-4" />;
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Webhook Configuration</h1>
              <p className="mt-2 text-gray-400">Configure and manage webhook endpoints for real-time event notifications</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowTestModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>Test Webhook</span>
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
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
              { id: 'webhooks', label: 'Webhooks', icon: Webhook },
              { id: 'deliveries', label: 'Delivery Logs', icon: Send },
              { id: 'events', label: 'Available Events', icon: Activity },
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
        {/* Webhooks Tab */}
        {activeTab === 'webhooks' && (
          <div className="space-y-8">
            {/* Webhooks Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Webhooks</p>
                    <p className="text-3xl font-bold text-white">{webhooks.length}</p>
                  </div>
                  <div className="p-3 bg-purple-900 rounded-lg">
                    <Webhook className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Webhooks</p>
                    <p className="text-3xl font-bold text-white">
                      {webhooks.filter(w => w.status === 'active').length}
                    </p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Deliveries</p>
                    <p className="text-3xl font-bold text-white">
                      {formatNumber(webhooks.reduce((sum, w) => sum + w.deliveries, 0))}
                    </p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Send className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Avg Success Rate</p>
                    <p className="text-3xl font-bold text-white">
                      {(webhooks.reduce((sum, w) => sum + w.successRate, 0) / webhooks.length).toFixed(1)}%
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Webhooks List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Configured Webhooks</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search webhooks..."
                      className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {webhooks.map((webhook) => (
                  <div key={webhook.id} className="p-6 bg-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{webhook.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(webhook.status)}`}>
                            {webhook.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 font-mono mb-2">{webhook.url}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Events: {webhook.events.length}</span>
                          <span>•</span>
                          <span>Deliveries: {formatNumber(webhook.deliveries)}</span>
                          <span>•</span>
                          <span>Success Rate: {webhook.successRate}%</span>
                          <span>•</span>
                          <span>Last Delivery: {formatTimestamp(webhook.lastDelivery)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedWebhook(webhook)}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          {webhook.status === 'active' ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Trash2 className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-white mb-2">Subscribed Events</h5>
                        <div className="flex flex-wrap gap-1">
                          {webhook.events.map((event, index) => (
                            <span key={index} className="px-2 py-1 bg-purple-900 text-purple-300 rounded text-xs">
                              {event}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Configuration</h5>
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>Timeout: {webhook.timeout}s</p>
                          <p>Retry Policy: {webhook.retryPolicy}</p>
                          <p>Headers: {Object.keys(webhook.headers).length}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Performance</h5>
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>Failures: {formatNumber(webhook.failures)}</p>
                          <p>Success Rate: {webhook.successRate}%</p>
                          <p>Created: {webhook.created}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Delivery Logs Tab */}
        {activeTab === 'deliveries' && (
          <div className="space-y-8">
            {/* Delivery Logs */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Recent Webhook Deliveries</h3>
                <div className="flex items-center space-x-4">
                  <select className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg">
                    <option>All Webhooks</option>
                    {webhooks.map(webhook => (
                      <option key={webhook.id} value={webhook.id}>{webhook.name}</option>
                    ))}
                  </select>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <RefreshCw className="h-5 w-5" />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Event</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Webhook</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Response</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Time</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Attempts</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Timestamp</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {deliveries.map((delivery) => {
                      const webhook = webhooks.find(w => w.id === delivery.webhookId);
                      return (
                        <tr key={delivery.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{delivery.event}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{webhook?.name || 'Unknown'}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(delivery.status)}
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
                                {delivery.status}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{delivery.responseCode}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{delivery.responseTime}ms</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{delivery.attempts}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatTimestamp(delivery.timestamp)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Available Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            {/* Events List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Available Webhook Events</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-white">{event.name}</h4>
                      <span className="px-2 py-1 bg-purple-900 text-purple-300 rounded text-xs font-mono">
                        {event.id}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Webhook Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">Default Retry Policy</h4>
                <p className="text-sm text-gray-400 mb-2">Configure the default retry behavior for failed webhook deliveries.</p>
                <select className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg">
                  <option value="exponential">Exponential Backoff</option>
                  <option value="linear">Linear Backoff</option>
                  <option value="none">No Retries</option>
                </select>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">Default Timeout</h4>
                <p className="text-sm text-gray-400 mb-2">Set the default timeout for webhook requests (in seconds).</p>
                <input
                  type="number"
                  defaultValue="30"
                  min="5"
                  max="300"
                  className="w-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                />
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">Security Settings</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                    <span className="ml-2 text-sm text-gray-300">Require HTTPS for webhook URLs</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                    <span className="ml-2 text-sm text-gray-300">Include webhook signature in headers</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                    <span className="ml-2 text-sm text-gray-300">Log webhook payloads for debugging</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Webhook Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Create New Webhook</h2>
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Webhook Name</label>
                <input
                  type="text"
                  placeholder="e.g., User Registration Webhook"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Endpoint URL</label>
                <input
                  type="url"
                  placeholder="https://your-domain.com/webhook"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Events to Subscribe</label>
                <div className="max-h-48 overflow-y-auto space-y-2 border border-gray-600 rounded-lg p-3">
                  {events.map((event) => (
                    <label key={event.id} className="flex items-start">
                      <input type="checkbox" className="mt-1 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-600" />
                      <div className="ml-2">
                        <span className="text-sm text-gray-300 font-medium">{event.name}</span>
                        <p className="text-xs text-gray-400">{event.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timeout (seconds)</label>
                  <input
                    type="number"
                    defaultValue="30"
                    min="5"
                    max="300"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Retry Policy</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option value="exponential">Exponential Backoff</option>
                    <option value="linear">Linear Backoff</option>
                    <option value="none">No Retries</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Custom Headers (JSON)</label>
                <textarea
                  placeholder='{"Authorization": "Bearer token", "X-Custom-Header": "value"}'
                  rows={3}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Create Webhook
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Test Webhook Modal */}
      {showTestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Test Webhook</h2>
                <button
                  onClick={() => setShowTestModal(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Webhook</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Choose a webhook to test...</option>
                  {webhooks.map(webhook => (
                    <option key={webhook.id} value={webhook.id}>{webhook.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Event Type</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">Select event type...</option>
                  {events.map(event => (
                    <option key={event.id} value={event.id}>{event.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Test Payload (JSON)</label>
                <textarea
                  placeholder='{"event": "user.created", "data": {"id": "123", "email": "test@example.com"}}'
                  rows={8}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                />
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-700 flex justify-end space-x-4">
              <button
                onClick={() => setShowTestModal(false)}
                className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowTestModal(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Send Test
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Webhook Details Modal */}
      {selectedWebhook && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedWebhook.name}</h2>
                  <p className="text-gray-400 mt-1">Webhook Details and Configuration</p>
                </div>
                <button
                  onClick={() => setSelectedWebhook(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-300">Endpoint URL</h4>
                      <p className="text-sm text-gray-400 font-mono">{selectedWebhook.url}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Status</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedWebhook.status)}`}>
                        {selectedWebhook.status}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Timeout</h4>
                      <p className="text-sm text-gray-400">{selectedWebhook.timeout} seconds</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Retry Policy</h4>
                      <p className="text-sm text-gray-400 capitalize">{selectedWebhook.retryPolicy}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Performance</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-300">Total Deliveries</h4>
                      <p className="text-sm text-gray-400">{formatNumber(selectedWebhook.deliveries)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Failures</h4>
                      <p className="text-sm text-gray-400">{formatNumber(selectedWebhook.failures)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Success Rate</h4>
                      <p className="text-sm text-gray-400">{selectedWebhook.successRate}%</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Last Delivery</h4>
                      <p className="text-sm text-gray-400">{formatTimestamp(selectedWebhook.lastDelivery)}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Subscribed Events</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedWebhook.events.map((event, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm">
                      {event}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Custom Headers</h3>
                <div className="bg-gray-700 rounded-lg p-4">
                  <pre className="text-sm text-gray-300 font-mono">
                    {JSON.stringify(selectedWebhook.headers, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebhookConfigurationSystem;

