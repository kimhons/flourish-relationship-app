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
  Event,
  EventAvailable,
  EventBusy,
  EventNote,
  EventSeat,
  CalendarToday,
  DateRange,
  Today,
  Schedule,
  AccessTime,
  Alarm,
  AlarmAdd,
  AlarmOff,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  MoreTime,
  LocationOn,
  Place,
  Map,
  Explore,
  ExploreOff,
  NearMe,
  MyLocation,
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
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  AutoAwesome,
  Star,
  StarBorder,
  Grade,
  Share,
  ShareLocation,
  IosShare,
  NearbyError,
  NearbyOff,
  BluetoothSearching,
  Cast,
  CastConnected,
  ScreenShare,
  StopScreenShare,
  PresentToAll,
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
  Swipe,
  SwipeDown,
  SwipeDownAlt,
  SwipeLeft,
  SwipeLeftAlt,
  SwipeRight,
  SwipeRightAlt,
  SwipeUp,
  SwipeUpAlt,
  SwipeVertical,
  PinchZoomIn,
  PinchZoomOut,
  ZoomIn,
  ZoomOut,
  ZoomOutMap,
  CenterFocusStrong,
  CenterFocusWeak,
  LocationOff,
  LocationDisabled,
  LocationSearching,
  NearMeDisabled,
  GpsOff,
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
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  ThumbUpAlt,
  ThumbDownAlt,
  ThumbsUpDown,
  MoodBad,
  EmojiEmotions,
  EmojiNature,
  EmojiFood,
  EmojiTransportation,
  Psychology,
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
  AutoFixHigh,
  StarRate,
  WorkspacePremium,
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
  FlightTakeoff,
  FlightLand,
  ConnectingAirports,
  AirplanemodeActive,
  AirplanemodeInactive,
  FlightClass,
  TravelExplore,
  GTranslate,
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
  Inventory,
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
  CancelPresentation,
  Chat,
  Message,
  Sms,
  Email,
  Notifications,
  NotificationsActive,
  NotificationsOff,
  Timer,
  History,
  Poll,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Send,
  Attachment,
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
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  Mood,
  EmojiPeople,
  EmojiEvents,
  EmojiObjects,
  EmojiSymbols,
  Face,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
  Print,
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
  Build,
  Construction,
  Handyman,
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
  Widgets
} from '@mui/icons-material';

