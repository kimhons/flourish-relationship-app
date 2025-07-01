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
  Checkbox
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Psychology,
  AutoAwesome,
  Analytics,
  Assessment,
  TrendingUp,
  Insights,
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
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
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
  Landscape
} from '@mui/icons-material';

const ProfileCompletenessScore = () => {
  const [profileData, setProfileData] = useState({});
  const [overallScore, setOverallScore] = useState(0);
  const [categoryScores, setCategoryScores] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);
  const [showOptimizationDialog, setShowOptimizationDialog] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [competitiveAnalysis, setCompetitiveAnalysis] = useState({});

  // Profile categories for comprehensive analysis
  const profileCategories = [
    {
      id: 'photos',
      name: 'Photos & Visual Appeal',
      description: 'Photo quality, variety, and visual storytelling',
      icon: <PhotoCamera />,
      color: '#e91e63',
      weight: 25,
      maxScore: 100,
      subcategories: [
        { id: 'photo_count', name: 'Photo Count', weight: 20 },
        { id: 'photo_quality', name: 'Photo Quality', weight: 25 },
        { id: 'photo_variety', name: 'Photo Variety', weight: 20 },
        { id: 'main_photo', name: 'Main Photo Appeal', weight: 25 },
        { id: 'authenticity', name: 'Authenticity', weight: 10 }
      ]
    },
    {
      id: 'bio',
      name: 'Bio & Written Content',
      description: 'Bio quality, prompts, and written expression',
      icon: <Article />,
      color: '#2196f3',
      weight: 20,
      maxScore: 100,
      subcategories: [
        { id: 'bio_completeness', name: 'Bio Completeness', weight: 30 },
        { id: 'bio_quality', name: 'Bio Quality', weight: 25 },
        { id: 'prompts', name: 'Profile Prompts', weight: 25 },
        { id: 'conversation_starters', name: 'Conversation Starters', weight: 20 }
      ]
    },
    {
      id: 'personality',
      name: 'Personality Assessment',
      description: 'Psychological assessments and personality insights',
      icon: <Psychology />,
      color: '#4caf50',
      weight: 20,
      maxScore: 100,
      subcategories: [
        { id: 'big_five', name: 'Big Five Personality', weight: 25 },
        { id: 'attachment_style', name: 'Attachment Style', weight: 20 },
        { id: 'love_languages', name: 'Love Languages', weight: 15 },
        { id: 'emotional_intelligence', name: 'Emotional Intelligence', weight: 20 },
        { id: 'values_assessment', name: 'Values Assessment', weight: 20 }
      ]
    },
    {
      id: 'preferences',
      name: 'Matching Preferences',
      description: 'Dating preferences and compatibility criteria',
      icon: <Tune />,
      color: '#ff9800',
      weight: 15,
      maxScore: 100,
      subcategories: [
        { id: 'basic_preferences', name: 'Basic Preferences', weight: 25 },
        { id: 'compatibility_criteria', name: 'Compatibility Criteria', weight: 25 },
        { id: 'relationship_style', name: 'Relationship Style', weight: 25 },
        { id: 'lifestyle_preferences', name: 'Lifestyle Preferences', weight: 25 }
      ]
    },
    {
      id: 'verification',
      name: 'Identity & Verification',
      description: 'Profile verification and authenticity measures',
      icon: <VerifiedUser />,
      color: '#9c27b0',
      weight: 10,
      maxScore: 100,
      subcategories: [
        { id: 'photo_verification', name: 'Photo Verification', weight: 40 },
        { id: 'phone_verification', name: 'Phone Verification', weight: 30 },
        { id: 'social_verification', name: 'Social Media Verification', weight: 30 }
      ]
    },
    {
      id: 'engagement',
      name: 'Engagement Potential',
      description: 'Likelihood to receive and generate meaningful interactions',
      icon: <TrendingUp />,
      color: '#607d8b',
      weight: 10,
      maxScore: 100,
      subcategories: [
        { id: 'conversation_hooks', name: 'Conversation Hooks', weight: 30 },
        { id: 'approachability', name: 'Approachability', weight: 25 },
        { id: 'uniqueness', name: 'Uniqueness Factor', weight: 25 },
        { id: 'authenticity_appeal', name: 'Authenticity Appeal', weight: 20 }
      ]
    }
  ];

  // Competitive benchmarks
  const competitiveBenchmarks = {
    hinge: {
      name: 'Hinge',
      averageScore: 72,
      strengths: ['Prompts', 'Conversation starters'],
      weaknesses: ['Limited photos', 'Basic personality insights']
    },
    bumble: {
      name: 'Bumble',
      averageScore: 68,
      strengths: ['Photo verification', 'User safety'],
      weaknesses: ['Limited personality depth', 'Basic matching']
    },
    tinder: {
      name: 'Tinder',
      averageScore: 58,
      strengths: ['Simple interface', 'Large user base'],
      weaknesses: ['Superficial matching', 'Limited profile depth']
    },
    eharmony: {
      name: 'eHarmony',
      averageScore: 78,
      strengths: ['Personality assessment', 'Compatibility matching'],
      weaknesses: ['Outdated interface', 'Limited photo options']
    }
  };

  // Load profile data from localStorage
  useEffect(() => {
    const loadProfileData = () => {
      const photos = JSON.parse(localStorage.getItem('profilePhotos') || '[]');
      const bio = JSON.parse(localStorage.getItem('profileBio') || '{}');
      const assessments = JSON.parse(localStorage.getItem('assessmentResults') || '{}');
      const preferences = JSON.parse(localStorage.getItem('matchingPreferences') || '{}');
      const verification = JSON.parse(localStorage.getItem('verificationStatus') || '{}');

      return {
        photos,
        bio,
        assessments,
        preferences,
        verification
      };
    };

    setProfileData(loadProfileData());
  }, []);

  // Calculate category scores
  const calculateCategoryScores = useCallback((data) => {
    const scores = {};

    // Photos score
    scores.photos = {
      photo_count: Math.min((data.photos?.length || 0) / 10 * 100, 100),
      photo_quality: data.photos?.reduce((sum, photo) => sum + (photo.quality || 8), 0) / (data.photos?.length || 1) * 10,
      photo_variety: Math.min((new Set(data.photos?.map(p => p.category) || []).size) / 6 * 100, 100),
      main_photo: data.photos?.find(p => p.isMain)?.quality * 10 || 0,
      authenticity: data.photos?.reduce((sum, photo) => sum + (photo.authenticity || 8), 0) / (data.photos?.length || 1) * 10
    };

    // Bio score
    scores.bio = {
      bio_completeness: Math.min((data.bio?.mainBio?.length || 0) / 500 * 100, 100),
      bio_quality: data.bio?.score || 0,
      prompts: Math.min((Object.keys(data.bio?.prompts || {}).length) / 5 * 100, 100),
      conversation_starters: Math.min((data.bio?.conversationStarters?.length || 0) / 3 * 100, 100)
    };

    // Personality score
    scores.personality = {
      big_five: data.assessments?.bigFive ? 100 : 0,
      attachment_style: data.assessments?.attachmentStyle ? 100 : 0,
      love_languages: data.assessments?.loveLanguages ? 100 : 0,
      emotional_intelligence: data.assessments?.emotionalIntelligence ? 100 : 0,
      values_assessment: data.assessments?.values ? 100 : 0
    };

    // Preferences score
    scores.preferences = {
      basic_preferences: data.preferences?.basic ? 100 : 0,
      compatibility_criteria: data.preferences?.compatibility ? 100 : 0,
      relationship_style: data.preferences?.relationshipStyle ? 100 : 0,
      lifestyle_preferences: data.preferences?.lifestyle ? 100 : 0
    };

    // Verification score
    scores.verification = {
      photo_verification: data.verification?.photo ? 100 : 0,
      phone_verification: data.verification?.phone ? 100 : 0,
      social_verification: data.verification?.social ? 100 : 0
    };

    // Engagement score
    scores.engagement = {
      conversation_hooks: Math.min((Object.keys(data.bio?.prompts || {}).length) / 3 * 100, 100),
      approachability: (scores.photos.authenticity + scores.bio.bio_quality) / 2,
      uniqueness: Math.min((data.bio?.funFacts?.length || 0) / 3 * 100, 100),
      authenticity_appeal: (scores.photos.authenticity + scores.bio.bio_quality + scores.personality.big_five) / 3
    };

    return scores;
  }, []);

  // Calculate overall score
  const calculateOverallScore = useCallback((categoryScores) => {
    let totalScore = 0;
    let totalWeight = 0;

    profileCategories.forEach(category => {
      const categoryScore = categoryScores[category.id];
      if (categoryScore) {
        let categoryAverage = 0;
        let subcategoryWeight = 0;

        category.subcategories.forEach(subcategory => {
          const score = categoryScore[subcategory.id] || 0;
          categoryAverage += score * (subcategory.weight / 100);
          subcategoryWeight += subcategory.weight;
        });

        categoryAverage = (categoryAverage / subcategoryWeight) * 100;
        totalScore += categoryAverage * (category.weight / 100);
        totalWeight += category.weight;
      }
    });

    return Math.round((totalScore / totalWeight) * 100);
  }, []);

  // Generate recommendations
  const generateRecommendations = useCallback((categoryScores, overallScore) => {
    const recommendations = [];

    // Check each category for improvement opportunities
    profileCategories.forEach(category => {
      const categoryScore = categoryScores[category.id];
      if (categoryScore) {
        let categoryAverage = 0;
        category.subcategories.forEach(subcategory => {
          categoryAverage += (categoryScore[subcategory.id] || 0) * (subcategory.weight / 100);
        });
        categoryAverage = categoryAverage / category.subcategories.length * 100;

        if (categoryAverage < 70) {
          // Find the lowest scoring subcategory
          const lowestSubcategory = category.subcategories.reduce((lowest, current) => {
            const currentScore = categoryScore[current.id] || 0;
            const lowestScore = categoryScore[lowest.id] || 0;
            return currentScore < lowestScore ? current : lowest;
          });

          recommendations.push({
            category: category.id,
            subcategory: lowestSubcategory.id,
            priority: categoryAverage < 50 ? 'high' : categoryAverage < 70 ? 'medium' : 'low',
            title: `Improve ${category.name}`,
            description: `Your ${lowestSubcategory.name.toLowerCase()} could use some attention.`,
            suggestion: getImprovementSuggestion(category.id, lowestSubcategory.id),
            icon: category.icon,
            color: category.color,
            currentScore: Math.round(categoryAverage),
            potentialIncrease: Math.round((100 - categoryAverage) * 0.3)
          });
        }
      }
    });

    // Sort by priority and potential impact
    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }
      return b.potentialIncrease - a.potentialIncrease;
    });
  }, []);

  const getImprovementSuggestion = (categoryId, subcategoryId) => {
    const suggestions = {
      photos: {
        photo_count: 'Add more photos to showcase different aspects of your life. Aim for 8-10 photos.',
        photo_quality: 'Improve photo quality with better lighting and higher resolution images.',
        photo_variety: 'Add photos from different categories: lifestyle, social, adventure, creative.',
        main_photo: 'Choose a clear, smiling headshot as your main photo.',
        authenticity: 'Use more natural, unposed photos that show your genuine personality.'
      },
      bio: {
        bio_completeness: 'Expand your bio to tell a more complete story about who you are.',
        bio_quality: 'Improve your bio with more specific details and authentic voice.',
        prompts: 'Answer more profile prompts to give conversation starters.',
        conversation_starters: 'Add specific interests or questions that make it easy to start conversations.'
      },
      personality: {
        big_five: 'Complete the Big Five personality assessment for better matching.',
        attachment_style: 'Take the attachment style assessment to understand your relationship patterns.',
        love_languages: 'Discover your love languages to improve relationship compatibility.',
        emotional_intelligence: 'Complete the emotional intelligence assessment.',
        values_assessment: 'Share your core values to find like-minded matches.'
      },
      preferences: {
        basic_preferences: 'Set your basic dating preferences for better matches.',
        compatibility_criteria: 'Define your compatibility criteria and deal-breakers.',
        relationship_style: 'Specify your relationship style and dating preferences.',
        lifestyle_preferences: 'Share your lifestyle preferences for better compatibility.'
      },
      verification: {
        photo_verification: 'Verify your photos to increase trust and credibility.',
        phone_verification: 'Verify your phone number for account security.',
        social_verification: 'Link your social media for additional verification.'
      },
      engagement: {
        conversation_hooks: 'Add more conversation starters in your prompts and bio.',
        approachability: 'Make your profile more approachable with friendly photos and bio.',
        uniqueness: 'Share unique interests or experiences that make you stand out.',
        authenticity_appeal: 'Focus on authentic self-presentation over trying to impress.'
      }
    };

    return suggestions[categoryId]?.[subcategoryId] || 'Consider improving this aspect of your profile.';
  };

  // Analyze profile
  const analyzeProfile = useCallback(async () => {
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const scores = calculateCategoryScores(profileData);
    const overall = calculateOverallScore(scores);
    const recs = generateRecommendations(scores, overall);
    
    setCategoryScores(scores);
    setOverallScore(overall);
    setRecommendations(recs);
    
    // Generate competitive analysis
    const competitive = {};
    Object.entries(competitiveBenchmarks).forEach(([platform, data]) => {
      competitive[platform] = {
        ...data,
        comparison: overall - data.averageScore,
        betterThan: overall > data.averageScore
      };
    });
    setCompetitiveAnalysis(competitive);
    
    setIsAnalyzing(false);
  }, [profileData, calculateCategoryScores, calculateOverallScore, generateRecommendations]);

  useEffect(() => {
    if (Object.keys(profileData).length > 0) {
      analyzeProfile();
    }
  }, [profileData, analyzeProfile]);

  const renderOverallScore = () => (
    <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)', color: 'white' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Profile Completeness Score
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress
            variant="determinate"
            value={overallScore}
            size={150}
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
            <Typography variant="h2" component="div" sx={{ fontWeight: 'bold' }}>
              {overallScore}
            </Typography>
            <Typography variant="h6" component="div">
              / 100
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
          {overallScore >= 90 ? 'Outstanding Profile!' : 
           overallScore >= 80 ? 'Excellent Profile!' : 
           overallScore >= 70 ? 'Great Profile!' : 
           overallScore >= 60 ? 'Good Profile' : 
           overallScore >= 50 ? 'Decent Profile' : 'Needs Improvement'}
        </Typography>
        <Typography variant="body1">
          {overallScore >= 90 ? 'Your profile is exceptional and will attract high-quality matches.' : 
           overallScore >= 80 ? 'Your profile is very strong and likely to generate meaningful connections.' : 
           overallScore >= 70 ? 'Your profile is solid with room for some improvements.' : 
           overallScore >= 60 ? 'Your profile is decent but could benefit from optimization.' : 
           overallScore >= 50 ? 'Your profile needs some work to reach its potential.' : 'Your profile needs significant improvement to be effective.'}
        </Typography>
      </Box>

      <LinearProgress
        variant="determinate"
        value={overallScore}
        sx={{
          height: 12,
          borderRadius: 6,
          backgroundColor: 'rgba(255,255,255,0.3)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 6,
            backgroundColor: 'white'
          }
        }}
      />
    </Paper>
  );

  const renderCategoryBreakdown = () => (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {profileCategories.map((category) => {
        const categoryScore = categoryScores[category.id];
        let categoryAverage = 0;
        
        if (categoryScore) {
          category.subcategories.forEach(subcategory => {
            categoryAverage += (categoryScore[subcategory.id] || 0) * (subcategory.weight / 100);
          });
          categoryAverage = Math.round(categoryAverage / category.subcategories.length * 100);
        }

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
                      Weight: {category.weight}%
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: category.color }}>
                      {categoryAverage}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Score
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {category.description}
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={categoryAverage}
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
                  {category.subcategories.map((subcategory) => {
                    const score = categoryScore?.[subcategory.id] || 0;
                    return (
                      <ListItem key={subcategory.id} sx={{ px: 0 }}>
                        <ListItemText
                          primary={subcategory.name}
                          secondary={`${Math.round(score)}/100`}
                        />
                        <Box sx={{ width: 60 }}>
                          <LinearProgress
                            variant="determinate"
                            value={score}
                            size="small"
                            sx={{
                              height: 4,
                              borderRadius: 2,
                              '& .MuiLinearProgress-bar': {
                                backgroundColor: score >= 80 ? '#4caf50' : score >= 60 ? '#ff9800' : '#f44336'
                              }
                            }}
                          />
                        </Box>
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

  const renderRecommendations = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Optimization Recommendations
      </Typography>
      
      {recommendations.length === 0 ? (
        <Alert severity="success">
          <Typography variant="body1">
            <strong>Congratulations!</strong> Your profile is well-optimized across all categories. 
            You're ready to make meaningful connections!
          </Typography>
        </Alert>
      ) : (
        <Grid container spacing={3}>
          {recommendations.map((rec, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ border: `2px solid ${rec.color}`, height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        mr: 2,
                        backgroundColor: rec.color,
                        color: 'white'
                      }}
                    >
                      {rec.icon}
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
                          {rec.title}
                        </Typography>
                        <Chip
                          label={rec.priority}
                          size="small"
                          sx={{
                            backgroundColor: rec.priority === 'high' ? '#f44336' : 
                                           rec.priority === 'medium' ? '#ff9800' : '#4caf50',
                            color: 'white',
                            fontWeight: 'bold'
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Current Score: {rec.currentScore}/100
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2 }}>
                        {rec.description}
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 'medium', mb: 2 }}>
                        💡 {rec.suggestion}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                        <Typography variant="body2" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
                          Potential +{rec.potentialIncrease} points
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );

  const renderCompetitiveAnalysis = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Competitive Analysis
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        See how your profile compares to average profiles on other dating platforms.
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(competitiveAnalysis).map(([platform, data]) => (
          <Grid item xs={12} sm={6} md={3} key={platform}>
            <Card 
              sx={{ 
                textAlign: 'center',
                border: data.betterThan ? '2px solid #4caf50' : '2px solid #ff9800',
                backgroundColor: data.betterThan ? '#4caf5010' : '#ff980010'
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {data.name}
                </Typography>
                <Typography variant="h4" sx={{ 
                  fontWeight: 'bold', 
                  color: data.betterThan ? '#4caf50' : '#ff9800',
                  mb: 1 
                }}>
                  {data.averageScore}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Average Score
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                  {data.betterThan ? (
                    <TrendingUp sx={{ color: '#4caf50', mr: 1 }} />
                  ) : (
                    <TrendingDown sx={{ color: '#ff9800', mr: 1 }} />
                  )}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontWeight: 'bold',
                      color: data.betterThan ? '#4caf50' : '#ff9800'
                    }}
                  >
                    {data.betterThan ? '+' : ''}{data.comparison} points
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Strengths:
                </Typography>
                {data.strengths.map((strength, index) => (
                  <Chip
                    key={index}
                    label={strength}
                    size="small"
                    sx={{ m: 0.5, backgroundColor: '#4caf50', color: 'white' }}
                  />
                ))}

                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1, mt: 2 }}>
                  Weaknesses:
                </Typography>
                {data.weaknesses.map((weakness, index) => (
                  <Chip
                    key={index}
                    label={weakness}
                    size="small"
                    sx={{ m: 0.5, backgroundColor: '#f44336', color: 'white' }}
                  />
                ))}
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
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Profile Completeness Analysis
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive analysis of your profile with optimization recommendations
        </Typography>
      </Box>

      {/* Loading State */}
      {isAnalyzing && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <CircularProgress size={80} sx={{ mb: 3 }} />
          <Typography variant="h6" gutterBottom>
            Analyzing Your Profile...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Running comprehensive analysis across all profile dimensions
          </Typography>
        </Box>
      )}

      {/* Analysis Results */}
      {!isAnalyzing && overallScore > 0 && (
        <>
          {/* Overall Score */}
          {renderOverallScore()}

          {/* Main Content Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
              <Tab label="Category Breakdown" />
              <Tab label="Recommendations" />
              <Tab label="Competitive Analysis" />
            </Tabs>
          </Box>

          {/* Tab Content */}
          {selectedTab === 0 && renderCategoryBreakdown()}
          {selectedTab === 1 && renderRecommendations()}
          {selectedTab === 2 && renderCompetitiveAnalysis()}
        </>
      )}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Bio Writing Assistant)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Bio Writing
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save analysis results and navigate to next screen
            localStorage.setItem('profileAnalysis', JSON.stringify({
              overallScore,
              categoryScores,
              recommendations,
              competitiveAnalysis,
              timestamp: new Date().toISOString()
            }));
            console.log('Profile analysis saved');
            // Navigate to Screen 149: Profile Preview & Testing
          }}
          sx={{
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
        >
          Continue to Profile Preview
        </Button>
      </Box>

      {/* Optimization Dialog */}
      <Dialog open={showOptimizationDialog} onClose={() => setShowOptimizationDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AutoAwesome sx={{ mr: 1, color: '#2196f3' }} />
            Profile Optimization Assistant
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Based on your analysis, here are the most impactful improvements you can make to your profile.
            </Typography>
          </Alert>
          
          {renderRecommendations()}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowOptimizationDialog(false)}>
            Close
          </Button>
          <Button onClick={() => setShowOptimizationDialog(false)} variant="contained">
            Start Optimizing
          </Button>
        </DialogActions>
      </Dialog>

      {/* Analysis Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Analysis Methodology:</strong> This comprehensive analysis evaluates your profile across 6 key dimensions 
          using advanced algorithms and competitive benchmarking. Scores are based on proven factors that drive meaningful 
          connections and relationship success.
        </Typography>
      </Alert>
    </Container>
  );
};

export default ProfileCompletenessScore;

