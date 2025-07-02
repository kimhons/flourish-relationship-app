import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Grid,
  Avatar,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Badge,
  Fade,
  Slide,
  Zoom,
  Collapse,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Rating,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Tabs,
  Tab,
  TabPanel,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Backdrop,
  CircularProgress,
  Snackbar,
  SnackbarContent,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  ListItemSecondaryAction,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  TextareaAutosize,
  FormHelperText,
  CardActions,
  CardHeader,
  CardMedia
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  WorkspacePremium,
  Diamond,
  Star,
  StarBorder,
  Grade,
  AutoAwesome,
  TrendingUp,
  Analytics,
  Insights,
  Assessment,
  BarChart,
  ShowChart,
  Timeline,
  DataUsage,
  Speed,
  MonitorHeart,
  Psychology,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  EmojiEvents,
  EmojiObjects,
  EmojiSymbols,
  Face,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
  PersonAdd,
  Group,
  Groups,
  People,
  Share,
  ShareLocation,
  LocationOn,
  Place,
  Map,
  Explore,
  Public,
  Language,
  GTranslate,
  Spellcheck,
  FindReplace,
  Search,
  FilterAlt,
  Sort,
  ViewList,
  ViewModule,
  Dashboard,
  Settings,
  SettingsApplications,
  Tune,
  Build,
  Construction,
  Handyman,
  AutoFixHigh,
  AutoFixNormal,
  AutoFixOff,
  Colorize,
  Palette,
  Brush,
  FormatPaint,
  Style,
  Design,
  Category,
  Label,
  Tag,
  Bookmark,
  BookmarkBorder,
  StarHalf,
  NewLabel,
  FiberNew,
  Upgrade,
  SystemUpdate,
  InstallMobile,
  Extension,
  Apps,
  SpaceDashboard,
  GridView,
  ViewAgenda,
  ViewComfy,
  ViewCompact,
  TableChart,
  Reorder,
  DragHandle,
  OpenWith,
  TouchApp,
  Gesture,
  Swipe,
  PinchZoomIn,
  ZoomIn,
  ZoomOut,
  CenterFocusStrong,
  MyLocation,
  NearMe,
  GpsFixed,
  Navigation,
  Compass,
  Route,
  Directions,
  Flight,
  Hotel,
  Restaurant,
  LocalDining,
  LocalCafe,
  LocalBar,
  Fastfood,
  IceCream,
  Wine,
  SportsBar,
  NightLife,
  LocalActivity,
  Attractions,
  Festival,
  Party,
  Celebration,
  Cake,
  CardGiftcard,
  Redeem,
  Discount,
  Sell,
  Whatshot,
  Trending,
  MultilineChart,
  AreaChart,
  PieChart,
  DonutLarge,
  BubbleChart,
  ScatterPlot,
  Leaderboard,
  QueryStats,
  CalendarToday,
  DateRange,
  Event,
  Today,
  Alarm,
  AlarmAdd,
  AlarmOff,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  MoreTime,
  Autorenew,
  Loop,
  Cached,
  Refresh,
  Sync,
  ChangeCircle,
  SwapHoriz,
  SwapVert,
  CompareArrows,
  ImportExport,
  CallMade,
  CallReceived,
  Merge,
  DriveFileMove,
  Archive,
  Inventory,
  Class,
  ColorLens,
  Gradient,
  Opacity,
  Layers,
  FilterNone,
  Flare,
  Flash,
  Highlight,
  Lens,
  Looks,
  Nature,
  NetworkCell,
  NetworkWifi,
  NewReleases,
  Panorama,
  PhotoAlbum,
  PhotoFilter,
  PhotoLibrary,
  Portrait,
  Receipt,
  RecentActors,
  RemoveRedEye,
  Scanner,
  Slideshow,
  SwitchAccount,
  SwitchCamera,
  TagFaces,
  Transform,
  TurnedIn,
  TurnedInNot,
  Undo,
  Redo,
  Vignette,
  Widgets,
  ExpandMore,
  ExpandLess,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowUp,
  KeyboardArrowDown,
  ArrowUpward,
  ArrowDownward,
  ArrowBack,
  ArrowForward,
  FirstPage,
  LastPage,
  MoreHoriz,
  MoreVert,
  Menu,
  MenuOpen,
  ThumbUpAlt,
  ThumbDownAlt,
  ThumbsUpDown,
  MoodBad,
  EmojiEmotions,
  EmojiNature,
  EmojiFood,
  EmojiTransportation,
  PsychologyAlt,
  HealthAndSafety,
  SafetyCheck,
  ConnectWithoutContact,
  Diversity3,
  FamilyRestroom,
  Handshake,
  VolunteerActivism,
  ContactSupport,
  LiveHelp,
  Recommend,
  AutoFixHigh as AutoFixIcon,
  StarRate,
  WorkspacePremium as PremiumIcon,
  Euro,
  AttachMoney,
  MonetizationOn,
  Payment,
  CreditCard,
  Savings,
  Work,
  Business,
  Store,
  ShoppingCart,
  ShoppingBag,
  Pets,
  Child,
  Elderly,
  Pregnant,
  Accessible,
  Man,
  Woman,
  Boy,
  Girl,
  Baby,
  Inbox,
  Drafts,
  ReplyAll,
  MailOutline,
  Report,
  Flag,
  HeartBroken,
  Home,
  LocationDisabled,
  LocationSearching,
  NearMeDisabled,
  GpsNotFixed,
  PinDrop,
  WhereToVote,
  FolderShared,
  FolderSpecial,
  Dangerous,
  ReportProblem,
  GppBad,
  GppGood,
  GppMaybe,
  ManageAccounts,
  SupervisorAccount,
  NoEncryption,
  Block,
  NotificationImportant,
  PriorityHigh,
  FavoriteBorder as HeartIcon,
  PersonAdd as AddPersonIcon,
  PersonRemove,
  GroupAdd,
  Person,
  PersonOutline,
  PersonPin,
  PersonSearch,
  FaceRetouchingNatural,
  FaceRetouchingOff,
  Wc,
  Male,
  Female,
  Transgender,
  Engineering,
  Science,
  Biotech,
  School,
  MenuBook,
  AutoStories,
  ImportContacts,
  LibraryBooks,
  Book,
  BookmarkAdd,
  BookmarkAdded,
  BookmarkRemove,
  Bookmarks,
  LabelImportant,
  LabelOff,
  LocalOffer,
  Loyalty,
  CardMembership,
  ConfirmationNumber,
  EventSeat,
  FlightTakeoff,
  FlightLand,
  ConnectingAirports,
  AirplanemodeActive,
  AirplanemodeInactive,
  FlightClass,
  TravelExplore,
  ExploreOff,
  PublicOff,
  GTranslate as TranslateIcon,
  Visibility,
  VisibilityOff,
  SettingsBackupRestore,
  SettingsBluetooth,
  SettingsBrightness,
  SettingsCell,
  SettingsEthernet,
  SettingsInputAntenna,
  SettingsInputComponent,
  SettingsInputComposite,
  SettingsInputHdmi,
  SettingsInputSvideo,
  SettingsOverscan,
  SettingsPhone,
  SettingsPower,
  SettingsRemote,
  SettingsSystemDaydream,
  SettingsVoice,
  BuildCircle,
  HomeRepairService,
  Plumbing,
  ElectricalServices,
  Carpenter,
  Architecture,
  Precision,
  Rule,
  StraightenOutlined,
  SquareFoot,
  Height,
  AspectRatio,
  CropFree,
  CropOriginal,
  Crop,
  CropSquare,
  CropPortrait,
  CropLandscape,
  Crop169,
  Crop32,
  Crop54,
  Crop75,
  CropDin,
  CropRotate,
  FlipCameraAndroid,
  FlipCameraIos,
  Flip,
  RotateLeft,
  RotateRight,
  Straighten,
  FormatColorFill,
  FormatColorReset,
  FormatColorText,
  InvertColors,
  InvertColorsOff,
  Tonality,
  Contrast,
  Exposure,
  ExposurePlus1,
  ExposurePlus2,
  ExposureNeg1,
  ExposureNeg2,
  ExposureZero,
  WbIncandescent,
  WbIridescent,
  WbSunny,
  WbCloudy,
  WbShade,
  WbTwilight,
  WbFluorescent,
  WbAuto,
  FlashOn,
  FlashOff,
  FlashAuto,
  Grain,
  Texture,
  Dehaze,
  Blur,
  BlurOn,
  BlurOff,
  BlurCircular,
  BlurLinear,
  MotionPhotosOn,
  MotionPhotosOff,
  MotionPhotosPause,
  MotionPhotosAuto,
  Timelapse,
  SlowMotionVideo,
  Hdr,
  HdrOn,
  HdrOff,
  HdrAuto,
  HdrAutoSelect,
  HdrEnhancedSelect,
  HdrOnSelect,
  HdrPlus,
  HdrStrong,
  HdrWeak,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
  LooksOne,
  LooksTwo,
  Filter,
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  Filter5,
  Filter6,
  Filter7,
  Filter8,
  Filter9,
  Filter9Plus,
  FilterBAndW,
  FilterCenterFocus,
  FilterDrama,
  FilterFrames,
  FilterHdr,
  FilterTiltShift,
  FilterVintage,
  EuroSymbol,
  CurrencyBitcoin,
  CurrencyExchange,
  CurrencyFranc,
  CurrencyLira,
  CurrencyPound,
  CurrencyRuble,
  CurrencyRupee,
  CurrencyYen,
  CurrencyYuan,
  RequestQuote,
  PriceChange,
  PriceCheck,
  ShoppingBasket,
  ShoppingCartCheckout,
  AddShoppingCart,
  RemoveShoppingCart,
  ProductionQuantityLimits,
  Inventory2,
  InventoryOutlined,
  Storefront,
  LocalMall,
  LocalGroceryStore,
  LocalConvenienceStore,
  LocalPharmacy,
  LocalHospital,
  LocalLibrary,
  LocalPostOffice,
  LocalPolice,
  LocalFireDepartment,
  LocalGasStation,
  LocalCarWash,
  LocalLaundryService,
  LocalShipping,
  LocalTaxi,
  LocalAtm,
  LocalSee,
  LocalFlorist,
  LocalDrink,
  LocalPlay,
  LocalPrintshop,
  LocalMovies,
  TheaterComedy,
  Theaters,
  LiveTv,
  Tv,
  ConnectedTv,
  SmartDisplay,
  Cast,
  CastConnected,
  CastForEducation,
  ScreenShare,
  StopScreenShare,
  PresentToAll,
  CancelPresentation,
  AirPlay,
  Duo,
  VideoCall,
  VideoCallEnd,
  Call,
  CallEnd,
  PhoneCallback,
  PhoneForwarded,
  PhoneInTalk,
  PhoneLocked,
  PhoneMissed,
  PhonePaused,
  DialerSip,
  Dialpad,
  ContactPhone,
  ContactMail,
  Contacts,
  PermContactCalendar,
  PermPhoneMsg,
  PhoneAndroid,
  PhoneIphone,
  PhoneBluetoothSpeaker,
  PhonelinkErase,
  PhonelinkLock,
  PhonelinkOff,
  PhonelinkRing,
  PhonelinkSetup,
  PortableWifiOff,
  RingVolume,
  VpnLock,
  VpnKey,
  Wifi,
  WifiOff,
  WifiProtectedSetup,
  WifiCalling,
  WifiCalling3,
  WifiFind,
  WifiLock,
  WifiPassword,
  WifiTethering,
  WifiTetheringError,
  WifiTetheringOff,
  SignalCellular0Bar,
  SignalCellular1Bar,
  SignalCellular2Bar,
  SignalCellular3Bar,
  SignalCellular4Bar,
  SignalCellularAlt,
  SignalCellularConnectedNoInternet0Bar,
  SignalCellularConnectedNoInternet1Bar,
  SignalCellularConnectedNoInternet2Bar,
  SignalCellularConnectedNoInternet3Bar,
  SignalCellularConnectedNoInternet4Bar,
  SignalCellularNoSim,
  SignalCellularNull,
  SignalCellularOff,
  SignalWifi0Bar,
  SignalWifi1Bar,
  SignalWifi1BarLock,
  SignalWifi2Bar,
  SignalWifi2BarLock,
  SignalWifi3Bar,
  SignalWifi3BarLock,
  SignalWifi4Bar,
  SignalWifi4BarLock,
  SignalWifiBad,
  SignalWifiConnectedNoInternet4,
  SignalWifiOff,
  SignalWifiStatusbar4Bar,
  SignalWifiStatusbarConnectedNoInternet4,
  SignalWifiStatusbarNull,
  NetworkLocked,
  RssFeed,
  Router,
  DeviceHub,
  Devices,
  DevicesOther,
  DeviceUnknown,
  Computer,
  Laptop,
  LaptopChromebook,
  LaptopMac,
  LaptopWindows,
  DesktopMac,
  DesktopWindows,
  Tablet,
  TabletAndroid,
  TabletMac,
  Watch,
  WatchLater,
  WatchOff,
  SmartWatch,
  Smartphone,
  CellWifi,
  CellTower,
  Nfc,
  Bluetooth,
  BluetoothAudio,
  BluetoothConnected,
  BluetoothDisabled,
  BluetoothDrive,
  BluetoothSearching,
  Usb,
  UsbOff,
  UsbConnected,
  Cable,
  Power,
  PowerOff,
  PowerInput,
  PowerSettingsNew,
  Battery20,
  Battery30,
  Battery50,
  Battery60,
  Battery80,
  Battery90,
  BatteryFull,
  BatteryUnknown,
  BatteryAlert,
  BatteryChargingFull,
  BatterySaver,
  BatteryStd,
  Memory,
  Storage,
  SdStorage,
  SdCard,
  SdCardAlert,
  SimCard,
  SimCardAlert,
  SimCardDownload,
  MobileFriendly,
  MobileOff,
  KeyboardAlt,
  KeyboardBackspace,
  KeyboardCapslock,
  KeyboardHide,
  KeyboardReturn,
  KeyboardTab,
  KeyboardVoice,
  Mouse,
  Gamepad,
  Games,
  SportsEsports,
  VideogameAsset,
  VideogameAssetOff,
  Casino,
  Toys,
  SmartToy,
  Adb,
  BugReport,
  Code,
  Css,
  Html,
  Javascript,
  DataObject,
  DataArray,
  Functions,
  IntegrationInstructions,
  Terminal,
  DeveloperMode,
  DeveloperBoard,
  DeveloperBoardOff,
  Dns,
  Http,
  Https,
  Api,
  CloudQueue,
  CloudDone,
  CloudDownload,
  CloudUpload,
  CloudOff,
  CloudSync,
  CloudCircle,
  Backup,
  BackupTable,
  Restore,
  RestorePage,
  RestoreFromTrash,
  Download,
  Upload,
  FileUpload,
  FileDownload,
  FileDownloadDone,
  FileDownloadOff,
  GetApp,
  Publish,
  CloudBackup,
  SyncAlt,
  SyncDisabled,
  SyncLock,
  SyncProblem,
  Update,
  SystemUpdateAlt,
  AppRegistration,
  AppShortcut,
  AppsOutage,
  ViewCarousel,
  ViewColumn,
  ViewDay,
  ViewHeadline,
  ViewInAr,
  ViewWeek,
  Grid3x3,
  Grid4x4,
  GridGoldenratio,
  GridOn,
  GridOff,
  TableRows,
  TableView,
  ViewArray,
  ViewStream,
  DragIndicator,
  PanTool,
  PanToolAlt,
  Swipe as SwipeIcon,
  SwipeDown,
  SwipeDownAlt,
  SwipeLeft,
  SwipeLeftAlt,
  SwipeRight,
  SwipeRightAlt,
  SwipeUp,
  SwipeUpAlt,
  SwipeVertical,
  PinchZoomOut,
  ZoomOutMap,
  CenterFocusWeak,
  LocationOff,
  GpsOff,
  ExploreOff as ExploreOffIcon,
  DirectionsWalk,
  DirectionsBike,
  DirectionsCar,
  DirectionsBus,
  DirectionsSubway,
  DirectionsTransit,
  DirectionsRailway,
  DirectionsBoat,
  ConnectingAirports as ConnectingAirportsIcon,
  LuggageOutlined,
  TravelExplore as TravelExploreIcon,
  LunchDining,
  DinnerDining,
  BreakfastDining,
  BrunchDining,
  RamenDining,
  RiceBowl,
  SetMeal,
  Bento,
  Tapas,
  Liquor,
  TrendingDown,
  TrendingFlat,
  Gantt,
  HistoryToggleOff,
  SwapHorizontalCircle,
  SwapVerticalCircle,
  MergeType,
  CreateNewFolder,
  Unarchive,
  CheckCircle,
  CheckCircleOutline,
  RadioButtonUnchecked,
  RadioButtonChecked,
  IndeterminateCheckBox,
  CheckBox,
  CheckBoxOutlineBlank,
  Chat,
  Message,
  Sms,
  Email,
  Notifications,
  NotificationsActive,
  NotificationsOff,
  Schedule,
  AccessTime,
  Timer,
  History,
  Poll,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Send,
  Attachment,
  EmojiEmotions as EmojiIcon,
  GifBox,
  PhotoCamera,
  VoiceChat,
  RecordVoiceOver,
  Hearing,
  VolumeUp,
  VolumeOff,
  Translate,
  QuestionAnswer,
  Forum,
  ChatBubble,
  TipsAndUpdates,
  Lightbulb,
  AutoAwesome as AutoAwesomeIcon,
  TrendingUp as TrendingUpIcon,
  Insights as InsightsIcon,
  Assessment as AssessmentIcon,
  BarChart as BarChartIcon,
  ShowChart as ShowChartIcon,
  Timeline as TimelineIcon,
  DataUsage as DataUsageIcon,
  Speed as SpeedIcon,
  MonitorHeart as MonitorHeartIcon,
  Psychology as PsychologyIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Mood,
  EmojiPeople,
  EmojiEvents as EmojiEventsIcon,
  EmojiObjects as EmojiObjectsIcon,
  EmojiSymbols as EmojiSymbolsIcon,
  Face as FaceIcon,
  Face2 as Face2Icon,
  Face3 as Face3Icon,
  Face4 as Face4Icon,
  Face5 as Face5Icon,
  Face6 as Face6Icon
} from '@mui/icons-material';

