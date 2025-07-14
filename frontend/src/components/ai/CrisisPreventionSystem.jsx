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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
  Badge,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Slider,
  TextField,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Tabs,
  Tab
} from '@mui/material';
import {
  Security,
  Warning,
  Error,
  Emergency,
  Shield,
  NotificationImportant,
  Psychology,
  SupportAgent,
  LocalHospital,
  Phone,
  Message,
  Email,
  VideoCam,
  Chat,
  Forum,
  Group,
  Person,
  PersonOff,
  Block,
  Report,
  Flag,
  Gavel,
  Policy,
  AdminPanelSettings,
  VerifiedUser,
  Lock,
  VpnKey,
  Fingerprint,
  Face,
  Visibility,
  VisibilityOff,
  LocationOn,
  LocationOff,
  Mic,
  MicOff,
  VolumeUp,
  VolumeOff,
  Camera,
  CameraAlt,
  Videocam,
  TouchApp,
  Gesture,
  AccessTime,
  Schedule,
  Alarm,
  AlarmOn,
  AlarmOff,
  NotificationsActive,
  NotificationsOff,
  Settings,
  Tune,
  AutoAwesome,
  SmartToy,
  Analytics,
  TrendingUp,
  TrendingDown,
  Timeline as TimelineIcon,
  Assessment,
  Insights,
  Lightbulb,
  CheckCircle,
  Cancel,
  Clear,
  Close,
  Save,
  Download,
  Upload,
  Share,
  Print,
  Refresh,
  Sync,
  SyncProblem,
  Update,
  Backup,
  Restore,
  DeleteForever,
  Archive,
  Unarchive,
  Star,
  StarBorder,
  Favorite,
  FavoriteBorder,
  ThumbUp,
  ThumbDown,
  Mood,
  MoodBad,
  SentimentSatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentVerySatisfied,
  SentimentVeryDissatisfied,
  EmojiEmotions,
  Face3,
  PsychologyAlt,
  SelfImprovement,
  Spa,
  Nature,
  Eco,
  LocalFireDepartment,
  Whatshot,
  AcUnit,
  WbSunny,
  Cloud,
  Storm,
  FlashOn,
  FlashOff,
  BatteryAlert,
  SignalWifiOff,
  NetworkCheck,
  DataUsage,
  CloudSync,
  CloudQueue,
  Backup as BackupIcon,
  Security as SecurityIcon,
  ExpandMore,
  ChevronRight,
  ArrowUpward,
  ArrowDownward,
  KeyboardArrowUp,
  KeyboardArrowDown,
  MoreVert,
  MoreHoriz,
  Add,
  Remove,
  Edit,
  Delete,
  Search,
  FilterList,
  Sort,
  ViewList,
  ViewModule,
  ViewQuilt,
  ViewStream,
  ViewArray,
  ViewColumn,
  ViewComfy,
  ViewCompact,
  ViewAgenda,
  ViewDay,
  ViewWeek,
  Today,
  DateRange,
  Event,
  EventAvailable,
  EventBusy,
  EventNote,
  EventSeat,
  Explore,
  ExploreOff,
  Help,
  HelpOutline,
  Info,
  InfoOutlined
} from '@mui/icons-material';

