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
  FormHelperText,
  CardActions,
  CardHeader,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Psychology,
  PsychologyAlt,
  School,
  AutoStories,
  MenuBook,
  LibraryBooks,
  EmojiPeople,
  Favorite,
  FavoriteBorder,
  HeartBroken,
  Healing,
  HealthAndSafety,
  SelfImprovement,
  Spa,
  Meditation,
  Mindfulness,
  Mood,
  EmojiEmotions,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  TipsAndUpdates,
  Lightbulb,
  AutoAwesome,
  Star,
  StarBorder,
  Grade,
  WorkspacePremium,
  EmojiEvents,
  Celebration,
  Party,
  Cake,
  CardGiftcard,
  Redeem,
  Discount,
  Sell,
  Whatshot,
  Trending,
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  Timeline,
  ShowChart,
  BarChart,
  PieChart,
  Analytics,
  Assessment,
  Poll,
  Quiz,
  QuestionAnswer,
  Forum,
  Chat,
  ChatBubble,
  Message,
  Sms,
  Email,
  Notifications,
  NotificationsActive,
  NotificationsOff,
  VoiceChat,
  RecordVoiceOver,
  Hearing,
  VolumeUp,
  VolumeOff,
  Mic,
  MicOff,
  Videocam,
  VideocamOff,
  Call,
  CallEnd,
  VideoCall,
  VideoCallEnd,
  PhoneCallback,
  PhoneForwarded,
  PhoneInTalk,
  PhoneLocked,
  PhoneMissed,
  PhonePaused,
  DialerSip,
  Dialpad,
  ContactPhone,
  ContactMail,
  Contacts,
  PermContactCalendar,
  PermPhoneMsg,
  PhoneAndroid,
  PhoneIphone,
  PhoneBluetoothSpeaker,
  PhonelinkErase,
  PhonelinkLock,
  PhonelinkOff,
  PhonelinkRing,
  PhonelinkSetup,
  PortableWifiOff,
  RingVolume,
  VpnLock,
  VpnKey,
  Wifi,
  WifiOff,
  WifiProtectedSetup,
  WifiCalling,
  WifiCalling3,
  WifiFind,
  WifiLock,
  WifiPassword,
  WifiTethering,
  WifiTetheringError,
  WifiTetheringOff,
  Schedule,
  AccessTime,
  Alarm,
  AlarmAdd,
  AlarmOff,
  AvTimer,
  HourglassEmpty,
  HourglassFull,
  MoreTime,
  Timer,
  TimerOff,
  Today,
  CalendarToday,
  DateRange,
  Event,
  EventAvailable,
  EventBusy,
  EventNote,
  EventSeat,
  CalendarViewDay,
  CalendarViewMonth,
  CalendarViewWeek,
  EditCalendar,
  History,
  HistoryEdu,
  HistoryToggleOff,
  Restore,
  RestorePage,
  RestoreFromTrash,
  Update,
  SystemUpdateAlt,
  Sync,
  SyncAlt,
  SyncDisabled,
  SyncLock,
  SyncProblem,
  Cached,
  Refresh,
  Autorenew,
  Loop,
  ChangeCircle,
  SwapHoriz,
  SwapVert,
  CompareArrows,
  ImportExport,
  CallMade,
  CallReceived,
  Merge,
  DriveFileMove,
  Archive,
  Class,
  ColorLens,
  Gradient,
  Opacity,
  Layers,
  FilterNone,
  Flare,
  Flash,
  Highlight,
  Lens,
  Looks,
  Nature,
  NetworkCell,
  NetworkWifi,
  NewReleases,
  Panorama,
  PhotoAlbum,
  PhotoFilter,
  PhotoLibrary,
  Portrait,
  Receipt,
  RecentActors,
  RemoveRedEye,
  Scanner,
  Slideshow,
  SwitchAccount,
  SwitchCamera,
  TagFaces,
  Transform,
  TurnedIn,
  TurnedInNot,
  Undo,
  Redo,
  Vignette,
  Widgets,
  Build,
  Construction,
  Handyman,
  AutoFixNormal,
  AutoFixOff,
  AutoFixHigh,
  Colorize,
  Palette,
  Brush,
  FormatPaint,
  Style,
  Design,
  Category,
  Label,
  Tag,
  Bookmark,
  BookmarkBorder,
  StarHalf,
  NewLabel,
  FiberNew,
  Upgrade,
  SystemUpdate,
  InstallMobile,
  Extension,
  Apps,
  SpaceDashboard,
  GridView,
  ViewAgenda,
  ViewComfy,
  ViewCompact,
  TableChart,
  Reorder,
  DragHandle,
  OpenWith,
  TouchApp,
  Gesture,
  Groups,
  Group,
  People,
  Person,
  PersonAdd,
  PersonRemove,
  GroupAdd,
  GroupRemove,
  Community,
  Public,
  Language,
  Translate,
  GTranslate,
  Visibility,
  VisibilityOff,
  RemoveRedEye,
  Preview,
  Pageview,
  FindInPage,
  FindReplace,
  Search,
  SearchOff,
  Zoom,
  ZoomIn,
  ZoomOut,
  ZoomOutMap,
  CenterFocusStrong,
  CenterFocusWeak,
  LocationOn,
  LocationOff,
  LocationDisabled,
  LocationSearching,
  NearMe,
  NearMeDisabled,
  MyLocation,
  GpsFixed,
  GpsOff,
  GpsNotFixed,
  Navigation,
  Compass,
  Route,
  Directions,
  Flight,
  Hotel,
  Restaurant,
  LocalDining,
  LocalCafe,
  LocalBar,
  Fastfood,
  IceCream,
  Wine,
  SportsBar,
  NightLife,
  LocalActivity,
  Attractions,
  Festival,
  Place,
  Map,
  Explore,
  ExploreOff,
  NearbyError,
  NearbyOff,
  BluetoothSearching,
  Cast,
  CastConnected,
  ScreenShare,
  StopScreenShare,
  PresentToAll,
  AirPlay,
  Duo,
  ConnectWithoutContact,
  Diversity3,
  FamilyRestroom,
  Handshake,
  VolunteerActivism,
  ContactSupport,
  LiveHelp,
  Recommend,
  StarRate,
  Euro,
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
  Man,
  Woman,
  Boy,
  Girl,
  Baby,
  Inbox,
  Drafts,
  ReplyAll,
  MailOutline,
  Report,
  Flag,
  Home,
  Wc,
  Male,
  Female,
  Transgender,
  Engineering,
  Science,
  Biotech,
  ImportContacts,
  BookmarkAdd,
  BookmarkAdded,
  BookmarkRemove,
  Bookmarks,
  LabelImportant,
  LabelOff,
  LocalOffer,
  Loyalty,
  CardMembership,
  ConfirmationNumber,
  FlightTakeoff,
  FlightLand,
  ConnectingAirports,
  AirplanemodeActive,
  AirplanemodeInactive,
  FlightClass,
  TravelExplore,
  SettingsBackupRestore,
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
  BuildCircle,
  HomeRepairService,
  Plumbing,
  ElectricalServices,
  Carpenter,
  Architecture,
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
  RotateLeft,
  RotateRight,
  Straighten,
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
  WbIncandescent,
  WbIridescent,
  WbSunny,
  WbCloudy,
  WbShade,
  WbTwilight,
  WbFluorescent,
  WbAuto,
  FlashOn,
  FlashOff,
  FlashAuto,
  Grain,
  Texture,
  Dehaze,
  Blur,
  BlurOn,
  BlurOff,
  BlurCircular,
  BlurLinear,
  MotionPhotosOn,
  MotionPhotosOff,
  MotionPhotosPause,
  MotionPhotosAuto,
  Timelapse,
  SlowMotionVideo,
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
  FilterTiltShift,
  FilterVintage,
  EuroSymbol,
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
  ShoppingBasket,
  ShoppingCartCheckout,
  AddShoppingCart,
  RemoveShoppingCart,
  ProductionQuantityLimits,
  Inventory,
  Inventory2,
  InventoryOutlined,
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
  LocalMovies,
  TheaterComedy,
  Theaters,
  LiveTv,
  Tv,
  ConnectedTv,
  SmartDisplay,
  CancelPresentation,
  Send,
  Attachment,
  GifBox,
  PhotoCamera,
  Print,
  CheckCircle,
  CheckCircleOutline,
  RadioButtonUnchecked,
  RadioButtonChecked,
  IndeterminateCheckBox,
  CheckBox,
  CheckBoxOutlineBlank,
  ExpandMore,
  ExpandLess,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowUp,
  KeyboardArrowDown,
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
  Settings,
  SettingsApplications,
  Tune,
  Face,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6
} from '@mui/icons-material';

