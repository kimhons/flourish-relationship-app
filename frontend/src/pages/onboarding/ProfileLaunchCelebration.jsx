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
  Confetti
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Celebration,
  EmojiEvents,
  Star,
  StarBorder,
  CheckCircle,
  Warning,
  Error,
  Info,
  Help,
  Support,
  Lightbulb,
  EmojiObjects,
  Tune,
  Settings,
  Done,
  Save,
  Refresh,
  Sync,
  CloudSync,
  Backup,
  Restore,
  Undo,
  Redo,
  Forward,
  Reply,
  Share,
  Download,
  CloudDownload,
  Publish,
  Public,
  Lock,
  LockOpen,
  Security,
  Privacy,
  VerifiedUser,
  Shield,
  SafetyCheck,
  HealthAndSafety,
  MonitorHeart,
  Psychology,
  PsychologyAlt,
  ConnectWithoutContact,
  Diversity3,
  FamilyRestroom,
  Handshake,
  VolunteerActivism,
  SupportAgent,
  Recommend,
  TipsAndUpdates,
  AutoFixHigh,
  Transform,
  Explore,
  Compass,
  Map,
  Route,
  DirectionsRun,
  SportsScore,
  Cake,
  CardGiftcard,
  Redeem,
  LocalOffer,
  Discount,
  MonetizationOn,
  AttachMoney,
  CreditCard,
  Payment,
  AccountBalance,
  Savings,
  TrendingUp,
  TrendingDown,
  ShowChart,
  BarChart,
  PieChart,
  DonutLarge,
  DataUsage,
  BubbleChart,
  ScatterPlot,
  MultilineChart,
  AreaChart,
  Equalizer,
  GraphicEq,
  Poll,
  Storage,
  CloudQueue,
  CloudDone,
  CloudOff,
  WifiOff,
  Wifi,
  WifiProtectedSetup,
  NetworkWifi,
  SignalWifi4Bar,
  SignalWifiStatusbar4Bar,
  SignalWifiStatusbarConnectedNoInternet4,
  SignalWifiStatusbarNull,
  SignalWifiBad,
  SignalWifiConnectedNoInternet4,
  SignalWifiOff,
  NetworkCheck,
  Router,
  DeviceHub,
  Devices,
  DevicesOther,
  Computer,
  Laptop,
  LaptopMac,
  LaptopWindows,
  LaptopChromebook,
  DesktopMac,
  DesktopWindows,
  PhoneIphone,
  PhoneAndroid,
  Tablet,
  TabletMac,
  TabletAndroid,
  Watch,
  Tv,
  Speaker,
  Headphones,
  Keyboard,
  Mouse,
  VideogameAsset,
  SportsEsports,
  Casino,
  Toys,
  Extension,
  Puzzle,
  Games,
  SportsHandball,
  SportsSoccer,
  SportsBasketball,
  SportsFootball,
  SportsBaseball,
  SportsTennis,
  SportsVolleyball,
  SportsGolf,
  SportsHockey,
  SportsCricket,
  SportsRugby,
  Pool,
  FitnessCenter,
  SelfImprovement,
  Spa,
  HotTub,
  BeachAccess,
  KiteSurfing,
  Surfing,
  Sailing,
  Kayaking,
  Rowing,
  DirectionsBoat,
  DirectionsBike,
  DirectionsWalk,
  DirectionsCar,
  DirectionsBus,
  DirectionsSubway,
  DirectionsTransit,
  DirectionsRailway,
  Flight,
  Hotel,
  Restaurant,
  LocalDining,
  LocalBar,
  LocalCafe,
  LocalPizza,
  Fastfood,
  IceCream,
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
  Wine,
  SportsBar,
  NightLife,
  LocalActivity,
  Attractions,
  Festival,
  Party,
  Nightlight,
  WbSunny,
  WbCloudy,
  WbIncandescent,
  WbIridescent,
  WbShade,
  WbTwilight,
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
  Flare,
  Lens,
  WbAuto,
  Iso,
  CameraEnhance,
  PhotoFilter,
  Wallpaper,
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
  TimerOff,
  Timelapse,
  SlowMotionVideo,
  Hd,
  Hq,
  Sd,
  FourK,
  EightK,
  ThreeSixty,
  ViewInAr,
  ThreeDRotation,
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
  Dashboard,
  DashboardCustomize,
  SpaceDashboard,
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
  Autorenew,
  Loop,
  Repeat,
  RepeatOne,
  RepeatOn,
  Shuffle,
  ShuffleOn,
  Queue,
  QueueMusic,
  QueuePlayNext,
  PlaylistAdd,
  PlaylistAddCheck,
  PlaylistPlay,
  PlaylistRemove,
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
  Album,
  LibraryMusic,
  MusicNote,
  MusicOff,
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
  FindInPage,
  Pageview,
  Description,
  Article,
  Subject,
  Topic,
  Category,
  Label,
  LocalOffer as LocalOfferIcon,
  Sell,
  NewReleases,
  Whatshot,
  Trending,
  TrendingFlat,
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
  MenuOpen,
  Clear,
  Cancel,
  Block,
  NotInterested,
  DoNotDisturb,
  DoNotDisturbAlt,
  DoNotDisturbOff,
  DoNotDisturbOn,
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp,
  Hearing,
  HearingDisabled,
  RecordVoiceOver,
  VoiceOverOff,
  Mic,
  MicOff,
  MicNone,
  MicExternalOn,
  MicExternalOff,
  Headset,
  HeadsetMic,
  HeadsetOff,
  SpeakerGroup,
  SpeakerPhone,
  Surround,
  LibraryAddCheck,
  LibraryAdd,
  LibraryBooks,
  Book,
  Work,
  School,
  Home,
  Business,
  Store,
  ShoppingCart,
  ShoppingBag,
  Person,
  People,
  Group,
  Groups,
  Face,
  TagFaces,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
  ThumbsUpDown,
  Favorite,
  FavoriteBorder,
  Heart,
  HeartBroken,
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
  PersonRemove,
  Add,
  Remove,
  Delete,
  Archive,
  Unarchive,
  Visibility,
  VisibilityOff,
  Edit,
  Create,
  Close,
  QuestionAnswer,
  Chat,
  ChatBubble,
  Forum,
  Comment,
  Message,
  Email,
  MailOutline,
  Send,
  Reply as ReplyIcon,
  ReplyAll,
  Forward as ForwardIcon,
  Inbox,
  Drafts,
  Archive as ArchiveIcon,
  Report,
  Flag,
  Block as BlockIcon,
  NotInterested as NotInterestedIcon,
  ThumbUp,
  ThumbDown,
  ThumbsUpDown as ThumbsUpDownIcon,
  Recommend as RecommendIcon,
  TipsAndUpdates as TipsAndUpdatesIcon,
  AutoFixHigh as AutoFixHighIcon,
  Transform as TransformIcon,
  Explore as ExploreIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Route as RouteIcon,
  Balance,
  Scale,
  Gavel,
  AccountBalance as AccountBalanceIcon,
  AttachMoney as AttachMoneyIcon,
  MonetizationOn as MonetizationOnIcon,
  Payment as PaymentIcon,
  CreditCard as CreditCardIcon,
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
  Equalizer as EqualizerIcon,
  DataUsage as DataUsageIcon,
  Storage as StorageIcon,
  CloudQueue as CloudQueueIcon,
  CloudDone as CloudDoneIcon,
  CloudDownload as CloudDownloadIcon,
  CloudUpload,
  CloudOff as CloudOffIcon,
  WifiOff as WifiOffIcon,
  Wifi as WifiIcon,
  WifiProtectedSetup as WifiProtectedSetupIcon,
  NetworkWifi as NetworkWifiIcon,
  SignalWifi4Bar as SignalWifi4BarIcon,
  SignalWifiStatusbar4Bar as SignalWifiStatusbar4BarIcon,
  SignalWifiStatusbarConnectedNoInternet4 as SignalWifiStatusbarConnectedNoInternet4Icon,
  SignalWifiStatusbarNull as SignalWifiStatusbarNullIcon,
  SignalWifiBad as SignalWifiBadIcon,
  SignalWifiConnectedNoInternet4 as SignalWifiConnectedNoInternet4Icon,
  SignalWifiOff as SignalWifiOffIcon,
  NetworkCheck as NetworkCheckIcon,
  Router as RouterIcon,
  DeviceHub as DeviceHubIcon,
  Devices as DevicesIcon,
  DevicesOther as DevicesOtherIcon,
  Computer as ComputerIcon,
  Laptop as LaptopIcon,
  LaptopMac as LaptopMacIcon,
  LaptopWindows as LaptopWindowsIcon,
  LaptopChromebook as LaptopChromebookIcon,
  DesktopMac as DesktopMacIcon,
  DesktopWindows as DesktopWindowsIcon,
  PhoneIphone as PhoneIphoneIcon,
  PhoneAndroid as PhoneAndroidIcon,
  Tablet as TabletIcon,
  TabletMac as TabletMacIcon,
  TabletAndroid as TabletAndroidIcon,
  Watch as WatchIcon,
  Tv as TvIcon,
  Speaker as SpeakerIcon,
  Headphones as HeadphonesIcon,
  Keyboard as KeyboardIcon,
  Mouse as MouseIcon,
  VideogameAsset as VideogameAssetIcon,
  SportsEsports as SportsEsportsIcon,
  Casino as CasinoIcon,
  Toys as ToysIcon,
  Extension as ExtensionIcon,
  Puzzle as PuzzleIcon,
  Games as GamesIcon,
  Portrait,
  Landscape,
  AutoAwesome,
  SwipeLeft,
  SwipeRight,
  SwipeUp,
  SwipeDown,
  TouchApp,
  PanTool,
  Gesture,
  BackHand,
  FrontHand,
  WavingHand,
  ThumbUpAlt,
  ThumbDownAlt,
  Mood,
  MoodBad,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
  SentimentVerySatisfied as SentimentVerySatisfiedIcon,
  SentimentNeutral as SentimentNeutralIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  Rocket,
  RocketLaunch,
  Launch,
  FlightTakeoff,
  Fireplace,
  Whatshot as WhatshotIcon,
  LocalFireDepartment,
  Flare as FlareIcon,
  Bolt,
  Flash,
  FlashOn,
  FlashOff,
  FlashAuto,
  Highlight,
  HighlightOff,
  Stars,
  StarHalf,
  StarOutline,
  StarRate,
  Grade,
  WorkspacePremium,
  Diamond,
  AutoAwesome as AutoAwesomeIcon,
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
  Extension as ExtensionIconAlt,
  Widgets,
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
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  HourglassTop,
  HourglassBottom,
  MoreTime,
  History,
  HistoryToggleOff,
  Restore as RestoreIcon,
  RestoreFromTrash,
  RestorePage,
  Backup as BackupIcon,
  BackupTable,
  CloudBackup,
  SettingsBackupRestore,
  Update as UpdateIcon,
  Sync as SyncIcon,
  SyncAlt,
  SyncDisabled,
  SyncLock,
  SyncProblem,
  Loop as LoopIcon,
  Repeat as RepeatIcon,
  RepeatOne as RepeatOneIcon,
  RepeatOn as RepeatOnIcon,
  Shuffle as ShuffleIcon,
  ShuffleOn as ShuffleOnIcon,
  Autorenew as AutorenewIcon,
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
  Speaker as SpeakerIconAlt,
  SpeakerGroup as SpeakerGroupIcon,
  SpeakerPhone as SpeakerPhoneIcon,
  Surround as SurroundIcon,
  GraphicEq as GraphicEqIcon,
  Equalizer as EqualizerIconAlt,
  MusicNote as MusicNoteIcon,
  MusicOff as MusicOffIcon,
  LibraryMusic as LibraryMusicIcon,
  LibraryAdd as LibraryAddIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
  LibraryBooks as LibraryBooksIcon,
  QueueMusic as QueueMusicIcon,
  Queue as QueueIcon,
  QueuePlayNext as QueuePlayNextIcon,
  PlaylistAdd as PlaylistAddIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  PlaylistPlay as PlaylistPlayIcon,
  PlaylistRemove as PlaylistRemoveIcon,
  Album as AlbumIcon,
  AudioFile as AudioFileIcon,
  VideoFile as VideoFileIcon,
  Movie as MovieIcon,
  LiveTv as LiveTvIcon,
  OndemandVideo as OndemandVideoIcon,
  VideoLibrary as VideoLibraryIcon,
  VideoCall as VideoCallIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  VideoSettings as VideoSettingsIcon,
  Theaters as TheatersIcon,
  LocalMovies as LocalMoviesIcon,
  Slideshow as SlideshowIcon,
  Photo as PhotoIcon,
  PhotoLibrary as PhotoLibraryIcon,
  PhotoCamera as PhotoCameraIcon,
  CameraAlt as CameraAltIcon,
  Camera as CameraIcon,
  CameraFront as CameraFrontIcon,
  CameraRear as CameraRearIcon,
  CameraRoll as CameraRollIcon,
  Collections as CollectionsIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  BookmarkAdd as BookmarkAddIcon,
  BookmarkAdded as BookmarkAddedIcon,
  BookmarkRemove as BookmarkRemoveIcon,
  Bookmarks as BookmarksIcon,
  MenuBook as MenuBookIcon,
  AutoStories as AutoStoriesIcon,
  ImportContacts as ImportContactsIcon,
  ChromeReaderMode as ChromeReaderModeIcon,
  FindInPage as FindInPageIcon,
  Pageview as PageviewIcon,
  Description as DescriptionIcon,
  Article as ArticleIcon,
  Subject as SubjectIcon,
  Topic as TopicIcon,
  Category as CategoryIcon,
  Label as LabelIcon,
  LocalOffer as LocalOfferIconAlt,
  Sell as SellIcon,
  NewReleases as NewReleasesIcon,
  Whatshot as WhatshotIconAlt,
  Trending as TrendingIcon,
  TrendingFlat as TrendingFlatIcon,
  TrendingUp as TrendingUpIconAlt,
  TrendingDown as TrendingDownIconAlt,
  ShowChart as ShowChartIconAlt,
  BarChart as BarChartIconAlt,
  PieChart as PieChartIconAlt,
  DonutLarge as DonutLargeIconAlt,
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  Poll as PollIconAlt,
  DataUsage as DataUsageIconAlt,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  MultilineChart as MultilineChartIcon,
  AreaChart as AreaChartIcon,
  Storage as StorageIconAlt,
  CloudQueue as CloudQueueIconAlt,
  CloudDone as CloudDoneIconAlt,
  CloudDownload as CloudDownloadIconAlt,
  CloudUpload as CloudUploadIcon,
  CloudOff as CloudOffIconAlt,
  Backup as BackupIconAlt,
  Restore as RestoreIconAlt,
  GetApp as GetAppIcon,
  Publish as PublishIcon,
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
  WorkspacePremium as WorkspacePremiumIcon,
  Diamond as DiamondIcon,
  Verified as VerifiedIcon,
  VerifiedUser as VerifiedUserIcon,
  Security as SecurityIcon,
  Privacy as PrivacyIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  LockClock,
  LockPerson,
  LockReset,
  NoEncryption,
  Enhanced,
  EnhancedEncryption,
  Shield as ShieldIcon,
  SafetyCheck as SafetyCheckIcon,
  HealthAndSafety as HealthAndSafetyIcon,
  MonitorHeart as MonitorHeartIcon,
  Psychology as PsychologyIcon,
  PsychologyAlt as PsychologyAltIcon,
  ConnectWithoutContact as ConnectWithoutContactIcon,
  Diversity3 as Diversity3Icon,
  FamilyRestroom as FamilyRestroomIcon,
  Handshake as HandshakeIcon,
  VolunteerActivism as VolunteerActivismIcon,
  SupportAgent as SupportAgentIcon,
  Recommend as RecommendIconAlt,
  TipsAndUpdates as TipsAndUpdatesIconAlt,
  AutoFixHigh as AutoFixHighIconAlt,
  Transform as TransformIconAlt,
  Explore as ExploreIconAlt,
  Compass as CompassIconAlt,
  Map as MapIconAlt,
  Route as RouteIconAlt,
  DirectionsRun as DirectionsRunIcon,
  SportsScore as SportsScoreIcon,
  EmojiEvents as EmojiEventsIcon,
  Celebration as CelebrationIcon,
  Cake as CakeIcon,
  CardGiftcard as CardGiftcardIcon,
  Redeem as RedeemIcon,
  LocalOffer as LocalOfferIconAlt2,
  Discount as DiscountIcon,
  MonetizationOn as MonetizationOnIconAlt,
  AttachMoney as AttachMoneyIconAlt,
  CreditCard as CreditCardIconAlt,
  Payment as PaymentIconAlt,
  AccountBalance as AccountBalanceIconAlt,
  Savings as SavingsIconAlt,
  Balance as BalanceIcon,
  Scale as ScaleIcon,
  Gavel as GavelIcon,
  Work as WorkIcon,
  School as SchoolIcon,
  Home as HomeIcon,
  Business as BusinessIcon,
  Store as StoreIcon,
  ShoppingCart as ShoppingCartIcon,
  ShoppingBag as ShoppingBagIcon,
  Person as PersonIcon,
  People as PeopleIcon,
  Group as GroupIcon,
  Groups as GroupsIcon,
  Face as FaceIcon,
  TagFaces as TagFacesIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIconAlt,
  SentimentDissatisfied as SentimentDissatisfiedIconAlt,
  SentimentNeutral as SentimentNeutralIconAlt,
  SentimentSatisfied as SentimentSatisfiedIconAlt,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIconAlt,
  SentimentVerySatisfied as SentimentVerySatisfiedIconAlt,
  ThumbsUpDown as ThumbsUpDownIconAlt,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Heart as HeartIcon,
  HeartBroken as HeartBrokenIcon,
  Pets as PetsIcon,
  Child as ChildIcon,
  Elderly as ElderlyIcon,
  Pregnant as PregnantIcon,
  Accessible as AccessibleIcon,
  AccessibleForward as AccessibleForwardIcon,
  Wheelchair as WheelchairIcon,
  ElderlyWoman as ElderlyWomanIcon,
  Man as ManIcon,
  Woman as WomanIcon,
  Boy as BoyIcon,
  Girl as GirlIcon,
  Baby as BabyIcon,
  Toddler as ToddlerIcon,
  AccountCircle as AccountCircleIcon,
  PersonAdd as PersonAddIcon,
  PersonRemove as PersonRemoveIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  Archive as ArchiveIconAlt,
  Unarchive as UnarchiveIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Edit as EditIcon,
  Create as CreateIcon,
  Close as CloseIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Chat as ChatIcon,
  ChatBubble as ChatBubbleIcon,
  Forum as ForumIcon,
  Comment as CommentIcon,
  Message as MessageIcon,
  Email as EmailIcon,
  MailOutline as MailOutlineIcon,
  Send as SendIcon,
  Reply as ReplyIconAlt,
  ReplyAll as ReplyAllIcon,
  Forward as ForwardIconAlt,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Archive as ArchiveIconAlt2,
  Report as ReportIcon,
  Flag as FlagIcon,
  Block as BlockIconAlt,
  NotInterested as NotInterestedIconAlt,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  ThumbsUpDown as ThumbsUpDownIconAlt2,
  ThumbUpAlt as ThumbUpAltIcon,
  ThumbDownAlt as ThumbDownAltIcon,
  Mood as MoodIcon,
  MoodBad as MoodBadIcon,
  AutoAwesome as AutoAwesomeIconAlt,
  SwipeLeft as SwipeLeftIcon,
  SwipeRight as SwipeRightIcon,
  SwipeUp as SwipeUpIcon,
  SwipeDown as SwipeDownIcon,
  TouchApp as TouchAppIcon,
  PanTool as PanToolIcon,
  Gesture as GestureIcon,
  BackHand as BackHandIcon,
  FrontHand as FrontHandIcon,
  WavingHand as WavingHandIcon,
  Rocket as RocketIcon,
  RocketLaunch as RocketLaunchIcon,
  Launch as LaunchIcon,
  FlightTakeoff as FlightTakeoffIcon,
  Fireplace as FireplaceIcon,
  LocalFireDepartment as LocalFireDepartmentIcon,
  Flare as FlareIconAlt,
  Bolt as BoltIcon,
  Flash as FlashIcon,
  FlashOn as FlashOnIcon,
  FlashOff as FlashOffIcon,
  FlashAuto as FlashAutoIcon,
  Highlight as HighlightIcon,
  HighlightOff as HighlightOffIcon,
  Stars as StarsIcon,
  StarHalf as StarHalfIcon,
  StarOutline as StarOutlineIcon,
  StarRate as StarRateIcon,
  Grade as GradeIcon,
  WorkspacePremium as WorkspacePremiumIconAlt,
  Diamond as DiamondIconAlt,
  AutoAwesome as AutoAwesomeIconAlt2,
  Verified as VerifiedIconAlt,
  NewLabel as NewLabelIcon,
  FiberNew as FiberNewIcon,
  Update as UpdateIconAlt,
  Upgrade as UpgradeIcon,
  SystemUpdate as SystemUpdateIcon,
  SystemUpdateAlt as SystemUpdateAltIcon,
  GetApp as GetAppIconAlt,
  InstallMobile as InstallMobileIcon,
  InstallDesktop as InstallDesktopIcon,
  AppRegistration as AppRegistrationIcon,
  AppShortcut as AppShortcutIcon,
  Apps as AppsIcon,
  AppsOutage as AppsOutageIcon,
  Extension as ExtensionIconAlt2,
  Widgets as WidgetsIcon
} from '@mui/icons-material';

