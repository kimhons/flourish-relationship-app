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
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Security,
  Shield,
  Lock,
  LockOpen,
  VpnLock,
  VpnKey,
  Key,
  Password,
  Fingerprint,
  Face,
  Visibility,
  VisibilityOff,
  RemoveRedEye,
  Preview,
  Pageview,
  FindInPage,
  FindReplace,
  Search,
  SearchOff,
  VerifiedUser,
  Verified,
  GppGood,
  GppBad,
  GppMaybe,
  SafetyCheck,
  HealthAndSafety,
  Warning,
  Error,
  ErrorOutline,
  ReportProblem,
  Dangerous,
  Block,
  NotificationImportant,
  PriorityHigh,
  Emergency,
  LocalHospital,
  LocalPolice,
  LocalFireDepartment,
  Phone,
  PhoneCallback,
  PhoneForwarded,
  PhoneInTalk,
  PhoneLocked,
  PhoneMissed,
  PhonePaused,
  Call,
  CallEnd,
  VideoCall,
  VideoCallEnd,
  Duo,
  ConnectWithoutContact,
  ContactSupport,
  LiveHelp,
  Help,
  HelpOutline,
  Info,
  InfoOutlined,
  Announcement,
  Campaign,
  RecordVoiceOver,
  VoiceChat,
  Hearing,
  VolumeUp,
  VolumeOff,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Camera,
  CameraAlt,
  CameraEnhance,
  CameraFront,
  CameraRear,
  CameraRoll,
  PhotoCamera,
  PhotoLibrary,
  PhotoAlbum,
  PhotoFilter,
  Image,
  ImageAspectRatio,
  ImageNotSupported,
  ImageSearch,
  Collections,
  CollectionsBookmark,
  Folder,
  FolderOpen,
  FolderShared,
  FolderSpecial,
  CreateNewFolder,
  DriveFileMove,
  DriveFileMoveOutline,
  DriveFileRenameOutline,
  FileCopy,
  FileDownload,
  FileDownloadDone,
  FileDownloadOff,
  FileUpload,
  CloudDownload,
  CloudUpload,
  CloudDone,
  CloudOff,
  CloudQueue,
  CloudSync,
  CloudCircle,
  Backup,
  BackupTable,
  Restore,
  RestorePage,
  RestoreFromTrash,
  Delete,
  DeleteForever,
  DeleteOutline,
  DeleteSweep,
  Clear,
  ClearAll,
  Close,
  Cancel,
  CancelPresentation,
  DoNotDisturb,
  DoNotDisturbAlt,
  DoNotDisturbOff,
  DoNotDisturbOn,
  NotInterested,
  RemoveCircle,
  RemoveCircleOutline,
  Highlight,
  HighlightOff,
  HighlightAlt,
  StarRate,
  Star,
  StarBorder,
  StarHalf,
  StarOutline,
  Grade,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  ThumbUpAlt,
  ThumbDownAlt,
  ThumbsUpDown,
  Recommend,
  BookmarkAdd,
  BookmarkAdded,
  BookmarkRemove,
  Bookmark,
  BookmarkBorder,
  Bookmarks,
  TurnedIn,
  TurnedInNot,
  Label,
  LabelImportant,
  LabelOff,
  NewLabel,
  LocalOffer,
  Loyalty,
  CardMembership,
  ConfirmationNumber,
  Redeem,
  CardGiftcard,
  Discount,
  Sell,
  MonetizationOn,
  AttachMoney,
  Euro,
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
  Payment,
  CreditCard,
  AccountBalance,
  AccountBalanceWallet,
  Savings,
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  ShowChart,
  Timeline,
  BarChart,
  PieChart,
  Analytics,
  Assessment,
  Poll,
  Quiz,
  QuestionAnswer,
  LiveTv,
  Tv,
  ConnectedTv,
  SmartDisplay,
  Cast,
  CastConnected,
  ScreenShare,
  StopScreenShare,
  PresentToAll,
  AirPlay,
  Bluetooth,
  BluetoothAudio,
  BluetoothConnected,
  BluetoothDisabled,
  BluetoothDrive,
  BluetoothSearching,
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
  LocationOn,
  LocationOff,
  LocationDisabled,
  LocationSearching,
  NearMe,
  NearMeDisabled,
  MyLocation,
  GpsFixed,
  GpsOff,
  GpsNotFixed,
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
  Place,
  Map,
  Explore,
  ExploreOff,
  NearbyError,
  NearbyOff,
  PinDrop,
  WhereToVote,
  FlightTakeoff,
  FlightLand,
  ConnectingAirports,
  AirplanemodeActive,
  AirplanemodeInactive,
  FlightClass,
  TravelExplore,
  Groups,
  Group,
  People,
  Person,
  PersonAdd,
  PersonRemove,
  GroupAdd,
  GroupRemove,
  Community,
  Public,
  Language,
  Translate,
  GTranslate,
  Diversity3,
  FamilyRestroom,
  Handshake,
  VolunteerActivism,
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
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
  EmojiPeople,
  EmojiEmotions,
  EmojiNature,
  EmojiFood,
  EmojiTransportation,
  EmojiEvents,
  EmojiObjects,
  EmojiSymbols,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Mood,
  MoodBad,
  Psychology,
  PsychologyAlt,
  School,
  AutoStories,
  MenuBook,
  LibraryBooks,
  ImportContacts,
  Book,
  Class,
  Engineering,
  Science,
  Biotech,
  Work,
  Business,
  Store,
  ShoppingCart,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCartCheckout,
  AddShoppingCart,
  RemoveShoppingCart,
  ProductionQuantityLimits,
  Inventory,
  Inventory2,
  InventoryOutlined,
  Storefront,
  LocalMall,
  LocalGroceryStore,
  LocalConvenienceStore,
  LocalPharmacy,
  LocalLibrary,
  LocalPostOffice,
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
  Inbox,
  Drafts,
  ReplyAll,
  MailOutline,
  Send,
  Attachment,
  GifBox,
  Chat,
  ChatBubble,
  Message,
  Sms,
  Email,
  Forum,
  Notifications,
  NotificationsActive,
  NotificationsOff,
  Report,
  Flag,
  HeartBroken,
  Home,
  Wc,
  Male,
  Female,
  Transgender,
  Schedule,
  AccessTime,
  Alarm,
  AlarmAdd,
  AlarmOff,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  MoreTime,
  Timer,
  TimerOff,
  Today,
  CalendarToday,
  DateRange,
  Event,
  EventAvailable,
  EventBusy,
  EventNote,
  EventSeat,
  CalendarViewDay,
  CalendarViewMonth,
  CalendarViewWeek,
  EditCalendar,
  History,
  HistoryEdu,
  HistoryToggleOff,
  Update,
  SystemUpdateAlt,
  Sync,
  SyncAlt,
  SyncDisabled,
  SyncLock,
  SyncProblem,
  Cached,
  Refresh,
  Autorenew,
  Loop,
  ChangeCircle,
  SwapHoriz,
  SwapVert,
  CompareArrows,
  ImportExport,
  CallMade,
  CallReceived,
  Merge,
  Archive,
  ColorLens,
  Gradient,
  Opacity,
  Layers,
  FilterNone,
  Flare,
  Flash,
  Lens,
  Looks,
  Nature,
  NetworkCell,
  NetworkWifi,
  NewReleases,
  Panorama,
  Portrait,
  Receipt,
  RecentActors,
  Scanner,
  Slideshow,
  SwitchAccount,
  SwitchCamera,
  TagFaces,
  Transform,
  Undo,
  Redo,
  Vignette,
  Widgets,
  Build,
  Construction,
  Handyman,
  AutoFixNormal,
  AutoFixOff,
  AutoFixHigh,
  Colorize,
  Palette,
  Brush,
  FormatPaint,
  Style,
  Design,
  Category,
  Tag,
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
  CheckCircle,
  CheckCircleOutline,
  RadioButtonUnchecked,
  RadioButtonChecked,
  IndeterminateCheckBox,
  CheckBox,
  CheckBoxOutlineBlank,
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
  Settings,
  SettingsApplications,
  Tune,
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
  TipsAndUpdates,
  Lightbulb,
  AutoAwesome,
  Whatshot,
  Trending,
  EmojiEvents,
  Celebration,
  Party,
  Cake,
  WorkspacePremium
} from '@mui/icons-material';

