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
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  FormGroup
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Psychology as CoachingIcon,
  Assignment as ProgramIcon,
  Quiz as AssessmentIcon,
  TrendingUp as ProgressIcon,
  Star as RatingIcon,
  CheckCircle as CompleteIcon,
  Schedule as TimeIcon,
  Person as PersonalIcon,
  People as CoupleIcon,
  Favorite as RelationshipIcon,
  Communication as CommunicationIcon,
  EmojiPeople as SocialIcon,
  SelfImprovement as GrowthIcon,
  Healing as TherapyIcon,
  Support as SupportIcon,
  School as LearningIcon,
  Science as ResearchIcon,
  Lightbulb as InsightIcon,
  Target as GoalIcon,
  Timeline as JourneyIcon,
  Assessment as EvaluationIcon,
  Analytics as AnalyticsIcon,
  Insights as DataIcon,
  AutoAwesome as AIIcon,
  Verified as CertifiedIcon,
  WorkspacePremium as PremiumIcon,
  Diamond as ExcellenceIcon,
  Security as PrivacyIcon,
  Shield as SafetyIcon,
  Lock as SecureIcon,
  Visibility as TransparentIcon,
  Settings as CustomizeIcon,
  Tune as PersonalizeIcon,
  FilterList as FilterIcon,
  Sort as PrioritizeIcon,
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
  Rocket as LaunchIcon,
  FlashOn as QuickIcon,
  Speed as FastIcon,
  Timer as TimerIcon,
  AccessTime as ClockIcon,
  DateRange as CalendarIcon,
  Today as TodayIcon,
  Event as EventIcon,
  Notifications as ReminderIcon,
  Message as MessageIcon,
  Chat as ChatIcon,
  VideoCall as VideoIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Sms as SmsIcon,
  Push as PushIcon,
  Groups as CommunityIcon,
  Family as FamilyIcon,
  HealthAndSafety as WellnessIcon,
  MonitorHeart as HealthIcon,
  FitnessCenter as StrengthIcon,
  Balance as BalanceIcon,
  Harmony as HarmonyIcon,
  Connect as ConnectIcon,
  Link as LinkIcon,
  Transform as TransformIcon,
  Upgrade as UpgradeIcon,
  Bolt as EnergyIcon,
  Zap as PowerIcon,
  ElectricBolt as ElectricIcon
} from '@mui/icons-material';

