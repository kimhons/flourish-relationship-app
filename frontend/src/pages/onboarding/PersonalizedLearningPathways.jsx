import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button, 
  Grid, 
  LinearProgress, 
  Chip, 
  Avatar, 
  Divider,
  Paper,
  IconButton,
  Tabs,
  Tab,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  AlertTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Collapse,
  Rating,
  CircularProgress,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Breadcrumbs,
  Link,
  Skeleton,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/material';
import {
  School,
  AutoAwesome,
  TrendingUp,
  Psychology,
  Insights,
  EmojiEvents,
  Star,
  Grade,
  MenuBook,
  LibraryBooks,
  Article,
  Description,
  Assignment,
  Task,
  CheckBox,
  CheckCircle,
  RadioButtonChecked,
  PlayArrow,
  Pause,
  Stop,
  SkipNext,
  SkipPrevious,
  Repeat,
  Shuffle,
  Timer,
  Schedule,
  AccessTime,
  DateRange,
  CalendarToday,
  Event,
  Today,
  Update,
  Sync,
  Refresh,
  Settings,
  Tune,
  FilterList,
  Sort,
  Search,
  Visibility,
  VisibilityOff,
  ZoomIn,
  ZoomOut,
  Fullscreen,
  FullscreenExit,
  OpenInNew,
  Launch,
  Share,
  Download,
  Upload,
  CloudUpload,
  CloudDownload,
  Backup,
  Restore,
  History,
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  ThumbsUpDown,
  Comment,
  Chat,
  Message,
  Email,
  Notifications,
  NotificationsOff,
  Info,
  Help,
  HelpOutline,
  Quiz,
  LiveHelp,
  Support,
  SupportAgent,
  ContactSupport,
  Feedback,
  BugReport,
  Announcement,
  Campaign,
  RecordVoiceOver,
  VoiceChat,
  Hearing,
  HearingDisabled,
  Translate,
  GTranslate,
  Language,
  Public,
  PublicOff,
  Travel,
  Luggage,
  BusinessCenter,
  Work,
  WorkOff,
  WorkOutline,
  Badge as BadgeIcon,
  CardMembership,
  ContactMail,
  ContactPhone,
  Contacts,
  PermContactCalendar,
  PermIdentity,
  PermPhoneMsg,
  Person,
  PersonAdd,
  PersonRemove,
  PersonOutline,
  PersonOff,
  People,
  PeopleAlt,
  PeopleOutline,
  Group,
  GroupAdd,
  GroupRemove,
  GroupWork,
  Groups,
  Diversity1,
  Diversity2,
  Diversity3,
  Family,
  ChildCare,
  ChildFriendly,
  AutoStories,
  ImportContacts,
  ChromeReaderMode,
  Book,
  BookmarkAdd,
  BookmarkRemove,
  Bookmarks,
  LocalLibrary,
  CollectionsBookmark,
  Class,
  OndemandVideo,
  VideoLibrary,
  VideoCall,
  VideoSettings,
  Videocam,
  VideocamOff,
  VideoLabel,
  Theaters,
  Movie,
  MovieCreation,
  MovieFilter,
  LocalMovies,
  Slideshow,
  Photo,
  PhotoCamera,
  PhotoCameraBack,
  PhotoCameraFront,
  CameraAlt,
  Camera,
  CameraEnhance,
  CameraFront,
  CameraRear,
  CameraRoll,
  Collections,
  ColorLens,
  Palette,
  FormatPaint,
  Brush,
  Edit,
  EditNote,
  EditOff,
  Create,
  Draw,
  Gesture,
  TouchApp,
  PanTool,
  BackHand,
  FrontHand,
  Waving,
  ExpandMore,
  ExpandLess,
  ChevronLeft,
  ChevronRight,
  ArrowBack,
  ArrowForward,
  ArrowUpward,
  ArrowDownward,
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
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
  KeyboardReturn,
  KeyboardTab,
  KeyboardCapslock,
  KeyboardBackspace,
  Add,
  Remove,
  Clear,
  Close,
  Cancel,
  Check,
  Done,
  DoneAll,
  Save,
  Delete,
  DeleteForever,
  Archive,
  Unarchive,
  Inbox,
  Outbox,
  Drafts,
  Send,
  Reply,
  ReplyAll,
  Forward,
  Undo,
  Redo,
  Cached,
  Autorenew,
  SyncAlt,
  SyncProblem,
  SyncDisabled,
  CloudSync,
  CloudQueue,
  CloudDone,
  CloudOff,
  WifiOff,
  SignalWifiOff,
  SignalWifi0Bar,
  SignalWifi1Bar,
  SignalWifi2Bar,
  SignalWifi3Bar,
  SignalWifi4Bar,
  SignalCellularOff,
  SignalCellular0Bar,
  SignalCellular1Bar,
  SignalCellular2Bar,
  SignalCellular3Bar,
  SignalCellular4Bar,
  NetworkCheck,
  NetworkWifi,
  NetworkCell,
  NetworkLocked,
  Security,
  Lock,
  LockOpen,
  LockOutlined,
  LockClock,
  VpnLock,
  VpnKey,
  Key,
  Password,
  Fingerprint,
  FaceRetouchingNatural,
  RemoveRedEye,
  Preview,
  Pageview,
  FindInPage,
  FindReplace,
  SearchOff,
  Zoom,
  ZoomOutMap,
  CenterFocusStrong,
  CenterFocusWeak,
  FilterCenterFocus,
  MyLocation,
  LocationSearching,
  PersonPin,
  PersonPinCircle,
  Place,
  PlaceOutlined,
  Room,
  LocationCity,
  LocationDisabled,
  NearMe,
  NearMeDisabled,
  Explore,
  ExploreOff,
  Compass,
  Assistant,
  AssistantPhoto,
  Recommend,
  Mood,
  MoodBad,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  EmojiEmotions,
  EmojiPeople,
  EmojiNature,
  EmojiObjects,
  EmojiSymbols,
  EmojiFlags,
  EmojiTransportation,
  EmojiFood,
  EmojiEvents,
  Celebration,
  Cake,
  CardGiftcard,
  Redeem,
  LocalOffer,
  Loyalty,
  Stars,
  StarBorder,
  StarHalf,
  StarOutline,
  StarRate,
  WorkspacePremium,
  Diamond,
  MonetizationOn,
  AttachMoney,
  CurrencyExchange,
  Payment,
  CreditCard,
  AccountBalance,
  AccountBalanceWallet,
  Savings,
  RequestQuote,
  PriceCheck,
  PriceChange,
  TrendingFlat,
  TrendingDown,
  ShowChart,
  Equalizer,
  BarChart,
  PieChart,
  DonutLarge,
  DonutSmall,
  Analytics,
  Assessment,
  Timeline as TimelineIcon,
  BubbleChart,
  ScatterPlot,
  Radar,
  MultilineChart,
  StackedLineChart,
  StackedBarChart,
  Leaderboard,
  Poll,
  HowToVote,
  Ballot,
  CheckCircleOutline,
  Highlight,
  HighlightOff,
  Error,
  ErrorOutline,
  Warning,
  WarningAmber,
  InfoOutlined,
  SelfImprovement,
  HealthAndSafety,
  Face,
  SmartToy,
  ModelTraining,
  Science,
  Biotech,
  Memory,
  Storage,
  Computer,
  PhoneAndroid,
  Tablet,
  Laptop,
  Desktop,
  Watch,
  Tv,
  Speaker,
  Headphones,
  Keyboard,
  Mouse,
  Router,
  Wifi,
  Bluetooth,
  Nfc,
  LocationOn,
  LocationOff,
  GpsFixed,
  GpsNotFixed,
  GpsOff,
  Navigation,
  TravelExplore,
  Map,
  Terrain,
  Satellite,
  Traffic,
  DirectionsCar,
  DirectionsWalk,
  DirectionsBike,
  DirectionsTransit,
  Flight,
  Train,
  Subway,
  Bus,
  Taxi,
  LocalTaxi,
  Hotel,
  Restaurant,
  LocalCafe,
  LocalBar,
  LocalGroceryStore,
  LocalMall,
  LocalHospital,
  LocalPharmacy,
  LocalGasStation,
  LocalParking,
  LocalAtm,
  LocalPlay,
  LocalActivity,
  LocalFlorist,
  LocalLaundryService,
  LocalCarWash,
  LocalConvenienceStore,
  LocalDining,
  LocalPizza,
  LocalShipping,
  LocalSee,
  LocalPrintshop,
  LocalPostOffice,
  LocalPolice,
  LocalFireDepartment
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar as RechartsRadar,
  ScatterChart,
  Scatter,
  ComposedChart,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList,
  ReferenceLine,
  ReferenceArea,
  Brush,
  ErrorBar
} from 'recharts';

