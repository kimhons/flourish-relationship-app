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
  Integration,
  BugReport,
  Speed,
  Security,
  CheckCircle,
  Error,
  Warning,
  Info,
  PlayArrow,
  Pause,
  Stop,
  Refresh,
  Build,
  Code,
  Api,
  Cloud,
  Storage,
  Memory,
  NetworkCheck,
  Wifi,
  Bluetooth,
  Smartphone,
  Computer,
  Tablet,
  Watch,
  Tv,
  Cast,
  ConnectedTv,
  DeviceHub,
  Devices,
  DevicesOther,
  Router,
  Cable,
  Usb,
  Nfc,
  QrCode,
  QrCodeScanner,
  QrCode2,
  Fingerprint,
  Face,
  VpnKey,
  Key,
  Lock,
  LockOpen,
  Shield,
  VerifiedUser,
  Verified,
  GppGood,
  GppBad,
  GppMaybe,
  SafetyCheck,
  HealthAndSafety,
  MonitorHeart,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  Star,
  StarBorder,
  Grade,
  Recommend,
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
  ConnectWithoutContact,
  ContactSupport,
  LiveHelp,
  Help,
  HelpOutline,
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
  ScreenShare,
  StopScreenShare,
  PresentToAll,
  AirPlay,
  BluetoothAudio,
  BluetoothConnected,
  BluetoothDisabled,
  BluetoothDrive,
  BluetoothSearching,
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
  DeviceUnknown,
  LaptopChromebook,
  LaptopMac,
  LaptopWindows,
  DesktopMac,
  DesktopWindows,
  TabletAndroid,
  TabletMac,
  WatchLater,
  WatchOff,
  SmartWatch,
  CellWifi,
  CellTower,
  UsbOff,
  UsbConnected,
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

