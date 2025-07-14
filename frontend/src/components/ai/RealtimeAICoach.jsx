import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Button,
  IconButton,
  Fade,
  Slide,
  Zoom,
  Paper,
  LinearProgress,
  Dialog,
  DialogContent,
  Tooltip,
  Badge,
  Fab,
  Alert,
  List,
  ListItem,
  ListItemText,
  Divider,
  CircularProgress
} from '@mui/material';
import {
  Psychology,
  AutoAwesome,
  TrendingUp,
  Lightbulb,
  Warning,
  CheckCircle,
  Error,
  Info,
  Close,
  Minimize,
  Fullscreen,
  VolumeUp,
  VolumeOff,
  Mic,
  MicOff,
  Pause,
  PlayArrow,
  Speed,
  Settings,
  Help,
  Favorite,
  Star,
  EmojiEmotions,
  SentimentSatisfied,
  SentimentNeutral,
  SentimentDissatisfied,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
  Timeline,
  Analytics,
  PsychologyAlt,
  SmartToy,
  RecordVoiceOver,
  Chat,
  CameraAlt,
  Visibility,
  TouchApp,
  Gesture,
  PhoneAndroid,
  Computer,
  Tablet,
  Watch,
  LocationOn,
  Schedule,
  Event,
  Person,
  Group,
  Message,
  Call,
  VideoCall,
  Email,
  NotificationsActive,
  Emergency,
  SupportAgent,
  School,
  MenuBook,
  Quiz,
  Assignment,
  AssignmentTurnedIn,
  TrendingDown,
  TrendingFlat,
  BatteryAlert,
  SignalWifi4Bar,
  Bluetooth,
  Gps,
  DataUsage,
  NetworkCheck,
  CloudSync,
  Sync,
  SyncProblem,
  SyncDisabled,
  Update,
  Refresh,
  RestorePage,
  Backup,
  Security,
  Lock,
  Shield,
  VerifiedUser,
  AdminPanelSettings,
  ManageAccounts,
  SupervisorAccount,
  AccountCircle,
  Face,
  Fingerprint,
  Key,
  VpnKey,
  Policy,
  Gavel,
  Balance,
  Scale
} from '@mui/icons-material';

