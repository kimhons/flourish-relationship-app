import React, { useState, useEffect, useRef } from 'react';
import { 
  Workflow, 
  Plus, 
  Minus, 
  X, 
  Check, 
  Play, 
  Pause, 
  Stop, 
  Save, 
  Upload, 
  Download, 
  Copy, 
  Edit, 
  Trash2, 
  Settings, 
  Search, 
  Filter, 
  RefreshCw, 
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
  Code, 
  Code2, 
  Database, 
  Server, 
  Cloud, 
  Globe, 
  Zap, 
  Activity, 
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
  Link, 
  Unlink, 
  Lock, 
  Unlock, 
  Key, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  Info, 
  HelpCircle, 
  ExternalLink, 
  Target, 
  Flag, 
  Tag, 
  Hash, 
  AtSign, 
  Percent, 
  DollarSign, 
  Euro, 
  PoundSterling, 
  Yen, 
  Bitcoin, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Gauge, 
  Speedometer, 
  Timer, 
  Stopwatch, 
  Alarm, 
  Bell, 
  BellOff, 
  Volume2, 
  VolumeX, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
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
  Joystick, 
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
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
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
  FolderOpen,
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
  LocationOff,
  Crosshairs,
  Target,
  Bullseye,
  Dartboard,
  Archery,
  Bow,
  Arrow,
  Sword,
  Shield,
  Helmet,
  Armor,
  Crown,
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
  Date,
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
  Cherry,
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
  Star,
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
  Nettle,
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
  Lemon,
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
  Lime,
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
  Garlic,
  Bear,
  Elephant,
  Society,
  Ramsons,
  Wood,
  Garlic,
  Field,
  Garlic,
  Crow,
  Garlic,
  Honey,
  Garlic,
  Round,
  Headed,
  Leek,
  Three,
  Cornered,
  Leek,
  Sand,
  Leek,
  Keeled,
  Garlic,
  Few,
  Flowered,
  Leek,
  German,
  Garlic,
  Naples,
  Garlic,
  Rose,
  Garlic,
  Rosy,
  Flowered,
  Garlic,
  Golden,
  Garlic,
  Yellow,
  Flowered,
  Garlic,
  Drumstick,
  Allium,
  Blue,
  Globe,
  Onion,
  Persian,
  Onion,
  Ornamental,
  Onion,
  Giant,
  Allium,
  Purple,
  Sensation,
  Allium,
  Hollandicum,
  Purple,
  Allium,
  Aflatunense,
  Purple,
  Allium,
  Giganteum,
  Giant,
  Allium,
  Christophii,
  Star,
  Of,
  Persia,
  Allium,
  Schubertii,
  Tumbleweed,
  Onion,
  Allium,
  Caeruleum,
  Blue,
  Allium,
  Azureum,
  Mountain,
  Allium,
  Oreophilum,
  Ostrowskianum,
  Pink,
  Allium,
  Roseum,
  Grandiflorum,
  Rosy,
  Garlic,
  Allium,
  Unifolium,
  One,
  Leaf,
  Onion,
  Allium,
  Neapolitanum,
  Daffodil,
  Garlic,
  Allium,
  Triquetrum,
  Three,
  Cornered,
  Garlic,
  Allium,
  Ursinum,
  Wild,
  Garlic,
  Allium,
  Vineale,
  Wild,
  Garlic,
  Allium,
  Oleraceum,
  Field,
  Garlic,
  Allium,
  Canadense,
  Wild,
  Onion,
  Allium,
  Drummondii,
  Drummond,
  Onion,
  Allium,
  Cernuum,
  Nodding,
  Onion,
  Allium,
  Stellatum,
  Prairie,
  Onion,
  Allium,
  Textile,
  White,
  Wild,
  Onion,
  Allium,
  Acuminatum,
  Tapertip,
  Onion,
  Allium,
  Macropetalum,
  Largeflower,
  Wild,
  Onion,
  Allium,
  Haematochiton,
  Red,
  Skin,
  Onion,
  Allium,
  Peninsulare,
  Peninsula,
  Onion,
  Allium,
  Munzii,
  Munz,
  Onion,
  Allium,
  Parryi,
  Parry,
  Onion,
  Allium,
  Burlewii,
  Burlew,
  Onion,
  Allium,
  Hickmanii,
  Hickman,
  Onion,
  Allium,
  Hoffmanii,
  Hoffman,
  Onion,
  Allium,
  Sharsmithiae,
  Sharsmith,
  Onion,
  Allium,
  Tuolumnense,
  Rawhide,
  Hill,
  Onion,
  Allium,
  Yosemitense,
  Yosemite,
  Onion,
  Allium,
  Cratericola,
  Crater,
  Lake,
  Onion,
  Allium,
  Robinsonii,
  Robinson,
  Onion,
  Allium,
  Bolanderi,
  Bolander,
  Onion,
  Allium,
  Falcifolium,
  Curved,
  Leaf,
  Onion,
  Allium,
  Dichlamydeum,
  Coastal,
  Onion,
  Allium,
  Unifolium,
  One,
  Leaf,
  Onion,
  Allium,
  Amplectens,
  Narrowleaf,
  Wild,
  Onion,
  Allium,
  Atrorubens,
  Dark,
  Red,
  Onion,
  Allium,
  Bigelovii,
  Bigelow,
  Onion,
  Allium,
  Brandegei,
  Brandegee,
  Onion,
  Allium,
  Brevistylum,
  Shortstyle,
  Onion,
  Allium,
  Campanulatum,
  Sierra,
  Onion,
  Allium,
  Cepa,
  Garden,
  Onion,
  Allium,
  Fistulosum,
  Japanese,
  Bunching,
  Onion,
  Allium,
  Chinense,
  Chinese,
  Onion,
  Allium,
  Wakegi,
  Japanese,
  Bunching,
  Onion,
  Allium,
  Altaicum,
  Altai,
  Onion,
  Allium,
  Galanthum,
  Fragrant,
  Flowered,
  Garlic,
  Allium,
  Ramosum,
  Fragrant,
  Flowered,
  Garlic,
  Allium,
  Tuberosum,
  Garlic,
  Chives,
  Allium,
  Schoenoprasum,
  Chives,
  Allium,
  Sibiricum,
  Siberian,
  Chives,
  Allium,
  Ledebourianum,
  Ledebour,
  Onion,
  Allium,
  Nutans,
  Siberian,
  Chives,
  Allium,
  Senescens,
  German,
  Garlic,
  Allium,
  Lusitanicum,
  Mountain,
  Garlic,
  Allium,
  Angulosum,
  Mouse,
  Garlic,
  Allium,
  Pyrenaicum,
  Pyrenean,
  Garlic,
  Allium,
  Narcissiflorum,
  Narcissus,
  Flowered,
  Onion,
  Allium,
  Insubricum,
  Insubrian,
  Garlic,
  Allium,
  Pendulinum,
  Italian,
  Garlic,
  Allium,
  Subhirsutum,
  Hairy,
  Garlic,
  Allium,
  Trifoliatum,
  Hidalgo,
  Onion,
  Allium,
  Kunthii,
  Kunth,
  Onion,
  Allium,
  Glandulosum,
  Pacific,
  Onion,
  Allium,
  Validum,
  Swamp,
  Onion,
  Allium,
  Bisceptrum,
  Twincrest,
  Onion,
  Allium,
  Tolmiei,
  Tolmie,
  Onion,
  Allium,
  Fibrillum,
  Fringed,
  Onion,
  Allium,
  Howellii,
  Howell,
  Onion,
  Allium,
  Constrictum,
  Constricted,
  Onion,
  Allium,
  Parvum,
  Small,
  Onion,
  Allium,
  Anceps,
  Keel,
  Fruited,
  Onion,
  Allium,
  Jepsonii,
  Jepson,
  Onion,
  Allium,
  Lacunosum,
  Pitted,
  Onion,
  Allium,
  Obtusum,
  Red,
  Sierra,
  Onion,
  Allium,
  Sanbornii,
  Sanborn,
  Onion,
  Allium,
  Abramsii,
  Abrams,
  Onion,
  Allium,
  Denticulatum,
  Dentate,
  Onion,
  Allium,
  Diabolense,
  Diablo,
  Onion,
  Allium,
  Fimbriatum,
  Fringed,
  Onion,
  Allium,
  Hyalinum,
  Paper,
  Flowered,
  Onion,
  Allium,
  Lemmonii,
  Lemmon,
  Onion,
  Allium,
  Monticola,
  Red,
  Mountain,
  Onion,
  Allium,
  Platycaule,
  Broadleaf,
  Wild,
  Onion,
  Allium,
  Praecox,
  Early,
  Onion,
  Allium,
  Serratum,
  Serrated,
  Onion,
  Allium,
  Shevockii,
  Shevock,
  Onion,
  Allium,
  Tribracteatum,
  Three,
  Bracted,
  Onion,
  Allium,
  Tuolumnense,
  Rawhide,
  Hill,
  Onion,
  Allium,
  Yosemitense,
  Yosemite,
  Onion
} from 'lucide-react';

