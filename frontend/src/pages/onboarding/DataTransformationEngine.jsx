import React, { useState, useEffect, useRef } from 'react';
import { 
  Shuffle, 
  Code, 
  Code2, 
  Play, 
  Pause, 
  Stop, 
  RefreshCw, 
  Save, 
  Upload, 
  Download, 
  Copy, 
  Edit, 
  Trash2, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Settings, 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  MoreVertical, 
  Database, 
  Server, 
  Cloud, 
  Globe, 
  Zap, 
  Activity, 
  BarChart3, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Flag, 
  Tag, 
  Hash, 
  AtSign, 
  Percent, 
  DollarSign, 
  Clock, 
  Calendar, 
  User, 
  Users, 
  Mail, 
  MessageSquare, 
  Phone, 
  Video, 
  Image, 
  File, 
  FileText, 
  Folder, 
  FolderOpen, 
  Link, 
  ExternalLink, 
  Shield, 
  Lock, 
  Unlock, 
  Key, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Info, 
  HelpCircle, 
  Lightbulb, 
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
  AlignJustify, 
  List, 
  ListOrdered, 
  Indent, 
  Outdent, 
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
  CapsLock, 
  Escape, 
  Function, 
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
  Pointer, 
  Click, 
  Touch, 
  Fingerprint, 
  Glasses, 
  Sun, 
  Moon, 
  Star, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Bookmark, 
  Home, 
  Building, 
  Store, 
  Warehouse, 
  Factory, 
  Hospital, 
  School, 
  University, 
  GraduationCap, 
  Cpu, 
  HardDrive, 
  MemoryStick, 
  Wifi, 
  WifiOff, 
  Router, 
  Network, 
  Bluetooth, 
  BluetoothConnected, 
  BluetoothSearching, 
  BluetoothOff, 
  Usb, 
  Hdmi, 
  Ethernet, 
  Rss, 
  QrCode, 
  Barcode, 
  ScanLine, 
  Dna, 
  Atom, 
  Molecule, 
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
  Package,
  Package2,
  PackageOpen,
  PackageCheck,
  PackageX,
  PackagePlus,
  PackageMinus,
  PackageSearch,
  Truck,
  Car,
  Bus,
  Train,
  Plane,
  Ship,
  Scooter,
  Motorcycle,
  Taxi,
  PlaneTakeoff,
  PlaneLanding,
  Anchor,
  Sailboat,
  Fuel,
  Construction,
  Hammer,
  Wrench,
  Screwdriver,
  Drill,
  Saw,
  Pickaxe,
  Shovel,
  HardHat,
  Toolbox,
  Nut,
  Bolt,
  Gear,
  Cog,
  Thermometer,
  Barometer,
  Compass,
  Level,
  RulerSquare,
  Protractor,
  Dividers,
  Caliper,
  Micrometer,
  Balance,
  Hourglass,
  Repeat,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Undo,
  Redo,
  Unlink,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ShieldOff,
  Verified,
  Award,
  Crosshair,
  Navigation,
  Map,
  MapPin,
  Route,
  Directions,
  Send,
  MailOpen,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  VideoOff,
  ImageOff,
  FileImage,
  FileVideo,
  FileAudio,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileEdit,
  FileSearch,
  FileDown,
  FileUp,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderEdit,
  FolderSearch,
  FolderDown,
  FolderUp,
  Satellite,
  Radar,
  Sonar,
  Gps,
  Location,
  LocationOff,
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
  Watermill,
  Dam,
  Reservoir,
  Well,
  Fountain,
  Pond,
  Lake,
  River,
  Stream,
  Waterfall,
  Ocean,
  Sea,
  Beach,
  Island,
  Mountain,
  Hill,
  Valley,
  Canyon,
  Desert,
  Forest,
  Tree,
  Palm,
  Cactus,
  Flower,
  Rose,
  Tulip,
  Sunflower,
  Daisy,
  Lily,
  Orchid,
  Lotus,
  Cherry,
  Blossom,
  Leaf,
  Branch,
  Root,
  Seed,
  Sprout,
  Sapling,
  Bush,
  Grass,
  Moss,
  Fern,
  Vine,
  Ivy,
  Bamboo,
  Reed,
  Wheat,
  Corn,
  Rice,
  Barley,
  Oats,
  Rye,
  Millet,
  Quinoa,
  Buckwheat,
  Sorghum,
  Teff,
  Amaranth,
  Chia,
  Flax,
  Hemp,
  Cotton,
  Silk,
  Wool,
  Linen,
  Jute,
  Sisal,
  Coir,
  Kapok,
  Ramie,
  Nettle,
  Kenaf,
  Abaca,
  Henequen,
  Istle
} from 'lucide-react';

