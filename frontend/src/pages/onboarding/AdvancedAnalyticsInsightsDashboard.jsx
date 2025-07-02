import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
  FormControlLabel,
  Slider,
  Button,
  Tabs,
  Tab,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Alert,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Rating,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stepper,
  Step,
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
  Dashboard as DashboardIcon,
  Assessment as ReportsIcon,
  Psychology as BehaviorIcon,
  Favorite as RelationshipIcon,
  Groups as CommunityIcon,
  Message as CommunicationIcon,
  Notifications as NotificationIcon,
  Security as SecurityIcon,
  Speed as PerformanceIcon,
  Accessibility as AccessibilityIcon,
  Star as RatingIcon,
  EmojiEvents as AchievementIcon,
  Timeline as TimelineIcon,
  BarChart as ChartIcon,
  PieChart as PieChartIcon,
  ShowChart as LineChartIcon,
  DonutLarge as DonutChartIcon,
  DataUsage as DataIcon,
  FilterList as FilterIcon,
  DateRange as DateRangeIcon,
  Refresh as RefreshIcon,
  Download as ExportIcon,
  Share as ShareIcon,
  Print as PrintIcon,
  Email as EmailIcon,
  CloudDownload as CloudIcon,
  Visibility as ViewIcon,
  VisibilityOff as HideIcon,
  Settings as SettingsIcon,
  Tune as CustomizeIcon,
  AutoAwesome as AIIcon,
  Science as PredictiveIcon,
  Lightbulb as RecommendationIcon,
  Warning as AlertIcon,
  Info as InfoIcon,
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Schedule as ScheduleIcon,
  Update as UpdateIcon,
  Sync as SyncIcon,
  Storage as DatabaseIcon,
  Api as ApiIcon,
  Code as CodeIcon,
  BugReport as BugIcon,
  MonitorHeart as MonitorIcon,
  NetworkCheck as NetworkIcon,
  Memory as MemoryIcon,
  Timer as TimerIcon,
  Battery4Bar as BatteryIcon,
  Smartphone as MobileIcon,
  Computer as DesktopIcon,
  Tablet as TabletIcon,
  Language as GlobalIcon,
  PersonAdd as UserGrowthIcon,
  PersonRemove as ChurnIcon,
  Group as ActiveUsersIcon,
  GroupAdd as NewUsersIcon,
  Forum as EngagementIcon,
  ThumbUp as SatisfactionIcon,
  LocalFireDepartment as HotIcon,
  Whatshot as TrendingIcon,
  NewReleases as NewIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

const AdvancedAnalyticsInsightsDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState('7d');
  const [refreshing, setRefreshing] = useState(false);
  
  const [platformMetrics, setPlatformMetrics] = useState({
    totalUsers: { current: 15847, change: 12.3, trend: 'up' },
    activeUsers: { current: 11234, change: 8.7, trend: 'up' },
    newSignups: { current: 1247, change: 15.2, trend: 'up' },
    userRetention: { current: 87.3, change: 2.1, trend: 'up' },
    engagementRate: { current: 94.6, change: 5.4, trend: 'up' },
    sessionDuration: { current: 24.7, change: -1.2, trend: 'down' },
    messagesSent: { current: 45678, change: 18.9, trend: 'up' },
    matchesCreated: { current: 3456, change: 22.1, trend: 'up' }
  });

  const [relationshipInsights, setRelationshipInsights] = useState({
    successfulMatches: { current: 2847, change: 25.6, trend: 'up' },
    relationshipProgression: { current: 78.4, change: 4.2, trend: 'up' },
    coachingEngagement: { current: 92.1, change: 7.8, trend: 'up' },
    communicationQuality: { current: 89.3, change: 3.5, trend: 'up' },
    conflictResolution: { current: 85.7, change: 6.1, trend: 'up' },
    intimacyImprovement: { current: 91.2, change: 8.4, trend: 'up' },
    goalAchievement: { current: 88.9, change: 5.7, trend: 'up' },
    overallSatisfaction: { current: 4.7, change: 0.2, trend: 'up' }
  });

  const [technicalMetrics, setTechnicalMetrics] = useState({
    systemUptime: { current: 99.97, change: 0.02, trend: 'up' },
    responseTime: { current: 0.8, change: -0.1, trend: 'up' },
    errorRate: { current: 0.02, change: -0.01, trend: 'up' },
    apiPerformance: { current: 98.5, change: 1.2, trend: 'up' },
    databaseHealth: { current: 99.1, change: 0.3, trend: 'up' },
    securityScore: { current: 98.8, change: 0.5, trend: 'up' },
    loadTime: { current: 1.1, change: -0.2, trend: 'up' },
    throughput: { current: 2847, change: 156, trend: 'up' }
  });

  const [aiInsights, setAiInsights] = useState({
    matchingAccuracy: { current: 94.2, change: 2.8, trend: 'up' },
    coachingEffectiveness: { current: 91.7, change: 4.1, trend: 'up' },
    personalizationScore: { current: 89.4, change: 3.6, trend: 'up' },
    predictionAccuracy: { current: 87.3, change: 5.2, trend: 'up' },
    behavioralInsights: { current: 92.8, change: 6.7, trend: 'up' },
    contentRelevance: { current: 88.9, change: 4.3, trend: 'up' },
    automationEfficiency: { current: 95.6, change: 2.1, trend: 'up' },
    learningProgress: { current: 93.4, change: 7.9, trend: 'up' }
  });

  const [analyticsScore, setAnalyticsScore] = useState(0);
  const [insightQuality, setInsightQuality] = useState(0);

  // Calculate analytics score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // Platform metrics performance (25 points)
      const platformPositive = Object.values(platformMetrics).filter(metric => metric.trend === 'up').length;
      score += (platformPositive / Object.keys(platformMetrics).length) * 25;
      
      // Relationship insights quality (30 points)
      const relationshipPositive = Object.values(relationshipInsights).filter(metric => metric.trend === 'up').length;
      score += (relationshipPositive / Object.keys(relationshipInsights).length) * 30;
      
      // Technical performance (25 points)
      const technicalPositive = Object.values(technicalMetrics).filter(metric => metric.trend === 'up').length;
      score += (technicalPositive / Object.keys(technicalMetrics).length) * 25;
      
      // AI insights effectiveness (20 points)
      const aiPositive = Object.values(aiInsights).filter(metric => metric.trend === 'up').length;
      score += (aiPositive / Object.keys(aiInsights).length) * 20;
      
      setAnalyticsScore(Math.round(score));
      
      // Calculate insight quality based on data richness and accuracy
      const avgAccuracy = (
        aiInsights.matchingAccuracy.current +
        aiInsights.predictionAccuracy.current +
        relationshipInsights.overallSatisfaction.current * 20 // Convert 5-point scale to percentage
      ) / 3;
      setInsightQuality(Math.round(avgAccuracy));
    };

    calculateScore();
  }, [platformMetrics, relationshipInsights, technicalMetrics, aiInsights]);

  const refreshData = async () => {
    setRefreshing(true);
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRefreshing(false);
  };

  const getScoreLevel = (score) => {
    if (score >= 95) return { level: 'Exceptional', color: 'success', description: 'Outstanding analytics performance' };
    if (score >= 85) return { level: 'Excellent', color: 'info', description: 'Superior insights quality' };
    if (score >= 75) return { level: 'Good', color: 'warning', description: 'Solid analytics foundation' };
    return { level: 'Needs Work', color: 'error', description: 'Requires optimization' };
  };

  const scoreInfo = getScoreLevel(analyticsScore);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUpIcon color="success" />;
      case 'down': return <TrendingDownIcon color="error" />;
      default: return <TrendingFlatIcon color="warning" />;
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'up': return 'success.main';
      case 'down': return 'error.main';
      default: return 'warning.main';
    }
  };

  const renderPlatformMetrics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DashboardIcon color="primary" />
        Platform Performance Metrics
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Comprehensive platform analytics tracking user engagement, growth patterns, and key performance 
        indicators across all platform features and user interactions.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(platformMetrics).map(([metric, data]) => (
          <Grid item xs={12} md={6} lg={3} key={metric}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                    {metric.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  {getTrendIcon(data.trend)}
                </Box>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {data.current.toLocaleString()}
                    {metric.includes('Rate') || metric.includes('Retention') ? '%' : 
                     metric.includes('Duration') ? 'min' : ''}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: getTrendColor(data.trend),
                        fontWeight: 600 
                      }}
                    >
                      {data.change > 0 ? '+' : ''}{data.change}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      vs last period
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min(data.current / (metric.includes('Rate') || metric.includes('Retention') ? 1 : 100), 100)}
                  sx={{ height: 6, borderRadius: 3 }}
                  color={data.trend === 'up' ? 'success' : data.trend === 'down' ? 'error' : 'warning'}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Platform Metrics Summary
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell align="right">Current</TableCell>
                    <TableCell align="right">Change</TableCell>
                    <TableCell align="right">Trend</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(platformMetrics).map(([metric, data]) => (
                    <TableRow key={metric}>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {metric.replace(/([A-Z])/g, ' $1').trim()}
                      </TableCell>
                      <TableCell align="right">
                        {data.current.toLocaleString()}
                        {metric.includes('Rate') || metric.includes('Retention') ? '%' : 
                         metric.includes('Duration') ? 'min' : ''}
                      </TableCell>
                      <TableCell align="right" sx={{ color: getTrendColor(data.trend) }}>
                        {data.change > 0 ? '+' : ''}{data.change}%
                      </TableCell>
                      <TableCell align="right">
                        {getTrendIcon(data.trend)}
                      </TableCell>
                      <TableCell align="right">
                        <Chip 
                          label={data.trend === 'up' ? 'Improving' : data.trend === 'down' ? 'Declining' : 'Stable'} 
                          color={data.trend === 'up' ? 'success' : data.trend === 'down' ? 'error' : 'warning'}
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
      </Box>
    </Box>
  );

  const renderRelationshipInsights = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <RelationshipIcon color="primary" />
        Relationship Success Insights
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Advanced relationship analytics providing deep insights into relationship success patterns, 
        coaching effectiveness, and user satisfaction across all relationship stages.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(relationshipInsights).map(([insight, data]) => (
          <Grid item xs={12} md={6} lg={3} key={insight}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                    {insight.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  {getTrendIcon(data.trend)}
                </Box>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                    {data.current}
                    {insight === 'overallSatisfaction' ? '/5' : '%'}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: getTrendColor(data.trend),
                        fontWeight: 600 
                      }}
                    >
                      {data.change > 0 ? '+' : ''}{data.change}
                      {insight === 'overallSatisfaction' ? '' : '%'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      improvement
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={insight === 'overallSatisfaction' ? (data.current / 5) * 100 : data.current}
                  sx={{ height: 6, borderRadius: 3 }}
                  color="success"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Relationship Success Factors
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon><CommunicationIcon color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Communication Quality" 
                      secondary={`${relationshipInsights.communicationQuality.current}% - Excellent`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Psychology color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Coaching Engagement" 
                      secondary={`${relationshipInsights.coachingEngagement.current}% - Outstanding`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><EmojiEvents color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Goal Achievement" 
                      secondary={`${relationshipInsights.goalAchievement.current}% - Excellent`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Favorite color="primary" /></ListItemIcon>
                    <ListItemText 
                      primary="Intimacy Improvement" 
                      secondary={`${relationshipInsights.intimacyImprovement.current}% - Superior`}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Success Metrics Breakdown
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Successful Matches: {relationshipInsights.successfulMatches.current.toLocaleString()}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={85} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color="success"
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Relationship Progression: {relationshipInsights.relationshipProgression.current}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={relationshipInsights.relationshipProgression.current} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color="info"
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Conflict Resolution: {relationshipInsights.conflictResolution.current}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={relationshipInsights.conflictResolution.current} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color="warning"
                  />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Overall Satisfaction: {relationshipInsights.overallSatisfaction.current}/5
                  </Typography>
                  <Rating 
                    value={relationshipInsights.overallSatisfaction.current} 
                    readOnly 
                    precision={0.1}
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  const renderTechnicalMetrics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MonitorIcon color="primary" />
        Technical Performance Metrics
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Real-time technical performance monitoring ensuring optimal platform reliability, security, 
        and user experience across all systems and infrastructure components.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(technicalMetrics).map(([metric, data]) => (
          <Grid item xs={12} md={6} lg={3} key={metric}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                    {metric.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  {getTrendIcon(data.trend)}
                </Box>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                    {data.current}
                    {metric.includes('Uptime') || metric.includes('Performance') || metric.includes('Health') || metric.includes('Score') ? '%' : 
                     metric.includes('Time') ? 's' : 
                     metric.includes('Rate') ? '%' : ''}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: getTrendColor(data.trend),
                        fontWeight: 600 
                      }}
                    >
                      {data.change > 0 ? '+' : ''}{data.change}
                      {metric.includes('Time') ? 's' : metric.includes('throughput') ? '' : '%'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      change
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={metric.includes('Rate') && metric.includes('error') ? 100 - (data.current * 50) : 
                         metric.includes('Time') ? Math.max(100 - (data.current * 50), 0) : data.current}
                  sx={{ height: 6, borderRadius: 3 }}
                  color={data.current >= 95 || (metric.includes('Time') && data.current <= 2) || (metric.includes('Rate') && metric.includes('error') && data.current <= 0.1) ? 'success' : 'warning'}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              System Health Overview
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h5" color="success.main" sx={{ fontWeight: 700 }}>
                    {technicalMetrics.systemUptime.current}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    System Uptime
                  </Typography>
                  <Chip label="Excellent" color="success" size="small" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h5" color="info.main" sx={{ fontWeight: 700 }}>
                    {technicalMetrics.responseTime.current}s
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Response Time
                  </Typography>
                  <Chip label="Fast" color="info" size="small" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h5" color="success.main" sx={{ fontWeight: 700 }}>
                    {technicalMetrics.securityScore.current}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Security Score
                  </Typography>
                  <Chip label="Secure" color="success" size="small" sx={{ mt: 1 }} />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderAIInsights = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AIIcon color="primary" />
        AI Performance & Insights
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Advanced AI analytics tracking machine learning model performance, prediction accuracy, 
        and intelligent system effectiveness across all AI-powered platform features.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(aiInsights).map(([insight, data]) => (
          <Grid item xs={12} md={6} lg={3} key={insight}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                    {insight.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  {getTrendIcon(data.trend)}
                </Box>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                    {data.current}%
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: getTrendColor(data.trend),
                        fontWeight: 600 
                      }}
                    >
                      {data.change > 0 ? '+' : ''}{data.change}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      improvement
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={data.current} 
                  sx={{ height: 6, borderRadius: 3 }}
                  color="secondary"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  AI Model Performance
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon><PredictiveIcon color="secondary" /></ListItemIcon>
                    <ListItemText 
                      primary="Matching Accuracy" 
                      secondary={`${aiInsights.matchingAccuracy.current}% - Industry Leading`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><Psychology color="secondary" /></ListItemIcon>
                    <ListItemText 
                      primary="Coaching Effectiveness" 
                      secondary={`${aiInsights.coachingEffectiveness.current}% - Exceptional`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><BehaviorIcon color="secondary" /></ListItemIcon>
                    <ListItemText 
                      primary="Behavioral Insights" 
                      secondary={`${aiInsights.behavioralInsights.current}% - Superior`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><RecommendationIcon color="secondary" /></ListItemIcon>
                    <ListItemText 
                      primary="Learning Progress" 
                      secondary={`${aiInsights.learningProgress.current}% - Outstanding`}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  AI System Efficiency
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Automation Efficiency: {aiInsights.automationEfficiency.current}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={aiInsights.automationEfficiency.current} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color="secondary"
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Personalization Score: {aiInsights.personalizationScore.current}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={aiInsights.personalizationScore.current} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color="info"
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Content Relevance: {aiInsights.contentRelevance.current}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={aiInsights.contentRelevance.current} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color="warning"
                  />
                </Box>
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Prediction Accuracy: {aiInsights.predictionAccuracy.current}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={aiInsights.predictionAccuracy.current} 
                    sx={{ height: 4, borderRadius: 2 }}
                    color="success"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Advanced Analytics & Insights Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive analytics platform providing deep insights into platform performance, relationship success, 
          technical metrics, and AI effectiveness with real-time monitoring and predictive analytics.
        </Typography>

        {/* Analytics Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {analyticsScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Analytics Score
                  </Typography>
                  <Chip 
                    label={scoreInfo.level} 
                    sx={{ 
                      mt: 1, 
                      bgcolor: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      fontWeight: 600 
                    }} 
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {platformMetrics.totalUsers.current.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Total Users
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {relationshipInsights.overallSatisfaction.current}/5
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Satisfaction
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {technicalMetrics.systemUptime.current}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Uptime
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {insightQuality}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Insight Quality
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        {/* Time Range and Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FormControl size="small">
              <InputLabel>Time Range</InputLabel>
              <Select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                label="Time Range"
                sx={{ minWidth: 120 }}
              >
                <MenuItem value="1d">Last 24 Hours</MenuItem>
                <MenuItem value="7d">Last 7 Days</MenuItem>
                <MenuItem value="30d">Last 30 Days</MenuItem>
                <MenuItem value="90d">Last 90 Days</MenuItem>
                <MenuItem value="1y">Last Year</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="outlined"
              onClick={refreshData}
              disabled={refreshing}
              startIcon={refreshing ? <CircularProgress size={20} /> : <RefreshIcon />}
            >
              {refreshing ? 'Refreshing...' : 'Refresh'}
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" startIcon={<ExportIcon />} size="small">
              Export
            </Button>
            <Button variant="outlined" startIcon={<ShareIcon />} size="small">
              Share
            </Button>
            <Button variant="outlined" startIcon={<SettingsIcon />} size="small">
              Configure
            </Button>
          </Box>
        </Box>
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
            label="Platform Metrics" 
            icon={<DashboardIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Relationship Insights" 
            icon={<RelationshipIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Technical Metrics" 
            icon={<MonitorIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="AI Insights" 
            icon={<AIIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderPlatformMetrics()}
          {activeTab === 1 && renderRelationshipInsights()}
          {activeTab === 2 && renderTechnicalMetrics()}
          {activeTab === 3 && renderAIInsights()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<ReportsIcon />}
          >
            Generate Report
          </Button>
          <Button
            variant="outlined"
            startIcon={<ScheduleIcon />}
          >
            Schedule Reports
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Advanced Analytics
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<SuccessIcon />}
            sx={{ minWidth: 200 }}
          >
            Analytics Optimized
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Analytics Performance
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={analyticsScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default AdvancedAnalyticsInsightsDashboard;

