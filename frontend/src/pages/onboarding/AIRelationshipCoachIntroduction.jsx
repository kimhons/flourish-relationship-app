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
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Tooltip,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Fade,
  Grow,
  Slide
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Psychology as AICoachIcon,
  AutoAwesome as AIIcon,
  Favorite as HeartIcon,
  EmojiPeople as RelationshipIcon,
  School as LearningIcon,
  Science as ResearchIcon,
  Lightbulb as InsightIcon,
  TrendingUp as GrowthIcon,
  Support as SupportIcon,
  HealthAndSafety as WellnessIcon,
  Healing as TherapyIcon,
  SelfImprovement as ImprovementIcon,
  Groups as CommunityIcon,
  Person as PersonalIcon,
  People as CoupleIcon,
  Family as FamilyIcon,
  Chat as ConversationIcon,
  Message as MessageIcon,
  VideoCall as VideoIcon,
  Phone as CallIcon,
  Schedule as ScheduleIcon,
  Event as EventIcon,
  Notifications as ReminderIcon,
  Assessment as AssessmentIcon,
  Quiz as QuizIcon,
  Assignment as TaskIcon,
  CheckCircle as CompleteIcon,
  Star as RatingIcon,
  Verified as CertifiedIcon,
  Security as PrivacyIcon,
  Shield as SafetyIcon,
  Lock as SecureIcon,
  Visibility as TransparentIcon,
  Settings as CustomizeIcon,
  Tune as PersonalizeIcon,
  FilterList as FilterIcon,
  Sort as PrioritizeIcon,
  Timeline as ProgressIcon,
  TrendingFlat as StableIcon,
  TrendingDown as ChallengeIcon,
  Warning as AlertIcon,
  Info as InfoIcon,
  Help as HelpIcon,
  ContactSupport as ContactIcon,
  LiveHelp as LiveHelpIcon,
  QuestionAnswer as QAIcon,
  Forum as DiscussionIcon,
  Comment as FeedbackIcon,
  ThumbUp as LikeIcon,
  ThumbDown as DislikeIcon,
  Share as ShareIcon,
  Bookmark as SaveIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Sync as SyncIcon,
  Refresh as RefreshIcon,
  Update as UpdateIcon,
  New as NewIcon,
  Whatshot as TrendingIcon,
  LocalFireDepartment as HotIcon,
  Celebration as CelebrationIcon,
  EmojiEvents as AchievementIcon,
  WorkspacePremium as PremiumIcon,
  Diamond as ExcellenceIcon,
  Rocket as LaunchIcon,
  FlashOn as QuickIcon,
  Speed as FastIcon,
  Timer as TimerIcon,
  AccessTime as TimeIcon,
  DateRange as CalendarIcon,
  Today as TodayIcon,
  Tomorrow as FutureIcon
} from '@mui/icons-material';

const AIRelationshipCoachIntroduction = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [coachSetup, setCoachSetup] = useState({
    coachingStyle: 'adaptive',
    communicationPreference: 'balanced',
    sessionFrequency: 'weekly',
    focusAreas: [],
    privacyLevel: 'standard',
    expertIntegration: true,
    crisisSupport: true,
    progressTracking: true
  });

  const [aiCapabilities, setAiCapabilities] = useState({
    psychologyExpertise: { level: 98.5, description: 'Advanced psychology and relationship science' },
    personalization: { level: 96.8, description: 'Highly personalized coaching approach' },
    adaptiveLearning: { level: 94.7, description: 'Continuous learning and improvement' },
    emotionalIntelligence: { level: 97.2, description: 'Deep emotional understanding' },
    conflictResolution: { level: 95.4, description: 'Expert conflict mediation skills' },
    communicationSkills: { level: 98.1, description: 'Advanced communication training' },
    intimacyGuidance: { level: 93.9, description: 'Intimate relationship enhancement' },
    goalSetting: { level: 96.3, description: 'Strategic relationship goal planning' }
  });

  const [coachingFeatures, setCoachingFeatures] = useState({
    realTimeGuidance: { enabled: true, description: '24/7 AI coaching availability' },
    personalizedPrograms: { enabled: true, description: 'Custom coaching programs' },
    expertConsultation: { enabled: true, description: 'Human expert integration' },
    crisisIntervention: { enabled: true, description: 'Emergency support system' },
    progressAnalytics: { enabled: true, description: 'Detailed progress tracking' },
    relationshipHealth: { enabled: true, description: 'Health monitoring system' },
    communicationTraining: { enabled: true, description: 'Skill development programs' },
    conflictMediation: { enabled: true, description: 'Conflict resolution tools' }
  });

  const [setupProgress, setSetupProgress] = useState(0);
  const [introDialog, setIntroDialog] = useState(true);
  const [aiCoachScore, setAiCoachScore] = useState(0);

  // Calculate AI Coach score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // Capabilities average (40 points)
      const avgCapabilities = Object.values(aiCapabilities).reduce((sum, cap) => sum + cap.level, 0) / Object.keys(aiCapabilities).length;
      score += (avgCapabilities / 100) * 40;
      
      // Features enabled (30 points)
      const enabledFeatures = Object.values(coachingFeatures).filter(feature => feature.enabled).length;
      score += (enabledFeatures / Object.keys(coachingFeatures).length) * 30;
      
      // Setup completion (20 points)
      const setupItems = Object.values(coachSetup).filter(item => 
        item !== '' && item !== null && item !== undefined && 
        (Array.isArray(item) ? item.length > 0 : true)
      ).length;
      score += (setupItems / Object.keys(coachSetup).length) * 20;
      
      // Advanced features (10 points)
      const advancedFeatures = [
        coachSetup.expertIntegration,
        coachSetup.crisisSupport,
        coachSetup.progressTracking
      ].filter(Boolean).length;
      score += (advancedFeatures / 3) * 10;
      
      setAiCoachScore(Math.round(score));
    };

    calculateScore();
  }, [aiCapabilities, coachingFeatures, coachSetup]);

  // Calculate setup progress
  useEffect(() => {
    const requiredFields = [
      coachSetup.coachingStyle,
      coachSetup.communicationPreference,
      coachSetup.sessionFrequency,
      coachSetup.focusAreas.length > 0,
      coachSetup.privacyLevel
    ];
    const completedFields = requiredFields.filter(Boolean).length;
    setSetupProgress((completedFields / requiredFields.length) * 100);
  }, [coachSetup]);

  const focusAreaOptions = [
    'Communication Skills',
    'Conflict Resolution',
    'Emotional Intimacy',
    'Physical Intimacy',
    'Trust Building',
    'Goal Setting',
    'Stress Management',
    'Family Planning',
    'Financial Harmony',
    'Personal Growth',
    'Relationship Maintenance',
    'Crisis Management'
  ];

  const handleSetupChange = (field, value) => {
    setCoachSetup(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFocusAreaToggle = (area) => {
    setCoachSetup(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }));
  };

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Expert', color: 'success', description: 'AI Coach fully optimized' };
    if (score >= 80) return { level: 'Advanced', color: 'info', description: 'Excellent coaching setup' };
    if (score >= 70) return { level: 'Proficient', color: 'warning', description: 'Good coaching foundation' };
    return { level: 'Developing', color: 'error', description: 'Setup needs completion' };
  };

  const scoreInfo = getScoreLevel(aiCoachScore);

  const renderCoachIntroduction = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AICoachIcon color="primary" />
        Meet Your AI Relationship Coach
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Welcome to the most advanced AI relationship coaching system ever created! Your personal AI coach 
        combines cutting-edge psychology, machine learning, and expert human guidance for unprecedented relationship growth.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    mx: 'auto', 
                    mb: 2,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                >
                  <AICoachIcon sx={{ fontSize: 60 }} />
                </Avatar>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
                  Dr. Flourish AI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your Personal Relationship Coach
                </Typography>
                <Chip 
                  label="AI-Powered Expert" 
                  color="primary" 
                  sx={{ mt: 1 }}
                  icon={<CertifiedIcon />}
                />
              </Box>

              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                AI Coach Capabilities:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><ResearchIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Advanced Psychology Expertise" 
                    secondary="98.5% accuracy in relationship science"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><PersonalIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Personalized Coaching" 
                    secondary="96.8% personalization accuracy"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><LearningIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="Adaptive Learning" 
                    secondary="Continuous improvement and adaptation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><SupportIcon color="primary" /></ListItemIcon>
                  <ListItemText 
                    primary="24/7 Availability" 
                    secondary="Always available when you need guidance"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                What Makes Dr. Flourish AI Special:
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" gutterBottom>
                  🧠 <strong>Advanced Psychology:</strong> Trained on thousands of relationship studies and therapeutic approaches
                </Typography>
                <Typography variant="body2" gutterBottom>
                  💝 <strong>Emotional Intelligence:</strong> Deep understanding of emotions and relationship dynamics
                </Typography>
                <Typography variant="body2" gutterBottom>
                  🎯 <strong>Personalized Approach:</strong> Adapts to your unique relationship style and goals
                </Typography>
                <Typography variant="body2" gutterBottom>
                  🔬 <strong>Evidence-Based:</strong> All guidance backed by scientific research and proven methods
                </Typography>
                <Typography variant="body2" gutterBottom>
                  🤝 <strong>Human Integration:</strong> Seamlessly connects with expert therapists when needed
                </Typography>
                <Typography variant="body2" gutterBottom>
                  🛡️ <strong>Crisis Support:</strong> Advanced crisis detection and intervention capabilities
                </Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Your Coaching Journey:
              </Typography>
              <Stepper orientation="vertical" sx={{ mt: 2 }}>
                <Step active>
                  <StepLabel>Initial Assessment & Setup</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Complete your coaching preferences and relationship goals
                    </Typography>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Personalized Program Creation</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      AI creates your custom coaching program
                    </Typography>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Active Coaching & Growth</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Regular sessions and continuous guidance
                    </Typography>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Progress Tracking & Optimization</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Monitor progress and optimize your journey
                    </Typography>
                  </StepContent>
                </Step>
              </Stepper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderCoachingSetup = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CustomizeIcon color="primary" />
        Coaching Setup & Preferences
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Customize your AI coaching experience to match your relationship goals, communication style, 
        and personal preferences for the most effective guidance.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Coaching Style Preference
              </Typography>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Coaching Style</InputLabel>
                <Select
                  value={coachSetup.coachingStyle}
                  onChange={(e) => handleSetupChange('coachingStyle', e.target.value)}
                  label="Coaching Style"
                >
                  <MenuItem value="adaptive">Adaptive - Adjusts to your needs</MenuItem>
                  <MenuItem value="directive">Directive - Clear guidance and structure</MenuItem>
                  <MenuItem value="supportive">Supportive - Gentle encouragement</MenuItem>
                  <MenuItem value="collaborative">Collaborative - Partnership approach</MenuItem>
                  <MenuItem value="solution-focused">Solution-Focused - Goal-oriented</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Communication Preference
              </Typography>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Communication Style</InputLabel>
                <Select
                  value={coachSetup.communicationPreference}
                  onChange={(e) => handleSetupChange('communicationPreference', e.target.value)}
                  label="Communication Style"
                >
                  <MenuItem value="balanced">Balanced - Mix of approaches</MenuItem>
                  <MenuItem value="direct">Direct - Straightforward communication</MenuItem>
                  <MenuItem value="gentle">Gentle - Soft and encouraging</MenuItem>
                  <MenuItem value="analytical">Analytical - Data-driven insights</MenuItem>
                  <MenuItem value="empathetic">Empathetic - Emotion-focused</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Session Frequency
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Session Frequency</InputLabel>
                <Select
                  value={coachSetup.sessionFrequency}
                  onChange={(e) => handleSetupChange('sessionFrequency', e.target.value)}
                  label="Session Frequency"
                >
                  <MenuItem value="daily">Daily Check-ins</MenuItem>
                  <MenuItem value="weekly">Weekly Sessions</MenuItem>
                  <MenuItem value="biweekly">Bi-weekly Sessions</MenuItem>
                  <MenuItem value="monthly">Monthly Sessions</MenuItem>
                  <MenuItem value="as-needed">As Needed</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Focus Areas Selection
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Choose the areas you'd like to focus on in your coaching journey:
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {focusAreaOptions.map((area) => (
                  <Chip
                    key={area}
                    label={area}
                    variant={coachSetup.focusAreas.includes(area) ? 'filled' : 'outlined'}
                    onClick={() => handleFocusAreaToggle(area)}
                    color={coachSetup.focusAreas.includes(area) ? 'primary' : 'default'}
                    size="small"
                  />
                ))}
              </Box>

              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Privacy Level
              </Typography>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Privacy Level</InputLabel>
                <Select
                  value={coachSetup.privacyLevel}
                  onChange={(e) => handleSetupChange('privacyLevel', e.target.value)}
                  label="Privacy Level"
                >
                  <MenuItem value="standard">Standard - Balanced privacy</MenuItem>
                  <MenuItem value="high">High - Maximum privacy protection</MenuItem>
                  <MenuItem value="open">Open - Enhanced personalization</MenuItem>
                </Select>
              </FormControl>

              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Advanced Features
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={coachSetup.expertIntegration}
                    onChange={(e) => handleSetupChange('expertIntegration', e.target.checked)}
                  />
                }
                label="Expert Therapist Integration"
                sx={{ display: 'block', mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={coachSetup.crisisSupport}
                    onChange={(e) => handleSetupChange('crisisSupport', e.target.checked)}
                  />
                }
                label="Crisis Support System"
                sx={{ display: 'block', mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={coachSetup.progressTracking}
                    onChange={(e) => handleSetupChange('progressTracking', e.target.checked)}
                  />
                }
                label="Advanced Progress Tracking"
                sx={{ display: 'block' }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
          Setup Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={setupProgress} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {Math.round(setupProgress)}% Complete - {setupProgress === 100 ? 'Ready to start coaching!' : 'Complete setup to activate your AI coach'}
        </Typography>
      </Box>
    </Box>
  );

  const renderAICapabilities = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AIIcon color="primary" />
        AI Capabilities & Expertise
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Your AI coach combines advanced artificial intelligence with proven relationship psychology, 
        offering expert-level guidance with personalized insights and continuous learning.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(aiCapabilities).map(([capability, data]) => (
          <Grid item xs={12} md={6} lg={3} key={capability}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle2" gutterBottom sx={{ textTransform: 'capitalize', fontWeight: 600 }}>
                  {capability.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {data.level}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Expertise Level
                  </Typography>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={data.level} 
                  sx={{ height: 6, borderRadius: 3, mb: 2 }}
                  color={data.level >= 95 ? 'success' : data.level >= 90 ? 'info' : 'warning'}
                />
                
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              AI Coach Expertise Summary
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h5" color="success.main" sx={{ fontWeight: 700 }}>
                    96.5%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average Expertise
                  </Typography>
                  <Chip label="Expert Level" color="success" size="small" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h5" color="info.main" sx={{ fontWeight: 700 }}>
                    24/7
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Availability
                  </Typography>
                  <Chip label="Always Available" color="info" size="small" sx={{ mt: 1 }} />
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                  <Typography variant="h5" color="warning.main" sx={{ fontWeight: 700 }}>
                    1000+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Research Studies
                  </Typography>
                  <Chip label="Evidence-Based" color="warning" size="small" sx={{ mt: 1 }} />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderCoachingFeatures = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SupportIcon color="primary" />
        Coaching Features & Services
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Comprehensive coaching features designed to support every aspect of your relationship journey, 
        from daily guidance to crisis intervention and expert consultation.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(coachingFeatures).map(([feature, data]) => (
          <Grid item xs={12} md={6} lg={4} key={feature}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                    {feature.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Switch
                    checked={data.enabled}
                    onChange={(e) => setCoachingFeatures(prev => ({
                      ...prev,
                      [feature]: { ...prev[feature], enabled: e.target.checked }
                    }))}
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {data.description}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip 
                    label={data.enabled ? 'Active' : 'Inactive'} 
                    color={data.enabled ? 'success' : 'default'}
                    size="small"
                    icon={data.enabled ? <CompleteIcon /> : <AlertIcon />}
                  />
                  {data.enabled && (
                    <Chip 
                      label="Premium" 
                      color="warning" 
                      size="small"
                      icon={<PremiumIcon />}
                    />
                  )}
                </Box>
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
                  Active Features Summary
                </Typography>
                <List>
                  {Object.entries(coachingFeatures)
                    .filter(([, data]) => data.enabled)
                    .map(([feature, data]) => (
                      <ListItem key={feature}>
                        <ListItemIcon><CompleteIcon color="success" /></ListItemIcon>
                        <ListItemText 
                          primary={feature.replace(/([A-Z])/g, ' $1').trim()}
                          secondary={data.description}
                        />
                      </ListItem>
                    ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                  Coaching Readiness
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    AI Coach Score: {aiCoachScore}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={aiCoachScore} 
                    sx={{ height: 8, borderRadius: 4, mb: 1 }}
                    color={scoreInfo.color}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {scoreInfo.description}
                  </Typography>
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" gutterBottom>
                    Setup Progress: {Math.round(setupProgress)}%
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={setupProgress} 
                    sx={{ height: 6, borderRadius: 3 }}
                    color={setupProgress === 100 ? 'success' : 'info'}
                  />
                </Box>
                
                <Box>
                  <Typography variant="body2" gutterBottom>
                    Features Enabled: {Object.values(coachingFeatures).filter(f => f.enabled).length}/{Object.keys(coachingFeatures).length}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={(Object.values(coachingFeatures).filter(f => f.enabled).length / Object.keys(coachingFeatures).length) * 100} 
                    sx={{ height: 6, borderRadius: 3 }}
                    color="warning"
                  />
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
          🚀 AI Relationship Coach Introduction
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Welcome to Phase 7! Meet your revolutionary AI relationship coach powered by advanced psychology, 
          machine learning, and expert human guidance for unprecedented relationship growth and success.
        </Typography>

        {/* AI Coach Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {aiCoachScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    AI Coach Score
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
                        96.5%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        AI Expertise
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Math.round(setupProgress)}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Setup Complete
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(coachingFeatures).filter(f => f.enabled).length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Features Active
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        24/7
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Availability
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
            label="Coach Introduction" 
            icon={<AICoachIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Coaching Setup" 
            icon={<CustomizeIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="AI Capabilities" 
            icon={<AIIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Coaching Features" 
            icon={<SupportIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderCoachIntroduction()}
          {activeTab === 1 && renderCoachingSetup()}
          {activeTab === 2 && renderAICapabilities()}
          {activeTab === 3 && renderCoachingFeatures()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            startIcon={<ContactIcon />}
          >
            Contact Support
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Save Setup
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<LaunchIcon />}
            disabled={setupProgress < 100}
            sx={{ minWidth: 200 }}
          >
            {setupProgress === 100 ? 'Activate AI Coach' : 'Complete Setup First'}
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          AI Coach Readiness
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={aiCoachScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
          color={scoreInfo.color}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>

      {/* Welcome Dialog */}
      <Dialog 
        open={introDialog} 
        onClose={() => setIntroDialog(false)}
        maxWidth="md"
        fullWidth
        TransitionComponent={Fade}
      >
        <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
          <CelebrationIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            🎉 Welcome to Phase 7!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 3 }}>
            You're about to experience the most advanced AI relationship coaching system ever created. 
            Dr. Flourish AI combines cutting-edge artificial intelligence with proven relationship psychology 
            to provide personalized guidance, expert insights, and 24/7 support for your relationship journey.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <AIIcon color="primary" sx={{ fontSize: 30, mb: 1 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  AI-Powered
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Advanced machine learning
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <ResearchIcon color="primary" sx={{ fontSize: 30, mb: 1 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Evidence-Based
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Scientific research backed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <PersonalIcon color="primary" sx={{ fontSize: 30, mb: 1 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  Personalized
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tailored to your needs
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'center', p: 2, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <SupportIcon color="primary" sx={{ fontSize: 30, mb: 1 }} />
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  24/7 Support
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Always available
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button 
            variant="contained" 
            onClick={() => setIntroDialog(false)}
            size="large"
            startIcon={<LaunchIcon />}
          >
            Start Your AI Coaching Journey
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AIRelationshipCoachIntroduction;