const DataTransformationEngine = () => {
  const [activeTab, setActiveTab] = useState('transformations');
  const [selectedTransformation, setSelectedTransformation] = useState(null);
  const [transformations, setTransformations] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [testData, setTestData] = useState('');
  const [transformedData, setTransformedData] = useState('');
  const canvasRef = useRef(null);

  // Sample transformation templates
  const transformationTemplates = [
    {
      id: 'user-normalization',
      name: 'User Data Normalization',
      description: 'Standardize user data formats across different sources',
      category: 'Data Cleaning',
      complexity: 'Easy',
      inputFormat: 'JSON',
      outputFormat: 'JSON',
      operations: [
        'Normalize email addresses',
        'Standardize phone numbers',
        'Format names consistently',
        'Validate required fields'
      ]
    },
    {
      id: 'assessment-aggregation',
      name: 'Assessment Score Aggregation',
      description: 'Combine multiple assessment scores into comprehensive metrics',
      category: 'Analytics',
      complexity: 'Medium',
      inputFormat: 'JSON',
      outputFormat: 'JSON',
      operations: [
        'Calculate weighted averages',
        'Normalize score ranges',
        'Generate percentile rankings',
        'Create composite scores'
      ]
    },
    {
      id: 'relationship-mapping',
      name: 'Relationship Data Mapping',
      description: 'Transform relationship data for external CRM systems',
      category: 'Integration',
      complexity: 'Medium',
      inputFormat: 'JSON',
      outputFormat: 'XML/JSON',
      operations: [
        'Map field names',
        'Convert data types',
        'Apply business rules',
        'Generate external IDs'
      ]
    },
    {
      id: 'event-enrichment',
      name: 'Event Data Enrichment',
      description: 'Enhance event data with additional context and metadata',
      category: 'Enhancement',
      complexity: 'Hard',
      inputFormat: 'JSON',
      outputFormat: 'JSON',
      operations: [
        'Add geolocation data',
        'Enrich user profiles',
        'Calculate derived metrics',
        'Apply ML predictions'
      ]
    }
  ];

  // Sample transformation steps
  const transformationSteps = [
    {
      id: 'input',
      type: 'input',
      name: 'Data Input',
      icon: Database,
      color: 'bg-blue-500',
      description: 'Source data input'
    },
    {
      id: 'filter',
      type: 'filter',
      name: 'Filter',
      icon: Filter,
      color: 'bg-yellow-500',
      description: 'Filter data based on conditions'
    },
    {
      id: 'map',
      type: 'map',
      name: 'Map Fields',
      icon: Shuffle,
      color: 'bg-green-500',
      description: 'Map and rename fields'
    },
    {
      id: 'transform',
      type: 'transform',
      name: 'Transform',
      icon: Code,
      color: 'bg-purple-500',
      description: 'Apply data transformations'
    },
    {
      id: 'validate',
      type: 'validate',
      name: 'Validate',
      icon: CheckCircle,
      color: 'bg-indigo-500',
      description: 'Validate data quality'
    },
    {
      id: 'output',
      type: 'output',
      name: 'Data Output',
      icon: Server,
      color: 'bg-red-500',
      description: 'Transformed data output'
    }
  ];

  // Sample existing transformations
  const existingTransformations = [
    {
      id: 'trans-001',
      name: 'Salesforce User Sync',
      description: 'Transform Flourish user data for Salesforce CRM',
      status: 'Active',
      lastRun: '2025-01-07T10:30:00Z',
      executions: 1247,
      successRate: 98.5,
      avgDuration: 2.3,
      inputSource: 'Flourish Users API',
      outputTarget: 'Salesforce CRM',
      schedule: 'Every 15 minutes'
    },
    {
      id: 'trans-002',
      name: 'Assessment Analytics Pipeline',
      description: 'Aggregate assessment data for analytics dashboard',
      status: 'Active',
      lastRun: '2025-01-07T09:45:00Z',
      executions: 3456,
      successRate: 99.2,
      avgDuration: 1.8,
      inputSource: 'Assessment Results',
      outputTarget: 'Analytics Database',
      schedule: 'Hourly'
    },
    {
      id: 'trans-003',
      name: 'Email Marketing Data Prep',
      description: 'Prepare user data for email marketing campaigns',
      status: 'Paused',
      lastRun: '2025-01-06T16:20:00Z',
      executions: 567,
      successRate: 97.8,
      avgDuration: 1.2,
      inputSource: 'User Profiles',
      outputTarget: 'Mailchimp API',
      schedule: 'Daily at 9 AM'
    }
  ];

  useEffect(() => {
    setTransformations(existingTransformations);
  }, []);

  const getComplexityColor = (complexity) => {
    const colors = {
      'Easy': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Hard': 'bg-red-100 text-red-800'
    };
    return colors[complexity] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status) => {
    const colors = {
      'Active': 'bg-green-100 text-green-800',
      'Paused': 'bg-yellow-100 text-yellow-800',
      'Error': 'bg-red-100 text-red-800',
      'Draft': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  const runTransformation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setTransformedData(JSON.stringify({
        id: 'usr_123_transformed',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1-555-123-4567',
        createdAt: '2025-01-07T10:30:00Z',
        normalizedScore: 85.5,
        percentileRank: 78,
        enrichedData: {
          location: 'San Francisco, CA',
          timezone: 'America/Los_Angeles',
          segment: 'Premium User'
        }
      }, null, 2));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Data Transformation Engine</h1>
              <p className="mt-2 text-gray-400">Visual data transformation with real-time processing and advanced mapping capabilities</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Upload className="h-5 w-5" />
                <span>Import</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Export</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all">
                <Plus className="h-5 w-5" />
                <span>New Transformation</span>
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
              { id: 'transformations', label: 'Transformations', icon: Shuffle },
              { id: 'builder', label: 'Visual Builder', icon: Code },
              { id: 'templates', label: 'Templates', icon: Package },
              { id: 'testing', label: 'Testing Lab', icon: Play },
              { id: 'monitoring', label: 'Monitoring', icon: Activity },
              { id: 'performance', label: 'Performance', icon: BarChart3 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-400'
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
        {/* Transformations Tab */}
        {activeTab === 'transformations' && (
          <div className="space-y-8">
            {/* Transformation Management */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Data Transformations</h2>
                <p className="text-gray-400">Manage and monitor your data transformation pipelines</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transformations..."
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Filter className="h-5 w-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Transformations List */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Transformation</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Source → Target</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Schedule</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Run</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {transformations.map((transformation) => (
                      <tr key={transformation.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-indigo-900 rounded-lg mr-3">
                              <Shuffle className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{transformation.name}</div>
                              <div className="text-sm text-gray-400">{transformation.description}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transformation.status)}`}>
                            {transformation.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400">{transformation.inputSource}</span>
                            <ArrowRight className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-400">{transformation.outputTarget}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <span className={`font-semibold ${transformation.successRate >= 99 ? 'text-green-400' : transformation.successRate >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                              {transformation.successRate}%
                            </span>
                            <span className="text-gray-400">({transformation.executions})</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {transformation.schedule}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatDate(transformation.lastRun)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-green-400 hover:text-green-300">
                              <Play className="h-4 w-4" />
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

        {/* Visual Builder Tab */}
        {activeTab === 'builder' && (
          <div className="space-y-8">
            {/* Builder Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-white">Visual Transformation Builder</h2>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  6 steps configured
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <Play className="h-5 w-5" />
                  <span>Test Run</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Save className="h-5 w-5" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Step Palette */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Transformation Steps</h3>
                <div className="space-y-3">
                  {transformationSteps.map((step) => (
                    <div
                      key={step.id}
                      className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg ${step.color}`}>
                        <step.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium">{step.name}</p>
                        <p className="text-xs text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Transformation Flow</h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                      <ZoomIn className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                      <ZoomOut className="h-5 w-5 text-gray-400" />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                      <Maximize className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div 
                  ref={canvasRef}
                  className="h-96 bg-gray-700 rounded-lg border-2 border-dashed border-gray-600 flex items-center justify-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 p-4">
                    {/* Sample transformation flow */}
                    <div className="flex items-center justify-between h-full">
                      {transformationSteps.map((step, index) => (
                        <div key={step.id} className="flex flex-col items-center">
                          <div className={`p-3 rounded-lg ${step.color} mb-2`}>
                            <step.icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-white text-sm font-medium">{step.name}</span>
                          {index < transformationSteps.length - 1 && (
                            <ArrowRight className="h-5 w-5 text-gray-400 absolute" style={{ left: `${(index + 1) * 16.66}%` }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration Panel */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Step Configuration</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Step Type</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Map Fields</option>
                      <option>Filter Data</option>
                      <option>Transform Values</option>
                      <option>Validate Data</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Configuration</label>
                    <textarea
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                      rows="6"
                      placeholder="Enter configuration..."
                      defaultValue={JSON.stringify({
                        "mapping": {
                          "first_name": "firstName",
                          "last_name": "lastName",
                          "email_address": "email"
                        },
                        "validation": {
                          "required": ["firstName", "lastName", "email"]
                        }
                      }, null, 2)}
                    ></textarea>
                  </div>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    <Save className="h-5 w-5" />
                    <span>Apply Configuration</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-8">
            {/* Template Categories */}
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-white">Transformation Templates</h2>
              <div className="flex items-center space-x-2">
                {['All', 'Data Cleaning', 'Analytics', 'Integration', 'Enhancement'].map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {transformationTemplates.map((template) => (
                <div key={template.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-indigo-900 rounded-lg">
                        <Shuffle className="h-6 w-6 text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                        <p className="text-sm text-gray-400">{template.category}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getComplexityColor(template.complexity)}`}>
                      {template.complexity}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{template.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Input:</span>
                      <span className="text-sm text-white">{template.inputFormat}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Output:</span>
                      <span className="text-sm text-white">{template.outputFormat}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-2">Operations:</p>
                      <div className="space-y-1">
                        {template.operations.map((operation, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <Check className="h-3 w-3 text-green-400" />
                            <span className="text-xs text-gray-400">{operation}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setSelectedTransformation(template)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Play className="h-4 w-4" />
                      <span>Use Template</span>
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <Eye className="h-4 w-4 text-gray-400" />
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

        {/* Testing Lab Tab */}
        {activeTab === 'testing' && (
          <div className="space-y-8">
            {/* Testing Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Test Input Data</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Select Transformation</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      {transformations.map((transformation) => (
                        <option key={transformation.id} value={transformation.id}>{transformation.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Input Data (JSON)</label>
                    <textarea
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                      rows="12"
                      value={testData}
                      onChange={(e) => setTestData(e.target.value)}
                      placeholder="Enter test data in JSON format..."
                    ></textarea>
                  </div>
                  <button 
                    onClick={runTransformation}
                    disabled={isRunning}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="h-5 w-5 animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-5 w-5" />
                        <span>Run Transformation</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Transformation Output</h3>
                <div className="space-y-4">
                  {transformedData ? (
                    <>
                      <div className="bg-green-900 border border-green-700 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          <span className="text-green-400 font-medium">Transformation Successful</span>
                        </div>
                        <div className="text-sm text-green-200">
                          Processed in 2.3 seconds • 1 record transformed
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Output Data (JSON)</label>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <pre className="text-sm text-green-400 overflow-x-auto">
                            {transformedData}
                          </pre>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                          <Copy className="h-5 w-5" />
                          <span>Copy Output</span>
                        </button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                          <Download className="h-5 w-5" />
                          <span>Download</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-gray-400 py-12">
                      <Code className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                      <p>Run a transformation to see the output</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            {/* Monitoring Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-green-400">98.5%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">+1.2%</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Total Executions</p>
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
                    <p className="text-sm text-gray-400">Avg Duration</p>
                    <p className="text-2xl font-bold text-purple-400">2.1s</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-0.3s</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Failed Jobs</p>
                    <p className="text-2xl font-bold text-red-400">78</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-400" />
                  <span className="text-green-400">-12</span>
                  <span className="text-gray-400">vs last week</span>
                </div>
              </div>
            </div>

            {/* Real-time Activity */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Real-time Activity</h3>
              <div className="space-y-4">
                {[
                  { time: '10:30:15', transformation: 'Salesforce User Sync', status: 'Success', duration: '2.3s' },
                  { time: '10:29:45', transformation: 'Assessment Analytics Pipeline', status: 'Success', duration: '1.8s' },
                  { time: '10:28:30', transformation: 'Email Marketing Data Prep', status: 'Failed', duration: '0.5s' },
                  { time: '10:27:12', transformation: 'Salesforce User Sync', status: 'Success', duration: '2.1s' },
                  { time: '10:26:45', transformation: 'Assessment Analytics Pipeline', status: 'Success', duration: '1.9s' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-400 font-mono">{activity.time}</span>
                      <span className="text-white">{activity.transformation}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                        {activity.status}
                      </span>
                      <span className="text-sm text-gray-400">{activity.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Execution Time Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <LineChart className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Chart visualization would be rendered here</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Success Rate by Transformation</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">Chart visualization would be rendered here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-blue-900 rounded-lg mb-3">
                    <Database className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Data Throughput</p>
                  <p className="text-2xl font-bold text-blue-400">1.2M</p>
                  <p className="text-xs text-gray-500">records/hour</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mb-3">
                    <Zap className="h-8 w-8 text-green-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Peak Performance</p>
                  <p className="text-2xl font-bold text-green-400">2.8M</p>
                  <p className="text-xs text-gray-500">records/hour</p>
                </div>
                
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mb-3">
                    <Activity className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Resource Usage</p>
                  <p className="text-2xl font-bold text-purple-400">67%</p>
                  <p className="text-xs text-gray-500">CPU utilization</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataTransformationEngine;