const RealtimeAICoach = ({ 
  isActive = true, 
  context = 'general', 
  userEmotionalState = 'neutral',
  currentActivity = 'browsing',
  relationshipStage = 'single',
  onCoachingAction,
  onEmergencyIntervention
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [currentInsight, setCurrentInsight] = useState(null);
  const [emotionalTrend, setEmotionalTrend] = useState([]);
  const [activeInterventions, setActiveInterventions] = useState([]);
  const [coachingHistory, setCoachingHistory] = useState([]);
  const [urgencyLevel, setUrgencyLevel] = useState('low');
  const [confidenceScore, setConfidenceScore] = useState(0.92);
  const [learningProgress, setLearningProgress] = useState(0);

  const coachRef = useRef(null);
  const interventionTimeoutRef = useRef(null);

  // Emotional intelligence states
  const [emotionalAnalysis, setEmotionalAnalysis] = useState({
    primary: 'neutral',
    secondary: null,
    intensity: 0.5,
    confidence: 0.85,
    triggers: [],
    patterns: [],
    recommendations: []
  });

  // Real-time coaching insights based on context
  const contextualInsights = {
    messaging: {
      positive: [
        "Great conversation starter! Your authenticity is showing through.",
        "I notice you're being genuinely curious - that's attractive!",
        "Your emotional intelligence is creating connection."
      ],
      neutral: [
        "Consider asking about their passions - it often sparks deeper connection.",
        "Share a personal story to invite reciprocal vulnerability.",
        "Try reflecting their energy level in your responses."
      ],
      negative: [
        "I sense some tension. Taking a breath before responding often helps.",
        "This might be a good time to acknowledge their perspective.",
        "Consider shifting to a lighter topic to reset the dynamic."
      ],
      crisis: [
        "I'm detecting distress signals. Would you like me to suggest some grounding techniques?",
        "This conversation seems to be causing anxiety. Should we explore healthier boundaries?",
        "I notice concerning patterns. Let's focus on your wellbeing first."
      ]
    },
    profile_viewing: {
      positive: [
        "You're taking time to really understand potential matches - great approach!",
        "I see you're looking beyond surface level - that's wisdom.",
        "Your selective approach shows healthy standards."
      ],
      neutral: [
        "Look for shared values and life goals - they predict compatibility.",
        "Notice how they express themselves - communication style matters.",
        "Consider their relationship with family and friends."
      ],
      negative: [
        "I notice you've been swiping for a while. How are you feeling?",
        "Remember, quality over quantity leads to better matches.",
        "Taking breaks helps maintain perspective and avoid decision fatigue."
      ]
    },
    date_planning: {
      positive: [
        "Love this choice! It shows thoughtfulness and creativity.",
        "This activity aligns well with building genuine connection.",
        "You're setting up an environment for authentic conversation."
      ],
      neutral: [
        "Consider activities that allow for natural conversation flow.",
        "Think about what would help you both feel comfortable and engaged.",
        "Public places often work well for first dates - safety first!"
      ],
      negative: [
        "I'm sensing some anxiety about this date. That's completely normal!",
        "Remember, the goal is mutual enjoyment, not performance.",
        "Trust your instincts - if something feels off, it's okay to adjust."
      ]
    }
  };

  // Crisis detection patterns
  const crisisPatterns = [
    { pattern: 'harassment', urgency: 'high', intervention: 'immediate' },
    { pattern: 'emotional_abuse', urgency: 'high', intervention: 'support' },
    { pattern: 'safety_concern', urgency: 'critical', intervention: 'emergency' },
    { pattern: 'depression_signs', urgency: 'medium', intervention: 'resources' },
    { pattern: 'anxiety_spike', urgency: 'medium', intervention: 'techniques' },
    { pattern: 'toxic_relationship', urgency: 'high', intervention: 'guidance' }
  ];

  useEffect(() => {
    // Simulate real-time emotional analysis
    const analyzeEmotionalState = () => {
      const emotions = ['joy', 'trust', 'fear', 'surprise', 'sadness', 'disgust', 'anger', 'anticipation'];
      const intensities = [0.1, 0.3, 0.5, 0.7, 0.9];
      
      setEmotionalAnalysis(prev => ({
        ...prev,
        primary: userEmotionalState,
        intensity: Math.random() * 0.8 + 0.2,
        confidence: Math.random() * 0.3 + 0.7,
        timestamp: Date.now()
      }));
    };

    const interval = setInterval(analyzeEmotionalState, 5000);
    return () => clearInterval(interval);
  }, [userEmotionalState]);

  useEffect(() => {
    // Generate contextual insights
    if (isActive && context) {
      const insights = contextualInsights[context];
      if (insights) {
        let insightLevel = 'neutral';
        
        if (emotionalAnalysis.intensity > 0.7) {
          insightLevel = emotionalAnalysis.primary === 'joy' || emotionalAnalysis.primary === 'trust' ? 'positive' : 'negative';
        }
        
        if (emotionalAnalysis.intensity > 0.8 && ['fear', 'anger', 'sadness'].includes(emotionalAnalysis.primary)) {
          insightLevel = 'crisis';
        }

        const availableInsights = insights[insightLevel] || insights.neutral;
        const selectedInsight = availableInsights[Math.floor(Math.random() * availableInsights.length)];
        
        setCurrentInsight({
          text: selectedInsight,
          type: insightLevel,
          confidence: confidenceScore,
          timestamp: Date.now(),
          context: context
        });
      }
    }
  }, [context, emotionalAnalysis, isActive]);

  useEffect(() => {
    // Crisis detection and intervention
    const detectCrisis = () => {
      if (emotionalAnalysis.intensity > 0.8 && ['fear', 'anger', 'sadness'].includes(emotionalAnalysis.primary)) {
        const crisis = crisisPatterns.find(p => 
          p.pattern === `${emotionalAnalysis.primary}_spike` || 
          p.urgency === 'high'
        );
        
        if (crisis && !activeInterventions.find(i => i.type === crisis.pattern)) {
          triggerIntervention(crisis);
        }
      }
    };

    if (isActive) {
      detectCrisis();
    }
  }, [emotionalAnalysis, isActive]);

  const triggerIntervention = (crisis) => {
    const intervention = {
      id: Date.now(),
      type: crisis.pattern,
      urgency: crisis.urgency,
      intervention: crisis.intervention,
      timestamp: Date.now(),
      resolved: false
    };

    setActiveInterventions(prev => [...prev, intervention]);
    setUrgencyLevel(crisis.urgency);

    if (crisis.urgency === 'critical') {
      onEmergencyIntervention?.(intervention);
    }

    // Auto-resolve lower priority interventions
    if (crisis.urgency === 'low') {
      setTimeout(() => {
        resolveIntervention(intervention.id);
      }, 30000);
    }
  };

  const resolveIntervention = (interventionId) => {
    setActiveInterventions(prev => 
      prev.map(i => i.id === interventionId ? { ...i, resolved: true } : i)
    );
  };

  const handleCoachingAction = (action, data) => {
    const coachingEvent = {
      action,
      data,
      timestamp: Date.now(),
      context,
      emotionalState: emotionalAnalysis.primary,
      confidence: confidenceScore
    };

    setCoachingHistory(prev => [...prev.slice(-9), coachingEvent]);
    onCoachingAction?.(coachingEvent);
  };

  const getEmotionIcon = (emotion) => {
    const icons = {
      joy: <SentimentVerySatisfied color="success" />,
      trust: <SentimentSatisfied color="primary" />,
      neutral: <SentimentNeutral color="action" />,
      fear: <SentimentDissatisfied color="warning" />,
      anger: <SentimentVeryDissatisfied color="error" />,
      sadness: <SentimentDissatisfied color="warning" />
    };
    return icons[emotion] || icons.neutral;
  };

  const getUrgencyColor = (urgency) => {
    const colors = {
      low: 'success',
      medium: 'warning',
      high: 'error',
      critical: 'error'
    };
    return colors[urgency] || 'primary';
  };

  const renderCoachInterface = () => (
    <Card 
      sx={{ 
        position: 'fixed',
        bottom: isMinimized ? 20 : 100,
        right: 20,
        width: isMinimized ? 60 : 320,
        height: isMinimized ? 60 : 480,
        zIndex: 1300,
        transition: 'all 0.3s ease',
        borderRadius: isMinimized ? '50%' : 2,
        overflow: 'hidden',
        background: urgencyLevel === 'critical' 
          ? 'linear-gradient(45deg, #ff5722 30%, #ff9800 90%)'
          : urgencyLevel === 'high'
          ? 'linear-gradient(45deg, #ff9800 30%, #ffc107 90%)'
          : 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
        boxShadow: urgencyLevel === 'critical' ? '0 0 20px rgba(255, 87, 34, 0.5)' : 3
      }}
      ref={coachRef}
    >
      {isMinimized ? (
        <Box 
          sx={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => setIsMinimized(false)}
        >
          <Badge 
            badgeContent={activeInterventions.filter(i => !i.resolved).length} 
            color={getUrgencyColor(urgencyLevel)}
          >
            <Psychology sx={{ color: 'white', fontSize: 30 }} />
          </Badge>
        </Box>
      ) : (
        <CardContent sx={{ p: 0, height: '100%', color: 'white' }}>
          {/* Header */}
          <Box sx={{ 
            p: 2, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255,255,255,0.2)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.2)', mr: 1 }}>
                <Psychology />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                  Dr. Flourish AI
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.8 }}>
                  Confidence: {Math.round(confidenceScore * 100)}%
                </Typography>
              </Box>
            </Box>
            <Box>
              <IconButton 
                size="small" 
                sx={{ color: 'white', mr: 1 }}
                onClick={() => setIsMinimized(true)}
              >
                <Minimize />
              </IconButton>
              <IconButton 
                size="small" 
                sx={{ color: 'white' }}
                onClick={() => setIsVisible(false)}
              >
                <Close />
              </IconButton>
            </Box>
          </Box>

          {/* Emotional State */}
          <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              {getEmotionIcon(emotionalAnalysis.primary)}
              <Typography variant="body2" sx={{ ml: 1, textTransform: 'capitalize' }}>
                {emotionalAnalysis.primary} ({Math.round(emotionalAnalysis.intensity * 100)}%)
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={emotionalAnalysis.intensity * 100}
              sx={{ 
                height: 4, 
                borderRadius: 2,
                backgroundColor: 'rgba(255,255,255,0.2)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: emotionalAnalysis.intensity > 0.7 ? '#ff5722' : '#4caf50'
                }
              }}
            />
          </Box>

          {/* Active Interventions */}
          {activeInterventions.filter(i => !i.resolved).length > 0 && (
            <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
              <Typography variant="subtitle2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                <Warning sx={{ fontSize: 16, mr: 1 }} />
                Active Interventions
              </Typography>
              {activeInterventions.filter(i => !i.resolved).map(intervention => (
                <Chip
                  key={intervention.id}
                  label={intervention.type.replace('_', ' ')}
                  size="small"
                  color={getUrgencyColor(intervention.urgency)}
                  onDelete={() => resolveIntervention(intervention.id)}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
          )}

          {/* Current Insight */}
          {currentInsight && (
            <Box sx={{ p: 2, flex: 1, overflow: 'auto' }}>
              <Typography variant="subtitle2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                <Lightbulb sx={{ fontSize: 16, mr: 1 }} />
                Real-time Insight
              </Typography>
              <Alert 
                severity={currentInsight.type === 'crisis' ? 'error' : currentInsight.type === 'negative' ? 'warning' : 'info'}
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  '& .MuiAlert-icon': { color: 'white' }
                }}
              >
                <Typography variant="body2">
                  {currentInsight.text}
                </Typography>
              </Alert>
              
              <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                  onClick={() => handleCoachingAction('accept_insight', currentInsight)}
                >
                  Apply
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                  onClick={() => handleCoachingAction('request_alternatives', currentInsight)}
                >
                  More Options
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ color: 'white', borderColor: 'white' }}
                  onClick={() => handleCoachingAction('explain_insight', currentInsight)}
                >
                  Why?
                </Button>
              </Box>
            </Box>
          )}

          {/* Quick Actions */}
          <Box sx={{ 
            p: 2, 
            borderTop: '1px solid rgba(255,255,255,0.2)',
            display: 'flex',
            justifyContent: 'space-around'
          }}>
            <IconButton 
              size="small" 
              sx={{ color: 'white' }}
              onClick={() => setIsListening(!isListening)}
            >
              {isListening ? <MicOff /> : <Mic />}
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ color: 'white' }}
              onClick={() => handleCoachingAction('emergency_support')}
            >
              <Emergency />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ color: 'white' }}
              onClick={() => handleCoachingAction('view_analytics')}
            >
              <Analytics />
            </IconButton>
            <IconButton 
              size="small" 
              sx={{ color: 'white' }}
              onClick={() => handleCoachingAction('settings')}
            >
              <Settings />
            </IconButton>
          </Box>
        </CardContent>
      )}
    </Card>
  );

  if (!isVisible || !isActive) return null;

  return (
    <Fade in={isVisible}>
      {renderCoachInterface()}
    </Fade>
  );
};

export default RealtimeAICoach;