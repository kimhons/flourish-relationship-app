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
  Tabs,
  Tab,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
  Slider
} from '@mui/material';
import {
  Psychology,
  EmojiEmotions,
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  Analytics,
  Timeline,
  Assessment,
  Insights,
  AutoAwesome,
  SmartToy,
  Lightbulb,
  Warning,
  Error,
  CheckCircle,
  Info,
  Favorite,
  FavoriteBorder,
  SentimentVerySatisfied,
  SentimentSatisfied,
  SentimentNeutral,
  SentimentDissatisfied,
  SentimentVeryDissatisfied,
  Face,
  RecordVoiceOver,
  Hearing,
  Visibility,
  TouchApp,
  Gesture,
  Message,
  Call,
  VideoCall,
  CameraAlt,
  Mic,
  VolumeUp,
  Settings,
  Tune,
  FilterList,
  Sort,
  Search,
  Clear,
  Refresh,
  Save,
  Download,
  Upload,
  Share,
  Print,
  MoreVert,
  ExpandMore,
  ChevronRight,
  ArrowUpward,
  ArrowDownward,
  Speed,
  Schedule,
  Today,
  DateRange,
  AccessTime,
  Alarm,
  AlarmOn,
  AlarmOff,
  NotificationsActive,
  NotificationsOff,
  Vibration,
  VolumeOff,
  VolumeMute,
  VolumeDown,
  BrightnessMedium,
  BrightnessHigh,
  BrightnessLow,
  Contrast,
  ColorLens,
  Palette,
  BrushOutlined,
  FormatColorFill,
  Gradient,
  Texture,
  Pattern,
  Style,
  Mood,
  MoodBad,
  Whatshot,
  LocalFireDepartment,
  AcUnit,
  WbSunny,
  Cloud,
  CloudQueue,
  Storm,
  FlashOn,
  FlashOff,
  WaterDrop,
  Air,
  Eco,
  Nature,
  Spa,
  SelfImprovement,
  FitnessCenter,
  DirectionsRun,
  DirectionsWalk,
  SportsKabaddi,
  SportsMartialArts,
  SportsGymnastics,
  Pool,
  Waves,
  BeachAccess,
  Sailing,
  Surfing,
  Kitesurfing,
  Snowboarding,
  Skiing,
  Snowshoeing,
  IceSkating,
  Sledding,
  AcUnit as SnowIcon
} from '@mui/icons-material';

