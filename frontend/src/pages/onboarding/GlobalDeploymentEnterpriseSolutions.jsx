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
  Public as GlobalIcon,
  Business as BusinessIcon,
  CloudQueue as CloudIcon,
  Language as LanguageIcon,
  Security as SecurityIcon,
  Speed as SpeedIcon,
  Storage as StorageIcon,
  NetworkCheck as NetworkIcon,
  Dns as DnsIcon,
  Router as RouterIcon,
  Backup as BackupIcon,
  Sync as SyncIcon,
  Update as UpdateIcon,
  MonitorHeart as MonitorIcon,
  Analytics as AnalyticsIcon,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
  AdminPanelSettings as AdminIcon,
  SupervisorAccount as SupervisorIcon,
  ManageAccounts as ManageIcon,
  Group as GroupIcon,
  Groups as GroupsIcon,
  People as PeopleIcon,
  Person as PersonIcon,
  AccountCircle as AccountIcon,
  Badge as BadgeIcon,
  Work as WorkIcon,
  WorkOutline as WorkOutlineIcon,
  Engineering as EngineeringIcon,
  Construction as ConstructionIcon,
  Build as BuildIcon,
  Handyman as HandymanIcon,
  HomeRepairService as RepairIcon,
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
  Notifications as NotificationsIcon,
  NotificationImportant as NotificationImportantIcon,
  Campaign as CampaignIcon,
  Announcement as AnnouncementIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Close as CloseIcon,
  Done as DoneIcon,
  DoneAll as DoneAllIcon,
  Verified as VerifiedIcon,
  VerifiedUser as VerifiedUserIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
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
  LocationOn as LocationIcon,
  LocationOff as LocationOffIcon,
  MyLocation as MyLocationIcon,
  GpsFixed as GpsIcon,
  GpsNotFixed as GpsNotFixedIcon,
  GpsOff as GpsOffIcon,
  Navigation as NavigationIcon,
  Explore as ExploreIcon,
  ExploreOff as ExploreOffIcon,
  TravelExplore as TravelExploreIcon,
  Map as MapIcon,
  Satellite as SatelliteIcon,
  Terrain as TerrainIcon,
  Layers as LayersIcon,
  LayersClear as LayersClearIcon,
  Place as PlaceIcon,
  Room as RoomIcon,
  PinDrop as PinDropIcon,
  Flag as FlagIcon,
  Tour as TourIcon,
  Directions as DirectionsIcon,
  DirectionsRun as DirectionsRunIcon,
  DirectionsWalk as DirectionsWalkIcon,
  DirectionsCar as DirectionsCarIcon,
  DirectionsBus as DirectionsBusIcon,
  DirectionsSubway as DirectionsSubwayIcon,
  DirectionsTransit as DirectionsTransitIcon,
  DirectionsBike as DirectionsBikeIcon,
  DirectionsBoat as DirectionsBoatIcon,
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
  Psychology as PsychologyIcon,
  Science as ScienceIcon,
  Biotech as BiotechIcon,
  Memory as MemoryIcon,
  Computer as ComputerIcon,
  Laptop as LaptopIcon,
  PhoneIphone as PhoneIphoneIcon,
  Tablet as TabletIcon,
  Watch as WatchIcon,
  Tv as TvIcon,
  Speaker as SpeakerIcon,
  Headphones as HeadphonesIcon,
  Headset as HeadsetIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  VolumeUp as VolumeUpIcon,
  VolumeDown as VolumeDownIcon,
  VolumeOff as VolumeOffIcon,
  VolumeMute as VolumeMuteIcon,
  Hearing as HearingIcon,
  HearingDisabled as HearingDisabledIcon,
  RecordVoiceOver as VoiceOverIcon,
  VoiceChat as VoiceChatIcon,
  Voicemail as VoicemailIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  SettingsVoice as SettingsVoiceIcon,
  Translate as TranslateIcon,
  GTranslate as GTranslateIcon,
  Spellcheck as SpellcheckIcon,
  TextFields as TextFieldsIcon,
  Title as TitleIcon,
  Subject as SubjectIcon,
  Notes as NotesIcon,
  Note as NoteIcon,
  NoteAdd as NoteAddIcon,
  NoteAlt as NoteAltIcon,
  Sticky as StickyIcon,
  PostAdd as PostAddIcon,
  DynamicForm as FormIcon,
  Assignment as AssignmentIcon,
  AssignmentInd as AssignmentIndIcon,
  AssignmentLate as AssignmentLateIcon,
  AssignmentReturn as AssignmentReturnIcon,
  AssignmentReturned as AssignmentReturnedIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Task as TaskIcon,
  TaskAlt as TaskAltIcon,
  Checklist as ChecklistIcon,
  ChecklistRtl as ChecklistRtlIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  FactCheck as FactCheckIcon,
  RuleFolder as RuleFolderIcon,
  Rule as RuleIcon,
  Gavel as GavelIcon,
  Balance as BalanceIcon,
  Policy as PolicyIcon,
  PrivacyTip as PrivacyIcon,
  Cookie as CookieIcon,
  Https as HttpsIcon,
  Http as HttpIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  WifiProtectedSetup as WifiProtectedSetupIcon,
  NetworkWifi as NetworkWifiIcon,
  SignalWifi4Bar as SignalWifi4BarIcon,
  SignalWifiOff as SignalWifiOffIcon,
  SignalCellular4Bar as SignalCellular4BarIcon,
  SignalCellularOff as SignalCellularOffIcon,
  SignalCellularNull as SignalCellularNullIcon,
  SignalCellularAlt as SignalCellularAltIcon,
  NetworkCell as NetworkCellIcon,
  CellWifi as CellWifiIcon,
  Bluetooth as BluetoothIcon,
  BluetoothAudio as BluetoothAudioIcon,
  BluetoothConnected as BluetoothConnectedIcon,
  BluetoothDisabled as BluetoothDisabledIcon,
  BluetoothSearching as BluetoothSearchingIcon,
  Nfc as NfcIcon,
  Usb as UsbIcon,
  UsbOff as UsbOffIcon,
  Cable as CableIcon,
  Power as PowerIcon,
  PowerOff as PowerOffIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
  Battery as BatteryIcon,
  BatteryFull as BatteryFullIcon,
  BatteryChargingFull as BatteryChargingFullIcon,
  BatteryAlert as BatteryAlertIcon,
  BatteryUnknown as BatteryUnknownIcon,
  BatterySaver as BatterySaverIcon,
  DeviceHub as DeviceHubIcon,
  Devices as DevicesIcon,
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
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';

const GlobalDeploymentEnterpriseSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [deploymentMetrics, setDeploymentMetrics] = useState({});
  const [enterpriseFeatures, setEnterpriseFeatures] = useState({});
  const [globalInfrastructure, setGlobalInfrastructure] = useState({});
  const [enterpriseSupport, setEnterpriseSupport] = useState({});

  // Deployment Metrics Data
  useEffect(() => {
    const metrics = {
      globalDeploymentScore: 97.8,
      enterpriseReadinessScore: 96.4,
      scalabilityScore: 98.2,
      reliabilityScore: 99.1,
      securityScore: 98.7,
      performanceScore: 97.3,
      complianceScore: 96.9,
      supportScore: 98.5,
      globalRegions: 12,
      datacenters: 45,
      edgeLocations: 156,
      enterpriseClients: 2847,
      totalUsers: 2456789,
      uptime: 99.97,
      responseTime: 0.8,
      throughput: 125000
    };
    setDeploymentMetrics(metrics);
  }, []);

  // Enterprise Features Data
  useEffect(() => {
    const features = {
      singleSignOn: {
        name: 'Enterprise Single Sign-On (SSO)',
        description: 'Advanced SSO integration with SAML, OAuth, and LDAP support',
        adoption: 94.7,
        satisfaction: 4.8,
        integrations: ['Active Directory', 'Okta', 'Azure AD', 'Google Workspace', 'LDAP', 'SAML 2.0'],
        securityLevel: 'Enterprise',
        compliance: ['SOC 2', 'ISO 27001', 'GDPR']
      },
      multiTenancy: {
        name: 'Multi-Tenant Architecture',
        description: 'Isolated tenant environments with custom branding and configurations',
        adoption: 89.3,
        satisfaction: 4.7,
        features: ['Data Isolation', 'Custom Branding', 'Tenant Analytics', 'Resource Allocation'],
        scalability: 'Unlimited',
        isolation: 'Complete'
      },
      advancedAnalytics: {
        name: 'Enterprise Analytics & BI',
        description: 'Comprehensive business intelligence with custom dashboards and reporting',
        adoption: 92.6,
        satisfaction: 4.9,
        capabilities: ['Real-time Dashboards', 'Custom Reports', 'Data Export', 'API Access'],
        dataRetention: '7 years',
        exportFormats: ['CSV', 'Excel', 'PDF', 'JSON']
      },
      apiManagement: {
        name: 'Enterprise API Management',
        description: 'Advanced API gateway with rate limiting, monitoring, and documentation',
        adoption: 87.4,
        satisfaction: 4.6,
        features: ['Rate Limiting', 'API Versioning', 'Documentation', 'Monitoring'],
        rateLimit: '10,000 req/min',
        sla: '99.9% uptime'
      },
      customIntegrations: {
        name: 'Custom Enterprise Integrations',
        description: 'Bespoke integrations with enterprise systems and workflows',
        adoption: 76.8,
        satisfaction: 4.8,
        systems: ['CRM', 'ERP', 'HRIS', 'Marketing Automation', 'Data Warehouses'],
        deliveryTime: '2-4 weeks',
        support: '24/7 dedicated'
      },
      whiteLabeling: {
        name: 'White-Label Solutions',
        description: 'Complete white-label platform with custom branding and domains',
        adoption: 68.9,
        satisfaction: 4.9,
        features: ['Custom Domains', 'Brand Assets', 'Color Schemes', 'Logo Integration'],
        setupTime: '1-2 weeks',
        customization: 'Full'
      },
      enterpriseSecurity: {
        name: 'Advanced Security Suite',
        description: 'Enterprise-grade security with threat detection and compliance',
        adoption: 98.7,
        satisfaction: 4.9,
        features: ['Threat Detection', 'Audit Logs', 'Compliance Reports', 'Security Monitoring'],
        certifications: ['SOC 2 Type II', 'ISO 27001', 'HIPAA', 'GDPR'],
        monitoring: '24/7 SOC'
      },
      dedicatedSupport: {
        name: 'Dedicated Enterprise Support',
        description: 'Premium support with dedicated account managers and SLA guarantees',
        adoption: 91.2,
        satisfaction: 4.9,
        features: ['Dedicated Account Manager', 'Priority Support', 'Custom Training', 'Implementation'],
        responseTime: '< 1 hour',
        availability: '24/7/365'
      }
    };
    setEnterpriseFeatures(features);
  }, []);

  // Global Infrastructure Data
  useEffect(() => {
    const infrastructure = {
      regions: [
        { name: 'North America', locations: 15, users: 856234, latency: 12, uptime: 99.98 },
        { name: 'Europe', locations: 12, users: 734567, latency: 8, uptime: 99.97 },
        { name: 'Asia Pacific', locations: 10, users: 623456, latency: 15, uptime: 99.96 },
        { name: 'South America', locations: 4, users: 145678, latency: 18, uptime: 99.95 },
        { name: 'Africa', locations: 2, users: 67890, latency: 22, uptime: 99.94 },
        { name: 'Middle East', locations: 2, users: 28975, latency: 16, uptime: 99.96 }
      ],
      cloudProviders: {
        aws: { percentage: 45.7, regions: 18, services: 156 },
        azure: { percentage: 28.9, regions: 12, services: 89 },
        gcp: { percentage: 15.6, regions: 8, services: 67 },
        multiCloud: { percentage: 9.8, regions: 5, services: 34 }
      },
      cdnPerformance: {
        globalCoverage: 98.7,
        edgeLocations: 156,
        cacheHitRatio: 94.3,
        averageLatency: 12.4,
        bandwidthSavings: 67.8
      },
      dataReplication: {
        replicationFactor: 3,
        crossRegionBackup: true,
        recoveryTime: '< 15 minutes',
        dataConsistency: 99.99,
        backupFrequency: 'Real-time'
      },
      loadBalancing: {
        algorithm: 'Intelligent Routing',
        healthChecks: 'Continuous',
        failoverTime: '< 30 seconds',
        trafficDistribution: 'Optimal',
        autoScaling: 'Dynamic'
      },
      monitoring: {
        metricsCollection: 'Real-time',
        alerting: 'Proactive',
        dashboards: 'Custom',
        reporting: 'Automated',
        sla: '99.9% monitoring uptime'
      }
    };
    setGlobalInfrastructure(infrastructure);
  }, []);

  // Enterprise Support Data
  useEffect(() => {
    const support = {
      supportTiers: {
        standard: {
          name: 'Standard Support',
          responseTime: '24 hours',
          availability: 'Business Hours',
          channels: ['Email', 'Portal'],
          price: 'Included'
        },
        premium: {
          name: 'Premium Support',
          responseTime: '4 hours',
          availability: '24/7',
          channels: ['Email', 'Phone', 'Portal', 'Chat'],
          price: '$2,500/month'
        },
        enterprise: {
          name: 'Enterprise Support',
          responseTime: '1 hour',
          availability: '24/7/365',
          channels: ['All channels', 'Dedicated Manager', 'Slack'],
          price: '$10,000/month'
        },
        white_glove: {
          name: 'White Glove Support',
          responseTime: '15 minutes',
          availability: '24/7/365',
          channels: ['All channels', 'On-site', 'Video calls'],
          price: 'Custom pricing'
        }
      },
      supportMetrics: {
        averageResponseTime: 0.8,
        firstCallResolution: 87.6,
        customerSatisfaction: 4.8,
        escalationRate: 3.2,
        knowledgeBaseArticles: 2456,
        supportTicketsResolved: 45678,
        supportTeamSize: 156,
        languages: 24
      },
      trainingPrograms: {
        adminTraining: {
          name: 'Administrator Training',
          duration: '2 days',
          format: 'Virtual/On-site',
          certification: 'Yes',
          price: '$2,500'
        },
        userTraining: {
          name: 'End User Training',
          duration: '4 hours',
          format: 'Virtual',
          certification: 'Optional',
          price: '$500'
        },
        developerTraining: {
          name: 'Developer Training',
          duration: '3 days',
          format: 'Virtual/On-site',
          certification: 'Yes',
          price: '$5,000'
        },
        customTraining: {
          name: 'Custom Training',
          duration: 'Variable',
          format: 'Tailored',
          certification: 'Yes',
          price: 'Custom pricing'
        }
      },
      implementationServices: {
        basicImplementation: {
          name: 'Basic Implementation',
          duration: '2-4 weeks',
          scope: 'Standard setup',
          price: '$10,000'
        },
        advancedImplementation: {
          name: 'Advanced Implementation',
          duration: '4-8 weeks',
          scope: 'Custom configuration',
          price: '$25,000'
        },
        enterpriseImplementation: {
          name: 'Enterprise Implementation',
          duration: '8-16 weeks',
          scope: 'Full customization',
          price: '$75,000'
        },
        migrationServices: {
          name: 'Data Migration Services',
          duration: '2-12 weeks',
          scope: 'Legacy system migration',
          price: '$15,000-$100,000'
        }
      }
    };
    setEnterpriseSupport(support);
  }, []);

  // Calculation Functions
  const calculateGlobalCoverage = useCallback(() => {
    const totalUsers = globalInfrastructure.regions?.reduce((sum, region) => sum + region.users, 0) || 0;
    return (totalUsers / 1000000).toFixed(1);
  }, [globalInfrastructure]);

  const calculateAverageLatency = useCallback(() => {
    const regions = globalInfrastructure.regions || [];
    const totalLatency = regions.reduce((sum, region) => sum + region.latency, 0);
    return (totalLatency / regions.length).toFixed(1);
  }, [globalInfrastructure]);

  const renderGlobalDeployment = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GlobalIcon color="primary" />
        Global Deployment & Infrastructure Overview
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        🌍 Comprehensive global deployment with {deploymentMetrics.globalDeploymentScore}% deployment score, 
        {deploymentMetrics.globalRegions} global regions, {deploymentMetrics.datacenters} datacenters, and 
        {deploymentMetrics.enterpriseClients?.toLocaleString()} enterprise clients. Industry-leading infrastructure and reliability.
      </Alert>

      {/* Global Deployment Dashboard */}
      <Card sx={{ 
        mb: 4, 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white' 
      }}>
        <CardContent sx={{ textAlign: 'center', py: 4 }}>
          <Avatar sx={{ width: 100, height: 100, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 3 }}>
            <GlobalIcon sx={{ fontSize: 50 }} />
          </Avatar>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            {deploymentMetrics.globalDeploymentScore}%
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, mb: 1 }}>
            Global Deployment Score
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Enterprise-ready global infrastructure
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {deploymentMetrics.globalRegions}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Global Regions
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {deploymentMetrics.datacenters}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Datacenters
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {deploymentMetrics.uptime}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Uptime SLA
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Deployment Metrics Grid */}
      <Typography variant="h6" gutterBottom>
        Global Infrastructure Metrics
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {[
          { metric: 'Enterprise Readiness', value: deploymentMetrics.enterpriseReadinessScore, color: 'primary' },
          { metric: 'Scalability Score', value: deploymentMetrics.scalabilityScore, color: 'success' },
          { metric: 'Reliability Score', value: deploymentMetrics.reliabilityScore, color: 'warning' },
          { metric: 'Security Score', value: deploymentMetrics.securityScore, color: 'info' }
        ].map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: `${item.color}.main` }}>
                  {item.value}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.metric}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Global Infrastructure Overview */}
      <Typography variant="h6" gutterBottom>
        Global Infrastructure Distribution
      </Typography>
      
      <Grid container spacing={3}>
        {(globalInfrastructure.regions || []).map((region, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: 'primary.main',
                    width: 48,
                    height: 48
                  }}>
                    <LocationIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {region.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {region.locations} locations
                    </Typography>
                  </Box>
                  <Chip 
                    label={`${region.uptime}%`} 
                    color="success" 
                  />
                </Box>
                
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Active Users"
                      secondary={region.users.toLocaleString()}
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Average Latency"
                      secondary={`${region.latency}ms`}
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                      secondaryTypographyProps={{ variant: 'caption' }}
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemText 
                      primary="Uptime SLA"
                      secondary={`${region.uptime}%`}
                      primaryTypographyProps={{ variant: 'body2', fontWeight: 600 }}
                      secondaryTypography

