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
  ImageListItemBar
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Security,
  Shield,
  SafetyCheck,
  HealthAndSafety,
  VerifiedUser,
  Lock,
  LockOpen,
  Privacy,
  Visibility,
  VisibilityOff,
  Warning,
  Error,
  Info,
  Help,
  Support,
  SupportAgent,
  ContactSupport,
  LiveHelp,
  QuestionAnswer,
  Chat,
  ChatBubble,
  Forum,
  Comment,
  Message,
  Email,
  Phone,
  Call,
  Emergency,
  LocalHospital,
  LocalPolice,
  ReportProblem,
  Report,
  Flag,
  Block,
  NotInterested,
  PersonOff,
  PersonRemove,
  Delete,
  Remove,
  Clear,
  Cancel,
  Close,
  CheckCircle,
  RadioButtonUnchecked,
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  ToggleOn,
  ToggleOff,
  PowerSettingsNew,
  Settings,
  Tune,
  FilterList,
  Sort,
  Search,
  FindInPage,
  Pageview,
  Description,
  Article,
  Subject,
  Topic,
  Category,
  Label,
  Bookmark,
  BookmarkBorder,
  BookmarkAdd,
  BookmarkAdded,
  BookmarkRemove,
  Bookmarks,
  MenuBook,
  AutoStories,
  ImportContacts,
  ChromeReaderMode,
  LibraryBooks,
  Book,
  School,
  Psychology,
  PsychologyAlt,
  MonitorHeart,
  Favorite,
  FavoriteBorder,
  Heart,
  HeartBroken,
  ThumbUp,
  ThumbDown,
  ThumbsUpDown,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
  Mood,
  MoodBad,
  Face,
  TagFaces,
  EmojiPeople,
  EmojiEmotions,
  EmojiEvents,
  EmojiFlags,
  EmojiFood,
  EmojiNature,
  EmojiObjects,
  EmojiSymbols,
  EmojiTransportation,
  Lightbulb,
  EmojiObjects as EmojiObjectsIcon,
  TipsAndUpdates,
  AutoFixHigh,
  Transform,
  AutoAwesome,
  Stars,
  Star,
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
  Update,
  Upgrade,
  SystemUpdate,
  SystemUpdateAlt,
  GetApp,
  InstallMobile,
  InstallDesktop,
  AppRegistration,
  AppShortcut,
  Apps,
  AppsOutage,
  Extension,
  Widgets,
  Dashboard,
  SpaceDashboard,
  ViewModule,
  ViewQuilt,
  ViewStream,
  ViewArray,
  ViewColumn,
  ViewAgenda,
  ViewList,
  ViewHeadline,
  ViewCarousel,
  ViewComfy,
  ViewCompact,
  ViewDay,
  ViewWeek,
  CalendarToday,
  CalendarMonth,
  DateRange,
  Schedule,
  AccessTime,
  AccessAlarm,
  Alarm,
  AlarmAdd,
  AlarmOff,
  AlarmOn,
  Timer,
  TimerOff,
  Timelapse,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  HourglassTop,
  HourglassBottom,
  MoreTime,
  History,
  HistoryToggleOff,
  Restore,
  RestoreFromTrash,
  RestorePage,
  Backup,
  BackupTable,
  CloudBackup,
  SettingsBackupRestore,
  Sync,
  SyncAlt,
  SyncDisabled,
  SyncLock,
  SyncProblem,
  Loop,
  Repeat,
  RepeatOne,
  RepeatOn,
  Shuffle,
  ShuffleOn,
  Autorenew,
  Cached,
  ChangeCircle,
  CompareArrows,
  SwapHoriz,
  SwapVert,
  SwapHorizontalCircle,
  SwapVerticalCircle,
  ImportExport,
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
  MusicNote,
  MusicOff,
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
  VideoCall,
  Videocam,
  VideocamOff,
  VideoSettings,
  Theaters,
  LocalMovies,
  Slideshow,
  Photo,
  PhotoLibrary,
  PhotoCamera,
  CameraAlt,
  Camera,
  CameraFront,
  CameraRear,
  CameraRoll,
  Collections,
  CollectionsBookmark,
  Image,
  ImageAspectRatio,
  ImageNotSupported,
  ImageSearch,
  Crop,
  CropFree,
  CropOriginal,
  CropSquare,
  CropPortrait,
  CropLandscape,
  Crop169,
  Crop32,
  Crop54,
  Crop75,
  CropDin,
  Rotate90DegreesCcw,
  Rotate90DegreesCw,
  RotateLeft,
  RotateRight,
  Flip,
  FlipCameraAndroid,
  FlipCameraIos,
  CenterFocusStrong,
  CenterFocusWeak,
  FilterCenterFocus,
  FilterTiltShift,
  BlurOn,
  BlurOff,
  BlurCircular,
  BlurLinear,
  Exposure,
  ExposurePlus1,
  ExposurePlus2,
  ExposureNeg1,
  ExposureNeg2,
  ExposureZero,
  WbFluorescent,
  Timer10,
  Timer3,
  SlowMotionVideo,
  Hd,
  Hq,
  Sd,
  FourK,
  EightK,
  ThreeSixty,
  ViewInAr,
  ThreeDRotation,
  GridView,
  GridOn,
  GridOff,
  Grid3x3,
  Grid4x4,
  GridGoldenratio,
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
  Wallpaper,
  PhotoFilter,
  CameraEnhance,
  Iso,
  WbAuto,
  Lens,
  Flare,
  BrightnessAuto,
  BrightnessMedium,
  BrightnessLow,
  BrightnessHigh,
  Brightness7,
  Brightness6,
  Brightness5,
  Brightness4,
  Brightness3,
  Brightness2,
  Brightness1,
  WbTwilight,
  WbShade,
  WbIridescent,
  WbIncandescent,
  WbCloudy,
  WbSunny,
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
  Extension as ExtensionIcon,
  Toys,
  Casino,
  SportsEsports,
  VideogameAsset,
  Mouse,
  Keyboard,
  Headphones,
  Speaker as SpeakerIcon,
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
  NetworkWifi,
  WifiProtectedSetup,
  Wifi,
  WifiOff,
  CloudOff,
  CloudDownload,
  CloudDone,
  CloudQueue,
  Storage,
  DataUsage,
  Poll,
  Equalizer as EqualizerIcon,
  AreaChart,
  MultilineChart,
  ScatterPlot,
  BubbleChart,
  DonutLarge,
  PieChart,
  BarChart,
  ShowChart,
  TrendingDown,
  TrendingUp,
  TrendingFlat,
  Trending,
  Whatshot,
  NewReleases,
  Sell,
  LocalOffer,
  Discount,
  Redeem,
  CardGiftcard,
  Cake,
  Celebration,
  EmojiEvents,
  SportsScore,
  DirectionsRun,
  Route,
  Map,
  Compass,
  Explore,
  Transform as TransformIcon,
  AutoFixHigh as AutoFixHighIcon,
  TipsAndUpdates as TipsAndUpdatesIcon,
  Recommend,
  VolunteerActivism,
  Handshake,
  FamilyRestroom,
  Diversity3,
  ConnectWithoutContact,
  PsychologyAlt as PsychologyAltIcon,
  Psychology as PsychologyIcon,
  MonitorHeart as MonitorHeartIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  SafetyCheck as SafetyCheckIcon,
  Shield as ShieldIcon,
  EnhancedEncryption,
  Enhanced,
  NoEncryption,
  LockReset,
  LockPerson,
  LockClock,
  LockOpen as LockOpenIcon,
  Lock as LockIcon,
  Privacy as PrivacyIcon,
  Security as SecurityIcon,
  VerifiedUser as VerifiedUserIcon,
  Verified as VerifiedIcon,
  Diamond as DiamondIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  Grade as GradeIcon,
  StarRate as StarRateIcon,
  StarOutline as StarOutlineIcon,
  StarHalf as StarHalfIcon,
  Star as StarIcon,
  Stars as StarsIcon,
  AutoAwesome as AutoAwesomeIcon,
  Transform as TransformIconAlt,
  AutoFixHigh as AutoFixHighIconAlt,
  TipsAndUpdates as TipsAndUpdatesIconAlt,
  Lightbulb as LightbulbIcon,
  EmojiObjects,
  Help as HelpIcon,
  Info as InfoIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Clear as ClearIcon,
  Close as CloseIcon,
  Done,
  Save,
  Refresh,
  Undo,
  Redo,
  Forward,
  Reply,
  Share,
  Download,
  Publish,
  Public,
  CloudUpload,
  FileUpload,
  FileDownload,
  DriveFileMove,
  DriveFileMoveOutline,
  DriveFileRenameOutline,
  CreateNewFolder,
  Folder,
  FolderOpen,
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
  Person,
  People,
  Group,
  Groups,
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
  AccountCircle,
  PersonAdd,
  PersonRemove as PersonRemoveIcon,
  Add,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  Archive,
  Unarchive,
  Edit,
  Create,
  Inbox,
  Drafts,
  Send,
  ReplyAll,
  MailOutline,
  Email as EmailIcon,
  Message as MessageIcon,
  Comment as CommentIcon,
  Forum as ForumIcon,
  ChatBubble as ChatBubbleIcon,
  Chat as ChatIcon,
  QuestionAnswer as QuestionAnswerIcon,
  LiveHelp as LiveHelpIcon,
  ContactSupport as ContactSupportIcon,
  SupportAgent as SupportAgentIcon,
  Support as SupportIcon,
  Help as HelpIconAlt,
  Report as ReportIcon,
  Flag as FlagIcon,
  Block as BlockIcon,
  NotInterested as NotInterestedIcon,
  PersonOff as PersonOffIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  ThumbsUpDown as ThumbsUpDownIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Heart as HeartIcon,
  HeartBroken as HeartBrokenIcon,
  Mood as MoodIcon,
  MoodBad as MoodBadIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  SentimentNeutral as SentimentNeutralIcon,
  SentimentSatisfied as SentimentSatisfiedIcon,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
  SentimentVerySatisfied as SentimentVerySatisfiedIcon,
  Face as FaceIcon,
  TagFaces as TagFacesIcon,
  Home,
  LocationOn,
  LocationOff,
  LocationDisabled,
  LocationSearching,
  MyLocation,
  NearMe,
  NearMeDisabled,
  GpsFixed,
  GpsNotFixed,
  GpsOff,
  Place,
  PinDrop,
  Room,
  WhereToVote,
  Navigation,
  Explore as ExploreIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Route as RouteIcon,
  Directions,
  DirectionsRun as DirectionsRunIcon,
  SportsScore as SportsScoreIcon,
  EmojiEvents as EmojiEventsIcon,
  Celebration as CelebrationIcon,
  Cake as CakeIcon,
  CardGiftcard as CardGiftcardIcon,
  Redeem as RedeemIcon,
  LocalOffer as LocalOfferIcon,
  Discount as DiscountIcon,
  MonetizationOn as MonetizationOnIcon,
  AttachMoney as AttachMoneyIcon,
  CreditCard as CreditCardIcon,
  Payment as PaymentIcon,
  AccountBalance as AccountBalanceIcon,
  Savings as SavingsIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  ShowChart as ShowChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutLargeIcon,
  Analytics,
  Assessment,
  Poll as PollIcon,
  DataUsage as DataUsageIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  MultilineChart as MultilineChartIcon,
  AreaChart as AreaChartIcon,
  Equalizer as EqualizerIconAlt,
  GraphicEq as GraphicEqIcon,
  Storage as StorageIcon,
  CloudQueue as CloudQueueIcon,
  CloudDone as CloudDoneIcon,
  CloudDownload as CloudDownloadIcon,
  CloudUpload as CloudUploadIcon,
  CloudOff as CloudOffIcon,
  Backup as BackupIcon,
  Restore as RestoreIcon,
  GetApp,
  Publish as PublishIcon,
  Public as PublicIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Upload,
  FileUpload as FileUploadIcon,
  FileDownload as FileDownloadIcon,
  DriveFileMove as DriveFileMoveIcon,
  DriveFileMoveOutline as DriveFileMoveOutlineIcon,
  DriveFileRenameOutline as DriveFileRenameOutlineIcon,
  CreateNewFolder as CreateNewFolderIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderShared as FolderSharedIcon,
  FolderSpecial as FolderSpecialIcon,
  FolderCopy as FolderCopyIcon,
  FolderDelete as FolderDeleteIcon,
  FolderOff as FolderOffIcon,
  FolderZip as FolderZipIcon,
  SnippetFolder as SnippetFolderIcon,
  RuleFolder as RuleFolderIcon,
  TopicFolder as TopicFolderIcon,
  WorkspacesFilled as WorkspacesFilledIcon,
  Workspaces as WorkspacesIcon,
  Dashboard as DashboardIcon,
  SpaceDashboard as SpaceDashboardIcon,
  ViewModule as ViewModuleIcon,
  ViewQuilt as ViewQuiltIcon,
  ViewStream as ViewStreamIcon,
  ViewArray as ViewArrayIcon,
  ViewColumn as ViewColumnIcon,
  ViewAgenda as ViewAgendaIcon,
  ViewList as ViewListIcon,
  ViewHeadline as ViewHeadlineIcon,
  ViewCarousel as ViewCarouselIcon,
  ViewComfy as ViewComfyIcon,
  ViewCompact as ViewCompactIcon,
  ViewDay as ViewDayIcon,
  ViewWeek as ViewWeekIcon,
  GridView as GridViewIcon,
  GridOn as GridOnIcon,
  GridOff as GridOffIcon,
  Grid3x3 as Grid3x3Icon,
  Grid4x4 as Grid4x4Icon,
  GridGoldenratio as GridGoldenratioIcon,
  CalendarToday as CalendarTodayIcon,
  CalendarMonth as CalendarMonthIcon,
  DateRange as DateRangeIcon,
  Schedule as ScheduleIcon,
  AccessTime as AccessTimeIcon,
  AccessAlarm as AccessAlarmIcon,
  Alarm as AlarmIcon,
  AlarmAdd as AlarmAddIcon,
  AlarmOff as AlarmOffIcon,
  AlarmOn as AlarmOnIcon,
  Timer as TimerIcon,
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon,
  AvTimer as AvTimerIcon,
  HourglassEmpty as HourglassEmptyIcon,
  HourglassFull as HourglassFullIcon,
  HourglassTop as HourglassTopIcon,
  HourglassBottom as HourglassBottomIcon,
  MoreTime as MoreTimeIcon,
  History as HistoryIcon,
  HistoryToggleOff as HistoryToggleOffIcon,
  Restore as RestoreIconAlt,
  RestoreFromTrash as RestoreFromTrashIcon,
  RestorePage as RestorePageIcon,
  Backup as BackupIconAlt,
  BackupTable as BackupTableIcon,
  CloudBackup as CloudBackupIcon,
  SettingsBackupRestore as SettingsBackupRestoreIcon,
  Update,
  Sync as SyncIcon,
  SyncAlt as SyncAltIcon,
  SyncDisabled as SyncDisabledIcon,
  SyncLock as SyncLockIcon,
  SyncProblem as SyncProblemIcon,
  Loop as LoopIcon,
  Repeat as RepeatIcon,
  RepeatOne as RepeatOneIcon,
  RepeatOn as RepeatOnIcon,
  Shuffle as ShuffleIcon,
  ShuffleOn as ShuffleOnIcon,
  Autorenew as AutorenewIcon,
  Cached as CachedIcon,
  ChangeCircle as ChangeCircleIcon,
  CompareArrows as CompareArrowsIcon,
  SwapHoriz as SwapHorizIcon,
  SwapVert as SwapVertIcon,
  SwapHorizontalCircle as SwapHorizontalCircleIcon,
  SwapVerticalCircle as SwapVerticalCircleIcon,
  ImportExport as ImportExportIcon,
  CallMade as CallMadeIcon,
  CallReceived as CallReceivedIcon,
  CallSplit as CallSplitIcon,
  CallMerge as CallMergeIcon,
  Merge as MergeIcon,
  MergeType as MergeTypeIcon,
  CallToAction as CallToActionIcon,
  Campaign as CampaignIcon,
  Announcement as AnnouncementIcon,
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
  North,
  South,
  East,
  West,
  NorthEast,
  NorthWest,
  SouthEast,
  SouthWest,
  FirstPage,
  LastPage,
  MoreHoriz,
  MoreVert,
  Menu,
  MenuOpen
} from '@mui/icons-material';

