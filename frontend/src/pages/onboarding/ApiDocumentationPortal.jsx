import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Code, 
  Code2, 
  Copy, 
  Download, 
  ExternalLink, 
  Search, 
  Filter, 
  Play, 
  Pause, 
  RefreshCw, 
  Settings, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight, 
  ChevronLeft, 
  MoreVertical, 
  FileText, 
  File, 
  Folder, 
  FolderOpen, 
  Link, 
  Hash, 
  Tag, 
  Star, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  MessageSquare, 
  Share2, 
  Bookmark, 
  Flag, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Info, 
  HelpCircle, 
  Zap, 
  Activity, 
  Clock, 
  Calendar, 
  User, 
  Users, 
  Globe, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Lock, 
  Unlock, 
  Key, 
  Target, 
  ArrowRight, 
  ArrowLeft, 
  ArrowUp, 
  ArrowDown, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Edit, 
  Edit2, 
  Trash2, 
  Save, 
  Upload, 
  Mail, 
  Phone, 
  Video, 
  Image, 
  Mic, 
  Camera, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Desktop, 
  Watch, 
  Headphones, 
  Speaker, 
  Radio, 
  Tv, 
  Gamepad2, 
  Power, 
  Battery, 
  Plug, 
  Lightbulb, 
  Sun, 
  Moon, 
  Home, 
  Building, 
  Store, 
  Warehouse, 
  Factory, 
  Hospital, 
  School, 
  University, 
  GraduationCap, 
  Book, 
  Newspaper, 
  Archive, 
  Paperclip, 
  Scissors, 
  Clipboard, 
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
  Gauge,
  Speedometer,
  Barometer,
  Compass,
  Level,
  RulerSquare,
  Protractor,
  Dividers,
  Caliper,
  Micrometer,
  Balance,
  Shuffle,
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
  Crosshair,
  Navigation,
  Map,
  MapPin,
  Route,
  Directions,
  Send,
  MailOpen,
  MessageCircle,
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
  Istle,
  Pineapple,
  Banana,
  Coconut,
  Fig,
  Grape,
  Orange,
  Lemon,
  Lime,
  Grapefruit,
  Apple,
  Pear,
  Peach,
  Plum,
  Apricot,
  Strawberry,
  Raspberry,
  Blackberry,
  Blueberry,
  Cranberry,
  Gooseberry,
  Currant,
  Elderberry,
  Mulberry,
  Boysenberry,
  Loganberry,
  Cloudberry,
  Lingonberry,
  Huckleberry,
  Bilberry,
  Whortleberry,
  Dewberry,
  Salmonberry,
  Thimbleberry,
  Wineberry,
  Bearberry,
  Snowberry,
  Partridgeberry,
  Winterberry,
  Chokeberry,
  Serviceberry,
  Juneberry,
  Saskatoon,
  Honeyberry,
  Haskap,
  Goji,
  Acai,
  Maqui,
  Camu,
  Lucuma,
  Cupuacu,
  Jabuticaba,
  Pitanga,
  Guava,
  Passion,
  Mango,
  Papaya,
  Avocado,
  Kiwi,
  Dragon,
  Rambutan,
  Lychee,
  Longan,
  Durian,
  Jackfruit,
  Breadfruit,
  Plantain,
  Yuca,
  Taro,
  Sweet,
  Potato,
  Yam,
  Cassava,
  Turnip,
  Radish,
  Carrot,
  Beet,
  Parsnip,
  Rutabaga,
  Kohlrabi,
  Cabbage,
  Cauliflower,
  Broccoli,
  Brussels,
  Kale,
  Collard,
  Chard,
  Spinach,
  Lettuce,
  Arugula,
  Watercress,
  Endive,
  Radicchio,
  Chicory,
  Escarole,
  Frisee,
  Mache,
  Purslane,
  Sorrel,
  Dandelion,
  Plantain,
  Clover,
  Alfalfa,
  Sprouts,
  Microgreens,
  Herbs,
  Basil,
  Oregano,
  Thyme,
  Rosemary,
  Sage,
  Mint,
  Parsley,
  Cilantro,
  Dill,
  Chives,
  Tarragon,
  Marjoram,
  Savory,
  Lavender,
  Chamomile,
  Balm,
  Bee,
  Bergamot,
  Catnip,
  Fennel,
  Anise,
  Caraway,
  Coriander,
  Cumin,
  Cardamom,
  Cinnamon,
  Clove,
  Nutmeg,
  Mace,
  Allspice,
  Pepper,
  Paprika,
  Chili,
  Cayenne,
  Turmeric,
  Ginger,
  Galangal,
  Lemongrass,
  Kaffir,
  Makrut,
  Thai,
  Curry,
  Fenugreek,
  Mustard,
  Horseradish,
  Wasabi,
  Garlic,
  Onion,
  Shallot,
  Leek,
  Scallion,
  Chive,
  Ramp,
  Wild,
  Bear,
  Elephant,
  Society,
  Ramsons,
  Wood,
  Field,
  Crow,
  Honey,
  Round,
  Headed,
  Three,
  Cornered,
  Sand,
  Keeled,
  Few,
  Flowered,
  German,
  Naples,
  Rose,
  Rosy,
  Golden,
  Yellow,
  Drumstick,
  Allium,
  Blue,
  Globe,
  Persian,
  Ornamental,
  Giant,
  Purple,
  Sensation,
  Hollandicum,
  Aflatunense,
  Giganteum,
  Christophii,
  Persia,
  Schubertii,
  Tumbleweed,
  Caeruleum,
  Azureum,
  Mountain,
  Oreophilum,
  Ostrowskianum,
  Pink,
  Roseum,
  Grandiflorum,
  Rosy,
  Unifolium,
  One,
  Leaf,
  Neapolitanum,
  Daffodil,
  Triquetrum,
  Ursinum,
  Vineale,
  Oleraceum,
  Canadense,
  Drummondii,
  Drummond,
  Cernuum,
  Nodding,
  Stellatum,
  Prairie,
  Textile,
  White,
  Acuminatum,
  Tapertip,
  Macropetalum,
  Largeflower,
  Haematochiton,
  Red,
  Skin,
  Peninsulare,
  Peninsula,
  Munzii,
  Munz,
  Parryi,
  Parry,
  Burlewii,
  Burlew,
  Hickmanii,
  Hickman,
  Hoffmanii,
  Hoffman,
  Sharsmithiae,
  Sharsmith,
  Tuolumnense,
  Rawhide,
  Hill,
  Yosemitense,
  Yosemite,
  Cratericola,
  Crater,
  Lake,
  Robinsonii,
  Robinson,
  Bolanderi,
  Bolander,
  Falcifolium,
  Curved,
  Dichlamydeum,
  Coastal,
  Amplectens,
  Narrowleaf,
  Atrorubens,
  Dark,
  Bigelovii,
  Bigelow,
  Brandegei,
  Brandegee,
  Brevistylum,
  Shortstyle,
  Campanulatum,
  Sierra,
  Cepa,
  Garden,
  Fistulosum,
  Japanese,
  Bunching,
  Chinense,
  Chinese,
  Wakegi,
  Altaicum,
  Altai,
  Galanthum,
  Fragrant,
  Flowered,
  Ramosum,
  Tuberosum,
  Chives,
  Schoenoprasum,
  Sibiricum,
  Siberian,
  Ledebourianum,
  Ledebour,
  Nutans,
  Senescens,
  Lusitanicum,
  Angulosum,
  Mouse,
  Pyrenaicum,
  Pyrenean,
  Narcissiflorum,
  Narcissus,
  Insubricum,
  Insubrian,
  Pendulinum,
  Italian,
  Subhirsutum,
  Hairy,
  Trifoliatum,
  Hidalgo,
  Kunthii,
  Kunth,
  Glandulosum,
  Pacific,
  Validum,
  Swamp,
  Bisceptrum,
  Twincrest,
  Tolmiei,
  Tolmie,
  Fibrillum,
  Fringed,
  Howellii,
  Howell,
  Constrictum,
  Constricted,
  Parvum,
  Small,
  Anceps,
  Keel,
  Fruited,
  Jepsonii,
  Jepson,
  Lacunosum,
  Pitted,
  Obtusum,
  Sanbornii,
  Sanborn,
  Abramsii,
  Abrams,
  Denticulatum,
  Dentate,
  Diabolense,
  Diablo,
  Fimbriatum,
  Hyalinum,
  Paper,
  Lemmonii,
  Lemmon,
  Monticola,
  Platycaule,
  Broadleaf,
  Praecox,
  Early,
  Serratum,
  Serrated,
  Shevockii,
  Shevock,
  Tribracteatum,
  Bracted
} from 'lucide-react';

