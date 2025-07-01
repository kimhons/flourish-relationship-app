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
  ToggleButtonGroup
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Privacy,
  Lock,
  LockOpen,
  Security,
  Shield,
  VerifiedUser,
  Visibility,
  VisibilityOff,
  Settings,
  Tune,
  FilterList,
  PersonOff,
  Block,
  NotInterested,
  Delete,
  Clear,
  Edit,
  Save,
  Cancel,
  CheckCircle,
  Warning,
  Error,
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
  FilterNone as FilterNoneIcon,
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
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
  NearMe,
  NetworkCell,
  NetworkWifi,
  NewReleases,
  NightlightRound,
  NoFlash,
  NotListedLocation,
  Palette as PaletteIcon,
  Panorama,
  PanoramaFishEye,
  PanoramaHorizontal,
  PanoramaVertical,
  PanoramaWideAngle,
  PhotoAlbum,
  PhotoFilter,
  PhotoLibrary as PhotoLibraryIcon,
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
  Style as StyleIcon,
  Switch as SwitchIcon,
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
  Texture as TextureIcon,
  ThreeSixty,
  Timer10,
  Timer3,
  TimerOff,
  Timelapse,
  Transform,
  Tune as TuneIcon,
  TurnedIn,
  TurnedInNot,
  Unarchive as UnarchiveIcon,
  Undo,
  Redo,
  UndoIcon,
  RedoIcon,
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
  CropFree,
  CropOriginal,
  CropSquare,
  Crop169,
  Crop32,
  Crop54,
  Crop75,
  CropDin,
  CropLandscape,
  CropPortrait,
  Crop,
  AspectRatio,
  CenterFocusStrong,
  CenterFocusWeak,
  Collections as CollectionsIcon,
  CollectionsBookmark,
  ColorLens as ColorLensIcon,
  Compare,
  ControlPoint,
  ControlPointDuplicate,
  Dehaze,
  Details,
  Exposure,
  ExposureNeg1,
  ExposureNeg2,
  ExposurePlus1,
  ExposurePlus2,
  ExposureZero,
  Filter,
  FilterBAndW as FilterBAndWIcon,
  FilterCenterFocus as FilterCenterFocusIcon,
  FilterDrama as FilterDramaIcon,
  FilterFrames as FilterFramesIcon,
  FilterHdr as FilterHdrIcon,
  FilterTiltShift as FilterTiltShiftIcon,
  FilterVintage as FilterVintageIcon,
  Flare as FlareIcon,
  FlashAuto as FlashAutoIcon,
  FlashOff as FlashOffIcon,
  FlashOn as FlashOnIcon,
  Flip,
  FlipCameraAndroid,
  FlipCameraIos,
  Gradient as GradientIcon,
  GridOff,
  GridOn,
  Hdr,
  HdrEnhancedSelect,
  HdrOff,
  HdrOn,
  HdrPlus,
  HdrStrong,
  HdrWeak,
  Healing,
  Image as ImageIcon,
  ImageAspectRatio,
  ImageNotSupported,
  ImageSearch,
  Iso as IsoIcon,
  Landscape,
  LeakAdd,
  LeakRemove,
  Lens as LensIcon,
  LinkedCamera,
  Looks as LooksIcon,
  Looks3 as Looks3Icon,
  Looks4 as Looks4Icon,
  Looks5 as Looks5Icon,
  Looks6 as Looks6Icon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
  Loupe as LoupeIcon,
  Monochrome as MonochromeIcon,
  MotionPhotosAuto,
  MotionPhotosOff,
  MotionPhotosOn,
  MotionPhotosPause,
  MotionPhotosPaused,
  MovieCreation as MovieCreationIcon,
  MovieFilter as MovieFilterIcon,
  MusicNote as MusicNoteIcon,
  MusicOff as MusicOffIcon,
  Nature as NatureIcon,
  NaturePeople as NaturePeopleIcon,
  NavigateBefore as NavigateBeforeIconAlt,
  NavigateNext as NavigateNextIconAlt,
  NearMe as NearMeIcon,
  NewReleases as NewReleasesIcon,
  NightlightRound as NightlightRoundIcon,
  NoFlash as NoFlashIcon,
  NotListedLocation as NotListedLocationIcon,
  Palette as PaletteIconAlt,
  Panorama as PanoramaIcon,
  PanoramaFishEye as PanoramaFishEyeIcon,
  PanoramaHorizontal as PanoramaHorizontalIcon,
  PanoramaVertical as PanoramaVerticalIcon,
  PanoramaWideAngle as PanoramaWideAngleIcon,
  PhotoAlbum as PhotoAlbumIcon,
  PhotoFilter as PhotoFilterIcon,
  PhotoSizeSelectActual as PhotoSizeSelectActualIcon,
  PhotoSizeSelectLarge as PhotoSizeSelectLargeIcon,
  PhotoSizeSelectSmall as PhotoSizeSelectSmallIcon,
  PictureAsPdf as PictureAsPdfIcon,
  Portrait as PortraitIcon,
  Receipt as ReceiptIcon,
  ReceiptLong as ReceiptLongIcon,
  RecentActors as RecentActorsIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Rotate90DegreesCcw as Rotate90DegreesCcwIcon,
  Rotate90DegreesCw as Rotate90DegreesCwIcon,
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  Scanner as ScannerIcon,
  Slideshow as SlideshowIcon,
  StraightenIcon as StraightenIconAlt,
  SwitchAccount as SwitchAccountIcon,
  SwitchCamera as SwitchCameraIcon,
  SwitchLeft as SwitchLeftIcon,
  SwitchRight as SwitchRightIcon,
  SwitchVideo as SwitchVideoIcon,
  TagFaces as TagFacesIcon,
  TextRotateUp as TextRotateUpIcon,
  TextRotateVertical as TextRotateVerticalIcon,
  TextRotationDown as TextRotationDownIcon,
  TextRotationNone as TextRotationNoneIcon,
  ThreeSixty as ThreeSixtyIcon,
  Timer10 as Timer10Icon,
  Timer3 as Timer3Icon,
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon,
  Transform as TransformIcon,
  TurnedIn as TurnedInIcon,
  TurnedInNot as TurnedInNotIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  ViewCarousel as ViewCarouselIcon,
  ViewColumn as ViewColumnIcon,
  ViewComfy as ViewComfyIcon,
  ViewCompact as ViewCompactIcon,
  ViewDay as ViewDayIcon,
  ViewHeadline as ViewHeadlineIcon,
  ViewInAr as ViewInArIcon,
  ViewWeek as ViewWeekIcon,
  Vignette as VignetteIcon,
  WbAuto as WbAutoIcon,
  WbCloudy as WbCloudyIcon,
  WbIncandescent as WbIncandescentIcon,
  WbIridescent as WbIridescentIcon,
  WbShade as WbShadeIcon,
  WbSunny as WbSunnyIcon,
  WbTwilight as WbTwilightIcon,
  Widgets as WidgetsIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap as ZoomOutMapIcon,
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
  EmojiObjects as EmojiObjectsIcon,
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
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  ViewQuilt as ViewQuiltIcon,
  ViewStream as ViewStreamIcon,
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
  Timer,
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
  EmojiEvents,
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
  Workspaces
} from '@mui/icons-material';

