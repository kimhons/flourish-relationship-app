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
  TextField,
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Badge,
  Rating,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import {
  Support as SupportIcon,
  SupportAgent as SupportAgentIcon,
  ContactSupport as ContactSupportIcon,
  Help as HelpIcon,
  HelpCenter as HelpCenterIcon,
  LiveHelp as LiveHelpIcon,
  QuestionAnswer as QAIcon,
  Forum as ForumIcon,
  Chat as ChatIcon,
  Message as MessageIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  PhoneInTalk as PhoneInTalkIcon,
  VideoCall as VideoCallIcon,
  Call as CallIcon,
  Headset as HeadsetIcon,
  RecordVoiceOver as VoiceOverIcon,
  VoiceChat as VoiceChatIcon,
  Mic as MicIcon,
  Speaker as SpeakerIcon,
  Hearing as HearingIcon,
  Psychology as PsychologyIcon,
  EmojiPeople as EmojiPeopleIcon,
  Favorite as FavoriteIcon,
  ThumbUp as ThumbUpIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  Verified as VerifiedIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  Notifications as NotificationsIcon,
  NotificationImportant as NotificationImportantIcon,
  Campaign as CampaignIcon,
  Announcement as AnnouncementIcon,
  Feedback as FeedbackIcon,
  RateReview as RateReviewIcon,
  Reviews as ReviewsIcon,
  Comment as CommentIcon,
  ChatBubble as ChatBubbleIcon,
  QuestionMark as QuestionMarkIcon,
  Assignment as AssignmentIcon,
  AssignmentInd as AssignmentIndIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Task as TaskIcon,
  TaskAlt as TaskAltIcon,
  Checklist as ChecklistIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  FactCheck as FactCheckIcon,
  Rule as RuleIcon,
  Policy as PolicyIcon,
  Gavel as GavelIcon,
  Balance as BalanceIcon,
  Security as SecurityIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Key as KeyIcon,
  VpnKey as VpnKeyIcon,
  Fingerprint as FingerprintIcon,
  Face as FaceIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  RemoveRedEye as EyeIcon,
  Preview as PreviewIcon,
  Search as SearchIcon,
  FindInPage as FindIcon,
  FindReplace as FindReplaceIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  ImportExport as ImportExportIcon,
  GetApp as DownloadIcon,
  Publish as UploadIcon,
  CloudDownload as CloudDownloadIcon,
  CloudUpload as CloudUploadIcon,
  CloudSync as CloudSyncIcon,
  CloudOff as CloudOffIcon,
  CloudQueue as CloudQueueIcon,
  Cloud as CloudIcon,
  CloudDone as CloudDoneIcon,
  CloudCircle as CloudCircleIcon,
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
  Share as ShareIcon,
  ShareLocation as ShareLocationIcon,
  Business as BusinessIcon,
  Work as WorkIcon,
  WorkOutline as WorkOutlineIcon,
  Engineering as EngineeringIcon,
  Construction as ConstructionIcon,
  Build as BuildIcon,
  Handyman as HandymanIcon,
  HomeRepairService as RepairIcon,
  Settings as SettingsIcon,
  Tune as TuneIcon,
  Extension as ExtensionIcon,
  Widgets as WidgetsIcon,
  Apps as AppsIcon,
  AppRegistration as AppRegistrationIcon,
  AppSettingsAlt as AppSettingsIcon,
  DeveloperMode as DeveloperModeIcon,
  Terminal as TerminalIcon,
  BugReport as BugReportIcon,
  Speed as SpeedIcon,
  Cached as CachedIcon,
  Refresh as RefreshIcon,
  Update as UpdateIcon,
  Upgrade as UpgradeIcon,
  NewReleases as NewReleasesIcon,
  Launch as LaunchIcon,
  OpenInNew as OpenInNewIcon,
  Analytics as AnalyticsIcon,
  Dashboard as DashboardIcon,
  Storage as StorageIcon,
  Database as DatabaseIcon,
  TableChart as TableIcon,
  Api as ApiIcon,
  Code as CodeIcon,
  DataObject as DataIcon,
  Hub as HubIcon,
  AccountTree as TreeIcon,
  Schema as SchemaIcon,
  Webhook as WebhookIcon,
  Sync as SyncIcon,
  Transform as TransformIcon,
  AutoFixHigh as AutoFixIcon,
  SmartToy as SmartToyIcon,
  Memory as MemoryIcon,
  Computer as ComputerIcon,
  Laptop as LaptopIcon,
  PhoneIphone as PhoneIphoneIcon,
  Tablet as TabletIcon,
  Watch as WatchIcon,
  Tv as TvIcon,
  Devices as DevicesIcon,
  DeviceHub as DeviceHubIcon,
  DevicesOther as DevicesOtherIcon,
  DeviceUnknown as DeviceUnknownIcon,
  Cast as CastIcon,
  CastConnected as CastConnectedIcon,
  CastForEducation as CastForEducationIcon,
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
  PresentToAll as PresentToAllIcon,
  AirPlay as AirPlayIcon,
  Duo as DuoIcon,
  Groups as GroupsIcon,
  Group as GroupIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  PersonAdd as PersonAddIcon,
  PersonRemove as PersonRemoveIcon,
  PersonOutline as PersonOutlineIcon,
  PersonPin as PersonPinIcon,
  PersonPinCircle as PersonPinCircleIcon,
  PersonSearch as PersonSearchIcon,
  AccountCircle as AccountCircleIcon,
  AccountBox as AccountBoxIcon,
  Badge as BadgeIcon,
  ContactPage as ContactPageIcon,
  Contacts as ContactsIcon,
  RecentActors as RecentActorsIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  SupervisorAccount as SupervisorAccountIcon,
  ManageAccounts as ManageAccountsIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Public as PublicIcon,
  Language as LanguageIcon,
  Translate as TranslateIcon,
  GTranslate as GTranslateIcon,
  Flag as FlagIcon,
  Place as PlaceIcon,
  LocationOn as LocationIcon,
  MyLocation as MyLocationIcon,
  GpsFixed as GpsIcon,
  Navigation as NavigationIcon,
  Explore as ExploreIcon,
  Map as MapIcon,
  Satellite as SatelliteIcon,
  Terrain as TerrainIcon,
  Layers as LayersIcon,
  TravelExplore as TravelExploreIcon,
  Flight as FlightIcon,
  FlightTakeoff as FlightTakeoffIcon,
  FlightLand as FlightLandIcon,
  Train as TrainIcon,
  Subway as SubwayIcon,
  Tram as TramIcon,
  Traffic as TrafficIcon,
  LocalTaxi as TaxiIcon,
  LocalShipping as ShippingIcon,
  LocalGasStation as GasStationIcon,
  LocalParking as ParkingIcon,
  LocalAtm as AtmIcon,
  LocalHospital as HospitalIcon,
  LocalPharmacy as PharmacyIcon,
  LocalGroceryStore as GroceryIcon,
  LocalMall as MallIcon,
  LocalDining as DiningIcon,
  LocalCafe as CafeIcon,
  LocalBar as BarIcon,
  LocalPizza as PizzaIcon,
  Restaurant as RestaurantIcon,
  Hotel as HotelIcon,
  LocalActivity as ActivityIcon,
  LocalMovies as MoviesIcon,
  LocalLibrary as LibraryIcon,
  LocalPostOffice as PostOfficeIcon,
  LocalPrintshop as PrintshopIcon,
  LocalLaundryService as LaundryIcon,
  LocalSee as SeeIcon,
  LocalOffer as OfferIcon,
  LocalPlay as PlayIcon,
  LocalPhone as LocalPhoneIcon,
  Store as StoreIcon,
  Storefront as StorefrontIcon,
  ShoppingCart as CartIcon,
  ShoppingBag as BagIcon,
  ShoppingBasket as BasketIcon,
  AddShoppingCart as AddCartIcon,
  RemoveShoppingCart as RemoveCartIcon,
  Payment as PaymentIcon,
  CreditCard as CreditCardIcon,
  AccountBalance as BankIcon,
  MonetizationOn as MoneyIcon,
  AttachMoney as DollarIcon,
  Euro as EuroIcon,
  CurrencyPound as PoundIcon,
  CurrencyYen as YenIcon,
  Receipt as ReceiptIcon,
  RequestQuote as QuoteIcon,
  PriceCheck as PriceCheckIcon,
  PriceChange as PriceChangeIcon,
  Sell as SellIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
  ShowChart as ChartIcon,
  Timeline as TimelineIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Equalizer as EqualizerIcon,
  GraphicEq as GraphicEqIcon,
  Leaderboard as LeaderboardIcon,
  Assessment as AssessmentIcon,
  Insights as InsightsIcon,
  Science as ScienceIcon,
  Biotech as BiotechIcon,
  AccessTime as AccessTimeIcon,
  Schedule as ScheduleIcon,
  Today as TodayIcon,
  DateRange as DateRangeIcon,
  Event as EventIcon,
  EventNote as EventNoteIcon,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  Alarm as AlarmIcon,
  AlarmOn as AlarmOnIcon,
  AlarmOff as AlarmOffIcon,
  Timer as TimerIcon,
  TimerOff as TimerOffIcon,
  Hourglass as HourglassIcon,
  HourglassEmpty as HourglassEmptyIcon,
  HourglassFull as HourglassFullIcon,
  WatchLater as WatchLaterIcon,
  QueryBuilder as QueryBuilderIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

const GlobalCustomerSuccessSupport = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [supportOverview, setSupportOverview] = useState({});
  const [customerSuccess, setCustomerSuccess] = useState({});
  const [supportChannels, setSupportChannels] = useState({});
  const [supportAnalytics, setSupportAnalytics] = useState({});

  // Support Overview Data
  useEffect(() => {
    const supportData = {
      globalSupport: {
        totalTickets: 45678,
        activeTickets: 2345,
        resolvedTickets: 43333,
        averageResponseTime: 1.2,
        averageResolutionTime: 4.8,
        customerSatisfaction: 4.8,
        firstContactResolution: 87.3,
        escalationRate: 2.1
      },
      supportTeam: {
        totalAgents: 234,
        activeAgents: 189,
        expertAgents: 67,
        multilingualAgents: 156,
        certifiedAgents: 198,
        trainingHours: 2340,
        averageExperience: 3.2,
        retentionRate: 94.6
      },
      globalCoverage: {
        timeZones: 24,
        languages: 28,
        countries: 45,
        supportCenters: 8,
        localPartners: 23,
        availability: '24/7',
        holidayCoverage: true,
        emergencySupport: true
      },
      serviceLevel: {
        tier1Response: 15,
        tier2Response: 60,
        tier3Response: 240,
        criticalResponse: 5,
        emergencyResponse: 1,
        businessHours: '24/7',
        weekendSupport: true,
        holidaySupport: true
      }
    };
    setSupportOverview(supportData);
  }, []);

  // Customer Success Data
  useEffect(() => {
    const successData = {
      customerSuccessMetrics: {
        totalCustomers: 156789,
        activeCustomers: 134567,
        churnRate: 3.2,
        retentionRate: 96.8,
        nps: 72,
        csat: 4.8,
        customerLifetimeValue: 2847,
        expansionRevenue: 23.7
      },
      onboardingProgram: {
        totalOnboarded: 12345,
        onboardingTime: 7,
        completionRate: 94.6,
        timeToValue: 14,
        onboardingNPS: 78,
        dropoffRate: 5.4,
        supportTicketsDuringOnboarding: 0.8,
        successRate: 89.3
      },
      healthScoring: {
        healthyCustomers: 78.9,
        atRiskCustomers: 15.6,
        criticalCustomers: 5.5,
        healthScoreAccuracy: 94.2,
        predictiveAccuracy: 87.6,
        interventionSuccessRate: 73.4,
        automatedAlerts: 2345,
        manualReviews: 567
      },
      customerJourney: {
        touchpoints: 23,
        journeyStages: 8,
        conversionRate: 23.7,
        engagementScore: 87.3,
        satisfactionByStage: {
          awareness: 4.2,
          consideration: 4.5,
          trial: 4.7,
          onboarding: 4.8,
          adoption: 4.6,
          expansion: 4.9,
          renewal: 4.8,
          advocacy: 4.9
        }
      },
      successPrograms: {
        welcomeProgram: {
          participants: 12345,
          completionRate: 94.6,
          satisfaction: 4.8,
          timeToComplete: 7,
          successRate: 89.3
        },
        trainingProgram: {
          participants: 8901,
          courses: 45,
          certifications: 23,
          completionRate: 87.4,
          satisfaction: 4.7
        },
        webinarSeries: {
          sessions: 156,
          attendees: 23456,
          averageAttendance: 150,
          satisfaction: 4.6,
          followUpRate: 34.7
        },
        communityProgram: {
          members: 15678,
          activeMembers: 8901,
          posts: 12345,
          responses: 23456,
          satisfaction: 4.7
        }
      }
    };
    setCustomerSuccess(successData);
  }, []);

  // Support Channels Data
  useEffect(() => {
    const channelsData = {
      communicationChannels: {
        liveChat: {
          sessions: 23456,
          averageWaitTime: 23,
          averageSessionTime: 12,
          satisfaction: 4.8,
          resolutionRate: 89.3,
          availability: '24/7',
          languages: 28,
          agents: 89
        },
        email: {
          tickets: 34567,
          averageResponseTime: 2.3,
          averageResolutionTime: 6.8,
          satisfaction: 4.7,
          resolutionRate: 94.6,
          autoResponses: 78.9,
          escalationRate: 3.2,
          agents: 156
        },
        phone: {
          calls: 12345,
          averageWaitTime: 45,
          averageCallTime: 8.5,
          satisfaction: 4.9,
          resolutionRate: 87.6,
          availability: '24/7',
          languages: 18,
          agents: 67
        },
        videoCall: {
          sessions: 5678,
          averageWaitTime: 120,
          averageSessionTime: 25,
          satisfaction: 4.9,
          resolutionRate: 92.4,
          availability: 'Business Hours',
          languages: 12,
          agents: 34
        },
        socialMedia: {
          mentions: 8901,
          responses: 8456,
          averageResponseTime: 0.8,
          satisfaction: 4.6,
          resolutionRate: 76.3,
          platforms: ['Twitter', 'Facebook', 'LinkedIn', 'Instagram'],
          agents: 23
        },
        community: {
          questions: 15678,
          answers: 14567,
          averageResponseTime: 3.2,
          satisfaction: 4.5,
          resolutionRate: 82.7,
          moderators: 12,
          experts: 45
        }
      },
      selfServiceResources: {
        knowledgeBase: {
          articles: 2345,
          views: 234567,
          searches: 123456,
          satisfaction: 4.4,
          deflectionRate: 67.8,
          languages: 28,
          lastUpdated: '2024-01-15',
          accuracy: 94.6
        },
        videoTutorials: {
          videos: 456,
          views: 89012,
          duration: 12.5,
          satisfaction: 4.7,
          completionRate: 78.9,
          languages: 18,
          lastUpdated: '2024-01-10',
          engagement: 87.3
        },
        faq: {
          questions: 234,
          views: 45678,
          satisfaction: 4.3,
          deflectionRate: 72.4,
          languages: 28,
          lastUpdated: '2024-01-12',
          accuracy: 96.2
        },
        documentation: {
          pages: 567,
          views: 67890,
          downloads: 12345,
          satisfaction: 4.6,
          usefulness: 89.7,
          languages: 22,
          lastUpdated: '2024-01-08',
          completeness: 94.8
        }
      },
      aiPoweredSupport: {
        chatbot: {
          conversations: 67890,
          resolutionRate: 73.4,
          satisfaction: 4.2,
          escalationRate: 26.6,
          accuracy: 87.9,
          languages: 28,
          learningRate: 'Continuous',
          improvements: 'Weekly'
        },
        smartRouting: {
          tickets: 45678,
          accuracy: 94.6,
          timeReduction: 67.8,
          agentSatisfaction: 4.7,
          customerSatisfaction: 4.8,
          categories: 23,
          languages: 28,
          efficiency: 89.3
        },
        sentimentAnalysis: {
          analyzed: 123456,
          accuracy: 91.7,
          positiveDetection: 94.2,
          negativeDetection: 89.6,
          neutralDetection: 87.3,
          actionsTaken: 2345,
          escalations: 567,
          improvements: 78.9
        }
      }
    };
    setSupportChannels(channelsData);
  }, []);

  // Support Analytics Data
  useEffect(() => {
    const analyticsData = {
      performanceMetrics: {
        responseTime: {
          target: 2,
          actual: 1.2,
          trend: 'Improving',
          p50: 0.8,
          p95: 3.2,
          p99: 8.7
        },
        resolutionTime: {
          target: 8,
          actual: 4.8,
          trend: 'Improving',
          p50: 2.3,
          p95: 12.4,
          p99: 24.6
        },
        satisfaction: {
          target: 4.5,
          actual: 4.8,
          trend: 'Stable',
          distribution: {
            5: 67.8,
            4: 23.4,
            3: 6.7,
            2: 1.8,
            1: 0.3
          }
        },
        firstContactResolution: {
          target: 80,
          actual: 87.3,
          trend: 'Improving',
          byChannel: {
            liveChat: 89.3,
            email: 94.6,
            phone: 87.6,
            videoCall: 92.4
          }
        }
      },
      ticketAnalysis: {
        volumeTrends: {
          daily: 1523,
          weekly: 10661,
          monthly: 45678,
          yearOverYear: 12.3,
          seasonality: 'Moderate',
          peakHours: '9-11 AM, 2-4 PM'
        },
        categoryBreakdown: {
          technical: 34.7,
          billing: 23.8,
          account: 18.9,
          product: 12.6,
          general: 7.3,
          emergency: 2.7
        },
        priorityDistribution: {
          low: 45.6,
          medium: 38.9,
          high: 12.8,
          critical: 2.7
        },
        resolutionPatterns: {
          selfService: 67.8,
          tier1: 23.4,
          tier2: 7.6,
          tier3: 1.2
        }
      },
      customerInsights: {
        segmentAnalysis: {
          enterprise: {
            tickets: 12345,
            satisfaction: 4.9,
            resolutionTime: 3.2,
            escalationRate: 1.2
          },
          business: {
            tickets: 23456,
            satisfaction: 4.8,
            resolutionTime: 4.1,
            escalationRate: 1.8
          },
          individual: {
            tickets: 9876,
            satisfaction: 4.7,
            resolutionTime: 5.6,
            escalationRate: 2.9
          }
        },
        behaviorPatterns: {
          repeatCustomers: 23.7,
          multiChannelUsers: 34.8,
          selfServiceUsers: 67.8,
          escalationProne: 5.4,
          satisfiedCustomers: 91.2,
          advocates: 34.7
        },
        feedbackAnalysis: {
          totalFeedback: 23456,
          positiveThemes: ['Quick Response', 'Knowledgeable Staff', 'Easy Process'],
          improvementAreas: ['Wait Times', 'Documentation', 'Follow-up'],
          actionItems: 45,
          implemented: 38,
          inProgress: 7
        }
      },
      businessImpact: {
        costMetrics: {
          costPerTicket: 23.45,
          costPerResolution: 28.67,
          deflectionSavings: 234567,
          automationSavings: 123456,
          efficiencyGains: 34.7,
          roi: 267.8
        },
        revenueImpact: {
          retentionRevenue: 2345678,
          expansionRevenue: 567890,
          referralRevenue: 123456,
          upsellRevenue: 234567,
          totalImpact: 3271591,
          growthContribution: 12.8
        },
        qualityMetrics: {
          agentPerformance: 4.7,
          processCompliance: 96.8,
          knowledgeAccuracy: 94.6,
          trainingEffectiveness: 89.3,
          continuousImprovement: 87.9,
          innovationIndex: 78.4
        }
      }
    };
    setSupportAnalytics(analyticsData);
  }, []);

  // Calculation Functions
  const calculateSupportHealth = useCallback(() => {
    const { averageResponseTime, customerSatisfaction, firstContactResolution } = supportOverview.globalSupport || {};
    const healthScore = (
      (customerSatisfaction || 0) * 20 +
      (firstContactResolution || 0) +
      (100 - Math.min((averageResponseTime || 0) * 10, 100))
    ) / 3;
    return Math.round(healthScore * 10) / 10;
  }, [supportOverview]);

  const calculateCustomerSuccessScore = useCallback(() => {
    const { retentionRate, nps, csat } = customerSuccess.customerSuccessMetrics || {};
    const successScore = (
      (retentionRate || 0) +
      (nps || 0) / 100 * 100 +
      (csat || 0) * 20
    ) / 3;
    return Math.round(successScore * 10) / 10;
  }, [customerSuccess]);

  const calculateSupportEfficiency = useCallback(() => {
    const { deflectionRate } = supportChannels.selfServiceResources?.knowledgeBase || {};
    const { resolutionRate } = supportChannels.aiPoweredSupport?.chatbot || {};
    const efficiency = (
      (deflectionRate || 0) +
      (resolutionRate || 0)
    ) / 2;
    return Math.round(efficiency * 10) / 10;
  }, [supportChannels]);

  const renderSupportOverview = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SupportIcon color="primary" />
        Global Support Infrastructure & Team Excellence
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        🌍 Comprehensive global support with {supportOverview.supportTeam?.totalAgents} agents across {supportOverview.globalCoverage?.timeZones} time zones, 
        {supportOverview.globalSupport?.averageResponseTime}h response time, and {calculateSupportHealth()}% support health score. 
        24/7 multilingual support with {supportOverview.globalSupport?.customerSatisfaction}/5 satisfaction.
      </Alert>

      {/* Support Overview Dashboard */}
      <Card sx={{ 
        mb: 4, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 3 }}>
            <SupportAgentIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            {supportOverview.globalSupport?.customerSatisfaction}/5
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 1 }}>
            Customer Satisfaction
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            {supportOverview.globalSupport?.totalTickets?.toLocaleString()} total tickets resolved
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {supportOverview.globalSupport?.averageResponseTime}h
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Response Time
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {supportOverview.globalSupport?.firstContactResolution}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                First Contact Resolution
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {supportOverview.supportTeam?.totalAgents}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Support Agents
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Support Team & Global Coverage */}
      <Typography variant="h6" gutterBottom>
        Global Support Infrastructure
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar sx={{ 
                  bgcolor: 'primary.main',
                  width: 48,
                  height: 48
                }}>
                  <GroupsIcon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Support Team Excellence
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {supportOverview.supportTeam?.totalAgents} global agents
                  </Typography>
                </Box>
                <Chip 
                  label={`${supportOverview.supportTeam?.retentionRate}% Retention`} 
                  color="success"
                  size="small"
                />
              </Box>
              
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Active Agents"
                    secondary={`${supportOverview.supportTeam?.activeAgents} currently online`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Expert Agents"
                    secondary={`${supportOverview.supportTeam?.expertAgents} specialized experts`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Multilingual Support"
                    secondary={`${supportOverview.supportTeam?.multilingualAgents} multilingual agents`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Training Hours"
                    secondary={`${supportOverview.supportTeam?.trainingHours} hours completed`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Avatar sx={{ 
                  bgcolor: 'success.main',
                  width: 48,
                  height: 48
                }}>
                  <PublicIcon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Global Coverage
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {supportOverview.globalCoverage?.countries} countries supported
                  </Typography>
                </Box>
                <Chip 
                  label="24/7 Available" 
                  color="success"
                  size="small"
                />
              </Box>
              
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Time Zones"
                    secondary={`${supportOverview.globalCoverage?.timeZones} time zones covered`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Languages"
                    secondary={`${supportOverview.globalCoverage?.languages} languages supported`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Support Centers"
                    secondary={`${supportOverview.globalCoverage?.supportCenters} global centers`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Local Partners"
                    secondary={`${supportOverview.globalCoverage?.localPartners} regional partners`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderCustomerSuccess = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <EmojiPeopleIcon color="primary" />
        Customer Success Programs & Lifecycle Management
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        🎯 Comprehensive customer success with {customerSuccess.customerSuccessMetrics?.retentionRate}% retention rate, 
        {customerSuccess.customerSuccessMetrics?.nps} NPS score, and {calculateCustomerSuccessScore()}% success score. 
        Advanced onboarding, health scoring, and lifecycle management programs.
      </Alert>

      {/* Customer Success Metrics Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {customerSuccess.customerSuccessMetrics?.retentionRate}%
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
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {customerSuccess.customerSuccessMetrics?.nps}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                NPS Score
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {customerSuccess.customerSuccessMetrics?.csat}/5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CSAT Score
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                ${customerSuccess.customerSuccessMetrics?.customerLifetimeValue?.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Customer LTV
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Success Programs */}
      <Typography variant="h6" gutterBottom>
        Customer Success Programs
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(customerSuccess.successPrograms || {}).map(([key, program], index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'primary.main',
                    width: 48,
                    height: 48
                  }}>
                    <StarIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {program.participants?.toLocaleString()} participants
                    </Typography>
                  </Box>
                  <Rating 
                    value={program.satisfaction} 
                    readOnly 
                    size="small"
                  />
                </Box>
                
                <List dense>
                  {program.completionRate && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Completion Rate"
                        secondary={`${program.completionRate}%`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {program.timeToComplete && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Time to Complete"
                        secondary={`${program.timeToComplete} days`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {program.successRate && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Success Rate"
                        secondary={`${program.successRate}%`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {program.courses && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Available Courses"
                        secondary={`${program.courses} courses`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {program.sessions && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Total Sessions"
                        secondary={`${program.sessions} sessions`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {program.activeMembers && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Active Members"
                        secondary={`${program.activeMembers?.toLocaleString()} active`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderSupportChannels = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ChatIcon color="primary" />
        Omnichannel Support & AI-Powered Assistance
      </Typography>
      
      <Alert severity="warning" sx={{ mb: 3 }}>
        🤖 Advanced omnichannel support with {Object.keys(supportChannels.communicationChannels || {}).length} communication channels, 
        {supportChannels.selfServiceResources?.knowledgeBase?.deflectionRate}% self-service deflection rate, and {calculateSupportEfficiency()}% efficiency score. 
        AI-powered chatbots, smart routing, and sentiment analysis.
      </Alert>

      {/* Communication Channels Overview */}
      <Typography variant="h6" gutterBottom>
        Communication Channels
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(supportChannels.communicationChannels || {}).map(([key, channel], index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'primary.main',
                    width: 48,
                    height: 48
                  }}>
                    {key === 'liveChat' && <ChatIcon />}
                    {key === 'email' && <EmailIcon />}
                    {key === 'phone' && <PhoneIcon />}
                    {key === 'videoCall' && <VideoCallIcon />}
                    {key === 'socialMedia' && <ShareIcon />}
                    {key === 'community' && <ForumIcon />}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {channel.availability || 'Available'}
                    </Typography>
                  </Box>
                  <Rating 
                    value={channel.satisfaction} 
                    readOnly 
                    size="small"
                  />
                </Box>
                
                <List dense>
                  {channel.sessions && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Sessions"
                        secondary={`${channel.sessions?.toLocaleString()} total`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {channel.tickets && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Tickets"
                        secondary={`${channel.tickets?.toLocaleString()} total`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {channel.calls && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Calls"
                        secondary={`${channel.calls?.toLocaleString()} total`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {channel.mentions && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Mentions"
                        secondary={`${channel.mentions?.toLocaleString()} total`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {channel.questions && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Questions"
                        secondary={`${channel.questions?.toLocaleString()} total`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Resolution Rate"
                      secondary={`${channel.resolutionRate}%`}
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItem>
                  {channel.averageWaitTime && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Wait Time"
                        secondary={`${channel.averageWaitTime}${key === 'email' ? 'h' : key === 'videoCall' ? 's' : key === 'socialMedia' ? 'h' : key === 'community' ? 'h' : 's'}`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {channel.languages && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Languages"
                        secondary={`${channel.languages} supported`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* AI-Powered Support */}
      <Typography variant="h6" gutterBottom>
        AI-Powered Support Systems
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(supportChannels.aiPoweredSupport || {}).map(([key, ai], index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'secondary.main',
                    width: 48,
                    height: 48
                  }}>
                    <SmartToyIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      AI-powered assistance
                    </Typography>
                  </Box>
                  <Chip 
                    label={`${ai.accuracy || ai.resolutionRate}%`} 
                    color="secondary"
                    size="small"
                  />
                </Box>
                
                <List dense>
                  {ai.conversations && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Conversations"
                        secondary={`${ai.conversations?.toLocaleString()} handled`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {ai.tickets && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Tickets Routed"
                        secondary={`${ai.tickets?.toLocaleString()} processed`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {ai.analyzed && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Analyzed"
                        secondary={`${ai.analyzed?.toLocaleString()} interactions`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Accuracy"
                      secondary={`${ai.accuracy || ai.resolutionRate}%`}
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItem>
                  {ai.escalationRate && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Escalation Rate"
                        secondary={`${ai.escalationRate}%`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                  {ai.languages && (
                    <ListItem sx={{ px: 0 }}>
                      <ListItemText 
                        primary="Languages"
                        secondary={`${ai.languages} supported`}
                        primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                        secondaryTypographyProps={{ variant: 'caption' }}
                      />
                    </ListItem>
                  )}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderSupportAnalytics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AnalyticsIcon color="primary" />
        Support Analytics & Business Intelligence
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        📊 Comprehensive support analytics with {supportAnalytics.performanceMetrics?.satisfaction?.actual}/5 satisfaction, 
        {supportAnalytics.performanceMetrics?.firstContactResolution?.actual}% first contact resolution, and 
        ${(supportAnalytics.businessImpact?.revenueImpact?.totalImpact / 1000000).toFixed(1)}M revenue impact. 
        Advanced performance monitoring and business intelligence.
      </Alert>

      {/* Performance Metrics */}
      <Typography variant="h6" gutterBottom>
        Performance Metrics
      </Typography>
      
      <TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Metric</strong></TableCell>
              <TableCell align="right"><strong>Target</strong></TableCell>
              <TableCell align="right"><strong>Actual</strong></TableCell>
              <TableCell align="right"><strong>Trend</strong></TableCell>
              <TableCell align="right"><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Response Time (hours)</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.responseTime?.target}</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.responseTime?.actual}</TableCell>
              <TableCell align="right">
                <Chip 
                  label={supportAnalytics.performanceMetrics?.responseTime?.trend} 
                  color="success" 
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <Chip 
                  label="Excellent" 
                  color="success" 
                  size="small"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Resolution Time (hours)</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.resolutionTime?.target}</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.resolutionTime?.actual}</TableCell>
              <TableCell align="right">
                <Chip 
                  label={supportAnalytics.performanceMetrics?.resolutionTime?.trend} 
                  color="success" 
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <Chip 
                  label="Excellent" 
                  color="success" 
                  size="small"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Customer Satisfaction</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.satisfaction?.target}/5</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.satisfaction?.actual}/5</TableCell>
              <TableCell align="right">
                <Chip 
                  label={supportAnalytics.performanceMetrics?.satisfaction?.trend} 
                  color="warning" 
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <Chip 
                  label="Excellent" 
                  color="success" 
                  size="small"
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>First Contact Resolution (%)</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.firstContactResolution?.target}%</TableCell>
              <TableCell align="right">{supportAnalytics.performanceMetrics?.firstContactResolution?.actual}%</TableCell>
              <TableCell align="right">
                <Chip 
                  label={supportAnalytics.performanceMetrics?.firstContactResolution?.trend} 
                  color="success" 
                  size="small"
                />
              </TableCell>
              <TableCell align="right">
                <Chip 
                  label="Excellent" 
                  color="success" 
                  size="small"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Business Impact */}
      <Typography variant="h6" gutterBottom>
        Business Impact & ROI
      </Typography>
      
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Revenue Impact
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Retention Revenue"
                    secondary={`$${(supportAnalytics.businessImpact?.revenueImpact?.retentionRevenue / 1000000).toFixed(1)}M`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Expansion Revenue"
                    secondary={`$${(supportAnalytics.businessImpact?.revenueImpact?.expansionRevenue / 1000).toFixed(0)}K`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Referral Revenue"
                    secondary={`$${(supportAnalytics.businessImpact?.revenueImpact?.referralRevenue / 1000).toFixed(0)}K`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Total Impact"
                    secondary={`$${(supportAnalytics.businessImpact?.revenueImpact?.totalImpact / 1000000).toFixed(1)}M`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
              </List>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Cost Efficiency
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Cost per Ticket"
                    secondary={`$${supportAnalytics.businessImpact?.costMetrics?.costPerTicket}`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Deflection Savings"
                    secondary={`$${(supportAnalytics.businessImpact?.costMetrics?.deflectionSavings / 1000).toFixed(0)}K`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="Automation Savings"
                    secondary={`$${(supportAnalytics.businessImpact?.costMetrics?.automationSavings / 1000).toFixed(0)}K`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemText 
                    primary="ROI"
                    secondary={`${supportAnalytics.businessImpact?.costMetrics?.roi}%`}
                    primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          🌍 Global Customer Success & Support Excellence
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive global support with {supportOverview.supportTeam?.totalAgents} agents across {supportOverview.globalCoverage?.timeZones} time zones, 
          {supportOverview.globalSupport?.customerSatisfaction}/5 satisfaction, and {calculateSupportHealth()}% support health score. 
          Advanced customer success programs with {customerSuccess.customerSuccessMetrics?.retentionRate}% retention rate.
        </Typography>

        {/* Support Excellence Status Banner */}
        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            🎯 GLOBAL SUPPORT EXCELLENCE SUCCESSFULLY DEPLOYED - CUSTOMER SUCCESS THRIVING!
          </Typography>
          <Typography>
            {supportOverview.supportTeam?.totalAgents} global agents with {supportOverview.globalSupport?.averageResponseTime}h response time. 
            Comprehensive customer success programs and omnichannel support.
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
            label="Support Overview" 
            icon={<SupportIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Customer Success" 
            icon={<EmojiPeopleIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Support Channels" 
            icon={<ChatIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Support Analytics" 
            icon={<AnalyticsIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderSupportOverview()}
          {activeTab === 1 && renderCustomerSuccess()}
          {activeTab === 2 && renderSupportChannels()}
          {activeTab === 3 && renderSupportAnalytics()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Support Center
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShareIcon />}
          >
            Customer Portal
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<EmojiPeopleIcon />}
            onClick={() => setActiveTab(1)}
          >
            Success Programs
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<SupportIcon />}
            onClick={() => setActiveTab(0)}
            sx={{ minWidth: 200 }}
          >
            Support Dashboard
          </Button>
        </Box>
      </Box>

      {/* Support Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Global Support Summary
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={calculateSupportHealth()} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {supportOverview.supportTeam?.totalAgents} Agents | {supportOverview.globalCoverage?.timeZones} Time Zones | {supportOverview.globalCoverage?.languages} Languages | {calculateSupportHealth()}% Health
        </Typography>
      </Box>
    </Container>
  );
};

export default GlobalCustomerSuccessSupport;