const PremiumFeaturesSubscription = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [premiumProgress, setPremiumProgress] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [premiumSettings, setPremiumSettings] = useState({
    selectedTier: 'premium',
    billingCycle: 'monthly',
    features: {
      unlimitedLikes: true,
      advancedFilters: true,
      priorityMatching: true,
      readReceipts: true,
      incognitoMode: true,
      boostProfile: true,
      superLikes: true,
      rewindFeature: true,
      passportFeature: true,
      premiumBadge: true,
      aiCoachingPlus: true,
      advancedAnalytics: true,
      exclusiveEvents: false,
      conciergeService: false,
      personalMatchmaker: false
    },
    analytics: {
      profileViews: 0,
      likes: 0,
      matches: 0,
      conversations: 0,
      responseRate: 0,
      attractivenessScore: 0,
      compatibilityScore: 0,
      successPrediction: 0
    },
    premiumScore: 0
  });

  const [showPlanDialog, setShowPlanDialog] = useState(false);
  const [showAnalyticsDialog, setShowAnalyticsDialog] = useState(false);
  const [showFeaturesDialog, setShowFeaturesDialog] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(null);

  // Subscription plans
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Flourish Basic',
      price: { monthly: 0, yearly: 0 },
      description: 'Essential features for meaningful connections',
      color: '#757575',
      icon: <PersonOutline />,
      features: [
        'Basic profile creation and matching',
        'Limited daily likes (10 per day)',
        'Basic messaging and communication',
        'Standard safety features',
        'Basic personality assessment',
        'Community guidelines support'
      ],
      limitations: [
        'Limited advanced filters',
        'No read receipts',
        'No profile boost',
        'Basic analytics only',
        'Standard customer support'
      ]
    },
    {
      id: 'premium',
      name: 'Flourish Premium',
      price: { monthly: 29.99, yearly: 299.99 },
      description: 'Advanced features for serious relationship seekers',
      color: '#1976d2',
      icon: <WorkspacePremium />,
      popular: true,
      features: [
        'Unlimited likes and super likes',
        'Advanced filtering and search',
        'Priority matching algorithm',
        'Read receipts and typing indicators',
        'Incognito mode and privacy controls',
        'Profile boost and visibility enhancement',
        'Rewind feature for second chances',
        'AI coaching and conversation assistance',
        'Advanced analytics and insights',
        'Premium badge and verification',
        'Priority customer support',
        'Exclusive content and tips'
      ],
      analytics: [
        'Detailed profile performance metrics',
        'Match quality and compatibility analysis',
        'Communication effectiveness tracking',
        'Success prediction and optimization',
        'Behavioral insights and patterns',
        'Relationship progress monitoring'
      ]
    },
    {
      id: 'platinum',
      name: 'Flourish Platinum',
      price: { monthly: 59.99, yearly: 599.99 },
      description: 'Ultimate relationship platform with exclusive benefits',
      color: '#7b1fa2',
      icon: <Diamond />,
      exclusive: true,
      features: [
        'All Premium features included',
        'Passport feature for global connections',
        'Exclusive events and meetups access',
        'Personal relationship concierge service',
        'Advanced AI matchmaker assistance',
        'Professional photo review and optimization',
        'Relationship coaching sessions (monthly)',
        'Priority placement in discovery',
        'Advanced compatibility algorithms',
        'Exclusive platinum badge and status',
        'VIP customer support (24/7)',
        'Early access to new features',
        'Personalized relationship insights',
        'Success guarantee program'
      ],
      analytics: [
        'Professional relationship analysis',
        'Personalized success strategies',
        'Advanced behavioral profiling',
        'Relationship milestone tracking',
        'Custom compatibility reports',
        'Professional coaching insights'
      ]
    }
  ];

  // Premium features
  const premiumFeatures = [
    {
      id: 'unlimited_likes',
      name: 'Unlimited Likes & Super Likes',
      description: 'Express interest without limits and stand out with super likes',
      icon: <FavoriteIcon />,
      color: '#e91e63',
      category: 'Engagement',
      tier: 'premium',
      benefits: [
        'Unlimited daily likes for maximum connections',
        '5 super likes per day to stand out',
        'Priority visibility in potential matches',
        'Increased match probability by 3x'
      ]
    },
    {
      id: 'advanced_filters',
      name: 'Advanced Filters & Search',
      description: 'Sophisticated filtering for precise match discovery',
      icon: <FilterAlt />,
      color: '#1976d2',
      category: 'Discovery',
      tier: 'premium',
      benefits: [
        'Advanced demographic and lifestyle filters',
        'Personality and values-based filtering',
        'Education and career-specific searches',
        'Custom filter combinations and saving'
      ]
    },
    {
      id: 'priority_matching',
      name: 'Priority Matching Algorithm',
      description: 'Enhanced matching with priority placement and optimization',
      icon: <TrendingUpIcon />,
      color: '#4caf50',
      category: 'Matching',
      tier: 'premium',
      benefits: [
        'Priority placement in discovery queue',
        'Enhanced matching algorithm access',
        'Compatibility score optimization',
        'Increased visibility by 5x'
      ]
    },
    {
      id: 'read_receipts',
      name: 'Read Receipts & Typing Indicators',
      description: 'Know when messages are read and when someone is typing',
      icon: <Chat />,
      color: '#ff9800',
      category: 'Communication',
      tier: 'premium',
      benefits: [
        'See when messages are read',
        'Real-time typing indicators',
        'Message delivery confirmations',
        'Enhanced communication insights'
      ]
    },
    {
      id: 'incognito_mode',
      name: 'Incognito Mode & Privacy',
      description: 'Browse privately and control your visibility',
      icon: <VisibilityOff />,
      color: '#795548',
      category: 'Privacy',
      tier: 'premium',
      benefits: [
        'Browse profiles without being seen',
        'Control who can see your profile',
        'Private mode for discreet browsing',
        'Enhanced privacy controls'
      ]
    },
    {
      id: 'profile_boost',
      name: 'Profile Boost & Visibility',
      description: 'Increase your profile visibility and reach more people',
      icon: <TrendingUp />,
      color: '#9c27b0',
      category: 'Visibility',
      tier: 'premium',
      benefits: [
        'Profile boost for 30 minutes of top visibility',
        '10x more profile views during boost',
        'Priority placement in discovery',
        'Enhanced match probability'
      ]
    },
    {
      id: 'rewind_feature',
      name: 'Rewind & Second Chances',
      description: 'Undo accidental passes and get second chances',
      icon: <Undo />,
      color: '#607d8b',
      category: 'Control',
      tier: 'premium',
      benefits: [
        'Undo accidental left swipes',
        'Unlimited rewind actions',
        'Second chance notifications',
        'Mistake prevention and recovery'
      ]
    },
    {
      id: 'ai_coaching_plus',
      name: 'AI Coaching Plus',
      description: 'Advanced AI coaching with personalized insights',
      icon: <PsychologyIcon />,
      color: '#3f51b5',
      category: 'Coaching',
      tier: 'premium',
      benefits: [
        'Advanced conversation coaching',
        'Personalized dating strategies',
        'Real-time communication assistance',
        'Success optimization recommendations'
      ]
    },
    {
      id: 'advanced_analytics',
      name: 'Advanced Analytics & Insights',
      description: 'Comprehensive analytics for dating success optimization',
      icon: <Analytics />,
      color: '#009688',
      category: 'Analytics',
      tier: 'premium',
      benefits: [
        'Detailed profile performance metrics',
        'Match quality and success analysis',
        'Communication effectiveness tracking',
        'Personalized improvement recommendations'
      ]
    },
    {
      id: 'passport_feature',
      name: 'Passport & Global Connections',
      description: 'Connect with people anywhere in the world',
      icon: <Flight />,
      color: '#ff5722',
      category: 'Global',
      tier: 'platinum',
      benefits: [
        'Change location to anywhere in the world',
        'Connect before traveling',
        'Global relationship opportunities',
        'Cultural exchange and diversity'
      ]
    },
    {
      id: 'exclusive_events',
      name: 'Exclusive Events & Meetups',
      description: 'Access to premium events and exclusive meetups',
      icon: <EmojiEventsIcon />,
      color: '#ffc107',
      category: 'Events',
      tier: 'platinum',
      benefits: [
        'Exclusive premium member events',
        'Local meetups and social gatherings',
        'Professional networking opportunities',
        'VIP access to special occasions'
      ]
    },
    {
      id: 'concierge_service',
      name: 'Relationship Concierge Service',
      description: 'Personal relationship assistant and support',
      icon: <ContactSupport />,
      color: '#8bc34a',
      category: 'Service',
      tier: 'platinum',
      benefits: [
        'Personal relationship concierge',
        'Date planning and coordination assistance',
        'Relationship advice and guidance',
        'Priority support and consultation'
      ]
    },
    {
      id: 'personal_matchmaker',
      name: 'Personal AI Matchmaker',
      description: 'Dedicated AI matchmaker for personalized connections',
      icon: <AutoAwesomeIcon />,
      color: '#e91e63',
      category: 'Matchmaking',
      tier: 'platinum',
      benefits: [
        'Dedicated AI matchmaker assistant',
        'Personalized match curation',
        'Proactive relationship opportunities',
        'Success-focused matching strategy'
      ]
    }
  ];

  // Calculate premium score
  useEffect(() => {
    const calculatePremiumScore = () => {
      let score = 0;
      let maxScore = 100;

      // Subscription tier (40 points)
      if (premiumSettings.selectedTier === 'platinum') score += 40;
      else if (premiumSettings.selectedTier === 'premium') score += 25;
      else score += 10;

      // Features enabled (40 points)
      const enabledFeatures = Object.values(premiumSettings.features).filter(Boolean).length;
      const totalFeatures = Object.keys(premiumSettings.features).length;
      score += Math.min((enabledFeatures / totalFeatures) * 40, 40);

      // Analytics engagement (20 points)
      const analyticsScore = (
        premiumSettings.analytics.profileViews +
        premiumSettings.analytics.likes +
        premiumSettings.analytics.matches +
        premiumSettings.analytics.conversations
      ) / 4;
      score += Math.min((analyticsScore / 100) * 20, 20);

      const finalScore = Math.round(score);
      setPremiumSettings(prev => ({ ...prev, premiumScore: finalScore }));
      setPremiumProgress(finalScore);
    };

    calculatePremiumScore();
  }, [premiumSettings.selectedTier, premiumSettings.features, premiumSettings.analytics]);

  // Update premium setting
  const updatePremiumSetting = (category, settingId, value) => {
    setPremiumSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [settingId]: value
      }
    }));
  };

  // Get premium level
  const getPremiumLevel = (score) => {
    if (score >= 90) return { level: 'Platinum Elite', color: '#7b1fa2', icon: <Diamond /> };
    if (score >= 70) return { level: 'Premium Plus', color: '#1976d2', icon: <WorkspacePremium /> };
    if (score >= 50) return { level: 'Premium', color: '#4caf50', icon: <Star /> };
    if (score >= 30) return { level: 'Enhanced', color: '#ff9800', icon: <AutoAwesome /> };
    return { level: 'Basic', color: '#757575', icon: <PersonOutline /> };
  };

  // Get plan savings
  const getPlanSavings = (plan) => {
    if (plan.price.yearly > 0) {
      const monthlyCost = plan.price.monthly * 12;
      const savings = monthlyCost - plan.price.yearly;
      const percentage = Math.round((savings / monthlyCost) * 100);
      return { amount: savings, percentage };
    }
    return { amount: 0, percentage: 0 };
  };

  // Render premium overview
  const renderPremiumOverview = () => {
    const premiumLevel = getPremiumLevel(premiumSettings.premiumScore);
    const currentPlan = subscriptionPlans.find(plan => plan.id === premiumSettings.selectedTier);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Premium Features & Subscription
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={premiumProgress}
                size={120}
                thickness={6}
                sx={{ color: 'white' }}
              />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                  {premiumSettings.premiumScore}%
                </Typography>
                <Typography variant="body2" component="div">
                  Premium
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={premiumLevel.icon}
              label={premiumLevel.level}
              sx={{
                backgroundColor: premiumLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Premium Experience Enhancement
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Unlock advanced features, exclusive benefits, and premium analytics for the ultimate relationship platform experience.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: `2px solid ${currentPlan?.color || '#757575'}` }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: currentPlan?.color || '#757575',
                  color: 'white'
                }}
              >
                {currentPlan?.icon || <PersonOutline />}
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Current Plan
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: currentPlan?.color || '#757575', mb: 1 }}>
                {currentPlan?.name || 'Basic'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {billingCycle === 'yearly' ? 'Annual billing' : 'Monthly billing'}
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #e91e63' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#e91e63',
                  color: 'white'
                }}
              >
                <FavoriteIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Features Active
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 1 }}>
                {Object.values(premiumSettings.features).filter(Boolean).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premium features
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #4caf50' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#4caf50',
                  color: 'white'
                }}
              >
                <Analytics />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Analytics Score
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {premiumSettings.analytics.attractivenessScore || 85}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Profile performance
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #ff9800' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#ff9800',
                  color: 'white'
                }}
              >
                <TrendingUp />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Success Rate
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
                {premiumSettings.analytics.successPrediction || 92}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Match success
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Premium Experience:</strong> Unlock the full potential of the Flourish platform with 
            advanced features, exclusive benefits, and comprehensive analytics designed to maximize your 
            relationship success and meaningful connections.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render subscription plans
  const renderSubscriptionPlans = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Choose Your Subscription Plan
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <ToggleButtonGroup
          value={billingCycle}
          exclusive
          onChange={(e, newValue) => {
            if (newValue) setBillingCycle(newValue);
          }}
          sx={{ backgroundColor: 'white', borderRadius: 2 }}
        >
          <ToggleButton value="monthly" sx={{ px: 3, py: 1 }}>
            Monthly
          </ToggleButton>
          <ToggleButton value="yearly" sx={{ px: 3, py: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="body2">Yearly</Typography>
              <Chip label="Save 17%" size="small" color="success" sx={{ mt: 0.5 }} />
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {subscriptionPlans.map((plan) => {
          const savings = getPlanSavings(plan);
          const isSelected = selectedPlan === plan.id;
          
          return (
            <Grid item xs={12} md={4} key={plan.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  border: `3px solid ${isSelected ? plan.color : '#e0e0e0'}`,
                  backgroundColor: isSelected ? `${plan.color}10` : 'white',
                  position: 'relative',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: 4 },
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <Chip
                    label="Most Popular"
                    color="primary"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      fontWeight: 'bold',
                      zIndex: 1
                    }}
                  />
                )}
                {plan.exclusive && (
                  <Chip
                    label="Exclusive"
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: plan.color,
                      color: 'white',
                      fontWeight: 'bold',
                      zIndex: 1
                    }}
                  />
                )}
                
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      backgroundColor: plan.color,
                      color: 'white'
                    }}
                  >
                    {plan.icon}
                  </Avatar>
                  
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {plan.name}
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    {plan.price[billingCycle] === 0 ? (
                      <Typography variant="h3" sx={{ fontWeight: 'bold', color: plan.color }}>
                        Free
                      </Typography>
                    ) : (
                      <>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', color: plan.color }}>
                          ${plan.price[billingCycle]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {billingCycle === 'yearly' ? 'per year' : 'per month'}
                        </Typography>
                        {billingCycle === 'yearly' && savings.amount > 0 && (
                          <Chip
                            label={`Save $${savings.amount} (${savings.percentage}%)`}
                            color="success"
                            size="small"
                            sx={{ mt: 1 }}
                          />
                        )}
                      </>
                    )}
                  </Box>
                  
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {plan.description}
                  </Typography>
                  
                  <Button
                    variant={isSelected ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      backgroundColor: isSelected ? plan.color : 'transparent',
                      borderColor: plan.color,
                      color: isSelected ? 'white' : plan.color,
                      fontWeight: 'bold',
                      py: 1.5,
                      mb: 3,
                      '&:hover': {
                        backgroundColor: plan.color,
                        color: 'white'
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(plan.id);
                      setPremiumSettings(prev => ({ ...prev, selectedTier: plan.id }));
                    }}
                  >
                    {isSelected ? 'Selected' : 'Choose Plan'}
                  </Button>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
                    Key Features:
                  </Typography>
                  <List dense>
                    {plan.features.slice(0, 6).map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                        <ListItemIcon>
                          <CheckCircle sx={{ color: plan.color, fontSize: 18 }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
                        />
                      </ListItem>
                    ))}
                    {plan.features.length > 6 && (
                      <ListItem sx={{ px: 0, py: 0.5 }}>
                        <ListItemText
                          primary={`+${plan.features.length - 6} more features`}
                          primaryTypographyProps={{ 
                            fontSize: '0.875rem', 
                            fontStyle: 'italic',
                            color: 'text.secondary'
                          }}
                        />
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setShowPlanDialog(true)}
          sx={{
            background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)',
            color: 'white',
            px: 4,
            py: 2,
            mr: 2
          }}
        >
          Compare All Features
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setShowAnalyticsDialog(true)}
          sx={{ px: 4, py: 2 }}
        >
          View Analytics
        </Button>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          💎 Premium Features & Subscription
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Unlock the full potential of meaningful connections with premium features
        </Typography>
      </Box>

      {/* Premium Overview */}
      {renderPremiumOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Subscription Plans" />
          <Tab label="Premium Features" />
          <Tab label="Analytics Dashboard" />
          <Tab label="Billing & Account" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderSubscriptionPlans()}
      {selectedTab === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Premium Features Overview
          </Typography>
          
          <Grid container spacing={3}>
            {premiumFeatures.map((feature) => {
              const isEnabled = premiumSettings.features[feature.id.replace('_', '').toLowerCase()] || 
                               premiumSettings.features[feature.id];
              const isAvailable = feature.tier === 'premium' || 
                                (feature.tier === 'platinum' && premiumSettings.selectedTier === 'platinum');
              
              return (
                <Grid item xs={12} md={6} key={feature.id}>
                  <Card 
                    sx={{ 
                      height: '100%',
                      border: `2px solid ${isEnabled && isAvailable ? feature.color : '#e0e0e0'}`,
                      backgroundColor: isEnabled && isAvailable ? `${feature.color}10` : 'white',
                      opacity: isAvailable ? 1 : 0.6,
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar
                          sx={{
                            width: 50,
                            height: 50,
                            mr: 2,
                            backgroundColor: isEnabled && isAvailable ? feature.color : '#ccc',
                            color: 'white'
                          }}
                        >
                          {feature.icon}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {feature.name}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                            <Chip
                              label={feature.category}
                              size="small"
                              sx={{
                                backgroundColor: isEnabled && isAvailable ? feature.color : '#ccc',
                                color: 'white'
                              }}
                            />
                            <Chip
                              label={feature.tier.charAt(0).toUpperCase() + feature.tier.slice(1)}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: feature.tier === 'platinum' ? '#7b1fa2' : '#1976d2',
                                color: feature.tier === 'platinum' ? '#7b1fa2' : '#1976d2'
                              }}
                            />
                          </Box>
                        </Box>
                        {isAvailable && (
                          <Switch
                            checked={isEnabled}
                            onChange={(e) => {
                              const settingKey = feature.id.replace('_', '').toLowerCase();
                              updatePremiumSetting('features', settingKey, e.target.checked);
                            }}
                            color="primary"
                          />
                        )}
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {feature.description}
                      </Typography>
                      
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Key Benefits:
                      </Typography>
                      <List dense>
                        {feature.benefits.map((benefit, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon>
                              {isEnabled && isAvailable ? (
                                <CheckCircle sx={{ color: feature.color, fontSize: 16 }} />
                              ) : (
                                <CheckCircleOutline sx={{ color: '#ccc', fontSize: 16 }} />
                              )}
                            </ListItemIcon>
                            <ListItemText
                              primary={benefit}
                              primaryTypographyProps={{ fontSize: '0.875rem' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      
                      {!isAvailable && (
                        <Alert severity="info" sx={{ mt: 2 }}>
                          <Typography variant="body2">
                            Upgrade to {feature.tier.charAt(0).toUpperCase() + feature.tier.slice(1)} to unlock this feature
                          </Typography>
                        </Alert>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Premium Analytics Dashboard
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Performance Metrics
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63' }}>
                        {premiumSettings.analytics.profileViews || 1247}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Profile Views
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        {premiumSettings.analytics.likes || 342}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Likes Received
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                        {premiumSettings.analytics.matches || 89}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Quality Matches
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                        {premiumSettings.analytics.conversations || 67}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Conversations
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 4 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Success Metrics
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Response Rate</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {premiumSettings.analytics.responseRate || 78}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={premiumSettings.analytics.responseRate || 78} 
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Attractiveness Score</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {premiumSettings.analytics.attractivenessScore || 85}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={premiumSettings.analytics.attractivenessScore || 85} 
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Compatibility Score</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {premiumSettings.analytics.compatibilityScore || 91}%
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={premiumSettings.analytics.compatibilityScore || 91} 
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #7b1fa2' }}>
                <Diamond sx={{ fontSize: 60, color: '#7b1fa2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Premium Analytics
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Your premium analytics provide deep insights into your dating success and optimization opportunities.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setShowAnalyticsDialog(true)}
                  sx={{ backgroundColor: '#7b1fa2', mb: 2 }}
                >
                  View Detailed Report
                </Button>
                <Typography variant="caption" color="text.secondary">
                  Premium level: {getPremiumLevel(premiumSettings.premiumScore).level}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          
          <Alert severity="success" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Premium Analytics Active!</strong> Your premium subscription provides comprehensive 
              analytics and insights to optimize your dating success and meaningful connections.
            </Typography>
          </Alert>
        </Box>
      )}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Billing & Account Management
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Current Subscription
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 3,
                      backgroundColor: subscriptionPlans.find(p => p.id === premiumSettings.selectedTier)?.color || '#757575'
                    }}
                  >
                    {subscriptionPlans.find(p => p.id === premiumSettings.selectedTier)?.icon || <PersonOutline />}
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {subscriptionPlans.find(p => p.id === premiumSettings.selectedTier)?.name || 'Basic Plan'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {billingCycle === 'yearly' ? 'Annual billing' : 'Monthly billing'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Next billing: {new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Box>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Billing Preferences
                </Typography>
                
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Billing Cycle</InputLabel>
                  <Select
                    value={billingCycle}
                    label="Billing Cycle"
                    onChange={(e) => setBillingCycle(e.target.value)}
                  >
                    <MenuItem value="monthly">Monthly</MenuItem>
                    <MenuItem value="yearly">Yearly (Save 17%)</MenuItem>
                  </Select>
                </FormControl>
                
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" fullWidth>
                    Update Payment Method
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Download Invoice
                  </Button>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Account Actions
                </Typography>
                
                <Stack spacing={2}>
                  <Button variant="contained" fullWidth color="primary">
                    Upgrade Plan
                  </Button>
                  <Button variant="outlined" fullWidth>
                    Pause Subscription
                  </Button>
                  <Button variant="outlined" fullWidth color="error">
                    Cancel Subscription
                  </Button>
                </Stack>
                
                <Alert severity="info" sx={{ mt: 3 }}>
                  <Typography variant="body2">
                    Need help? Contact our premium support team for personalized assistance.
                  </Typography>
                </Alert>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Enhanced Communication Tools)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Communication Tools
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save premium settings and continue to next screen
            localStorage.setItem('premiumSettings', JSON.stringify({
              ...premiumSettings,
              timestamp: new Date().toISOString()
            }));
            console.log('Premium features configuration complete - moving to next screen');
          }}
          sx={{
            background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)',
            color: 'white'
          }}
        >
          Continue to Advanced Analytics
        </Button>
      </Box>

      {/* Plan Comparison Dialog */}
      <Dialog open={showPlanDialog} onClose={() => setShowPlanDialog(false)} maxWidth="lg" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <WorkspacePremium sx={{ mr: 1 }} />
            Complete Plan Comparison
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Feature Comparison Across All Plans
            </Typography>
            
            <Grid container spacing={2}>
              {subscriptionPlans.map((plan) => (
                <Grid item xs={12} md={4} key={plan.id}>
                  <Card sx={{ p: 2, border: `2px solid ${plan.color}` }}>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          mx: 'auto',
                          mb: 1,
                          backgroundColor: plan.color
                        }}
                      >
                        {plan.icon}
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {plan.name}
                      </Typography>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', color: plan.color }}>
                        {plan.price[billingCycle] === 0 ? 'Free' : `$${plan.price[billingCycle]}`}
                      </Typography>
                    </Box>
                    
                    <List dense>
                      {plan.features.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
                          <ListItemIcon>
                            <CheckCircle sx={{ color: plan.color, fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ fontSize: '0.75rem' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPlanDialog(false)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Analytics Dialog */}
      <Dialog open={showAnalyticsDialog} onClose={() => setShowAnalyticsDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Analytics sx={{ mr: 1 }} />
            Detailed Premium Analytics
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Premium Performance Insights
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ width: 30, height: 30, mr: 1, backgroundColor: '#e91e63' }}>
                      <FavoriteIcon />
                    </Avatar>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Engagement Metrics
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Profile views: {premiumSettings.analytics.profileViews || 1247}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Likes received: {premiumSettings.analytics.likes || 342}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Response rate: {premiumSettings.analytics.responseRate || 78}%
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Avatar sx={{ width: 30, height: 30, mr: 1, backgroundColor: '#4caf50' }}>
                      <TrendingUp />
                    </Avatar>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Success Metrics
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Quality matches: {premiumSettings.analytics.matches || 89}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Conversations: {premiumSettings.analytics.conversations || 67}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Success prediction: {premiumSettings.analytics.successPrediction || 92}%
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            
            <Typography variant="body2" color="text.secondary">
              Your premium analytics show strong performance across all key metrics. Continue optimizing 
              your profile and communication for even better results.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAnalyticsDialog(false)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Premium Notice */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Premium Experience:</strong> Your premium subscription unlocks the full potential 
          of the Flourish platform with advanced features, exclusive benefits, and comprehensive 
          analytics designed to maximize your relationship success.
        </Typography>
      </Alert>
    </Container>
  );
};

export default PremiumFeaturesSubscription;

