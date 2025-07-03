import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Upload, 
  FileText, 
  Database, 
  Settings, 
  Plus, 
  Search, 
  Filter, 
  RefreshCw, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Play, 
  Pause, 
  Edit, 
  Trash2, 
  Copy, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft, 
  Code, 
  Key, 
  Shield, 
  Zap, 
  Link, 
  Globe, 
  Server, 
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

const DataImportExportTools = () => {
  const [activeTab, setActiveTab] = useState('import');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [importJobs, setImportJobs] = useState([]);
  const [exportJobs, setExportJobs] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Import/Export job data
  useEffect(() => {
    const sampleImportJobs = [
      {
        id: 1,
        name: 'User Data Migration',
        type: 'import',
        source: 'CSV File',
        status: 'completed',
        created: '2025-01-07T08:30:00Z',
        started: '2025-01-07T08:35:00Z',
        completed: '2025-01-07T09:15:00Z',
        recordsProcessed: 12567,
        recordsSuccessful: 12234,
        recordsErrors: 333,
        fileSize: '2.4 MB',
        fileName: 'users_export_2025.csv',
        mapping: {
          'email': 'user_email',
          'name': 'full_name',
          'phone': 'phone_number',
          'created_at': 'registration_date'
        },
        errors: [
          { row: 45, field: 'email', message: 'Invalid email format' },
          { row: 123, field: 'phone', message: 'Phone number too long' },
          { row: 567, field: 'name', message: 'Name field is required' }
        ]
      },
      {
        id: 2,
        name: 'Relationship Assessment Import',
        type: 'import',
        source: 'JSON API',
        status: 'running',
        created: '2025-01-07T10:00:00Z',
        started: '2025-01-07T10:05:00Z',
        completed: null,
        recordsProcessed: 8934,
        recordsSuccessful: 8901,
        recordsErrors: 33,
        fileSize: '15.7 MB',
        fileName: 'assessments_batch_001.json',
        mapping: {
          'assessment_id': 'id',
          'user_id': 'participant_id',
          'score': 'total_score',
          'completed_at': 'completion_date'
        },
        errors: []
      },
      {
        id: 3,
        name: 'Legacy System Migration',
        type: 'import',
        source: 'Database',
        status: 'failed',
        created: '2025-01-06T14:20:00Z',
        started: '2025-01-06T14:25:00Z',
        completed: '2025-01-06T14:45:00Z',
        recordsProcessed: 2345,
        recordsSuccessful: 0,
        recordsErrors: 2345,
        fileSize: '890 KB',
        fileName: 'legacy_data.sql',
        mapping: {},
        errors: [
          { row: 1, field: 'connection', message: 'Database connection failed' }
        ]
      }
    ];

    const sampleExportJobs = [
      {
        id: 4,
        name: 'User Analytics Export',
        type: 'export',
        destination: 'CSV File',
        status: 'completed',
        created: '2025-01-07T11:00:00Z',
        started: '2025-01-07T11:02:00Z',
        completed: '2025-01-07T11:25:00Z',
        recordsProcessed: 45678,
        recordsSuccessful: 45678,
        recordsErrors: 0,
        fileSize: '8.9 MB',
        fileName: 'user_analytics_2025_01_07.csv',
        downloadUrl: '/downloads/user_analytics_2025_01_07.csv',
        filters: {
          dateRange: '2024-01-01 to 2025-01-07',
          userType: 'premium',
          includeInactive: false
        }
      },
      {
        id: 5,
        name: 'Relationship Data Backup',
        type: 'export',
        destination: 'JSON File',
        status: 'running',
        created: '2025-01-07T12:00:00Z',
        started: '2025-01-07T12:05:00Z',
        completed: null,
        recordsProcessed: 23456,
        recordsSuccessful: 23456,
        recordsErrors: 0,
        fileSize: '12.3 MB',
        fileName: 'relationships_backup_2025_01_07.json',
        downloadUrl: null,
        filters: {
          includeArchived: true,
          includeDeleted: false,
          format: 'detailed'
        }
      },
      {
        id: 6,
        name: 'Assessment Results Export',
        type: 'export',
        destination: 'Excel File',
        status: 'scheduled',
        created: '2025-01-07T13:00:00Z',
        started: null,
        completed: null,
        recordsProcessed: 0,
        recordsSuccessful: 0,
        recordsErrors: 0,
        fileSize: '0 MB',
        fileName: 'assessment_results_2025_01_07.xlsx',
        downloadUrl: null,
        filters: {
          assessmentType: 'compatibility',
          completedAfter: '2024-12-01',
          includeScores: true
        }
      }
    ];

    setImportJobs(sampleImportJobs);
    setExportJobs(sampleExportJobs);
  }, []);

  // Data templates
  useEffect(() => {
    const sampleTemplates = [
      {
        id: 1,
        name: 'User Data Template',
        type: 'import',
        format: 'CSV',
        description: 'Standard template for importing user profile data',
        fields: [
          { name: 'email', type: 'string', required: true, description: 'User email address' },
          { name: 'first_name', type: 'string', required: true, description: 'User first name' },
          { name: 'last_name', type: 'string', required: true, description: 'User last name' },
          { name: 'phone', type: 'string', required: false, description: 'Phone number' },
          { name: 'birth_date', type: 'date', required: false, description: 'Date of birth (YYYY-MM-DD)' },
          { name: 'gender', type: 'enum', required: false, description: 'Gender (male/female/other)' },
          { name: 'location', type: 'string', required: false, description: 'City, State/Country' }
        ],
        sampleData: [
          ['email', 'first_name', 'last_name', 'phone', 'birth_date', 'gender', 'location'],
          ['john.doe@example.com', 'John', 'Doe', '+1234567890', '1990-05-15', 'male', 'New York, NY'],
          ['jane.smith@example.com', 'Jane', 'Smith', '+1987654321', '1992-08-22', 'female', 'Los Angeles, CA']
        ]
      },
      {
        id: 2,
        name: 'Assessment Results Template',
        type: 'import',
        format: 'JSON',
        description: 'Template for importing assessment results and scores',
        fields: [
          { name: 'assessment_id', type: 'string', required: true, description: 'Unique assessment identifier' },
          { name: 'user_id', type: 'string', required: true, description: 'User identifier' },
          { name: 'assessment_type', type: 'enum', required: true, description: 'Type of assessment' },
          { name: 'total_score', type: 'number', required: true, description: 'Overall assessment score' },
          { name: 'category_scores', type: 'object', required: false, description: 'Scores by category' },
          { name: 'completed_at', type: 'datetime', required: true, description: 'Completion timestamp' },
          { name: 'duration_minutes', type: 'number', required: false, description: 'Time taken to complete' }
        ],
        sampleData: {
          assessment_id: 'assess_123456',
          user_id: 'user_789',
          assessment_type: 'compatibility',
          total_score: 85.5,
          category_scores: {
            communication: 90,
            trust: 82,
            intimacy: 84
          },
          completed_at: '2025-01-07T10:30:00Z',
          duration_minutes: 25
        }
      },
      {
        id: 3,
        name: 'Relationship Data Template',
        type: 'export',
        format: 'CSV',
        description: 'Standard export format for relationship data',
        fields: [
          { name: 'relationship_id', type: 'string', required: true, description: 'Unique relationship identifier' },
          { name: 'user1_id', type: 'string', required: true, description: 'First user identifier' },
          { name: 'user2_id', type: 'string', required: true, description: 'Second user identifier' },
          { name: 'status', type: 'enum', required: true, description: 'Relationship status' },
          { name: 'started_at', type: 'datetime', required: true, description: 'Relationship start date' },
          { name: 'compatibility_score', type: 'number', required: false, description: 'Compatibility score' },
          { name: 'last_activity', type: 'datetime', required: false, description: 'Last activity timestamp' }
        ],
        sampleData: [
          ['relationship_id', 'user1_id', 'user2_id', 'status', 'started_at', 'compatibility_score', 'last_activity'],
          ['rel_001', 'user_123', 'user_456', 'active', '2024-06-15T00:00:00Z', '87.5', '2025-01-07T09:30:00Z'],
          ['rel_002', 'user_789', 'user_012', 'paused', '2024-08-20T00:00:00Z', '72.3', '2025-01-05T14:20:00Z']
        ]
      }
    ];
    setTemplates(sampleTemplates);
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
      completed: 'bg-green-100 text-green-800',
      running: 'bg-blue-100 text-blue-800',
      failed: 'bg-red-100 text-red-800',
      scheduled: 'bg-yellow-100 text-yellow-800',
      paused: 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status) => {
    const icons = {
      completed: CheckCircle,
      running: Clock,
      failed: XCircle,
      scheduled: Calendar,
      paused: Pause
    };
    const Icon = icons[status] || AlertCircle;
    return <Icon className="h-4 w-4" />;
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleString();
  };

  const calculateDuration = (start, end) => {
    if (!start || !end) return 'N/A';
    const duration = new Date(end) - new Date(start);
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const getSuccessRate = (successful, total) => {
    if (total === 0) return 0;
    return ((successful / total) * 100).toFixed(1);
  };

  const allJobs = [...importJobs, ...exportJobs].sort((a, b) => new Date(b.created) - new Date(a.created));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Data Import/Export Tools</h1>
              <p className="mt-2 text-gray-400">Manage data migration, backups, and bulk operations</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Download Template</span>
              </button>
              <button
                onClick={() => setShowCreateModal(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                <Plus className="h-5 w-5" />
                <span>New Job</span>
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
              { id: 'import', label: 'Import Jobs', icon: Upload },
              { id: 'export', label: 'Export Jobs', icon: Download },
              { id: 'templates', label: 'Templates', icon: FileText },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-400'
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
        {/* Import Jobs Tab */}
        {activeTab === 'import' && (
          <div className="space-y-8">
            {/* Import Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Imports</p>
                    <p className="text-3xl font-bold text-white">{importJobs.length}</p>
                  </div>
                  <div className="p-3 bg-emerald-900 rounded-lg">
                    <Upload className="h-6 w-6 text-emerald-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Records Imported</p>
                    <p className="text-3xl font-bold text-white">
                      {formatNumber(importJobs.reduce((sum, job) => sum + job.recordsSuccessful, 0))}
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
                    <p className="text-sm font-medium text-gray-400">Success Rate</p>
                    <p className="text-3xl font-bold text-white">
                      {getSuccessRate(
                        importJobs.reduce((sum, job) => sum + job.recordsSuccessful, 0),
                        importJobs.reduce((sum, job) => sum + job.recordsProcessed, 0)
                      )}%
                    </p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Jobs</p>
                    <p className="text-3xl font-bold text-white">
                      {importJobs.filter(job => job.status === 'running').length}
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Import Jobs List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Import Jobs</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {importJobs.map((job) => (
                  <div key={job.id} className="p-6 bg-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{job.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                            {job.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Source: {job.source}</span>
                          <span>•</span>
                          <span>File: {job.fileName}</span>
                          <span>•</span>
                          <span>Size: {job.fileSize}</span>
                          <span>•</span>
                          <span>Created: {formatTimestamp(job.created)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Download className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Trash2 className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <h5 className="font-medium text-white mb-2">Progress</h5>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Processed</span>
                            <span className="text-white">{formatNumber(job.recordsProcessed)}</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-emerald-500 h-2 rounded-full" 
                              style={{ width: job.status === 'completed' ? '100%' : '65%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Results</h5>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Successful</span>
                            <span className="text-green-400">{formatNumber(job.recordsSuccessful)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Errors</span>
                            <span className="text-red-400">{formatNumber(job.recordsErrors)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Timing</h5>
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>Started: {formatTimestamp(job.started)}</p>
                          <p>Duration: {calculateDuration(job.started, job.completed)}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Success Rate</h5>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-emerald-400">
                            {getSuccessRate(job.recordsSuccessful, job.recordsProcessed)}%
                          </p>
                          <p className="text-xs text-gray-400">of records imported</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Export Jobs Tab */}
        {activeTab === 'export' && (
          <div className="space-y-8">
            {/* Export Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Exports</p>
                    <p className="text-3xl font-bold text-white">{exportJobs.length}</p>
                  </div>
                  <div className="p-3 bg-teal-900 rounded-lg">
                    <Download className="h-6 w-6 text-teal-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Records Exported</p>
                    <p className="text-3xl font-bold text-white">
                      {formatNumber(exportJobs.reduce((sum, job) => sum + job.recordsSuccessful, 0))}
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
                    <p className="text-sm font-medium text-gray-400">Total File Size</p>
                    <p className="text-3xl font-bold text-white">21.2 MB</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Database className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Jobs</p>
                    <p className="text-3xl font-bold text-white">
                      {exportJobs.filter(job => job.status === 'running').length}
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Export Jobs List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Export Jobs</h3>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {exportJobs.map((job) => (
                  <div key={job.id} className="p-6 bg-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-medium text-white">{job.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                            {job.status}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span>Destination: {job.destination}</span>
                          <span>•</span>
                          <span>File: {job.fileName}</span>
                          <span>•</span>
                          <span>Size: {job.fileSize}</span>
                          <span>•</span>
                          <span>Created: {formatTimestamp(job.created)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="p-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                        {job.downloadUrl && (
                          <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Download className="h-5 w-5" />
                          </button>
                        )}
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Trash2 className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <h5 className="font-medium text-white mb-2">Progress</h5>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Processed</span>
                            <span className="text-white">{formatNumber(job.recordsProcessed)}</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <div 
                              className="bg-teal-500 h-2 rounded-full" 
                              style={{ width: job.status === 'completed' ? '100%' : job.status === 'running' ? '45%' : '0%' }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Results</h5>
                        <div className="space-y-1 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Exported</span>
                            <span className="text-green-400">{formatNumber(job.recordsSuccessful)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Errors</span>
                            <span className="text-red-400">{formatNumber(job.recordsErrors)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Timing</h5>
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>Started: {formatTimestamp(job.started)}</p>
                          <p>Duration: {calculateDuration(job.started, job.completed)}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-white mb-2">Download</h5>
                        <div className="text-center">
                          {job.downloadUrl ? (
                            <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                              Download File
                            </button>
                          ) : (
                            <p className="text-sm text-gray-400">Not available</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-8">
            {/* Templates List */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Data Templates</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  <Plus className="h-5 w-5" />
                  <span>Create Template</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <div key={template.id} className="p-6 bg-gray-700 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-medium text-white mb-2">{template.name}</h4>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            template.type === 'import' ? 'bg-blue-900 text-blue-300' : 'bg-green-900 text-green-300'
                          }`}>
                            {template.type}
                          </span>
                          <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs font-medium">
                            {template.format}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">{template.description}</p>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <MoreVertical className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-white mb-2">Fields ({template.fields.length})</h5>
                      <div className="space-y-1 max-h-32 overflow-y-auto">
                        {template.fields.slice(0, 5).map((field, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="text-gray-300">{field.name}</span>
                            <div className="flex items-center space-x-2">
                              <span className="text-gray-400">{field.type}</span>
                              {field.required && <span className="text-red-400">*</span>}
                            </div>
                          </div>
                        ))}
                        {template.fields.length > 5 && (
                          <p className="text-xs text-gray-400">+{template.fields.length - 5} more fields</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                        <Download className="h-4 w-4 inline mr-1" />
                        Download
                      </button>
                      <button className="px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Import/Export Settings</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-white mb-2">Default Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Batch Size</label>
                    <input
                      type="number"
                      defaultValue="1000"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Timeout (seconds)</label>
                    <input
                      type="number"
                      defaultValue="300"
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">Error Handling</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-emerald-500 focus:ring-emerald-600" />
                    <span className="ml-2 text-sm text-gray-300">Continue processing on errors</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" defaultChecked className="rounded border-gray-600 bg-gray-700 text-emerald-500 focus:ring-emerald-600" />
                    <span className="ml-2 text-sm text-gray-300">Generate error reports</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-emerald-500 focus:ring-emerald-600" />
                    <span className="ml-2 text-sm text-gray-300">Send email notifications on completion</span>
                  </label>
                </div>
              </div>
              
              <div className="border-t border-gray-700 pt-6">
                <h4 className="font-medium text-white mb-2">File Storage</h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Storage Location</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg">
                      <option>Local Storage</option>
                      <option>AWS S3</option>
                      <option>Google Cloud Storage</option>
                      <option>Azure Blob Storage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Retention Period (days)</label>
                    <input
                      type="number"
                      defaultValue="30"
                      className="w-32 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Job Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Create New Job</h2>
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
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Type</label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border-2 border-emerald-600 bg-emerald-900 text-emerald-300 rounded-lg">
                    <Upload className="h-8 w-8 mx-auto mb-2" />
                    <span className="block font-medium">Import Data</span>
                  </button>
                  <button className="p-4 border-2 border-gray-600 bg-gray-700 text-gray-300 rounded-lg hover:border-emerald-600 hover:bg-emerald-900 hover:text-emerald-300">
                    <Download className="h-8 w-8 mx-auto mb-2" />
                    <span className="block font-medium">Export Data</span>
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Job Name</label>
                <input
                  type="text"
                  placeholder="e.g., User Data Import"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Data Source</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>CSV File</option>
                  <option>JSON File</option>
                  <option>Excel File</option>
                  <option>Database Connection</option>
                  <option>API Endpoint</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">File Upload</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-400 mb-2">Drag and drop your file here, or click to browse</p>
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                    Choose File
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Template</label>
                <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option value="">Select a template...</option>
                  {templates.filter(t => t.type === 'import').map(template => (
                    <option key={template.id} value={template.id}>{template.name}</option>
                  ))}
                </select>
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
                className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                Create Job
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedJob.name}</h2>
                  <p className="text-gray-400 mt-1">Job Details and Progress</p>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Job Information</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-300">Status</h4>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(selectedJob.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedJob.status)}`}>
                          {selectedJob.status}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">File</h4>
                      <p className="text-sm text-gray-400">{selectedJob.fileName}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Size</h4>
                      <p className="text-sm text-gray-400">{selectedJob.fileSize}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Created</h4>
                      <p className="text-sm text-gray-400">{formatTimestamp(selectedJob.created)}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Progress</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-300">Records Processed</h4>
                      <p className="text-sm text-gray-400">{formatNumber(selectedJob.recordsProcessed)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Successful</h4>
                      <p className="text-sm text-green-400">{formatNumber(selectedJob.recordsSuccessful)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Errors</h4>
                      <p className="text-sm text-red-400">{formatNumber(selectedJob.recordsErrors)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-300">Success Rate</h4>
                      <p className="text-sm text-emerald-400">{getSuccessRate(selectedJob.recordsSuccessful, selectedJob.recordsProcessed)}%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedJob.errors && selectedJob.errors.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Errors ({selectedJob.errors.length})</h3>
                  <div className="bg-gray-700 rounded-lg p-4 max-h-64 overflow-y-auto">
                    <div className="space-y-2">
                      {selectedJob.errors.map((error, index) => (
                        <div key={index} className="flex items-start space-x-3 text-sm">
                          <span className="text-red-400 font-mono">Row {error.row}:</span>
                          <span className="text-gray-300">{error.field}</span>
                          <span className="text-gray-400">-</span>
                          <span className="text-gray-400">{error.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {selectedJob.mapping && Object.keys(selectedJob.mapping).length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Field Mapping</h3>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(selectedJob.mapping).map(([source, target], index) => (
                        <div key={index} className="flex items-center space-x-3 text-sm">
                          <span className="text-gray-300 font-mono">{source}</span>
                          <ArrowRight className="h-4 w-4 text-gray-500" />
                          <span className="text-emerald-400 font-mono">{target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataImportExportTools;

