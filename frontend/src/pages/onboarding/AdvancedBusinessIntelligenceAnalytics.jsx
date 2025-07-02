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
  Analytics as AnalyticsIcon,
  Assessment as AssessmentIcon,
  Insights as InsightsIcon,
  ShowChart as ShowChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutLargeIcon,
  MultilineChart as MultilineChartIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Equalizer as EqualizerIcon,
  Leaderboard as LeaderboardIcon,
  Speed as SpeedIcon,
  Timeline as TimelineIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
  AttachMoney as AttachMoneyIcon,
  MonetizationOn as MonetizationOnIcon,
  AccountBalance as AccountBalanceIcon,
  CreditCard as CreditCardIcon,
  Payment as PaymentIcon,
  Receipt as ReceiptIcon,
  ShoppingCart as ShoppingCartIcon,
  Store as StoreIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  Group as GroupIcon,
  Groups as GroupsIcon,
  Person as PersonIcon,
  People as PeopleIcon,
  PersonAdd as PersonAddIcon,
  PersonRemove as PersonRemoveIcon,
  SupervisorAccount as SupervisorAccountIcon,
  AccountCircle as AccountCircleIcon,
  Badge as BadgeIcon,
  CardMembership as CardMembershipIcon,
  ContactMail as ContactMailIcon,
  ContactPhone as ContactPhoneIcon,
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
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  StarHalf as StarHalfIcon,
  StarOutline as StarOutlineIcon,
  StarRate as StarRateIcon,
  Grade as GradeIcon,
  EmojiEvents as TrophyIcon,
  Celebration as CelebrationIcon,
  LocalOffer as LocalOfferIcon,
  Loyalty as LoyaltyIcon,
  Redeem as RedeemIcon,
  CardGiftcard as CardGiftcardIcon,
  Cake as CakeIcon,
  Event as EventIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  EventNote as EventNoteIcon,
  EventRepeat as EventRepeatIcon,
  EventSeat as EventSeatIcon,
  Schedule as ScheduleIcon,
  Today as TodayIcon,
  DateRange as DateRangeIcon,
  CalendarToday as CalendarTodayIcon,
  CalendarViewDay as CalendarViewDayIcon,
  CalendarViewWeek as CalendarViewWeekIcon,
  CalendarViewMonth as CalendarViewMonthIcon,
  AccessTime as AccessTimeIcon,
  Alarm as AlarmIcon,
  AlarmAdd as AlarmAddIcon,
  AlarmOn as AlarmOnIcon,
  AlarmOff as AlarmOffIcon,
  Timer as TimerIcon,
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon,
  History as HistoryIcon,
  HistoryEdu as HistoryEduIcon,
  HistoryToggleOff as HistoryToggleOffIcon,
  QueryBuilder as QueryBuilderIcon,
  ScheduleSend as ScheduleSendIcon,
  WatchLater as WatchLaterIcon,
  MoreTime as MoreTimeIcon,
  Pending as PendingIcon,
  PendingActions as PendingActionsIcon,
  Update as UpdateIcon,
  Refresh as RefreshIcon,
  Sync as SyncIcon,
  SyncAlt as SyncAltIcon,
  CloudSync as CloudSyncIcon,
  SyncDisabled as SyncDisabledIcon,
  SyncLock as SyncLockIcon,
  SyncProblem as SyncProblemIcon,
  Autorenew as AutorenewIcon,
  Cached as CachedIcon,
  Loop as LoopIcon,
  Repeat as RepeatIcon,
  RepeatOne as RepeatOneIcon,
  Shuffle as ShuffleIcon,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Replay as ReplayIcon,
  VolumeUp as VolumeUpIcon,
  VolumeDown as VolumeDownIcon,
  VolumeOff as VolumeOffIcon,
  VolumeMute as VolumeMuteIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Headset as HeadsetIcon,
  HeadsetMic as HeadsetMicIcon,
  Speaker as SpeakerIcon,
  SpeakerPhone as SpeakerPhoneIcon,
  Hearing as ListenIcon,
  RecordVoiceOver as VoiceIcon,
  NotificationsActive as NotificationIcon,
  Notifications as NotificationsIcon,
  NotificationsOff as NotificationsOffIcon,
  NotificationsPaused as NotificationsPausedIcon,
  Send as SendIcon,
  Reply as ReplyIcon,
  ReplyAll as ReplyAllIcon,
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
  ContentCut as CutIcon,
  ContentPaste as PasteIcon,
  SelectAll as SelectAllIcon,
  ClearAll as ClearAllIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
  ViewQuilt as ViewQuiltIcon,
  ViewStream as ViewStreamIcon,
  ViewColumn as ViewColumnIcon,
  ViewCarousel as ViewCarouselIcon,
  ViewComfy as ViewComfyIcon,
  ViewCompact as ViewCompactIcon,
  ViewAgenda as ViewAgendaIcon,
  ViewArray as ViewArrayIcon,
  ViewDay as ViewDayIcon,
  ViewHeadline as ViewHeadlineIcon,
  ViewSidebar as ViewSidebarIcon,
  ViewWeek as ViewWeekIcon,
  Fullscreen as FullscreenIcon,
  FullscreenExit as FullscreenExitIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  ZoomOutMap as ZoomOutMapIcon,
  CenterFocusStrong as CenterFocusIcon,
  CenterFocusWeak as CenterFocusWeakIcon,
  FitScreen as FitScreenIcon,
  AspectRatio as AspectRatioIcon,
  CropFree as CropFreeIcon,
  Crop as CropIcon,
  CropSquare as CropSquareIcon,
  Crop169 as Crop169Icon,
  Crop32 as Crop32Icon,
  Crop54 as Crop54Icon,
  Crop75 as Crop75Icon,
  CropDin as CropDinIcon,
  CropLandscape as CropLandscapeIcon,
  CropOriginal as CropOriginalIcon,
  CropPortrait as CropPortraitIcon,
  CropRotate as CropRotateIcon,
  Rotate90DegreesCcw as Rotate90CcwIcon,
  Rotate90DegreesCw as Rotate90CwIcon,
  RotateLeft as RotateLeftIcon,
  RotateRight as RotateRightIcon,
  FlipToBack as FlipToBackIcon,
  FlipToFront as FlipToFrontIcon,
  Flip as FlipIcon,
  Transform as TransformIcon,
  Straighten as StraightenIcon,
  Tune as TuneIcon,
  Palette as PaletteIcon,
  ColorLens as ColorLensIcon,
  InvertColors as InvertColorsIcon,
  Brush as BrushIcon,
  FormatPaint as FormatPaintIcon,
  FormatColorFill as FormatColorFillIcon,
  FormatColorReset as FormatColorResetIcon,
  FormatColorText as FormatColorTextIcon,
  Gradient as GradientIcon,
  Opacity as OpacityIcon,
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
  Contrast as ContrastIcon,
  Exposure as ExposureIcon,
  ExposurePlus1 as ExposurePlus1Icon,
  ExposurePlus2 as ExposurePlus2Icon,
  ExposureNeg1 as ExposureNeg1Icon,
  ExposureNeg2 as ExposureNeg2Icon,
  ExposureZero as ExposureZeroIcon,
  WbAuto as WbAutoIcon,
  WbCloudy as WbCloudyIcon,
  WbIncandescent as WbIncandescentIcon,
  WbIridescent as WbIridescentIcon,
  WbShade as WbShadeIcon,
  WbSunny as WbSunnyIcon,
  WbTwilight as WbTwilightIcon,
  Flare as FlareIcon,
  Flash as FlashIcon,
  FlashAuto as FlashAutoIcon,
  FlashOff as FlashOffIcon,
  FlashOn as FlashOnIcon,
  Highlight as HighlightIcon,
  HighlightOff as HighlightOffIcon,
  Lens as LensIcon,
  Looks as LooksIcon,
  Looks3 as Looks3Icon,
  Looks4 as Looks4Icon,
  Looks5 as Looks5Icon,
  Looks6 as Looks6Icon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
  MonochromePhotos as MonochromePhotosIcon,
  Photo as PhotoIcon,
  PhotoAlbum as PhotoAlbumIcon,
  PhotoCamera as PhotoCameraIcon,
  PhotoCameraBack as PhotoCameraBackIcon,
  PhotoCameraFront as PhotoCameraFrontIcon,
  PhotoFilter as PhotoFilterIcon,
  PhotoLibrary as PhotoLibraryIcon,
  PhotoSizeSelectActual as PhotoSizeSelectActualIcon,
  PhotoSizeSelectLarge as PhotoSizeSelectLargeIcon,
  PhotoSizeSelectSmall as PhotoSizeSelectSmallIcon,
  Picture as PictureIcon,
  PictureAsPdf as PictureAsPdfIcon,
  PictureInPicture as PictureInPictureIcon,
  PictureInPictureAlt as PictureInPictureAltIcon,
  Slideshow as SlideshowIcon,
  Collections as CollectionsIcon,
  CollectionsBookmark as CollectionsBookmarkIcon,
  Burst as BurstIcon,
  CameraAlt as CameraAltIcon,
  CameraEnhance as CameraEnhanceIcon,
  CameraFront as CameraFrontIcon,
  CameraRear as CameraRearIcon,
  CameraRoll as CameraRollIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  VideoCall as VideoCallIcon,
  VideoFile as VideoFileIcon,
  VideoLabel as VideoLabelIcon,
  VideoLibrary as VideoLibraryIcon,
  VideoSettings as VideoSettingsIcon,
  Theaters as TheatersIcon,
  Movie as MovieIcon,
  MovieCreation as MovieCreationIcon,
  MovieFilter as MovieFilterIcon,
  LocalMovies as LocalMoviesIcon,
  LiveTv as LiveTvIcon,
  OndemandVideo as OndemandVideoIcon,
  PersonalVideo as PersonalVideoIcon,
  PlayCircleFilled as PlayCircleIcon,
  PlayCircleFilledWhite as PlayCircleWhiteIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  PauseCircleFilled as PauseCircleIcon,
  PauseCircleFilledWhite as PauseCircleWhiteIcon,
  PauseCircleOutline as PauseCircleOutlineIcon,
  StopCircle as StopCircleIcon,
  PlaylistAdd as PlaylistAddIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  PlaylistPlay as PlaylistPlayIcon,
  QueueMusic as QueueMusicIcon,
  Queue as QueueIcon,
  QueuePlayNext as QueuePlayNextIcon,
  Radio as RadioIcon,
  RecentActors as RecentActorsIcon,
  Album as AlbumIcon,
  ArtTrack as ArtTrackIcon,
  AudioFile as AudioFileIcon,
  AudioTrack as AudioTrackIcon,
  FeaturedPlayList as FeaturedPlayListIcon,
  FeaturedVideo as FeaturedVideoIcon,
  FiberDvr as FiberDvrIcon,
  FiberManualRecord as FiberManualRecordIcon,
  FiberNew as FiberNewIcon,
  FiberPin as FiberPinIcon,
  FiberSmartRecord as FiberSmartRecordIcon,
  Forward10 as Forward10Icon,
  Forward30 as Forward30Icon,
  Forward5 as Forward5Icon,
  Games as GamesIcon,
  Hd as HdIcon,
  HearingDisabled as HearingDisabledIcon,
  HighQuality as HighQualityIcon,
  LibraryAdd as LibraryAddIcon,
  LibraryBooks as LibraryBooksIcon,
  LibraryMusic as LibraryMusicIcon,
  Loop as LoopIcon2,
  MissedVideoCall as MissedVideoCallIcon,
  MusicNote as MusicNoteIcon,
  MusicVideo as MusicVideoIcon,
  NewReleases as NewReleasesIcon,
  NotInterested as NotInterestedIcon,
  Note as NoteIcon,
  PausePresentation as PausePresentationIcon,
  PlayDisabled as PlayDisabledIcon,
  PlaylistRemove as PlaylistRemoveIcon,
  PresentToAll as PresentToAllIcon,
  Replay10 as Replay10Icon,
  Replay30 as Replay30Icon,
  Replay5 as Replay5Icon,
  ShuffleOn as ShuffleOnIcon,
  SkipNext as SkipNextIcon2,
  SkipPrevious as SkipPreviousIcon2,
  SlowMotionVideo as SlowMotionVideoIcon,
  Snooze as SnoozeIcon,
  SortByAlpha as SortByAlphaIcon,
  Stop as StopIcon2,
  Subscriptions as SubscriptionsIcon,
  Subtitles as SubtitlesIcon,
  SurroundSound as SurroundSoundIcon,
  VideoSettings as VideoSettingsIcon2,
  VolumeDown as VolumeDownIcon2,
  VolumeMute as VolumeMuteIcon2,
  VolumeOff as VolumeOffIcon2,
  VolumeUp as VolumeUpIcon2,
  Web as WebIcon,
  WebAsset as WebAssetIcon,
  WebAssetOff as WebAssetOffIcon,
  Widgets as WidgetsIcon,
  Wifi as WifiIcon,
  WifiCalling as WifiCallingIcon,
  WifiCalling3 as WifiCalling3Icon,
  WifiLock as WifiLockIcon,
  WifiOff as WifiOffIcon,
  WifiProtectedSetup as WifiProtectedSetupIcon,
  WifiTethering as WifiTetheringIcon,
  WifiTetheringError as WifiTetheringErrorIcon,
  WifiTetheringOff as WifiTetheringOffIcon,
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
  OpenInNew as OpenIcon
} from '@mui/icons-material';