const EmotionalIntelligenceEngine = ({ 
  userId,
  realTimeData = {},
  onEmotionalInsight,
  onInterventionTrigger,
  onPatternDetected 
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [emotionalProfile, setEmotionalProfile] = useState({
    baseline: {
      joy: 0.65,
      trust: 0.70,
      fear: 0.25,
      surprise: 0.45,
      sadness: 0.20,
      disgust: 0.15,
      anger: 0.20,
      anticipation: 0.60
    },
    current: {
      joy: 0.45,
      trust: 0.60,
      fear: 0.40,
      surprise: 0.30,
      sadness: 0.35,
      disgust: 0.25,
      anger: 0.30,
      anticipation: 0.50
    },
    trends: {
      improving: ['trust', 'joy'],
      declining: ['fear', 'sadness'],
      stable: ['anger', 'disgust', 'surprise', 'anticipation']
    },
    triggers: [
      { trigger: 'rejection', emotions: ['sadness', 'anger'], confidence: 0.87 },
      { trigger: 'new_connection', emotions: ['joy', 'anticipation'], confidence: 0.92 },
      { trigger: 'conflict', emotions: ['anger', 'fear'], confidence: 0.78 },
      { trigger: 'intimacy', emotions: ['joy', 'trust'], confidence: 0.85 }
    ]
  });

  const [emotionalPatterns, setEmotionalPatterns] = useState([
    {
      id: 1,
      name: 'Morning Optimism',
      description: 'Elevated joy and anticipation levels in morning hours',
      timePattern: 'morning',
      emotions: ['joy', 'anticipation'],
      strength: 0.82,
      frequency: 'daily',
      lastDetected: new Date(Date.now() - 86400000),
      recommendations: [
        'Schedule important conversations in the morning',
        'Use morning energy for profile optimization',
        'Plan dates during peak emotional times'
      ]
    },
    {
      id: 2,
      name: 'Weekend Vulnerability',
      description: 'Increased openness and trust during weekends',
      timePattern: 'weekend',
      emotions: ['trust', 'joy'],
      strength: 0.75,
      frequency: 'weekly',
      lastDetected: new Date(Date.now() - 172800000),
      recommendations: [
        'Weekend conversations tend to be more meaningful',
        'Higher likelihood of successful date planning',
        'Emotional barriers are lower on weekends'
      ]
    },
    {
      id: 3,
      name: 'Stress Response Pattern',
      description: 'Predictable stress cycle before important dates',
      timePattern: 'pre-event',
      emotions: ['fear', 'anticipation'],
      strength: 0.88,
      frequency: 'situational',
      lastDetected: new Date(Date.now() - 259200000),
      recommendations: [
        'Implement stress-reduction techniques',
        'Practice mindfulness before dates',
        'Use coaching support for pre-date anxiety'
      ]
    }
  ]);

  const [realTimeAnalysis, setRealTimeAnalysis] = useState({
    textSentiment: { score: 0.6, confidence: 0.85, words: ['excited', 'nervous', 'hopeful'] },
    voiceAnalysis: { tone: 'slightly anxious', energy: 0.7, pace: 'normal', confidence: 0.78 },
    behaviorAnalysis: { 
      appUsage: 'increased', 
      responseTime: 'faster', 
      engagement: 'high',
      patterns: ['frequent profile checks', 'message re-reading']
    },
    contextualFactors: {
      timeOfDay: 'evening',
      dayOfWeek: 'Friday',
      recentEvents: ['new match', 'planned date'],
      environmentalFactors: ['weekend approaching', 'good weather']
    }
  });

  const [interventionSystem, setInterventionSystem] = useState({
    activeInterventions: [
      {
        id: 1,
        type: 'anxiety_support',
        trigger: 'pre-date_stress',
        confidence: 0.89,
        urgency: 'medium',
        techniques: ['breathing_exercise', 'positive_visualization', 'grounding_technique'],
        status: 'active',
        startTime: new Date(Date.now() - 300000),
        effectiveness: null
      }
    ],
    availableInterventions: [
      {
        name: 'Mindfulness Break',
        type: 'anxiety_relief',
        duration: '5 minutes',
        effectiveness: 0.83,
        applicableEmotions: ['fear', 'anger', 'sadness']
      },
      {
        name: 'Confidence Booster',
        type: 'mood_enhancement',
        duration: '3 minutes',
        effectiveness: 0.76,
        applicableEmotions: ['sadness', 'fear']
      },
      {
        name: 'Communication Coach',
        type: 'skill_building',
        duration: '10 minutes',
        effectiveness: 0.91,
        applicableEmotions: ['fear', 'anticipation']
      }
    ]
  });

  const [insightGeneration, setInsightGeneration] = useState({
    personalizedInsights: [
      {
        id: 1,
        title: 'Your Emotional Sweet Spot',
        insight: 'You tend to form deeper connections when your trust levels are above 70% and joy is above 60%. This typically happens on weekend mornings.',
        confidence: 0.92,
        actionable: true,
        actions: ['Schedule important conversations for weekend mornings', 'Use emotional state tracking'],
        category: 'optimization'
      },
      {
        id: 2,
        title: 'Stress Pattern Recognition',
        insight: 'Your stress response peaks 24-48 hours before planned dates. Early intervention with relaxation techniques improves date outcomes by 34%.',
        confidence: 0.87,
        actionable: true,
        actions: ['Set pre-date reminders for stress management', 'Practice visualization techniques'],
        category: 'prevention'
      },
      {
        id: 3,
        title: 'Communication Style Adaptation',
        insight: 'When your trust levels are below 50%, you communicate 40% less openly. Recognizing this pattern can help you adjust your messaging style.',
        confidence: 0.84,
        actionable: true,
        actions: ['Use trust-building conversation starters', 'Be aware of closed communication patterns'],
        category: 'awareness'
      }
    ],
    predictiveInsights: [
      {
        prediction: 'High likelihood of positive interaction tomorrow morning (89%)',
        reasoning: 'Historical pattern shows elevated mood on Saturday mornings + positive recent interactions',
        confidence: 0.89,
        timeframe: '12-16 hours'
      },
      {
        prediction: 'Potential stress spike if date is scheduled for Sunday evening (76%)',
        reasoning: 'Sunday anxiety pattern + end-of-weekend emotional decline',
        confidence: 0.76,
        timeframe: '2-3 days'
      }
    ]
  });

  // Emotion color mapping
  const emotionColors = {
    joy: '#4caf50',
    trust: '#2196f3',
    fear: '#ff9800',
    surprise: '#9c27b0',
    sadness: '#607d8b',
    disgust: '#795548',
    anger: '#f44336',
    anticipation: '#00bcd4'
  };

  // Emotion icons
  const emotionIcons = {
    joy: <SentimentVerySatisfied />,
    trust: <SentimentSatisfied />,
    fear: <SentimentDissatisfied />,
    surprise: <SentimentNeutral />,
    sadness: <SentimentVeryDissatisfied />,
    disgust: <SentimentDissatisfied />,
    anger: <SentimentVeryDissatisfied />,
    anticipation: <SentimentSatisfied />
  };

  useEffect(() => {
    // Simulate real-time emotional analysis
    const analyzeRealTime = () => {
      setIsAnalyzing(true);
      
      // Simulate processing time
      setTimeout(() => {
        // Update emotional state based on real-time data
        const variance = () => (Math.random() - 0.5) * 0.1;
        
        setEmotionalProfile(prev => ({
          ...prev,
          current: Object.keys(prev.current).reduce((acc, emotion) => {
            acc[emotion] = Math.max(0, Math.min(1, prev.current[emotion] + variance()));
            return acc;
          }, {})
        }));
        
        setIsAnalyzing(false);
      }, 2000);
    };

    const interval = setInterval(analyzeRealTime, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, [realTimeData]);

  const generateEmotionalInsight = () => {
    const dominantEmotion = Object.entries(emotionalProfile.current)
      .sort(([,a], [,b]) => b - a)[0];
    
    const insight = {
      emotion: dominantEmotion[0],
      intensity: dominantEmotion[1],
      confidence: Math.random() * 0.3 + 0.7,
      timestamp: Date.now(),
      recommendations: getRecommendationsForEmotion(dominantEmotion[0], dominantEmotion[1])
    };

    onEmotionalInsight?.(insight);
    return insight;
  };

  const getRecommendationsForEmotion = (emotion, intensity) => {
    const recommendations = {
      joy: [
        'This is a great time for meaningful conversations',
        'Consider sharing positive experiences with matches',
        'Your authentic happiness is attractive - let it shine'
      ],
      trust: [
        'Open up about your values and life goals',
        'Share personal stories to deepen connections',
        'This is ideal for planning future activities'
      ],
      fear: [
        'Take things at a comfortable pace',
        'Focus on building safety and security',
        'Consider what specific fears you can address'
      ],
      anger: [
        'Take a step back before responding to messages',
        'Focus on self-care and emotional regulation',
        'Avoid making important decisions while upset'
      ],
      sadness: [
        'Practice self-compassion and patience',
        'Consider reaching out to supportive friends',
        'Focus on activities that bring you comfort'
      ]
    };

    return recommendations[emotion] || ['Focus on emotional awareness and self-care'];
  };

  const renderEmotionalDashboard = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Psychology sx={{ mr: 1 }} />
              Current Emotional State
              {isAnalyzing && <CircularProgress size={16} sx={{ ml: 1 }} />}
            </Typography>
            
            {Object.entries(emotionalProfile.current).map(([emotion, value]) => (
              <Box key={emotion} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box sx={{ color: emotionColors[emotion], mr: 1 }}>
                    {emotionIcons[emotion]}
                  </Box>
                  <Typography variant="body2" sx={{ textTransform: 'capitalize', flex: 1 }}>
                    {emotion}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {Math.round(value * 100)}%
                  </Typography>
                </Box>
                <LinearProgress
                  variant="determinate"
                  value={value * 100}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: emotionColors[emotion]
                    }
                  }}
                />
              </Box>
            ))}
            
            <Button
              variant="outlined"
              fullWidth
              onClick={generateEmotionalInsight}
              sx={{ mt: 2 }}
            >
              Generate Insight
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <TrendingUp sx={{ mr: 1 }} />
              Emotional Trends
            </Typography>
            
            {Object.entries(emotionalProfile.trends).map(([trend, emotions]) => (
              <Box key={trend} sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, textTransform: 'capitalize' }}>
                  {trend} ({emotions.length})
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {emotions.map(emotion => (
                    <Chip
                      key={emotion}
                      label={emotion}
                      size="small"
                      sx={{
                        backgroundColor: emotionColors[emotion],
                        color: 'white'
                      }}
                      icon={emotionIcons[emotion]}
                    />
                  ))}
                </Box>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
              <Analytics sx={{ mr: 1 }} />
              Real-time Analysis
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main">
                    {Math.round(realTimeAnalysis.textSentiment.score * 100)}%
                  </Typography>
                  <Typography variant="body2">Text Sentiment</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {realTimeAnalysis.textSentiment.confidence * 100}% confident
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main">
                    {Math.round(realTimeAnalysis.voiceAnalysis.energy * 100)}%
                  </Typography>
                  <Typography variant="body2">Voice Energy</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {realTimeAnalysis.voiceAnalysis.tone}
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main">
                    High
                  </Typography>
                  <Typography variant="body2">Engagement</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {realTimeAnalysis.behaviorAnalysis.appUsage}
                  </Typography>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <Typography variant="h4" color="primary.main">
                    {realTimeAnalysis.contextualFactors.recentEvents.length}
                  </Typography>
                  <Typography variant="body2">Recent Events</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {realTimeAnalysis.contextualFactors.timeOfDay}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  const renderPatternAnalysis = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Emotional Pattern Recognition
      </Typography>
      
      {emotionalPatterns.map(pattern => (
        <Card key={pattern.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Box>
                <Typography variant="h6">{pattern.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {pattern.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {pattern.emotions.map(emotion => (
                    <Chip
                      key={emotion}
                      label={emotion}
                      size="small"
                      sx={{
                        backgroundColor: emotionColors[emotion],
                        color: 'white'
                      }}
                    />
                  ))}
                </Box>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h4" color="primary.main">
                  {Math.round(pattern.strength * 100)}%
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Strength
                </Typography>
              </Box>
            </Box>
            
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="subtitle2">Recommendations</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {pattern.recommendations.map((rec, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Lightbulb color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={rec} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderInterventionSystem = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Intervention & Support System
      </Typography>
      
      {interventionSystem.activeInterventions.length > 0 && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Active Interventions
            </Typography>
            {interventionSystem.activeInterventions.map(intervention => (
              <Alert
                key={intervention.id}
                severity={intervention.urgency === 'high' ? 'error' : intervention.urgency === 'medium' ? 'warning' : 'info'}
                sx={{ mb: 2 }}
              >
                <Typography variant="subtitle2">
                  {intervention.type.replace('_', ' ').toUpperCase()}
                </Typography>
                <Typography variant="body2">
                  Confidence: {Math.round(intervention.confidence * 100)}% | 
                  Started: {new Date(intervention.startTime).toLocaleTimeString()}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {intervention.techniques.map(technique => (
                    <Chip
                      key={technique}
                      label={technique.replace('_', ' ')}
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  ))}
                </Box>
              </Alert>
            ))}
          </CardContent>
        </Card>
      )}
      
      <Card>
        <CardContent>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Available Interventions
          </Typography>
          <Grid container spacing={2}>
            {interventionSystem.availableInterventions.map((intervention, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 2, height: '100%' }}>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {intervention.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {intervention.duration} | {Math.round(intervention.effectiveness * 100)}% effective
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {intervention.applicableEmotions.map(emotion => (
                      <Chip
                        key={emotion}
                        label={emotion}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => onInterventionTrigger?.(intervention)}
                  >
                    Start Session
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );

  const renderInsightGeneration = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        AI-Generated Insights
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Personalized Insights
          </Typography>
          {insightGeneration.personalizedInsights.map(insight => (
            <Accordion key={insight.id}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box>
                  <Typography variant="h6">{insight.title}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {Math.round(insight.confidence * 100)}% confidence | {insight.category}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {insight.insight}
                </Typography>
                {insight.actionable && (
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Recommended Actions:
                    </Typography>
                    <List dense>
                      {insight.actions.map((action, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <CheckCircle color="success" />
                          </ListItemIcon>
                          <ListItemText primary={action} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
      
      <Card>
        <CardContent>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Predictive Insights
          </Typography>
          {insightGeneration.predictiveInsights.map((prediction, index) => (
            <Alert key={index} severity="info" sx={{ mb: 2 }}>
              <Typography variant="subtitle2">
                {prediction.prediction}
              </Typography>
              <Typography variant="body2">
                {prediction.reasoning}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {Math.round(prediction.confidence * 100)}% confidence | Timeframe: {prediction.timeframe}
              </Typography>
            </Alert>
          ))}
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
        <EmojiEmotions sx={{ mr: 2, fontSize: 40 }} />
        Emotional Intelligence Engine
        <Chip label="AI-Powered" color="primary" sx={{ ml: 2 }} />
      </Typography>
      
      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Dashboard" />
        <Tab label="Patterns" />
        <Tab label="Interventions" />
        <Tab label="Insights" />
      </Tabs>

      {selectedTab === 0 && renderEmotionalDashboard()}
      {selectedTab === 1 && renderPatternAnalysis()}
      {selectedTab === 2 && renderInterventionSystem()}
      {selectedTab === 3 && renderInsightGeneration()}
    </Box>
  );
};

export default EmotionalIntelligenceEngine;