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
  Rating
} from '@mui/material';
import {
  Favorite as IntimacyIcon,
  SportsEsports as GameIcon,
  Psychology as ConnectionIcon,
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
  FavoriteBorder as HeartIcon,
  Group as CoupleIcon,
  Person as IndividualIcon,
  TouchApp as TouchIcon,
  Visibility as EyeContactIcon,
  RecordVoiceOver as VoiceIcon,
  Gesture as GestureIcon,
  Mood as EmotionIcon,
  ThumbUp as PositiveIcon,
  ThumbDown as NegativeIcon,
  Balance as BalanceIcon,
  TrendingUp as ProgressIcon,
  School as LearnIcon,
  MenuBook as GuideIcon,
  Quiz as QuizIcon,
  Assignment as ExerciseIcon,
  Feedback as FeedbackIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  AutoAwesome as AIIcon,
  Celebration as CelebrationIcon,
  Flag as MilestoneIcon,
  LocalFireDepartment as StreakIcon,
  Speed as SpeedIcon,
  Accuracy as AccuracyIcon,
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
  Spa as RelaxIcon,
  Nature as NatureIcon,
  Restaurant as DiningIcon,
  MusicNote as MusicIcon,
  Brush as CreativeIcon,
  FitnessCenter as ActivityIcon,
  Home as HomeIcon,
  Flight as TravelIcon,
  LocalFlorist as RomanceIcon,
  Cake as CelebrationIcon2,
  Coffee as CasualIcon,
  Sunset as SunsetIcon,
  Pets as PetIcon,
  Book as StoryIcon,
  Camera as MemoryIcon,
  Games as FunIcon,
  Healing as HealingIcon,
  Transform as TransformIcon
} from '@mui/icons-material';

