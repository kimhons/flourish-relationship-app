import React, { useState, useEffect, useCallback } from 'react';
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
  Zoom,
  Collapse,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Rating,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Tabs,
  Tab,
  RadioGroup,
  Radio,
  FormGroup,
  Checkbox,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Privacy,
  Lock,
  LockOpen,
  Security,
  Shield,
  VerifiedUser,
  Visibility,
  VisibilityOff,
  Settings,
  Tune,
  FilterList,
  PersonOff,
  Block,
  NotInterested,
  Delete,
  Clear,
  Edit,
  Save,
  Cancel,
  CheckCircle,
  Warning,
  Error,
  Info,
  Help,
  HelpOutline,
  InfoOutlined,
  CloudDownload,
  CloudUpload,
  DataUsage,
  Storage,
  Timeline,
  Analytics,
  TrendingUp,
  Fingerprint,
  VpnKey,
  AdminPanelSettings,
  Policy,
  Gavel,
  Psychology,
  PersonalVideo,
  CameraAlt,
  Mic,
  MicOff,
  LocationOn,
  LocationOff,
  Contacts,
  Phone,
  Email,
  Share,
  Public,
  People,
  Person,
  Group,
  ExpandMore
} from '@mui/icons-material';

const PrivacyDataControl = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [privacyLevel, setPrivacyLevel] = useState('balanced');
  const [dataSettings, setDataSettings] = useState({
    profileVisibility: 'public',
    photoVisibility: 'matches',
    locationSharing: 'approximate',
    onlineStatus: false,
    readReceipts: true,
    activityStatus: false,
    searchVisibility: true,
    ageVisibility: 'matches',
    lastActiveVisibility: 'none',
    distanceVisibility: 'approximate',
    mutualFriendsVisibility: true,
    socialMediaLinking: false,
    dataCollection: {
      analytics: true,
      personalization: true,
      marketing: false,
      research: false,
      thirdParty: false
    },
    communicationPreferences: {
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      marketingEmails: false,
      productUpdates: true,
      securityAlerts: true
    },
    dataRetention: {
      chatHistory: '1year',
      photoHistory: '2years',
      searchHistory: '6months',
      locationHistory: '3months',
      behaviorAnalytics: '1year'
    },
    thirdPartyIntegrations: {
      googleMaps: true,
      spotify: false,
      instagram: false,
      facebook: false,
      linkedin: false,
      twitter: false
    }
  });

  const [dataDownloadDialog, setDataDownloadDialog] = useState(false);
  const [dataDeleteDialog, setDataDeleteDialog] = useState(false);
  const [privacyTips, setPrivacyTips] = useState(true);

  const privacyLevels = {
    strict: {
      label: 'Strict Privacy',
      description: 'Maximum privacy protection with limited data sharing',
      color: '#d32f2f',
      icon: <Lock />
    },
    balanced: {
      label: 'Balanced',
      description: 'Good balance between privacy and functionality',
      color: '#f57c00',
      icon: <Shield />
    },
    open: {
      label: 'Open Sharing',
      description: 'More data sharing for enhanced features',
      color: '#388e3c',
      icon: <Public />
    }
  };

  const calculatePrivacyScore = () => {
    let score = 0;
    const settings = dataSettings;
    
    // Profile visibility scoring
    if (settings.profileVisibility === 'private') score += 30;
    else if (settings.profileVisibility === 'matches') score += 20;
    else score += 10;
    
    // Photo visibility scoring
    if (settings.photoVisibility === 'private') score += 25;
    else if (settings.photoVisibility === 'matches') score += 15;
    else score += 5;
    
    // Location sharing scoring
    if (settings.locationSharing === 'off') score += 20;
    else if (settings.locationSharing === 'approximate') score += 10;
    else score += 0;
    
    // Data collection scoring
    const dataCollection = Object.values(settings.dataCollection).filter(Boolean).length;
    score += (5 - dataCollection) * 5;
    
    // Third party integrations scoring
    const thirdPartyCount = Object.values(settings.thirdPartyIntegrations).filter(Boolean).length;
    score += (6 - thirdPartyCount) * 3;
    
    return Math.min(100, Math.max(0, score));
  };

  const updateDataSetting = (settingPath, value) => {
    const pathArray = settingPath.split('.');
    setDataSettings(prev => {
      const newSettings = { ...prev };
      let current = newSettings;
      
      for (let i = 0; i < pathArray.length - 1; i++) {
        current = current[pathArray[i]];
      }
      current[pathArray[pathArray.length - 1]] = value;
      
      return newSettings;
    });
  };

  const applyPrivacyLevel = (level) => {
    setPrivacyLevel(level);
    
    const presets = {
      strict: {
        profileVisibility: 'private',
        photoVisibility: 'private',
        locationSharing: 'off',
        onlineStatus: false,
        readReceipts: false,
        activityStatus: false,
        searchVisibility: false,
        ageVisibility: 'none',
        lastActiveVisibility: 'none',
        distanceVisibility: 'none',
        mutualFriendsVisibility: false,
        socialMediaLinking: false,
        dataCollection: {
          analytics: false,
          personalization: false,
          marketing: false,
          research: false,
          thirdParty: false
        },
        thirdPartyIntegrations: {
          googleMaps: false,
          spotify: false,
          instagram: false,
          facebook: false,
          linkedin: false,
          twitter: false
        }
      },
      balanced: {
        profileVisibility: 'matches',
        photoVisibility: 'matches',
        locationSharing: 'approximate',
        onlineStatus: false,
        readReceipts: true,
        activityStatus: false,
        searchVisibility: true,
        ageVisibility: 'matches',
        lastActiveVisibility: 'none',
        distanceVisibility: 'approximate',
        mutualFriendsVisibility: true,
        socialMediaLinking: false,
        dataCollection: {
          analytics: true,
          personalization: true,
          marketing: false,
          research: false,
          thirdParty: false
        },
        thirdPartyIntegrations: {
          googleMaps: true,
          spotify: false,
          instagram: false,
          facebook: false,
          linkedin: false,
          twitter: false
        }
      },
      open: {
        profileVisibility: 'public',
        photoVisibility: 'public',
        locationSharing: 'exact',
        onlineStatus: true,
        readReceipts: true,
        activityStatus: true,
        searchVisibility: true,
        ageVisibility: 'public',
        lastActiveVisibility: 'approximate',
        distanceVisibility: 'exact',
        mutualFriendsVisibility: true,
        socialMediaLinking: true,
        dataCollection: {
          analytics: true,
          personalization: true,
          marketing: true,
          research: true,
          thirdParty: true
        },
        thirdPartyIntegrations: {
          googleMaps: true,
          spotify: true,
          instagram: true,
          facebook: true,
          linkedin: true,
          twitter: true
        }
      }
    };

    setDataSettings(prev => ({
      ...prev,
      ...presets[level]
    }));
  };

  const handleDataDownload = () => {
    // Simulate data download process
    setDataDownloadDialog(true);
  };

  const handleDataDeletion = () => {
    setDataDeleteDialog(true);
  };

  const renderPrivacyOverview = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Privacy sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h6">Privacy Score</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress 
              variant="determinate" 
              value={calculatePrivacyScore()} 
              sx={{ height: 10, borderRadius: 5 }}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            {calculatePrivacyScore()}/100
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {Object.entries(privacyLevels).map(([key, level]) => (
            <Grid item xs={12} md={4} key={key}>
              <Card 
                sx={{ 
                  cursor: 'pointer',
                  border: privacyLevel === key ? `2px solid ${level.color}` : '1px solid #e0e0e0',
                  '&:hover': { elevation: 2 }
                }}
                onClick={() => applyPrivacyLevel(key)}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ color: level.color, mb: 1 }}>
                    {level.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1 }}>
                    {level.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {level.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderProfilePrivacy = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Person sx={{ mr: 1 }} />
          Profile Privacy
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Profile Visibility</InputLabel>
              <Select
                value={dataSettings.profileVisibility}
                onChange={(e) => updateDataSetting('profileVisibility', e.target.value)}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="matches">Matches Only</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Photo Visibility</InputLabel>
              <Select
                value={dataSettings.photoVisibility}
                onChange={(e) => updateDataSetting('photoVisibility', e.target.value)}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="matches">Matches Only</MenuItem>
                <MenuItem value="private">Private</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Age Visibility</InputLabel>
              <Select
                value={dataSettings.ageVisibility}
                onChange={(e) => updateDataSetting('ageVisibility', e.target.value)}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="matches">Matches Only</MenuItem>
                <MenuItem value="none">Hidden</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Location Sharing</InputLabel>
              <Select
                value={dataSettings.locationSharing}
                onChange={(e) => updateDataSetting('locationSharing', e.target.value)}
              >
                <MenuItem value="exact">Exact Location</MenuItem>
                <MenuItem value="approximate">Approximate (5 mile radius)</MenuItem>
                <MenuItem value="city">City Only</MenuItem>
                <MenuItem value="off">Off</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>Activity Privacy</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={dataSettings.onlineStatus}
                    onChange={(e) => updateDataSetting('onlineStatus', e.target.checked)}
                  />
                }
                label="Show Online Status"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={dataSettings.readReceipts}
                    onChange={(e) => updateDataSetting('readReceipts', e.target.checked)}
                  />
                }
                label="Read Receipts"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={dataSettings.activityStatus}
                    onChange={(e) => updateDataSetting('activityStatus', e.target.checked)}
                  />
                }
                label="Activity Status"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={dataSettings.searchVisibility}
                    onChange={(e) => updateDataSetting('searchVisibility', e.target.checked)}
                  />
                }
                label="Appear in Search"
              />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );

  const renderDataCollection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <DataUsage sx={{ mr: 1 }} />
          Data Collection Preferences
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          Control how your data is used to improve your experience and our services.
        </Alert>

        <Grid container spacing={2}>
          {Object.entries(dataSettings.dataCollection).map(([key, value]) => (
            <Grid item xs={12} md={6} key={key}>
              <FormControlLabel
                control={
                  <Switch
                    checked={value}
                    onChange={(e) => updateDataSetting(`dataCollection.${key}`, e.target.checked)}
                  />
                }
                label={key.charAt(0).toUpperCase() + key.slice(1)}
              />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                {key === 'analytics' && 'Help us understand app usage patterns'}
                {key === 'personalization' && 'Personalize your experience and recommendations'}
                {key === 'marketing' && 'Receive targeted marketing content'}
                {key === 'research' && 'Participate in research studies'}
                {key === 'thirdParty' && 'Share data with trusted partners'}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderDataRetention = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Storage sx={{ mr: 1 }} />
          Data Retention Settings
        </Typography>

        <Grid container spacing={3}>
          {Object.entries(dataSettings.dataRetention).map(([key, value]) => (
            <Grid item xs={12} md={6} key={key}>
              <FormControl fullWidth>
                <InputLabel>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</InputLabel>
                <Select
                  value={value}
                  onChange={(e) => updateDataSetting(`dataRetention.${key}`, e.target.value)}
                >
                  <MenuItem value="1month">1 Month</MenuItem>
                  <MenuItem value="3months">3 Months</MenuItem>
                  <MenuItem value="6months">6 Months</MenuItem>
                  <MenuItem value="1year">1 Year</MenuItem>
                  <MenuItem value="2years">2 Years</MenuItem>
                  <MenuItem value="forever">Keep Forever</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderDataManagement = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <AdminPanelSettings sx={{ mr: 1 }} />
          Data Management
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<CloudDownload />}
              onClick={handleDataDownload}
              sx={{ mb: 2 }}
            >
              Download My Data
            </Button>
            <Typography variant="body2" color="text.secondary">
              Export all your data in a portable format
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Edit />}
              sx={{ mb: 2 }}
            >
              Request Data Correction
            </Button>
            <Typography variant="body2" color="text.secondary">
              Request corrections to your personal data
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              startIcon={<Delete />}
              onClick={handleDataDeletion}
              sx={{ mb: 2 }}
            >
              Delete My Account
            </Button>
            <Typography variant="body2" color="text.secondary">
              Permanently delete your account and data
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderThirdPartyIntegrations = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Share sx={{ mr: 1 }} />
          Third-Party Integrations
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          Third-party integrations may have their own privacy policies. Review them carefully.
        </Alert>

        <Grid container spacing={2}>
          {Object.entries(dataSettings.thirdPartyIntegrations).map(([key, value]) => (
            <Grid item xs={12} md={6} key={key}>
              <FormControlLabel
                control={
                  <Switch
                    checked={value}
                    onChange={(e) => updateDataSetting(`thirdPartyIntegrations.${key}`, e.target.checked)}
                  />
                }
                label={key.charAt(0).toUpperCase() + key.slice(1)}
              />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderPrivacyTips = () => (
    <Collapse in={privacyTips}>
      <Card sx={{ mb: 3, backgroundColor: '#f5f5f5' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
              <HelpOutline sx={{ mr: 1 }} />
              Privacy Tips
            </Typography>
            <IconButton onClick={() => setPrivacyTips(false)}>
              <Clear />
            </IconButton>
          </Box>

          <List dense>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Use the 'Matches Only' setting for photos to maintain privacy while allowing connections" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Enable approximate location sharing for better matches without revealing exact location" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Regularly review and update your privacy settings as your comfort level changes" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircle color="success" />
              </ListItemIcon>
              <ListItemText primary="Consider disabling marketing data collection if you prefer fewer targeted ads" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Collapse>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Privacy & Data Control
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Take control of your privacy and data sharing preferences
        </Typography>
        <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 151 of 280
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Overview" />
        <Tab label="Profile Privacy" />
        <Tab label="Data Collection" />
        <Tab label="Data Management" />
        <Tab label="Integrations" />
      </Tabs>

      {selectedTab === 0 && (
        <Box>
          {renderPrivacyOverview()}
          {renderPrivacyTips()}
        </Box>
      )}

      {selectedTab === 1 && renderProfilePrivacy()}
      {selectedTab === 2 && renderDataCollection()}
      {selectedTab === 3 && (
        <Box>
          {renderDataRetention()}
          {renderDataManagement()}
        </Box>
      )}
      {selectedTab === 4 && renderThirdPartyIntegrations()}

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

      {/* Data Download Dialog */}
      <Dialog open={dataDownloadDialog} onClose={() => setDataDownloadDialog(false)}>
        <DialogTitle>Download Your Data</DialogTitle>
        <DialogContent>
          <Typography>
            We'll prepare your data export and send you a download link within 24 hours.
            Your export will include:
          </Typography>
          <List>
            <ListItem><ListItemText primary="Profile information" /></ListItem>
            <ListItem><ListItemText primary="Chat history" /></ListItem>
            <ListItem><ListItemText primary="Photos and media" /></ListItem>
            <ListItem><ListItemText primary="Settings and preferences" /></ListItem>
            <ListItem><ListItemText primary="Activity logs" /></ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDataDownloadDialog(false)}>Cancel</Button>
          <Button variant="contained">Request Download</Button>
        </DialogActions>
      </Dialog>

      {/* Data Deletion Dialog */}
      <Dialog open={dataDeleteDialog} onClose={() => setDataDeleteDialog(false)}>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          <Alert severity="error" sx={{ mb: 2 }}>
            This action cannot be undone. All your data will be permanently deleted.
          </Alert>
          <Typography>
            Are you sure you want to delete your account? This will:
          </Typography>
          <List>
            <ListItem><ListItemText primary="Delete all your profile information" /></ListItem>
            <ListItem><ListItemText primary="Remove all your photos and media" /></ListItem>
            <ListItem><ListItemText primary="Delete your chat history" /></ListItem>
            <ListItem><ListItemText primary="Cancel any active subscriptions" /></ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDataDeleteDialog(false)}>Cancel</Button>
          <Button variant="contained" color="error">Delete Account</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default PrivacyDataControl;