const CommunityFeaturesSocialIntegration = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [communityProgress, setCommunityProgress] = useState(0);
  const [communityData, setCommunityData] = useState({
    groups: {
      joined: 8,
      created: 2,
      interests: ['Photography', 'Hiking', 'Cooking', 'Travel', 'Music', 'Art', 'Fitness', 'Books'],
      recommendations: [
        {
          id: 'photography_enthusiasts',
          name: 'Photography Enthusiasts',
          members: 1247,
          category: 'Hobbies',
          description: 'Share your best shots and learn from fellow photographers',
          image: '/api/placeholder/300/200',
          compatibility: 92
        },
        {
          id: 'hiking_adventures',
          name: 'Hiking Adventures',
          members: 856,
          category: 'Outdoor',
          description: 'Discover new trails and hiking partners in your area',
          image: '/api/placeholder/300/200',
          compatibility: 88
        },
        {
          id: 'foodie_connections',
          name: 'Foodie Connections',
          members: 2134,
          category: 'Food & Drink',
          description: 'Explore restaurants and share culinary experiences',
          image: '/api/placeholder/300/200',
          compatibility: 85
        }
      ]
    },
    events: {
      upcoming: 12,
      attending: 5,
      hosting: 1,
      categories: ['Social Mixers', 'Outdoor Activities', 'Cultural Events', 'Workshops', 'Sports', 'Dining'],
      featured: [
        {
          id: 'wine_tasting_downtown',
          title: 'Wine Tasting Downtown',
          date: '2024-01-15',
          time: '7:00 PM',
          location: 'Downtown Wine Bar',
          attendees: 24,
          maxAttendees: 30,
          category: 'Social Mixers',
          price: 45,
          description: 'Join us for an evening of wine tasting and meaningful connections',
          image: '/api/placeholder/400/250',
          hostRating: 4.8
        },
        {
          id: 'hiking_sunrise_peak',
          title: 'Sunrise Hike at Eagle Peak',
          date: '2024-01-20',
          time: '6:00 AM',
          location: 'Eagle Peak Trailhead',
          attendees: 18,
          maxAttendees: 25,
          category: 'Outdoor Activities',
          price: 0,
          description: 'Early morning hike to catch the sunrise with fellow adventurers',
          image: '/api/placeholder/400/250',
          hostRating: 4.9
        },
        {
          id: 'cooking_class_italian',
          title: 'Italian Cooking Class',
          date: '2024-01-25',
          time: '6:30 PM',
          location: 'Culinary Arts Studio',
          attendees: 16,
          maxAttendees: 20,
          category: 'Workshops',
          price: 75,
          description: 'Learn to make authentic Italian pasta from scratch',
          image: '/api/placeholder/400/250',
          hostRating: 4.7
        }
      ]
    },
    social: {
      connections: 156,
      mutualFriends: 23,
      socialScore: 78,
      verificationLevel: 'Gold',
      communityRating: 4.6,
      helpfulVotes: 89,
      eventAttendance: 92,
      groupParticipation: 85
    },
    features: {
      groupChat: true,
      eventCreation: true,
      socialVerification: true,
      communityModeration: true,
      eventRecommendations: true,
      groupRecommendations: true,
      socialNetworking: true,
      milestoneSharing: true,
      communitySupport: true,
      culturalEvents: true
    }
  });

  const [showGroupDialog, setShowGroupDialog] = useState(false);
  const [showEventDialog, setShowEventDialog] = useState(false);
  const [showSocialDialog, setShowSocialDialog] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Calculate community score
  useEffect(() => {
    const calculateCommunityScore = () => {
      const social = communityData.social;
      const groups = communityData.groups;
      const events = communityData.events;
      
      let score = 0;
      let maxScore = 100;

      // Social engagement (40 points)
      score += Math.min((social.connections / 200) * 20, 20);
      score += Math.min((social.communityRating / 5) * 20, 20);

      // Group participation (30 points)
      score += Math.min((groups.joined / 10) * 15, 15);
      score += Math.min((groups.created / 3) * 15, 15);

      // Event engagement (30 points)
      score += Math.min((events.attending / 8) * 15, 15);
      score += Math.min((events.hosting / 2) * 15, 15);

      const finalScore = Math.round(score);
      setCommunityProgress(finalScore);
    };

    calculateCommunityScore();
  }, [communityData]);

  // Get community level
  const getCommunityLevel = (score) => {
    if (score >= 90) return { level: 'Community Leader', color: '#7b1fa2', icon: <EmojiEvents /> };
    if (score >= 75) return { level: 'Active Member', color: '#1976d2', icon: <Star /> };
    if (score >= 60) return { level: 'Engaged User', color: '#4caf50', icon: <ThumbUp /> };
    if (score >= 45) return { level: 'New Member', color: '#ff9800', icon: <Person /> };
    return { level: 'Getting Started', color: '#f44336', icon: <PersonAdd /> };
  };

  // Render community overview
  const renderCommunityOverview = () => {
    const communityLevel = getCommunityLevel(communityProgress);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #4caf50 30%, #8bc34a 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Community Features & Social Integration
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={communityProgress}
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
                  {communityProgress}%
                </Typography>
                <Typography variant="body2" component="div">
                  Community
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={communityLevel.icon}
              label={communityLevel.level}
              sx={{
                backgroundColor: communityLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Community Engagement Score
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Connect with like-minded individuals through groups, events, and meaningful social interactions in the Flourish community.
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
                <Groups />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Groups Joined
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {communityData.groups.joined}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active communities
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
                <Event />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Events Attending
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {communityData.events.attending}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upcoming events
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
                <People />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Connections
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
                {communityData.social.connections}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Community friends
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
                <Star />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Community Rating
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e91e63', mb: 1 }}>
                {communityData.social.communityRating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Out of 5 stars
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Community Features:</strong> Join groups, attend events, and build meaningful 
            connections with like-minded individuals in the Flourish community ecosystem.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render groups section
  const renderGroupsSection = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Interest Groups & Communities
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
            Recommended Groups
          </Typography>
          
          <Grid container spacing={3}>
            {communityData.groups.recommendations.map((group) => (
              <Grid item xs={12} md={6} key={group.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={group.image}
                    alt={group.name}
                  />
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {group.name}
                      </Typography>
                      <Chip
                        label={`${group.compatibility}% match`}
                        size="small"
                        sx={{
                          backgroundColor: group.compatibility >= 90 ? '#4caf50' : 
                                         group.compatibility >= 80 ? '#ff9800' : '#f44336',
                          color: 'white'
                        }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        label={group.category}
                        size="small"
                        sx={{ backgroundColor: '#1976d2', color: 'white' }}
                      />
                      <Chip
                        label={`${group.members} members`}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {group.description}
                    </Typography>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        setSelectedGroup(group);
                        setShowGroupDialog(true);
                      }}
                      sx={{ backgroundColor: '#4caf50' }}
                    >
                      Join Group
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, border: '2px solid #4caf50' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
              Your Interests
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              {communityData.groups.interests.map((interest) => (
                <Chip
                  key={interest}
                  label={interest}
                  sx={{
                    backgroundColor: '#4caf50',
                    color: 'white',
                    '&:hover': { backgroundColor: '#45a049' }
                  }}
                />
              ))}
            </Box>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Groups are recommended based on your interests, personality assessment, and compatibility with existing members.
            </Typography>
            
            <Stack spacing={2}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<GroupAdd />}
                sx={{ backgroundColor: '#4caf50' }}
              >
                Create New Group
              </Button>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<Search />}
              >
                Browse All Groups
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
          🌟 Community Features & Social Integration
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Connect, engage, and build meaningful relationships through groups, events, and social activities
        </Typography>
      </Box>

      {/* Community Overview */}
      {renderCommunityOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Interest Groups" />
          <Tab label="Events & Activities" />
          <Tab label="Social Networking" />
          <Tab label="Community Features" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderGroupsSection()}
      {selectedTab === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Events & Activities
          </Typography>
          
          <Grid container spacing={3}>
            {communityData.events.featured.map((event) => (
              <Grid item xs={12} md={4} key={event.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={event.image}
                    alt={event.title}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {event.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        label={event.category}
                        size="small"
                        sx={{ backgroundColor: '#1976d2', color: 'white' }}
                      />
                      {event.price === 0 ? (
                        <Chip label="Free" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                      ) : (
                        <Chip label={`$${event.price}`} size="small" variant="outlined" />
                      )}
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <CalendarToday sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {new Date(event.date).toLocaleDateString()} at {event.time}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOn sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {event.location}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <People sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {event.attendees}/{event.maxAttendees} attending
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {event.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating value={event.hostRating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        Host Rating
                      </Typography>
                    </Box>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        setSelectedEvent(event);
                        setShowEventDialog(true);
                      }}
                      sx={{ backgroundColor: '#1976d2' }}
                    >
                      Join Event
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Event />}
              sx={{ backgroundColor: '#1976d2', mr: 2 }}
            >
              View All Events
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<EventNote />}
            >
              Create Event
            </Button>
          </Box>
        </Box>
      )}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Social Networking & Connections
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Social Verification Status
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mr: 3,
                      backgroundColor: '#ff9800',
                      color: 'white'
                    }}
                  >
                    <WorkspacePremium />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {communityData.social.verificationLevel} Verification
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Verified community member with high trust score
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip label="Identity Verified" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                      <Chip label="Social Verified" size="small" sx={{ backgroundColor: '#1976d2', color: 'white' }} />
                      <Chip label="Event Verified" size="small" sx={{ backgroundColor: '#ff9800', color: 'white' }} />
                    </Box>
                  </Box>
                </Box>
                
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                        {communityData.social.helpfulVotes}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Helpful Votes
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        {communityData.social.eventAttendance}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Event Attendance
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Connection Insights
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Social Score</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {communityData.social.socialScore}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={communityData.social.socialScore} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Group Participation</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {communityData.social.groupParticipation}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={communityData.social.groupParticipation} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary">
                  Your social engagement shows strong community participation with opportunities 
                  for increased event hosting and group leadership.
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #ff9800' }}>
                <People sx={{ fontSize: 60, color: '#ff9800', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Social Networking
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Build meaningful connections through verified social interactions and community engagement.
                </Typography>
                
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<PersonAdd />}
                    sx={{ backgroundColor: '#ff9800' }}
                  >
                    Find Connections
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Share />}
                  >
                    Share Milestones
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Handshake />}
                  >
                    Community Support
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
            Community Features & Settings
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Feature Settings
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Groups />
                    </ListItemIcon>
                    <ListItemText
                      primary="Group Chat Participation"
                      secondary="Join group conversations and discussions"
                    />
                    <Switch
                      checked={communityData.features.groupChat}
                      onChange={(e) => setCommunityData(prev => ({
                        ...prev,
                        features: { ...prev.features, groupChat: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Event />
                    </ListItemIcon>
                    <ListItemText
                      primary="Event Creation"
                      secondary="Create and host community events"
                    />
                    <Switch
                      checked={communityData.features.eventCreation}
                      onChange={(e) => setCommunityData(prev => ({
                        ...prev,
                        features: { ...prev.features, eventCreation: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <SafetyCheck />
                    </ListItemIcon>
                    <ListItemText
                      primary="Social Verification"
                      secondary="Enhanced verification for community trust"
                    />
                    <Switch
                      checked={communityData.features.socialVerification}
                      onChange={(e) => setCommunityData(prev => ({
                        ...prev,
                        features: { ...prev.features, socialVerification: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <AutoAwesome />
                    </ListItemIcon>
                    <ListItemText
                      primary="AI Recommendations"
                      secondary="Personalized group and event suggestions"
                    />
                    <Switch
                      checked={communityData.features.eventRecommendations}
                      onChange={(e) => setCommunityData(prev => ({
                        ...prev,
                        features: { ...prev.features, eventRecommendations: e.target.checked }
                      }))}
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Celebration />
                    </ListItemIcon>
                    <ListItemText
                      primary="Milestone Sharing"
                      secondary="Share relationship milestones with community"
                    />
                    <Switch
                      checked={communityData.features.milestoneSharing}
                      onChange={(e) => setCommunityData(prev => ({
                        ...prev,
                        features: { ...prev.features, milestoneSharing: e.target.checked }
                      }))}
                    />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Community Guidelines
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Respectful Communication"
                      secondary="Maintain respectful and inclusive interactions"
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Authentic Participation"
                      secondary="Be genuine in your community engagement"
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Privacy Respect"
                      secondary="Respect others' privacy and boundaries"
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Supportive Environment"
                      secondary="Foster a supportive and encouraging community"
                    />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Cultural Sensitivity"
                      secondary="Embrace diversity and cultural differences"
                    />
                  </ListItem>
                </List>
                
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  View Full Guidelines
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
            // Navigate to previous screen (Advanced Analytics)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Analytics
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save community settings and continue to next screen
            localStorage.setItem('communityData', JSON.stringify({
              ...communityData,
              timestamp: new Date().toISOString()
            }));
            console.log('Community features configuration complete - moving to next screen');
          }}
          sx={{
            background: 'linear-gradient(45deg, #4caf50 30%, #8bc34a 90%)',
            color: 'white'
          }}
        >
          Complete Phase 4
        </Button>
      </Box>

      {/* Group Dialog */}
      <Dialog open={showGroupDialog} onClose={() => setShowGroupDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Groups sx={{ mr: 1 }} />
            Join Group
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedGroup && (
            <Box sx={{ py: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedGroup.name}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedGroup.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label={selectedGroup.category} sx={{ backgroundColor: '#1976d2', color: 'white' }} />
                <Chip label={`${selectedGroup.members} members`} variant="outlined" />
                <Chip label={`${selectedGroup.compatibility}% compatibility`} sx={{ backgroundColor: '#4caf50', color: 'white' }} />
              </Box>
              <Typography variant="body2" color="text.secondary">
                By joining this group, you'll be able to participate in discussions, attend group events, 
                and connect with like-minded community members.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowGroupDialog(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Join Group
          </Button>
        </DialogActions>
      </Dialog>

      {/* Event Dialog */}
      <Dialog open={showEventDialog} onClose={() => setShowEventDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Event sx={{ mr: 1 }} />
            Join Event
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedEvent && (
            <Box sx={{ py: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedEvent.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedEvent.description}
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Date & Time:</Typography>
                  <Typography variant="body2">{new Date(selectedEvent.date).toLocaleDateString()} at {selectedEvent.time}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Location:</Typography>
                  <Typography variant="body2">{selectedEvent.location}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Price:</Typography>
                  <Typography variant="body2">{selectedEvent.price === 0 ? 'Free' : `$${selectedEvent.price}`}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Attendees:</Typography>
                  <Typography variant="body2">{selectedEvent.attendees}/{selectedEvent.maxAttendees}</Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" color="text.secondary">
                Join this event to meet new people and enjoy a great experience with the community.
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEventDialog(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Join Event
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Community Notice */}
      <Alert severity="success" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Community Integration Complete:</strong> Your comprehensive community features 
          are now configured for meaningful social connections, group participation, and event 
          engagement within the Flourish relationship platform.
        </Typography>
      </Alert>
    </Container>
  );
};

export default CommunityFeaturesSocialIntegration;

