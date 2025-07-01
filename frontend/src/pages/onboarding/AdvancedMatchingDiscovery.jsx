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
  Search,
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
  PriorityHigh,
  Favorite,
  FavoriteBorder,
  Share,
  ShareLocation,
  PersonAdd,
  PersonRemove,
  Group,
  GroupAdd,
  Groups,
  People,
  PeopleAlt,
  PeopleOutline,
  Person,
  PersonOutline,
  PersonPin,
  PersonPinCircle,
  PersonSearch,
  Face,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
  FaceRetouchingNatural,
  FaceRetouchingOff,
  Wc,
  Male,
  Female,
  Transgender,
  Engineering,
  Science,
  Biotech,
  Psychology as PsychologyIcon,
  School,
  MenuBook,
  AutoStories,
  ImportContacts,
  LibraryBooks,
  Book,
  Bookmark,
  BookmarkBorder,
  BookmarkAdd,
  BookmarkAdded,
  BookmarkRemove,
  Bookmarks,
  TurnedInNot as BookmarkOutline,
  TurnedIn as BookmarkFilled,
  Label,
  LabelImportant,
  LabelOff,
  LocalOffer,
  Loyalty,
  CardMembership,
  ConfirmationNumber,
  EventSeat,
  AirlineSeatReclineExtra,
  AirlineSeatReclineNormal,
  AirlineSeatFlat,
  AirlineSeatFlatAngled,
  AirlineSeatIndividualSuite,
  AirlineSeatLegroomExtra,
  AirlineSeatLegroomNormal,
  AirlineSeatLegroomReduced,
  FlightTakeoff,
  FlightLand,
  ConnectingAirports,
  AirplanemodeActive,
  AirplanemodeInactive,
  FlightClass,
  LuggageOutlined,
  TravelExplore,
  ExploreOff,
  Explore as ExploreIcon,
  Public,
  PublicOff,
  Language,
  Translate,
  GTranslate,
  Spellcheck,
  FindReplace,
  FindInPage as FindIcon,
  PageView,
  Preview,
  Visibility,
  VisibilityOff,
  RemoveRedEye as EyeIcon,
  Settings,
  SettingsApplications,
  SettingsBackupRestore as SettingsRestore,
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
  Tune as TuneIcon,
  Build,
  BuildCircle,
  Construction,
  Handyman,
  HomeRepairService,
  Plumbing,
  ElectricalServices,
  Carpenter,
  Architecture,
  Engineering as EngineeringIcon,
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
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  Straighten,
  Transform as TransformIcon,
  AutoFixHigh as AutoFixIcon,
  AutoFixNormal as AutoFixNormalIcon,
  AutoFixOff as AutoFixOffIcon,
  Colorize,
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
  WbIncandescent as WbIncandescentIcon,
  WbIridescent as WbIridescentIcon,
  WbSunny as WbSunnyIcon,
  WbCloudy as WbCloudyIcon,
  WbShade as WbShadeIcon,
  WbTwilight as WbTwilightIcon,
  WbFluorescent as WbFluorescentIcon,
  WbAuto as WbAutoIcon,
  Flare as FlareIcon,
  FlashOn as FlashOnIcon,
  FlashOff as FlashOffIcon,
  FlashAuto as FlashAutoIcon,
  Gradient as GradientIcon,
  Grain,
  Texture as TextureIcon,
  Dehaze,
  Blur,
  BlurOn as BlurOnIcon,
  BlurOff as BlurOffIcon,
  BlurCircular as BlurCircularIcon,
  BlurLinear as BlurLinearIcon,
  MotionPhotosOn,
  MotionPhotosOff,
  MotionPhotosPause,
  MotionPhotosAuto,
  Timelapse as TimelapseIcon,
  SlowMotionVideo as SlowMotionIcon,
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
  Looks as LooksIcon,
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
  FilterNone as FilterNoneIcon,
  FilterTiltShift,
  FilterVintage,
  Euro,
  EuroSymbol,
  AttachMoney as DollarIcon,
  MonetizationOn as MoneyIcon,
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
  Sell as SellIcon,
  ShoppingCart as CartIcon,
  ShoppingBag as BagIcon,
  ShoppingBasket,
  ShoppingCartCheckout,
  AddShoppingCart,
  RemoveShoppingCart,
  ProductionQuantityLimits,
  Inventory2,
  InventoryOutlined,
  Store as StoreIcon,
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
  LocalMovies as LocalMoviesIcon,
  TheaterComedy,
  Theaters as TheatersIcon,
  LiveTv as LiveTvIcon,
  Tv as TvIcon,
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
  CallEnd,
  Call,
  CallMade as CallMadeIcon,
  CallReceived as CallReceivedIcon,
  CallSplit as CallSplitIcon,
  CallMerge as CallMergeIcon,
  PhoneCallback,
  PhoneForwarded,
  PhoneInTalk,
  PhoneLocked,
  PhoneMissed,
  PhonePaused,
  DialerSip,
  Dialpad,
  ContactPhone as ContactPhoneIcon,
  ContactMail,
  Contacts,
  PermContactCalendar,
  PermPhoneMsg,
  PhoneAndroid as PhoneAndroidIcon,
  PhoneIphone as PhoneIphoneIcon,
  PhoneBluetoothSpeaker,
  PhonelinkErase,
  PhonelinkLock,
  PhonelinkOff,
  PhonelinkRing,
  PhonelinkSetup,
  PortableWifiOff,
  RingVolume,
  VoiceChat,
  VpnLock as VpnLockIcon,
  VpnKey as VpnKeyIcon,
  Wifi,
  WifiOff as WifiOffIcon,
  WifiProtectedSetup as WifiSetupIcon,
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
  SignalWifi4Bar as SignalWifi4BarIcon,
  SignalWifi4BarLock,
  SignalWifiBad as SignalWifiBadIcon,
  SignalWifiConnectedNoInternet4 as SignalWifiNoInternetIcon,
  SignalWifiOff as SignalWifiOffIcon,
  SignalWifiStatusbar4Bar as SignalWifiStatusIcon,
  SignalWifiStatusbarConnectedNoInternet4 as SignalWifiStatusNoInternetIcon,
  SignalWifiStatusbarNull as SignalWifiStatusNullIcon,
  NetworkCell as NetworkCellIcon,
  NetworkCheck as NetworkCheckIcon,
  NetworkLocked,
  NetworkWifi as NetworkWifiIcon,
  RssFeed,
  Router as RouterIcon,
  DeviceHub as DeviceHubIcon,
  Devices as DevicesIcon,
  DevicesOther as DevicesOtherIcon,
  DeviceUnknown,
  Computer as ComputerIcon,
  Laptop as LaptopIcon,
  LaptopChromebook as ChromebookIcon,
  LaptopMac as MacbookIcon,
  LaptopWindows as WindowsLaptopIcon,
  DesktopMac as iMacIcon,
  DesktopWindows as WindowsDesktopIcon,
  Tablet as TabletIcon,
  TabletAndroid as AndroidTabletIcon,
  TabletMac as iPadIcon,
  Watch as WatchIcon,
  WatchLater,
  WatchOff,
  SmartWatch,
  Smartphone,
  PhonelinkSetup as PhonelinkIcon,
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
  Storage as StorageIcon,
  SdStorage,
  SdCard,
  SdCardAlert,
  SimCard,
  SimCardAlert,
  SimCardDownload,
  MobileFriendly,
  MobileOff,
  TabletAndroid as TabletAndroidIcon,
  TabletMac as TabletMacIcon,
  LaptopChromebook as LaptopChromebookIcon,
  LaptopMac as LaptopMacIcon,
  LaptopWindows as LaptopWindowsIcon,
  DesktopMac as DesktopMacIcon,
  DesktopWindows as DesktopWindowsIcon,
  Keyboard as KeyboardIcon,
  KeyboardAlt,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  KeyboardBackspace,
  KeyboardCapslock,
  KeyboardHide,
  KeyboardReturn,
  KeyboardTab,
  KeyboardVoice,
  Mouse as MouseIcon,
  Gamepad,
  Games as GamesIcon,
  SportsEsports as EsportsIcon,
  VideogameAsset as GameIcon,
  VideogameAssetOff,
  Casino as CasinoIcon,
  Toys as ToysIcon,
  Extension as ExtensionIcon,
  Puzzle as PuzzleIcon,
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
  Memory as MemoryIcon,
  Dns,
  Http,
  Https as HttpsIcon,
  Api,
  CloudQueue,
  CloudDone as CloudDoneIcon,
  CloudDownload,
  CloudUpload as CloudUploadIcon,
  CloudOff,
  CloudSync,
  CloudCircle,
  Backup as BackupIcon,
  BackupTable as BackupTableIcon,
  Restore as RestoreIcon,
  RestorePage as RestorePageIcon,
  RestoreFromTrash as RestoreFromTrashIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  FileUpload as FileUploadIcon,
  FileDownload,
  FileDownloadDone,
  FileDownloadOff,
  GetApp as GetAppIcon,
  Publish as PublishIcon,
  CloudBackup as CloudBackupIcon,
  SettingsBackupRestore as SettingsBackupRestoreIcon,
  Sync as SyncIcon,
  SyncAlt as SyncAltIcon,
  SyncDisabled as SyncDisabledIcon,
  SyncLock as SyncLockIcon,
  SyncProblem as SyncProblemIcon,
  Update as UpdateIcon,
  SystemUpdate as SystemUpdateIcon,
  SystemUpdateAlt as SystemUpdateAltIcon,
  Upgrade as UpgradeIcon,
  NewReleases as NewReleasesIcon,
  FiberNew as FiberNewIcon,
  NewLabel as NewLabelIcon,
  InstallMobile as InstallMobileIcon,
  InstallDesktop as InstallDesktopIcon,
  AppRegistration as AppRegistrationIcon,
  AppShortcut as AppShortcutIcon,
  Apps as AppsIcon,
  AppsOutage as AppsOutageIcon,
  Extension as ExtensionIcon2,
  SpaceDashboard as SpaceDashboardIcon,
  Dashboard as DashboardIcon,
  ViewAgenda as ViewAgendaIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  ViewComfy as ViewComfyIcon,
  ViewCompact as ViewCompactIcon,
  ViewCarousel as ViewCarouselIcon,
  ViewColumn as ViewColumnIcon,
  ViewDay as ViewDayIcon,
  ViewHeadline as ViewHeadlineIcon,
  ViewInAr as ViewInArIcon,
  ViewWeek as ViewWeekIcon,
  GridView as GridViewIcon,
  Grid3x3 as Grid3x3Icon,
  Grid4x4 as Grid4x4Icon,
  GridGoldenratio as GridGoldenratioIcon,
  GridOn,
  GridOff,
  TableChart,
  TableRows,
  TableView,
  ViewArray,
  ViewStream,
  Reorder,
  DragHandle,
  DragIndicator,
  OpenWith,
  PanTool,
  PanToolAlt,
  TouchApp,
  Gesture,
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
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap as ZoomOutMapIcon,
  CenterFocusStrong,
  CenterFocusWeak,
  FilterCenterFocus as FilterCenterFocusIcon,
  MyLocation as MyLocationIcon,
  LocationOn as LocationOnIcon,
  LocationOff as LocationOffIcon,
  LocationDisabled as LocationDisabledIcon,
  LocationSearching as LocationSearchingIcon,
  NearMe as NearMeIcon,
  NearMeDisabled as NearMeDisabledIcon,
  GpsFixed as GpsFixedIcon,
  GpsNotFixed as GpsNotFixedIcon,
  GpsOff,
  PinDrop as PinDropIcon,
  Place as PlaceIcon,
  WhereToVote as WhereToVoteIcon,
  Map as MapIcon,
  Navigation as NavigationIcon,
  Explore as ExploreIcon2,
  ExploreOff as ExploreOffIcon,
  Compass as CompassIcon,
  Route as RouteIcon,
  Directions as DirectionsIcon,
  DirectionsWalk as DirectionsWalkIcon,
  DirectionsBike as DirectionsBikeIcon,
  DirectionsCar as DirectionsCarIcon,
  DirectionsBus as DirectionsBusIcon,
  DirectionsSubway as DirectionsSubwayIcon,
  DirectionsTransit as DirectionsTransitIcon,
  DirectionsRailway as DirectionsRailwayIcon,
  DirectionsBoat as DirectionsBoatIcon,
  Flight as FlightIcon,
  FlightTakeoff as FlightTakeoffIcon,
  FlightLand as FlightLandIcon,
  ConnectingAirports as ConnectingAirportsIcon,
  AirplanemodeActive as AirplanemodeActiveIcon,
  AirplanemodeInactive as AirplanemodeInactiveIcon,
  FlightClass as FlightClassIcon,
  LuggageOutlined as LuggageIcon,
  TravelExplore as TravelExploreIcon,
  Hotel as HotelIcon,
  Restaurant as RestaurantIcon,
  LocalDining as LocalDiningIcon,
  LocalBar as LocalBarIcon,
  LocalCafe as LocalCafeIcon,
  LocalPizza as LocalPizzaIcon,
  Fastfood as FastfoodIcon,
  IceCream as IceCreamIcon,
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
  Party as PartyIcon,
  Celebration as CelebrationIcon,
  Cake as CakeIcon,
  CardGiftcard as CardGiftcardIcon,
  Redeem as RedeemIcon,
  Discount as DiscountIcon,
  Sell as SellIcon2,
  Whatshot as WhatshotIcon,
  Trending as TrendingIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown,
  TrendingFlat,
  ShowChart as ShowChartIcon,
  MultilineChart as MultilineChartIcon,
  AreaChart as AreaChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutLargeIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  Poll as PollIcon,
  DataUsage as DataUsageIcon,
  Insights,
  QueryStats,
  Leaderboard,
  Speed,
  Timeline,
  Gantt,
  CalendarToday as CalendarTodayIcon,
  CalendarMonth as CalendarMonthIcon,
  DateRange as DateRangeIcon,
  Event as EventIcon,
  EventNote,
  EventAvailable,
  EventBusy,
  EventRepeat,
  Today as TodayIcon,
  Schedule as ScheduleIcon,
  AccessTime as AccessTimeIcon,
  AccessAlarm as AccessAlarmIcon,
  Alarm as AlarmIcon,
  AlarmAdd as AlarmAddIcon,
  AlarmOff as AlarmOffIcon,
  AlarmOn as AlarmOnIcon,
  AvTimer as AvTimerIcon,
  Timer as TimerIcon,
  Timer10 as Timer10Icon,
  Timer3 as Timer3Icon,
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon2,
  HourglassEmpty as HourglassEmptyIcon,
  HourglassFull as HourglassFullIcon,
  HourglassTop as HourglassTopIcon,
  HourglassBottom as HourglassBottomIcon,
  MoreTime as MoreTimeIcon,
  History as HistoryIcon,
  HistoryToggleOff as HistoryToggleOffIcon,
  Restore as RestoreIcon2,
  RestorePage as RestorePageIcon2,
  RestoreFromTrash as RestoreFromTrashIcon2,
  Autorenew as AutorenewIcon,
  Loop as LoopIcon,
  Cached as CachedIcon,
  Refresh as RefreshIcon,
  Sync as SyncIcon2,
  SyncAlt as SyncAltIcon2,
  ChangeCircle as ChangeCircleIcon,
  SwapHoriz as SwapHorizIcon,
  SwapVert as SwapVertIcon,
  SwapHorizontalCircle as SwapHorizontalCircleIcon,
  SwapVerticalCircle as SwapVerticalCircleIcon,
  CompareArrows as CompareArrowsIcon,
  ImportExport as ImportExportIcon,
  CallMade as CallMadeIcon2,
  CallReceived as CallReceivedIcon2,
  CallSplit as CallSplitIcon2,
  CallMerge as CallMergeIcon2,
  Merge as MergeIcon,
  MergeType as MergeTypeIcon,
  DriveFileMove as DriveFileMoveIcon,
  CreateNewFolder as CreateNewFolderIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  Class as ClassIcon,
  Style as StyleIcon,
  Palette as PaletteIcon,
  ColorLens as ColorLensIcon,
  Brush as BrushIcon,
  FormatPaint as FormatPaintIcon,
  Texture as TextureIcon2,
  Gradient as GradientIcon2,
  Opacity as OpacityIcon,
  Layers as LayersIcon,
  FilterNone as FilterNoneIcon2,
  Flare as FlareIcon2,
  Flash as FlashIcon,
  FlashAuto as FlashAutoIcon2,
  FlashOff as FlashOffIcon2,
  FlashOn as FlashOnIcon2,
  Highlight as HighlightIcon,
  HighlightOff as HighlightOffIcon,
  Iso as IsoIcon,
  Lens as LensIcon,
  LensBlur as LensBlurIcon,
  Looks as LooksIcon2,
  Loupe as LoupeIcon,
  Monochrome as MonochromeIcon,
  MovieCreation as MovieCreationIcon,
  MovieFilter as MovieFilterIcon,
  MusicNote as MusicNoteIcon,
  MusicOff as MusicOffIcon,
  Nature as NatureIcon,
  NaturePeople as NaturePeopleIcon,
  NearMe as NearMeIcon2,
  NetworkCell as NetworkCellIcon2,
  NetworkWifi as NetworkWifiIcon2,
  NewReleases as NewReleasesIcon2,
  NightlightRound as NightlightRoundIcon,
  NoFlash as NoFlashIcon,
  NotListedLocation as NotListedLocationIcon,
  Panorama as PanoramaIcon,
  PhotoAlbum as PhotoAlbumIcon,
  PhotoFilter as PhotoFilterIcon,
  PhotoLibrary as PhotoLibraryIcon,
  PhotoSizeSelectActual as PhotoSizeSelectActualIcon,
  PictureAsPdf as PictureAsPdfIcon,
  Portrait as PortraitIcon,
  Receipt as ReceiptIcon,
  ReceiptLong as ReceiptLongIcon,
  RecentActors as RecentActorsIcon,
  RemoveRedEye as RemoveRedEyeIcon,
  Rotate90DegreesCcw as Rotate90DegreesCcwIcon,
  Rotate90DegreesCw as Rotate90DegreesCwIcon,
  RotateLeft as RotateLeftIcon2,
  RotateRight as RotateRightIcon2,
  Scanner as ScannerIcon,
  Slideshow as SlideshowIcon,
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
  Transform as TransformIcon2,
  Tune as TuneIcon2,
  TurnedIn as TurnedInIcon,
  TurnedInNot as TurnedInNotIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  Vignette as VignetteIcon,
  WbAuto as WbAutoIcon2,
  WbCloudy as WbCloudyIcon2,
  WbIncandescent as WbIncandescentIcon2,
  WbIridescent as WbIridescentIcon2,
  WbShade as WbShadeIcon2,
  WbSunny as WbSunnyIcon2,
  WbTwilight as WbTwilightIcon2,
  Widgets as WidgetsIcon
} from '@mui/icons-material';