const ApiDocumentationPortal = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [showTryIt, setShowTryIt] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  // Sample API documentation data
  const apiSections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: BookOpen,
      description: 'Introduction to the Flourish API'
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: Lock,
      description: 'API key and OAuth authentication'
    },
    {
      id: 'users',
      title: 'Users',
      icon: Users,
      description: 'User management endpoints'
    },
    {
      id: 'relationships',
      title: 'Relationships',
      icon: Heart,
      description: 'Relationship data and management'
    },
    {
      id: 'assessments',
      title: 'Assessments',
      icon: Target,
      description: 'Relationship assessments and scoring'
    },
    {
      id: 'goals',
      title: 'Goals',
      icon: Flag,
      description: 'Goal setting and tracking'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: Activity,
      description: 'Analytics and reporting data'
    },
    {
      id: 'webhooks',
      title: 'Webhooks',
      icon: Zap,
      description: 'Real-time event notifications'
    },
    {
      id: 'errors',
      title: 'Error Codes',
      icon: AlertCircle,
      description: 'Error handling and status codes'
    }
  ];

  const endpoints = {
    users: [
      {
        id: 'get-user',
        method: 'GET',
        path: '/v1/users/{id}',
        title: 'Get User',
        description: 'Retrieve a specific user by ID',
        parameters: [
          { name: 'id', type: 'string', required: true, description: 'User ID' }
        ],
        responses: {
          200: { description: 'User data retrieved successfully' },
          404: { description: 'User not found' },
          401: { description: 'Unauthorized' }
        }
      },
      {
        id: 'create-user',
        method: 'POST',
        path: '/v1/users',
        title: 'Create User',
        description: 'Create a new user account',
        parameters: [
          { name: 'email', type: 'string', required: true, description: 'User email address' },
          { name: 'firstName', type: 'string', required: true, description: 'User first name' },
          { name: 'lastName', type: 'string', required: true, description: 'User last name' },
          { name: 'password', type: 'string', required: true, description: 'User password' }
        ],
        responses: {
          201: { description: 'User created successfully' },
          400: { description: 'Invalid input data' },
          409: { description: 'User already exists' }
        }
      },
      {
        id: 'update-user',
        method: 'PUT',
        path: '/v1/users/{id}',
        title: 'Update User',
        description: 'Update user information',
        parameters: [
          { name: 'id', type: 'string', required: true, description: 'User ID' },
          { name: 'firstName', type: 'string', required: false, description: 'User first name' },
          { name: 'lastName', type: 'string', required: false, description: 'User last name' },
          { name: 'email', type: 'string', required: false, description: 'User email address' }
        ],
        responses: {
          200: { description: 'User updated successfully' },
          404: { description: 'User not found' },
          400: { description: 'Invalid input data' }
        }
      }
    ],
    relationships: [
      {
        id: 'get-relationships',
        method: 'GET',
        path: '/v1/relationships',
        title: 'List Relationships',
        description: 'Get all relationships for the authenticated user',
        parameters: [
          { name: 'limit', type: 'integer', required: false, description: 'Number of results to return' },
          { name: 'offset', type: 'integer', required: false, description: 'Number of results to skip' }
        ],
        responses: {
          200: { description: 'Relationships retrieved successfully' },
          401: { description: 'Unauthorized' }
        }
      },
      {
        id: 'create-relationship',
        method: 'POST',
        path: '/v1/relationships',
        title: 'Create Relationship',
        description: 'Create a new relationship',
        parameters: [
          { name: 'partnerId', type: 'string', required: true, description: 'Partner user ID' },
          { name: 'type', type: 'string', required: true, description: 'Relationship type' },
          { name: 'startDate', type: 'string', required: false, description: 'Relationship start date' }
        ],
        responses: {
          201: { description: 'Relationship created successfully' },
          400: { description: 'Invalid input data' },
          409: { description: 'Relationship already exists' }
        }
      }
    ],
    assessments: [
      {
        id: 'get-assessments',
        method: 'GET',
        path: '/v1/assessments',
        title: 'List Assessments',
        description: 'Get available relationship assessments',
        parameters: [
          { name: 'category', type: 'string', required: false, description: 'Assessment category' },
          { name: 'difficulty', type: 'string', required: false, description: 'Assessment difficulty level' }
        ],
        responses: {
          200: { description: 'Assessments retrieved successfully' },
          401: { description: 'Unauthorized' }
        }
      },
      {
        id: 'submit-assessment',
        method: 'POST',
        path: '/v1/assessments/{id}/submit',
        title: 'Submit Assessment',
        description: 'Submit assessment responses',
        parameters: [
          { name: 'id', type: 'string', required: true, description: 'Assessment ID' },
          { name: 'responses', type: 'array', required: true, description: 'Assessment responses' }
        ],
        responses: {
          200: { description: 'Assessment submitted successfully' },
          400: { description: 'Invalid responses' },
          404: { description: 'Assessment not found' }
        }
      }
    ]
  };

  const codeExamples = {
    javascript: {
      'get-user': `// Get user by ID
const response = await fetch('https://api.flourish.app/v1/users/123', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const user = await response.json();
console.log(user);`,
      'create-user': `// Create a new user
const response = await fetch('https://api.flourish.app/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'john@example.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'securePassword123'
  })
});

const newUser = await response.json();
console.log(newUser);`
    },
    python: {
      'get-user': `# Get user by ID
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.flourish.app/v1/users/123', headers=headers)
user = response.json()
print(user)`,
      'create-user': `# Create a new user
import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'email': 'john@example.com',
    'firstName': 'John',
    'lastName': 'Doe',
    'password': 'securePassword123'
}

response = requests.post('https://api.flourish.app/v1/users', headers=headers, json=data)
new_user = response.json()
print(new_user)`
    },
    curl: {
      'get-user': `# Get user by ID
curl -X GET "https://api.flourish.app/v1/users/123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      'create-user': `# Create a new user
curl -X POST "https://api.flourish.app/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "password": "securePassword123"
  }'`
    }
  };

  const getMethodColor = (method) => {
    const colors = {
      'GET': 'bg-green-100 text-green-800',
      'POST': 'bg-blue-100 text-blue-800',
      'PUT': 'bg-yellow-100 text-yellow-800',
      'DELETE': 'bg-red-100 text-red-800',
      'PATCH': 'bg-purple-100 text-purple-800'
    };
    return colors[method] || 'bg-gray-100 text-gray-800';
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const tryEndpoint = async (endpoint) => {
    setShowTryIt(true);
    // Simulate API call
    setTimeout(() => {
      setApiResponse({
        status: 200,
        data: {
          id: '123',
          email: 'john@example.com',
          firstName: 'John',
          lastName: 'Doe',
          createdAt: '2025-01-07T10:30:00Z',
          updatedAt: '2025-01-07T10:30:00Z'
        }
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">API Documentation Portal</h1>
              <p className="mt-2 text-gray-400">Interactive documentation with code examples and testing tools</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <Download className="h-5 w-5" />
                <span>Download SDK</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                <Key className="h-5 w-5" />
                <span>Get API Key</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-white mb-4">API Reference</h3>
              <nav className="space-y-2">
                {apiSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-900 text-blue-300'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-gray-200'
                    }`}
                  >
                    <section.icon className="h-5 w-5" />
                    <div>
                      <p className="font-medium">{section.title}</p>
                      <p className="text-xs opacity-75">{section.description}</p>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview Section */}
            {activeSection === 'overview' && (
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Flourish API Overview</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">
                      The Flourish API provides programmatic access to relationship data, assessments, goals, and analytics. 
                      Build powerful integrations and applications that help couples strengthen their relationships.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-white mb-4">Getting Started</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-700 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-blue-900 rounded-lg">
                            <Key className="h-6 w-6 text-blue-400" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">1. Get API Key</h4>
                        </div>
                        <p className="text-gray-300">
                          Sign up for a developer account and generate your API key from the dashboard.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-green-900 rounded-lg">
                            <Code className="h-6 w-6 text-green-400" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">2. Make First Call</h4>
                        </div>
                        <p className="text-gray-300">
                          Use your API key to authenticate and make your first API request.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-purple-900 rounded-lg">
                            <BookOpen className="h-6 w-6 text-purple-400" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">3. Explore Docs</h4>
                        </div>
                        <p className="text-gray-300">
                          Browse the comprehensive documentation and interactive examples.
                        </p>
                      </div>
                      
                      <div className="bg-gray-700 rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-yellow-900 rounded-lg">
                            <Zap className="h-6 w-6 text-yellow-400" />
                          </div>
                          <h4 className="text-lg font-semibold text-white">4. Build & Deploy</h4>
                        </div>
                        <p className="text-gray-300">
                          Create amazing applications that help couples build stronger relationships.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">Base URL</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-6">
                      <code className="text-green-400">https://api.flourish.app</code>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">Rate Limits</h3>
                    <div className="bg-gray-700 rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-blue-400">1,000</p>
                          <p className="text-sm text-gray-400">Requests per hour</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-green-400">10,000</p>
                          <p className="text-sm text-gray-400">Requests per day</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-purple-400">100,000</p>
                          <p className="text-sm text-gray-400">Requests per month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Authentication Section */}
            {activeSection === 'authentication' && (
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Authentication</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">
                      The Flourish API uses API keys for authentication. Include your API key in the Authorization header 
                      of every request.
                    </p>

                    <h3 className="text-xl font-semibold text-white mb-4">API Key Authentication</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-6">
                      <pre className="text-green-400">
{`Authorization: Bearer YOUR_API_KEY`}
                      </pre>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-4">Example Request</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-6">
                      <pre className="text-green-400">
{`curl -X GET "https://api.flourish.app/v1/users/me" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
                      </pre>
                    </div>

                    <div className="bg-blue-900 border border-blue-700 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Info className="h-5 w-5 text-blue-400 mt-0.5" />
                        <div>
                          <p className="text-blue-300 font-medium">Security Note</p>
                          <p className="text-blue-200 text-sm">
                            Keep your API key secure and never expose it in client-side code. 
                            Use environment variables or secure configuration management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Endpoint Sections */}
            {(activeSection === 'users' || activeSection === 'relationships' || activeSection === 'assessments') && (
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 capitalize">{activeSection}</h2>
                  
                  {/* Endpoints List */}
                  <div className="space-y-6">
                    {endpoints[activeSection]?.map((endpoint) => (
                      <div key={endpoint.id} className="bg-gray-700 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                              {endpoint.method}
                            </span>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{endpoint.title}</h3>
                              <code className="text-blue-400">{endpoint.path}</code>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => tryEndpoint(endpoint)}
                              className="flex items-center space-x-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                            >
                              <Play className="h-4 w-4" />
                              <span>Try It</span>
                            </button>
                            <button 
                              onClick={() => setSelectedEndpoint(selectedEndpoint === endpoint.id ? null : endpoint.id)}
                              className="p-2 bg-gray-600 rounded-lg hover:bg-gray-500 transition-colors"
                            >
                              {selectedEndpoint === endpoint.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{endpoint.description}</p>

                        {selectedEndpoint === endpoint.id && (
                          <div className="space-y-6">
                            {/* Parameters */}
                            <div>
                              <h4 className="text-white font-semibold mb-3">Parameters</h4>
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-600">
                                  <thead>
                                    <tr>
                                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Name</th>
                                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Type</th>
                                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Required</th>
                                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">Description</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-gray-600">
                                    {endpoint.parameters.map((param, index) => (
                                      <tr key={index}>
                                        <td className="px-4 py-2 text-sm font-mono text-blue-400">{param.name}</td>
                                        <td className="px-4 py-2 text-sm text-gray-300">{param.type}</td>
                                        <td className="px-4 py-2 text-sm">
                                          <span className={`px-2 py-1 rounded text-xs ${param.required ? 'bg-red-900 text-red-300' : 'bg-gray-600 text-gray-300'}`}>
                                            {param.required ? 'Required' : 'Optional'}
                                          </span>
                                        </td>
                                        <td className="px-4 py-2 text-sm text-gray-300">{param.description}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>

                            {/* Code Examples */}
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-white font-semibold">Code Examples</h4>
                                <select
                                  value={selectedLanguage}
                                  onChange={(e) => setSelectedLanguage(e.target.value)}
                                  className="px-3 py-1 bg-gray-600 border border-gray-500 rounded text-sm"
                                >
                                  <option value="javascript">JavaScript</option>
                                  <option value="python">Python</option>
                                  <option value="curl">cURL</option>
                                </select>
                              </div>
                              <div className="relative">
                                <div className="bg-gray-900 rounded-lg p-4">
                                  <pre className="text-green-400 text-sm overflow-x-auto">
                                    {codeExamples[selectedLanguage]?.[endpoint.id] || 'Code example not available'}
                                  </pre>
                                </div>
                                <button
                                  onClick={() => copyToClipboard(codeExamples[selectedLanguage]?.[endpoint.id] || '')}
                                  className="absolute top-2 right-2 p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors"
                                >
                                  <Copy className="h-4 w-4 text-gray-400" />
                                </button>
                              </div>
                            </div>

                            {/* Responses */}
                            <div>
                              <h4 className="text-white font-semibold mb-3">Responses</h4>
                              <div className="space-y-3">
                                {Object.entries(endpoint.responses).map(([code, response]) => (
                                  <div key={code} className="flex items-center space-x-4">
                                    <span className={`px-3 py-1 rounded text-sm font-medium ${
                                      code.startsWith('2') ? 'bg-green-900 text-green-300' :
                                      code.startsWith('4') ? 'bg-yellow-900 text-yellow-300' :
                                      'bg-red-900 text-red-300'
                                    }`}>
                                      {code}
                                    </span>
                                    <span className="text-gray-300">{response.description}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Try It Section */}
                            {showTryIt && (
                              <div className="bg-gray-600 rounded-lg p-4">
                                <h4 className="text-white font-semibold mb-3">API Response</h4>
                                {apiResponse ? (
                                  <div className="bg-gray-900 rounded p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                      <span className="text-green-400">Status: {apiResponse.status}</span>
                                    </div>
                                    <pre className="text-green-400 text-sm overflow-x-auto">
                                      {JSON.stringify(apiResponse.data, null, 2)}
                                    </pre>
                                  </div>
                                ) : (
                                  <div className="flex items-center space-x-2 text-gray-400">
                                    <RefreshCw className="h-4 w-4 animate-spin" />
                                    <span>Making request...</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Error Codes Section */}
            {activeSection === 'errors' && (
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Error Codes</h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 mb-6">
                      The Flourish API uses conventional HTTP response codes to indicate the success or failure of an API request.
                    </p>

                    <div className="space-y-4">
                      {[
                        { code: '200', title: 'OK', description: 'The request was successful' },
                        { code: '201', title: 'Created', description: 'The resource was successfully created' },
                        { code: '400', title: 'Bad Request', description: 'The request was invalid or cannot be served' },
                        { code: '401', title: 'Unauthorized', description: 'The request requires authentication' },
                        { code: '403', title: 'Forbidden', description: 'The server understood the request but refuses to authorize it' },
                        { code: '404', title: 'Not Found', description: 'The requested resource could not be found' },
                        { code: '429', title: 'Too Many Requests', description: 'Rate limit exceeded' },
                        { code: '500', title: 'Internal Server Error', description: 'An error occurred on the server' }
                      ].map((error) => (
                        <div key={error.code} className="bg-gray-700 rounded-lg p-4">
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 rounded text-sm font-medium ${
                              error.code.startsWith('2') ? 'bg-green-900 text-green-300' :
                              error.code.startsWith('4') ? 'bg-yellow-900 text-yellow-300' :
                              'bg-red-900 text-red-300'
                            }`}>
                              {error.code}
                            </span>
                            <div>
                              <h3 className="text-white font-semibold">{error.title}</h3>
                              <p className="text-gray-300">{error.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocumentationPortal;

