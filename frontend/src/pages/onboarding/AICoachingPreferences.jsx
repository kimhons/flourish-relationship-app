import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Grid,
  Avatar,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Tooltip,
  Badge,
  Fade,
  Slide,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  TextField,
  Slider,
  Rating,
  Tabs,
  Tab,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Psychology,
  AutoAwesome,
  SmartToy,
  Lightbulb,
  TrendingUp,
  Schedule,
  Notifications,
  VolumeUp,
  VolumeOff,
  Speed,
  Tune,
  PersonalVideo,
  ChatBubble,
  School,
  Favorite,
  Group,
  Star,
  Settings,
  Help,
  HelpOutline,
  CheckCircle,
  Cancel,
  Edit,
  Save,
  Mic,
  MicOff,
  CameraAlt,
  VideoCam,
  Message,
  Phone,
  Email,
  Face,
  EmojiEmotions,
  SentimentSatisfied,
  SentimentNeutral,
  SentimentDissatisfied,
  Timeline,
  Analytics,
  Assessment,
  TrendingDown,
  TrendingFlat,
  Insights,
  Psychology as PsychologyIcon,
  ExpandMore,
  Info,
  Warning,
  Error
} from '@mui/icons-material';

const AICoachingPreferences = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [coachingStyle, setCoachingStyle] = useState('balanced');
  const [preferences, setPreferences] = useState({
    communicationStyle: 'conversational',
    coachingIntensity: 'medium',
    interventionFrequency: 'moderate',
    personalityType: 'supportive',
    learningPace: 'adaptive',
    feedbackStyle: 'constructive',
    motivationLevel: 'encouraging',
    privacyLevel: 'moderate',
    sessionLength: 'medium',
    preferredTime: 'evening',
    reminders: {
      daily: true,
      weekly: true,
      goals: true,
      insights: true,
      checkins: false
    },
    topics: {
      communication: true,
      intimacy: true,
      conflict: true,
      goals: true,
      growth: true,
      dating: true,
      relationships: true,
      selfcare: false
    },
    aiPersonality: {
      empathy: 80,
      directness: 60,
      humor: 70,
      formality: 40,
      enthusiasm: 75
    },
    adaptiveFeatures: {
      learningFromFeedback: true,
      personalizedContent: true,
      contextualAdvice: true,
      emotionalIntelligence: true,
      predictiveInsights: true
    }
  });

  const [previewDialog, setPreviewDialog] = useState(false);
  const [currentPreview, setCurrentPreview] = useState(null);

  const coachingStyles = {
    gentle: {
      name: 'Gentle Guide',
      description: 'Soft, nurturing approach with extra empathy',
      icon: '🌸',
      color: '#e8f5e8',
      characteristics: ['Patient', 'Empathetic', 'Non-judgmental', 'Reassuring']
    },
    balanced: {
      name: 'Balanced Mentor',
      description: 'Perfect blend of support and challenge',
      icon: '⚖️',
      color: '#f0f4ff',
      characteristics: ['Adaptive', 'Thoughtful', 'Encouraging', 'Practical']
    },
    direct: {
      name: 'Direct Coach',
      description: 'Straightforward, goal-oriented coaching',
      icon: '🎯',
      color: '#fff3e0',
      characteristics: ['Honest', 'Efficient', 'Results-focused', 'Clear']
    },
    inspiring: {
      name: 'Inspiring Catalyst',
      description: 'Motivational and energizing approach',
      icon: '🚀',
      color: '#f3e5f5',
      characteristics: ['Energetic', 'Motivational', 'Optimistic', 'Dynamic']
    }
  };

  const updatePreference = (path, value) => {
    const pathArray = path.split('.');
    setPreferences(prev => {
      const newPrefs = { ...prev };
      let current = newPrefs;
      
      for (let i = 0; i < pathArray.length - 1; i++) {
        current = current[pathArray[i]];
      }
      current[pathArray[pathArray.length - 1]] = value;
      
      return newPrefs;
    });
  };

  const handlePreview = (style) => {
    setCurrentPreview(style);
    setPreviewDialog(true);
  };

  const renderCoachingStyleSelection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Psychology sx={{ mr: 1 }} />
          Choose Your AI Coaching Style
        </Typography>
        
        <Alert severity="info" sx={{ mb: 3 }}>
          Your AI coach will adapt to your preferences and can be adjusted anytime.
        </Alert>

        <Grid container spacing={3}>
          {Object.entries(coachingStyles).map(([key, style]) => (
            <Grid item xs={12} md={6} key={key}>
              <Card
                sx={{
                  cursor: 'pointer',
                  border: coachingStyle === key ? '2px solid #1976d2' : '1px solid #e0e0e0',
                  backgroundColor: coachingStyle === key ? style.color : 'transparent',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    transform: 'translateY(-2px)',
                    boxShadow: 2 
                  }
                }}
                onClick={() => setCoachingStyle(key)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ mr: 2 }}>
                      {style.icon}
                    </Typography>
                    <Box>
                      <Typography variant="h6">{style.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {style.description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {style.characteristics.map((char, index) => (
                      <Chip key={index} label={char} size="small" variant="outlined" />
                    ))}
                  </Box>
                  
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePreview(style);
                    }}
                  >
                    Preview
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderPersonalityTuning = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Tune sx={{ mr: 1 }} />
          Fine-tune AI Personality
        </Typography>
        
        <Grid container spacing={3}>
          {Object.entries(preferences.aiPersonality).map(([trait, value]) => (
            <Grid item xs={12} md={6} key={trait}>
              <Typography variant="subtitle1" sx={{ mb: 1, textTransform: 'capitalize' }}>
                {trait}
              </Typography>
              <Slider
                value={value}
                onChange={(e, newValue) => updatePreference(`aiPersonality.${trait}`, newValue)}
                valueLabelDisplay="auto"
                min={0}
                max={100}
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                {trait === 'empathy' && 'How understanding and compassionate should your coach be?'}
                {trait === 'directness' && 'How straightforward should feedback be?'}
                {trait === 'humor' && 'How much lightheartedness should be included?'}
                {trait === 'formality' && 'How formal should the communication style be?'}
                {trait === 'enthusiasm' && 'How energetic and motivating should your coach be?'}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCommunicationPreferences = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <ChatBubble sx={{ mr: 1 }} />
          Communication Preferences
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Communication Style</InputLabel>
              <Select
                value={preferences.communicationStyle}
                onChange={(e) => updatePreference('communicationStyle', e.target.value)}
              >
                <MenuItem value="conversational">Conversational</MenuItem>
                <MenuItem value="professional">Professional</MenuItem>
                <MenuItem value="friendly">Friendly</MenuItem>
                <MenuItem value="formal">Formal</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Coaching Intensity</InputLabel>
              <Select
                value={preferences.coachingIntensity}
                onChange={(e) => updatePreference('coachingIntensity', e.target.value)}
              >
                <MenuItem value="light">Light Touch</MenuItem>
                <MenuItem value="medium">Medium Intensity</MenuItem>
                <MenuItem value="intensive">Intensive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Intervention Frequency</InputLabel>
              <Select
                value={preferences.interventionFrequency}
                onChange={(e) => updatePreference('interventionFrequency', e.target.value)}
              >
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="moderate">Moderate</MenuItem>
                <MenuItem value="frequent">Frequent</MenuItem>
                <MenuItem value="proactive">Proactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Feedback Style</InputLabel>
              <Select
                value={preferences.feedbackStyle}
                onChange={(e) => updatePreference('feedbackStyle', e.target.value)}
              >
                <MenuItem value="constructive">Constructive</MenuItem>
                <MenuItem value="direct">Direct</MenuItem>
                <MenuItem value="gentle">Gentle</MenuItem>
                <MenuItem value="detailed">Detailed</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Session Length</InputLabel>
              <Select
                value={preferences.sessionLength}
                onChange={(e) => updatePreference('sessionLength', e.target.value)}
              >
                <MenuItem value="short">Short (5-10 min)</MenuItem>
                <MenuItem value="medium">Medium (15-20 min)</MenuItem>
                <MenuItem value="long">Long (25-30 min)</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Preferred Time</InputLabel>
              <Select
                value={preferences.preferredTime}
                onChange={(e) => updatePreference('preferredTime', e.target.value)}
              >
                <MenuItem value="morning">Morning</MenuItem>
                <MenuItem value="afternoon">Afternoon</MenuItem>
                <MenuItem value="evening">Evening</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderTopicPreferences = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <School sx={{ mr: 1 }} />
          Coaching Topics
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Select the areas you'd like your AI coach to focus on:
        </Typography>

        <Grid container spacing={2}>
          {Object.entries(preferences.topics).map(([topic, enabled]) => (
            <Grid item xs={12} md={6} key={topic}>
              <FormControlLabel
                control={
                  <Switch
                    checked={enabled}
                    onChange={(e) => updatePreference(`topics.${topic}`, e.target.checked)}
                  />
                }
                label={topic.charAt(0).toUpperCase() + topic.slice(1)}
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                {topic === 'communication' && 'Improve communication skills'}
                {topic === 'intimacy' && 'Build deeper connections'}
                {topic === 'conflict' && 'Handle conflicts constructively'}
                {topic === 'goals' && 'Set and achieve relationship goals'}
                {topic === 'growth' && 'Personal and relationship growth'}
                {topic === 'dating' && 'Dating strategies and tips'}
                {topic === 'relationships' && 'General relationship advice'}
                {topic === 'selfcare' && 'Self-care and wellness'}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderNotificationPreferences = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Notifications sx={{ mr: 1 }} />
          Coaching Reminders
        </Typography>

        <Grid container spacing={2}>
          {Object.entries(preferences.reminders).map(([reminder, enabled]) => (
            <Grid item xs={12} md={6} key={reminder}>
              <FormControlLabel
                control={
                  <Switch
                    checked={enabled}
                    onChange={(e) => updatePreference(`reminders.${reminder}`, e.target.checked)}
                  />
                }
                label={reminder.charAt(0).toUpperCase() + reminder.slice(1)}
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                {reminder === 'daily' && 'Daily check-ins and tips'}
                {reminder === 'weekly' && 'Weekly progress summaries'}
                {reminder === 'goals' && 'Goal progress reminders'}
                {reminder === 'insights' && 'Personalized insights'}
                {reminder === 'checkins' && 'Scheduled coaching sessions'}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderAdaptiveFeatures = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <AutoAwesome sx={{ mr: 1 }} />
          Adaptive AI Features
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          These features help your AI coach learn and adapt to your preferences over time.
        </Alert>

        <Grid container spacing={2}>
          {Object.entries(preferences.adaptiveFeatures).map(([feature, enabled]) => (
            <Grid item xs={12} md={6} key={feature}>
              <FormControlLabel
                control={
                  <Switch
                    checked={enabled}
                    onChange={(e) => updatePreference(`adaptiveFeatures.${feature}`, e.target.checked)}
                  />
                }
                label={feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                {feature === 'learningFromFeedback' && 'Improve based on your feedback'}
                {feature === 'personalizedContent' && 'Tailor content to your needs'}
                {feature === 'contextualAdvice' && 'Consider your relationship context'}
                {feature === 'emotionalIntelligence' && 'Recognize and respond to emotions'}
                {feature === 'predictiveInsights' && 'Anticipate your needs'}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderPreviewSample = () => (
    <Card sx={{ mb: 3, backgroundColor: '#f8f9fa' }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <SmartToy sx={{ mr: 1 }} />
          Preview: Your AI Coach
        </Typography>

        <Paper sx={{ p: 2, mb: 2, backgroundColor: '#e3f2fd' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar sx={{ mr: 1, bgcolor: 'primary.main' }}>
              <Psychology />
            </Avatar>
            <Typography variant="subtitle1">Dr. Flourish AI</Typography>
          </Box>
          <Typography variant="body1">
            "Hi! I'm excited to be your personal relationship coach. Based on your preferences, 
            I'll provide {coachingStyle} guidance tailored to your {preferences.communicationStyle} style. 
            I'm here to help you grow in {Object.entries(preferences.topics).filter(([k, v]) => v).length} key areas of your relationships!"
          </Typography>
        </Paper>

        <Typography variant="body2" color="text.secondary">
          Your AI coach will adapt its responses based on your selected preferences and learn from your interactions.
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          AI Coaching Preferences
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Customize your AI coach to match your communication style and needs
        </Typography>
        <LinearProgress variant="determinate" value={75.5} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 152 of 280
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Coaching Style" />
        <Tab label="Personality" />
        <Tab label="Communication" />
        <Tab label="Topics" />
        <Tab label="Reminders" />
        <Tab label="Preview" />
      </Tabs>

      {selectedTab === 0 && renderCoachingStyleSelection()}
      {selectedTab === 1 && renderPersonalityTuning()}
      {selectedTab === 2 && renderCommunicationPreferences()}
      {selectedTab === 3 && (
        <Box>
          {renderTopicPreferences()}
          {renderAdaptiveFeatures()}
        </Box>
      )}
      {selectedTab === 4 && renderNotificationPreferences()}
      {selectedTab === 5 && renderPreviewSample()}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          size="large"
        >
          Previous
        </Button>
        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          size="large"
        >
          Continue
        </Button>
      </Box>

      {/* Preview Dialog */}
      <Dialog open={previewDialog} onClose={() => setPreviewDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Preview: {currentPreview?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {currentPreview?.icon} {currentPreview?.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {currentPreview?.description}
          </Typography>
          
          <Paper sx={{ p: 2, mb: 2, backgroundColor: currentPreview?.color || '#f5f5f5' }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>Sample Coaching Response:</Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {currentPreview?.name === 'Gentle Guide' && 
                "I understand this might feel overwhelming. Let's take it one step at a time. You're doing great by even thinking about this. How are you feeling right now?"
              }
              {currentPreview?.name === 'Balanced Mentor' && 
                "I can see you're dealing with a challenging situation. Let's look at this from different angles and find a practical approach that works for you."
              }
              {currentPreview?.name === 'Direct Coach' && 
                "Here's what I'm seeing: you have a clear goal but need a specific action plan. Let's focus on three concrete steps you can take this week."
              }
              {currentPreview?.name === 'Inspiring Catalyst' && 
                "This is an amazing opportunity for growth! You have everything you need to succeed. Let's channel that energy into creating something incredible together!"
              }
            </Typography>
          </Paper>
          
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Key Characteristics:</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {currentPreview?.characteristics.map((char, index) => (
              <Chip key={index} label={char} variant="outlined" />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPreviewDialog(false)}>Close</Button>
          <Button 
            variant="contained" 
            onClick={() => {
              setCoachingStyle(Object.keys(coachingStyles).find(key => coachingStyles[key] === currentPreview));
              setPreviewDialog(false);
            }}
          >
            Choose This Style
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AICoachingPreferences;