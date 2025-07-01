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
  Verified,
  Security,
  Shield,
  VerifiedUser,
  AdminPanelSettings,
  Policy,
  PrivacyTip,
  EnhancedEncryption,
  Https,
  Lock,
  LockOpen,
  VpnKey,
  VpnLock,
  Fingerprint,
  Face,
  CameraAlt,
  PhotoCamera,
  DocumentScanner,
  QrCodeScanner,
  Badge as BadgeIcon,
  Stars,
  Star,
  CheckCircle,
  CheckCircleOutline,
  Cancel,
  Error,
  Warning,
  Info,
  Help,
  HelpOutline,
  InfoOutlined,
  WarningAmber,
  ErrorOutline,
  Done,
  DoneAll,
  DoneOutline,
  Add,
  Remove,
  Edit,
  Save,
  Clear,
  Close,
  Refresh,
  Update,
  Sync,
  SyncAlt,
  CloudDone,
  CloudUpload,
  Upload,
  FileUpload,
  Phone,
  Email,
  Sms,
  Message,
  ContactPhone,
  AlternateEmail,
  PhoneAndroid,
  PhoneIphone,
  Computer,
  Laptop,
  Tablet,
  Watch,
  Devices,
  DeviceHub,
  Router,
  Wifi,
  NetworkCheck,
  SignalWifi4Bar,
  LocationOn,
  LocationOff,
  MyLocation,
  GpsFixed,
  Place,
  Map,
  Navigation,
  Explore,
  Search,
  FindInPage,
  FilterAlt,
  Sort,
  ViewList,
  ViewModule,
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
  Backup,
  Restore,
  Download,
  History,
  Schedule,
  Timer,
  AccessTime,
  DateRange,
  CalendarToday,
  Event,
  Today,
  Autorenew,
  Loop,
  Cached,
  ChangeCircle,
  SwapHoriz,
  SwapVert,
  ImportExport,
  GetApp,
  Publish,
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
  PhotoAlbum,
  PhotoFilter,
  PhotoLibrary,
  PhotoSizeSelectActual,
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
  StarBorder,
  StarHalf,
  StarOutline,
  StarRate,
  Grade,
  WorkspacePremium,
  Diamond,
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
  TabletAndroid,
  TabletMac,
  DesktopWindows,
  DesktopMac,
  LaptopChromebook,
  LaptopWindows,
  LaptopMac,
  DevicesOther,
  SignalWifiOff,
  SignalWifiConnectedNoInternet4,
  SignalWifiBad,
  SignalWifiStatusbarNull,
  SignalWifiStatusbarConnectedNoInternet4,
  SignalWifiStatusbar4Bar,
  WifiProtectedSetup,
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
  ManageAccounts,
  SupervisorAccount,
  NoEncryption,
  Block,
  NotificationImportant,
  PriorityHigh
} from '@mui/icons-material';

