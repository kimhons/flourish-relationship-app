import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Tabs,
  Tab,
  Chip,
  Alert,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Switch,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  FormGroup,
  Divider,
  Badge,
  Rating,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Diamond as DiamondIcon,
  Workspace as WorkspaceIcon,
  Premium as PremiumIcon,
  VipRoom as VipRoomIcon,
  Crown as CrownIcon,
  EmojiEvents as TrophyIcon,
  CardMembership as MembershipIcon,
  LocalOffer as OfferIcon,
  Loyalty as LoyaltyIcon,
  Redeem as RedeemIcon,
  CardGiftcard as GiftIcon,
  Payment as PaymentIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as BankIcon,
  MonetizationOn as MoneyIcon,
  AttachMoney as DollarIcon,
  Euro as EuroIcon,
  CurrencyPound as PoundIcon,
  CurrencyYen as YenIcon,
  Receipt as ReceiptIcon,
  ShoppingCart as CartIcon,
  Store as StoreIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  Group as GroupIcon,
  Groups as GroupsIcon,
  Person as PersonIcon,
  People as PeopleIcon,
  PersonAdd as PersonAddIcon,
  SupervisorAccount as AdminIcon,
  AccountCircle as AccountIcon,
  Badge as BadgeIcon,
  ContactMail as ContactIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Message as MessageIcon,
  Chat as ChatIcon,
  Forum as ForumIcon,
  QuestionAnswer as QAIcon,
  Feedback as FeedbackIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  StarHalf as StarHalfIcon,
  StarOutline as StarOutlineIcon,
  StarRate as StarRateIcon,
  Grade as GradeIcon,
  Celebration as CelebrationIcon,
  Cake as CakeIcon,
  Event as EventIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  EventNote as EventNoteIcon,
  Schedule as ScheduleIcon,
  Today as TodayIcon,
  DateRange as DateRangeIcon,
  CalendarToday as CalendarIcon,
  AccessTime as TimeIcon,
  Alarm as AlarmIcon,
  Timer as TimerIcon,
  History as HistoryIcon,
  Update as UpdateIcon,
  Refresh as RefreshIcon,
  Sync as SyncIcon,
  AutoRenew as AutoRenewIcon,
  Cached as CachedIcon,
  Loop as LoopIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Replay as ReplayIcon,
  VolumeUp as VolumeUpIcon,
  VolumeOff as VolumeOffIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Headset as HeadsetIcon,
  Speaker as SpeakerIcon,
  Hearing as ListenIcon,
  RecordVoiceOver as VoiceIcon,
  NotificationsActive as NotificationIcon,
  Notifications as NotificationsIcon,
  Send as SendIcon,
  Reply as ReplyIcon,
  Forward as ForwardIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  Save as SaveIcon,
  Share as ShareIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Create as CreateIcon,
  ContentCopy as CopyIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  Fullscreen as FullscreenIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  CenterFocusStrong as FocusIcon,
  Tune as TuneIcon,
  Palette as PaletteIcon,
  ColorLens as ColorIcon,
  Brush as BrushIcon,
  FormatPaint as PaintIcon,
  Gradient as GradientIcon,
  Opacity as OpacityIcon,
  Brightness1 as BrightnessIcon,
  Contrast as ContrastIcon,
  Exposure as ExposureIcon,
  WbAuto as AutoIcon,
  Flash as FlashIcon,
  Highlight as HighlightIcon,
  Lens as LensIcon,
  Photo as PhotoIcon,
  PhotoCamera as CameraIcon,
  PhotoFilter as FilterIcon2,
  PhotoLibrary as LibraryIcon,
  Picture as PictureIcon,
  Slideshow as SlideshowIcon,
  Collections as CollectionsIcon,
  Burst as BurstIcon,
  Videocam as VideocamIcon,
  VideoCall as VideoCallIcon,
  VideoFile as VideoFileIcon,
  VideoLibrary as VideoLibraryIcon,
  Theaters as TheatersIcon,
  Movie as MovieIcon,
  LocalMovies as MoviesIcon,
  LiveTv as LiveTvIcon,
  OndemandVideo as OnDemandIcon,
  PlayCircleFilled as PlayCircleIcon,
  PauseCircleFilled as PauseCircleIcon,
  StopCircle as StopCircleIcon,
  PlaylistAdd as PlaylistAddIcon,
  PlaylistPlay as PlaylistPlayIcon,
  QueueMusic as QueueMusicIcon,
  Queue as QueueIcon,
  Radio as RadioIcon,
  Album as AlbumIcon,
  AudioFile as AudioFileIcon,
  AudioTrack as AudioTrackIcon,
  MusicNote as MusicNoteIcon,
  MusicVideo as MusicVideoIcon,
  NewReleases as NewReleasesIcon,
  Note as NoteIcon,
  Web as WebIcon,
  WebAsset as WebAssetIcon,
  Widgets as WidgetsIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  ExpandMore as ExpandMoreIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Close as CloseIcon,
  Done as DoneIcon,
  DoneAll as DoneAllIcon,
  Clear as ClearIcon,
  Launch as LaunchIcon,
  OpenInNew as OpenIcon,
  Security as SecurityIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  Key as KeyIcon,
  VpnKey as VpnKeyIcon,
  Fingerprint as FingerprintIcon,
  Face as FaceIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Shield as ShieldIcon,
  VerifiedUser as VerifiedIcon,
  Gavel as GavelIcon,
  Policy as PolicyIcon,
  PrivacyTip as PrivacyIcon,
  AdminPanelSettings as AdminPanelIcon,
  ManageAccounts as ManageAccountsIcon,
  Settings as SettingsIcon,
  SettingsApplications as SettingsAppsIcon,
  Tune as TuneIcon2,
  Build as BuildIcon,
  Construction as ConstructionIcon,
  Engineering as EngineeringIcon,
  Handyman as HandymanIcon,
  HomeRepairService as RepairIcon,
  BugReport as BugIcon,
  Code as CodeIcon,
  DeveloperMode as DevModeIcon,
  Terminal as TerminalIcon,
  Computer as ComputerIcon,
  Laptop as LaptopIcon,
  PhoneIphone as PhoneIcon2,
  Tablet as TabletIcon,
  Watch as WatchIcon,
  Tv as TvIcon,
  Speaker as SpeakerIcon2,
  Headphones as HeadphonesIcon,
  Mouse as MouseIcon,
  Keyboard as KeyboardIcon,
  Memory as MemoryIcon,
  Storage as StorageIcon,
  CloudQueue as CloudIcon,
  CloudDownload as CloudDownloadIcon,
  CloudUpload as CloudUploadIcon,
  CloudSync as CloudSyncIcon,
  CloudOff as CloudOffIcon,
  Backup as BackupIcon,
  Restore as RestoreIcon,
  GetApp as DownloadIcon,
  Publish as UploadIcon,
  FileDownload as FileDownloadIcon,
  FileUpload as FileUploadIcon,
  Folder as FolderIcon,
  FolderOpen as FolderOpenIcon,
  FolderShared as FolderSharedIcon,
  CreateNewFolder as NewFolderIcon,
  InsertDriveFile as FileIcon,
  Description as DocumentIcon,
  PictureAsPdf as PdfIcon,
  Image as ImageIcon,
  VideoFile as VideoIcon,
  AudioFile as AudioIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
  FileCopy as FileCopyIcon,
  ContentCut as CutIcon,
  ContentPaste as PasteIcon,
  Link as LinkIcon,
  LinkOff as LinkOffIcon,
  AttachFile as AttachIcon,
  Attachment as AttachmentIcon,
  Email as EmailIcon2,
  EmailOutlined as EmailOutlinedIcon,
  MarkEmailRead as EmailReadIcon,
  MarkEmailUnread as EmailUnreadIcon,
  Drafts as DraftsIcon,
  Send as SendIcon2,
  Inbox as InboxIcon,
  Outbox as OutboxIcon,
  MoveToInbox as MoveInboxIcon,
  Markunread as UnreadIcon,
  MarkAsUnread as MarkUnreadIcon,
  Flag as FlagIcon,
  FlagOutlined as FlagOutlinedIcon,
  Report as ReportIcon,
  ReportProblem as ReportProblemIcon,
  Block as BlockIcon,
  NotInterested as NotInterestedIcon,
  DoNotDisturb as DoNotDisturbIcon,
  DoNotDisturbOn as DoNotDisturbOnIcon,
  RemoveCircle as RemoveCircleIcon,
  RemoveCircleOutline as RemoveCircleOutlineIcon,
  AddCircle as AddCircleIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  PlusOne as PlusOneIcon,
  Exposure as ExposureIcon2,
  ExposurePlus1 as ExposurePlus1Icon,
  ExposureNeg1 as ExposureNeg1Icon,
  ExposureZero as ExposureZeroIcon,
  Looks as LooksIcon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
  Looks3 as Looks3Icon,
  Looks4 as Looks4Icon,
  Looks5 as Looks5Icon,
  Looks6 as Looks6Icon,
  Filter1 as Filter1Icon,
  Filter2 as Filter2Icon,
  Filter3 as Filter3Icon,
  Filter4 as Filter4Icon,
  Filter5 as Filter5Icon,
  Filter6 as Filter6Icon,
  Filter7 as Filter7Icon,
  Filter8 as Filter8Icon,
  Filter9 as Filter9Icon,
  Filter9Plus as Filter9PlusIcon,
  FilterList as FilterListIcon,
  FilterListOff as FilterListOffIcon,
  Sort as SortIcon2,
  SortByAlpha as SortAlphaIcon,
  ImportExport as ImportExportIcon,
  SwapVert as SwapVertIcon,
  SwapHoriz as SwapHorizIcon,
  SwapVerticalCircle as SwapVertCircleIcon,
  SwapHorizontalCircle as SwapHorizCircleIcon,
  CompareArrows as CompareArrowsIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
  ShowChart as ShowChartIcon,
  Timeline as TimelineIcon,
  MultilineChart as MultilineChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Equalizer as EqualizerIcon,
  GraphicEq as GraphicEqIcon,
  Leaderboard as LeaderboardIcon,
  Assessment as AssessmentIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  Speed as SpeedIcon,
  SpeedOutlined as SpeedOutlinedIcon,
  Dashboard as DashboardIcon,
  DashboardCustomize as DashboardCustomizeIcon,
  ViewQuilt as ViewQuiltIcon,
  ViewModule as ViewModuleIcon2,
  ViewList as ViewListIcon2,
  ViewHeadline as ViewHeadlineIcon,
  ViewStream as ViewStreamIcon,
  ViewColumn as ViewColumnIcon,
  ViewCarousel as ViewCarouselIcon,
  ViewComfy as ViewComfyIcon,
  ViewCompact as ViewCompactIcon,
  ViewAgenda as ViewAgendaIcon,
  ViewArray as ViewArrayIcon,
  ViewDay as ViewDayIcon,
  ViewWeek as ViewWeekIcon,
  CalendarViewDay as CalendarViewDayIcon,
  CalendarViewWeek as CalendarViewWeekIcon,
  CalendarViewMonth as CalendarViewMonthIcon,
  EventSeat as EventSeatIcon,
  EventRepeat as EventRepeatIcon,
  Repeat as RepeatIcon2,
  RepeatOne as RepeatOneIcon,
  RepeatOn as RepeatOnIcon,
  Shuffle as ShuffleIcon2,
  ShuffleOn as ShuffleOnIcon,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  Forward10 as Forward10Icon,
  Forward30 as Forward30Icon,
  Forward5 as Forward5Icon,
  Replay10 as Replay10Icon,
  Replay30 as Replay30Icon,
  Replay5 as Replay5Icon,
  SlowMotionVideo as SlowMotionIcon,
  HighSpeed as HighSpeedIcon,
  PlayArrow as PlayIcon2,
  Pause as PauseIcon2,
  Stop as StopIcon2,
  Replay as ReplayIcon2,
  PlayDisabled as PlayDisabledIcon,
  PausePresentation as PausePresentationIcon,
  PresentToAll as PresentToAllIcon,
  CastForEducation as CastEducationIcon,
  Cast as CastIcon,
  CastConnected as CastConnectedIcon,
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
  AirPlay as AirPlayIcon,
  Duo as DuoIcon,
  VideoCall as VideoCallIcon2,
  CallEnd as CallEndIcon,
  Call as CallIcon,
  CallMade as CallMadeIcon,
  CallReceived as CallReceivedIcon,
  CallMissed as CallMissedIcon,
  CallMissedOutgoing as CallMissedOutgoingIcon,
  PhoneCallback as PhoneCallbackIcon,
  PhoneForwarded as PhoneForwardedIcon,
  PhoneInTalk as PhoneInTalkIcon,
  PhoneLocked as PhoneLockedIcon,
  PhoneMissed as PhoneMissedIcon,
  PhonePaused as PhonePausedIcon,
  Phonelink as PhonelinkIcon,
  PhonelinkErase as PhonelinkEraseIcon,
  PhonelinkLock as PhonelinkLockIcon,
  PhonelinkOff as PhonelinkOffIcon,
  PhonelinkRing as PhonelinkRingIcon,
  PhonelinkSetup as PhonelinkSetupIcon,
  PortableWifiOff as PortableWifiOffIcon,
  RingVolume as RingVolumeIcon,
  VoiceChat as VoiceChatIcon,
  VoiceOverOff as VoiceOverOffIcon,
  Voicemail as VoicemailIcon,
  VolumeDown as VolumeDownIcon,
  VolumeMute as VolumeMuteIcon,
  VolumeOff as VolumeOffIcon2,
  VolumeUp as VolumeUpIcon2,
  Hearing as HearingIcon,
  HearingDisabled as HearingDisabledIcon,
  Mic as MicIcon2,
  MicOff as MicOffIcon2,
  MicNone as MicNoneIcon,
  MicExternalOff as MicExternalOffIcon,
  MicExternalOn as MicExternalOnIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  SettingsVoice as SettingsVoiceIcon,
  SurroundSound as SurroundSoundIcon,
  GraphicEq as GraphicEqIcon2,
  Equalizer as EqualizerIcon2,
  HighQuality as HighQualityIcon,
  Hd as HdIcon,
  FourK as FourKIcon,
  FiberDvr as FiberDvrIcon,
  FiberManualRecord as FiberManualRecordIcon,
  FiberNew as FiberNewIcon,
  FiberPin as FiberPinIcon,
  FiberSmartRecord as FiberSmartRecordIcon,
  Subtitles as SubtitlesIcon,
  ClosedCaption as ClosedCaptionIcon,
  ClosedCaptionDisabled as ClosedCaptionDisabledIcon,
  ClosedCaptionOff as ClosedCaptionOffIcon,
  Translate as TranslateIcon,
  GTranslate as GTranslateIcon,
  Language as LanguageIcon,
  Public as PublicIcon,
  PublicOff as PublicOffIcon,
  TravelExplore as TravelExploreIcon,
  Explore as ExploreIcon,
  ExploreOff as ExploreOffIcon,
  TourIcon,
  Map as MapIcon,
  MyLocation as MyLocationIcon,
  LocationOn as LocationOnIcon,
  LocationOff as LocationOffIcon,
  LocationSearching as LocationSearchingIcon,
  LocationDisabled as LocationDisabledIcon,
  LocationCity as LocationCityIcon,
  NearMe as NearMeIcon,
  NearMeDisabled as NearMeDisabledIcon,
  Navigation as NavigationIcon,
  Directions as DirectionsIcon,
  DirectionsBike as DirectionsBikeIcon,
  DirectionsBus as DirectionsBusIcon,
  DirectionsCar as DirectionsCarIcon,
  DirectionsRun as DirectionsRunIcon,
  DirectionsSubway as DirectionsSubwayIcon,
  DirectionsTransit as DirectionsTransitIcon,
  DirectionsWalk as DirectionsWalkIcon,
  Flight as FlightIcon,
  FlightTakeoff as FlightTakeoffIcon,
  FlightLand as FlightLandIcon,
  Hotel as HotelIcon,
  Restaurant as RestaurantIcon,
  LocalDining as LocalDiningIcon,
  LocalBar as LocalBarIcon,
  LocalCafe as LocalCafeIcon,
  LocalPizza as LocalPizzaIcon,
  LocalGroceryStore as LocalGroceryStoreIcon,
  LocalMall as LocalMallIcon,
  LocalOffer as LocalOfferIcon,
  LocalActivity as LocalActivityIcon,
  LocalAtm as LocalAtmIcon,
  LocalGasStation as LocalGasStationIcon,
  LocalHospital as LocalHospitalIcon,
  LocalLaundryService as LocalLaundryServiceIcon,
  LocalLibrary as LocalLibraryIcon,
  LocalMovies as LocalMoviesIcon2,
  LocalParking as LocalParkingIcon,
  LocalPharmacy as LocalPharmacyIcon,
  LocalPhone as LocalPhoneIcon,
  LocalPlay as LocalPlayIcon,
  LocalPostOffice as LocalPostOfficeIcon,
  LocalPrintshop as LocalPrintshopIcon,
  LocalSee as LocalSeeIcon,
  LocalShipping as LocalShippingIcon,
  LocalTaxi as LocalTaxiIcon,
  Traffic as TrafficIcon,
  Train as TrainIcon,
  Tram as TramIcon,
  TransferWithinAStation as TransferWithinAStationIcon,
  Subway as SubwayIcon,
  DirectionsBoat as DirectionsBoatIcon,
  SailingIcon,
  BeachAccess as BeachAccessIcon,
  Pool as PoolIcon,
  HotTub as HotTubIcon,
  Spa as SpaIcon,
  Casino as CasinoIcon,
  ChildCare as ChildCareIcon,
  ChildFriendly as ChildFriendlyIcon,
  FitnessCenter as FitnessCenterIcon,
  GolfCourse as GolfCourseIcon,
  Kitesurfing as KitesurfingIcon,
  NaturePeople as NaturePeopleIcon,
  Nature as NatureIcon,
  Park as ParkIcon,
  Pets as PetsIcon,
  Smoking as SmokingIcon,
  SmokeFree as SmokeFreeIcon,
  SmokingRooms as SmokingRoomsIcon,
  NoSmoking as NoSmokingIcon,
  AcUnit as AcUnitIcon,
  Airport as AirportIcon,
  AirportShuttle as AirportShuttleIcon,
  AllInclusive as AllInclusiveIcon,
  BusinessCenter as BusinessCenterIcon,
  FreeBreakfast as FreeBreakfastIcon,
  Wifi as WifiIcon2,
  WifiOff as WifiOffIcon2,
  RoomService as RoomServiceIcon,
  MeetingRoom as MeetingRoomIcon,
  KingBed as KingBedIcon,
  SingleBed as SingleBedIcon,
  Bathtub as BathtubIcon,
  Shower as ShowerIcon,
  Kitchen as KitchenIcon,
  Microwave as MicrowaveIcon,
  Blender as BlenderIcon,
  CoffeeMaker as CoffeeMakerIcon,
  RiceBowl as RiceBowlIcon,
  Tapas as TapasIcon,
  Cake as CakeIcon2,
  Icecream as IcecreamIcon,
  LocalBar as LocalBarIcon2,
  LocalCafe as LocalCafeIcon2,
  LocalDining as LocalDiningIcon2,
  LocalPizza as LocalPizzaIcon2,
  LunchDining as LunchDiningIcon,
  DinnerDining as DinnerDiningIcon,
  BreakfastDining as BreakfastDiningIcon,
  BrunchDining as BrunchDiningIcon,
  Fastfood as FastfoodIcon,
  TakeoutDining as TakeoutDiningIcon,
  DeliveryDining as DeliveryDiningIcon,
  OutdoorGrill as OutdoorGrillIcon,
  SetMeal as SetMealIcon,
  Ramen as RamenIcon,
  EmojiFoodBeverage as EmojiFoodBeverageIcon,
  EmojiNature as EmojiNatureIcon,
  EmojiPeople as EmojiPeopleIcon,
  EmojiSymbols as EmojiSymbolsIcon,
  EmojiTransportation as EmojiTransportationIcon,
  EmojiEvents as EmojiEventsIcon,
  EmojiObjects as EmojiObjectsIcon,
  EmojiFlags as EmojiFlagsIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  SentimentNeutral as SentimentNeutralIcon,
  SentimentSatisfied as SentimentSatisfiedIcon,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
  SentimentVerySatisfied as SentimentVerySatisfiedIcon,
  MoodBad as MoodBadIcon,
  Mood as MoodIcon,
  Whatshot as WhatshotIcon,
  Flare as FlareIcon,
  LocalFireDepartment as LocalFireDepartmentIcon,
  Fireplace as FireplaceIcon,
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
  WbAuto as WbAutoIcon,
  WbCloudy as WbCloudyIcon,
  WbIncandescent as WbIncandescentIcon,
  WbIridescent as WbIridescentIcon,
  WbShade as WbShadeIcon,
  WbSunny as WbSunnyIcon,
  WbTwilight as WbTwilightIcon
} from '@mui/icons-material';

const PremiumFeaturesSubscriptionManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [subscriptionPlans, setSubscriptionPlans] = useState({});
  const [premiumFeatures, setPremiumFeatures] = useState({});
  const [subscriptionManagement, setSubscriptionManagement] = useState({});
  const [billingAnalytics, setBillingAnalytics] = useState({});

  // Subscription Plans Data
  useEffect(() => {
    const plans = {
      basic: {
        name: 'Basic Plan',
        price: 4.99,
        billingCycle: 'monthly',
        trialDays: 7,
        trialPrice: 0,
        features: [
          '7-day free trial included',
          'Basic matching algorithm',
          'Standard messaging',
          'Profile creation',
          'Basic safety features',
          'Mobile app access',
          'Cancel anytime during trial'
        ],
        subscribers: 45678,
        revenue: 227889.22,
        conversionRate: 18.7,
        churnRate: 6.2,
        satisfaction: 4.4,
        trialConversion: 78.3
      },
      premium: {
        name: 'Premium Plan',
        price: 24.99,
        billingCycle: 'monthly',
        features: [
          'Advanced AI matching',
          'Unlimited messaging',
          'Video calls',
          'Advanced safety features',
          'Priority support',
          'Profile boost',
          'Read receipts',
          'Advanced filters'
        ],
        subscribers: 78934,
        revenue: 1973350.66,
        conversionRate: 23.7,
        churnRate: 4.2,
        satisfaction: 4.7
      },
      enterprise: {
        name: 'Enterprise Plan',
        price: 49.99,
        billingCycle: 'monthly',
        features: [
          'All Premium features',
          'AI relationship coaching',
          'Expert therapist access',
          'Advanced analytics',
          'Custom matching criteria',
          'Concierge service',
          'Exclusive events',
          'White-glove onboarding'
        ],
        subscribers: 23456,
        revenue: 1172344.44,
        conversionRate: 34.8,
        churnRate: 2.1,
        satisfaction: 4.9
      }
    };
    setSubscriptionPlans(plans);
  }, []);

  // Premium Features Data
  useEffect(() => {
    const features = {
      aiMatching: {
        name: 'Advanced AI Matching',
        description: 'Revolutionary AI-powered matching algorithm with 96.8% accuracy',
        usage: 89.3,
        satisfaction: 4.8,
        adoptionRate: 94.7,
        tier: 'premium'
      },
      videoChat: {
        name: 'HD Video Calls',
        description: 'High-quality video calling with advanced features',
        usage: 76.4,
        satisfaction: 4.6,
        adoptionRate: 87.2,
        tier: 'premium'
      },
      aiCoaching: {
        name: 'AI Relationship Coaching',
        description: 'Personalized relationship guidance from Dr. Love',
        usage: 82.7,
        satisfaction: 4.9,
        adoptionRate: 91.5,
        tier: 'enterprise'
      },
      expertTherapist: {
        name: 'Expert Therapist Access',
        description: 'Direct access to licensed relationship therapists',
        usage: 45.8,
        satisfaction: 4.9,
        adoptionRate: 67.3,
        tier: 'enterprise'
      },
      advancedAnalytics: {
        name: 'Advanced Analytics',
        description: 'Comprehensive relationship insights and progress tracking',
        usage: 67.9,
        satisfaction: 4.7,
        adoptionRate: 78.4,
        tier: 'enterprise'
      },
      prioritySupport: {
        name: 'Priority Support',
        description: '24/7 premium customer support with instant response',
        usage: 34.2,
        satisfaction: 4.8,
        adoptionRate: 89.6,
        tier: 'premium'
      },
      exclusiveEvents: {
        name: 'Exclusive Events',
        description: 'VIP access to premium relationship events and workshops',
        usage: 23.7,
        satisfaction: 4.9,
        adoptionRate: 56.8,
        tier: 'enterprise'
      },
      conciergeService: {
        name: 'Concierge Service',
        description: 'Personal relationship concierge for premium assistance',
        usage: 18.9,
        satisfaction: 4.9,
        adoptionRate: 45.3,
        tier: 'enterprise'
      }
    };
    setPremiumFeatures(features);
  }, []);

  // Subscription Management Data
  useEffect(() => {
    const management = {
      totalSubscribers: 148068,
      monthlyRecurringRevenue: 3602484.32,
      averageRevenuePerUser: 24.33,
      customerLifetimeValue: 892.45,
      churnRate: 4.8,
      retentionRate: 95.2,
      upgradeRate: 23.7,
      downgradeRate: 3.4,
      cancellationRate: 4.8,
      reactivationRate: 12.6,
      paymentMethods: {
        creditCard: 78.9,
        paypal: 12.3,
        applePay: 5.7,
        googlePay: 2.1,
        bankTransfer: 1.0
      },
      billingCycles: {
        monthly: 67.8,
        quarterly: 18.9,
        yearly: 13.3
      },
      refundRate: 1.2,
      failedPaymentRate: 2.3,
      dunningSuccess: 87.6
    };
    setSubscriptionManagement(management);
  }, []);

  // Billing Analytics Data
  useEffect(() => {
    const analytics = {
      revenueGrowth: {
        monthly: 8.7,
        quarterly: 23.4,
        yearly: 67.8
      },
      subscriptionMetrics: {
        newSubscriptions: 12456,
        renewals: 134567,
        upgrades: 8934,
        downgrades: 2345,
        cancellations: 6789
      },
      cohortAnalysis: {
        month1Retention: 89.3,
        month3Retention: 76.4,
        month6Retention: 67.8,
        month12Retention: 58.9
      },
      priceOptimization: {
        priceElasticity: -0.8,
        optimalPricing: {
          basic: 12.99,
          premium: 29.99,
          enterprise: 59.99
        },
        revenueImpact: 23.7
      },
      competitiveAnalysis: {
        marketPosition: 'Premium',
        priceCompetitiveness: 87.6,
        featureCompetitiveness: 94.3,
        valueProposition: 91.8
      }
    };
    setBillingAnalytics(analytics);
  }, []);

  // Subscription Calculation Functions
  const calculateTotalRevenue = useCallback(() => {
    const { basic, premium, enterprise } = subscriptionPlans;
    return (basic?.revenue || 0) + (premium?.revenue || 0) + (enterprise?.revenue || 0);
  }, [subscriptionPlans]);

  const calculateAverageChurnRate = useCallback(() => {
    const { basic, premium, enterprise } = subscriptionPlans;
    const totalSubscribers = (basic?.subscribers || 0) + (premium?.subscribers || 0) + (enterprise?.subscribers || 0);
    const weightedChurn = ((basic?.churnRate || 0) * (basic?.subscribers || 0) + 
                          (premium?.churnRate || 0) * (premium?.subscribers || 0) + 
                          (enterprise?.churnRate || 0) * (enterprise?.subscribers || 0)) / totalSubscribers;
    return weightedChurn.toFixed(1);
  }, [subscriptionPlans]);

  const renderSubscriptionPlans = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StarIcon color="primary" />
        Premium Subscription Plans & Pricing Strategy
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        💎 Comprehensive subscription platform with {subscriptionManagement.totalSubscribers?.toLocaleString()} total subscribers, 
        ${(subscriptionManagement.monthlyRecurringRevenue / 1000000).toFixed(2)}M monthly recurring revenue, and {subscriptionManagement.retentionRate}% retention rate. 
        Advanced pricing optimization and subscription management.
      </Alert>

      {/* Subscription Overview */}
      <Card sx={{ 
        mb: 4, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 3 }}>
            <DiamondIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            {subscriptionManagement.totalSubscribers?.toLocaleString()}
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 1 }}>
            Total Subscribers
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Premium subscription platform
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                ${(subscriptionManagement.monthlyRecurringRevenue / 1000000).toFixed(2)}M
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Monthly Revenue
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {subscriptionManagement.retentionRate}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Retention Rate
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                ${subscriptionManagement.averageRevenuePerUser}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                ARPU
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Subscription Plans */}
      <Typography variant="h6" gutterBottom>
        Subscription Plan Comparison
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(subscriptionPlans).map(([planKey, plan], index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                border: planKey === 'premium' ? 2 : 1,
                borderColor: planKey === 'premium' ? 'primary.main' : 'divider',
                position: 'relative'
              }}
            >
              {planKey === 'premium' && (
                <Chip 
                  label="Most Popular" 
                  color="primary" 
                  sx={{ 
                    position: 'absolute', 
                    top: -10, 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    zIndex: 1
                  }} 
                />
              )}
              
              <CardContent sx={{ textAlign: 'center', pt: planKey === 'premium' ? 4 : 3 }}>
                <Avatar sx={{ 
                  width: 64, 
                  height: 64, 
                  bgcolor: planKey === 'basic' ? 'info.main' : planKey === 'premium' ? 'primary.main' : 'warning.main',
                  mx: 'auto',
                  mb: 2
                }}>
                  {planKey === 'basic' ? <StarBorderIcon sx={{ fontSize: 32 }} /> :
                   planKey === 'premium' ? <StarIcon sx={{ fontSize: 32 }} /> :
                   <DiamondIcon sx={{ fontSize: 32 }} />}
                </Avatar>
                
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  {plan.name}
                </Typography>
                
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                  ${plan.price}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  per {plan.billingCycle}
                </Typography>
                
                <List dense sx={{ mb: 3 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={feature}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
                
                <Button 
                  variant={planKey === 'premium' ? 'contained' : 'outlined'} 
                  fullWidth 
                  size="large"
                  sx={{ mb: 2 }}
                >
                  {planKey === 'basic' ? 'Start Free' : planKey === 'premium' ? 'Get Premium' : 'Go Enterprise'}
                </Button>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {(plan.subscribers / 1000).toFixed(0)}K
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Subscribers
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {plan.satisfaction}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Satisfaction
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {plan.churnRate}%
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Churn Rate
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Plan Performance Metrics */}
      <Typography variant="h6" gutterBottom>
        Plan Performance Analytics
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Revenue Distribution
              </Typography>
              
              <List>
                {Object.entries(subscriptionPlans).map(([planKey, plan], index) => {
                  const totalRevenue = calculateTotalRevenue();
                  const percentage = ((plan.revenue / totalRevenue) * 100).toFixed(1);
                  
                  return (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText 
                        primary={plan.name}
                        secondary={`$${(plan.revenue / 1000000).toFixed(2)}M`}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={parseFloat(percentage)}
                          sx={{ width: 100, height: 6, borderRadius: 3 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {percentage}%
                        </Typography>
                      </Box>
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Subscriber Distribution
              </Typography>
              
              <List>
                {Object.entries(subscriptionPlans).map(([planKey, plan], index) => {
                  const totalSubscribers = Object.values(subscriptionPlans).reduce((sum, p) => sum + p.subscribers, 0);
                  const percentage = ((plan.subscribers / totalSubscribers) * 100).toFixed(1);
                  
                  return (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemText 
                        primary={plan.name}
                        secondary={`${(plan.subscribers / 1000).toFixed(0)}K subscribers`}
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LinearProgress
                          variant="determinate"
                          value={parseFloat(percentage)}
                          sx={{ width: 100, height: 6, borderRadius: 3 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                          {percentage}%
                        </Typography>
                      </Box>
                    </ListItem>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPremiumFeatures = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DiamondIcon color="primary" />
        Premium Features & Advanced Capabilities
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        ✨ Comprehensive premium features with {Object.keys(premiumFeatures).length} advanced capabilities, 
        average {((Object.values(premiumFeatures).reduce((sum, f) => sum + f.satisfaction, 0) / Object.keys(premiumFeatures).length)).toFixed(1)} satisfaction rating, 
        and {((Object.values(premiumFeatures).reduce((sum, f) => sum + f.adoptionRate, 0) / Object.keys(premiumFeatures).length)).toFixed(1)}% average adoption rate.
      </Alert>

      {/* Premium Features Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {Object.keys(premiumFeatures).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Premium Features
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {((Object.values(premiumFeatures).reduce((sum, f) => sum + f.satisfaction, 0) / Object.keys(premiumFeatures).length)).toFixed(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg Satisfaction
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {((Object.values(premiumFeatures).reduce((sum, f) => sum + f.adoptionRate, 0) / Object.keys(premiumFeatures).length)).toFixed(1)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg Adoption Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                {((Object.values(premiumFeatures).reduce((sum, f) => sum + f.usage, 0) / Object.keys(premiumFeatures).length)).toFixed(1)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg Usage Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Premium Features Grid */}
      <Typography variant="h6" gutterBottom>
        Premium Feature Catalog
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(premiumFeatures).map(([featureKey, feature], index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: feature.tier === 'premium' ? 'primary.main' : 'warning.main',
                    width: 48,
                    height: 48
                  }}>
                    {featureKey === 'aiMatching' ? <InsightsIcon /> :
                     featureKey === 'videoChat' ? <VideocamIcon /> :
                     featureKey === 'aiCoaching' ? <PsychologyIcon /> :
                     featureKey === 'expertTherapist' ? <PersonIcon /> :
                     featureKey === 'advancedAnalytics' ? <AnalyticsIcon /> :
                     featureKey === 'prioritySupport' ? <SupportAgentIcon /> :
                     featureKey === 'exclusiveEvents' ? <EventIcon /> :
                     <ConciergeIcon />}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {feature.name}
                    </Typography>
                    <Chip 
                      label={feature.tier.toUpperCase()} 
                      size="small" 
                      color={feature.tier === 'premium' ? 'primary' : 'warning'}
                    />
                  </Box>
                  <Rating value={feature.satisfaction} readOnly precision={0.1} size="small" />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {feature.description}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Usage Rate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.usage}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={feature.usage}
                    sx={{ height: 6, borderRadius: 3, mb: 1 }}
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Adoption Rate
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.adoptionRate}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={feature.adoptionRate}
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Satisfaction: {feature.satisfaction}/5.0
                  </Typography>
                  <Chip 
                    label={feature.satisfaction >= 4.5 ? 'Excellent' : feature.satisfaction >= 4.0 ? 'Good' : 'Average'} 
                    color={feature.satisfaction >= 4.5 ? 'success' : feature.satisfaction >= 4.0 ? 'primary' : 'warning'}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderSubscriptionManagement = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SettingsIcon color="primary" />
        Subscription Management & Customer Lifecycle
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        🔧 Advanced subscription management with {subscriptionManagement.totalSubscribers?.toLocaleString()} total subscribers, 
        {subscriptionManagement.retentionRate}% retention rate, and {subscriptionManagement.upgradeRate}% upgrade rate. 
        Comprehensive customer lifecycle management and billing optimization.
      </Alert>

      {/* Subscription Management Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {subscriptionManagement.totalSubscribers?.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Subscribers
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {subscriptionManagement.retentionRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Retention Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {subscriptionManagement.upgradeRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Upgrade Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                ${subscriptionManagement.averageRevenuePerUser}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ARPU
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Subscription Management Categories */}
      <Typography variant="h6" gutterBottom>
        Subscription Management Analytics
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Payment Method Distribution
              </Typography>
              
              <List>
                {Object.entries(subscriptionManagement.paymentMethods || {}).map(([method, percentage], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {method === 'creditCard' ? <CreditCardIcon /> :
                       method === 'paypal' ? <PaymentIcon /> :
                       method === 'applePay' ? <PhoneIcon /> :
                       method === 'googlePay' ? <AndroidIcon /> :
                       <BankIcon />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={method.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      secondary={`${percentage}% of payments`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {percentage}%
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Billing Cycle Distribution
              </Typography>
              
              <List>
                {Object.entries(subscriptionManagement.billingCycles || {}).map(([cycle, percentage], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {cycle === 'monthly' ? <CalendarIcon /> :
                       cycle === 'quarterly' ? <DateRangeIcon /> :
                       <EventIcon />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                      secondary={`${percentage}% of subscriptions`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={percentage}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {percentage}%
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Customer Lifecycle Metrics
              </Typography>
              
              <List>
                {[
                  { metric: 'Retention Rate', value: subscriptionManagement.retentionRate, unit: '%', icon: <TrendingUpIcon /> },
                  { metric: 'Churn Rate', value: subscriptionManagement.churnRate, unit: '%', icon: <TrendingDownIcon /> },
                  { metric: 'Upgrade Rate', value: subscriptionManagement.upgradeRate, unit: '%', icon: <TrendingUpIcon /> },
                  { metric: 'Downgrade Rate', value: subscriptionManagement.downgradeRate, unit: '%', icon: <TrendingDownIcon /> },
                  { metric: 'Reactivation Rate', value: subscriptionManagement.reactivationRate, unit: '%', icon: <RefreshIcon /> }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.metric}
                      secondary={`${item.value}${item.unit}`}
                    />
                    <Chip 
                      label={`${item.value}${item.unit}`} 
                      color={item.metric.includes('Rate') && !item.metric.includes('Churn') && !item.metric.includes('Downgrade') ? 'success' : 'primary'}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Billing & Payment Analytics
              </Typography>
              
              <List>
                {[
                  { metric: 'Refund Rate', value: subscriptionManagement.refundRate, unit: '%', icon: <RefreshIcon /> },
                  { metric: 'Failed Payment Rate', value: subscriptionManagement.failedPaymentRate, unit: '%', icon: <ErrorIcon /> },
                  { metric: 'Dunning Success', value: subscriptionManagement.dunningSuccess, unit: '%', icon: <CheckCircleIcon /> },
                  { metric: 'Customer LTV', value: subscriptionManagement.customerLifetimeValue, unit: '', icon: <MoneyIcon /> }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.metric}
                      secondary={item.unit === '' ? `$${item.value}` : `${item.value}${item.unit}`}
                    />
                    <Chip 
                      label={item.unit === '' ? `$${item.value}` : `${item.value}${item.unit}`} 
                      color={item.metric.includes('Success') ? 'success' : item.metric.includes('Failed') ? 'error' : 'primary'}
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderBillingAnalytics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AnalyticsIcon color="primary" />
        Billing Analytics & Revenue Intelligence
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        📈 Advanced billing analytics with {billingAnalytics.revenueGrowth?.yearly}% yearly revenue growth, 
        {billingAnalytics.cohortAnalysis?.month12Retention}% 12-month retention, and {billingAnalytics.competitiveAnalysis?.valueProposition}% value proposition score. 
        Comprehensive revenue intelligence and pricing optimization.
      </Alert>

      {/* Billing Analytics Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {billingAnalytics.revenueGrowth?.yearly}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yearly Growth
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {billingAnalytics.cohortAnalysis?.month12Retention}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                12-Month Retention
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {billingAnalytics.priceOptimization?.revenueImpact}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Revenue Impact
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                {billingAnalytics.competitiveAnalysis?.valueProposition}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Value Proposition
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Billing Analytics Categories */}
      <Typography variant="h6" gutterBottom>
        Revenue & Billing Intelligence
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Revenue Growth Trends
              </Typography>
              
              <List>
                {Object.entries(billingAnalytics.revenueGrowth || {}).map(([period, growth], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <TrendingUpIcon color="success" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={period.charAt(0).toUpperCase() + period.slice(1) + ' Growth'}
                      secondary={`${growth}% growth rate`}
                    />
                    <Chip 
                      label={`+${growth}%`} 
                      color="success"
                      size="small"
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Cohort Retention Analysis
              </Typography>
              
              <List>
                {Object.entries(billingAnalytics.cohortAnalysis || {}).map(([period, retention], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <GroupIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={period.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      secondary={`${retention}% retention rate`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={retention}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {retention}%
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Subscription Metrics
              </Typography>
              
              <List>
                {Object.entries(billingAnalytics.subscriptionMetrics || {}).map(([metric, value], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {metric === 'newSubscriptions' ? <PersonAddIcon /> :
                       metric === 'renewals' ? <RefreshIcon /> :
                       metric === 'upgrades' ? <TrendingUpIcon /> :
                       metric === 'downgrades' ? <TrendingDownIcon /> :
                       <CancelIcon />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      secondary={`${(value / 1000).toFixed(0)}K ${metric.toLowerCase()}`}
                    />
                    <Typography variant="h6" color="primary.main">
                      {(value / 1000).toFixed(0)}K
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Competitive Analysis
              </Typography>
              
              <List>
                {Object.entries(billingAnalytics.competitiveAnalysis || {}).filter(([key]) => key !== 'marketPosition').map(([metric, score], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      {metric === 'priceCompetitiveness' ? <MoneyIcon /> :
                       metric === 'featureCompetitiveness' ? <StarIcon /> :
                       <TrophyIcon />}
                    </ListItemIcon>
                    <ListItemText 
                      primary={metric.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      secondary={`${score}% competitive score`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={score}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {score}%
                      </Typography>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          💎 Premium Features & Subscription Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive subscription platform with {subscriptionManagement.totalSubscribers?.toLocaleString()} total subscribers, 
          ${(subscriptionManagement.monthlyRecurringRevenue / 1000000).toFixed(2)}M monthly recurring revenue, and {subscriptionManagement.retentionRate}% retention rate. 
          Advanced premium features, subscription management, and billing analytics.
        </Typography>

        {/* Subscription Status Banner */}
        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            🚀 PREMIUM SUBSCRIPTION PLATFORM FULLY OPERATIONAL!
          </Typography>
          <Typography>
            {subscriptionManagement.totalSubscribers?.toLocaleString()} total subscribers with ${(subscriptionManagement.monthlyRecurringRevenue / 1000000).toFixed(2)}M MRR. 
            {subscriptionManagement.retentionRate}% retention rate and {subscriptionManagement.upgradeRate}% upgrade rate.
          </Typography>
        </Alert>
      </Box>

      {/* Main Content Tabs */}
      <Paper sx={{ mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            label="Subscription Plans" 
            icon={<StarIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Premium Features" 
            icon={<DiamondIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Subscription Management" 
            icon={<SettingsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Billing Analytics" 
            icon={<AnalyticsIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderSubscriptionPlans()}
          {activeTab === 1 && renderPremiumFeatures()}
          {activeTab === 2 && renderSubscriptionManagement()}
          {activeTab === 3 && renderBillingAnalytics()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Subscription Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShareIcon />}
          >
            Export Report
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<AnalyticsIcon />}
            onClick={() => setActiveTab(3)}
          >
            View Analytics
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<DiamondIcon />}
            onClick={() => setActiveTab(1)}
            sx={{ minWidth: 200 }}
          >
            Premium Features
          </Button>
        </Box>
      </Box>

      {/* Subscription Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Subscription Platform Summary
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={subscriptionManagement.retentionRate} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {subscriptionManagement.retentionRate}% Retention | {subscriptionManagement.totalSubscribers?.toLocaleString()} Subscribers | ${(subscriptionManagement.monthlyRecurringRevenue / 1000000).toFixed(2)}M MRR | {subscriptionManagement.upgradeRate}% Upgrade Rate
        </Typography>
      </Box>
    </Container>
  );
};

export default PremiumFeaturesSubscriptionManagement;