const SafetyCenterGuidelines = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [completedSections, setCompletedSections] = useState(new Set());
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [safetyScore, setSafetyScore] = useState(0);
  const [showEmergencyDialog, setShowEmergencyDialog] = useState(false);

  // Safety categories
  const safetyCategories = [
    {
      id: 'personal_safety',
      name: 'Personal Safety',
      description: 'Essential guidelines for protecting yourself while dating',
      icon: <Shield />,
      color: '#f44336',
      priority: 'critical',
      sections: [
        {
          id: 'meeting_safely',
          title: 'Meeting Safely',
          content: 'Always meet in public places for first dates. Tell a friend where you\'re going and when you expect to return.',
          tips: [
            'Choose busy, well-lit public locations',
            'Arrange your own transportation',
            'Share your location with a trusted friend',
            'Set up a check-in system',
            'Trust your instincts if something feels wrong'
          ],
          quiz: {
            question: 'What is the safest location for a first date?',
            options: [
              'Your home',
              'Their home',
              'A busy public restaurant',
              'A secluded park'
            ],
            correct: 2,
            explanation: 'Public places with other people around provide the safest environment for first meetings.'
          }
        },
        {
          id: 'sharing_information',
          title: 'Information Sharing',
          content: 'Be cautious about sharing personal information too quickly. Protect your privacy until trust is established.',
          tips: [
            'Don\'t share your home address initially',
            'Use the app\'s messaging system first',
            'Be cautious with social media links',
            'Don\'t share financial information',
            'Verify identity before meeting'
          ],
          quiz: {
            question: 'When is it appropriate to share your home address?',
            options: [
              'Immediately after matching',
              'After a few messages',
              'Only after meeting and building trust',
              'Never'
            ],
            correct: 2,
            explanation: 'Share personal information only after meeting in person and establishing trust over time.'
          }
        },
        {
          id: 'red_flags',
          title: 'Recognizing Red Flags',
          content: 'Learn to identify warning signs that may indicate unsafe or inappropriate behavior.',
          tips: [
            'Pressuring for personal information',
            'Refusing to meet in public',
            'Inconsistent stories or details',
            'Aggressive or controlling language',
            'Asking for money or financial help'
          ],
          quiz: {
            question: 'Which behavior is a major red flag?',
            options: [
              'Suggesting a coffee date',
              'Asking about your hobbies',
              'Pressuring you to meet at their place immediately',
              'Taking time to respond to messages'
            ],
            correct: 2,
            explanation: 'Pressuring for private meetings or personal information early on is a significant warning sign.'
          }
        }
      ]
    },
    {
      id: 'digital_safety',
      name: 'Digital Safety',
      description: 'Protecting your online presence and digital privacy',
      icon: <Security />,
      color: '#2196f3',
      priority: 'high',
      sections: [
        {
          id: 'profile_privacy',
          title: 'Profile Privacy',
          content: 'Manage what information you share in your profile and how it can be used.',
          tips: [
            'Use recent, authentic photos',
            'Avoid photos with identifying information',
            'Don\'t include workplace details',
            'Be mindful of background details in photos',
            'Review privacy settings regularly'
          ],
          quiz: {
            question: 'What should you avoid in profile photos?',
            options: [
              'Smiling',
              'Clear face shots',
              'Photos with your address visible',
              'Recent photos'
            ],
            correct: 2,
            explanation: 'Avoid photos that reveal personal information like addresses, license plates, or workplace details.'
          }
        },
        {
          id: 'communication_safety',
          title: 'Safe Communication',
          content: 'Best practices for communicating safely through digital channels.',
          tips: [
            'Use the app\'s messaging system initially',
            'Don\'t share phone number immediately',
            'Be cautious with video calls',
            'Report inappropriate messages',
            'Screenshot concerning conversations'
          ],
          quiz: {
            question: 'When should you move communication off the app?',
            options: [
              'Immediately after matching',
              'After the first message',
              'After building some trust and rapport',
              'Never'
            ],
            correct: 2,
            explanation: 'Build trust through the app\'s secure messaging before sharing personal contact information.'
          }
        },
        {
          id: 'scam_prevention',
          title: 'Scam Prevention',
          content: 'Recognize and avoid common dating scams and fraudulent behavior.',
          tips: [
            'Never send money to someone you haven\'t met',
            'Be suspicious of sob stories',
            'Verify photos using reverse image search',
            'Watch for grammar and language inconsistencies',
            'Be cautious of people who avoid phone/video calls'
          ],
          quiz: {
            question: 'What is a common sign of a dating scam?',
            options: [
              'Asking about your interests',
              'Requesting money for an emergency',
              'Suggesting a video call',
              'Taking time to respond'
            ],
            correct: 1,
            explanation: 'Requests for money, especially for emergencies, are classic signs of dating scams.'
          }
        }
      ]
    },
    {
      id: 'emotional_wellbeing',
      name: 'Emotional Wellbeing',
      description: 'Maintaining mental health and emotional safety while dating',
      icon: <MonitorHeart />,
      color: '#4caf50',
      priority: 'important',
      sections: [
        {
          id: 'setting_boundaries',
          title: 'Setting Boundaries',
          content: 'Establish and maintain healthy boundaries in your dating interactions.',
          tips: [
            'Communicate your limits clearly',
            'Don\'t compromise on important values',
            'It\'s okay to say no',
            'Respect others\' boundaries too',
            'Take breaks when needed'
          ],
          quiz: {
            question: 'What should you do if someone doesn\'t respect your boundaries?',
            options: [
              'Ignore it and hope it stops',
              'Compromise to keep the peace',
              'Clearly restate your boundaries and consider ending contact',
              'Get angry and argue'
            ],
            correct: 2,
            explanation: 'Clearly restate your boundaries, and if they continue to be disrespected, consider ending the interaction.'
          }
        },
        {
          id: 'managing_rejection',
          title: 'Managing Rejection',
          content: 'Healthy ways to handle rejection and maintain self-esteem.',
          tips: [
            'Remember rejection is not personal',
            'Focus on compatibility, not worth',
            'Take time to process feelings',
            'Maintain perspective on dating',
            'Seek support when needed'
          ],
          quiz: {
            question: 'How should you handle being rejected?',
            options: [
              'Argue and try to change their mind',
              'Accept it gracefully and move on',
              'Ask repeatedly for another chance',
              'Get angry and insult them'
            ],
            correct: 1,
            explanation: 'Accept rejection gracefully and remember it\'s about compatibility, not your worth as a person.'
          }
        },
        {
          id: 'self_care',
          title: 'Dating Self-Care',
          content: 'Maintaining your mental health and wellbeing throughout the dating process.',
          tips: [
            'Take regular breaks from dating apps',
            'Don\'t let dating consume your life',
            'Maintain other relationships and hobbies',
            'Practice self-compassion',
            'Seek professional help if needed'
          ],
          quiz: {
            question: 'What is an important aspect of dating self-care?',
            options: [
              'Dating as many people as possible',
              'Checking the app constantly',
              'Taking regular breaks when needed',
              'Ignoring your other relationships'
            ],
            correct: 2,
            explanation: 'Taking breaks from dating apps and maintaining balance in your life is crucial for mental health.'
          }
        }
      ]
    },
    {
      id: 'community_guidelines',
      name: 'Community Guidelines',
      description: 'Creating a respectful and inclusive environment for everyone',
      icon: <Groups />,
      color: '#ff9800',
      priority: 'important',
      sections: [
        {
          id: 'respectful_communication',
          title: 'Respectful Communication',
          content: 'Guidelines for communicating respectfully with all community members.',
          tips: [
            'Treat everyone with kindness and respect',
            'Avoid discriminatory language',
            'Be honest in your interactions',
            'Respect different perspectives and backgrounds',
            'Use appropriate language and tone'
          ],
          quiz: {
            question: 'What is the foundation of respectful communication?',
            options: [
              'Being clever and witty',
              'Treating everyone with kindness and respect',
              'Being brutally honest',
              'Agreeing with everything'
            ],
            correct: 1,
            explanation: 'Treating everyone with kindness and respect is the foundation of healthy community interaction.'
          }
        },
        {
          id: 'consent_culture',
          title: 'Consent and Respect',
          content: 'Understanding and practicing enthusiastic consent in all interactions.',
          tips: [
            'Always ask before sharing personal content',
            'Respect "no" as a complete answer',
            'Check in regularly during conversations',
            'Don\'t pressure anyone for anything',
            'Understand consent can be withdrawn'
          ],
          quiz: {
            question: 'What does enthusiastic consent mean?',
            options: [
              'Getting permission once',
              'Assuming agreement',
              'Clear, ongoing, and enthusiastic agreement',
              'Implied consent'
            ],
            correct: 2,
            explanation: 'Enthusiastic consent means clear, ongoing, and enthusiastic agreement that can be withdrawn at any time.'
          }
        },
        {
          id: 'reporting_violations',
          title: 'Reporting Violations',
          content: 'How to report inappropriate behavior and help maintain community safety.',
          tips: [
            'Report any harassment or abuse',
            'Document concerning behavior',
            'Use the app\'s reporting features',
            'Support others who report violations',
            'Know that reports are taken seriously'
          ],
          quiz: {
            question: 'When should you report someone?',
            options: [
              'Only for physical threats',
              'For any behavior that makes you uncomfortable',
              'Never, handle it yourself',
              'Only if multiple people complain'
            ],
            correct: 1,
            explanation: 'Report any behavior that makes you uncomfortable or violates community guidelines.'
          }
        }
      ]
    },
    {
      id: 'emergency_resources',
      name: 'Emergency Resources',
      description: 'Crisis support and emergency assistance information',
      icon: <Emergency />,
      color: '#9c27b0',
      priority: 'critical',
      sections: [
        {
          id: 'crisis_support',
          title: 'Crisis Support',
          content: 'Immediate resources for crisis situations and mental health emergencies.',
          tips: [
            'National Suicide Prevention Lifeline: 988',
            'Crisis Text Line: Text HOME to 741741',
            'National Domestic Violence Hotline: 1-800-799-7233',
            'RAINN Sexual Assault Hotline: 1-800-656-4673',
            'Emergency Services: 911'
          ],
          quiz: {
            question: 'What should you do in an immediate emergency?',
            options: [
              'Post on social media',
              'Call 911',
              'Wait and see what happens',
              'Handle it alone'
            ],
            correct: 1,
            explanation: 'In immediate emergencies, always call 911 or your local emergency services.'
          }
        },
        {
          id: 'safety_planning',
          title: 'Safety Planning',
          content: 'Creating a personal safety plan for dating situations.',
          tips: [
            'Share your plans with trusted friends',
            'Have a safety contact system',
            'Plan your transportation',
            'Know local emergency services',
            'Trust your instincts always'
          ],
          quiz: {
            question: 'What is the most important part of safety planning?',
            options: [
              'Having expensive clothes',
              'Trusting your instincts',
              'Impressing your date',
              'Going to expensive places'
            ],
            correct: 1,
            explanation: 'Trusting your instincts is the most important aspect of personal safety.'
          }
        },
        {
          id: 'support_networks',
          title: 'Building Support Networks',
          content: 'Creating and maintaining support systems for dating safety.',
          tips: [
            'Identify trusted friends and family',
            'Join support groups if needed',
            'Know professional resources',
            'Maintain regular check-ins',
            'Don\'t isolate yourself'
          ],
          quiz: {
            question: 'Why are support networks important?',
            options: [
              'To gossip about dates',
              'To provide safety and emotional support',
              'To judge your choices',
              'To interfere in relationships'
            ],
            correct: 1,
            explanation: 'Support networks provide crucial safety and emotional support throughout your dating journey.'
          }
        }
      ]
    }
  ];

  // Emergency contacts
  const emergencyContacts = [
    {
      name: 'Emergency Services',
      number: '911',
      description: 'Immediate emergency assistance',
      icon: <Emergency />,
      color: '#f44336'
    },
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 crisis support and suicide prevention',
      icon: <SupportAgent />,
      color: '#2196f3'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: '24/7 crisis support via text',
      icon: <Message />,
      color: '#4caf50'
    },
    {
      name: 'National Domestic Violence Hotline',
      number: '1-800-799-7233',
      description: '24/7 support for domestic violence',
      icon: <Shield />,
      color: '#ff9800'
    },
    {
      name: 'RAINN Sexual Assault Hotline',
      number: '1-800-656-4673',
      description: '24/7 support for sexual assault survivors',
      icon: <Support />,
      color: '#9c27b0'
    }
  ];

  // Calculate safety score
  useEffect(() => {
    const totalSections = safetyCategories.reduce((sum, category) => sum + category.sections.length, 0);
    const completedCount = completedSections.size;
    const score = Math.round((completedCount / totalSections) * 100);
    setSafetyScore(score);
  }, [completedSections]);

  // Mark section as completed
  const markSectionCompleted = (categoryId, sectionId) => {
    const sectionKey = `${categoryId}_${sectionId}`;
    setCompletedSections(prev => new Set([...prev, sectionKey]));
  };

  // Start quiz
  const startQuiz = (categoryId, sectionId, quiz) => {
    setCurrentQuiz({ categoryId, sectionId, ...quiz });
    setShowQuizDialog(true);
  };

  // Submit quiz answer
  const submitQuizAnswer = (answer) => {
    const isCorrect = answer === currentQuiz.correct;
    const quizKey = `${currentQuiz.categoryId}_${currentQuiz.sectionId}`;
    
    setQuizAnswers(prev => ({
      ...prev,
      [quizKey]: { answer, correct: isCorrect }
    }));

    if (isCorrect) {
      markSectionCompleted(currentQuiz.categoryId, currentQuiz.sectionId);
    }

    setShowQuizDialog(false);
    setCurrentQuiz(null);
  };

  // Render safety overview
  const renderSafetyOverview = () => (
    <Box sx={{ mb: 4 }}>
      <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #f44336 30%, #ff9800 90%)', color: 'white' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          Safety Center
        </Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
              variant="determinate"
              value={safetyScore}
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
                {safetyScore}%
              </Typography>
              <Typography variant="body2" component="div">
                Safety Score
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
          Your Safety Education Progress
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          Complete all safety modules to maximize your protection and confidence while dating.
        </Typography>
      </Paper>

      <Alert severity="info" sx={{ mb: 3 }}>
        <Typography variant="body2">
          <strong>Your Safety Matters:</strong> Take time to review these guidelines carefully. 
          Your safety and wellbeing are our top priorities. Complete the quizzes to test your knowledge 
          and earn your safety certification.
        </Typography>
      </Alert>
    </Box>
  );

  // Render safety categories
  const renderSafetyCategories = () => (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {safetyCategories.map((category) => {
        const completedSectionsCount = category.sections.filter(section => 
          completedSections.has(`${category.id}_${section.id}`)
        ).length;
        const completionRate = (completedSectionsCount / category.sections.length) * 100;

        return (
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
                        {category.name}
                      </Typography>
                      <Chip
                        label={category.priority}
                        size="small"
                        sx={{
                          backgroundColor: category.priority === 'critical' ? '#f44336' : 
                                         category.priority === 'high' ? '#ff9800' : '#4caf50',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {completedSectionsCount}/{category.sections.length} sections completed
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: category.color }}>
                      {Math.round(completionRate)}%
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {category.description}
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={completionRate}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: '#f0f0f0',
                    mb: 2,
                    '& .MuiLinearProgress-bar': {
                      borderRadius: 4,
                      backgroundColor: category.color
                    }
                  }}
                />

                <List dense>
                  {category.sections.map((section) => {
                    const isCompleted = completedSections.has(`${category.id}_${section.id}`);
                    return (
                      <ListItem 
                        key={section.id} 
                        sx={{ px: 0 }}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            onClick={() => startQuiz(category.id, section.id, section.quiz)}
                            disabled={isCompleted}
                          >
                            {isCompleted ? <CheckCircle sx={{ color: category.color }} /> : <QuestionAnswer />}
                          </IconButton>
                        }
                      >
                        <ListItemIcon>
                          {isCompleted ? (
                            <CheckCircle sx={{ color: category.color }} />
                          ) : (
                            <RadioButtonUnchecked sx={{ color: '#ccc' }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={section.title}
                          primaryTypographyProps={{
                            fontWeight: isCompleted ? 'bold' : 'normal',
                            color: isCompleted ? 'text.primary' : 'text.secondary'
                          }}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );

  // Render detailed guidelines
  const renderDetailedGuidelines = () => (
    <Box>
      {safetyCategories.map((category) => (
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
              <Chip
                label={category.priority}
                size="small"
                sx={{
                  backgroundColor: category.priority === 'critical' ? '#f44336' : 
                                 category.priority === 'high' ? '#ff9800' : '#4caf50',
                  color: 'white'
                }}
              />
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {category.sections.map((section) => (
              <Card key={section.id} sx={{ mb: 2, border: `1px solid ${category.color}` }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {section.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {section.content}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Key Tips:
                  </Typography>
                  <List dense>
                    {section.tips.map((tip, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Lightbulb sx={{ color: category.color, fontSize: 20 }} />
                        </ListItemIcon>
                        <ListItemText primary={tip} />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      startIcon={<QuestionAnswer />}
                      onClick={() => startQuiz(category.id, section.id, section.quiz)}
                      disabled={completedSections.has(`${category.id}_${section.id}`)}
                      sx={{ backgroundColor: category.color }}
                    >
                      {completedSections.has(`${category.id}_${section.id}`) ? 'Completed' : 'Take Quiz'}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  // Render emergency resources
  const renderEmergencyResources = () => (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Emergency Resources
      </Typography>
      
      <Alert severity="error" sx={{ mb: 3 }}>
        <Typography variant="body2">
          <strong>In immediate danger? Call 911</strong>
          <br />
          If you are in immediate physical danger, call emergency services right away.
        </Typography>
      </Alert>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {emergencyContacts.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ border: `2px solid ${contact.color}`, height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      mr: 2,
                      backgroundColor: contact.color,
                      color: 'white'
                    }}
                  >
                    {contact.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {contact.name}
                    </Typography>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', color: contact.color }}>
                      {contact.number}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {contact.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<Phone />}
                    href={`tel:${contact.number.replace(/[^0-9]/g, '')}`}
                    sx={{ backgroundColor: contact.color, mr: 1 }}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Info />}
                    onClick={() => setShowEmergencyDialog(true)}
                    sx={{ borderColor: contact.color, color: contact.color }}
                  >
                    More Info
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Additional Safety Resources
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Shield sx={{ color: '#2196f3' }} />
            </ListItemIcon>
            <ListItemText
              primary="Local Police Non-Emergency"
              secondary="Contact your local police department for non-emergency situations"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SupportAgent sx={{ color: '#4caf50' }} />
            </ListItemIcon>
            <ListItemText
              primary="Mental Health Resources"
              secondary="SAMHSA National Helpline: 1-800-662-4357"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Groups sx={{ color: '#ff9800' }} />
            </ListItemIcon>
            <ListItemText
              primary="Support Groups"
              secondary="Find local support groups through community centers and healthcare providers"
            />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🛡️ Safety Center & Guidelines
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Your comprehensive guide to safe and secure dating
        </Typography>
      </Box>

      {/* Safety Overview */}
      {renderSafetyOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Safety Overview" />
          <Tab label="Detailed Guidelines" />
          <Tab label="Emergency Resources" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderSafetyCategories()}
      {selectedTab === 1 && renderDetailedGuidelines()}
      {selectedTab === 2 && renderEmergencyResources()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Profile Launch Celebration)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Profile Launch
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save safety progress and navigate to next screen
            localStorage.setItem('safetyProgress', JSON.stringify({
              completedSections: Array.from(completedSections),
              safetyScore,
              quizAnswers,
              timestamp: new Date().toISOString()
            }));
            console.log('Safety progress saved');
            // Navigate to Screen 152: Privacy Controls & Settings
          }}
          sx={{
            background: 'linear-gradient(45deg, #f44336 30%, #ff9800 90%)',
            color: 'white'
          }}
        >
          Continue to Privacy Settings
        </Button>
      </Box>

      {/* Quiz Dialog */}
      <Dialog open={showQuizDialog} onClose={() => setShowQuizDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <QuestionAnswer sx={{ mr: 1, color: '#2196f3' }} />
            Safety Knowledge Quiz
          </Box>
        </DialogTitle>
        <DialogContent>
          {currentQuiz && (
            <Box>
              <Typography variant="h6" gutterBottom>
                {currentQuiz.question}
              </Typography>
              <RadioGroup>
                {currentQuiz.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                    onClick={() => submitQuizAnswer(index)}
                  />
                ))}
              </RadioGroup>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowQuizDialog(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Emergency Dialog */}
      <Dialog open={showEmergencyDialog} onClose={() => setShowEmergencyDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Emergency sx={{ mr: 1, color: '#f44336' }} />
            Emergency Safety Information
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="error" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Remember:</strong> In any immediate emergency, call 911 first.
            </Typography>
          </Alert>
          
          <Typography variant="body1" sx={{ mb: 2 }}>
            These resources are available 24/7 to provide support, guidance, and assistance 
            in various crisis situations. Don't hesitate to reach out if you need help.
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            All calls are confidential and staffed by trained professionals who can provide 
            immediate support and connect you with local resources.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEmergencyDialog(false)}>
            Close
          </Button>
          <Button onClick={() => setShowEmergencyDialog(false)} variant="contained" color="error">
            I Understand
          </Button>
        </DialogActions>
      </Dialog>

      {/* Safety Note */}
      <Alert severity="warning" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Safety Reminder:</strong> These guidelines are designed to help you stay safe, 
          but they cannot guarantee your safety in all situations. Always trust your instincts 
          and prioritize your wellbeing above all else.
        </Typography>
      </Alert>
    </Container>
  );
};

export default SafetyCenterGuidelines;

