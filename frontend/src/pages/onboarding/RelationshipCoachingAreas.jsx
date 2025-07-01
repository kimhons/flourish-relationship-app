import React, { useState, useEffect } from 'react';
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
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Alert,
  Divider,
  IconButton,
  Tooltip,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  RadioGroup,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Stack
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Psychology,
  Chat,
  Favorite,
  Star,
  AutoAwesome,
  TrendingUp,
  Analytics,
  PersonSearch,
  Groups,
  School,
  Work,
  FitnessCenter,
  Restaurant,
  Movie,
  MusicNote,
  Flight,
  Home,
  Child,
  Pets,
  Info,
  ExpandMore,
  CheckCircle,
  Warning,
  Error,
  Refresh,
  Pause,
  PlayArrow,
  VolumeUp,
  VideoCall,
  Phone,
  Message,
  Schedule,
  Notifications,
  Security,
  Privacy,
  Settings,
  Help,
  Support,
  Lightbulb,
  EmojiObjects,
  Healing,
  SelfImprovement,
  Mood,
  Insights,
  Timeline,
  Assessment,
  Assignment,
  BookmarkBorder,
  Bookmark,
  Speed,
  Tune,
  SmartToy,
  RecordVoiceOver,
  Hearing,
  Visibility,
  TouchApp,
  EmojiEmotions,
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  ThumbUp,
  ThumbDown,
  QuestionAnswer,
  Forum,
  Feedback,
  Flag,
  CalendarToday,
  Timer,
  Alarm,
  DateRange,
  Event,
  Today,
  AccessTime,
  Update,
  Cached,
  Loop,
  Repeat,
  RotateRight,
  Sync,
  CloudSync,
  Backup,
  Save,
  Edit,
  Add,
  Remove,
  Clear,
  Delete,
  Archive,
  Unarchive,
  Restore,
  Undo,
  Redo,
  Forward,
  Reply,
  Share,
  Download,
  Upload,
  CloudUpload,
  CloudDownload,
  Publish,
  Public,
  Lock,
  LockOpen,
  Visibility as VisibilityIcon,
  VisibilityOff,
  CrisisAlert,
  LocalHospital,
  ContactSupport,
  HealthAndSafety,
  MonitorHeart,
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
  EmojiEvents,
  Celebration,
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
  TrendingDown,
  ShowChart,
  BarChart,
  PieChart,
  DonutLarge,
  DataUsage,
  BubbleChart,
  ScatterPlot,
  Timeline as TimelineIcon,
  DateRange as DateRangeIcon,
  Today as TodayIcon,
  Schedule as ScheduleIcon,
  AccessTime as AccessTimeIcon,
  Alarm as AlarmIcon,
  Timer as TimerIcon,
  Hourglass,
  HourglassEmpty,
  HourglassFull,
  MoreTime,
  Snooze,
  WatchLater,
  History,
  Restore as RestoreIcon,
  Update as UpdateIcon,
  Refresh as RefreshIcon,
  Sync as SyncIcon,
  CloudSync as CloudSyncIcon,
  Backup as BackupIcon,
  Save as SaveIcon,
  Edit as EditIcon,
  Create,
  Draw,
  Brush,
  Palette,
  ColorLens,
  FormatPaint,
  Gradient,
  Texture,
  Pattern,
  Style,
  DesignServices,
  Architecture,
  Engineering,
  Construction,
  Build,
  Handyman,
  HomeRepair,
  Plumbing,
  Electrical,
  Carpenter,
  CleaningServices,
  Pest,
  Yard,
  Grass,
  Nature,
  Park,
  Forest,
  Eco,
  Recycling,
  Energy,
  Solar,
  Wind,
  Water,
  Fire,
  Earth,
  Air,
  Cloud,
  Storm,
  Lightning,
  Thunder,
  Rain,
  Snow,
  Sun,
  Moon,
  Stars,
  Galaxy,
  Universe,
  Rocket,
  Satellite,
  Telescope,
  Science,
  Biotech,
  Chemistry,
  Physics,
  Math,
  Calculate,
  Functions,
  Percent,
  PlusOne,
  Exposure,
  Filter,
  Tune as TuneIcon,
  Settings as SettingsIcon,
  ControlPoint,
  ControlPointDuplicate,
  RemoveCircle,
  AddCircle,
  Cancel,
  Close,
  Done,
  Check,
  Clear as ClearIcon,
  Block,
  NotInterested,
  DoNotDisturb,
  DoNotDisturbAlt,
  DoNotDisturbOff,
  DoNotDisturbOn,
  VolumeOff,
  VolumeMute,
  VolumeDown,
  VolumeUp as VolumeUpIcon,
  Hearing as HearingIcon,
  HearingDisabled,
  RecordVoiceOver as RecordVoiceOverIcon,
  VoiceOverOff,
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
  MusicNote as MusicNoteIcon,
  MusicOff,
  LibraryMusic,
  QueueMusic,
  PlaylistAdd,
  PlaylistPlay,
  Shuffle,
  Repeat as RepeatIcon,
  RepeatOne,
  RepeatOn,
  SkipNext,
  SkipPrevious,
  FastForward,
  FastRewind,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
  Stop,
  FiberManualRecord,
  Radio,
  Podcasts,
  Album,
  Artist,
  AudioFile,
  VideoFile,
  Movie as MovieIcon,
  Tv,
  LiveTv,
  OndemandVideo,
  VideoLibrary,
  VideoCall as VideoCallIcon,
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
  CameraEnhance,
  CameraFront,
  CameraRear,
  CameraRoll,
  Collections,
  CollectionsBookmark,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
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
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat,
  ShowChart as ShowChartIcon,
  MultilineChart,
  AreaChart,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutLargeIcon,
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  Poll,
  EqualizerIcon,
  DataUsage as DataUsageIcon,
  Storage,
  CloudQueue,
  CloudDone,
  CloudDownload as CloudDownloadIcon,
  CloudUpload as CloudUploadIcon,
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
  Tv as TvIcon,
  Speaker as SpeakerIcon,
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
  FitnessCenter as FitnessCenterIcon,
  SelfImprovement as SelfImprovementIcon,
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
  DirectionsRun as DirectionsRunIcon,
  DirectionsCar,
  DirectionsBus,
  DirectionsSubway,
  DirectionsTransit,
  DirectionsRailway,
  Flight as FlightIcon,
  Hotel,
  Restaurant as RestaurantIcon,
  LocalDining,
  LocalBar,
  LocalCafe,
  LocalPizza,
  Fastfood,
  IceCream,
  Cake as CakeIcon,
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
  Celebration as CelebrationIcon,
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
  CameraEnhance as CameraEnhanceIcon,
  PhotoFilter,
  Tune as TuneIcon2,
  Palette as PaletteIcon,
  Brush as BrushIcon,
  FormatColorFill,
  FormatColorReset,
  FormatColorText,
  FormatPaint as FormatPaintIcon,
  Gradient as GradientIcon,
  Texture as TextureIcon,
  Pattern as PatternIcon,
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
  Transform as TransformIcon,
  ZoomIn,
  ZoomOut,
  ZoomOutMap,
  CenterFocusStrong,
  CenterFocusWeak,
  FilterCenterFocus,
  FilterTiltShift,
  BlurOn,
  BlurOff,
  BlurCircular,
  BlurLinear,
  Exposure as ExposureIcon,
  ExposurePlus1,
  ExposurePlus2,
  ExposureNeg1,
  ExposureNeg2,
  ExposureZero,
  WbIncandescent as WbIncandescentIcon,
  WbFluorescent,
  WbSunny as WbSunnyIcon,
  WbCloudy as WbCloudyIcon,
  WbShade as WbShadeIcon,
  WbTwilight as WbTwilightIcon,
  WbIridescent as WbIridescentIcon,
  WbAuto as WbAutoIcon,
  Iso as IsoIcon,
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
  AutoAwesome as AutoAwesomeIcon,
  AutoFixHigh as AutoFixHighIcon,
  AutoFixNormal,
  AutoFixOff,
  AutoMode,
  AutoDelete,
  AutoDeleteOutlined,
  AutorenewIcon,
  LoopIcon,
  RepeatIcon as RepeatIcon2,
  RepeatOneIcon,
  RepeatOnIcon,
  ShuffleIcon,
  ShuffleOnIcon,
  QueueIcon,
  QueueMusicIcon,
  QueuePlayNextIcon,
  PlaylistAddIcon,
  PlaylistAddCheckIcon,
  PlaylistPlayIcon,
  PlaylistRemoveIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  FastForwardIcon,
  FastRewindIcon,
  PlayArrowIcon as PlayArrowIcon2,
  PauseIcon as PauseIcon2,
  StopIcon,
  FiberManualRecordIcon,
  RadioIcon,
  PodcastsIcon,
  AlbumIcon,
  LibraryMusicIcon,
  MusicNoteIcon as MusicNoteIcon2,
  MusicOffIcon,
  AudioFileIcon,
  VideoFileIcon,
  MovieIcon as MovieIcon2,
  TvIcon as TvIcon2,
  LiveTvIcon,
  OndemandVideoIcon,
  VideoLibraryIcon,
  VideocamIcon,
  VideocamOffIcon,
  VideoCallIcon as VideoCallIcon2,
  VideoSettingsIcon,
  TheatersIcon,
  LocalMoviesIcon,
  SlideshowIcon,
  PhotoIcon,
  PhotoLibraryIcon,
  PhotoCameraIcon,
  CameraAltIcon,
  CameraIcon,
  CameraEnhanceIcon as CameraEnhanceIcon2,
  CameraFrontIcon,
  CameraRearIcon,
  CameraRollIcon,
  CollectionsIcon,
  CollectionsBookmarkIcon,
  BookmarkIcon as BookmarkIcon2,
  BookmarkBorderIcon as BookmarkBorderIcon2,
  BookmarkAddIcon,
  BookmarkAddedIcon,
  BookmarkRemoveIcon,
  BookmarksIcon,
  MenuBookIcon,
  AutoStoriesIcon,
  ImportContactsIcon,
  ChromeReaderModeIcon,
  FindInPageIcon,
  PageviewIcon,
  DescriptionIcon,
  ArticleIcon,
  SubjectIcon,
  TopicIcon,
  CategoryIcon,
  LabelIcon,
  LocalOfferIcon as LocalOfferIcon2,
  SellIcon,
  NewReleasesIcon,
  WhatshotIcon,
  TrendingIcon,
  TrendingUpIcon as TrendingUpIcon2,
  TrendingDownIcon as TrendingDownIcon2,
  TrendingFlatIcon,
  ShowChartIcon as ShowChartIcon2,
  MultilineChartIcon,
  AreaChartIcon,
  BarChartIcon as BarChartIcon2,
  PieChartIcon as PieChartIcon2,
  DonutLargeIcon as DonutLargeIcon2,
  AnalyticsIcon as AnalyticsIcon2,
  AssessmentIcon as AssessmentIcon2,
  PollIcon,
  EqualizerIcon as EqualizerIcon2,
  DataUsageIcon as DataUsageIcon2,
  StorageIcon,
  CloudQueueIcon,
  CloudDoneIcon,
  CloudDownloadIcon as CloudDownloadIcon2,
  CloudUploadIcon as CloudUploadIcon2,
  CloudOffIcon,
  WifiOffIcon,
  WifiIcon,
  WifiProtectedSetupIcon,
  NetworkWifiIcon,
  SignalWifi4BarIcon,
  SignalWifiStatusbar4BarIcon,
  SignalWifiStatusbarConnectedNoInternet4Icon,
  SignalWifiStatusbarNullIcon,
  SignalWifiBadIcon,
  SignalWifiConnectedNoInternet4Icon,
  SignalWifiOffIcon,
  NetworkCheckIcon,
  RouterIcon,
  DeviceHubIcon,
  DevicesIcon,
  DevicesOtherIcon,
  ComputerIcon,
  LaptopIcon,
  LaptopMacIcon,
  LaptopWindowsIcon,
  LaptopChromebookIcon,
  DesktopMacIcon,
  DesktopWindowsIcon,
  PhoneIphoneIcon,
  PhoneAndroidIcon,
  TabletIcon,
  TabletMacIcon,
  TabletAndroidIcon,
  WatchIcon,
  TvIcon as TvIcon3,
  SpeakerIcon as SpeakerIcon2,
  HeadphonesIcon,
  KeyboardIcon,
  MouseIcon,
  VideogameAssetIcon,
  SportsEsportsIcon,
  CasinoIcon,
  ToysIcon,
  ExtensionIcon,
  PuzzleIcon,
  GamesIcon,
  SportsHandballIcon,
  SportsSoccerIcon,
  SportsBasketballIcon,
  SportsFootballIcon,
  SportsBaseballIcon,
  SportsTennisIcon,
  SportsVolleyballIcon,
  SportsGolfIcon,
  SportsHockeyIcon,
  SportsCricketIcon,
  SportsRugbyIcon,
  PoolIcon,
  FitnessCenterIcon as FitnessCenterIcon2,
  SelfImprovementIcon as SelfImprovementIcon2,
  SpaIcon,
  HotTubIcon,
  BeachAccessIcon,
  KiteSurfingIcon,
  SurfingIcon,
  SailingIcon,
  KayakingIcon,
  RowingIcon,
  DirectionsBoatIcon,
  DirectionsBikeIcon,
  DirectionsWalkIcon,
  DirectionsRunIcon as DirectionsRunIcon2,
  DirectionsCarIcon,
  DirectionsBusIcon,
  DirectionsSubwayIcon,
  DirectionsTransitIcon,
  DirectionsRailwayIcon,
  FlightIcon as FlightIcon2,
  HotelIcon,
  RestaurantIcon as RestaurantIcon2,
  LocalDiningIcon,
  LocalBarIcon,
  LocalCafeIcon,
  LocalPizzaIcon,
  FastfoodIcon,
  IceCreamIcon,
  CakeIcon as CakeIcon2,
  LunchDiningIcon,
  DinnerDiningIcon,
  BreakfastDiningIcon,
  BrunchDiningIcon,
  RamenDiningIcon,
  RiceBowlIcon,
  SetMealIcon,
  BentoIcon,
  TapasIcon,
  LiquorIcon,
  WineIcon,
  SportsBarIcon,
  NightLifeIcon,
  LocalActivityIcon,
  AttractionsIcon,
  FestivalIcon,
  CelebrationIcon as CelebrationIcon2,
  PartyIcon,
  NightlightIcon,
  WbSunnyIcon as WbSunnyIcon2,
  WbCloudyIcon as WbCloudyIcon2,
  WbIncandescentIcon as WbIncandescentIcon2,
  WbIridescentIcon as WbIridescentIcon2,
  WbShadeIcon as WbShadeIcon2,
  WbTwilightIcon as WbTwilightIcon2,
  Brightness1Icon,
  Brightness2Icon,
  Brightness3Icon,
  Brightness4Icon,
  Brightness5Icon,
  Brightness6Icon,
  Brightness7Icon,
  BrightnessHighIcon,
  BrightnessLowIcon,
  BrightnessMediumIcon,
  BrightnessAutoIcon,
  FlareIcon,
  LensIcon,
  WbAutoIcon as WbAutoIcon2,
  IsoIcon as IsoIcon2,
  CameraEnhanceIcon as CameraEnhanceIcon3,
  PhotoFilterIcon,
  TuneIcon as TuneIcon3,
  PaletteIcon as PaletteIcon2,
  BrushIcon as BrushIcon2,
  FormatColorFillIcon,
  FormatColorResetIcon,
  FormatColorTextIcon,
  FormatPaintIcon as FormatPaintIcon2,
  GradientIcon as GradientIcon2,
  TextureIcon as TextureIcon2,
  PatternIcon as PatternIcon2,
  WallpaperIcon,
  ImageIcon,
  ImageAspectRatioIcon,
  ImageNotSupportedIcon,
  ImageSearchIcon,
  CropIcon,
  CropFreeIcon,
  CropOriginalIcon,
  CropSquareIcon,
  CropPortraitIcon,
  CropLandscapeIcon,
  Crop169Icon,
  Crop32Icon,
  Crop54Icon,
  Crop75Icon,
  CropDinIcon,
  Rotate90DegreesCcwIcon,
  Rotate90DegreesCwIcon,
  RotateLeftIcon,
  RotateRightIcon,
  FlipIcon,
  FlipCameraAndroidIcon,
  FlipCameraIosIcon,
  TransformIcon as TransformIcon2,
  ZoomInIcon,
  ZoomOutIcon,
  ZoomOutMapIcon,
  CenterFocusStrongIcon,
  CenterFocusWeakIcon,
  FilterCenterFocusIcon,
  FilterTiltShiftIcon,
  BlurOnIcon,
  BlurOffIcon,
  BlurCircularIcon,
  BlurLinearIcon,
  ExposureIcon as ExposureIcon2,
  ExposurePlus1Icon,
  ExposurePlus2Icon,
  ExposureNeg1Icon,
  ExposureNeg2Icon,
  ExposureZeroIcon,
  WbIncandescentIcon as WbIncandescentIcon3,
  WbFluorescentIcon,
  WbSunnyIcon as WbSunnyIcon3,
  WbCloudyIcon as WbCloudyIcon3,
  WbShadeIcon as WbShadeIcon3,
  WbTwilightIcon as WbTwilightIcon3,
  WbIridescentIcon as WbIridescentIcon3,
  WbAutoIcon as WbAutoIcon3,
  IsoIcon as IsoIcon3,
  Timer10Icon,
  Timer3Icon,
  TimerOffIcon,
  TimelapseIcon,
  SlowMotionVideoIcon,
  HdIcon,
  HqIcon,
  SdIcon,
  FourKIcon,
  EightKIcon,
  ThreeSixtyIcon,
  ViewInArIcon,
  ThreeDRotationIcon,
  ViewModuleIcon,
  ViewQuiltIcon,
  ViewStreamIcon,
  ViewArrayIcon,
  ViewColumnIcon,
  ViewAgendaIcon,
  ViewListIcon,
  ViewHeadlineIcon,
  ViewCarouselIcon,
  ViewComfyIcon,
  ViewCompactIcon,
  ViewDayIcon,
  ViewWeekIcon,
  DashboardIcon,
  DashboardCustomizeIcon,
  SpaceDashboardIcon,
  GridViewIcon,
  GridOnIcon,
  GridOffIcon,
  Grid3x3Icon,
  Grid4x4Icon,
  GridGoldenratioIcon
} from '@mui/icons-material';

