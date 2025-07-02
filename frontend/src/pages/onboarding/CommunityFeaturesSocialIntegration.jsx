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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Rating,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stepper,
  Step,
  StepLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Divider,
  AvatarGroup,
  ButtonGroup
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Groups as CommunityIcon,
  Share as SocialIcon,
  Event as EventIcon,
  Forum as DiscussionIcon,
  Group as GroupIcon,
  GroupAdd as JoinGroupIcon,
  GroupWork as CollaborationIcon,
  EmojiEvents as AchievementIcon,
  Star as StarIcon,
  Favorite as LikeIcon,
  Comment as CommentIcon,
  Visibility as ViewIcon,
  PersonAdd as FollowIcon,
  PersonRemove as UnfollowIcon,
  Message as MessageIcon,
  Notifications as NotificationIcon,
  Settings as SettingsIcon,
  Security as PrivacyIcon,
  Shield as SafetyIcon,
  Report as ReportIcon,
  Block as BlockIcon,
  Verified as VerifiedIcon,
  Public as PublicIcon,
  Lock as PrivateIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  People as PeopleIcon,
  Psychology as InterestIcon,
  LocalActivity as ActivityIcon,
  Celebration as CelebrationIcon,
  TrendingUp as TrendingIcon,
  NewReleases as NewIcon,
  Whatshot as HotIcon,
  Timeline as TimelineIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  AutoAwesome as AIIcon,
  Lightbulb as SuggestionIcon,
  Recommend as RecommendIcon,
  Connect as ConnectIcon,
  NetworkCheck as NetworkIcon,
  Language as GlobalIcon,
  Translate as TranslateIcon,
  Accessibility as AccessibilityIcon,
  VolumeUp as AudioIcon,
  Subtitles as CaptionIcon,
  ColorLens as ThemeIcon,
  Palette as CustomizeIcon,
  Tune as FilterIcon,
  Search as SearchIcon,
  Sort as SortIcon,
  FilterList as FilterListIcon,
  Refresh as RefreshIcon,
  Download as ExportIcon,
  Upload as ImportIcon,
  CloudSync as SyncIcon,
  Backup as BackupIcon,
  Restore as RestoreIcon,
  Update as UpdateIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const CommunityFeaturesSocialIntegration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [communitySettings, setCommunitySettings] = useState({
    publicProfile: { enabled: true, visibility: 'friends' },
    groupParticipation: { enabled: true, autoJoin: false },
    eventAttendance: { enabled: true, notifications: true },
    discussionEngagement: { enabled: true, moderation: 'moderate' },
    socialSharing: { enabled: false, platforms: [] },
    communityRecommendations: { enabled: true, algorithm: 'ai-powered' },
    privacyControls: { enabled: true, level: 'balanced' },
    safetyFeatures: { enabled: true, reporting: true }
  });

  const [communityStats, setCommunityStats] = useState({
    totalMembers: { current: 15847, growth: 12.3, trend: 'up' },
    activeGroups: { current: 234, growth: 18.7, trend: 'up' },
    upcomingEvents: { current: 67, growth: 25.4, trend: 'up' },
    discussionThreads: { current: 1456, growth: 15.8, trend: 'up' },
    monthlyEngagement: { current: 89.4, growth: 5.2, trend: 'up' },
    userSatisfaction: { current: 4.6, growth: 0.3, trend: 'up' },
    safetyScore: { current: 98.7, growth: 1.2, trend: 'up' },
    moderationEfficiency: { current: 96.3, growth: 2.1, trend: 'up' }
  });

  const [socialFeatures, setSocialFeatures] = useState({
    profileSharing: { enabled: true, platforms: ['instagram', 'linkedin'], privacy: 'selective' },
    eventIntegration: { enabled: true, calendar: 'google', reminders: true },
    groupDiscovery: { enabled: true, recommendations: 'ai-based', filters: 8 },
    socialNetworking: { enabled: true, connections: 'verified', messaging: true },
    contentSharing: { enabled: false, moderation: 'automatic', approval: true },
    communityGamification: { enabled: true, achievements: 24, leaderboards: true },
    mentorshipProgram: { enabled: true, matching: 'ai-powered', support: '24/7' },
    expertSessions: { enabled: true, booking: 'integrated', recordings: true }
  });

  const [engagementMetrics, setEngagementMetrics] = useState({
    dailyActiveUsers: { current: 8934, target: 8000, percentage: 111.7 },
    groupParticipation: { current: 76.8, target: 70, percentage: 109.7 },
    eventAttendance: { current: 82.3, target: 75, percentage: 109.7 },
    discussionEngagement: { current: 91.2, target: 85, percentage: 107.3 },
    contentCreation: { current: 45.6, target: 40, percentage: 114.0 },
    socialConnections: { current: 67.9, target: 60, percentage: 113.2 },
    mentorshipMatches: { current: 94.1, target: 90, percentage: 104.6 },
    safetyCompliance: { current: 99.2, target: 95, percentage: 104.4 }
  });

  const [communityScore, setCommunityScore] = useState(0);
  const [socialIntegrationLevel, setSocialIntegrationLevel] = useState(0);

  // Calculate community score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // Community settings activation (25 points)
      const activeSettings = Object.values(communitySettings).filter(setting => setting.enabled).length;
      score += (activeSettings / Object.keys(communitySettings).length) * 25;
      
      // Social features effectiveness (25 points)
      const activeSocialFeatures = Object.values(socialFeatures).filter(feature => feature.enabled).length;
      score += (activeSocialFeatures / Object.keys(socialFeatures).length) * 25;
      
      // Engagement metrics performance (30 points)
      const avgEngagement = Object.values(engagementMetrics).reduce((sum, metric) => sum + metric.percentage, 0) / Object.keys(engagementMetrics).length;
      score += Math.min(avgEngagement - 100, 30);
      
      // Community growth and satisfaction (20 points)
      const growthScore = Object.values(communityStats).filter(stat => stat.trend === 'up').length / Object.keys(communityStats).length;
      score += growthScore * 20;
      
      setCommunityScore(Math.round(score));
      
      // Calculate social integration level
      const integrationFeatures = [
        socialFeatures.profileSharing.enabled,
        socialFeatures.eventIntegration.enabled,
        socialFeatures.socialNetworking.enabled,
        socialFeatures.communityGamification.enabled
      ].filter(Boolean).length;
      setSocialIntegrationLevel(Math.round((integrationFeatures / 4) * 100));
    };

    calculateScore();
  }, [communitySettings, socialFeatures, engagementMetrics, communityStats]);

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Exceptional', color: 'success', description: 'Outstanding community engagement' };
    if (score >= 80) return { level: 'Excellent', color: 'info', description: 'Superior social integration' };
    if (score >= 70) return { level: 'Good', color: 'warning', description: 'Solid community foundation' };
    return { level: 'Developing', color: 'error', description: 'Requires community building' };
  };

  const scoreInfo = getScoreLevel(communityScore);

  const handleSettingChange = (setting, property, value) => {
    setCommunitySettings(prev => ({
      ...prev,
      [setting]: {
        ...prev[setting],
        [property]: value
      }
    }));
  };

  const handleSocialFeatureChange = (feature, property, value) => {
    setSocialFeatures(prev => ({
      ...prev,
      [feature]: {
        ...prev[feature],
        [property]: value
      }
    }));
  };

  const renderCommunitySettings = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CommunityIcon color="primary" />
        Community Settings & Preferences
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Configure your community participation preferences to create meaningful connections, 
        join relevant groups, and engage in discussions that align with your relationship goals.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(communitySettings).map(([setting, data]) => (
          <Grid item xs={12} md={6} lg={4} key={setting}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                    {setting.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Switch
                    checked={data.enabled}
                    onChange={(e) => handleSettingChange(setting, 'enabled', e.target.checked)}
                  />
                </Box>
                
                {data.enabled && (
                  <Box>
                    {data.visibility && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Visibility</InputLabel>
                        <Select
                          value={data.visibility}
                          onChange={(e) => handleSettingChange(setting, 'visibility', e.target.value)}
                          label="Visibility"
                        >
                          <MenuItem value="public">Public</MenuItem>
                          <MenuItem value="friends">Friends Only</MenuItem>
                          <MenuItem value="private">Private</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.autoJoin !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.autoJoin}
                            onChange={(e) => handleSettingChange(setting, 'autoJoin', e.target.checked)}
                          />
                        }
                        label="Auto-join recommended groups"
                      />
                    )}
                    
                    {data.notifications !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.notifications}
                            onChange={(e) => handleSettingChange(setting, 'notifications', e.target.checked)}
                          />
                        }
                        label="Enable notifications"
                      />
                    )}
                    
                    {data.moderation && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Moderation Level</InputLabel>
                        <Select
                          value={data.moderation}
                          onChange={(e) => handleSettingChange(setting, 'moderation', e.target.value)}
                          label="Moderation Level"
                        >
                          <MenuItem value="strict">Strict</MenuItem>
                          <MenuItem value="moderate">Moderate</MenuItem>
                          <MenuItem value="relaxed">Relaxed</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.platforms && (
                      <Box>
                        <Typography variant="body2" gutterBottom>
                          Connected Platforms: {data.platforms.length}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {['facebook', 'instagram', 'twitter', 'linkedin'].map((platform) => (
                            <Chip
                              key={platform}
                              label={platform}
                              variant={data.platforms.includes(platform) ? 'filled' : 'outlined'}
                              onClick={() => {
                                const platforms = data.platforms.includes(platform)
                                  ? data.platforms.filter(p => p !== platform)
                                  : [...data.platforms, platform];
                                handleSettingChange(setting, 'platforms', platforms);
                              }}
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                    
                    {data.algorithm && (
                      <FormControl fullWidth>
                        <InputLabel>Algorithm</InputLabel>
                        <Select
                          value={data.algorithm}
                          onChange={(e) => handleSettingChange(setting, 'algorithm', e.target.value)}
                          label="Algorithm"
                        >
                          <MenuItem value="ai-powered">AI-Powered</MenuItem>
                          <MenuItem value="collaborative">Collaborative Filtering</MenuItem>
                          <MenuItem value="content-based">Content-Based</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.level && (
                      <FormControl fullWidth>
                        <InputLabel>Privacy Level</InputLabel>
                        <Select
                          value={data.level}
                          onChange={(e) => handleSettingChange(setting, 'level', e.target.value)}
                          label="Privacy Level"
                        >
                          <MenuItem value="open">Open</MenuItem>
                          <MenuItem value="balanced">Balanced</MenuItem>
                          <MenuItem value="strict">Strict</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.reporting !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.reporting}
                            onChange={(e) => handleSettingChange(setting, 'reporting', e.target.checked)}
                          />
                        }
                        label="Enable reporting system"
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

  const renderSocialFeatures = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SocialIcon color="primary" />
        Social Integration Features
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Advanced social integration features connecting you with like-minded individuals, 
        expert mentors, and relationship-focused communities for enhanced growth and support.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(socialFeatures).map(([feature, data]) => (
          <Grid item xs={12} md={6} lg={4} key={feature}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Switch
                    checked={data.enabled}
                    onChange={(e) => handleSocialFeatureChange(feature, 'enabled', e.target.checked)}
                  />
                </Box>
                
                {data.enabled && (
                  <Box>
                    {data.platforms && (
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="body2" gutterBottom>
                          Connected Platforms: {data.platforms.length}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {['facebook', 'instagram', 'twitter', 'linkedin', 'tiktok'].map((platform) => (
                            <Chip
                              key={platform}
                              label={platform}
                              variant={data.platforms.includes(platform) ? 'filled' : 'outlined'}
                              onClick={() => {
                                const platforms = data.platforms.includes(platform)
                                  ? data.platforms.filter(p => p !== platform)
                                  : [...data.platforms, platform];
                                handleSocialFeatureChange(feature, 'platforms', platforms);
                              }}
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                    
                    {data.privacy && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Privacy Setting</InputLabel>
                        <Select
                          value={data.privacy}
                          onChange={(e) => handleSocialFeatureChange(feature, 'privacy', e.target.value)}
                          label="Privacy Setting"
                        >
                          <MenuItem value="public">Public</MenuItem>
                          <MenuItem value="selective">Selective</MenuItem>
                          <MenuItem value="private">Private</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.calendar && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Calendar Integration</InputLabel>
                        <Select
                          value={data.calendar}
                          onChange={(e) => handleSocialFeatureChange(feature, 'calendar', e.target.value)}
                          label="Calendar Integration"
                        >
                          <MenuItem value="google">Google Calendar</MenuItem>
                          <MenuItem value="outlook">Outlook</MenuItem>
                          <MenuItem value="apple">Apple Calendar</MenuItem>
                          <MenuItem value="none">None</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.recommendations && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Recommendation Engine</InputLabel>
                        <Select
                          value={data.recommendations}
                          onChange={(e) => handleSocialFeatureChange(feature, 'recommendations', e.target.value)}
                          label="Recommendation Engine"
                        >
                          <MenuItem value="ai-based">AI-Based</MenuItem>
                          <MenuItem value="interest-based">Interest-Based</MenuItem>
                          <MenuItem value="location-based">Location-Based</MenuItem>
                          <MenuItem value="manual">Manual</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.filters && (
                      <Typography variant="body2" color="text.secondary">
                        Available Filters: {data.filters}
                      </Typography>
                    )}
                    
                    {data.connections && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Connection Type</InputLabel>
                        <Select
                          value={data.connections}
                          onChange={(e) => handleSocialFeatureChange(feature, 'connections', e.target.value)}
                          label="Connection Type"
                        >
                          <MenuItem value="verified">Verified Only</MenuItem>
                          <MenuItem value="mutual">Mutual Connections</MenuItem>
                          <MenuItem value="open">Open Network</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.messaging !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.messaging}
                            onChange={(e) => handleSocialFeatureChange(feature, 'messaging', e.target.checked)}
                          />
                        }
                        label="Enable messaging"
                      />
                    )}
                    
                    {data.moderation && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Content Moderation</InputLabel>
                        <Select
                          value={data.moderation}
                          onChange={(e) => handleSocialFeatureChange(feature, 'moderation', e.target.value)}
                          label="Content Moderation"
                        >
                          <MenuItem value="automatic">Automatic</MenuItem>
                          <MenuItem value="manual">Manual Review</MenuItem>
                          <MenuItem value="community">Community Moderated</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.approval !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.approval}
                            onChange={(e) => handleSocialFeatureChange(feature, 'approval', e.target.checked)}
                          />
                        }
                        label="Require approval"
                      />
                    )}
                    
                    {data.achievements && (
                      <Typography variant="body2" color="text.secondary">
                        Available Achievements: {data.achievements}
                      </Typography>
                    )}
                    
                    {data.leaderboards !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.leaderboards}
                            onChange={(e) => handleSocialFeatureChange(feature, 'leaderboards', e.target.checked)}
                          />
                        }
                        label="Enable leaderboards"
                      />
                    )}
                    
                    {data.matching && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Matching Algorithm</InputLabel>
                        <Select
                          value={data.matching}
                          onChange={(e) => handleSocialFeatureChange(feature, 'matching', e.target.value)}
                          label="Matching Algorithm"
                        >
                          <MenuItem value="ai-powered">AI-Powered</MenuItem>
                          <MenuItem value="skill-based">Skill-Based</MenuItem>
                          <MenuItem value="experience-based">Experience-Based</MenuItem>
                          <MenuItem value="manual">Manual Selection</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.support && (
                      <Typography variant="body2" color="text.secondary">
                        Support Level: {data.support}
                      </Typography>
                    )}
                    
                    {data.booking && (
                      <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Booking System</InputLabel>
                        <Select
                          value={data.booking}
                          onChange={(e) => handleSocialFeatureChange(feature, 'booking', e.target.value)}
                          label="Booking System"
                        >
                          <MenuItem value="integrated">Integrated</MenuItem>
                          <MenuItem value="external">External Link</MenuItem>
                          <MenuItem value="manual">Manual Coordination</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                    
                    {data.recordings !== undefined && (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={data.recordings}
                            onChange={(e) => handleSocialFeatureChange(feature, 'recordings', e.target.checked)}
                          />
                        }
                        label="Enable session recordings"
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

  const renderCommunityStats = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AnalyticsIcon color="primary" />
        Community Analytics & Growth
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Real-time community analytics showcasing growth trends, engagement patterns, and success metrics 
        across all community features and social integration platforms.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(communityStats).map(([stat, data]) => (
          <Grid item xs={12} md={6} lg={3} key={stat}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle2" gutterBottom sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                  {stat.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {stat === 'userSatisfaction' ? data.current : data.current.toLocaleString()}
                    {stat.includes('Score') || stat.includes('Efficiency') || stat.includes('Engagement') ? '%' : 
                     stat === 'userSatisfaction' ? '/5' : ''}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: data.trend === 'up' ? 'success.main' : 'error.main',
                        fontWeight: 600 
                      }}
                    >
                      +{data.growth}
                      {stat === 'userSatisfaction' ? '' : '%'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      growth
                    </Typography>
                  </Box>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={stat === 'userSatisfaction' ? (data.current / 5) * 100 : 
                         stat.includes('Score') || stat.includes('Efficiency') || stat.includes('Engagement') ? data.current : 
                         Math.min((data.current / 20000) * 100, 100)}
                  sx={{ height: 6, borderRadius: 3 }}
                  color={data.trend === 'up' ? 'success' : 'warning'}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Community Growth Summary
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell align="right">Current</TableCell>
                    <TableCell align="right">Growth</TableCell>
                    <TableCell align="right">Trend</TableCell>
                    <TableCell align="right">Performance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(communityStats).map(([stat, data]) => (
                    <TableRow key={stat}>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {stat.replace(/([A-Z])/g, ' $1').trim()}
                      </TableCell>
                      <TableCell align="right">
                        {stat === 'userSatisfaction' ? data.current : data.current.toLocaleString()}
                        {stat.includes('Score') || stat.includes('Efficiency') || stat.includes('Engagement') ? '%' : 
                         stat === 'userSatisfaction' ? '/5' : ''}
                      </TableCell>
                      <TableCell align="right" sx={{ color: 'success.main' }}>
                        +{data.growth}
                        {stat === 'userSatisfaction' ? '' : '%'}
                      </TableCell>
                      <TableCell align="right">
                        <TrendingIcon color="success" />
                      </TableCell>
                      <TableCell align="right">
                        <Chip 
                          label="Excellent" 
                          color="success"
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderEngagementMetrics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <InsightsIcon color="primary" />
        Engagement Metrics & Performance
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Comprehensive engagement analytics tracking user participation, social connections, and community 
        interaction effectiveness across all platform features and integration points.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(engagementMetrics).map(([metric, data]) => (
          <Grid item xs={12} md={6} lg={3} key={metric}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle2" gutterBottom sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                  {metric.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                    {metric === 'dailyActiveUsers' ? data.current.toLocaleString() : `${data.current}%`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Target: {metric === 'dailyActiveUsers' ? data.target.toLocaleString() : `${data.target}%`}
                  </Typography>
                  <Chip 
                    label={`${data.percentage.toFixed(1)}% of target`}
                    color={data.percentage >= 100 ? 'success' : 'warning'}
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min(data.percentage, 120)}
                  sx={{ height: 6, borderRadius: 3 }}
                  color={data.percentage >= 110 ? 'success' : data.percentage >= 100 ? 'info' : 'warning'}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Top Performing Areas
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon><TrendingIcon color="success" /></ListItemIcon>
                    <ListItemText 
                      primary="Content Creation" 
                      secondary={`${engagementMetrics.contentCreation.percentage.toFixed(1)}% of target - Outstanding`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><ConnectIcon color="success" /></ListItemIcon>
                    <ListItemText 
                      primary="Social Connections" 
                      secondary={`${engagementMetrics.socialConnections.percentage.toFixed(1)}% of target - Excellent`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><PeopleIcon color="success" /></ListItemIcon>
                    <ListItemText 
                      primary="Daily Active Users" 
                      secondary={`${engagementMetrics.dailyActiveUsers.percentage.toFixed(1)}% of target - Superior`}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><EventIcon color="success" /></ListItemIcon>
                    <ListItemText 
                      primary="Event Attendance" 
                      secondary={`${engagementMetrics.eventAttendance.percentage.toFixed(1)}% of target - Exceptional`}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Engagement Overview
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Overall Engagement Score
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={communityScore} 
                      sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                      color="success"
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'success.main' }}>
                      {communityScore}%
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Social Integration Level
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={socialIntegrationLevel} 
                      sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                      color="info"
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'info.main' }}>
                      {socialIntegrationLevel}%
                    </Typography>
                  </Box>
                </Box>
                
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Community Safety Score
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={communityStats.safetyScore.current} 
                      sx={{ flexGrow: 1, height: 8, borderRadius: 4 }}
                      color="warning"
                    />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'warning.main' }}>
                      {communityStats.safetyScore.current}%
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Community Features & Social Integration
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive community platform with advanced social integration, group participation, 
          event management, and relationship-focused networking for meaningful connections and growth.
        </Typography>

        {/* Community Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {communityScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Community Score
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
                        {communityStats.totalMembers.current.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Total Members
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {communityStats.activeGroups.current}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Active Groups
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {communityStats.upcomingEvents.current}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Upcoming Events
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {socialIntegrationLevel}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Social Integration
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
            label="Community Settings" 
            icon={<CommunityIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Social Features" 
            icon={<SocialIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Community Analytics" 
            icon={<AnalyticsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Engagement Metrics" 
            icon={<InsightsIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderCommunitySettings()}
          {activeTab === 1 && renderSocialFeatures()}
          {activeTab === 2 && renderCommunityStats()}
          {activeTab === 3 && renderEngagementMetrics()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<JoinGroupIcon />}
          >
            Join Communities
          </Button>
          <Button
            variant="outlined"
            startIcon={<EventIcon />}
          >
            Browse Events
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Community Guidelines
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<CheckIcon />}
            sx={{ minWidth: 200 }}
          >
            Save Community Settings
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Community Engagement Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={communityScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default CommunityFeaturesSocialIntegration;

