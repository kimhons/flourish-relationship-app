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
  TablePagination
} from '@mui/material';
import {
  Timeline,
  TrendingUp,
  TrendingDown,
  Analytics,
  Assessment,
  Psychology,
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
  Favorite,
  FavoriteBorder,
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
  Psychology as PsychologyIcon,
  BrainIcon,
  ModelTraining,
  Insights,
  Lightbulb,
  Science,
  Functions,
  Calculate,
  DataUsage
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
  LabelList
} from 'recharts';

const BehavioralPatternAnalysis = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState('30d');
  const [patternType, setPatternType] = useState('communication');
  const [analysisDepth, setAnalysisDepth] = useState('comprehensive');
  const [realTimeAnalysis, setRealTimeAnalysis] = useState(true);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [patternDialogOpen, setPatternDialogOpen] = useState(false);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [autoDetection, setAutoDetection] = useState(true);

  // Communication Pattern Data
  const communicationPatterns = [
    {
      id: 1,
      pattern: 'Morning Check-ins',
      frequency: 'Daily',
      consistency: 94.7,
      quality: 87.3,
      trend: 'increasing',
      impact: 'positive',
      description: 'Regular morning communication showing strong relationship maintenance',
      timeframe: '7:00 AM - 9:00 AM',
      avgDuration: '12 minutes',
      sentimentScore: 0.89,
      responseTime: '3.2 minutes'
    },
    {
      id: 2,
      pattern: 'Evening Debriefs',
      frequency: 'Daily',
      consistency: 89.2,
      quality: 92.1,
      trend: 'stable',
      impact: 'positive',
      description: 'End-of-day sharing and emotional connection',
      timeframe: '7:00 PM - 9:00 PM',
      avgDuration: '28 minutes',
      sentimentScore: 0.94,
      responseTime: '1.8 minutes'
    },
    {
      id: 3,
      pattern: 'Conflict Avoidance',
      frequency: 'Weekly',
      consistency: 67.8,
      quality: 45.3,
      trend: 'concerning',
      impact: 'negative',
      description: 'Pattern of avoiding difficult conversations',
      timeframe: 'Variable',
      avgDuration: 'N/A',
      sentimentScore: 0.34,
      responseTime: '24+ hours'
    },
    {
      id: 4,
      pattern: 'Appreciation Expressions',
      frequency: 'Daily',
      consistency: 78.9,
      quality: 85.6,
      trend: 'increasing',
      impact: 'positive',
      description: 'Regular expressions of gratitude and appreciation',
      timeframe: 'Throughout day',
      avgDuration: '2-5 minutes',
      sentimentScore: 0.96,
      responseTime: '45 seconds'
    },
    {
      id: 5,
      pattern: 'Weekend Planning',
      frequency: 'Weekly',
      consistency: 91.4,
      quality: 88.7,
      trend: 'stable',
      impact: 'positive',
      description: 'Collaborative weekend activity planning',
      timeframe: 'Thursday evenings',
      avgDuration: '15 minutes',
      sentimentScore: 0.87,
      responseTime: '2.1 minutes'
    }
  ];

  // Behavioral Trend Data
  const behavioralTrends = [
    { date: '2025-06-01', communication: 85, intimacy: 78, conflict: 23, appreciation: 67 },
    { date: '2025-06-08', communication: 87, intimacy: 82, conflict: 19, appreciation: 72 },
    { date: '2025-06-15', communication: 89, intimacy: 85, conflict: 15, appreciation: 78 },
    { date: '2025-06-22', communication: 91, intimacy: 87, conflict: 12, appreciation: 83 },
    { date: '2025-06-29', communication: 93, intimacy: 89, conflict: 8, appreciation: 87 },
    { date: '2025-07-06', communication: 94, intimacy: 91, conflict: 6, appreciation: 89 }
  ];

  // Interaction Quality Metrics
  const interactionMetrics = [
    {
      metric: 'Response Time',
      current: '2.3 minutes',
      optimal: '< 5 minutes',
      score: 92.1,
      trend: 'improving',
      impact: 'High'
    },
    {
      metric: 'Sentiment Score',
      current: '0.87',
      optimal: '> 0.8',
      score: 87.0,
      trend: 'stable',
      impact: 'High'
    },
    {
      metric: 'Conversation Depth',
      current: '7.2/10',
      optimal: '> 6.0',
      score: 85.4,
      trend: 'improving',
      impact: 'Medium'
    },
    {
      metric: 'Emotional Support',
      current: '8.9/10',
      optimal: '> 7.0',
      score: 94.7,
      trend: 'stable',
      impact: 'High'
    },
    {
      metric: 'Conflict Resolution',
      current: '6.8/10',
      optimal: '> 6.5',
      score: 78.3,
      trend: 'needs attention',
      impact: 'High'
    },
    {
      metric: 'Physical Affection',
      current: '8.1/10',
      optimal: '> 7.5',
      score: 89.2,
      trend: 'improving',
      impact: 'Medium'
    }
  ];

  // Pattern Recognition Insights
  const patternInsights = [
    {
      category: 'Communication Timing',
      insight: 'Peak communication quality occurs between 7-9 PM with 94% positive sentiment',
      confidence: 96.3,
      actionable: true,
      recommendation: 'Schedule important conversations during evening hours for optimal outcomes'
    },
    {
      category: 'Conflict Patterns',
      insight: 'Conflicts are 73% more likely on Sunday evenings, often related to upcoming week stress',
      confidence: 89.7,
      actionable: true,
      recommendation: 'Implement Sunday evening relaxation routine to prevent stress-induced conflicts'
    },
    {
      category: 'Appreciation Frequency',
      insight: 'Appreciation expressions increase relationship satisfaction by 23% when done daily',
      confidence: 92.1,
      actionable: true,
      recommendation: 'Set daily appreciation reminders to maintain positive relationship momentum'
    },
    {
      category: 'Response Patterns',
      insight: 'Response times under 5 minutes correlate with 67% higher conversation satisfaction',
      confidence: 87.4,
      actionable: true,
      recommendation: 'Prioritize quick responses during active conversation periods'
    },
    {
      category: 'Intimacy Cycles',
      insight: 'Physical intimacy follows 7-day cycles with peaks on Wednesday and Saturday',
      confidence: 84.2,
      actionable: true,
      recommendation: 'Plan romantic activities around natural intimacy rhythm patterns'
    }
  ];

  // Behavioral Anomalies
  const behavioralAnomalies = [
    {
      id: 1,
      type: 'Communication Gap',
      severity: 'Medium',
      detected: '2 hours ago',
      description: 'Unusual 6-hour gap in communication during typical active period',
      likelihood: 'Stress-related',
      recommendation: 'Check in with gentle, supportive message'
    },
    {
      id: 2,
      type: 'Sentiment Decline',
      severity: 'Low',
      detected: '1 day ago',
      description: 'Slight decrease in positive sentiment over last 48 hours',
      likelihood: 'Work pressure',
      recommendation: 'Plan relaxing activity together'
    },
    {
      id: 3,
      type: 'Response Delay',
      severity: 'Low',
      detected: '3 hours ago',
      description: 'Response times 40% longer than usual pattern',
      likelihood: 'Busy schedule',
      recommendation: 'Adjust expectations and offer support'
    }
  ];

  // Pattern Prediction Data
  const patternPredictions = [
    {
      pattern: 'Communication Quality',
      next24h: 89.3,
      next7d: 91.7,
      confidence: 94.2,
      factors: ['Evening availability', 'Stress levels', 'Weekend plans']
    },
    {
      pattern: 'Conflict Probability',
      next24h: 12.1,
      next7d: 8.7,
      confidence: 87.6,
      factors: ['Work deadlines', 'Family events', 'Health status']
    },
    {
      pattern: 'Intimacy Level',
      next24h: 87.4,
      next7d: 89.8,
      confidence: 91.3,
      factors: ['Relationship rhythm', 'Stress levels', 'Physical health']
    }
  ];

  // Detailed Pattern Analysis Data
  const detailedPatternData = [
    { hour: '6 AM', communication: 45, intimacy: 20, conflict: 5, appreciation: 30 },
    { hour: '8 AM', communication: 78, intimacy: 25, conflict: 8, appreciation: 65 },
    { hour: '10 AM', communication: 65, intimacy: 30, conflict: 12, appreciation: 45 },
    { hour: '12 PM', communication: 82, intimacy: 40, conflict: 15, appreciation: 70 },
    { hour: '2 PM', communication: 70, intimacy: 35, conflict: 18, appreciation: 55 },
    { hour: '4 PM', communication: 75, intimacy: 45, conflict: 20, appreciation: 60 },
    { hour: '6 PM', communication: 90, intimacy: 70, conflict: 10, appreciation: 85 },
    { hour: '8 PM', communication: 95, intimacy: 85, conflict: 5, appreciation: 90 },
    { hour: '10 PM', communication: 88, intimacy: 90, conflict: 3, appreciation: 75 },
    { hour: '12 AM', communication: 60, intimacy: 95, conflict: 2, appreciation: 50 }
  ];

  useEffect(() => {
    // Simulate real-time pattern analysis updates
    if (realTimeAnalysis) {
      const interval = setInterval(() => {
        // Update pattern analysis data
        // This would be replaced with actual API calls in production
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, [realTimeAnalysis]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handlePatternClick = (pattern) => {
    setSelectedPattern(pattern);
    setPatternDialogOpen(true);
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'increasing': return <TrendingUp color="success" />;
      case 'decreasing': return <TrendingDown color="error" />;
      case 'stable': return <Timeline color="primary" />;
      case 'concerning': return <Warning color="warning" />;
      default: return <Timeline />;
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'positive': return '#4CAF50';
      case 'negative': return '#F44336';
      case 'neutral': return '#757575';
      default: return '#2196F3';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'info';
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
                    <Timeline sx={{ mr: 2, verticalAlign: 'middle' }} />
                    Behavioral Pattern Analysis
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Advanced pattern recognition and behavioral trend analysis for relationship optimization
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Pattern Type</InputLabel>
                    <Select value={patternType} onChange={(e) => setPatternType(e.target.value)} label="Pattern Type">
                      <MenuItem value="communication">Communication</MenuItem>
                      <MenuItem value="intimacy">Intimacy</MenuItem>
                      <MenuItem value="conflict">Conflict</MenuItem>
                      <MenuItem value="appreciation">Appreciation</MenuItem>
                      <MenuItem value="all">All Patterns</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Time Range</InputLabel>
                    <Select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} label="Time Range">
                      <MenuItem value="24h">Last 24 hours</MenuItem>
                      <MenuItem value="7d">Last 7 days</MenuItem>
                      <MenuItem value="30d">Last 30 days</MenuItem>
                      <MenuItem value="90d">Last 3 months</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={realTimeAnalysis} 
                        onChange={(e) => setRealTimeAnalysis(e.target.checked)}
                      />
                    }
                    label="Real-time"
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
                        color: realTimeAnalysis ? '#4CAF50' : '#757575',
                        fontSize: 12
                      }} 
                    />
                  </motion.div>
                  <Typography variant="body2">
                    {realTimeAnalysis ? 'Live Analysis' : 'Static Analysis'}
                  </Typography>
                </Box>
                
                <Divider orientation="vertical" flexItem />
                
                <Typography variant="body2" color="text.secondary">
                  Last updated: {new Date().toLocaleTimeString()}
                </Typography>
                
                <Divider orientation="vertical" flexItem />
                
                <Chip 
                  icon={<SmartToy />} 
                  label="AI Pattern Recognition" 
                  color="primary" 
                  size="small"
                />
              </Box>
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
            <Tab icon={<Chat />} label="Communication Patterns" />
            <Tab icon={<TrendingUp />} label="Behavioral Trends" />
            <Tab icon={<Assessment />} label="Interaction Quality" />
            <Tab icon={<Insights />} label="Pattern Insights" />
            <Tab icon={<Warning />} label="Anomaly Detection" />
            <Tab icon={<Psychology />} label="Predictive Analysis" />
          </Tabs>

          {/* Tab 1: Communication Patterns */}
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={3}>
              {/* Pattern Overview Cards */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Identified Communication Patterns
                </Typography>
                <Grid container spacing={2}>
                  {communicationPatterns.map((pattern) => (
                    <Grid item xs={12} md={6} lg={4} key={pattern.id}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card 
                          sx={{ 
                            height: '100%',
                            cursor: 'pointer',
                            border: pattern.impact === 'negative' ? '2px solid #f44336' : '1px solid #e0e0e0'
                          }}
                          onClick={() => handlePatternClick(pattern)}
                        >
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                              <Typography variant="h6">
                                {pattern.pattern}
                              </Typography>
                              {getTrendIcon(pattern.trend)}
                            </Box>
                            
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {pattern.description}
                            </Typography>
                            
                            <Box sx={{ mt: 2, mb: 2 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body2">Consistency</Typography>
                                <Typography variant="body2" fontWeight="bold">
                                  {pattern.consistency}%
                                </Typography>
                              </Box>
                              <LinearProgress 
                                variant="determinate" 
                                value={pattern.consistency}
                                sx={{ 
                                  height: 6,
                                  borderRadius: 3,
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: getImpactColor(pattern.impact)
                                  }
                                }}
                              />
                            </Box>
                            
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                              <Chip 
                                label={pattern.frequency}
                                size="small"
                                color="primary"
                              />
                              <Chip 
                                label={pattern.impact}
                                size="small"
                                color={pattern.impact === 'positive' ? 'success' : 
                                       pattern.impact === 'negative' ? 'error' : 'default'}
                              />
                              <Chip 
                                label={`Quality: ${pattern.quality}%`}
                                size="small"
                                color="info"
                              />
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Hourly Pattern Analysis */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Daily Communication Pattern Analysis
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={400}>
                      <ComposedChart data={detailedPatternData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="communication" 
                          fill="#2196F3" 
                          fillOpacity={0.3}
                          stroke="#2196F3"
                          strokeWidth={2}
                          name="Communication Quality"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="intimacy" 
                          stroke="#E91E63" 
                          strokeWidth={2}
                          name="Intimacy Level"
                        />
                        <Bar 
                          dataKey="appreciation" 
                          fill="#4CAF50" 
                          name="Appreciation"
                          opacity={0.7}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="conflict" 
                          stroke="#FF9800" 
                          strokeWidth={2}
                          strokeDasharray="5 5"
                          name="Conflict Risk"
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 2: Behavioral Trends */}
          <TabPanel value={activeTab} index={1}>
            <Grid container spacing={3}>
              {/* Trend Overview */}
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      6-Week Behavioral Trend Analysis
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={400}>
                      <LineChart data={behavioralTrends}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="communication" 
                          stroke="#2196F3" 
                          strokeWidth={3}
                          name="Communication Quality"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="intimacy" 
                          stroke="#E91E63" 
                          strokeWidth={3}
                          name="Intimacy Level"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="appreciation" 
                          stroke="#4CAF50" 
                          strokeWidth={3}
                          name="Appreciation Frequency"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="conflict" 
                          stroke="#FF9800" 
                          strokeWidth={3}
                          strokeDasharray="5 5"
                          name="Conflict Frequency"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Trend Summary */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Trend Summary
                    </Typography>
                    
                    {[
                      { metric: 'Communication', change: '+9.4%', color: '#4CAF50', trend: 'Improving' },
                      { metric: 'Intimacy', change: '+16.7%', color: '#4CAF50', trend: 'Strong Growth' },
                      { metric: 'Appreciation', change: '+32.8%', color: '#4CAF50', trend: 'Excellent' },
                      { metric: 'Conflict', change: '-73.9%', color: '#4CAF50', trend: 'Major Improvement' }
                    ].map((item, index) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body1">{item.metric}</Typography>
                          <Typography variant="h6" sx={{ color: item.color }} fontWeight="bold">
                            {item.change}
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          {item.trend}
                        </Typography>
                        <Divider sx={{ mt: 1 }} />
                      </Box>
                    ))}

                    <Alert severity="success" sx={{ mt: 2 }}>
                      <AlertTitle>Excellent Progress</AlertTitle>
                      All key behavioral metrics show positive trends over the past 6 weeks.
                    </Alert>
                  </CardContent>
                </Card>
              </Grid>

              {/* Pattern Correlation Analysis */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Behavioral Pattern Correlations
                    </Typography>
                    
                    <Grid container spacing={3}>
                      {[
                        {
                          correlation: 'Communication ↔ Intimacy',
                          strength: 0.87,
                          description: 'Strong positive correlation between communication quality and intimacy levels',
                          insight: 'Improving communication directly enhances intimacy'
                        },
                        {
                          correlation: 'Appreciation ↔ Satisfaction',
                          strength: 0.92,
                          description: 'Very strong correlation between appreciation frequency and relationship satisfaction',
                          insight: 'Regular appreciation is key to relationship happiness'
                        },
                        {
                          correlation: 'Conflict ↔ Communication',
                          strength: -0.73,
                          description: 'Strong negative correlation between conflict frequency and communication quality',
                          insight: 'Better communication significantly reduces conflicts'
                        },
                        {
                          correlation: 'Stress ↔ Intimacy',
                          strength: -0.64,
                          description: 'Moderate negative correlation between external stress and intimacy levels',
                          insight: 'Stress management is important for maintaining intimacy'
                        }
                      ].map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                          <Paper sx={{ p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                              {item.correlation}
                            </Typography>
                            <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
                              {item.strength > 0 ? '+' : ''}{item.strength}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {item.description}
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" color="success.main">
                              💡 {item.insight}
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

          {/* Tab 3: Interaction Quality */}
          <TabPanel value={activeTab} index={2}>
            <Grid container spacing={3}>
              {interactionMetrics.map((metric, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        {metric.metric}
                      </Typography>
                      
                      <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
                        {metric.current}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Optimal: {metric.optimal}
                      </Typography>
                      
                      <LinearProgress 
                        variant="determinate" 
                        value={metric.score}
                        sx={{ 
                          mb: 2,
                          height: 8,
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: metric.score >= 90 ? '#4CAF50' : 
                                           metric.score >= 80 ? '#2196F3' : '#FF9800'
                          }
                        }}
                      />
                      
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                        <Chip 
                          label={`${metric.score}%`}
                          color={metric.score >= 90 ? 'success' : 
                                 metric.score >= 80 ? 'primary' : 'warning'}
                          size="small"
                        />
                        <Chip 
                          label={metric.trend}
                          color={metric.trend === 'improving' ? 'success' : 
                                 metric.trend === 'stable' ? 'primary' : 'warning'}
                          size="small"
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 4: Pattern Insights */}
          <TabPanel value={activeTab} index={3}>
            <Grid container spacing={3}>
              {patternInsights.map((insight, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6">
                            {insight.category}
                          </Typography>
                          <Chip 
                            icon={<Lightbulb />}
                            label={`${insight.confidence}% confidence`}
                            color="primary"
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="body1" gutterBottom>
                          {insight.insight}
                        </Typography>
                        
                        <Paper sx={{ p: 2, bgcolor: '#f5f5f5', mt: 2 }}>
                          <Typography variant="body2" fontWeight="bold" gutterBottom>
                            💡 Recommendation:
                          </Typography>
                          <Typography variant="body2">
                            {insight.recommendation}
                          </Typography>
                        </Paper>
                        
                        {insight.actionable && (
                          <Button 
                            variant="outlined" 
                            size="small"
                            startIcon={<PlayArrow />}
                            fullWidth
                            sx={{ mt: 2 }}
                          >
                            Implement Suggestion
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 5: Anomaly Detection */}
          <TabPanel value={activeTab} index={4}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                Behavioral Anomaly Detection
              </Typography>
              <FormControlLabel
                control={
                  <Switch 
                    checked={autoDetection} 
                    onChange={(e) => setAutoDetection(e.target.checked)}
                  />
                }
                label="Auto-Detection"
              />
            </Box>

            <Grid container spacing={2}>
              {behavioralAnomalies.map((anomaly) => (
                <Grid item xs={12} key={anomaly.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card sx={{ 
                      border: anomaly.severity === 'High' ? '2px solid #f44336' : 
                             anomaly.severity === 'Medium' ? '2px solid #ff9800' : '1px solid #e0e0e0'
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Warning color={getSeverityColor(anomaly.severity)} />
                          
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                              {anomaly.type}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {anomaly.description}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" color="text.secondary">
                              {anomaly.detected}
                            </Typography>
                            <Chip 
                              label={anomaly.severity}
                              size="small"
                              color={getSeverityColor(anomaly.severity)}
                              sx={{ mt: 1 }}
                            />
                          </Box>
                        </Box>
                        
                        <Box sx={{ mt: 2, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                          <Typography variant="body2" fontWeight="bold" gutterBottom>
                            Likely Cause: {anomaly.likelihood}
                          </Typography>
                          <Typography variant="body2">
                            💡 {anomaly.recommendation}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {behavioralAnomalies.length === 0 && (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  No Anomalies Detected
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All behavioral patterns are within normal ranges. Your relationship is showing healthy, consistent patterns.
                </Typography>
              </Paper>
            )}
          </TabPanel>

          {/* Tab 6: Predictive Analysis */}
          <TabPanel value={activeTab} index={5}>
            <Grid container spacing={3}>
              {patternPredictions.map((prediction, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        {prediction.pattern}
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">Next 24 Hours</Typography>
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          {prediction.next24h}%
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" color="text.secondary">Next 7 Days</Typography>
                        <Typography variant="h4" color="success.main" fontWeight="bold">
                          {prediction.next7d}%
                        </Typography>
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Confidence: {prediction.confidence}%
                      </Typography>
                      
                      <Accordion sx={{ mt: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <Typography variant="body2" fontWeight="bold">
                            Influencing Factors
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {prediction.factors.map((factor, idx) => (
                            <Chip 
                              key={idx}
                              label={factor}
                              size="small"
                              sx={{ mr: 1, mb: 1 }}
                            />
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Card>

        {/* Pattern Detail Dialog */}
        <Dialog 
          open={patternDialogOpen} 
          onClose={() => setPatternDialogOpen(false)}
          maxWidth="md"
          fullWidth
        >
          {selectedPattern && (
            <>
              <DialogTitle>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {getTrendIcon(selectedPattern.trend)}
                  <Typography variant="h5">{selectedPattern.pattern}</Typography>
                </Box>
              </DialogTitle>
              <DialogContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Pattern Details</Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon><Schedule /></ListItemIcon>
                        <ListItemText 
                          primary="Timeframe" 
                          secondary={selectedPattern.timeframe}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><AccessTime /></ListItemIcon>
                        <ListItemText 
                          primary="Average Duration" 
                          secondary={selectedPattern.avgDuration}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><Reply /></ListItemIcon>
                        <ListItemText 
                          primary="Response Time" 
                          secondary={selectedPattern.responseTime}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon><Mood /></ListItemIcon>
                        <ListItemText 
                          primary="Sentiment Score" 
                          secondary={`${(selectedPattern.sentimentScore * 100).toFixed(1)}%`}
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Quality Metrics</Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2">Consistency: {selectedPattern.consistency}%</Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={selectedPattern.consistency}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2">Quality: {selectedPattern.quality}%</Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={selectedPattern.quality}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    
                    <Typography variant="body1" sx={{ mt: 2 }}>
                      {selectedPattern.description}
                    </Typography>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setPatternDialogOpen(false)}>
                  Close
                </Button>
                <Button variant="contained" startIcon={<Insights />}>
                  Get Recommendations
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
            Refresh Analysis
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Download />}
          >
            Export Patterns
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Share />}
          >
            Share Insights
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Settings />}
          >
            Configure Analysis
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BehavioralPatternAnalysis;

