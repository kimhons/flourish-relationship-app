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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Alert,
  Divider,
  IconButton,
  Tooltip,
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Badge,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  SmartToy,
  Psychology,
  Favorite,
  Star,
  AutoAwesome,
  TrendingUp,
  Analytics,
  PersonSearch,
  Groups,
  School,
  Work,
  FitnessCenter,
  Restaurant,
  Movie,
  MusicNote,
  Flight,
  Home,
  Child,
  Pets,
  Info,
  ExpandMore,
  CheckCircle,
  Warning,
  Error,
  Refresh,
  Pause,
  PlayArrow,
  VolumeUp,
  Chat,
  VideoCall,
  Phone,
  Message,
  Schedule,
  Notifications,
  Security,
  Privacy,
  Settings,
  Help,
  Support,
  Lightbulb,
  EmojiObjects,
  Psychology as PsychologyIcon,
  Healing,
  SelfImprovement,
  Mood,
  Insights,
  Timeline,
  Assessment,
  Assignment,
  BookmarkBorder,
  Bookmark
} from '@mui/icons-material';

const AICoachIntroduction = () => {
  const [preferences, setPreferences] = useState({
    // AI Coach Setup
    coachSetup: {
      coach_name: 'Dr. Love',
      coach_personality: 'empathetic', // empathetic, analytical, motivational, balanced
      communication_style: 'conversational', // formal, conversational, casual, adaptive
      coaching_intensity: 'moderate', // gentle, moderate, intensive
      session_frequency: 'weekly', // daily, weekly, biweekly, monthly, as_needed
      preferred_session_length: 15, // minutes
      voice_enabled: true,
      text_enabled: true
    },
    
    // Coaching Preferences
    coachingPreferences: {
      primary_focus: 'relationship_building', // dating_skills, relationship_building, communication, self_improvement, crisis_support
      coaching_approach: 'holistic', // behavioral, cognitive, holistic, solution_focused
      feedback_style: 'encouraging', // direct, encouraging, gentle, balanced
      goal_setting_approach: 'collaborative', // structured, collaborative, flexible
      progress_tracking: 'detailed', // minimal, moderate, detailed
      privacy_level: 'confidential' // open, private, confidential
    },
    
    // AI Learning & Personalization
    aiPersonalization: {
      learn_from_conversations: true,
      adapt_coaching_style: true,
      remember_preferences: true,
      track_emotional_patterns: true,
      provide_insights: true,
      suggest_improvements: true,
      cultural_adaptation: true,
      language_preferences: ['english']
    },
    
    // Coaching Areas of Interest
    coachingAreas: {
      dating_confidence: 8,
      conversation_skills: 7,
      relationship_dynamics: 9,
      conflict_resolution: 6,
      emotional_intelligence: 8,
      self_esteem: 7,
      communication_patterns: 8,
      attachment_healing: 5,
      goal_setting: 6,
      stress_management: 7
    },
    
    // Interaction Preferences
    interactionPreferences: {
      proactive_check_ins: true,
      crisis_intervention: true,
      celebration_moments: true,
      weekly_summaries: true,
      progress_reports: true,
      goal_reminders: true,
      motivational_messages: true,
      educational_content: true
    },
    
    // Availability & Scheduling
    availabilitySettings: {
      available_hours_start: '08:00',
      available_hours_end: '22:00',
      timezone: 'auto',
      weekend_availability: true,
      emergency_support: true,
      response_time_expectation: 'within_hour', // immediate, within_hour, within_day, flexible
      quiet_hours_enabled: true,
      quiet_hours_start: '23:00',
      quiet_hours_end: '07:00'
    }
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showDemo, setShowDemo] = useState(false);

  const steps = [
    { 
      id: 'introduction', 
      title: 'Meet Your AI Coach', 
      description: 'Introduction to AI coaching capabilities',
      icon: <SmartToy />,
      color: '#e91e63'
    },
    { 
      id: 'setup', 
      title: 'Coach Setup', 
      description: 'Customize your AI coach personality and style',
      icon: <Settings />,
      color: '#2196f3'
    },
    { 
      id: 'preferences', 
      title: 'Coaching Preferences', 
      description: 'Define your coaching approach and goals',
      icon: <Psychology />,
      color: '#4caf50'
    },
    { 
      id: 'personalization', 
      title: 'AI Personalization', 
      description: 'Configure AI learning and adaptation',
      icon: <AutoAwesome />,
      color: '#ff9800'
    },
    { 
      id: 'areas', 
      title: 'Coaching Areas', 
      description: 'Select areas for focused coaching',
      icon: <TrendingUp />,
      color: '#9c27b0'
    },
    { 
      id: 'interaction', 
      title: 'Interaction Style', 
      description: 'Set communication and interaction preferences',
      icon: <Chat />,
      color: '#795548'
    },
    { 
      id: 'availability', 
      title: 'Availability', 
      description: 'Configure scheduling and availability',
      icon: <Schedule />,
      color: '#607d8b'
    }
  ];

  useEffect(() => {
    // Calculate progress based on completed steps and configured preferences
    const stepProgress = (currentStep / (steps.length - 1)) * 100;
    setProgress(stepProgress);
  }, [currentStep]);

  const handlePreferenceChange = (category, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const getIntensityLabel = (value) => {
    if (value <= 3) return 'Low Priority';
    if (value <= 6) return 'Medium Priority';
    if (value <= 8) return 'High Priority';
    return 'Critical Focus';
  };

  const getIntensityColor = (value) => {
    if (value <= 3) return '#9e9e9e';
    if (value <= 6) return '#ff9800';
    if (value <= 8) return '#2196f3';
    return '#f44336';
  };

  const renderIntroductionStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar
            sx={{ 
              width: 120, 
              height: 120, 
              mx: 'auto', 
              mb: 3,
              background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)'
            }}
          >
            <SmartToy sx={{ fontSize: 60, color: 'white' }} />
          </Avatar>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Meet Dr. Love - Your AI Relationship Coach
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Advanced AI-powered coaching for dating success and relationship growth
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#e91e63' }}>
              🤖 AI Coaching Capabilities
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Psychology sx={{ color: '#e91e63' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Personalized Relationship Guidance"
                  secondary="AI-powered insights based on your unique situation and goals"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Chat sx={{ color: '#e91e63' }} />
                </ListItemIcon>
                <ListItemText
                  primary="24/7 Conversational Support"
                  secondary="Always available for advice, encouragement, and crisis support"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Analytics sx={{ color: '#e91e63' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Progress Tracking & Insights"
                  secondary="Monitor your growth with detailed analytics and recommendations"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome sx={{ color: '#e91e63' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Adaptive Learning"
                  secondary="AI learns your preferences and adapts coaching style over time"
                />
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2196f3' }}>
              💕 Coaching Specializations
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Favorite sx={{ color: '#2196f3' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Dating Confidence & Skills"
                  secondary="Build confidence and master dating conversations"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Groups sx={{ color: '#2196f3' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Relationship Dynamics"
                  secondary="Navigate complex relationship situations and conflicts"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <SelfImprovement sx={{ color: '#2196f3' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Personal Growth"
                  secondary="Develop emotional intelligence and self-awareness"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Healing sx={{ color: '#2196f3' }} />
                </ListItemIcon>
                <ListItemText
                  primary="Attachment & Healing"
                  secondary="Address attachment patterns and past relationship trauma"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Experience AI Coaching in Action
          </Typography>
          <Button
            variant="outlined"
            size="large"
            startIcon={<PlayArrow />}
            onClick={() => setShowDemo(true)}
            sx={{ mr: 2 }}
          >
            Watch Demo
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<Chat />}
            sx={{
              background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
              color: 'white'
            }}
          >
            Try Sample Conversation
          </Button>
        </Box>

        <Alert severity="info" sx={{ mt: 4 }}>
          <Typography variant="body2">
            <strong>Privacy & Security:</strong> All coaching conversations are encrypted and confidential. 
            Your AI coach learns from your interactions to provide better support while maintaining complete privacy.
          </Typography>
        </Alert>
      </CardContent>
    </Card>
  );

  const renderCoachSetupStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Settings sx={{ mr: 2, color: '#2196f3' }} />
          <Typography variant="h6">Customize Your AI Coach</Typography>
          <Tooltip title="Personalize your AI coach's personality and communication style">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Coach Name"
              value={preferences.coachSetup.coach_name}
              onChange={(e) => handlePreferenceChange('coachSetup', 'coach_name', e.target.value)}
              sx={{ mb: 3 }}
              helperText="Choose a name for your AI coach (default: Dr. Love)"
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Coach Personality</InputLabel>
              <Select
                value={preferences.coachSetup.coach_personality}
                onChange={(e) => handlePreferenceChange('coachSetup', 'coach_personality', e.target.value)}
                label="Coach Personality"
              >
                <MenuItem value="empathetic">Empathetic & Supportive</MenuItem>
                <MenuItem value="analytical">Analytical & Logical</MenuItem>
                <MenuItem value="motivational">Motivational & Energetic</MenuItem>
                <MenuItem value="balanced">Balanced & Adaptive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Communication Style</InputLabel>
              <Select
                value={preferences.coachSetup.communication_style}
                onChange={(e) => handlePreferenceChange('coachSetup', 'communication_style', e.target.value)}
                label="Communication Style"
              >
                <MenuItem value="formal">Formal & Professional</MenuItem>
                <MenuItem value="conversational">Conversational & Friendly</MenuItem>
                <MenuItem value="casual">Casual & Relaxed</MenuItem>
                <MenuItem value="adaptive">Adaptive to Situation</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Coaching Intensity</InputLabel>
              <Select
                value={preferences.coachSetup.coaching_intensity}
                onChange={(e) => handlePreferenceChange('coachSetup', 'coaching_intensity', e.target.value)}
                label="Coaching Intensity"
              >
                <MenuItem value="gentle">Gentle & Patient</MenuItem>
                <MenuItem value="moderate">Moderate & Balanced</MenuItem>
                <MenuItem value="intensive">Intensive & Challenging</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Session Frequency</InputLabel>
              <Select
                value={preferences.coachSetup.session_frequency}
                onChange={(e) => handlePreferenceChange('coachSetup', 'session_frequency', e.target.value)}
                label="Session Frequency"
              >
                <MenuItem value="daily">Daily Check-ins</MenuItem>
                <MenuItem value="weekly">Weekly Sessions</MenuItem>
                <MenuItem value="biweekly">Bi-weekly Sessions</MenuItem>
                <MenuItem value="monthly">Monthly Sessions</MenuItem>
                <MenuItem value="as_needed">As Needed</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Preferred Session Length: {preferences.coachSetup.preferred_session_length} minutes
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How long should typical coaching sessions last?
            </Typography>
            <Box sx={{ px: 2, mb: 3 }}>
              <Slider
                value={preferences.coachSetup.preferred_session_length}
                onChange={(e, newValue) => handlePreferenceChange('coachSetup', 'preferred_session_length', newValue)}
                min={5}
                max={60}
                step={5}
                marks={[
                  { value: 5, label: '5min' },
                  { value: 15, label: '15min' },
                  { value: 30, label: '30min' },
                  { value: 60, label: '60min' }
                ]}
                valueLabelDisplay="auto"
                sx={{ color: '#2196f3' }}
              />
            </Box>

            <Typography variant="h6" sx={{ mb: 2, color: '#2196f3' }}>
              Communication Methods
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.coachSetup.voice_enabled}
                    onChange={(e) => handlePreferenceChange('coachSetup', 'voice_enabled', e.target.checked)}
                  />
                }
                label="Voice Conversations"
              />
              <Typography variant="body2" color="text.secondary">
                Enable voice-based coaching sessions
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.coachSetup.text_enabled}
                    onChange={(e) => handlePreferenceChange('coachSetup', 'text_enabled', e.target.checked)}
                  />
                }
                label="Text Conversations"
              />
              <Typography variant="body2" color="text.secondary">
                Enable text-based coaching sessions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCoachingPreferencesStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Psychology sx={{ mr: 2, color: '#4caf50' }} />
          <Typography variant="h6">Coaching Approach & Preferences</Typography>
          <Tooltip title="Define your preferred coaching methodology and feedback style">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Primary Focus Area</InputLabel>
              <Select
                value={preferences.coachingPreferences.primary_focus}
                onChange={(e) => handlePreferenceChange('coachingPreferences', 'primary_focus', e.target.value)}
                label="Primary Focus Area"
              >
                <MenuItem value="dating_skills">Dating Skills & Confidence</MenuItem>
                <MenuItem value="relationship_building">Relationship Building</MenuItem>
                <MenuItem value="communication">Communication Skills</MenuItem>
                <MenuItem value="self_improvement">Personal Growth</MenuItem>
                <MenuItem value="crisis_support">Crisis Support & Healing</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Coaching Approach</InputLabel>
              <Select
                value={preferences.coachingPreferences.coaching_approach}
                onChange={(e) => handlePreferenceChange('coachingPreferences', 'coaching_approach', e.target.value)}
                label="Coaching Approach"
              >
                <MenuItem value="behavioral">Behavioral (Action-focused)</MenuItem>
                <MenuItem value="cognitive">Cognitive (Thought-focused)</MenuItem>
                <MenuItem value="holistic">Holistic (Mind-body-spirit)</MenuItem>
                <MenuItem value="solution_focused">Solution-focused</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Feedback Style</InputLabel>
              <Select
                value={preferences.coachingPreferences.feedback_style}
                onChange={(e) => handlePreferenceChange('coachingPreferences', 'feedback_style', e.target.value)}
                label="Feedback Style"
              >
                <MenuItem value="direct">Direct & Straightforward</MenuItem>
                <MenuItem value="encouraging">Encouraging & Positive</MenuItem>
                <MenuItem value="gentle">Gentle & Supportive</MenuItem>
                <MenuItem value="balanced">Balanced Approach</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Goal Setting Approach</InputLabel>
              <Select
                value={preferences.coachingPreferences.goal_setting_approach}
                onChange={(e) => handlePreferenceChange('coachingPreferences', 'goal_setting_approach', e.target.value)}
                label="Goal Setting Approach"
              >
                <MenuItem value="structured">Structured & Systematic</MenuItem>
                <MenuItem value="collaborative">Collaborative & Flexible</MenuItem>
                <MenuItem value="flexible">Flexible & Adaptive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Progress Tracking</InputLabel>
              <Select
                value={preferences.coachingPreferences.progress_tracking}
                onChange={(e) => handlePreferenceChange('coachingPreferences', 'progress_tracking', e.target.value)}
                label="Progress Tracking"
              >
                <MenuItem value="minimal">Minimal Tracking</MenuItem>
                <MenuItem value="moderate">Moderate Tracking</MenuItem>
                <MenuItem value="detailed">Detailed Analytics</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Privacy Level</InputLabel>
              <Select
                value={preferences.coachingPreferences.privacy_level}
                onChange={(e) => handlePreferenceChange('coachingPreferences', 'privacy_level', e.target.value)}
                label="Privacy Level"
              >
                <MenuItem value="open">Open (Share insights with matches)</MenuItem>
                <MenuItem value="private">Private (Personal use only)</MenuItem>
                <MenuItem value="confidential">Confidential (Maximum privacy)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderAIPersonalizationStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AutoAwesome sx={{ mr: 2, color: '#ff9800' }} />
          <Typography variant="h6">AI Learning & Personalization</Typography>
          <Tooltip title="Configure how AI learns from your interactions and personalizes coaching">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#ff9800' }}>
              Learning Preferences
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.learn_from_conversations}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'learn_from_conversations', e.target.checked)}
                  />
                }
                label="Learn from Conversations"
              />
              <Typography variant="body2" color="text.secondary">
                Allow AI to learn from your coaching conversations
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.adapt_coaching_style}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'adapt_coaching_style', e.target.checked)}
                  />
                }
                label="Adapt Coaching Style"
              />
              <Typography variant="body2" color="text.secondary">
                Automatically adjust coaching approach based on your responses
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.remember_preferences}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'remember_preferences', e.target.checked)}
                  />
                }
                label="Remember Preferences"
              />
              <Typography variant="body2" color="text.secondary">
                Remember your preferences and past conversations
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.track_emotional_patterns}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'track_emotional_patterns', e.target.checked)}
                  />
                }
                label="Track Emotional Patterns"
              />
              <Typography variant="body2" color="text.secondary">
                Monitor emotional patterns to provide better support
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#ff9800' }}>
              AI Capabilities
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.provide_insights}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'provide_insights', e.target.checked)}
                  />
                }
                label="Provide Insights"
              />
              <Typography variant="body2" color="text.secondary">
                Generate insights about your relationship patterns
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.suggest_improvements}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'suggest_improvements', e.target.checked)}
                  />
                }
                label="Suggest Improvements"
              />
              <Typography variant="body2" color="text.secondary">
                Proactively suggest areas for growth and improvement
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiPersonalization.cultural_adaptation}
                    onChange={(e) => handlePreferenceChange('aiPersonalization', 'cultural_adaptation', e.target.checked)}
                  />
                }
                label="Cultural Adaptation"
              />
              <Typography variant="body2" color="text.secondary">
                Adapt coaching to your cultural background and values
              </Typography>
            </Box>

            <Alert severity="info" sx={{ mt: 3 }}>
              <Typography variant="body2">
                <strong>Privacy Note:</strong> All AI learning happens locally and securely. 
                Your personal data is never shared and you can disable any feature at any time.
              </Typography>
            </Alert>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCoachingAreasStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <TrendingUp sx={{ mr: 2, color: '#9c27b0' }} />
          <Typography variant="h6">Coaching Focus Areas</Typography>
          <Tooltip title="Rate the importance of different coaching areas for personalized support">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Rate how important each coaching area is for your personal growth (1-10 scale).
        </Typography>

        <Grid container spacing={3}>
          {Object.entries({
            dating_confidence: { label: 'Dating Confidence', icon: <Favorite />, description: 'Build confidence in dating situations' },
            conversation_skills: { label: 'Conversation Skills', icon: <Chat />, description: 'Improve communication and conversation abilities' },
            relationship_dynamics: { label: 'Relationship Dynamics', icon: <Groups />, description: 'Understand and navigate relationship patterns' },
            conflict_resolution: { label: 'Conflict Resolution', icon: <Healing />, description: 'Learn healthy conflict resolution strategies' },
            emotional_intelligence: { label: 'Emotional Intelligence', icon: <Psychology />, description: 'Develop emotional awareness and regulation' },
            self_esteem: { label: 'Self-Esteem', icon: <SelfImprovement />, description: 'Build healthy self-worth and confidence' },
            communication_patterns: { label: 'Communication Patterns', icon: <Message />, description: 'Improve communication styles and patterns' },
            attachment_healing: { label: 'Attachment Healing', icon: <Healing />, description: 'Address attachment issues and past trauma' },
            goal_setting: { label: 'Goal Setting', icon: <Assignment />, description: 'Develop and achieve relationship goals' },
            stress_management: { label: 'Stress Management', icon: <Mood />, description: 'Manage relationship stress and anxiety' }
          }).map(([key, { label, icon, description }]) => (
            <Grid item xs={12} md={6} key={key}>
              <Paper sx={{ p: 3, mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {React.cloneElement(icon, { sx: { mr: 2, color: getIntensityColor(preferences.coachingAreas[key]) } })}
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">
                      {label}: {getIntensityLabel(preferences.coachingAreas[key])}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </Box>
                </Box>
                <Slider
                  value={preferences.coachingAreas[key]}
                  onChange={(e, newValue) => handlePreferenceChange('coachingAreas', key, newValue)}
                  min={1}
                  max={10}
                  step={1}
                  marks
                  valueLabelDisplay="auto"
                  sx={{ 
                    color: getIntensityColor(preferences.coachingAreas[key])
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderInteractionStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Chat sx={{ mr: 2, color: '#795548' }} />
          <Typography variant="h6">Interaction & Communication Style</Typography>
          <Tooltip title="Configure how your AI coach interacts and communicates with you">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#795548' }}>
              Proactive Features
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.proactive_check_ins}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'proactive_check_ins', e.target.checked)}
                  />
                }
                label="Proactive Check-ins"
              />
              <Typography variant="body2" color="text.secondary">
                Regular check-ins to see how you're doing
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.crisis_intervention}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'crisis_intervention', e.target.checked)}
                  />
                }
                label="Crisis Intervention"
              />
              <Typography variant="body2" color="text.secondary">
                Immediate support during relationship crises
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.celebration_moments}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'celebration_moments', e.target.checked)}
                  />
                }
                label="Celebration Moments"
              />
              <Typography variant="body2" color="text.secondary">
                Celebrate your relationship wins and milestones
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.goal_reminders}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'goal_reminders', e.target.checked)}
                  />
                }
                label="Goal Reminders"
              />
              <Typography variant="body2" color="text.secondary">
                Gentle reminders about your relationship goals
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#795548' }}>
              Content & Updates
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.weekly_summaries}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'weekly_summaries', e.target.checked)}
                  />
                }
                label="Weekly Summaries"
              />
              <Typography variant="body2" color="text.secondary">
                Weekly progress summaries and insights
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.progress_reports}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'progress_reports', e.target.checked)}
                  />
                }
                label="Progress Reports"
              />
              <Typography variant="body2" color="text.secondary">
                Detailed progress reports and analytics
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.motivational_messages}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'motivational_messages', e.target.checked)}
                  />
                }
                label="Motivational Messages"
              />
              <Typography variant="body2" color="text.secondary">
                Daily motivational quotes and encouragement
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.interactionPreferences.educational_content}
                    onChange={(e) => handlePreferenceChange('interactionPreferences', 'educational_content', e.target.checked)}
                  />
                }
                label="Educational Content"
              />
              <Typography variant="body2" color="text.secondary">
                Relationship tips, articles, and educational resources
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderAvailabilityStep = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Schedule sx={{ mr: 2, color: '#607d8b' }} />
          <Typography variant="h6">Availability & Scheduling</Typography>
          <Tooltip title="Set your availability preferences and response time expectations">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#607d8b' }}>
              Available Hours
            </Typography>

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6}>
                <TextField
                  label="Available From"
                  type="time"
                  value={preferences.availabilitySettings.available_hours_start}
                  onChange={(e) => handlePreferenceChange('availabilitySettings', 'available_hours_start', e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Available Until"
                  type="time"
                  value={preferences.availabilitySettings.available_hours_end}
                  onChange={(e) => handlePreferenceChange('availabilitySettings', 'available_hours_end', e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.availabilitySettings.weekend_availability}
                    onChange={(e) => handlePreferenceChange('availabilitySettings', 'weekend_availability', e.target.checked)}
                  />
                }
                label="Weekend Availability"
              />
              <Typography variant="body2" color="text.secondary">
                Allow coaching sessions on weekends
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.availabilitySettings.emergency_support}
                    onChange={(e) => handlePreferenceChange('availabilitySettings', 'emergency_support', e.target.checked)}
                  />
                }
                label="Emergency Support"
              />
              <Typography variant="body2" color="text.secondary">
                24/7 support for relationship emergencies
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Response Time Expectation</InputLabel>
              <Select
                value={preferences.availabilitySettings.response_time_expectation}
                onChange={(e) => handlePreferenceChange('availabilitySettings', 'response_time_expectation', e.target.value)}
                label="Response Time Expectation"
              >
                <MenuItem value="immediate">Immediate (Real-time)</MenuItem>
                <MenuItem value="within_hour">Within 1 Hour</MenuItem>
                <MenuItem value="within_day">Within 24 Hours</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h6" sx={{ mb: 2, color: '#607d8b' }}>
              Quiet Hours
            </Typography>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.availabilitySettings.quiet_hours_enabled}
                    onChange={(e) => handlePreferenceChange('availabilitySettings', 'quiet_hours_enabled', e.target.checked)}
                  />
                }
                label="Enable Quiet Hours"
              />
            </Box>

            {preferences.availabilitySettings.quiet_hours_enabled && (
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    label="Quiet Hours Start"
                    type="time"
                    value={preferences.availabilitySettings.quiet_hours_start}
                    onChange={(e) => handlePreferenceChange('availabilitySettings', 'quiet_hours_start', e.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Quiet Hours End"
                    type="time"
                    value={preferences.availabilitySettings.quiet_hours_end}
                    onChange={(e) => handlePreferenceChange('availabilitySettings', 'quiet_hours_end', e.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderIntroductionStep();
      case 1: return renderCoachSetupStep();
      case 2: return renderCoachingPreferencesStep();
      case 3: return renderAIPersonalizationStep();
      case 4: return renderCoachingAreasStep();
      case 5: return renderInteractionStep();
      case 6: return renderAvailabilityStep();
      default: return renderIntroductionStep();
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Save preferences and navigate to next screen
    localStorage.setItem('aiCoachIntroduction', JSON.stringify(preferences));
    console.log('AI Coach Introduction completed:', preferences);
    // Navigate to Screen 142: Coaching Style Preferences
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          AI Coach Setup & Introduction
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Meet your personal AI relationship coach and customize your coaching experience
        </Typography>
        
        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)'
              }
            }} 
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Step {currentStep + 1} of {steps.length} • {Math.round(progress)}% Complete
          </Typography>
        </Box>
      </Box>

      {/* Step Navigation */}
      <Box sx={{ mb: 4 }}>
        <Stepper activeStep={currentStep} orientation="horizontal" alternativeLabel>
          {steps.map((step, index) => (
            <Step key={step.id}>
              <StepLabel
                StepIconComponent={() => (
                  <Avatar
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: index <= currentStep ? step.color : '#e0e0e0',
                      color: 'white'
                    }}
                  >
                    {step.icon}
                  </Avatar>
                )}
              >
                <Typography variant="body2" sx={{ fontWeight: index === currentStep ? 'bold' : 'normal' }}>
                  {step.title}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Current Step Content */}
      {renderCurrentStep()}

      {/* Demo Dialog */}
      <Dialog open={showDemo} onClose={() => setShowDemo(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PlayArrow sx={{ mr: 2, color: '#e91e63' }} />
            AI Coach Demo
          </Box>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Experience a sample conversation with your AI coach:
          </Typography>
          <Paper sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Dr. Love:</strong> Hi there! I'm excited to be your relationship coach. 
              I noticed you've been working on building dating confidence. How are you feeling about 
              your recent dating experiences?
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>You:</strong> I've been feeling nervous about first dates. I worry about 
              running out of things to talk about.
            </Typography>
            <Typography variant="body2">
              <strong>Dr. Love:</strong> That's completely normal! Many people feel this way. 
              Let's work on some conversation strategies that can help you feel more confident. 
              Would you like to practice some conversation starters, or would you prefer to explore 
              what's behind those nervous feelings first?
            </Typography>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDemo(false)}>Close</Button>
          <Button variant="contained" onClick={() => setShowDemo(false)}>
            Start My Coaching Journey
          </Button>
        </DialogActions>
      </Dialog>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          Previous Step
        </Button>

        {currentStep < steps.length - 1 ? (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
              color: 'white'
            }}
          >
            Next Step
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleComplete}
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
              color: 'white'
            }}
          >
            Activate AI Coach
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your AI Coach Configuration Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Coach Name:</strong> {preferences.coachSetup.coach_name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Personality:</strong> {preferences.coachSetup.coach_personality}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Primary Focus:</strong> {preferences.coachingPreferences.primary_focus.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Session Frequency:</strong> {preferences.coachSetup.session_frequency}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AICoachIntroduction;

