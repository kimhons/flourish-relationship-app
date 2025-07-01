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
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Backdrop,
  CircularProgress,
  Snackbar,
  SnackbarContent
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  PhotoCamera,
  CameraAlt,
  Image,
  PhotoLibrary,
  Upload,
  CloudUpload,
  Add,
  Remove,
  Edit,
  Delete,
  Visibility,
  VisibilityOff,
  Star,
  StarBorder,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  AutoAwesome,
  Psychology,
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
  FilterVintage,
  Palette,
  Brush,
  ColorLens,
  Crop,
  CropFree,
  Rotate90DegreesCw,
  RotateLeft,
  RotateRight,
  Flip,
  ZoomIn,
  ZoomOut,
  Brightness6,
  Contrast,
  Exposure,
  Saturation,
  Vibrance,
  Warmth,
  Clarity,
  Vignette,
  Grain,
  Fade as FadeIcon,
  Shadow,
  Highlight,
  Structure,
  Definition,
  Brilliance,
  Glow,
  Drama,
  Vintage,
  BlackAndWhite,
  Sepia,
  Mono,
  Vivid,
  Natural,
  Portrait,
  Landscape,
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
  ImageAspectRatio,
  ImageNotSupported,
  ImageSearch,
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
  PhotoCameraBack,
  PhotoCameraFront,
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
  Bookmark as BookmarkIcon,
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
  LocalOffer as LocalOfferIcon,
  Sell as SellIcon,
  NewReleases as NewReleasesIcon,
  Whatshot as WhatshotIcon,
  Trending as TrendingIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
  ShowChart as ShowChartIcon,
  MultilineChart as MultilineChartIcon,
  AreaChart as AreaChartIcon,
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
  CloudUpload as CloudUploadIcon,
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
  Games as GamesIcon
} from '@mui/icons-material';

