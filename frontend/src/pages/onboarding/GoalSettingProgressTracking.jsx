import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Tabs,
  Tab,
  Chip,
  Alert,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Switch,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  FormGroup,
  Divider,
  Badge,
  Rating,
  CircularProgress
} from '@mui/material';
import {
  TrackChanges as GoalIcon,
  Analytics as ProgressIcon,
  EmojiEvents as AchievementIcon,
  Star as RatingIcon,
  Timer as TimerIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Refresh as RestartIcon,
  CheckCircle as CompleteIcon,
  Cancel as SkipIcon,
  Lightbulb as TipIcon,
  Favorite as HeartIcon,
  Group as CoupleIcon,
  Person as IndividualIcon,
  TrendingUp as TrendIcon,
  TrendingDown as DeclineIcon,
  TrendingFlat as StableIcon,
  Flag as MilestoneIcon,
  LocalFireDepartment as StreakIcon,
  Speed as SpeedIcon,
  Accuracy as AccuracyIcon,
  ThumbUp as PositiveIcon,
  ThumbDown as NegativeIcon,
  Balance as BalanceIcon,
  School as LearnIcon,
  MenuBook as GuideIcon,
  Quiz as QuizIcon,
  Assignment as ExerciseIcon,
  Feedback as FeedbackIcon,
  Insights as InsightsIcon,
  AutoAwesome as AIIcon,
  Celebration as CelebrationIcon,
  QuestionAnswer as DialogueIcon,
  SelfImprovement as GrowthIcon,
  ConnectWithoutContact as BondIcon,
  Sync as SyncIcon,
  Update as UpdateIcon,
  Save as SaveIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Launch as LaunchIcon,
  Lock as PrivacyIcon,
  Security as SafetyIcon,
  CalendarToday as CalendarIcon,
  DateRange as DateIcon,
  Schedule as ScheduleIcon,
  Alarm as ReminderIcon,
  NotificationsActive as NotificationIcon,
  Dashboard as DashboardIcon,
  Assessment as AssessmentIcon,
  Psychology as PsychologyIcon,
  Healing as HealingIcon,
  Transform as TransformIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  MoreVert as MoreIcon
} from '@mui/icons-material';

