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
  Avatar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
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
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails
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
  CheckCircle,
  PlayArrow,
  VolumeUp,
  VideoCall,
  Phone,
  Message,
  Schedule,
  Notifications,
  Settings,
  Help,
  Support,
  Lightbulb,
  EmojiObjects,
  Healing,
  SelfImprovement,
  Mood,
  Insights,
  Timeline as TimelineIcon,
  Assessment,
  Assignment,
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
  ThumbUp,
  QuestionAnswer,
  Forum,
  Feedback,
  CalendarToday,
  Timer,
  Alarm,
  DateRange,
  Event,
  Today,
  AccessTime,
  Celebration,
  Cake,
  CardGiftcard,
  Redeem,
  LocalOffer,
  EmojiEvents,
  WorkspacePremium,
  Diamond,
  Verified,
  Security,
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
  CrisisAlert,
  LocalHospital,
  ContactSupport,
  Emergency,
  Warning,
  Info,
  Done,
  Close,
  Refresh,
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
  VisibilityOff,
  PersonAdd,
  PersonRemove,
  Group,
  Groups,
  People,
  Person,
  AccountCircle,
  Face,
  TagFaces,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied,
  ThumbDown,
  ThumbsUpDown,
  Favorite as FavoriteIcon,
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
  School,
  Work,
  Home,
  Business,
  Store,
  ShoppingCart,
  ShoppingBag,
  Payment,
  CreditCard,
  MonetizationOn,
  AttachMoney,
  Euro,
  CurrencyYen,
  CurrencyPound,
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
  MultilineChart,
  AreaChart,
  Equalizer,
  GraphicEq,
  Poll,
  Assessment as AssessmentIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  TrendingUp as TrendingUpIcon,
  TrendingFlat,
  TrendingDown as TrendingDownIcon,
  Timeline as TimelineIcon2,
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
  Update,
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
  Close as CloseIcon,
  Done as DoneIcon,
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
  GraphicEq as GraphicEqIcon,
  Equalizer as EqualizerIcon,
  MusicNote,
  MusicOff,
  LibraryMusic,
  QueueMusic,
  PlaylistAdd,
  PlaylistPlay,
  Shuffle,
  Repeat,
  RepeatOne,
  RepeatOn,
  SkipNext,
  SkipPrevious,
  FastForward,
  FastRewind,
  PlayArrow as PlayArrowIcon,
  Pause,
  Stop,
  FiberManualRecord,
  Radio,
  Podcasts,
  Album,
  Artist,
  AudioFile,
  VideoFile,
  Movie,
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
  TrendingUp as TrendingUpIcon2,
  TrendingDown as TrendingDownIcon2,
  TrendingFlat as TrendingFlatIcon,
  ShowChart as ShowChartIcon,
  MultilineChart as MultilineChartIcon,
  AreaChart as AreaChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutLargeIcon,
  Analytics as AnalyticsIcon2,
  Assessment as AssessmentIcon2,
  Poll as PollIcon,
  Equalizer as EqualizerIcon2,
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
  FitnessCenter,
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
  Flight,
  Hotel,
  Restaurant,
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
  Autorenew,
  Loop,
  Repeat as RepeatIcon,
  RepeatOne as RepeatOneIcon,
  RepeatOn as RepeatOnIcon,
  Shuffle as ShuffleIcon,
  ShuffleOn,
  Queue,
  QueueMusic as QueueMusicIcon,
  QueuePlayNext,
  PlaylistAdd as PlaylistAddIcon,
  PlaylistAddCheck,
  PlaylistPlay as PlaylistPlayIcon,
  PlaylistRemove,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  PlayArrow as PlayArrowIcon2,
  Pause as PauseIcon,
  Stop as StopIcon,
  FiberManualRecord as FiberManualRecordIcon,
  Radio as RadioIcon,
  Podcasts as PodcastsIcon,
  Album as AlbumIcon,
  LibraryMusic as LibraryMusicIcon,
  MusicNote as MusicNoteIcon,
  MusicOff as MusicOffIcon,
  AudioFile as AudioFileIcon,
  VideoFile as VideoFileIcon,
  Movie as MovieIcon,
  Tv as TvIcon2,
  LiveTv as LiveTvIcon,
  OndemandVideo as OndemandVideoIcon,
  VideoLibrary as VideoLibraryIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  VideoCall as VideoCallIcon2,
  VideoSettings as VideoSettingsIcon,
  Theaters as TheatersIcon,
  LocalMovies as LocalMoviesIcon,
  Slideshow as SlideshowIcon,
  Photo as PhotoIcon,
  PhotoLibrary as PhotoLibraryIcon,
  PhotoCamera as PhotoCameraIcon,
  CameraAlt as CameraAltIcon,
  Camera as CameraIcon,
  CameraEnhance as CameraEnhanceIcon2,
  CameraFront as CameraFrontIcon,
  CameraRear as CameraRearIcon,
  CameraRoll as CameraRollIcon,
  Collections as CollectionsIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  Bookmark as BookmarkIcon2,
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
  LocalOffer as LocalOfferIcon2,
  Sell as SellIcon,
  NewReleases as NewReleasesIcon,
  Whatshot as WhatshotIcon,
  Trending as TrendingIcon,
  TrendingUp as TrendingUpIcon3,
  TrendingDown as TrendingDownIcon3,
  TrendingFlat as TrendingFlatIcon2,
  ShowChart as ShowChartIcon2,
  MultilineChart as MultilineChartIcon2,
  AreaChart as AreaChartIcon2,
  BarChart as BarChartIcon2,
  PieChart as PieChartIcon2,
  DonutLarge as DonutLargeIcon2,
  Analytics as AnalyticsIcon3,
  Assessment as AssessmentIcon3,
  Poll as PollIcon2,
  Equalizer as EqualizerIcon3,
  DataUsage as DataUsageIcon2,
  Storage as StorageIcon,
  CloudQueue as CloudQueueIcon,
  CloudDone as CloudDoneIcon,
  CloudDownload as CloudDownloadIcon2,
  CloudUpload as CloudUploadIcon2,
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
  Tv as TvIcon3,
  Speaker as SpeakerIcon2,
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
  SportsHandball as SportsHandballIcon,
  SportsSoccer as SportsSoccerIcon,
  SportsBasketball as SportsBasketballIcon,
  SportsFootball as SportsFootballIcon,
  SportsBaseball as SportsBaseballIcon,
  SportsTennis as SportsTennisIcon,
  SportsVolleyball as SportsVolleyballIcon,
  SportsGolf as SportsGolfIcon,
  SportsHockey as SportsHockeyIcon,
  SportsCricket as SportsCricketIcon,
  SportsRugby as SportsRugbyIcon,
  Pool as PoolIcon,
  FitnessCenter as FitnessCenterIcon,
  SelfImprovement as SelfImprovementIcon2,
  Spa as SpaIcon,
  HotTub as HotTubIcon,
  BeachAccess as BeachAccessIcon,
  KiteSurfing as KiteSurfingIcon,
  Surfing as SurfingIcon,
  Sailing as SailingIcon,
  Kayaking as KayakingIcon,
  Rowing as RowingIcon,
  DirectionsBoat as DirectionsBoatIcon,
  DirectionsBike as DirectionsBikeIcon,
  DirectionsWalk as DirectionsWalkIcon,
  DirectionsRun as DirectionsRunIcon2,
  DirectionsCar as DirectionsCarIcon,
  DirectionsBus as DirectionsBusIcon,
  DirectionsSubway as DirectionsSubwayIcon,
  DirectionsTransit as DirectionsTransitIcon,
  DirectionsRailway as DirectionsRailwayIcon,
  Flight as FlightIcon,
  Hotel as HotelIcon,
  Restaurant as RestaurantIcon,
  LocalDining as LocalDiningIcon,
  LocalBar as LocalBarIcon,
  LocalCafe as LocalCafeIcon,
  LocalPizza as LocalPizzaIcon,
  Fastfood as FastfoodIcon,
  IceCream as IceCreamIcon,
  Cake as CakeIcon2,
  LunchDining as LunchDiningIcon,
  DinnerDining as DinnerDiningIcon,
  BreakfastDining as BreakfastDiningIcon,
  BrunchDining as BrunchDiningIcon,
  RamenDining as RamenDiningIcon,
  RiceBowl as RiceBowlIcon,
  SetMeal as SetMealIcon,
  Bento as BentoIcon,
  Tapas as TapasIcon,
  Liquor as LiquorIcon,
  Wine as WineIcon,
  SportsBar as SportsBarIcon,
  NightLife as NightLifeIcon,
  LocalActivity as LocalActivityIcon,
  Attractions as AttractionsIcon,
  Festival as FestivalIcon,
  Celebration as CelebrationIcon2,
  Party as PartyIcon,
  Nightlight as NightlightIcon,
  WbSunny as WbSunnyIcon2,
  WbCloudy as WbCloudyIcon2,
  WbIncandescent as WbIncandescentIcon2,
  WbIridescent as WbIridescentIcon2,
  WbShade as WbShadeIcon2,
  WbTwilight as WbTwilightIcon2,
  Brightness1 as Brightness1Icon,
  Brightness2 as Brightness2Icon,
  Brightness3 as Brightness3Icon,
  Brightness4 as Brightness4Icon,
  Brightness5 as Brightness5Icon,
  Brightness6 as Brightness6Icon,
  Brightness7 as Brightness7Icon,
  BrightnessHigh as BrightnessHighIcon,
  BrightnessLow as BrightnessLowIcon,
  BrightnessMedium as BrightnessMediumIcon,
  BrightnessAuto as BrightnessAutoIcon,
  Flare as FlareIcon,
  Lens as LensIcon,
  WbAuto as WbAutoIcon2,
  Iso as IsoIcon2,
  CameraEnhance as CameraEnhanceIcon3,
  PhotoFilter as PhotoFilterIcon,
  Tune as TuneIcon3,
  Palette as PaletteIcon2,
  Brush as BrushIcon2,
  FormatColorFill as FormatColorFillIcon,
  FormatColorReset as FormatColorResetIcon,
  FormatColorText as FormatColorTextIcon,
  FormatPaint as FormatPaintIcon2,
  Gradient as GradientIcon2,
  Texture as TextureIcon2,
  Pattern as PatternIcon2,
  Wallpaper as WallpaperIcon,
  Image as ImageIcon,
  ImageAspectRatio as ImageAspectRatioIcon,
  ImageNotSupported as ImageNotSupportedIcon,
  ImageSearch as ImageSearchIcon,
  Crop as CropIcon,
  CropFree as CropFreeIcon,
  CropOriginal as CropOriginalIcon,
  CropSquare as CropSquareIcon,
  CropPortrait as CropPortraitIcon,
  CropLandscape as CropLandscapeIcon,
  Crop169 as Crop169Icon,
  Crop32 as Crop32Icon,
  Crop54 as Crop54Icon,
  Crop75 as Crop75Icon,
  CropDin as CropDinIcon,
  Rotate90DegreesCcw as Rotate90DegreesCcwIcon,
  Rotate90DegreesCw as Rotate90DegreesCwIcon,
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  Flip as FlipIcon,
  FlipCameraAndroid as FlipCameraAndroidIcon,
  FlipCameraIos as FlipCameraIosIcon,
  Transform as TransformIcon2,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap as ZoomOutMapIcon,
  CenterFocusStrong as CenterFocusStrongIcon,
  CenterFocusWeak as CenterFocusWeakIcon,
  FilterCenterFocus as FilterCenterFocusIcon,
  FilterTiltShift as FilterTiltShiftIcon,
  BlurOn as BlurOnIcon,
  BlurOff as BlurOffIcon,
  BlurCircular as BlurCircularIcon,
  BlurLinear as BlurLinearIcon,
  Exposure as ExposureIcon2,
  ExposurePlus1 as ExposurePlus1Icon,
  ExposurePlus2 as ExposurePlus2Icon,
  ExposureNeg1 as ExposureNeg1Icon,
  ExposureNeg2 as ExposureNeg2Icon,
  ExposureZero as ExposureZeroIcon,
  WbIncandescent as WbIncandescentIcon3,
  WbFluorescent as WbFluorescentIcon,
  WbSunny as WbSunnyIcon3,
  WbCloudy as WbCloudyIcon3,
  WbShade as WbShadeIcon3,
  WbTwilight as WbTwilightIcon3,
  WbIridescent as WbIridescentIcon3,
  WbAuto as WbAutoIcon3,
  Iso as IsoIcon3,
  Timer10 as Timer10Icon,
  Timer3 as Timer3Icon,
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon,
  SlowMotionVideo as SlowMotionVideoIcon,
  Hd as HdIcon,
  Hq as HqIcon,
  Sd as SdIcon,
  FourK as FourKIcon,
  EightK as EightKIcon,
  ThreeSixty as ThreeSixtyIcon,
  ViewInAr as ViewInArIcon,
  ThreeDRotation as ThreeDRotationIcon,
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
  Dashboard as DashboardIcon,
  DashboardCustomize as DashboardCustomizeIcon,
  SpaceDashboard as SpaceDashboardIcon,
  GridView as GridViewIcon,
  GridOn as GridOnIcon,
  GridOff as GridOffIcon,
  Grid3x3 as Grid3x3Icon,
  Grid4x4 as Grid4x4Icon,
  GridGoldenratio as GridGoldenratioIcon,
  ExpandMore
} from '@mui/icons-material';