const RelationshipCoachingIntegration = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [coachingProgress, setCoachingProgress] = useState(0);
  const [coachingData, setCoachingData] = useState({
    sessions: {
      completed: 24,
      scheduled: 3,
      totalHours: 18.5,
      currentStreak: 12,
      longestStreak: 28,
      averageRating: 4.8,
      coachRating: 4.9,
      progressScore: 87
    },
    coaching: {
      style: 'Adaptive',
      intensity: 'Moderate',
      frequency: 'Weekly',
      duration: '45 minutes',
      focus: ['Communication', 'Emotional Intelligence', 'Conflict Resolution'],
      goals: [
        {
          id: 'communication_skills',
          title: 'Improve Communication Skills',
          progress: 78,
          target: 'Advanced',
          current: 'Intermediate',
          priority: 'High'
        },
        {
          id: 'emotional_intelligence',
          title: 'Develop Emotional Intelligence',
          progress: 65,
          target: 'Expert',
          current: 'Intermediate',
          priority: 'High'
        },
        {
          id: 'conflict_resolution',
          title: 'Master Conflict Resolution',
          progress: 52,
          target: 'Advanced',
          current: 'Beginner',
          priority: 'Medium'
        },
        {
          id: 'dating_confidence',
          title: 'Build Dating Confidence',
          progress: 89,
          target: 'Expert',
          current: 'Advanced',
          priority: 'Low'
        }
      ],
      modules: [
        {
          id: 'communication_mastery',
          title: 'Communication Mastery',
          lessons: 12,
          completed: 9,
          duration: '6 weeks',
          difficulty: 'Intermediate',
          rating: 4.7,
          description: 'Master the art of effective communication in relationships'
        },
        {
          id: 'emotional_intelligence',
          title: 'Emotional Intelligence',
          lessons: 15,
          completed: 8,
          duration: '8 weeks',
          difficulty: 'Advanced',
          rating: 4.9,
          description: 'Develop deep emotional awareness and regulation skills'
        },
        {
          id: 'conflict_resolution',
          title: 'Conflict Resolution',
          lessons: 10,
          completed: 4,
          duration: '5 weeks',
          difficulty: 'Intermediate',
          rating: 4.6,
          description: 'Learn healthy conflict resolution and problem-solving'
        },
        {
          id: 'attachment_healing',
          title: 'Attachment Healing',
          lessons: 18,
          completed: 0,
          duration: '10 weeks',
          difficulty: 'Advanced',
          rating: 4.8,
          description: 'Heal attachment wounds and build secure relationships'
        }
      ]
    },
    insights: {
      strengths: ['Active Listening', 'Empathy', 'Self-Awareness', 'Growth Mindset'],
      improvements: ['Assertiveness', 'Boundary Setting', 'Conflict Navigation', 'Vulnerability'],
      patterns: [
        'Shows consistent engagement in coaching sessions',
        'Demonstrates strong emotional awareness',
        'Needs practice with assertive communication',
        'Excellent at implementing feedback'
      ],
      recommendations: [
        'Focus on assertiveness training in next sessions',
        'Practice boundary-setting exercises',
        'Continue emotional intelligence development',
        'Explore vulnerability and intimacy topics'
      ]
    },
    features: {
      aiCoaching: true,
      videoSessions: true,
      voiceCoaching: true,
      textCoaching: true,
      groupCoaching: true,
      workshopAccess: true,
      resourceLibrary: true,
      progressTracking: true,
      goalSetting: true,
      crisisSupport: true,
      culturalAdaptation: true,
      personalizedPlans: true
    }
  });

  const [showSessionDialog, setShowSessionDialog] = useState(false);
  const [showModuleDialog, setShowModuleDialog] = useState(false);
  const [showGoalDialog, setShowGoalDialog] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Calculate coaching score
  useEffect(() => {
    const calculateCoachingScore = () => {
      const sessions = coachingData.sessions;
      const goals = coachingData.coaching.goals;
      
      let score = 0;
      let maxScore = 100;

      // Session engagement (40 points)
      score += Math.min((sessions.completed / 30) * 20, 20);
      score += Math.min((sessions.averageRating / 5) * 20, 20);

      // Goal progress (40 points)
      const avgGoalProgress = goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length;
      score += Math.min((avgGoalProgress / 100) * 40, 40);

      // Consistency (20 points)
      score += Math.min((sessions.currentStreak / 30) * 20, 20);

      const finalScore = Math.round(score);
      setCoachingProgress(finalScore);
    };

    calculateCoachingScore();
  }, [coachingData]);

  // Get coaching level
  const getCoachingLevel = (score) => {
    if (score >= 90) return { level: 'Relationship Expert', color: '#7b1fa2', icon: <WorkspacePremium /> };
    if (score >= 75) return { level: 'Advanced Learner', color: '#1976d2', icon: <Star /> };
    if (score >= 60) return { level: 'Active Student', color: '#4caf50', icon: <School /> };
    if (score >= 45) return { level: 'Developing Skills', color: '#ff9800', icon: <Psychology /> };
    return { level: 'Getting Started', color: '#f44336', icon: <SelfImprovement /> };
  };

  // Render coaching overview
  const renderCoachingOverview = () => {
    const coachingLevel = getCoachingLevel(coachingProgress);

    return (
      <Box sx={{ mb: 4 }}>
        <Paper sx={{ p: 4, mb: 4, background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)', color: 'white' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Relationship Coaching Integration
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4 }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={coachingProgress}
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
                  {coachingProgress}%
                </Typography>
                <Typography variant="body2" component="div">
                  Coaching
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Chip
              icon={coachingLevel.icon}
              label={coachingLevel.level}
              sx={{
                backgroundColor: coachingLevel.color,
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                px: 2,
                py: 1
              }}
            />
          </Box>

          <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
            Your Relationship Coaching Progress
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>
            Comprehensive AI-powered coaching with personalized guidance, expert insights, and proven relationship strategies.
          </Typography>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 4 }}>
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
                <Psychology />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Sessions Completed
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#7b1fa2', mb: 1 }}>
                {coachingData.sessions.completed}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total coaching hours: {coachingData.sessions.totalHours}
              </Typography>
            </Card>
          </Grid>
          
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
                <TrendingUp />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Progress Score
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 1 }}>
                {coachingData.sessions.progressScore}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Overall improvement
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
                <Whatshot />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Current Streak
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50', mb: 1 }}>
                {coachingData.sessions.currentStreak}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Days of consistent practice
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card sx={{ textAlign: 'center', p: 3, border: '2px solid #ff9800' }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  mx: 'auto',
                  mb: 2,
                  backgroundColor: '#ff9800',
                  color: 'white'
                }}
              >
                <Star />
              </Avatar>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Coach Rating
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800', mb: 1 }}>
                {coachingData.sessions.coachRating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Out of 5 stars
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>AI-Powered Coaching:</strong> Your personalized coaching experience adapts to your 
            learning style, relationship goals, and progress patterns for maximum effectiveness.
          </Typography>
        </Alert>
      </Box>
    );
  };

  // Render coaching goals section
  const renderCoachingGoals = () => (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Coaching Goals & Progress
      </Typography>
      
      <Grid container spacing={3}>
        {coachingData.coaching.goals.map((goal) => (
          <Grid item xs={12} md={6} key={goal.id}>
            <Card 
              sx={{ 
                height: '100%',
                border: goal.priority === 'High' ? '2px solid #f44336' : 
                       goal.priority === 'Medium' ? '2px solid #ff9800' : '2px solid #4caf50',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                transition: 'all 0.3s ease'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {goal.title}
                  </Typography>
                  <Chip
                    label={goal.priority}
                    size="small"
                    sx={{
                      backgroundColor: goal.priority === 'High' ? '#f44336' : 
                                     goal.priority === 'Medium' ? '#ff9800' : '#4caf50',
                      color: 'white'
                    }}
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Progress</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {goal.progress}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={goal.progress} 
                    sx={{ 
                      height: 8, 
                      borderRadius: 4,
                      backgroundColor: '#e0e0e0',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: goal.progress >= 80 ? '#4caf50' : 
                                       goal.progress >= 60 ? '#ff9800' : '#f44336'
                      }
                    }}
                  />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary">Current Level</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {goal.current}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" color="text.secondary">Target Level</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {goal.target}
                    </Typography>
                  </Box>
                </Box>
                
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    setSelectedGoal(goal);
                    setShowGoalDialog(true);
                  }}
                  sx={{ 
                    backgroundColor: goal.priority === 'High' ? '#f44336' : 
                                   goal.priority === 'Medium' ? '#ff9800' : '#4caf50'
                  }}
                >
                  View Goal Details
                </Button>
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
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          🧠 Relationship Coaching Integration
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          AI-powered personalized coaching for relationship growth and emotional intelligence
        </Typography>
      </Box>

      {/* Coaching Overview */}
      {renderCoachingOverview()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label="Coaching Goals" />
          <Tab label="Learning Modules" />
          <Tab label="Session History" />
          <Tab label="Insights & Analytics" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && renderCoachingGoals()}
      {selectedTab === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Learning Modules & Curriculum
          </Typography>
          
          <Grid container spacing={3}>
            {coachingData.coaching.modules.map((module) => (
              <Grid item xs={12} md={6} key={module.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {module.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                      <Chip
                        label={module.difficulty}
                        size="small"
                        sx={{
                          backgroundColor: module.difficulty === 'Advanced' ? '#f44336' : 
                                         module.difficulty === 'Intermediate' ? '#ff9800' : '#4caf50',
                          color: 'white'
                        }}
                      />
                      <Chip
                        label={module.duration}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {module.description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Lessons Completed</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {module.completed}/{module.lessons}
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={(module.completed / module.lessons) * 100} 
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Rating value={module.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({module.rating})
                      </Typography>
                    </Box>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        setSelectedModule(module);
                        setShowModuleDialog(true);
                      }}
                      sx={{ backgroundColor: '#7b1fa2' }}
                    >
                      {module.completed === 0 ? 'Start Module' : 'Continue Learning'}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      {selectedTab === 2 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Session History & Scheduling
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Recent Sessions
                </Typography>
                
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Communication Skills Workshop"
                      secondary="January 10, 2024 • 45 minutes • Rating: 5/5"
                    />
                    <Chip label="Completed" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#4caf50' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Emotional Intelligence Assessment"
                      secondary="January 8, 2024 • 60 minutes • Rating: 4/5"
                    />
                    <Chip label="Completed" size="small" sx={{ backgroundColor: '#4caf50', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Schedule sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Conflict Resolution Practice"
                      secondary="January 15, 2024 • 45 minutes • Upcoming"
                    />
                    <Chip label="Scheduled" size="small" sx={{ backgroundColor: '#1976d2', color: 'white' }} />
                  </ListItem>
                  
                  <ListItem>
                    <ListItemIcon>
                      <Schedule sx={{ color: '#1976d2' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Attachment Style Deep Dive"
                      secondary="January 17, 2024 • 60 minutes • Upcoming"
                    />
                    <Chip label="Scheduled" size="small" sx={{ backgroundColor: '#1976d2', color: 'white' }} />
                  </ListItem>
                </List>
                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: '#7b1fa2' }}
                  onClick={() => setShowSessionDialog(true)}
                >
                  Schedule New Session
                </Button>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', border: '2px solid #7b1fa2' }}>
                <Psychology sx={{ fontSize: 60, color: '#7b1fa2', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Your AI Coach
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Dr. Love AI adapts to your learning style and provides personalized guidance for your relationship journey.
                </Typography>
                
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<VideoCall />}
                    sx={{ backgroundColor: '#7b1fa2' }}
                  >
                    Video Session
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<VoiceChat />}
                  >
                    Voice Session
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<Chat />}
                  >
                    Text Coaching
                  </Button>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
      {selectedTab === 3 && (
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            Insights & Analytics
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Your Strengths
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
                  {coachingData.insights.strengths.map((strength) => (
                    <Chip
                      key={strength}
                      label={strength}
                      sx={{
                        backgroundColor: '#4caf50',
                        color: 'white',
                        '&:hover': { backgroundColor: '#45a049' }
                      }}
                    />
                  ))}
                </Box>
                
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Areas for Growth
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {coachingData.insights.improvements.map((improvement) => (
                    <Chip
                      key={improvement}
                      label={improvement}
                      sx={{
                        backgroundColor: '#ff9800',
                        color: 'white',
                        '&:hover': { backgroundColor: '#f57c00' }
                      }}
                    />
                  ))}
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  AI Recommendations
                </Typography>
                
                <List>
                  {coachingData.insights.recommendations.map((recommendation, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <TipsAndUpdates sx={{ color: '#7b1fa2' }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={recommendation}
                        primaryTypographyProps={{ variant: 'body2' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen (Community Features)
            console.log('Navigate to previous screen');
          }}
        >
          Back to Community
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={() => {
            // Save coaching settings and continue to next screen
            localStorage.setItem('coachingData', JSON.stringify({
              ...coachingData,
              timestamp: new Date().toISOString()
            }));
            console.log('Relationship coaching integration complete - moving to next screen');
          }}
          sx={{
            background: 'linear-gradient(45deg, #7b1fa2 30%, #9c27b0 90%)',
            color: 'white'
          }}
        >
          Continue to Security
        </Button>
      </Box>

      {/* Session Dialog */}
      <Dialog open={showSessionDialog} onClose={() => setShowSessionDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Schedule sx={{ mr: 1 }} />
            Schedule Coaching Session
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Choose Your Session Type
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ p: 2, flexDirection: 'column' }}
                >
                  <VideoCall sx={{ fontSize: 40, mb: 1 }} />
                  Video Session
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ p: 2, flexDirection: 'column' }}
                >
                  <VoiceChat sx={{ fontSize: 40, mb: 1 }} />
                  Voice Session
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ p: 2, flexDirection: 'column' }}
                >
                  <Chat sx={{ fontSize: 40, mb: 1 }} />
                  Text Coaching
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSessionDialog(false)}>
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Schedule Session
          </Button>
        </DialogActions>
      </Dialog>

      {/* Module Dialog */}
      <Dialog open={showModuleDialog} onClose={() => setShowModuleDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <School sx={{ mr: 1 }} />
            Learning Module
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedModule && (
            <Box sx={{ py: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedModule.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {selectedModule.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip label={selectedModule.difficulty} sx={{ backgroundColor: '#7b1fa2', color: 'white' }} />
                <Chip label={`${selectedModule.lessons} lessons`} variant="outlined" />
                <Chip label={selectedModule.duration} variant="outlined" />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Progress: {selectedModule.completed}/{selectedModule.lessons} lessons completed
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowModuleDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Start Learning
          </Button>
        </DialogActions>
      </Dialog>

      {/* Goal Dialog */}
      <Dialog open={showGoalDialog} onClose={() => setShowGoalDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmojiEvents sx={{ mr: 1 }} />
            Coaching Goal
          </Box>
        </DialogTitle>
        <DialogContent>
          {selectedGoal && (
            <Box sx={{ py: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {selectedGoal.title}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Progress: {selectedGoal.progress}%
                </Typography>
                <LinearProgress variant="determinate" value={selectedGoal.progress} sx={{ height: 8, borderRadius: 4 }} />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Current Level:</Typography>
                  <Typography variant="body2">{selectedGoal.current}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>Target Level:</Typography>
                  <Typography variant="body2">{selectedGoal.target}</Typography>
                </Grid>
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowGoalDialog(false)}>
            Close
          </Button>
          <Button variant="contained" color="primary">
            Work on Goal
          </Button>
        </DialogActions>
      </Dialog>

      {/* Final Coaching Notice */}
      <Alert severity="success" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Coaching Integration Complete:</strong> Your comprehensive AI-powered coaching 
          system is now configured for personalized relationship growth, skill development, 
          and emotional intelligence enhancement.
        </Typography>
      </Alert>
    </Container>
  );
};

export default RelationshipCoachingIntegration;

