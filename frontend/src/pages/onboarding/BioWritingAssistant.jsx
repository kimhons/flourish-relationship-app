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
  TextareaAutosize,
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
  Edit,
  Create,
  Article,
  MenuBook,
  AutoStories,
  Description,
  Subject,
  Topic,
  Category,
  Label,
  Star,
  StarBorder,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  TrendingUp,
  Analytics,
  Insights,
  Assessment,
  Assignment,
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
  Palette,
  Brush,
  ColorLens,
  Close,
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
  ImportContacts,
  ChromeReaderMode,
  FindInPage,
  Pageview,
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
  VisibilityOff
} from '@mui/icons-material';

const BioWritingAssistant = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [bioData, setBioData] = useState({
    mainBio: '',
    prompts: {},
    personalityHighlights: [],
    interests: [],
    values: [],
    lifestyle: {},
    goals: {},
    dealBreakers: [],
    funFacts: [],
    conversationStarters: []
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCoachDialog, setShowCoachDialog] = useState(false);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);
  const [coachSuggestions, setCoachSuggestions] = useState([]);
  const [bioScore, setBioScore] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [writingStyle, setWritingStyle] = useState('authentic');
  const [bioLength, setBioLength] = useState('medium');

  // Bio sections for comprehensive profile
  const bioSections = [
    {
      id: 'main_bio',
      title: 'Main Bio',
      description: 'Your primary bio that introduces who you are',
      icon: <Person />,
      color: '#e91e63',
      required: true,
      maxLength: 500,
      placeholder: 'Tell your story in an authentic and engaging way...'
    },
    {
      id: 'prompts',
      title: 'Profile Prompts',
      description: 'Answer meaningful prompts to showcase your personality',
      icon: <QuestionAnswer />,
      color: '#2196f3',
      required: true,
      maxLength: 150,
      placeholder: 'Share something that reveals your personality...'
    },
    {
      id: 'interests',
      title: 'Interests & Hobbies',
      description: 'What you love to do and are passionate about',
      icon: <Favorite />,
      color: '#4caf50',
      required: false,
      maxLength: 200,
      placeholder: 'What activities make you come alive?'
    },
    {
      id: 'values',
      title: 'Values & Beliefs',
      description: 'What matters most to you in life',
      icon: <Star />,
      color: '#ff9800',
      required: false,
      maxLength: 200,
      placeholder: 'What principles guide your life?'
    },
    {
      id: 'lifestyle',
      title: 'Lifestyle',
      description: 'How you live your day-to-day life',
      icon: <DirectionsRun />,
      color: '#9c27b0',
      required: false,
      maxLength: 200,
      placeholder: 'Describe your typical week or lifestyle...'
    },
    {
      id: 'goals',
      title: 'Goals & Dreams',
      description: 'What you\'re working toward and dreaming about',
      icon: <TrendingUp />,
      color: '#607d8b',
      required: false,
      maxLength: 200,
      placeholder: 'What are you excited about for the future?'
    }
  ];

  // Comprehensive prompt library (surpassing Hinge)
  const promptLibrary = [
    {
      category: 'personality',
      prompts: [
        'The way to win me over is...',
        'I\'m weirdly attracted to...',
        'My most irrational fear is...',
        'I\'m secretly really good at...',
        'The key to my heart is...',
        'I get way too excited about...',
        'My biggest pet peeve is...',
        'I\'m the type of person who...',
        'My friends would describe me as...',
        'I never leave the house without...'
      ]
    },
    {
      category: 'lifestyle',
      prompts: [
        'My perfect Sunday involves...',
        'I spend way too much money on...',
        'My ideal vacation is...',
        'I\'m happiest when I\'m...',
        'My morning routine includes...',
        'I could talk for hours about...',
        'My guilty pleasure is...',
        'I\'m currently obsessed with...',
        'My favorite way to unwind is...',
        'I\'m most productive when...'
      ]
    },
    {
      category: 'relationships',
      prompts: [
        'I\'m looking for someone who...',
        'My love language is...',
        'The best relationship advice I\'ve received is...',
        'I know I\'ve found the right person when...',
        'In a relationship, I value...',
        'My ideal date night is...',
        'I show I care by...',
        'I need someone who understands that...',
        'My relationship deal-breaker is...',
        'I\'m attracted to people who...'
      ]
    },
    {
      category: 'values',
      prompts: [
        'I stand up for...',
        'Something I\'ll never compromise on is...',
        'I\'m passionate about...',
        'I believe strongly in...',
        'What matters most to me is...',
        'I\'m inspired by people who...',
        'I want to make a difference by...',
        'My core values include...',
        'I respect people who...',
        'I\'m committed to...'
      ]
    },
    {
      category: 'fun',
      prompts: [
        'My most embarrassing moment was...',
        'If I could have dinner with anyone, it would be...',
        'My hidden talent is...',
        'The most spontaneous thing I\'ve done is...',
        'I\'m surprisingly good at...',
        'My claim to fame is...',
        'I once got lost in...',
        'My weirdest habit is...',
        'I collect...',
        'My superpower would be...'
      ]
    },
    {
      category: 'growth',
      prompts: [
        'I\'m currently learning...',
        'This year I want to...',
        'I\'m working on becoming...',
        'My biggest goal right now is...',
        'I\'m challenging myself to...',
        'I want to get better at...',
        'I\'m excited to explore...',
        'My next adventure will be...',
        'I\'m growing by...',
        'I\'m discovering that I...'
      ]
    }
  ];

  // Writing styles
  const writingStyles = [
    {
      id: 'authentic',
      name: 'Authentic & Genuine',
      description: 'Natural, honest, and true to yourself',
      tone: 'conversational',
      characteristics: ['Honest', 'Relatable', 'Warm', 'Natural']
    },
    {
      id: 'witty',
      name: 'Witty & Humorous',
      description: 'Clever, funny, and engaging',
      tone: 'playful',
      characteristics: ['Clever', 'Funny', 'Engaging', 'Light-hearted']
    },
    {
      id: 'thoughtful',
      name: 'Thoughtful & Deep',
      description: 'Reflective, meaningful, and introspective',
      tone: 'contemplative',
      characteristics: ['Reflective', 'Meaningful', 'Insightful', 'Genuine']
    },
    {
      id: 'adventurous',
      name: 'Adventurous & Bold',
      description: 'Exciting, dynamic, and energetic',
      tone: 'enthusiastic',
      characteristics: ['Energetic', 'Bold', 'Exciting', 'Dynamic']
    },
    {
      id: 'romantic',
      name: 'Romantic & Dreamy',
      description: 'Heartfelt, passionate, and idealistic',
      tone: 'warm',
      characteristics: ['Heartfelt', 'Passionate', 'Dreamy', 'Sincere']
    },
    {
      id: 'professional',
      name: 'Professional & Polished',
      description: 'Sophisticated, articulate, and refined',
      tone: 'polished',
      characteristics: ['Sophisticated', 'Articulate', 'Refined', 'Confident']
    }
  ];

  // Bio length options
  const bioLengthOptions = [
    {
      id: 'short',
      name: 'Short & Sweet',
      description: 'Concise and to the point (100-200 words)',
      wordCount: '100-200',
      characteristics: ['Concise', 'Impactful', 'Easy to read']
    },
    {
      id: 'medium',
      name: 'Balanced',
      description: 'Perfect balance of detail and brevity (200-350 words)',
      wordCount: '200-350',
      characteristics: ['Balanced', 'Comprehensive', 'Engaging']
    },
    {
      id: 'detailed',
      name: 'Detailed & Rich',
      description: 'Comprehensive and storytelling (350-500 words)',
      wordCount: '350-500',
      characteristics: ['Comprehensive', 'Storytelling', 'Rich detail']
    }
  ];

  // Calculate bio score
  const calculateBioScore = useCallback(() => {
    let score = 0;
    const maxScore = 100;

    // Main bio score (40 points)
    if (bioData.mainBio) {
      const wordCount = bioData.mainBio.split(' ').length;
      const lengthScore = Math.min((wordCount / 200) * 20, 20);
      const qualityScore = bioData.mainBio.length > 50 ? 20 : (bioData.mainBio.length / 50) * 20;
      score += lengthScore + qualityScore;
    }

    // Prompts score (30 points)
    const promptCount = Object.keys(bioData.prompts).length;
    const promptScore = Math.min((promptCount / 3) * 30, 30);
    score += promptScore;

    // Additional sections score (30 points)
    const additionalSections = [
      bioData.interests.length > 0,
      bioData.values.length > 0,
      bioData.lifestyle && Object.keys(bioData.lifestyle).length > 0,
      bioData.goals && Object.keys(bioData.goals).length > 0,
      bioData.funFacts.length > 0,
      bioData.conversationStarters.length > 0
    ].filter(Boolean).length;
    
    const additionalScore = (additionalSections / 6) * 30;
    score += additionalScore;

    return Math.round(score);
  }, [bioData]);

  useEffect(() => {
    setBioScore(calculateBioScore());
  }, [bioData, calculateBioScore]);

  // AI Coach suggestions
  const generateCoachSuggestions = () => {
    const suggestions = [];

    // Check main bio
    if (!bioData.mainBio || bioData.mainBio.length < 100) {
      suggestions.push({
        type: 'main_bio',
        priority: 'high',
        title: 'Expand Your Main Bio',
        description: 'Your main bio is the first thing people read. Make it count!',
        suggestion: 'Add more details about your personality, interests, and what makes you unique.',
        icon: <Person />,
        color: '#f44336'
      });
    }

    // Check prompts
    const promptCount = Object.keys(bioData.prompts).length;
    if (promptCount < 3) {
      suggestions.push({
        type: 'prompts',
        priority: 'high',
        title: 'Answer More Prompts',
        description: `You've answered ${promptCount}/3 recommended prompts.`,
        suggestion: 'Prompts help showcase different aspects of your personality and give conversation starters.',
        icon: <QuestionAnswer />,
        color: '#f44336'
      });
    }

    // Check authenticity
    if (bioData.mainBio && bioData.mainBio.includes('love to laugh')) {
      suggestions.push({
        type: 'authenticity',
        priority: 'medium',
        title: 'Be More Specific',
        description: 'Avoid generic phrases like "love to laugh" - everyone does!',
        suggestion: 'Share specific examples of what makes you laugh or your sense of humor.',
        icon: <AutoAwesome />,
        color: '#ff9800'
      });
    }

    // Check conversation starters
    if (bioData.conversationStarters.length === 0) {
      suggestions.push({
        type: 'conversation',
        priority: 'medium',
        title: 'Add Conversation Starters',
        description: 'Give people easy ways to start conversations with you.',
        suggestion: 'Mention specific interests, recent experiences, or questions you\'re curious about.',
        icon: <Chat />,
        color: '#2196f3'
      });
    }

    // Check balance
    const hasPersonality = bioData.mainBio && bioData.mainBio.length > 100;
    const hasInterests = bioData.interests.length > 0;
    const hasValues = bioData.values.length > 0;
    
    if (hasPersonality && !hasInterests && !hasValues) {
      suggestions.push({
        type: 'balance',
        priority: 'low',
        title: 'Add More Depth',
        description: 'Your bio shows your personality well. Consider adding interests or values.',
        suggestion: 'Share what you\'re passionate about or what matters most to you.',
        icon: <Balance />,
        color: '#4caf50'
      });
    }

    return suggestions;
  };

  const handleGenerateAI = async (section, prompt = '') => {
    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleGenerations = {
      main_bio: [
        "I'm someone who finds joy in life's simple moments - whether that's discovering a new coffee shop, getting lost in a good book, or having deep conversations that last until 2 AM. I work in marketing but my real passion is photography; I love capturing the stories that unfold in everyday moments. On weekends, you'll find me exploring local farmers markets, trying new hiking trails, or planning my next travel adventure. I believe in being genuine, kind, and always curious about the world around me.",
        "Adventure seeker with a love for spontaneous road trips and planned Netflix marathons in equal measure. I'm a software engineer by day and amateur chef by night - I make a mean pasta but I'm still working on my bread game. I value deep friendships, good humor, and people who aren't afraid to be themselves. Currently reading my way through the sci-fi classics and always up for recommendations.",
        "Life's too short for bad coffee and boring conversations. I'm a teacher who's passionate about making learning fun, a weekend warrior who loves hiking and rock climbing, and someone who believes that laughter really is the best medicine. I'm looking for someone who shares my curiosity about the world and isn't afraid to try new things - even if we fail spectacularly at them together."
      ],
      prompts: {
        'The way to win me over is...': [
          'Show me something you\'re genuinely passionate about - your eyes light up when you talk about things you love.',
          'Make me laugh until my sides hurt, then have a deep conversation about life over coffee.',
          'Be authentically yourself, even if that means admitting you still sleep with a stuffed animal.'
        ],
        'I\'m weirdly attracted to...': [
          'People who get genuinely excited about random facts and want to share them with everyone.',
          'Someone who can parallel park on the first try - it\'s like watching magic happen.',
          'People who remember small details from conversations we had weeks ago.'
        ],
        'My most irrational fear is...': [
          'Butterflies. They\'re basically flying flowers with trust issues.',
          'Running out of phone battery when I need GPS the most.',
          'That everyone at the grocery store is judging my cart contents.'
        ]
      }
    };

    let generated = '';
    if (section === 'main_bio') {
      generated = sampleGenerations.main_bio[Math.floor(Math.random() * sampleGenerations.main_bio.length)];
    } else if (section === 'prompts' && prompt) {
      const promptResponses = sampleGenerations.prompts[prompt];
      if (promptResponses) {
        generated = promptResponses[Math.floor(Math.random() * promptResponses.length)];
      }
    }

    setIsGenerating(false);
    return generated;
  };

  const handleSectionUpdate = (section, value) => {
    setBioData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const handlePromptUpdate = (prompt, response) => {
    setBioData(prev => ({
      ...prev,
      prompts: {
        ...prev.prompts,
        [prompt]: response
      }
    }));
  };

  const renderMainBioSection = () => (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Main Bio
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AutoAwesome />}
            onClick={async () => {
              const generated = await handleGenerateAI('main_bio');
              handleSectionUpdate('mainBio', generated);
            }}
            disabled={isGenerating}
          >
            {isGenerating ? 'Generating...' : 'AI Assist'}
          </Button>
        </Box>

        <TextField
          fullWidth
          multiline
          rows={8}
          placeholder="Tell your story in an authentic and engaging way. What makes you unique? What are you passionate about? What kind of person are you looking for?"
          value={bioData.mainBio}
          onChange={(e) => handleSectionUpdate('mainBio', e.target.value)}
          sx={{ mb: 2 }}
          inputProps={{ maxLength: 500 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {bioData.mainBio.length}/500 characters
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ~{bioData.mainBio.split(' ').length} words
          </Typography>
        </Box>

        {bioData.mainBio.length > 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
              Preview:
            </Typography>
            <Paper sx={{ p: 2, backgroundColor: '#f8f9fa', fontStyle: 'italic' }}>
              {bioData.mainBio}
            </Paper>
          </Box>
        )}
      </CardContent>
    </Card>
  );

  const renderPromptsSection = () => (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Profile Prompts
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Choose 3-5 prompts that best showcase your personality and give people conversation starters.
        </Typography>

        {promptLibrary.map((category) => (
          <Accordion key={category.category} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                {category.category} Prompts
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                {category.prompts.map((prompt) => (
                  <Grid item xs={12} key={prompt}>
                    <Card 
                      sx={{ 
                        p: 2, 
                        cursor: 'pointer',
                        border: bioData.prompts[prompt] ? '2px solid #2196f3' : '1px solid #e0e0e0',
                        '&:hover': { boxShadow: 2 }
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {prompt}
                      </Typography>
                      
                      {bioData.prompts[prompt] ? (
                        <Box>
                          <TextField
                            fullWidth
                            multiline
                            rows={3}
                            value={bioData.prompts[prompt]}
                            onChange={(e) => handlePromptUpdate(prompt, e.target.value)}
                            placeholder="Your response..."
                            inputProps={{ maxLength: 150 }}
                            sx={{ mb: 1 }}
                          />
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                              {bioData.prompts[prompt].length}/150 characters
                            </Typography>
                            <Box>
                              <Button
                                size="small"
                                startIcon={<AutoAwesome />}
                                onClick={async () => {
                                  const generated = await handleGenerateAI('prompts', prompt);
                                  handlePromptUpdate(prompt, generated);
                                }}
                                disabled={isGenerating}
                              >
                                AI Suggest
                              </Button>
                              <Button
                                size="small"
                                color="error"
                                onClick={() => handlePromptUpdate(prompt, '')}
                                sx={{ ml: 1 }}
                              >
                                Remove
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      ) : (
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => handlePromptUpdate(prompt, '')}
                          disabled={Object.keys(bioData.prompts).length >= 5}
                        >
                          Answer This Prompt
                        </Button>
                      )}
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Your Selected Prompts ({Object.keys(bioData.prompts).length}/5):
          </Typography>
          {Object.entries(bioData.prompts).map(([prompt, response]) => (
            <Paper key={prompt} sx={{ p: 2, mb: 2, backgroundColor: '#f8f9fa' }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {prompt}
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                {response || 'No response yet...'}
              </Typography>
            </Paper>
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  const renderWritingStyleSection = () => (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Writing Style & Tone
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Choose a writing style that best represents your personality.
        </Typography>

        <Grid container spacing={2}>
          {writingStyles.map((style) => (
            <Grid item xs={12} md={6} key={style.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  border: writingStyle === style.id ? '3px solid #2196f3' : '1px solid #e0e0e0',
                  backgroundColor: writingStyle === style.id ? '#2196f310' : 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 }
                }}
                onClick={() => setWritingStyle(style.id)}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {style.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {style.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {style.characteristics.map((char) => (
                      <Chip
                        key={char}
                        label={char}
                        size="small"
                        sx={{
                          backgroundColor: writingStyle === style.id ? '#2196f3' : '#f0f0f0',
                          color: writingStyle === style.id ? 'white' : 'inherit'
                        }}
                      />
                    ))}
                  </Box>
                  {writingStyle === style.id && (
                    <CheckCircle sx={{ color: '#2196f3', mt: 2 }} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderBioLengthSection = () => (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
          Bio Length Preference
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Choose how detailed you want your bio to be.
        </Typography>

        <Grid container spacing={2}>
          {bioLengthOptions.map((option) => (
            <Grid item xs={12} md={4} key={option.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  border: bioLength === option.id ? '3px solid #4caf50' : '1px solid #e0e0e0',
                  backgroundColor: bioLength === option.id ? '#4caf5010' : 'white',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 }
                }}
                onClick={() => setBioLength(option.id)}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {option.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {option.description}
                  </Typography>
                  <Chip
                    label={option.wordCount}
                    sx={{
                      backgroundColor: bioLength === option.id ? '#4caf50' : '#f0f0f0',
                      color: bioLength === option.id ? 'white' : 'inherit',
                      mb: 2
                    }}
                  />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                    {option.characteristics.map((char) => (
                      <Chip
                        key={char}
                        label={char}
                        size="small"
                        sx={{
                          backgroundColor: bioLength === option.id ? '#4caf50' : '#f0f0f0',
                          color: bioLength === option.id ? 'white' : 'inherit'
                        }}
                      />
                    ))}
                  </Box>
                  {bioLength === option.id && (
                    <CheckCircle sx={{ color: '#4caf50', mt: 2 }} />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderBioScore = () => (
    <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)', color: 'white' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Bio Completeness Score
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex', mr: 3 }}>
          <CircularProgress
            variant="determinate"
            value={bioScore}
            size={80}
            thickness={4}
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
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              {bioScore}
            </Typography>
          </Box>
        </Box>
        
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {bioScore >= 80 ? 'Excellent Bio!' : 
             bioScore >= 60 ? 'Good Bio' : 
             bioScore >= 40 ? 'Needs Improvement' : 'Getting Started'}
          </Typography>
          <Typography variant="body2">
            Main Bio: {bioData.mainBio ? '✓' : '✗'} • 
            Prompts: {Object.keys(bioData.prompts).length}/3 • 
            Style: {writingStyle}
          </Typography>
        </Box>
      </Box>

      <LinearProgress
        variant="determinate"
        value={bioScore}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255,255,255,0.3)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            backgroundColor: 'white'
          }
        }}
      />
    </Paper>
  );

  const renderCoachSuggestions = () => {
    const suggestions = generateCoachSuggestions();
    
    return (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Dr. Love's Bio Recommendations
        </Typography>
        
        {suggestions.length === 0 ? (
          <Alert severity="success">
            <Typography variant="body2">
              <strong>Great job!</strong> Your bio looks comprehensive and engaging. 
              You're ready to make meaningful connections!
            </Typography>
          </Alert>
        ) : (
          suggestions.map((suggestion, index) => (
            <Card key={index} sx={{ mb: 2, border: `2px solid ${suggestion.color}` }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      mr: 2,
                      backgroundColor: suggestion.color,
                      color: 'white'
                    }}
                  >
                    {suggestion.icon}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
                        {suggestion.title}
                      </Typography>
                      <Chip
                        label={suggestion.priority}
                        size="small"
                        sx={{
                          backgroundColor: suggestion.priority === 'high' ? '#f44336' : 
                                         suggestion.priority === 'medium' ? '#ff9800' : '#4caf50',
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {suggestion.description}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                      💡 {suggestion.suggestion}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Bio Writing Assistant
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Create a compelling bio that tells your authentic story and attracts meaningful connections
        </Typography>
      </Box>

      {/* Bio Score */}
      {renderBioScore()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Main Bio" />
          <Tab label="Profile Prompts" />
          <Tab label="Writing Style" />
          <Tab label="AI Recommendations" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && (
        <Box>
          {renderMainBioSection()}
          {renderBioLengthSection()}
        </Box>
      )}
      {selectedTab === 1 && renderPromptsSection()}
      {selectedTab === 2 && renderWritingStyleSection()}
      {selectedTab === 3 && renderCoachSuggestions()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Photo Optimization)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Photos
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          disabled={!bioData.mainBio || Object.keys(bioData.prompts).length < 2}
          onClick={() => {
            // Save bio data and navigate to next screen
            localStorage.setItem('profileBio', JSON.stringify({
              ...bioData,
              writingStyle,
              bioLength,
              score: bioScore
            }));
            console.log('Bio data saved:', bioData);
            // Navigate to Screen 148: Profile Completeness Score
          }}
          sx={{
            background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
            color: 'white'
          }}
        >
          Continue to Profile Review
        </Button>
      </Box>

      {/* Coach Dialog */}
      <Dialog open={showCoachDialog} onClose={() => setShowCoachDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Psychology sx={{ mr: 1, color: '#2196f3' }} />
            Dr. Love's Bio Analysis
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              I've analyzed your bio to help you create the most authentic and attractive profile possible.
            </Typography>
          </Alert>
          
          {renderCoachSuggestions()}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowCoachDialog(false)}>
            Close
          </Button>
          <Button onClick={() => setShowCoachDialog(false)} variant="contained">
            Apply Suggestions
          </Button>
        </DialogActions>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={showPreviewDialog} onClose={() => setShowPreviewDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>
          Bio Preview
        </DialogTitle>
        <DialogContent>
          <Paper sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Main Bio:
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic' }}>
              {bioData.mainBio || 'No main bio yet...'}
            </Typography>
            
            {Object.entries(bioData.prompts).map(([prompt, response]) => (
              <Box key={prompt} sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  {prompt}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  {response}
                </Typography>
              </Box>
            ))}
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowPreviewDialog(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Bio Guidelines:</strong> Your bio should authentically represent who you are while respecting 
          cultural diversity and personal boundaries. Focus on genuine self-expression and meaningful connections.
        </Typography>
      </Alert>
    </Container>
  );
};

export default BioWritingAssistant;

