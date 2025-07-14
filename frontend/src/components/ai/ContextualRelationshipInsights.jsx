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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
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
  ToggleButtonGroup
} from '@mui/material';
import {
  Insights,
  Analytics,
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  Psychology,
  Favorite,
  Group,
  Person,
  Message,
  Call,
  VideoCall,
  Event,
  Star,
  StarBorder,
  CheckCircle,
  Warning,
  Error,
  Info,
  Lightbulb,
  AutoAwesome,
  SmartToy,
  Timeline as TimelineIcon,
  Assessment,
  BarChart,
  ShowChart,
  PieChart,
  DonutLarge,
  BubbleChart,
  ScatterPlot,
  MultilineChart,
  Whatshot,
  LocalFireDepartment,
  AcUnit,
  WbSunny,
  Mood,
  MoodBad,
  EmojiEmotions,
  SentimentSatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentVerySatisfied,
  SentimentVeryDissatisfied,
  Face,
  Face3,
  PsychologyAlt,
  SelfImprovement,
  School,
  MenuBook,
  Quiz,
  Assignment,
  AssignmentTurnedIn,
  Speed,
  Schedule,
  AccessTime,
  Today,
  DateRange,
  CalendarToday,
  CalendarMonth,
  CalendarWeek,
  History,
  Update,
  Refresh,
  Sync,
  CloudSync,
  DataUsage,
  NetworkCheck,
  SignalWifi4Bar,
  BatteryFull,
  BatteryAlert,
  LocationOn,
  LocationOff,
  Gps,
  GpsFixed,
  GpsNotFixed,
  GpsOff,
  Explore,
  ExploreOff,
  Map,
  Place,
  Room,
  Home,
  Work,
  Flight,
  Train,
  DirectionsCar,
  DirectionsWalk,
  DirectionsRun,
  DirectionsBike,
  DirectionsBoat,
  DirectionsSubway,
  DirectionsTransit,
  DirectionsBus,
  Traffic,
  Navigation,
  NearMe,
  MyLocation,
  Layers,
  LayersClear,
  Terrain,
  Satellite,
  Public,
  Language,
  Translate,
  RecordVoiceOver,
  Hearing,
  VolumeUp,
  VolumeOff,
  Mic,
  MicOff,
  Camera,
  CameraAlt,
  Videocam,
  VideocamOff,
  Photo,
  PhotoCamera,
  PhotoLibrary,
  Image,
  ImageSearch,
  Wallpaper,
  Palette,
  ColorLens,
  Brush,
  Edit,
  Create,
  Draw,
  Gesture,
  TouchApp,
  PanTool,
  BackHand,
  FrontHand,
  Waving,
  ThumbUp,
  ThumbDown,
  ThumbsUpDown,
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
  MoreVert,
  MoreHoriz,
  Close,
  Clear,
  Cancel,
  Delete,
  Remove,
  Add,
  Plus,
  Settings,
  Tune,
  FilterList,
  Sort,
  Search,
  FindInPage,
  Pageview,
  Preview,
  Visibility,
  VisibilityOff,
  RemoveRedEye,
  Help,
  HelpOutline,
  QuestionMark,
  LiveHelp,
  Support,
  SupportAgent,
  ContactSupport,
  Feedback,
  BugReport,
  Report,
  ReportProblem,
  Flag,
  OutlinedFlag,
  Security,
  Shield,
  Lock,
  LockOpen,
  Key,
  VpnKey,
  Password,
  Fingerprint,
  AdminPanelSettings,
  SupervisorAccount,
  ManageAccounts,
  AccountCircle,
  VerifiedUser,
  Verified,
  CheckCircleOutline,
  RadioButtonChecked,
  RadioButtonUnchecked,
  CheckBox,
  CheckBoxOutlineBlank,
  IndeterminateCheckBox,
  ToggleOn,
  ToggleOff
} from '@mui/icons-material';