const ProfileLaunchCelebration = () => {
  const [profileData, setProfileData] = useState({});
  const [achievements, setAchievements] = useState([]);
  const [isLaunching, setIsLaunching] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [launchStep, setLaunchStep] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  // Achievement categories
  const achievementCategories = [
    {
      id: 'profile_completion',
      name: 'Profile Completion',
      description: 'Comprehensive profile building achievements',
      icon: <CheckCircle />,
      color: '#4caf50',
      achievements: [
        { id: 'photos_uploaded', name: 'Photo Master', description: 'Uploaded 10 high-quality photos', icon: <PhotoCamera />, completed: true },
        { id: 'bio_written', name: 'Storyteller', description: 'Crafted a compelling bio', icon: <Article />, completed: true },
        { id: 'prompts_answered', name: 'Conversation Starter', description: 'Answered 5+ profile prompts', icon: <QuestionAnswer />, completed: true },
        { id: 'verification_complete', name: 'Verified Member', description: 'Completed identity verification', icon: <VerifiedUser />, completed: true }
      ]
    },
    {
      id: 'assessments',
      name: 'Psychological Assessments',
      description: 'Deep personality and compatibility insights',
      icon: <Psychology />,
      color: '#2196f3',
      achievements: [
        { id: 'big_five', name: 'Personality Explorer', description: 'Completed Big Five assessment', icon: <Psychology />, completed: true },
        { id: 'attachment_style', name: 'Attachment Aware', description: 'Discovered attachment style', icon: <Handshake />, completed: true },
        { id: 'love_languages', name: 'Love Linguist', description: 'Identified love languages', icon: <Favorite />, completed: true },
        { id: 'emotional_intelligence', name: 'EQ Master', description: 'Assessed emotional intelligence', icon: <MonitorHeart />, completed: true },
        { id: 'values_assessment', name: 'Values Champion', description: 'Defined core values', icon: <Star />, completed: true }
      ]
    },
    {
      id: 'matching_preferences',
      name: 'Matching Optimization',
      description: 'Advanced matching and compatibility setup',
      icon: <Tune />,
      color: '#ff9800',
      achievements: [
        { id: 'preferences_set', name: 'Preference Pro', description: 'Set detailed matching preferences', icon: <Tune />, completed: true },
        { id: 'deal_breakers', name: 'Boundary Setter', description: 'Defined compatibility criteria', icon: <Block />, completed: true },
        { id: 'relationship_style', name: 'Style Savvy', description: 'Specified relationship preferences', icon: <Handshake />, completed: true },
        { id: 'lifestyle_match', name: 'Lifestyle Matcher', description: 'Set lifestyle preferences', icon: <Home />, completed: true }
      ]
    },
    {
      id: 'ai_coaching',
      name: 'AI Coaching Setup',
      description: 'Personalized AI coaching configuration',
      icon: <AutoAwesome />,
      color: '#9c27b0',
      achievements: [
        { id: 'coach_setup', name: 'Coach Collaborator', description: 'Set up AI coaching system', icon: <SupportAgent />, completed: true },
        { id: 'coaching_style', name: 'Style Selector', description: 'Chose coaching preferences', icon: <Psychology />, completed: true },
        { id: 'growth_goals', name: 'Goal Getter', description: 'Set personal growth goals', icon: <TrendingUp />, completed: true },
        { id: 'coaching_areas', name: 'Area Expert', description: 'Selected coaching focus areas', icon: <Target />, completed: true }
      ]
    },
    {
      id: 'optimization',
      name: 'Profile Optimization',
      description: 'Advanced profile analysis and testing',
      icon: <Analytics />,
      color: '#607d8b',
      achievements: [
        { id: 'analysis_complete', name: 'Data Analyst', description: 'Completed profile analysis', icon: <Analytics />, completed: true },
        { id: 'testing_done', name: 'Test Taker', description: 'Ran comprehensive profile tests', icon: <Science />, completed: true },
        { id: 'optimization_applied', name: 'Optimizer', description: 'Applied optimization recommendations', icon: <AutoFixHigh />, completed: true },
        { id: 'preview_tested', name: 'Preview Pro', description: 'Tested profile across devices', icon: <Visibility />, completed: true }
      ]
    }
  ];

  // Launch steps
  const launchSteps = [
    {
      id: 'preparation',
      name: 'Preparing Launch',
      description: 'Finalizing profile settings and preferences',
      icon: <Settings />,
      duration: 2000
    },
    {
      id: 'verification',
      name: 'Final Verification',
      description: 'Verifying all profile components',
      icon: <VerifiedUser />,
      duration: 1500
    },
    {
      id: 'optimization',
      name: 'Applying Optimizations',
      description: 'Implementing final optimizations',
      icon: <AutoFixHigh />,
      duration: 2000
    },
    {
      id: 'activation',
      name: 'Activating Profile',
      description: 'Making your profile live and discoverable',
      icon: <Publish />,
      duration: 1500
    },
    {
      id: 'celebration',
      name: 'Launch Complete!',
      description: 'Your profile is now live and ready for connections',
      icon: <Celebration />,
      duration: 1000
    }
  ];

  // Load profile data and achievements
  useEffect(() => {
    const loadData = () => {
      const photos = JSON.parse(localStorage.getItem('profilePhotos') || '[]');
      const bio = JSON.parse(localStorage.getItem('profileBio') || '{}');
      const assessments = JSON.parse(localStorage.getItem('assessmentResults') || '{}');
      const analysis = JSON.parse(localStorage.getItem('profileAnalysis') || '{}');
      const testResults = JSON.parse(localStorage.getItem('profileTestResults') || '{}');

      const profileData = {
        photos,
        bio,
        assessments,
        analysis,
        testResults,
        name: 'Alex',
        completionDate: new Date().toISOString()
      };

      // Calculate achievements
      const completedAchievements = [];
      achievementCategories.forEach(category => {
        category.achievements.forEach(achievement => {
          if (achievement.completed) {
            completedAchievements.push({
              ...achievement,
              category: category.name,
              categoryColor: category.color
            });
          }
        });
      });

      setProfileData(profileData);
      setAchievements(completedAchievements);
    };

    loadData();
  }, []);

  // Launch profile
  const launchProfile = useCallback(async () => {
    setIsLaunching(true);
    setLaunchStep(0);

    for (let i = 0; i < launchSteps.length; i++) {
      setLaunchStep(i);
      await new Promise(resolve => setTimeout(resolve, launchSteps[i].duration));
    }

    // Show confetti and success
    setShowConfetti(true);
    setIsLaunching(false);
    setShowSuccessDialog(true);

    // Save launch data
    localStorage.setItem('profileLaunched', JSON.stringify({
      launched: true,
      launchDate: new Date().toISOString(),
      achievements: achievements.length,
      profileScore: profileData.analysis?.overallScore || 0
    }));

    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  }, [achievements, profileData, launchSteps]);

  // Render achievement summary
  const renderAchievementSummary = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Your Achievements
      </Typography>
      
      <Grid container spacing={3}>
        {achievementCategories.map((category) => {
          const completedCount = category.achievements.filter(a => a.completed).length;
          const totalCount = category.achievements.length;
          const completionRate = (completedCount / totalCount) * 100;

          return (
            <Grid item xs={12} md={6} lg={4} key={category.id}>
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
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {category.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {completedCount}/{totalCount} completed
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
                    {category.achievements.map((achievement) => (
                      <ListItem key={achievement.id} sx={{ px: 0 }}>
                        <ListItemIcon>
                          {achievement.completed ? (
                            <CheckCircle sx={{ color: category.color }} />
                          ) : (
                            <RadioButtonUnchecked sx={{ color: '#ccc' }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={achievement.name}
                          secondary={achievement.description}
                          primaryTypographyProps={{
                            fontWeight: achievement.completed ? 'bold' : 'normal',
                            color: achievement.completed ? 'text.primary' : 'text.secondary'
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  // Render profile summary
  const renderProfileSummary = () => (
    <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)', color: 'white' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Profile Complete!
      </Typography>
      
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Avatar
              sx={{
                width: 120,
                height: 120,
                mx: 'auto',
                mb: 2,
                border: '4px solid white'
              }}
              src={profileData.photos?.find(p => p.isMain)?.url}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {profileData.name}
            </Typography>
            <Chip
              icon={<VerifiedUser />}
              label="Verified Profile"
              sx={{ mt: 1, backgroundColor: 'white', color: '#2196f3', fontWeight: 'bold' }}
            />
          </Box>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {profileData.photos?.length || 0}
                </Typography>
                <Typography variant="body2">
                  Photos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {Object.keys(profileData.bio?.prompts || {}).length}
                </Typography>
                <Typography variant="body2">
                  Prompts
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {achievements.length}
                </Typography>
                <Typography variant="body2">
                  Achievements
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                  {profileData.analysis?.overallScore || 0}
                </Typography>
                <Typography variant="body2">
                  Profile Score
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Congratulations! You've created one of the most comprehensive dating profiles ever built. 
              Your profile includes advanced psychological assessments, AI coaching setup, and optimization 
              that puts you ahead of 95% of other dating app users.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label="Personality Assessed" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              <Chip label="AI Coach Ready" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              <Chip label="Fully Optimized" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
              <Chip label="Verified & Secure" sx={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );

  // Render launch process
  const renderLaunchProcess = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Profile Launch Process
      </Typography>
      
      <Stepper activeStep={launchStep} orientation="vertical">
        {launchSteps.map((step, index) => (
          <Step key={step.id}>
            <StepLabel
              StepIconComponent={() => (
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: index <= launchStep ? '#4caf50' : '#e0e0e0',
                    color: 'white'
                  }}
                >
                  {index < launchStep ? <CheckCircle /> : 
                   index === launchStep && isLaunching ? <CircularProgress size={20} sx={{ color: 'white' }} /> :
                   step.icon}
                </Avatar>
              )}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {step.name}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );

  // Render next steps
  const renderNextSteps = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        What's Next?
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
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
              <Explore />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              Start Discovering
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Begin exploring potential matches with our advanced compatibility algorithm
            </Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
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
              <SupportAgent />
            </Avatar>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              AI Coaching
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Get personalized coaching and advice from your AI relationship coach
            </Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
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
              Track Progress
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor your dating success and get insights to improve your approach
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4, position: 'relative' }}>
      {/* Confetti Effect */}
      {showConfetti && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999
          }}
        >
          {/* Confetti animation would be implemented here */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontSize: '4rem',
              animation: 'bounce 1s infinite'
            }}
          >
            🎉
          </Box>
        </Box>
      )}

      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🎉 Congratulations! 🎉
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          Your profile is ready to launch and start making meaningful connections
        </Typography>
      </Box>

      {/* Profile Summary */}
      {renderProfileSummary()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Achievements" />
          <Tab label="Launch Process" />
          <Tab label="Next Steps" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderAchievementSummary()}
      {selectedTab === 1 && renderLaunchProcess()}
      {selectedTab === 2 && renderNextSteps()}

      {/* Launch Button */}
      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={isLaunching ? <CircularProgress size={20} sx={{ color: 'white' }} /> : <RocketLaunch />}
          onClick={launchProfile}
          disabled={isLaunching}
          sx={{
            background: 'linear-gradient(45deg, #e91e63 30%, #ff9800 90%)',
            color: 'white',
            px: 6,
            py: 2,
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: 4,
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6,
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          {isLaunching ? 'Launching Profile...' : 'Launch My Profile!'}
        </Button>
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Profile Preview & Testing)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Preview
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Navigate to main app
            console.log('Navigate to main app');
          }}
          sx={{
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
        >
          Enter Flourish App
        </Button>
      </Box>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                mb: 2,
                backgroundColor: '#4caf50',
                color: 'white'
              }}
            >
              <Celebration sx={{ fontSize: 40 }} />
            </Avatar>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Profile Launched!
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            🎉 Welcome to Flourish! 🎉
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Your profile is now live and ready to attract meaningful connections. 
            You've completed the most comprehensive dating profile setup ever created!
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3 }}>
            <Chip
              icon={<CheckCircle />}
              label={`${achievements.length} Achievements`}
              sx={{ backgroundColor: '#4caf50', color: 'white' }}
            />
            <Chip
              icon={<Star />}
              label={`${profileData.analysis?.overallScore || 0}/100 Score`}
              sx={{ backgroundColor: '#2196f3', color: 'white' }}
            />
            <Chip
              icon={<VerifiedUser />}
              label="Verified Profile"
              sx={{ backgroundColor: '#ff9800', color: 'white' }}
            />
          </Box>
          
          <Alert severity="success" sx={{ textAlign: 'left' }}>
            <Typography variant="body2">
              <strong>What makes your profile special:</strong>
              <br />• Advanced psychological assessments completed
              <br />• AI coaching system configured
              <br />• Profile optimized for maximum compatibility
              <br />• Comprehensive verification completed
            </Typography>
          </Alert>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button
            onClick={() => setShowSuccessDialog(false)}
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
              color: 'white',
              px: 4
            }}
          >
            Start Your Journey
          </Button>
        </DialogActions>
      </Dialog>

      {/* Celebration Note */}
      <Alert severity="success" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Congratulations!</strong> You've completed the most comprehensive relationship profile 
          ever created. Your profile includes advanced psychological assessments, AI coaching setup, 
          and optimization features that put you ahead of 95% of dating app users. You're ready to 
          make meaningful connections!
        </Typography>
      </Alert>
    </Container>
  );
};

export default ProfileLaunchCelebration;

