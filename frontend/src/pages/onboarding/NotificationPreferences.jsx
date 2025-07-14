import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Grid,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Avatar,
  Badge,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Notifications,
  NotificationsActive,
  NotificationsOff,
  Schedule,
  VolumeUp,
  VolumeOff,
  Vibration,
  Email,
  Sms,
  Message,
  Favorite,
  Star,
  Psychology,
  TrendingUp,
  Group,
  Person,
  CheckCircle,
  Warning,
  Info,
  Settings,
  Tune,
  AccessTime,
  Today,
  Event,
  AlarmOn,
  AlarmOff,
  PhoneAndroid,
  Computer,
  Tablet,
  Watch,
  SmartDisplay,
  SmartToy,
  AutoAwesome,
  FilterList,
  DoNotDisturb,
  DoNotDisturbOff,
  Priority,
  FlashOn,
  FlashOff,
  Brightness2,
  Brightness7,
  Weekend,
  Work,
  Home,
  LocationOn,
  DataUsage,
  BatteryAlert,
  NetworkCheck,
  SignalWifi4Bar,
  SignalWifiOff,
  Clear,
  Edit,
  Save,
  Cancel,
  Add,
  Remove
} from '@mui/icons-material';

const NotificationPreferences = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [masterEnabled, setMasterEnabled] = useState(true);
  const [quietHours, setQuietHours] = useState({
    enabled: true,
    start: 22,
    end: 8
  });
  
  const [notifications, setNotifications] = useState({
    matches: { enabled: true, priority: 'high', sound: true, vibration: true },
    messages: { enabled: true, priority: 'high', sound: true, vibration: true },
    likes: { enabled: true, priority: 'medium', sound: false, vibration: true },
    superLikes: { enabled: true, priority: 'high', sound: true, vibration: true },
    coaching: { enabled: true, priority: 'medium', sound: false, vibration: false },
    insights: { enabled: true, priority: 'low', sound: false, vibration: false },
    reminders: { enabled: true, priority: 'medium', sound: false, vibration: false },
    events: { enabled: true, priority: 'medium', sound: true, vibration: true },
    safety: { enabled: true, priority: 'urgent', sound: true, vibration: true },
    updates: { enabled: false, priority: 'low', sound: false, vibration: false },
    marketing: { enabled: false, priority: 'low', sound: false, vibration: false },
    social: { enabled: true, priority: 'medium', sound: false, vibration: true }
  });

  const [channels, setChannels] = useState({
    push: true,
    email: true,
    sms: false,
    inApp: true
  });

  const [smartSettings, setSmartSettings] = useState({
    intelligentTiming: true,
    contextualDelivery: true,
    batchSimilar: true,
    adaptiveFrequency: true,
    locationBased: false,
    activityBased: true,
    batteryOptimized: true,
    networkOptimized: true
  });

  const [testDialog, setTestDialog] = useState(false);

  const notificationTypes = [
    {
      id: 'matches',
      name: 'New Matches',
      description: 'When someone matches with you',
      icon: <Favorite />,
      category: 'Dating',
      frequency: 'As they happen'
    },
    {
      id: 'messages',
      name: 'New Messages',
      description: 'When you receive a message',
      icon: <Message />,
      category: 'Dating',
      frequency: 'As they happen'
    },
    {
      id: 'likes',
      name: 'Profile Likes',
      description: 'When someone likes your profile',
      icon: <Star />,
      category: 'Dating',
      frequency: 'Batched hourly'
    },
    {
      id: 'superLikes',
      name: 'Super Likes',
      description: 'When someone super likes you',
      icon: <AutoAwesome />,
      category: 'Dating',
      frequency: 'As they happen'
    },
    {
      id: 'coaching',
      name: 'AI Coaching',
      description: 'Coaching tips and suggestions',
      icon: <Psychology />,
      category: 'Growth',
      frequency: 'Daily'
    },
    {
      id: 'insights',
      name: 'Relationship Insights',
      description: 'Weekly insights and analytics',
      icon: <TrendingUp />,
      category: 'Growth',
      frequency: 'Weekly'
    },
    {
      id: 'reminders',
      name: 'Activity Reminders',
      description: 'Reminders to check the app',
      icon: <Schedule />,
      category: 'Engagement',
      frequency: 'Smart timing'
    },
    {
      id: 'events',
      name: 'Events & Dates',
      description: 'Upcoming dates and events',
      icon: <Event />,
      category: 'Dating',
      frequency: 'As scheduled'
    },
    {
      id: 'safety',
      name: 'Safety Alerts',
      description: 'Important safety notifications',
      icon: <Warning />,
      category: 'Safety',
      frequency: 'Urgent only'
    },
    {
      id: 'updates',
      name: 'App Updates',
      description: 'New features and improvements',
      icon: <Info />,
      category: 'System',
      frequency: 'Monthly'
    },
    {
      id: 'marketing',
      name: 'Promotional',
      description: 'Special offers and promotions',
      icon: <FlashOn />,
      category: 'Marketing',
      frequency: 'Weekly'
    },
    {
      id: 'social',
      name: 'Social Features',
      description: 'Friend activity and social updates',
      icon: <Group />,
      category: 'Social',
      frequency: 'Daily'
    }
  ];

  const priorityColors = {
    urgent: 'error',
    high: 'warning',
    medium: 'info',
    low: 'success'
  };

  const updateNotification = (id, field, value) => {
    setNotifications(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value
      }
    }));
  };

  const updateChannel = (channel, enabled) => {
    setChannels(prev => ({
      ...prev,
      [channel]: enabled
    }));
  };

  const updateSmartSetting = (setting, enabled) => {
    setSmartSettings(prev => ({
      ...prev,
      [setting]: enabled
    }));
  };

  const handleTestNotification = () => {
    setTestDialog(true);
  };

  const getEnabledNotificationsCount = () => {
    return Object.values(notifications).filter(n => n.enabled).length;
  };

  const renderNotificationSettings = () => (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Master Notification Control</Typography>
            <Switch
              checked={masterEnabled}
              onChange={(e) => setMasterEnabled(e.target.checked)}
              size="large"
            />
          </Box>
          
          <Alert severity={masterEnabled ? 'success' : 'warning'} sx={{ mb: 2 }}>
            {masterEnabled 
              ? `${getEnabledNotificationsCount()} notification types enabled`
              : 'All notifications are disabled'
            }
          </Alert>
          
          <Typography variant="body2" color="text.secondary">
            Toggle the master switch to quickly enable or disable all notifications.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quiet Hours
          </Typography>
          
          <FormControlLabel
            control={
              <Switch
                checked={quietHours.enabled}
                onChange={(e) => setQuietHours(prev => ({ ...prev, enabled: e.target.checked }))}
              />
            }
            label="Enable quiet hours"
            sx={{ mb: 2 }}
          />
          
          {quietHours.enabled && (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ mb: 1 }}>Start Time</Typography>
                <Slider
                  value={quietHours.start}
                  onChange={(e, value) => setQuietHours(prev => ({ ...prev, start: value }))}
                  min={0}
                  max={23}
                  step={1}
                  marks
                  valueLabelDisplay="on"
                  valueLabelFormat={(value) => `${value}:00`}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" sx={{ mb: 1 }}>End Time</Typography>
                <Slider
                  value={quietHours.end}
                  onChange={(e, value) => setQuietHours(prev => ({ ...prev, end: value }))}
                  min={0}
                  max={23}
                  step={1}
                  marks
                  valueLabelDisplay="on"
                  valueLabelFormat={(value) => `${value}:00`}
                />
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Card>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Notification Types
      </Typography>
      
      {notificationTypes.map((type) => (
        <Card key={type.id} sx={{ mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ color: 'primary.main', mr: 2 }}>
                {type.icon}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6">{type.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {type.description}
                </Typography>
              </Box>
              <Chip 
                label={type.category} 
                size="small" 
                color="primary" 
                variant="outlined"
                sx={{ mr: 2 }}
              />
              <Switch
                checked={notifications[type.id]?.enabled && masterEnabled}
                onChange={(e) => updateNotification(type.id, 'enabled', e.target.checked)}
                disabled={!masterEnabled}
              />
            </Box>
            
            {notifications[type.id]?.enabled && masterEnabled && (
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Priority</InputLabel>
                    <Select
                      value={notifications[type.id]?.priority || 'medium'}
                      onChange={(e) => updateNotification(type.id, 'priority', e.target.value)}
                    >
                      <MenuItem value="urgent">Urgent</MenuItem>
                      <MenuItem value="high">High</MenuItem>
                      <MenuItem value="medium">Medium</MenuItem>
                      <MenuItem value="low">Low</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications[type.id]?.sound}
                        onChange={(e) => updateNotification(type.id, 'sound', e.target.checked)}
                        size="small"
                      />
                    }
                    label="Sound"
                  />
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={notifications[type.id]?.vibration}
                        onChange={(e) => updateNotification(type.id, 'vibration', e.target.checked)}
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
      ))}
    </Box>
  );

  const renderDeliveryChannels = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Delivery Channels
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneAndroid sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Push Notifications</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Instant notifications on your device
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={channels.push}
                    onChange={(e) => updateChannel('push', e.target.checked)}
                  />
                }
                label="Enable push notifications"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">Email</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Notifications sent to your email
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={channels.email}
                    onChange={(e) => updateChannel('email', e.target.checked)}
                  />
                }
                label="Enable email notifications"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Sms sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">SMS</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Text messages for urgent notifications
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={channels.sms}
                    onChange={(e) => updateChannel('sms', e.target.checked)}
                  />
                }
                label="Enable SMS notifications"
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <NotificationsActive sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h6">In-App</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Notifications shown within the app
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={channels.inApp}
                    onChange={(e) => updateChannel('inApp', e.target.checked)}
                  />
                }
                label="Enable in-app notifications"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderSmartSettings = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Smart Notification Settings
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Smart settings use AI to optimize when and how you receive notifications for the best experience.
      </Alert>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.intelligentTiming}
                onChange={(e) => updateSmartSetting('intelligentTiming', e.target.checked)}
              />
            }
            label="Intelligent Timing"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Send notifications when you're most likely to engage
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.contextualDelivery}
                onChange={(e) => updateSmartSetting('contextualDelivery', e.target.checked)}
              />
            }
            label="Contextual Delivery"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Adjust notifications based on your current context
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.batchSimilar}
                onChange={(e) => updateSmartSetting('batchSimilar', e.target.checked)}
              />
            }
            label="Batch Similar Notifications"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Group similar notifications to reduce interruptions
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.adaptiveFrequency}
                onChange={(e) => updateSmartSetting('adaptiveFrequency', e.target.checked)}
              />
            }
            label="Adaptive Frequency"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Adjust frequency based on your engagement patterns
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.locationBased}
                onChange={(e) => updateSmartSetting('locationBased', e.target.checked)}
              />
            }
            label="Location-Based Timing"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Consider your location when sending notifications
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.activityBased}
                onChange={(e) => updateSmartSetting('activityBased', e.target.checked)}
              />
            }
            label="Activity-Based Optimization"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Optimize based on your activity patterns
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.batteryOptimized}
                onChange={(e) => updateSmartSetting('batteryOptimized', e.target.checked)}
              />
            }
            label="Battery Optimization"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Reduce notifications when battery is low
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControlLabel
            control={
              <Switch
                checked={smartSettings.networkOptimized}
                onChange={(e) => updateSmartSetting('networkOptimized', e.target.checked)}
              />
            }
            label="Network Optimization"
          />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
            Optimize delivery based on network conditions
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPreviewAndTest = () => (
    <Box>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Preview & Test
      </Typography>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Your Notification Summary
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Enabled Notifications
                </Typography>
                <Typography variant="h4" color="primary.main">
                  {getEnabledNotificationsCount()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  out of {notificationTypes.length} types
                </Typography>
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>
                  Active Channels
                </Typography>
                <Typography variant="h4" color="primary.main">
                  {Object.values(channels).filter(Boolean).length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  delivery channels
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Test Your Settings
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Send a test notification to see how your settings work.
          </Typography>
          <Button 
            variant="contained" 
            onClick={handleTestNotification}
            startIcon={<NotificationsActive />}
          >
            Send Test Notification
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Notification Preferences
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Stay informed without being overwhelmed
        </Typography>
        <LinearProgress variant="determinate" value={77.5} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 156 of 280
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Notifications" />
        <Tab label="Delivery" />
        <Tab label="Smart Settings" />
        <Tab label="Preview" />
      </Tabs>

      {selectedTab === 0 && renderNotificationSettings()}
      {selectedTab === 1 && renderDeliveryChannels()}
      {selectedTab === 2 && renderSmartSettings()}
      {selectedTab === 3 && renderPreviewAndTest()}

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

      {/* Test Notification Dialog */}
      <Dialog open={testDialog} onClose={() => setTestDialog(false)}>
        <DialogTitle>Test Notification Sent!</DialogTitle>
        <DialogContent>
          <Typography>
            A test notification has been sent using your current settings. 
            Check your device to see how it appears.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTestDialog(false)} variant="contained">
            Got it
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default NotificationPreferences;