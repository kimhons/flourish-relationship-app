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
  FormHelperText
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Emergency,
  LocalHospital,
  Phone,
  Call,
  ContactPhone,
  SupportAgent,
  Crisis,
  Warning,
  Error,
  Security,
  Shield,
  VerifiedUser,
  PersonOff,
  NotInterested,
  Delete,
  Clear,
  Edit,
  Save,
  Cancel,
  CheckCircle,
  Info,
  Help,
  HelpOutline,
  InfoOutlined,
  WarningAmber,
  ErrorOutline,
  CheckCircleOutline,
  RadioButtonUnchecked,
  RadioButtonChecked,
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  ToggleOn,
  ToggleOff,
  PowerSettingsNew,
  Public,
  PublicOff,
  Groups,
  Group,
  Person,
  People,
  PersonAdd,
  PersonRemove,
  AccountCircle,
  Face,
  Photo,
  PhotoCamera,
  Image,
  Collections,
  Folder,
  FolderOpen,
  Description,
  Article,
  Subject,
  Topic,
  Label,
  LocalOffer,
  Bookmark,
  Star,
  Favorite,
  ThumbUp,
  Comment,
  Share,
  Send,
  Message,
  Chat,
  Email,
  Videocam,
  VideoCall,
  LocationOn,
  LocationOff,
  MyLocation,
  GpsFixed,
  GpsOff,
  Place,
  Room,
  Map,
  Navigation,
  Explore,
  Search,
  FindInPage,
  FilterAlt,
  Sort,
  ViewList,
  ViewModule,
  ViewQuilt,
  ViewStream,
  Dashboard,
  Analytics,
  Assessment,
  Poll,
  BarChart,
  PieChart,
  ShowChart,
  TrendingUp,
  DataUsage,
  Storage,
  CloudQueue,
  CloudDone,
  CloudOff,
  Backup,
  Restore,
  Download,
  Upload,
  Sync,
  History,
  Schedule,
  Timer,
  AccessTime,
  DateRange,
  CalendarToday,
  Event,
  Today,
  Update,
  Refresh,
  Autorenew,
  Loop,
  Cached,
  ChangeCircle,
  SwapHoriz,
  SwapVert,
  ImportExport,
  GetApp,
  Publish,
  FileUpload,
  FileDownload,
  DriveFileMove,
  CreateNewFolder,
  Archive,
  Unarchive,
  Inventory,
  Category,
  Class,
  Style,
  Palette,
  ColorLens,
  Brush,
  FormatPaint,
  Texture,
  Gradient,
  Opacity,
  Layers,
  FilterNone,
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  Filter5,
  Filter6,
  Filter7,
  Filter8,
  Filter9,
  FilterBAndW,
  FilterCenterFocus,
  FilterDrama,
  FilterFrames,
  FilterHdr,
  FilterTiltShift,
  FilterVintage,
  Flare,
  Flash,
  FlashAuto,
  FlashOff,
  FlashOn,
  Highlight,
  HighlightOff,
  Iso,
  Lens,
  LensBlur,
  Looks,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
  LooksOne,
  LooksTwo,
  Loupe,
  Monochrome,
  MovieCreation,
  MovieFilter,
  MusicNote,
  MusicOff,
  Nature,
  NaturePeople,
  NearMe,
  NetworkCell,
  NetworkWifi,
  NewReleases,
  NightlightRound,
  NoFlash,
  NotListedLocation,
  Panorama,
  PanoramaFishEye,
  PanoramaHorizontal,
  PanoramaVertical,
  PanoramaWideAngle,
  PhotoAlbum,
  PhotoFilter,
  PhotoLibrary,
  PhotoSizeSelectActual,
  PhotoSizeSelectLarge,
  PhotoSizeSelectSmall,
  PictureAsPdf,
  Portrait,
  Receipt,
  ReceiptLong,
  RecentActors,
  RemoveRedEye,
  Rotate90DegreesCcw,
  Rotate90DegreesCw,
  RotateLeft,
  RotateRight,
  Scanner,
  Slideshow,
  StraightenIcon,
  SwitchAccount,
  SwitchCamera,
  SwitchLeft,
  SwitchRight,
  SwitchVideo,
  TagFaces,
  TextRotateUp,
  TextRotateVertical,
  TextRotationDown,
  TextRotationNone,
  ThreeSixty,
  Timer10,
  Timer3,
  TimerOff,
  Timelapse,
  Transform,
  Tune,
  TurnedIn,
  TurnedInNot,
  Undo,
  Redo,
  ViewCarousel,
  ViewColumn,
  ViewComfy,
  ViewCompact,
  ViewDay,
  ViewHeadline,
  ViewInAr,
  ViewWeek,
  Vignette,
  WbAuto,
  WbCloudy,
  WbIncandescent,
  WbIridescent,
  WbShade,
  WbSunny,
  WbTwilight,
  Widgets,
  ZoomIn,
  ZoomOut,
  ZoomOutMap,
  ExpandMore,
  ExpandLess,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
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
  Close,
  Add,
  Remove,
  Done,
  DoneAll,
  DoneOutline,
  ThumbUpAlt,
  ThumbDownAlt,
  ThumbsUpDown,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
  Mood,
  MoodBad,
  EmojiPeople,
  EmojiEmotions,
  EmojiEvents,
  EmojiFlags,
  EmojiFood,
  EmojiNature,
  EmojiObjects,
  EmojiSymbols,
  EmojiTransportation,
  Psychology,
  PsychologyAlt,
  MonitorHeart,
  HealthAndSafety,
  SafetyCheck,
  ConnectWithoutContact,
  Diversity3,
  FamilyRestroom,
  Handshake,
  VolunteerActivism,
  ContactSupport,
  LiveHelp,
  QuestionAnswer,
  Forum,
  ChatBubble,
  Recommend,
  TipsAndUpdates,
  AutoFixHigh,
  Lightbulb,
  AutoAwesome,
  Stars,
  StarBorder,
  StarHalf,
  StarOutline,
  StarRate,
  Grade,
  WorkspacePremium,
  Diamond,
  Verified,
  NewLabel,
  FiberNew,
  Upgrade,
  SystemUpdate,
  SystemUpdateAlt,
  InstallMobile,
  InstallDesktop,
  AppRegistration,
  AppShortcut,
  Apps,
  AppsOutage,
  Extension,
  SpaceDashboard,
  ViewAgenda,
  GridView,
  Grid3x3,
  Grid4x4,
  GridGoldenratio,
  CalendarMonth,
  AccessAlarm,
  Alarm,
  AlarmAdd,
  AlarmOff,
  AlarmOn,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  HourglassTop,
  HourglassBottom,
  MoreTime,
  HistoryToggleOff,
  RestoreFromTrash,
  RestorePage,
  BackupTable,
  CloudBackup,
  SettingsBackupRestore,
  SyncAlt,
  SyncDisabled,
  SyncLock,
  SyncProblem,
  Repeat,
  RepeatOne,
  RepeatOn,
  Shuffle,
  ShuffleOn,
  CompareArrows,
  SwapHorizontalCircle,
  SwapVerticalCircle,
  CallMade,
  CallReceived,
  CallSplit,
  CallMerge,
  Merge,
  MergeType,
  CallToAction,
  Campaign,
  Announcement,
  RecordVoiceOver,
  VoiceOverOff,
  Hearing,
  HearingDisabled,
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp,
  Mic,
  MicOff,
  MicNone,
  MicExternalOn,
  MicExternalOff,
  Headset,
  HeadsetMic,
  HeadsetOff,
  Speaker,
  SpeakerGroup,
  SpeakerPhone,
  Surround,
  GraphicEq,
  Equalizer,
  LibraryMusic,
  LibraryAdd,
  LibraryAddCheck,
  QueueMusic,
  Queue,
  QueuePlayNext,
  PlaylistAdd,
  PlaylistAddCheck,
  PlaylistPlay,
  PlaylistRemove,
  Album,
  AudioFile,
  VideoFile,
  Movie,
  LiveTv,
  OndemandVideo,
  VideoLibrary,
  VideoSettings,
  Theaters,
  LocalMovies,
  CameraAlt,
  Camera,
  CameraFront,
  CameraRear,
  CameraRoll,
  CameraEnhance,
  Wallpaper,
  BlurOn,
  BlurOff,
  BlurCircular,
  BlurLinear,
  WbFluorescent,
  SlowMotionVideo,
  Hd,
  Hq,
  Sd,
  FourK,
  EightK,
  AutoFixNormal,
  AutoFixOff,
  AutoMode,
  AutoDelete,
  AutoDeleteOutlined,
  SkipNext,
  SkipPrevious,
  FastForward,
  FastRewind,
  PlayArrow,
  Pause,
  Stop,
  FiberManualRecord,
  Radio,
  Podcasts,
  Brightness1,
  Brightness2,
  Brightness3,
  Brightness4,
  Brightness5,
  Brightness6,
  Brightness7,
  BrightnessHigh,
  BrightnessLow,
  BrightnessMedium,
  BrightnessAuto,
  Nightlight,
  Party,
  Festival,
  Attractions,
  LocalActivity,
  NightLife,
  SportsBar,
  Wine,
  Liquor,
  Tapas,
  Bento,
  SetMeal,
  RiceBowl,
  RamenDining,
  BrunchDining,
  BreakfastDining,
  DinnerDining,
  LunchDining,
  IceCream,
  Fastfood,
  LocalPizza,
  LocalCafe,
  LocalBar,
  LocalDining,
  Restaurant,
  Hotel,
  Flight,
  DirectionsRailway,
  DirectionsTransit,
  DirectionsSubway,
  DirectionsBus,
  DirectionsCar,
  DirectionsWalk,
  DirectionsBike,
  DirectionsBoat,
  Rowing,
  Kayaking,
  Sailing,
  Surfing,
  KiteSurfing,
  BeachAccess,
  HotTub,
  Spa,
  SelfImprovement,
  FitnessCenter,
  Pool,
  SportsRugby,
  SportsCricket,
  SportsHockey,
  SportsGolf,
  SportsVolleyball,
  SportsTennis,
  SportsBaseball,
  SportsFootball,
  SportsBasketball,
  SportsSoccer,
  SportsHandball,
  Games,
  Puzzle,
  Toys,
  Casino,
  SportsEsports,
  VideogameAsset,
  Mouse,
  Keyboard,
  Headphones,
  Tv,
  Watch,
  TabletAndroid,
  TabletMac,
  Tablet,
  PhoneAndroid,
  PhoneIphone,
  DesktopWindows,
  DesktopMac,
  LaptopChromebook,
  LaptopWindows,
  LaptopMac,
  Laptop,
  Computer,
  DevicesOther,
  Devices,
  DeviceHub,
  Router,
  NetworkCheck,
  SignalWifiOff,
  SignalWifiConnectedNoInternet4,
  SignalWifiBad,
  SignalWifiStatusbarNull,
  SignalWifiStatusbarConnectedNoInternet4,
  SignalWifiStatusbar4Bar,
  SignalWifi4Bar,
  WifiProtectedSetup,
  Wifi,
  WifiOff,
  BubbleChart,
  ScatterPlot,
  MultilineChart,
  AreaChart,
  DonutLarge,
  Trending,
  Whatshot,
  Sell,
  Discount,
  Redeem,
  CardGiftcard,
  Cake,
  Celebration,
  SportsScore,
  DirectionsRun,
  Route,
  Compass,
  Balance,
  Scale,
  Gavel,
  AccountBalance,
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
  AccessibleForward,
  Wheelchair,
  ElderlyWoman,
  Man,
  Woman,
  Boy,
  Girl,
  Baby,
  Toddler,
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
  Directions,
  CloudUpload,
  FolderShared,
  FolderSpecial,
  FolderCopy,
  FolderDelete,
  FolderOff,
  FolderZip,
  SnippetFolder,
  RuleFolder,
  TopicFolder,
  WorkspacesFilled,
  Workspaces,
  Dangerous,
  ReportProblem,
  GppBad,
  GppGood,
  GppMaybe,
  AdminPanelSettings,
  ManageAccounts,
  SupervisorAccount,
  Policy,
  PrivacyTip,
  EnhancedEncryption,
  Https,
  Lock,
  LockOpen,
  NoEncryption,
  VpnKey,
  VpnLock,
  Block,
  NotificationImportant,
  PriorityHigh,
  Announcement as AnnouncementIcon,
  Campaign as CampaignIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  VoiceOverOff as VoiceOverOffIcon,
  Hearing as HearingIcon,
  HearingDisabled as HearingDisabledIcon,
  VolumeOff as VolumeOffIcon,
  VolumeMute as VolumeMuteIcon,
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  MicNone as MicNoneIcon,
  MicExternalOn as MicExternalOnIcon,
  MicExternalOff as MicExternalOffIcon,
  Headset as HeadsetIcon,
  HeadsetMic as HeadsetMicIcon,
  HeadsetOff as HeadsetOffIcon,
  Speaker as SpeakerIcon,
  SpeakerGroup as SpeakerGroupIcon,
  SpeakerPhone as SpeakerPhoneIcon
} from '@mui/icons-material';