const RelationshipCoachingAreas = () => {
  const [coachingAreas, setCoachingAreas] = useState({
    // Dating & Early Relationships
    dating: {
      dating_confidence: { priority: 8, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] },
      conversation_skills: { priority: 7, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] },
      first_dates: { priority: 6, intervention_level: 'light', frequency: 'as_needed', specific_goals: [] },
      online_dating: { priority: 5, intervention_level: 'light', frequency: 'as_needed', specific_goals: [] },
      rejection_handling: { priority: 7, intervention_level: 'moderate', frequency: 'as_needed', specific_goals: [] },
      attraction_building: { priority: 4, intervention_level: 'light', frequency: 'monthly', specific_goals: [] },
      dating_anxiety: { priority: 8, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      social_skills: { priority: 6, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] }
    },

    // Communication & Connection
    communication: {
      active_listening: { priority: 9, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] },
      emotional_expression: { priority: 8, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] },
      conflict_resolution: { priority: 7, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      difficult_conversations: { priority: 6, intervention_level: 'moderate', frequency: 'as_needed', specific_goals: [] },
      nonverbal_communication: { priority: 5, intervention_level: 'light', frequency: 'monthly', specific_goals: [] },
      assertiveness: { priority: 7, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] },
      empathy_building: { priority: 6, intervention_level: 'light', frequency: 'monthly', specific_goals: [] },
      boundary_communication: { priority: 8, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] }
    },

    // Emotional & Mental Health
    emotional: {
      emotional_regulation: { priority: 9, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      anxiety_management: { priority: 8, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      depression_support: { priority: 7, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      self_esteem: { priority: 8, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] },
      jealousy_management: { priority: 6, intervention_level: 'moderate', frequency: 'as_needed', specific_goals: [] },
      trust_issues: { priority: 7, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      abandonment_fears: { priority: 6, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] },
      attachment_healing: { priority: 8, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] }
    },

    // Relationship Dynamics
    dynamics: {
      intimacy_building: { priority: 7, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] },
      vulnerability_practice: { priority: 6, intervention_level: 'moderate', frequency: 'weekly', specific_goals: [] },
      power_balance: { priority: 5, intervention_level: 'light', frequency: 'monthly', specific_goals: [] },
      codependency: { priority: 7, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      independence_balance: { priority: 6, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] },
      relationship_roles: { priority: 4, intervention_level: 'light', frequency: 'monthly', specific_goals: [] },
      commitment_readiness: { priority: 5, intervention_level: 'moderate', frequency: 'monthly', specific_goals: [] },
      relationship_progression: { priority: 6, intervention_level: 'light', frequency: 'monthly', specific_goals: [] }
    },

    // Life Transitions & Challenges
    transitions: {
      breakup_recovery: { priority: 9, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      divorce_support: { priority: 8, intervention_level: 'intensive', frequency: 'weekly', specific_goals: [] },
      new_relationship: { priority: 6, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] },
      long_distance: { priority: 5, intervention_level: 'moderate', frequency: 'biweekly', specific_goals: [] },
      blended_families: { priority: 4, intervention_level: 'moderate', frequency: 'monthly', specific_goals: [] },
      career_relationship_balance: { priority: 6, intervention_level: 'light', frequency: 'monthly', specific_goals: [] },
      major_life_changes: { priority: 5, intervention_level: 'moderate', frequency: 'as_needed', specific_goals: [] },
      relationship_milestones: { priority: 4, intervention_level: 'light', frequency: 'as_needed', specific_goals: [] }
    },

    // Crisis & Emergency Support
    crisis: {
      relationship_crisis: { priority: 10, intervention_level: 'crisis', frequency: 'immediate', specific_goals: [] },
      emotional_crisis: { priority: 10, intervention_level: 'crisis', frequency: 'immediate', specific_goals: [] },
      abuse_support: { priority: 10, intervention_level: 'crisis', frequency: 'immediate', specific_goals: [] },
      suicidal_thoughts: { priority: 10, intervention_level: 'crisis', frequency: 'immediate', specific_goals: [] },
      severe_depression: { priority: 9, intervention_level: 'crisis', frequency: 'daily', specific_goals: [] },
      panic_attacks: { priority: 8, intervention_level: 'intensive', frequency: 'as_needed', specific_goals: [] },
      trauma_response: { priority: 9, intervention_level: 'crisis', frequency: 'weekly', specific_goals: [] },
      emergency_support: { priority: 10, intervention_level: 'crisis', frequency: 'immediate', specific_goals: [] }
    }
  });

  const [interventionSettings, setInterventionSettings] = useState({
    proactive_check_ins: true,
    crisis_monitoring: true,
    progress_tracking: true,
    goal_reminders: true,
    celebration_moments: true,
    setback_support: true,
    professional_referrals: true,
    emergency_contacts: true,
    intervention_escalation: 'automatic', // automatic, manual, hybrid
    crisis_response_time: 'immediate', // immediate, within_hour, within_day
    coaching_intensity: 'adaptive', // light, moderate, intensive, adaptive
    session_length: 'flexible' // short, medium, long, flexible
  });

  const [currentCategory, setCurrentCategory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showCrisisDialog, setShowCrisisDialog] = useState(false);

  const categories = [
    { 
      id: 'dating', 
      title: 'Dating & Early Relationships', 
      icon: <Favorite />, 
      color: '#e91e63',
      description: 'Building confidence and skills for dating success'
    },
    { 
      id: 'communication', 
      title: 'Communication & Connection', 
      icon: <Chat />, 
      color: '#2196f3',
      description: 'Developing healthy communication patterns'
    },
    { 
      id: 'emotional', 
      title: 'Emotional & Mental Health', 
      icon: <Psychology />, 
      color: '#4caf50',
      description: 'Supporting emotional well-being and mental health'
    },
    { 
      id: 'dynamics', 
      title: 'Relationship Dynamics', 
      icon: <Groups />, 
      color: '#ff9800',
      description: 'Understanding and improving relationship patterns'
    },
    { 
      id: 'transitions', 
      title: 'Life Transitions & Challenges', 
      icon: <TrendingUp />, 
      color: '#9c27b0',
      description: 'Navigating major life changes and challenges'
    },
    { 
      id: 'crisis', 
      title: 'Crisis & Emergency Support', 
      icon: <CrisisAlert />, 
      color: '#f44336',
      description: 'Immediate support for crisis situations'
    }
  ];

  const interventionLevels = [
    { value: 'light', label: 'Light Support', description: 'Gentle guidance and occasional check-ins', color: '#4caf50' },
    { value: 'moderate', label: 'Moderate Support', description: 'Regular coaching and structured guidance', color: '#2196f3' },
    { value: 'intensive', label: 'Intensive Support', description: 'Frequent sessions and comprehensive support', color: '#ff9800' },
    { value: 'crisis', label: 'Crisis Support', description: 'Immediate intervention and emergency protocols', color: '#f44336' }
  ];

  const frequencyOptions = [
    { value: 'immediate', label: 'Immediate', description: 'Real-time support when needed' },
    { value: 'daily', label: 'Daily', description: 'Daily check-ins and support' },
    { value: 'weekly', label: 'Weekly', description: 'Weekly coaching sessions' },
    { value: 'biweekly', label: 'Bi-weekly', description: 'Every two weeks' },
    { value: 'monthly', label: 'Monthly', description: 'Monthly progress reviews' },
    { value: 'as_needed', label: 'As Needed', description: 'Support when you request it' }
  ];

  useEffect(() => {
    // Calculate progress based on configured coaching areas
    const allAreas = Object.values(coachingAreas).flatMap(category => Object.values(category));
    const configuredAreas = allAreas.filter(area => area.priority > 0);
    setProgress((configuredAreas.length / allAreas.length) * 100);
  }, [coachingAreas]);

  const handleAreaChange = (category, areaKey, field, value) => {
    setCoachingAreas(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [areaKey]: {
          ...prev[category][areaKey],
          [field]: value
        }
      }
    }));
  };

  const handleSettingChange = (field, value) => {
    setInterventionSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getPriorityLabel = (value) => {
    if (value === 0) return 'Not Needed';
    if (value <= 3) return 'Low Priority';
    if (value <= 6) return 'Medium Priority';
    if (value <= 8) return 'High Priority';
    return 'Critical Priority';
  };

  const getPriorityColor = (value) => {
    if (value === 0) return '#9e9e9e';
    if (value <= 3) return '#4caf50';
    if (value <= 6) return '#ff9800';
    if (value <= 8) return '#2196f3';
    return '#f44336';
  };

  const getInterventionColor = (level) => {
    const levelData = interventionLevels.find(l => l.value === level);
    return levelData ? levelData.color : '#9e9e9e';
  };

  const addSpecificGoal = (category, areaKey, goal) => {
    if (goal.trim()) {
      handleAreaChange(category, areaKey, 'specific_goals', [
        ...coachingAreas[category][areaKey].specific_goals,
        goal.trim()
      ]);
    }
  };

  const removeSpecificGoal = (category, areaKey, index) => {
    const updatedGoals = [...coachingAreas[category][areaKey].specific_goals];
    updatedGoals.splice(index, 1);
    handleAreaChange(category, areaKey, 'specific_goals', updatedGoals);
  };

  const renderCoachingAreaCard = (category, areaKey, areaData) => {
    const areaInfo = {
      // Dating & Early Relationships
      dating_confidence: { label: 'Dating Confidence', description: 'Build confidence for dating and meeting new people' },
      conversation_skills: { label: 'Conversation Skills', description: 'Improve ability to engage in meaningful conversations' },
      first_dates: { label: 'First Date Success', description: 'Navigate first dates with confidence and authenticity' },
      online_dating: { label: 'Online Dating', description: 'Optimize online dating profiles and interactions' },
      rejection_handling: { label: 'Rejection Handling', description: 'Cope with rejection in healthy ways' },
      attraction_building: { label: 'Attraction Building', description: 'Understand and build genuine attraction' },
      dating_anxiety: { label: 'Dating Anxiety', description: 'Manage anxiety related to dating and relationships' },
      social_skills: { label: 'Social Skills', description: 'Develop general social and interpersonal skills' },
      
      // Communication & Connection
      active_listening: { label: 'Active Listening', description: 'Listen with full attention and understanding' },
      emotional_expression: { label: 'Emotional Expression', description: 'Express emotions clearly and appropriately' },
      conflict_resolution: { label: 'Conflict Resolution', description: 'Handle disagreements constructively' },
      difficult_conversations: { label: 'Difficult Conversations', description: 'Navigate challenging discussions with skill' },
      nonverbal_communication: { label: 'Nonverbal Communication', description: 'Understand and use body language effectively' },
      assertiveness: { label: 'Assertiveness', description: 'Stand up for yourself respectfully' },
      empathy_building: { label: 'Empathy Building', description: 'Develop deeper understanding of others' },
      boundary_communication: { label: 'Boundary Communication', description: 'Communicate boundaries clearly and kindly' },
      
      // Emotional & Mental Health
      emotional_regulation: { label: 'Emotional Regulation', description: 'Manage intense emotions effectively' },
      anxiety_management: { label: 'Anxiety Management', description: 'Cope with anxiety in relationships' },
      depression_support: { label: 'Depression Support', description: 'Support for depression affecting relationships' },
      self_esteem: { label: 'Self-Esteem', description: 'Build healthy self-worth and confidence' },
      jealousy_management: { label: 'Jealousy Management', description: 'Handle jealousy in healthy ways' },
      trust_issues: { label: 'Trust Issues', description: 'Work through trust difficulties' },
      abandonment_fears: { label: 'Abandonment Fears', description: 'Address fears of being left or abandoned' },
      attachment_healing: { label: 'Attachment Healing', description: 'Heal insecure attachment patterns' },
      
      // Relationship Dynamics
      intimacy_building: { label: 'Intimacy Building', description: 'Create deeper emotional and physical intimacy' },
      vulnerability_practice: { label: 'Vulnerability Practice', description: 'Practice healthy vulnerability and openness' },
      power_balance: { label: 'Power Balance', description: 'Maintain healthy power dynamics' },
      codependency: { label: 'Codependency', description: 'Address codependent relationship patterns' },
      independence_balance: { label: 'Independence Balance', description: 'Balance togetherness and independence' },
      relationship_roles: { label: 'Relationship Roles', description: 'Navigate roles and expectations' },
      commitment_readiness: { label: 'Commitment Readiness', description: 'Prepare for deeper commitment' },
      relationship_progression: { label: 'Relationship Progression', description: 'Navigate relationship milestones' },
      
      // Life Transitions & Challenges
      breakup_recovery: { label: 'Breakup Recovery', description: 'Heal and grow from relationship endings' },
      divorce_support: { label: 'Divorce Support', description: 'Navigate divorce with emotional support' },
      new_relationship: { label: 'New Relationship', description: 'Start new relationships on healthy foundations' },
      long_distance: { label: 'Long Distance', description: 'Maintain connection across distance' },
      blended_families: { label: 'Blended Families', description: 'Navigate blended family dynamics' },
      career_relationship_balance: { label: 'Career-Relationship Balance', description: 'Balance career and relationship priorities' },
      major_life_changes: { label: 'Major Life Changes', description: 'Adapt relationships during major transitions' },
      relationship_milestones: { label: 'Relationship Milestones', description: 'Navigate important relationship milestones' },
      
      // Crisis & Emergency Support
      relationship_crisis: { label: 'Relationship Crisis', description: 'Immediate support for relationship emergencies' },
      emotional_crisis: { label: 'Emotional Crisis', description: 'Crisis support for emotional emergencies' },
      abuse_support: { label: 'Abuse Support', description: 'Support for abuse situations (professional referral)' },
      suicidal_thoughts: { label: 'Suicidal Thoughts', description: 'Crisis intervention for suicidal ideation' },
      severe_depression: { label: 'Severe Depression', description: 'Support for severe depressive episodes' },
      panic_attacks: { label: 'Panic Attacks', description: 'Support during panic and anxiety attacks' },
      trauma_response: { label: 'Trauma Response', description: 'Support for trauma-related responses' },
      emergency_support: { label: 'Emergency Support', description: 'General emergency emotional support' }
    };

    const info = areaInfo[areaKey] || { label: areaKey, description: 'Relationship coaching area' };
    const isCrisisArea = category === 'crisis';

    return (
      <Card 
        key={areaKey} 
        sx={{ 
          mb: 3, 
          border: areaData.priority > 6 ? `2px solid ${getPriorityColor(areaData.priority)}` : '1px solid #e0e0e0',
          backgroundColor: isCrisisArea ? '#fff3e0' : 'white'
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: isCrisisArea ? '#f44336' : 'inherit' }}>
                {info.label}
                {isCrisisArea && <CrisisAlert sx={{ ml: 1, color: '#f44336' }} />}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {info.description}
              </Typography>
            </Box>
            <Chip 
              label={getPriorityLabel(areaData.priority)}
              size="small"
              sx={{ 
                backgroundColor: getPriorityColor(areaData.priority),
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Priority Level: {areaData.priority}/10
              </Typography>
              <Slider
                value={areaData.priority}
                onChange={(e, newValue) => handleAreaChange(category, areaKey, 'priority', newValue)}
                min={0}
                max={10}
                step={1}
                marks={[
                  { value: 0, label: 'None' },
                  { value: 3, label: 'Low' },
                  { value: 6, label: 'Med' },
                  { value: 8, label: 'High' },
                  { value: 10, label: 'Critical' }
                ]}
                valueLabelDisplay="auto"
                sx={{ color: getPriorityColor(areaData.priority), mb: 3 }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Intervention Level</InputLabel>
                <Select
                  value={areaData.intervention_level}
                  onChange={(e) => handleAreaChange(category, areaKey, 'intervention_level', e.target.value)}
                  label="Intervention Level"
                >
                  {interventionLevels.map(level => (
                    <MenuItem key={level.value} value={level.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box 
                          sx={{ 
                            width: 12, 
                            height: 12, 
                            borderRadius: '50%', 
                            backgroundColor: level.color, 
                            mr: 1 
                          }} 
                        />
                        {level.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={4}>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Frequency</InputLabel>
                <Select
                  value={areaData.frequency}
                  onChange={(e) => handleAreaChange(category, areaKey, 'frequency', e.target.value)}
                  label="Frequency"
                >
                  {frequencyOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Specific Goals */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Specific Goals & Focus Areas
            </Typography>
            
            {areaData.specific_goals.map((goal, index) => (
              <Chip
                key={index}
                label={goal}
                onDelete={() => removeSpecificGoal(category, areaKey, index)}
                sx={{ mr: 1, mb: 1 }}
                variant="outlined"
              />
            ))}
            
            <Box sx={{ display: 'flex', mt: 2 }}>
              <TextField
                size="small"
                placeholder="Add specific goal or focus area..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addSpecificGoal(category, areaKey, e.target.value);
                    e.target.value = '';
                  }
                }}
                sx={{ flexGrow: 1, mr: 1 }}
              />
              <Button
                variant="outlined"
                size="small"
                onClick={(e) => {
                  const input = e.target.parentElement.previousElementSibling.querySelector('input');
                  addSpecificGoal(category, areaKey, input.value);
                  input.value = '';
                }}
                startIcon={<Add />}
              >
                Add
              </Button>
            </Box>
          </Box>

          {/* Crisis Area Warning */}
          {isCrisisArea && areaData.priority > 0 && (
            <Alert severity="warning" sx={{ mt: 3 }}>
              <Typography variant="body2">
                <strong>Crisis Support Notice:</strong> This area involves crisis intervention. 
                Professional mental health resources will be provided, and emergency protocols may be activated when needed.
              </Typography>
            </Alert>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderCurrentCategory = () => {
    const categoryKey = categories[currentCategory].id;
    const categoryAreas = coachingAreas[categoryKey];

    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: categories[currentCategory].color }}>
          {categories[currentCategory].title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {categories[currentCategory].description}
        </Typography>

        {Object.entries(categoryAreas).map(([areaKey, areaData]) =>
          renderCoachingAreaCard(categoryKey, areaKey, areaData)
        )}
      </Box>
    );
  };

  const renderInterventionSettings = () => (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
          Intervention & Support Settings
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.proactive_check_ins}
                    onChange={(e) => handleSettingChange('proactive_check_ins', e.target.checked)}
                  />
                }
                label="Proactive Check-ins"
              />
              <Typography variant="body2" color="text.secondary">
                AI coach will proactively check in on your progress and well-being
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.crisis_monitoring}
                    onChange={(e) => handleSettingChange('crisis_monitoring', e.target.checked)}
                  />
                }
                label="Crisis Monitoring"
              />
              <Typography variant="body2" color="text.secondary">
                Monitor for crisis situations and activate emergency protocols
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.progress_tracking}
                    onChange={(e) => handleSettingChange('progress_tracking', e.target.checked)}
                  />
                }
                label="Progress Tracking"
              />
              <Typography variant="body2" color="text.secondary">
                Track progress across all coaching areas with analytics
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.goal_reminders}
                    onChange={(e) => handleSettingChange('goal_reminders', e.target.checked)}
                  />
                }
                label="Goal Reminders"
              />
              <Typography variant="body2" color="text.secondary">
                Receive reminders about your coaching goals and action items
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.celebration_moments}
                    onChange={(e) => handleSettingChange('celebration_moments', e.target.checked)}
                  />
                }
                label="Celebration Moments"
              />
              <Typography variant="body2" color="text.secondary">
                Celebrate achievements and milestones in your growth journey
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.setback_support}
                    onChange={(e) => handleSettingChange('setback_support', e.target.checked)}
                  />
                }
                label="Setback Support"
              />
              <Typography variant="body2" color="text.secondary">
                Extra support and encouragement during difficult times
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.professional_referrals}
                    onChange={(e) => handleSettingChange('professional_referrals', e.target.checked)}
                  />
                }
                label="Professional Referrals"
              />
              <Typography variant="body2" color="text.secondary">
                Receive referrals to professional therapists when appropriate
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={interventionSettings.emergency_contacts}
                    onChange={(e) => handleSettingChange('emergency_contacts', e.target.checked)}
                  />
                }
                label="Emergency Contacts"
              />
              <Typography variant="body2" color="text.secondary">
                Access to crisis hotlines and emergency mental health resources
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Intervention Escalation</InputLabel>
              <Select
                value={interventionSettings.intervention_escalation}
                onChange={(e) => handleSettingChange('intervention_escalation', e.target.value)}
                label="Intervention Escalation"
              >
                <MenuItem value="automatic">Automatic Escalation</MenuItem>
                <MenuItem value="manual">Manual Escalation</MenuItem>
                <MenuItem value="hybrid">Hybrid Approach</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Crisis Response Time</InputLabel>
              <Select
                value={interventionSettings.crisis_response_time}
                onChange={(e) => handleSettingChange('crisis_response_time', e.target.value)}
                label="Crisis Response Time"
              >
                <MenuItem value="immediate">Immediate (Real-time)</MenuItem>
                <MenuItem value="within_hour">Within 1 Hour</MenuItem>
                <MenuItem value="within_day">Within 24 Hours</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Coaching Intensity</InputLabel>
              <Select
                value={interventionSettings.coaching_intensity}
                onChange={(e) => handleSettingChange('coaching_intensity', e.target.value)}
                label="Coaching Intensity"
              >
                <MenuItem value="light">Light Coaching</MenuItem>
                <MenuItem value="moderate">Moderate Coaching</MenuItem>
                <MenuItem value="intensive">Intensive Coaching</MenuItem>
                <MenuItem value="adaptive">Adaptive Intensity</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Session Length</InputLabel>
              <Select
                value={interventionSettings.session_length}
                onChange={(e) => handleSettingChange('session_length', e.target.value)}
                label="Session Length"
              >
                <MenuItem value="short">Short (10-15 min)</MenuItem>
                <MenuItem value="medium">Medium (20-30 min)</MenuItem>
                <MenuItem value="long">Long (45-60 min)</MenuItem>
                <MenuItem value="flexible">Flexible Length</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
    }
  };

  const handleComplete = () => {
    // Save coaching areas and navigate to next screen
    localStorage.setItem('relationshipCoachingAreas', JSON.stringify({ coachingAreas, interventionSettings }));
    console.log('Relationship Coaching Areas completed:', { coachingAreas, interventionSettings });
    // Navigate to Screen 145: AI Coach Activation & First Session
  };

  const getCoachingAreasSummary = () => {
    const allAreas = Object.values(coachingAreas).flatMap(category => Object.values(category));
    const activeAreas = allAreas.filter(area => area.priority > 0);
    const highPriorityAreas = allAreas.filter(area => area.priority >= 7);
    const crisisAreas = Object.values(coachingAreas.crisis).filter(area => area.priority > 0);
    
    return {
      totalAreas: allAreas.length,
      activeAreas: activeAreas.length,
      highPriorityAreas: highPriorityAreas.length,
      crisisAreas: crisisAreas.length,
      averagePriority: activeAreas.length > 0 ? Math.round(activeAreas.reduce((sum, area) => sum + area.priority, 0) / activeAreas.length) : 0
    };
  };

  const summary = getCoachingAreasSummary();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Relationship Coaching Areas
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Select the areas where you'd like focused coaching support
        </Typography>
        
        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)'
              }
            }} 
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {Math.round(progress)}% Areas Configured
          </Typography>
        </Box>
      </Box>

      {/* Intervention Settings */}
      {renderInterventionSettings()}

      {/* Category Navigation */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={6} md={2} key={category.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  border: currentCategory === index ? `2px solid ${category.color}` : '1px solid #e0e0e0',
                  backgroundColor: currentCategory === index ? `${category.color}10` : 'white',
                  transition: 'all 0.3s ease',
                  minHeight: 120
                }}
                onClick={() => setCurrentCategory(index)}
              >
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      mx: 'auto',
                      mb: 1,
                      backgroundColor: category.color,
                      color: 'white'
                    }}
                  >
                    {category.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontSize: '0.8rem', fontWeight: 'bold', mb: 1 }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                    {Object.values(coachingAreas[category.id]).filter(area => area.priority > 0).length} active
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Category Content */}
      {renderCurrentCategory()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentCategory === 0}
        >
          Previous Category
        </Button>

        {currentCategory < categories.length - 1 ? (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
              color: 'white'
            }}
          >
            Next Category
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleComplete}
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
              color: 'white'
            }}
          >
            Complete Coaching Setup
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Coaching Areas Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>Active Areas:</strong> {summary.activeAreas}/{summary.totalAreas}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>High Priority:</strong> {summary.highPriorityAreas}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>Crisis Areas:</strong> {summary.crisisAreas}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>Avg Priority:</strong> {summary.averagePriority}/10
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>Settings:</strong> {interventionSettings.coaching_intensity} intensity • 
          {interventionSettings.crisis_response_time} crisis response • 
          {interventionSettings.session_length} sessions
        </Typography>
      </Paper>

      {/* Crisis Support Dialog */}
      <Dialog open={showCrisisDialog} onClose={() => setShowCrisisDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CrisisAlert sx={{ mr: 1, color: '#f44336' }} />
            Crisis Support Information
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              <strong>Important:</strong> AI coaching is not a replacement for professional mental health care. 
              Crisis situations require immediate professional intervention.
            </Typography>
          </Alert>
          
          <Typography variant="h6" gutterBottom>Emergency Resources</Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            • National Suicide Prevention Lifeline: 988<br/>
            • Crisis Text Line: Text HOME to 741741<br/>
            • National Domestic Violence Hotline: 1-800-799-7233<br/>
            • Emergency Services: 911
          </Typography>
          
          <Typography variant="h6" gutterBottom>How Crisis Support Works</Typography>
          <Typography variant="body2">
            When crisis indicators are detected, the AI coach will:
            1. Provide immediate emotional support and grounding techniques
            2. Connect you with appropriate professional resources
            3. Offer to contact emergency services if needed
            4. Follow up to ensure your safety and well-being
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCrisisDialog(false)}>
            I Understand
          </Button>
        </DialogActions>
      </Dialog>

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Coaching Approach Note:</strong> Your AI coach will adapt its approach based on your cultural background, 
          personal values, and individual needs. All coaching is provided with respect for diverse relationship styles and cultural perspectives.
        </Typography>
      </Alert>
    </Container>
  );
};

export default RelationshipCoachingAreas;

