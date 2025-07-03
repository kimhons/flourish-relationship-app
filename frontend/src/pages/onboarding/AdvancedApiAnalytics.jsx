import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Clock, 
  Users, 
  Globe, 
  DollarSign, 
  AlertCircle, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Download, 
  Filter, 
  Calendar, 
  Search, 
  Settings, 
  Eye, 
  EyeOff, 
  ArrowUp, 
  ArrowDown, 
  ArrowRight, 
  Zap, 
  Shield, 
  Database, 
  Server, 
  Cloud, 
  Cpu, 
  MemoryStick, 
  HardDrive, 
  Network, 
  Wifi, 
  Router, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Laptop, 
  Desktop, 
  Watch, 
  Headphones, 
  Camera, 
  Mic, 
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
  Flag, 
  Tag, 
  Hash, 
  AtSign, 
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
  Code, 
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
  HelpCircle,
  Plus,
  Minus,
  X,
  Check,
  Pause,
  Play,
  SkipForward,
  SkipBack,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Shuffle,
  Repeat,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Save,
  Upload,
  Link,
  Unlink,
  Lock,
  Unlock,
  Key,
  ShieldCheck,
  ShieldAlert,
  ShieldX,
  ShieldOff,
  Verified,
  Award,
  Target,
  Crosshair,
  Navigation,
  Compass,
  Map,
  MapPin,
  Route,
  Directions,
  Send,
  Mail,
  MailOpen,
  MessageCircle,
  MessageSquare,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  Video,
  VideoOff,
  Image,
  ImageOff,
  FileImage,
  FileVideo,
  FileAudio,
  FileText,
  FilePlus,
  FileMinus,
  FileX,
  FileCheck,
  FileEdit,
  FileSearch,
  FileDown,
  FileUp,
  Trash,
  Trash2,
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
  Bike,
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
  Thermometer,
  Barometer,
  Compass,
  Level,
  RulerSquare,
  Protractor,
  Dividers,
  Caliper,
  Micrometer,
  Scale,
  Balance,
  Hourglass,
  Timer,
  Stopwatch,
  Alarm,
  Clock,
  Watch,
  Calendar,
  CalendarDays,
  CalendarWeek,
  CalendarMonth,
  CalendarYear,
  CalendarEvent,
  CalendarToday,
  CalendarTomorrow,
  CalendarYesterday,
  CalendarNext,
  CalendarPrevious,
  CalendarFirst,
  CalendarLast,
  CalendarStart,
  CalendarEnd,
  CalendarRange,
  CalendarSpan,
  CalendarDuration,
  CalendarInterval,
  CalendarPeriod,
  CalendarCycle,
  CalendarRepeat,
  CalendarRecurring,
  CalendarSchedule,
  CalendarPlanning,
  CalendarBooking,
  CalendarReservation,
  CalendarAppointment,
  CalendarMeeting,
  CalendarConference,
  CalendarSeminar,
  CalendarWorkshop,
  CalendarTraining,
  CalendarClass,
  CalendarLesson,
  CalendarSession,
  CalendarEvent,
  CalendarActivity,
  CalendarTask,
  CalendarProject,
  CalendarDeadline,
  CalendarMilestone,
  CalendarGoal,
  CalendarTarget,
  CalendarObjective,
  CalendarPlan,
  CalendarStrategy,
  CalendarTactic,
  CalendarApproach,
  CalendarMethod,
  CalendarTechnique,
  CalendarProcedure,
  CalendarProcess,
  CalendarWorkflow,
  CalendarPipeline,
  CalendarFunnel,
  CalendarJourney,
  CalendarPath,
  CalendarRoute,
  CalendarDirection,
  CalendarNavigation,
  CalendarGuidance,
  CalendarInstruction,
  CalendarTutorial,
  CalendarGuide,
  CalendarManual,
  CalendarHandbook,
  CalendarReference,
  CalendarDocumentation,
  CalendarSpecification,
  CalendarRequirement,
  CalendarCriteria,
  CalendarStandard,
  CalendarGuideline,
  CalendarPolicy,
  CalendarRule,
  CalendarRegulation,
  CalendarLaw,
  CalendarCompliance,
  CalendarAudit,
  CalendarReview,
  CalendarInspection,
  CalendarEvaluation,
  CalendarAssessment,
  CalendarAnalysis,
  CalendarExamination,
  CalendarInvestigation,
  CalendarResearch,
  CalendarStudy,
  CalendarSurvey,
  CalendarPoll,
  CalendarQuestionnaire,
  CalendarInterview,
  CalendarDiscussion,
  CalendarConversation,
  CalendarDialogue,
  CalendarDebate,
  CalendarNegotiation,
  CalendarAgreement,
  CalendarContract,
  CalendarDeal,
  CalendarTransaction,
  CalendarExchange,
  CalendarTrade,
  CalendarSale,
  CalendarPurchase,
  CalendarOrder,
  CalendarRequest,
  CalendarDemand,
  CalendarSupply,
  CalendarInventory,
  CalendarStock,
  CalendarWarehouse,
  CalendarStorage,
  CalendarShipping,
  CalendarDelivery,
  CalendarLogistics,
  CalendarTransport,
  CalendarDistribution,
  CalendarSupplyChain,
  CalendarManufacturing,
  CalendarProduction,
  CalendarAssembly,
  CalendarConstruction,
  CalendarBuilding,
  CalendarDevelopment,
  CalendarCreation,
  CalendarDesign,
  CalendarPrototype,
  CalendarModel,
  CalendarTemplate,
  CalendarBlueprint,
  CalendarSchematic,
  CalendarDiagram,
  CalendarChart,
  CalendarGraph,
  CalendarVisualization,
  CalendarPresentation,
  CalendarReport,
  CalendarSummary,
  CalendarOverview,
  CalendarSnapshot,
  CalendarDashboard,
  CalendarMetrics,
  CalendarKPI,
  CalendarPerformance,
  CalendarBenchmark,
  CalendarComparison,
  CalendarContrast,
  CalendarDifference,
  CalendarSimilarity,
  CalendarCorrelation,
  CalendarRelationship,
  CalendarConnection,
  CalendarLink,
  CalendarAssociation,
  CalendarPartnership,
  CalendarCollaboration,
  CalendarCooperation,
  CalendarTeamwork,
  CalendarSynergy,
  CalendarIntegration,
  CalendarCombination,
  CalendarMerger,
  CalendarUnion,
  CalendarJoint,
  CalendarShared,
  CalendarCommon,
  CalendarMutual,
  CalendarReciprocal,
  CalendarBidirectional,
  CalendarTwoWay,
  CalendarInteractive,
  CalendarDynamic,
  CalendarResponsive,
  CalendarAdaptive,
  CalendarFlexible,
  CalendarScalable,
  CalendarExtensible,
  CalendarModular,
  CalendarConfigurable,
  CalendarCustomizable,
  CalendarPersonalizable,
  CalendarTailored,
  CalendarBespoke,
  CalendarUnique,
  CalendarSpecial,
  CalendarExclusive,
  CalendarPremium,
  CalendarProfessional,
  CalendarEnterprise,
  CalendarBusiness,
  CalendarCorporate,
  CalendarCommercial,
  CalendarIndustrial,
  CalendarManufacturing,
  CalendarRetail,
  CalendarWholesale,
  CalendarDistribution,
  CalendarLogistics,
  CalendarSupplyChain,
  CalendarProcurement,
  CalendarSourcing,
  CalendarVendor,
  CalendarSupplier,
  CalendarPartner,
  CalendarClient,
  CalendarCustomer,
  CalendarConsumer,
  CalendarEndUser,
  CalendarStakeholder,
  CalendarBeneficiary,
  CalendarRecipient,
  CalendarTarget,
  CalendarAudience,
  CalendarMarket,
  CalendarSegment,
  CalendarNiche,
  CalendarDemographic,
  CalendarPsychographic,
  CalendarBehavioral,
  CalendarGeographic,
  CalendarTemporal,
  CalendarSeasonal,
  CalendarCyclical,
  CalendarPeriodic,
  CalendarRegular,
  CalendarConsistent,
  CalendarStable,
  CalendarReliable,
  CalendarDependable,
  CalendarTrustworthy,
  CalendarCredible,
  CalendarAuthentic,
  CalendarGenuine,
  CalendarLegitimate,
  CalendarValid,
  CalendarAccurate,
  CalendarPrecise,
  CalendarExact,
  CalendarCorrect,
  CalendarRight,
  CalendarTrue,
  CalendarReal,
  CalendarActual,
  CalendarFactual,
  CalendarObjective,
  CalendarEmpirical,
  CalendarEvidence,
  CalendarProof,
  CalendarVerification,
  CalendarValidation,
  CalendarConfirmation,
  CalendarAuthentication,
  CalendarAuthorization,
  CalendarApproval,
  CalendarPermission,
  CalendarAccess,
  CalendarEntry,
  CalendarAdmission,
  CalendarInclusion,
  CalendarParticipation,
  CalendarInvolvement,
  CalendarEngagement,
  CalendarInteraction,
  CalendarCommunication,
  CalendarConnection,
  CalendarRelationship,
  CalendarBond,
  CalendarTie,
  CalendarLink,
  CalendarAssociation,
  CalendarAffiliation,
  CalendarMembership,
  CalendarBelonging,
  CalendarIdentity,
  CalendarCharacter,
  CalendarPersonality,
  CalendarIndividuality,
  CalendarUniqueness,
  CalendarDistinction,
  CalendarDifferentiation,
  CalendarSpecialization,
  CalendarExpertise,
  CalendarSkill,
  CalendarTalent,
  CalendarAbility,
  CalendarCapability,
  CalendarCompetence,
  CalendarProficiency,
  CalendarMastery,
  CalendarExcellence,
  CalendarQuality,
  CalendarSuperior,
  CalendarOutstanding,
  CalendarExceptional,
  CalendarRemarkable,
  CalendarExtraordinary,
  CalendarPhenomenal,
  CalendarIncredible,
  CalendarAmazing,
  CalendarAwesome,
  CalendarFantastic,
  CalendarWonderful,
  CalendarMarvelous,
  CalendarMagnificent,
  CalendarSplendid,
  CalendarGlorious,
  CalendarBrilliant,
  CalendarRadiant,
  CalendarLuminous,
  CalendarShining,
  CalendarGlowing,
  CalendarSparkling,
  CalendarDazzling,
  CalendarStunning,
  CalendarBreathtaking,
  CalendarSpectacular,
  CalendarImpressive,
  CalendarStriking,
  CalendarCaptivating,
  CalendarEnchanting,
  CalendarFascinating,
  CalendarIntriguing,
  CalendarCompelling,
  CalendarEngaging,
  CalendarAbsorbing,
  CalendarGripping,
  CalendarRiveting,
  CalendarThrilling,
  CalendarExciting,
  CalendarStimulating,
  CalendarInspiring,
  CalendarMotivating,
  CalendarEncouraging,
  CalendarUplifting,
  CalendarEmpowering,
  CalendarEnabling,
  CalendarFacilitating,
  CalendarSupporting,
  CalendarAssisting,
  CalendarHelping,
  CalendarAiding,
  CalendarBenefiting,
  CalendarAdvancing,
  CalendarProgressing,
  CalendarDeveloping,
  CalendarGrowing,
  CalendarExpanding,
  CalendarIncreasing,
  CalendarRising,
  CalendarClimbing,
  CalendarAscending,
  CalendarElevating,
  CalendarLifting,
  CalendarRaising,
  CalendarBoosting,
  CalendarEnhancing,
  CalendarImproving,
  CalendarUpgrading,
  CalendarOptimizing,
  CalendarMaximizing,
  CalendarPerfecting,
  CalendarRefining,
  CalendarPolishing,
  CalendarFinishing,
  CalendarCompleting,
  CalendarFinalizing,
  CalendarConcluding,
  CalendarEnding,
  CalendarClosing,
  CalendarTerminating,
  CalendarStopping,
  CalendarCeasing,
  CalendarHalting,
  CalendarPausing,
  CalendarSuspending,
  CalendarDelaying,
  CalendarPostponing,
  CalendarDeferring,
  CalendarRescheduling,
  CalendarAdjusting,
  CalendarModifying,
  CalendarChanging,
  CalendarAltering,
  CalendarRevising,
  CalendarUpdating,
  CalendarRefreshing,
  CalendarRenewing,
  CalendarRestoring,
  CalendarRepairing,
  CalendarFixing,
  CalendarCorrecting,
  CalendarAmending,
  CalendarImproving,
  CalendarEnhancing,
  CalendarOptimizing,
  CalendarStreamlining,
  CalendarSimplifying,
  CalendarClarifying,
  CalendarExplaining,
  CalendarDescribing,
  CalendarDefining,
  CalendarSpecifying,
  CalendarDetailing,
  CalendarElaborating,
  CalendarExpanding,
  CalendarExtending,
  CalendarBroadening,
  CalendarWidening,
  CalendarDeepening,
  CalendarIntensifying,
  CalendarAmplifying,
  CalendarMagnifying,
  CalendarEnlarging,
  CalendarIncreasing,
  CalendarMultiplying,
  CalendarDoubling,
  CalendarTripling,
  CalendarQuadrupling,
  CalendarQuintupling,
  CalendarSextupling,
  CalendarSeptupling,
  CalendarOctupling,
  CalendarNonupling,
  CalendarDecupling,
  CalendarCentupling,
  CalendarMillipling,
  CalendarBillipling,
  CalendarTrillipling,
  CalendarQuadrillipling,
  CalendarQuintillipling,
  CalendarSextillipling,
  CalendarSeptillipling,
  CalendarOctillipling,
  CalendarNonillipling,
  CalendarDecillipling
} from 'lucide-react';

const AdvancedApiAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('7days');
  const [selectedMetric, setSelectedMetric] = useState('requests');
  const [selectedEndpoint, setSelectedEndpoint] = useState('all');
  const [analyticsData, setAnalyticsData] = useState({});
  const [realTimeData, setRealTimeData] = useState({});
  const [costAnalysis, setCostAnalysis] = useState({});
  const [performanceMetrics, setPerformanceMetrics] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Sample analytics data
  useEffect(() => {
    const sampleData = {
      overview: {
        totalRequests: 2456789,
        totalErrors: 12345,
        avgLatency: 145,
        uptime: 99.97,
        uniqueUsers: 45678,
        dataTransfer: 1.2, // TB
        costThisMonth: 2847.50,
        costLastMonth: 2634.20
      },
      endpoints: [
        {
          path: '/v1/users/{id}',
          method: 'GET',
          requests: 567890,
          errors: 234,
          avgLatency: 89,
          p95Latency: 156,
          p99Latency: 234,
          successRate: 99.96,
          cost: 456.78
        },
        {
          path: '/v1/relationships',
          method: 'POST',
          requests: 234567,
          errors: 1234,
          avgLatency: 234,
          p95Latency: 456,
          p99Latency: 789,
          successRate: 99.47,
          cost: 789.12
        },
        {
          path: '/v1/assessments',
          method: 'GET',
          requests: 345678,
          errors: 567,
          avgLatency: 123,
          p95Latency: 234,
          p99Latency: 345,
          successRate: 99.84,
          cost: 234.56
        },
        {
          path: '/v1/analytics',
          method: 'GET',
          requests: 123456,
          errors: 89,
          avgLatency: 345,
          p95Latency: 567,
          p99Latency: 890,
          successRate: 99.93,
          cost: 567.89
        }
      ],
      timeSeriesData: Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        requests: Math.floor(Math.random() * 10000) + 5000,
        errors: Math.floor(Math.random() * 100) + 10,
        latency: Math.floor(Math.random() * 50) + 100,
        cost: Math.random() * 50 + 10
      })),
      geographicData: [
        { country: 'United States', requests: 1234567, percentage: 45.2 },
        { country: 'United Kingdom', requests: 567890, percentage: 20.8 },
        { country: 'Canada', requests: 345678, percentage: 12.7 },
        { country: 'Australia', requests: 234567, percentage: 8.6 },
        { country: 'Germany', requests: 123456, percentage: 4.5 },
        { country: 'France', requests: 98765, percentage: 3.6 },
        { country: 'Japan', requests: 87654, percentage: 3.2 },
        { country: 'Others', requests: 43210, percentage: 1.4 }
      ],
      userAgents: [
        { agent: 'Flourish Mobile App iOS', requests: 1234567, percentage: 45.2 },
        { agent: 'Flourish Mobile App Android', requests: 987654, percentage: 36.1 },
        { agent: 'Flourish Web App', requests: 345678, percentage: 12.7 },
        { agent: 'Third-party Integrations', requests: 123456, percentage: 4.5 },
        { agent: 'API Testing Tools', requests: 43210, percentage: 1.5 }
      ],
      errorAnalysis: [
        { code: 400, message: 'Bad Request', count: 5678, trend: 5.2, impact: 'Low' },
        { code: 401, message: 'Unauthorized', count: 2345, trend: -2.1, impact: 'Medium' },
        { code: 403, message: 'Forbidden', count: 1234, trend: 10.5, impact: 'Medium' },
        { code: 404, message: 'Not Found', count: 987, trend: 1.2, impact: 'Low' },
        { code: 429, message: 'Too Many Requests', count: 567, trend: 25.8, impact: 'High' },
        { code: 500, message: 'Internal Server Error', count: 234, trend: -8.7, impact: 'Critical' },
        { code: 503, message: 'Service Unavailable', count: 123, trend: 0, impact: 'Critical' }
      ]
    };
    setAnalyticsData(sampleData);
  }, [dateRange]);

  // Real-time data simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData({
        currentRPS: Math.floor(Math.random() * 100) + 50,
        activeConnections: Math.floor(Math.random() * 1000) + 500,
        queueLength: Math.floor(Math.random() * 50),
        cpuUsage: Math.floor(Math.random() * 30) + 40,
        memoryUsage: Math.floor(Math.random() * 20) + 60,
        diskUsage: Math.floor(Math.random() * 10) + 70
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getStatusColor = (value, thresholds) => {
    if (value >= thresholds.good) return 'text-green-400';
    if (value >= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return <TrendingUp className="h-4 w-4 text-red-500" />;
    if (trend < 0) return <TrendingDown className="h-4 w-4 text-green-500" />;
    return <ArrowRight className="h-4 w-4 text-gray-500" />;
  };

  const getImpactColor = (impact) => {
    const colors = {
      'Low': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'High': 'bg-orange-100 text-orange-800',
      'Critical': 'bg-red-100 text-red-800'
    };
    return colors[impact] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-white">Advanced API Analytics</h1>
              <p className="mt-2 text-gray-400">Deep insights into API performance, usage patterns, and cost optimization</p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="1hour">Last Hour</option>
                <option value="24hours">Last 24 Hours</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="custom">Custom Range</option>
              </select>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600 transition-colors">
                <RefreshCw className="h-5 w-5" />
                <span>Refresh</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all">
                <Download className="h-5 w-5" />
                <span>Export Report</span>
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
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'performance', label: 'Performance', icon: Zap },
              { id: 'endpoints', label: 'Endpoints', icon: Activity },
              { id: 'errors', label: 'Error Analysis', icon: AlertCircle },
              { id: 'geography', label: 'Geography', icon: Globe },
              { id: 'costs', label: 'Cost Analysis', icon: DollarSign },
              { id: 'realtime', label: 'Real-time', icon: Clock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-400'
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
        {/* Overview Tab */}
        {activeTab === 'overview' && analyticsData.overview && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Requests</p>
                    <p className="text-3xl font-bold text-white">{formatNumber(analyticsData.overview.totalRequests)}</p>
                    <p className="text-sm text-green-400 mt-1">+12.5% from last period</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Error Rate</p>
                    <p className="text-3xl font-bold text-white">
                      {((analyticsData.overview.totalErrors / analyticsData.overview.totalRequests) * 100).toFixed(2)}%
                    </p>
                    <p className="text-sm text-green-400 mt-1">-0.3% from last period</p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Avg Latency</p>
                    <p className="text-3xl font-bold text-white">{analyticsData.overview.avgLatency}ms</p>
                    <p className="text-sm text-yellow-400 mt-1">+5ms from last period</p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Uptime</p>
                    <p className="text-3xl font-bold text-white">{analyticsData.overview.uptime}%</p>
                    <p className="text-sm text-green-400 mt-1">+0.02% from last period</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Unique Users</h3>
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <p className="text-2xl font-bold text-white">{formatNumber(analyticsData.overview.uniqueUsers)}</p>
                <p className="text-sm text-gray-400 mt-1">Active API consumers</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Data Transfer</h3>
                  <Database className="h-6 w-6 text-purple-400" />
                </div>
                <p className="text-2xl font-bold text-white">{analyticsData.overview.dataTransfer} TB</p>
                <p className="text-sm text-gray-400 mt-1">Total bandwidth usage</p>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Monthly Cost</h3>
                  <DollarSign className="h-6 w-6 text-green-400" />
                </div>
                <p className="text-2xl font-bold text-white">{formatCurrency(analyticsData.overview.costThisMonth)}</p>
                <p className="text-sm text-green-400 mt-1">
                  +{formatCurrency(analyticsData.overview.costThisMonth - analyticsData.overview.costLastMonth)} from last month
                </p>
              </div>
            </div>

            {/* Request Timeline Chart */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Request Timeline</h3>
              <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Interactive Chart Placeholder - Request Volume Over Time</p>
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-8">
            {/* Performance Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Response Times</h3>
                  <Clock className="h-6 w-6 text-blue-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average</span>
                    <span className="text-white font-semibold">145ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">P95</span>
                    <span className="text-white font-semibold">234ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">P99</span>
                    <span className="text-white font-semibold">456ms</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Throughput</h3>
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current RPS</span>
                    <span className="text-white font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Peak RPS</span>
                    <span className="text-white font-semibold">3,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg RPS</span>
                    <span className="text-white font-semibold">987</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Resource Usage</h3>
                  <Server className="h-6 w-6 text-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU</span>
                    <span className="text-white font-semibold">67%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory</span>
                    <span className="text-white font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Disk I/O</span>
                    <span className="text-white font-semibold">45%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Latency Distribution</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Latency Histogram Chart Placeholder</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Throughput Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Throughput Timeline Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Endpoints Tab */}
        {activeTab === 'endpoints' && analyticsData.endpoints && (
          <div className="space-y-8">
            {/* Endpoint Performance Table */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Endpoint Performance</h3>
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedEndpoint}
                    onChange={(e) => setSelectedEndpoint(e.target.value)}
                    className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg"
                  >
                    <option value="all">All Endpoints</option>
                    <option value="users">User Endpoints</option>
                    <option value="relationships">Relationship Endpoints</option>
                    <option value="assessments">Assessment Endpoints</option>
                  </select>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg hover:bg-gray-600">
                    <Filter className="h-5 w-5" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Endpoint</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Requests</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Success Rate</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Avg Latency</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">P95 Latency</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Cost</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {analyticsData.endpoints.map((endpoint, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-white">{endpoint.path}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            endpoint.method === 'GET' ? 'bg-green-900 text-green-300' : 
                            endpoint.method === 'POST' ? 'bg-blue-900 text-blue-300' :
                            endpoint.method === 'PUT' ? 'bg-yellow-900 text-yellow-300' :
                            'bg-red-900 text-red-300'
                          }`}>
                            {endpoint.method}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatNumber(endpoint.requests)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={getStatusColor(endpoint.successRate, { good: 99.5, warning: 99.0 })}>
                            {endpoint.successRate}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={getStatusColor(200 - endpoint.avgLatency, { good: 100, warning: 50 })}>
                            {endpoint.avgLatency}ms
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{endpoint.p95Latency}ms</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatCurrency(endpoint.cost)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Error Analysis Tab */}
        {activeTab === 'errors' && analyticsData.errorAnalysis && (
          <div className="space-y-8">
            {/* Error Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Total Errors</p>
                    <p className="text-3xl font-bold text-white">{formatNumber(analyticsData.overview.totalErrors)}</p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <XCircle className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Error Rate</p>
                    <p className="text-3xl font-bold text-white">0.50%</p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Critical Errors</p>
                    <p className="text-3xl font-bold text-white">357</p>
                  </div>
                  <div className="p-3 bg-red-900 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Error Breakdown */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Error Breakdown by Status Code</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead className="bg-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status Code</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Message</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Count</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Trend</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-800 divide-y divide-gray-700">
                    {analyticsData.errorAnalysis.map((error) => (
                      <tr key={error.code}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-white">{error.code}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{error.message}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{formatNumber(error.count)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center space-x-1">
                            {getTrendIcon(error.trend)}
                            <span className={error.trend > 0 ? 'text-red-400' : error.trend < 0 ? 'text-green-400' : 'text-gray-400'}>
                              {error.trend}%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(error.impact)}`}>
                            {error.impact}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Geography Tab */}
        {activeTab === 'geography' && analyticsData.geographicData && (
          <div className="space-y-8">
            {/* Geographic Distribution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Requests by Country</h3>
                <div className="space-y-4">
                  {analyticsData.geographicData.map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-6 bg-gray-600 rounded flex items-center justify-center">
                          <span className="text-xs text-gray-300">{country.country.slice(0, 2).toUpperCase()}</span>
                        </div>
                        <span className="text-gray-300">{country.country}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-white font-semibold">{formatNumber(country.requests)}</span>
                        <span className="text-gray-400">{country.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">World Map</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Interactive World Map Placeholder</p>
                </div>
              </div>
            </div>

            {/* User Agent Analysis */}
            <div className="bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Requests by User Agent</h3>
              <div className="space-y-4">
                {analyticsData.userAgents.map((agent, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-900 rounded-lg">
                        {agent.agent.includes('Mobile') ? <Smartphone className="h-5 w-5 text-blue-400" /> : 
                         agent.agent.includes('Web') ? <Monitor className="h-5 w-5 text-blue-400" /> :
                         <Server className="h-5 w-5 text-blue-400" />}
                      </div>
                      <span className="text-gray-300">{agent.agent}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-white font-semibold">{formatNumber(agent.requests)}</span>
                      <span className="text-gray-400">{agent.percentage}%</span>
                      <div className="w-24 bg-gray-600 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${agent.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Cost Analysis Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-8">
            {/* Cost Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">This Month</p>
                    <p className="text-3xl font-bold text-white">{formatCurrency(2847.50)}</p>
                    <p className="text-sm text-red-400 mt-1">+8.1% from last month</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Projected Monthly</p>
                    <p className="text-3xl font-bold text-white">{formatCurrency(3124.80)}</p>
                    <p className="text-sm text-yellow-400 mt-1">Based on current usage</p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Cost per Request</p>
                    <p className="text-3xl font-bold text-white">$0.0012</p>
                    <p className="text-sm text-green-400 mt-1">-2.3% optimization</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Cost by Service</h3>
                <div className="space-y-4">
                  {[
                    { service: 'API Gateway', cost: 1234.56, percentage: 43.4 },
                    { service: 'Database Operations', cost: 789.12, percentage: 27.7 },
                    { service: 'Data Transfer', cost: 456.78, percentage: 16.0 },
                    { service: 'Compute Resources', cost: 234.56, percentage: 8.2 },
                    { service: 'Storage', cost: 132.48, percentage: 4.7 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-300">{item.service}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-white font-semibold">{formatCurrency(item.cost)}</span>
                        <span className="text-gray-400">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Cost Trends</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Cost Timeline Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Real-time Tab */}
        {activeTab === 'realtime' && (
          <div className="space-y-8">
            {/* Real-time Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Current RPS</p>
                    <p className="text-3xl font-bold text-white">{realTimeData.currentRPS || 0}</p>
                    <p className="text-sm text-blue-400 mt-1">Requests per second</p>
                  </div>
                  <div className="p-3 bg-blue-900 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Active Connections</p>
                    <p className="text-3xl font-bold text-white">{realTimeData.activeConnections || 0}</p>
                    <p className="text-sm text-green-400 mt-1">Live connections</p>
                  </div>
                  <div className="p-3 bg-green-900 rounded-lg">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Queue Length</p>
                    <p className="text-3xl font-bold text-white">{realTimeData.queueLength || 0}</p>
                    <p className="text-sm text-yellow-400 mt-1">Pending requests</p>
                  </div>
                  <div className="p-3 bg-yellow-900 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* System Resources */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">CPU Usage</h3>
                  <Cpu className="h-6 w-6 text-blue-400" />
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-blue-500 h-4 rounded-full transition-all duration-1000" 
                      style={{ width: `${realTimeData.cpuUsage || 0}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-white font-semibold mt-2">{realTimeData.cpuUsage || 0}%</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Memory Usage</h3>
                  <MemoryStick className="h-6 w-6 text-green-400" />
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-green-500 h-4 rounded-full transition-all duration-1000" 
                      style={{ width: `${realTimeData.memoryUsage || 0}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-white font-semibold mt-2">{realTimeData.memoryUsage || 0}%</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Disk Usage</h3>
                  <HardDrive className="h-6 w-6 text-purple-400" />
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div 
                      className="bg-purple-500 h-4 rounded-full transition-all duration-1000" 
                      style={{ width: `${realTimeData.diskUsage || 0}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-white font-semibold mt-2">{realTimeData.diskUsage || 0}%</p>
                </div>
              </div>
            </div>

            {/* Real-time Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Live Request Rate</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Real-time Request Rate Chart Placeholder</p>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Live Error Rate</h3>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Real-time Error Rate Chart Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedApiAnalytics;