const ContextualRelationshipInsights = ({ 
  userId,
  relationships = [],
  realTimeData = {},
  onInsightAction,
  onPredictionUpdate
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [timeRange, setTimeRange] = useState('week');
  const [analysisType, setAnalysisType] = useState('comprehensive');
  const [selectedRelationship, setSelectedRelationship] = useState(null);

  const [relationshipAnalytics, setRelationshipAnalytics] = useState({
    overall: {
      totalRelationships: 24,
      activeConversations: 8,
      successRate: 0.67,
      averageResponseTime: '4.2 hours',
      engagementScore: 0.78,
      compatibilityTrend: 'improving'
    },
    patterns: {
      communicationStyle: {
        dominant: 'balanced',
        adaptability: 0.85,
        effectivenessByStyle: {
          direct: 0.72,
          gentle: 0.89,
          playful: 0.76,
          intellectual: 0.83
        }
      },
      timePreferences: {
        optimalTimes: ['morning', 'evening'],
        responsePatterns: {
          immediate: 0.34,
          hourly: 0.45,
          daily: 0.21
        }
      },
      emotionalDynamics: {
        connectionDepth: 0.68,
        vulnerabilityLevel: 0.54,
        trustBuilding: 0.82,
        conflictResolution: 0.71
      }
    }
  });

  const [predictiveInsights, setPredictiveInsights] = useState({
    relationshipPotential: [
      {
        relationshipId: 'rel_001',
        name: 'Sarah M.',
        potentialScore: 0.92,
        timeToDeepConnection: '2-3 weeks',
        keyFactors: ['shared values', 'communication compatibility', 'emotional intelligence'],
        recommendedActions: ['Schedule video call', 'Share personal story', 'Plan meaningful activity'],
        confidence: 0.89
      },
      {
        relationshipId: 'rel_002',
        name: 'Jessica L.',
        potentialScore: 0.78,
        timeToDeepConnection: '4-6 weeks',
        keyFactors: ['lifestyle compatibility', 'humor alignment', 'career ambition'],
        recommendedActions: ['Explore shared interests', 'Discuss future goals', 'Plan casual meetup'],
        confidence: 0.76
      },
      {
        relationshipId: 'rel_003',
        name: 'Emma K.',
        potentialScore: 0.84,
        timeToDeepConnection: '3-4 weeks',
        keyFactors: ['emotional depth', 'intellectual connection', 'life goals alignment'],
        recommendedActions: ['Deep conversation topics', 'Share vulnerabilities', 'Plan thoughtful date'],
        confidence: 0.82
      }
    ],
    riskAssessment: [
      {
        relationshipId: 'rel_004',
        name: 'Amanda R.',
        riskLevel: 0.65,
        riskFactors: ['communication mismatch', 'different life stages', 'conflicting schedules'],
        interventions: ['Communication style adaptation', 'Expectation alignment', 'Flexible scheduling'],
        confidence: 0.73
      }
    ],
    timeline: [
      {
        prediction: 'High probability of meaningful connection with Sarah M.',
        timeframe: '7-10 days',
        probability: 0.87,
        triggers: ['consistent communication', 'shared vulnerability', 'mutual interest']
      },
      {
        prediction: 'Potential relationship milestone with Jessica L.',
        timeframe: '2-3 weeks',
        probability: 0.74,
        triggers: ['successful first date', 'continued engagement', 'compatibility confirmation']
      },
      {
        prediction: 'Risk of connection decline with Amanda R.',
        timeframe: '3-5 days',
        probability: 0.68,
        triggers: ['communication gaps', 'unmet expectations', 'scheduling conflicts']
      }
    ]
  });

  const [contextualFactors, setContextualFactors] = useState({
    environmental: {
      seasonality: 'spring_optimism',
      dayOfWeek: 'friday_energy',
      timeOfDay: 'evening_reflection',
      weatherImpact: 'positive_sunny'
    },
    personal: {
      emotionalState: 'confident_optimistic',
      energyLevel: 0.78,
      socialBattery: 0.65,
      stressLevel: 0.23
    },
    social: {
      recentEvents: ['successful date', 'positive feedback', 'new connection'],
      socialCircle: 'supportive_active',
      peerInfluence: 'positive_encouraging'
    },
    technological: {
      appUsage: 'active_engaged',
      responsePatterns: 'consistent_timely',
      featureAdoption: 'high_innovative'
    }
  });

  const [compatibilityMatrix, setCompatibilityMatrix] = useState({
    dimensions: [
      { name: 'Communication Style', weight: 0.25 },
      { name: 'Life Goals', weight: 0.20 },
      { name: 'Emotional Intelligence', weight: 0.18 },
      { name: 'Lifestyle Compatibility', weight: 0.15 },
      { name: 'Values Alignment', weight: 0.12 },
      { name: 'Physical Attraction', weight: 0.10 }
    ],
    scores: {
      'Sarah M.': [0.95, 0.88, 0.92, 0.84, 0.91, 0.89],
      'Jessica L.': [0.78, 0.82, 0.75, 0.85, 0.79, 0.91],
      'Emma K.': [0.87, 0.91, 0.89, 0.76, 0.88, 0.82],
      'Amanda R.': [0.62, 0.58, 0.69, 0.71, 0.64, 0.78]
    }
  });

  const [behaviorPatterns, setBehaviorPatterns] = useState({
    messagingPredictors: {
      responseTime: {
        pattern: 'Faster responses (< 2 hours) correlate with 89% higher engagement',
        optimization: 'Maintain consistent response timing',
        impact: 0.89
      },
      messageLength: {
        pattern: 'Medium-length messages (50-150 words) show 76% better reception',
        optimization: 'Balance detail with conciseness',
        impact: 0.76
      },
      emotionalTone: {
        pattern: 'Positive but authentic tone increases connection by 82%',
        optimization: 'Express genuine emotions while maintaining optimism',
        impact: 0.82
      }
    },
    interactionOptimization: {
      bestTimes: ['10:00 AM', '7:30 PM', '9:15 PM'],
      conversationStarters: [
        'Open-ended questions about passions',
        'Thoughtful responses to their interests',
        'Sharing personal growth experiences'
      ],
      topicProgression: [
        'Shared interests → Personal values → Future aspirations → Deeper vulnerabilities'
      ]
    }
  });

  useEffect(() => {
    // Simulate real-time analytics updates
    const updateAnalytics = () => {
      // Update relationship analytics with small variations
      setRelationshipAnalytics(prev => ({
        ...prev,
        overall: {
          ...prev.overall,
          engagementScore: Math.min(1, Math.max(0, prev.overall.engagementScore + (Math.random() - 0.5) * 0.05))
        }
      }));
    };

    const interval = setInterval(updateAnalytics, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const generateInsight = (type, data) => {
    const insight = {
      type,
      data,
      timestamp: Date.now(),
      confidence: Math.random() * 0.3 + 0.7,
      actionable: true
    };
    
    onInsightAction?.(insight);
    return insight;
  };

  const renderOverviewDashboard = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h3" color="primary.main">
              {relationshipAnalytics.overall.totalRelationships}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Connections
            </Typography>
            <Chip 
              label={`${relationshipAnalytics.overall.activeConversations} active`} 
              color="success" 
              size="small" 
              sx={{ mt: 1 }}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={relationshipAnalytics.overall.successRate * 100}
                size={60}
                thickness={4}
                color="success"
              />
              <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="h6" component="div" color="text.secondary">
                  {Math.round(relationshipAnalytics.overall.successRate * 100)}%
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Success Rate
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant="h4" color="primary.main">
              {relationshipAnalytics.overall.averageResponseTime}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Avg Response Time
            </Typography>
            <Chip 
              label="Improving" 
              color="info" 
              size="small" 
              sx={{ mt: 1 }}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={3}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
              <CircularProgress
                variant="determinate"
                value={relationshipAnalytics.overall.engagementScore * 100}
                size={60}
                thickness={4}
                color="primary"
              />
              <Box sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography variant="h6" component="div" color="text.secondary">
                  {Math.round(relationshipAnalytics.overall.engagementScore * 100)}%
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Engagement Score
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Communication Effectiveness by Style
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(relationshipAnalytics.patterns.communicationStyle.effectivenessByStyle).map(([style, score]) => (
                <Grid item xs={12} md={3} key={style}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4" color={
                      score > 0.8 ? 'success.main' : 
                      score > 0.6 ? 'warning.main' : 'error.main'
                    }>
                      {Math.round(score * 100)}%
                    </Typography>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {style}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={score * 100}
                      sx={{
                        mt: 1,
                        height: 4,
                        borderRadius: 2,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: score > 0.8 ? '#4caf50' : 
                                         score > 0.6 ? '#ff9800' : '#f44336'
                        }
                      }}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderPredictiveAnalytics = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Predictive Relationship Analytics
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                High-Potential Relationships
              </Typography>
              {predictiveInsights.relationshipPotential.map((rel, index) => (
                <Card key={rel.relationshipId} sx={{ mb: 2, border: '1px solid', borderColor: 'success.light' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: 'success.light', mr: 2 }}>
                          {rel.name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Box>
                          <Typography variant="h6">{rel.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {rel.timeToDeepConnection} to deep connection
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography variant="h4" color="success.main">
                          {Math.round(rel.potentialScore * 100)}%
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Potential
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ mb: 1 }}>
                        Key Success Factors:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {rel.keyFactors.map((factor, idx) => (
                          <Chip key={idx} label={factor} size="small" color="success" variant="outlined" />
                        ))}
                      </Box>
                    </Box>
                    
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography variant="subtitle2">Recommended Actions</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {rel.recommendedActions.map((action, idx) => (
                            <ListItem key={idx}>
                              <ListItemIcon>
                                <CheckCircle color="success" />
                              </ListItemIcon>
                              <ListItemText primary={action} />
                            </ListItem>
                          ))}
                        </List>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                          <Typography variant="caption" color="text.secondary">
                            Confidence: {Math.round(rel.confidence * 100)}%
                          </Typography>
                          <Button variant="outlined" size="small">
                            Apply Strategy
                          </Button>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
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
                Predictive Timeline
              </Typography>
              <Timeline>
                {predictiveInsights.timeline.map((prediction, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot color={
                        prediction.probability > 0.8 ? 'success' : 
                        prediction.probability > 0.6 ? 'warning' : 'error'
                      } />
                      {index < predictiveInsights.timeline.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="subtitle2">
                        {prediction.prediction}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {prediction.timeframe} | {Math.round(prediction.probability * 100)}% likely
                      </Typography>
                      <Box sx={{ mt: 1 }}>
                        {prediction.triggers.map((trigger, idx) => (
                          <Chip key={idx} label={trigger} size="small" variant="outlined" sx={{ mr: 0.5, mb: 0.5 }} />
                        ))}
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderCompatibilityMatrix = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Compatibility Matrix Analysis
      </Typography>
      
      <Card>
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Relationship</TableCell>
                  {compatibilityMatrix.dimensions.map(dim => (
                    <TableCell key={dim.name} align="center">
                      <Typography variant="caption">{dim.name}</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                        ({Math.round(dim.weight * 100)}%)
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell align="center">Overall</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(compatibilityMatrix.scores).map(([name, scores]) => {
                  const overallScore = scores.reduce((acc, score, idx) => 
                    acc + score * compatibilityMatrix.dimensions[idx].weight, 0
                  );
                  
                  return (
                    <TableRow key={name}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ mr: 2, width: 32, height: 32 }}>
                            {name.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          {name}
                        </Box>
                      </TableCell>
                      {scores.map((score, idx) => (
                        <TableCell key={idx} align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="body2" sx={{ mr: 1 }}>
                              {Math.round(score * 100)}%
                            </Typography>
                            <Box sx={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: 
                              score > 0.8 ? '#4caf50' : 
                              score > 0.6 ? '#ff9800' : '#f44336'
                            }} />
                          </Box>
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <Typography variant="h6" color={
                          overallScore > 0.8 ? 'success.main' : 
                          overallScore > 0.6 ? 'warning.main' : 'error.main'
                        }>
                          {Math.round(overallScore * 100)}%
                        </Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );

  const renderBehaviorPatterns = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Behavioral Pattern Analysis
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Messaging Predictors
              </Typography>
              {Object.entries(behaviorPatterns.messagingPredictors).map(([key, predictor]) => (
                <Paper key={key} sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'primary.light' }}>
                  <Typography variant="subtitle2" sx={{ mb: 1, textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {predictor.pattern}
                  </Typography>
                  <Alert severity="info" sx={{ mb: 1 }}>
                    <Typography variant="body2">
                      {predictor.optimization}
                    </Typography>
                  </Alert>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="caption" color="text.secondary">
                      Impact Score
                    </Typography>
                    <Chip 
                      label={`${Math.round(predictor.impact * 100)}%`} 
                      color="primary" 
                      size="small"
                    />
                  </Box>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Interaction Optimization
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Optimal Communication Times
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {behaviorPatterns.interactionOptimization.bestTimes.map((time, idx) => (
                    <Chip key={idx} label={time} color="success" variant="outlined" />
                  ))}
                </Box>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Effective Conversation Starters
                </Typography>
                <List dense>
                  {behaviorPatterns.interactionOptimization.conversationStarters.map((starter, idx) => (
                    <ListItem key={idx}>
                      <ListItemIcon>
                        <Lightbulb color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={starter} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Box>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Conversation Progression Strategy
                </Typography>
                <Alert severity="success">
                  <Typography variant="body2">
                    {behaviorPatterns.interactionOptimization.topicProgression[0]}
                  </Typography>
                </Alert>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Insights sx={{ mr: 2, fontSize: 40 }} />
        Contextual Relationship Insights
        <Chip label="Predictive Analytics" color="primary" sx={{ ml: 2 }} />
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)}>
          <Tab label="Overview" />
          <Tab label="Predictions" />
          <Tab label="Compatibility" />
          <Tab label="Behavior Patterns" />
        </Tabs>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="day">Today</MenuItem>
              <MenuItem value="week">This Week</MenuItem>
              <MenuItem value="month">This Month</MenuItem>
              <MenuItem value="quarter">This Quarter</MenuItem>
            </Select>
          </FormControl>
          
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={() => generateInsight('refresh', { timeRange, analysisType })}
          >
            Refresh Analysis
          </Button>
        </Box>
      </Box>

      {selectedTab === 0 && renderOverviewDashboard()}
      {selectedTab === 1 && renderPredictiveAnalytics()}
      {selectedTab === 2 && renderCompatibilityMatrix()}
      {selectedTab === 3 && renderBehaviorPatterns()}
    </Box>
  );
};

export default ContextualRelationshipInsights;