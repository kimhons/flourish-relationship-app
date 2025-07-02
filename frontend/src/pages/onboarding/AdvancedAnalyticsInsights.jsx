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
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  AutoAwesome,
  Star,
  StarBorder,
  Grade,
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
  Face6 as Face6Icon,
  Download as DownloadIcon,
  FileDownload as FileDownloadIcon,
  GetApp as GetAppIcon,
  Print as PrintIcon,
  Share as ShareIcon,
  IosShare,
  NearbyError,
  NearbyOff,
  BluetoothSearching as BluetoothSearchingIcon,
  Cast as CastIcon,
  CastConnected as CastConnectedIcon,
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
  PresentToAll as PresentToAllIcon,
  AirPlay as AirPlayIcon,
  Duo as DuoIcon,
  VideoCall as VideoCallIcon,
  Call as CallIcon,
  PhoneCallback as PhoneCallbackIcon,
  PhoneForwarded as PhoneForwardedIcon,
  PhoneInTalk as PhoneInTalkIcon,
  PhoneLocked as PhoneLockedIcon,
  PhoneMissed as PhoneMissedIcon,
  PhonePaused as PhonePausedIcon,
  DialerSip as DialerSipIcon,
  Dialpad as DialpadIcon,
  ContactPhone as ContactPhoneIcon,
  ContactMail as ContactMailIcon,
  Contacts as ContactsIcon,
  PermContactCalendar as PermContactCalendarIcon,
  PermPhoneMsg as PermPhoneMsgIcon,
  PhoneAndroid as PhoneAndroidIcon,
  PhoneIphone as PhoneIphoneIcon,
  PhoneBluetoothSpeaker as PhoneBluetoothSpeakerIcon,
  PhonelinkErase as PhonelinkEraseIcon,
  PhonelinkLock as PhonelinkLockIcon,
  PhonelinkOff as PhonelinkOffIcon,
  PhonelinkRing as PhonelinkRingIcon,
  PhonelinkSetup as PhonelinkSetupIcon,
  PortableWifiOff as PortableWifiOffIcon,
  RingVolume as RingVolumeIcon,
  VpnLock as VpnLockIcon,
  VpnKey as VpnKeyIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  WifiProtectedSetup as WifiProtectedSetupIcon,
  WifiCalling as WifiCallingIcon,
  WifiCalling3 as WifiCalling3Icon,
  WifiFind as WifiFindIcon,
  WifiLock as WifiLockIcon,
  WifiPassword as WifiPasswordIcon,
  WifiTethering as WifiTetheringIcon,
  WifiTetheringError as WifiTetheringErrorIcon,
  WifiTetheringOff as WifiTetheringOffIcon
} from '@mui/icons-material';

