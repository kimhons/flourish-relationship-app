import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Grid,
  Switch,
  FormControlLabel,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Avatar,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  Divider,
  IconButton,
  Tooltip,
  TextField,
  TimePicker,
  LocalizationProvider,
  Badge,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondary,
  ToggleButton,
  ToggleButtonGroup,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Message as MessageIcon,
  Schedule as ScheduleIcon,
  Psychology as PsychologyIcon,
  ExpandMore as ExpandMoreIcon,
  Settings as SettingsIcon,
  VolumeUp as VolumeUpIcon,
  Vibration as VibrationIcon,
  Email as EmailIcon,
  Sms as SmsIcon,
  PhoneAndroid as PhoneIcon,
  Desktop as DesktopIcon,
  Watch as WatchIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Security as SecurityIcon,
  Language as LanguageIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  AutoAwesome as AutoAwesomeIcon,
  PersonalVideo as PersonalVideoIcon,
  TouchApp as TouchAppIcon,
  Visibility as VisibilityIcon,
  Timer as TimerIcon,
  Battery as BatteryIcon,
  Wifi as WifiIcon,
  Priority as PriorityIcon,
  FilterList as FilterListIcon,
  SmartToy as SmartToyIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  VideoCall as VideoCallIcon,
  Call as CallIcon,
  Event as EventIcon,
  Celebration as CelebrationIcon,
  Warning as WarningIcon,
  Info as InfoIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Pause as PauseIcon,
  PlayArrow as PlayArrowIcon,
  Tune as TuneIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const AdvancedNotificationManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [notificationScore, setNotificationScore] = useState(0);
  const [showOptimizationDialog, setShowOptimizationDialog] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Notification Settings State
  const [notificationSettings, setNotificationSettings] = useState({
    // General Settings
    masterEnabled: true,
    quietHoursEnabled: true,
    quietHoursStart: '22:00',
    quietHoursEnd: '08:00',
    weekendMode: false,
    vacationMode: false,
    
    // Channel Preferences
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    inAppNotifications: true,
    desktopNotifications: true,
    wearableNotifications: false,
    
    // Content Categories
    matches: { enabled: true, priority: 'high', sound: true, vibration: true },
    messages: { enabled: true, priority: 'high', sound: true, vibration: true },
    likes: { enabled: true, priority: 'medium', sound: false, vibration: true },
    profileViews: { enabled: true, priority: 'low', sound: false, vibration: false },
    coachingReminders: { enabled: true, priority: 'medium', sound: true, vibration: false },
    safetyAlerts: { enabled: true, priority: 'critical', sound: true, vibration: true },
    events: { enabled: true, priority: 'medium', sound: false, vibration: false },
    updates: { enabled: false, priority: 'low', sound: false, vibration: false },
    
    // AI Optimization
    smartTiming: true,
    behaviorLearning: true,
    contextAware: true,
    batchSimilar: true,
    predictiveFiltering: true,
    emotionalTiming: true,
    
    // Advanced Features
    locationBased: false,
    calendarIntegration: true,
    activityBasedTiming: true,
    socialContextAware: true,
    urgencyDetection: true,
    spamFiltering: true,
    duplicateDetection: true,
    
    // Communication Preferences
    responseTimeExpectation: 'flexible',
    communicationStyle: 'balanced',
    availabilitySharing: 'smart',
    autoResponses: false,
    readReceipts: true,
    typingIndicators: true,
    onlineStatus: 'smart'
  });

  const [optimizationResults, setOptimizationResults] = useState({
    relevance: 94,
    timing: 91,
    frequency: 88,
    engagement: 92
  });

  const notificationCategories = [
    {
      id: 'general',
      title: 'General Settings',
      icon: <SettingsIcon />,
      description: 'Master controls and quiet hours management',
      settings: [
        { key: 'masterEnabled', label: 'Master Notifications', type: 'switch', description: 'Enable/disable all notifications' },
        { key: 'quietHoursEnabled', label: 'Quiet Hours', type: 'switch', description: 'Automatically silence notifications during specified hours' },
        { key: 'weekendMode', label: 'Weekend Mode', type: 'switch', description: 'Reduced notifications on weekends' },
        { key: 'vacationMode', label: 'Vacation Mode', type: 'switch', description: 'Minimal notifications during vacation' }
      ]
    },
    {
      id: 'channels',
      title: 'Notification Channels',
      icon: <NotificationsIcon />,
      description: 'Configure delivery channels and devices',
      settings: [
        { key: 'pushNotifications', label: 'Push Notifications', type: 'switch', description: 'Mobile push notifications' },
        { key: 'emailNotifications', label: 'Email Notifications', type: 'switch', description: 'Email delivery for important updates' },
        { key: 'smsNotifications', label: 'SMS Notifications', type: 'switch', description: 'Text message notifications for critical alerts' },
        { key: 'inAppNotifications', label: 'In-App Notifications', type: 'switch', description: 'Notifications within the app' },
        { key: 'desktopNotifications', label: 'Desktop Notifications', type: 'switch', description: 'Browser and desktop notifications' },
        { key: 'wearableNotifications', label: 'Wearable Notifications', type: 'switch', description: 'Smartwatch and wearable device notifications' }
      ]
    },
    {
      id: 'content',
      title: 'Content Categories',
      icon: <FilterListIcon />,
      description: 'Customize notifications by content type',
      categories: [
        { key: 'matches', label: 'New Matches', icon: <FavoriteIcon />, description: 'When you receive a new match' },
        { key: 'messages', label: 'Messages', icon: <MessageIcon />, description: 'New messages from matches' },
        { key: 'likes', label: 'Likes & Interest', icon: <StarIcon />, description: 'When someone likes your profile' },
        { key: 'profileViews', label: 'Profile Views', icon: <VisibilityIcon />, description: 'When someone views your profile' },
        { key: 'coachingReminders', label: 'Coaching Reminders', icon: <PsychologyIcon />, description: 'AI coach session reminders' },
        { key: 'safetyAlerts', label: 'Safety Alerts', icon: <SecurityIcon />, description: 'Important safety notifications' },
        { key: 'events', label: 'Events & Activities', icon: <EventIcon />, description: 'Community events and activities' },
        { key: 'updates', label: 'App Updates', icon: <InfoIcon />, description: 'Feature updates and announcements' }
      ]
    },
    {
      id: 'ai',
      title: 'AI Optimization',
      icon: <SmartToyIcon />,
      description: 'AI-powered notification intelligence',
      settings: [
        { key: 'smartTiming', label: 'Smart Timing', type: 'switch', description: 'AI optimizes notification timing based on your activity' },
        { key: 'behaviorLearning', label: 'Behavior Learning', type: 'switch', description: 'Learn from your interaction patterns' },
        { key: 'contextAware', label: 'Context Awareness', type: 'switch', description: 'Consider your current context and activity' },
        { key: 'batchSimilar', label: 'Batch Similar', type: 'switch', description: 'Group similar notifications together' },
        { key: 'predictiveFiltering', label: 'Predictive Filtering', type: 'switch', description: 'Filter notifications based on predicted relevance' },
        { key: 'emotionalTiming', label: 'Emotional Timing', type: 'switch', description: 'Consider emotional context for timing' }
      ]
    }
  ];

  const priorityLevels = [
    { value: 'critical', label: 'Critical', color: 'error', description: 'Immediate attention required' },
    { value: 'high', label: 'High', color: 'warning', description: 'Important but not urgent' },
    { value: 'medium', label: 'Medium', color: 'info', description: 'Moderate importance' },
    { value: 'low', label: 'Low', color: 'success', description: 'Low priority, can wait' }
  ];

  const optimizationSteps = [
    'Analyzing Notification Patterns',
    'Learning User Preferences',
    'Optimizing Timing',
    'Configuring Filters',
    'Personalizing Experience'
  ];

  useEffect(() => {
    calculateNotificationScore();
  }, [notificationSettings]);

  const calculateNotificationScore = () => {
    const weights = {
      relevance: 0.3,
      timing: 0.25,
      frequency: 0.25,
      personalization: 0.2
    };

    let totalScore = 0;
    
    // Relevance score based on content filtering
    const contentEnabled = Object.values(notificationSettings).filter(setting => 
      typeof setting === 'object' && setting.enabled
    ).length;
    const relevanceScore = Math.min((contentEnabled / 8) * 100, 100);
    
    // Timing score based on smart features
    const timingFeatures = ['smartTiming', 'contextAware', 'emotionalTiming', 'quietHoursEnabled'].filter(key => 
      notificationSettings[key]
    ).length;
    const timingScore = (timingFeatures / 4) * 100;
    
    // Frequency score based on optimization features
    const frequencyFeatures = ['batchSimilar', 'predictiveFiltering', 'spamFiltering', 'duplicateDetection'].filter(key => 
      notificationSettings[key]
    ).length;
    const frequencyScore = (frequencyFeatures / 4) * 100;
    
    // Personalization score based on AI features
    const aiFeatures = ['behaviorLearning', 'contextAware', 'predictiveFiltering', 'emotionalTiming'].filter(key => 
      notificationSettings[key]
    ).length;
    const personalizationScore = (aiFeatures / 4) * 100;

    totalScore = (relevanceScore * weights.relevance) + 
                  (timingScore * weights.timing) + 
                  (frequencyScore * weights.frequency) + 
                  (personalizationScore * weights.personalization);

    setNotificationScore(Math.round(totalScore));
  };

  const handleSettingChange = (key, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCategoryChange = (category, field, value) => {
    setNotificationSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const runOptimization = () => {
    setShowOptimizationDialog(true);
    setCurrentStep(0);
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= optimizationSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const renderCategorySettings = (category) => (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Box display="flex" alignItems="center">
            {category.icon}
            <Box ml={2}>
              <Typography variant="h6">{category.label}</Typography>
              <Typography variant="body2" color="text.secondary">
                {category.description}
              </Typography>
            </Box>
          </Box>
          <Switch
            checked={notificationSettings[category.key]?.enabled || false}
            onChange={(e) => handleCategoryChange(category.key, 'enabled', e.target.checked)}
            color="primary"
          />
        </Box>
        
        {notificationSettings[category.key]?.enabled && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Priority</InputLabel>
                <Select
                  value={notificationSettings[category.key]?.priority || 'medium'}
                  onChange={(e) => handleCategoryChange(category.key, 'priority', e.target.value)}
                  label="Priority"
                >
                  {priorityLevels.map(level => (
                    <MenuItem key={level.value} value={level.value}>
                      <Chip 
                        label={level.label} 
                        color={level.color} 
                        size="small" 
                        sx={{ mr: 1 }}
                      />
                      {level.description}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notificationSettings[category.key]?.sound || false}
                    onChange={(e) => handleCategoryChange(category.key, 'sound', e.target.checked)}
                    size="small"
                  />
                }
                label="Sound"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notificationSettings[category.key]?.vibration || false}
                    onChange={(e) => handleCategoryChange(category.key, 'vibration', e.target.checked)}
                    size="small"
                  />
                }
                label="Vibration"
              />
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );

  const TabPanel = ({ children, value, index }) => (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" component="h1" gutterBottom color="primary" fontWeight="bold">
          Advanced Notification Management
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={3}>
          Intelligent notification system with AI-powered optimization and personalization
        </Typography>
        
        {/* Notification Score */}
        <Card sx={{ maxWidth: 400, mx: 'auto', mb: 3 }}>
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
              <NotificationsIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
              <Box>
                <Typography variant="h4" color="primary" fontWeight="bold">
                  {notificationScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Optimization Score
                </Typography>
              </Box>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={notificationScore} 
              sx={{ height: 8, borderRadius: 4 }}
            />
            <Button
              variant="contained"
              onClick={runOptimization}
              startIcon={<SmartToyIcon />}
              fullWidth
              sx={{ mt: 2 }}
            >
              AI Optimize Notifications
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content */}
      <Card>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab icon={<SettingsIcon />} label="General" />
          <Tab icon={<NotificationsIcon />} label="Channels" />
          <Tab icon={<FilterListIcon />} label="Content" />
          <Tab icon={<SmartToyIcon />} label="AI Optimization" />
        </Tabs>

        {/* General Settings Tab */}
        <TabPanel value={activeTab} index={0}>
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              General Notification Settings
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Master controls and global notification preferences
            </Typography>

            <Grid container spacing={3}>
              {notificationCategories[0].settings.map((setting) => (
                <Grid item xs={12} md={6} key={setting.key}>
                  <Card variant="outlined">
                    <CardContent>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={notificationSettings[setting.key]}
                            onChange={(e) => handleSettingChange(setting.key, e.target.checked)}
                            color="primary"
                          />
                        }
                        label={setting.label}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {setting.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Quiet Hours Configuration */}
            {notificationSettings.quietHoursEnabled && (
              <Card sx={{ mt: 3 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Quiet Hours Configuration
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Start Time"
                        type="time"
                        value={notificationSettings.quietHoursStart}
                        onChange={(e) => handleSettingChange('quietHoursStart', e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="End Time"
                        type="time"
                        value={notificationSettings.quietHoursEnd}
                        onChange={(e) => handleSettingChange('quietHoursEnd', e.target.value)}
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            )}
          </Box>
        </TabPanel>

        {/* Channels Tab */}
        <TabPanel value={activeTab} index={1}>
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Notification Channels
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Configure delivery methods and device preferences
            </Typography>

            <Grid container spacing={3}>
              {notificationCategories[1].settings.map((setting) => (
                <Grid item xs={12} md={6} key={setting.key}>
                  <Card variant="outlined">
                    <CardContent>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={notificationSettings[setting.key]}
                            onChange={(e) => handleSettingChange(setting.key, e.target.checked)}
                            color="primary"
                          />
                        }
                        label={setting.label}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {setting.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>

        {/* Content Categories Tab */}
        <TabPanel value={activeTab} index={2}>
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Content Categories
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Customize notifications by content type and priority
            </Typography>

            {notificationCategories[2].categories.map((category) => 
              renderCategorySettings(category)
            )}
          </Box>
        </TabPanel>

        {/* AI Optimization Tab */}
        <TabPanel value={activeTab} index={3}>
          <Box>
            <Typography variant="h5" gutterBottom fontWeight="bold">
              AI-Powered Optimization
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              Intelligent notification management with machine learning
            </Typography>

            <Grid container spacing={3}>
              {notificationCategories[3].settings.map((setting) => (
                <Grid item xs={12} md={6} key={setting.key}>
                  <Card variant="outlined">
                    <CardContent>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={notificationSettings[setting.key]}
                            onChange={(e) => handleSettingChange(setting.key, e.target.checked)}
                            color="primary"
                          />
                        }
                        label={setting.label}
                      />
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {setting.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* AI Insights */}
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  AI Optimization Insights
                </Typography>
                <Grid container spacing={3}>
                  {Object.entries(optimizationResults).map(([key, value]) => (
                    <Grid item xs={6} md={3} key={key}>
                      <Box textAlign="center">
                        <Typography variant="h4" color="primary" fontWeight="bold">
                          {value}%
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textTransform="capitalize">
                          {key}
                        </Typography>
                        <LinearProgress 
                          variant="determinate" 
                          value={value} 
                          sx={{ mt: 1, height: 6, borderRadius: 3 }}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </TabPanel>
      </Card>

      {/* Optimization Dialog */}
      <Dialog open={showOptimizationDialog} maxWidth="sm" fullWidth>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <SmartToyIcon sx={{ mr: 2, color: 'primary.main' }} />
            AI Notification Optimization
          </Box>
        </DialogTitle>
        <DialogContent>
          <Stepper activeStep={currentStep} orientation="vertical">
            {optimizationSteps.map((step, index) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {currentStep >= optimizationSteps.length - 1 && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Notification optimization complete! Your settings have been optimized for maximum relevance and minimal disruption.
            </Alert>
          )}
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={() => setShowOptimizationDialog(false)}
            disabled={currentStep < optimizationSteps.length - 1}
          >
            {currentStep >= optimizationSteps.length - 1 ? 'Done' : 'Optimizing...'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Navigation */}
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button variant="outlined" size="large">
          Previous
        </Button>
        <Button variant="contained" size="large">
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default AdvancedNotificationManagement;