const PersonalizedCoachingPrograms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [assessmentProgress, setAssessmentProgress] = useState(0);
  const [currentAssessment, setCurrentAssessment] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [programRecommendations, setProgramRecommendations] = useState([]);
  const [personalizedScore, setPersonalizedScore] = useState(0);

  const coachingPrograms = [
    {
      id: 'communication-mastery',
      title: 'Communication Mastery',
      description: 'Master the art of effective relationship communication',
      duration: '8 weeks',
      sessions: 16,
      difficulty: 'Intermediate',
      focus: ['Active Listening', 'Conflict Resolution', 'Emotional Expression', 'Non-Verbal Communication'],
      outcomes: ['Improved dialogue quality', 'Reduced misunderstandings', 'Enhanced emotional connection'],
      rating: 4.9,
      participants: 15847,
      successRate: 94.2,
      aiPersonalization: 96.8,
      expertSupport: true,
      crisisIntervention: true,
      category: 'Communication',
      color: 'primary'
    },
    {
      id: 'emotional-intimacy',
      title: 'Emotional Intimacy Builder',
      description: 'Deepen emotional connection and vulnerability in relationships',
      duration: '10 weeks',
      sessions: 20,
      difficulty: 'Advanced',
      focus: ['Emotional Vulnerability', 'Trust Building', 'Empathy Development', 'Emotional Safety'],
      outcomes: ['Deeper emotional bonds', 'Increased trust', 'Enhanced empathy'],
      rating: 4.8,
      participants: 12456,
      successRate: 91.7,
      aiPersonalization: 95.4,
      expertSupport: true,
      crisisIntervention: true,
      category: 'Intimacy',
      color: 'secondary'
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution Expert',
      description: 'Transform conflicts into opportunities for growth',
      duration: '6 weeks',
      sessions: 12,
      difficulty: 'Intermediate',
      focus: ['Conflict De-escalation', 'Problem-Solving', 'Compromise Strategies', 'Healing After Conflict'],
      outcomes: ['Peaceful conflict resolution', 'Stronger relationship bonds', 'Improved problem-solving'],
      rating: 4.7,
      participants: 18923,
      successRate: 89.3,
      aiPersonalization: 94.1,
      expertSupport: true,
      crisisIntervention: true,
      category: 'Conflict',
      color: 'warning'
    },
    {
      id: 'relationship-foundation',
      title: 'Relationship Foundation',
      description: 'Build strong fundamentals for lasting relationships',
      duration: '12 weeks',
      sessions: 24,
      difficulty: 'Beginner',
      focus: ['Relationship Values', 'Goal Setting', 'Compatibility Assessment', 'Future Planning'],
      outcomes: ['Clear relationship vision', 'Aligned goals', 'Strong foundation'],
      rating: 4.9,
      participants: 23567,
      successRate: 96.8,
      aiPersonalization: 97.2,
      expertSupport: true,
      crisisIntervention: false,
      category: 'Foundation',
      color: 'success'
    },
    {
      id: 'intimacy-enhancement',
      title: 'Intimacy Enhancement',
      description: 'Enhance physical and emotional intimacy',
      duration: '8 weeks',
      sessions: 16,
      difficulty: 'Advanced',
      focus: ['Physical Intimacy', 'Emotional Connection', 'Desire Alignment', 'Intimacy Communication'],
      outcomes: ['Enhanced physical connection', 'Improved intimacy communication', 'Aligned desires'],
      rating: 4.6,
      participants: 9834,
      successRate: 87.9,
      aiPersonalization: 93.7,
      expertSupport: true,
      crisisIntervention: true,
      category: 'Intimacy',
      color: 'error'
    },
    {
      id: 'stress-management',
      title: 'Relationship Stress Management',
      description: 'Manage external stressors affecting your relationship',
      duration: '6 weeks',
      sessions: 12,
      difficulty: 'Intermediate',
      focus: ['Stress Identification', 'Coping Strategies', 'Support Systems', 'Stress Prevention'],
      outcomes: ['Reduced relationship stress', 'Better coping mechanisms', 'Stronger support systems'],
      rating: 4.8,
      participants: 14567,
      successRate: 92.4,
      aiPersonalization: 95.8,
      expertSupport: true,
      crisisIntervention: true,
      category: 'Wellness',
      color: 'info'
    }
  ];

  const assessmentQuestions = [
    {
      id: 1,
      category: 'Communication',
      question: 'How would you rate your current communication with your partner?',
      type: 'rating',
      scale: 5,
      required: true
    },
    {
      id: 2,
      category: 'Communication',
      question: 'What communication challenges do you face most often?',
      type: 'multiple',
      options: [
        'Difficulty expressing emotions',
        'Frequent misunderstandings',
        'Avoiding difficult conversations',
        'Different communication styles',
        'Lack of active listening',
        'Defensive responses'
      ],
      required: true
    },
    {
      id: 3,
      category: 'Intimacy',
      question: 'How satisfied are you with the emotional intimacy in your relationship?',
      type: 'rating',
      scale: 5,
      required: true
    },
    {
      id: 4,
      category: 'Conflict',
      question: 'How do you typically handle conflicts in your relationship?',
      type: 'single',
      options: [
        'Address issues directly and calmly',
        'Avoid conflicts when possible',
        'Get emotional and reactive',
        'Withdraw and shut down',
        'Seek compromise solutions',
        'Let my partner handle it'
      ],
      required: true
    },
    {
      id: 5,
      category: 'Goals',
      question: 'What are your primary relationship goals?',
      type: 'multiple',
      options: [
        'Improve communication',
        'Increase emotional intimacy',
        'Resolve ongoing conflicts',
        'Build stronger foundation',
        'Enhance physical intimacy',
        'Manage external stress',
        'Plan for the future',
        'Develop trust'
      ],
      required: true
    },
    {
      id: 6,
      category: 'Support',
      question: 'How important is professional expert support in your coaching journey?',
      type: 'rating',
      scale: 5,
      required: true
    },
    {
      id: 7,
      category: 'Commitment',
      question: 'How much time can you realistically commit to coaching per week?',
      type: 'single',
      options: [
        '1-2 hours per week',
        '3-4 hours per week',
        '5-6 hours per week',
        '7+ hours per week'
      ],
      required: true
    },
    {
      id: 8,
      category: 'Learning',
      question: 'What learning style works best for you?',
      type: 'single',
      options: [
        'Interactive exercises and activities',
        'Reading and self-reflection',
        'Video content and demonstrations',
        'Group discussions and sharing',
        'One-on-one coaching sessions',
        'Mixed approach'
      ],
      required: true
    }
  ];

  // Calculate personalized score
  useEffect(() => {
    const calculatePersonalizedScore = () => {
      let score = 0;
      
      // Assessment completion (40 points)
      const completedQuestions = Object.keys(assessmentAnswers).length;
      score += (completedQuestions / assessmentQuestions.length) * 40;
      
      // Program selection (30 points)
      if (selectedProgram) score += 30;
      
      // Recommendation quality (20 points)
      if (programRecommendations.length > 0) score += 20;
      
      // Assessment quality (10 points)
      const qualityAnswers = Object.values(assessmentAnswers).filter(answer => 
        answer !== null && answer !== undefined && answer !== ''
      ).length;
      score += (qualityAnswers / assessmentQuestions.length) * 10;
      
      setPersonalizedScore(Math.round(score));
    };

    calculatePersonalizedScore();
  }, [assessmentAnswers, selectedProgram, programRecommendations]);

  // Generate program recommendations based on assessment
  useEffect(() => {
    if (Object.keys(assessmentAnswers).length >= 5) {
      const recommendations = generateRecommendations();
      setProgramRecommendations(recommendations);
    }
  }, [assessmentAnswers]);

  const generateRecommendations = () => {
    const answers = assessmentAnswers;
    const recommendations = [];
    
    // Communication focus
    if (answers[1] <= 3 || (answers[2] && answers[2].length > 2)) {
      recommendations.push({
        ...coachingPrograms.find(p => p.id === 'communication-mastery'),
        matchScore: 95,
        reason: 'Based on your communication challenges and goals'
      });
    }
    
    // Intimacy focus
    if (answers[3] <= 3 || (answers[5] && answers[5].includes('Increase emotional intimacy'))) {
      recommendations.push({
        ...coachingPrograms.find(p => p.id === 'emotional-intimacy'),
        matchScore: 88,
        reason: 'Your intimacy satisfaction indicates this program would be beneficial'
      });
    }
    
    // Conflict resolution
    if (answers[4] === 'Get emotional and reactive' || answers[4] === 'Avoid conflicts when possible') {
      recommendations.push({
        ...coachingPrograms.find(p => p.id === 'conflict-resolution'),
        matchScore: 92,
        reason: 'Your conflict handling style suggests this program would help'
      });
    }
    
    // Foundation building
    if (answers[5] && answers[5].includes('Build stronger foundation')) {
      recommendations.push({
        ...coachingPrograms.find(p => p.id === 'relationship-foundation'),
        matchScore: 90,
        reason: 'Perfect match for your foundation-building goals'
      });
    }
    
    return recommendations.slice(0, 3); // Top 3 recommendations
  };

  const handleAssessmentAnswer = (questionId, answer) => {
    setAssessmentAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const nextAssessmentQuestion = () => {
    if (currentAssessment < assessmentQuestions.length - 1) {
      setCurrentAssessment(prev => prev + 1);
      setAssessmentProgress(((currentAssessment + 1) / assessmentQuestions.length) * 100);
    }
  };

  const previousAssessmentQuestion = () => {
    if (currentAssessment > 0) {
      setCurrentAssessment(prev => prev - 1);
      setAssessmentProgress(((currentAssessment - 1) / assessmentQuestions.length) * 100);
    }
  };

  const getScoreLevel = (score) => {
    if (score >= 90) return { level: 'Excellent', color: 'success', description: 'Highly personalized program ready' };
    if (score >= 80) return { level: 'Good', color: 'info', description: 'Well-matched program available' };
    if (score >= 70) return { level: 'Fair', color: 'warning', description: 'Basic program matching' };
    return { level: 'Incomplete', color: 'error', description: 'Complete assessment for personalization' };
  };

  const scoreInfo = getScoreLevel(personalizedScore);

  const renderProgramOverview = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ProgramIcon color="primary" />
        Available Coaching Programs
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Choose from our comprehensive library of evidence-based coaching programs, each designed by 
        relationship experts and powered by AI personalization for maximum effectiveness.
      </Alert>

      <Grid container spacing={3}>
        {coachingPrograms.map((program) => (
          <Grid item xs={12} md={6} lg={4} key={program.id}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                border: selectedProgram?.id === program.id ? 2 : 1,
                borderColor: selectedProgram?.id === program.id ? `${program.color}.main` : 'divider',
                '&:hover': { boxShadow: 3 }
              }}
              onClick={() => setSelectedProgram(program)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: `${program.color}.main` }}>
                    {program.title}
                  </Typography>
                  <Chip 
                    label={program.category} 
                    color={program.color} 
                    size="small"
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {program.description}
                </Typography>
                
                <Grid container spacing={1} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {program.duration}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Duration
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {program.sessions}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Sessions
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Rating value={program.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="body2" color="text.secondary">
                    {program.rating} ({program.participants.toLocaleString()} participants)
                  </Typography>
                </Box>
                
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                  Focus Areas:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                  {program.focus.slice(0, 3).map((focus) => (
                    <Chip key={focus} label={focus} size="small" variant="outlined" />
                  ))}
                  {program.focus.length > 3 && (
                    <Chip label={`+${program.focus.length - 3} more`} size="small" variant="outlined" />
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {program.expertSupport && (
                      <Tooltip title="Expert Support Available">
                        <CertifiedIcon color="primary" fontSize="small" />
                      </Tooltip>
                    )}
                    {program.crisisIntervention && (
                      <Tooltip title="Crisis Intervention">
                        <SupportIcon color="secondary" fontSize="small" />
                      </Tooltip>
                    )}
                    <Tooltip title="AI Personalization">
                      <AIIcon color="info" fontSize="small" />
                    </Tooltip>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                    {program.successRate}% Success Rate
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedProgram && (
        <Box sx={{ mt: 3 }}>
          <Card variant="outlined" sx={{ border: 2, borderColor: `${selectedProgram.color}.main` }}>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: `${selectedProgram.color}.main` }}>
                Selected Program: {selectedProgram.title}
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Program Outcomes:
                  </Typography>
                  <List dense>
                    {selectedProgram.outcomes.map((outcome, index) => (
                      <ListItem key={index}>
                        <ListItemIcon><CompleteIcon color="success" fontSize="small" /></ListItemIcon>
                        <ListItemText primary={outcome} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Program Features:
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon><AIIcon color="primary" fontSize="small" /></ListItemIcon>
                      <ListItemText primary={`${selectedProgram.aiPersonalization}% AI Personalization`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CertifiedIcon color="primary" fontSize="small" /></ListItemIcon>
                      <ListItemText primary={selectedProgram.expertSupport ? 'Expert Support Included' : 'Self-Guided Program'} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><SupportIcon color="secondary" fontSize="small" /></ListItemIcon>
                      <ListItemText primary={selectedProgram.crisisIntervention ? 'Crisis Support Available' : 'Standard Support'} />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );

  const renderAssessmentTool = () => {
    const currentQuestion = assessmentQuestions[currentAssessment];
    
    return (
      <Box>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AssessmentIcon color="primary" />
          Relationship Assessment
        </Typography>
        
        <Alert severity="info" sx={{ mb: 3 }}>
          Complete this comprehensive assessment to receive personalized coaching program recommendations 
          tailored to your specific relationship needs and goals.
        </Alert>

        <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Question {currentAssessment + 1} of {assessmentQuestions.length}
              </Typography>
              <Chip 
                label={currentQuestion.category} 
                color="primary" 
                size="small"
              />
            </Box>
            
            <LinearProgress 
              variant="determinate" 
              value={((currentAssessment + 1) / assessmentQuestions.length) * 100} 
              sx={{ height: 8, borderRadius: 4, mb: 3 }}
            />
            
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              {currentQuestion.question}
            </Typography>
            
            {currentQuestion.type === 'rating' && (
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Rating
                  value={assessmentAnswers[currentQuestion.id] || 0}
                  onChange={(e, value) => handleAssessmentAnswer(currentQuestion.id, value)}
                  size="large"
                  max={currentQuestion.scale}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  1 = Very Poor, {currentQuestion.scale} = Excellent
                </Typography>
              </Box>
            )}
            
            {currentQuestion.type === 'single' && (
              <FormControl component="fieldset" sx={{ width: '100%', mb: 3 }}>
                <RadioGroup
                  value={assessmentAnswers[currentQuestion.id] || ''}
                  onChange={(e) => handleAssessmentAnswer(currentQuestion.id, e.target.value)}
                >
                  {currentQuestion.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            )}
            
            {currentQuestion.type === 'multiple' && (
              <FormGroup sx={{ mb: 3 }}>
                {currentQuestion.options.map((option) => (
                  <FormControlLabel
                    key={option}
                    control={
                      <Checkbox
                        checked={(assessmentAnswers[currentQuestion.id] || []).includes(option)}
                        onChange={(e) => {
                          const currentAnswers = assessmentAnswers[currentQuestion.id] || [];
                          const newAnswers = e.target.checked
                            ? [...currentAnswers, option]
                            : currentAnswers.filter(a => a !== option);
                          handleAssessmentAnswer(currentQuestion.id, newAnswers);
                        }}
                      />
                    }
                    label={option}
                  />
                ))}
              </FormGroup>
            )}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button
                variant="outlined"
                onClick={previousAssessmentQuestion}
                disabled={currentAssessment === 0}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={nextAssessmentQuestion}
                disabled={
                  currentAssessment === assessmentQuestions.length - 1 ||
                  !assessmentAnswers[currentQuestion.id]
                }
              >
                {currentAssessment === assessmentQuestions.length - 1 ? 'Complete' : 'Next'}
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
            Assessment Progress
          </Typography>
          <LinearProgress 
            variant="determinate" 
            value={(Object.keys(assessmentAnswers).length / assessmentQuestions.length) * 100} 
            sx={{ height: 8, borderRadius: 4, mb: 1 }}
          />
          <Typography variant="body2" color="text.secondary">
            {Object.keys(assessmentAnswers).length} of {assessmentQuestions.length} questions completed
          </Typography>
        </Box>
      </Box>
    );
  };

  const renderRecommendations = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AIIcon color="primary" />
        AI-Powered Recommendations
      </Typography>
      
      {programRecommendations.length === 0 ? (
        <Alert severity="warning" sx={{ mb: 3 }}>
          Complete the assessment to receive personalized program recommendations based on your 
          relationship needs, goals, and preferences.
        </Alert>
      ) : (
        <Alert severity="success" sx={{ mb: 3 }}>
          Based on your assessment, Dr. Love has identified the most suitable coaching programs 
          for your relationship journey. These recommendations are personalized to your specific needs.
        </Alert>
      )}

      {programRecommendations.length > 0 && (
        <Grid container spacing={3}>
          {programRecommendations.map((program, index) => (
            <Grid item xs={12} key={program.id}>
              <Card variant="outlined" sx={{ border: 2, borderColor: 'success.main' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar sx={{ bgcolor: 'success.main' }}>
                        {index + 1}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {program.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {program.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'success.main' }}>
                        {program.matchScore}%
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Match Score
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Alert severity="info" sx={{ mb: 2 }}>
                    <strong>Why this program:</strong> {program.reason}
                  </Alert>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                        Program Details:
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon><TimeIcon fontSize="small" /></ListItemIcon>
                          <ListItemText primary={`${program.duration} (${program.sessions} sessions)`} />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><RatingIcon fontSize="small" /></ListItemIcon>
                          <ListItemText primary={`${program.rating}/5 rating (${program.participants.toLocaleString()} participants)`} />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CompleteIcon fontSize="small" /></ListItemIcon>
                          <ListItemText primary={`${program.successRate}% success rate`} />
                        </ListItem>
                      </List>
                    </Grid>
                    
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                        Focus Areas:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {program.focus.map((focus) => (
                          <Chip key={focus} label={focus} size="small" color="primary" variant="outlined" />
                        ))}
                      </Box>
                      
                      <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        startIcon={<LaunchIcon />}
                        onClick={() => setSelectedProgram(program)}
                      >
                        Select This Program
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );

  const renderPersonalizationDashboard = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <PersonalizeIcon color="primary" />
        Personalization Dashboard
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Track your personalization progress and see how Dr. Love is customizing your 
        coaching experience based on your assessment and preferences.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Personalization Score
              </Typography>
              
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: `${scoreInfo.color}.main` }}>
                  {personalizedScore}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {scoreInfo.description}
                </Typography>
                <Chip 
                  label={scoreInfo.level} 
                  color={scoreInfo.color} 
                  sx={{ mt: 1 }}
                />
              </Box>
              
              <LinearProgress 
                variant="determinate" 
                value={personalizedScore} 
                sx={{ height: 8, borderRadius: 4, mb: 2 }}
                color={scoreInfo.color}
              />
              
              <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                Complete assessment and select program for full personalization
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Personalization Breakdown
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemIcon>
                    <AssessmentIcon color={Object.keys(assessmentAnswers).length === assessmentQuestions.length ? 'success' : 'warning'} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Assessment Completion" 
                    secondary={`${Object.keys(assessmentAnswers).length}/${assessmentQuestions.length} questions`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ProgramIcon color={selectedProgram ? 'success' : 'warning'} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Program Selection" 
                    secondary={selectedProgram ? selectedProgram.title : 'No program selected'}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AIIcon color={programRecommendations.length > 0 ? 'success' : 'warning'} />
                  </ListItemIcon>
                  <ListItemText 
                    primary="AI Recommendations" 
                    secondary={`${programRecommendations.length} personalized recommendations`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Next Steps for Full Personalization
              </Typography>
              
              <Stepper orientation="vertical">
                <Step active={Object.keys(assessmentAnswers).length < assessmentQuestions.length}>
                  <StepLabel>Complete Relationship Assessment</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Answer all {assessmentQuestions.length} questions to enable AI personalization
                    </Typography>
                  </StepContent>
                </Step>
                <Step active={Object.keys(assessmentAnswers).length === assessmentQuestions.length && !selectedProgram}>
                  <StepLabel>Review AI Recommendations</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Explore personalized program recommendations from Dr. Love
                    </Typography>
                  </StepContent>
                </Step>
                <Step active={selectedProgram && Object.keys(assessmentAnswers).length === assessmentQuestions.length}>
                  <StepLabel>Select Your Coaching Program</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Choose the program that best matches your relationship goals
                    </Typography>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>Begin Personalized Coaching Journey</StepLabel>
                  <StepContent>
                    <Typography variant="body2">
                      Start your customized coaching experience with Dr. Love
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          🎯 Personalized Coaching Programs & Assessments
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Discover your perfect coaching program through our comprehensive assessment and AI-powered 
          recommendations. Dr. Love will create a personalized coaching journey tailored to your unique relationship needs.
        </Typography>

        {/* Personalization Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {personalizedScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Personalization Score
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
                        {Object.keys(assessmentAnswers).length}/{assessmentQuestions.length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Assessment Complete
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {programRecommendations.length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        AI Recommendations
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {coachingPrograms.length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Available Programs
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {selectedProgram ? '✓' : '○'}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Program Selected
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
            label="Program Overview" 
            icon={<ProgramIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Assessment Tool" 
            icon={<AssessmentIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="AI Recommendations" 
            icon={<AIIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Personalization" 
            icon={<PersonalizeIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderProgramOverview()}
          {activeTab === 1 && renderAssessmentTool()}
          {activeTab === 2 && renderRecommendations()}
          {activeTab === 3 && renderPersonalizationDashboard()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Program Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<ContactIcon />}
          >
            Expert Consultation
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Save Progress
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<LaunchIcon />}
            disabled={!selectedProgram || Object.keys(assessmentAnswers).length < assessmentQuestions.length}
            sx={{ minWidth: 200 }}
          >
            {selectedProgram && Object.keys(assessmentAnswers).length === assessmentQuestions.length 
              ? 'Start Coaching Program' 
              : 'Complete Assessment First'}
          </Button>
        </Box>
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Personalization Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={personalizedScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
          color={scoreInfo.color}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default PersonalizedCoachingPrograms;