const CustomIntegrationBuilder = () => {
  const [activeTab, setActiveTab] = useState('builder');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [workflowNodes, setWorkflowNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isBuilding, setIsBuilding] = useState(false);
  const [testResults, setTestResults] = useState({});
  const canvasRef = useRef(null);

  // Sample integration templates
  const integrationTemplates = [
    {
      id: 'crm-sync',
      name: 'CRM Data Synchronization',
      description: 'Sync user data between Flourish and popular CRM systems',
      category: 'CRM',
      icon: Users,
      complexity: 'Medium',
      estimatedTime: '30 minutes',
      triggers: ['User Registration', 'Profile Update', 'Relationship Status Change'],
      actions: ['Create Contact', 'Update Contact', 'Add to Campaign'],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM']
    },
    {
      id: 'email-automation',
      name: 'Email Marketing Automation',
      description: 'Automate email campaigns based on relationship milestones',
      category: 'Marketing',
      icon: Mail,
      complexity: 'Easy',
      estimatedTime: '15 minutes',
      triggers: ['Milestone Reached', 'Assessment Completed', 'Goal Achieved'],
      actions: ['Send Email', 'Add to List', 'Update Tags'],
      integrations: ['Mailchimp', 'Constant Contact', 'SendGrid', 'Campaign Monitor']
    },
    {
      id: 'calendar-sync',
      name: 'Calendar Integration',
      description: 'Sync relationship events and date nights with calendar apps',
      category: 'Productivity',
      icon: Calendar,
      complexity: 'Easy',
      estimatedTime: '20 minutes',
      triggers: ['Date Planned', 'Event Created', 'Reminder Set'],
      actions: ['Create Event', 'Send Invitation', 'Set Reminder'],
      integrations: ['Google Calendar', 'Outlook', 'Apple Calendar', 'Calendly']
    },
    {
      id: 'social-sharing',
      name: 'Social Media Integration',
      description: 'Share relationship achievements and milestones on social platforms',
      category: 'Social',
      icon: Share2,
      complexity: 'Medium',
      estimatedTime: '25 minutes',
      triggers: ['Achievement Unlocked', 'Anniversary', 'Milestone Reached'],
      actions: ['Post Update', 'Share Photo', 'Send Message'],
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn']
    },
    {
      id: 'payment-processing',
      name: 'Payment Gateway Integration',
      description: 'Process payments for premium features and coaching sessions',
      category: 'Finance',
      icon: DollarSign,
      complexity: 'Hard',
      estimatedTime: '45 minutes',
      triggers: ['Subscription Upgrade', 'Session Booking', 'Product Purchase'],
      actions: ['Process Payment', 'Send Receipt', 'Update Subscription'],
      integrations: ['Stripe', 'PayPal', 'Square', 'Braintree']
    },
    {
      id: 'analytics-tracking',
      name: 'Analytics & Tracking',
      description: 'Track user behavior and relationship progress across platforms',
      category: 'Analytics',
      icon: BarChart3,
      complexity: 'Medium',
      estimatedTime: '35 minutes',
      triggers: ['Page View', 'Button Click', 'Form Submit', 'Goal Complete'],
      actions: ['Track Event', 'Update Properties', 'Send Data'],
      integrations: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Segment']
    }
  ];

  // Sample workflow nodes
  const nodeTypes = [
    {
      type: 'trigger',
      name: 'Trigger',
      icon: Zap,
      color: 'bg-green-500',
      description: 'Start point for the workflow'
    },
    {
      type: 'condition',
      name: 'Condition',
      icon: Target,
      color: 'bg-yellow-500',
      description: 'Decision point based on data'
    },
    {
      type: 'action',
      name: 'Action',
      icon: Activity,
      color: 'bg-blue-500',
      description: 'Perform an operation'
    },
    {
      type: 'delay',
      name: 'Delay',
      icon: Clock,
      color: 'bg-purple-500',
      description: 'Wait for specified time'
    },
    {
      type: 'webhook',
      name: 'Webhook',
      icon: Globe,
      color: 'bg-red-500',
      description: 'Send HTTP request'
    },
    {
      type: 'database',
      name: 'Database',
      icon: Database,
      color: 'bg-indigo-500',
      description: 'Read/write data'
    },
    {
      type: 'email',
      name: 'Email',
      icon: Mail,
      color: 'bg-pink-500',
      description: 'Send email notification'
    },
    {
      type: 'transform',
      name: 'Transform',
      icon: Code,
      color: 'bg-orange-500',
      description: 'Modify data format'
    }
  ];

  // Sample existing integrations
  const existingIntegrations = [
    {
      id: 'int-001',
      name: 'Salesforce Contact Sync',
      status: 'Active',
      lastRun: '2025-01-07T10:30:00Z',
      executions: 1247,
      successRate: 98.5,
      avgDuration: 2.3,
      template: 'crm-sync'
    },
    {
      id: 'int-002',
      name: 'Mailchimp Campaign Automation',
      status: 'Active',
      lastRun: '2025-01-07T09:45:00Z',
      executions: 3456,
      successRate: 99.2,
      avgDuration: 1.8,
      template: 'email-automation'
    },
    {
      id: 'int-003',
      name: 'Google Calendar Sync',
      status: 'Paused',
      lastRun: '2025-01-06T16:20:00Z',
      executions: 567,
      successRate: 97.8,
      avgDuration: 1.2,
      template: 'calendar-sync'
    },
    {
      id: 'int-004',
      name: 'Stripe Payment Processing',
      status: 'Active',
      lastRun: '2025-01-07T11:15:00Z',
      executions: 234,
      successRate: 99.8,
      avgDuration: 3.7,
      template: 'payment-processing'
    }
  ];

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

  const addNode = (nodeType) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type: nodeType.type,
      name: nodeType.name,
      icon: nodeType.icon,
      color: nodeType.color,
      x: Math.random() * 400 + 100,
      y: Math.random() * 300 + 100,
      config: {}
    };
    setWorkflowNodes([...workflowNodes, newNode]);
  };

  const startBuild = () => {
    setIsBuilding(true);
    setTimeout(() => {
      setIsBuilding(false);
      setTestResults({
        success: true,
        duration: 2.3,
        steps: workflowNodes.length,
        errors: 0
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Custom Integration Builder</h1>
              <p className="mt-2 text-gray-400">Create powerful integrations with visual workflow designer and code generation</p>
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
                <span>New Integration</span>
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
              { id: 'builder', label: 'Visual Builder', icon: Workflow },
              { id: 'templates', label: 'Templates', icon: Package },
              { id: 'integrations', label: 'My Integrations', icon: GitBranch },
              { id: 'testing', label: 'Testing & Debug', icon: Bug },
              { id: 'code', label: 'Code Generator', icon: Code },
              { id: 'marketplace', label: 'Marketplace', icon: Store },
              { id: 'documentation', label: 'Documentation', icon: BookOpen }
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
        {/* Visual Builder Tab */}
        {activeTab === 'builder' && (
          <div className="space-y-8">
            {/* Builder Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold text-white">Workflow Designer</h2>
                <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                  {workflowNodes.length} nodes
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={startBuild}
                  disabled={isBuilding || workflowNodes.length === 0}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                >
                  <Play className={`h-5 w-5 ${isBuilding ? 'animate-spin' : ''}`} />
                  <span>{isBuilding ? 'Building...' : 'Test Workflow'}</span>
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
              {/* Node Palette */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Node Palette</h3>
                <div className="space-y-3">
                  {nodeTypes.map((nodeType) => (
                    <button
                      key={nodeType.type}
                      onClick={() => addNode(nodeType)}
                      className="w-full flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <div className={`p-2 rounded-lg ${nodeType.color}`}>
                        <nodeType.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium">{nodeType.name}</p>
                        <p className="text-xs text-gray-400">{nodeType.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Canvas */}
              <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Workflow Canvas</h3>
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
                  {workflowNodes.length === 0 ? (
                    <div className="text-center">
                      <Workflow className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400">Drag nodes from the palette to start building</p>
                    </div>
                  ) : (
                    <div className="absolute inset-0 p-4">
                      {workflowNodes.map((node) => (
                        <div
                          key={node.id}
                          className={`absolute p-3 bg-gray-600 rounded-lg border-2 ${
                            selectedNode === node.id ? 'border-indigo-500' : 'border-gray-500'
                          } cursor-move`}
                          style={{ left: node.x, top: node.y }}
                          onClick={() => setSelectedNode(node.id)}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`p-1 rounded ${node.color}`}>
                              <node.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-white text-sm font-medium">{node.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Properties Panel */}
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Properties</h3>
                {selectedNode ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Node Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter node name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                      <textarea
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        rows="3"
                        placeholder="Enter description"
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Configuration</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          placeholder="Key"
                        />
                        <input
                          type="text"
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                      <Save className="h-5 w-5" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                ) : (
                  <div className="text-center text-gray-400">
                    <Settings className="h-12 w-12 mx-auto mb-4 text-gray-500" />
                    <p>Select a node to edit properties</p>
                  </div>
                )}
              </div>
            </div>

            {/* Test Results */}
            {testResults.success && (
              <div className="bg-green-900 border border-green-700 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">Test Successful</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-green-300">Duration</p>
                    <p className="text-xl font-bold text-white">{testResults.duration}s</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-300">Steps Executed</p>
                    <p className="text-xl font-bold text-white">{testResults.steps}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-300">Errors</p>
                    <p className="text-xl font-bold text-white">{testResults.errors}</p>
                  </div>
                  <div>
                    <p className="text-sm text-green-300">Success Rate</p>
                    <p className="text-xl font-bold text-white">100%</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Templates Tab */}
        {activeTab === 'templates' && (
          <div className="space-y-8">
            {/* Template Categories */}
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-white">Integration Templates</h2>
              <div className="flex items-center space-x-2">
                {['All', 'CRM', 'Marketing', 'Productivity', 'Social', 'Finance', 'Analytics'].map((category) => (
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationTemplates.map((template) => (
                <div key={template.id} className="bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-indigo-900 rounded-lg">
                        <template.icon className="h-6 w-6 text-indigo-400" />
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
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-400">{template.estimatedTime}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Triggers:</p>
                      <div className="flex flex-wrap gap-1">
                        {template.triggers.slice(0, 2).map((trigger, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                            {trigger}
                          </span>
                        ))}
                        {template.triggers.length > 2 && (
                          <span className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                            +{template.triggers.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-300 mb-1">Integrations:</p>
                      <div className="flex flex-wrap gap-1">
                        {template.integrations.slice(0, 3).map((integration, index) => (
                          <span key={index} className="px-2 py-1 bg-indigo-900 rounded text-xs text-indigo-300">
                            {integration}
                          </span>
                        ))}
                        {template.integrations.length > 3 && (
                          <span className="px-2 py-1 bg-indigo-900 rounded text-xs text-indigo-300">
                            +{template.integrations.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => setSelectedTemplate(template)}
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

        {/* My Integrations Tab */}
        {activeTab === 'integrations' && (
          <div className="space-y-8">
            {/* Integration Management */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">My Integrations</h2>
                <p className="text-gray-400">Manage and monitor your custom integrations</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    className="px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Filter className="h-5 w-5" />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            {/* Integrations List */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Integration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Last Run</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Executions</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Avg Duration</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {existingIntegrations.map((integration) => (
                      <tr key={integration.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="p-2 bg-indigo-900 rounded-lg mr-3">
                              <Workflow className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{integration.name}</div>
                              <div className="text-sm text-gray-400">{integration.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                            {integration.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {formatDate(integration.lastRun)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {integration.executions.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`font-semibold ${integration.successRate >= 99 ? 'text-green-400' : integration.successRate >= 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {integration.successRate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                          {integration.avgDuration}s
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-400 hover:text-blue-300">
                              <Play className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-300">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-green-400 hover:text-green-300">
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

        {/* Testing & Debug Tab */}
        {activeTab === 'testing' && (
          <div className="space-y-8">
            {/* Testing Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Integration Testing</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Select Integration</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                      <option>Salesforce Contact Sync</option>
                      <option>Mailchimp Campaign Automation</option>
                      <option>Google Calendar Sync</option>
                      <option>Stripe Payment Processing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Test Data</label>
                    <textarea
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      rows="6"
                      placeholder="Enter test data in JSON format..."
                    ></textarea>
                  </div>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Play className="h-5 w-5" />
                    <span>Run Test</span>
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Debug Console</h3>
                <div className="bg-gray-900 rounded-lg p-4 h-64 overflow-y-auto font-mono text-sm">
                  <div className="text-green-400">[2025-01-07 10:30:15] Starting integration test...</div>
                  <div className="text-blue-400">[2025-01-07 10:30:16] Connecting to Salesforce API...</div>
                  <div className="text-green-400">[2025-01-07 10:30:17] Connection established</div>
                  <div className="text-blue-400">[2025-01-07 10:30:18] Processing user data...</div>
                  <div className="text-green-400">[2025-01-07 10:30:19] Contact created successfully</div>
                  <div className="text-green-400">[2025-01-07 10:30:20] Test completed - SUCCESS</div>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                    <RefreshCw className="h-4 w-4" />
                    <span>Clear</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                    <Download className="h-4 w-4" />
                    <span>Export Logs</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Test Results */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Test Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-green-900 rounded-lg mb-3">
                    <CheckCircle className="h-8 w-8 text-green-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Success Rate</p>
                  <p className="text-2xl font-bold text-green-400">98.5%</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-blue-900 rounded-lg mb-3">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Avg Duration</p>
                  <p className="text-2xl font-bold text-blue-400">2.3s</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-purple-900 rounded-lg mb-3">
                    <Activity className="h-8 w-8 text-purple-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Total Tests</p>
                  <p className="text-2xl font-bold text-purple-400">1,247</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-red-900 rounded-lg mb-3">
                    <XCircle className="h-8 w-8 text-red-400 mx-auto" />
                  </div>
                  <p className="text-sm text-gray-400">Failures</p>
                  <p className="text-2xl font-bold text-red-400">19</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Code Generator Tab */}
        {activeTab === 'code' && (
          <div className="space-y-8">
            {/* Code Generation Options */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Code Generator</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Target Platform</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>Node.js</option>
                    <option>Python</option>
                    <option>PHP</option>
                    <option>Java</option>
                    <option>C#</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Framework</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>Express.js</option>
                    <option>Fastify</option>
                    <option>Koa.js</option>
                    <option>NestJS</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Output Format</label>
                  <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500">
                    <option>Complete Project</option>
                    <option>Code Snippets</option>
                    <option>API Documentation</option>
                    <option>Docker Configuration</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <button className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Code className="h-5 w-5" />
                  <span>Generate Code</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                  <Download className="h-5 w-5" />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Generated Code Preview */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Generated Code</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                    <Copy className="h-5 w-5 text-gray-400" />
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600">
                    <Download className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-300">
{`const express = require('express');
const axios = require('axios');
const app = express();

// Salesforce Integration Endpoint
app.post('/api/integrations/salesforce/sync', async (req, res) => {
  try {
    const { userData } = req.body;
    
    // Authenticate with Salesforce through secure backend proxy
    const authResponse = await axios.post('/api/integrations/salesforce/auth', {
      action: 'authenticate'
    }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    const accessToken = authResponse.data.access_token;
    
    // Create contact in Salesforce
    const contactResponse = await axios.post(
      \`\${process.env.SALESFORCE_INSTANCE_URL}/services/data/v54.0/sobjects/Contact\`,
      {
        FirstName: userData.firstName,
        LastName: userData.lastName,
        Email: userData.email,
        Phone: userData.phone
      },
      {
        headers: {
          'Authorization': \`Bearer \${accessToken}\`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    res.json({
      success: true,
      contactId: contactResponse.data.id,
      message: 'Contact created successfully'
    });
    
  } catch (error) {
    console.error('Salesforce sync error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log('Integration server running on port 3000');
});`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Marketplace Tab */}
        {activeTab === 'marketplace' && (
          <div className="space-y-8">
            {/* Marketplace Header */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Integration Marketplace</h2>
              <p className="text-gray-400 mb-8">Discover and share custom integrations with the community</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search marketplace..."
                    className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Upload className="h-5 w-5" />
                  <span>Publish Integration</span>
                </button>
              </div>
            </div>

            {/* Featured Integrations */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Featured Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Advanced Slack Notifications', author: 'TechCorp', downloads: 1247, rating: 4.8 },
                  { name: 'Custom Analytics Dashboard', author: 'DataPro', downloads: 856, rating: 4.9 },
                  { name: 'Multi-Platform Social Sync', author: 'SocialTech', downloads: 2341, rating: 4.7 },
                  { name: 'Advanced Email Workflows', author: 'MailMaster', downloads: 1567, rating: 4.6 },
                  { name: 'Custom Payment Gateway', author: 'PayTech', downloads: 678, rating: 4.8 },
                  { name: 'AI-Powered Recommendations', author: 'AILabs', downloads: 934, rating: 4.9 }
                ].map((integration, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-white font-semibold">{integration.name}</h4>
                        <p className="text-sm text-gray-400">by {integration.author}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{integration.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{integration.downloads} downloads</span>
                      <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
                        Install
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Documentation Tab */}
        {activeTab === 'documentation' && (
          <div className="space-y-8">
            {/* Documentation Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Quick Start</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Getting Started</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Your First Integration</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Basic Concepts</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Best Practices</a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">API Reference</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Authentication</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Endpoints</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Webhooks</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Rate Limits</a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Tutorials</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">CRM Integration</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Email Automation</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Payment Processing</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Custom Workflows</a>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">FAQ</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Troubleshooting</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Contact Support</a>
                  <a href="#" className="block text-indigo-400 hover:text-indigo-300">Community Forum</a>
                </div>
              </div>
            </div>

            {/* Documentation Content */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Getting Started with Custom Integrations</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  The Custom Integration Builder allows you to create powerful integrations between Flourish and external services 
                  using a visual workflow designer. No coding experience required!
                </p>
                <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Visual drag-and-drop workflow designer</li>
                  <li>• Pre-built templates for common integrations</li>
                  <li>• Real-time testing and debugging tools</li>
                  <li>• Automatic code generation for multiple platforms</li>
                  <li>• Comprehensive monitoring and analytics</li>
                  <li>• Community marketplace for sharing integrations</li>
                </ul>
                <h4 className="text-white font-semibold mb-3">Quick Start Steps:</h4>
                <ol className="text-gray-300 space-y-2">
                  <li>1. Choose a template or start from scratch</li>
                  <li>2. Design your workflow using the visual builder</li>
                  <li>3. Configure triggers and actions</li>
                  <li>4. Test your integration with sample data</li>
                  <li>5. Deploy and monitor your integration</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomIntegrationBuilder;