const GoalSettingProgressTracking = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [goals, setGoals] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [goalDialog, setGoalDialog] = useState(false);
  const [progressData, setProgressData] = useState({
    overallProgress: 68,
    weeklyProgress: 85,
    monthlyProgress: 72,
    streakDays: 12,
    completedGoals: 8,
    activeGoals: 5,
    achievements: []
  });
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'medium',
    targetDate: '',
    milestones: [],
    metrics: {
      frequency: 'daily',
      target: 1,
      unit: 'times'
    }
  });

  // Goal Categories and Templates
  const goalCategories = [
    {
      id: 'communication',
      name: 'Communication',
      icon: DialogueIcon,
      color: 'primary',
      templates: [
        {
          title: 'Daily Check-ins',
          description: 'Have meaningful daily conversations about feelings and experiences',
          defaultTarget: 1,
          unit: 'conversation',
          frequency: 'daily'
        },
        {
          title: 'Active Listening Practice',
          description: 'Practice active listening techniques during conversations',
          defaultTarget: 3,
          unit: 'sessions',
          frequency: 'weekly'
        },
        {
          title: 'Conflict Resolution',
          description: 'Address and resolve conflicts constructively within 24 hours',
          defaultTarget: 100,
          unit: 'percent',
          frequency: 'ongoing'
        }
      ]
    },
    {
      id: 'intimacy',
      name: 'Intimacy & Connection',
      icon: HeartIcon,
      color: 'secondary',
      templates: [
        {
          title: 'Quality Time Together',
          description: 'Spend uninterrupted quality time together without distractions',
          defaultTarget: 2,
          unit: 'hours',
          frequency: 'daily'
        },
        {
          title: 'Physical Affection',
          description: 'Express love through physical touch and affection',
          defaultTarget: 5,
          unit: 'moments',
          frequency: 'daily'
        },
        {
          title: 'Emotional Sharing',
          description: 'Share vulnerable emotions and experiences with each other',
          defaultTarget: 3,
          unit: 'sessions',
          frequency: 'weekly'
        }
      ]
    },
    {
      id: 'growth',
      name: 'Personal Growth',
      icon: GrowthIcon,
      color: 'success',
      templates: [
        {
          title: 'Individual Therapy',
          description: 'Attend individual therapy sessions for personal development',
          defaultTarget: 1,
          unit: 'session',
          frequency: 'weekly'
        },
        {
          title: 'Self-Reflection',
          description: 'Practice daily self-reflection and journaling',
          defaultTarget: 15,
          unit: 'minutes',
          frequency: 'daily'
        },
        {
          title: 'Skill Development',
          description: 'Learn new relationship skills through courses or books',
          defaultTarget: 2,
          unit: 'hours',
          frequency: 'weekly'
        }
      ]
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle & Wellness',
      icon: BalanceIcon,
      color: 'info',
      templates: [
        {
          title: 'Exercise Together',
          description: 'Engage in physical activities and exercise as a couple',
          defaultTarget: 3,
          unit: 'sessions',
          frequency: 'weekly'
        },
        {
          title: 'Healthy Eating',
          description: 'Prepare and enjoy healthy meals together',
          defaultTarget: 5,
          unit: 'meals',
          frequency: 'weekly'
        },
        {
          title: 'Stress Management',
          description: 'Practice stress reduction techniques together',
          defaultTarget: 20,
          unit: 'minutes',
          frequency: 'daily'
        }
      ]
    },
    {
      id: 'future',
      name: 'Future Planning',
      icon: VisibilityIcon,
      color: 'warning',
      templates: [
        {
          title: 'Financial Planning',
          description: 'Work together on financial goals and budgeting',
          defaultTarget: 1,
          unit: 'session',
          frequency: 'weekly'
        },
        {
          title: 'Relationship Milestones',
          description: 'Plan and work towards relationship milestones',
          defaultTarget: 1,
          unit: 'milestone',
          frequency: 'monthly'
        },
        {
          title: 'Dream Sharing',
          description: 'Discuss and plan for shared dreams and aspirations',
          defaultTarget: 2,
          unit: 'conversations',
          frequency: 'monthly'
        }
      ]
    }
  ];

  // Sample goals data
  useEffect(() => {
    const sampleGoals = [
      {
        id: 1,
        title: 'Daily Check-ins',
        description: 'Have meaningful daily conversations about feelings and experiences',
        category: 'communication',
        priority: 'high',
        status: 'active',
        progress: 85,
        targetDate: '2024-03-31',
        createdDate: '2024-01-01',
        metrics: {
          frequency: 'daily',
          target: 1,
          unit: 'conversation',
          completed: 25,
          streak: 12
        },
        milestones: [
          { id: 1, title: 'First week completed', completed: true, date: '2024-01-07' },
          { id: 2, title: 'Two weeks streak', completed: true, date: '2024-01-14' },
          { id: 3, title: 'One month milestone', completed: false, date: '2024-01-31' }
        ]
      },
      {
        id: 2,
        title: 'Quality Time Together',
        description: 'Spend 2 hours of uninterrupted quality time together daily',
        category: 'intimacy',
        priority: 'high',
        status: 'active',
        progress: 72,
        targetDate: '2024-04-15',
        createdDate: '2024-01-15',
        metrics: {
          frequency: 'daily',
          target: 2,
          unit: 'hours',
          completed: 45,
          streak: 8
        },
        milestones: [
          { id: 1, title: 'Establish routine', completed: true, date: '2024-01-22' },
          { id: 2, title: 'Two weeks consistent', completed: true, date: '2024-02-05' },
          { id: 3, title: 'One month milestone', completed: false, date: '2024-02-15' }
        ]
      },
      {
        id: 3,
        title: 'Exercise Together',
        description: 'Engage in physical activities and exercise as a couple 3 times per week',
        category: 'lifestyle',
        priority: 'medium',
        status: 'active',
        progress: 60,
        targetDate: '2024-06-01',
        createdDate: '2024-02-01',
        metrics: {
          frequency: 'weekly',
          target: 3,
          unit: 'sessions',
          completed: 18,
          streak: 4
        },
        milestones: [
          { id: 1, title: 'Find activities we both enjoy', completed: true, date: '2024-02-08' },
          { id: 2, title: 'Consistent for 2 weeks', completed: false, date: '2024-02-22' },
          { id: 3, title: 'One month milestone', completed: false, date: '2024-03-01' }
        ]
      }
    ];
    setGoals(sampleGoals);
  }, []);

  // Goal Management Functions
  const createGoal = useCallback((goalData) => {
    const newGoalObj = {
      id: Date.now(),
      ...goalData,
      status: 'active',
      progress: 0,
      createdDate: new Date().toISOString().split('T')[0],
      metrics: {
        ...goalData.metrics,
        completed: 0,
        streak: 0
      }
    };
    setGoals(prev => [...prev, newGoalObj]);
    setGoalDialog(false);
    setNewGoal({
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      targetDate: '',
      milestones: [],
      metrics: {
        frequency: 'daily',
        target: 1,
        unit: 'times'
      }
    });
  }, []);

  const updateGoalProgress = useCallback((goalId, progressUpdate) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === goalId) {
        const updatedMetrics = {
          ...goal.metrics,
          completed: goal.metrics.completed + 1,
          streak: goal.metrics.streak + 1
        };
        
        // Calculate new progress percentage
        const totalDays = Math.ceil((new Date(goal.targetDate) - new Date(goal.createdDate)) / (1000 * 60 * 60 * 24));
        const expectedCompleted = goal.metrics.frequency === 'daily' ? 
          Math.ceil((new Date() - new Date(goal.createdDate)) / (1000 * 60 * 60 * 24)) * goal.metrics.target :
          Math.ceil((new Date() - new Date(goal.createdDate)) / (1000 * 60 * 60 * 24 * 7)) * goal.metrics.target;
        
        const newProgress = Math.min(100, Math.round((updatedMetrics.completed / expectedCompleted) * 100));
        
        return {
          ...goal,
          progress: newProgress,
          metrics: updatedMetrics
        };
      }
      return goal;
    }));
  }, []);

  const getGoalsByCategory = useCallback((category) => {
    return goals.filter(goal => goal.category === category);
  }, [goals]);

  const getProgressTrend = useCallback((goal) => {
    const expectedProgress = goal.metrics.frequency === 'daily' ? 
      Math.ceil((new Date() - new Date(goal.createdDate)) / (1000 * 60 * 60 * 24)) * goal.metrics.target :
      Math.ceil((new Date() - new Date(goal.createdDate)) / (1000 * 60 * 60 * 24 * 7)) * goal.metrics.target;
    
    if (goal.metrics.completed > expectedProgress * 1.1) return 'ahead';
    if (goal.metrics.completed < expectedProgress * 0.9) return 'behind';
    return 'on-track';
  }, []);

  const renderGoalDashboard = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DashboardIcon color="primary" />
        Goal Dashboard
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Track your relationship goals and monitor progress towards a stronger, healthier partnership. 
        Set SMART goals and celebrate milestones together.
      </Alert>

      {/* Progress Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CircularProgress
                variant="determinate"
                value={progressData.overallProgress}
                size={80}
                thickness={4}
                sx={{ color: 'white', mb: 2 }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {progressData.overallProgress}%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Overall Progress
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: 'success.main', mx: 'auto', mb: 2 }}>
                <StreakIcon sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {progressData.streakDays}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Day Streak
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <CompleteIcon sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {progressData.completedGoals}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Completed Goals
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: 'warning.main', mx: 'auto', mb: 2 }}>
                <GoalIcon sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                {progressData.activeGoals}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Active Goals
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Active Goals List */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Active Goals
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setGoalDialog(true)}
        >
          Add New Goal
        </Button>
      </Box>

      <Grid container spacing={3}>
        {goals.filter(goal => goal.status === 'active').map((goal) => {
          const category = goalCategories.find(cat => cat.id === goal.category);
          const CategoryIcon = category?.icon || GoalIcon;
          const trend = getProgressTrend(goal);
          
          return (
            <Grid item xs={12} md={6} lg={4} key={goal.id}>
              <Card 
                variant="outlined" 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': { boxShadow: 3, transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setSelectedGoal(goal)}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar sx={{ bgcolor: `${category?.color || 'primary'}.main`, width: 40, height: 40 }}>
                        <CategoryIcon fontSize="small" />
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                          {goal.title}
                        </Typography>
                        <Chip 
                          label={goal.priority} 
                          color={goal.priority === 'high' ? 'error' : goal.priority === 'medium' ? 'warning' : 'success'}
                          size="small"
                        />
                      </Box>
                    </Box>
                    <IconButton size="small">
                      <MoreIcon />
                    </IconButton>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {goal.description}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Progress: {goal.progress}%
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        {trend === 'ahead' && <TrendIcon color="success" fontSize="small" />}
                        {trend === 'behind' && <DeclineIcon color="error" fontSize="small" />}
                        {trend === 'on-track' && <StableIcon color="info" fontSize="small" />}
                        <Typography variant="caption" color={
                          trend === 'ahead' ? 'success.main' : 
                          trend === 'behind' ? 'error.main' : 'info.main'
                        }>
                          {trend.replace('-', ' ')}
                        </Typography>
                      </Box>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={goal.progress}
                      sx={{ 
                        height: 8, 
                        borderRadius: 4,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: trend === 'ahead' ? 'success.main' : 
                                         trend === 'behind' ? 'error.main' : 'primary.main'
                        }
                      }}
                    />
                  </Box>
                  
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {goal.metrics.completed}
                        </Typography>
                        <Typography variant="caption">
                          Completed
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {goal.metrics.streak}
                        </Typography>
                        <Typography variant="caption">
                          Streak
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Target: {goal.metrics.target} {goal.metrics.unit} {goal.metrics.frequency}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    startIcon={<CompleteIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      updateGoalProgress(goal.id);
                    }}
                  >
                    Mark Progress
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  const renderProgressAnalytics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ProgressIcon color="primary" />
        Progress Analytics
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Analyze your goal achievement patterns and identify areas for improvement. 
        Use insights to optimize your relationship growth strategy.
      </Alert>

      {/* Progress by Category */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Progress by Category
      </Typography>
      
      <Grid container spacing={3}>
        {goalCategories.map((category) => {
          const categoryGoals = getGoalsByCategory(category.id);
          const avgProgress = categoryGoals.length > 0 ? 
            Math.round(categoryGoals.reduce((sum, goal) => sum + goal.progress, 0) / categoryGoals.length) : 0;
          const CategoryIcon = category.icon;
          
          return (
            <Grid item xs={12} md={6} lg={4} key={category.id}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: `${category.color}.main` }}>
                      <CategoryIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {category.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {categoryGoals.length} active goals
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: `${category.color}.main` }}>
                      {avgProgress}%
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={avgProgress}
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: `${category.color}.main`
                          }
                        }}
                      />
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary">
                    Average progress across all {category.name.toLowerCase()} goals
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Weekly Progress Chart */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Weekly Progress Trend
        </Typography>
        
        <Card variant="outlined">
          <CardContent>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Interactive progress chart would be displayed here using Recharts
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Goal Completion Statistics */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Completion Statistics
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'success.main' }}>
                  89%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  On-time Completion Rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  12.5
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Days to Complete
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'warning.main' }}>
                  95%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Goal Adherence Rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  const renderGoalTemplates = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GuideIcon color="primary" />
        Goal Templates & Suggestions
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Choose from proven relationship goal templates or create custom goals. 
        Each template is based on relationship research and expert recommendations.
      </Alert>

      {goalCategories.map((category) => {
        const CategoryIcon = category.icon;
        return (
          <Box key={category.id} sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CategoryIcon color={category.color} />
              {category.name}
            </Typography>
            
            <Grid container spacing={3}>
              {category.templates.map((template, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {template.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {template.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Chip 
                          label={`${template.defaultTarget} ${template.unit}`} 
                          size="small" 
                          variant="outlined"
                        />
                        <Chip 
                          label={template.frequency} 
                          size="small" 
                          color={category.color}
                        />
                      </Box>
                      
                      <Button
                        variant="contained"
                        color={category.color}
                        fullWidth
                        startIcon={<AddIcon />}
                        onClick={() => {
                          setNewGoal({
                            title: template.title,
                            description: template.description,
                            category: category.id,
                            priority: 'medium',
                            targetDate: '',
                            milestones: [],
                            metrics: {
                              frequency: template.frequency,
                              target: template.defaultTarget,
                              unit: template.unit
                            }
                          });
                          setGoalDialog(true);
                        }}
                      >
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );

  const renderAchievements = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AchievementIcon color="primary" />
        Goal Achievements & Milestones
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Celebrate your goal achievement journey! Unlock badges and milestones 
        as you consistently work towards your relationship goals.
      </Alert>

      {/* Achievement Categories */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Streak Achievements
              </Typography>
              
              <List>
                {[
                  { title: '7-Day Streak', description: 'Maintain goals for 7 consecutive days', achieved: true },
                  { title: '30-Day Streak', description: 'Maintain goals for 30 consecutive days', achieved: false },
                  { title: '100-Day Streak', description: 'Maintain goals for 100 consecutive days', achieved: false }
                ].map((achievement, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: achievement.achieved ? 'success.main' : 'grey.300' }}>
                        <StreakIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={achievement.title}
                      secondary={achievement.description}
                    />
                    {achievement.achieved && (
                      <Chip label="Achieved" color="success" size="small" />
                    )}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Completion Achievements
              </Typography>
              
              <List>
                {[
                  { title: 'First Goal', description: 'Complete your first relationship goal', achieved: true },
                  { title: 'Goal Master', description: 'Complete 10 relationship goals', achieved: true },
                  { title: 'Relationship Expert', description: 'Complete 50 relationship goals', achieved: false }
                ].map((achievement, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: achievement.achieved ? 'primary.main' : 'grey.300' }}>
                        <CompleteIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={achievement.title}
                      secondary={achievement.description}
                    />
                    {achievement.achieved && (
                      <Chip label="Achieved" color="primary" size="small" />
                    )}
                  </ListItem>
                ))}
              </List>
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
          🎯 Goal Setting & Progress Tracking
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Set meaningful relationship goals, track your progress, and celebrate achievements together. 
          Build a stronger partnership through intentional growth and shared objectives.
        </Typography>
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
            label="Goal Dashboard" 
            icon={<DashboardIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Progress Analytics" 
            icon={<ProgressIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Goal Templates" 
            icon={<GuideIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Achievements" 
            icon={<AchievementIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderGoalDashboard()}
          {activeTab === 1 && renderProgressAnalytics()}
          {activeTab === 2 && renderGoalTemplates()}
          {activeTab === 3 && renderAchievements()}
        </Box>
      </Paper>

      {/* Goal Creation Dialog */}
      <Dialog open={goalDialog} onClose={() => setGoalDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>Create New Goal</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Goal Title"
                value={newGoal.title}
                onChange={(e) => setNewGoal(prev => ({ ...prev, title: e.target.value }))}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                value={newGoal.description}
                onChange={(e) => setNewGoal(prev => ({ ...prev, description: e.target.value }))}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={newGoal.category}
                  label="Category"
                  onChange={(e) => setNewGoal(prev => ({ ...prev, category: e.target.value }))}
                >
                  {goalCategories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Priority</InputLabel>
                <Select
                  value={newGoal.priority}
                  label="Priority"
                  onChange={(e) => setNewGoal(prev => ({ ...prev, priority: e.target.value }))}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Target Date"
                InputLabelProps={{ shrink: true }}
                value={newGoal.targetDate}
                onChange={(e) => setNewGoal(prev => ({ ...prev, targetDate: e.target.value }))}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Frequency</InputLabel>
                <Select
                  value={newGoal.metrics.frequency}
                  label="Frequency"
                  onChange={(e) => setNewGoal(prev => ({ 
                    ...prev, 
                    metrics: { ...prev.metrics, frequency: e.target.value }
                  }))}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                  <MenuItem value="ongoing">Ongoing</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Target Amount"
                value={newGoal.metrics.target}
                onChange={(e) => setNewGoal(prev => ({ 
                  ...prev, 
                  metrics: { ...prev.metrics, target: parseInt(e.target.value) }
                }))}
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Unit"
                value={newGoal.metrics.unit}
                onChange={(e) => setNewGoal(prev => ({ 
                  ...prev, 
                  metrics: { ...prev.metrics, unit: e.target.value }
                }))}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setGoalDialog(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            onClick={() => createGoal(newGoal)}
            disabled={!newGoal.title || !newGoal.category}
          >
            Create Goal
          </Button>
        </DialogActions>
      </Dialog>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Goal Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<SettingsIcon />}
          >
            Settings
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large" startIcon={<SaveIcon />}>
            Save Progress
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<AddIcon />}
            onClick={() => setGoalDialog(true)}
            sx={{ minWidth: 200 }}
          >
            Create New Goal
          </Button>
        </Box>
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Goal Achievement Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={progressData.overallProgress} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {progressData.overallProgress}% Overall Progress | {progressData.activeGoals} Active Goals | {progressData.streakDays} Day Streak
        </Typography>
      </Box>
    </Container>
  );
};

export default GoalSettingProgressTracking;