const IntimacyConnectionEnhancement = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(null);
  const [intimacySession, setIntimacySession] = useState(null);
  const [playerProgress, setPlayerProgress] = useState({
    level: 1,
    experience: 0,
    activitiesCompleted: 0,
    connectionScore: 0,
    intimacyStreak: 0,
    achievements: [],
    skillRatings: {
      emotionalIntimacy: 58,
      physicalConnection: 45,
      intellectualBonding: 62,
      spiritualConnection: 38,
      playfulIntimacy: 55,
      romanticExpression: 48
    }
  });
  const [activityHistory, setActivityHistory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sessionTimer, setSessionTimer] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);

  // Intimacy Enhancement Activities Database
  const intimacyActivities = [
    {
      id: 'emotional-sharing-game',
      title: 'Emotional Sharing Circle',
      description: 'Deepen emotional intimacy through structured sharing exercises',
      category: 'emotional',
      difficulty: 'beginner',
      duration: '20-30 minutes',
      intimacyType: 'emotional',
      skillsTargeted: ['emotionalIntimacy', 'intellectualBonding'],
      icon: EmotionIcon,
      color: 'primary',
      activities: [
        {
          id: 1,
          name: 'Gratitude Exchange',
          description: 'Share three things you appreciate about each other',
          instructions: [
            'Sit facing each other in a comfortable space',
            'Take turns sharing three specific things you appreciate',
            'Focus on character traits, not just actions',
            'Listen without interrupting or responding immediately',
            'End with a meaningful hug or touch'
          ],
          timeRequired: '10-15 minutes',
          intimacyBoost: 15,
          connectionPoints: 25
        },
        {
          id: 2,
          name: 'Vulnerability Practice',
          description: 'Share something you\'ve never told your partner',
          instructions: [
            'Create a safe, judgment-free environment',
            'Share something personal but not overwhelming',
            'Practice active listening and validation',
            'Respond with empathy and appreciation',
            'Thank each other for the trust shared'
          ],
          timeRequired: '15-20 minutes',
          intimacyBoost: 25,
          connectionPoints: 40
        },
        {
          id: 3,
          name: 'Dream Sharing',
          description: 'Explore hopes, dreams, and future aspirations together',
          instructions: [
            'Share your biggest dreams for the future',
            'Discuss how you can support each other\'s goals',
            'Explore shared dreams and visions',
            'Create action steps for mutual support',
            'Celebrate each other\'s ambitions'
          ],
          timeRequired: '20-25 minutes',
          intimacyBoost: 20,
          connectionPoints: 35
        }
      ]
    },
    {
      id: 'physical-connection-builder',
      title: 'Physical Connection Builder',
      description: 'Enhance physical intimacy through non-sexual touch and presence',
      category: 'physical',
      difficulty: 'beginner',
      duration: '15-25 minutes',
      intimacyType: 'physical',
      skillsTargeted: ['physicalConnection', 'emotionalIntimacy'],
      icon: TouchIcon,
      color: 'secondary',
      activities: [
        {
          id: 1,
          name: 'Mindful Touch Exercise',
          description: 'Practice intentional, caring touch without sexual intent',
          instructions: [
            'Sit comfortably facing each other',
            'Take turns giving 5-minute hand/arm massages',
            'Focus entirely on the sensation of giving and receiving',
            'Maintain eye contact when comfortable',
            'Express appreciation for the care received'
          ],
          timeRequired: '15-20 minutes',
          intimacyBoost: 20,
          connectionPoints: 30
        },
        {
          id: 2,
          name: 'Synchronized Breathing',
          description: 'Connect through shared breath and presence',
          instructions: [
            'Sit or lie down facing each other',
            'Begin breathing naturally, then sync your rhythms',
            'Maintain gentle eye contact',
            'Focus on the shared experience of breathing',
            'Notice the sense of connection and calm'
          ],
          timeRequired: '10-15 minutes',
          intimacyBoost: 15,
          connectionPoints: 25
        },
        {
          id: 3,
          name: 'Cuddling Meditation',
          description: 'Practice mindful cuddling with full presence',
          instructions: [
            'Find a comfortable cuddling position',
            'Focus on the warmth and comfort of physical closeness',
            'Practice gratitude for your partner\'s presence',
            'Avoid distractions like phones or TV',
            'Enjoy 15-20 minutes of pure connection'
          ],
          timeRequired: '15-20 minutes',
          intimacyBoost: 18,
          connectionPoints: 28
        }
      ]
    },
    {
      id: 'intellectual-bonding-challenges',
      title: 'Intellectual Bonding Challenges',
      description: 'Strengthen mental connection through shared learning and discussion',
      category: 'intellectual',
      difficulty: 'intermediate',
      duration: '25-35 minutes',
      intimacyType: 'intellectual',
      skillsTargeted: ['intellectualBonding', 'emotionalIntimacy'],
      icon: ConnectionIcon,
      color: 'info',
      activities: [
        {
          id: 1,
          name: 'Philosophy Café',
          description: 'Explore deep questions about life, values, and meaning',
          instructions: [
            'Choose a thought-provoking question together',
            'Share your perspectives without trying to convince',
            'Ask follow-up questions to understand deeper',
            'Explore how your views complement each other',
            'Appreciate the complexity of each other\'s thinking'
          ],
          timeRequired: '20-30 minutes',
          intimacyBoost: 22,
          connectionPoints: 35
        },
        {
          id: 2,
          name: 'Learning Adventure',
          description: 'Discover something new together through shared exploration',
          instructions: [
            'Choose a topic neither of you knows well',
            'Research and learn together for 15 minutes',
            'Share what you found most interesting',
            'Discuss how this new knowledge affects your perspectives',
            'Plan how to explore this topic further together'
          ],
          timeRequired: '25-30 minutes',
          intimacyBoost: 18,
          connectionPoints: 30
        },
        {
          id: 3,
          name: 'Memory Lane Journey',
          description: 'Explore your relationship history and growth together',
          instructions: [
            'Share your favorite memories from different relationship stages',
            'Discuss how you\'ve both grown and changed',
            'Identify patterns and themes in your journey',
            'Celebrate the challenges you\'ve overcome together',
            'Envision your continued growth and evolution'
          ],
          timeRequired: '25-35 minutes',
          intimacyBoost: 25,
          connectionPoints: 40
        }
      ]
    },
    {
      id: 'playful-intimacy-games',
      title: 'Playful Intimacy Games',
      description: 'Build connection through fun, lighthearted activities and games',
      category: 'playful',
      difficulty: 'beginner',
      duration: '15-30 minutes',
      intimacyType: 'playful',
      skillsTargeted: ['playfulIntimacy', 'emotionalIntimacy'],
      icon: FunIcon,
      color: 'success',
      activities: [
        {
          id: 1,
          name: 'Compliment Battle',
          description: 'Playfully compete to give the most creative compliments',
          instructions: [
            'Take turns giving increasingly creative compliments',
            'Focus on unique qualities and specific observations',
            'Be playful and humorous while staying genuine',
            'Keep going until you both run out of ideas',
            'End with appreciation for all the kind words shared'
          ],
          timeRequired: '10-15 minutes',
          intimacyBoost: 12,
          connectionPoints: 20
        },
        {
          id: 2,
          name: 'Silly Dance Party',
          description: 'Let loose and be playful together through movement',
          instructions: [
            'Put on music that makes you both happy',
            'Dance without worrying about looking good',
            'Try to make each other laugh with silly moves',
            'Take turns leading and following',
            'Celebrate the joy of being silly together'
          ],
          timeRequired: '15-20 minutes',
          intimacyBoost: 15,
          connectionPoints: 25
        },
        {
          id: 3,
          name: 'Story Building Game',
          description: 'Create a fun story together, taking turns adding sentences',
          instructions: [
            'Start with "Once upon a time..." and take turns',
            'Each person adds one sentence to continue the story',
            'Be creative, funny, and spontaneous',
            'Include both of you as characters in the story',
            'End with a satisfying conclusion you both create'
          ],
          timeRequired: '15-25 minutes',
          intimacyBoost: 14,
          connectionPoints: 22
        }
      ]
    },
    {
      id: 'romantic-expression-workshop',
      title: 'Romantic Expression Workshop',
      description: 'Enhance romantic connection through creative expression and gestures',
      category: 'romantic',
      difficulty: 'intermediate',
      duration: '20-40 minutes',
      intimacyType: 'romantic',
      skillsTargeted: ['romanticExpression', 'emotionalIntimacy'],
      icon: RomanceIcon,
      color: 'error',
      activities: [
        {
          id: 1,
          name: 'Love Letter Exchange',
          description: 'Write heartfelt letters expressing your love and appreciation',
          instructions: [
            'Spend 10 minutes writing a letter to your partner',
            'Focus on specific qualities you love about them',
            'Include memories that make you smile',
            'Express hopes for your future together',
            'Read letters aloud to each other'
          ],
          timeRequired: '20-25 minutes',
          intimacyBoost: 28,
          connectionPoints: 45
        },
        {
          id: 2,
          name: 'Romantic Gesture Planning',
          description: 'Plan surprise romantic gestures for each other',
          instructions: [
            'Brainstorm small romantic gestures you could do',
            'Consider your partner\'s love language and preferences',
            'Plan one gesture to do this week',
            'Share your plans and excitement with each other',
            'Commit to following through with your gesture'
          ],
          timeRequired: '15-20 minutes',
          intimacyBoost: 20,
          connectionPoints: 32
        },
        {
          id: 3,
          name: 'Appreciation Ritual',
          description: 'Create a special ritual for expressing ongoing appreciation',
          instructions: [
            'Design a weekly or daily appreciation ritual together',
            'Include specific words, actions, or gestures',
            'Make it unique to your relationship',
            'Practice your new ritual together',
            'Commit to maintaining this practice'
          ],
          timeRequired: '20-30 minutes',
          intimacyBoost: 25,
          connectionPoints: 38
        }
      ]
    },
    {
      id: 'spiritual-connection-journey',
      title: 'Spiritual Connection Journey',
      description: 'Explore deeper meaning and spiritual connection together',
      category: 'spiritual',
      difficulty: 'advanced',
      duration: '30-45 minutes',
      intimacyType: 'spiritual',
      skillsTargeted: ['spiritualConnection', 'intellectualBonding'],
      icon: HealingIcon,
      color: 'warning',
      activities: [
        {
          id: 1,
          name: 'Values Exploration',
          description: 'Discover and discuss your core values and beliefs',
          instructions: [
            'Each person identifies their top 5 core values',
            'Share why these values are important to you',
            'Discuss how your values align and complement',
            'Explore how to honor both sets of values',
            'Create shared values for your relationship'
          ],
          timeRequired: '25-35 minutes',
          intimacyBoost: 30,
          connectionPoints: 50
        },
        {
          id: 2,
          name: 'Gratitude Meditation',
          description: 'Practice shared gratitude and mindfulness',
          instructions: [
            'Sit quietly together in a peaceful space',
            'Spend 5 minutes in silent gratitude meditation',
            'Share what you\'re grateful for in your relationship',
            'Express gratitude for your partner\'s presence',
            'End with a moment of shared silence and connection'
          ],
          timeRequired: '15-20 minutes',
          intimacyBoost: 22,
          connectionPoints: 35
        },
        {
          id: 3,
          name: 'Purpose Partnership',
          description: 'Explore how your relationship serves a greater purpose',
          instructions: [
            'Discuss your individual life purposes and missions',
            'Explore how your relationship supports these purposes',
            'Identify ways you can serve others together',
            'Create a shared mission or purpose statement',
            'Plan concrete actions to live this purpose'
          ],
          timeRequired: '30-40 minutes',
          intimacyBoost: 35,
          connectionPoints: 55
        }
      ]
    }
  ];

  // Connection Building Challenges
  const connectionChallenges = [
    {
      id: 'daily-connection-ritual',
      title: '7-Day Connection Challenge',
      description: 'Build a daily intimacy practice over one week',
      duration: '7 days',
      difficulty: 'beginner',
      requirements: ['10 minutes daily', 'consistent practice', 'mutual commitment'],
      rewards: {
        experience: 200,
        intimacyBoost: 50,
        achievement: 'Connection Streak Master'
      }
    },
    {
      id: 'intimacy-exploration-month',
      title: '30-Day Intimacy Exploration',
      description: 'Explore different types of intimacy over 30 days',
      duration: '30 days',
      difficulty: 'intermediate',
      requirements: ['daily activities', 'variety across categories', 'reflection journal'],
      rewards: {
        experience: 800,
        intimacyBoost: 150,
        achievement: 'Intimacy Explorer'
      }
    },
    {
      id: 'deep-connection-intensive',
      title: 'Deep Connection Intensive',
      description: 'Intensive weekend focused on deepening all forms of intimacy',
      duration: '2 days',
      difficulty: 'advanced',
      requirements: ['dedicated time', 'emotional readiness', 'open communication'],
      rewards: {
        experience: 500,
        intimacyBoost: 100,
        achievement: 'Deep Connection Master'
      }
    }
  ];

  // Session Management
  const startIntimacySession = useCallback((activity) => {
    setCurrentActivity(activity);
    setIntimacySession({
      id: Date.now(),
      activityId: activity.id,
      startTime: new Date(),
      currentStep: 0,
      completedActivities: [],
      intimacyGained: 0,
      connectionPoints: 0
    });
    setSessionTimer(0);
    setIsSessionActive(true);
  }, []);

  const endIntimacySession = useCallback((intimacyGained, connectionPoints) => {
    if (intimacySession) {
      const completedSession = {
        ...intimacySession,
        endTime: new Date(),
        intimacyGained,
        connectionPoints,
        timeSpent: sessionTimer,
        completed: true
      };
      
      setActivityHistory(prev => [completedSession, ...prev].slice(0, 20));
      
      // Update player progress
      setPlayerProgress(prev => {
        const newProgress = { ...prev };
        newProgress.activitiesCompleted += 1;
        newProgress.experience += connectionPoints;
        newProgress.connectionScore += intimacyGained;
        
        // Update intimacy streak
        const today = new Date().toDateString();
        const lastActivity = activityHistory[0];
        if (lastActivity && new Date(lastActivity.endTime).toDateString() === today) {
          newProgress.intimacyStreak += 1;
        } else {
          newProgress.intimacyStreak = 1;
        }
        
        // Level up calculation
        const newLevel = Math.floor(newProgress.experience / 1000) + 1;
        if (newLevel > prev.level) {
          newProgress.level = newLevel;
          newProgress.achievements.push({
            id: `intimacy-level-${newLevel}`,
            title: `Intimacy Level ${newLevel}`,
            description: `Advanced to intimacy mastery level ${newLevel}`,
            date: new Date(),
            type: 'level'
          });
        }
        
        // Update skill ratings based on activity
        if (currentActivity) {
          currentActivity.skillsTargeted.forEach(skill => {
            newProgress.skillRatings[skill] = Math.min(100, newProgress.skillRatings[skill] + 2);
          });
        }
        
        // Streak achievements
        if (newProgress.intimacyStreak === 7) {
          newProgress.achievements.push({
            id: 'week-streak',
            title: 'Week of Connection',
            description: 'Maintained intimacy practice for 7 consecutive days',
            date: new Date(),
            type: 'streak'
          });
        }
        
        return newProgress;
      });
    }
    
    setCurrentActivity(null);
    setIntimacySession(null);
    setIsSessionActive(false);
    setSessionTimer(0);
  }, [intimacySession, sessionTimer, currentActivity, activityHistory]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get skill level
  const getSkillLevel = (rating) => {
    if (rating >= 85) return { level: 'Expert', color: 'success' };
    if (rating >= 70) return { level: 'Advanced', color: 'info' };
    if (rating >= 55) return { level: 'Intermediate', color: 'warning' };
    return { level: 'Beginner', color: 'error' };
  };

  // Filter activities by category
  const filteredActivities = useMemo(() => {
    if (selectedCategory === 'all') return intimacyActivities;
    return intimacyActivities.filter(activity => activity.category === selectedCategory);
  }, [selectedCategory]);

  const renderIntimacyGames = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GameIcon color="primary" />
        Intimacy Enhancement Games
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Strengthen your emotional, physical, intellectual, and spiritual connection through 
        guided activities designed to deepen intimacy and enhance your bond.
      </Alert>

      {/* Player Progress Dashboard */}
      <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)', color: 'white' }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 1 }}>
                  <IntimacyIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Level {playerProgress.level}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Intimacy Expert
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerProgress.connectionScore}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Connection
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerProgress.intimacyStreak}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Day Streak
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerProgress.activitiesCompleted}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Activities
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerProgress.experience}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerProgress.achievements.length}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Achievements
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {Math.round(Object.values(playerProgress.skillRatings).reduce((a, b) => a + b, 0) / Object.keys(playerProgress.skillRatings).length)}%
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Overall
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Box sx={{ mb: 3 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="emotional">Emotional Intimacy</MenuItem>
            <MenuItem value="physical">Physical Connection</MenuItem>
            <MenuItem value="intellectual">Intellectual Bonding</MenuItem>
            <MenuItem value="playful">Playful Intimacy</MenuItem>
            <MenuItem value="romantic">Romantic Expression</MenuItem>
            <MenuItem value="spiritual">Spiritual Connection</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Activity Selection */}
      <Grid container spacing={3}>
        {filteredActivities.map((activity) => {
          const ActivityIcon = activity.icon;
          return (
            <Grid item xs={12} md={6} key={activity.id}>
              <Card 
                variant="outlined" 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  '&:hover': { boxShadow: 3, transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: `${activity.color}.main` }}>
                      <ActivityIcon />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {activity.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                        <Chip 
                          label={activity.category} 
                          color={activity.color} 
                          size="small"
                        />
                        <Chip 
                          label={activity.difficulty} 
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {activity.description}
                  </Typography>
                  
                  <Grid container spacing={1} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <TimerIcon fontSize="small" color="action" />
                        <Typography variant="caption" display="block">
                          {activity.duration}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <IntimacyIcon fontSize="small" color="action" />
                        <Typography variant="caption" display="block">
                          {activity.intimacyType}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Skills Enhanced:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {activity.skillsTargeted.map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill.replace(/([A-Z])/g, ' $1').trim()} 
                        size="small" 
                        variant="outlined" 
                      />
                    ))}
                  </Box>
                  
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Activities: {activity.activities.length}
                  </Typography>
                  
                  <Button
                    variant="contained"
                    color={activity.color}
                    fullWidth
                    startIcon={<PlayIcon />}
                    onClick={() => startIntimacySession(activity)}
                    disabled={isSessionActive}
                  >
                    {isSessionActive ? 'Session Active' : 'Start Activities'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  const renderSkillDevelopment = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ConnectionIcon color="primary" />
        Intimacy Skill Development
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Track your growth across different dimensions of intimacy. Each skill area 
        contributes to a deeper, more fulfilling connection with your partner.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(playerProgress.skillRatings).map(([skill, rating]) => {
          const skillInfo = getSkillLevel(rating);
          return (
            <Grid item xs={12} md={6} key={skill}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {skill.replace(/([A-Z])/g, ' $1').trim()}
                    </Typography>
                    <Chip 
                      label={skillInfo.level} 
                      color={skillInfo.color} 
                      size="small"
                    />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, color: `${skillInfo.color}.main` }}>
                      {rating}%
                    </Typography>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={rating}
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: `${skillInfo.color}.main`
                          }
                        }}
                      />
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {skill === 'emotionalIntimacy' ? 'Sharing feelings, vulnerabilities, and emotional support' :
                     skill === 'physicalConnection' ? 'Non-sexual touch, presence, and physical comfort' :
                     skill === 'intellectualBonding' ? 'Sharing ideas, learning together, and mental stimulation' :
                     skill === 'spiritualConnection' ? 'Shared values, meaning, and transcendent experiences' :
                     skill === 'playfulIntimacy' ? 'Fun, humor, and lighthearted connection' :
                     'Romantic gestures, expressions of love, and courtship'}
                  </Typography>
                  
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<ExerciseIcon />}
                    fullWidth
                  >
                    Practice {skill.replace(/([A-Z])/g, ' $1').trim()}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Connection Challenges */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Connection Building Challenges
        </Typography>
        
        <Grid container spacing={3}>
          {connectionChallenges.map((challenge) => (
            <Grid item xs={12} md={4} key={challenge.id}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {challenge.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip label={challenge.duration} size="small" />
                    <Chip label={challenge.difficulty} color="primary" size="small" />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {challenge.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Requirements:
                  </Typography>
                  <List dense>
                    {challenge.requirements.map((req, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={req} />
                      </ListItem>
                    ))}
                  </List>
                  
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Rewards:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    <Chip label={`${challenge.rewards.experience} XP`} size="small" variant="outlined" />
                    <Chip label={`+${challenge.rewards.intimacyBoost} Intimacy`} size="small" variant="outlined" />
                  </Box>
                  
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<PlayIcon />}
                  >
                    Start Challenge
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  const renderActivityHistory = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AnalyticsIcon color="primary" />
        Activity History & Progress
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Review your intimacy journey and track the growth in your connection. 
        Each activity contributes to your overall relationship satisfaction and bond strength.
      </Alert>

      {activityHistory.length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <IntimacyIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Activities Completed Yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Start your intimacy journey by completing activities together!
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <List>
          {activityHistory.slice(0, 10).map((session) => {
            const activity = intimacyActivities.find(a => a.id === session.activityId);
            return (
              <ListItem key={session.id} divider>
                <ListItemIcon>
                  {activity && <activity.icon color={activity.color} />}
                </ListItemIcon>
                <ListItemText
                  primary={activity?.title || 'Unknown Activity'}
                  secondary={
                    <Box>
                      <Typography variant="body2">
                        Intimacy Gained: +{session.intimacyGained} | Connection Points: +{session.connectionPoints} | 
                        Time: {formatTime(session.timeSpent)} | 
                        Date: {new Date(session.endTime).toLocaleDateString()}
                      </Typography>
                    </Box>
                  }
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip 
                    label={`+${session.intimacyGained}`} 
                    color="success"
                    size="small"
                  />
                  <Rating value={5} size="small" readOnly />
                </Box>
              </ListItem>
            );
          })}
        </List>
      )}

      {/* Progress Statistics */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Progress Statistics
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  {playerProgress.activitiesCompleted}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Activities Completed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                  {playerProgress.connectionScore}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Connection Score
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                  {playerProgress.intimacyStreak}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Current Streak (Days)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                  {Math.round(Object.values(playerProgress.skillRatings).reduce((a, b) => a + b, 0) / Object.keys(playerProgress.skillRatings).length)}%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Overall Intimacy Level
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  const renderAchievements = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AchievementIcon color="primary" />
        Intimacy Achievements & Milestones
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Celebrate your intimacy journey! Unlock achievements by completing activities, 
        maintaining streaks, and reaching new levels of connection with your partner.
      </Alert>

      {playerProgress.achievements.length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <AchievementIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Achievements Yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Start your intimacy journey to unlock achievements!
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {playerProgress.achievements.map((achievement) => (
            <Grid item xs={12} md={6} lg={4} key={achievement.id}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Avatar sx={{ bgcolor: 'success.main' }}>
                      <AchievementIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(achievement.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2">
                    {achievement.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Available Achievements */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Available Achievements
        </Typography>
        
        <Grid container spacing={2}>
          {[
            { title: 'First Connection', description: 'Complete your first intimacy activity', requirement: 'Complete 1 activity' },
            { title: 'Week of Love', description: 'Maintain a 7-day intimacy streak', requirement: '7-day streak' },
            { title: 'Intimacy Explorer', description: 'Try activities from all 6 categories', requirement: 'All categories' },
            { title: 'Deep Connection', description: 'Reach expert level in any intimacy skill', requirement: 'Any skill 85%+' },
            { title: 'Romantic Master', description: 'Reach advanced level in romantic expression', requirement: 'Romance 70%+' },
            { title: 'Spiritual Bond', description: 'Complete 5 spiritual connection activities', requirement: '5 spiritual activities' }
          ].map((achievement, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card variant="outlined" sx={{ opacity: 0.7 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'grey.300' }}>
                      <AchievementIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {achievement.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {achievement.description}
                      </Typography>
                      <Chip 
                        label={achievement.requirement} 
                        size="small" 
                        variant="outlined"
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          💕 Intimacy & Connection Enhancement
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Deepen your emotional, physical, intellectual, and spiritual connection through guided activities, 
          games, and exercises designed to enhance intimacy and strengthen your bond.
        </Typography>

        {/* Current Session Status */}
        {isSessionActive && currentActivity && (
          <Alert severity="info" sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>
                Active intimacy session: <strong>{currentActivity.title}</strong>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2">
                  Time: {formatTime(sessionTimer)}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<StopIcon />}
                  onClick={() => endIntimacySession(0, 0)}
                >
                  End Session
                </Button>
              </Box>
            </Box>
          </Alert>
        )}
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
            label="Intimacy Games" 
            icon={<GameIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Skill Development" 
            icon={<ConnectionIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Activity History" 
            icon={<AnalyticsIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Achievements" 
            icon={<AchievementIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderIntimacyGames()}
          {activeTab === 1 && renderSkillDevelopment()}
          {activeTab === 2 && renderActivityHistory()}
          {activeTab === 3 && renderAchievements()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Intimacy Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<SettingsIcon />}
          >
            Privacy Settings
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large" startIcon={<SaveIcon />}>
            Save Progress
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<PlayIcon />}
            disabled={isSessionActive}
            sx={{ minWidth: 200 }}
          >
            {isSessionActive ? 'Session Active' : 'Quick Connect'}
          </Button>
        </Box>
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Intimacy Development Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={Object.values(playerProgress.skillRatings).reduce((a, b) => a + b, 0) / Object.keys(playerProgress.skillRatings).length} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          Level {playerProgress.level} | {playerProgress.connectionScore} Connection Score | {playerProgress.intimacyStreak} Day Streak
        </Typography>
      </Box>
    </Container>
  );
};

export default IntimacyConnectionEnhancement;

