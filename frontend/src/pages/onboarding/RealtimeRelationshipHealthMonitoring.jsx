import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
  FormControlLabel,
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
  CircularProgress,
  IconButton,
  Tooltip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';
import {
  MonitorHeart as HealthIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as StableIcon,
  Warning as WarningIcon,
  CheckCircle as HealthyIcon,
  Error as CriticalIcon,
  Info as InfoIcon,
  Analytics as AnalyticsIcon,
  Timeline as TimelineIcon,
  Assessment as AssessmentIcon,
  Notifications as AlertIcon,
  Psychology as AIIcon,
  Favorite as HeartIcon,
  Communication as CommunicationIcon,
  EmojiPeople as IntimacyIcon,
  Support as SupportIcon,
  Balance as BalanceIcon,
  Star as RatingIcon,
  Speed as PerformanceIcon,
  Security as TrustIcon,
  Celebration as HappinessIcon,
  Group as ConnectionIcon,
  Schedule as TimeIcon,
  Event as EventIcon,
  Refresh as RefreshIcon,
  Settings as SettingsIcon,
  Download as ExportIcon,
  Share as ShareIcon,
  Bookmark as SaveIcon,
  PlayArrow as StartIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Visibility as ViewIcon,
  VisibilityOff as HideIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  Search as SearchIcon,
  DateRange as CalendarIcon,
  Today as TodayIcon,
  History as HistoryIcon,
  Insights as InsightsIcon,
  AutoAwesome as SmartIcon,
  Lightbulb as RecommendationIcon,
  Flag as MilestoneIcon,
  EmojiEvents as AchievementIcon,
  LocalFireDepartment as StreakIcon,
  Bolt as EnergyIcon,
  Healing as RecoveryIcon,
  SelfImprovement as GrowthIcon,
  Transform as ChangeIcon,
  Update as UpdateIcon,
  Sync as SyncIcon,
  CloudDone as BackupIcon,
  Storage as DataIcon,
  Memory as ProcessingIcon,
  Cpu as ComputeIcon,
  NetworkCheck as ConnectivityIcon,
  Signal as SignalIcon,
  Battery as BatteryIcon,
  Power as PowerIcon
} from '@mui/icons-material';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const RealtimeRelationshipHealthMonitoring = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [monitoringActive, setMonitoringActive] = useState(true);
  const [healthData, setHealthData] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [trends, setTrends] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [selectedTimeRange, setSelectedTimeRange] = useState('7d');
  const [selectedMetrics, setSelectedMetrics] = useState(['overall', 'communication', 'intimacy', 'trust']);
  const [alertSettings, setAlertSettings] = useState({
    criticalThreshold: 30,
    warningThreshold: 60,
    enableNotifications: true,
    enableEmailAlerts: true,
    enableSMSAlerts: false
  });

  // Real-time health calculation algorithm
  const calculateHealthMetrics = useCallback(() => {
    const now = new Date();
    const timeOfDay = now.getHours();
    const dayOfWeek = now.getDay();
    const randomSeed = Math.sin(now.getTime() / 86400000) * 10000;
    
    // Simulate realistic relationship health patterns
    const baseHealth = 75 + Math.sin(randomSeed) * 15;
    const communicationHealth = Math.max(0, Math.min(100, baseHealth + Math.sin(randomSeed * 1.1) * 20));
    const intimacyHealth = Math.max(0, Math.min(100, baseHealth + Math.sin(randomSeed * 1.3) * 18));
    const trustHealth = Math.max(0, Math.min(100, baseHealth + Math.sin(randomSeed * 0.9) * 12));
    const supportHealth = Math.max(0, Math.min(100, baseHealth + Math.sin(randomSeed * 1.2) * 16));
    const balanceHealth = Math.max(0, Math.min(100, baseHealth + Math.sin(randomSeed * 0.8) * 14));
    const happinessHealth = Math.max(0, Math.min(100, baseHealth + Math.sin(randomSeed * 1.4) * 22));
    
    // Calculate overall health with weighted average
    const overallHealth = Math.round(
      (communicationHealth * 0.25 + 
       intimacyHealth * 0.20 + 
       trustHealth * 0.20 + 
       supportHealth * 0.15 + 
       balanceHealth * 0.10 + 
       happinessHealth * 0.10)
    );

    // Calculate stress indicators
    const stressLevel = Math.max(0, Math.min(100, 100 - overallHealth + Math.sin(randomSeed * 2) * 15));
    const conflictRisk = Math.max(0, Math.min(100, (100 - communicationHealth) * 0.8 + Math.sin(randomSeed * 1.5) * 10));
    const burnoutRisk = Math.max(0, Math.min(100, (100 - balanceHealth) * 0.9 + Math.sin(randomSeed * 1.7) * 12));

    return {
      overall: Math.round(overallHealth),
      communication: Math.round(communicationHealth),
      intimacy: Math.round(intimacyHealth),
      trust: Math.round(trustHealth),
      support: Math.round(supportHealth),
      balance: Math.round(balanceHealth),
      happiness: Math.round(happinessHealth),
      stress: Math.round(stressLevel),
      conflictRisk: Math.round(conflictRisk),
      burnoutRisk: Math.round(burnoutRisk),
      timestamp: now.toISOString(),
      dayOfWeek,
      timeOfDay
    };
  }, []);

  // Generate historical trend data
  const generateTrendData = useCallback((days = 30) => {
    const data = [];
    const now = new Date();
    
    for (let i = days; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const seed = Math.sin(date.getTime() / 86400000) * 10000;
      const baseHealth = 75 + Math.sin(seed) * 15;
      
      data.push({
        date: date.toISOString().split('T')[0],
        timestamp: date.getTime(),
        overall: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 0.7) * 10))),
        communication: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 1.1) * 20))),
        intimacy: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 1.3) * 18))),
        trust: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 0.9) * 12))),
        support: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 1.2) * 16))),
        balance: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 0.8) * 14))),
        happiness: Math.max(0, Math.min(100, Math.round(baseHealth + Math.sin(seed * 1.4) * 22)))
      });
    }
    
    return data;
  }, []);

  // AI-powered alert generation
  const generateAlerts = useCallback((currentHealth, previousHealth) => {
    const newAlerts = [];
    const now = new Date();
    
    // Critical health alerts
    if (currentHealth.overall < alertSettings.criticalThreshold) {
      newAlerts.push({
        id: `critical-${now.getTime()}`,
        type: 'critical',
        title: 'Critical Relationship Health Alert',
        message: `Overall relationship health has dropped to ${currentHealth.overall}%. Immediate attention recommended.`,
        timestamp: now.toISOString(),
        category: 'health',
        actionRequired: true,
        recommendations: [
          'Schedule emergency coaching session',
          'Initiate conflict resolution protocol',
          'Contact relationship expert'
        ]
      });
    }
    
    // Communication alerts
    if (currentHealth.communication < 50 && previousHealth.communication > 60) {
      newAlerts.push({
        id: `comm-${now.getTime()}`,
        type: 'warning',
        title: 'Communication Decline Detected',
        message: `Communication health dropped from ${previousHealth.communication}% to ${currentHealth.communication}%.`,
        timestamp: now.toISOString(),
        category: 'communication',
        actionRequired: true,
        recommendations: [
          'Practice active listening exercises',
          'Schedule daily check-ins',
          'Review communication patterns'
        ]
      });
    }
    
    // Trust alerts
    if (currentHealth.trust < 40) {
      newAlerts.push({
        id: `trust-${now.getTime()}`,
        type: 'critical',
        title: 'Trust Issues Detected',
        message: `Trust levels are critically low at ${currentHealth.trust}%.`,
        timestamp: now.toISOString(),
        category: 'trust',
        actionRequired: true,
        recommendations: [
          'Engage in trust-building exercises',
          'Consider couples therapy',
          'Practice transparency and honesty'
        ]
      });
    }
    
    // Positive alerts
    if (currentHealth.overall > 85 && previousHealth.overall < 80) {
      newAlerts.push({
        id: `positive-${now.getTime()}`,
        type: 'success',
        title: 'Relationship Health Improvement',
        message: `Great progress! Overall health improved to ${currentHealth.overall}%.`,
        timestamp: now.toISOString(),
        category: 'achievement',
        actionRequired: false,
        recommendations: [
          'Celebrate this milestone',
          'Continue current practices',
          'Set new relationship goals'
        ]
      });
    }
    
    return newAlerts;
  }, [alertSettings]);

  // AI recommendation engine
  const generateRecommendations = useCallback((healthData, trendData) => {
    const recommendations = [];
    const latestTrend = trendData.slice(-7); // Last 7 days
    
    // Communication recommendations
    if (healthData.communication < 70) {
      const trend = latestTrend.reduce((acc, day) => acc + day.communication, 0) / latestTrend.length;
      recommendations.push({
        id: 'comm-rec-1',
        category: 'communication',
        priority: healthData.communication < 50 ? 'high' : 'medium',
        title: 'Improve Communication Patterns',
        description: `Your communication health is at ${healthData.communication}%. Focus on active listening and expressing emotions clearly.`,
        actions: [
          'Practice daily 15-minute check-ins',
          'Use "I" statements when discussing concerns',
          'Schedule weekly relationship meetings',
          'Try the speaker-listener technique'
        ],
        expectedImprovement: '15-25% improvement in 2 weeks',
        timeCommitment: '30 minutes daily',
        difficulty: 'Easy'
      });
    }
    
    // Intimacy recommendations
    if (healthData.intimacy < 65) {
      recommendations.push({
        id: 'intimacy-rec-1',
        category: 'intimacy',
        priority: healthData.intimacy < 40 ? 'high' : 'medium',
        title: 'Enhance Emotional Intimacy',
        description: `Intimacy levels at ${healthData.intimacy}%. Focus on emotional connection and vulnerability.`,
        actions: [
          'Share daily gratitudes with each other',
          'Practice eye contact during conversations',
          'Plan regular date nights',
          'Engage in physical touch throughout the day'
        ],
        expectedImprovement: '20-30% improvement in 3 weeks',
        timeCommitment: '45 minutes daily',
        difficulty: 'Moderate'
      });
    }
    
    // Trust recommendations
    if (healthData.trust < 75) {
      recommendations.push({
        id: 'trust-rec-1',
        category: 'trust',
        priority: healthData.trust < 50 ? 'high' : 'medium',
        title: 'Rebuild Trust Foundation',
        description: `Trust levels at ${healthData.trust}%. Focus on consistency and transparency.`,
        actions: [
          'Keep all promises, no matter how small',
          'Share daily activities and feelings openly',
          'Address past trust issues directly',
          'Practice forgiveness exercises'
        ],
        expectedImprovement: '10-20% improvement in 4 weeks',
        timeCommitment: '20 minutes daily',
        difficulty: 'Challenging'
      });
    }
    
    // Stress management recommendations
    if (healthData.stress > 70) {
      recommendations.push({
        id: 'stress-rec-1',
        category: 'stress',
        priority: 'high',
        title: 'Manage Relationship Stress',
        description: `Stress levels are high at ${healthData.stress}%. Implement stress reduction strategies.`,
        actions: [
          'Practice mindfulness meditation together',
          'Create stress-free zones in your home',
          'Establish boundaries with external stressors',
          'Schedule regular relaxation activities'
        ],
        expectedImprovement: '25-35% stress reduction in 2 weeks',
        timeCommitment: '25 minutes daily',
        difficulty: 'Easy'
      });
    }
    
    return recommendations.slice(0, 4); // Return top 4 recommendations
  }, []);

  // Real-time monitoring effect
  useEffect(() => {
    if (!monitoringActive) return;
    
    const updateHealth = () => {
      const previousHealth = healthData;
      const newHealth = calculateHealthMetrics();
      setHealthData(newHealth);
      setLastUpdate(new Date());
      
      // Generate alerts if we have previous data
      if (Object.keys(previousHealth).length > 0) {
        const newAlerts = generateAlerts(newHealth, previousHealth);
        if (newAlerts.length > 0) {
          setAlerts(prev => [...newAlerts, ...prev].slice(0, 20)); // Keep last 20 alerts
        }
      }
    };
    
    // Initial update
    updateHealth();
    
    // Set up real-time updates every 30 seconds
    const interval = setInterval(updateHealth, 30000);
    
    return () => clearInterval(interval);
  }, [monitoringActive, calculateHealthMetrics, generateAlerts, healthData]);

  // Generate trends and recommendations when health data changes
  useEffect(() => {
    if (Object.keys(healthData).length > 0) {
      const trendData = generateTrendData(30);
      setTrends(trendData);
      
      const newRecommendations = generateRecommendations(healthData, trendData);
      setRecommendations(newRecommendations);
    }
  }, [healthData, generateTrendData, generateRecommendations]);

  // Health status calculation
  const getHealthStatus = (score) => {
    if (score >= 80) return { status: 'Excellent', color: 'success', icon: HealthyIcon };
    if (score >= 60) return { status: 'Good', color: 'info', icon: InfoIcon };
    if (score >= 40) return { status: 'Fair', color: 'warning', icon: WarningIcon };
    return { status: 'Poor', color: 'error', icon: CriticalIcon };
  };

  // Trend calculation
  const getTrend = (current, previous) => {
    if (!previous) return { trend: 'stable', icon: StableIcon, color: 'info' };
    const diff = current - previous;
    if (diff > 5) return { trend: 'improving', icon: TrendingUpIcon, color: 'success' };
    if (diff < -5) return { trend: 'declining', icon: TrendingDownIcon, color: 'error' };
    return { trend: 'stable', icon: StableIcon, color: 'info' };
  };

  // Chart colors
  const chartColors = {
    overall: '#1976d2',
    communication: '#2e7d32',
    intimacy: '#d32f2f',
    trust: '#ed6c02',
    support: '#9c27b0',
    balance: '#00796b',
    happiness: '#f57c00'
  };

  const renderHealthDashboard = () => {
    const healthMetrics = [
      { key: 'overall', label: 'Overall Health', icon: HealthIcon, value: healthData.overall || 0 },
      { key: 'communication', label: 'Communication', icon: CommunicationIcon, value: healthData.communication || 0 },
      { key: 'intimacy', label: 'Intimacy', icon: IntimacyIcon, value: healthData.intimacy || 0 },
      { key: 'trust', label: 'Trust', icon: TrustIcon, value: healthData.trust || 0 },
      { key: 'support', label: 'Support', icon: SupportIcon, value: healthData.support || 0 },
      { key: 'balance', label: 'Balance', icon: BalanceIcon, value: healthData.balance || 0 },
      { key: 'happiness', label: 'Happiness', icon: HappinessIcon, value: healthData.happiness || 0 }
    ];

    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <HealthIcon color="primary" />
            Real-time Health Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={monitoringActive}
                  onChange={(e) => setMonitoringActive(e.target.checked)}
                />
              }
              label="Live Monitoring"
            />
            <Typography variant="body2" color="text.secondary">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </Typography>
            <IconButton onClick={() => window.location.reload()} size="small">
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>

        <Alert severity={healthData.overall >= 70 ? 'success' : healthData.overall >= 50 ? 'warning' : 'error'} sx={{ mb: 3 }}>
          {healthData.overall >= 70 
            ? `Excellent! Your relationship health is strong at ${healthData.overall}%. Keep up the great work!`
            : healthData.overall >= 50
            ? `Your relationship health is at ${healthData.overall}%. There's room for improvement with focused effort.`
            : `Your relationship health needs attention at ${healthData.overall}%. Consider immediate action and professional support.`
          }
        </Alert>

        <Grid container spacing={3}>
          {healthMetrics.map((metric) => {
            const status = getHealthStatus(metric.value);
            const StatusIcon = status.icon;
            
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={metric.key}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <metric.icon sx={{ color: chartColors[metric.key], fontSize: 30 }} />
                      <StatusIcon sx={{ color: `${status.color}.main` }} />
                    </Box>
                    
                    <Typography variant="h4" sx={{ fontWeight: 700, color: chartColors[metric.key], mb: 1 }}>
                      {metric.value}%
                    </Typography>
                    
                    <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                      {metric.label}
                    </Typography>
                    
                    <LinearProgress
                      variant="determinate"
                      value={metric.value}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4, 
                        mb: 1,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: chartColors[metric.key]
                        }
                      }}
                    />
                    
                    <Typography variant="body2" color="text.secondary">
                      {status.status}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {/* Risk Indicators */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <WarningIcon color="warning" />
            Risk Indicators
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                    Stress Level
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CircularProgress
                      variant="determinate"
                      value={healthData.stress || 0}
                      size={60}
                      thickness={6}
                      sx={{ color: healthData.stress > 70 ? 'error.main' : healthData.stress > 50 ? 'warning.main' : 'success.main' }}
                    />
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {healthData.stress || 0}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {healthData.stress > 70 ? 'High' : healthData.stress > 50 ? 'Moderate' : 'Low'}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                    Conflict Risk
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CircularProgress
                      variant="determinate"
                      value={healthData.conflictRisk || 0}
                      size={60}
                      thickness={6}
                      sx={{ color: healthData.conflictRisk > 70 ? 'error.main' : healthData.conflictRisk > 50 ? 'warning.main' : 'success.main' }}
                    />
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {healthData.conflictRisk || 0}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {healthData.conflictRisk > 70 ? 'High' : healthData.conflictRisk > 50 ? 'Moderate' : 'Low'}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                    Burnout Risk
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <CircularProgress
                      variant="determinate"
                      value={healthData.burnoutRisk || 0}
                      size={60}
                      thickness={6}
                      sx={{ color: healthData.burnoutRisk > 70 ? 'error.main' : healthData.burnoutRisk > 50 ? 'warning.main' : 'success.main' }}
                    />
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {healthData.burnoutRisk || 0}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {healthData.burnoutRisk > 70 ? 'High' : healthData.burnoutRisk > 50 ? 'Moderate' : 'Low'}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  };

  const renderTrendsAnalysis = () => {
    const filteredTrends = useMemo(() => {
      const days = selectedTimeRange === '7d' ? 7 : selectedTimeRange === '30d' ? 30 : 90;
      return trends.slice(-days);
    }, [trends, selectedTimeRange]);

    return (
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TimelineIcon color="primary" />
            Trends Analysis
          </Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              label="Time Range"
            >
              <MenuItem value="7d">Last 7 Days</MenuItem>
              <MenuItem value="30d">Last 30 Days</MenuItem>
              <MenuItem value="90d">Last 90 Days</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Health Trends Over Time
                </Typography>
                <Box sx={{ height: 400, mt: 2 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={filteredTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(value) => new Date(value).toLocaleDateString()}
                      />
                      <YAxis domain={[0, 100]} />
                      <RechartsTooltip 
                        labelFormatter={(value) => new Date(value).toLocaleDateString()}
                        formatter={(value, name) => [`${value}%`, name]}
                      />
                      <Legend />
                      {selectedMetrics.includes('overall') && (
                        <Line 
                          type="monotone" 
                          dataKey="overall" 
                          stroke={chartColors.overall} 
                          strokeWidth={3}
                          name="Overall Health"
                        />
                      )}
                      {selectedMetrics.includes('communication') && (
                        <Line 
                          type="monotone" 
                          dataKey="communication" 
                          stroke={chartColors.communication} 
                          strokeWidth={2}
                          name="Communication"
                        />
                      )}
                      {selectedMetrics.includes('intimacy') && (
                        <Line 
                          type="monotone" 
                          dataKey="intimacy" 
                          stroke={chartColors.intimacy} 
                          strokeWidth={2}
                          name="Intimacy"
                        />
                      )}
                      {selectedMetrics.includes('trust') && (
                        <Line 
                          type="monotone" 
                          dataKey="trust" 
                          stroke={chartColors.trust} 
                          strokeWidth={2}
                          name="Trust"
                        />
                      )}
                    </LineChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Health Distribution
                </Typography>
                <Box sx={{ height: 300, mt: 2 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Communication', value: healthData.communication || 0, fill: chartColors.communication },
                          { name: 'Intimacy', value: healthData.intimacy || 0, fill: chartColors.intimacy },
                          { name: 'Trust', value: healthData.trust || 0, fill: chartColors.trust },
                          { name: 'Support', value: healthData.support || 0, fill: chartColors.support },
                          { name: 'Balance', value: healthData.balance || 0, fill: chartColors.balance },
                          { name: 'Happiness', value: healthData.happiness || 0, fill: chartColors.happiness }
                        ]}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      />
                      <RechartsTooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Weekly Performance
                </Typography>
                <Box sx={{ height: 300, mt: 2 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={filteredTrends.slice(-7)}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { weekday: 'short' })}
                      />
                      <YAxis domain={[0, 100]} />
                      <RechartsTooltip 
                        labelFormatter={(value) => new Date(value).toLocaleDateString()}
                        formatter={(value) => `${value}%`}
                      />
                      <Bar dataKey="overall" fill={chartColors.overall} name="Overall Health" />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderAlertsNotifications = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AlertIcon color="primary" />
        Alerts & Notifications
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        Real-time alerts help you stay informed about your relationship health changes and take proactive action when needed.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Recent Alerts ({alerts.length})
              </Typography>
              
              {alerts.length === 0 ? (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <HealthyIcon sx={{ fontSize: 60, color: 'success.main', mb: 2 }} />
                  <Typography variant="h6" color="success.main" gutterBottom>
                    All Good!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    No alerts at this time. Your relationship health is being monitored.
                  </Typography>
                </Box>
              ) : (
                <List>
                  {alerts.slice(0, 10).map((alert) => {
                    const AlertIcon = alert.type === 'critical' ? CriticalIcon : 
                                    alert.type === 'warning' ? WarningIcon :
                                    alert.type === 'success' ? HealthyIcon : InfoIcon;
                    
                    return (
                      <ListItem key={alert.id} divider>
                        <ListItemIcon>
                          <AlertIcon color={alert.type === 'critical' ? 'error' : 
                                          alert.type === 'warning' ? 'warning' :
                                          alert.type === 'success' ? 'success' : 'info'} />
                        </ListItemIcon>
                        <ListItemText
                          primary={alert.title}
                          secondary={
                            <Box>
                              <Typography variant="body2" sx={{ mb: 1 }}>
                                {alert.message}
                              </Typography>
                              <Typography variant="caption" color="text.secondary">
                                {new Date(alert.timestamp).toLocaleString()}
                              </Typography>
                              {alert.actionRequired && (
                                <Chip 
                                  label="Action Required" 
                                  size="small" 
                                  color="warning" 
                                  sx={{ ml: 1 }}
                                />
                              )}
                            </Box>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Alert Settings
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  Critical Threshold: {alertSettings.criticalThreshold}%
                </Typography>
                <Slider
                  value={alertSettings.criticalThreshold}
                  onChange={(e, value) => setAlertSettings(prev => ({ ...prev, criticalThreshold: value }))}
                  min={10}
                  max={50}
                  marks={[
                    { value: 10, label: '10%' },
                    { value: 30, label: '30%' },
                    { value: 50, label: '50%' }
                  ]}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  Warning Threshold: {alertSettings.warningThreshold}%
                </Typography>
                <Slider
                  value={alertSettings.warningThreshold}
                  onChange={(e, value) => setAlertSettings(prev => ({ ...prev, warningThreshold: value }))}
                  min={40}
                  max={80}
                  marks={[
                    { value: 40, label: '40%' },
                    { value: 60, label: '60%' },
                    { value: 80, label: '80%' }
                  ]}
                />
              </Box>

              <FormControlLabel
                control={
                  <Switch
                    checked={alertSettings.enableNotifications}
                    onChange={(e) => setAlertSettings(prev => ({ ...prev, enableNotifications: e.target.checked }))}
                  />
                }
                label="Push Notifications"
                sx={{ display: 'block', mb: 1 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={alertSettings.enableEmailAlerts}
                    onChange={(e) => setAlertSettings(prev => ({ ...prev, enableEmailAlerts: e.target.checked }))}
                  />
                }
                label="Email Alerts"
                sx={{ display: 'block', mb: 1 }}
              />
              
              <FormControlLabel
                control={
                  <Switch
                    checked={alertSettings.enableSMSAlerts}
                    onChange={(e) => setAlertSettings(prev => ({ ...prev, enableSMSAlerts: e.target.checked }))}
                  />
                }
                label="SMS Alerts"
                sx={{ display: 'block' }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAIRecommendations = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AIIcon color="primary" />
        AI-Powered Recommendations
      </Typography>

      <Alert severity="success" sx={{ mb: 3 }}>
        Dr. Flourish AI analyzes your relationship health patterns and provides personalized recommendations for improvement.
      </Alert>

      <Grid container spacing={3}>
        {recommendations.map((rec) => (
          <Grid item xs={12} md={6} key={rec.id}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {rec.title}
                  </Typography>
                  <Chip 
                    label={rec.priority} 
                    color={rec.priority === 'high' ? 'error' : rec.priority === 'medium' ? 'warning' : 'info'}
                    size="small"
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {rec.description}
                </Typography>
                
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                  Recommended Actions:
                </Typography>
                <List dense>
                  {rec.actions.map((action, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <RecommendationIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={action} />
                    </ListItem>
                  ))}
                </List>
                
                <Divider sx={{ my: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Expected Improvement:</strong> {rec.expectedImprovement}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Time:</strong> {rec.timeCommitment}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Difficulty:</strong> {rec.difficulty}
                    </Typography>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button variant="contained" size="small" startIcon={<StartIcon />}>
                    Start Program
                  </Button>
                  <Button variant="outlined" size="small" startIcon={<SaveIcon />}>
                    Save for Later
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {recommendations.length === 0 && (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <SmartIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Analyzing Your Relationship Health
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Dr. Flourish AI is processing your health data to generate personalized recommendations. 
              Check back in a few minutes for tailored guidance.
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          💓 Real-time Relationship Health Monitoring
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Monitor your relationship health in real-time with AI-powered analytics, trend analysis, 
          intelligent alerts, and personalized recommendations for continuous improvement.
        </Typography>

        {/* Health Status Banner */}
        <Card sx={{ 
          mb: 4, 
          background: healthData.overall >= 70 
            ? 'linear-gradient(135deg, #4caf50 0%, #81c784 100%)' 
            : healthData.overall >= 50
            ? 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)'
            : 'linear-gradient(135deg, #f44336 0%, #ef5350 100%)', 
          color: 'white' 
        }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {healthData.overall || 0}%
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Overall Health Score
                  </Typography>
                  <Chip 
                    label={monitoringActive ? 'Live Monitoring' : 'Monitoring Paused'} 
                    sx={{ 
                      mt: 1, 
                      bgcolor: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      fontWeight: 600 
                    }} 
                    icon={monitoringActive ? <SignalIcon /> : <PauseIcon />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {healthData.communication || 0}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Communication
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {healthData.intimacy || 0}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Intimacy
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {healthData.trust || 0}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Trust
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {healthData.stress || 0}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Stress Level
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {alerts.length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Active Alerts
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={2}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {recommendations.length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Recommendations
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
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
            label="Health Dashboard" 
            icon={<HealthIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Trends Analysis" 
            icon={<TimelineIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Alerts & Notifications" 
            icon={<AlertIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="AI Recommendations" 
            icon={<AIIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderHealthDashboard()}
          {activeTab === 1 && renderTrendsAnalysis()}
          {activeTab === 2 && renderAlertsNotifications()}
          {activeTab === 3 && renderAIRecommendations()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<ExportIcon />}
          >
            Export Report
          </Button>
          <Button
            variant="outlined"
            startIcon={<ShareIcon />}
          >
            Share with Partner
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large" startIcon={<SettingsIcon />}>
            Monitoring Settings
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<StartIcon />}
            sx={{ minWidth: 200 }}
          >
            Start Health Assessment
          </Button>
        </Box>
      </Box>

      {/* Status Footer */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Monitoring Status: {monitoringActive ? 'Active' : 'Paused'} | 
          Last Health Update: {lastUpdate.toLocaleString()} | 
          Data Points: {trends.length}
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={healthData.overall || 0} 
          sx={{ height: 6, borderRadius: 3, mt: 1 }}
          color={healthData.overall >= 70 ? 'success' : healthData.overall >= 50 ? 'warning' : 'error'}
        />
      </Box>
    </Container>
  );
};

export default RealtimeRelationshipHealthMonitoring;