const AdvancedMatchingDiscovery = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [matchingProgress, setMatchingProgress] = useState(0);
  const [matchingSettings, setMatchingSettings] = useState({
    algorithmSettings: {
      personalityWeight: 25,
      valuesWeight: 30,
      lifestyleWeight: 20,
      goalsWeight: 15,
      physicalWeight: 10,
      aiLearning: true,
      adaptiveMatching: true,
      behaviorAnalysis: true,
      compatibilityThreshold: 75
    },
    discoverySettings: {
      searchRadius: 50,
      ageRange: [25, 35],
      showOnlineFirst: true,
      showNewProfiles: true,
      hideIncompatible: false,
      prioritizeVerified: true,
      diversityBoost: true,
      freshProfileBoost: true
    },
    matchingModes: {
      conservative: false,
      balanced: true,
      exploratory: false,
      aiOptimized: true
    },
    advancedFilters: {
      education: [],
      profession: [],
      interests: [],
      lifestyle: [],
      values: [],
      dealBreakers: []
    },
    matchingScore: 0
  });

  const [showAlgorithmDialog, setShowAlgorithmDialog] = useState(false);
  const [showDiscoveryDialog, setShowDiscoveryDialog] = useState(false);
  const [showAnalyticsDialog, setShowAnalyticsDialog] = useState(false);
  const [currentAnalytics, setCurrentAnalytics] = useState(null);

  // Matching algorithms
  const matchingAlgorithms = [
    {
      id: 'personality_matching',
      name: 'Personality Compatibility',
      description: 'Advanced Big Five personality analysis with relationship-specific traits',
      icon: <PsychologyIcon />,
      color: '#1976d2',
      weight: 25,
      accuracy: 92,
      features: [
        'Big Five personality assessment integration',
        'Relationship-specific trait analysis',
        'Compatibility scoring with scientific backing',
        'Personality growth tracking over time'
      ]
    },
    {
      id: 'values_alignment',
      name: 'Values & Beliefs Alignment',
      description: 'Deep values compatibility analysis for long-term relationship success',
      icon: <Balance />,
      color: '#7b1fa2',
      weight: 30,
      accuracy: 89,
      features: [
        'Core values assessment and matching',
        'Religious and spiritual compatibility',
        'Political and social values alignment',
        'Life philosophy compatibility scoring'
      ]
    },
    {
      id: 'lifestyle_compatibility',
      name: 'Lifestyle Compatibility',
      description: 'Comprehensive lifestyle matching for daily life harmony',
      icon: <Home />,
      color: '#388e3c',
      weight: 20,
      accuracy: 85,
      features: [
        'Daily routine and schedule compatibility',
        'Social activity preferences matching',
        'Health and fitness lifestyle alignment',
        'Work-life balance compatibility'
      ]
    },
    {
      id: 'goals_alignment',
      name: 'Life Goals & Aspirations',
      description: 'Future-focused matching based on life goals and relationship expectations',
      icon: <Flag />,
      color: '#f57c00',
      weight: 15,
      accuracy: 87,
      features: [
        'Career and professional goals alignment',
        'Family planning and children preferences',
        'Financial goals and lifestyle expectations',
        'Personal growth and development goals'
      ]
    },
    {
      id: 'physical_attraction',
      name: 'Physical Compatibility',
      description: 'Balanced physical attraction and compatibility assessment',
      icon: <Favorite />,
      color: '#e91e63',
      weight: 10,
      accuracy: 78,
      features: [
        'Physical attraction preferences',
        'Health and fitness compatibility',
        'Lifestyle activity preferences',
        'Intimacy and affection styles'
      ]
    }
  ];

  // Discovery modes
  const discoveryModes = [
    {
      id: 'conservative',
      name: 'Conservative Discovery',
      description: 'High compatibility threshold with proven matches',
      icon: <Shield />,
      color: '#4caf50',
      threshold: 85,
      features: [
        'Minimum 85% compatibility score',
        'Verified profiles prioritized',
        'Detailed compatibility analysis',
        'Quality over quantity approach'
      ]
    },
    {
      id: 'balanced',
      name: 'Balanced Discovery',
      description: 'Optimal balance between compatibility and variety',
      icon: <Balance />,
      color: '#1976d2',
      threshold: 75,
      features: [
        'Minimum 75% compatibility score',
        'Mix of high and moderate compatibility',
        'Diverse profile recommendations',
        'Balanced discovery approach'
      ]
    },
    {
      id: 'exploratory',
      name: 'Exploratory Discovery',
      description: 'Broader discovery with learning opportunities',
      icon: <ExploreIcon />,
      color: '#ff9800',
      threshold: 60,
      features: [
        'Minimum 60% compatibility score',
        'Diverse compatibility ranges',
        'Learning from different personalities',
        'Growth-focused matching'
      ]
    },
    {
      id: 'ai_optimized',
      name: 'AI-Optimized Discovery',
      description: 'Machine learning powered adaptive matching',
      icon: <AutoAwesome />,
      color: '#7b1fa2',
      threshold: 'adaptive',
      features: [
        'Adaptive compatibility thresholds',
        'Behavioral learning integration',
        'Success pattern recognition',
        'Continuous optimization'
      ]
    }
  ];

  // Advanced filters
  const advancedFilters = [
    {
      category: 'education',
      name: 'Education Level',
      options: [
        'High School',
        'Some College',
        'Bachelor\'s Degree',
        'Master\'s Degree',
        'Doctorate/PhD',
        'Professional Degree',
        'Trade/Technical School',
        'Other'
      ]
    },
    {
      category: 'profession',
      name: 'Profession',
      options: [
        'Technology',
        'Healthcare',
        'Education',
        'Finance',
        'Legal',
        'Creative Arts',
        'Business',
        'Engineering',
        'Science',
        'Government',
        'Non-Profit',
        'Entrepreneurship',
        'Other'
      ]
    },
    {
      category: 'interests',
      name: 'Interests & Hobbies',
      options: [
        'Travel',
        'Fitness',
        'Reading',
        'Music',
        'Art',
        'Cooking',
        'Sports',
        'Technology',
        'Nature',
        'Photography',
        'Dancing',
        'Gaming',
        'Volunteering',
        'Learning'
      ]
    },
    {
      category: 'lifestyle',
      name: 'Lifestyle Preferences',
      options: [
        'Active/Outdoorsy',
        'Homebody',
        'Social Butterfly',
        'Minimalist',
        'Luxury Lover',
        'Health Conscious',
        'Spiritual',
        'Adventurous',
        'Traditional',
        'Progressive',
        'Artistic',
        'Intellectual'
      ]
    },
    {
      category: 'values',
      name: 'Core Values',
      options: [
        'Family',
        'Career',
        'Adventure',
        'Stability',
        'Growth',
        'Creativity',
        'Service',
        'Independence',
        'Community',
        'Spirituality',
        'Achievement',
        'Balance'
      ]
    }
  ];

  // Calculate matching score
  useEffect(() => {
    const calculateMatchingScore = () => {
      let score = 0;
      let maxScore = 0;

      // Algorithm settings (40 points)
      maxScore += 40;
      const algorithmOptimization = (
        (matchingSettings.algorithmSettings.aiLearning ? 10 : 0) +
        (matchingSettings.algorithmSettings.adaptiveMatching ? 10 : 0) +
        (matchingSettings.algorithmSettings.behaviorAnalysis ? 10 : 0) +
        (matchingSettings.algorithmSettings.compatibilityThreshold >= 70 ? 10 : 5)
      );
      score += algorithmOptimization;

      // Discovery settings (30 points)
      maxScore += 30;
      const discoveryOptimization = (
        (matchingSettings.discoverySettings.prioritizeVerified ? 8 : 0) +
        (matchingSettings.discoverySettings.diversityBoost ? 7 : 0) +
        (matchingSettings.discoverySettings.freshProfileBoost ? 7 : 0) +
        (matchingSettings.discoverySettings.searchRadius > 0 ? 8 : 0)
      );
      score += discoveryOptimization;

      // Matching modes (20 points)
      maxScore += 20;
      const activeModes = Object.values(matchingSettings.matchingModes).filter(Boolean).length;
      score += Math.min(activeModes * 5, 20);

      // Advanced filters (10 points)
      maxScore += 10;
      const filterCategories = Object.values(matchingSettings.advancedFilters);
      const activeFilters = filterCategories.filter(category => category.length > 0).length;
      score += Math.min(activeFilters * 2, 10);

      const finalScore = Math.round((score / maxScore) * 100);
      setMatchingSettings(prev => ({ ...prev, matchingScore: finalScore }));
      setMatchingProgress(finalScore);
    };

    calculateMatchingScore();
  }, [matchingSettings.algorithmSettings, matchingSettings.discoverySettings, 
      matchingSettings.matchingModes, matchingSettings.advancedFilters]);

  // Update matching setting
  const updateMatchingSetting = (category, settingId, value) => {
    setMatchingSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [settingId]: value
      }
    }));
  };

  // Get matching level
  const getMatchingLevel = (score) => {
    if (score >= 95) return { level: 'AI Optimized', color: '#4caf50', icon: <AutoAwesome /> };
    if (score >= 85) return { level: 'Highly Optimized', color: '#8bc34a', icon: <TrendingUp /> };
    if (score >= 70) return { level: 'Well Optimized', color: '#ffc107', icon: <ShowChart /> };
    if (score >= 50) return { level: 'Basic Optimization', color: '#ff9800', icon: <Analytics /> };
    return { level: 'Needs Optimization', color: '#f44336', icon: <Assessment /> };
  };

  // Render matching overview
  const renderMatchingOverview = () => {
    const matchingLevel = getMatchingLevel(matchingSettings.matchingScore);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Advanced Matching & Discovery System
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={matchingProgress}
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
                  {matchingSettings.matchingScore}%
                </Typography>
                <Typography variant="body2" component="div">
                  Optimized
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={matchingLevel.icon}
              label={matchingLevel.level}
              sx={{
                backgroundColor: matchingLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Matching Algorithm Optimization
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Configure advanced matching algorithms and discovery settings for optimal compatibility matching.
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
                <PsychologyIcon />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Algorithm Power
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {Math.round((
                  (matchingSettings.algorithmSettings.aiLearning ? 25 : 0) +
                  (matchingSettings.algorithmSettings.adaptiveMatching ? 25 : 0) +
                  (matchingSettings.algorithmSettings.behaviorAnalysis ? 25 : 0) +
                  (matchingSettings.algorithmSettings.compatibilityThreshold >= 70 ? 25 : 12.5)
                ))}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                AI optimization
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
                <Search />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Discovery Range
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {matchingSettings.discoverySettings.searchRadius}mi
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Search radius
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
                <FilterAlt />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Active Filters
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f57c00', mb: 1 }}>
                {Object.values(matchingSettings.advancedFilters).filter(category => category.length > 0).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Filter categories
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
                <TrendingUp />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Compatibility
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#7b1fa2', mb: 1 }}>
                {matchingSettings.algorithmSettings.compatibilityThreshold}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Minimum threshold
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>Advanced Matching:</strong> Our AI-powered matching system uses 5 sophisticated algorithms 
            to analyze compatibility across personality, values, lifestyle, goals, and physical attraction. 
            Configure settings to optimize your matching experience.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render algorithm settings
  const renderAlgorithmSettings = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Matching Algorithm Configuration
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {matchingAlgorithms.map((algorithm) => (
          <Grid item xs={12} md={6} key={algorithm.id}>
            <Card 
              sx={{ 
                height: '100%',
                border: `2px solid ${algorithm.color}`,
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
                      backgroundColor: algorithm.color,
                      color: 'white'
                    }}
                  >
                    {algorithm.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {algorithm.name}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                      <Chip
                        label={`${algorithm.weight}% Weight`}
                        size="small"
                        sx={{
                          backgroundColor: algorithm.color,
                          color: 'white'
                        }}
                      />
                      <Chip
                        label={`${algorithm.accuracy}% Accuracy`}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: algorithm.color, color: algorithm.color }}
                      />
                    </Stack>
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {algorithm.description}
                </Typography>
                
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Algorithm Features:
                </Typography>
                <List dense>
                  {algorithm.features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: algorithm.color, fontSize: 16 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{ fontSize: '0.875rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
                
                <Box sx={{ mt: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Algorithm Weight: {algorithm.weight}%
                  </Typography>
                  <Slider
                    value={algorithm.weight}
                    onChange={(e, value) => {
                      const settingKey = algorithm.id.replace('_', '') + 'Weight';
                      updateMatchingSetting('algorithmSettings', settingKey, value);
                    }}
                    min={0}
                    max={50}
                    step={5}
                    marks
                    valueLabelDisplay="auto"
                    sx={{ color: algorithm.color }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Advanced Algorithm Settings
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.algorithmSettings.aiLearning}
                  onChange={(e) => updateMatchingSetting('algorithmSettings', 'aiLearning', e.target.checked)}
                  color="primary"
                />
              }
              label="AI Learning & Adaptation"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Enable machine learning to improve matching accuracy over time
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.algorithmSettings.adaptiveMatching}
                  onChange={(e) => updateMatchingSetting('algorithmSettings', 'adaptiveMatching', e.target.checked)}
                  color="primary"
                />
              }
              label="Adaptive Matching"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Adjust matching criteria based on your interaction patterns
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.algorithmSettings.behaviorAnalysis}
                  onChange={(e) => updateMatchingSetting('algorithmSettings', 'behaviorAnalysis', e.target.checked)}
                  color="primary"
                />
              }
              label="Behavioral Analysis"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Analyze communication patterns and preferences for better matches
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Compatibility Threshold: {matchingSettings.algorithmSettings.compatibilityThreshold}%
            </Typography>
            <Slider
              value={matchingSettings.algorithmSettings.compatibilityThreshold}
              onChange={(e, value) => updateMatchingSetting('algorithmSettings', 'compatibilityThreshold', value)}
              min={50}
              max={95}
              step={5}
              marks
              valueLabelDisplay="auto"
              color="primary"
            />
            <Typography variant="body2" color="text.secondary">
              Minimum compatibility score for match recommendations
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );

  // Render discovery settings
  const renderDiscoverySettings = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Discovery & Search Configuration
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {discoveryModes.map((mode) => {
          const isActive = matchingSettings.matchingModes[mode.id];
          
          return (
            <Grid item xs={12} md={6} key={mode.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  border: `2px solid ${isActive ? mode.color : '#e0e0e0'}`,
                  backgroundColor: isActive ? `${mode.color}10` : 'white',
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
                        backgroundColor: isActive ? mode.color : '#ccc',
                        color: 'white'
                      }}
                    >
                      {mode.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {mode.name}
                      </Typography>
                      <Chip
                        label={typeof mode.threshold === 'string' ? mode.threshold : `${mode.threshold}% min`}
                        size="small"
                        sx={{
                          backgroundColor: isActive ? mode.color : '#ccc',
                          color: 'white',
                          mt: 1
                        }}
                      />
                    </Box>
                    <Switch
                      checked={isActive}
                      onChange={(e) => updateMatchingSetting('matchingModes', mode.id, e.target.checked)}
                      color="primary"
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {mode.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Mode Features:
                  </Typography>
                  <List dense>
                    {mode.features.map((feature, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon>
                          {isActive ? (
                            <CheckCircle sx={{ color: mode.color, fontSize: 16 }} />
                          ) : (
                            <CheckCircleOutline sx={{ color: '#ccc', fontSize: 16 }} />
                          )}
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ fontSize: '0.875rem' }}
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

      <Card sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Discovery Settings
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Search Radius: {matchingSettings.discoverySettings.searchRadius} miles
            </Typography>
            <Slider
              value={matchingSettings.discoverySettings.searchRadius}
              onChange={(e, value) => updateMatchingSetting('discoverySettings', 'searchRadius', value)}
              min={5}
              max={100}
              step={5}
              marks={[
                { value: 5, label: '5mi' },
                { value: 25, label: '25mi' },
                { value: 50, label: '50mi' },
                { value: 100, label: '100mi' }
              ]}
              valueLabelDisplay="auto"
              color="primary"
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Age Range: {matchingSettings.discoverySettings.ageRange[0]} - {matchingSettings.discoverySettings.ageRange[1]}
            </Typography>
            <Slider
              value={matchingSettings.discoverySettings.ageRange}
              onChange={(e, value) => updateMatchingSetting('discoverySettings', 'ageRange', value)}
              min={18}
              max={80}
              step={1}
              marks={[
                { value: 18, label: '18' },
                { value: 30, label: '30' },
                { value: 50, label: '50' },
                { value: 80, label: '80' }
              ]}
              valueLabelDisplay="auto"
              color="primary"
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.discoverySettings.showOnlineFirst}
                  onChange={(e) => updateMatchingSetting('discoverySettings', 'showOnlineFirst', e.target.checked)}
                  color="primary"
                />
              }
              label="Show Online Users First"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Prioritize currently active users in discovery
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.discoverySettings.showNewProfiles}
                  onChange={(e) => updateMatchingSetting('discoverySettings', 'showNewProfiles', e.target.checked)}
                  color="primary"
                />
              }
              label="Show New Profiles"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Include recently joined users in recommendations
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.discoverySettings.prioritizeVerified}
                  onChange={(e) => updateMatchingSetting('discoverySettings', 'prioritizeVerified', e.target.checked)}
                  color="primary"
                />
              }
              label="Prioritize Verified Profiles"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Show verified users first for enhanced safety
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={matchingSettings.discoverySettings.diversityBoost}
                  onChange={(e) => updateMatchingSetting('discoverySettings', 'diversityBoost', e.target.checked)}
                  color="primary"
                />
              }
              label="Diversity Boost"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
              Include diverse profiles to broaden your horizons
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🎯 Advanced Matching & Discovery
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Configure sophisticated AI-powered matching algorithms and discovery settings
        </Typography>
      </Box>

      {/* Matching Overview */}
      {renderMatchingOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Algorithm Settings" />
          <Tab label="Discovery Settings" />
          <Tab label="Advanced Filters" />
          <Tab label="Analytics & Insights" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderAlgorithmSettings()}
      {selectedTab === 1 && renderDiscoverySettings()}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Advanced Filtering System
          </Typography>
          
          <Grid container spacing={3}>
            {advancedFilters.map((filter) => (
              <Grid item xs={12} md={6} key={filter.category}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {filter.name}
                  </Typography>
                  
                  <FormControl fullWidth>
                    <InputLabel>{filter.name}</InputLabel>
                    <Select
                      multiple
                      value={matchingSettings.advancedFilters[filter.category]}
                      onChange={(e) => updateMatchingSetting('advancedFilters', filter.category, e.target.value)}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} size="small" />
                          ))}
                        </Box>
                      )}
                    >
                      {filter.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {matchingSettings.advancedFilters[filter.category].length} selected
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Matching Analytics & Insights
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Algorithm Performance
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Overall Matching Efficiency: {matchingSettings.matchingScore}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={matchingSettings.matchingScore} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        92%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Algorithm Accuracy
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                        87%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Match Success Rate
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #4caf50' }}>
                <AutoAwesome sx={{ fontSize: 60, color: '#4caf50', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  AI Optimization Complete
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Your matching system is optimized with the most advanced algorithms available.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => setShowAnalyticsDialog(true)}
                  sx={{ backgroundColor: '#4caf50', mb: 2 }}
                >
                  View Detailed Analytics
                </Button>
                <Typography variant="caption" color="text.secondary">
                  Optimization level: {getMatchingLevel(matchingSettings.matchingScore).level}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          
          <Alert severity="success" sx={{ mt: 3 }}>
            <Typography variant="body2">
              <strong>Optimization Complete!</strong> Your advanced matching and discovery system is now 
              configured with industry-leading algorithms and settings for optimal compatibility matching.
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
            // Navigate to previous screen (Advanced Safety Verification)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Safety Verification
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save matching settings and continue to next screen
            localStorage.setItem('matchingSettings', JSON.stringify({
              ...matchingSettings,
              timestamp: new Date().toISOString()
            }));
            console.log('Advanced matching configuration complete - moving to next screen');
          }}
          sx={{
            background: 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)',
            color: 'white'
          }}
        >
          Continue to Communication Tools
        </Button>
      </Box>

      {/* Analytics Dialog */}
      <Dialog open={showAnalyticsDialog} onClose={() => setShowAnalyticsDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Analytics sx={{ mr: 1 }} />
            Detailed Matching Analytics
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Algorithm Performance Metrics
            </Typography>
            
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {matchingAlgorithms.map((algorithm) => (
                <Grid item xs={12} md={6} key={algorithm.id}>
                  <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar sx={{ width: 30, height: 30, mr: 1, backgroundColor: algorithm.color }}>
                        {algorithm.icon}
                      </Avatar>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {algorithm.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Weight: {algorithm.weight}% | Accuracy: {algorithm.accuracy}%
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={algorithm.accuracy} 
                      sx={{ mt: 1, height: 4, borderRadius: 2, backgroundColor: `${algorithm.color}20` }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
            
            <Typography variant="body2" color="text.secondary">
              Your matching system is performing at {matchingSettings.matchingScore}% efficiency with 
              advanced AI optimization and behavioral learning enabled.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAnalyticsDialog(false)} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Matching Notice */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Advanced Matching:</strong> Your matching system now uses the most sophisticated 
          algorithms available, combining AI learning, behavioral analysis, and multi-dimensional 
          compatibility scoring for optimal relationship matching.
        </Typography>
      </Alert>
    </Container>
  );
};

export default AdvancedMatchingDiscovery;

