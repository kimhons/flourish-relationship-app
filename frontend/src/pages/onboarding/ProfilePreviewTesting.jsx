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
  Visibility,
  VisibilityOff,
  Preview,
  TestTube,
  Science,
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
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon
} from '@mui/icons-material';

const ProfilePreviewTesting = () => {
  const [profileData, setProfileData] = useState({});
  const [previewMode, setPreviewMode] = useState('card');
  const [deviceView, setDeviceView] = useState('mobile');
  const [testResults, setTestResults] = useState({});
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [showTestDialog, setShowTestDialog] = useState(false);
  const [showOptimizationDialog, setShowOptimizationDialog] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [showInteractionDemo, setShowInteractionDemo] = useState(false);

  // Preview modes
  const previewModes = [
    {
      id: 'card',
      name: 'Card View',
      description: 'How your profile appears in the discovery feed',
      icon: <ViewModule />,
      color: '#e91e63'
    },
    {
      id: 'detailed',
      name: 'Detailed View',
      description: 'Full profile view when someone taps on your card',
      icon: <ViewQuilt />,
      color: '#2196f3'
    },
    {
      id: 'conversation',
      name: 'Conversation View',
      description: 'How your profile appears in chat conversations',
      icon: <Chat />,
      color: '#4caf50'
    },
    {
      id: 'search',
      name: 'Search Results',
      description: 'How you appear in search and filter results',
      icon: <Search />,
      color: '#ff9800'
    }
  ];

  // Device views
  const deviceViews = [
    {
      id: 'mobile',
      name: 'Mobile',
      icon: <PhoneAndroid />,
      width: 375,
      height: 812
    },
    {
      id: 'tablet',
      name: 'Tablet',
      icon: <Tablet />,
      width: 768,
      height: 1024
    },
    {
      id: 'desktop',
      name: 'Desktop',
      icon: <Computer />,
      width: 1200,
      height: 800
    }
  ];

  // Test categories
  const testCategories = [
    {
      id: 'first_impression',
      name: 'First Impression',
      description: 'How appealing your profile is at first glance',
      icon: <Visibility />,
      color: '#e91e63',
      tests: [
        { id: 'main_photo_appeal', name: 'Main Photo Appeal', weight: 40 },
        { id: 'bio_hook', name: 'Bio Hook Effectiveness', weight: 30 },
        { id: 'overall_attractiveness', name: 'Overall Attractiveness', weight: 30 }
      ]
    },
    {
      id: 'engagement',
      name: 'Engagement Potential',
      description: 'Likelihood to receive likes and messages',
      icon: <TrendingUp />,
      color: '#2196f3',
      tests: [
        { id: 'conversation_starters', name: 'Conversation Starters', weight: 35 },
        { id: 'approachability', name: 'Approachability Factor', weight: 35 },
        { id: 'uniqueness', name: 'Uniqueness Score', weight: 30 }
      ]
    },
    {
      id: 'authenticity',
      name: 'Authenticity',
      description: 'How genuine and trustworthy you appear',
      icon: <VerifiedUser />,
      color: '#4caf50',
      tests: [
        { id: 'photo_authenticity', name: 'Photo Authenticity', weight: 40 },
        { id: 'bio_genuineness', name: 'Bio Genuineness', weight: 35 },
        { id: 'consistency', name: 'Profile Consistency', weight: 25 }
      ]
    },
    {
      id: 'compatibility',
      name: 'Compatibility Signals',
      description: 'How well you communicate compatibility',
      icon: <Handshake />,
      color: '#ff9800',
      tests: [
        { id: 'values_clarity', name: 'Values Clarity', weight: 35 },
        { id: 'lifestyle_match', name: 'Lifestyle Compatibility', weight: 35 },
        { id: 'relationship_goals', name: 'Relationship Goals Clarity', weight: 30 }
      ]
    },
    {
      id: 'memorability',
      name: 'Memorability',
      description: 'How memorable and distinctive your profile is',
      icon: <Psychology />,
      color: '#9c27b0',
      tests: [
        { id: 'distinctive_elements', name: 'Distinctive Elements', weight: 40 },
        { id: 'story_coherence', name: 'Story Coherence', weight: 35 },
        { id: 'emotional_connection', name: 'Emotional Connection', weight: 25 }
      ]
    }
  ];

  // Load profile data
  useEffect(() => {
    const loadProfileData = () => {
      const photos = JSON.parse(localStorage.getItem('profilePhotos') || '[]');
      const bio = JSON.parse(localStorage.getItem('profileBio') || '{}');
      const assessments = JSON.parse(localStorage.getItem('assessmentResults') || '{}');
      const analysis = JSON.parse(localStorage.getItem('profileAnalysis') || '{}');

      return {
        photos,
        bio,
        assessments,
        analysis,
        name: 'Alex', // Sample name
        age: 28, // Sample age
        location: 'San Francisco, CA', // Sample location
        occupation: 'Product Designer', // Sample occupation
        education: 'Stanford University', // Sample education
        height: '5\'10"', // Sample height
        interests: ['Photography', 'Hiking', 'Cooking', 'Travel', 'Music'],
        verified: true
      };
    };

    setProfileData(loadProfileData());
  }, []);

  // Run profile tests
  const runProfileTests = useCallback(async () => {
    setIsRunningTests(true);
    
    // Simulate test execution
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    const results = {};
    
    testCategories.forEach(category => {
      const categoryResults = {};
      let categoryScore = 0;
      
      category.tests.forEach(test => {
        // Simulate test scoring based on profile data
        let score = 70 + Math.random() * 25; // Base score 70-95
        
        // Adjust based on actual profile data
        if (test.id === 'main_photo_appeal' && profileData.photos?.length > 0) {
          const mainPhoto = profileData.photos.find(p => p.isMain);
          score = mainPhoto ? mainPhoto.quality * 10 : score;
        }
        
        if (test.id === 'bio_hook' && profileData.bio?.mainBio) {
          score = profileData.bio.mainBio.length > 100 ? score + 10 : score - 10;
        }
        
        if (test.id === 'conversation_starters' && profileData.bio?.prompts) {
          const promptCount = Object.keys(profileData.bio.prompts).length;
          score = promptCount >= 3 ? score + 15 : score - 15;
        }
        
        score = Math.max(0, Math.min(100, score));
        categoryResults[test.id] = {
          score: Math.round(score),
          feedback: generateTestFeedback(test.id, score),
          suggestions: generateTestSuggestions(test.id, score)
        };
        
        categoryScore += score * (test.weight / 100);
      });
      
      results[category.id] = {
        score: Math.round(categoryScore),
        tests: categoryResults,
        overall_feedback: generateCategoryFeedback(category.id, categoryScore)
      };
    });
    
    // Calculate overall test score
    const overallScore = Object.values(results).reduce((sum, category) => sum + category.score, 0) / testCategories.length;
    results.overall = {
      score: Math.round(overallScore),
      grade: getScoreGrade(overallScore),
      feedback: generateOverallFeedback(overallScore)
    };
    
    setTestResults(results);
    setIsRunningTests(false);
    setShowTestDialog(true);
  }, [profileData]);

  const generateTestFeedback = (testId, score) => {
    const feedbacks = {
      main_photo_appeal: score >= 80 ? 'Your main photo is very appealing and likely to attract attention.' : 
                        score >= 60 ? 'Your main photo is decent but could be more engaging.' : 
                        'Your main photo needs improvement to make a strong first impression.',
      bio_hook: score >= 80 ? 'Your bio has a strong hook that draws people in.' : 
               score >= 60 ? 'Your bio is interesting but could be more compelling.' : 
               'Your bio needs a stronger opening to capture attention.',
      conversation_starters: score >= 80 ? 'Your profile provides excellent conversation starters.' : 
                           score >= 60 ? 'You have some good conversation starters but could add more.' : 
                           'Your profile lacks clear conversation starters.',
      approachability: score >= 80 ? 'You appear very approachable and friendly.' : 
                      score >= 60 ? 'You seem approachable but could be more inviting.' : 
                      'Your profile might seem intimidating or unapproachable.',
      photo_authenticity: score >= 80 ? 'Your photos look genuine and authentic.' : 
                         score >= 60 ? 'Your photos are mostly authentic with room for improvement.' : 
                         'Your photos may appear overly edited or inauthentic.',
      values_clarity: score >= 80 ? 'Your values and beliefs come through clearly.' : 
                     score >= 60 ? 'Your values are somewhat clear but could be more explicit.' : 
                     'Your values and what matters to you are unclear.'
    };
    
    return feedbacks[testId] || 'Test completed successfully.';
  };

  const generateTestSuggestions = (testId, score) => {
    if (score >= 80) return [];
    
    const suggestions = {
      main_photo_appeal: [
        'Use a photo with better lighting',
        'Smile more naturally',
        'Choose a clearer, higher resolution image',
        'Consider a more engaging background'
      ],
      bio_hook: [
        'Start with something intriguing or unique about yourself',
        'Use humor if it fits your personality',
        'Ask a thought-provoking question',
        'Share a specific passion or interest'
      ],
      conversation_starters: [
        'Mention specific hobbies or interests',
        'Share recent experiences or adventures',
        'Ask questions in your prompts',
        'Include unique or unusual facts about yourself'
      ],
      approachability: [
        'Use more friendly, smiling photos',
        'Write in a warm, conversational tone',
        'Avoid intimidating or overly serious content',
        'Show your fun, playful side'
      ],
      photo_authenticity: [
        'Use less filtered or edited photos',
        'Include more candid, natural shots',
        'Show yourself in real-life situations',
        'Avoid overly posed or professional photos'
      ],
      values_clarity: [
        'Explicitly mention what matters most to you',
        'Share your core beliefs or principles',
        'Discuss causes you care about',
        'Be specific about your values'
      ]
    };
    
    return suggestions[testId]?.slice(0, 2) || [];
  };

  const generateCategoryFeedback = (categoryId, score) => {
    const feedbacks = {
      first_impression: score >= 80 ? 'You make an excellent first impression!' : 
                       score >= 60 ? 'Your first impression is good with room for improvement.' : 
                       'Your first impression needs significant work.',
      engagement: score >= 80 ? 'Your profile has high engagement potential!' : 
                 score >= 60 ? 'You have decent engagement potential.' : 
                 'Your engagement potential is low and needs improvement.',
      authenticity: score >= 80 ? 'You come across as very authentic and genuine!' : 
                   score >= 60 ? 'You seem mostly authentic with some areas to improve.' : 
                   'Your authenticity could be questioned by potential matches.',
      compatibility: score >= 80 ? 'You clearly communicate your compatibility factors!' : 
                    score >= 60 ? 'Your compatibility signals are decent but could be clearer.' : 
                    'It\'s unclear what you\'re looking for in a partner.',
      memorability: score >= 80 ? 'Your profile is highly memorable and distinctive!' : 
                   score >= 60 ? 'Your profile is somewhat memorable.' : 
                   'Your profile may be easily forgotten among others.'
    };
    
    return feedbacks[categoryId] || 'Category analysis completed.';
  };

  const generateOverallFeedback = (score) => {
    if (score >= 90) return 'Outstanding profile! You\'re ready to make amazing connections.';
    if (score >= 80) return 'Excellent profile! You should see great results.';
    if (score >= 70) return 'Good profile with strong potential for success.';
    if (score >= 60) return 'Decent profile that could benefit from some improvements.';
    if (score >= 50) return 'Your profile needs work to reach its potential.';
    return 'Significant improvements needed for dating success.';
  };

  const getScoreGrade = (score) => {
    if (score >= 90) return 'A+';
    if (score >= 85) return 'A';
    if (score >= 80) return 'A-';
    if (score >= 75) return 'B+';
    if (score >= 70) return 'B';
    if (score >= 65) return 'B-';
    if (score >= 60) return 'C+';
    if (score >= 55) return 'C';
    if (score >= 50) return 'C-';
    return 'D';
  };

  // Render profile card preview
  const renderProfileCard = () => {
    const mainPhoto = profileData.photos?.find(p => p.isMain) || profileData.photos?.[0];
    
    return (
      <Card 
        sx={{ 
          maxWidth: deviceView === 'mobile' ? 350 : deviceView === 'tablet' ? 400 : 450,
          mx: 'auto',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 3,
          position: 'relative'
        }}
      >
        {/* Main Photo */}
        <Box
          sx={{
            height: deviceView === 'mobile' ? 400 : deviceView === 'tablet' ? 450 : 500,
            backgroundImage: mainPhoto ? `url(${mainPhoto.url})` : 'linear-gradient(45deg, #f0f0f0 30%, #e0e0e0 90%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end'
          }}
        >
          {/* Verification Badge */}
          {profileData.verified && (
            <Chip
              icon={<VerifiedUser />}
              label="Verified"
              size="small"
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                backgroundColor: '#2196f3',
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          )}
          
          {/* Photo Indicators */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              left: 16,
              display: 'flex',
              gap: 1
            }}
          >
            {profileData.photos?.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  backgroundColor: index === currentPhotoIndex ? 'white' : 'rgba(255,255,255,0.5)'
                }}
              />
            ))}
          </Box>

          {/* Profile Info Overlay */}
          <Box
            sx={{
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              color: 'white',
              p: 3,
              width: '100%'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              {profileData.name}, {profileData.age}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Work sx={{ fontSize: 16, mr: 1 }} />
              <Typography variant="body2">
                {profileData.occupation}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <School sx={{ fontSize: 16, mr: 1 }} />
              <Typography variant="body2">
                {profileData.education}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ fontSize: 16, mr: 1 }} />
              <Typography variant="body2">
                {profileData.location}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Quick Bio Preview */}
        <CardContent sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ 
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 2
          }}>
            {profileData.bio?.mainBio || 'No bio available...'}
          </Typography>
          
          {/* Interest Tags */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {profileData.interests?.slice(0, 3).map((interest, index) => (
              <Chip
                key={index}
                label={interest}
                size="small"
                sx={{ backgroundColor: '#f0f0f0' }}
              />
            ))}
            {profileData.interests?.length > 3 && (
              <Chip
                label={`+${profileData.interests.length - 3} more`}
                size="small"
                sx={{ backgroundColor: '#e0e0e0' }}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    );
  };

  // Render detailed profile view
  const renderDetailedView = () => (
    <Card 
      sx={{ 
        maxWidth: deviceView === 'mobile' ? 350 : deviceView === 'tablet' ? 500 : 600,
        mx: 'auto',
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: 3
      }}
    >
      {/* Photo Gallery */}
      <Box sx={{ height: 300, position: 'relative' }}>
        <ImageList 
          sx={{ height: '100%', m: 0 }} 
          cols={profileData.photos?.length > 1 ? 2 : 1}
          rowHeight={150}
        >
          {profileData.photos?.slice(0, 4).map((photo, index) => (
            <ImageListItem key={index}>
              <img
                src={photo.url}
                alt={`Profile ${index + 1}`}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover' 
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        
        {profileData.photos?.length > 4 && (
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              backgroundColor: 'rgba(0,0,0,0.7)',
              color: 'white',
              px: 2,
              py: 1,
              borderRadius: 2,
              fontSize: '0.8rem'
            }}
          >
            +{profileData.photos.length - 4} more
          </Box>
        )}
      </Box>

      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              {profileData.name}, {profileData.age}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profileData.location}
            </Typography>
          </Box>
          {profileData.verified && (
            <Chip
              icon={<VerifiedUser />}
              label="Verified"
              size="small"
              sx={{ backgroundColor: '#2196f3', color: 'white' }}
            />
          )}
        </Box>

        {/* Bio */}
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          {profileData.bio?.mainBio || 'No bio available...'}
        </Typography>

        {/* Prompts */}
        {profileData.bio?.prompts && Object.entries(profileData.bio.prompts).map(([prompt, response], index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
              {prompt}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {response}
            </Typography>
          </Box>
        ))}

        {/* Details */}
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Occupation
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              {profileData.occupation}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Education
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              {profileData.education}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Height
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
              {profileData.height}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Interests
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 0.5 }}>
              {profileData.interests?.slice(0, 4).map((interest, index) => (
                <Chip
                  key={index}
                  label={interest}
                  size="small"
                  sx={{ fontSize: '0.7rem', height: 20 }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  // Render test results
  const renderTestResults = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Profile Test Results
      </Typography>
      
      {testResults.overall && (
        <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)', color: 'white' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
              {testResults.overall.grade}
            </Typography>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Overall Score: {testResults.overall.score}/100
            </Typography>
            <Typography variant="body1">
              {testResults.overall.feedback}
            </Typography>
          </Box>
        </Paper>
      )}

      <Grid container spacing={3}>
        {testCategories.map((category) => {
          const categoryResult = testResults[category.id];
          if (!categoryResult) return null;

          return (
            <Grid item xs={12} md={6} key={category.id}>
              <Card sx={{ border: `2px solid ${category.color}`, height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
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
                        Score: {categoryResult.score}/100
                      </Typography>
                    </Box>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={categoryResult.score}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      mb: 2,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: category.color
                      }
                    }}
                  />

                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {categoryResult.overall_feedback}
                  </Typography>

                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        Detailed Results
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {category.tests.map((test) => {
                        const testResult = categoryResult.tests[test.id];
                        return (
                          <Box key={test.id} sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                {test.name}
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                {testResult.score}/100
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              {testResult.feedback}
                            </Typography>
                            {testResult.suggestions.length > 0 && (
                              <List dense>
                                {testResult.suggestions.map((suggestion, index) => (
                                  <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 20 }}>
                                      <Lightbulb sx={{ fontSize: 16, color: '#ff9800' }} />
                                    </ListItemIcon>
                                    <ListItemText 
                                      primary={suggestion}
                                      primaryTypographyProps={{ variant: 'body2', fontSize: '0.8rem' }}
                                    />
                                  </ListItem>
                                ))}
                              </List>
                            )}
                          </Box>
                        );
                      })}
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Profile Preview & Testing
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          See how your profile appears to potential matches and test its effectiveness
        </Typography>
      </Box>

      {/* Controls */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Preview Mode */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Preview Mode</InputLabel>
              <Select
                value={previewMode}
                onChange={(e) => setPreviewMode(e.target.value)}
                label="Preview Mode"
              >
                {previewModes.map((mode) => (
                  <MenuItem key={mode.id} value={mode.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {mode.icon}
                      <Box sx={{ ml: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {mode.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {mode.description}
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Device View */}
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Device View</InputLabel>
              <Select
                value={deviceView}
                onChange={(e) => setDeviceView(e.target.value)}
                label="Device View"
              >
                {deviceViews.map((device) => (
                  <MenuItem key={device.id} value={device.id}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {device.icon}
                      <Typography sx={{ ml: 1 }}>{device.name}</Typography>
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Test Button */}
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Science />}
              onClick={runProfileTests}
              disabled={isRunningTests}
              sx={{
                background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
                color: 'white',
                height: 56
              }}
            >
              {isRunningTests ? 'Running Tests...' : 'Run Profile Tests'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Profile Preview" />
          <Tab label="Test Results" />
          <Tab label="Optimization Tips" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && (
        <Box sx={{ textAlign: 'center' }}>
          {previewMode === 'card' && renderProfileCard()}
          {previewMode === 'detailed' && renderDetailedView()}
          {previewMode === 'conversation' && renderProfileCard()}
          {previewMode === 'search' && renderProfileCard()}
        </Box>
      )}

      {selectedTab === 1 && (
        <Box>
          {Object.keys(testResults).length === 0 ? (
            <Paper sx={{ p: 6, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
              <Science sx={{ fontSize: 80, color: '#9e9e9e', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                No Test Results Yet
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Run profile tests to see detailed analysis and recommendations
              </Typography>
              <Button
                variant="contained"
                startIcon={<Science />}
                onClick={runProfileTests}
                disabled={isRunningTests}
              >
                {isRunningTests ? 'Running Tests...' : 'Run Profile Tests'}
              </Button>
            </Paper>
          ) : (
            renderTestResults()
          )}
        </Box>
      )}

      {selectedTab === 2 && (
        <Box>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Based on your profile analysis and test results, here are personalized optimization tips.
            </Typography>
          </Alert>
          
          {/* Optimization tips would be rendered here based on test results */}
          <Typography variant="h6" gutterBottom>
            Optimization Tips Coming Soon...
          </Typography>
        </Box>
      )}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Profile Completeness Score)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Analysis
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save test results and navigate to next screen
            localStorage.setItem('profileTestResults', JSON.stringify({
              testResults,
              previewSettings: { previewMode, deviceView },
              timestamp: new Date().toISOString()
            }));
            console.log('Profile test results saved');
            // Navigate to Screen 150: Profile Launch Celebration
          }}
          sx={{
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
        >
          Continue to Launch
        </Button>
      </Box>

      {/* Test Dialog */}
      <Dialog open={showTestDialog} onClose={() => setShowTestDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Science sx={{ mr: 1, color: '#2196f3' }} />
            Profile Test Results
          </Box>
        </DialogTitle>
        <DialogContent>
          {testResults.overall && (
            <Alert severity="success" sx={{ mb: 3 }}>
              <Typography variant="body2">
                <strong>Test Complete!</strong> Your profile scored {testResults.overall.score}/100 
                with a grade of {testResults.overall.grade}. {testResults.overall.feedback}
              </Typography>
            </Alert>
          )}
          
          <Typography variant="body2" color="text.secondary">
            Detailed results are available in the Test Results tab. Use these insights to optimize your profile for better matches.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowTestDialog(false)}>
            Close
          </Button>
          <Button 
            onClick={() => {
              setShowTestDialog(false);
              setSelectedTab(1);
            }} 
            variant="contained"
          >
            View Detailed Results
          </Button>
        </DialogActions>
      </Dialog>

      {/* Testing Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Testing Methodology:</strong> Our profile tests use advanced algorithms to simulate 
          how potential matches would perceive and interact with your profile, providing actionable 
          insights for optimization.
        </Typography>
      </Alert>
    </Container>
  );
};

export default ProfilePreviewTesting;