const AdvancedAnalyticsInsights = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [analyticsProgress, setAnalyticsProgress] = useState(0);
  const [timeRange, setTimeRange] = useState('30days');
  const [analyticsData, setAnalyticsData] = useState({
    overview: {
      profileViews: 1247,
      likes: 342,
      matches: 89,
      conversations: 67,
      responseRate: 78,
      attractivenessScore: 85,
      compatibilityScore: 91,
      successPrediction: 92,
      profileCompleteness: 94,
      engagementRate: 73
    },
    trends: {
      profileViewsTrend: 15.3,
      likesTrend: 8.7,
      matchesTrend: 12.4,
      conversationsTrend: 6.2,
      responseRateTrend: 4.1,
      attractivenessTrend: 2.8,
      compatibilityTrend: 5.6,
      successTrend: 7.9
    },
    insights: {
      bestPerformingPhotos: [1, 3, 5],
      optimalActivityTimes: ['7-9 PM', '12-2 PM', '8-10 AM'],
      topConversationStarters: [
        'Travel experiences and adventures',
        'Shared hobbies and interests',
        'Food and dining preferences'
      ],
      improvementAreas: [
        'Profile bio optimization',
        'Photo variety enhancement',
        'Response time improvement'
      ]
    },
    behavioral: {
      swipePatterns: {
        rightSwipeRate: 23,
        leftSwipeRate: 77,
        superLikeRate: 3
      },
      activityPatterns: {
        peakHours: [19, 20, 21],
        activeWeekdays: [5, 6, 0],
        sessionDuration: 18
      },
      communicationStyle: {
        averageResponseTime: 2.4,
        messageLength: 'Medium',
        emojiUsage: 'Moderate',
        questionAsking: 'High'
      }
    },
    recommendations: [
      {
        id: 'photo_optimization',
        category: 'Profile Enhancement',
        priority: 'High',
        title: 'Optimize Photo Selection',
        description: 'Your 3rd and 5th photos perform 40% better than others',
        impact: 'Potential 25% increase in profile views',
        action: 'Reorder photos and add similar style images',
        icon: <PhotoCamera />,
        color: '#e91e63'
      },
      {
        id: 'activity_timing',
        category: 'Engagement Strategy',
        priority: 'Medium',
        title: 'Optimize Activity Timing',
        description: 'Peak engagement occurs between 7-9 PM on weekends',
        impact: 'Potential 18% increase in matches',
        action: 'Focus activity during high-engagement periods',
        icon: <Schedule />,
        color: '#1976d2'
      },
      {
        id: 'conversation_starters',
        category: 'Communication',
        priority: 'Medium',
        title: 'Improve Conversation Starters',
        description: 'Travel-related openers have 65% higher response rates',
        impact: 'Potential 30% increase in conversations',
        action: 'Use travel and adventure-themed conversation starters',
        icon: <Chat />,
        color: '#4caf50'
      },
      {
        id: 'response_time',
        category: 'Communication',
        priority: 'Low',
        title: 'Reduce Response Time',
        description: 'Faster responses (under 2 hours) increase success by 15%',
        impact: 'Potential 15% increase in relationship progression',
        action: 'Enable notifications and respond within 2 hours',
        icon: <Timer />,
        color: '#ff9800'
      }
    ]
  });

  const [showInsightDialog, setShowInsightDialog] = useState(false);
  const [showRecommendationDialog, setShowRecommendationDialog] = useState(false);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState(null);

  // Calculate analytics score
  useEffect(() => {
    const calculateAnalyticsScore = () => {
      const overview = analyticsData.overview;
      let score = 0;
      let maxScore = 100;

      // Profile performance (30 points)
      score += Math.min((overview.profileViews / 1500) * 15, 15);
      score += Math.min((overview.likes / 400) * 15, 15);

      // Engagement quality (40 points)
      score += Math.min((overview.matches / 100) * 15, 15);
      score += Math.min((overview.conversations / 80) * 15, 15);
      score += Math.min((overview.responseRate / 100) * 10, 10);

      // Success metrics (30 points)
      score += Math.min((overview.attractivenessScore / 100) * 10, 10);
      score += Math.min((overview.compatibilityScore / 100) * 10, 10);
      score += Math.min((overview.successPrediction / 100) * 10, 10);

      const finalScore = Math.round(score);
      setAnalyticsProgress(finalScore);
    };

    calculateAnalyticsScore();
  }, [analyticsData]);

  // Get analytics level
  const getAnalyticsLevel = (score) => {
    if (score >= 90) return { level: 'Exceptional', color: '#7b1fa2', icon: <EmojiEvents /> };
    if (score >= 75) return { level: 'Excellent', color: '#1976d2', icon: <Star /> };
    if (score >= 60) return { level: 'Good', color: '#4caf50', icon: <ThumbUp /> };
    if (score >= 45) return { level: 'Average', color: '#ff9800', icon: <TrendingFlat /> };
    return { level: 'Needs Improvement', color: '#f44336', icon: <TrendingDown /> };
  };

  // Get trend indicator
  const getTrendIndicator = (trend) => {
    if (trend > 5) return { icon: <TrendingUp />, color: '#4caf50', text: 'Increasing' };
    if (trend > 0) return { icon: <TrendingUp />, color: '#8bc34a', text: 'Growing' };
    if (trend > -5) return { icon: <TrendingFlat />, color: '#ff9800', text: 'Stable' };
    return { icon: <TrendingDown />, color: '#f44336', text: 'Declining' };
  };

  // Render analytics overview
  const renderAnalyticsOverview = () => {
    const analyticsLevel = getAnalyticsLevel(analyticsProgress);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Advanced Analytics & Insights Dashboard
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={analyticsProgress}
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
                  {analyticsProgress}%
                </Typography>
                <Typography variant="body2" component="div">
                  Analytics
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={analyticsLevel.icon}
              label={analyticsLevel.level}
              sx={{
                backgroundColor: analyticsLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Relationship Success Analytics
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Comprehensive insights and data-driven recommendations for optimizing your dating success and meaningful connections.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
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
                <RemoveRedEye />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Profile Views
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 1 }}>
                {analyticsData.overview.profileViews.toLocaleString()}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getTrendIndicator(analyticsData.trends.profileViewsTrend).icon}
                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                  +{analyticsData.trends.profileViewsTrend}%
                </Typography>
              </Box>
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
                <FavoriteIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Quality Matches
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {analyticsData.overview.matches}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getTrendIndicator(analyticsData.trends.matchesTrend).icon}
                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                  +{analyticsData.trends.matchesTrend}%
                </Typography>
              </Box>
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
                <Chat />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Conversations
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {analyticsData.overview.conversations}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getTrendIndicator(analyticsData.trends.conversationsTrend).icon}
                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                  +{analyticsData.trends.conversationsTrend}%
                </Typography>
              </Box>
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
                {analyticsData.overview.successPrediction}%
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getTrendIndicator(analyticsData.trends.successTrend).icon}
                <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                  +{analyticsData.trends.successTrend}%
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="7days">Last 7 days</MenuItem>
              <MenuItem value="30days">Last 30 days</MenuItem>
              <MenuItem value="90days">Last 3 months</MenuItem>
              <MenuItem value="1year">Last year</MenuItem>
              <MenuItem value="all">All time</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Analytics Insights:</strong> Your performance data shows strong engagement patterns 
            with opportunities for optimization in photo selection and activity timing for maximum success.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render performance metrics
  const renderPerformanceMetrics = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Detailed Performance Metrics
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Engagement Analytics
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Response Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {analyticsData.overview.responseRate}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.overview.responseRate} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Attractiveness Score</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {analyticsData.overview.attractivenessScore}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.overview.attractivenessScore} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Compatibility Score</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {analyticsData.overview.compatibilityScore}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.overview.compatibilityScore} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Profile Completeness</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {analyticsData.overview.profileCompleteness}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.overview.profileCompleteness} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Engagement Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {analyticsData.overview.engagementRate}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.overview.engagementRate} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Success Prediction</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {analyticsData.overview.successPrediction}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.overview.successPrediction} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #1976d2' }}>
            <Analytics sx={{ fontSize: 60, color: '#1976d2', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Performance Summary
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Your analytics show strong performance across key metrics with targeted optimization opportunities.
            </Typography>
            
            <Stack spacing={2}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setShowInsightDialog(true)}
                sx={{ backgroundColor: '#1976d2' }}
              >
                View Detailed Insights
              </Button>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setShowExportDialog(true)}
              >
                Export Analytics
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
          📊 Advanced Analytics & Insights
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive data-driven insights for relationship success optimization
        </Typography>
      </Box>

      {/* Analytics Overview */}
      {renderAnalyticsOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Performance Metrics" />
          <Tab label="Behavioral Insights" />
          <Tab label="AI Recommendations" />
          <Tab label="Success Tracking" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderPerformanceMetrics()}
      {selectedTab === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Behavioral Insights & Patterns
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Swipe Patterns
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Right Swipe Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                      {analyticsData.behavioral.swipePatterns.rightSwipeRate}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.behavioral.swipePatterns.rightSwipeRate} 
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Left Swipe Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#f44336' }}>
                      {analyticsData.behavioral.swipePatterns.leftSwipeRate}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.behavioral.swipePatterns.leftSwipeRate} 
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Super Like Rate</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                      {analyticsData.behavioral.swipePatterns.superLikeRate}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={analyticsData.behavioral.swipePatterns.superLikeRate} 
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Activity Patterns
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Peak Activity Hours
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {analyticsData.behavioral.activityPatterns.peakHours.map((hour) => (
                      <Chip
                        key={hour}
                        label={`${hour}:00`}
                        size="small"
                        sx={{ backgroundColor: '#1976d2', color: 'white' }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Most Active Days
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                      <Chip
                        key={day}
                        label={day}
                        size="small"
                        sx={{
                          backgroundColor: analyticsData.behavioral.activityPatterns.activeWeekdays.includes(index) ? '#4caf50' : '#e0e0e0',
                          color: analyticsData.behavioral.activityPatterns.activeWeekdays.includes(index) ? 'white' : 'text.secondary'
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Average Session Duration
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                    {analyticsData.behavioral.activityPatterns.sessionDuration} min
                  </Typography>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Communication Style
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Average Response Time
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#e91e63' }}>
                    {analyticsData.behavioral.communicationStyle.averageResponseTime} hours
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Message Length
                  </Typography>
                  <Chip
                    label={analyticsData.behavioral.communicationStyle.messageLength}
                    sx={{ backgroundColor: '#1976d2', color: 'white' }}
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Emoji Usage
                  </Typography>
                  <Chip
                    label={analyticsData.behavioral.communicationStyle.emojiUsage}
                    sx={{ backgroundColor: '#ff9800', color: 'white' }}
                  />
                </Box>
                
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Question Asking
                  </Typography>
                  <Chip
                    label={analyticsData.behavioral.communicationStyle.questionAsking}
                    sx={{ backgroundColor: '#4caf50', color: 'white' }}
                  />
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            AI-Powered Recommendations
          </Typography>
          
          <Grid container spacing={3}>
            {analyticsData.recommendations.map((recommendation) => (
              <Grid item xs={12} md={6} key={recommendation.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    border: `2px solid ${recommendation.color}`,
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
                          backgroundColor: recommendation.color,
                          color: 'white'
                        }}
                      >
                        {recommendation.icon}
                      </Avatar>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {recommendation.title}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                          <Chip
                            label={recommendation.category}
                            size="small"
                            sx={{
                              backgroundColor: recommendation.color,
                              color: 'white'
                            }}
                          />
                          <Chip
                            label={recommendation.priority}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: recommendation.priority === 'High' ? '#f44336' : 
                                         recommendation.priority === 'Medium' ? '#ff9800' : '#4caf50',
                              color: recommendation.priority === 'High' ? '#f44336' : 
                                     recommendation.priority === 'Medium' ? '#ff9800' : '#4caf50'
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {recommendation.description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                        Expected Impact:
                      </Typography>
                      <Typography variant="body2">
                        {recommendation.impact}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        Recommended Action:
                      </Typography>
                      <Typography variant="body2">
                        {recommendation.action}
                      </Typography>
                    </Box>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        setSelectedRecommendation(recommendation);
                        setShowRecommendationDialog(true);
                      }}
                      sx={{
                        backgroundColor: recommendation.color,
                        '&:hover': {
                          backgroundColor: recommendation.color,
                          opacity: 0.8
                        }
                      }}
                    >
                      View Details & Apply
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Success Tracking & Milestones
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Success Milestones
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Profile Optimization Complete"
                      secondary="Achieved 94% profile completeness score"
                    />
                    <Typography variant="body2" color="text.secondary">
                      Completed
                    </Typography>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="First 50 Quality Matches"
                      secondary="Reached milestone of 50+ high-compatibility matches"
                    />
                    <Typography variant="body2" color="text.secondary">
                      Completed
                    </Typography>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Communication Excellence"
                      secondary="Achieved 78% response rate with quality conversations"
                    />
                    <Typography variant="body2" color="text.secondary">
                      Completed
                    </Typography>
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <RadioButtonUnchecked sx={{ color: '#ff9800' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="100 Profile Views Milestone"
                      secondary="Progress: 89/100 quality matches achieved"
                    />
                    <LinearProgress 
                      variant="determinate" 
                      value={89} 
                      sx={{ width: 100, ml: 2 }}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <RadioButtonUnchecked sx={{ color: '#9e9e9e' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Relationship Success"
                      secondary="Achieve meaningful relationship milestone"
                    />
                    <Typography variant="body2" color="text.secondary">
                      In Progress
                    </Typography>
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #4caf50' }}>
                <EmojiEvents sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Success Tracking
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Track your progress toward meaningful relationship milestones and dating success.
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                    3/5
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Milestones Achieved
                  </Typography>
                </Box>
                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: '#4caf50', mb: 2 }}
                >
                  View All Milestones
                </Button>
                
                <Typography variant="caption" color="text.secondary">
                  Next milestone: 100 Quality Matches
                </Typography>
              </Card>
            </Grid>
          </Grid>
          
          <Alert severity="success" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Success Tracking Active!</strong> Your progress is being monitored across key 
              relationship success metrics with personalized milestone tracking and achievement recognition.
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
            // Navigate to previous screen (Premium Features & Subscription)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Premium Features
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save analytics settings and continue to next screen
            localStorage.setItem('analyticsData', JSON.stringify({
              ...analyticsData,
              timestamp: new Date().toISOString()
            }));
            console.log('Advanced analytics configuration complete - moving to next screen');
          }}
          sx={{
            background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
            color: 'white'
          }}
        >
          Continue to Community Features
        </Button>
      </Box>

      {/* Insight Dialog */}
      <Dialog open={showInsightDialog} onClose={() => setShowInsightDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Insights sx={{ mr: 1 }} />
            Detailed Analytics Insights
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Key Performance Insights
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Best Performing Photos
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Photos #{analyticsData.insights.bestPerformingPhotos.join(', #')} receive 40% more engagement
                  </Typography>
                </Box>
                
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Optimal Activity Times
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Peak engagement: {analyticsData.insights.optimalActivityTimes.join(', ')}
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Top Conversation Starters
                  </Typography>
                  <List dense>
                    {analyticsData.insights.topConversationStarters.map((starter, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemText
                          primary={starter}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowInsightDialog(false)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Recommendation Dialog */}
      <Dialog open={showRecommendationDialog} onClose={() => setShowRecommendationDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AutoAwesome sx={{ mr: 1 }} />
            AI Recommendation Details
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedRecommendation && (
            <Box sx={{ py: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    mr: 2,
                    backgroundColor: selectedRecommendation.color
                  }}
                >
                  {selectedRecommendation.icon}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {selectedRecommendation.title}
                </Typography>
              </Box>
              
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedRecommendation.description}
              </Typography>
              
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Expected Impact:
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {selectedRecommendation.impact}
              </Typography>
              
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                Recommended Action:
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedRecommendation.action}
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowRecommendationDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Apply Recommendation
          </Button>
        </DialogActions>
      </Dialog>

      {/* Export Dialog */}
      <Dialog open={showExportDialog} onClose={() => setShowExportDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FileDownloadIcon sx={{ mr: 1 }} />
            Export Analytics Data
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Export your analytics data for external analysis or record keeping.
            </Typography>
            
            <Stack spacing={2}>
              <Button variant="outlined" fullWidth startIcon={<FileDownloadIcon />}>
                Export as PDF Report
              </Button>
              <Button variant="outlined" fullWidth startIcon={<FileDownloadIcon />}>
                Export as CSV Data
              </Button>
              <Button variant="outlined" fullWidth startIcon={<FileDownloadIcon />}>
                Export as JSON
              </Button>
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowExportDialog(false)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Analytics Notice */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Advanced Analytics:</strong> Your comprehensive analytics dashboard provides 
          data-driven insights and AI-powered recommendations to optimize your relationship 
          success and meaningful connections on the Flourish platform.
        </Typography>
      </Alert>
    </Container>
  );
};

export default AdvancedAnalyticsInsights;