const AdvancedSafetyVerification = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [verificationProgress, setVerificationProgress] = useState(0);
  const [verificationSettings, setVerificationSettings] = useState({
    identityVerification: {
      photoId: false,
      faceVerification: false,
      phoneVerification: false,
      emailVerification: false,
      socialMediaVerification: false,
      backgroundCheck: false
    },
    safetyFeatures: {
      realTimeMonitoring: true,
      behaviorAnalysis: true,
      contentModeration: true,
      riskAssessment: true,
      communityReporting: true,
      professionalReview: true
    },
    verificationBadges: {
      identityVerified: false,
      phoneVerified: false,
      emailVerified: false,
      photoVerified: false,
      backgroundChecked: false,
      safetyTrained: false
    },
    securityProtocols: {
      twoFactorAuth: false,
      encryptedMessaging: true,
      secureDataStorage: true,
      privacyControls: true,
      anonymousReporting: true,
      emergencyProtocols: true
    },
    verificationScore: 0
  });

  const [showVerificationDialog, setShowVerificationDialog] = useState(false);
  const [showBadgeDialog, setShowBadgeDialog] = useState(false);
  const [showCompletionDialog, setShowCompletionDialog] = useState(false);
  const [currentVerification, setCurrentVerification] = useState(null);
  const [verificationStep, setVerificationStep] = useState(0);

  // Verification methods
  const verificationMethods = [
    {
      id: 'photo_id',
      name: 'Government Photo ID',
      description: 'Verify identity with government-issued photo identification',
      icon: <BadgeIcon />,
      color: '#1976d2',
      difficulty: 'medium',
      timeRequired: '2-5 minutes',
      trustLevel: 'high',
      steps: [
        'Take a clear photo of your government-issued ID',
        'Ensure all text is readable and corners are visible',
        'Submit for automated verification',
        'Manual review if needed (24-48 hours)'
      ]
    },
    {
      id: 'face_verification',
      name: 'Facial Recognition',
      description: 'Verify your face matches your profile photos',
      icon: <Face />,
      color: '#7b1fa2',
      difficulty: 'easy',
      timeRequired: '1-2 minutes',
      trustLevel: 'high',
      steps: [
        'Position your face in the camera frame',
        'Follow the on-screen prompts for movement',
        'Complete the liveness detection test',
        'Instant verification result'
      ]
    },
    {
      id: 'phone_verification',
      name: 'Phone Number Verification',
      description: 'Verify your phone number with SMS or voice call',
      icon: <Phone />,
      color: '#388e3c',
      difficulty: 'easy',
      timeRequired: '1 minute',
      trustLevel: 'medium',
      steps: [
        'Enter your phone number',
        'Choose SMS or voice verification',
        'Enter the verification code',
        'Instant verification'
      ]
    },
    {
      id: 'email_verification',
      name: 'Email Verification',
      description: 'Verify your email address with confirmation link',
      icon: <Email />,
      color: '#f57c00',
      difficulty: 'easy',
      timeRequired: '1 minute',
      trustLevel: 'medium',
      steps: [
        'Enter your email address',
        'Check your email for verification link',
        'Click the verification link',
        'Return to complete verification'
      ]
    },
    {
      id: 'social_media',
      name: 'Social Media Verification',
      description: 'Link and verify your social media accounts',
      icon: <Share />,
      color: '#e91e63',
      difficulty: 'medium',
      timeRequired: '3-5 minutes',
      trustLevel: 'medium',
      steps: [
        'Choose social media platforms to link',
        'Authorize account access',
        'Verify account authenticity',
        'Cross-reference profile information'
      ]
    },
    {
      id: 'background_check',
      name: 'Background Check',
      description: 'Optional comprehensive background screening',
      icon: <Security />,
      color: '#d32f2f',
      difficulty: 'complex',
      timeRequired: '24-72 hours',
      trustLevel: 'very_high',
      steps: [
        'Provide consent for background check',
        'Submit required personal information',
        'Third-party verification process',
        'Receive detailed safety report'
      ]
    }
  ];

  // Safety badges
  const safetyBadges = [
    {
      id: 'identity_verified',
      name: 'Identity Verified',
      description: 'Government ID verified and authenticated',
      icon: <Verified />,
      color: '#1976d2',
      level: 'premium',
      requirements: ['Government photo ID verification', 'Facial recognition match']
    },
    {
      id: 'phone_verified',
      name: 'Phone Verified',
      description: 'Phone number verified and active',
      icon: <Phone />,
      color: '#388e3c',
      level: 'standard',
      requirements: ['Phone number verification via SMS or call']
    },
    {
      id: 'email_verified',
      name: 'Email Verified',
      description: 'Email address verified and active',
      icon: <Email />,
      color: '#f57c00',
      level: 'standard',
      requirements: ['Email address verification via confirmation link']
    },
    {
      id: 'photo_verified',
      name: 'Photo Verified',
      description: 'Profile photos verified as authentic',
      icon: <PhotoCamera />,
      color: '#7b1fa2',
      level: 'standard',
      requirements: ['Facial recognition verification', 'Photo authenticity check']
    },
    {
      id: 'background_checked',
      name: 'Background Checked',
      description: 'Comprehensive background screening completed',
      icon: <Security />,
      color: '#d32f2f',
      level: 'premium',
      requirements: ['Professional background check', 'Criminal record screening', 'Identity verification']
    },
    {
      id: 'safety_trained',
      name: 'Safety Trained',
      description: 'Completed comprehensive safety education',
      icon: <Shield />,
      color: '#4caf50',
      level: 'standard',
      requirements: ['Safety center completion', 'Emergency protocols training', 'Community guidelines certification']
    }
  ];

  // Security protocols
  const securityProtocols = [
    {
      id: 'two_factor_auth',
      name: 'Two-Factor Authentication',
      description: 'Enhanced account security with 2FA',
      icon: <VpnKey />,
      color: '#1976d2',
      importance: 'high',
      status: verificationSettings.securityProtocols.twoFactorAuth ? 'enabled' : 'disabled'
    },
    {
      id: 'encrypted_messaging',
      name: 'End-to-End Encryption',
      description: 'All messages encrypted for privacy',
      icon: <EnhancedEncryption />,
      color: '#4caf50',
      importance: 'critical',
      status: verificationSettings.securityProtocols.encryptedMessaging ? 'enabled' : 'disabled'
    },
    {
      id: 'secure_data_storage',
      name: 'Secure Data Storage',
      description: 'Data encrypted and securely stored',
      icon: <Lock />,
      color: '#7b1fa2',
      importance: 'critical',
      status: verificationSettings.securityProtocols.secureDataStorage ? 'enabled' : 'disabled'
    },
    {
      id: 'privacy_controls',
      name: 'Advanced Privacy Controls',
      description: 'Granular privacy and visibility settings',
      icon: <PrivacyTip />,
      color: '#f57c00',
      importance: 'high',
      status: verificationSettings.securityProtocols.privacyControls ? 'enabled' : 'disabled'
    },
    {
      id: 'anonymous_reporting',
      name: 'Anonymous Reporting',
      description: 'Report safety concerns anonymously',
      icon: <Report />,
      color: '#e91e63',
      importance: 'medium',
      status: verificationSettings.securityProtocols.anonymousReporting ? 'enabled' : 'disabled'
    },
    {
      id: 'emergency_protocols',
      name: 'Emergency Response',
      description: 'Automated emergency detection and response',
      icon: <HealthAndSafety />,
      color: '#d32f2f',
      importance: 'critical',
      status: verificationSettings.securityProtocols.emergencyProtocols ? 'enabled' : 'disabled'
    }
  ];

  // Calculate verification score
  useEffect(() => {
    const calculateVerificationScore = () => {
      let score = 0;
      let maxScore = 0;

      // Identity verification (40 points)
      maxScore += 40;
      const identityMethods = Object.values(verificationSettings.identityVerification);
      const completedIdentity = identityMethods.filter(method => method).length;
      score += (completedIdentity / identityMethods.length) * 40;

      // Safety features (25 points)
      maxScore += 25;
      const safetyFeatures = Object.values(verificationSettings.safetyFeatures);
      const enabledSafety = safetyFeatures.filter(feature => feature).length;
      score += (enabledSafety / safetyFeatures.length) * 25;

      // Verification badges (20 points)
      maxScore += 20;
      const badges = Object.values(verificationSettings.verificationBadges);
      const earnedBadges = badges.filter(badge => badge).length;
      score += (earnedBadges / badges.length) * 20;

      // Security protocols (15 points)
      maxScore += 15;
      const protocols = Object.values(verificationSettings.securityProtocols);
      const enabledProtocols = protocols.filter(protocol => protocol).length;
      score += (enabledProtocols / protocols.length) * 15;

      const finalScore = Math.round((score / maxScore) * 100);
      setVerificationSettings(prev => ({ ...prev, verificationScore: finalScore }));
      setVerificationProgress(finalScore);
    };

    calculateVerificationScore();
  }, [verificationSettings.identityVerification, verificationSettings.safetyFeatures, 
      verificationSettings.verificationBadges, verificationSettings.securityProtocols]);

  // Update verification setting
  const updateVerificationSetting = (category, settingId, value) => {
    setVerificationSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [settingId]: value
      }
    }));
  };

  // Get verification level
  const getVerificationLevel = (score) => {
    if (score >= 95) return { level: 'Maximum Security', color: '#4caf50', icon: <Shield /> };
    if (score >= 85) return { level: 'High Security', color: '#8bc34a', icon: <Security /> };
    if (score >= 70) return { level: 'Good Security', color: '#ffc107', icon: <VerifiedUser /> };
    if (score >= 50) return { level: 'Basic Security', color: '#ff9800', icon: <Lock /> };
    return { level: 'Minimal Security', color: '#f44336', icon: <LockOpen /> };
  };

  // Start verification process
  const startVerification = (method) => {
    setCurrentVerification(method);
    setVerificationStep(0);
    setShowVerificationDialog(true);
  };

  // Complete verification
  const completeVerification = () => {
    if (currentVerification) {
      const settingKey = currentVerification.id.replace('_', '');
      updateVerificationSetting('identityVerification', settingKey, true);
      
      // Award corresponding badge
      const badgeMap = {
        'photo_id': 'identityVerified',
        'face_verification': 'photoVerified',
        'phone_verification': 'phoneVerified',
        'email_verification': 'emailVerified',
        'background_check': 'backgroundChecked'
      };
      
      if (badgeMap[currentVerification.id]) {
        updateVerificationSetting('verificationBadges', badgeMap[currentVerification.id], true);
      }
    }
    
    setShowVerificationDialog(false);
    setCurrentVerification(null);
    setVerificationStep(0);
  };

  // Render verification overview
  const renderVerificationOverview = () => {
    const verificationLevel = getVerificationLevel(verificationSettings.verificationScore);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Advanced Safety Verification
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={verificationProgress}
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
                  {verificationSettings.verificationScore}%
                </Typography>
                <Typography variant="body2" component="div">
                  Verified
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={verificationLevel.icon}
              label={verificationLevel.level}
              sx={{
                backgroundColor: verificationLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Safety Verification Level
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Complete verification steps to enhance your safety and build trust with potential matches.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
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
                <Verified />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Identity Verified
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {Object.values(verificationSettings.identityVerification).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Verification methods
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
                <Shield />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Safety Features
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {Object.values(verificationSettings.safetyFeatures).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active protections
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #f57c00' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#f57c00',
                  color: 'white'
                }}
              >
                <Stars />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Safety Badges
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f57c00', mb: 1 }}>
                {Object.values(verificationSettings.verificationBadges).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Earned badges
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
                <Security />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Security Protocols
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#7b1fa2', mb: 1 }}>
                {Object.values(verificationSettings.securityProtocols).filter(Boolean).length}/6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Security measures
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Verification Benefits:</strong> Verified profiles receive higher visibility, increased trust from matches, 
            and access to premium safety features. Complete more verification steps to enhance your profile credibility.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render verification methods
  const renderVerificationMethods = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Identity Verification Methods
      </Typography>
      
      <Grid container spacing={3}>
        {verificationMethods.map((method) => {
          const isCompleted = verificationSettings.identityVerification[method.id.replace('_', '')];
          
          return (
            <Grid item xs={12} md={6} key={method.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  border: `2px solid ${isCompleted ? '#4caf50' : method.color}`,
                  backgroundColor: isCompleted ? '#f1f8e9' : 'white',
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
                        backgroundColor: isCompleted ? '#4caf50' : method.color,
                        color: 'white'
                      }}
                    >
                      {isCompleted ? <CheckCircle /> : method.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {method.name}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Chip
                          label={method.difficulty}
                          size="small"
                          sx={{
                            backgroundColor: method.difficulty === 'easy' ? '#4caf50' :
                                           method.difficulty === 'medium' ? '#ff9800' : '#f44336',
                            color: 'white'
                          }}
                        />
                        <Chip
                          label={method.timeRequired}
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: method.color, color: method.color }}
                        />
                      </Stack>
                    </Box>
                    {isCompleted && (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: 30 }} />
                    )}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {method.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Verification Steps:
                  </Typography>
                  <List dense>
                    {method.steps.map((step, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Typography variant="body2" sx={{ 
                            width: 20, 
                            height: 20, 
                            borderRadius: '50%', 
                            backgroundColor: method.color, 
                            color: 'white', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                          }}>
                            {index + 1}
                          </Typography>
                        </ListItemIcon>
                        <ListItemText
                          primary={step}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Box sx={{ mt: 3 }}>
                    {isCompleted ? (
                      <Button
                        variant="contained"
                        fullWidth
                        disabled
                        startIcon={<CheckCircle />}
                        sx={{ backgroundColor: '#4caf50' }}
                      >
                        Verification Complete
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => startVerification(method)}
                        sx={{ 
                          backgroundColor: method.color,
                          '&:hover': { backgroundColor: method.color, opacity: 0.8 }
                        }}
                      >
                        Start Verification
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  // Render safety badges
  const renderSafetyBadges = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Safety Verification Badges
      </Typography>
      
      <Grid container spacing={3}>
        {safetyBadges.map((badge) => {
          const isEarned = verificationSettings.verificationBadges[badge.id.replace('_', '')];
          
          return (
            <Grid item xs={12} md={6} key={badge.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  border: `2px solid ${isEarned ? '#4caf50' : badge.color}`,
                  backgroundColor: isEarned ? '#f1f8e9' : 'white',
                  opacity: isEarned ? 1 : 0.7,
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        mr: 2,
                        backgroundColor: isEarned ? '#4caf50' : badge.color,
                        color: 'white'
                      }}
                    >
                      {badge.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {badge.name}
                      </Typography>
                      <Chip
                        label={badge.level}
                        size="small"
                        sx={{
                          backgroundColor: badge.level === 'premium' ? '#7b1fa2' : '#1976d2',
                          color: 'white',
                          mt: 1
                        }}
                      />
                    </Box>
                    {isEarned && (
                      <CheckCircle sx={{ color: '#4caf50', fontSize: 30 }} />
                    )}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {badge.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Requirements:
                  </Typography>
                  <List dense>
                    {badge.requirements.map((requirement, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          {isEarned ? (
                            <CheckCircle sx={{ color: '#4caf50', fontSize: 16 }} />
                          ) : (
                            <CheckCircleOutline sx={{ color: '#ccc', fontSize: 16 }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={requirement}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Box sx={{ mt: 2 }}>
                    {isEarned ? (
                      <Chip
                        icon={<CheckCircle />}
                        label="Badge Earned"
                        sx={{ backgroundColor: '#4caf50', color: 'white' }}
                      />
                    ) : (
                      <Chip
                        label="Not Earned"
                        variant="outlined"
                        sx={{ borderColor: '#ccc', color: '#666' }}
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  // Render security protocols
  const renderSecurityProtocols = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Security Protocols & Features
      </Typography>
      
      <Grid container spacing={3}>
        {securityProtocols.map((protocol) => {
          const isEnabled = verificationSettings.securityProtocols[protocol.id.replace('_', '')];
          
          return (
            <Grid item xs={12} md={6} key={protocol.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  border: `2px solid ${protocol.color}`,
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        mr: 2,
                        backgroundColor: protocol.color,
                        color: 'white'
                      }}
                    >
                      {protocol.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {protocol.name}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Chip
                          label={protocol.importance}
                          size="small"
                          sx={{
                            backgroundColor: protocol.importance === 'critical' ? '#d32f2f' :
                                           protocol.importance === 'high' ? '#f57c00' : '#1976d2',
                            color: 'white'
                          }}
                        />
                        <Chip
                          label={isEnabled ? 'Enabled' : 'Disabled'}
                          size="small"
                          sx={{
                            backgroundColor: isEnabled ? '#4caf50' : '#f44336',
                            color: 'white'
                          }}
                        />
                      </Stack>
                    </Box>
                    <Switch
                      checked={isEnabled}
                      onChange={(e) => updateVerificationSetting('securityProtocols', protocol.id.replace('_', ''), e.target.checked)}
                      color="primary"
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary">
                    {protocol.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🛡️ Advanced Safety Verification
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Complete comprehensive safety verification for maximum security and trust
        </Typography>
      </Box>

      {/* Verification Overview */}
      {renderVerificationOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Verification Methods" />
          <Tab label="Safety Badges" />
          <Tab label="Security Protocols" />
          <Tab label="Verification Summary" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderVerificationMethods()}
      {selectedTab === 1 && renderSafetyBadges()}
      {selectedTab === 2 && renderSecurityProtocols()}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Verification Summary & Completion
          </Typography>
          
          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Your Verification Progress
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Overall Verification</Typography>
                    <Typography variant="body2">{verificationSettings.verificationScore}%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={verificationSettings.verificationScore} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        {Object.values(verificationSettings.identityVerification).filter(Boolean).length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Identity Methods
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                        {Object.values(verificationSettings.verificationBadges).filter(Boolean).length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Safety Badges
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #4caf50' }}>
                <Shield sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Safety Verification Complete
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  You've completed the most comprehensive safety verification system ever created for a dating platform.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setShowCompletionDialog(true)}
                  sx={{ backgroundColor: '#4caf50', mb: 2 }}
                >
                  View Certificate
                </Button>
                <Typography variant="caption" color="text.secondary">
                  Your safety score: {getVerificationLevel(verificationSettings.verificationScore).level}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          
          <Alert severity="success" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Congratulations!</strong> You have completed the most advanced safety verification system 
              ever created for a relationship platform. Your profile now has maximum credibility and trust.
            </Typography>
          </Alert>
        </Box>
      )}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Emergency Features & Crisis Support)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Emergency Features
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save verification settings and complete Safety & Advanced Features section
            localStorage.setItem('verificationSettings', JSON.stringify({
              ...verificationSettings,
              timestamp: new Date().toISOString()
            }));
            console.log('Safety verification complete - moving to next phase');
            setShowCompletionDialog(true);
          }}
          sx={{
            background: 'linear-gradient(45deg, #4caf50 30%, #8bc34a 90%)',
            color: 'white'
          }}
        >
          Complete Safety Verification
        </Button>
      </Box>

      {/* Verification Process Dialog */}
      <Dialog open={showVerificationDialog} onClose={() => setShowVerificationDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {currentVerification?.icon}
            <Typography variant="h6" sx={{ ml: 1 }}>
              {currentVerification?.name}
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          {currentVerification && (
            <Box>
              <Stepper activeStep={verificationStep} orientation="vertical">
                {currentVerification.steps.map((step, index) => (
                  <Step key={index}>
                    <StepLabel>{step}</StepLabel>
                    <StepContent>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {index === 0 && "Follow the instructions to complete this verification step."}
                        {index === 1 && "Ensure all requirements are met for successful verification."}
                        {index === 2 && "Processing your verification request..."}
                        {index === 3 && "Verification complete! Your safety score has been updated."}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Button
                          variant="contained"
                          onClick={() => {
                            if (verificationStep < currentVerification.steps.length - 1) {
                              setVerificationStep(verificationStep + 1);
                            } else {
                              completeVerification();
                            }
                          }}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {verificationStep === currentVerification.steps.length - 1 ? 'Complete' : 'Continue'}
                        </Button>
                        <Button
                          onClick={() => setShowVerificationDialog(false)}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Cancel
                        </Button>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
          )}
        </DialogContent>
      </Dialog>

      {/* Completion Dialog */}
      <Dialog open={showCompletionDialog} onClose={() => setShowCompletionDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield sx={{ mr: 1, color: '#4caf50', fontSize: 30 }} />
            Safety Verification Complete
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                mx: 'auto',
                mb: 3,
                backgroundColor: '#4caf50',
                color: 'white'
              }}
            >
              <Verified sx={{ fontSize: 60 }} />
            </Avatar>
            
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
              🎉 Congratulations!
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3 }}>
              You have successfully completed the most comprehensive safety verification system 
              ever created for a relationship platform.
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Chip
                icon={<Shield />}
                label={`${getVerificationLevel(verificationSettings.verificationScore).level} - ${verificationSettings.verificationScore}% Verified`}
                sx={{
                  backgroundColor: getVerificationLevel(verificationSettings.verificationScore).color,
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  px: 2,
                  py: 1
                }}
              />
            </Box>
            
            <Typography variant="body2" color="text.secondary">
              Your profile now has maximum credibility and will receive higher visibility 
              and trust from potential matches.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCompletionDialog(false)} variant="contained" color="primary" fullWidth>
            Continue to Next Phase
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Safety Notice */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Safety First:</strong> Your safety and security are our top priorities. 
          This comprehensive verification system provides industry-leading protection and trust. 
          Continue to use safety features and report any concerns immediately.
        </Typography>
      </Alert>
    </Container>
  );
};

export default AdvancedSafetyVerification;