const CrisisPreventionSystem = ({ 
  userId,
  userProfile = {},
  realTimeData = {},
  onCrisisDetected,
  onInterventionRequired,
  onEmergencyContact
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [systemStatus, setSystemStatus] = useState('active');
  const [alertLevel, setAlertLevel] = useState('normal');
  const [activeAlerts, setActiveAlerts] = useState([]);
  
  const [riskAssessment, setRiskAssessment] = useState({
    overall: 0.15, // Low risk
    categories: {
      emotional: 0.12,
      behavioral: 0.18,
      social: 0.08,
      safety: 0.22,
      communication: 0.15
    },
    factors: [
      { name: 'Recent Rejection', impact: 0.3, confidence: 0.87, timestamp: Date.now() - 86400000 },
      { name: 'Isolation Pattern', impact: 0.25, confidence: 0.71, timestamp: Date.now() - 172800000 },
      { name: 'Negative Sentiment', impact: 0.35, confidence: 0.92, timestamp: Date.now() - 43200000 }
    ],
    protective: [
      { name: 'Strong Support Network', impact: -0.4, confidence: 0.89 },
      { name: 'Professional Help Seeking', impact: -0.3, confidence: 0.76 },
      { name: 'Healthy Coping Mechanisms', impact: -0.25, confidence: 0.83 }
    ]
  });

  const [interventionProtocols, setInterventionProtocols] = useState([
    {
      id: 1,
      name: 'Emotional Distress Protocol',
      triggerLevel: 0.4,
      steps: [
        'Immediate emotional support check-in',
        'Breathing and grounding exercises',
        'Professional resource recommendations',
        'Follow-up scheduling'
      ],
      resources: ['Crisis Text Line', 'Professional Counselors', 'Support Groups'],
      effectiveness: 0.87,
      averageResolution: '45 minutes'
    },
    {
      id: 2,
      name: 'Safety Concern Protocol',
      triggerLevel: 0.6,
      steps: [
        'Immediate safety assessment',
        'Emergency contact notification',
        'Professional intervention',
        'Continuous monitoring'
      ],
      resources: ['Emergency Services', 'Crisis Hotlines', 'Local Support Centers'],
      effectiveness: 0.94,
      averageResolution: '15 minutes'
    },
    {
      id: 3,
      name: 'Behavioral Pattern Alert',
      triggerLevel: 0.3,
      steps: [
        'Pattern analysis and documentation',
        'Gentle intervention and check-in',
        'Skill-building resources',
        'Ongoing pattern monitoring'
      ],
      resources: ['AI Coaching', 'Educational Content', 'Peer Support'],
      effectiveness: 0.76,
      averageResolution: '2-7 days'
    }
  ]);

  const [earlyWarningSystem, setEarlyWarningSystem] = useState({
    indicators: [
      {
        name: 'Message Tone Deterioration',
        current: 0.25,
        threshold: 0.3,
        trend: 'increasing',
        timeframe: '48 hours',
        confidence: 0.84
      },
      {
        name: 'Social Withdrawal Pattern',
        current: 0.35,
        threshold: 0.4,
        trend: 'stable',
        timeframe: '7 days',
        confidence: 0.71
      },
      {
        name: 'Negative Emotion Clustering',
        current: 0.42,
        threshold: 0.5,
        trend: 'increasing',
        timeframe: '24 hours',
        confidence: 0.89
      },
      {
        name: 'Sleep Pattern Disruption',
        current: 0.18,
        threshold: 0.3,
        trend: 'decreasing',
        timeframe: '5 days',
        confidence: 0.67
      }
    ],
    predictions: [
      {
        event: 'Potential emotional crisis',
        probability: 0.23,
        timeframe: '72 hours',
        confidence: 0.78,
        triggers: ['Recent rejection', 'Isolation increase', 'Negative messaging']
      },
      {
        event: 'Communication breakdown',
        probability: 0.31,
        timeframe: '48 hours',
        confidence: 0.82,
        triggers: ['Decreased response time', 'Hostile language patterns']
      }
    ]
  });

  const [supportResources, setSupportResources] = useState({
    immediate: [
      {
        name: 'Crisis Text Line',
        contact: 'Text HOME to 741741',
        type: 'crisis_support',
        availability: '24/7',
        response_time: 'Under 5 minutes',
        specialization: 'Crisis intervention'
      },
      {
        name: 'National Suicide Prevention Lifeline',
        contact: '988',
        type: 'crisis_support',
        availability: '24/7',
        response_time: 'Immediate',
        specialization: 'Suicide prevention'
      },
      {
        name: 'Emergency Services',
        contact: '911',
        type: 'emergency',
        availability: '24/7',
        response_time: 'Immediate',
        specialization: 'Life-threatening emergencies'
      }
    ],
    professional: [
      {
        name: 'Licensed Therapists Network',
        type: 'therapy',
        availability: 'Appointment based',
        specialization: 'Relationship counseling, anxiety, depression',
        cost: 'Covered by insurance'
      },
      {
        name: 'Flourish Professional Partners',
        type: 'specialized_therapy',
        availability: 'Priority scheduling',
        specialization: 'Dating anxiety, relationship trauma',
        cost: 'Premium member benefit'
      }
    ],
    peer: [
      {
        name: 'Flourish Support Groups',
        type: 'group_support',
        availability: 'Weekly meetings',
        specialization: 'Dating challenges, relationship building',
        cost: 'Free for all users'
      },
      {
        name: 'Mentor Program',
        type: 'mentorship',
        availability: 'Ongoing',
        specialization: 'Relationship success coaching',
        cost: 'Premium feature'
      }
    ]
  });

  const [interventionHistory, setInterventionHistory] = useState([
    {
      id: 1,
      timestamp: Date.now() - 86400000,
      type: 'proactive_check_in',
      trigger: 'Emotional distress indicators',
      action: 'AI coach intervention',
      outcome: 'User engaged with coping strategies',
      effectiveness: 0.89,
      followUp: 'Scheduled for 24 hours'
    },
    {
      id: 2,
      timestamp: Date.now() - 172800000,
      type: 'resource_recommendation',
      trigger: 'Persistent negative patterns',
      action: 'Professional therapy suggestion',
      outcome: 'User scheduled appointment',
      effectiveness: 0.95,
      followUp: 'Therapy session confirmed'
    }
  ]);

  const alertLevelRef = useRef(alertLevel);
  
  useEffect(() => {
    alertLevelRef.current = alertLevel;
  }, [alertLevel]);

  useEffect(() => {
    // Real-time risk assessment
    const assessRisk = () => {
      const currentRisk = calculateRiskScore();
      
      if (currentRisk !== riskAssessment.overall) {
        setRiskAssessment(prev => ({
          ...prev,
          overall: currentRisk
        }));
        
        // Update alert level based on risk
        if (currentRisk >= 0.7) {
          setAlertLevel('critical');
          triggerCrisisResponse('critical_risk_detected', currentRisk);
        } else if (currentRisk >= 0.5) {
          setAlertLevel('high');
          triggerIntervention('high_risk_detected', currentRisk);
        } else if (currentRisk >= 0.3) {
          setAlertLevel('medium');
          triggerProactiveSupport('medium_risk_detected', currentRisk);
        } else {
          setAlertLevel('normal');
        }
      }
    };

    const interval = setInterval(assessRisk, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [realTimeData]);

  const calculateRiskScore = () => {
    // Simulate real-time risk calculation
    const baseRisk = 0.15;
    const variance = (Math.random() - 0.5) * 0.1;
    const timeBasedFactor = Math.sin(Date.now() / 100000) * 0.05;
    
    return Math.max(0, Math.min(1, baseRisk + variance + timeBasedFactor));
  };

  const triggerCrisisResponse = (type, riskLevel) => {
    const alert = {
      id: Date.now(),
      type: 'crisis',
      level: 'critical',
      message: `Critical risk detected: ${Math.round(riskLevel * 100)}%`,
      timestamp: Date.now(),
      actions: ['Emergency contact notification', 'Professional intervention required'],
      resolved: false
    };
    
    setActiveAlerts(prev => [...prev, alert]);
    onCrisisDetected?.(alert);
  };

  const triggerIntervention = (type, riskLevel) => {
    const alert = {
      id: Date.now(),
      type: 'intervention',
      level: 'high',
      message: `High risk detected: ${Math.round(riskLevel * 100)}%`,
      timestamp: Date.now(),
      actions: ['Immediate support check-in', 'Resource recommendations'],
      resolved: false
    };
    
    setActiveAlerts(prev => [...prev, alert]);
    onInterventionRequired?.(alert);
  };

  const triggerProactiveSupport = (type, riskLevel) => {
    const alert = {
      id: Date.now(),
      type: 'support',
      level: 'medium',
      message: `Elevated risk indicators: ${Math.round(riskLevel * 100)}%`,
      timestamp: Date.now(),
      actions: ['Proactive coaching', 'Wellness check'],
      resolved: false
    };
    
    setActiveAlerts(prev => [...prev, alert]);
  };

  const resolveAlert = (alertId) => {
    setActiveAlerts(prev => 
      prev.map(alert => 
        alert.id === alertId ? { ...alert, resolved: true } : alert
      )
    );
  };

  const getAlertColor = (level) => {
    const colors = {
      critical: 'error',
      high: 'warning',
      medium: 'info',
      normal: 'success'
    };
    return colors[level] || 'default';
  };

  const getSystemStatusColor = () => {
    return alertLevel === 'critical' ? 'error' : 
           alertLevel === 'high' ? 'warning' : 
           alertLevel === 'medium' ? 'info' : 'success';
  };

  const renderSystemOverview = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent sx={{ textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
              <CircularProgress
                variant="determinate"
                value={100}
                size={80}
                thickness={4}
                sx={{ color: 'rgba(0,0,0,0.1)' }}
              />
              <CircularProgress
                variant="determinate"
                value={riskAssessment.overall * 100}
                size={80}
                thickness={4}
                sx={{ 
                  color: riskAssessment.overall > 0.5 ? '#f44336' : 
                         riskAssessment.overall > 0.3 ? '#ff9800' : '#4caf50',
                  position: 'absolute',
                  left: 0
                }}
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
                  {Math.round(riskAssessment.overall * 100)}%
                </Typography>
              </Box>
            </Box>
            <Typography variant="h6">Overall Risk Score</Typography>
            <Chip 
              label={alertLevel.toUpperCase()} 
              color={getSystemStatusColor()}
              sx={{ mt: 1 }}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Shield sx={{ mr: 1 }} />
              Protection Status
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="24/7 Monitoring" 
                  secondary="Active surveillance system"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Emergency Contacts" 
                  secondary="Verified and ready"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircle color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Professional Network" 
                  secondary="Connected and available"
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Warning sx={{ mr: 1 }} />
              Active Alerts
            </Typography>
            {activeAlerts.filter(alert => !alert.resolved).length === 0 ? (
              <Alert severity="success">No active alerts</Alert>
            ) : (
              activeAlerts.filter(alert => !alert.resolved).map(alert => (
                <Alert 
                  key={alert.id}
                  severity={getAlertColor(alert.level)}
                  action={
                    <IconButton 
                      color="inherit" 
                      size="small"
                      onClick={() => resolveAlert(alert.id)}
                    >
                      <Close />
                    </IconButton>
                  }
                  sx={{ mb: 1 }}
                >
                  <Typography variant="body2">{alert.message}</Typography>
                </Alert>
              ))
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Risk Category Breakdown
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(riskAssessment.categories).map(([category, score]) => (
                <Grid item xs={12} md={2.4} key={category}>
                  <Paper sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="h4" color={
                      score > 0.5 ? 'error.main' : 
                      score > 0.3 ? 'warning.main' : 'success.main'
                    }>
                      {Math.round(score * 100)}%
                    </Typography>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {category}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={score * 100}
                      sx={{
                        mt: 1,
                        height: 4,
                        borderRadius: 2,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: score > 0.5 ? '#f44336' : 
                                         score > 0.3 ? '#ff9800' : '#4caf50'
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

  const renderEarlyWarning = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Early Warning System
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Risk Indicators
              </Typography>
              {earlyWarningSystem.indicators.map((indicator, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle2">{indicator.name}</Typography>
                    <Chip 
                      label={indicator.trend} 
                      size="small"
                      color={indicator.trend === 'increasing' ? 'error' : 
                             indicator.trend === 'stable' ? 'warning' : 'success'}
                    />
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(indicator.current / indicator.threshold) * 100}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(0,0,0,0.1)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: indicator.current > indicator.threshold * 0.8 ? '#f44336' : 
                                       indicator.current > indicator.threshold * 0.6 ? '#ff9800' : '#4caf50'
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="caption">
                      Current: {Math.round(indicator.current * 100)}%
                    </Typography>
                    <Typography variant="caption">
                      Threshold: {Math.round(indicator.threshold * 100)}%
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    Timeframe: {indicator.timeframe} | Confidence: {Math.round(indicator.confidence * 100)}%
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Predictive Analysis
              </Typography>
              {earlyWarningSystem.predictions.map((prediction, index) => (
                <Alert 
                  key={index}
                  severity={prediction.probability > 0.5 ? 'error' : 
                           prediction.probability > 0.3 ? 'warning' : 'info'}
                  sx={{ mb: 2 }}
                >
                  <Typography variant="subtitle2">
                    {prediction.event}
                  </Typography>
                  <Typography variant="body2">
                    Probability: {Math.round(prediction.probability * 100)}% in {prediction.timeframe}
                  </Typography>
                  <Typography variant="body2">
                    Confidence: {Math.round(prediction.confidence * 100)}%
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      Key triggers: {prediction.triggers.join(', ')}
                    </Typography>
                  </Box>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderInterventionProtocols = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Intervention Protocols
      </Typography>
      
      {interventionProtocols.map(protocol => (
        <Card key={protocol.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h6">{protocol.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Triggers at {Math.round(protocol.triggerLevel * 100)}% risk level
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h4" color="primary.main">
                  {Math.round(protocol.effectiveness * 100)}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Effective
                </Typography>
              </Box>
            </Box>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle2">Protocol Steps</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stepper orientation="vertical">
                  {protocol.steps.map((step, index) => (
                    <Step key={index} active>
                      <StepLabel>{step}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                
                <Box sx={{ mt: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Available Resources:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {protocol.resources.map((resource, index) => (
                      <Chip key={index} label={resource} size="small" variant="outlined" />
                    ))}
                  </Box>
                </Box>
                
                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="caption" color="text.secondary">
                    Average Resolution: {protocol.averageResolution}
                  </Typography>
                  <Button variant="outlined" size="small">
                    Test Protocol
                  </Button>
                </Box>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderSupportResources = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Support Resources
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: 'error.main' }}>
                Immediate Crisis Support
              </Typography>
              {supportResources.immediate.map((resource, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'error.light' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {resource.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {resource.contact}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">
                      {resource.availability}
                    </Typography>
                    <Typography variant="caption">
                      {resource.response_time}
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {resource.specialization}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{ mt: 1 }}
                    onClick={() => onEmergencyContact?.(resource)}
                  >
                    Contact Now
                  </Button>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: 'warning.main' }}>
                Professional Support
              </Typography>
              {supportResources.professional.map((resource, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'warning.light' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {resource.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {resource.availability}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    {resource.specialization}
                  </Typography>
                  <Typography variant="caption" color="primary.main">
                    {resource.cost}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="warning"
                    fullWidth
                    sx={{ mt: 1 }}
                  >
                    Schedule Appointment
                  </Button>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: 'info.main' }}>
                Peer Support
              </Typography>
              {supportResources.peer.map((resource, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2, border: '1px solid', borderColor: 'info.light' }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {resource.name}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {resource.availability}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    {resource.specialization}
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    {resource.cost}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="info"
                    fullWidth
                    sx={{ mt: 1 }}
                  >
                    Join Now
                  </Button>
                </Paper>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <Security sx={{ mr: 2, fontSize: 40 }} />
        Crisis Prevention System
        <Chip label="Proactive Protection" color="primary" sx={{ ml: 2 }} />
        <Badge 
          badgeContent={activeAlerts.filter(a => !a.resolved).length} 
          color={getSystemStatusColor()}
          sx={{ ml: 2 }}
        >
          <NotificationImportant />
        </Badge>
      </Typography>
      
      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="System Overview" />
        <Tab label="Early Warning" />
        <Tab label="Intervention Protocols" />
        <Tab label="Support Resources" />
      </Tabs>

      {selectedTab === 0 && renderSystemOverview()}
      {selectedTab === 1 && renderEarlyWarning()}
      {selectedTab === 2 && renderInterventionProtocols()}
      {selectedTab === 3 && renderSupportResources()}
    </Box>
  );
};

export default CrisisPreventionSystem;