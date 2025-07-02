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
  Badge
} from '@mui/material';
import {
  Gavel as MediationIcon,
  SportsEsports as GameIcon,
  Psychology as StrategyIcon,
  EmojiEvents as AchievementIcon,
  Star as RatingIcon,
  Timer as TimerIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Refresh as RestartIcon,
  CheckCircle as ResolvedIcon,
  Warning as ConflictIcon,
  Lightbulb as SolutionIcon,
  Favorite as PeaceIcon,
  Group as MediatorIcon,
  Person as IndividualIcon,
  Balance as BalanceIcon,
  Handshake as AgreementIcon,
  Forum as DiscussionIcon,
  RecordVoiceOver as NegotiationIcon,
  Healing as HealingIcon,
  Transform as TransformIcon,
  TrendingUp as ProgressIcon,
  School as LearnIcon,
  MenuBook as GuideIcon,
  Quiz as ScenarioIcon,
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
  ThumbUp as PositiveIcon,
  ThumbDown as NegativeIcon,
  QuestionAnswer as DialogueIcon,
  Mood as EmotionIcon,
  SelfImprovement as GrowthIcon,
  ConnectWithoutContact as BridgeIcon,
  Sync as SyncIcon,
  Update as UpdateIcon,
  Save as SaveIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Launch as LaunchIcon
} from '@mui/icons-material';

