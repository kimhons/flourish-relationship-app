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
  Checkbox,
  Rating,
  Avatar,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Search,
  FilterList,
  Visibility,
  VisibilityOff,
  Notifications,
  NotificationsOff,
  Speed,
  Schedule,
  Psychology,
  Favorite,
  Star,
  Block,
  Security,
  Privacy,
  Settings,
  Tune,
  AutoAwesome,
  SmartToy,
  TrendingUp,
  Analytics,
  PersonSearch,
  Groups,
  LocationOn,
  Work,
  School,
  FitnessCenter,
  Restaurant,
  Movie,
  MusicNote,
  SportsEsports,
  Flight,
  Home,
  Child,
  Pets,
  Smoking,
  LocalBar,
  Height,
  Info,
  ExpandMore,
  CheckCircle,
  Warning,
  Error,
  Refresh,
  Pause,
  PlayArrow
} from '@mui/icons-material';

const AdvancedFilteringDiscovery = () => {
  const [preferences, setPreferences] = useState({
    // Discovery & Search Preferences
    discoverySettings: {
      discovery_mode: 'balanced', // conservative, balanced, exploratory
      match_frequency: 'daily', // hourly, daily, weekly, manual
      search_radius_dynamic: true,
      auto_expand_criteria: true,
      learning_algorithm: true,
      compatibility_threshold: 70, // 1-100 percentage
      novelty_factor: 5 // 1-10 scale (preference for similar vs. different matches)
    },
    
    // Advanced Filtering Options
    advancedFilters: {
      // Demographic Filters
      age_range_strict: false,
      education_filter_active: false,
      income_filter_active: false,
      height_filter_active: false,
      
      // Lifestyle Filters
      smoking_filter_strict: true,
      drinking_filter_active: false,
      fitness_filter_active: false,
      diet_filter_active: false,
      
      // Relationship Filters
      children_filter_strict: false,
      marriage_timeline_filter: false,
      relationship_history_filter: false,
      
      // Activity & Interest Filters
      shared_interests_minimum: 3, // minimum number of shared interests
      activity_compatibility_threshold: 60, // 1-100 percentage
      value_alignment_threshold: 70, // 1-100 percentage
      
      // Advanced Compatibility Filters
      personality_match_threshold: 60,
      communication_style_match: false,
      attachment_style_compatibility: false,
      love_language_overlap: false
    },
    
    // Profile Visibility & Privacy
    profileVisibility: {
      visibility_mode: 'selective', // public, selective, private
      show_to_mutual_interests: true,
      show_to_high_compatibility: true,
      hide_from_colleagues: true,
      hide_from_facebook_friends: false,
      incognito_mode: false,
      last_active_visibility: 'approximate', // exact, approximate, hidden
      read_receipt_sharing: true
    },
    
    // Notification & Communication Preferences
    notificationSettings: {
      new_match_notifications: true,
      message_notifications: true,
      like_notifications: false,
      view_notifications: false,
      compatibility_score_updates: true,
      weekly_match_summary: true,
      
      // Notification Timing
      quiet_hours_enabled: true,
      quiet_hours_start: '22:00',
      quiet_hours_end: '08:00',
      weekend_notifications: true,
      
      // Notification Methods
      push_notifications: true,
      email_notifications: false,
      sms_notifications: false
    },
    
    // AI & Algorithm Preferences
    aiAlgorithmSettings: {
      ai_learning_enabled: true,
      feedback_learning: true,
      behavioral_analysis: true,
      preference_evolution: true,
      cross_platform_learning: false,
      
      // Algorithm Transparency
      show_compatibility_breakdown: true,
      show_algorithm_reasoning: true,
      algorithm_explanation_level: 'detailed', // basic, detailed, technical
      
      // Matching Algorithm Weights
      personality_weight: 25,
      values_weight: 30,
      lifestyle_weight: 20,
      physical_weight: 10,
      interests_weight: 15
    },
    
    // Search & Discovery Behavior
    searchBehavior: {
      auto_like_high_compatibility: false,
      auto_pass_low_compatibility: false,
      batch_matching: true,
      daily_match_limit: 20,
      
      // Search Patterns
      peak_activity_matching: true,
      timezone_consideration: true,
      seasonal_preference_adjustment: true,
      
      // Discovery Expansion
      expand_age_range_gradually: true,
      expand_distance_gradually: true,
      suggest_deal_breaker_reconsideration: false
    },
    
    // Quality & Safety Filters
    qualitySafety: {
      verified_profiles_only: false,
      photo_verification_required: true,
      complete_profile_required: true,
      recent_activity_required: false,
      
      // Safety Features
      block_inappropriate_content: true,
      report_suspicious_behavior: true,
      limit_new_account_visibility: true,
      
      // Quality Thresholds
      minimum_profile_completeness: 70, // percentage
      minimum_photo_count: 3,
      maximum_response_time_preference: 'flexible' // immediate, hours, days, flexible
    }
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: 'discovery', title: 'Discovery Settings', icon: <Search />, color: '#e91e63' },
    { id: 'filters', title: 'Advanced Filters', icon: <FilterList />, color: '#2196f3' },
    { id: 'visibility', title: 'Profile Visibility', icon: <Visibility />, color: '#4caf50' },
    { id: 'notifications', title: 'Notifications', icon: <Notifications />, color: '#ff9800' },
    { id: 'ai_algorithm', title: 'AI & Algorithms', icon: <SmartToy />, color: '#9c27b0' },
    { id: 'search_behavior', title: 'Search Behavior', icon: <PersonSearch />, color: '#795548' },
    { id: 'quality_safety', title: 'Quality & Safety', icon: <Security />, color: '#607d8b' }
  ];

  useEffect(() => {
    // Calculate progress based on configured preferences
    const allSections = [
      preferences.discoverySettings,
      preferences.advancedFilters,
      preferences.profileVisibility,
      preferences.notificationSettings,
      preferences.aiAlgorithmSettings,
      preferences.searchBehavior,
      preferences.qualitySafety
    ];
    
    const totalConfigured = allSections.reduce((total, section) => {
      return total + Object.values(section).filter(value => 
        value !== '' && value !== 0 && value !== 'flexible' && 
        (typeof value === 'boolean' ? true : (Array.isArray(value) ? value.length > 0 : true))
      ).length;
    }, 0);
    
    const totalPossible = 50; // Approximate total number of preference fields
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

  const getThresholdLabel = (value) => {
    if (value <= 30) return 'Very Flexible';
    if (value <= 50) return 'Flexible';
    if (value <= 70) return 'Moderate';
    if (value <= 85) return 'Strict';
    return 'Very Strict';
  };

  const getThresholdColor = (value) => {
    if (value <= 30) return '#4caf50';
    if (value <= 50) return '#8bc34a';
    if (value <= 70) return '#ff9800';
    if (value <= 85) return '#ff5722';
    return '#f44336';
  };

  const renderDiscoverySettingsSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Search sx={{ mr: 2, color: '#e91e63' }} />
          <Typography variant="h6">Discovery & Search Settings</Typography>
          <Tooltip title="Configure how the app discovers and presents potential matches">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Discovery Mode</InputLabel>
              <Select
                value={preferences.discoverySettings.discovery_mode}
                onChange={(e) => handlePreferenceChange('discoverySettings', 'discovery_mode', e.target.value)}
                label="Discovery Mode"
              >
                <MenuItem value="conservative">Conservative (Strict criteria)</MenuItem>
                <MenuItem value="balanced">Balanced (Moderate exploration)</MenuItem>
                <MenuItem value="exploratory">Exploratory (Broad discovery)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Match Frequency</InputLabel>
              <Select
                value={preferences.discoverySettings.match_frequency}
                onChange={(e) => handlePreferenceChange('discoverySettings', 'match_frequency', e.target.value)}
                label="Match Frequency"
              >
                <MenuItem value="hourly">Hourly Updates</MenuItem>
                <MenuItem value="daily">Daily Matches</MenuItem>
                <MenuItem value="weekly">Weekly Batches</MenuItem>
                <MenuItem value="manual">Manual Search Only</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Compatibility Threshold: {preferences.discoverySettings.compatibility_threshold}%
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Minimum compatibility score to show matches
            </Typography>
            <Slider
              value={preferences.discoverySettings.compatibility_threshold}
              onChange={(e, newValue) => handlePreferenceChange('discoverySettings', 'compatibility_threshold', newValue)}
              min={30}
              max={95}
              step={5}
              marks={[
                { value: 30, label: '30%' },
                { value: 50, label: '50%' },
                { value: 70, label: '70%' },
                { value: 95, label: '95%' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getThresholdColor(preferences.discoverySettings.compatibility_threshold), mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Novelty Factor: {preferences.discoverySettings.novelty_factor}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Preference for similar vs. different matches
            </Typography>
            <Slider
              value={preferences.discoverySettings.novelty_factor}
              onChange={(e, newValue) => handlePreferenceChange('discoverySettings', 'novelty_factor', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Similar' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Different' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#e91e63', mb: 3 }}
            />

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.discoverySettings.search_radius_dynamic}
                    onChange={(e) => handlePreferenceChange('discoverySettings', 'search_radius_dynamic', e.target.checked)}
                  />
                }
                label="Dynamic Search Radius"
              />
              <Typography variant="body2" color="text.secondary">
                Automatically expand search radius if few matches found
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.discoverySettings.auto_expand_criteria}
                    onChange={(e) => handlePreferenceChange('discoverySettings', 'auto_expand_criteria', e.target.checked)}
                  />
                }
                label="Auto-Expand Criteria"
              />
              <Typography variant="body2" color="text.secondary">
                Gradually relax criteria to find more matches
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.discoverySettings.learning_algorithm}
                    onChange={(e) => handlePreferenceChange('discoverySettings', 'learning_algorithm', e.target.checked)}
                  />
                }
                label="AI Learning Algorithm"
              />
              <Typography variant="body2" color="text.secondary">
                Learn from your behavior to improve matches
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderAdvancedFiltersSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <FilterList sx={{ mr: 2, color: '#2196f3' }} />
          <Typography variant="h6">Advanced Filtering Options</Typography>
          <Tooltip title="Configure detailed filters for finding your ideal matches">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2196f3' }}>
              Demographic Filters
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.age_range_strict}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'age_range_strict', e.target.checked)}
                  />
                }
                label="Strict Age Range"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.education_filter_active}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'education_filter_active', e.target.checked)}
                  />
                }
                label="Education Level Filter"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.height_filter_active}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'height_filter_active', e.target.checked)}
                  />
                }
                label="Height Range Filter"
              />
            </Box>

            <Typography variant="h6" sx={{ mb: 2, mt: 3, color: '#2196f3' }}>
              Lifestyle Filters
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.smoking_filter_strict}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'smoking_filter_strict', e.target.checked)}
                  />
                }
                label="Strict Smoking Filter"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.drinking_filter_active}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'drinking_filter_active', e.target.checked)}
                  />
                }
                label="Drinking Habits Filter"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.fitness_filter_active}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'fitness_filter_active', e.target.checked)}
                  />
                }
                label="Fitness Level Filter"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2196f3' }}>
              Compatibility Thresholds
            </Typography>

            <Typography gutterBottom>
              Shared Interests Minimum: {preferences.advancedFilters.shared_interests_minimum}
            </Typography>
            <Slider
              value={preferences.advancedFilters.shared_interests_minimum}
              onChange={(e, newValue) => handlePreferenceChange('advancedFilters', 'shared_interests_minimum', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#2196f3', mb: 3 }}
            />

            <Typography gutterBottom>
              Activity Compatibility: {preferences.advancedFilters.activity_compatibility_threshold}%
            </Typography>
            <Slider
              value={preferences.advancedFilters.activity_compatibility_threshold}
              onChange={(e, newValue) => handlePreferenceChange('advancedFilters', 'activity_compatibility_threshold', newValue)}
              min={30}
              max={95}
              step={5}
              marks={[
                { value: 30, label: '30%' },
                { value: 60, label: '60%' },
                { value: 95, label: '95%' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getThresholdColor(preferences.advancedFilters.activity_compatibility_threshold), mb: 3 }}
            />

            <Typography gutterBottom>
              Value Alignment: {preferences.advancedFilters.value_alignment_threshold}%
            </Typography>
            <Slider
              value={preferences.advancedFilters.value_alignment_threshold}
              onChange={(e, newValue) => handlePreferenceChange('advancedFilters', 'value_alignment_threshold', newValue)}
              min={30}
              max={95}
              step={5}
              marks={[
                { value: 30, label: '30%' },
                { value: 70, label: '70%' },
                { value: 95, label: '95%' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getThresholdColor(preferences.advancedFilters.value_alignment_threshold), mb: 3 }}
            />

            <Typography variant="h6" sx={{ mb: 2, mt: 3, color: '#2196f3' }}>
              Advanced Compatibility
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.communication_style_match}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'communication_style_match', e.target.checked)}
                  />
                }
                label="Communication Style Match"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.attachment_style_compatibility}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'attachment_style_compatibility', e.target.checked)}
                  />
                }
                label="Attachment Style Compatibility"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.advancedFilters.love_language_overlap}
                    onChange={(e) => handlePreferenceChange('advancedFilters', 'love_language_overlap', e.target.checked)}
                  />
                }
                label="Love Language Overlap"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderProfileVisibilitySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Visibility sx={{ mr: 2, color: '#4caf50' }} />
          <Typography variant="h6">Profile Visibility & Privacy</Typography>
          <Tooltip title="Control who can see your profile and how you appear to others">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Visibility Mode</InputLabel>
              <Select
                value={preferences.profileVisibility.visibility_mode}
                onChange={(e) => handlePreferenceChange('profileVisibility', 'visibility_mode', e.target.value)}
                label="Visibility Mode"
              >
                <MenuItem value="public">Public (Visible to all users)</MenuItem>
                <MenuItem value="selective">Selective (Based on preferences)</MenuItem>
                <MenuItem value="private">Private (Only mutual matches)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Last Active Visibility</InputLabel>
              <Select
                value={preferences.profileVisibility.last_active_visibility}
                onChange={(e) => handlePreferenceChange('profileVisibility', 'last_active_visibility', e.target.value)}
                label="Last Active Visibility"
              >
                <MenuItem value="exact">Exact Time</MenuItem>
                <MenuItem value="approximate">Approximate (Recently, Today, etc.)</MenuItem>
                <MenuItem value="hidden">Hidden</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.profileVisibility.show_to_mutual_interests}
                    onChange={(e) => handlePreferenceChange('profileVisibility', 'show_to_mutual_interests', e.target.checked)}
                  />
                }
                label="Show to Mutual Interests"
              />
              <Typography variant="body2" color="text.secondary">
                Appear to users with similar interests
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.profileVisibility.show_to_high_compatibility}
                    onChange={(e) => handlePreferenceChange('profileVisibility', 'show_to_high_compatibility', e.target.checked)}
                  />
                }
                label="Show to High Compatibility"
              />
              <Typography variant="body2" color="text.secondary">
                Appear to highly compatible users
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.profileVisibility.hide_from_colleagues}
                    onChange={(e) => handlePreferenceChange('profileVisibility', 'hide_from_colleagues', e.target.checked)}
                  />
                }
                label="Hide from Colleagues"
              />
              <Typography variant="body2" color="text.secondary">
                Don't show to people from your workplace
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.profileVisibility.hide_from_facebook_friends}
                    onChange={(e) => handlePreferenceChange('profileVisibility', 'hide_from_facebook_friends', e.target.checked)}
                  />
                }
                label="Hide from Facebook Friends"
              />
              <Typography variant="body2" color="text.secondary">
                Don't show to Facebook connections
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.profileVisibility.incognito_mode}
                    onChange={(e) => handlePreferenceChange('profileVisibility', 'incognito_mode', e.target.checked)}
                  />
                }
                label="Incognito Mode"
              />
              <Typography variant="body2" color="text.secondary">
                Browse without appearing in others' discovery
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.profileVisibility.read_receipt_sharing}
                    onChange={(e) => handlePreferenceChange('profileVisibility', 'read_receipt_sharing', e.target.checked)}
                  />
                }
                label="Read Receipt Sharing"
              />
              <Typography variant="body2" color="text.secondary">
                Show when you've read messages
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderNotificationSettingsSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Notifications sx={{ mr: 2, color: '#ff9800' }} />
          <Typography variant="h6">Notification Settings</Typography>
          <Tooltip title="Configure when and how you receive notifications">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#ff9800' }}>
              Notification Types
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.new_match_notifications}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'new_match_notifications', e.target.checked)}
                  />
                }
                label="New Match Notifications"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.message_notifications}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'message_notifications', e.target.checked)}
                  />
                }
                label="Message Notifications"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.like_notifications}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'like_notifications', e.target.checked)}
                  />
                }
                label="Like Notifications"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.compatibility_score_updates}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'compatibility_score_updates', e.target.checked)}
                  />
                }
                label="Compatibility Score Updates"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.weekly_match_summary}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'weekly_match_summary', e.target.checked)}
                  />
                }
                label="Weekly Match Summary"
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#ff9800' }}>
              Notification Timing
            </Typography>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.quiet_hours_enabled}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'quiet_hours_enabled', e.target.checked)}
                  />
                }
                label="Enable Quiet Hours"
              />
            </Box>

            {preferences.notificationSettings.quiet_hours_enabled && (
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <TextField
                    label="Quiet Hours Start"
                    type="time"
                    value={preferences.notificationSettings.quiet_hours_start}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'quiet_hours_start', e.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Quiet Hours End"
                    type="time"
                    value={preferences.notificationSettings.quiet_hours_end}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'quiet_hours_end', e.target.value)}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
              </Grid>
            )}

            <Typography variant="h6" sx={{ mb: 2, mt: 3, color: '#ff9800' }}>
              Notification Methods
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.push_notifications}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'push_notifications', e.target.checked)}
                  />
                }
                label="Push Notifications"
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.notificationSettings.email_notifications}
                    onChange={(e) => handlePreferenceChange('notificationSettings', 'email_notifications', e.target.checked)}
                  />
                }
                label="Email Notifications"
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderAIAlgorithmSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <SmartToy sx={{ mr: 2, color: '#9c27b0' }} />
          <Typography variant="h6">AI & Algorithm Preferences</Typography>
          <Tooltip title="Configure how AI learns from your behavior and preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#9c27b0' }}>
              AI Learning Settings
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiAlgorithmSettings.ai_learning_enabled}
                    onChange={(e) => handlePreferenceChange('aiAlgorithmSettings', 'ai_learning_enabled', e.target.checked)}
                  />
                }
                label="AI Learning Enabled"
              />
              <Typography variant="body2" color="text.secondary">
                Allow AI to learn from your behavior
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiAlgorithmSettings.feedback_learning}
                    onChange={(e) => handlePreferenceChange('aiAlgorithmSettings', 'feedback_learning', e.target.checked)}
                  />
                }
                label="Feedback Learning"
              />
              <Typography variant="body2" color="text.secondary">
                Learn from your likes, passes, and ratings
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiAlgorithmSettings.behavioral_analysis}
                    onChange={(e) => handlePreferenceChange('aiAlgorithmSettings', 'behavioral_analysis', e.target.checked)}
                  />
                }
                label="Behavioral Analysis"
              />
              <Typography variant="body2" color="text.secondary">
                Analyze usage patterns to improve matches
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.aiAlgorithmSettings.preference_evolution}
                    onChange={(e) => handlePreferenceChange('aiAlgorithmSettings', 'preference_evolution', e.target.checked)}
                  />
                }
                label="Preference Evolution"
              />
              <Typography variant="body2" color="text.secondary">
                Adapt to changing preferences over time
              </Typography>
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Algorithm Explanation Level</InputLabel>
              <Select
                value={preferences.aiAlgorithmSettings.algorithm_explanation_level}
                onChange={(e) => handlePreferenceChange('aiAlgorithmSettings', 'algorithm_explanation_level', e.target.value)}
                label="Algorithm Explanation Level"
              >
                <MenuItem value="basic">Basic (Simple explanations)</MenuItem>
                <MenuItem value="detailed">Detailed (Comprehensive insights)</MenuItem>
                <MenuItem value="technical">Technical (Full transparency)</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#9c27b0' }}>
              Algorithm Weights
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Adjust how much each factor influences your matches (total should equal 100%)
            </Typography>

            <Typography gutterBottom>
              Personality: {preferences.aiAlgorithmSettings.personality_weight}%
            </Typography>
            <Slider
              value={preferences.aiAlgorithmSettings.personality_weight}
              onChange={(e, newValue) => handlePreferenceChange('aiAlgorithmSettings', 'personality_weight', newValue)}
              min={0}
              max={50}
              step={5}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Values: {preferences.aiAlgorithmSettings.values_weight}%
            </Typography>
            <Slider
              value={preferences.aiAlgorithmSettings.values_weight}
              onChange={(e, newValue) => handlePreferenceChange('aiAlgorithmSettings', 'values_weight', newValue)}
              min={0}
              max={50}
              step={5}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Lifestyle: {preferences.aiAlgorithmSettings.lifestyle_weight}%
            </Typography>
            <Slider
              value={preferences.aiAlgorithmSettings.lifestyle_weight}
              onChange={(e, newValue) => handlePreferenceChange('aiAlgorithmSettings', 'lifestyle_weight', newValue)}
              min={0}
              max={40}
              step={5}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Physical: {preferences.aiAlgorithmSettings.physical_weight}%
            </Typography>
            <Slider
              value={preferences.aiAlgorithmSettings.physical_weight}
              onChange={(e, newValue) => handlePreferenceChange('aiAlgorithmSettings', 'physical_weight', newValue)}
              min={0}
              max={30}
              step={5}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Interests: {preferences.aiAlgorithmSettings.interests_weight}%
            </Typography>
            <Slider
              value={preferences.aiAlgorithmSettings.interests_weight}
              onChange={(e, newValue) => handlePreferenceChange('aiAlgorithmSettings', 'interests_weight', newValue)}
              min={0}
              max={30}
              step={5}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Alert severity="info" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Total: {preferences.aiAlgorithmSettings.personality_weight + 
                       preferences.aiAlgorithmSettings.values_weight + 
                       preferences.aiAlgorithmSettings.lifestyle_weight + 
                       preferences.aiAlgorithmSettings.physical_weight + 
                       preferences.aiAlgorithmSettings.interests_weight}%
              </Typography>
            </Alert>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderSearchBehaviorSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <PersonSearch sx={{ mr: 2, color: '#795548' }} />
          <Typography variant="h6">Search & Discovery Behavior</Typography>
          <Tooltip title="Configure automated search behaviors and discovery patterns">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#795548' }}>
              Automated Actions
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.searchBehavior.auto_like_high_compatibility}
                    onChange={(e) => handlePreferenceChange('searchBehavior', 'auto_like_high_compatibility', e.target.checked)}
                  />
                }
                label="Auto-Like High Compatibility"
              />
              <Typography variant="body2" color="text.secondary">
                Automatically like matches above 90% compatibility
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.searchBehavior.batch_matching}
                    onChange={(e) => handlePreferenceChange('searchBehavior', 'batch_matching', e.target.checked)}
                  />
                }
                label="Batch Matching"
              />
              <Typography variant="body2" color="text.secondary">
                Present matches in curated batches
              </Typography>
            </Box>

            <Typography gutterBottom>
              Daily Match Limit: {preferences.searchBehavior.daily_match_limit}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Maximum new matches per day
            </Typography>
            <Slider
              value={preferences.searchBehavior.daily_match_limit}
              onChange={(e, newValue) => handlePreferenceChange('searchBehavior', 'daily_match_limit', newValue)}
              min={5}
              max={50}
              step={5}
              marks={[
                { value: 5, label: '5' },
                { value: 20, label: '20' },
                { value: 50, label: '50' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#795548', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#795548' }}>
              Discovery Patterns
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.searchBehavior.peak_activity_matching}
                    onChange={(e) => handlePreferenceChange('searchBehavior', 'peak_activity_matching', e.target.checked)}
                  />
                }
                label="Peak Activity Matching"
              />
              <Typography variant="body2" color="text.secondary">
                Show matches when both users are most active
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.searchBehavior.timezone_consideration}
                    onChange={(e) => handlePreferenceChange('searchBehavior', 'timezone_consideration', e.target.checked)}
                  />
                }
                label="Timezone Consideration"
              />
              <Typography variant="body2" color="text.secondary">
                Consider timezone compatibility for communication
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.searchBehavior.expand_age_range_gradually}
                    onChange={(e) => handlePreferenceChange('searchBehavior', 'expand_age_range_gradually', e.target.checked)}
                  />
                }
                label="Gradual Age Range Expansion"
              />
              <Typography variant="body2" color="text.secondary">
                Slowly expand age preferences if few matches
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.searchBehavior.expand_distance_gradually}
                    onChange={(e) => handlePreferenceChange('searchBehavior', 'expand_distance_gradually', e.target.checked)}
                  />
                }
                label="Gradual Distance Expansion"
              />
              <Typography variant="body2" color="text.secondary">
                Slowly expand search radius if few matches
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderQualitySafetySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Security sx={{ mr: 2, color: '#607d8b' }} />
          <Typography variant="h6">Quality & Safety Filters</Typography>
          <Tooltip title="Configure quality and safety requirements for matches">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#607d8b' }}>
              Profile Quality Requirements
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.qualitySafety.verified_profiles_only}
                    onChange={(e) => handlePreferenceChange('qualitySafety', 'verified_profiles_only', e.target.checked)}
                  />
                }
                label="Verified Profiles Only"
              />
              <Typography variant="body2" color="text.secondary">
                Only show identity-verified users
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.qualitySafety.photo_verification_required}
                    onChange={(e) => handlePreferenceChange('qualitySafety', 'photo_verification_required', e.target.checked)}
                  />
                }
                label="Photo Verification Required"
              />
              <Typography variant="body2" color="text.secondary">
                Require photo verification for matches
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.qualitySafety.complete_profile_required}
                    onChange={(e) => handlePreferenceChange('qualitySafety', 'complete_profile_required', e.target.checked)}
                  />
                }
                label="Complete Profile Required"
              />
              <Typography variant="body2" color="text.secondary">
                Only show users with complete profiles
              </Typography>
            </Box>

            <Typography gutterBottom>
              Minimum Profile Completeness: {preferences.qualitySafety.minimum_profile_completeness}%
            </Typography>
            <Slider
              value={preferences.qualitySafety.minimum_profile_completeness}
              onChange={(e, newValue) => handlePreferenceChange('qualitySafety', 'minimum_profile_completeness', newValue)}
              min={30}
              max={100}
              step={10}
              marks={[
                { value: 30, label: '30%' },
                { value: 70, label: '70%' },
                { value: 100, label: '100%' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b', mb: 3 }}
            />

            <Typography gutterBottom>
              Minimum Photo Count: {preferences.qualitySafety.minimum_photo_count}
            </Typography>
            <Slider
              value={preferences.qualitySafety.minimum_photo_count}
              onChange={(e, newValue) => handlePreferenceChange('qualitySafety', 'minimum_photo_count', newValue)}
              min={1}
              max={10}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, color: '#607d8b' }}>
              Safety Features
            </Typography>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.qualitySafety.block_inappropriate_content}
                    onChange={(e) => handlePreferenceChange('qualitySafety', 'block_inappropriate_content', e.target.checked)}
                  />
                }
                label="Block Inappropriate Content"
              />
              <Typography variant="body2" color="text.secondary">
                Automatically filter inappropriate messages/profiles
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.qualitySafety.report_suspicious_behavior}
                    onChange={(e) => handlePreferenceChange('qualitySafety', 'report_suspicious_behavior', e.target.checked)}
                  />
                }
                label="Auto-Report Suspicious Behavior"
              />
              <Typography variant="body2" color="text.secondary">
                Automatically report suspicious activity patterns
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={preferences.qualitySafety.limit_new_account_visibility}
                    onChange={(e) => handlePreferenceChange('qualitySafety', 'limit_new_account_visibility', e.target.checked)}
                  />
                }
                label="Limit New Account Visibility"
              />
              <Typography variant="body2" color="text.secondary">
                Reduce visibility of very new accounts
              </Typography>
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Response Time Preference</InputLabel>
              <Select
                value={preferences.qualitySafety.maximum_response_time_preference}
                onChange={(e) => handlePreferenceChange('qualitySafety', 'maximum_response_time_preference', e.target.value)}
                label="Response Time Preference"
              >
                <MenuItem value="immediate">Immediate Responders</MenuItem>
                <MenuItem value="hours">Within Hours</MenuItem>
                <MenuItem value="days">Within Days</MenuItem>
                <MenuItem value="flexible">Flexible</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderDiscoverySettingsSection();
      case 1: return renderAdvancedFiltersSection();
      case 2: return renderProfileVisibilitySection();
      case 3: return renderNotificationSettingsSection();
      case 4: return renderAIAlgorithmSection();
      case 5: return renderSearchBehaviorSection();
      case 6: return renderQualitySafetySection();
      default: return renderDiscoverySettingsSection();
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
    localStorage.setItem('advancedFilteringDiscovery', JSON.stringify(preferences));
    console.log('Advanced Filtering & Discovery completed:', preferences);
    // Navigate to Screen 141: AI Coach Integration (next section)
  };

  const getActiveFiltersCount = () => {
    const filters = preferences.advancedFilters;
    return Object.values(filters).filter(value => 
      typeof value === 'boolean' ? value : value > 50
    ).length;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Advanced Filtering & Discovery
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Fine-tune your matching algorithm and discovery preferences
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
                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)'
              }
            }} 
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {Math.round(progress)}% Complete • {getActiveFiltersCount()} Active Filters
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
          <strong>AI & Privacy Note:</strong> All AI learning and filtering preferences are designed to 
          respect your privacy and cultural background. You maintain full control over your data and 
          can adjust these settings anytime to match your comfort level.
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
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
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
              background: 'linear-gradient(45deg, #4ECDC4 30%, #44A08D 90%)',
              color: 'white'
            }}
          >
            Complete Advanced Matching Setup
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Advanced Filtering Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Discovery Mode:</strong> {preferences.discoverySettings.discovery_mode}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Compatibility Threshold:</strong> {preferences.discoverySettings.compatibility_threshold}%
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Active Filters:</strong> {getActiveFiltersCount()}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>AI Learning:</strong> {preferences.aiAlgorithmSettings.ai_learning_enabled ? 'Enabled' : 'Disabled'}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AdvancedFilteringDiscovery;