const AdvancedBusinessIntelligenceAnalytics = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [businessMetrics, setBusinessMetrics] = useState({});
  const [revenueAnalytics, setRevenueAnalytics] = useState({});
  const [userAnalytics, setUserAnalytics] = useState({});
  const [performanceMetrics, setPerformanceMetrics] = useState({});

  // Business Metrics Data
  useEffect(() => {
    const metrics = {
      totalRevenue: 2847293.67,
      monthlyRecurringRevenue: 234567.89,
      averageRevenuePerUser: 47.83,
      customerLifetimeValue: 892.45,
      churnRate: 2.3,
      customerAcquisitionCost: 23.67,
      netPromoterScore: 78.4,
      customerSatisfactionScore: 4.7,
      monthlyActiveUsers: 847293,
      dailyActiveUsers: 234567,
      userGrowthRate: 12.7,
      conversionRate: 8.9,
      retentionRate: 89.3,
      engagementScore: 87.6
    };
    setBusinessMetrics(metrics);
  }, []);

  // Revenue Analytics Data
  useEffect(() => {
    const analytics = {
      subscriptionRevenue: {
        basic: 567890.23,
        premium: 1234567.89,
        enterprise: 890123.45,
        total: 2692581.57
      },
      revenueGrowth: {
        monthly: 8.7,
        quarterly: 23.4,
        yearly: 67.8
      },
      revenueByRegion: {
        northAmerica: 1423456.78,
        europe: 789012.34,
        asia: 456789.01,
        other: 177035.54
      },
      paymentMethods: {
        creditCard: 78.9,
        paypal: 12.3,
        bankTransfer: 6.7,
        crypto: 2.1
      },
      refundRate: 1.2,
      averageOrderValue: 89.45,
      revenuePerEmployee: 234567.89
    };
    setRevenueAnalytics(analytics);
  }, []);

  // User Analytics Data
  useEffect(() => {
    const analytics = {
      userDemographics: {
        ageGroups: {
          '18-24': 23.4,
          '25-34': 34.7,
          '35-44': 28.9,
          '45-54': 9.8,
          '55+': 3.2
        },
        genderDistribution: {
          female: 52.3,
          male: 45.7,
          other: 2.0
        },
        geographicDistribution: {
          urban: 67.8,
          suburban: 28.9,
          rural: 3.3
        }
      },
      userBehavior: {
        averageSessionDuration: 23.7,
        pagesPerSession: 8.4,
        bounceRate: 12.3,
        returnVisitorRate: 67.8,
        mobileUsage: 78.9,
        desktopUsage: 21.1
      },
      userEngagement: {
        dailyActiveUsers: 234567,
        weeklyActiveUsers: 567890,
        monthlyActiveUsers: 847293,
        averageTimeSpent: 45.6,
        featureAdoptionRate: 73.4,
        socialSharingRate: 23.7
      },
      userJourney: {
        acquisitionChannels: {
          organic: 34.7,
          paidSearch: 23.4,
          social: 18.9,
          referral: 12.3,
          direct: 10.7
        },
        conversionFunnel: {
          visitors: 1234567,
          signups: 234567,
          activations: 189234,
          subscriptions: 123456,
          renewals: 98765
        }
      }
    };
    setUserAnalytics(analytics);
  }, []);

  // Performance Metrics Data
  useEffect(() => {
    const metrics = {
      systemPerformance: {
        uptime: 99.97,
        responseTime: 0.8,
        throughput: 12345,
        errorRate: 0.03,
        cpuUsage: 23.4,
        memoryUsage: 45.6,
        diskUsage: 34.7,
        networkLatency: 12.3
      },
      businessPerformance: {
        goalAchievement: 94.7,
        kpiPerformance: 89.3,
        targetCompletion: 87.6,
        benchmarkComparison: 112.4,
        competitivePosition: 78.9,
        marketShare: 12.7,
        brandRecognition: 67.8,
        customerLoyalty: 84.5
      },
      operationalEfficiency: {
        processAutomation: 78.9,
        resourceUtilization: 89.3,
        costOptimization: 23.4,
        timeToMarket: 67.8,
        qualityScore: 94.7,
        complianceRate: 98.9,
        riskMitigation: 87.6,
        innovationIndex: 73.4
      },
      predictiveAnalytics: {
        forecastAccuracy: 89.7,
        trendPrediction: 87.3,
        anomalyDetection: 94.6,
        riskAssessment: 78.9,
        opportunityIdentification: 82.4,
        demandForecasting: 91.2,
        churnPrediction: 85.7,
        revenueProjection: 88.9
      }
    };
    setPerformanceMetrics(metrics);
  }, []);

  // Revenue Calculation Functions
  const calculateRevenueGrowth = useCallback((current, previous) => {
    return ((current - previous) / previous * 100).toFixed(1);
  }, []);

  const calculateCustomerMetrics = useCallback(() => {
    const { totalRevenue, monthlyActiveUsers, customerLifetimeValue, customerAcquisitionCost } = businessMetrics;
    
    const roi = ((customerLifetimeValue - customerAcquisitionCost) / customerAcquisitionCost * 100).toFixed(1);
    const revenuePerUser = (totalRevenue / monthlyActiveUsers).toFixed(2);
    
    return { roi, revenuePerUser };
  }, [businessMetrics]);

  const renderBusinessOverview = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AnalyticsIcon color="primary" />
        Business Intelligence Overview & Key Performance Indicators
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        📊 Comprehensive business intelligence with ${(businessMetrics.totalRevenue / 1000000).toFixed(2)}M total revenue, 
        {businessMetrics.userGrowthRate}% user growth rate, and {businessMetrics.netPromoterScore} NPS score. 
        {businessMetrics.monthlyActiveUsers?.toLocaleString()} monthly active users with {businessMetrics.retentionRate}% retention rate.
      </Alert>

      {/* Business Performance Dashboard */}
      <Card sx={{ 
        mb: 4, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 3 }}>
            <ShowChartIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            ${(businessMetrics.totalRevenue / 1000000).toFixed(2)}M
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 1 }}>
            Total Revenue
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Advanced business intelligence platform
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {businessMetrics.userGrowthRate}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                User Growth
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {businessMetrics.netPromoterScore}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                NPS Score
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {businessMetrics.retentionRate}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Retention Rate
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Key Business Metrics */}
      <Typography variant="h6" gutterBottom>
        Key Business Performance Metrics
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                ${(businessMetrics.monthlyRecurringRevenue / 1000).toFixed(0)}K
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monthly Recurring Revenue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                ${businessMetrics.averageRevenuePerUser}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Revenue Per User
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                ${businessMetrics.customerLifetimeValue}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Customer Lifetime Value
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                {businessMetrics.churnRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Churn Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Business Intelligence Categories */}
      <Typography variant="h6" gutterBottom>
        Business Intelligence Categories
      </Typography>
      
      <Grid container spacing={3}>
        {[
          {
            category: 'Revenue Analytics',
            icon: <AttachMoneyIcon />,
            metrics: [
              { name: 'Total Revenue', value: `$${(businessMetrics.totalRevenue / 1000000).toFixed(2)}M`, trend: '+8.7%' },
              { name: 'MRR Growth', value: `$${(businessMetrics.monthlyRecurringRevenue / 1000).toFixed(0)}K`, trend: '+12.3%' },
              { name: 'ARPU', value: `$${businessMetrics.averageRevenuePerUser}`, trend: '+5.4%' },
              { name: 'LTV/CAC Ratio', value: `${(businessMetrics.customerLifetimeValue / businessMetrics.customerAcquisitionCost).toFixed(1)}:1`, trend: '+15.6%' }
            ],
            score: 94.7,
            status: 'excellent'
          },
          {
            category: 'User Engagement',
            icon: <GroupsIcon />,
            metrics: [
              { name: 'MAU', value: `${(businessMetrics.monthlyActiveUsers / 1000).toFixed(0)}K`, trend: '+12.7%' },
              { name: 'DAU', value: `${(businessMetrics.dailyActiveUsers / 1000).toFixed(0)}K`, trend: '+8.9%' },
              { name: 'Engagement Score', value: `${businessMetrics.engagementScore}%`, trend: '+6.2%' },
              { name: 'Session Duration', value: '23.7 min', trend: '+4.8%' }
            ],
            score: 89.3,
            status: 'good'
          },
          {
            category: 'Customer Success',
            icon: <StarIcon />,
            metrics: [
              { name: 'NPS Score', value: businessMetrics.netPromoterScore, trend: '+3.4%' },
              { name: 'CSAT', value: `${businessMetrics.customerSatisfactionScore}/5`, trend: '+2.1%' },
              { name: 'Retention Rate', value: `${businessMetrics.retentionRate}%`, trend: '+1.8%' },
              { name: 'Churn Rate', value: `${businessMetrics.churnRate}%`, trend: '-0.7%' }
            ],
            score: 91.8,
            status: 'excellent'
          },
          {
            category: 'Growth Metrics',
            icon: <TrendingUpIcon />,
            metrics: [
              { name: 'User Growth', value: `${businessMetrics.userGrowthRate}%`, trend: '+2.3%' },
              { name: 'Conversion Rate', value: `${businessMetrics.conversionRate}%`, trend: '+1.4%' },
              { name: 'CAC', value: `$${businessMetrics.customerAcquisitionCost}`, trend: '-8.9%' },
              { name: 'Payback Period', value: '2.1 months', trend: '-12.3%' }
            ],
            score: 87.6,
            status: 'good'
          }
        ].map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: category.status === 'excellent' ? 'success.main' : 'primary.main',
                    width: 48,
                    height: 48
                  }}>
                    {category.icon}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {category.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.metrics.length} key metrics
                    </Typography>
                  </Box>
                  <Chip 
                    label={`${category.score}%`} 
                    color={category.status === 'excellent' ? 'success' : 'primary'} 
                  />
                </Box>
                
                <LinearProgress
                  variant="determinate"
                  value={category.score}
                  sx={{ 
                    height: 8, 
                    borderRadius: 4, 
                    mb: 2,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: category.status === 'excellent' ? 'success.main' : 'primary.main'
                    }
                  }}
                />
                
                <List dense>
                  {category.metrics.map((metric, metricIndex) => (
                    <ListItem key={metricIndex} sx={{ px: 0 }}>
                      <ListItemText 
                        primary={metric.name}
                        secondary={metric.value}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'h6', color: 'primary.main' }}
                      />
                      <Chip 
                        label={metric.trend} 
                        size="small" 
                        color={metric.trend.startsWith('+') ? 'success' : 'error'}
                        variant="outlined"
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderRevenueAnalytics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AttachMoneyIcon color="primary" />
        Revenue Analytics & Financial Intelligence
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        💰 Comprehensive revenue analytics with ${(revenueAnalytics.subscriptionRevenue?.total / 1000000).toFixed(2)}M subscription revenue, 
        {revenueAnalytics.revenueGrowth?.yearly}% yearly growth, and {revenueAnalytics.refundRate}% refund rate. 
        Advanced financial intelligence across all revenue streams.
      </Alert>

      {/* Revenue Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                ${(revenueAnalytics.subscriptionRevenue?.total / 1000000).toFixed(2)}M
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Subscription Revenue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {revenueAnalytics.revenueGrowth?.yearly}%
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
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                ${revenueAnalytics.averageOrderValue}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average Order Value
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                {revenueAnalytics.refundRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Refund Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Revenue Breakdown */}
      <Typography variant="h6" gutterBottom>
        Revenue Stream Analysis
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Subscription Revenue Breakdown
              </Typography>
              
              <List>
                {[
                  { plan: 'Basic Plan', revenue: revenueAnalytics.subscriptionRevenue?.basic, percentage: 21.1 },
                  { plan: 'Premium Plan', revenue: revenueAnalytics.subscriptionRevenue?.premium, percentage: 45.8 },
                  { plan: 'Enterprise Plan', revenue: revenueAnalytics.subscriptionRevenue?.enterprise, percentage: 33.1 }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={item.plan}
                      secondary={`$${(item.revenue / 1000000).toFixed(2)}M`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.percentage}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item.percentage}%
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
                Revenue by Region
              </Typography>
              
              <List>
                {[
                  { region: 'North America', revenue: revenueAnalytics.revenueByRegion?.northAmerica, percentage: 50.0 },
                  { region: 'Europe', revenue: revenueAnalytics.revenueByRegion?.europe, percentage: 27.7 },
                  { region: 'Asia', revenue: revenueAnalytics.revenueByRegion?.asia, percentage: 16.0 },
                  { region: 'Other', revenue: revenueAnalytics.revenueByRegion?.other, percentage: 6.3 }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={item.region}
                      secondary={`$${(item.revenue / 1000000).toFixed(2)}M`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.percentage}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item.percentage}%
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
                Payment Method Distribution
              </Typography>
              
              <List>
                {[
                  { method: 'Credit Card', percentage: revenueAnalytics.paymentMethods?.creditCard },
                  { method: 'PayPal', percentage: revenueAnalytics.paymentMethods?.paypal },
                  { method: 'Bank Transfer', percentage: revenueAnalytics.paymentMethods?.bankTransfer },
                  { method: 'Cryptocurrency', percentage: revenueAnalytics.paymentMethods?.crypto }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={item.method}
                      secondary={`${item.percentage}% of transactions`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.percentage}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item.percentage}%
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
                Revenue Growth Trends
              </Typography>
              
              <List>
                {[
                  { period: 'Monthly Growth', growth: revenueAnalytics.revenueGrowth?.monthly, color: 'primary' },
                  { period: 'Quarterly Growth', growth: revenueAnalytics.revenueGrowth?.quarterly, color: 'success' },
                  { period: 'Yearly Growth', growth: revenueAnalytics.revenueGrowth?.yearly, color: 'warning' }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <TrendingUpIcon color={item.color} />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.period}
                      secondary={`${item.growth}% growth rate`}
                    />
                    <Chip 
                      label={`+${item.growth}%`} 
                      color={item.color}
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

  const renderUserAnalytics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GroupsIcon color="primary" />
        User Analytics & Behavioral Intelligence
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        👥 Comprehensive user analytics with {(userAnalytics.userEngagement?.monthlyActiveUsers / 1000).toFixed(0)}K monthly active users, 
        {userAnalytics.userBehavior?.averageSessionDuration} min average session duration, and {userAnalytics.userBehavior?.returnVisitorRate}% return visitor rate. 
        Advanced behavioral intelligence and user journey optimization.
      </Alert>

      {/* User Engagement Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {(userAnalytics.userEngagement?.monthlyActiveUsers / 1000).toFixed(0)}K
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monthly Active Users
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {userAnalytics.userBehavior?.averageSessionDuration} min
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg Session Duration
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {userAnalytics.userBehavior?.returnVisitorRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Return Visitor Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                {userAnalytics.userEngagement?.featureAdoptionRate}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Feature Adoption Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* User Analytics Categories */}
      <Typography variant="h6" gutterBottom>
        User Behavior & Demographics Analysis
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Age Group Distribution
              </Typography>
              
              <List>
                {Object.entries(userAnalytics.userDemographics?.ageGroups || {}).map(([ageGroup, percentage], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={`${ageGroup} years`}
                      secondary={`${percentage}% of users`}
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
                Acquisition Channels
              </Typography>
              
              <List>
                {Object.entries(userAnalytics.userJourney?.acquisitionChannels || {}).map(([channel, percentage], index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={channel.charAt(0).toUpperCase() + channel.slice(1)}
                      secondary={`${percentage}% of acquisitions`}
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
                Device Usage Patterns
              </Typography>
              
              <List>
                {[
                  { device: 'Mobile', usage: userAnalytics.userBehavior?.mobileUsage },
                  { device: 'Desktop', usage: userAnalytics.userBehavior?.desktopUsage }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={item.device}
                      secondary={`${item.usage}% of sessions`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.usage}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item.usage}%
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
                Conversion Funnel Analysis
              </Typography>
              
              <List>
                {[
                  { stage: 'Visitors', count: userAnalytics.userJourney?.conversionFunnel?.visitors, rate: 100 },
                  { stage: 'Signups', count: userAnalytics.userJourney?.conversionFunnel?.signups, rate: 19.0 },
                  { stage: 'Activations', count: userAnalytics.userJourney?.conversionFunnel?.activations, rate: 15.3 },
                  { stage: 'Subscriptions', count: userAnalytics.userJourney?.conversionFunnel?.subscriptions, rate: 10.0 },
                  { stage: 'Renewals', count: userAnalytics.userJourney?.conversionFunnel?.renewals, rate: 8.0 }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemText 
                      primary={item.stage}
                      secondary={`${(item.count / 1000).toFixed(0)}K users`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={item.rate}
                        sx={{ width: 100, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {item.rate}%
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

  const renderPerformanceMetrics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SpeedIcon color="primary" />
        Performance Metrics & Predictive Analytics
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        ⚡ Advanced performance monitoring with {performanceMetrics.systemPerformance?.uptime}% uptime, 
        {performanceMetrics.systemPerformance?.responseTime}s response time, and {performanceMetrics.predictiveAnalytics?.forecastAccuracy}% forecast accuracy. 
        Comprehensive predictive analytics and operational intelligence.
      </Alert>

      {/* Performance Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {performanceMetrics.systemPerformance?.uptime}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                System Uptime
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {performanceMetrics.systemPerformance?.responseTime}s
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Response Time
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {performanceMetrics.businessPerformance?.goalAchievement}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Goal Achievement
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                {performanceMetrics.predictiveAnalytics?.forecastAccuracy}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Forecast Accuracy
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Performance Categories */}
      <Typography variant="h6" gutterBottom>
        Performance & Analytics Categories
      </Typography>
      
      <Grid container spacing={3}>
        {[
          {
            category: 'System Performance',
            icon: <SpeedIcon />,
            metrics: performanceMetrics.systemPerformance,
            color: 'primary'
          },
          {
            category: 'Business Performance',
            icon: <AssessmentIcon />,
            metrics: performanceMetrics.businessPerformance,
            color: 'success'
          },
          {
            category: 'Operational Efficiency',
            icon: <EqualizerIcon />,
            metrics: performanceMetrics.operationalEfficiency,
            color: 'warning'
          },
          {
            category: 'Predictive Analytics',
            icon: <InsightsIcon />,
            metrics: performanceMetrics.predictiveAnalytics,
            color: 'info'
          }
        ].map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: `${category.color}.main`,
                    width: 48,
                    height: 48
                  }}>
                    {category.icon}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {category.category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {Object.keys(category.metrics || {}).length} performance indicators
                    </Typography>
                  </Box>
                </Box>
                
                <List dense>
                  {Object.entries(category.metrics || {}).map(([key, value], metricIndex) => (
                    <ListItem key={metricIndex} sx={{ px: 0 }}>
                      <ListItemText 
                        primary={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        secondary={
                          typeof value === 'number' 
                            ? value < 10 
                              ? `${value}${key.includes('Rate') || key.includes('Usage') || key.includes('Score') || key.includes('Achievement') || key.includes('Performance') || key.includes('Accuracy') || key.includes('Prediction') || key.includes('Detection') || key.includes('Assessment') || key.includes('Identification') || key.includes('Forecasting') || key.includes('Projection') ? '%' : key.includes('Time') || key.includes('Latency') ? 's' : ''}`
                              : `${value}${key.includes('Rate') || key.includes('Usage') || key.includes('Score') || key.includes('Achievement') || key.includes('Performance') || key.includes('Accuracy') || key.includes('Prediction') || key.includes('Detection') || key.includes('Assessment') || key.includes('Identification') || key.includes('Forecasting') || key.includes('Projection') ? '%' : key.includes('Throughput') ? ' req/s' : ''}`
                            : value
                        }
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'h6', color: `${category.color}.main` }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          📊 Advanced Business Intelligence & Analytics
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive business intelligence platform with ${(businessMetrics.totalRevenue / 1000000).toFixed(2)}M total revenue, 
          {businessMetrics.monthlyActiveUsers?.toLocaleString()} monthly active users, and {businessMetrics.netPromoterScore} NPS score. 
          Advanced analytics, predictive intelligence, and real-time performance monitoring.
        </Typography>

        {/* Business Intelligence Status Banner */}
        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            🚀 ADVANCED BUSINESS INTELLIGENCE PLATFORM FULLY OPERATIONAL!
          </Typography>
          <Typography>
            ${(businessMetrics.totalRevenue / 1000000).toFixed(2)}M total revenue with {businessMetrics.userGrowthRate}% user growth rate. 
            {businessMetrics.monthlyActiveUsers?.toLocaleString()} monthly active users and {businessMetrics.retentionRate}% retention rate.
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
            label="Business Overview" 
            icon={<AnalyticsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Revenue Analytics" 
            icon={<AttachMoneyIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="User Analytics" 
            icon={<GroupsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Performance Metrics" 
            icon={<SpeedIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderBusinessOverview()}
          {activeTab === 1 && renderRevenueAnalytics()}
          {activeTab === 2 && renderUserAnalytics()}
          {activeTab === 3 && renderPerformanceMetrics()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Analytics Guide
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
            startIcon={<InsightsIcon />}
            onClick={() => setActiveTab(3)}
          >
            View Insights
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<AnalyticsIcon />}
            onClick={() => setActiveTab(0)}
            sx={{ minWidth: 200 }}
          >
            Analytics Dashboard
          </Button>
        </Box>
      </Box>

      {/* Business Intelligence Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Business Intelligence Summary
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={94.7} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          94.7% BI Score | ${(businessMetrics.totalRevenue / 1000000).toFixed(2)}M Revenue | {businessMetrics.userGrowthRate}% Growth | {businessMetrics.netPromoterScore} NPS | {(businessMetrics.monthlyActiveUsers / 1000).toFixed(0)}K MAU
        </Typography>
      </Box>
    </Container>
  );
};

export default AdvancedBusinessIntelligenceAnalytics;