const AdvancedSafetySecurityFeatures = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [securityProgress, setSecurityProgress] = useState(0);
  const [securityData, setSecurityData] = useState({
    verification: {
      identity: true,
      phone: true,
      email: true,
      photo: true,
      social: true,
      background: false,
      biometric: true,
      twoFactor: true,
      level: 'Gold'
    },
    privacy: {
      profileVisibility: 'Verified Users Only',
      locationSharing: 'Approximate',
      onlineStatus: 'Hidden',
      readReceipts: 'Disabled',
      lastSeen: 'Hidden',
      photoAccess: 'Matches Only',
      contactInfo: 'Private',
      socialMedia: 'Hidden'
    },
    safety: {
      autoBlock: true,
      safetyMode: 'Enhanced',
      reportingEnabled: true,
      emergencyContacts: 3,
      panicButton: true,
      locationTracking: true,
      safetyScore: 94,
      incidentReports: 0,
      blockedUsers: 2,
      reportedUsers: 1
    },
    security: {
      encryption: 'End-to-End',
      dataProtection: 'GDPR Compliant',
      sessionSecurity: 'Multi-Factor',
      deviceSecurity: 'Biometric',
      networkSecurity: 'VPN Protected',
      backupSecurity: 'Encrypted',
      auditLog: true,
      securityAlerts: true,
      suspiciousActivity: false,
      securityScore: 96
    },
    features: {
      realTimeMonitoring: true,
      aiSafetyDetection: true,
      behaviorAnalysis: true,
      riskAssessment: true,
      emergencyResponse: true,
      professionalSupport: true,
      communityModeration: true,
      culturalSafety: true,
      inclusiveDesign: true,
      accessibilityCompliance: true
    }
  });

  const [showSecurityDialog, setShowSecurityDialog] = useState(false);
  const [showPrivacyDialog, setShowPrivacyDialog] = useState(false);
  const [showSafetyDialog, setShowSafetyDialog] = useState(false);
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  // Calculate security score
  useEffect(() => {
    const calculateSecurityScore = () => {
      const verification = securityData.verification;
      const privacy = securityData.privacy;
      const safety = securityData.safety;
      const security = securityData.security;
      
      let score = 0;
      let maxScore = 100;

      // Verification (25 points)
      const verificationCount = Object.values(verification).filter(v => v === true).length;
      score += Math.min((verificationCount / 8) * 25, 25);

      // Privacy settings (25 points)
      const privacyScore = privacy.profileVisibility !== 'Public' ? 5 : 0;
      score += privacyScore;
      score += privacy.locationSharing === 'Hidden' ? 5 : privacy.locationSharing === 'Approximate' ? 3 : 1;
      score += privacy.onlineStatus === 'Hidden' ? 5 : 2;
      score += privacy.readReceipts === 'Disabled' ? 5 : 2;
      score += privacy.contactInfo === 'Private' ? 5 : 2;

      // Safety features (25 points)
      score += safety.autoBlock ? 5 : 0;
      score += safety.safetyMode === 'Enhanced' ? 10 : safety.safetyMode === 'Standard' ? 5 : 0;
      score += safety.panicButton ? 5 : 0;
      score += safety.emergencyContacts >= 3 ? 5 : 2;

      // Security features (25 points)
      score += security.encryption === 'End-to-End' ? 10 : 5;
      score += security.sessionSecurity === 'Multi-Factor' ? 5 : 2;
      score += security.deviceSecurity === 'Biometric' ? 5 : 2;
      score += security.auditLog ? 3 : 0;
      score += security.securityAlerts ? 2 : 0;

      const finalScore = Math.round(score);
      setSecurityProgress(finalScore);
    };

    calculateSecurityScore();
  }, [securityData]);

  // Get security level
  const getSecurityLevel = (score) => {
    if (score >= 90) return { level: 'Maximum Security', color: '#4caf50', icon: <Shield /> };
    if (score >= 75) return { level: 'High Security', color: '#1976d2', icon: <Security /> };
    if (score >= 60) return { level: 'Good Security', color: '#ff9800', icon: <Lock /> };
    if (score >= 45) return { level: 'Basic Security', color: '#f44336', icon: <Warning /> };
    return { level: 'Needs Improvement', color: '#d32f2f', icon: <Error /> };
  };

  // Render security overview
  const renderSecurityOverview = () => {
    const securityLevel = getSecurityLevel(securityProgress);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Advanced Safety & Security Features
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={securityProgress}
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
                  {securityProgress}%
                </Typography>
                <Typography variant="body2" component="div">
                  Security
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={securityLevel.icon}
              label={securityLevel.level}
              sx={{
                backgroundColor: securityLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Security & Safety Score
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Comprehensive protection with advanced security features, privacy controls, and safety monitoring.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
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
                <VerifiedUser />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Verification Level
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {securityData.verification.level}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Identity verified
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
                <Lock />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Privacy Score
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {Math.round((securityProgress * 0.8))}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Data protection
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
                <SafetyCheck />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Safety Score
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
                {securityData.safety.safetyScore}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active protection
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
                <Emergency />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Emergency Ready
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 1 }}>
                {securityData.safety.emergencyContacts}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Emergency contacts
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Advanced Security:</strong> Your account is protected with enterprise-grade 
            security features, comprehensive privacy controls, and real-time safety monitoring.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render verification section
  const renderVerificationSection = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Identity Verification & Authentication
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Verification Status
            </Typography>
            
            <List>
              <ListItem>
                <ListItemIcon>
                  {securityData.verification.identity ? 
                    <CheckCircle sx={{ color: '#4caf50' }} /> : 
                    <RadioButtonUnchecked sx={{ color: '#f44336' }} />
                  }
                </ListItemIcon>
                <ListItemText
                  primary="Government ID Verification"
                  secondary="Official government-issued identification verified"
                />
                <Chip 
                  label={securityData.verification.identity ? "Verified" : "Pending"} 
                  size="small" 
                  sx={{ 
                    backgroundColor: securityData.verification.identity ? '#4caf50' : '#f44336', 
                    color: 'white' 
                  }} 
                />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  {securityData.verification.phone ? 
                    <CheckCircle sx={{ color: '#4caf50' }} /> : 
                    <RadioButtonUnchecked sx={{ color: '#f44336' }} />
                  }
                </ListItemIcon>
                <ListItemText
                  primary="Phone Number Verification"
                  secondary="SMS verification completed"
                />
                <Chip 
                  label={securityData.verification.phone ? "Verified" : "Pending"} 
                  size="small" 
                  sx={{ 
                    backgroundColor: securityData.verification.phone ? '#4caf50' : '#f44336', 
                    color: 'white' 
                  }} 
                />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  {securityData.verification.email ? 
                    <CheckCircle sx={{ color: '#4caf50' }} /> : 
                    <RadioButtonUnchecked sx={{ color: '#f44336' }} />
                  }
                </ListItemIcon>
                <ListItemText
                  primary="Email Verification"
                  secondary="Email address confirmed and verified"
                />
                <Chip 
                  label={securityData.verification.email ? "Verified" : "Pending"} 
                  size="small" 
                  sx={{ 
                    backgroundColor: securityData.verification.email ? '#4caf50' : '#f44336', 
                    color: 'white' 
                  }} 
                />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  {securityData.verification.photo ? 
                    <CheckCircle sx={{ color: '#4caf50' }} /> : 
                    <RadioButtonUnchecked sx={{ color: '#f44336' }} />
                  }
                </ListItemIcon>
                <ListItemText
                  primary="Photo Verification"
                  secondary="Live photo verification completed"
                />
                <Chip 
                  label={securityData.verification.photo ? "Verified" : "Pending"} 
                  size="small" 
                  sx={{ 
                    backgroundColor: securityData.verification.photo ? '#4caf50' : '#f44336', 
                    color: 'white' 
                  }} 
                />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  {securityData.verification.biometric ? 
                    <CheckCircle sx={{ color: '#4caf50' }} /> : 
                    <RadioButtonUnchecked sx={{ color: '#f44336' }} />
                  }
                </ListItemIcon>
                <ListItemText
                  primary="Biometric Authentication"
                  secondary="Fingerprint or face recognition enabled"
                />
                <Switch
                  checked={securityData.verification.biometric}
                  onChange={(e) => setSecurityData(prev => ({
                    ...prev,
                    verification: { ...prev.verification, biometric: e.target.checked }
                  }))}
                />
              </ListItem>
              
              <ListItem>
                <ListItemIcon>
                  {securityData.verification.twoFactor ? 
                    <CheckCircle sx={{ color: '#4caf50' }} /> : 
                    <RadioButtonUnchecked sx={{ color: '#f44336' }} />
                  }
                </ListItemIcon>
                <ListItemText
                  primary="Two-Factor Authentication"
                  secondary="Additional security layer enabled"
                />
                <Switch
                  checked={securityData.verification.twoFactor}
                  onChange={(e) => setSecurityData(prev => ({
                    ...prev,
                    verification: { ...prev.verification, twoFactor: e.target.checked }
                  }))}
                />
              </ListItem>
            </List>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #4caf50' }}>
            <Shield sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              {securityData.verification.level} Verification
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Your identity has been thoroughly verified using multiple authentication methods.
            </Typography>
            
            <Stack spacing={2}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<Fingerprint />}
                sx={{ backgroundColor: '#4caf50' }}
                onClick={() => setShowSecurityDialog(true)}
              >
                Security Settings
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<VpnKey />}
              >
                Manage Keys
              </Button>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🛡️ Advanced Safety & Security Features
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Enterprise-grade security with comprehensive privacy controls and real-time safety monitoring
        </Typography>
      </Box>

      {/* Security Overview */}
      {renderSecurityOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Verification" />
          <Tab label="Privacy Controls" />
          <Tab label="Safety Features" />
          <Tab label="Security Settings" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderVerificationSection()}
      {selectedTab === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Privacy Controls & Data Protection
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Profile Privacy Settings
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Profile Visibility"
                      secondary="Who can see your profile"
                    />
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <Select
                        value={securityData.privacy.profileVisibility}
                        onChange={(e) => setSecurityData(prev => ({
                          ...prev,
                          privacy: { ...prev.privacy, profileVisibility: e.target.value }
                        }))}
                      >
                        <MenuItem value="Public">Public</MenuItem>
                        <MenuItem value="Verified Users Only">Verified Users Only</MenuItem>
                        <MenuItem value="Matches Only">Matches Only</MenuItem>
                        <MenuItem value="Private">Private</MenuItem>
                      </Select>
                    </FormControl>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText
                      primary="Location Sharing"
                      secondary="How your location is shared"
                    />
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <Select
                        value={securityData.privacy.locationSharing}
                        onChange={(e) => setSecurityData(prev => ({
                          ...prev,
                          privacy: { ...prev.privacy, locationSharing: e.target.value }
                        }))}
                      >
                        <MenuItem value="Exact">Exact Location</MenuItem>
                        <MenuItem value="Approximate">Approximate</MenuItem>
                        <MenuItem value="City Only">City Only</MenuItem>
                        <MenuItem value="Hidden">Hidden</MenuItem>
                      </Select>
                    </FormControl>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText
                      primary="Online Status"
                      secondary="Show when you're online"
                    />
                    <FormControl size="small" sx={{ minWidth: 150 }}>
                      <Select
                        value={securityData.privacy.onlineStatus}
                        onChange={(e) => setSecurityData(prev => ({
                          ...prev,
                          privacy: { ...prev.privacy, onlineStatus: e.target.value }
                        }))}
                      >
                        <MenuItem value="Visible">Visible</MenuItem>
                        <MenuItem value="Matches Only">Matches Only</MenuItem>
                        <MenuItem value="Hidden">Hidden</MenuItem>
                      </Select>
                    </FormControl>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText
                      primary="Read Receipts"
                      secondary="Show when you've read messages"
                    />
                    <Switch
                      checked={securityData.privacy.readReceipts === 'Enabled'}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        privacy: { ...prev.privacy, readReceipts: e.target.checked ? 'Enabled' : 'Disabled' }
                      }))}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Data Protection
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Lock sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="End-to-End Encryption"
                      secondary="All messages are encrypted"
                    />
                    <Chip label="Active" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Shield sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="GDPR Compliance"
                      secondary="Full data protection compliance"
                    />
                    <Chip label="Compliant" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Backup sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Secure Backup"
                      secondary="Encrypted data backup"
                    />
                    <Chip label="Enabled" size="small" sx={{ backgroundColor: '#1976d2', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Delete sx={{ color: '#ff9800' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Data Deletion"
                      secondary="Right to be forgotten"
                    />
                    <Button size="small" variant="outlined">
                      Request Deletion
                    </Button>
                  </ListItem>
                </List>
                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: '#1976d2' }}
                  onClick={() => setShowPrivacyDialog(true)}
                >
                  Advanced Privacy Settings
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Safety Features & Monitoring
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Active Safety Features
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Block />
                    </ListItemIcon>
                    <ListItemText
                      primary="Auto-Block Suspicious Users"
                      secondary="Automatically block users with suspicious behavior"
                    />
                    <Switch
                      checked={securityData.safety.autoBlock}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        safety: { ...prev.safety, autoBlock: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <SafetyCheck />
                    </ListItemIcon>
                    <ListItemText
                      primary="Enhanced Safety Mode"
                      secondary="Advanced AI monitoring and protection"
                    />
                    <FormControl size="small" sx={{ minWidth: 120 }}>
                      <Select
                        value={securityData.safety.safetyMode}
                        onChange={(e) => setSecurityData(prev => ({
                          ...prev,
                          safety: { ...prev.safety, safetyMode: e.target.value }
                        }))}
                      >
                        <MenuItem value="Basic">Basic</MenuItem>
                        <MenuItem value="Standard">Standard</MenuItem>
                        <MenuItem value="Enhanced">Enhanced</MenuItem>
                        <MenuItem value="Maximum">Maximum</MenuItem>
                      </Select>
                    </FormControl>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Emergency />
                    </ListItemIcon>
                    <ListItemText
                      primary="Panic Button"
                      secondary="Quick access to emergency services"
                    />
                    <Switch
                      checked={securityData.safety.panicButton}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        safety: { ...prev.safety, panicButton: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <LocationOn />
                    </ListItemIcon>
                    <ListItemText
                      primary="Location Tracking"
                      secondary="Share location with emergency contacts"
                    />
                    <Switch
                      checked={securityData.safety.locationTracking}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        safety: { ...prev.safety, locationTracking: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Report />
                    </ListItemIcon>
                    <ListItemText
                      primary="Incident Reporting"
                      secondary="Easy reporting of safety concerns"
                    />
                    <Switch
                      checked={securityData.safety.reportingEnabled}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        safety: { ...prev.safety, reportingEnabled: e.target.checked }
                      }))}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #ff9800' }}>
                <Emergency sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Emergency Support
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  24/7 emergency support with immediate access to crisis resources and professional assistance.
                </Typography>
                
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<Phone />}
                    sx={{ backgroundColor: '#f44336' }}
                    onClick={() => setShowEmergencyDialog(true)}
                  >
                    Emergency Contacts
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<LocalHospital />}
                  >
                    Crisis Resources
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<ContactSupport />}
                    onClick={() => setShowSafetyDialog(true)}
                  >
                    Safety Center
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Advanced Security Settings
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Security Features
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Lock sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="End-to-End Encryption"
                      secondary="Military-grade message encryption"
                    />
                    <Chip label="Active" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <VpnLock sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="VPN Protection"
                      secondary="Secure network connection"
                    />
                    <Chip label="Protected" size="small" sx={{ backgroundColor: '#1976d2', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Fingerprint sx={{ color: '#ff9800' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Biometric Security"
                      secondary="Fingerprint and face recognition"
                    />
                    <Switch
                      checked={securityData.verification.biometric}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        verification: { ...prev.verification, biometric: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <History sx={{ color: '#7b1fa2' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Security Audit Log"
                      secondary="Track all security events"
                    />
                    <Switch
                      checked={securityData.security.auditLog}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        security: { ...prev.security, auditLog: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <NotificationImportant sx={{ color: '#f44336' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Security Alerts"
                      secondary="Immediate notification of security events"
                    />
                    <Switch
                      checked={securityData.security.securityAlerts}
                      onChange={(e) => setSecurityData(prev => ({
                        ...prev,
                        security: { ...prev.security, securityAlerts: e.target.checked }
                      }))}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Security Score Breakdown
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Identity Verification</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>95%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={95} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Privacy Settings</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>88%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={88} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Safety Features</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>94%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={94} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Security Protocols</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>96%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={96} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  Your security configuration exceeds industry standards with comprehensive 
                  protection across all security domains.
                </Typography>
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
            // Navigate to previous screen (Relationship Coaching)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Coaching
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save security settings and continue to next screen
            localStorage.setItem('securityData', JSON.stringify({
              ...securityData,
              timestamp: new Date().toISOString()
            }));
            console.log('Advanced safety & security features complete - moving to next screen');
          }}
          sx={{
            background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
            color: 'white'
          }}
        >
          Complete Setup
        </Button>
      </Box>

      {/* Security Dialog */}
      <Dialog open={showSecurityDialog} onClose={() => setShowSecurityDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Security sx={{ mr: 1 }} />
            Advanced Security Settings
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Security Configuration
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Configure advanced security features including biometric authentication, 
              two-factor authentication, and security monitoring.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              These settings provide additional layers of protection for your account 
              and personal information.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSecurityDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Save Settings
          </Button>
        </DialogActions>
      </Dialog>

      {/* Privacy Dialog */}
      <Dialog open={showPrivacyDialog} onClose={() => setShowPrivacyDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Lock sx={{ mr: 1 }} />
            Privacy Controls
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Advanced Privacy Settings
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Manage your privacy preferences and data sharing settings with 
              granular control over your personal information.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You have complete control over who can see your information and 
              how your data is used within the platform.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPrivacyDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Update Privacy
          </Button>
        </DialogActions>
      </Dialog>

      {/* Safety Dialog */}
      <Dialog open={showSafetyDialog} onClose={() => setShowSafetyDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SafetyCheck sx={{ mr: 1 }} />
            Safety Center
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Safety Resources & Support
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Access comprehensive safety resources, reporting tools, and 
              emergency support services available 24/7.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your safety is our top priority. We provide multiple layers of 
              protection and immediate access to help when needed.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSafetyDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Access Safety Center
          </Button>
        </DialogActions>
      </Dialog>

      {/* Emergency Dialog */}
      <Dialog open={showEmergencyDialog} onClose={() => setShowEmergencyDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Emergency sx={{ mr: 1 }} />
            Emergency Contacts
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Emergency Contact Management
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Manage your emergency contacts who can be notified in case of 
              safety concerns or emergency situations.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Current emergency contacts: {securityData.safety.emergencyContacts}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEmergencyDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Manage Contacts
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Security Notice */}
      <Alert severity="success" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Security Setup Complete:</strong> Your comprehensive safety and security 
          features are now configured with enterprise-grade protection, advanced privacy 
          controls, and real-time monitoring for maximum safety.
        </Typography>
      </Alert>
    </Container>
  );
};

export default AdvancedSafetySecurityFeatures;