const AICoachActivation = () => {
  const [activationStep, setActivationStep] = useState(0);
  const [isActivating, setIsActivating] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);
  const [showFirstSessionDialog, setShowFirstSessionDialog] = useState(false);
  const [coachPersonality, setCoachPersonality] = useState('adaptive');
  const [firstSessionTopic, setFirstSessionTopic] = useState('');
  const [schedulePreferences, setSchedulePreferences] = useState({
    preferred_times: ['morning', 'evening'],
    frequency: 'weekly',
    duration: 'medium',
    reminder_style: 'gentle'
  });

  const [activationProgress, setActivationProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState('');

  const activationSteps = [
    {
      id: 0,
      title: 'Welcome to Dr. Love AI Coach',
      description: 'Your personalized relationship coaching journey begins here',
      icon: <Psychology />,
      color: '#e91e63'
    },
    {
      id: 1,
      title: 'Activating AI Coach',
      description: 'Setting up your personalized coaching experience',
      icon: <SmartToy />,
      color: '#2196f3'
    },
    {
      id: 2,
      title: 'Personalizing Your Coach',
      description: 'Customizing coaching style based on your preferences',
      icon: <Tune />,
      color: '#4caf50'
    },
    {
      id: 3,
      title: 'First Session Preview',
      description: 'Experience your first coaching conversation',
      icon: <Chat />,
      color: '#ff9800'
    },
    {
      id: 4,
      title: 'Coaching Activated',
      description: 'Your AI coach is ready to support your journey',
      icon: <CheckCircle />,
      color: '#4caf50'
    }
  ];

  const coachPersonalities = [
    {
      id: 'adaptive',
      name: 'Adaptive Coach',
      description: 'Adjusts style based on your needs and mood',
      traits: ['Flexible', 'Responsive', 'Intuitive'],
      icon: <AutoAwesome />,
      color: '#2196f3'
    },
    {
      id: 'supportive',
      name: 'Supportive Coach',
      description: 'Warm, encouraging, and nurturing approach',
      traits: ['Empathetic', 'Encouraging', 'Patient'],
      icon: <Favorite />,
      color: '#e91e63'
    },
    {
      id: 'analytical',
      name: 'Analytical Coach',
      description: 'Data-driven insights and structured guidance',
      traits: ['Logical', 'Systematic', 'Insightful'],
      icon: <Analytics />,
      color: '#4caf50'
    },
    {
      id: 'motivational',
      name: 'Motivational Coach',
      description: 'Energetic and goal-focused coaching style',
      traits: ['Energetic', 'Goal-oriented', 'Inspiring'],
      icon: <TrendingUp />,
      color: '#ff9800'
    }
  ];

  const firstSessionTopics = [
    {
      id: 'assessment',
      title: 'Relationship Assessment',
      description: 'Understand your current relationship patterns and goals',
      duration: '20-30 minutes',
      icon: <Assessment />
    },
    {
      id: 'goal_setting',
      title: 'Goal Setting Session',
      description: 'Define your relationship and personal growth objectives',
      duration: '15-25 minutes',
      icon: <Assignment />
    },
    {
      id: 'communication',
      title: 'Communication Skills',
      description: 'Practice effective communication techniques',
      duration: '25-35 minutes',
      icon: <Chat />
    },
    {
      id: 'confidence',
      title: 'Building Confidence',
      description: 'Work on self-confidence and dating anxiety',
      duration: '20-30 minutes',
      icon: <SelfImprovement />
    },
    {
      id: 'custom',
      title: 'Custom Topic',
      description: 'Discuss any specific relationship challenge you\'re facing',
      duration: '15-45 minutes',
      icon: <Lightbulb />
    }
  ];

  const activationMessages = [
    'Initializing AI Coach system...',
    'Loading your personality profile...',
    'Analyzing your assessment results...',
    'Customizing coaching approach...',
    'Setting up intervention protocols...',
    'Configuring crisis support systems...',
    'Preparing first session content...',
    'Activating Dr. Love AI Coach...',
    'Welcome to your coaching journey!'
  ];

  useEffect(() => {
    if (isActivating) {
      const interval = setInterval(() => {
        setActivationProgress(prev => {
          const newProgress = prev + 12.5;
          if (newProgress >= 100) {
            setIsActivated(true);
            setIsActivating(false);
            setShowWelcomeDialog(true);
            clearInterval(interval);
            return 100;
          }
          return newProgress;
        });
      }, 800);

      const messageInterval = setInterval(() => {
        setCurrentMessage(activationMessages[Math.floor(activationProgress / 12.5)] || activationMessages[0]);
      }, 800);

      return () => {
        clearInterval(interval);
        clearInterval(messageInterval);
      };
    }
  }, [isActivating, activationProgress]);

  const handleActivation = () => {
    setIsActivating(true);
    setActivationStep(1);
    setActivationProgress(0);
  };

  const handlePersonalitySelect = (personalityId) => {
    setCoachPersonality(personalityId);
    setActivationStep(2);
  };

  const handleFirstSessionSelect = (topicId) => {
    setFirstSessionTopic(topicId);
    setShowFirstSessionDialog(true);
  };

  const handleScheduleSetup = () => {
    setActivationStep(4);
  };

  const handleComplete = () => {
    // Save activation data and navigate to next screen
    localStorage.setItem('aiCoachActivation', JSON.stringify({
      isActivated: true,
      coachPersonality,
      firstSessionTopic,
      schedulePreferences,
      activationDate: new Date().toISOString()
    }));
    console.log('AI Coach Activation completed');
    // Navigate to Profile Optimization System (Screen 146)
  };

  const renderWelcomeStep = () => (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Zoom in={true} timeout={1000}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 4,
            background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
            fontSize: '3rem'
          }}
        >
          <Psychology />
        </Avatar>
      </Zoom>

      <Fade in={true} timeout={1500}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Meet Dr. Love AI Coach
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Your personalized AI relationship coach is ready to support your journey toward healthier, 
            more fulfilling relationships. Let's activate your coaching experience.
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={3} sx={{ mt: 4, maxWidth: 800, mx: 'auto' }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, backgroundColor: '#e91e63' }}>
              <Psychology />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Personalized Coaching
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Tailored to your unique personality, goals, and relationship style
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, backgroundColor: '#2196f3' }}>
              <HealthAndSafety />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              24/7 Support
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available whenever you need guidance, with crisis support protocols
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
            <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, backgroundColor: '#4caf50' }}>
              <TrendingUp />
            </Avatar>
            <Typography variant="h6" gutterBottom>
              Growth Tracking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monitor your progress and celebrate milestones in your journey
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        size="large"
        onClick={handleActivation}
        sx={{
          mt: 6,
          px: 6,
          py: 2,
          fontSize: '1.2rem',
          background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(45deg, #c2185b 30%, #1976d2 90%)'
          }
        }}
        startIcon={<PlayArrow />}
      >
        Activate Dr. Love AI Coach
      </Button>
    </Box>
  );

  const renderActivationStep = () => (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Avatar
        sx={{
          width: 100,
          height: 100,
          mx: 'auto',
          mb: 4,
          background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
          fontSize: '2.5rem'
        }}
      >
        <SmartToy />
      </Avatar>

      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Activating Your AI Coach
      </Typography>

      <Box sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        <LinearProgress
          variant="determinate"
          value={activationProgress}
          sx={{
            height: 12,
            borderRadius: 6,
            backgroundColor: '#f0f0f0',
            '& .MuiLinearProgress-bar': {
              borderRadius: 6,
              background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)'
            }
          }}
        />
        <Typography variant="body1" sx={{ mt: 2, fontWeight: 'medium' }}>
          {Math.round(activationProgress)}% Complete
        </Typography>
      </Box>

      <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
        {currentMessage}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            border: '4px solid #2196f3',
            borderTop: '4px solid transparent',
            animation: 'spin 1s linear infinite',
            '@keyframes spin': {
              '0%': { transform: 'rotate(0deg)' },
              '100%': { transform: 'rotate(360deg)' }
            }
          }}
        />
      </Box>
    </Box>
  );

  const renderPersonalitySelection = () => (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Choose Your Coach Personality
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6, maxWidth: 600, mx: 'auto' }}>
        Select the coaching style that resonates most with you. You can change this anytime.
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: 1000, mx: 'auto' }}>
        {coachPersonalities.map((personality) => (
          <Grid item xs={12} md={6} key={personality.id}>
            <Card
              sx={{
                cursor: 'pointer',
                border: coachPersonality === personality.id ? `3px solid ${personality.color}` : '1px solid #e0e0e0',
                backgroundColor: coachPersonality === personality.id ? `${personality.color}10` : 'white',
                transition: 'all 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 3
                }
              }}
              onClick={() => handlePersonalitySelect(personality.id)}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    mb: 3,
                    backgroundColor: personality.color,
                    color: 'white'
                  }}
                >
                  {personality.icon}
                </Avatar>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {personality.name}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  {personality.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
                  {personality.traits.map((trait) => (
                    <Chip
                      key={trait}
                      label={trait}
                      size="small"
                      sx={{
                        backgroundColor: `${personality.color}20`,
                        color: personality.color,
                        fontWeight: 'medium'
                      }}
                    />
                  ))}
                </Box>
                {coachPersonality === personality.id && (
                  <Box sx={{ mt: 3 }}>
                    <CheckCircle sx={{ color: personality.color, fontSize: '2rem' }} />
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setActivationStep(3)}
          disabled={!coachPersonality}
          sx={{
            px: 6,
            py: 2,
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
          endIcon={<NavigateNext />}
        >
          Continue to First Session
        </Button>
      </Box>
    </Box>
  );

  const renderFirstSessionPreview = () => (
    <Box sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        Choose Your First Session
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mb: 6, maxWidth: 600, mx: 'auto' }}>
        What would you like to focus on in your first coaching session?
      </Typography>

      <Grid container spacing={3} sx={{ maxWidth: 1000, mx: 'auto' }}>
        {firstSessionTopics.map((topic) => (
          <Grid item xs={12} md={6} key={topic.id}>
            <Card
              sx={{
                cursor: 'pointer',
                border: firstSessionTopic === topic.id ? '3px solid #2196f3' : '1px solid #e0e0e0',
                backgroundColor: firstSessionTopic === topic.id ? '#2196f310' : 'white',
                transition: 'all 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                }
              }}
              onClick={() => handleFirstSessionSelect(topic.id)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      mr: 2,
                      backgroundColor: '#2196f3',
                      color: 'white'
                    }}
                  >
                    {topic.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {topic.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {topic.description}
                    </Typography>
                    <Chip
                      label={topic.duration}
                      size="small"
                      sx={{ backgroundColor: '#f0f0f0' }}
                    />
                  </Box>
                  {firstSessionTopic === topic.id && (
                    <CheckCircle sx={{ color: '#2196f3', ml: 1 }} />
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          onClick={handleScheduleSetup}
          disabled={!firstSessionTopic}
          sx={{
            px: 6,
            py: 2,
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
          endIcon={<NavigateNext />}
        >
          Complete Activation
        </Button>
      </Box>
    </Box>
  );

  const renderActivationComplete = () => (
    <Box sx={{ textAlign: 'center', py: 6 }}>
      <Zoom in={true} timeout={1000}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 4,
            background: 'linear-gradient(45deg, #4caf50 30%, #2196f3 90%)',
            fontSize: '3rem'
          }}
        >
          <CheckCircle />
        </Avatar>
      </Zoom>

      <Fade in={true} timeout={1500}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            🎉 Coaching Activated!
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            Your Dr. Love AI Coach is now active and ready to support your relationship journey. 
            Let's begin building the relationships you deserve.
          </Typography>
        </Box>
      </Fade>

      <Paper sx={{ p: 4, mb: 4, maxWidth: 600, mx: 'auto', backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Your Coaching Setup Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2">
              <strong>Coach Style:</strong> {coachPersonalities.find(p => p.id === coachPersonality)?.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              <strong>First Session:</strong> {firstSessionTopics.find(t => t.id === firstSessionTopic)?.title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              <strong>Frequency:</strong> {schedulePreferences.frequency}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              <strong>Duration:</strong> {schedulePreferences.duration}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => setShowFirstSessionDialog(true)}
          startIcon={<Chat />}
        >
          Start First Session
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={handleComplete}
          sx={{
            background: 'linear-gradient(45deg, #4caf50 30%, #2196f3 90%)',
            color: 'white'
          }}
          endIcon={<NavigateNext />}
        >
          Continue to Profile Setup
        </Button>
      </Stack>

      <Alert severity="success" sx={{ maxWidth: 600, mx: 'auto' }}>
        <Typography variant="body2">
          <strong>Welcome to your coaching journey!</strong> Your AI coach will adapt and learn from each interaction, 
          providing increasingly personalized support as you progress.
        </Typography>
      </Alert>
    </Box>
  );

  const renderCurrentStep = () => {
    switch (activationStep) {
      case 0:
        return renderWelcomeStep();
      case 1:
        return renderActivationStep();
      case 2:
        return renderPersonalitySelection();
      case 3:
        return renderFirstSessionPreview();
      case 4:
        return renderActivationComplete();
      default:
        return renderWelcomeStep();
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          AI Coach Activation
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Activate your personalized relationship coaching experience
        </Typography>
        
        {/* Progress Stepper */}
        <Box sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          <Stepper activeStep={activationStep} alternativeLabel>
            {activationSteps.map((step) => (
              <Step key={step.id}>
                <StepLabel
                  StepIconComponent={() => (
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: activationStep >= step.id ? step.color : '#e0e0e0',
                        color: 'white'
                      }}
                    >
                      {step.icon}
                    </Avatar>
                  )}
                >
                  <Typography variant="body2" sx={{ fontWeight: activationStep === step.id ? 'bold' : 'normal' }}>
                    {step.title}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>

      {/* Current Step Content */}
      {renderCurrentStep()}

      {/* Welcome Dialog */}
      <Dialog open={showWelcomeDialog} onClose={() => setShowWelcomeDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Psychology sx={{ mr: 1, color: '#e91e63' }} />
            Welcome to Dr. Love AI Coach!
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Congratulations! Your AI coach has been successfully activated and is ready to support your relationship journey.
          </Typography>
          
          <Typography variant="h6" gutterBottom>
            What happens next?
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText
                primary="Personalized Coaching"
                secondary="Your coach will adapt to your unique needs and preferences"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText
                primary="Progress Tracking"
                secondary="Monitor your growth and celebrate milestones"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle sx={{ color: '#4caf50' }} />
              </ListItemIcon>
              <ListItemText
                primary="24/7 Support"
                secondary="Access coaching support whenever you need it"
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowWelcomeDialog(false)} variant="contained">
            Let's Begin!
          </Button>
        </DialogActions>
      </Dialog>

      {/* First Session Dialog */}
      <Dialog open={showFirstSessionDialog} onClose={() => setShowFirstSessionDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Chat sx={{ mr: 1, color: '#2196f3' }} />
            First Coaching Session Preview
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              This is a preview of how your coaching sessions will work. Your actual sessions will be more interactive and personalized.
            </Typography>
          </Alert>
          
          <Paper sx={{ p: 3, backgroundColor: '#f8f9fa', mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Dr. Love AI Coach
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Hello! I'm excited to begin this journey with you. Based on your preferences, I've prepared a 
              {firstSessionTopics.find(t => t.id === firstSessionTopic)?.title.toLowerCase()} session.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I'll be using a {coachPersonalities.find(p => p.id === coachPersonality)?.name.toLowerCase()} approach, 
              which means I'll be {coachPersonalities.find(p => p.id === coachPersonality)?.description.toLowerCase()}.
            </Typography>
            <Typography variant="body1">
              Are you ready to explore your relationship goals and start building the connections you deserve?
            </Typography>
          </Paper>
          
          <Typography variant="body2" color="text.secondary">
            Your actual coaching sessions will include interactive exercises, personalized insights, 
            and adaptive responses based on your progress and needs.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowFirstSessionDialog(false)}>
            Close Preview
          </Button>
          <Button onClick={() => setShowFirstSessionDialog(false)} variant="contained">
            I'm Ready!
          </Button>
        </DialogActions>
      </Dialog>

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Coaching Approach Note:</strong> Your AI coach is designed to respect and adapt to diverse cultural backgrounds, 
          relationship styles, and personal values. All coaching is provided with sensitivity to your unique context and preferences.
        </Typography>
      </Alert>
    </Container>
  );
};

export default AICoachActivation;

