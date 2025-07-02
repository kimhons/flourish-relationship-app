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
  Skeleton
} from '@mui/material';
import {
  SmartToy,
  Psychology,
  AutoAwesome,
  Insights,
  TrendingUp,
  School,
  EmojiEvents,
  Favorite,
  Chat,
  Groups,
  SelfImprovement,
  HealthAndSafety,
  Face,
  Star,
  Grade,
  MenuBook,
  LibraryBooks,
  Article,
  Description,
  Assignment,
  Task,
  CheckBox,
  RadioButtonChecked,
  ToggleOn,
  ToggleOff,
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
  Schedule,
  Timer,
  Alarm,
  AccessTime,
  DateRange,
  CalendarToday,
  Event,
  EventNote,
  Today,
  Update,
  Sync,
  SyncAlt,
  Loop,
  Repeat,
  RepeatOne,
  Shuffle,
  SkipNext,
  SkipPrevious,
  FastForward,
  FastRewind,
  Stop,
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeDown,
  VolumeOff,
  VolumeMute,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Call,
  CallEnd,
  Message,
  Email,
  Notifications,
  NotificationsOff,
  Settings,
  SettingsApplications,
  Tune,
  Build,
  Construction,
  Engineering,
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
  MyLocation,
  Navigation,
  Explore,
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
  LocalLibrary,
  LocalMovies,
  LocalPlay,
  LocalActivity,
  LocalFlorist,
  LocalLaundryService,
  LocalCarWash,
  LocalConvenienceStore,
  LocalDining,
  LocalPizza,
  LocalShipping,
  LocalOffer,
  LocalSee,
  LocalPrintshop,
  LocalPostOffice,
  LocalPolice,
  LocalFireDepartment,
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
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Add,
  Remove,
  Clear,
  Close,
  Cancel,
  Check,
  Done,
  DoneAll,
  Save,
  Edit,
  Delete,
  DeleteForever,
  Restore as RestoreIcon,
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
  Refresh,
  Cached,
  Autorenew,
  Sync as SyncIcon,
  SyncAlt as SyncAltIcon,
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
  VisibilityOff as VisibilityOffIcon,
  Preview,
  Pageview,
  FindInPage,
  FindReplace,
  Search,
  SearchOff,
  Zoom,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap,
  CenterFocusStrong,
  CenterFocusWeak,
  FilterCenterFocus,
  MyLocation as MyLocationIcon,
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
  Explore as ExploreIcon,
  ExploreOff,
  Compass,
  Assistant,
  AssistantPhoto,
  Recommend,
  ThumbUp,
  ThumbDown,
  ThumbsUpDown,
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
  EmojiEvents as EmojiEventsIcon,
  Celebration,
  Cake,
  CardGiftcard,
  Redeem,
  LocalOffer as LocalOfferIcon,
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
  ShowChart,
  Equalizer,
  BarChart,
  PieChart,
  DonutLarge as DonutLargeIcon,
  DonutSmall as DonutSmallIcon,
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  Timeline as TimelineIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Radar as RadarIcon,
  MultilineChart,
  StackedLineChart,
  StackedBarChart,
  Leaderboard,
  Poll,
  HowToVote,
  Ballot,
  CheckCircle,
  CheckCircleOutline,
  Cancel as CancelIcon,
  Highlight,
  HighlightOff,
  Error,
  ErrorOutline,
  Warning,
  WarningAmber,
  Info,
  InfoOutlined,
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
  Badge,
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
  Groups as GroupsIcon,
  Diversity1,
  Diversity2,
  Diversity3,
  Family,
  ChildCare,
  ChildFriendly,
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  AutoStories,
  ImportContacts,
  ChromeReaderMode,
  Book,
  Bookmark,
  BookmarkBorder,
  BookmarkAdd,
  BookmarkRemove,
  Bookmarks,
  LocalLibrary as LocalLibraryIcon,
  CollectionsBookmark,
  Class,
  OndemandVideo,
  VideoLibrary,
  VideoCall,
  VideoSettings,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  VideoLabel,
  Theaters,
  Movie,
  MovieCreation,
  MovieFilter,
  LocalMovies as LocalMoviesIcon,
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
  CollectionsBookmark as CollectionsBookmarkIcon,
  ColorLens,
  Palette,
  FormatPaint,
  Brush,
  Edit as EditIcon,
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
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  ThumbsUpDown as ThumbsUpDownIcon
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

const AdvancedAICoachingEngine = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [coachingSession, setCoachingSession] = useState(null);
  const [isCoachingActive, setIsCoachingActive] = useState(false);
  const [coachingMode, setCoachingMode] = useState('adaptive');
  const [personalityProfile, setPersonalityProfile] = useState('empathetic');
  const [interventionLevel, setInterventionLevel] = useState(3);
  const [realTimeCoaching, setRealTimeCoaching] = useState(true);
  const [coachingHistory, setCoachingHistory] = useState([]);
  const [currentInsight, setCurrentInsight] = useState(null);
  const [learningProgress, setLearningProgress] = useState({});

  // Dr. Love AI Coach Configuration
  const drLoveConfig = {
    name: 'Dr. Love',
    expertise: 96.5,
    specializations: [
      'Relationship Psychology',
      'Communication Enhancement',
      'Conflict Resolution',
      'Intimacy Building',
      'Personal Growth',
      'Crisis Intervention'
    ],
    personalityTypes: {
      empathetic: {
        name: 'Empathetic Guide',
        description: 'Warm, understanding, and emotionally supportive',
        tone: 'compassionate',
        approach: 'gentle guidance'
      },
      analytical: {
        name: 'Strategic Analyst',
        description: 'Data-driven, logical, and solution-focused',
        tone: 'professional',
        approach: 'systematic analysis'
      },
      motivational: {
        name: 'Growth Catalyst',
        description: 'Energetic, inspiring, and goal-oriented',
        tone: 'encouraging',
        approach: 'achievement-focused'
      },
      wise: {
        name: 'Relationship Sage',
        description: 'Experienced, thoughtful, and perspective-giving',
        tone: 'reflective',
        approach: 'wisdom-sharing'
      }
    }
  };

  // Coaching Areas and Modules
  const coachingAreas = {
    communication: {
      name: 'Communication Mastery',
      icon: <Chat />,
      color: '#2196F3',
      modules: [
        'Active Listening Techniques',
        'Emotional Expression Skills',
        'Conflict Communication',
        'Non-Verbal Communication',
        'Digital Communication Etiquette'
      ],
      currentLevel: 7,
      maxLevel: 10,
      progress: 72
    },
    intimacy: {
      name: 'Intimacy & Connection',
      icon: <Favorite />,
      color: '#E91E63',
      modules: [
        'Emotional Intimacy Building',
        'Physical Affection Enhancement',
        'Vulnerability & Trust',
        'Shared Experience Creation',
        'Intimacy Maintenance'
      ],
      currentLevel: 6,
      maxLevel: 10,
      progress: 65
    },
    conflict: {
      name: 'Conflict Resolution',
      icon: <Psychology />,
      color: '#FF9800',
      modules: [
        'De-escalation Techniques',
        'Problem-Solving Strategies',
        'Compromise & Negotiation',
        'Forgiveness & Repair',
        'Prevention Strategies'
      ],
      currentLevel: 5,
      maxLevel: 10,
      progress: 58
    },
    growth: {
      name: 'Personal Growth',
      icon: <SelfImprovement />,
      color: '#9C27B0',
      modules: [
        'Self-Awareness Development',
        'Goal Setting & Achievement',
        'Habit Formation',
        'Mindfulness & Presence',
        'Life Vision Creation'
      ],
      currentLevel: 8,
      maxLevel: 10,
      progress: 84
    },
    support: {
      name: 'Mutual Support',
      icon: <Groups />,
      color: '#4CAF50',
      modules: [
        'Emotional Support Skills',
        'Practical Help Coordination',
        'Stress Management Together',
        'Goal Support Systems',
        'Crisis Support Protocols'
      ],
      currentLevel: 6,
      maxLevel: 10,
      progress: 67
    },
    stability: {
      name: 'Relationship Stability',
      icon: <HealthAndSafety />,
      color: '#607D8B',
      modules: [
        'Routine Building',
        'Trust Maintenance',
        'Commitment Strengthening',
        'Future Planning',
        'Stability Monitoring'
      ],
      currentLevel: 7,
      maxLevel: 10,
      progress: 75
    }
  };

  // AI Coaching Insights and Recommendations
  const aiInsights = [
    {
      id: 1,
      type: 'communication',
      priority: 'high',
      title: 'Communication Pattern Alert',
      insight: 'Your response time to emotional messages has increased by 40% this week. This may signal emotional distance or overwhelm.',
      recommendation: 'Practice the "24-Hour Rule" - acknowledge emotional messages within 2 hours, even if you need time to process.',
      confidence: 94.2,
      impact: 'high',
      timeframe: '3-7 days'
    },
    {
      id: 2,
      type: 'intimacy',
      priority: 'medium',
      title: 'Intimacy Opportunity',
      insight: 'Your shared activities have decreased by 25% this month. Quality time is crucial for maintaining emotional connection.',
      recommendation: 'Schedule 2 dedicated "connection hours" per week without devices. Try the "36 Questions" exercise for deeper intimacy.',
      confidence: 89.7,
      impact: 'medium',
      timeframe: '1-2 weeks'
    },
    {
      id: 3,
      type: 'growth',
      priority: 'low',
      title: 'Growth Acceleration',
      insight: 'Both partners are showing strong individual growth patterns. This is an excellent time to align your growth trajectories.',
      recommendation: 'Create a shared vision board for your next 6 months. Set 3 mutual goals that support both individual and relationship growth.',
      confidence: 91.8,
      impact: 'high',
      timeframe: '2-4 weeks'
    }
  ];

  // Coaching Session Types
  const sessionTypes = {
    quickCheck: {
      name: 'Quick Check-In',
      duration: '5-10 minutes',
      description: 'Brief assessment and immediate guidance',
      icon: <Timer />
    },
    deepDive: {
      name: 'Deep Dive Session',
      duration: '30-45 minutes',
      description: 'Comprehensive analysis and strategic planning',
      icon: <Psychology />
    },
    skillBuilding: {
      name: 'Skill Building',
      duration: '15-25 minutes',
      description: 'Focused practice on specific relationship skills',
      icon: <School />
    },
    crisisSupport: {
      name: 'Crisis Support',
      duration: '20-60 minutes',
      description: 'Immediate support during relationship challenges',
      icon: <SupportAgent />
    }
  };

  // Real-time coaching simulation
  useEffect(() => {
    if (realTimeCoaching) {
      const interval = setInterval(() => {
        // Simulate real-time insights and recommendations
        const randomInsight = aiInsights[Math.floor(Math.random() * aiInsights.length)];
        setCurrentInsight(randomInsight);
      }, 15000);
      
      return () => clearInterval(interval);
    }
  }, [realTimeCoaching]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const startCoachingSession = (sessionType) => {
    setCoachingSession({
      type: sessionType,
      startTime: new Date(),
      status: 'active',
      progress: 0
    });
    setIsCoachingActive(true);
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
                    background: 'linear-gradient(135deg, #E91E63 0%, #FF6B9D 100%)' 
                  }}>
                    <SmartToy sx={{ fontSize: 32 }} />
                  </Avatar>
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      Dr. Love - Advanced AI Coaching Engine
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Your personal relationship coach with 96.5% psychology expertise and 24/7 availability
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <FormControl size="small" sx={{ minWidth: 140 }}>
                    <InputLabel>Coaching Mode</InputLabel>
                    <Select value={coachingMode} onChange={(e) => setCoachingMode(e.target.value)} label="Coaching Mode">
                      <MenuItem value="adaptive">Adaptive Learning</MenuItem>
                      <MenuItem value="intensive">Intensive Focus</MenuItem>
                      <MenuItem value="maintenance">Maintenance Mode</MenuItem>
                      <MenuItem value="crisis">Crisis Support</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" sx={{ minWidth: 140 }}>
                    <InputLabel>Personality</InputLabel>
                    <Select value={personalityProfile} onChange={(e) => setPersonalityProfile(e.target.value)} label="Personality">
                      <MenuItem value="empathetic">Empathetic Guide</MenuItem>
                      <MenuItem value="analytical">Strategic Analyst</MenuItem>
                      <MenuItem value="motivational">Growth Catalyst</MenuItem>
                      <MenuItem value="wise">Relationship Sage</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={realTimeCoaching} 
                        onChange={(e) => setRealTimeCoaching(e.target.checked)}
                      />
                    }
                    label="Real-time Coaching"
                  />
                </Box>
              </Box>

              {/* Dr. Love Status Dashboard */}
              <Paper sx={{ p: 3, background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)', color: 'white' }}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom>
                      AI Coach Status
                    </Typography>
                    <Typography variant="h3" fontWeight="bold">
                      {isCoachingActive ? 'ACTIVE' : 'READY'}
                    </Typography>
                    <Typography variant="body1">
                      {drLoveConfig.personalityTypes[personalityProfile].name}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Current Coaching Focus
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      {drLoveConfig.personalityTypes[personalityProfile].description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Chip 
                        label={`Expertise: ${drLoveConfig.expertise}%`}
                        sx={{ mr: 1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      />
                      <Chip 
                        label={`Mode: ${coachingMode}`}
                        sx={{ mr: 1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                      />
                      <Chip 
                        label={realTimeCoaching ? 'Real-time ON' : 'Real-time OFF'}
                        sx={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                      />
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} md={3}>
                    <Button 
                      variant="contained" 
                      size="large"
                      fullWidth
                      startIcon={isCoachingActive ? <Pause /> : <PlayArrow />}
                      onClick={() => setIsCoachingActive(!isCoachingActive)}
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' }
                      }}
                    >
                      {isCoachingActive ? 'Pause Coaching' : 'Start Coaching'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </CardContent>
          </Card>
        </motion.div>

        {/* Real-time Insight Alert */}
        <AnimatePresence>
          {currentInsight && realTimeCoaching && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Alert 
                severity={currentInsight.priority === 'high' ? 'warning' : 'info'} 
                sx={{ mb: 3 }}
                action={
                  <Button color="inherit" size="small" onClick={() => setCurrentInsight(null)}>
                    Dismiss
                  </Button>
                }
              >
                <AlertTitle>
                  <AutoAwesome sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Real-time Insight: {currentInsight.title}
                </AlertTitle>
                <Typography variant="body2" gutterBottom>
                  <strong>Insight:</strong> {currentInsight.insight}
                </Typography>
                <Typography variant="body2">
                  <strong>Recommendation:</strong> {currentInsight.recommendation}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Chip 
                    label={`Confidence: ${currentInsight.confidence}%`}
                    size="small"
                    color="primary"
                    sx={{ mr: 1 }}
                  />
                  <Chip 
                    label={`Impact: ${currentInsight.impact}`}
                    size="small"
                    color="secondary"
                    sx={{ mr: 1 }}
                  />
                  <Chip 
                    label={`Timeline: ${currentInsight.timeframe}`}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <Card>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab icon={<SmartToy />} label="AI Coach Dashboard" />
            <Tab icon={<School />} label="Coaching Areas" />
            <Tab icon={<Psychology />} label="Session Types" />
            <Tab icon={<Insights />} label="AI Insights" />
            <Tab icon={<TrendingUp />} label="Progress Tracking" />
            <Tab icon={<Settings />} label="Personalization" />
          </Tabs>

          {/* Tab 1: AI Coach Dashboard */}
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={3}>
              {/* Quick Session Starters */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Quick Session Starters
                </Typography>
                <Grid container spacing={2}>
                  {Object.entries(sessionTypes).map(([key, session]) => (
                    <Grid item xs={12} md={6} lg={3} key={key}>
                      <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => startCoachingSession(key)}>
                        <CardContent sx={{ textAlign: 'center' }}>
                          <Avatar sx={{ mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                            {session.icon}
                          </Avatar>
                          <Typography variant="h6" gutterBottom>
                            {session.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            {session.duration}
                          </Typography>
                          <Typography variant="body2">
                            {session.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Active Coaching Session */}
              {coachingSession && (
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Active Coaching Session: {sessionTypes[coachingSession.type].name}
                      </Typography>
                      
                      <LinearProgress 
                        variant="determinate" 
                        value={coachingSession.progress}
                        sx={{ mb: 2, height: 8, borderRadius: 4 }}
                      />
                      
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Typography variant="body1" gutterBottom>
                            <strong>Dr. Love:</strong> "I notice you've been working on communication skills. 
                            Let's focus on active listening techniques today. When your partner shares something 
                            emotional, try the 'Reflect-Validate-Respond' method."
                          </Typography>
                          
                          <Box sx={{ mt: 2 }}>
                            <Chip label="Reflect: Repeat back what you heard" sx={{ mr: 1, mb: 1 }} />
                            <Chip label="Validate: Acknowledge their feelings" sx={{ mr: 1, mb: 1 }} />
                            <Chip label="Respond: Share your perspective" sx={{ mr: 1, mb: 1 }} />
                          </Box>
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                          <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Session Progress
                            </Typography>
                            <CircularProgress 
                              variant="determinate" 
                              value={coachingSession.progress}
                              size={80}
                              thickness={4}
                            />
                            <Typography variant="h6" sx={{ mt: 1 }}>
                              {coachingSession.progress}%
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                      
                      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                        <Button variant="contained" startIcon={<Check />}>
                          Mark Complete
                        </Button>
                        <Button variant="outlined" startIcon={<Pause />}>
                          Pause Session
                        </Button>
                        <Button variant="outlined" startIcon={<Close />}>
                          End Session
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              )}

              {/* Recent Coaching History */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Recent Coaching History
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Session Type</TableCell>
                        <TableCell>Focus Area</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Outcome</TableCell>
                        <TableCell>Rating</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[
                        { date: '2025-01-07', type: 'Deep Dive', area: 'Communication', duration: '42 min', outcome: 'Breakthrough in active listening', rating: 5 },
                        { date: '2025-01-06', type: 'Quick Check', area: 'Intimacy', duration: '8 min', outcome: 'Scheduled quality time', rating: 4 },
                        { date: '2025-01-05', type: 'Skill Building', area: 'Conflict Resolution', duration: '23 min', outcome: 'Learned de-escalation', rating: 5 },
                        { date: '2025-01-04', type: 'Crisis Support', area: 'Support', duration: '35 min', outcome: 'Resolved major disagreement', rating: 5 }
                      ].map((session, index) => (
                        <TableRow key={index}>
                          <TableCell>{session.date}</TableCell>
                          <TableCell>{session.type}</TableCell>
                          <TableCell>{session.area}</TableCell>
                          <TableCell>{session.duration}</TableCell>
                          <TableCell>{session.outcome}</TableCell>
                          <TableCell>
                            <Rating value={session.rating} readOnly size="small" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 2: Coaching Areas */}
          <TabPanel value={activeTab} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Relationship Coaching Areas
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Dr. Love provides comprehensive coaching across all essential relationship dimensions. 
                  Track your progress and unlock advanced modules as you grow.
                </Typography>
              </Grid>

              {Object.entries(coachingAreas).map(([key, area]) => (
                <Grid item xs={12} md={6} key={key}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: area.color }}>
                          {area.icon}
                        </Avatar>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography variant="h6">
                            {area.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Level {area.currentLevel} of {area.maxLevel}
                          </Typography>
                        </Box>
                        <Chip 
                          label={`${area.progress}%`}
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                      
                      <LinearProgress 
                        variant="determinate" 
                        value={area.progress}
                        sx={{ 
                          mb: 2,
                          height: 8,
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: area.color
                          }
                        }}
                      />
                      
                      <Typography variant="subtitle2" gutterBottom>
                        Available Modules:
                      </Typography>
                      <List dense>
                        {area.modules.map((module, index) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon>
                              <CheckCircle 
                                color={index < area.currentLevel ? "success" : "disabled"} 
                                fontSize="small"
                              />
                            </ListItemIcon>
                            <ListItemText 
                              primary={module}
                              sx={{ 
                                '& .MuiListItemText-primary': {
                                  fontSize: '0.875rem',
                                  color: index < area.currentLevel ? 'text.primary' : 'text.disabled'
                                }
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                      
                      <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ mt: 2, backgroundColor: area.color }}
                        startIcon={<PlayArrow />}
                      >
                        Start Coaching
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 3: Session Types */}
          <TabPanel value={activeTab} index={2}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  AI Coaching Session Types
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Dr. Love offers various session types tailored to your immediate needs and long-term relationship goals.
                </Typography>
              </Grid>

              {Object.entries(sessionTypes).map(([key, session]) => (
                <Grid item xs={12} md={6} key={key}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                          {session.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="h6">
                            {session.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Duration: {session.duration}
                          </Typography>
                        </Box>
                      </Box>
                      
                      <Typography variant="body1" gutterBottom>
                        {session.description}
                      </Typography>
                      
                      <Divider sx={{ my: 2 }} />
                      
                      <Typography variant="subtitle2" gutterBottom>
                        What to Expect:
                      </Typography>
                      <List dense>
                        {key === 'quickCheck' && [
                          'Rapid relationship health assessment',
                          'Immediate actionable insights',
                          'Quick wins and micro-improvements',
                          'Priority issue identification'
                        ].map((item, index) => (
                          <ListItem key={index} sx={{ py: 0.25 }}>
                            <ListItemIcon>
                              <CheckCircle color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                        
                        {key === 'deepDive' && [
                          'Comprehensive relationship analysis',
                          'Strategic improvement planning',
                          'Root cause identification',
                          'Long-term goal setting'
                        ].map((item, index) => (
                          <ListItem key={index} sx={{ py: 0.25 }}>
                            <ListItemIcon>
                              <CheckCircle color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                        
                        {key === 'skillBuilding' && [
                          'Targeted skill development',
                          'Interactive practice exercises',
                          'Real-world application guidance',
                          'Progress tracking and feedback'
                        ].map((item, index) => (
                          <ListItem key={index} sx={{ py: 0.25 }}>
                            <ListItemIcon>
                              <CheckCircle color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                        
                        {key === 'crisisSupport' && [
                          'Immediate crisis intervention',
                          'Emotional regulation support',
                          'Conflict de-escalation',
                          'Emergency action planning'
                        ].map((item, index) => (
                          <ListItem key={index} sx={{ py: 0.25 }}>
                            <ListItemIcon>
                              <CheckCircle color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                      
                      <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ mt: 2 }}
                        startIcon={<PlayArrow />}
                        onClick={() => startCoachingSession(key)}
                      >
                        Start {session.name}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 4: AI Insights */}
          <TabPanel value={activeTab} index={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  AI-Generated Insights & Recommendations
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Dr. Love continuously analyzes your relationship patterns and provides personalized insights 
                  with 94.7% accuracy to help you build a stronger, more fulfilling partnership.
                </Typography>
              </Grid>

              {aiInsights.map((insight) => (
                <Grid item xs={12} key={insight.id}>
                  <Card>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar sx={{ 
                            bgcolor: coachingAreas[insight.type]?.color || '#2196F3' 
                          }}>
                            {coachingAreas[insight.type]?.icon || <Insights />}
                          </Avatar>
                          <Box>
                            <Typography variant="h6">
                              {insight.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {coachingAreas[insight.type]?.name || 'General Insight'}
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Chip 
                          label={insight.priority.toUpperCase()}
                          color={
                            insight.priority === 'high' ? 'error' :
                            insight.priority === 'medium' ? 'warning' : 'success'
                          }
                          size="small"
                        />
                      </Box>
                      
                      <Alert severity="info" sx={{ mb: 2 }}>
                        <AlertTitle>AI Insight</AlertTitle>
                        {insight.insight}
                      </Alert>
                      
                      <Alert severity="success" sx={{ mb: 2 }}>
                        <AlertTitle>Recommended Action</AlertTitle>
                        {insight.recommendation}
                      </Alert>
                      
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip 
                          label={`Confidence: ${insight.confidence}%`}
                          variant="outlined"
                          size="small"
                        />
                        <Chip 
                          label={`Impact: ${insight.impact}`}
                          variant="outlined"
                          size="small"
                        />
                        <Chip 
                          label={`Timeline: ${insight.timeframe}`}
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      
                      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button variant="contained" startIcon={<Check />}>
                          Apply Recommendation
                        </Button>
                        <Button variant="outlined" startIcon={<Schedule />}>
                          Schedule Reminder
                        </Button>
                        <Button variant="outlined" startIcon={<Info />}>
                          Learn More
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 5: Progress Tracking */}
          <TabPanel value={activeTab} index={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Coaching Progress & Analytics
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Track your relationship growth journey with detailed analytics and progress visualization.
                </Typography>
              </Grid>

              {/* Overall Progress */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Overall Coaching Progress
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart data={Object.entries(coachingAreas).map(([key, area]) => ({
                        area: area.name.split(' ')[0],
                        progress: area.progress,
                        level: (area.currentLevel / area.maxLevel) * 100
                      }))}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="area" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <RechartsRadar 
                          name="Progress" 
                          dataKey="progress" 
                          stroke="#2196F3" 
                          fill="#2196F3" 
                          fillOpacity={0.3} 
                        />
                        <RechartsRadar 
                          name="Level" 
                          dataKey="level" 
                          stroke="#4CAF50" 
                          fill="#4CAF50" 
                          fillOpacity={0.2} 
                        />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Progress Timeline */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Progress Timeline
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={[
                        { week: 'Week 1', overall: 45, communication: 40, intimacy: 35, conflict: 30 },
                        { week: 'Week 2', overall: 52, communication: 48, intimacy: 42, conflict: 38 },
                        { week: 'Week 3', overall: 58, communication: 55, intimacy: 48, conflict: 45 },
                        { week: 'Week 4', overall: 65, communication: 62, intimacy: 55, conflict: 52 },
                        { week: 'Week 5', overall: 71, communication: 68, intimacy: 62, conflict: 58 },
                        { week: 'Week 6', overall: 76, communication: 72, intimacy: 68, conflict: 65 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="week" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line type="monotone" dataKey="overall" stroke="#2196F3" strokeWidth={3} />
                        <Line type="monotone" dataKey="communication" stroke="#FF9800" strokeWidth={2} />
                        <Line type="monotone" dataKey="intimacy" stroke="#E91E63" strokeWidth={2} />
                        <Line type="monotone" dataKey="conflict" stroke="#4CAF50" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Achievement Badges */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Achievement Badges
                    </Typography>
                    
                    <Grid container spacing={2}>
                      {[
                        { name: 'Communication Master', level: 'Gold', icon: <Chat />, description: 'Completed advanced communication training' },
                        { name: 'Conflict Resolver', level: 'Silver', icon: <Psychology />, description: 'Successfully resolved 10 conflicts' },
                        { name: 'Intimacy Builder', level: 'Bronze', icon: <Favorite />, description: 'Improved intimacy score by 25%' },
                        { name: 'Growth Seeker', level: 'Gold', icon: <SelfImprovement />, description: 'Achieved personal growth goals' },
                        { name: 'Support Champion', level: 'Silver', icon: <Groups />, description: 'Provided exceptional mutual support' },
                        { name: 'Stability Expert', level: 'Bronze', icon: <HealthAndSafety />, description: 'Maintained relationship stability' }
                      ].map((badge, index) => (
                        <Grid item xs={12} md={4} key={index}>
                          <Paper sx={{ p: 2, textAlign: 'center' }}>
                            <Avatar sx={{ 
                              mx: 'auto', 
                              mb: 1, 
                              bgcolor: badge.level === 'Gold' ? '#FFD700' : 
                                       badge.level === 'Silver' ? '#C0C0C0' : '#CD7F32',
                              width: 56,
                              height: 56
                            }}>
                              {badge.icon}
                            </Avatar>
                            <Typography variant="h6" gutterBottom>
                              {badge.name}
                            </Typography>
                            <Chip 
                              label={badge.level}
                              color={badge.level === 'Gold' ? 'warning' : 
                                     badge.level === 'Silver' ? 'default' : 'secondary'}
                              size="small"
                              sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              {badge.description}
                            </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 6: Personalization */}
          <TabPanel value={activeTab} index={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  AI Coach Personalization
                </Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>
                  Customize Dr. Love's coaching style, intervention level, and focus areas to match your preferences and needs.
                </Typography>
              </Grid>

              {/* Coaching Personality */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Coaching Personality
                    </Typography>
                    
                    <FormControl fullWidth sx={{ mb: 3 }}>
                      <InputLabel>Select Coaching Style</InputLabel>
                      <Select 
                        value={personalityProfile} 
                        onChange={(e) => setPersonalityProfile(e.target.value)}
                        label="Select Coaching Style"
                      >
                        {Object.entries(drLoveConfig.personalityTypes).map(([key, personality]) => (
                          <MenuItem key={key} value={key}>
                            {personality.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    
                    <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        {drLoveConfig.personalityTypes[personalityProfile].name}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {drLoveConfig.personalityTypes[personalityProfile].description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Chip 
                          label={`Tone: ${drLoveConfig.personalityTypes[personalityProfile].tone}`}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Chip 
                          label={`Approach: ${drLoveConfig.personalityTypes[personalityProfile].approach}`}
                          size="small"
                        />
                      </Box>
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>

              {/* Intervention Level */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Intervention Level
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      How proactive should Dr. Love be in providing guidance?
                    </Typography>
                    
                    <Box sx={{ px: 2, mb: 3 }}>
                      <Slider
                        value={interventionLevel}
                        onChange={(e, newValue) => setInterventionLevel(newValue)}
                        min={1}
                        max={5}
                        step={1}
                        marks={[
                          { value: 1, label: 'Minimal' },
                          { value: 2, label: 'Light' },
                          { value: 3, label: 'Moderate' },
                          { value: 4, label: 'Active' },
                          { value: 5, label: 'Intensive' }
                        ]}
                        valueLabelDisplay="auto"
                      />
                    </Box>
                    
                    <Paper sx={{ p: 2, backgroundColor: '#f5f5f5' }}>
                      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Current Setting: {
                          interventionLevel === 1 ? 'Minimal Intervention' :
                          interventionLevel === 2 ? 'Light Guidance' :
                          interventionLevel === 3 ? 'Moderate Support' :
                          interventionLevel === 4 ? 'Active Coaching' :
                          'Intensive Intervention'
                        }
                      </Typography>
                      <Typography variant="body2">
                        {
                          interventionLevel === 1 ? 'Dr. Love will only provide guidance when specifically requested.' :
                          interventionLevel === 2 ? 'Gentle suggestions and occasional check-ins.' :
                          interventionLevel === 3 ? 'Regular insights and proactive recommendations.' :
                          interventionLevel === 4 ? 'Frequent coaching sessions and real-time guidance.' :
                          'Comprehensive support with immediate intervention when needed.'
                        }
                      </Typography>
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>

              {/* Coaching Preferences */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Coaching Preferences
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Communication Preferences
                        </Typography>
                        <List>
                          <ListItem>
                            <ListItemIcon>
                              <Notifications />
                            </ListItemIcon>
                            <ListItemText primary="Real-time Notifications" />
                            <Switch checked={realTimeCoaching} onChange={(e) => setRealTimeCoaching(e.target.checked)} />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Schedule />
                            </ListItemIcon>
                            <ListItemText primary="Daily Check-ins" />
                            <Switch defaultChecked />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <Email />
                            </ListItemIcon>
                            <ListItemText primary="Weekly Progress Reports" />
                            <Switch defaultChecked />
                          </ListItem>
                        </List>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" gutterBottom>
                          Focus Areas Priority
                        </Typography>
                        <List>
                          {Object.entries(coachingAreas).map(([key, area]) => (
                            <ListItem key={key}>
                              <ListItemIcon>
                                {area.icon}
                              </ListItemIcon>
                              <ListItemText primary={area.name} />
                              <Rating size="small" defaultValue={3} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>
        </Card>

        {/* Floating Action Button for Quick Access */}
        <SpeedDial
          ariaLabel="Quick Coaching Actions"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            icon={<SmartToy />}
            tooltipTitle="Quick Chat with Dr. Love"
            onClick={() => startCoachingSession('quickCheck')}
          />
          <SpeedDialAction
            icon={<Psychology />}
            tooltipTitle="Deep Dive Session"
            onClick={() => startCoachingSession('deepDive')}
          />
          <SpeedDialAction
            icon={<SupportAgent />}
            tooltipTitle="Crisis Support"
            onClick={() => startCoachingSession('crisisSupport')}
          />
          <SpeedDialAction
            icon={<Settings />}
            tooltipTitle="Coaching Settings"
            onClick={() => setActiveTab(5)}
          />
        </SpeedDial>
      </Box>
    </Box>
  );
};

export default AdvancedAICoachingEngine;

