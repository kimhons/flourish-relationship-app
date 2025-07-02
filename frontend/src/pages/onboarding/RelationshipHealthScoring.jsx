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
  TablePagination,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Collapse,
  Rating,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Fab
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  TrendingUp,
  TrendingDown,
  Analytics,
  Assessment,
  Speed,
  Warning,
  CheckCircle,
  Info,
  Star,
  ExpandMore,
  Refresh,
  Download,
  Share,
  Settings,
  Visibility,
  VisibilityOff,
  FilterList,
  DateRange,
  PieChart,
  BarChart,
  ShowChart,
  TableChart,
  Dashboard,
  AutoGraph,
  Leaderboard,
  EmojiEvents,
  LocalFireDepartment,
  Bolt,
  FlashOn,
  Whatshot,
  Celebration,
  Groups,
  Person,
  Chat,
  VideoCall,
  Message,
  Phone,
  Email,
  Schedule,
  Event,
  Notifications,
  NotificationsActive,
  NotificationsOff,
  VolumeUp,
  VolumeOff,
  Brightness1,
  RadioButtonUnchecked,
  FiberManualRecord,
  Mood,
  MoodBad,
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentVerySatisfied,
  AccessTime,
  CalendarToday,
  LocationOn,
  ThumbUp,
  ThumbDown,
  Reply,
  Forward,
  Archive,
  Delete,
  Edit,
  Search,
  Sort,
  FilterAlt,
  ViewList,
  ViewModule,
  ZoomIn,
  ZoomOut,
  Fullscreen,
  FullscreenExit,
  PlayArrow,
  Pause,
  Stop,
  SkipNext,
  SkipPrevious,
  Repeat,
  Shuffle,
  Loop,
  GraphicEq,
  Equalizer,
  Waves,
  SignalCellularAlt,
  NetworkCheck,
  Wifi,
  BluetoothConnected,
  DeviceHub,
  Memory,
  Storage,
  CloudSync,
  Sync,
  Update,
  Autorenew,
  Cached,
  SmartToy,
  Psychology,
  ModelTraining,
  Insights,
  Lightbulb,
  Science,
  Functions,
  Calculate,
  DataUsage,
  Timeline,
  PredictiveText,
  AutoAwesome,
  Precision,
  Tune,
  Engineering,
  Computer,
  Code,
  DataObject,
  Schema,
  AccountTree,
  Hub,
  Layers,
  Transform,
  FilterCenterFocus,
  CenterFocusStrong,
  MyLocation,
  GpsFixed,
  TrackChanges,
  Adjust,
  Straighten,
  LinearScale,
  ScatterPlot,
  BubbleChart,
  Radar,
  DonutLarge,
  DonutSmall,
  PieChartOutline,
  BarChartOutlined,
  ShowChartOutlined,
  TimelineOutlined,
  TrendingUpOutlined,
  TrendingDownOutlined,
  TrendingFlatOutlined,
  EqualizerOutlined,
  GraphicEqOutlined,
  WavesOutlined,
  SignalCellularAltOutlined,
  NetworkCheckOutlined,
  WifiOutlined,
  BluetoothConnectedOutlined,
  DeviceHubOutlined,
  MemoryOutlined,
  StorageOutlined,
  CloudSyncOutlined,
  SyncOutlined,
  UpdateOutlined,
  AutorenewOutlined,
  CachedOutlined,
  SmartToyOutlined,
  PsychologyOutlined,
  ModelTrainingOutlined,
  InsightsOutlined,
  LightbulbOutlined,
  ScienceOutlined,
  FunctionsOutlined,
  CalculateOutlined,
  DataUsageOutlined,
  HealthAndSafety,
  MonitorHeart,
  Healing,
  LocalHospital,
  MedicalServices,
  Vaccines,
  BloodType,
  Emergency,
  FirstAid,
  HealthAndSafetyOutlined,
  MonitorHeartOutlined,
  HealingOutlined,
  LocalHospitalOutlined,
  MedicalServicesOutlined,
  VaccinesOutlined,
  BloodTypeOutlined,
  EmergencyOutlined,
  FirstAidOutlined,
  FitnessCenter,
  SelfImprovement,
  Psychology as PsychologyIcon,
  Spa,
  NaturePeople,
  EmojiNature,
  EmojiPeople,
  EmojiEmotions,
  EmojiEvents,
  EmojiFlags,
  EmojiFood,
  EmojiObjects,
  EmojiSymbols,
  EmojiTransportation,
  Face,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
  FaceRetouchingNatural,
  FaceRetouchingOff,
  SentimentSatisfiedAlt,
  SentimentVeryDissatisfiedOutlined,
  SentimentDissatisfiedOutlined,
  SentimentNeutralOutlined,
  SentimentSatisfiedOutlined,
  SentimentVerySatisfiedOutlined
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
  Radar,
  ScatterChart,
  Scatter,
  ComposedChart,
  Treemap,
  Sankey,
  FunnelChart,
  Funnel,
  LabelList,
  ReferenceLine,
  ReferenceArea,
  Brush,
  ErrorBar
} from 'recharts';

