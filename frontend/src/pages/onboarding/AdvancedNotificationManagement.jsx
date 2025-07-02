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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
  Rating,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  SmartToy as SmartIcon,
  Schedule as TimingIcon,
  Tune as PersonalizationIcon,
  Analytics as AnalyticsIcon,
  Notifications as NotificationsIcon,
  FilterList as FilterIcon,
  Psychology as AIIcon,
  TrendingUp as PriorityIcon,
  LocationOn as ContextIcon,
  School as LearningIcon,
  AccessTime as QuietIcon,
  WbSunny as OptimalIcon,
  Public as TimezoneIcon,
  DirectionsRun as ActivityIcon,
  Message as TemplateIcon,
  Mood as ToneIcon,
  Language as LanguageIcon,
  Public as CulturalIcon,
  Insights as InsightsIcon,
  Speed as EngagementIcon,
  Pattern as PatternIcon,
  Lightbulb as SuggestionIcon,
  Assessment as PerformanceIcon,
  Preview as PreviewIcon,
  Science as TestingIcon,
  Feedback as FeedbackIcon,
  Dashboard as DashboardIcon,
  CheckCircle as CheckIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  TrendingDown as DeclineIcon,
  TrendingFlat as StableIcon,
  Visibility as ViewIcon,
  TouchApp as InteractionIcon,
  Reply as ResponseIcon,
  Block as BlockIcon
} from '@mui/icons-material';

const AdvancedNotificationManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [smartNotifications, setSmartNotifications] = useState({
    intelligentFiltering: { enabled: true, aggressiveness: 70 },
    priorityScoring: { enabled: true, algorithm: 'ml-based' },
    contextAwareness: { enabled: true, factors: ['location', 'activity', 'mood', 'time'] },
    behavioralLearning: { enabled: true, adaptationSpeed: 'moderate' },
    spamDetection: { enabled: true, sensitivity: 80 },
    duplicateFiltering: { enabled: true, timeWindow: 30 },
    relevanceScoring: { enabled: true, threshold: 60 },
    emergencyOverride: { enabled: true, keywords: ['urgent', 'emergency', 'crisis'] }
  });

  const [timingFrequency, setTimingFrequency] = useState({
    quietHours: { enabled: true, start: '22:00', end: '07:00' },
    optimalWindows: { enabled: true, windows: ['09:00-11:00', '14:00-16:00', '19:00-21:00'] },
    timezoneAdaptation: { enabled: true, autoDetect: true },
    activityBasedScheduling: { enabled: true, activities: ['working', 'sleeping', 'exercising'] },
    frequencyLimits: { enabled: true, maxPerHour: 5, maxPerDay: 50 },
    batchDelivery: { enabled: false, interval: 60 },
    delayedDelivery: { enabled: true, conditions: ['driving', 'meeting'] },
    weekendAdjustment: { enabled: true, reducedFrequency: true }
  });

  const [contentPersonalization, setContentPersonalization] = useState({
    messageTemplates: { enabled: true, style: 'friendly' },
    toneCustomization: { enabled: true, tone: 'warm' },
    languagePreferences: { enabled: true, language: 'en', formality: 'casual' },
    culturalAdaptation: { enabled: true, region: 'auto' },
    emojiUsage: { enabled: true, frequency: 'moderate' },
    personalization: { enabled: true, includeNames: true },
    contextualContent: { enabled: true, situationAware: true },
    lengthOptimization: { enabled: true, preferredLength: 'medium' }
  });

  const [analyticsInsights, setAnalyticsInsights] = useState({
    engagementTracking: { enabled: true, metrics: ['opens', 'clicks', 'responses', 'dismissals'] },
    responsePatterns: { enabled: true, analysis: 'detailed' },
    optimizationSuggestions: { enabled: true, frequency: 'weekly' },
    performanceReporting: { enabled: true, reports: ['daily', 'weekly', 'monthly'] },
    abTesting: { enabled: false, testTypes: ['timing', 'content', 'frequency'] },
    predictiveAnalytics: { enabled: true, predictions: ['engagement', 'response_time'] },
    benchmarking: { enabled: true, compareToAverage: true },
    exportCapabilities: { enabled: true, formats: ['csv', 'pdf', 'json'] }
  });

  const [notificationScore, setNotificationScore] = useState(0);
  const [engagementMetrics, setEngagementMetrics] = useState({
    openRate: 0,
    clickRate: 0,
    responseRate: 0,
    satisfactionScore: 0
  });

  const [showPreview, setShowPreview] = useState(false);

  // Calculate notification score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // Smart notifications (30 points)
      const smartFeatures = Object.values(smartNotifications).filter(feature => feature.enabled).length;
      const smartScore = Math.min(smartFeatures / 6, 1) * 30;
      score += smartScore;
      
      // Timing & frequency (25 points)
      const timingFeatures = Object.values(timingFrequency).filter(feature => feature.enabled).length;
      const timingScore = Math.min(timingFeatures / 6, 1) * 25;
      score += timingScore;
      
      // Content personalization (25 points)
      const contentFeatures = Object.values(contentPersonalization).filter(feature => feature.enabled).length;
      const contentScore = Math.min(contentFeatures / 6, 1) * 25;
      score += contentScore;
      
      // Analytics & insights (20 points)
      const analyticsFeatures = Object.values(analyticsInsights).filter(feature => feature.enabled).length;
      const analyticsScore = Math.min(analyticsFeatures / 6, 1) * 20;
      score += analyticsScore;
      
      setNotificationScore(Math.round(score));
      
      // Simulate engagement metrics based on configuration
      setEngagementMetrics({
        openRate: Math.round(60 + (score * 0.3)),
        clickRate: Math.round(25 + (score * 0.2)),
        responseRate: Math.round(15 + (score * 0.15)),
        satisfactionScore: Math.round(70 + (score * 0.25))
      });
    };

    calculateScore();
  }, [smartNotifications, timingFrequency, contentPersonalization, analyticsInsights]);

  const handleSmartChange = (setting, property, value) => {
    setSmartNotifications(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const handleTimingChange = (setting, property, value) => {
    setTimingFrequency(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const handleContentChange = (setting, property, value) => {
    setContentPersonalization(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const handleAnalyticsChange = (setting, property, value) => {
    setAnalyticsInsights(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Exceptional', color: 'success', description: 'Outstanding notification system' };
    if (score >= 75) return { level: 'Excellent', color: 'info', description: 'Highly optimized notifications' };
    if (score >= 60) return { level: 'Good', color: 'warning', description: 'Well-configured system' };
    return { level: 'Basic', color: 'error', description: 'Consider more optimization' };
  };

  const scoreInfo = getScoreLevel(notificationScore);

  const renderSmartNotifications = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SmartIcon color="primary" />
        Smart Notifications
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        AI-powered notification intelligence that learns from your behavior and optimizes delivery 
        for maximum relevance and minimal disruption.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <FilterIcon />
                Intelligent Filtering
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={smartNotifications.intelligentFiltering.enabled}
                    onChange={(e) => handleSmartChange('intelligentFiltering', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Intelligent Filtering"
                sx={{ mb: 2 }}
              />
              {smartNotifications.intelligentFiltering.enabled && (
                <Box>
                  <Typography gutterBottom>Aggressiveness: {smartNotifications.intelligentFiltering.aggressiveness}%</Typography>
                  <Slider
                    value={smartNotifications.intelligentFiltering.aggressiveness}
                    onChange={(e, value) => handleSmartChange('intelligentFiltering', 'aggressiveness', value)}
                    min={30}
                    max={90}
                    step={10}
                    marks
                    valueLabelDisplay="auto"
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <PriorityIcon />
                Priority Scoring
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={smartNotifications.priorityScoring.enabled}
                    onChange={(e) => handleSmartChange('priorityScoring', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Priority Scoring"
                sx={{ mb: 2 }}
              />
              {smartNotifications.priorityScoring.enabled && (
                <FormControl fullWidth>
                  <InputLabel>Algorithm Type</InputLabel>
                  <Select
                    value={smartNotifications.priorityScoring.algorithm}
                    onChange={(e) => handleSmartChange('priorityScoring', 'algorithm', e.target.value)}
                    label="Algorithm Type"
                  >
                    <MenuItem value="rule-based">Rule-based</MenuItem>
                    <MenuItem value="ml-based">Machine Learning</MenuItem>
                    <MenuItem value="hybrid">Hybrid Approach</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <ContextIcon />
                Context Awareness
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={smartNotifications.contextAwareness.enabled}
                    onChange={(e) => handleSmartChange('contextAwareness', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Context Awareness"
                sx={{ mb: 2 }}
              />
              {smartNotifications.contextAwareness.enabled && (
                <Box>
                  <Typography variant="body2" gutterBottom>Context Factors:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['location', 'activity', 'mood', 'time', 'device', 'network'].map((factor) => (
                      <Chip
                        key={factor}
                        label={factor}
                        variant={smartNotifications.contextAwareness.factors.includes(factor) ? 'filled' : 'outlined'}
                        onClick={() => {
                          const factors = smartNotifications.contextAwareness.factors.includes(factor)
                            ? smartNotifications.contextAwareness.factors.filter(f => f !== factor)
                            : [...smartNotifications.contextAwareness.factors, factor];
                          handleSmartChange('contextAwareness', 'factors', factors);
                        }}
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <LearningIcon />
                Behavioral Learning
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={smartNotifications.behavioralLearning.enabled}
                    onChange={(e) => handleSmartChange('behavioralLearning', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Behavioral Learning"
                sx={{ mb: 2 }}
              />
              {smartNotifications.behavioralLearning.enabled && (
                <FormControl fullWidth>
                  <InputLabel>Adaptation Speed</InputLabel>
                  <Select
                    value={smartNotifications.behavioralLearning.adaptationSpeed}
                    onChange={(e) => handleSmartChange('behavioralLearning', 'adaptationSpeed', e.target.value)}
                    label="Adaptation Speed"
                  >
                    <MenuItem value="slow">Slow & Careful</MenuItem>
                    <MenuItem value="moderate">Moderate</MenuItem>
                    <MenuItem value="fast">Fast Learning</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderTimingFrequency = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TimingIcon color="primary" />
        Timing & Frequency
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Optimize notification timing and frequency to respect your schedule and maximize engagement 
        while minimizing disruption to your daily activities.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <QuietIcon />
                Quiet Hours
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={timingFrequency.quietHours.enabled}
                    onChange={(e) => handleTimingChange('quietHours', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Quiet Hours"
                sx={{ mb: 2 }}
              />
              {timingFrequency.quietHours.enabled && (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Start Time"
                      type="time"
                      value={timingFrequency.quietHours.start}
                      onChange={(e) => handleTimingChange('quietHours', 'start', e.target.value)}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="End Time"
                      type="time"
                      value={timingFrequency.quietHours.end}
                      onChange={(e) => handleTimingChange('quietHours', 'end', e.target.value)}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <OptimalIcon />
                Optimal Windows
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={timingFrequency.optimalWindows.enabled}
                    onChange={(e) => handleTimingChange('optimalWindows', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Optimal Delivery Windows"
                sx={{ mb: 2 }}
              />
              {timingFrequency.optimalWindows.enabled && (
                <Box>
                  <Typography variant="body2" gutterBottom>Preferred Windows:</Typography>
                  <List dense>
                    {timingFrequency.optimalWindows.windows.map((window, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={window} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <ActivityIcon />
                Activity-Based Scheduling
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={timingFrequency.activityBasedScheduling.enabled}
                    onChange={(e) => handleTimingChange('activityBasedScheduling', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Activity-Based Scheduling"
                sx={{ mb: 2 }}
              />
              {timingFrequency.activityBasedScheduling.enabled && (
                <Box>
                  <Typography variant="body2" gutterBottom>Avoid During:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['working', 'sleeping', 'exercising', 'driving', 'meeting', 'eating'].map((activity) => (
                      <Chip
                        key={activity}
                        label={activity}
                        variant={timingFrequency.activityBasedScheduling.activities.includes(activity) ? 'filled' : 'outlined'}
                        onClick={() => {
                          const activities = timingFrequency.activityBasedScheduling.activities.includes(activity)
                            ? timingFrequency.activityBasedScheduling.activities.filter(a => a !== activity)
                            : [...timingFrequency.activityBasedScheduling.activities, activity];
                          handleTimingChange('activityBasedScheduling', 'activities', activities);
                        }}
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Frequency Limits
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={timingFrequency.frequencyLimits.enabled}
                    onChange={(e) => handleTimingChange('frequencyLimits', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Frequency Limits"
                sx={{ mb: 2 }}
              />
              {timingFrequency.frequencyLimits.enabled && (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Max Per Hour"
                      type="number"
                      value={timingFrequency.frequencyLimits.maxPerHour}
                      onChange={(e) => handleTimingChange('frequencyLimits', 'maxPerHour', parseInt(e.target.value))}
                      inputProps={{ min: 1, max: 20 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Max Per Day"
                      type="number"
                      value={timingFrequency.frequencyLimits.maxPerDay}
                      onChange={(e) => handleTimingChange('frequencyLimits', 'maxPerDay', parseInt(e.target.value))}
                      inputProps={{ min: 10, max: 200 }}
                    />
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderContentPersonalization = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PersonalizationIcon color="primary" />
        Content Personalization
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Customize notification content to match your communication style, language preferences, 
        and cultural context for more meaningful and engaging messages.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TemplateIcon />
                Message Templates
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={contentPersonalization.messageTemplates.enabled}
                    onChange={(e) => handleContentChange('messageTemplates', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Custom Templates"
                sx={{ mb: 2 }}
              />
              {contentPersonalization.messageTemplates.enabled && (
                <FormControl fullWidth>
                  <InputLabel>Template Style</InputLabel>
                  <Select
                    value={contentPersonalization.messageTemplates.style}
                    onChange={(e) => handleContentChange('messageTemplates', 'style', e.target.value)}
                    label="Template Style"
                  >
                    <MenuItem value="professional">Professional</MenuItem>
                    <MenuItem value="friendly">Friendly</MenuItem>
                    <MenuItem value="casual">Casual</MenuItem>
                    <MenuItem value="playful">Playful</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <ToneIcon />
                Tone Customization
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={contentPersonalization.toneCustomization.enabled}
                    onChange={(e) => handleContentChange('toneCustomization', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Tone Customization"
                sx={{ mb: 2 }}
              />
              {contentPersonalization.toneCustomization.enabled && (
                <FormControl fullWidth>
                  <InputLabel>Communication Tone</InputLabel>
                  <Select
                    value={contentPersonalization.toneCustomization.tone}
                    onChange={(e) => handleContentChange('toneCustomization', 'tone', e.target.value)}
                    label="Communication Tone"
                  >
                    <MenuItem value="warm">Warm & Encouraging</MenuItem>
                    <MenuItem value="neutral">Neutral & Informative</MenuItem>
                    <MenuItem value="enthusiastic">Enthusiastic & Energetic</MenuItem>
                    <MenuItem value="supportive">Supportive & Caring</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <LanguageIcon />
                Language Preferences
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={contentPersonalization.languagePreferences.enabled}
                    onChange={(e) => handleContentChange('languagePreferences', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Language Customization"
                sx={{ mb: 2 }}
              />
              {contentPersonalization.languagePreferences.enabled && (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Language</InputLabel>
                      <Select
                        value={contentPersonalization.languagePreferences.language}
                        onChange={(e) => handleContentChange('languagePreferences', 'language', e.target.value)}
                        label="Language"
                      >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="es">Spanish</MenuItem>
                        <MenuItem value="fr">French</MenuItem>
                        <MenuItem value="de">German</MenuItem>
                        <MenuItem value="it">Italian</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth>
                      <InputLabel>Formality</InputLabel>
                      <Select
                        value={contentPersonalization.languagePreferences.formality}
                        onChange={(e) => handleContentChange('languagePreferences', 'formality', e.target.value)}
                        label="Formality"
                      >
                        <MenuItem value="formal">Formal</MenuItem>
                        <MenuItem value="casual">Casual</MenuItem>
                        <MenuItem value="mixed">Mixed</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <CulturalIcon />
                Cultural Adaptation
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={contentPersonalization.culturalAdaptation.enabled}
                    onChange={(e) => handleContentChange('culturalAdaptation', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Cultural Adaptation"
                sx={{ mb: 2 }}
              />
              {contentPersonalization.culturalAdaptation.enabled && (
                <FormControl fullWidth>
                  <InputLabel>Cultural Region</InputLabel>
                  <Select
                    value={contentPersonalization.culturalAdaptation.region}
                    onChange={(e) => handleContentChange('culturalAdaptation', 'region', e.target.value)}
                    label="Cultural Region"
                  >
                    <MenuItem value="auto">Auto-detect</MenuItem>
                    <MenuItem value="western">Western</MenuItem>
                    <MenuItem value="eastern">Eastern</MenuItem>
                    <MenuItem value="latin">Latin American</MenuItem>
                    <MenuItem value="middle-eastern">Middle Eastern</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAnalyticsInsights = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AnalyticsIcon color="primary" />
        Analytics & Insights
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Track notification performance and gain insights to continuously optimize your notification 
        experience for better engagement and satisfaction.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <DashboardIcon />
                Performance Dashboard
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                      {engagementMetrics.openRate}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Open Rate
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="success.main" sx={{ fontWeight: 700 }}>
                      {engagementMetrics.clickRate}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Click Rate
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="info.main" sx={{ fontWeight: 700 }}>
                      {engagementMetrics.responseRate}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Response Rate
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" color="warning.main" sx={{ fontWeight: 700 }}>
                      {engagementMetrics.satisfactionScore}%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Satisfaction
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <EngagementIcon />
                Engagement Tracking
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={analyticsInsights.engagementTracking.enabled}
                    onChange={(e) => handleAnalyticsChange('engagementTracking', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Engagement Tracking"
                sx={{ mb: 2 }}
              />
              {analyticsInsights.engagementTracking.enabled && (
                <Box>
                  <Typography variant="body2" gutterBottom>Tracked Metrics:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['opens', 'clicks', 'responses', 'dismissals', 'shares', 'saves'].map((metric) => (
                      <Chip
                        key={metric}
                        label={metric}
                        variant={analyticsInsights.engagementTracking.metrics.includes(metric) ? 'filled' : 'outlined'}
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <TestingIcon />
                A/B Testing
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={analyticsInsights.abTesting.enabled}
                    onChange={(e) => handleAnalyticsChange('abTesting', 'enabled', e.target.checked)}
                  />
                }
                label="Enable A/B Testing"
                sx={{ mb: 2 }}
              />
              {analyticsInsights.abTesting.enabled && (
                <Box>
                  <Typography variant="body2" gutterBottom>Test Types:</Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {['timing', 'content', 'frequency', 'tone', 'length'].map((testType) => (
                      <Chip
                        key={testType}
                        label={testType}
                        variant={analyticsInsights.abTesting.testTypes.includes(testType) ? 'filled' : 'outlined'}
                        size="small"
                      />
                    ))}
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Advanced Notification Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Configure intelligent notification systems with AI-powered optimization, advanced timing controls, 
          content personalization, and comprehensive analytics for the ultimate notification experience.
        </Typography>

        {/* Notification Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {notificationScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Notification Score
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
                        {Object.values(smartNotifications).filter(s => s.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Smart Features
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(timingFrequency).filter(t => t.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Timing Controls
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(contentPersonalization).filter(c => c.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Content Features
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(analyticsInsights).filter(a => a.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Analytics Tools
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
            label="Smart Notifications" 
            icon={<SmartIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Timing & Frequency" 
            icon={<TimingIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Content Personalization" 
            icon={<PersonalizationIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Analytics & Insights" 
            icon={<AnalyticsIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderSmartNotifications()}
          {activeTab === 1 && renderTimingFrequency()}
          {activeTab === 2 && renderContentPersonalization()}
          {activeTab === 3 && renderAnalyticsInsights()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={() => setShowPreview(!showPreview)}
          startIcon={<PreviewIcon />}
        >
          {showPreview ? 'Hide' : 'Show'} Notification Preview
        </Button>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Reset to Defaults
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<CheckIcon />}
            sx={{ minWidth: 200 }}
          >
            Save Notification Settings
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Notification Optimization Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={notificationScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default AdvancedNotificationManagement;

