import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Paper,
  Chip,
  LinearProgress,
  CircularProgress,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  IconButton,
  Tooltip,
  Badge,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Tabs,
  Tab,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  StepButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Slider,
  TextField,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  Radio,
  RadioGroup,
  FormGroup
} from '@mui/material';
import {
  SelfImprovement,
  TrendingUp,
  School,
  Assignment,
  CheckCircle,
  RadioButtonUnchecked,
  Star,
  EmojiEvents,
  Timeline as TimelineIcon,
  Analytics,
  Psychology,
  Lightbulb,
  AutoAwesome,
  SmartToy,
  Insights,
  Assessment,
  Quiz,
  MenuBook,
  PlayArrow,
  Pause,
  Stop,
  SkipNext,
  SkipPrevious,
  Replay,
  Forward,
  FastForward,
  FastRewind,
  VolumeUp,
  VolumeOff,
  Headphones,
  Speaker,
  Mic,
  MicOff,
  RecordVoiceOver,
  Hearing,
  Visibility,
  VisibilityOff,
  RemoveRedEye,
  Face,
  Face3,
  EmojiEmotions,
  Mood,
  MoodBad,
  SentimentSatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentVerySatisfied,
  SentimentVeryDissatisfied,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  ThumbsUpDown,
  Group,
  Person,
  People,
  PersonAdd,
  PersonRemove,
  PersonOutline,
  AccountCircle,
  SupervisorAccount,
  ManageAccounts,
  AdminPanelSettings,
  VerifiedUser,
  Verified,
  CheckCircleOutline,
  Cancel,
  Clear,
  Close,
  Done,
  DoneAll,
  Edit,
  Create,
  Save,
  Download,
  Upload,
  Share,
  Print,
  Email,
  Message,
  Chat,
  Forum,
  Comment,
  RateReview,
  Feedback,
  Support,
  Help,
  HelpOutline,
  Info,
  InfoOutlined,
  Warning,
  Error,
  Report,
  ReportProblem,
  Flag,
  Security,
  Shield,
  Lock,
  LockOpen,
  Key,
  VpnKey,
  Password,
  Fingerprint,
  Face2,
  FaceRetouchingNatural,
  FaceRetouchingOff,
  FilterVintage,
  FilterBAndW,
  Filter,
  FilterList,
  FilterNone,
  Tune,
  Settings,
  SettingsApplications,
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
  Build,
  Construction,
  Engineering,
  Handyman,
  HomeRepairService,
  Plumbing,
  ElectricalServices,
  Carpenter,
  CleaningServices,
  Architecture,
  DesignServices,
  Palette,
  ColorLens,
  Brush,
  FormatPaint,
  Gesture,
  TouchApp,
  PanTool,
  BackHand,
  FrontHand,
  Waving,
  ExpandMore,
  ExpandLess,
  ChevronRight,
  ChevronLeft,
  KeyboardArrowUp,
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  ArrowUpward,
  ArrowDownward,
  ArrowForward,
  ArrowBack,
  North,
  South,
  East,
  West,
  NorthEast,
  NorthWest,
  SouthEast,
  SouthWest,
  Launch,
  OpenInNew,
  OpenInBrowser,
  OpenWith,
  ExitToApp,
  Input,
  Output,
  Sync,
  SyncAlt,
  SyncProblem,
  SyncDisabled,
  CloudSync,
  CloudQueue,
  CloudDone,
  CloudDownload,
  CloudUpload,
  CloudOff,
  Backup,
  Restore,
  Update,
  Upgrade,
  SystemUpdate,
  SystemUpdateAlt,
  GetApp,
  Publish,
  FileDownload,
  FileUpload,
  Folder,
  FolderOpen,
  FolderShared,
  FolderSpecial,
  CreateNewFolder,
  InsertDriveFile,
  FileCopy,
  ContentCopy,
  ContentCut,
  ContentPaste,
  NoteAdd,
  PostAdd,
  Add,
  Remove,
  DeleteForever,
  Delete,
  Archive,
  Unarchive,
  Storage,
  DataUsage,
  NetworkCheck,
  SignalWifiStatusbar4Bar,
  SignalWifiStatusbarConnectedNoInternet4,
  SignalWifiStatusbarNull,
  SignalWifiOff,
  WifiOff,
  Wifi,
  WifiTethering,
  WifiTetheringError,
  WifiTetheringOff,
  Router,
  DeviceHub,
  Hub,
  Lan,
  SettingsEthernet as EthernetIcon,
  Cable,
  Bluetooth,
  BluetoothAudio,
  BluetoothConnected,
  BluetoothDisabled,
  BluetoothDrive,
  BluetoothSearching,
  Gps,
  GpsFixed,
  GpsNotFixed,
  GpsOff,
  LocationOn,
  LocationOff,
  LocationDisabled,
  LocationSearching,
  MyLocation,
  NearMe,
  Navigation,
  Explore,
  ExploreOff,
  Map,
  Layers,
  LayersClear,
  Terrain,
  Satellite,
  Traffic,
  DirectionsCar,
  DirectionsWalk,
  DirectionsRun,
  DirectionsBike,
  DirectionsBoat,
  DirectionsSubway,
  DirectionsTransit,
  DirectionsBus,
  Flight,
  Train,
  Subway,
  Tram,
  LocalTaxi,
  LocalShipping,
  LocalGasStation,
  LocalCarWash,
  LocalConvenienceStore,
  LocalGroceryStore,
  LocalMall,
  LocalPharmacy,
  LocalHospital,
  LocalLibrary,
  LocalMovies,
  LocalBar,
  LocalCafe,
  LocalDining,
  LocalPizza,
  LocalActivity,
  LocalAtm,
  LocalAirport,
  LocalFlorist,
  LocalLaundryService,
  LocalParking,
  LocalPostOffice,
  LocalPrintshop,
  LocalSee,
  Place,
  Room,
  Home,
  Work,
  Business,
  Store,
  Storefront,
  School as SchoolIcon,
  University
} from '@mui/icons-material';