const RelationshipHealthScoring = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [healthMetric, setHealthMetric] = useState('overall');
  const [timeRange, setTimeRange] = useState('30d');
  const [comparisonMode, setComparisonMode] = useState('benchmark');
  const [realTimeMonitoring, setRealTimeMonitoring] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [metricDialogOpen, setMetricDialogOpen] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [detailedView, setDetailedView] = useState(false);

  // Overall Health Score
  const overallHealthScore = {
    current: 87.3,
    previous: 84.1,
    trend: 'improving',
    grade: 'A-',
    percentile: 92,
    lastUpdated: new Date().toLocaleTimeString()
  };

  // Health Dimensions
  const healthDimensions = [
    {
      id: 'communication',
      name: 'Communication Health',
      score: 89.4,
      weight: 0.25,
      trend: 'improving',
      description: 'Quality and effectiveness of communication patterns',
      icon: <Chat />,
      color: '#2196F3',
      subMetrics: [
        { name: 'Response Time', score: 92.1, target: 90 },
        { name: 'Conversation Depth', score: 87.3, target: 85 },
        { name: 'Emotional Expression', score: 89.7, target: 80 },
        { name: 'Active Listening', score: 88.9, target: 85 }
      ]
    },
    {
      id: 'intimacy',
      name: 'Intimacy & Connection',
      score: 91.7,
      weight: 0.20,
      trend: 'stable',
      description: 'Physical and emotional intimacy levels',
      icon: <Favorite />,
      color: '#E91E63',
      subMetrics: [
        { name: 'Physical Affection', score: 94.2, target: 85 },
        { name: 'Emotional Closeness', score: 90.8, target: 80 },
        { name: 'Quality Time', score: 89.3, target: 85 },
        { name: 'Shared Experiences', score: 92.5, target: 80 }
      ]
    },
    {
      id: 'conflict',
      name: 'Conflict Resolution',
      score: 78.9,
      weight: 0.20,
      trend: 'improving',
      description: 'Ability to handle and resolve conflicts constructively',
      icon: <Psychology />,
      color: '#FF9800',
      subMetrics: [
        { name: 'Conflict Frequency', score: 85.4, target: 80 },
        { name: 'Resolution Speed', score: 72.1, target: 75 },
        { name: 'Compromise Ability', score: 79.8, target: 80 },
        { name: 'Post-Conflict Recovery', score: 78.3, target: 75 }
      ]
    },
    {
      id: 'support',
      name: 'Mutual Support',
      score: 93.2,
      weight: 0.15,
      trend: 'stable',
      description: 'Emotional and practical support provided to each other',
      icon: <Groups />,
      color: '#4CAF50',
      subMetrics: [
        { name: 'Emotional Support', score: 95.7, target: 85 },
        { name: 'Practical Help', score: 91.4, target: 80 },
        { name: 'Encouragement', score: 94.1, target: 85 },
        { name: 'Stress Management', score: 91.8, target: 80 }
      ]
    },
    {
      id: 'growth',
      name: 'Personal Growth',
      score: 85.6,
      weight: 0.10,
      trend: 'improving',
      description: 'Individual and relationship development',
      icon: <TrendingUp />,
      color: '#9C27B0',
      subMetrics: [
        { name: 'Individual Development', score: 87.9, target: 80 },
        { name: 'Shared Goals', score: 84.2, target: 75 },
        { name: 'Learning Together', score: 85.1, target: 80 },
        { name: 'Future Planning', score: 85.3, target: 75 }
      ]
    },
    {
      id: 'stability',
      name: 'Relationship Stability',
      score: 88.1,
      weight: 0.10,
      trend: 'stable',
      description: 'Consistency and reliability of relationship patterns',
      icon: <HealthAndSafety />,
      color: '#607D8B',
      subMetrics: [
        { name: 'Routine Consistency', score: 89.7, target: 80 },
        { name: 'Emotional Stability', score: 87.3, target: 85 },
        { name: 'Commitment Level', score: 88.9, target: 85 },
        { name: 'Trust Foundation', score: 86.5, target: 90 }
      ]
    }
  ];

  // Health Trend Data
  const healthTrendData = [
    { date: '2025-06-01', overall: 82.1, communication: 85.3, intimacy: 88.7, conflict: 74.2, support: 89.1, growth: 81.4, stability: 84.8 },
    { date: '2025-06-08', overall: 83.4, communication: 86.1, intimacy: 89.2, conflict: 75.8, support: 90.3, growth: 82.7, stability: 85.9 },
    { date: '2025-06-15', overall: 84.7, communication: 87.2, intimacy: 89.8, conflict: 76.9, support: 91.1, growth: 83.5, stability: 86.4 },
    { date: '2025-06-22', overall: 85.9, communication: 88.1, intimacy: 90.5, conflict: 77.8, support: 92.4, growth: 84.2, stability: 87.1 },
    { date: '2025-06-29', overall: 86.8, communication: 88.9, intimacy: 91.1, conflict: 78.3, support: 92.9, growth: 84.9, stability: 87.6 },
    { date: '2025-07-06', overall: 87.3, communication: 89.4, intimacy: 91.7, conflict: 78.9, support: 93.2, growth: 85.6, stability: 88.1 }
  ];

  // Health Milestones
  const healthMilestones = [
    {
      id: 1,
      title: 'Communication Excellence',
      description: 'Achieved 90+ communication health score',
      target: 90,
      current: 89.4,
      progress: 99.3,
      status: 'near_completion',
      estimatedCompletion: '3 days',
      reward: 'Communication Master Badge'
    },
    {
      id: 2,
      title: 'Intimacy Mastery',
      description: 'Maintain 90+ intimacy score for 30 days',
      target: 90,
      current: 91.7,
      progress: 87.5,
      status: 'in_progress',
      estimatedCompletion: '4 days',
      reward: 'Intimacy Champion Badge'
    },
    {
      id: 3,
      title: 'Conflict Resolution Pro',
      description: 'Reach 85+ conflict resolution score',
      target: 85,
      current: 78.9,
      progress: 92.8,
      status: 'in_progress',
      estimatedCompletion: '2 weeks',
      reward: 'Harmony Keeper Badge'
    },
    {
      id: 4,
      title: 'Support System Elite',
      description: 'Achieve 95+ mutual support score',
      target: 95,
      current: 93.2,
      progress: 98.1,
      status: 'near_completion',
      estimatedCompletion: '1 week',
      reward: 'Support Champion Badge'
    },
    {
      id: 5,
      title: 'Growth Partnership',
      description: 'Reach 90+ personal growth score',
      target: 90,
      current: 85.6,
      progress: 95.1,
      status: 'in_progress',
      estimatedCompletion: '3 weeks',
      reward: 'Growth Partner Badge'
    }
  ];

  // Health Alerts
  const healthAlerts = [
    {
      id: 1,
      type: 'improvement',
      severity: 'info',
      title: 'Communication Score Improving',
      message: 'Your communication health has improved by 4.1 points this week',
      timestamp: '2 hours ago',
      actionable: false
    },
    {
      id: 2,
      type: 'milestone',
      severity: 'success',
      title: 'Intimacy Milestone Achieved',
      message: 'Congratulations! You\'ve maintained 90+ intimacy score for 26 days',
      timestamp: '1 day ago',
      actionable: true,
      action: 'View Achievement'
    },
    {
      id: 3,
      type: 'attention',
      severity: 'warning',
      title: 'Conflict Resolution Needs Focus',
      message: 'Consider working on compromise skills to improve conflict resolution',
      timestamp: '3 days ago',
      actionable: true,
      action: 'Get Recommendations'
    }
  ];

  // Benchmark Comparisons
  const benchmarkData = [
    { metric: 'Overall Health', yourScore: 87.3, average: 74.2, top10: 91.8, percentile: 92 },
    { metric: 'Communication', yourScore: 89.4, average: 76.8, top10: 93.2, percentile: 89 },
    { metric: 'Intimacy', yourScore: 91.7, average: 78.3, top10: 94.6, percentile: 94 },
    { metric: 'Conflict Resolution', yourScore: 78.9, average: 71.4, top10: 87.3, percentile: 78 },
    { metric: 'Mutual Support', yourScore: 93.2, average: 79.1, top10: 96.4, percentile: 96 },
    { metric: 'Personal Growth', yourScore: 85.6, average: 72.9, top10: 89.7, percentile: 85 }
  ];

  // Health Recommendations
  const healthRecommendations = [
    {
      category: 'Communication',
      priority: 'medium',
      title: 'Enhance Active Listening',
      description: 'Practice reflective listening techniques to improve conversation quality',
      impact: '+3-5 points',
      timeframe: '2-3 weeks',
      difficulty: 'easy',
      actions: [
        'Use "I hear you saying..." responses',
        'Ask clarifying questions',
        'Summarize partner\'s points before responding'
      ]
    },
    {
      category: 'Conflict Resolution',
      priority: 'high',
      title: 'Improve Compromise Skills',
      description: 'Develop better negotiation and compromise strategies',
      impact: '+6-8 points',
      timeframe: '3-4 weeks',
      difficulty: 'medium',
      actions: [
        'Practice win-win solution finding',
        'Use "both/and" instead of "either/or" thinking',
        'Schedule regular relationship check-ins'
      ]
    },
    {
      category: 'Growth',
      priority: 'medium',
      title: 'Set Shared Goals',
      description: 'Create and work towards common relationship objectives',
      impact: '+4-6 points',
      timeframe: '4-6 weeks',
      difficulty: 'medium',
      actions: [
        'Monthly goal-setting sessions',
        'Track progress together',
        'Celebrate achievements'
      ]
    }
  ];

  // Health Score History
  const scoreHistory = [
    { period: 'This Week', score: 87.3, change: +3.2, trend: 'up' },
    { period: 'Last Week', score: 84.1, change: +1.8, trend: 'up' },
    { period: 'Two Weeks Ago', score: 82.3, change: +0.9, trend: 'up' },
    { period: 'Three Weeks Ago', score: 81.4, change: -0.5, trend: 'down' },
    { period: 'One Month Ago', score: 81.9, change: +2.1, trend: 'up' }
  ];

  useEffect(() => {
    // Simulate real-time health monitoring
    if (realTimeMonitoring) {
      const interval = setInterval(() => {
        // Update health scores
        // This would be replaced with actual API calls in production
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, [realTimeMonitoring]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMetricClick = (metric) => {
    setSelectedMetric(metric);
    setMetricDialogOpen(true);
  };

  const getHealthGrade = (score) => {
    if (score >= 95) return { grade: 'A+', color: '#4CAF50' };
    if (score >= 90) return { grade: 'A', color: '#4CAF50' };
    if (score >= 85) return { grade: 'A-', color: '#8BC34A' };
    if (score >= 80) return { grade: 'B+', color: '#CDDC39' };
    if (score >= 75) return { grade: 'B', color: '#FFC107' };
    if (score >= 70) return { grade: 'B-', color: '#FF9800' };
    if (score >= 65) return { grade: 'C+', color: '#FF5722' };
    if (score >= 60) return { grade: 'C', color: '#F44336' };
    return { grade: 'C-', color: '#F44336' };
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp color="success" />;
      case 'declining': return <TrendingDown color="error" />;
      case 'stable': return <Timeline color="primary" />;
      default: return <Timeline />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'near_completion': return 'warning';
      case 'in_progress': return 'info';
      case 'not_started': return 'default';
      default: return 'default';
    }
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
                <Box>
                  <Typography variant="h4" gutterBottom>
                    <MonitorHeart sx={{ mr: 2, verticalAlign: 'middle' }} />
                    Relationship Health Scoring
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Comprehensive health metrics and real-time monitoring for relationship optimization
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Health Metric</InputLabel>
                    <Select value={healthMetric} onChange={(e) => setHealthMetric(e.target.value)} label="Health Metric">
                      <MenuItem value="overall">Overall Health</MenuItem>
                      <MenuItem value="communication">Communication</MenuItem>
                      <MenuItem value="intimacy">Intimacy</MenuItem>
                      <MenuItem value="conflict">Conflict Resolution</MenuItem>
                      <MenuItem value="support">Mutual Support</MenuItem>
                      <MenuItem value="growth">Personal Growth</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Time Range</InputLabel>
                    <Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} label="Time Range">
                      <MenuItem value="7d">Last 7 days</MenuItem>
                      <MenuItem value="30d">Last 30 days</MenuItem>
                      <MenuItem value="90d">Last 3 months</MenuItem>
                      <MenuItem value="1y">Last year</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={realTimeMonitoring} 
                        onChange={(e) => setRealTimeMonitoring(e.target.checked)}
                      />
                    }
                    label="Real-time"
                  />
                  
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={detailedView} 
                        onChange={(e) => setDetailedView(e.target.checked)}
                      />
                    }
                    label="Detailed"
                  />
                </Box>
              </Box>

              {/* Status Indicators */}
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiberManualRecord 
                      sx={{ 
                        color: realTimeMonitoring ? '#4CAF50' : '#757575',
                        fontSize: 12
                      }} 
                    />
                  </motion.div>
                  <Typography variant="body2">
                    {realTimeMonitoring ? 'Live Monitoring' : 'Static Analysis'}
                  </Typography>
                </Box>
                
                <Divider orientation="vertical" flexItem />
                
                <Typography variant="body2" color="text.secondary">
                  Health Score: {overallHealthScore.current}/100
                </Typography>
                
                <Divider orientation="vertical" flexItem />
                
                <Chip 
                  icon={<HealthAndSafety />} 
                  label={`Grade: ${getHealthGrade(overallHealthScore.current).grade}`}
                  sx={{ 
                    backgroundColor: getHealthGrade(overallHealthScore.current).color,
                    color: 'white'
                  }}
                  size="small"
                />
                
                <Divider orientation="vertical" flexItem />
                
                <Typography variant="body2" color="text.secondary">
                  Last updated: {overallHealthScore.lastUpdated}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Overall Health Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Card sx={{ mb: 3, background: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" gutterBottom>
                Overall Relationship Health Score
              </Typography>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <Typography variant="h1" fontWeight="bold" gutterBottom>
                  {overallHealthScore.current}
                </Typography>
              </motion.div>
              
              <Typography variant="h4" gutterBottom>
                {getHealthGrade(overallHealthScore.current).grade}
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Previous Score
                  </Typography>
                  <Typography variant="h6">
                    {overallHealthScore.previous}
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Improvement
                  </Typography>
                  <Typography variant="h6">
                    +{(overallHealthScore.current - overallHealthScore.previous).toFixed(1)}
                  </Typography>
                </Box>
                
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Percentile
                  </Typography>
                  <Typography variant="h6">
                    {overallHealthScore.percentile}th
                  </Typography>
                </Box>
              </Box>
              
              <Alert severity="success" sx={{ mt: 3, backgroundColor: 'rgba(255,255,255,0.2)' }}>
                <AlertTitle sx={{ color: 'white' }}>Excellent Health Status</AlertTitle>
                <Typography sx={{ color: 'white' }}>
                  Your relationship is in the top {100 - overallHealthScore.percentile}% of all relationships. Keep up the great work!
                </Typography>
              </Alert>
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
            <Tab icon={<Dashboard />} label="Health Dashboard" />
            <Tab icon={<Timeline />} label="Health Trends" />
            <Tab icon={<EmojiEvents />} label="Milestones" />
            <Tab icon={<Assessment />} label="Benchmarks" />
            <Tab icon={<Lightbulb />} label="Recommendations" />
            <Tab icon={<Notifications />} label="Health Alerts" />
          </Tabs>

          {/* Tab 1: Health Dashboard */}
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={3}>
              {/* Health Dimensions */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Health Dimension Breakdown
                </Typography>
                <Grid container spacing={2}>
                  {healthDimensions.map((dimension) => (
                    <Grid item xs={12} md={6} lg={4} key={dimension.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card 
                          sx={{ 
                            height: '100%',
                            cursor: 'pointer',
                            border: dimension.score >= 90 ? '2px solid #4CAF50' : '1px solid #e0e0e0'
                          }}
                          onClick={() => handleMetricClick(dimension)}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar sx={{ bgcolor: dimension.color, width: 32, height: 32 }}>
                                  {dimension.icon}
                                </Avatar>
                                <Typography variant="h6">
                                  {dimension.name}
                                </Typography>
                              </Box>
                              {getTrendIcon(dimension.trend)}
                            </Box>
                            
                            <Typography variant="h4" 
                              sx={{ color: dimension.color }}
                              fontWeight="bold" 
                              gutterBottom
                            >
                              {dimension.score}
                            </Typography>
                            
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {dimension.description}
                            </Typography>
                            
                            <LinearProgress 
                              variant="determinate" 
                              value={dimension.score}
                              sx={{ 
                                mb: 2,
                                height: 8,
                                borderRadius: 4,
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: dimension.color
                                }
                              }}
                            />
                            
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              <Chip 
                                label={`Weight: ${(dimension.weight * 100)}%`}
                                size="small"
                                color="primary"
                              />
                              <Chip 
                                label={getHealthGrade(dimension.score).grade}
                                size="small"
                                sx={{ 
                                  backgroundColor: getHealthGrade(dimension.score).color,
                                  color: 'white'
                                }}
                              />
                            </Box>
                            
                            {detailedView && (
                              <Accordion sx={{ mt: 2 }}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                  <Typography variant="body2" fontWeight="bold">
                                    Sub-Metrics
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  {dimension.subMetrics.map((subMetric, idx) => (
                                    <Box key={idx} sx={{ mb: 2 }}>
                                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                        <Typography variant="body2">
                                          {subMetric.name}
                                        </Typography>
                                        <Typography variant="body2" fontWeight="bold">
                                          {subMetric.score}
                                        </Typography>
                                      </Box>
                                      <LinearProgress 
                                        variant="determinate" 
                                        value={(subMetric.score / 100) * 100}
                                        sx={{ 
                                          height: 4,
                                          borderRadius: 2,
                                          '& .MuiLinearProgress-bar': {
                                            backgroundColor: subMetric.score >= subMetric.target ? '#4CAF50' : '#FF9800'
                                          }
                                        }}
                                      />
                                    </Box>
                                  ))}
                                </AccordionDetails>
                              </Accordion>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Health Score History */}
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Health Score History
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={scoreHistory.reverse()}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="period" />
                        <YAxis domain={[75, 90]} />
                        <RechartsTooltip />
                        <Line 
                          type="monotone" 
                          dataKey="score" 
                          stroke="#4CAF50" 
                          strokeWidth={3}
                          dot={{ fill: '#4CAF50', strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Quick Stats */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Quick Stats
                    </Typography>
                    
                    {[
                      { label: 'Highest Score', value: '93.2', metric: 'Mutual Support' },
                      { label: 'Most Improved', value: '+4.1', metric: 'Communication' },
                      { label: 'Needs Attention', value: '78.9', metric: 'Conflict Resolution' },
                      { label: 'Days Above 85', value: '28', metric: 'This Month' }
                    ].map((stat, index) => (
                      <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="primary">
                          {stat.metric}
                        </Typography>
                        <Divider sx={{ mt: 1 }} />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 2: Health Trends */}
          <TabPanel value={activeTab} index={1}>
            <Grid container spacing={3}>
              {/* Trend Chart */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      6-Week Health Trend Analysis
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={healthTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="overall" 
                          stroke="#4CAF50" 
                          strokeWidth={4}
                          name="Overall Health"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="communication" 
                          stroke="#2196F3" 
                          strokeWidth={2}
                          name="Communication"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="intimacy" 
                          stroke="#E91E63" 
                          strokeWidth={2}
                          name="Intimacy"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="conflict" 
                          stroke="#FF9800" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          name="Conflict Resolution"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="support" 
                          stroke="#9C27B0" 
                          strokeWidth={2}
                          name="Mutual Support"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Trend Analysis */}
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  {[
                    {
                      metric: 'Overall Health',
                      trend: '+6.3%',
                      description: 'Steady improvement over 6 weeks',
                      color: '#4CAF50'
                    },
                    {
                      metric: 'Communication',
                      trend: '+4.8%',
                      description: 'Consistent upward trajectory',
                      color: '#2196F3'
                    },
                    {
                      metric: 'Intimacy',
                      trend: '+3.4%',
                      description: 'Gradual but steady improvement',
                      color: '#E91E63'
                    },
                    {
                      metric: 'Conflict Resolution',
                      trend: '+6.3%',
                      description: 'Significant improvement in handling conflicts',
                      color: '#FF9800'
                    },
                    {
                      metric: 'Mutual Support',
                      trend: '+4.6%',
                      description: 'Strong support system development',
                      color: '#9C27B0'
                    },
                    {
                      metric: 'Personal Growth',
                      trend: '+5.2%',
                      description: 'Individual and shared development',
                      color: '#607D8B'
                    }
                  ].map((item, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                      <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          {item.metric}
                        </Typography>
                        <Typography variant="h4" sx={{ color: item.color }} fontWeight="bold" gutterBottom>
                          {item.trend}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 3: Milestones */}
          <TabPanel value={activeTab} index={2}>
            <Grid container spacing={3}>
              {healthMilestones.map((milestone) => (
                <Grid item xs={12} md={6} key={milestone.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: milestone.id * 0.1 }}
                  >
                    <Card sx={{ 
                      border: milestone.status === 'near_completion' ? '2px solid #FF9800' : '1px solid #e0e0e0'
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6">
                            {milestone.title}
                          </Typography>
                          <Chip 
                            label={milestone.status.replace('_', ' ')}
                            color={getStatusColor(milestone.status)}
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {milestone.description}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="body1">
                            Progress: {milestone.current}/{milestone.target}
                          </Typography>
                          <Typography variant="body1" fontWeight="bold">
                            {milestone.progress.toFixed(1)}%
                          </Typography>
                        </Box>
                        
                        <LinearProgress 
                          variant="determinate" 
                          value={milestone.progress}
                          sx={{ 
                            mb: 2,
                            height: 8,
                            borderRadius: 4,
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: milestone.progress >= 95 ? '#4CAF50' : 
                                             milestone.progress >= 80 ? '#FF9800' : '#2196F3'
                            }
                          }}
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" color="text.secondary">
                            Est. completion: {milestone.estimatedCompletion}
                          </Typography>
                          <Chip 
                            icon={<EmojiEvents />}
                            label={milestone.reward}
                            size="small"
                            color="primary"
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 4: Benchmarks */}
          <TabPanel value={activeTab} index={3}>
            <Grid container spacing={3}>
              {/* Benchmark Comparison Chart */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Benchmark Comparison
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={400}>
                      <RechartsBarChart data={benchmarkData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="metric" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="yourScore" fill="#4CAF50" name="Your Score" />
                        <Bar dataKey="average" fill="#2196F3" name="Average" />
                        <Bar dataKey="top10" fill="#FF9800" name="Top 10%" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Detailed Benchmark Data */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Detailed Benchmark Analysis
                    </Typography>
                    
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Metric</TableCell>
                            <TableCell align="center">Your Score</TableCell>
                            <TableCell align="center">Average</TableCell>
                            <TableCell align="center">Top 10%</TableCell>
                            <TableCell align="center">Percentile</TableCell>
                            <TableCell align="center">Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {benchmarkData.map((row) => (
                            <TableRow key={row.metric}>
                              <TableCell>{row.metric}</TableCell>
                              <TableCell align="center">
                                <Typography variant="h6" color="success.main" fontWeight="bold">
                                  {row.yourScore}
                                </Typography>
                              </TableCell>
                              <TableCell align="center">{row.average}</TableCell>
                              <TableCell align="center">{row.top10}</TableCell>
                              <TableCell align="center">
                                <Typography variant="body1" fontWeight="bold">
                                  {row.percentile}th
                                </Typography>
                              </TableCell>
                              <TableCell align="center">
                                <Chip 
                                  label={row.percentile >= 90 ? 'Excellent' : 
                                         row.percentile >= 75 ? 'Good' : 'Average'}
                                  color={row.percentile >= 90 ? 'success' : 
                                         row.percentile >= 75 ? 'primary' : 'default'}
                                  size="small"
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 5: Recommendations */}
          <TabPanel value={activeTab} index={4}>
            <Grid container spacing={3}>
              {healthRecommendations.map((rec, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card sx={{ 
                    border: rec.priority === 'high' ? '2px solid #f44336' : 
                           rec.priority === 'medium' ? '2px solid #ff9800' : '1px solid #e0e0e0'
                  }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Typography variant="h6">
                          {rec.title}
                        </Typography>
                        <Chip 
                          label={rec.priority}
                          color={rec.priority === 'high' ? 'error' : 
                                 rec.priority === 'medium' ? 'warning' : 'info'}
                          size="small"
                        />
                      </Box>
                      
                      <Typography variant="body1" gutterBottom>
                        {rec.description}
                      </Typography>
                      
                      <Grid container spacing={2} sx={{ mt: 2 }}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Expected Impact
                          </Typography>
                          <Typography variant="body1" fontWeight="bold" color="success.main">
                            {rec.impact}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Timeframe
                          </Typography>
                          <Typography variant="body1" fontWeight="bold">
                            {rec.timeframe}
                          </Typography>
                        </Grid>
                      </Grid>
                      
                      <Accordion sx={{ mt: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography variant="body2" fontWeight="bold">
                            Action Steps
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <List dense>
                            {rec.actions.map((action, idx) => (
                              <ListItem key={idx}>
                                <ListItemIcon>
                                  <CheckCircle color="success" />
                                </ListItemIcon>
                                <ListItemText primary={action} />
                              </ListItem>
                            ))}
                          </List>
                        </AccordionDetails>
                      </Accordion>
                      
                      <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ mt: 2 }}
                        startIcon={<PlayArrow />}
                      >
                        Start Implementation
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 6: Health Alerts */}
          <TabPanel value={activeTab} index={5}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                Health Monitoring Alerts
              </Typography>
              <FormControlLabel
                control={
                  <Switch 
                    checked={alertsEnabled} 
                    onChange={(e) => setAlertsEnabled(e.target.checked)}
                  />
                }
                label="Enable Alerts"
              />
            </Box>

            <Grid container spacing={2}>
              {healthAlerts.map((alert) => (
                <Grid item xs={12} key={alert.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Alert 
                      severity={alert.severity}
                      action={
                        alert.actionable && (
                          <Button color="inherit" size="small">
                            {alert.action}
                          </Button>
                        )
                      }
                    >
                      <AlertTitle>{alert.title}</AlertTitle>
                      <Typography variant="body2">
                        {alert.message}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {alert.timestamp}
                      </Typography>
                    </Alert>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {healthAlerts.length === 0 && (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  No Active Alerts
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your relationship health is stable with no immediate concerns.
                </Typography>
              </Paper>
            )}
          </TabPanel>
        </Card>

        {/* Metric Detail Dialog */}
        <Dialog 
          open={metricDialogOpen} 
          onClose={() => setMetricDialogOpen(false)}
          maxWidth="md"
          fullWidth
        >
          {selectedMetric && (
            <>
              <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: selectedMetric.color }}>
                    {selectedMetric.icon}
                  </Avatar>
                  <Typography variant="h5">{selectedMetric.name}</Typography>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Current Score</Typography>
                    <Typography variant="h3" sx={{ color: selectedMetric.color }} fontWeight="bold" gutterBottom>
                      {selectedMetric.score}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Grade: {getHealthGrade(selectedMetric.score).grade}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedMetric.description}
                    </Typography>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Sub-Metrics</Typography>
                    {selectedMetric.subMetrics.map((subMetric, idx) => (
                      <Box key={idx} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">
                            {subMetric.name}
                          </Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {subMetric.score}
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={subMetric.score}
                          sx={{ 
                            height: 6,
                            borderRadius: 3,
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: subMetric.score >= subMetric.target ? '#4CAF50' : '#FF9800'
                            }
                          }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          Target: {subMetric.target}
                        </Typography>
                      </Box>
                    ))}
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setMetricDialogOpen(false)}>
                  Close
                </Button>
                <Button variant="contained" startIcon={<Insights />}>
                  Get Improvement Plan
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <Button 
            variant="contained" 
            startIcon={<Refresh />}
            onClick={() => window.location.reload()}
          >
            Refresh Health Data
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Download />}
          >
            Export Health Report
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Share />}
          >
            Share Progress
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Settings />}
          >
            Configure Monitoring
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RelationshipHealthScoring;