const PersonalizedLearningPathways = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPathway, setSelectedPathway] = useState('communication');
  const [learningMode, setLearningMode] = useState('adaptive');
  const [currentModule, setCurrentModule] = useState(null);
  const [isLearning, setIsLearning] = useState(false);
  const [learningProgress, setLearningProgress] = useState({});
  const [completedModules, setCompletedModules] = useState([]);
  const [personalizedRecommendations, setPersonalizedRecommendations] = useState([]);
  const [learningStyle, setLearningStyle] = useState('visual');
  const [difficultyLevel, setDifficultyLevel] = useState(3);

  // Learning Pathways Configuration
  const learningPathways = {
    communication: {
      name: 'Communication Mastery',
      icon: <Chat />,
      color: '#2196F3',
      description: 'Master the art of effective relationship communication',
      totalModules: 12,
      estimatedTime: '6-8 weeks',
      difficulty: 'Intermediate',
      modules: [
        {
          id: 'comm-1',
          title: 'Foundation of Healthy Communication',
          description: 'Understanding communication basics and relationship dynamics',
          duration: '45 minutes',
          type: 'theory',
          difficulty: 'beginner',
          prerequisites: [],
          skills: ['Active Listening', 'Empathy', 'Clarity'],
          completed: true,
          score: 92
        },
        {
          id: 'comm-2',
          title: 'Active Listening Techniques',
          description: 'Practical exercises for becoming a better listener',
          duration: '60 minutes',
          type: 'practical',
          difficulty: 'beginner',
          prerequisites: ['comm-1'],
          skills: ['Active Listening', 'Attention', 'Reflection'],
          completed: true,
          score: 88
        },
        {
          id: 'comm-3',
          title: 'Emotional Expression & Validation',
          description: 'Learning to express and validate emotions effectively',
          duration: '75 minutes',
          type: 'interactive',
          difficulty: 'intermediate',
          prerequisites: ['comm-1', 'comm-2'],
          skills: ['Emotional Intelligence', 'Validation', 'Expression'],
          completed: false,
          score: null
        },
        {
          id: 'comm-4',
          title: 'Non-Verbal Communication Mastery',
          description: 'Understanding and improving body language and tone',
          duration: '50 minutes',
          type: 'practical',
          difficulty: 'intermediate',
          prerequisites: ['comm-2'],
          skills: ['Body Language', 'Tone Awareness', 'Presence'],
          completed: false,
          score: null
        }
      ]
    },
    intimacy: {
      name: 'Intimacy & Connection',
      icon: <Favorite />,
      color: '#E91E63',
      description: 'Build deeper emotional and physical intimacy',
      totalModules: 10,
      estimatedTime: '5-7 weeks',
      difficulty: 'Intermediate',
      modules: [
        {
          id: 'int-1',
          title: 'Understanding Intimacy Types',
          description: 'Exploring emotional, physical, and spiritual intimacy',
          duration: '40 minutes',
          type: 'theory',
          difficulty: 'beginner',
          prerequisites: [],
          skills: ['Intimacy Awareness', 'Connection Types', 'Vulnerability'],
          completed: true,
          score: 95
        },
        {
          id: 'int-2',
          title: 'Building Emotional Safety',
          description: 'Creating a safe space for vulnerability and openness',
          duration: '55 minutes',
          type: 'practical',
          difficulty: 'intermediate',
          prerequisites: ['int-1'],
          skills: ['Trust Building', 'Safety Creation', 'Vulnerability'],
          completed: false,
          score: null
        }
      ]
    },
    conflict: {
      name: 'Conflict Resolution',
      icon: <Psychology />,
      color: '#FF9800',
      description: 'Transform conflicts into opportunities for growth',
      totalModules: 8,
      estimatedTime: '4-6 weeks',
      difficulty: 'Advanced',
      modules: [
        {
          id: 'conf-1',
          title: 'Understanding Conflict Dynamics',
          description: 'The psychology behind relationship conflicts',
          duration: '50 minutes',
          type: 'theory',
          difficulty: 'intermediate',
          prerequisites: [],
          skills: ['Conflict Analysis', 'Pattern Recognition', 'Psychology'],
          completed: false,
          score: null
        }
      ]
    },
    growth: {
      name: 'Personal Growth Together',
      icon: <SelfImprovement />,
      color: '#9C27B0',
      description: 'Grow individually while strengthening your bond',
      totalModules: 15,
      estimatedTime: '8-10 weeks',
      difficulty: 'Intermediate',
      modules: [
        {
          id: 'growth-1',
          title: 'Individual vs. Couple Growth',
          description: 'Balancing personal development with relationship needs',
          duration: '45 minutes',
          type: 'theory',
          difficulty: 'intermediate',
          prerequisites: [],
          skills: ['Balance', 'Self-Awareness', 'Goal Setting'],
          completed: true,
          score: 90
        }
      ]
    }
  };

  // Learning Styles and Preferences
  const learningStyles = {
    visual: {
      name: 'Visual Learner',
      description: 'Learn best through diagrams, videos, and visual content',
      icon: <Visibility />,
      methods: ['Infographics', 'Video Lessons', 'Interactive Diagrams', 'Visual Exercises']
    },
    auditory: {
      name: 'Auditory Learner',
      description: 'Learn best through listening and discussion',
      icon: <Hearing />,
      methods: ['Audio Lessons', 'Podcasts', 'Discussion Forums', 'Voice Exercises']
    },
    kinesthetic: {
      name: 'Kinesthetic Learner',
      description: 'Learn best through hands-on practice and experience',
      icon: <TouchApp />,
      methods: ['Role Playing', 'Practical Exercises', 'Real-world Practice', 'Interactive Simulations']
    },
    reading: {
      name: 'Reading/Writing Learner',
      description: 'Learn best through text-based content and writing',
      icon: <MenuBook />,
      methods: ['Articles', 'Workbooks', 'Journaling', 'Written Exercises']
    }
  };

  // Adaptive Learning Algorithm Simulation
  const adaptiveLearningFeatures = {
    difficultyAdjustment: {
      name: 'Dynamic Difficulty Adjustment',
      description: 'AI automatically adjusts content difficulty based on your performance',
      active: true
    },
    personalizedPacing: {
      name: 'Personalized Pacing',
      description: 'Learn at your optimal speed with AI-recommended timing',
      active: true
    },
    contentRecommendation: {
      name: 'Smart Content Recommendations',
      description: 'AI suggests the most relevant modules based on your relationship needs',
      active: true
    },
    learningStyleAdaptation: {
      name: 'Learning Style Adaptation',
      description: 'Content automatically adapts to your preferred learning style',
      active: true
    },
    progressPrediction: {
      name: 'Progress Prediction',
      description: 'AI predicts your learning trajectory and suggests optimizations',
      active: true
    }
  };

  // Skill Development Tracking
  const skillCategories = {
    communication: {
      name: 'Communication Skills',
      skills: [
        { name: 'Active Listening', level: 8, maxLevel: 10, progress: 85 },
        { name: 'Emotional Expression', level: 6, maxLevel: 10, progress: 65 },
        { name: 'Conflict Communication', level: 4, maxLevel: 10, progress: 45 },
        { name: 'Non-Verbal Awareness', level: 5, maxLevel: 10, progress: 55 }
      ]
    },
    emotional: {
      name: 'Emotional Intelligence',
      skills: [
        { name: 'Self-Awareness', level: 7, maxLevel: 10, progress: 75 },
        { name: 'Empathy', level: 8, maxLevel: 10, progress: 85 },
        { name: 'Emotional Regulation', level: 6, maxLevel: 10, progress: 65 },
        { name: 'Social Skills', level: 7, maxLevel: 10, progress: 75 }
      ]
    },
    relationship: {
      name: 'Relationship Skills',
      skills: [
        { name: 'Trust Building', level: 9, maxLevel: 10, progress: 95 },
        { name: 'Intimacy Development', level: 6, maxLevel: 10, progress: 65 },
        { name: 'Conflict Resolution', level: 5, maxLevel: 10, progress: 55 },
        { name: 'Support Provision', level: 8, maxLevel: 10, progress: 85 }
      ]
    }
  };

  // Learning Analytics and Insights
  const learningAnalytics = {
    totalTimeSpent: '24.5 hours',
    modulesCompleted: 8,
    totalModules: 45,
    averageScore: 89.2,
    streakDays: 12,
    skillsImproved: 15,
    certificatesEarned: 3,
    learningVelocity: 'Above Average'
  };

  // Personalized Recommendations
  useEffect(() => {
    // Simulate AI-generated personalized recommendations
    const recommendations = [
      {
        id: 1,
        type: 'module',
        title: 'Emotional Expression & Validation',
        reason: 'Based on your communication assessment, this module will help improve emotional clarity',
        priority: 'high',
        estimatedImpact: 85,
        pathway: 'communication'
      },
      {
        id: 2,
        type: 'skill',
        title: 'Conflict De-escalation Practice',
        reason: 'Your recent relationship patterns suggest focusing on conflict management skills',
        priority: 'medium',
        estimatedImpact: 72,
        pathway: 'conflict'
      },
      {
        id: 3,
        type: 'review',
        title: 'Active Listening Refresher',
        reason: 'Reinforcing your strong listening skills will enhance overall communication',
        priority: 'low',
        estimatedImpact: 65,
        pathway: 'communication'
      }
    ];
    setPersonalizedRecommendations(recommendations);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const startModule = (moduleId) => {
    setCurrentModule(moduleId);
    setIsLearning(true);
  };

  const completeModule = (moduleId, score) => {
    setCompletedModules([...completedModules, moduleId]);
    setLearningProgress({
      ...learningProgress,
      [moduleId]: { completed: true, score: score }
    });
    setIsLearning(false);
    setCurrentModule(null);
  };

  const TabPanel = ({ children, value, index }) => (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      p: 3
    }}>
      <Box sx={{ maxWidth: 1600, mx: 'auto' }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ 
                    width: 64, 
                    height: 64, 
                    background: 'linear-gradient(135deg, #9C27B0 0%, #E1BEE7 100%)' 
                  }}>
                    <School sx={{ fontSize: 32 }} />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      Personalized Learning Pathways
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      AI-powered adaptive learning tailored to your relationship goals and learning style
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <FormControl size="small" sx={{ minWidth: 140 }}>
                    <InputLabel>Learning Mode</InputLabel>
                    <Select value={learningMode} onChange={(e) => setLearningMode(e.target.value)} label="Learning Mode">
                      <MenuItem value="adaptive">Adaptive AI</MenuItem>
                      <MenuItem value="structured">Structured Path</MenuItem>
                      <MenuItem value="flexible">Flexible Learning</MenuItem>
                      <MenuItem value="intensive">Intensive Mode</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" sx={{ minWidth: 140 }}>
                    <InputLabel>Learning Style</InputLabel>
                    <Select value={learningStyle} onChange={(e) => setLearningStyle(e.target.value)} label="Learning Style">
                      <MenuItem value="visual">Visual</MenuItem>
                      <MenuItem value="auditory">Auditory</MenuItem>
                      <MenuItem value="kinesthetic">Kinesthetic</MenuItem>
                      <MenuItem value="reading">Reading/Writing</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <Tooltip title="Difficulty Level">
                    <Box sx={{ width: 120 }}>
                      <Typography variant="caption" display="block" gutterBottom>
                        Difficulty: {difficultyLevel}/5
                      </Typography>
                      <Slider
                        value={difficultyLevel}
                        onChange={(e, newValue) => setDifficultyLevel(newValue)}
                        min={1}
                        max={5}
                        step={1}
                        size="small"
                      />
                    </Box>
                  </Tooltip>
                </Box>
              </Box>

              {/* Learning Analytics Dashboard */}
              <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)', color: 'white' }}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                      Learning Progress
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                      {Math.round((learningAnalytics.modulesCompleted / learningAnalytics.totalModules) * 100)}%
                    </Typography>
                    <Typography variant="body1">
                      {learningAnalytics.modulesCompleted} of {learningAnalytics.totalModules} modules
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Learning Analytics
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Time Spent: {learningAnalytics.totalTimeSpent}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Average Score: {learningAnalytics.averageScore}%
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Learning Streak: {learningAnalytics.streakDays} days
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.9 }}>
                          Skills Improved: {learningAnalytics.skillsImproved}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  
                  <Grid item xs={12} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        Learning Velocity
                      </Typography>
                      <Typography variant="h5" fontWeight="bold">
                        {learningAnalytics.learningVelocity}
                      </Typography>
                      <Chip 
                        label={`${learningAnalytics.certificatesEarned} Certificates`}
                        sx={{ mt: 1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Card>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab icon={<School />} label="Learning Pathways" />
            <Tab icon={<AutoAwesome />} label="AI Recommendations" />
            <Tab icon={<TrendingUp />} label="Skill Development" />
            <Tab icon={<Assignment />} label="Current Learning" />
            <Tab icon={<Analytics />} label="Progress Analytics" />
            <Tab icon={<Settings />} label="Learning Preferences" />
          </Tabs>

          {/* Tab 1: Learning Pathways */}
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Available Learning Pathways
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Choose from our comprehensive learning pathways designed by relationship experts and powered by AI personalization.
                </Typography>
              </Grid>

              {Object.entries(learningPathways).map(([key, pathway]) => (
                <Grid item xs={12} md={6} key={key}>
                  <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => setSelectedPathway(key)}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: pathway.color, width: 56, height: 56 }}>
                          {pathway.icon}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6">
                            {pathway.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {pathway.totalModules} modules • {pathway.estimatedTime}
                          </Typography>
                        </Box>
                        <Chip 
                          label={pathway.difficulty}
                          color={
                            pathway.difficulty === 'Beginner' ? 'success' :
                            pathway.difficulty === 'Intermediate' ? 'warning' : 'error'
                          }
                          size="small"
                        />
                      </Box>
                      
                      <Typography variant="body1" gutterBottom>
                        {pathway.description}
                      </Typography>
                      
                      <LinearProgress 
                        variant="determinate" 
                        value={(pathway.modules.filter(m => m.completed).length / pathway.modules.length) * 100}
                        sx={{ 
                          mb: 2,
                          height: 8,
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: pathway.color
                          }
                        }}
                      />
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Progress: {pathway.modules.filter(m => m.completed).length} of {pathway.modules.length} modules completed
                      </Typography>
                      
                      <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ mt: 2, backgroundColor: pathway.color }}
                        startIcon={<PlayArrow />}
                      >
                        {pathway.modules.filter(m => m.completed).length === 0 ? 'Start Pathway' : 'Continue Learning'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {/* Selected Pathway Details */}
              {selectedPathway && (
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {learningPathways[selectedPathway].name} - Module Overview
                      </Typography>
                      
                      <Timeline>
                        {learningPathways[selectedPathway].modules.map((module, index) => (
                          <TimelineItem key={module.id}>
                            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                              {module.duration}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                              <TimelineDot color={module.completed ? 'success' : 'grey'}>
                                {module.completed ? <CheckCircle /> : <RadioButtonChecked />}
                              </TimelineDot>
                              {index < learningPathways[selectedPathway].modules.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                              <Typography variant="h6" component="span">
                                {module.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                {module.description}
                              </Typography>
                              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
                                <Chip label={module.type} size="small" variant="outlined" />
                                <Chip label={module.difficulty} size="small" variant="outlined" />
                                {module.completed && (
                                  <Chip 
                                    label={`Score: ${module.score}%`} 
                                    size="small" 
                                    color="success"
                                  />
                                )}
                              </Box>
                              <Typography variant="body2" color="text.secondary" gutterBottom>
                                Skills: {module.skills.join(', ')}
                              </Typography>
                              {!module.completed && (
                                <Button 
                                  size="small" 
                                  variant="contained"
                                  startIcon={<PlayArrow />}
                                  onClick={() => startModule(module.id)}
                                  disabled={module.prerequisites.some(prereq => 
                                    !learningPathways[selectedPathway].modules.find(m => m.id === prereq)?.completed
                                  )}
                                >
                                  Start Module
                                </Button>
                              )}
                            </TimelineContent>
                          </TimelineItem>
                        ))}
                      </Timeline>
                    </CardContent>
                  </Card>
                </Grid>
              )}
            </Grid>
          </TabPanel>

          {/* Tab 2: AI Recommendations */}
          <TabPanel value={activeTab} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  AI-Powered Learning Recommendations
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Our AI analyzes your relationship patterns, learning progress, and goals to provide personalized recommendations.
                </Typography>
              </Grid>

              {/* Adaptive Learning Features */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Adaptive Learning Features
                    </Typography>
                    <Grid container spacing={2}>
                      {Object.entries(adaptiveLearningFeatures).map(([key, feature]) => (
                        <Grid item xs={12} md={6} key={key}>
                          <Paper sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                              <Avatar sx={{ bgcolor: feature.active ? 'success.main' : 'grey.400' }}>
                                <AutoAwesome />
                              </Avatar>
                              <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle1" fontWeight="bold">
                                  {feature.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {feature.description}
                                </Typography>
                              </Box>
                              <Switch checked={feature.active} />
                            </Box>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Personalized Recommendations */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Personalized Recommendations
                </Typography>
                {personalizedRecommendations.map((recommendation) => (
                  <Card key={recommendation.id} sx={{ mb: 2 }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar sx={{ 
                            bgcolor: learningPathways[recommendation.pathway]?.color || '#2196F3' 
                          }}>
                            {learningPathways[recommendation.pathway]?.icon || <AutoAwesome />}
                          </Avatar>
                          <Box>
                            <Typography variant="h6">
                              {recommendation.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {learningPathways[recommendation.pathway]?.name || 'General Recommendation'}
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Chip 
                          label={recommendation.priority.toUpperCase()}
                          color={
                            recommendation.priority === 'high' ? 'error' :
                            recommendation.priority === 'medium' ? 'warning' : 'success'
                          }
                          size="small"
                        />
                      </Box>
                      
                      <Alert severity="info" sx={{ mb: 2 }}>
                        <AlertTitle>AI Recommendation</AlertTitle>
                        {recommendation.reason}
                      </Alert>
                      
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                        <Chip 
                          label={`Estimated Impact: ${recommendation.estimatedImpact}%`}
                          variant="outlined"
                          size="small"
                        />
                        <Chip 
                          label={`Type: ${recommendation.type}`}
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button variant="contained" startIcon={<PlayArrow />}>
                          Start Learning
                        </Button>
                        <Button variant="outlined" startIcon={<Schedule />}>
                          Schedule Later
                        </Button>
                        <Button variant="outlined" startIcon={<Info />}>
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 3: Skill Development */}
          <TabPanel value={activeTab} index={2}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Skill Development Tracking
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Monitor your progress across key relationship skills and identify areas for improvement.
                </Typography>
              </Grid>

              {Object.entries(skillCategories).map(([categoryKey, category]) => (
                <Grid item xs={12} md={4} key={categoryKey}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {category.name}
                      </Typography>
                      
                      {category.skills.map((skill, index) => (
                        <Box key={index} sx={{ mb: 3 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                            <Typography variant="body2" fontWeight="bold">
                              {skill.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Level {skill.level}/{skill.maxLevel}
                            </Typography>
                          </Box>
                          
                          <LinearProgress 
                            variant="determinate" 
                            value={skill.progress}
                            sx={{ 
                              mb: 1,
                              height: 6,
                              borderRadius: 3
                            }}
                          />
                          
                          <Typography variant="caption" color="text.secondary">
                            {skill.progress}% mastery
                          </Typography>
                        </Box>
                      ))}
                      
                      <Button 
                        variant="outlined" 
                        fullWidth 
                        startIcon={<TrendingUp />}
                        sx={{ mt: 2 }}
                      >
                        Improve Skills
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {/* Skill Development Chart */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Skill Development Over Time
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={[
                        { month: 'Jan', communication: 65, emotional: 70, relationship: 75 },
                        { month: 'Feb', communication: 68, emotional: 72, relationship: 78 },
                        { month: 'Mar', communication: 72, emotional: 75, relationship: 80 },
                        { month: 'Apr', communication: 75, emotional: 78, relationship: 82 },
                        { month: 'May', communication: 78, emotional: 80, relationship: 85 },
                        { month: 'Jun', communication: 82, emotional: 83, relationship: 87 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line type="monotone" dataKey="communication" stroke="#2196F3" strokeWidth={3} />
                        <Line type="monotone" dataKey="emotional" stroke="#FF9800" strokeWidth={3} />
                        <Line type="monotone" dataKey="relationship" stroke="#4CAF50" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 4: Current Learning */}
          <TabPanel value={activeTab} index={3}>
            <Grid container spacing={3}>
              {currentModule ? (
                <>
                  <Grid item xs={12}>
                    <Alert severity="info" sx={{ mb: 3 }}>
                      <AlertTitle>Active Learning Session</AlertTitle>
                      You are currently learning: {currentModule}
                    </Alert>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          Module: Emotional Expression & Validation
                        </Typography>
                        
                        <LinearProgress 
                          variant="determinate" 
                          value={65}
                          sx={{ mb: 2, height: 8, borderRadius: 4 }}
                        />
                        
                        <Typography variant="body1" gutterBottom>
                          <strong>Learning Objective:</strong> Master the art of expressing emotions clearly and validating your partner's feelings effectively.
                        </Typography>
                        
                        <Typography variant="body1" gutterBottom>
                          <strong>Current Section:</strong> Understanding Emotional Validation Techniques
                        </Typography>
                        
                        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                          <Button variant="contained" startIcon={<PlayArrow />}>
                            Continue Learning
                          </Button>
                          <Button variant="outlined" startIcon={<Pause />}>
                            Pause Session
                          </Button>
                          <Button variant="outlined" startIcon={<Bookmark />}>
                            Bookmark
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              ) : (
                <Grid item xs={12}>
                  <Paper sx={{ p: 4, textAlign: 'center' }}>
                    <School sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      No Active Learning Session
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                      Start a new module or continue from where you left off.
                    </Typography>
                    <Button 
                      variant="contained" 
                      startIcon={<PlayArrow />}
                      onClick={() => setActiveTab(0)}
                    >
                      Browse Learning Pathways
                    </Button>
                  </Paper>
                </Grid>
              )}

              {/* Recent Learning Activity */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Recent Learning Activity
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Module</TableCell>
                        <TableCell>Pathway</TableCell>
                        <TableCell>Time Spent</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { date: '2025-01-07', module: 'Active Listening Techniques', pathway: 'Communication', time: '60 min', score: 88, status: 'Completed' },
                        { date: '2025-01-06', module: 'Understanding Intimacy Types', pathway: 'Intimacy', time: '40 min', score: 95, status: 'Completed' },
                        { date: '2025-01-05', module: 'Individual vs. Couple Growth', pathway: 'Growth', time: '45 min', score: 90, status: 'Completed' },
                        { date: '2025-01-04', module: 'Foundation of Healthy Communication', pathway: 'Communication', time: '45 min', score: 92, status: 'Completed' }
                      ].map((activity, index) => (
                        <TableRow key={index}>
                          <TableCell>{activity.date}</TableCell>
                          <TableCell>{activity.module}</TableCell>
                          <TableCell>{activity.pathway}</TableCell>
                          <TableCell>{activity.time}</TableCell>
                          <TableCell>
                            <Chip 
                              label={`${activity.score}%`}
                              color={activity.score >= 90 ? 'success' : activity.score >= 80 ? 'warning' : 'default'}
                              size="small"
                            />
                          </TableCell>
                          <TableCell>
                            <Chip 
                              label={activity.status}
                              color="success"
                              size="small"
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 5: Progress Analytics */}
          <TabPanel value={activeTab} index={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Learning Progress Analytics
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Comprehensive analytics to track your learning journey and optimize your progress.
                </Typography>
              </Grid>

              {/* Learning Statistics */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Learning Statistics
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {[
                        { label: 'Total Time Spent', value: learningAnalytics.totalTimeSpent, icon: <AccessTime /> },
                        { label: 'Average Score', value: `${learningAnalytics.averageScore}%`, icon: <Grade /> },
                        { label: 'Learning Streak', value: `${learningAnalytics.streakDays} days`, icon: <EmojiEvents /> },
                        { label: 'Skills Improved', value: learningAnalytics.skillsImproved, icon: <TrendingUp /> }
                      ].map((stat, index) => (
                        <Grid item xs={6} key={index}>
                          <Paper sx={{ p: 2, textAlign: 'center' }}>
                            <Avatar sx={{ mx: 'auto', mb: 1, bgcolor: 'primary.main' }}>
                              {stat.icon}
                            </Avatar>
                            <Typography variant="h6" fontWeight="bold">
                              {stat.value}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {stat.label}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Learning Velocity Chart */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Learning Velocity
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={[
                        { week: 'W1', modules: 2, hours: 3.5 },
                        { week: 'W2', modules: 3, hours: 4.2 },
                        { week: 'W3', modules: 2, hours: 3.8 },
                        { week: 'W4', modules: 4, hours: 5.1 },
                        { week: 'W5', modules: 3, hours: 4.5 },
                        { week: 'W6', modules: 5, hours: 6.2 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <RechartsTooltip />
                        <Area type="monotone" dataKey="modules" stackId="1" stroke="#2196F3" fill="#2196F3" />
                        <Area type="monotone" dataKey="hours" stackId="2" stroke="#4CAF50" fill="#4CAF50" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Pathway Progress Comparison */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Pathway Progress Comparison
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsBarChart data={Object.entries(learningPathways).map(([key, pathway]) => ({
                        pathway: pathway.name.split(' ')[0],
                        completed: pathway.modules.filter(m => m.completed).length,
                        total: pathway.modules.length,
                        progress: (pathway.modules.filter(m => m.completed).length / pathway.modules.length) * 100
                      }))}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="pathway" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="completed" fill="#4CAF50" name="Completed Modules" />
                        <Bar dataKey="total" fill="#E0E0E0" name="Total Modules" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 6: Learning Preferences */}
          <TabPanel value={activeTab} index={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Learning Preferences & Customization
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Customize your learning experience to match your preferences and optimize your progress.
                </Typography>
              </Grid>

              {/* Learning Style Configuration */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Learning Style
                    </Typography>
                    
                    <FormControl fullWidth sx={{ mb: 3 }}>
                      <InputLabel>Select Your Learning Style</InputLabel>
                      <Select 
                        value={learningStyle} 
                        onChange={(e) => setLearningStyle(e.target.value)}
                        label="Select Your Learning Style"
                      >
                        {Object.entries(learningStyles).map(([key, style]) => (
                          <MenuItem key={key} value={key}>
                            {style.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    
                    <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {learningStyles[learningStyle].icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {learningStyles[learningStyle].name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {learningStyles[learningStyle].description}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="subtitle2" gutterBottom>
                        Recommended Methods:
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {learningStyles[learningStyle].methods.map((method, index) => (
                          <Chip key={index} label={method} size="small" variant="outlined" />
                        ))}
                      </Box>
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>

              {/* Learning Preferences */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Learning Preferences
                    </Typography>
                    
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <AutoAwesome />
                        </ListItemIcon>
                        <ListItemText primary="Adaptive Difficulty" secondary="AI adjusts content difficulty automatically" />
                        <Switch defaultChecked />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Notifications />
                        </ListItemIcon>
                        <ListItemText primary="Learning Reminders" secondary="Daily notifications to maintain learning streak" />
                        <Switch defaultChecked />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Quiz />
                        </ListItemIcon>
                        <ListItemText primary="Interactive Quizzes" secondary="Include quizzes and assessments in modules" />
                        <Switch defaultChecked />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <Groups />
                        </ListItemIcon>
                        <ListItemText primary="Peer Learning" secondary="Connect with other learners for discussions" />
                        <Switch />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* Learning Schedule */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Learning Schedule
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Preferred Learning Times
                        </Typography>
                        <List>
                          {[
                            { day: 'Monday', time: '7:00 PM - 8:00 PM', enabled: true },
                            { day: 'Tuesday', time: '7:00 PM - 8:00 PM', enabled: true },
                            { day: 'Wednesday', time: '7:00 PM - 8:00 PM', enabled: false },
                            { day: 'Thursday', time: '7:00 PM - 8:00 PM', enabled: true },
                            { day: 'Friday', time: '6:00 PM - 7:00 PM', enabled: true },
                            { day: 'Saturday', time: '10:00 AM - 11:00 AM', enabled: true },
                            { day: 'Sunday', time: '10:00 AM - 11:00 AM', enabled: false }
                          ].map((schedule, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <Schedule />
                              </ListItemIcon>
                              <ListItemText 
                                primary={schedule.day} 
                                secondary={schedule.time}
                              />
                              <Switch checked={schedule.enabled} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Learning Goals
                        </Typography>
                        <Paper sx={{ p: 2 }}>
                          <Typography variant="body2" gutterBottom>
                            Weekly Learning Goal
                          </Typography>
                          <Slider
                            defaultValue={3}
                            min={1}
                            max={7}
                            step={1}
                            marks={[
                              { value: 1, label: '1 hour' },
                              { value: 3, label: '3 hours' },
                              { value: 5, label: '5 hours' },
                              { value: 7, label: '7 hours' }
                            ]}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `${value} hours`}
                          />
                          
                          <Typography variant="body2" gutterBottom sx={{ mt: 3 }}>
                            Modules per Week
                          </Typography>
                          <Slider
                            defaultValue={2}
                            min={1}
                            max={5}
                            step={1}
                            marks={[
                              { value: 1, label: '1' },
                              { value: 2, label: '2' },
                              { value: 3, label: '3' },
                              { value: 4, label: '4' },
                              { value: 5, label: '5' }
                            ]}
                            valueLabelDisplay="auto"
                          />
                        </Paper>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Card>

        {/* Floating Action Button for Quick Learning */}
        <SpeedDial
          ariaLabel="Quick Learning Actions"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<PlayArrow />}
            tooltipTitle="Continue Learning"
            onClick={() => setActiveTab(3)}
          />
          <SpeedDialAction
            icon={<AutoAwesome />}
            tooltipTitle="AI Recommendations"
            onClick={() => setActiveTab(1)}
          />
          <SpeedDialAction
            icon={<TrendingUp />}
            tooltipTitle="View Progress"
            onClick={() => setActiveTab(4)}
          />
          <SpeedDialAction
            icon={<Settings />}
            tooltipTitle="Learning Settings"
            onClick={() => setActiveTab(5)}
          />
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default PersonalizedLearningPathways;