const ConflictResolutionMediationTools = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [mediationSession, setMediationSession] = useState(null);
  const [playerProgress, setPlayerProgress] = useState({
    level: 1,
    experience: 0,
    scenariosCompleted: 0,
    successRate: 0,
    averageResolutionTime: 0,
    achievements: [],
    skillRatings: {
      deEscalation: 45,
      activeListening: 52,
      problemSolving: 38,
      empathy: 48,
      negotiation: 35,
      mediation: 42
    }
  });
  const [conflictHistory, setConflictHistory] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');
  const [sessionTimer, setSessionTimer] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);

  // Conflict Resolution Scenarios Database
  const conflictScenarios = [
    {
      id: 'household-chores-dispute',
      title: 'Household Chores Distribution',
      description: 'Navigate disagreements about fair distribution of household responsibilities',
      category: 'domestic',
      difficulty: 'beginner',
      estimatedTime: '15-20 minutes',
      conflictLevel: 'moderate',
      skillsTargeted: ['problemSolving', 'negotiation', 'empathy'],
      icon: BalanceIcon,
      color: 'primary',
      scenario: {
        background: "You and your partner have been arguing about household chores. One person feels they're doing more than their fair share, while the other feels unappreciated for their contributions.",
        positions: {
          person1: {
            name: "Alex",
            perspective: "I feel like I'm doing 70% of the household work. I cook, clean, do laundry, and manage bills. When I ask for help, you either forget or do it halfway.",
            emotions: ['frustrated', 'overwhelmed', 'unappreciated'],
            needs: ['recognition', 'equal partnership', 'reliable help']
          },
          person2: {
            name: "Jordan",
            perspective: "I work longer hours and contribute more financially. When I'm home, I want to relax. I do help when asked, but I shouldn't have to be managed like a child.",
            emotions: ['defensive', 'tired', 'criticized'],
            needs: ['respect for work contribution', 'autonomy', 'downtime']
          }
        },
        challenges: [
          'Different standards of cleanliness',
          'Varying work schedules',
          'Unequal financial contributions',
          'Communication breakdown'
        ],
        resolutionPaths: [
          {
            approach: 'collaborative-planning',
            steps: [
              'Acknowledge both perspectives',
              'List all household tasks',
              'Discuss preferences and capabilities',
              'Create fair distribution system',
              'Establish check-in schedule'
            ],
            successRate: 85,
            timeToResolution: 'medium'
          },
          {
            approach: 'compromise-solution',
            steps: [
              'Identify non-negotiable tasks for each person',
              'Trade off preferred vs. disliked tasks',
              'Set minimum standards both can accept',
              'Create backup plans for busy periods'
            ],
            successRate: 70,
            timeToResolution: 'fast'
          }
        ]
      }
    },
    {
      id: 'financial-disagreement',
      title: 'Financial Priorities Conflict',
      description: 'Resolve disagreements about spending priorities and financial goals',
      category: 'financial',
      difficulty: 'intermediate',
      estimatedTime: '20-25 minutes',
      conflictLevel: 'high',
      skillsTargeted: ['negotiation', 'problemSolving', 'activeListening'],
      icon: BalanceIcon,
      color: 'warning',
      scenario: {
        background: "You and your partner have different ideas about how to spend your tax refund. This disagreement has revealed deeper differences in financial priorities and values.",
        positions: {
          person1: {
            name: "Sam",
            perspective: "We should use the money for a vacation. We work hard and deserve to enjoy life. We can save money later when we earn more.",
            emotions: ['excited', 'frustrated', 'misunderstood'],
            needs: ['enjoyment', 'stress relief', 'shared experiences']
          },
          person2: {
            name: "Taylor",
            perspective: "We should put it toward our emergency fund or retirement. We're behind on our financial goals and need to be responsible adults.",
            emotions: ['anxious', 'responsible', 'unheard'],
            needs: ['security', 'financial stability', 'future planning']
          }
        },
        challenges: [
          'Different risk tolerance',
          'Varying financial backgrounds',
          'Immediate vs. long-term thinking',
          'Value differences about money'
        ],
        resolutionPaths: [
          {
            approach: 'balanced-allocation',
            steps: [
              'Understand underlying values and fears',
              'Research actual financial position',
              'Allocate percentage to both priorities',
              'Set future decision-making framework',
              'Plan smaller compromises for both'
            ],
            successRate: 90,
            timeToResolution: 'medium'
          }
        ]
      }
    },
    {
      id: 'social-time-conflict',
      title: 'Social Time vs. Couple Time',
      description: 'Balance individual social needs with relationship priorities',
      category: 'social',
      difficulty: 'intermediate',
      estimatedTime: '18-22 minutes',
      conflictLevel: 'moderate',
      skillsTargeted: ['empathy', 'negotiation', 'deEscalation'],
      icon: GroupIcon,
      color: 'info',
      scenario: {
        background: "One partner wants to spend more time with friends, while the other feels neglected and wants more couple time together.",
        positions: {
          person1: {
            name: "Casey",
            perspective: "I need time with my friends to maintain those relationships and my individual identity. You're being too clingy and controlling.",
            emotions: ['suffocated', 'defensive', 'torn'],
            needs: ['independence', 'friendship maintenance', 'personal space']
          },
          person2: {
            name: "Riley",
            perspective: "We barely spend quality time together anymore. You prioritize your friends over our relationship and I feel like I'm not important to you.",
            emotions: ['lonely', 'rejected', 'insecure'],
            needs: ['connection', 'priority', 'quality time']
          }
        },
        challenges: [
          'Different social needs',
          'Insecurity and jealousy',
          'Time management',
          'Relationship boundaries'
        ],
        resolutionPaths: [
          {
            approach: 'scheduled-balance',
            steps: [
              'Validate both needs as legitimate',
              'Create weekly schedule with protected time',
              'Include couple friends activities',
              'Establish check-in system',
              'Plan special couple experiences'
            ],
            successRate: 80,
            timeToResolution: 'medium'
          }
        ]
      }
    },
    {
      id: 'family-boundary-conflict',
      title: 'Family Boundary Issues',
      description: 'Navigate conflicts involving extended family boundaries and loyalties',
      category: 'family',
      difficulty: 'advanced',
      estimatedTime: '25-30 minutes',
      conflictLevel: 'high',
      skillsTargeted: ['mediation', 'empathy', 'problemSolving'],
      icon: FamilyIcon,
      color: 'error',
      scenario: {
        background: "Your partner's family is very involved in your relationship decisions, and this is causing tension between you and your partner about boundaries and loyalty.",
        positions: {
          person1: {
            name: "Morgan",
            perspective: "Your family is too involved in our business. They give unsolicited advice and you always take their side. We need boundaries or this won't work.",
            emotions: ['frustrated', 'excluded', 'disrespected'],
            needs: ['respect', 'partnership priority', 'boundaries']
          },
          person2: {
            name: "Avery",
            perspective: "My family loves you and wants to help. They've been there for me my whole life. I can't just cut them off because you're uncomfortable.",
            emotions: ['torn', 'defensive', 'guilty'],
            needs: ['family harmony', 'loyalty', 'support system']
          }
        },
        challenges: [
          'Competing loyalties',
          'Cultural differences',
          'Boundary setting',
          'Family dynamics'
        ],
        resolutionPaths: [
          {
            approach: 'gradual-boundary-setting',
            steps: [
              'Acknowledge the difficulty of the situation',
              'Identify specific problematic behaviors',
              'Agree on relationship priorities',
              'Set graduated boundaries together',
              'Practice unified responses'
            ],
            successRate: 75,
            timeToResolution: 'slow'
          }
        ]
      }
    }
  ];

  // Mediation Tools and Techniques
  const mediationTools = [
    {
      id: 'active-listening-protocol',
      name: 'Active Listening Protocol',
      description: 'Structured approach to ensure both parties feel heard',
      steps: [
        'Each person speaks for 2 minutes uninterrupted',
        'Listener reflects back what they heard',
        'Speaker confirms or clarifies',
        'Switch roles and repeat'
      ],
      effectiveness: 85,
      timeRequired: '10-15 minutes',
      bestFor: ['communication breakdown', 'feeling unheard']
    },
    {
      id: 'emotion-regulation-technique',
      name: 'Emotion Regulation Technique',
      description: 'Cool down heated emotions before problem-solving',
      steps: [
        'Take a 20-minute break if emotions are high',
        'Practice deep breathing or mindfulness',
        'Identify and name your emotions',
        'Return when both feel calm and ready'
      ],
      effectiveness: 90,
      timeRequired: '20-30 minutes',
      bestFor: ['high conflict', 'emotional overwhelm']
    },
    {
      id: 'win-win-brainstorming',
      name: 'Win-Win Brainstorming',
      description: 'Generate creative solutions that meet both parties\' needs',
      steps: [
        'List each person\'s core needs',
        'Brainstorm solutions without judgment',
        'Evaluate options against both sets of needs',
        'Select and refine the best solution'
      ],
      effectiveness: 80,
      timeRequired: '15-25 minutes',
      bestFor: ['resource conflicts', 'competing priorities']
    },
    {
      id: 'perspective-taking-exercise',
      name: 'Perspective-Taking Exercise',
      description: 'Build empathy by understanding the other\'s viewpoint',
      steps: [
        'Each person argues the other\'s position',
        'Identify valid points in the other\'s perspective',
        'Share what you learned about their experience',
        'Find common ground and shared values'
      ],
      effectiveness: 75,
      timeRequired: '15-20 minutes',
      bestFor: ['empathy building', 'perspective differences']
    }
  ];

  // Session Management
  const startMediationSession = useCallback((scenario) => {
    setCurrentScenario(scenario);
    setMediationSession({
      id: Date.now(),
      scenarioId: scenario.id,
      startTime: new Date(),
      currentStep: 0,
      decisions: [],
      score: 0,
      toolsUsed: [],
      resolutionPath: null
    });
    setSessionTimer(0);
    setIsSessionActive(true);
  }, []);

  const endMediationSession = useCallback((finalScore, resolutionAchieved) => {
    if (mediationSession) {
      const completedSession = {
        ...mediationSession,
        endTime: new Date(),
        finalScore,
        resolutionAchieved,
        timeSpent: sessionTimer,
        completed: true
      };
      
      setConflictHistory(prev => [completedSession, ...prev].slice(0, 15));
      
      // Update player progress
      setPlayerProgress(prev => {
        const newProgress = { ...prev };
        newProgress.scenariosCompleted += 1;
        newProgress.experience += finalScore;
        
        // Calculate success rate
        const totalSessions = prev.scenariosCompleted + 1;
        const successfulSessions = conflictHistory.filter(s => s.resolutionAchieved).length + (resolutionAchieved ? 1 : 0);
        newProgress.successRate = Math.round((successfulSessions / totalSessions) * 100);
        
        // Update average resolution time
        const totalTime = conflictHistory.reduce((sum, s) => sum + s.timeSpent, 0) + sessionTimer;
        newProgress.averageResolutionTime = Math.round(totalTime / totalSessions);
        
        // Level up calculation
        const newLevel = Math.floor(newProgress.experience / 800) + 1;
        if (newLevel > prev.level) {
          newProgress.level = newLevel;
          newProgress.achievements.push({
            id: `mediation-level-${newLevel}`,
            title: `Mediation Level ${newLevel}`,
            description: `Advanced to conflict resolution level ${newLevel}`,
            date: new Date(),
            type: 'level'
          });
        }
        
        // Update skill ratings based on performance
        if (currentScenario && finalScore > 70) {
          currentScenario.skillsTargeted.forEach(skill => {
            newProgress.skillRatings[skill] = Math.min(100, newProgress.skillRatings[skill] + 3);
          });
        }
        
        return newProgress;
      });
    }
    
    setCurrentScenario(null);
    setMediationSession(null);
    setIsSessionActive(false);
    setSessionTimer(0);
  }, [mediationSession, sessionTimer, currentScenario, conflictHistory]);

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

  const renderConflictSimulator = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GameIcon color="primary" />
        Conflict Resolution Simulator
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Practice conflict resolution skills through realistic relationship scenarios. 
        Each simulation teaches specific mediation techniques and tracks your progress.
      </Alert>

      {/* Player Progress Dashboard */}
      <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)', color: 'white' }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 1 }}>
                  <MediationIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Level {playerProgress.level}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Conflict Mediator
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
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
                      {playerProgress.scenariosCompleted}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Scenarios
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerProgress.successRate}%
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Success Rate
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {formatTime(playerProgress.averageResolutionTime)}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Avg Time
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
                      Overall Skill
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Scenario Selection */}
      <Grid container spacing={3}>
        {conflictScenarios.map((scenario) => {
          const ScenarioIcon = scenario.icon;
          return (
            <Grid item xs={12} md={6} key={scenario.id}>
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
                    <Avatar sx={{ bgcolor: `${scenario.color}.main` }}>
                      <ScenarioIcon />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {scenario.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mt: 0.5 }}>
                        <Chip 
                          label={scenario.difficulty} 
                          color={scenario.color} 
                          size="small"
                        />
                        <Chip 
                          label={scenario.conflictLevel} 
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {scenario.description}
                  </Typography>
                  
                  <Grid container spacing={1} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <TimerIcon fontSize="small" color="action" />
                        <Typography variant="caption" display="block">
                          {scenario.estimatedTime}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <StrategyIcon fontSize="small" color="action" />
                        <Typography variant="caption" display="block">
                          {scenario.category}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Skills Developed:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {scenario.skillsTargeted.map((skill) => (
                      <Chip 
                        key={skill} 
                        label={skill.replace(/([A-Z])/g, ' $1').trim()} 
                        size="small" 
                        variant="outlined" 
                      />
                    ))}
                  </Box>
                  
                  <Button
                    variant="contained"
                    color={scenario.color}
                    fullWidth
                    startIcon={<PlayIcon />}
                    onClick={() => startMediationSession(scenario)}
                    disabled={isSessionActive}
                  >
                    {isSessionActive ? 'Session Active' : 'Start Scenario'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  const renderMediationTools = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MediatorIcon color="primary" />
        Mediation Tools & Techniques
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Master proven conflict resolution techniques used by professional mediators. 
        Each tool is designed for specific types of conflicts and relationship dynamics.
      </Alert>

      <Grid container spacing={3}>
        {mediationTools.map((tool) => (
          <Grid item xs={12} md={6} key={tool.id}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {tool.name}
                  </Typography>
                  <Chip 
                    label={`${tool.effectiveness}% effective`} 
                    color="success" 
                    size="small"
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {tool.description}
                </Typography>
                
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                  Steps:
                </Typography>
                <List dense>
                  {tool.steps.map((step, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Avatar sx={{ width: 24, height: 24, bgcolor: 'primary.main', fontSize: 12 }}>
                          {index + 1}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
                
                <Divider sx={{ my: 2 }} />
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Time:</strong> {tool.timeRequired}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Best for:</strong> {tool.bestFor.join(', ')}
                    </Typography>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button variant="outlined" size="small" startIcon={<PlayIcon />}>
                    Practice Tool
                  </Button>
                  <Button variant="outlined" size="small" startIcon={<GuideIcon />}>
                    Learn More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Quick Reference Guide */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Quick Reference: When to Use Each Tool
        </Typography>
        
        <Card variant="outlined">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, color: 'error.main' }}>
                  High Emotion Conflicts:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon><ConflictIcon color="error" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Start with Emotion Regulation Technique" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><PeaceIcon color="error" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Follow with Active Listening Protocol" />
                  </ListItem>
                </List>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600, color: 'warning.main' }}>
                  Resource/Priority Conflicts:
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon><SolutionIcon color="warning" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Use Win-Win Brainstorming" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><BalanceIcon color="warning" fontSize="small" /></ListItemIcon>
                    <ListItemText primary="Apply Perspective-Taking Exercise" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderSkillDevelopment = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StrategyIcon color="primary" />
        Skill Development & Progress
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Track your development across key conflict resolution skills. 
        Each skill improves through practice and successful scenario completion.
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
                    {skill === 'deEscalation' ? 'Ability to calm heated situations and reduce tension' :
                     skill === 'activeListening' ? 'Skill in truly hearing and understanding others' :
                     skill === 'problemSolving' ? 'Capacity to find creative solutions to conflicts' :
                     skill === 'empathy' ? 'Understanding and sharing the feelings of others' :
                     skill === 'negotiation' ? 'Finding mutually beneficial agreements' :
                     'Facilitating resolution between conflicting parties'}
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

      {/* Conflict Resolution History */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AnalyticsIcon color="primary" />
          Resolution History
        </Typography>
        
        {conflictHistory.length === 0 ? (
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <MediationIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No Scenarios Completed Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Start practicing conflict resolution scenarios to see your progress here.
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <List>
            {conflictHistory.slice(0, 5).map((session) => {
              const scenario = conflictScenarios.find(s => s.id === session.scenarioId);
              return (
                <ListItem key={session.id} divider>
                  <ListItemIcon>
                    {session.resolutionAchieved ? 
                      <ResolvedIcon color="success" /> : 
                      <ConflictIcon color="warning" />
                    }
                  </ListItemIcon>
                  <ListItemText
                    primary={scenario?.title || 'Unknown Scenario'}
                    secondary={
                      <Box>
                        <Typography variant="body2">
                          Score: {session.finalScore}% | Time: {formatTime(session.timeSpent)} | 
                          Status: {session.resolutionAchieved ? 'Resolved' : 'Unresolved'} |
                          Date: {new Date(session.endTime).toLocaleDateString()}
                        </Typography>
                      </Box>
                    }
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                      label={`${session.finalScore}%`} 
                      color={session.finalScore >= 80 ? 'success' : session.finalScore >= 60 ? 'warning' : 'error'}
                      size="small"
                    />
                  </Box>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    </Box>
  );

  const renderAchievements = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AchievementIcon color="primary" />
        Achievements & Milestones
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Celebrate your conflict resolution mastery! Unlock achievements by completing scenarios, 
        developing skills, and demonstrating consistent progress in mediation abilities.
      </Alert>

      {playerProgress.achievements.length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <AchievementIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Achievements Yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Complete conflict resolution scenarios to unlock achievements!
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
            { title: 'First Resolution', description: 'Successfully resolve your first conflict scenario', requirement: 'Complete 1 scenario' },
            { title: 'Peacemaker', description: 'Achieve 80%+ success rate across 5 scenarios', requirement: '80% success rate' },
            { title: 'Master Mediator', description: 'Reach expert level in any mediation skill', requirement: 'Any skill 85%+' },
            { title: 'Quick Resolver', description: 'Resolve a conflict in under 10 minutes', requirement: 'Sub-10 minute resolution' },
            { title: 'Empathy Expert', description: 'Reach advanced level in empathy skill', requirement: 'Empathy 70%+' },
            { title: 'Conflict Transformer', description: 'Complete all scenario categories', requirement: 'All categories completed' }
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
          ⚖️ Conflict Resolution & Mediation Tools
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Master the art of conflict resolution through interactive scenarios, proven mediation techniques, 
          and skill development exercises. Transform conflicts into opportunities for deeper connection.
        </Typography>

        {/* Current Session Status */}
        {isSessionActive && currentScenario && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>
                Active mediation session: <strong>{currentScenario.title}</strong>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2">
                  Time: {formatTime(sessionTimer)}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<StopIcon />}
                  onClick={() => endMediationSession(0, false)}
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
            label="Conflict Simulator" 
            icon={<GameIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Mediation Tools" 
            icon={<MediatorIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Skill Development" 
            icon={<StrategyIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Achievements" 
            icon={<AchievementIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderConflictSimulator()}
          {activeTab === 1 && renderMediationTools()}
          {activeTab === 2 && renderSkillDevelopment()}
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
            Mediation Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<SettingsIcon />}
          >
            Session Settings
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
            {isSessionActive ? 'Session Active' : 'Quick Practice'}
          </Button>
        </Box>
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Conflict Resolution Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={Object.values(playerProgress.skillRatings).reduce((a, b) => a + b, 0) / Object.keys(playerProgress.skillRatings).length} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          Level {playerProgress.level} | {playerProgress.experience} XP | {playerProgress.successRate}% Success Rate
        </Typography>
      </Box>
    </Container>
  );
};

export default ConflictResolutionMediationTools;