const PlatformIntegrationTesting = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [integrationProgress, setIntegrationProgress] = useState(0);
  const [testingInProgress, setTestingInProgress] = useState(false);
  const [integrationData, setIntegrationData] = useState({
    systems: {
      authentication: { status: 'Connected', health: 98, lastTest: '2 minutes ago' },
      database: { status: 'Connected', health: 96, lastTest: '1 minute ago' },
      aiServices: { status: 'Connected', health: 94, lastTest: '30 seconds ago' },
      messaging: { status: 'Connected', health: 97, lastTest: '1 minute ago' },
      notifications: { status: 'Connected', health: 95, lastTest: '2 minutes ago' },
      payments: { status: 'Connected', health: 99, lastTest: '5 minutes ago' },
      analytics: { status: 'Connected', health: 93, lastTest: '3 minutes ago' },
      storage: { status: 'Connected', health: 98, lastTest: '1 minute ago' },
      security: { status: 'Connected', health: 99, lastTest: '30 seconds ago' },
      thirdParty: { status: 'Connected', health: 91, lastTest: '4 minutes ago' }
    },
    testing: {
      unitTests: { passed: 1247, failed: 3, coverage: 98.7, status: 'Passed' },
      integrationTests: { passed: 342, failed: 1, coverage: 96.2, status: 'Passed' },
      e2eTests: { passed: 89, failed: 0, coverage: 94.5, status: 'Passed' },
      performanceTests: { passed: 156, failed: 2, coverage: 92.1, status: 'Warning' },
      securityTests: { passed: 78, failed: 0, coverage: 100, status: 'Passed' },
      accessibilityTests: { passed: 234, failed: 1, coverage: 97.8, status: 'Passed' },
      loadTests: { passed: 45, failed: 0, coverage: 95.6, status: 'Passed' },
      apiTests: { passed: 167, failed: 1, coverage: 98.2, status: 'Passed' }
    },
    devices: {
      mobile: {
        ios: { compatibility: 98, tested: true, issues: 1 },
        android: { compatibility: 97, tested: true, issues: 2 },
        responsive: { compatibility: 99, tested: true, issues: 0 }
      },
      desktop: {
        chrome: { compatibility: 99, tested: true, issues: 0 },
        firefox: { compatibility: 97, tested: true, issues: 1 },
        safari: { compatibility: 96, tested: true, issues: 2 },
        edge: { compatibility: 98, tested: true, issues: 1 }
      },
      tablet: {
        ipad: { compatibility: 98, tested: true, issues: 1 },
        android: { compatibility: 96, tested: true, issues: 2 }
      }
    },
    performance: {
      loadTime: { value: 1.2, target: 2.0, status: 'Excellent' },
      responseTime: { value: 0.8, target: 1.5, status: 'Excellent' },
      throughput: { value: 2500, target: 2000, status: 'Excellent' },
      errorRate: { value: 0.02, target: 0.1, status: 'Excellent' },
      uptime: { value: 99.97, target: 99.9, status: 'Excellent' },
      memoryUsage: { value: 68, target: 80, status: 'Good' },
      cpuUsage: { value: 45, target: 70, status: 'Good' },
      networkLatency: { value: 45, target: 100, status: 'Excellent' }
    }
  });

  const [showSystemDialog, setShowSystemDialog] = useState(false);
  const [showTestDialog, setShowTestDialog] = useState(false);
  const [showDeviceDialog, setShowDeviceDialog] = useState(false);
  const [showPerformanceDialog, setShowPerformanceDialog] = useState(false);

  // Calculate integration score
  useEffect(() => {
    const calculateIntegrationScore = () => {
      const systems = integrationData.systems;
      const testing = integrationData.testing;
      const devices = integrationData.devices;
      const performance = integrationData.performance;
      
      let score = 0;
      let maxScore = 100;

      // System health (30 points)
      const systemHealthAvg = Object.values(systems).reduce((sum, system) => sum + system.health, 0) / Object.values(systems).length;
      score += (systemHealthAvg / 100) * 30;

      // Testing coverage (25 points)
      const testCoverageAvg = Object.values(testing).reduce((sum, test) => sum + test.coverage, 0) / Object.values(testing).length;
      score += (testCoverageAvg / 100) * 25;

      // Device compatibility (25 points)
      let deviceCompatibilitySum = 0;
      let deviceCount = 0;
      
      Object.values(devices.mobile).forEach(device => {
        deviceCompatibilitySum += device.compatibility;
        deviceCount++;
      });
      Object.values(devices.desktop).forEach(device => {
        deviceCompatibilitySum += device.compatibility;
        deviceCount++;
      });
      Object.values(devices.tablet).forEach(device => {
        deviceCompatibilitySum += device.compatibility;
        deviceCount++;
      });
      
      const deviceCompatibilityAvg = deviceCompatibilitySum / deviceCount;
      score += (deviceCompatibilityAvg / 100) * 25;

      // Performance metrics (20 points)
      let performanceScore = 0;
      performanceScore += performance.loadTime.status === 'Excellent' ? 3 : performance.loadTime.status === 'Good' ? 2 : 1;
      performanceScore += performance.responseTime.status === 'Excellent' ? 3 : performance.responseTime.status === 'Good' ? 2 : 1;
      performanceScore += performance.throughput.status === 'Excellent' ? 3 : performance.throughput.status === 'Good' ? 2 : 1;
      performanceScore += performance.errorRate.status === 'Excellent' ? 3 : performance.errorRate.status === 'Good' ? 2 : 1;
      performanceScore += performance.uptime.status === 'Excellent' ? 4 : performance.uptime.status === 'Good' ? 3 : 2;
      performanceScore += performance.memoryUsage.status === 'Excellent' ? 2 : performance.memoryUsage.status === 'Good' ? 1.5 : 1;
      performanceScore += performance.cpuUsage.status === 'Excellent' ? 1 : performance.cpuUsage.status === 'Good' ? 0.5 : 0;
      
      score += performanceScore;

      const finalScore = Math.round(score);
      setIntegrationProgress(finalScore);
    };

    calculateIntegrationScore();
  }, [integrationData]);

  // Get integration level
  const getIntegrationLevel = (score) => {
    if (score >= 95) return { level: 'Production Ready', color: '#4caf50', icon: <CheckCircle /> };
    if (score >= 85) return { level: 'Near Production', color: '#1976d2', icon: <Integration /> };
    if (score >= 75) return { level: 'Testing Phase', color: '#ff9800', icon: <BugReport /> };
    if (score >= 60) return { level: 'Development', color: '#f44336', icon: <Build /> };
    return { level: 'Setup Required', color: '#d32f2f', icon: <Error /> };
  };

  // Run comprehensive test
  const runComprehensiveTest = async () => {
    setTestingInProgress(true);
    
    // Simulate testing process
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200));
      // Update progress here if needed
    }
    
    setTestingInProgress(false);
  };

  // Render integration overview
  const renderIntegrationOverview = () => {
    const integrationLevel = getIntegrationLevel(integrationProgress);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Platform Integration & Testing
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={integrationProgress}
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
                  {integrationProgress}%
                </Typography>
                <Typography variant="body2" component="div">
                  Integration
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={integrationLevel.icon}
              label={integrationLevel.level}
              sx={{
                backgroundColor: integrationLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Integration Score
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Comprehensive platform integration with full system testing and device compatibility.
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
                <Integration />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                System Health
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {Math.round(Object.values(integrationData.systems).reduce((sum, system) => sum + system.health, 0) / Object.values(integrationData.systems).length)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                All systems operational
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
                <BugReport />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Test Coverage
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {Math.round(Object.values(integrationData.testing).reduce((sum, test) => sum + test.coverage, 0) / Object.values(integrationData.testing).length)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Comprehensive testing
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
                <Devices />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Device Support
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
                98%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cross-platform ready
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
                <Speed />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Performance
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 1 }}>
                {integrationData.performance.uptime.value}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Uptime & reliability
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Integration Status:</strong> All systems are integrated and tested with 
            excellent performance metrics and comprehensive device compatibility.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render system integration section
  const renderSystemIntegrationSection = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        System Integration Status
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Connected Systems
            </Typography>
            
            <List>
              {Object.entries(integrationData.systems).map(([key, system]) => (
                <ListItem key={key}>
                  <ListItemIcon>
                    {system.status === 'Connected' ? 
                      <CheckCircle sx={{ color: '#4caf50' }} /> : 
                      <Error sx={{ color: '#f44336' }} />
                    }
                  </ListItemIcon>
                  <ListItemText
                    primary={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    secondary={`Health: ${system.health}% • Last tested: ${system.lastTest}`}
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={system.health}
                      sx={{ width: 100, height: 6, borderRadius: 3 }}
                    />
                    <Chip 
                      label={system.status} 
                      size="small" 
                      sx={{ 
                        backgroundColor: system.status === 'Connected' ? '#4caf50' : '#f44336', 
                        color: 'white' 
                      }} 
                    />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #4caf50' }}>
            <Integration sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              System Integration
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              All critical systems are connected and operating at optimal performance levels.
            </Typography>
            
            <Stack spacing={2}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<Refresh />}
                sx={{ backgroundColor: '#4caf50' }}
                onClick={() => setShowSystemDialog(true)}
              >
                Test All Systems
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Settings />}
              >
                System Settings
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
          🔧 Platform Integration & Testing
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive system integration with full testing suite and device compatibility
        </Typography>
      </Box>

      {/* Integration Overview */}
      {renderIntegrationOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="System Integration" />
          <Tab label="Testing Suite" />
          <Tab label="Device Compatibility" />
          <Tab label="Performance Metrics" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderSystemIntegrationSection()}
      {selectedTab === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Comprehensive Testing Suite
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Test Results
                </Typography>
                
                <List>
                  {Object.entries(integrationData.testing).map(([key, test]) => (
                    <ListItem key={key}>
                      <ListItemIcon>
                        {test.status === 'Passed' ? 
                          <CheckCircle sx={{ color: '#4caf50' }} /> : 
                          test.status === 'Warning' ?
                          <Warning sx={{ color: '#ff9800' }} /> :
                          <Error sx={{ color: '#f44336' }} />
                        }
                      </ListItemIcon>
                      <ListItemText
                        primary={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        secondary={`Passed: ${test.passed} • Failed: ${test.failed} • Coverage: ${test.coverage}%`}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={test.coverage}
                          sx={{ width: 100, height: 6, borderRadius: 3 }}
                        />
                        <Chip 
                          label={test.status} 
                          size="small" 
                          sx={{ 
                            backgroundColor: test.status === 'Passed' ? '#4caf50' : test.status === 'Warning' ? '#ff9800' : '#f44336', 
                            color: 'white' 
                          }} 
                        />
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #1976d2' }}>
                <BugReport sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Testing Status
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Comprehensive test suite with excellent coverage across all testing categories.
                </Typography>
                
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={testingInProgress ? <CircularProgress size={20} color="inherit" /> : <PlayArrow />}
                    sx={{ backgroundColor: '#1976d2' }}
                    onClick={runComprehensiveTest}
                    disabled={testingInProgress}
                  >
                    {testingInProgress ? 'Running Tests...' : 'Run All Tests'}
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Assessment />}
                    onClick={() => setShowTestDialog(true)}
                  >
                    View Reports
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Device Compatibility Testing
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Smartphone sx={{ mr: 1 }} />
                  Mobile Devices
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemText
                      primary="iOS"
                      secondary={`Compatibility: ${integrationData.devices.mobile.ios.compatibility}%`}
                    />
                    <Chip 
                      label={integrationData.devices.mobile.ios.issues === 0 ? "Perfect" : `${integrationData.devices.mobile.ios.issues} issues`} 
                      size="small" 
                      sx={{ 
                        backgroundColor: integrationData.devices.mobile.ios.issues === 0 ? '#4caf50' : '#ff9800', 
                        color: 'white' 
                      }} 
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText
                      primary="Android"
                      secondary={`Compatibility: ${integrationData.devices.mobile.android.compatibility}%`}
                    />
                    <Chip 
                      label={integrationData.devices.mobile.android.issues === 0 ? "Perfect" : `${integrationData.devices.mobile.android.issues} issues`} 
                      size="small" 
                      sx={{ 
                        backgroundColor: integrationData.devices.mobile.android.issues === 0 ? '#4caf50' : '#ff9800', 
                        color: 'white' 
                      }} 
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemText
                      primary="Responsive Design"
                      secondary={`Compatibility: ${integrationData.devices.mobile.responsive.compatibility}%`}
                    />
                    <Chip 
                      label={integrationData.devices.mobile.responsive.issues === 0 ? "Perfect" : `${integrationData.devices.mobile.responsive.issues} issues`} 
                      size="small" 
                      sx={{ 
                        backgroundColor: integrationData.devices.mobile.responsive.issues === 0 ? '#4caf50' : '#ff9800', 
                        color: 'white' 
                      }} 
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Computer sx={{ mr: 1 }} />
                  Desktop Browsers
                </Typography>
                
                <List>
                  {Object.entries(integrationData.devices.desktop).map(([browser, data]) => (
                    <ListItem key={browser}>
                      <ListItemText
                        primary={browser.charAt(0).toUpperCase() + browser.slice(1)}
                        secondary={`Compatibility: ${data.compatibility}%`}
                      />
                      <Chip 
                        label={data.issues === 0 ? "Perfect" : `${data.issues} issues`} 
                        size="small" 
                        sx={{ 
                          backgroundColor: data.issues === 0 ? '#4caf50' : '#ff9800', 
                          color: 'white' 
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3, display: 'flex', alignItems: 'center' }}>
                  <Tablet sx={{ mr: 1 }} />
                  Tablet Devices
                </Typography>
                
                <List>
                  {Object.entries(integrationData.devices.tablet).map(([device, data]) => (
                    <ListItem key={device}>
                      <ListItemText
                        primary={device === 'ipad' ? 'iPad' : 'Android Tablet'}
                        secondary={`Compatibility: ${data.compatibility}%`}
                      />
                      <Chip 
                        label={data.issues === 0 ? "Perfect" : `${data.issues} issues`} 
                        size="small" 
                        sx={{ 
                          backgroundColor: data.issues === 0 ? '#4caf50' : '#ff9800', 
                          color: 'white' 
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Performance Metrics & Monitoring
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Performance Indicators
                </Typography>
                
                <List>
                  {Object.entries(integrationData.performance).map(([key, metric]) => (
                    <ListItem key={key}>
                      <ListItemIcon>
                        {metric.status === 'Excellent' ? 
                          <CheckCircle sx={{ color: '#4caf50' }} /> : 
                          metric.status === 'Good' ?
                          <Info sx={{ color: '#1976d2' }} /> :
                          <Warning sx={{ color: '#ff9800' }} />
                        }
                      </ListItemIcon>
                      <ListItemText
                        primary={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                        secondary={`Current: ${metric.value}${key.includes('Time') || key.includes('Latency') ? 's' : key.includes('Rate') ? '%' : key.includes('Usage') ? '%' : key.includes('uptime') ? '%' : ''} • Target: ${metric.target}${key.includes('Time') || key.includes('Latency') ? 's' : key.includes('Rate') ? '%' : key.includes('Usage') ? '%' : key.includes('uptime') ? '%' : ''}`}
                      />
                      <Chip 
                        label={metric.status} 
                        size="small" 
                        sx={{ 
                          backgroundColor: metric.status === 'Excellent' ? '#4caf50' : metric.status === 'Good' ? '#1976d2' : '#ff9800', 
                          color: 'white' 
                        }} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Performance Summary
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Overall Performance</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>96%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={96} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Reliability Score</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>99%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={99} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">User Experience</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>98%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={98} sx={{ height: 8, borderRadius: 4 }} />
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  Excellent performance across all metrics with industry-leading reliability and user experience.
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
            // Navigate to previous screen (User Experience Optimization)
            console.log('Navigate to previous screen');
          }}
        >
          Back to UX Optimization
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save integration data and continue to final screen
            localStorage.setItem('integrationData', JSON.stringify({
              ...integrationData,
              timestamp: new Date().toISOString()
            }));
            console.log('Platform integration & testing complete - moving to final launch preparation');
          }}
          sx={{
            background: 'linear-gradient(45deg, #1976d2 30%, #00bcd4 90%)',
            color: 'white'
          }}
        >
          Ready for Launch
        </Button>
      </Box>

      {/* System Dialog */}
      <Dialog open={showSystemDialog} onClose={() => setShowSystemDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Integration sx={{ mr: 1 }} />
            System Integration Test
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Comprehensive System Test
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Run a comprehensive test of all integrated systems including authentication, 
              database, AI services, messaging, and security components.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This test will verify all system connections and performance metrics.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSystemDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Run System Test
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Integration Notice */}
      <Alert severity="success" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Integration Complete:</strong> All systems are fully integrated and tested 
          with excellent performance metrics, comprehensive device compatibility, and 
          production-ready status achieved.
        </Typography>
      </Alert>
    </Container>
  );
};

export default PlatformIntegrationTesting;

