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
  Badge
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Notifications as NotificationsIcon,
  Message as MessageIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Security as SecurityIcon,
  SmartToy as AIIcon,
  VolumeUp as VolumeIcon,
  Vibration as VibrationIcon,
  Lightbulb as LEDIcon,
  Translate as TranslateIcon,
  Psychology as SentimentIcon,
  AutoAwesome as SmartIcon,
  Shield as PrivacyIcon,
  Block as BlockIcon,
  Report as ReportIcon,
  Lock as EncryptionIcon,
  Visibility as ReadReceiptIcon,
  Edit as TypingIcon,
  Emergency as EmergencyIcon,
  TrendingUp as MetricsIcon,
  Settings as SettingsIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const AdvancedNotificationManagement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [notificationPreferences, setNotificationPreferences] = useState({
    matches: { enabled: true, sound: true, vibration: true, popup: true, led: false },
    messages: { enabled: true, sound: true, vibration: true, popup: true, led: true },
    likes: { enabled: true, sound: false, vibration: true, popup: false, led: false },
    superLikes: { enabled: true, sound: true, vibration: true, popup: true, led: true },
    profileViews: { enabled: false, sound: false, vibration: false, popup: false, led: false },
    coachingReminders: { enabled: true, sound: false, vibration: true, popup: true, led: false },
    safetyAlerts: { enabled: true, sound: true, vibration: true, popup: true, led: true },
    eventInvites: { enabled: true, sound: false, vibration: true, popup: true, led: false },
    communityUpdates: { enabled: false, sound: false, vibration: false, popup: false, led: false },
    premiumOffers: { enabled: false, sound: false, vibration: false, popup: false, led: false },
    weeklyInsights: { enabled: true, sound: false, vibration: false, popup: false, led: false },
    milestoneAchievements: { enabled: true, sound: true, vibration: true, popup: true, led: true },
    dateReminders: { enabled: true, sound: true, vibration: true, popup: true, led: false },
    profileBoosts: { enabled: true, sound: false, vibration: true, popup: true, led: false },
    subscriptionUpdates: { enabled: true, sound: false, vibration: false, popup: false, led: false },
    securityAlerts: { enabled: true, sound: true, vibration: true, popup: true, led: true },
    backupReminders: { enabled: false, sound: false, vibration: false, popup: false, led: false },
    feedbackRequests: { enabled: false, sound: false, vibration: false, popup: false, led: false },
    systemUpdates: { enabled: true, sound: false, vibration: false, popup: false, led: false },
    maintenanceNotices: { enabled: true, sound: false, vibration: false, popup: true, led: false }
  });

  const [communicationChannels, setCommunicationChannels] = useState({
    inApp: { enabled: true, priority: 'high' },
    email: { enabled: true, priority: 'medium', frequency: 'daily' },
    sms: { enabled: false, priority: 'high', emergencyOnly: true },
    pushNotifications: { enabled: true, priority: 'high' },
    whatsapp: { enabled: false, priority: 'medium' },
    telegram: { enabled: false, priority: 'low' },
    slack: { enabled: false, priority: 'low' },
    discord: { enabled: false, priority: 'low' }
  });

  const [aiCommunicationSettings, setAiCommunicationSettings] = useState({
    smartReplies: { enabled: true, confidence: 80 },
    sentimentAnalysis: { enabled: true, sensitivity: 70 },
    conversationSummaries: { enabled: true, frequency: 'weekly' },
    proactiveSuggestions: { enabled: true, timing: 'contextual' },
    languageTranslation: { enabled: false, autoDetect: true },
    toneAdjustment: { enabled: true, style: 'friendly' },
    responseOptimization: { enabled: true, learningMode: true },
    communicationInsights: { enabled: true, privacy: 'anonymous' }
  });

  const [privacySecuritySettings, setPrivacySecuritySettings] = useState({
    readReceipts: { enabled: true, mutualOnly: true },
    typingIndicators: { enabled: true, mutualOnly: false },
    messageEncryption: { enabled: true, level: 'end-to-end' },
    blockingReporting: { enabled: true, autoBlock: false },
    emergencyContacts: { enabled: false, contacts: [] },
    dataRetention: { period: '1year', autoDelete: true },
    communicationLogs: { enabled: false, duration: '30days' },
    thirdPartySharing: { enabled: false, anonymized: true }
  });

  const [communicationScore, setCommunicationScore] = useState(0);
  const [notificationVolume, setNotificationVolume] = useState(0);
  const [engagementMetrics, setEngagementMetrics] = useState({
    dailyNotifications: 0,
    responseRate: 0,
    averageResponseTime: 0,
    communicationHealth: 0
  });

  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);

  // Calculate communication score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // Notification optimization (30 points)
      const enabledNotifications = Object.values(notificationPreferences).filter(pref => pref.enabled).length;
      const optimalNotifications = 12; // Sweet spot for engagement without overwhelm
      const notificationRatio = Math.min(enabledNotifications / optimalNotifications, 1);
      score += notificationRatio * 30;
      
      // Channel diversity (25 points)
      const enabledChannels = Object.values(communicationChannels).filter(channel => channel.enabled).length;
      const channelScore = Math.min(enabledChannels / 4, 1) * 25;
      score += channelScore;
      
      // AI assistance utilization (25 points)
      const enabledAIFeatures = Object.values(aiCommunicationSettings).filter(setting => setting.enabled).length;
      const aiScore = Math.min(enabledAIFeatures / 6, 1) * 25;
      score += aiScore;
      
      // Privacy & security (20 points)
      const securityFeatures = Object.values(privacySecuritySettings).filter(setting => setting.enabled).length;
      const securityScore = Math.min(securityFeatures / 5, 1) * 20;
      score += securityScore;
      
      setCommunicationScore(Math.round(score));
      
      // Calculate notification volume
      const volume = enabledNotifications * 2.5; // Average notifications per day
      setNotificationVolume(Math.round(volume));
    };

    calculateScore();
  }, [notificationPreferences, communicationChannels, aiCommunicationSettings, privacySecuritySettings]);

  const handleNotificationChange = (type, setting, value) => {
    setNotificationPreferences(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [setting]: value
      }
    }));
  };

  const handleChannelChange = (channel, setting, value) => {
    setCommunicationChannels(prev => ({
      ...prev,
      [channel]: {
        ...prev[channel],
        [setting]: value
      }
    }));
  };

  const handleAISettingChange = (setting, property, value) => {
    setAiCommunicationSettings(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const handlePrivacyChange = (setting, property, value) => {
    setPrivacySecuritySettings(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Excellent', color: 'success', description: 'Optimal communication setup' };
    if (score >= 75) return { level: 'Very Good', color: 'info', description: 'Well-configured communication' };
    if (score >= 60) return { level: 'Good', color: 'warning', description: 'Decent communication setup' };
    return { level: 'Needs Improvement', color: 'error', description: 'Consider optimizing settings' };
  };

  const scoreInfo = getScoreLevel(communicationScore);

  const renderNotificationPreferences = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <NotificationsIcon color="primary" />
        Notification Preferences
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Customize your notification settings to stay connected without being overwhelmed. 
        We recommend enabling 8-12 notification types for optimal engagement.
      </Alert>

      <Grid container spacing={2}>
        {Object.entries(notificationPreferences).map(([type, settings]) => (
          <Grid item xs={12} key={type}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                    {type.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Switch
                    checked={settings.enabled}
                    onChange={(e) => handleNotificationChange(type, 'enabled', e.target.checked)}
                    color="primary"
                  />
                </Box>
                
                {settings.enabled && (
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={settings.sound}
                            onChange={(e) => handleNotificationChange(type, 'sound', e.target.checked)}
                            size="small"
                          />
                        }
                        label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <VolumeIcon fontSize="small" />
                          Sound
                        </Box>}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={settings.vibration}
                            onChange={(e) => handleNotificationChange(type, 'vibration', e.target.checked)}
                            size="small"
                          />
                        }
                        label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <VibrationIcon fontSize="small" />
                          Vibration
                        </Box>}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={settings.popup}
                            onChange={(e) => handleNotificationChange(type, 'popup', e.target.checked)}
                            size="small"
                          />
                        }
                        label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <InfoIcon fontSize="small" />
                          Pop-up
                        </Box>}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={settings.led}
                            onChange={(e) => handleNotificationChange(type, 'led', e.target.checked)}
                            size="small"
                          />
                        }
                        label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <LEDIcon fontSize="small" />
                          LED
                        </Box>}
                      />
                    </Grid>
                  </Grid>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderCommunicationChannels = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MessageIcon color="primary" />
        Communication Channels
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Configure multiple communication channels to ensure you never miss important updates. 
        Set priorities to control which channels receive different types of notifications.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(communicationChannels).map(([channel, settings]) => (
          <Grid item xs={12} md={6} key={channel}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                    {channel.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Switch
                    checked={settings.enabled}
                    onChange={(e) => handleChannelChange(channel, 'enabled', e.target.checked)}
                    color="primary"
                  />
                </Box>
                
                {settings.enabled && (
                  <Box sx={{ mt: 2 }}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Priority Level</InputLabel>
                      <Select
                        value={settings.priority}
                        onChange={(e) => handleChannelChange(channel, 'priority', e.target.value)}
                        label="Priority Level"
                      >
                        <MenuItem value="high">High Priority</MenuItem>
                        <MenuItem value="medium">Medium Priority</MenuItem>
                        <MenuItem value="low">Low Priority</MenuItem>
                      </Select>
                    </FormControl>
                    
                    {channel === 'email' && (
                      <FormControl fullWidth>
                        <InputLabel>Email Frequency</InputLabel>
                        <Select
                          value={settings.frequency}
                          onChange={(e) => handleChannelChange(channel, 'frequency', e.target.value)}
                          label="Email Frequency"
                        >
                          <MenuItem value="immediate">Immediate</MenuItem>
                          <MenuItem value="hourly">Hourly Digest</MenuItem>
                          <MenuItem value="daily">Daily Digest</MenuItem>
                          <MenuItem value="weekly">Weekly Summary</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {channel === 'sms' && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={settings.emergencyOnly}
                            onChange={(e) => handleChannelChange(channel, 'emergencyOnly', e.target.checked)}
                          />
                        }
                        label="Emergency Only"
                      />
                    )}
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderAICommunicationAssistant = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AIIcon color="primary" />
        AI Communication Assistant
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Enhance your communication with AI-powered features that help you connect more effectively 
        while maintaining your authentic voice and style.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Smart Replies
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={aiCommunicationSettings.smartReplies.enabled}
                    onChange={(e) => handleAISettingChange('smartReplies', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Smart Reply Suggestions"
              />
              {aiCommunicationSettings.smartReplies.enabled && (
                <Box sx={{ mt: 2 }}>
                  <Typography gutterBottom>Confidence Threshold: {aiCommunicationSettings.smartReplies.confidence}%</Typography>
                  <Slider
                    value={aiCommunicationSettings.smartReplies.confidence}
                    onChange={(e, value) => handleAISettingChange('smartReplies', 'confidence', value)}
                    min={50}
                    max={95}
                    step={5}
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
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Sentiment Analysis
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={aiCommunicationSettings.sentimentAnalysis.enabled}
                    onChange={(e) => handleAISettingChange('sentimentAnalysis', 'enabled', e.target.checked)}
                  />
                }
                label="Analyze Message Sentiment"
              />
              {aiCommunicationSettings.sentimentAnalysis.enabled && (
                <Box sx={{ mt: 2 }}>
                  <Typography gutterBottom>Sensitivity Level: {aiCommunicationSettings.sentimentAnalysis.sensitivity}%</Typography>
                  <Slider
                    value={aiCommunicationSettings.sentimentAnalysis.sensitivity}
                    onChange={(e, value) => handleAISettingChange('sentimentAnalysis', 'sensitivity', value)}
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
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Conversation Summaries
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={aiCommunicationSettings.conversationSummaries.enabled}
                    onChange={(e) => handleAISettingChange('conversationSummaries', 'enabled', e.target.checked)}
                  />
                }
                label="Generate Conversation Summaries"
              />
              {aiCommunicationSettings.conversationSummaries.enabled && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Summary Frequency</InputLabel>
                  <Select
                    value={aiCommunicationSettings.conversationSummaries.frequency}
                    onChange={(e) => handleAISettingChange('conversationSummaries', 'frequency', e.target.value)}
                    label="Summary Frequency"
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Language Translation
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={aiCommunicationSettings.languageTranslation.enabled}
                    onChange={(e) => handleAISettingChange('languageTranslation', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Real-time Translation"
              />
              {aiCommunicationSettings.languageTranslation.enabled && (
                <FormControlLabel
                  control={
                    <Switch
                      checked={aiCommunicationSettings.languageTranslation.autoDetect}
                      onChange={(e) => handleAISettingChange('languageTranslation', 'autoDetect', e.target.checked)}
                    />
                  }
                  label="Auto-detect Languages"
                  sx={{ mt: 1 }}
                />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPrivacySecurity = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SecurityIcon color="primary" />
        Privacy & Security
      </Typography>
      
      <Alert severity="warning" sx={{ mb: 3 }}>
        Configure your privacy and security settings to protect your communications while maintaining 
        meaningful connections. All settings respect your privacy preferences.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Read Receipts
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={privacySecuritySettings.readReceipts.enabled}
                    onChange={(e) => handlePrivacyChange('readReceipts', 'enabled', e.target.checked)}
                  />
                }
                label="Show Read Receipts"
              />
              {privacySecuritySettings.readReceipts.enabled && (
                <FormControlLabel
                  control={
                    <Switch
                      checked={privacySecuritySettings.readReceipts.mutualOnly}
                      onChange={(e) => handlePrivacyChange('readReceipts', 'mutualOnly', e.target.checked)}
                    />
                  }
                  label="Only for Mutual Matches"
                  sx={{ mt: 1 }}
                />
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Message Encryption
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={privacySecuritySettings.messageEncryption.enabled}
                    onChange={(e) => handlePrivacyChange('messageEncryption', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Message Encryption"
              />
              {privacySecuritySettings.messageEncryption.enabled && (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel>Encryption Level</InputLabel>
                  <Select
                    value={privacySecuritySettings.messageEncryption.level}
                    onChange={(e) => handlePrivacyChange('messageEncryption', 'level', e.target.value)}
                    label="Encryption Level"
                  >
                    <MenuItem value="basic">Basic Encryption</MenuItem>
                    <MenuItem value="advanced">Advanced Encryption</MenuItem>
                    <MenuItem value="end-to-end">End-to-End Encryption</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Blocking & Reporting
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={privacySecuritySettings.blockingReporting.enabled}
                    onChange={(e) => handlePrivacyChange('blockingReporting', 'enabled', e.target.checked)}
                  />
                }
                label="Enable Advanced Blocking"
              />
              {privacySecuritySettings.blockingReporting.enabled && (
                <FormControlLabel
                  control={
                    <Switch
                      checked={privacySecuritySettings.blockingReporting.autoBlock}
                      onChange={(e) => handlePrivacyChange('blockingReporting', 'autoBlock', e.target.checked)}
                    />
                  }
                  label="Auto-block Suspicious Users"
                  sx={{ mt: 1 }}
                />
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Data Retention
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Retention Period</InputLabel>
                <Select
                  value={privacySecuritySettings.dataRetention.period}
                  onChange={(e) => handlePrivacyChange('dataRetention', 'period', e.target.value)}
                  label="Retention Period"
                >
                  <MenuItem value="30days">30 Days</MenuItem>
                  <MenuItem value="90days">90 Days</MenuItem>
                  <MenuItem value="6months">6 Months</MenuItem>
                  <MenuItem value="1year">1 Year</MenuItem>
                  <MenuItem value="indefinite">Indefinite</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Switch
                    checked={privacySecuritySettings.dataRetention.autoDelete}
                    onChange={(e) => handlePrivacyChange('dataRetention', 'autoDelete', e.target.checked)}
                  />
                }
                label="Auto-delete Old Messages"
              />
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
          Advanced Notification & Communication Management
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Configure comprehensive notification and communication settings to optimize your relationship journey 
          while maintaining perfect balance between connection and privacy.
        </Typography>

        {/* Communication Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {communicationScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Communication Score
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
                        {notificationVolume}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Daily Notifications
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(communicationChannels).filter(c => c.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Active Channels
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(aiCommunicationSettings).filter(s => s.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        AI Features
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(privacySecuritySettings).filter(s => s.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Security Features
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
            label="Notification Preferences" 
            icon={<NotificationsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Communication Channels" 
            icon={<MessageIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="AI Communication Assistant" 
            icon={<AIIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Privacy & Security" 
            icon={<SecurityIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderNotificationPreferences()}
          {activeTab === 1 && renderCommunicationChannels()}
          {activeTab === 2 && renderAICommunicationAssistant()}
          {activeTab === 3 && renderPrivacySecurity()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
          startIcon={<SettingsIcon />}
        >
          {showAdvancedSettings ? 'Hide' : 'Show'} Advanced Settings
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
            Save Communication Settings
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Communication Setup Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={communicationScore} 
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