const PersonalizedGrowthPlans = ({ 
  userId,
  userProfile = {},
  assessmentData = {},
  onPlanUpdate,
  onMilestoneReached,
  onPlanComplete
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [activePlan, setActivePlan] = useState(null);
  const [completedMilestones, setCompletedMilestones] = useState([]);
  const [currentModule, setCurrentModule] = useState(null);
  const [planProgress, setPlanProgress] = useState({});

  const [growthPlans, setGrowthPlans] = useState([
    {
      id: 'plan_001',
      title: 'Emotional Intelligence Mastery',
      description: 'Develop advanced emotional awareness and regulation skills for deeper connections',
      category: 'emotional_intelligence',
      difficulty: 'intermediate',
      duration: '6 weeks',
      personalizedFor: 'Based on your communication patterns and emotional responses',
      progress: 0.34,
      status: 'active',
      priority: 'high',
      modules: [
        {
          id: 'module_001',
          title: 'Self-Awareness Foundation',
          description: 'Learn to recognize and understand your emotional states',
          status: 'completed',
          progress: 1.0,
          estimatedTime: '45 minutes',
          skills: ['emotion_recognition', 'self_reflection', 'mindfulness'],
          exercises: [
            {
              id: 'ex_001',
              title: 'Daily Emotion Check-ins',
              type: 'reflection',
              completed: true,
              effectiveness: 0.89
            },
            {
              id: 'ex_002',
              title: 'Trigger Identification',
              type: 'analysis',
              completed: true,
              effectiveness: 0.76
            }
          ]
        },
        {
          id: 'module_002',
          title: 'Emotional Regulation Techniques',
          description: 'Master strategies for managing intense emotions',
          status: 'active',
          progress: 0.6,
          estimatedTime: '1 hour',
          skills: ['breathing_techniques', 'cognitive_reframing', 'stress_management'],
          exercises: [
            {
              id: 'ex_003',
              title: 'Box Breathing Practice',
              type: 'technique',
              completed: true,
              effectiveness: 0.92
            },
            {
              id: 'ex_004',
              title: 'Thought Challenging',
              type: 'cognitive',
              completed: false,
              effectiveness: null
            }
          ]
        },
        {
          id: 'module_003',
          title: 'Empathy and Social Awareness',
          description: 'Develop deeper understanding of others\' emotions',
          status: 'locked',
          progress: 0.0,
          estimatedTime: '1.5 hours',
          skills: ['empathy', 'social_cues', 'perspective_taking'],
          exercises: []
        }
      ]
    },
    {
      id: 'plan_002',
      title: 'Confident Communication',
      description: 'Build assertiveness and authentic expression in dating conversations',
      category: 'communication',
      difficulty: 'beginner',
      duration: '4 weeks',
      personalizedFor: 'Addressing your tendency to overthink messages and fear of vulnerability',
      progress: 0.0,
      status: 'recommended',
      priority: 'medium',
      modules: [
        {
          id: 'module_004',
          title: 'Authentic Self-Expression',
          description: 'Learn to communicate your true thoughts and feelings',
          status: 'ready',
          progress: 0.0,
          estimatedTime: '30 minutes',
          skills: ['authenticity', 'vulnerability', 'self_expression'],
          exercises: [
            {
              id: 'ex_005',
              title: 'Values Clarification',
              type: 'reflection',
              completed: false,
              effectiveness: null
            },
            {
              id: 'ex_006',
              title: 'Vulnerability Practice',
              type: 'behavioral',
              completed: false,
              effectiveness: null
            }
          ]
        }
      ]
    },
    {
      id: 'plan_003',
      title: 'Dating Confidence Builder',
      description: 'Overcome anxiety and build genuine confidence in dating scenarios',
      category: 'confidence',
      difficulty: 'intermediate',
      duration: '8 weeks',
      personalizedFor: 'Tailored to your pre-date anxiety patterns and self-doubt triggers',
      progress: 0.0,
      status: 'available',
      priority: 'high',
      modules: [
        {
          id: 'module_005',
          title: 'Self-Worth Foundation',
          description: 'Build unshakeable sense of self-worth independent of dating outcomes',
          status: 'ready',
          progress: 0.0,
          estimatedTime: '1 hour',
          skills: ['self_worth', 'self_compassion', 'internal_validation'],
          exercises: []
        }
      ]
    },
    {
      id: 'plan_004',
      title: 'Relationship Readiness',
      description: 'Prepare for healthy, long-term relationship dynamics',
      category: 'relationship_skills',
      difficulty: 'advanced',
      duration: '10 weeks',
      personalizedFor: 'Based on your relationship history and attachment patterns',
      progress: 0.0,
      status: 'future',
      priority: 'medium',
      modules: []
    }
  ]);

  const [achievements, setAchievements] = useState([
    {
      id: 'achievement_001',
      title: 'Emotional Awareness Pioneer',
      description: 'Completed 30 days of consistent emotional check-ins',
      icon: '🧠',
      earned: true,
      earnedDate: new Date(Date.now() - 86400000 * 7),
      rarity: 'common',
      points: 100
    },
    {
      id: 'achievement_002',
      title: 'Vulnerability Courage',
      description: 'Shared a deep personal story with a potential partner',
      icon: '💎',
      earned: true,
      earnedDate: new Date(Date.now() - 86400000 * 3),
      rarity: 'rare',
      points: 250
    },
    {
      id: 'achievement_003',
      title: 'Communication Master',
      description: 'Achieved 90%+ satisfaction in 5 consecutive conversations',
      icon: '🏆',
      earned: false,
      earnedDate: null,
      rarity: 'legendary',
      points: 500
    }
  ]);

  const [personalizedInsights, setPersonalizedInsights] = useState({
    strengthsToLeverage: [
      {
        strength: 'Deep Empathy',
        description: 'Your natural ability to understand others\' emotions is a significant asset',
        applicationTips: [
          'Use empathetic responses to build deeper connections',
          'Trust your intuition about others\' emotional states',
          'Share your empathetic observations to show care'
        ],
        relatedSkills: ['active_listening', 'emotional_validation', 'conflict_resolution']
      },
      {
        strength: 'Intellectual Curiosity',
        description: 'Your genuine interest in learning about others creates engaging conversations',
        applicationTips: [
          'Ask thoughtful follow-up questions',
          'Share interesting insights and perspectives',
          'Explore topics that fascinate both of you'
        ],
        relatedSkills: ['conversation_depth', 'intellectual_connection', 'shared_exploration']
      }
    ],
    areasForGrowth: [
      {
        area: 'Emotional Regulation',
        description: 'Managing intense emotions during vulnerable moments',
        currentLevel: 'developing',
        targetLevel: 'proficient',
        impact: 'High impact on relationship stability and personal well-being',
        recommendations: [
          'Practice daily mindfulness meditation',
          'Learn cognitive reframing techniques',
          'Develop healthy coping strategies for stress'
        ]
      },
      {
        area: 'Assertive Communication',
        description: 'Expressing needs and boundaries clearly and kindly',
        currentLevel: 'beginner',
        targetLevel: 'intermediate',
        impact: 'Essential for healthy relationship dynamics',
        recommendations: [
          'Practice "I" statements in low-stakes situations',
          'Role-play boundary-setting scenarios',
          'Build confidence through small assertive acts'
        ]
      }
    ],
    customizedGoals: [
      {
        goal: 'Reduce pre-date anxiety by 50%',
        timeframe: '4 weeks',
        strategies: ['anxiety_management', 'confidence_building', 'preparation_rituals'],
        measurableOutcomes: ['anxiety_level_tracking', 'successful_date_outcomes', 'enjoyment_ratings']
      },
      {
        goal: 'Improve conversation depth scores by 30%',
        timeframe: '6 weeks',
        strategies: ['question_techniques', 'active_listening', 'vulnerability_practice'],
        measurableOutcomes: ['conversation_quality_metrics', 'partner_feedback', 'connection_depth']
      }
    ]
  });

  const [weeklyMilestones, setWeeklyMilestones] = useState([
    {
      week: 1,
      title: 'Foundation Building',
      goals: ['Complete emotional awareness assessment', 'Begin daily reflection practice'],
      completed: true,
      completionDate: new Date(Date.now() - 86400000 * 14)
    },
    {
      week: 2,
      title: 'Skill Development',
      goals: ['Master box breathing technique', 'Identify top 3 emotional triggers'],
      completed: true,
      completionDate: new Date(Date.now() - 86400000 * 7)
    },
    {
      week: 3,
      title: 'Application Practice',
      goals: ['Apply regulation techniques in real situations', 'Practice vulnerability with trusted friend'],
      completed: false,
      completionDate: null
    },
    {
      week: 4,
      title: 'Integration and Mastery',
      goals: ['Demonstrate consistent emotional regulation', 'Help others with emotional challenges'],
      completed: false,
      completionDate: null
    }
  ]);

  useEffect(() => {
    // Simulate progress updates
    const updateProgress = () => {
      if (activePlan) {
        const plan = growthPlans.find(p => p.id === activePlan);
        if (plan && plan.status === 'active') {
          // Small progress increment
          const progressIncrement = Math.random() * 0.01;
          setPlanProgress(prev => ({
            ...prev,
            [activePlan]: Math.min(1, (prev[activePlan] || 0) + progressIncrement)
          }));
        }
      }
    };

    const interval = setInterval(updateProgress, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [activePlan, growthPlans]);

  const startPlan = (planId) => {
    setActivePlan(planId);
    setGrowthPlans(prev => 
      prev.map(plan => 
        plan.id === planId 
          ? { ...plan, status: 'active' }
          : plan
      )
    );
    onPlanUpdate?.({ action: 'start', planId });
  };

  const completeMilestone = (milestoneId) => {
    setCompletedMilestones(prev => [...prev, milestoneId]);
    onMilestoneReached?.({ milestoneId, timestamp: Date.now() });
  };

  const renderPlanOverview = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Your Growth Plans
            </Typography>
            
            {growthPlans.map(plan => (
              <Card key={plan.id} sx={{ 
                mb: 2, 
                border: '1px solid',
                borderColor: plan.status === 'active' ? 'primary.main' : 'divider'
              }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6">{plan.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {plan.description}
                      </Typography>
                      <Typography variant="caption" color="primary.main">
                        {plan.personalizedFor}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Chip 
                        label={plan.status} 
                        color={
                          plan.status === 'active' ? 'primary' :
                          plan.status === 'completed' ? 'success' :
                          plan.status === 'recommended' ? 'warning' : 'default'
                        }
                        size="small"
                      />
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                        {plan.duration} • {plan.difficulty}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ flex: 1, mr: 2 }}>
                      <LinearProgress 
                        variant="determinate" 
                        value={plan.progress * 100}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {Math.round(plan.progress * 100)}%
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Chip 
                        label={plan.category.replace('_', ' ')} 
                        size="small" 
                        variant="outlined"
                      />
                      <Chip 
                        label={`${plan.priority} priority`} 
                        size="small" 
                        color={plan.priority === 'high' ? 'error' : plan.priority === 'medium' ? 'warning' : 'info'}
                        variant="outlined"
                      />
                    </Box>
                    
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {plan.status === 'recommended' || plan.status === 'available' ? (
                        <Button 
                          variant="contained" 
                          size="small"
                          onClick={() => startPlan(plan.id)}
                        >
                          Start Plan
                        </Button>
                      ) : plan.status === 'active' ? (
                        <Button 
                          variant="outlined" 
                          size="small"
                          onClick={() => setCurrentModule(plan.modules[0])}
                        >
                          Continue
                        </Button>
                      ) : (
                        <Button 
                          variant="text" 
                          size="small"
                          disabled
                        >
                          {plan.status === 'completed' ? 'Completed' : 'Locked'}
                        </Button>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Achievements
            </Typography>
            {achievements.map(achievement => (
              <Paper key={achievement.id} sx={{ 
                p: 2, 
                mb: 2, 
                opacity: achievement.earned ? 1 : 0.5,
                border: achievement.earned ? '1px solid gold' : 'none'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h4" sx={{ mr: 1 }}>
                    {achievement.icon}
                  </Typography>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle2">
                      {achievement.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {achievement.description}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip 
                    label={achievement.rarity} 
                    size="small" 
                    color={
                      achievement.rarity === 'legendary' ? 'error' :
                      achievement.rarity === 'rare' ? 'warning' : 'success'
                    }
                  />
                  <Typography variant="caption" color="primary.main">
                    {achievement.points} points
                  </Typography>
                </Box>
                {achievement.earned && (
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
                    Earned: {achievement.earnedDate.toLocaleDateString()}
                  </Typography>
                )}
              </Paper>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderPersonalizedInsights = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Star sx={{ mr: 1, color: 'gold' }} />
              Strengths to Leverage
            </Typography>
            
            {personalizedInsights.strengthsToLeverage.map((strength, index) => (
              <Paper key={index} sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'success.light' }}>
                <Typography variant="h6" color="success.main" sx={{ mb: 1 }}>
                  {strength.strength}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {strength.description}
                </Typography>
                
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2">Application Tips</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {strength.applicationTips.map((tip, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <Lightbulb color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={tip} />
                        </ListItem>
                      ))}
                    </List>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="caption" color="text.secondary">
                        Related Skills: {strength.relatedSkills.join(', ')}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <TrendingUp sx={{ mr: 1, color: 'primary.main' }} />
              Growth Opportunities
            </Typography>
            
            {personalizedInsights.areasForGrowth.map((area, index) => (
              <Paper key={index} sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'info.light' }}>
                <Typography variant="h6" color="info.main" sx={{ mb: 1 }}>
                  {area.area}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {area.description}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="caption" color="text.secondary">
                    Current: {area.currentLevel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Target: {area.targetLevel}
                  </Typography>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={area.currentLevel === 'beginner' ? 25 : area.currentLevel === 'developing' ? 50 : 75}
                  sx={{ mb: 2, height: 6, borderRadius: 3 }}
                />
                
                <Alert severity="info" sx={{ mb: 2 }}>
                  <Typography variant="body2">
                    {area.impact}
                  </Typography>
                </Alert>
                
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2">Recommendations</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List dense>
                      {area.recommendations.map((rec, idx) => (
                        <ListItem key={idx}>
                          <ListItemIcon>
                            <CheckCircle color="success" />
                          </ListItemIcon>
                          <ListItemText primary={rec} />
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <EmojiEvents sx={{ mr: 1, color: 'warning.main' }} />
              Customized Goals
            </Typography>
            
            <Grid container spacing={2}>
              {personalizedInsights.customizedGoals.map((goal, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper sx={{ p: 2, border: '1px solid', borderColor: 'warning.light' }}>
                    <Typography variant="h6" color="warning.main" sx={{ mb: 1 }}>
                      {goal.goal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Target: {goal.timeframe}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Strategies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {goal.strategies.map((strategy, idx) => (
                          <Chip 
                            key={idx} 
                            label={strategy.replace('_', ' ')} 
                            size="small" 
                            variant="outlined"
                            color="warning"
                          />
                        ))}
                      </Box>
                    </Box>
                    
                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Measurable Outcomes:
                      </Typography>
                      <List dense>
                        {goal.measurableOutcomes.map((outcome, idx) => (
                          <ListItem key={idx} sx={{ pl: 0 }}>
                            <ListItemIcon>
                              <Assessment color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary={outcome.replace('_', ' ')} 
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderProgressTracking = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Weekly Milestone Progress
            </Typography>
            
            <Timeline>
              {weeklyMilestones.map((milestone, index) => (
                <TimelineItem key={milestone.week}>
                  <TimelineSeparator>
                    <TimelineDot color={milestone.completed ? 'success' : 'grey'}>
                      {milestone.completed ? <CheckCircle /> : <RadioButtonUnchecked />}
                    </TimelineDot>
                    {index < weeklyMilestones.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" color={milestone.completed ? 'success.main' : 'text.primary'}>
                      Week {milestone.week}: {milestone.title}
                    </Typography>
                    <List dense>
                      {milestone.goals.map((goal, idx) => (
                        <ListItem key={idx} sx={{ pl: 0 }}>
                          <ListItemIcon>
                            {milestone.completed ? 
                              <CheckCircle color="success" /> : 
                              <RadioButtonUnchecked color="action" />
                            }
                          </ListItemIcon>
                          <ListItemText 
                            primary={goal}
                            primaryTypographyProps={{ 
                              variant: 'body2',
                              color: milestone.completed ? 'success.main' : 'text.primary'
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                    {milestone.completed && (
                      <Typography variant="caption" color="text.secondary">
                        Completed: {milestone.completionDate.toLocaleDateString()}
                      </Typography>
                    )}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Progress Statistics
            </Typography>
            
            <Paper sx={{ p: 2, mb: 2, textAlign: 'center' }}>
              <Typography variant="h3" color="primary.main">
                {completedMilestones.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Milestones Completed
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 2, mb: 2, textAlign: 'center' }}>
              <Typography variant="h3" color="success.main">
                {Math.round((weeklyMilestones.filter(m => m.completed).length / weeklyMilestones.length) * 100)}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weekly Goals Met
              </Typography>
            </Paper>
            
            <Paper sx={{ p: 2, mb: 2, textAlign: 'center' }}>
              <Typography variant="h3" color="warning.main">
                {achievements.filter(a => a.earned).length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Achievements Earned
              </Typography>
            </Paper>
            
            <Button 
              variant="contained" 
              fullWidth 
              sx={{ mt: 2 }}
              onClick={() => setSelectedTab(3)}
            >
              View Detailed Analytics
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderDetailedAnalytics = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Growth Plan Analytics Dashboard
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main">
                    {Math.round(growthPlans.find(p => p.status === 'active')?.progress * 100 || 0)}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Current Plan Progress
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="success.main">
                    {achievements.filter(a => a.earned).reduce((sum, a) => sum + a.points, 0)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Points Earned
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="warning.main">
                    {growthPlans.filter(p => p.status === 'completed').length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Plans Completed
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            
            <Alert severity="info" sx={{ mt: 3 }}>
              <Typography variant="body2">
                Your growth trajectory is 23% faster than average users with similar starting points. 
                Keep up the excellent work!
              </Typography>
            </Alert>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <SelfImprovement sx={{ mr: 2, fontSize: 40 }} />
        Personalized Growth Plans
        <Chip label="AI-Generated" color="primary" sx={{ ml: 2 }} />
      </Typography>
      
      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Growth Plans" />
        <Tab label="Personalized Insights" />
        <Tab label="Progress Tracking" />
        <Tab label="Analytics" />
      </Tabs>

      {selectedTab === 0 && renderPlanOverview()}
      {selectedTab === 1 && renderPersonalizedInsights()}
      {selectedTab === 2 && renderProgressTracking()}
      {selectedTab === 3 && renderDetailedAnalytics()}
    </Box>
  );
};

export default PersonalizedGrowthPlans;