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
  Slider,
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
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  RadioGroup,
  Radio
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Psychology,
  Chat,
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
  Healing,
  SelfImprovement,
  Mood,
  Insights,
  Timeline,
  Assessment,
  Assignment,
  BookmarkBorder,
  Bookmark,
  Speed,
  Tune,
  SmartToy,
  RecordVoiceOver,
  Hearing,
  Visibility,
  TouchApp,
  Psychology as PsychologyIcon,
  EmojiEmotions,
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  ThumbUp,
  ThumbDown,
  QuestionAnswer,
  Forum,
  Feedback
} from '@mui/icons-material';

const CoachingStylePreferences = () => {
  const [preferences, setPreferences] = useState({
    // Communication Style Preferences
    communicationStyle: {
      tone_preference: 'warm_encouraging', // formal_professional, warm_encouraging, casual_friendly, adaptive_contextual
      language_complexity: 'moderate', // simple, moderate, advanced, adaptive
      humor_level: 5, // 1-10 scale
      directness_level: 6, // 1-10 scale (indirect vs direct)
      empathy_expression: 8, // 1-10 scale
      formality_level: 4, // 1-10 scale (casual vs formal)
      cultural_sensitivity: 9, // 1-10 scale
      emotional_validation: 8 // 1-10 scale
    },
    
    // Feedback & Motivation Style
    feedbackStyle: {
      feedback_approach: 'balanced', // gentle_supportive, balanced, direct_honest, challenging_growth
      motivation_style: 'encouragement_based', // achievement_based, encouragement_based, challenge_based, progress_based
      criticism_delivery: 'constructive_gentle', // direct_honest, constructive_gentle, sandwich_method, solution_focused
      praise_frequency: 'regular', // minimal, moderate, regular, frequent
      goal_celebration: 'milestone_focused', // achievement_only, milestone_focused, progress_based, effort_based
      accountability_level: 6, // 1-10 scale
      challenge_comfort: 5, // 1-10 scale
      vulnerability_encouragement: 7 // 1-10 scale
    },
    
    // Session Structure Preferences
    sessionStructure: {
      session_format: 'flexible_conversational', // structured_agenda, semi_structured, flexible_conversational, client_led
      opening_style: 'check_in_focused', // goal_focused, check_in_focused, mood_assessment, open_ended
      closing_style: 'action_planning', // summary_reflection, action_planning, encouragement_focused, next_steps
      interruption_handling: 'gentle_redirect', // immediate_redirect, gentle_redirect, allow_exploration, adaptive
      silence_comfort: 6, // 1-10 scale (comfort with pauses)
      session_pacing: 'moderate', // slow_reflective, moderate, fast_dynamic, adaptive
      topic_transitions: 'smooth_guided', // abrupt_efficient, smooth_guided, client_controlled, natural_flow
      homework_preference: 'optional_suggested' // none, optional_suggested, encouraged, required
    },
    
    // Learning & Growth Approach
    learningApproach: {
      learning_style_focus: 'experiential', // theoretical, practical, experiential, mixed
      insight_delivery: 'gradual_discovery', // direct_explanation, gradual_discovery, socratic_questioning, collaborative_exploration
      pattern_recognition: 'guided_awareness', // direct_pointing, guided_awareness, self_discovery, collaborative_identification
      skill_building: 'practice_focused', // theory_first, practice_focused, integrated, adaptive
      reflection_emphasis: 7, // 1-10 scale
      action_orientation: 6, // 1-10 scale
      mindfulness_integration: 5, // 1-10 scale
      cognitive_restructuring: 6 // 1-10 scale
    },
    
    // Crisis & Difficult Moments
    crisisHandling: {
      crisis_response_style: 'calm_supportive', // immediate_action, calm_supportive, collaborative_problem_solving, resource_connecting
      emotional_intensity_handling: 'validate_and_ground', // normalize_and_redirect, validate_and_ground, explore_and_process, stabilize_and_support
      conflict_approach: 'understanding_first', // solution_focused, understanding_first, mediation_style, perspective_taking
      boundary_setting: 'gentle_firm', // direct_clear, gentle_firm, collaborative, educational
      resource_offering: 'proactive', // reactive_only, when_asked, proactive, comprehensive
      follow_up_style: 'check_in_focused', // minimal, check_in_focused, comprehensive, client_preference
      safety_prioritization: 9, // 1-10 scale
      professional_referral_comfort: 8 // 1-10 scale
    },
    
    // Personalization & Adaptation
    personalizationStyle: {
      adaptation_speed: 'gradual', // immediate, gradual, session_based, long_term
      preference_learning: 'observational', // direct_asking, observational, feedback_based, mixed
      style_flexibility: 8, // 1-10 scale
      cultural_adaptation: 9, // 1-10 scale
      personality_matching: 7, // 1-10 scale
      mood_responsiveness: 8, // 1-10 scale
      progress_adjustment: 'responsive', // fixed_approach, responsive, highly_adaptive, client_controlled
      relationship_building: 'gradual_trust' // immediate_rapport, gradual_trust, professional_distance, adaptive
    },
    
    // Content & Resource Preferences
    contentPreferences: {
      educational_content: 'integrated', // minimal, separate_sessions, integrated, comprehensive
      metaphor_usage: 6, // 1-10 scale
      storytelling_preference: 5, // 1-10 scale
      exercise_integration: 'practical_focused', // none, minimal, practical_focused, comprehensive
      resource_sharing: 'curated_relevant', // minimal, when_requested, curated_relevant, comprehensive
      homework_complexity: 'simple_actionable', // none, simple_actionable, moderate_structured, comprehensive_detailed
      progress_visualization: 'charts_and_graphs', // text_based, simple_metrics, charts_and_graphs, comprehensive_analytics
      goal_tracking_detail: 'moderate' // minimal, moderate, detailed, comprehensive
    }
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: 'communication', title: 'Communication Style', icon: <Chat />, color: '#e91e63' },
    { id: 'feedback', title: 'Feedback & Motivation', icon: <ThumbUp />, color: '#2196f3' },
    { id: 'session', title: 'Session Structure', icon: <Schedule />, color: '#4caf50' },
    { id: 'learning', title: 'Learning Approach', icon: <School />, color: '#ff9800' },
    { id: 'crisis', title: 'Crisis Handling', icon: <Healing />, color: '#9c27b0' },
    { id: 'personalization', title: 'Personalization', icon: <AutoAwesome />, color: '#795548' },
    { id: 'content', title: 'Content & Resources', icon: <Assignment />, color: '#607d8b' }
  ];

  useEffect(() => {
    // Calculate progress based on configured preferences
    const allSections = [
      preferences.communicationStyle,
      preferences.feedbackStyle,
      preferences.sessionStructure,
      preferences.learningApproach,
      preferences.crisisHandling,
      preferences.personalizationStyle,
      preferences.contentPreferences
    ];
    
    const totalConfigured = allSections.reduce((total, section) => {
      return total + Object.values(section).filter(value => 
        value !== '' && value !== 0 && value !== 'adaptive' && 
        (typeof value === 'boolean' ? true : (Array.isArray(value) ? value.length > 0 : true))
      ).length;
    }, 0);
    
    const totalPossible = 45; // Approximate total number of preference fields
    setProgress((totalConfigured / totalPossible) * 100);
  }, [preferences]);

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
    if (value <= 3) return 'Low';
    if (value <= 6) return 'Moderate';
    if (value <= 8) return 'High';
    return 'Very High';
  };

  const getIntensityColor = (value) => {
    if (value <= 3) return '#9e9e9e';
    if (value <= 6) return '#ff9800';
    if (value <= 8) return '#2196f3';
    return '#f44336';
  };

  const renderCommunicationStyleSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Chat sx={{ mr: 2, color: '#e91e63' }} />
          <Typography variant="h6">Communication Style Preferences</Typography>
          <Tooltip title="Customize how your AI coach communicates with you">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Tone Preference</InputLabel>
              <Select
                value={preferences.communicationStyle.tone_preference}
                onChange={(e) => handlePreferenceChange('communicationStyle', 'tone_preference', e.target.value)}
                label="Tone Preference"
              >
                <MenuItem value="formal_professional">Formal & Professional</MenuItem>
                <MenuItem value="warm_encouraging">Warm & Encouraging</MenuItem>
                <MenuItem value="casual_friendly">Casual & Friendly</MenuItem>
                <MenuItem value="adaptive_contextual">Adaptive to Context</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Language Complexity</InputLabel>
              <Select
                value={preferences.communicationStyle.language_complexity}
                onChange={(e) => handlePreferenceChange('communicationStyle', 'language_complexity', e.target.value)}
                label="Language Complexity"
              >
                <MenuItem value="simple">Simple & Clear</MenuItem>
                <MenuItem value="moderate">Moderate Complexity</MenuItem>
                <MenuItem value="advanced">Advanced & Nuanced</MenuItem>
                <MenuItem value="adaptive">Adaptive to Topic</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Humor Level: {getIntensityLabel(preferences.communicationStyle.humor_level)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much humor should your coach use?
            </Typography>
            <Slider
              value={preferences.communicationStyle.humor_level}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'humor_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Serious' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Playful' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.communicationStyle.humor_level), mb: 3 }}
            />

            <Typography gutterBottom>
              Directness Level: {getIntensityLabel(preferences.communicationStyle.directness_level)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How direct should your coach be with feedback?
            </Typography>
            <Slider
              value={preferences.communicationStyle.directness_level}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'directness_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Indirect' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Very Direct' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.communicationStyle.directness_level), mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Empathy Expression: {getIntensityLabel(preferences.communicationStyle.empathy_expression)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much empathy should your coach express?
            </Typography>
            <Slider
              value={preferences.communicationStyle.empathy_expression}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'empathy_expression', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Empathy' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.communicationStyle.empathy_expression), mb: 3 }}
            />

            <Typography gutterBottom>
              Formality Level: {getIntensityLabel(preferences.communicationStyle.formality_level)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How formal should the communication style be?
            </Typography>
            <Slider
              value={preferences.communicationStyle.formality_level}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'formality_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Very Casual' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Very Formal' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.communicationStyle.formality_level), mb: 3 }}
            />

            <Typography gutterBottom>
              Cultural Sensitivity: {getIntensityLabel(preferences.communicationStyle.cultural_sensitivity)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is cultural awareness in communication?
            </Typography>
            <Slider
              value={preferences.communicationStyle.cultural_sensitivity}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'cultural_sensitivity', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Basic' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Highly Sensitive' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.communicationStyle.cultural_sensitivity), mb: 3 }}
            />

            <Typography gutterBottom>
              Emotional Validation: {getIntensityLabel(preferences.communicationStyle.emotional_validation)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much emotional validation do you prefer?
            </Typography>
            <Slider
              value={preferences.communicationStyle.emotional_validation}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'emotional_validation', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Validation' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.communicationStyle.emotional_validation), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderFeedbackStyleSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <ThumbUp sx={{ mr: 2, color: '#2196f3' }} />
          <Typography variant="h6">Feedback & Motivation Style</Typography>
          <Tooltip title="Configure how your coach provides feedback and motivation">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Feedback Approach</InputLabel>
              <Select
                value={preferences.feedbackStyle.feedback_approach}
                onChange={(e) => handlePreferenceChange('feedbackStyle', 'feedback_approach', e.target.value)}
                label="Feedback Approach"
              >
                <MenuItem value="gentle_supportive">Gentle & Supportive</MenuItem>
                <MenuItem value="balanced">Balanced Approach</MenuItem>
                <MenuItem value="direct_honest">Direct & Honest</MenuItem>
                <MenuItem value="challenging_growth">Challenging for Growth</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Motivation Style</InputLabel>
              <Select
                value={preferences.feedbackStyle.motivation_style}
                onChange={(e) => handlePreferenceChange('feedbackStyle', 'motivation_style', e.target.value)}
                label="Motivation Style"
              >
                <MenuItem value="achievement_based">Achievement-Based</MenuItem>
                <MenuItem value="encouragement_based">Encouragement-Based</MenuItem>
                <MenuItem value="challenge_based">Challenge-Based</MenuItem>
                <MenuItem value="progress_based">Progress-Based</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Criticism Delivery</InputLabel>
              <Select
                value={preferences.feedbackStyle.criticism_delivery}
                onChange={(e) => handlePreferenceChange('feedbackStyle', 'criticism_delivery', e.target.value)}
                label="Criticism Delivery"
              >
                <MenuItem value="direct_honest">Direct & Honest</MenuItem>
                <MenuItem value="constructive_gentle">Constructive & Gentle</MenuItem>
                <MenuItem value="sandwich_method">Sandwich Method</MenuItem>
                <MenuItem value="solution_focused">Solution-Focused</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Praise Frequency</InputLabel>
              <Select
                value={preferences.feedbackStyle.praise_frequency}
                onChange={(e) => handlePreferenceChange('feedbackStyle', 'praise_frequency', e.target.value)}
                label="Praise Frequency"
              >
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="moderate">Moderate</MenuItem>
                <MenuItem value="regular">Regular</MenuItem>
                <MenuItem value="frequent">Frequent</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Goal Celebration</InputLabel>
              <Select
                value={preferences.feedbackStyle.goal_celebration}
                onChange={(e) => handlePreferenceChange('feedbackStyle', 'goal_celebration', e.target.value)}
                label="Goal Celebration"
              >
                <MenuItem value="achievement_only">Achievement Only</MenuItem>
                <MenuItem value="milestone_focused">Milestone Focused</MenuItem>
                <MenuItem value="progress_based">Progress Based</MenuItem>
                <MenuItem value="effort_based">Effort Based</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Accountability Level: {getIntensityLabel(preferences.feedbackStyle.accountability_level)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much accountability do you want from your coach?
            </Typography>
            <Slider
              value={preferences.feedbackStyle.accountability_level}
              onChange={(e, newValue) => handlePreferenceChange('feedbackStyle', 'accountability_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.feedbackStyle.accountability_level), mb: 3 }}
            />

            <Typography gutterBottom>
              Challenge Comfort: {getIntensityLabel(preferences.feedbackStyle.challenge_comfort)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How comfortable are you with being challenged?
            </Typography>
            <Slider
              value={preferences.feedbackStyle.challenge_comfort}
              onChange={(e, newValue) => handlePreferenceChange('feedbackStyle', 'challenge_comfort', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Gentle' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Challenge' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.feedbackStyle.challenge_comfort), mb: 3 }}
            />

            <Typography gutterBottom>
              Vulnerability Encouragement: {getIntensityLabel(preferences.feedbackStyle.vulnerability_encouragement)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much should your coach encourage vulnerability?
            </Typography>
            <Slider
              value={preferences.feedbackStyle.vulnerability_encouragement}
              onChange={(e, newValue) => handlePreferenceChange('feedbackStyle', 'vulnerability_encouragement', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Encouragement' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.feedbackStyle.vulnerability_encouragement), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderSessionStructureSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Schedule sx={{ mr: 2, color: '#4caf50' }} />
          <Typography variant="h6">Session Structure Preferences</Typography>
          <Tooltip title="Customize how your coaching sessions are structured and flow">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Session Format</InputLabel>
              <Select
                value={preferences.sessionStructure.session_format}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'session_format', e.target.value)}
                label="Session Format"
              >
                <MenuItem value="structured_agenda">Structured with Agenda</MenuItem>
                <MenuItem value="semi_structured">Semi-Structured</MenuItem>
                <MenuItem value="flexible_conversational">Flexible & Conversational</MenuItem>
                <MenuItem value="client_led">Client-Led</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Opening Style</InputLabel>
              <Select
                value={preferences.sessionStructure.opening_style}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'opening_style', e.target.value)}
                label="Opening Style"
              >
                <MenuItem value="goal_focused">Goal-Focused</MenuItem>
                <MenuItem value="check_in_focused">Check-in Focused</MenuItem>
                <MenuItem value="mood_assessment">Mood Assessment</MenuItem>
                <MenuItem value="open_ended">Open-Ended</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Closing Style</InputLabel>
              <Select
                value={preferences.sessionStructure.closing_style}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'closing_style', e.target.value)}
                label="Closing Style"
              >
                <MenuItem value="summary_reflection">Summary & Reflection</MenuItem>
                <MenuItem value="action_planning">Action Planning</MenuItem>
                <MenuItem value="encouragement_focused">Encouragement Focused</MenuItem>
                <MenuItem value="next_steps">Next Steps</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Interruption Handling</InputLabel>
              <Select
                value={preferences.sessionStructure.interruption_handling}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'interruption_handling', e.target.value)}
                label="Interruption Handling"
              >
                <MenuItem value="immediate_redirect">Immediate Redirect</MenuItem>
                <MenuItem value="gentle_redirect">Gentle Redirect</MenuItem>
                <MenuItem value="allow_exploration">Allow Exploration</MenuItem>
                <MenuItem value="adaptive">Adaptive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Silence Comfort: {getIntensityLabel(preferences.sessionStructure.silence_comfort)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How comfortable are you with pauses and silence?
            </Typography>
            <Slider
              value={preferences.sessionStructure.silence_comfort}
              onChange={(e, newValue) => handlePreferenceChange('sessionStructure', 'silence_comfort', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Uncomfortable' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Comfortable' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.sessionStructure.silence_comfort), mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Session Pacing</InputLabel>
              <Select
                value={preferences.sessionStructure.session_pacing}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'session_pacing', e.target.value)}
                label="Session Pacing"
              >
                <MenuItem value="slow_reflective">Slow & Reflective</MenuItem>
                <MenuItem value="moderate">Moderate</MenuItem>
                <MenuItem value="fast_dynamic">Fast & Dynamic</MenuItem>
                <MenuItem value="adaptive">Adaptive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Topic Transitions</InputLabel>
              <Select
                value={preferences.sessionStructure.topic_transitions}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'topic_transitions', e.target.value)}
                label="Topic Transitions"
              >
                <MenuItem value="abrupt_efficient">Abrupt & Efficient</MenuItem>
                <MenuItem value="smooth_guided">Smooth & Guided</MenuItem>
                <MenuItem value="client_controlled">Client Controlled</MenuItem>
                <MenuItem value="natural_flow">Natural Flow</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Homework Preference</InputLabel>
              <Select
                value={preferences.sessionStructure.homework_preference}
                onChange={(e) => handlePreferenceChange('sessionStructure', 'homework_preference', e.target.value)}
                label="Homework Preference"
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="optional_suggested">Optional & Suggested</MenuItem>
                <MenuItem value="encouraged">Encouraged</MenuItem>
                <MenuItem value="required">Required</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderLearningApproachSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <School sx={{ mr: 2, color: '#ff9800' }} />
          <Typography variant="h6">Learning & Growth Approach</Typography>
          <Tooltip title="Configure how you prefer to learn and grow through coaching">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Learning Style Focus</InputLabel>
              <Select
                value={preferences.learningApproach.learning_style_focus}
                onChange={(e) => handlePreferenceChange('learningApproach', 'learning_style_focus', e.target.value)}
                label="Learning Style Focus"
              >
                <MenuItem value="theoretical">Theoretical</MenuItem>
                <MenuItem value="practical">Practical</MenuItem>
                <MenuItem value="experiential">Experiential</MenuItem>
                <MenuItem value="mixed">Mixed Approach</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Insight Delivery</InputLabel>
              <Select
                value={preferences.learningApproach.insight_delivery}
                onChange={(e) => handlePreferenceChange('learningApproach', 'insight_delivery', e.target.value)}
                label="Insight Delivery"
              >
                <MenuItem value="direct_explanation">Direct Explanation</MenuItem>
                <MenuItem value="gradual_discovery">Gradual Discovery</MenuItem>
                <MenuItem value="socratic_questioning">Socratic Questioning</MenuItem>
                <MenuItem value="collaborative_exploration">Collaborative Exploration</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Pattern Recognition</InputLabel>
              <Select
                value={preferences.learningApproach.pattern_recognition}
                onChange={(e) => handlePreferenceChange('learningApproach', 'pattern_recognition', e.target.value)}
                label="Pattern Recognition"
              >
                <MenuItem value="direct_pointing">Direct Pointing Out</MenuItem>
                <MenuItem value="guided_awareness">Guided Awareness</MenuItem>
                <MenuItem value="self_discovery">Self-Discovery</MenuItem>
                <MenuItem value="collaborative_identification">Collaborative Identification</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Skill Building</InputLabel>
              <Select
                value={preferences.learningApproach.skill_building}
                onChange={(e) => handlePreferenceChange('learningApproach', 'skill_building', e.target.value)}
                label="Skill Building"
              >
                <MenuItem value="theory_first">Theory First</MenuItem>
                <MenuItem value="practice_focused">Practice Focused</MenuItem>
                <MenuItem value="integrated">Integrated</MenuItem>
                <MenuItem value="adaptive">Adaptive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Reflection Emphasis: {getIntensityLabel(preferences.learningApproach.reflection_emphasis)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much emphasis on reflection and introspection?
            </Typography>
            <Slider
              value={preferences.learningApproach.reflection_emphasis}
              onChange={(e, newValue) => handlePreferenceChange('learningApproach', 'reflection_emphasis', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.learningApproach.reflection_emphasis), mb: 3 }}
            />

            <Typography gutterBottom>
              Action Orientation: {getIntensityLabel(preferences.learningApproach.action_orientation)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How action-oriented should the coaching be?
            </Typography>
            <Slider
              value={preferences.learningApproach.action_orientation}
              onChange={(e, newValue) => handlePreferenceChange('learningApproach', 'action_orientation', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Reflective' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Action-Focused' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.learningApproach.action_orientation), mb: 3 }}
            />

            <Typography gutterBottom>
              Mindfulness Integration: {getIntensityLabel(preferences.learningApproach.mindfulness_integration)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much mindfulness should be integrated?
            </Typography>
            <Slider
              value={preferences.learningApproach.mindfulness_integration}
              onChange={(e, newValue) => handlePreferenceChange('learningApproach', 'mindfulness_integration', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Integration' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.learningApproach.mindfulness_integration), mb: 3 }}
            />

            <Typography gutterBottom>
              Cognitive Restructuring: {getIntensityLabel(preferences.learningApproach.cognitive_restructuring)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much focus on changing thought patterns?
            </Typography>
            <Slider
              value={preferences.learningApproach.cognitive_restructuring}
              onChange={(e, newValue) => handlePreferenceChange('learningApproach', 'cognitive_restructuring', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Focus' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.learningApproach.cognitive_restructuring), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCrisisHandlingSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Healing sx={{ mr: 2, color: '#9c27b0' }} />
          <Typography variant="h6">Crisis & Difficult Moments</Typography>
          <Tooltip title="Configure how your coach handles crises and challenging situations">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Crisis Response Style</InputLabel>
              <Select
                value={preferences.crisisHandling.crisis_response_style}
                onChange={(e) => handlePreferenceChange('crisisHandling', 'crisis_response_style', e.target.value)}
                label="Crisis Response Style"
              >
                <MenuItem value="immediate_action">Immediate Action</MenuItem>
                <MenuItem value="calm_supportive">Calm & Supportive</MenuItem>
                <MenuItem value="collaborative_problem_solving">Collaborative Problem-Solving</MenuItem>
                <MenuItem value="resource_connecting">Resource Connecting</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Emotional Intensity Handling</InputLabel>
              <Select
                value={preferences.crisisHandling.emotional_intensity_handling}
                onChange={(e) => handlePreferenceChange('crisisHandling', 'emotional_intensity_handling', e.target.value)}
                label="Emotional Intensity Handling"
              >
                <MenuItem value="normalize_and_redirect">Normalize & Redirect</MenuItem>
                <MenuItem value="validate_and_ground">Validate & Ground</MenuItem>
                <MenuItem value="explore_and_process">Explore & Process</MenuItem>
                <MenuItem value="stabilize_and_support">Stabilize & Support</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Conflict Approach</InputLabel>
              <Select
                value={preferences.crisisHandling.conflict_approach}
                onChange={(e) => handlePreferenceChange('crisisHandling', 'conflict_approach', e.target.value)}
                label="Conflict Approach"
              >
                <MenuItem value="solution_focused">Solution-Focused</MenuItem>
                <MenuItem value="understanding_first">Understanding First</MenuItem>
                <MenuItem value="mediation_style">Mediation Style</MenuItem>
                <MenuItem value="perspective_taking">Perspective Taking</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Boundary Setting</InputLabel>
              <Select
                value={preferences.crisisHandling.boundary_setting}
                onChange={(e) => handlePreferenceChange('crisisHandling', 'boundary_setting', e.target.value)}
                label="Boundary Setting"
              >
                <MenuItem value="direct_clear">Direct & Clear</MenuItem>
                <MenuItem value="gentle_firm">Gentle & Firm</MenuItem>
                <MenuItem value="collaborative">Collaborative</MenuItem>
                <MenuItem value="educational">Educational</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Resource Offering</InputLabel>
              <Select
                value={preferences.crisisHandling.resource_offering}
                onChange={(e) => handlePreferenceChange('crisisHandling', 'resource_offering', e.target.value)}
                label="Resource Offering"
              >
                <MenuItem value="reactive_only">Reactive Only</MenuItem>
                <MenuItem value="when_asked">When Asked</MenuItem>
                <MenuItem value="proactive">Proactive</MenuItem>
                <MenuItem value="comprehensive">Comprehensive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Follow-up Style</InputLabel>
              <Select
                value={preferences.crisisHandling.follow_up_style}
                onChange={(e) => handlePreferenceChange('crisisHandling', 'follow_up_style', e.target.value)}
                label="Follow-up Style"
              >
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="check_in_focused">Check-in Focused</MenuItem>
                <MenuItem value="comprehensive">Comprehensive</MenuItem>
                <MenuItem value="client_preference">Client Preference</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Safety Prioritization: {getIntensityLabel(preferences.crisisHandling.safety_prioritization)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much should safety be prioritized in crisis situations?
            </Typography>
            <Slider
              value={preferences.crisisHandling.safety_prioritization}
              onChange={(e, newValue) => handlePreferenceChange('crisisHandling', 'safety_prioritization', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Moderate' },
                { value: 5, label: 'High' },
                { value: 10, label: 'Maximum' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.crisisHandling.safety_prioritization), mb: 3 }}
            />

            <Typography gutterBottom>
              Professional Referral Comfort: {getIntensityLabel(preferences.crisisHandling.professional_referral_comfort)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How comfortable are you with professional referrals when needed?
            </Typography>
            <Slider
              value={preferences.crisisHandling.professional_referral_comfort}
              onChange={(e, newValue) => handlePreferenceChange('crisisHandling', 'professional_referral_comfort', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Reluctant' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Comfortable' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.crisisHandling.professional_referral_comfort), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderPersonalizationSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <AutoAwesome sx={{ mr: 2, color: '#795548' }} />
          <Typography variant="h6">Personalization & Adaptation</Typography>
          <Tooltip title="Configure how your coach personalizes and adapts to your needs">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Adaptation Speed</InputLabel>
              <Select
                value={preferences.personalizationStyle.adaptation_speed}
                onChange={(e) => handlePreferenceChange('personalizationStyle', 'adaptation_speed', e.target.value)}
                label="Adaptation Speed"
              >
                <MenuItem value="immediate">Immediate</MenuItem>
                <MenuItem value="gradual">Gradual</MenuItem>
                <MenuItem value="session_based">Session-Based</MenuItem>
                <MenuItem value="long_term">Long-Term</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Preference Learning</InputLabel>
              <Select
                value={preferences.personalizationStyle.preference_learning}
                onChange={(e) => handlePreferenceChange('personalizationStyle', 'preference_learning', e.target.value)}
                label="Preference Learning"
              >
                <MenuItem value="direct_asking">Direct Asking</MenuItem>
                <MenuItem value="observational">Observational</MenuItem>
                <MenuItem value="feedback_based">Feedback-Based</MenuItem>
                <MenuItem value="mixed">Mixed Approach</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Progress Adjustment</InputLabel>
              <Select
                value={preferences.personalizationStyle.progress_adjustment}
                onChange={(e) => handlePreferenceChange('personalizationStyle', 'progress_adjustment', e.target.value)}
                label="Progress Adjustment"
              >
                <MenuItem value="fixed_approach">Fixed Approach</MenuItem>
                <MenuItem value="responsive">Responsive</MenuItem>
                <MenuItem value="highly_adaptive">Highly Adaptive</MenuItem>
                <MenuItem value="client_controlled">Client Controlled</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Relationship Building</InputLabel>
              <Select
                value={preferences.personalizationStyle.relationship_building}
                onChange={(e) => handlePreferenceChange('personalizationStyle', 'relationship_building', e.target.value)}
                label="Relationship Building"
              >
                <MenuItem value="immediate_rapport">Immediate Rapport</MenuItem>
                <MenuItem value="gradual_trust">Gradual Trust Building</MenuItem>
                <MenuItem value="professional_distance">Professional Distance</MenuItem>
                <MenuItem value="adaptive">Adaptive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Style Flexibility: {getIntensityLabel(preferences.personalizationStyle.style_flexibility)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How flexible should your coach be in adapting their style?
            </Typography>
            <Slider
              value={preferences.personalizationStyle.style_flexibility}
              onChange={(e, newValue) => handlePreferenceChange('personalizationStyle', 'style_flexibility', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Consistent' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Highly Flexible' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.personalizationStyle.style_flexibility), mb: 3 }}
            />

            <Typography gutterBottom>
              Cultural Adaptation: {getIntensityLabel(preferences.personalizationStyle.cultural_adaptation)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is cultural adaptation in coaching?
            </Typography>
            <Slider
              value={preferences.personalizationStyle.cultural_adaptation}
              onChange={(e, newValue) => handlePreferenceChange('personalizationStyle', 'cultural_adaptation', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Basic' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Highly Adaptive' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.personalizationStyle.cultural_adaptation), mb: 3 }}
            />

            <Typography gutterBottom>
              Personality Matching: {getIntensityLabel(preferences.personalizationStyle.personality_matching)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much should coaching style match your personality?
            </Typography>
            <Slider
              value={preferences.personalizationStyle.personality_matching}
              onChange={(e, newValue) => handlePreferenceChange('personalizationStyle', 'personality_matching', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High Matching' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.personalizationStyle.personality_matching), mb: 3 }}
            />

            <Typography gutterBottom>
              Mood Responsiveness: {getIntensityLabel(preferences.personalizationStyle.mood_responsiveness)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How responsive should your coach be to your mood?
            </Typography>
            <Slider
              value={preferences.personalizationStyle.mood_responsiveness}
              onChange={(e, newValue) => handlePreferenceChange('personalizationStyle', 'mood_responsiveness', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Highly Responsive' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.personalizationStyle.mood_responsiveness), mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderContentPreferencesSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Assignment sx={{ mr: 2, color: '#607d8b' }} />
          <Typography variant="h6">Content & Resource Preferences</Typography>
          <Tooltip title="Configure content delivery and resource sharing preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Educational Content</InputLabel>
              <Select
                value={preferences.contentPreferences.educational_content}
                onChange={(e) => handlePreferenceChange('contentPreferences', 'educational_content', e.target.value)}
                label="Educational Content"
              >
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="separate_sessions">Separate Sessions</MenuItem>
                <MenuItem value="integrated">Integrated</MenuItem>
                <MenuItem value="comprehensive">Comprehensive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Exercise Integration</InputLabel>
              <Select
                value={preferences.contentPreferences.exercise_integration}
                onChange={(e) => handlePreferenceChange('contentPreferences', 'exercise_integration', e.target.value)}
                label="Exercise Integration"
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="practical_focused">Practical Focused</MenuItem>
                <MenuItem value="comprehensive">Comprehensive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Resource Sharing</InputLabel>
              <Select
                value={preferences.contentPreferences.resource_sharing}
                onChange={(e) => handlePreferenceChange('contentPreferences', 'resource_sharing', e.target.value)}
                label="Resource Sharing"
              >
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="when_requested">When Requested</MenuItem>
                <MenuItem value="curated_relevant">Curated & Relevant</MenuItem>
                <MenuItem value="comprehensive">Comprehensive</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Homework Complexity</InputLabel>
              <Select
                value={preferences.contentPreferences.homework_complexity}
                onChange={(e) => handlePreferenceChange('contentPreferences', 'homework_complexity', e.target.value)}
                label="Homework Complexity"
              >
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="simple_actionable">Simple & Actionable</MenuItem>
                <MenuItem value="moderate_structured">Moderate & Structured</MenuItem>
                <MenuItem value="comprehensive_detailed">Comprehensive & Detailed</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Metaphor Usage: {getIntensityLabel(preferences.contentPreferences.metaphor_usage)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much should your coach use metaphors and analogies?
            </Typography>
            <Slider
              value={preferences.contentPreferences.metaphor_usage}
              onChange={(e, newValue) => handlePreferenceChange('contentPreferences', 'metaphor_usage', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Frequent' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.contentPreferences.metaphor_usage), mb: 3 }}
            />

            <Typography gutterBottom>
              Storytelling Preference: {getIntensityLabel(preferences.contentPreferences.storytelling_preference)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much storytelling should be included in coaching?
            </Typography>
            <Slider
              value={preferences.contentPreferences.storytelling_preference}
              onChange={(e, newValue) => handlePreferenceChange('contentPreferences', 'storytelling_preference', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Story-Rich' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getIntensityColor(preferences.contentPreferences.storytelling_preference), mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Progress Visualization</InputLabel>
              <Select
                value={preferences.contentPreferences.progress_visualization}
                onChange={(e) => handlePreferenceChange('contentPreferences', 'progress_visualization', e.target.value)}
                label="Progress Visualization"
              >
                <MenuItem value="text_based">Text-Based</MenuItem>
                <MenuItem value="simple_metrics">Simple Metrics</MenuItem>
                <MenuItem value="charts_and_graphs">Charts & Graphs</MenuItem>
                <MenuItem value="comprehensive_analytics">Comprehensive Analytics</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Goal Tracking Detail</InputLabel>
              <Select
                value={preferences.contentPreferences.goal_tracking_detail}
                onChange={(e) => handlePreferenceChange('contentPreferences', 'goal_tracking_detail', e.target.value)}
                label="Goal Tracking Detail"
              >
                <MenuItem value="minimal">Minimal</MenuItem>
                <MenuItem value="moderate">Moderate</MenuItem>
                <MenuItem value="detailed">Detailed</MenuItem>
                <MenuItem value="comprehensive">Comprehensive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderCommunicationStyleSection();
      case 1: return renderFeedbackStyleSection();
      case 2: return renderSessionStructureSection();
      case 3: return renderLearningApproachSection();
      case 4: return renderCrisisHandlingSection();
      case 5: return renderPersonalizationSection();
      case 6: return renderContentPreferencesSection();
      default: return renderCommunicationStyleSection();
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleComplete = () => {
    // Save preferences and navigate to next screen
    localStorage.setItem('coachingStylePreferences', JSON.stringify(preferences));
    console.log('Coaching Style Preferences completed:', preferences);
    // Navigate to Screen 143: Personal Growth Goals
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Coaching Style Preferences
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Customize your AI coach's communication and coaching approach
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
            {Math.round(progress)}% Complete
          </Typography>
        </Box>
      </Box>

      {/* Section Navigation */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={1}>
          {sections.map((section, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.7} key={section.id}>
              <Chip
                icon={React.cloneElement(section.icon, { sx: { color: section.color } })}
                label={section.title}
                onClick={() => setCurrentSection(index)}
                variant={currentSection === index ? "filled" : "outlined"}
                color={currentSection === index ? "primary" : "default"}
                sx={{ 
                  width: '100%',
                  height: 'auto',
                  py: 1,
                  cursor: 'pointer',
                  '& .MuiChip-label': {
                    fontSize: '0.7rem',
                    whiteSpace: 'normal',
                    lineHeight: 1.2
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Section Content */}
      {renderCurrentSection()}

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <Typography variant="body2">
          <strong>Personalization Note:</strong> Your AI coach will continuously learn and adapt 
          to your preferences while respecting your cultural background and personal boundaries. 
          You can adjust these settings anytime as your needs evolve.
        </Typography>
      </Alert>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentSection === 0}
        >
          Previous Section
        </Button>

        {currentSection < sections.length - 1 ? (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
              color: 'white'
            }}
          >
            Next Section
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
            Complete Style Setup
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Coaching Style Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Tone:</strong> {preferences.communicationStyle.tone_preference.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Feedback:</strong> {preferences.feedbackStyle.feedback_approach.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Session Format:</strong> {preferences.sessionStructure.session_format.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Learning Style:</strong> {preferences.learningApproach.learning_style_focus}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CoachingStylePreferences;