const PrivacyControlsSettings = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    photoVisibility: 'matches',
    locationSharing: 'approximate',
    onlineStatus: false,
    readReceipts: true,
    activityStatus: false,
    searchVisibility: true,
    ageVisibility: 'matches',
    lastActiveVisibility: 'none',
    distanceVisibility: 'approximate',
    mutualFriendsVisibility: true,
    socialMediaLinking: false,
    dataCollection: {
      analytics: true,
      personalization: true,
      marketing: false,
      research: false,
      thirdParty: false
    },
    communicationPreferences: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      marketingEmails: false,
      productUpdates: true,
      safetyAlerts: true
    },
    blockedUsers: [],
    restrictedUsers: [],
    privacyScore: 0
  });

  const [showDataDialog, setShowDataDialog] = useState(false);
  const [showExportDialog, setShowExportDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [privacyTips, setPrivacyTips] = useState([]);

  // Privacy categories
  const privacyCategories = [
    {
      id: 'profile_privacy',
      name: 'Profile Privacy',
      description: 'Control who can see your profile and personal information',
      icon: <Person />,
      color: '#2196f3',
      settings: [
        {
          id: 'profileVisibility',
          name: 'Profile Visibility',
          description: 'Who can see your profile',
          type: 'select',
          options: [
            { value: 'public', label: 'Everyone', description: 'Your profile is visible to all users' },
            { value: 'matches', label: 'Matches Only', description: 'Only people you\'ve matched with can see your full profile' },
            { value: 'verified', label: 'Verified Users Only', description: 'Only verified users can see your profile' },
            { value: 'private', label: 'Private', description: 'Your profile is hidden from discovery' }
          ],
          impact: 'high',
          recommendation: 'matches'
        },
        {
          id: 'photoVisibility',
          name: 'Photo Visibility',
          description: 'Who can see your photos',
          type: 'select',
          options: [
            { value: 'public', label: 'Everyone', description: 'All photos visible to everyone' },
            { value: 'matches', label: 'Matches Only', description: 'Full photos only visible to matches' },
            { value: 'blurred', label: 'Blurred Preview', description: 'Blurred photos until matched' },
            { value: 'private', label: 'Private', description: 'Photos only shared after approval' }
          ],
          impact: 'high',
          recommendation: 'matches'
        },
        {
          id: 'ageVisibility',
          name: 'Age Display',
          description: 'How your age is shown',
          type: 'select',
          options: [
            { value: 'exact', label: 'Exact Age', description: 'Show your exact age' },
            { value: 'range', label: 'Age Range', description: 'Show age range (e.g., 25-30)' },
            { value: 'hidden', label: 'Hidden', description: 'Don\'t show age on profile' }
          ],
          impact: 'medium',
          recommendation: 'exact'
        }
      ]
    },
    {
      id: 'location_privacy',
      name: 'Location Privacy',
      description: 'Manage location sharing and distance visibility',
      icon: <LocationOn />,
      color: '#4caf50',
      settings: [
        {
          id: 'locationSharing',
          name: 'Location Sharing',
          description: 'How precise location information is shared',
          type: 'select',
          options: [
            { value: 'exact', label: 'Exact Location', description: 'Share precise location for accurate matching' },
            { value: 'approximate', label: 'Approximate Location', description: 'Share general area (recommended)' },
            { value: 'city', label: 'City Only', description: 'Only share city-level location' },
            { value: 'disabled', label: 'Disabled', description: 'Don\'t share location (limits matching)' }
          ],
          impact: 'high',
          recommendation: 'approximate'
        },
        {
          id: 'distanceVisibility',
          name: 'Distance Display',
          description: 'How distance is shown to others',
          type: 'select',
          options: [
            { value: 'exact', label: 'Exact Distance', description: 'Show precise distance (e.g., 2.3 miles)' },
            { value: 'approximate', label: 'Approximate Distance', description: 'Show rounded distance (e.g., ~2 miles)' },
            { value: 'range', label: 'Distance Range', description: 'Show distance range (e.g., 1-5 miles)' },
            { value: 'hidden', label: 'Hidden', description: 'Don\'t show distance' }
          ],
          impact: 'medium',
          recommendation: 'approximate'
        }
      ]
    },
    {
      id: 'activity_privacy',
      name: 'Activity Privacy',
      description: 'Control visibility of your activity and online status',
      icon: <Visibility />,
      color: '#ff9800',
      settings: [
        {
          id: 'onlineStatus',
          name: 'Online Status',
          description: 'Show when you\'re online',
          type: 'switch',
          impact: 'medium',
          recommendation: false
        },
        {
          id: 'lastActiveVisibility',
          name: 'Last Active',
          description: 'Show when you were last active',
          type: 'select',
          options: [
            { value: 'exact', label: 'Exact Time', description: 'Show exact last active time' },
            { value: 'approximate', label: 'Approximate Time', description: 'Show approximate time (e.g., "recently")' },
            { value: 'matches', label: 'Matches Only', description: 'Only show to matches' },
            { value: 'none', label: 'Hidden', description: 'Don\'t show last active time' }
          ],
          impact: 'medium',
          recommendation: 'none'
        },
        {
          id: 'readReceipts',
          name: 'Read Receipts',
          description: 'Show when you\'ve read messages',
          type: 'switch',
          impact: 'low',
          recommendation: true
        },
        {
          id: 'activityStatus',
          name: 'Activity Status',
          description: 'Show your current activity (typing, viewing profile, etc.)',
          type: 'switch',
          impact: 'medium',
          recommendation: false
        }
      ]
    },
    {
      id: 'discovery_privacy',
      name: 'Discovery Privacy',
      description: 'Control how you appear in search and discovery',
      icon: <Search />,
      color: '#9c27b0',
      settings: [
        {
          id: 'searchVisibility',
          name: 'Search Visibility',
          description: 'Allow others to find you in search',
          type: 'switch',
          impact: 'high',
          recommendation: true
        },
        {
          id: 'mutualFriendsVisibility',
          name: 'Mutual Friends',
          description: 'Show mutual friends from social media',
          type: 'switch',
          impact: 'medium',
          recommendation: true
        },
        {
          id: 'socialMediaLinking',
          name: 'Social Media Integration',
          description: 'Link and display social media profiles',
          type: 'switch',
          impact: 'high',
          recommendation: false
        }
      ]
    },
    {
      id: 'data_privacy',
      name: 'Data Privacy',
      description: 'Manage data collection and usage preferences',
      icon: <Storage />,
      color: '#607d8b',
      settings: [
        {
          id: 'analytics',
          name: 'Analytics Data',
          description: 'Allow collection of usage analytics to improve the app',
          type: 'switch',
          category: 'dataCollection',
          impact: 'low',
          recommendation: true
        },
        {
          id: 'personalization',
          name: 'Personalization Data',
          description: 'Use data to personalize your experience and recommendations',
          type: 'switch',
          category: 'dataCollection',
          impact: 'medium',
          recommendation: true
        },
        {
          id: 'marketing',
          name: 'Marketing Data',
          description: 'Use data for marketing and promotional purposes',
          type: 'switch',
          category: 'dataCollection',
          impact: 'medium',
          recommendation: false
        },
        {
          id: 'research',
          name: 'Research Data',
          description: 'Include anonymized data in research studies',
          type: 'switch',
          category: 'dataCollection',
          impact: 'low',
          recommendation: false
        },
        {
          id: 'thirdParty',
          name: 'Third-Party Sharing',
          description: 'Share data with trusted third-party partners',
          type: 'switch',
          category: 'dataCollection',
          impact: 'high',
          recommendation: false
        }
      ]
    },
    {
      id: 'communication_privacy',
      name: 'Communication Privacy',
      description: 'Manage notification and communication preferences',
      icon: <Message />,
      color: '#e91e63',
      settings: [
        {
          id: 'emailNotifications',
          name: 'Email Notifications',
          description: 'Receive important notifications via email',
          type: 'switch',
          category: 'communicationPreferences',
          impact: 'low',
          recommendation: true
        },
        {
          id: 'pushNotifications',
          name: 'Push Notifications',
          description: 'Receive push notifications on your device',
          type: 'switch',
          category: 'communicationPreferences',
          impact: 'low',
          recommendation: true
        },
        {
          id: 'smsNotifications',
          name: 'SMS Notifications',
          description: 'Receive notifications via text message',
          type: 'switch',
          category: 'communicationPreferences',
          impact: 'medium',
          recommendation: false
        },
        {
          id: 'marketingEmails',
          name: 'Marketing Emails',
          description: 'Receive promotional and marketing emails',
          type: 'switch',
          category: 'communicationPreferences',
          impact: 'low',
          recommendation: false
        },
        {
          id: 'productUpdates',
          name: 'Product Updates',
          description: 'Receive updates about new features and improvements',
          type: 'switch',
          category: 'communicationPreferences',
          impact: 'low',
          recommendation: true
        },
        {
          id: 'safetyAlerts',
          name: 'Safety Alerts',
          description: 'Receive important safety and security notifications',
          type: 'switch',
          category: 'communicationPreferences',
          impact: 'high',
          recommendation: true
        }
      ]
    }
  ];

  // Privacy tips
  const privacyTipsData = [
    {
      id: 'strong_privacy',
      title: 'Strong Privacy Setup',
      description: 'Set profile visibility to "Matches Only" and disable online status for maximum privacy.',
      icon: <Shield />,
      priority: 'high'
    },
    {
      id: 'location_safety',
      title: 'Location Safety',
      description: 'Use "Approximate Location" to maintain privacy while still enabling effective matching.',
      icon: <LocationOn />,
      priority: 'high'
    },
    {
      id: 'data_minimization',
      title: 'Data Minimization',
      description: 'Disable marketing and third-party data sharing to limit data collection.',
      icon: <Storage />,
      priority: 'medium'
    },
    {
      id: 'activity_control',
      title: 'Activity Control',
      description: 'Consider hiding your last active time and online status for better privacy.',
      icon: <Visibility />,
      priority: 'medium'
    },
    {
      id: 'regular_review',
      title: 'Regular Review',
      description: 'Review and update your privacy settings regularly as your comfort level changes.',
      icon: <Update />,
      priority: 'low'
    }
  ];

  // Calculate privacy score
  useEffect(() => {
    const calculatePrivacyScore = () => {
      let score = 0;
      let maxScore = 0;

      // Profile privacy (30 points)
      maxScore += 30;
      if (privacySettings.profileVisibility === 'private') score += 30;
      else if (privacySettings.profileVisibility === 'matches') score += 25;
      else if (privacySettings.profileVisibility === 'verified') score += 20;
      else score += 10;

      // Location privacy (25 points)
      maxScore += 25;
      if (privacySettings.locationSharing === 'disabled') score += 25;
      else if (privacySettings.locationSharing === 'city') score += 20;
      else if (privacySettings.locationSharing === 'approximate') score += 15;
      else score += 5;

      // Activity privacy (20 points)
      maxScore += 20;
      if (!privacySettings.onlineStatus) score += 5;
      if (!privacySettings.activityStatus) score += 5;
      if (privacySettings.lastActiveVisibility === 'none') score += 10;

      // Data privacy (15 points)
      maxScore += 15;
      if (!privacySettings.dataCollection.marketing) score += 5;
      if (!privacySettings.dataCollection.thirdParty) score += 5;
      if (!privacySettings.dataCollection.research) score += 3;
      if (!privacySettings.socialMediaLinking) score += 2;

      // Communication privacy (10 points)
      maxScore += 10;
      if (!privacySettings.communicationPreferences.marketingEmails) score += 3;
      if (!privacySettings.communicationPreferences.smsNotifications) score += 4;
      if (privacySettings.communicationPreferences.safetyAlerts) score += 3;

      const finalScore = Math.round((score / maxScore) * 100);
      setPrivacySettings(prev => ({ ...prev, privacyScore: finalScore }));
    };

    calculatePrivacyScore();
  }, [privacySettings.profileVisibility, privacySettings.locationSharing, privacySettings.onlineStatus, 
      privacySettings.activityStatus, privacySettings.lastActiveVisibility, privacySettings.dataCollection, 
      privacySettings.socialMediaLinking, privacySettings.communicationPreferences]);

  // Update privacy setting
  const updatePrivacySetting = (settingId, value, category = null) => {
    setPrivacySettings(prev => {
      if (category) {
        return {
          ...prev,
          [category]: {
            ...prev[category],
            [settingId]: value
          }
        };
      } else {
        return {
          ...prev,
          [settingId]: value
        };
      }
    });
  };

  // Get privacy level
  const getPrivacyLevel = (score) => {
    if (score >= 80) return { level: 'High', color: '#4caf50', icon: <Shield /> };
    if (score >= 60) return { level: 'Medium', color: '#ff9800', icon: <Security /> };
    if (score >= 40) return { level: 'Basic', color: '#f44336', icon: <Warning /> };
    return { level: 'Low', color: '#d32f2f', icon: <Error /> };
  };

  // Render privacy overview
  const renderPrivacyOverview = () => {
    const privacyLevel = getPrivacyLevel(privacySettings.privacyScore);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Privacy Controls
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={privacySettings.privacyScore}
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
                  {privacySettings.privacyScore}%
                </Typography>
                <Typography variant="body2" component="div">
                  Privacy Score
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={privacyLevel.icon}
              label={`${privacyLevel.level} Privacy`}
              sx={{
                backgroundColor: privacyLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Privacy Protection Level
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Customize your privacy settings to control how your information is shared and used.
          </Typography>
        </Paper>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Privacy Matters:</strong> Your privacy settings directly impact your safety and security. 
            Review each setting carefully and choose options that align with your comfort level. 
            You can always adjust these settings later.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render privacy categories
  const renderPrivacyCategories = () => (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {privacyCategories.map((category) => (
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
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                </Box>
              </Box>

              <List dense>
                {category.settings.map((setting) => (
                  <ListItem key={setting.id} sx={{ px: 0, py: 1 }}>
                    <ListItemText
                      primary={setting.name}
                      secondary={setting.description}
                      primaryTypographyProps={{ fontWeight: 'medium' }}
                    />
                    <ListItemSecondaryAction>
                      {setting.type === 'switch' ? (
                        <Switch
                          checked={setting.category ? 
                            privacySettings[setting.category][setting.id] : 
                            privacySettings[setting.id]}
                          onChange={(e) => updatePrivacySetting(setting.id, e.target.checked, setting.category)}
                          color="primary"
                        />
                      ) : (
                        <FormControl size="small" sx={{ minWidth: 120 }}>
                          <Select
                            value={setting.category ? 
                              privacySettings[setting.category][setting.id] : 
                              privacySettings[setting.id]}
                            onChange={(e) => updatePrivacySetting(setting.id, e.target.value, setting.category)}
                          >
                            {setting.options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  // Render detailed settings
  const renderDetailedSettings = () => (
    <Box>
      {privacyCategories.map((category) => (
        <Accordion key={category.id} sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
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
                <Typography variant="body2" color="text.secondary">
                  {category.description}
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {category.settings.map((setting) => (
              <Card key={setting.id} sx={{ mb: 2, border: `1px solid ${category.color}` }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flexGrow: 1, mr: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {setting.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {setting.description}
                      </Typography>
                      
                      {setting.impact && (
                        <Chip
                          label={`${setting.impact} impact`}
                          size="small"
                          sx={{
                            backgroundColor: setting.impact === 'high' ? '#f44336' : 
                                           setting.impact === 'medium' ? '#ff9800' : '#4caf50',
                            color: 'white',
                            mr: 1
                          }}
                        />
                      )}
                      
                      {setting.recommendation !== undefined && (
                        <Chip
                          label={`Recommended: ${setting.type === 'switch' ? 
                            (setting.recommendation ? 'On' : 'Off') : 
                            setting.options.find(opt => opt.value === setting.recommendation)?.label}`}
                          size="small"
                          variant="outlined"
                          sx={{ borderColor: category.color, color: category.color }}
                        />
                      )}
                    </Box>
                    
                    <Box sx={{ minWidth: 150 }}>
                      {setting.type === 'switch' ? (
                        <FormControlLabel
                          control={
                            <Switch
                              checked={setting.category ? 
                                privacySettings[setting.category][setting.id] : 
                                privacySettings[setting.id]}
                              onChange={(e) => updatePrivacySetting(setting.id, e.target.checked, setting.category)}
                              color="primary"
                            />
                          }
                          label={setting.category ? 
                            (privacySettings[setting.category][setting.id] ? 'Enabled' : 'Disabled') :
                            (privacySettings[setting.id] ? 'Enabled' : 'Disabled')}
                          labelPlacement="start"
                        />
                      ) : (
                        <FormControl fullWidth>
                          <InputLabel>{setting.name}</InputLabel>
                          <Select
                            value={setting.category ? 
                              privacySettings[setting.category][setting.id] : 
                              privacySettings[setting.id]}
                            onChange={(e) => updatePrivacySetting(setting.id, e.target.value, setting.category)}
                            label={setting.name}
                          >
                            {setting.options.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                <Box>
                                  <Typography variant="body1">{option.label}</Typography>
                                  <Typography variant="caption" color="text.secondary">
                                    {option.description}
                                  </Typography>
                                </Box>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Box>
                  </Box>
                  
                  {setting.options && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Available Options:
                      </Typography>
                      <List dense>
                        {setting.options.map((option) => (
                          <ListItem key={option.value} sx={{ px: 0 }}>
                            <ListItemIcon>
                              <RadioButtonChecked 
                                sx={{ 
                                  color: (setting.category ? 
                                    privacySettings[setting.category][setting.id] : 
                                    privacySettings[setting.id]) === option.value ? category.color : '#ccc',
                                  fontSize: 16 
                                }} 
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={option.label}
                              secondary={option.description}
                              primaryTypographyProps={{ fontWeight: 'medium' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  // Render data management
  const renderDataManagement = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Data Management
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #2196f3' }}>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                mx: 'auto',
                mb: 2,
                backgroundColor: '#2196f3',
                color: 'white'
              }}
            >
              <Download />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Export Data
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Download a copy of all your data
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowExportDialog(true)}
              sx={{ backgroundColor: '#2196f3' }}
            >
              Export Data
            </Button>
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
              <Visibility />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              View Data
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              See what data we have about you
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowDataDialog(true)}
              sx={{ backgroundColor: '#ff9800' }}
            >
              View Data
            </Button>
          </Card>
        </Grid>
        
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
              <Delete />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Delete Account
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Permanently delete your account and data
            </Typography>
            <Button
              variant="contained"
              onClick={() => setShowDeleteDialog(true)}
              sx={{ backgroundColor: '#f44336' }}
            >
              Delete Account
            </Button>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Your Data Rights
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText
              primary="Right to Access"
              secondary="You can request access to your personal data at any time"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText
              primary="Right to Portability"
              secondary="You can export your data in a machine-readable format"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText
              primary="Right to Deletion"
              secondary="You can request deletion of your personal data"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircle sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText
              primary="Right to Correction"
              secondary="You can request correction of inaccurate personal data"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );

  // Render privacy tips
  const renderPrivacyTips = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Privacy Tips & Recommendations
      </Typography>
      
      <Grid container spacing={3}>
        {privacyTipsData.map((tip) => (
          <Grid item xs={12} md={6} key={tip.id}>
            <Card sx={{ height: '100%', border: `2px solid ${
              tip.priority === 'high' ? '#f44336' : 
              tip.priority === 'medium' ? '#ff9800' : '#4caf50'
            }` }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      mr: 2,
                      backgroundColor: tip.priority === 'high' ? '#f44336' : 
                                     tip.priority === 'medium' ? '#ff9800' : '#4caf50',
                      color: 'white'
                    }}
                  >
                    {tip.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {tip.title}
                    </Typography>
                    <Chip
                      label={`${tip.priority} priority`}
                      size="small"
                      sx={{
                        backgroundColor: tip.priority === 'high' ? '#f44336' : 
                                       tip.priority === 'medium' ? '#ff9800' : '#4caf50',
                        color: 'white'
                      }}
                    />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {tip.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🔒 Privacy Controls & Settings
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Take control of your privacy and data protection
        </Typography>
      </Box>

      {/* Privacy Overview */}
      {renderPrivacyOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Privacy Overview" />
          <Tab label="Detailed Settings" />
          <Tab label="Data Management" />
          <Tab label="Privacy Tips" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderPrivacyCategories()}
      {selectedTab === 1 && renderDetailedSettings()}
      {selectedTab === 2 && renderDataManagement()}
      {selectedTab === 3 && renderPrivacyTips()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Safety Center & Guidelines)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Safety Center
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save privacy settings and navigate to next screen
            localStorage.setItem('privacySettings', JSON.stringify({
              ...privacySettings,
              timestamp: new Date().toISOString()
            }));
            console.log('Privacy settings saved');
            // Navigate to Screen 153: Blocking & Reporting System
          }}
          sx={{
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
        >
          Continue to Blocking & Reporting
        </Button>
      </Box>

      {/* Data Dialog */}
      <Dialog open={showDataDialog} onClose={() => setShowDataDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Visibility sx={{ mr: 1, color: '#2196f3' }} />
            Your Data Overview
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Here's a summary of the data we have about you:
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <Person sx={{ color: '#2196f3' }} />
              </ListItemIcon>
              <ListItemText
                primary="Profile Information"
                secondary="Name, age, photos, bio, and preferences"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOn sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText
                primary="Location Data"
                secondary="Approximate location for matching purposes"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Message sx={{ color: '#ff9800' }} />
              </ListItemIcon>
              <ListItemText
                primary="Communication Data"
                secondary="Messages and interactions with other users"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Analytics sx={{ color: '#9c27b0' }} />
              </ListItemIcon>
              <ListItemText
                primary="Usage Analytics"
                secondary="App usage patterns and preferences"
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDataDialog(false)}>
            Close
          </Button>
          <Button onClick={() => setShowDataDialog(false)} variant="contained">
            Request Full Report
          </Button>
        </DialogActions>
      </Dialog>

      {/* Export Dialog */}
      <Dialog open={showExportDialog} onClose={() => setShowExportDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Download sx={{ mr: 1, color: '#2196f3' }} />
            Export Your Data
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We'll prepare a download of all your data. This may take a few minutes.
          </Typography>
          
          <Alert severity="info" sx={{ mb: 2 }}>
            <Typography variant="body2">
              Your data export will include all profile information, messages, and settings. 
              We'll send you an email when it's ready for download.
            </Typography>
          </Alert>
          
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Profile information and photos"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Messages and conversations"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Preferences and settings"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Usage analytics (optional)"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowExportDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowExportDialog(false)} variant="contained">
            Start Export
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Warning sx={{ mr: 1, color: '#f44336' }} />
            Delete Account
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="error" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Warning:</strong> This action cannot be undone. All your data will be permanently deleted.
            </Typography>
          </Alert>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            Before you delete your account, please note:
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <Error sx={{ color: '#f44336' }} />
              </ListItemIcon>
              <ListItemText primary="All your profile data will be permanently deleted" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Error sx={{ color: '#f44336' }} />
              </ListItemIcon>
              <ListItemText primary="Your matches and conversations will be lost" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Error sx={{ color: '#f44336' }} />
              </ListItemIcon>
              <ListItemText primary="This action cannot be reversed" />
            </ListItem>
          </List>
          
          <TextField
            fullWidth
            label="Type 'DELETE' to confirm"
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowDeleteDialog(false)} variant="contained" color="error">
            Delete Account
          </Button>
        </DialogActions>
      </Dialog>

      {/* Privacy Note */}
      <Alert severity="success" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Privacy Commitment:</strong> We are committed to protecting your privacy and giving you 
          control over your data. These settings allow you to customize your privacy level according to 
          your comfort and preferences. Your data is encrypted and secure.
        </Typography>
      </Alert>
    </Container>
  );
};

export default PrivacyControlsSettings;