const EmergencyFeaturesCrisisSupport = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [emergencySettings, setEmergencySettings] = useState({
    emergencyContacts: [],
    crisisDetection: {
      enabled: true,
      sensitivity: 'medium',
      autoResponse: true,
      professionalReferral: true,
      emergencyServices: true
    },
    emergencyFeatures: {
      panicButton: true,
      locationSharing: true,
      emergencyProfile: true,
      crisisChat: true,
      professionalSupport: true,
      emergencyNotifications: true
    },
    crisisSupport: {
      immediateResponse: true,
      professionalCounseling: true,
      peerSupport: false,
      followUpCare: true,
      resourceLibrary: true,
      crisisPlanning: true
    },
    emergencyScore: 0
  });

  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showCrisisDialog, setShowCrisisDialog] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState({
    name: '',
    relationship: '',
    phone: '',
    email: '',
    priority: 'primary',
    canShareLocation: false,
    notifyInEmergency: true
  });

  // Emergency contact types
  const contactTypes = [
    { value: 'primary', label: 'Primary Emergency Contact', description: 'First person to contact in emergency' },
    { value: 'secondary', label: 'Secondary Contact', description: 'Backup emergency contact' },
    { value: 'family', label: 'Family Member', description: 'Close family member' },
    { value: 'friend', label: 'Trusted Friend', description: 'Close friend who can help' },
    { value: 'professional', label: 'Professional Support', description: 'Therapist, counselor, or medical professional' },
    { value: 'legal', label: 'Legal Contact', description: 'Lawyer or legal advisor' }
  ];

  // Crisis types and resources
  const crisisTypes = [
    {
      id: 'domestic_violence',
      name: 'Domestic Violence',
      description: 'Physical, emotional, or sexual abuse by partner',
      icon: <Shield />,
      color: '#d32f2f',
      severity: 'critical',
      resources: [
        { name: 'National Domestic Violence Hotline', phone: '1-800-799-7233', available: '24/7' },
        { name: 'Crisis Text Line', contact: 'Text START to 88788', available: '24/7' },
        { name: 'Local Police', phone: '911', available: '24/7' }
      ]
    },
    {
      id: 'sexual_assault',
      name: 'Sexual Assault',
      description: 'Sexual violence or assault',
      icon: <Security />,
      color: '#c62828',
      severity: 'critical',
      resources: [
        { name: 'RAINN National Sexual Assault Hotline', phone: '1-800-656-4673', available: '24/7' },
        { name: 'Crisis Text Line', contact: 'Text HELLO to 741741', available: '24/7' },
        { name: 'Local Emergency Services', phone: '911', available: '24/7' }
      ]
    },
    {
      id: 'mental_health',
      name: 'Mental Health Crisis',
      description: 'Severe depression, anxiety, or suicidal thoughts',
      icon: <Psychology />,
      color: '#7b1fa2',
      severity: 'high',
      resources: [
        { name: 'National Suicide Prevention Lifeline', phone: '988', available: '24/7' },
        { name: 'Crisis Text Line', contact: 'Text HOME to 741741', available: '24/7' },
        { name: 'SAMHSA National Helpline', phone: '1-800-662-4357', available: '24/7' }
      ]
    },
    {
      id: 'stalking',
      name: 'Stalking & Harassment',
      description: 'Being followed, watched, or harassed',
      icon: <PersonOff />,
      color: '#f57c00',
      severity: 'high',
      resources: [
        { name: 'Stalking Resource Center', phone: '1-855-484-2846', available: 'Business hours' },
        { name: 'Local Police', phone: '911', available: '24/7' },
        { name: 'Victim Connect Resource Center', phone: '1-855-484-2846', available: '24/7' }
      ]
    },
    {
      id: 'substance_abuse',
      name: 'Substance Abuse',
      description: 'Drug or alcohol related emergency',
      icon: <LocalHospital />,
      color: '#388e3c',
      severity: 'high',
      resources: [
        { name: 'SAMHSA National Helpline', phone: '1-800-662-4357', available: '24/7' },
        { name: 'Poison Control', phone: '1-800-222-1222', available: '24/7' },
        { name: 'Emergency Medical Services', phone: '911', available: '24/7' }
      ]
    },
    {
      id: 'financial_abuse',
      name: 'Financial Abuse',
      description: 'Financial exploitation or fraud',
      icon: <AttachMoney />,
      color: '#1976d2',
      severity: 'medium',
      resources: [
        { name: 'FTC Consumer Sentinel', phone: '1-877-382-4357', available: 'Business hours' },
        { name: 'Elder Abuse Hotline', phone: '1-800-677-1116', available: 'Business hours' },
        { name: 'Local Police', phone: '911', available: '24/7' }
      ]
    }
  ];

  // Emergency services
  const emergencyServices = [
    {
      id: 'emergency_911',
      name: 'Emergency Services (911)',
      description: 'Immediate life-threatening emergencies',
      icon: <Emergency />,
      color: '#d32f2f',
      phone: '911',
      available: '24/7',
      type: 'emergency'
    },
    {
      id: 'crisis_text',
      name: 'Crisis Text Line',
      description: 'Text-based crisis support',
      icon: <Message />,
      color: '#1976d2',
      contact: 'Text HOME to 741741',
      available: '24/7',
      type: 'crisis'
    },
    {
      id: 'suicide_prevention',
      name: 'Suicide Prevention Lifeline',
      description: 'Suicide prevention and mental health crisis',
      icon: <Psychology />,
      color: '#7b1fa2',
      phone: '988',
      available: '24/7',
      type: 'mental_health'
    },
    {
      id: 'domestic_violence',
      name: 'Domestic Violence Hotline',
      description: 'Support for domestic violence situations',
      icon: <Shield />,
      color: '#d32f2f',
      phone: '1-800-799-7233',
      available: '24/7',
      type: 'domestic_violence'
    },
    {
      id: 'sexual_assault',
      name: 'Sexual Assault Hotline',
      description: 'Support for sexual assault survivors',
      icon: <Security />,
      color: '#c62828',
      phone: '1-800-656-4673',
      available: '24/7',
      type: 'sexual_assault'
    },
    {
      id: 'poison_control',
      name: 'Poison Control',
      description: 'Poison and overdose emergencies',
      icon: <LocalHospital />,
      color: '#388e3c',
      phone: '1-800-222-1222',
      available: '24/7',
      type: 'medical'
    }
  ];

  // Calculate emergency preparedness score
  useEffect(() => {
    const calculateEmergencyScore = () => {
      let score = 0;
      let maxScore = 0;

      // Emergency contacts (25 points)
      maxScore += 25;
      const contactCount = emergencySettings.emergencyContacts.length;
      score += Math.min(25, contactCount * 8); // Up to 3 contacts for full points

      // Crisis detection settings (25 points)
      maxScore += 25;
      if (emergencySettings.crisisDetection.enabled) score += 10;
      if (emergencySettings.crisisDetection.autoResponse) score += 5;
      if (emergencySettings.crisisDetection.professionalReferral) score += 5;
      if (emergencySettings.crisisDetection.emergencyServices) score += 5;

      // Emergency features (25 points)
      maxScore += 25;
      const emergencyFeatures = Object.values(emergencySettings.emergencyFeatures);
      const enabledFeatures = emergencyFeatures.filter(feature => feature).length;
      score += (enabledFeatures / emergencyFeatures.length) * 25;

      // Crisis support settings (25 points)
      maxScore += 25;
      const crisisSupportFeatures = Object.values(emergencySettings.crisisSupport);
      const enabledSupport = crisisSupportFeatures.filter(feature => feature).length;
      score += (enabledSupport / crisisSupportFeatures.length) * 25;

      const finalScore = Math.round((score / maxScore) * 100);
      setEmergencySettings(prev => ({ ...prev, emergencyScore: finalScore }));
    };

    calculateEmergencyScore();
  }, [emergencySettings.emergencyContacts, emergencySettings.crisisDetection, 
      emergencySettings.emergencyFeatures, emergencySettings.crisisSupport]);

  // Update emergency setting
  const updateEmergencySetting = (category, settingId, value) => {
    setEmergencySettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [settingId]: value
      }
    }));
  };

  // Get emergency preparedness level
  const getEmergencyLevel = (score) => {
    if (score >= 90) return { level: 'Excellent', color: '#4caf50', icon: <Shield /> };
    if (score >= 75) return { level: 'Very Good', color: '#8bc34a', icon: <Security /> };
    if (score >= 60) return { level: 'Good', color: '#ffc107', icon: <Warning /> };
    if (score >= 40) return { level: 'Basic', color: '#ff9800', icon: <Error /> };
    return { level: 'Needs Improvement', color: '#f44336', icon: <Dangerous /> };
  };

  // Add emergency contact
  const addEmergencyContact = () => {
    if (emergencyContact.name && emergencyContact.phone) {
      setEmergencySettings(prev => ({
        ...prev,
        emergencyContacts: [...prev.emergencyContacts, {
          ...emergencyContact,
          id: Date.now(),
          addedAt: new Date().toISOString()
        }]
      }));
      setEmergencyContact({
        name: '',
        relationship: '',
        phone: '',
        email: '',
        priority: 'primary',
        canShareLocation: false,
        notifyInEmergency: true
      });
      setShowContactDialog(false);
    }
  };

  // Remove emergency contact
  const removeEmergencyContact = (contactId) => {
    setEmergencySettings(prev => ({
      ...prev,
      emergencyContacts: prev.emergencyContacts.filter(contact => contact.id !== contactId)
    }));
  };

  // Trigger emergency protocol
  const triggerEmergency = (type) => {
    console.log(`Emergency triggered: ${type}`);
    // In a real app, this would:
    // 1. Send location to emergency contacts
    // 2. Contact emergency services if needed
    // 3. Log the emergency event
    // 4. Provide immediate resources
    setShowEmergencyDialog(true);
  };

  // Render emergency overview
  const renderEmergencyOverview = () => {
    const emergencyLevel = getEmergencyLevel(emergencySettings.emergencyScore);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Emergency Features & Crisis Support
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={emergencySettings.emergencyScore}
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
                  {emergencySettings.emergencyScore}%
                </Typography>
                <Typography variant="body2" component="div">
                  Preparedness
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={emergencyLevel.icon}
              label={`${emergencyLevel.level} Preparedness`}
              sx={{
                backgroundColor: emergencyLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Emergency Preparedness Level
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Be prepared for emergencies with comprehensive crisis support and immediate assistance.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #d32f2f' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#d32f2f',
                  color: 'white'
                }}
              >
                <ContactPhone />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Emergency Contacts
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d32f2f', mb: 1 }}>
                {emergencySettings.emergencyContacts.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Trusted contacts
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #1976d2' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#1976d2',
                  color: 'white'
                }}
              >
                <Psychology />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Crisis Detection
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {emergencySettings.crisisDetection.enabled ? 'ON' : 'OFF'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Auto-detection
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #388e3c' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#388e3c',
                  color: 'white'
                }}
              >
                <Shield />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Active Features
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#388e3c', mb: 1 }}>
                {Object.values(emergencySettings.emergencyFeatures).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Emergency tools
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #7b1fa2' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#7b1fa2',
                  color: 'white'
                }}
              >
                <SupportAgent />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Crisis Support
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#7b1fa2', mb: 1 }}>
                {Object.values(emergencySettings.crisisSupport).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Support services
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Emergency Notice:</strong> If you are in immediate danger, call 911 or your local emergency services. 
            These features are designed to supplement, not replace, professional emergency services.
          </Typography>
        </Alert>

        {/* Emergency Action Buttons */}
        <Paper sx={{ p: 3, backgroundColor: '#ffebee' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#d32f2f' }}>
            Emergency Actions
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<Emergency />}
                onClick={() => triggerEmergency('immediate')}
                sx={{ 
                  backgroundColor: '#d32f2f', 
                  color: 'white',
                  '&:hover': { backgroundColor: '#b71c1c' },
                  py: 2
                }}
              >
                Emergency Alert
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<Psychology />}
                onClick={() => setShowCrisisDialog(true)}
                sx={{ 
                  backgroundColor: '#7b1fa2', 
                  color: 'white',
                  '&:hover': { backgroundColor: '#6a1b9a' },
                  py: 2
                }}
              >
                Crisis Support
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<SupportAgent />}
                onClick={() => triggerEmergency('support')}
                sx={{ 
                  backgroundColor: '#1976d2', 
                  color: 'white',
                  '&:hover': { backgroundColor: '#1565c0' },
                  py: 2
                }}
              >
                Get Help Now
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
  };

  // Render emergency contacts
  const renderEmergencyContacts = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Emergency Contacts Management
      </Typography>
      
      {emergencySettings.emergencyContacts.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <ContactPhone sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
            No Emergency Contacts Added
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Add trusted contacts who can be reached in case of emergency.
          </Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => setShowContactDialog(true)}
            sx={{ backgroundColor: '#d32f2f' }}
          >
            Add Emergency Contact
          </Button>
        </Paper>
      ) : (
        <Box>
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {emergencySettings.emergencyContacts.map((contact) => (
              <Grid item xs={12} md={6} key={contact.id}>
                <Card sx={{ border: '1px solid #d32f2f' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{ 
                          width: 50, 
                          height: 50, 
                          mr: 2,
                          backgroundColor: contact.priority === 'primary' ? '#d32f2f' : '#1976d2',
                          color: 'white'
                        }}
                      >
                        <ContactPhone />
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {contact.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {contact.relationship} • {contact.phone}
                        </Typography>
                      </Box>
                      <IconButton
                        onClick={() => removeEmergencyContact(contact.id)}
                        sx={{ color: '#f44336' }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                    
                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                      <Chip
                        label={contactTypes.find(type => type.value === contact.priority)?.label || contact.priority}
                        size="small"
                        sx={{ 
                          backgroundColor: contact.priority === 'primary' ? '#d32f2f' : '#1976d2', 
                          color: 'white' 
                        }}
                      />
                      {contact.canShareLocation && (
                        <Chip
                          label="Location Sharing"
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: '#4caf50', color: '#4caf50' }}
                        />
                      )}
                    </Stack>
                    
                    {contact.email && (
                      <Typography variant="body2" color="text.secondary">
                        Email: {contact.email}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<Add />}
              onClick={() => setShowContactDialog(true)}
              sx={{ borderColor: '#d32f2f', color: '#d32f2f' }}
            >
              Add Another Contact
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );

  // Render crisis resources
  const renderCrisisResources = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Crisis Resources & Support
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {crisisTypes.map((crisis) => (
          <Grid item xs={12} md={6} key={crisis.id}>
            <Card 
              sx={{ 
                height: '100%',
                border: `2px solid ${crisis.color}`,
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
                      backgroundColor: crisis.color,
                      color: 'white'
                    }}
                  >
                    {crisis.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {crisis.name}
                    </Typography>
                    <Chip
                      label={`${crisis.severity} severity`}
                      size="small"
                      sx={{
                        backgroundColor: crisis.severity === 'critical' ? '#d32f2f' :
                                       crisis.severity === 'high' ? '#f44336' :
                                       crisis.severity === 'medium' ? '#ff9800' : '#4caf50',
                        color: 'white',
                        mt: 1
                      }}
                    />
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {crisis.description}
                </Typography>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Emergency Resources:
                </Typography>
                <List dense>
                  {crisis.resources.map((resource, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Phone sx={{ color: crisis.color, fontSize: 16 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={resource.name}
                        secondary={`${resource.phone || resource.contact} • ${resource.available}`}
                        primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 'medium' }}
                        secondaryTypographyProps={{ fontSize: '0.75rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ 
                    mt: 2, 
                    backgroundColor: crisis.color,
                    '&:hover': { backgroundColor: crisis.color, opacity: 0.8 }
                  }}
                  onClick={() => triggerEmergency(crisis.id)}
                >
                  Get Help Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, backgroundColor: '#e3f2fd' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          24/7 Emergency Services
        </Typography>
        <Grid container spacing={2}>
          {emergencyServices.map((service) => (
            <Grid item xs={12} md={6} key={service.id}>
              <Card sx={{ border: `1px solid ${service.color}` }}>
                <CardContent sx={{ py: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        mr: 2,
                        backgroundColor: service.color,
                        color: 'white'
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {service.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.phone || service.contact} • {service.available}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: service.color }}
                      onClick={() => triggerEmergency(service.type)}
                    >
                      Contact
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );

  // Render emergency settings
  const renderEmergencySettings = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Emergency & Crisis Settings
      </Typography>
      
      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                mr: 2,
                backgroundColor: '#7b1fa2',
                color: 'white'
              }}
            >
              <Psychology />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Crisis Detection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Automatic detection and response to crisis situations
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisDetection.enabled}
                    onChange={(e) => updateEmergencySetting('crisisDetection', 'enabled', e.target.checked)}
                    color="primary"
                  />
                }
                label="Enable Crisis Detection"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Automatically detect potential crisis situations in messages and behavior
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel>Detection Sensitivity</InputLabel>
                <Select
                  value={emergencySettings.crisisDetection.sensitivity}
                  onChange={(e) => updateEmergencySetting('crisisDetection', 'sensitivity', e.target.value)}
                  label="Detection Sensitivity"
                >
                  <MenuItem value="low">Low - Only obvious crisis indicators</MenuItem>
                  <MenuItem value="medium">Medium - Balanced detection</MenuItem>
                  <MenuItem value="high">High - Sensitive to subtle indicators</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisDetection.autoResponse}
                    onChange={(e) => updateEmergencySetting('crisisDetection', 'autoResponse', e.target.checked)}
                    color="primary"
                  />
                }
                label="Automatic Response"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Automatically provide crisis resources when detected
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisDetection.professionalReferral}
                    onChange={(e) => updateEmergencySetting('crisisDetection', 'professionalReferral', e.target.checked)}
                    color="primary"
                  />
                }
                label="Professional Referral"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Offer professional counseling and support services
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ mb: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                mr: 2,
                backgroundColor: '#d32f2f',
                color: 'white'
              }}
            >
              <Emergency />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Emergency Features
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Emergency tools and immediate response features
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.emergencyFeatures.panicButton}
                    onChange={(e) => updateEmergencySetting('emergencyFeatures', 'panicButton', e.target.checked)}
                    color="primary"
                  />
                }
                label="Panic Button"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Quick access emergency button for immediate help
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.emergencyFeatures.locationSharing}
                    onChange={(e) => updateEmergencySetting('emergencyFeatures', 'locationSharing', e.target.checked)}
                    color="primary"
                  />
                }
                label="Emergency Location Sharing"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Share location with emergency contacts when activated
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.emergencyFeatures.emergencyProfile}
                    onChange={(e) => updateEmergencySetting('emergencyFeatures', 'emergencyProfile', e.target.checked)}
                    color="primary"
                  />
                }
                label="Emergency Profile"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Share emergency information with first responders
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.emergencyFeatures.crisisChat}
                    onChange={(e) => updateEmergencySetting('emergencyFeatures', 'crisisChat', e.target.checked)}
                    color="primary"
                  />
                }
                label="Crisis Chat Support"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Direct access to crisis counselors via chat
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.emergencyFeatures.professionalSupport}
                    onChange={(e) => updateEmergencySetting('emergencyFeatures', 'professionalSupport', e.target.checked)}
                    color="primary"
                  />
                }
                label="Professional Support"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Connect with licensed mental health professionals
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.emergencyFeatures.emergencyNotifications}
                    onChange={(e) => updateEmergencySetting('emergencyFeatures', 'emergencyNotifications', e.target.checked)}
                    color="primary"
                  />
                }
                label="Emergency Notifications"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Receive notifications about emergency resources and updates
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                mr: 2,
                backgroundColor: '#1976d2',
                color: 'white'
              }}
            >
              <SupportAgent />
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Crisis Support Services
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Professional crisis support and follow-up care
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisSupport.immediateResponse}
                    onChange={(e) => updateEmergencySetting('crisisSupport', 'immediateResponse', e.target.checked)}
                    color="primary"
                  />
                }
                label="Immediate Response"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                24/7 immediate crisis response and intervention
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisSupport.professionalCounseling}
                    onChange={(e) => updateEmergencySetting('crisisSupport', 'professionalCounseling', e.target.checked)}
                    color="primary"
                  />
                }
                label="Professional Counseling"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Access to licensed therapists and counselors
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisSupport.peerSupport}
                    onChange={(e) => updateEmergencySetting('crisisSupport', 'peerSupport', e.target.checked)}
                    color="primary"
                  />
                }
                label="Peer Support Groups"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Connect with others who have similar experiences
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisSupport.followUpCare}
                    onChange={(e) => updateEmergencySetting('crisisSupport', 'followUpCare', e.target.checked)}
                    color="primary"
                  />
                }
                label="Follow-up Care"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Ongoing support and check-ins after crisis events
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisSupport.resourceLibrary}
                    onChange={(e) => updateEmergencySetting('crisisSupport', 'resourceLibrary', e.target.checked)}
                    color="primary"
                  />
                }
                label="Resource Library"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Access to crisis resources, guides, and educational materials
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={emergencySettings.crisisSupport.crisisPlanning}
                    onChange={(e) => updateEmergencySetting('crisisSupport', 'crisisPlanning', e.target.checked)}
                    color="primary"
                  />
                }
                label="Crisis Planning"
              />
              <Typography variant="caption" display="block" color="text.secondary">
                Help create personalized crisis response plans
              </Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🚨 Emergency Features & Crisis Support
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive emergency response and crisis intervention system
        </Typography>
      </Box>

      {/* Emergency Overview */}
      {renderEmergencyOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Emergency Contacts" />
          <Tab label="Crisis Resources" />
          <Tab label="Emergency Settings" />
          <Tab label="Safety Planning" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderEmergencyContacts()}
      {selectedTab === 1 && renderCrisisResources()}
      {selectedTab === 2 && renderEmergencySettings()}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Safety Planning & Preparation
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, border: '2px solid #1976d2' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Personal Safety Plan
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Identify warning signs and triggers" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Create a support network" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Plan safe meeting locations" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Keep emergency numbers accessible" />
                  </ListItem>
                </List>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Create Safety Plan
                </Button>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, border: '2px solid #4caf50' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Emergency Preparedness
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Keep important documents accessible" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Have emergency cash available" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Know your local emergency services" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Practice emergency procedures" />
                  </ListItem>
                </List>
                <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#4caf50' }}>
                  Review Checklist
                </Button>
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
            // Navigate to previous screen (Blocking & Reporting System)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Blocking & Reporting
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save emergency settings and navigate to next screen
            localStorage.setItem('emergencySettings', JSON.stringify({
              ...emergencySettings,
              timestamp: new Date().toISOString()
            }));
            console.log('Emergency settings saved');
            // Navigate to Screen 155: Advanced Safety Verification
          }}
          sx={{
            background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)',
            color: 'white'
          }}
        >
          Continue to Safety Verification
        </Button>
      </Box>

      {/* Emergency Contact Dialog */}
      <Dialog open={showContactDialog} onClose={() => setShowContactDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactPhone sx={{ mr: 1, color: '#d32f2f' }} />
            Add Emergency Contact
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                value={emergencyContact.name}
                onChange={(e) => setEmergencyContact(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Relationship"
                value={emergencyContact.relationship}
                onChange={(e) => setEmergencyContact(prev => ({ ...prev, relationship: e.target.value }))}
                placeholder="e.g., Mother, Best Friend, Partner"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Contact Priority</InputLabel>
                <Select
                  value={emergencyContact.priority}
                  onChange={(e) => setEmergencyContact(prev => ({ ...prev, priority: e.target.value }))}
                  label="Contact Priority"
                >
                  {contactTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      {type.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={emergencyContact.phone}
                onChange={(e) => setEmergencyContact(prev => ({ ...prev, phone: e.target.value }))}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address"
                value={emergencyContact.email}
                onChange={(e) => setEmergencyContact(prev => ({ ...prev, email: e.target.value }))}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={emergencyContact.canShareLocation}
                    onChange={(e) => setEmergencyContact(prev => ({ ...prev, canShareLocation: e.target.checked }))}
                  />
                }
                label="Allow location sharing with this contact in emergencies"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={emergencyContact.notifyInEmergency}
                    onChange={(e) => setEmergencyContact(prev => ({ ...prev, notifyInEmergency: e.target.checked }))}
                  />
                }
                label="Notify this contact in emergency situations"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowContactDialog(false)}>
            Cancel
          </Button>
          <Button 
            onClick={addEmergencyContact} 
            variant="contained" 
            color="error"
            disabled={!emergencyContact.name || !emergencyContact.phone}
          >
            Add Contact
          </Button>
        </DialogActions>
      </Dialog>

      {/* Crisis Support Dialog */}
      <Dialog open={showCrisisDialog} onClose={() => setShowCrisisDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Psychology sx={{ mr: 1, color: '#7b1fa2' }} />
            Crisis Support Resources
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              If you are in immediate danger, please call 911 or your local emergency services immediately.
            </Typography>
          </Alert>
          
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Immediate Support Available:
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <Phone sx={{ color: '#d32f2f' }} />
              </ListItemIcon>
              <ListItemText
                primary="National Suicide Prevention Lifeline"
                secondary="988 • Available 24/7"
              />
              <Button variant="contained" size="small" sx={{ backgroundColor: '#d32f2f' }}>
                Call Now
              </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Message sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText
                primary="Crisis Text Line"
                secondary="Text HOME to 741741 • Available 24/7"
              />
              <Button variant="contained" size="small" sx={{ backgroundColor: '#1976d2' }}>
                Text Now
              </Button>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SupportAgent sx={{ color: '#7b1fa2' }} />
              </ListItemIcon>
              <ListItemText
                primary="Professional Counseling"
                secondary="Connect with licensed therapists"
              />
              <Button variant="contained" size="small" sx={{ backgroundColor: '#7b1fa2' }}>
                Connect
              </Button>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCrisisDialog(false)}>
            Close
          </Button>
          <Button onClick={() => setShowCrisisDialog(false)} variant="contained" color="primary">
            Get More Resources
          </Button>
        </DialogActions>
      </Dialog>

      {/* Emergency Alert Dialog */}
      <Dialog open={showEmergencyDialog} onClose={() => setShowEmergencyDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Emergency sx={{ mr: 1, color: '#d32f2f' }} />
            Emergency Alert Activated
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="success" sx={{ mb: 2 }}>
            <Typography variant="body2">
              Emergency alert has been sent to your emergency contacts and appropriate services have been notified.
            </Typography>
          </Alert>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            What happens next:
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText primary="Emergency contacts have been notified" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText primary="Your location has been shared (if enabled)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText primary="Crisis support resources are available" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText primary="Follow-up support will be provided" />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEmergencyDialog(false)} variant="contained" color="primary">
            Understood
          </Button>
        </DialogActions>
      </Dialog>

      {/* Critical Emergency Notice */}
      <Alert severity="error" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>EMERGENCY NOTICE:</strong> If you are in immediate physical danger, call 911 or your local emergency services immediately. 
          These features are designed to supplement professional emergency services, not replace them. 
          Your safety is our top priority.
        </Typography>
      </Alert>
    </Container>
  );
};

export default EmergencyFeaturesCrisisSupport;