const ProfilePhotoOptimization = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showCoachDialog, setShowCoachDialog] = useState(false);
  const [showPhotoEditor, setShowPhotoEditor] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [coachRecommendations, setCoachRecommendations] = useState([]);
  const [profileScore, setProfileScore] = useState(0);
  const [photoCategories, setPhotoCategories] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);

  const maxPhotos = 10;
  const minPhotos = 3;

  // Photo categories for comprehensive profile
  const photoTypes = [
    {
      id: 'main_portrait',
      name: 'Main Portrait',
      description: 'Clear, smiling headshot that shows your personality',
      required: true,
      maxCount: 1,
      icon: <Portrait />,
      color: '#e91e63',
      tips: [
        'Natural smile with genuine expression',
        'Good lighting (natural light preferred)',
        'Clear view of your face',
        'Professional but approachable look',
        'Eye contact with camera'
      ]
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle Photos',
      description: 'Photos showing your daily life, hobbies, and interests',
      required: true,
      maxCount: 3,
      icon: <DirectionsRun />,
      color: '#2196f3',
      tips: [
        'Show your authentic interests',
        'Action shots or candid moments',
        'Demonstrate your personality',
        'Include variety in settings',
        'Natural, unposed expressions'
      ]
    },
    {
      id: 'social',
      name: 'Social Photos',
      description: 'Photos with friends, family, or at social events',
      required: false,
      maxCount: 2,
      icon: <Groups />,
      color: '#4caf50',
      tips: [
        'Show your social side',
        'You should be clearly identifiable',
        'Positive, fun atmosphere',
        'Avoid ex-partners in photos',
        'Group photos where you stand out'
      ]
    },
    {
      id: 'adventure',
      name: 'Adventure & Travel',
      description: 'Photos from travels, adventures, or outdoor activities',
      required: false,
      maxCount: 2,
      icon: <Flight />,
      color: '#ff9800',
      tips: [
        'Show your adventurous side',
        'Beautiful or interesting locations',
        'Action or exploration shots',
        'Demonstrate your interests',
        'Quality over quantity'
      ]
    },
    {
      id: 'creative',
      name: 'Creative & Artistic',
      description: 'Photos showcasing creativity, talents, or artistic side',
      required: false,
      maxCount: 2,
      icon: <Palette />,
      color: '#9c27b0',
      tips: [
        'Show your creative talents',
        'Artistic or unique perspectives',
        'Demonstrate skills or hobbies',
        'Express your personality',
        'High-quality composition'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Work-related or achievement photos',
      required: false,
      maxCount: 1,
      icon: <Work />,
      color: '#607d8b',
      tips: [
        'Professional but approachable',
        'Show career achievements',
        'Demonstrate ambition',
        'High-quality presentation',
        'Avoid overly formal looks'
      ]
    }
  ];

  // AI Coach recommendations based on photo analysis
  const generateCoachRecommendations = (photoData) => {
    const recommendations = [];
    
    // Analyze photo diversity
    const categories = Object.keys(photoCategories);
    if (categories.length < 3) {
      recommendations.push({
        type: 'diversity',
        priority: 'high',
        title: 'Add Photo Variety',
        description: 'Your profile would benefit from more diverse photo types to show different aspects of your personality.',
        suggestion: 'Consider adding lifestyle, social, or adventure photos to create a well-rounded profile.',
        icon: <Diversity3 />,
        color: '#f44336'
      });
    }

    // Check for main portrait
    if (!photoCategories.main_portrait || photoCategories.main_portrait.length === 0) {
      recommendations.push({
        type: 'main_photo',
        priority: 'critical',
        title: 'Add Main Portrait Photo',
        description: 'A clear, smiling headshot is essential for making a great first impression.',
        suggestion: 'Upload a high-quality portrait photo with good lighting and a genuine smile.',
        icon: <Portrait />,
        color: '#f44336'
      });
    }

    // Analyze photo quality
    const lowQualityPhotos = photos.filter(photo => photo.quality && photo.quality < 7);
    if (lowQualityPhotos.length > 0) {
      recommendations.push({
        type: 'quality',
        priority: 'medium',
        title: 'Improve Photo Quality',
        description: `${lowQualityPhotos.length} photo(s) could benefit from better lighting or resolution.`,
        suggestion: 'Consider retaking photos with better lighting or using photo enhancement tools.',
        icon: <CameraEnhance />,
        color: '#ff9800'
      });
    }

    // Check photo count
    if (photos.length < minPhotos) {
      recommendations.push({
        type: 'count',
        priority: 'high',
        title: 'Add More Photos',
        description: `You need at least ${minPhotos} photos for a complete profile. You currently have ${photos.length}.`,
        suggestion: 'Add more photos to give potential matches a better sense of who you are.',
        icon: <Add />,
        color: '#f44336'
      });
    }

    // Authenticity check
    const authenticityScore = photos.reduce((sum, photo) => sum + (photo.authenticity || 8), 0) / photos.length;
    if (authenticityScore < 7) {
      recommendations.push({
        type: 'authenticity',
        priority: 'medium',
        title: 'Show More Authenticity',
        description: 'Your photos could show more of your genuine personality and natural expressions.',
        suggestion: 'Include more candid, unposed photos that capture your authentic self.',
        icon: <AutoAwesome />,
        color: '#2196f3'
      });
    }

    // Story coherence
    if (photos.length >= 5) {
      recommendations.push({
        type: 'story',
        priority: 'low',
        title: 'Create Photo Story',
        description: 'Your photos tell a story about who you are. Consider the narrative flow.',
        suggestion: 'Arrange photos to create a compelling story about your life and interests.',
        icon: <AutoStories />,
        color: '#4caf50'
      });
    }

    return recommendations;
  };

  // Calculate profile score based on photos
  const calculateProfileScore = useCallback(() => {
    if (photos.length === 0) return 0;

    let score = 0;
    const maxScore = 100;

    // Photo count score (30 points)
    const countScore = Math.min((photos.length / maxPhotos) * 30, 30);
    score += countScore;

    // Photo diversity score (25 points)
    const uniqueCategories = new Set(photos.map(photo => photo.category)).size;
    const diversityScore = Math.min((uniqueCategories / photoTypes.length) * 25, 25);
    score += diversityScore;

    // Photo quality score (25 points)
    const avgQuality = photos.reduce((sum, photo) => sum + (photo.quality || 8), 0) / photos.length;
    const qualityScore = (avgQuality / 10) * 25;
    score += qualityScore;

    // Authenticity score (20 points)
    const avgAuthenticity = photos.reduce((sum, photo) => sum + (photo.authenticity || 8), 0) / photos.length;
    const authenticityScore = (avgAuthenticity / 10) * 20;
    score += authenticityScore;

    return Math.round(score);
  }, [photos]);

  useEffect(() => {
    setProfileScore(calculateProfileScore());
    setCoachRecommendations(generateCoachRecommendations(photos));
  }, [photos, calculateProfileScore]);

  const handlePhotoUpload = (files) => {
    const newPhotos = Array.from(files).slice(0, maxPhotos - photos.length).map((file, index) => ({
      id: Date.now() + index,
      file,
      url: URL.createObjectURL(file),
      category: 'uncategorized',
      quality: Math.floor(Math.random() * 3) + 7, // Simulated quality score 7-10
      authenticity: Math.floor(Math.random() * 3) + 7, // Simulated authenticity score 7-10
      isMain: photos.length === 0 && index === 0,
      caption: '',
      prompt: '',
      tags: [],
      analysis: {
        lighting: Math.floor(Math.random() * 3) + 7,
        composition: Math.floor(Math.random() * 3) + 7,
        expression: Math.floor(Math.random() * 3) + 7,
        background: Math.floor(Math.random() * 3) + 7,
        overall: Math.floor(Math.random() * 3) + 7
      }
    }));

    setPhotos(prev => [...prev, ...newPhotos]);
    setShowUploadDialog(false);
  };

  const handlePhotoDelete = (photoId) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  const handlePhotoReorder = (dragIndex, dropIndex) => {
    const newPhotos = [...photos];
    const draggedPhoto = newPhotos[dragIndex];
    newPhotos.splice(dragIndex, 1);
    newPhotos.splice(dropIndex, 0, draggedPhoto);
    setPhotos(newPhotos);
  };

  const handleCategoryChange = (photoId, category) => {
    setPhotos(prev => prev.map(photo => 
      photo.id === photoId ? { ...photo, category } : photo
    ));
  };

  const handleSetMainPhoto = (photoId) => {
    setPhotos(prev => prev.map(photo => ({
      ...photo,
      isMain: photo.id === photoId
    })));
  };

  const handleAnalyzePhotos = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Update photos with enhanced analysis
    setPhotos(prev => prev.map(photo => ({
      ...photo,
      analysis: {
        ...photo.analysis,
        aiSuggestions: [
          'Consider adjusting lighting for better visibility',
          'Great natural expression - very authentic!',
          'Background complements the subject well',
          'Consider cropping for better composition'
        ].slice(0, Math.floor(Math.random() * 4) + 1),
        improvements: [
          'Increase brightness by 10%',
          'Crop to rule of thirds',
          'Enhance color saturation',
          'Remove background distractions'
        ].slice(0, Math.floor(Math.random() * 3) + 1)
      }
    })));
    
    setIsAnalyzing(false);
    setShowCoachDialog(true);
  };

  const renderPhotoCard = (photo, index) => (
    <Card 
      key={photo.id}
      sx={{ 
        position: 'relative',
        height: 300,
        cursor: 'pointer',
        border: photo.isMain ? '3px solid #e91e63' : '1px solid #e0e0e0',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        },
        transition: 'all 0.3s ease'
      }}
      onClick={() => setCurrentPhotoIndex(index)}
    >
      <Box
        sx={{
          width: '100%',
          height: 200,
          backgroundImage: `url(${photo.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        {photo.isMain && (
          <Chip
            label="Main Photo"
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: '#e91e63',
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        )}
        
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'flex',
            gap: 1
          }}
        >
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleSetMainPhoto(photo.id);
            }}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
            }}
          >
            {photo.isMain ? <Star sx={{ color: '#e91e63' }} /> : <StarBorder />}
          </IconButton>
          
          <IconButton
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handlePhotoDelete(photo.id);
            }}
            sx={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
            }}
          >
            <Delete sx={{ color: '#f44336' }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            right: 8,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Rating
            value={photo.quality / 2}
            precision={0.5}
            size="small"
            readOnly
            sx={{
              backgroundColor: 'rgba(255,255,255,0.9)',
              borderRadius: 1,
              px: 1
            }}
          />
          
          <Chip
            label={photoTypes.find(type => type.id === photo.category)?.name || 'Uncategorized'}
            size="small"
            sx={{
              backgroundColor: photoTypes.find(type => type.id === photo.category)?.color || '#9e9e9e',
              color: 'white',
              fontSize: '0.7rem'
            }}
          />
        </Box>
      </Box>

      <CardContent sx={{ p: 2 }}>
        <FormControl fullWidth size="small" sx={{ mb: 1 }}>
          <InputLabel>Photo Category</InputLabel>
          <Select
            value={photo.category}
            onChange={(e) => handleCategoryChange(photo.id, e.target.value)}
            label="Photo Category"
          >
            {photoTypes.map(type => (
              <MenuItem key={type.id} value={type.id}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {type.icon}
                  <Typography sx={{ ml: 1 }}>{type.name}</Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          size="small"
          placeholder="Add a caption or story..."
          value={photo.caption}
          onChange={(e) => setPhotos(prev => prev.map(p => 
            p.id === photo.id ? { ...p, caption: e.target.value } : p
          ))}
          multiline
          rows={2}
        />
      </CardContent>
    </Card>
  );

  const renderCoachRecommendations = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Dr. Love's Photo Recommendations
      </Typography>
      
      {coachRecommendations.map((rec, index) => (
        <Card key={index} sx={{ mb: 2, border: `2px solid ${rec.color}` }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
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
                      backgroundColor: rec.priority === 'critical' ? '#f44336' : 
                                     rec.priority === 'high' ? '#ff9800' : 
                                     rec.priority === 'medium' ? '#2196f3' : '#4caf50',
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {rec.description}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  💡 {rec.suggestion}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderPhotoTypes = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Photo Categories Guide
      </Typography>
      
      {photoTypes.map((type) => (
        <Accordion key={type.id} sx={{ mb: 1 }}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  mr: 2,
                  backgroundColor: type.color,
                  color: 'white'
                }}
              >
                {type.icon}
              </Avatar>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {type.name}
                  {type.required && <Chip label="Required" size="small" sx={{ ml: 1, backgroundColor: '#f44336', color: 'white' }} />}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {type.description}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Max: {type.maxCount}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Tips for Great {type.name}:
            </Typography>
            <List dense>
              {type.tips.map((tip, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Lightbulb sx={{ color: type.color }} />
                  </ListItemIcon>
                  <ListItemText primary={tip} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );

  const renderProfileScore = () => (
    <Paper sx={{ p: 3, mb: 4, background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)', color: 'white' }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
        Profile Photo Score
      </Typography>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex', mr: 3 }}>
          <CircularProgress
            variant="determinate"
            value={profileScore}
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
              {profileScore}
            </Typography>
          </Box>
        </Box>
        
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {profileScore >= 80 ? 'Excellent Profile!' : 
             profileScore >= 60 ? 'Good Profile' : 
             profileScore >= 40 ? 'Needs Improvement' : 'Getting Started'}
          </Typography>
          <Typography variant="body2">
            {photos.length}/{maxPhotos} photos • {new Set(photos.map(p => p.category)).size}/{photoTypes.length} categories
          </Typography>
        </Box>
      </Box>

      <LinearProgress
        variant="determinate"
        value={profileScore}
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Profile Photo Optimization
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Create a comprehensive photo profile that tells your authentic story
        </Typography>
      </Box>

      {/* Profile Score */}
      {renderProfileScore()}

      {/* Main Content Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)}>
          <Tab label={`Your Photos (${photos.length}/${maxPhotos})`} />
          <Tab label="AI Coach Recommendations" />
          <Tab label="Photo Guide" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {selectedTab === 0 && (
        <Box>
          {/* Upload Section */}
          <Card sx={{ mb: 4, p: 3, textAlign: 'center', border: '2px dashed #e0e0e0' }}>
            <CloudUpload sx={{ fontSize: 60, color: '#9e9e9e', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Upload Your Photos
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Add up to {maxPhotos} photos that showcase different aspects of your life and personality
            </Typography>
            
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => handlePhotoUpload(e.target.files)}
              style={{ display: 'none' }}
              id="photo-upload"
            />
            <label htmlFor="photo-upload">
              <Button
                variant="contained"
                component="span"
                startIcon={<Add />}
                disabled={photos.length >= maxPhotos}
                sx={{
                  background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
                  color: 'white',
                  mr: 2
                }}
              >
                Add Photos
              </Button>
            </label>
            
            <Button
              variant="outlined"
              startIcon={<Psychology />}
              onClick={handleAnalyzePhotos}
              disabled={photos.length === 0 || isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing...' : 'Get AI Analysis'}
            </Button>
          </Card>

          {/* Photo Grid */}
          {photos.length > 0 ? (
            <Grid container spacing={3}>
              {photos.map((photo, index) => (
                <Grid item xs={12} sm={6} md={4} key={photo.id}>
                  {renderPhotoCard(photo, index)}
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper sx={{ p: 6, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
              <PhotoCamera sx={{ fontSize: 80, color: '#9e9e9e', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                No Photos Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Start by uploading your first photo to begin building your profile
              </Typography>
            </Paper>
          )}
        </Box>
      )}

      {selectedTab === 1 && renderCoachRecommendations()}
      {selectedTab === 2 && renderPhotoTypes()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 6 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={() => {
            // Navigate to previous screen
            console.log('Navigate to previous screen');
          }}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          disabled={photos.length < minPhotos}
          onClick={() => {
            // Save photos and navigate to next screen
            localStorage.setItem('profilePhotos', JSON.stringify(photos));
            console.log('Profile photos saved:', photos);
            // Navigate to Screen 147: Bio Writing Assistant
          }}
          sx={{
            background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
            color: 'white'
          }}
        >
          Continue to Bio Writing
        </Button>
      </Box>

      {/* Coach Dialog */}
      <Dialog open={showCoachDialog} onClose={() => setShowCoachDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Psychology sx={{ mr: 1, color: '#e91e63' }} />
            Dr. Love's Photo Analysis
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              I've analyzed your photos using advanced AI to help you create the most attractive and authentic profile possible.
            </Typography>
          </Alert>
          
          {renderCoachRecommendations()}
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

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Photo Guidelines:</strong> All photo recommendations respect cultural diversity and personal preferences. 
          Choose photos that authentically represent who you are while following community guidelines for safety and respect.
        </Typography>
      </Alert>
    </Container>
  );
};

export default ProfilePhotoOptimization;

