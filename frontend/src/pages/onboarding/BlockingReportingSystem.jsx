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
  Block,
  Report,
  Flag,
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
  Phone,
  Call,
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
  SupportAgent,
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
  VerifiedUserIcon,
  PolicyIcon,
  PrivacyTipIcon,
  EnhancedEncryptionIcon,
  HttpsIcon,
  LockIcon,
  LockOpenIcon,
  NoEncryptionIcon,
  VpnKeyIcon,
  VpnLockIcon,
  SecurityIcon,
  ShieldIcon
} from '@mui/icons-material';

const BlockingReportingSystem = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [blockingSettings, setBlockingSettings] = useState({
    autoBlock: {
      inappropriateContent: true,
      suspiciousBehavior: true,
      spamMessages: true,
      fakeProfiles: true,
      underage: true,
      harassment: true
    },
    reportingPreferences: {
      anonymousReporting: true,
      followUpNotifications: true,
      communityFeedback: false,
      detailedReporting: true
    },
    blockedUsers: [],
    reportedUsers: [],
    safetyScore: 0
  });

  const [showBlockDialog, setShowBlockDialog] = useState(false);
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [showUnblockDialog, setShowUnblockDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [reportForm, setReportForm] = useState({
    category: '',
    subcategory: '',
    description: '',
    evidence: [],
    severity: 'medium',
    anonymous: true
  });

  // Report categories
  const reportCategories = [
    {
      id: 'harassment',
      name: 'Harassment & Abuse',
      description: 'Threatening, bullying, or abusive behavior',
      icon: <Warning />,
      color: '#f44336',
      severity: 'high',
      subcategories: [
        { id: 'threats', name: 'Threats or Violence', description: 'Direct threats of harm or violence' },
        { id: 'bullying', name: 'Bullying or Intimidation', description: 'Persistent harassment or intimidation' },
        { id: 'stalking', name: 'Stalking or Unwanted Contact', description: 'Continued unwanted contact after blocking' },
        { id: 'doxxing', name: 'Sharing Personal Information', description: 'Sharing private information without consent' },
        { id: 'revenge', name: 'Revenge or Malicious Behavior', description: 'Vindictive or spiteful actions' }
      ]
    },
    {
      id: 'inappropriate_content',
      name: 'Inappropriate Content',
      description: 'Sexual, violent, or otherwise inappropriate material',
      icon: <Block />,
      color: '#e91e63',
      severity: 'high',
      subcategories: [
        { id: 'sexual_content', name: 'Sexual Content', description: 'Explicit sexual images or messages' },
        { id: 'nudity', name: 'Nudity or Partial Nudity', description: 'Inappropriate photos or images' },
        { id: 'violence', name: 'Violence or Gore', description: 'Violent or disturbing content' },
        { id: 'hate_speech', name: 'Hate Speech', description: 'Content targeting protected groups' },
        { id: 'illegal_content', name: 'Illegal Content', description: 'Content depicting illegal activities' }
      ]
    },
    {
      id: 'fake_profile',
      name: 'Fake Profile & Scams',
      description: 'Fraudulent profiles, catfishing, or financial scams',
      icon: <PersonOff />,
      color: '#ff9800',
      severity: 'high',
      subcategories: [
        { id: 'catfishing', name: 'Catfishing', description: 'Using fake photos or identity' },
        { id: 'bot_account', name: 'Bot or Automated Account', description: 'Non-human automated account' },
        { id: 'financial_scam', name: 'Financial Scam', description: 'Requesting money or financial information' },
        { id: 'identity_theft', name: 'Identity Theft', description: 'Using someone else\'s identity' },
        { id: 'romance_scam', name: 'Romance Scam', description: 'Fake romantic interest for financial gain' }
      ]
    },
    {
      id: 'spam',
      name: 'Spam & Unwanted Messages',
      description: 'Repetitive, promotional, or unwanted communication',
      icon: <NotInterested />,
      color: '#9c27b0',
      severity: 'medium',
      subcategories: [
        { id: 'promotional', name: 'Promotional Content', description: 'Advertising or promotional messages' },
        { id: 'repetitive', name: 'Repetitive Messages', description: 'Sending the same message repeatedly' },
        { id: 'off_platform', name: 'Off-Platform Solicitation', description: 'Requesting to move to other platforms' },
        { id: 'commercial', name: 'Commercial Activity', description: 'Selling products or services' },
        { id: 'chain_messages', name: 'Chain Messages', description: 'Messages asking to forward to others' }
      ]
    },
    {
      id: 'minor_safety',
      name: 'Minor Safety',
      description: 'Concerns about underage users or child safety',
      icon: <Child />,
      color: '#d32f2f',
      severity: 'critical',
      subcategories: [
        { id: 'underage_user', name: 'Underage User', description: 'User appears to be under 18' },
        { id: 'inappropriate_minor', name: 'Inappropriate Contact with Minor', description: 'Adult contacting minor inappropriately' },
        { id: 'child_exploitation', name: 'Child Exploitation', description: 'Content exploiting minors' },
        { id: 'grooming', name: 'Grooming Behavior', description: 'Adult grooming minor for inappropriate contact' }
      ]
    },
    {
      id: 'privacy_violation',
      name: 'Privacy Violations',
      description: 'Unauthorized sharing of private information or content',
      icon: <Security />,
      color: '#607d8b',
      severity: 'high',
      subcategories: [
        { id: 'private_photos', name: 'Sharing Private Photos', description: 'Sharing intimate photos without consent' },
        { id: 'personal_info', name: 'Sharing Personal Information', description: 'Sharing private contact information' },
        { id: 'location_sharing', name: 'Unauthorized Location Sharing', description: 'Sharing location without permission' },
        { id: 'conversation_sharing', name: 'Sharing Private Conversations', description: 'Screenshots or sharing of private messages' }
      ]
    },
    {
      id: 'community_guidelines',
      name: 'Community Guidelines',
      description: 'Violations of community standards and guidelines',
      icon: <Groups />,
      color: '#4caf50',
      severity: 'medium',
      subcategories: [
        { id: 'inappropriate_behavior', name: 'Inappropriate Behavior', description: 'Behavior that violates community standards' },
        { id: 'disrespectful', name: 'Disrespectful Communication', description: 'Rude or disrespectful messages' },
        { id: 'misleading_info', name: 'Misleading Information', description: 'Providing false or misleading information' },
        { id: 'platform_misuse', name: 'Platform Misuse', description: 'Using the platform for unintended purposes' }
      ]
    },
    {
      id: 'other',
      name: 'Other Safety Concerns',
      description: 'Other safety or security concerns not covered above',
      icon: <Help />,
      color: '#795548',
      severity: 'medium',
      subcategories: [
        { id: 'suspicious_activity', name: 'Suspicious Activity', description: 'Unusual or suspicious behavior patterns' },
        { id: 'technical_issue', name: 'Technical Safety Issue', description: 'Technical problems affecting safety' },
        { id: 'policy_violation', name: 'Policy Violation', description: 'Violation of terms of service or policies' },
        { id: 'other_concern', name: 'Other Concern', description: 'Safety concern not covered by other categories' }
      ]
    }
  ];

  // Blocking reasons
  const blockingReasons = [
    {
      id: 'not_interested',
      name: 'Not Interested',
      description: 'Simply not interested in this person',
      icon: <NotInterested />,
      severity: 'low'
    },
    {
      id: 'inappropriate_messages',
      name: 'Inappropriate Messages',
      description: 'Sending inappropriate or unwanted messages',
      icon: <Message />,
      severity: 'medium'
    },
    {
      id: 'harassment',
      name: 'Harassment',
      description: 'Harassing or threatening behavior',
      icon: <Warning />,
      severity: 'high'
    },
    {
      id: 'fake_profile',
      name: 'Fake Profile',
      description: 'Profile appears to be fake or misleading',
      icon: <PersonOff />,
      severity: 'high'
    },
    {
      id: 'spam',
      name: 'Spam',
      description: 'Sending spam or promotional content',
      icon: <Block />,
      severity: 'medium'
    },
    {
      id: 'safety_concern',
      name: 'Safety Concern',
      description: 'General safety or security concern',
      icon: <Security />,
      severity: 'high'
    }
  ];

  // Sample blocked/reported users for demonstration
  const sampleUsers = [
    {
      id: 1,
      name: 'John D.',
      age: 28,
      photo: '/api/placeholder/60/60',
      reason: 'Inappropriate messages',
      date: '2024-01-15',
      status: 'blocked'
    },
    {
      id: 2,
      name: 'Sarah M.',
      age: 25,
      photo: '/api/placeholder/60/60',
      reason: 'Spam messages',
      date: '2024-01-10',
      status: 'reported'
    },
    {
      id: 3,
      name: 'Mike R.',
      age: 32,
      photo: '/api/placeholder/60/60',
      reason: 'Fake profile',
      date: '2024-01-08',
      status: 'blocked'
    }
  ];

  // Calculate safety score
  useEffect(() => {
    const calculateSafetyScore = () => {
      let score = 0;
      let maxScore = 0;

      // Auto-blocking settings (40 points)
      maxScore += 40;
      const autoBlockSettings = Object.values(blockingSettings.autoBlock);
      const enabledAutoBlock = autoBlockSettings.filter(setting => setting).length;
      score += (enabledAutoBlock / autoBlockSettings.length) * 40;

      // Reporting preferences (30 points)
      maxScore += 30;
      if (blockingSettings.reportingPreferences.anonymousReporting) score += 10;
      if (blockingSettings.reportingPreferences.followUpNotifications) score += 10;
      if (blockingSettings.reportingPreferences.detailedReporting) score += 10;

      // Active safety management (30 points)
      maxScore += 30;
      const blockedCount = blockingSettings.blockedUsers.length;
      const reportedCount = blockingSettings.reportedUsers.length;
      
      // Reward for taking safety actions (up to 20 points)
      if (blockedCount > 0 || reportedCount > 0) score += Math.min(20, (blockedCount + reportedCount) * 5);
      
      // Reward for proactive safety (10 points)
      if (blockedCount > 0 && reportedCount > 0) score += 10;

      const finalScore = Math.round((score / maxScore) * 100);
      setBlockingSettings(prev => ({ ...prev, safetyScore: finalScore }));
    };

    calculateSafetyScore();
  }, [blockingSettings.autoBlock, blockingSettings.reportingPreferences, 
      blockingSettings.blockedUsers, blockingSettings.reportedUsers]);

  // Update blocking setting
  const updateBlockingSetting = (category, settingId, value) => {
    setBlockingSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [settingId]: value
      }
    }));
  };

  // Get safety level
  const getSafetyLevel = (score) => {
    if (score >= 80) return { level: 'Excellent', color: '#4caf50', icon: <Shield /> };
    if (score >= 60) return { level: 'Good', color: '#8bc34a', icon: <Security /> };
    if (score >= 40) return { level: 'Basic', color: '#ff9800', icon: <Warning /> };
    return { level: 'Needs Improvement', color: '#f44336', icon: <Error /> };
  };

  // Handle block user
  const handleBlockUser = (user, reason) => {
    setBlockingSettings(prev => ({
      ...prev,
      blockedUsers: [...prev.blockedUsers, {
        ...user,
        reason,
        blockedAt: new Date().toISOString()
      }]
    }));
    setShowBlockDialog(false);
    setSelectedUser(null);
  };

  // Handle report user
  const handleReportUser = (reportData) => {
    setBlockingSettings(prev => ({
      ...prev,
      reportedUsers: [...prev.reportedUsers, {
        ...reportData,
        reportedAt: new Date().toISOString(),
        id: Date.now()
      }]
    }));
    setShowReportDialog(false);
    setReportForm({
      category: '',
      subcategory: '',
      description: '',
      evidence: [],
      severity: 'medium',
      anonymous: true
    });
  };

  // Handle unblock user
  const handleUnblockUser = (userId) => {
    setBlockingSettings(prev => ({
      ...prev,
      blockedUsers: prev.blockedUsers.filter(user => user.id !== userId)
    }));
    setShowUnblockDialog(false);
    setSelectedUser(null);
  };

  // Render safety overview
  const renderSafetyOverview = () => {
    const safetyLevel = getSafetyLevel(blockingSettings.safetyScore);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #f44336 30%, #ff9800 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Blocking & Reporting System
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={blockingSettings.safetyScore}
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
                  {blockingSettings.safetyScore}%
                </Typography>
                <Typography variant="body2" component="div">
                  Safety Score
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={safetyLevel.icon}
              label={`${safetyLevel.level} Safety`}
              sx={{
                backgroundColor: safetyLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Safety Protection Level
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Block unwanted users and report safety concerns to keep the community safe.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #f44336' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#f44336',
                  color: 'white'
                }}
              >
                <Block />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Blocked Users
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f44336', mb: 1 }}>
                {blockingSettings.blockedUsers.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Users you've blocked
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
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
                <Report />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Reports Submitted
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
                {blockingSettings.reportedUsers.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Safety reports you've made
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
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
                <Shield />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Auto-Protection
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {Object.values(blockingSettings.autoBlock).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active protections
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Safety First:</strong> Use blocking and reporting tools to protect yourself and others. 
            All reports are reviewed by our safety team, and we take appropriate action to maintain a safe community.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render auto-blocking settings
  const renderAutoBlockingSettings = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Automatic Protection Settings
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Auto-Block Settings
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Automatically block users who exhibit these behaviors:
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.autoBlock.inappropriateContent}
                  onChange={(e) => updateBlockingSetting('autoBlock', 'inappropriateContent', e.target.checked)}
                  color="primary"
                />
              }
              label="Inappropriate Content"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Block users who send inappropriate photos or messages
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.autoBlock.suspiciousBehavior}
                  onChange={(e) => updateBlockingSetting('autoBlock', 'suspiciousBehavior', e.target.checked)}
                  color="primary"
                />
              }
              label="Suspicious Behavior"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Block users with suspicious or unusual behavior patterns
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.autoBlock.spamMessages}
                  onChange={(e) => updateBlockingSetting('autoBlock', 'spamMessages', e.target.checked)}
                  color="primary"
                />
              }
              label="Spam Messages"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Block users who send repetitive or promotional messages
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.autoBlock.fakeProfiles}
                  onChange={(e) => updateBlockingSetting('autoBlock', 'fakeProfiles', e.target.checked)}
                  color="primary"
                />
              }
              label="Fake Profiles"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Block users with potentially fake or misleading profiles
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.autoBlock.underage}
                  onChange={(e) => updateBlockingSetting('autoBlock', 'underage', e.target.checked)}
                  color="primary"
                />
              }
              label="Underage Users"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Block users who appear to be under 18 years old
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.autoBlock.harassment}
                  onChange={(e) => updateBlockingSetting('autoBlock', 'harassment', e.target.checked)}
                  color="primary"
                />
              }
              label="Harassment"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Block users who engage in harassment or threatening behavior
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Reporting Preferences
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Customize how you want to handle reporting:
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.reportingPreferences.anonymousReporting}
                  onChange={(e) => updateBlockingSetting('reportingPreferences', 'anonymousReporting', e.target.checked)}
                  color="primary"
                />
              }
              label="Anonymous Reporting"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Keep your identity private when making reports
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.reportingPreferences.followUpNotifications}
                  onChange={(e) => updateBlockingSetting('reportingPreferences', 'followUpNotifications', e.target.checked)}
                  color="primary"
                />
              }
              label="Follow-up Notifications"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Receive updates on the status of your reports
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.reportingPreferences.communityFeedback}
                  onChange={(e) => updateBlockingSetting('reportingPreferences', 'communityFeedback', e.target.checked)}
                  color="primary"
                />
              }
              label="Community Feedback"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Provide feedback to help improve community safety
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={blockingSettings.reportingPreferences.detailedReporting}
                  onChange={(e) => updateBlockingSetting('reportingPreferences', 'detailedReporting', e.target.checked)}
                  color="primary"
                />
              }
              label="Detailed Reporting"
            />
            <Typography variant="caption" display="block" color="text.secondary">
              Provide detailed information when making reports
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );

  // Render report categories
  const renderReportCategories = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Report Categories & Guidelines
      </Typography>
      
      <Grid container spacing={3}>
        {reportCategories.map((category) => (
          <Grid item xs={12} md={6} key={category.id}>
            <Card 
              sx={{ 
                height: '100%',
                border: `2px solid ${category.color}`,
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
                      backgroundColor: category.color,
                      color: 'white'
                    }}
                  >
                    {category.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {category.name}
                    </Typography>
                    <Chip
                      label={`${category.severity} severity`}
                      size="small"
                      sx={{
                        backgroundColor: category.severity === 'critical' ? '#d32f2f' :
                                       category.severity === 'high' ? '#f44336' :
                                       category.severity === 'medium' ? '#ff9800' : '#4caf50',
                        color: 'white',
                        mt: 1
                      }}
                    />
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {category.description}
                </Typography>
                
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                      Subcategories ({category.subcategories.length})
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {category.subcategories.map((subcategory) => (
                        <ListItem key={subcategory.id} sx={{ px: 0 }}>
                          <ListItemText
                            primary={subcategory.name}
                            secondary={subcategory.description}
                            primaryTypographyProps={{ fontWeight: 'medium' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ 
                    mt: 2, 
                    backgroundColor: category.color,
                    '&:hover': { backgroundColor: category.color, opacity: 0.8 }
                  }}
                  onClick={() => {
                    setReportForm(prev => ({ ...prev, category: category.id }));
                    setShowReportDialog(true);
                  }}
                >
                  Report This Issue
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Render blocked users management
  const renderBlockedUsersManagement = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Blocked Users Management
      </Typography>
      
      {blockingSettings.blockedUsers.length === 0 ? (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Block sx={{ fontSize: 60, color: '#ccc', mb: 2 }} />
          <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
            No Blocked Users
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You haven't blocked any users yet. Blocked users won't be able to contact you or see your profile.
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={2}>
          {[...blockingSettings.blockedUsers, ...sampleUsers.filter(u => u.status === 'blocked')].map((user) => (
            <Grid item xs={12} md={6} key={user.id}>
              <Card sx={{ border: '1px solid #f44336' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={user.photo}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    >
                      {user.name.charAt(0)}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {user.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Age {user.age} • Blocked on {new Date(user.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => {
                        setSelectedUser(user);
                        setShowUnblockDialog(true);
                      }}
                      sx={{ color: '#4caf50' }}
                    >
                      <LockOpen />
                    </IconButton>
                  </Box>
                  
                  <Chip
                    label={user.reason}
                    size="small"
                    sx={{ backgroundColor: '#f44336', color: 'white' }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button
          variant="outlined"
          startIcon={<Block />}
          onClick={() => setShowBlockDialog(true)}
          sx={{ borderColor: '#f44336', color: '#f44336' }}
        >
          Block a User
        </Button>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🛡️ Blocking & Reporting System
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Protect yourself and keep the community safe
        </Typography>
      </Box>

      {/* Safety Overview */}
      {renderSafetyOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Auto-Protection" />
          <Tab label="Report Categories" />
          <Tab label="Blocked Users" />
          <Tab label="Safety Resources" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderAutoBlockingSettings()}
      {selectedTab === 1 && renderReportCategories()}
      {selectedTab === 2 && renderBlockedUsersManagement()}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Safety Resources & Support
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, border: '2px solid #2196f3' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Emergency Resources
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Phone sx={{ color: '#f44336' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="National Domestic Violence Hotline"
                      secondary="1-800-799-7233 (24/7)"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Phone sx={{ color: '#f44336' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Crisis Text Line"
                      secondary="Text HOME to 741741"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Phone sx={{ color: '#f44336' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Emergency Services"
                      secondary="911 (Immediate danger)"
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, border: '2px solid #4caf50' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Safety Tips
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Meet in public places for first dates" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Tell friends about your plans" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Trust your instincts" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText primary="Don't share personal information too quickly" />
                  </ListItem>
                </List>
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
            // Navigate to previous screen (Privacy Controls & Settings)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Privacy Controls
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save blocking settings and navigate to next screen
            localStorage.setItem('blockingSettings', JSON.stringify({
              ...blockingSettings,
              timestamp: new Date().toISOString()
            }));
            console.log('Blocking settings saved');
            // Navigate to Screen 154: Emergency Features & Crisis Support
          }}
          sx={{
            background: 'linear-gradient(45deg, #f44336 30%, #ff9800 90%)',
            color: 'white'
          }}
        >
          Continue to Emergency Features
        </Button>
      </Box>

      {/* Block Dialog */}
      <Dialog open={showBlockDialog} onClose={() => setShowBlockDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Block sx={{ mr: 1, color: '#f44336' }} />
            Block User
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Select a reason for blocking this user:
          </Typography>
          
          <RadioGroup>
            {blockingReasons.map((reason) => (
              <FormControlLabel
                key={reason.id}
                value={reason.id}
                control={<Radio />}
                label={
                  <Box>
                    <Typography variant="body1">{reason.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {reason.description}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowBlockDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowBlockDialog(false)} variant="contained" color="error">
            Block User
          </Button>
        </DialogActions>
      </Dialog>

      {/* Report Dialog */}
      <Dialog open={showReportDialog} onClose={() => setShowReportDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Report sx={{ mr: 1, color: '#ff9800' }} />
            Report Safety Concern
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Report Category</InputLabel>
              <Select
                value={reportForm.category}
                onChange={(e) => setReportForm(prev => ({ ...prev, category: e.target.value }))}
                label="Report Category"
              >
                {reportCategories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            {reportForm.category && (
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Specific Issue</InputLabel>
                <Select
                  value={reportForm.subcategory}
                  onChange={(e) => setReportForm(prev => ({ ...prev, subcategory: e.target.value }))}
                  label="Specific Issue"
                >
                  {reportCategories
                    .find(cat => cat.id === reportForm.category)
                    ?.subcategories.map((subcategory) => (
                      <MenuItem key={subcategory.id} value={subcategory.id}>
                        {subcategory.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            )}
            
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Description"
              value={reportForm.description}
              onChange={(e) => setReportForm(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Please provide details about the safety concern..."
              sx={{ mb: 2 }}
            />
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Severity Level</InputLabel>
              <Select
                value={reportForm.severity}
                onChange={(e) => setReportForm(prev => ({ ...prev, severity: e.target.value }))}
                label="Severity Level"
              >
                <MenuItem value="low">Low - Minor concern</MenuItem>
                <MenuItem value="medium">Medium - Moderate concern</MenuItem>
                <MenuItem value="high">High - Serious concern</MenuItem>
                <MenuItem value="critical">Critical - Immediate danger</MenuItem>
              </Select>
            </FormControl>
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={reportForm.anonymous}
                  onChange={(e) => setReportForm(prev => ({ ...prev, anonymous: e.target.checked }))}
                />
              }
              label="Submit report anonymously"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowReportDialog(false)}>
            Cancel
          </Button>
          <Button 
            onClick={() => handleReportUser(reportForm)} 
            variant="contained" 
            color="warning"
            disabled={!reportForm.category || !reportForm.description}
          >
            Submit Report
          </Button>
        </DialogActions>
      </Dialog>

      {/* Unblock Dialog */}
      <Dialog open={showUnblockDialog} onClose={() => setShowUnblockDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LockOpen sx={{ mr: 1, color: '#4caf50' }} />
            Unblock User
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedUser && (
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Are you sure you want to unblock <strong>{selectedUser.name}</strong>?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This user will be able to see your profile and contact you again.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowUnblockDialog(false)}>
            Cancel
          </Button>
          <Button 
            onClick={() => selectedUser && handleUnblockUser(selectedUser.id)} 
            variant="contained" 
            color="success"
          >
            Unblock User
          </Button>
        </DialogActions>
      </Dialog>

      {/* Safety Note */}
      <Alert severity="error" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Emergency:</strong> If you are in immediate danger, please contact emergency services (911) 
          or local law enforcement. This app's reporting system is not a substitute for emergency services.
        </Typography>
      </Alert>
    </Container>
  );
};

export default BlockingReportingSystem;

