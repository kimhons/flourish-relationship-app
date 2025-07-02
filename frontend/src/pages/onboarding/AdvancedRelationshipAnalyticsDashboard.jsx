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
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Analytics,
  TrendingUp,
  TrendingDown,
  Favorite,
  Psychology,
  Timeline,
  Assessment,
  Insights,
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
  FiberManualRecord
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
  Scatter
} from 'recharts';

const AdvancedRelationshipAnalyticsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState('30d');
  const [viewMode, setViewMode] = useState('overview');
  const [realTimeEnabled, setRealTimeEnabled] = useState(true);
  const [selectedMetrics, setSelectedMetrics] = useState(['all']);
  const [alertsEnabled, setAlertsEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [dashboardLayout, setDashboardLayout] = useState('grid');

  // Real-time relationship metrics data
  const relationshipMetrics = {
    overallHealth: 87.5,
    communicationScore: 92.3,
    intimacyLevel: 84.7,
    conflictResolution: 78.9,
    trustLevel: 95.2,
    compatibilityScore: 89.6,
    growthPotential: 91.4,
    satisfactionLevel: 88.8
  };

  // Trend data for charts
  const trendData = [
    { date: '2025-06-01', health: 82, communication: 85, intimacy: 80, trust: 90 },
    { date: '2025-06-08', health: 84, communication: 87, intimacy: 82, trust: 92 },
    { date: '2025-06-15', health: 86, communication: 89, intimacy: 84, trust: 94 },
    { date: '2025-06-22', health: 85, communication: 91, intimacy: 83, trust: 95 },
    { date: '2025-06-29', health: 87, communication: 92, intimacy: 85, trust: 95 },
    { date: '2025-07-06', health: 88, communication: 93, intimacy: 86, trust: 96 }
  ];

  // Communication patterns data
  const communicationData = [
    { type: 'Text Messages', count: 1247, sentiment: 0.85, frequency: 'High' },
    { type: 'Voice Calls', count: 89, sentiment: 0.92, frequency: 'Medium' },
    { type: 'Video Calls', count: 34, sentiment: 0.96, frequency: 'Low' },
    { type: 'In-Person', count: 156, sentiment: 0.94, frequency: 'High' },
    { type: 'Email', count: 23, sentiment: 0.78, frequency: 'Low' }
  ];

  // Behavioral insights
  const behavioralInsights = [
    {
      category: 'Communication Patterns',
      insight: 'Increased video call frequency correlates with 15% higher satisfaction',
      impact: 'High',
      recommendation: 'Schedule more video dates',
      confidence: 94
    },
    {
      category: 'Conflict Resolution',
      insight: 'Response time under 2 hours leads to better resolution outcomes',
      impact: 'Medium',
      recommendation: 'Implement quick response protocols',
      confidence: 87
    },
    {
      category: 'Intimacy Patterns',
      insight: 'Physical touch frequency strongly predicts relationship satisfaction',
      impact: 'High',
      recommendation: 'Focus on physical affection activities',
      confidence: 91
    },
    {
      category: 'Growth Opportunities',
      insight: 'Shared goal-setting activities boost long-term compatibility',
      impact: 'Medium',
      recommendation: 'Create monthly goal-setting sessions',
      confidence: 89
    }
  ];

  // Predictive analytics data
  const predictiveMetrics = {
    relationshipStability: {
      current: 89.2,
      predicted3Month: 91.5,
      predicted6Month: 93.1,
      predicted1Year: 94.7,
      confidence: 87
    },
    breakupRisk: {
      current: 8.3,
      factors: ['Communication gaps', 'Decreased intimacy', 'External stress'],
      mitigation: ['Couples therapy', 'Date night scheduling', 'Stress management']
    },
    growthPotential: {
      areas: ['Emotional intelligence', 'Conflict resolution', 'Shared activities'],
      timeline: '3-6 months',
      expectedImprovement: 12.5
    }
  };

  // Real-time alerts
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'warning',
      title: 'Communication Gap Detected',
      message: 'No meaningful conversation in the last 48 hours',
      timestamp: '2 hours ago',
      priority: 'medium',
      actionable: true
    },
    {
      id: 2,
      type: 'success',
      title: 'Intimacy Score Improved',
      message: 'Physical affection increased by 23% this week',
      timestamp: '6 hours ago',
      priority: 'low',
      actionable: false
    },
    {
      id: 3,
      type: 'info',
      title: 'Milestone Achievement',
      message: 'Completed 30 days of consistent check-ins',
      timestamp: '1 day ago',
      priority: 'low',
      actionable: false
    }
  ]);

  // Performance tracking data
  const performanceData = [
    { metric: 'Daily Check-ins', current: 28, target: 30, percentage: 93.3 },
    { metric: 'Quality Time Hours', current: 42, target: 35, percentage: 120 },
    { metric: 'Conflict Resolution', current: 8, target: 10, percentage: 80 },
    { metric: 'Shared Activities', current: 15, target: 12, percentage: 125 },
    { metric: 'Emotional Support', current: 94, target: 85, percentage: 110.6 }
  ];

  // Compatibility breakdown
  const compatibilityData = [
    { name: 'Values Alignment', value: 95, color: '#4CAF50' },
    { name: 'Communication Style', value: 88, color: '#2196F3' },
    { name: 'Life Goals', value: 92, color: '#FF9800' },
    { name: 'Intimacy Preferences', value: 85, color: '#9C27B0' },
    { name: 'Conflict Resolution', value: 79, color: '#F44336' },
    { name: 'Social Compatibility', value: 91, color: '#00BCD4' }
  ];

  useEffect(() => {
    // Simulate real-time data updates
    if (realTimeEnabled && autoRefresh) {
      const interval = setInterval(() => {
        // Update metrics with small random variations
        // This would be replaced with actual API calls in production
      }, 30000); // Update every 30 seconds

      return () => clearInterval(interval);
    }
  }, [realTimeEnabled, autoRefresh]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  const handleViewModeChange = (event, newMode) => {
    if (newMode !== null) {
      setViewMode(newMode);
    }
  };

  const getHealthColor = (score) => {
    if (score >= 90) return '#4CAF50';
    if (score >= 80) return '#8BC34A';
    if (score >= 70) return '#FFC107';
    if (score >= 60) return '#FF9800';
    return '#F44336';
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return <Warning color="warning" />;
      case 'success': return <CheckCircle color="success" />;
      case 'info': return <Info color="info" />;
      default: return <Info />;
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
                    <Analytics sx={{ mr: 2, verticalAlign: 'middle' }} />
                    Advanced Relationship Analytics
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Real-time insights and predictive analytics for relationship optimization
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <FormControlLabel
                    control={
                      <Switch 
                        checked={realTimeEnabled} 
                        onChange={(e) => setRealTimeEnabled(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Real-time Updates"
                  />
                  
                  <FormControl size="small" sx={{ minWidth: 120 }}>
                    <InputLabel>Time Range</InputLabel>
                    <Select value={timeRange} onChange={handleTimeRangeChange} label="Time Range">
                      <MenuItem value="7d">Last 7 days</MenuItem>
                      <MenuItem value="30d">Last 30 days</MenuItem>
                      <MenuItem value="90d">Last 3 months</MenuItem>
                      <MenuItem value="1y">Last year</MenuItem>
                    </Select>
                  </FormControl>
                  
                  <ToggleButtonGroup
                    value={viewMode}
                    exclusive
                    onChange={handleViewModeChange}
                    size="small"
                  >
                    <ToggleButton value="overview">
                      <Dashboard />
                    </ToggleButton>
                    <ToggleButton value="detailed">
                      <TableChart />
                    </ToggleButton>
                    <ToggleButton value="charts">
                      <ShowChart />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
              </Box>

              {/* Real-time Status Indicators */}
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FiberManualRecord 
                      sx={{ 
                        color: realTimeEnabled ? '#4CAF50' : '#757575',
                        fontSize: 12
                      }} 
                    />
                  </motion.div>
                  <Typography variant="body2">
                    {realTimeEnabled ? 'Live Data' : 'Static Data'}
                  </Typography>
                </Box>
                
                <Divider orientation="vertical" flexItem />
                
                <Typography variant="body2" color="text.secondary">
                  Last updated: {new Date().toLocaleTimeString()}
                </Typography>
                
                <Divider orientation="vertical" flexItem />
                
                <Chip 
                  icon={<Bolt />} 
                  label="AI-Powered" 
                  color="primary" 
                  size="small"
                />
              </Box>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Dashboard Content */}
        <Card>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab icon={<Dashboard />} label="Overview" />
            <Tab icon={<TrendingUp />} label="Trends & Patterns" />
            <Tab icon={<Psychology />} label="Behavioral Insights" />
            <Tab icon={<Assessment />} label="Predictive Analytics" />
            <Tab icon={<Notifications />} label="Real-time Alerts" />
            <Tab icon={<Leaderboard />} label="Performance Tracking" />
          </Tabs>

          {/* Tab 1: Overview Dashboard */}
          <TabPanel value={activeTab} index={0}>
            <Grid container spacing={3}>
              {/* Key Metrics Cards */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  {Object.entries(relationshipMetrics).map(([key, value], index) => (
                    <Grid item xs={6} md={3} key={key}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card sx={{ textAlign: 'center', height: '100%' }}>
                          <CardContent>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                            </Typography>
                            <Typography 
                              variant="h4" 
                              sx={{ color: getHealthColor(value), fontWeight: 'bold' }}
                            >
                              {value}%
                            </Typography>
                            <LinearProgress 
                              variant="determinate" 
                              value={value} 
                              sx={{ 
                                mt: 1,
                                height: 6,
                                borderRadius: 3,
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: getHealthColor(value)
                                }
                              }}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Overall Health Score */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                      Overall Relationship Health
                    </Typography>
                    
                    <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, ease: "easeInOut" }}
                      >
                        <Avatar 
                          sx={{ 
                            width: 120, 
                            height: 120, 
                            bgcolor: getHealthColor(relationshipMetrics.overallHealth),
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                          }}
                        >
                          {relationshipMetrics.overallHealth}%
                        </Avatar>
                      </motion.div>
                    </Box>
                    
                    <Typography variant="h6" color="success.main" fontWeight="bold" gutterBottom>
                      EXCELLENT
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary">
                      Your relationship is thriving with strong fundamentals
                    </Typography>

                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
                      <Chip icon={<TrendingUp />} label="+2.3% this week" color="success" size="small" />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Trend Chart */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Relationship Health Trends
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="health" 
                          stroke="#4CAF50" 
                          strokeWidth={3}
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
                          stroke="#FF9800" 
                          strokeWidth={2}
                          name="Intimacy"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="trust" 
                          stroke="#9C27B0" 
                          strokeWidth={2}
                          name="Trust"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 2: Trends & Patterns */}
          <TabPanel value={activeTab} index={1}>
            <Grid container spacing={3}>
              {/* Communication Patterns */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Communication Patterns
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <RechartsBarChart data={communicationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis />
                        <RechartsTooltip />
                        <Bar dataKey="count" fill="#2196F3" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Compatibility Breakdown */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Compatibility Breakdown
                    </Typography>
                    
                    <ResponsiveContainer width="100%" height={300}>
                      <RadarChart data={compatibilityData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} />
                        <Radar
                          name="Compatibility"
                          dataKey="value"
                          stroke="#4CAF50"
                          fill="#4CAF50"
                          fillOpacity={0.3}
                          strokeWidth={2}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </Grid>

              {/* Detailed Metrics Table */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Detailed Communication Analysis
                    </Typography>
                    
                    <List>
                      {communicationData.map((item, index) => (
                        <ListItem key={index} divider>
                          <ListItemIcon>
                            {item.type === 'Text Messages' && <Message />}
                            {item.type === 'Voice Calls' && <Phone />}
                            {item.type === 'Video Calls' && <VideoCall />}
                            {item.type === 'In-Person' && <Person />}
                            {item.type === 'Email' && <Email />}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.type}
                            secondary={`${item.count} interactions • ${(item.sentiment * 100).toFixed(1)}% positive sentiment`}
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Chip 
                              label={item.frequency} 
                              size="small"
                              color={item.frequency === 'High' ? 'success' : item.frequency === 'Medium' ? 'warning' : 'default'}
                            />
                            <Typography variant="h6" color="primary">
                              {(item.sentiment * 100).toFixed(0)}%
                            </Typography>
                          </Box>
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 3: Behavioral Insights */}
          <TabPanel value={activeTab} index={2}>
            <Grid container spacing={3}>
              {behavioralInsights.map((insight, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6">
                            {insight.category}
                          </Typography>
                          <Chip 
                            label={`${insight.confidence}% confidence`}
                            color="primary"
                            size="small"
                          />
                        </Box>
                        
                        <Typography variant="body1" gutterBottom>
                          {insight.insight}
                        </Typography>
                        
                        <Box sx={{ mt: 2, mb: 2 }}>
                          <Chip 
                            label={`${insight.impact} Impact`}
                            color={insight.impact === 'High' ? 'error' : insight.impact === 'Medium' ? 'warning' : 'success'}
                            size="small"
                          />
                        </Box>
                        
                        <Paper sx={{ p: 2, bgcolor: '#f5f5f5' }}>
                          <Typography variant="body2" fontWeight="bold" gutterBottom>
                            Recommendation:
                          </Typography>
                          <Typography variant="body2">
                            {insight.recommendation}
                          </Typography>
                        </Paper>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 4: Predictive Analytics */}
          <TabPanel value={activeTab} index={3}>
            <Grid container spacing={3}>
              {/* Relationship Stability Prediction */}
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Relationship Stability Prediction
                    </Typography>
                    
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={3}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary">Current</Typography>
                          <Typography variant="h5" color="primary" fontWeight="bold">
                            {predictiveMetrics.relationshipStability.current}%
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary">3 Months</Typography>
                          <Typography variant="h5" color="success.main" fontWeight="bold">
                            {predictiveMetrics.relationshipStability.predicted3Month}%
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary">6 Months</Typography>
                          <Typography variant="h5" color="success.main" fontWeight="bold">
                            {predictiveMetrics.relationshipStability.predicted6Month}%
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={3}>
                        <Paper sx={{ p: 2, textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary">1 Year</Typography>
                          <Typography variant="h5" color="success.main" fontWeight="bold">
                            {predictiveMetrics.relationshipStability.predicted1Year}%
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>

                    <Typography variant="body2" color="text.secondary">
                      Prediction confidence: {predictiveMetrics.relationshipStability.confidence}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Risk Assessment */}
              <Grid item xs={12} md={4}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Risk Assessment
                    </Typography>
                    
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography variant="h3" color="success.main" fontWeight="bold">
                        {predictiveMetrics.breakupRisk.current}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Breakup Risk
                      </Typography>
                    </Box>
                    
                    <Typography variant="body2" fontWeight="bold" gutterBottom>
                      Risk Factors:
                    </Typography>
                    {predictiveMetrics.breakupRisk.factors.map((factor, index) => (
                      <Chip 
                        key={index}
                        label={factor}
                        size="small"
                        color="warning"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </CardContent>
                </Card>
              </Grid>

              {/* Growth Potential */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Growth Potential Analysis
                    </Typography>
                    
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Typography variant="body2" fontWeight="bold" gutterBottom>
                          Growth Areas:
                        </Typography>
                        {predictiveMetrics.growthPotential.areas.map((area, index) => (
                          <Chip 
                            key={index}
                            label={area}
                            color="primary"
                            sx={{ mr: 1, mb: 1 }}
                          />
                        ))}
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="body2" fontWeight="bold" gutterBottom>
                          Expected Timeline:
                        </Typography>
                        <Typography variant="h5" color="primary">
                          {predictiveMetrics.growthPotential.timeline}
                        </Typography>
                      </Grid>
                      
                      <Grid item xs={12} md={4}>
                        <Typography variant="body2" fontWeight="bold" gutterBottom>
                          Expected Improvement:
                        </Typography>
                        <Typography variant="h5" color="success.main">
                          +{predictiveMetrics.growthPotential.expectedImprovement}%
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          {/* Tab 5: Real-time Alerts */}
          <TabPanel value={activeTab} index={4}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                Active Alerts & Notifications
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
              {alerts.map((alert) => (
                <Grid item xs={12} key={alert.id}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card sx={{ 
                      border: alert.priority === 'high' ? '2px solid #f44336' : 
                             alert.priority === 'medium' ? '2px solid #ff9800' : '1px solid #e0e0e0'
                    }}>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          {getAlertIcon(alert.type)}
                          
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" gutterBottom>
                              {alert.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {alert.message}
                            </Typography>
                          </Box>
                          
                          <Box sx={{ textAlign: 'right' }}>
                            <Typography variant="body2" color="text.secondary">
                              {alert.timestamp}
                            </Typography>
                            <Chip 
                              label={alert.priority}
                              size="small"
                              color={alert.priority === 'high' ? 'error' : 
                                     alert.priority === 'medium' ? 'warning' : 'default'}
                              sx={{ mt: 1 }}
                            />
                          </Box>
                          
                          {alert.actionable && (
                            <Button variant="outlined" size="small">
                              Take Action
                            </Button>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </TabPanel>

          {/* Tab 6: Performance Tracking */}
          <TabPanel value={activeTab} index={5}>
            <Grid container spacing={3}>
              {performanceData.map((item, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card>
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        {item.metric}
                      </Typography>
                      
                      <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
                        {item.current}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        Target: {item.target}
                      </Typography>
                      
                      <LinearProgress 
                        variant="determinate" 
                        value={Math.min(item.percentage, 100)}
                        sx={{ 
                          mb: 2,
                          height: 8,
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: item.percentage >= 100 ? '#4CAF50' : 
                                           item.percentage >= 80 ? '#2196F3' : '#FF9800'
                          }
                        }}
                      />
                      
                      <Chip 
                        label={`${item.percentage.toFixed(1)}%`}
                        color={item.percentage >= 100 ? 'success' : 
                               item.percentage >= 80 ? 'primary' : 'warning'}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Card>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4 }}>
          <Button 
            variant="contained" 
            startIcon={<Refresh />}
            onClick={() => window.location.reload()}
          >
            Refresh Data
          </Button>
          <Button 
            variant="outlined" 
            startIcon={<Download />}
          >
            Export Report
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
            Configure Dashboard
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdvancedRelationshipAnalyticsDashboard;

