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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Divider
} from '@mui/material';
import {
  Communication as CommunicationIcon,
  SportsEsports as GameIcon,
  Psychology as SkillIcon,
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
  Group as TeamIcon,
  Person as IndividualIcon,
  Mic as SpeakIcon,
  Hearing as ListenIcon,
  Visibility as ObserveIcon,
  TouchApp as InteractIcon,
  QuestionAnswer as DialogueIcon,
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
  ExpandMore as ExpandMoreIcon,
  Launch as LaunchIcon,
  Save as SaveIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
  Info as InfoIcon
} from '@mui/icons-material';

const AdvancedCommunicationSkillDevelopment = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentGame, setCurrentGame] = useState(null);
  const [gameSession, setGameSession] = useState(null);
  const [playerStats, setPlayerStats] = useState({
    level: 1,
    experience: 0,
    streak: 0,
    totalGamesPlayed: 0,
    averageScore: 0,
    achievements: [],
    skillRatings: {
      activeListening: 65,
      emotionalExpression: 58,
      nonVerbalCommunication: 72,
      conflictResolution: 45,
      empathy: 68,
      clarity: 55
    }
  });
  const [gameResults, setGameResults] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('intermediate');
  const [gameTimer, setGameTimer] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  // Communication Games Database
  const communicationGames = [
    {
      id: 'active-listening-challenge',
      title: 'Active Listening Challenge',
      description: 'Practice focused listening skills with interactive scenarios',
      category: 'listening',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      duration: '10-15 minutes',
      players: 'individual',
      skillsTargeted: ['activeListening', 'empathy'],
      gameType: 'scenario-based',
      icon: ListenIcon,
      color: 'primary',
      scenarios: [
        {
          id: 1,
          speaker: 'Partner',
          emotion: 'frustrated',
          message: "I feel like you never really listen to me when I'm talking about my day. You're always on your phone or thinking about something else.",
          correctResponses: [
            "I hear that you're feeling unheard, and that must be really frustrating. Can you tell me more about when you notice this happening?",
            "You're right, and I'm sorry. I want to be more present when you're sharing with me. What would help you feel more heard?"
          ],
          incorrectResponses: [
            "That's not true, I do listen to you.",
            "You're being too sensitive about this.",
            "I'm busy, can we talk about this later?"
          ],
          tips: [
            "Reflect back what you heard",
            "Validate their emotions",
            "Ask open-ended questions",
            "Put away distractions"
          ]
        },
        {
          id: 2,
          speaker: 'Partner',
          emotion: 'excited',
          message: "I got the promotion! I can't believe it actually happened. I've been working so hard for this and now it's finally paying off!",
          correctResponses: [
            "That's incredible! I can see how excited you are. Tell me everything about how it happened!",
            "I'm so proud of you! Your hard work really paid off. How are you feeling about the new role?"
          ],
          incorrectResponses: [
            "That's nice.",
            "Does this mean you'll be working even more hours?",
            "I hope the extra responsibility won't stress you out."
          ],
          tips: [
            "Match their energy level",
            "Show genuine enthusiasm",
            "Ask for details",
            "Celebrate their success"
          ]
        }
      ]
    },
    {
      id: 'emotion-expression-game',
      title: 'Emotion Expression Mastery',
      description: 'Learn to express emotions clearly and constructively',
      category: 'expression',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      duration: '15-20 minutes',
      players: 'individual',
      skillsTargeted: ['emotionalExpression', 'clarity'],
      gameType: 'practice-based',
      icon: EmotionIcon,
      color: 'secondary',
      exercises: [
        {
          id: 1,
          emotion: 'disappointment',
          situation: 'Your partner forgot your anniversary',
          badExample: "You always forget important things! You don't care about me at all!",
          goodExample: "I feel disappointed that our anniversary was forgotten. This day is really important to me, and I'd love to find a way to celebrate together.",
          framework: "I feel [emotion] when [specific behavior] because [impact]. I need [specific request].",
          practice: true
        },
        {
          id: 2,
          emotion: 'appreciation',
          situation: 'Your partner helped with household chores',
          badExample: "Thanks for finally helping around the house.",
          goodExample: "I really appreciate you taking initiative with the dishes tonight. It made me feel supported and gave me time to relax.",
          framework: "I appreciate [specific action] because [impact]. It makes me feel [positive emotion].",
          practice: true
        }
      ]
    },
    {
      id: 'nonverbal-communication-trainer',
      title: 'Non-Verbal Communication Trainer',
      description: 'Master body language, tone, and facial expressions',
      category: 'nonverbal',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      duration: '12-18 minutes',
      players: 'individual',
      skillsTargeted: ['nonVerbalCommunication', 'empathy'],
      gameType: 'recognition-based',
      icon: GestureIcon,
      color: 'info',
      challenges: [
        {
          id: 1,
          type: 'facial-expression',
          description: 'Identify the emotion being expressed',
          image: '/api/placeholder/300/200',
          options: ['Happy', 'Sad', 'Angry', 'Surprised', 'Disgusted', 'Fearful'],
          correct: 'Sad',
          explanation: 'Notice the downturned mouth, lowered eyebrows, and lack of eye contact - classic signs of sadness.'
        },
        {
          id: 2,
          type: 'body-language',
          description: 'What does this posture communicate?',
          image: '/api/placeholder/300/200',
          options: ['Openness', 'Defensiveness', 'Confidence', 'Nervousness'],
          correct: 'Defensiveness',
          explanation: 'Crossed arms, turned away body, and closed posture indicate defensiveness or discomfort.'
        }
      ]
    },
    {
      id: 'empathy-building-simulator',
      title: 'Empathy Building Simulator',
      description: 'Develop deeper understanding and emotional connection',
      category: 'empathy',
      difficulty: ['beginner', 'intermediate', 'advanced'],
      duration: '20-25 minutes',
      players: 'individual',
      skillsTargeted: ['empathy', 'emotionalExpression'],
      gameType: 'simulation',
      icon: HeartIcon,
      color: 'error',
      simulations: [
        {
          id: 1,
          scenario: 'Partner had a difficult day at work',
          partnerState: {
            stress: 85,
            energy: 20,
            mood: 'overwhelmed',
            needs: ['validation', 'comfort', 'space']
          },
          playerChoices: [
            {
              action: 'Immediately suggest solutions to their problems',
              empathyScore: 2,
              outcome: 'Partner feels unheard and more stressed'
            },
            {
              action: 'Listen without judgment and validate their feelings',
              empathyScore: 9,
              outcome: 'Partner feels understood and supported'
            },
            {
              action: 'Share your own similar experience',
              empathyScore: 5,
              outcome: 'Partner feels somewhat heard but conversation shifts focus'
            }
          ]
        }
      ]
    },
    {
      id: 'communication-style-matcher',
      title: 'Communication Style Matcher',
      description: 'Learn to adapt your communication style to your partner',
      category: 'adaptation',
      difficulty: ['intermediate', 'advanced'],
      duration: '15-20 minutes',
      players: 'individual',
      skillsTargeted: ['clarity', 'empathy', 'activeListening'],
      gameType: 'matching',
      icon: BalanceIcon,
      color: 'success',
      styleProfiles: [
        {
          id: 'analytical',
          name: 'Analytical Communicator',
          traits: ['Detail-oriented', 'Logical', 'Fact-based', 'Systematic'],
          preferredApproach: 'Present information clearly with supporting evidence',
          avoidance: 'Emotional appeals without logical backing',
          example: 'When discussing finances, provide specific numbers and clear reasoning'
        },
        {
          id: 'expressive',
          name: 'Expressive Communicator',
          traits: ['Emotional', 'Enthusiastic', 'Story-telling', 'Relationship-focused'],
          preferredApproach: 'Share feelings and personal experiences',
          avoidance: 'Cold, purely factual communication',
          example: 'When sharing news, include how it makes you feel and why it matters'
        }
      ]
    }
  ];

  // Game Session Management
  const startGame = useCallback((game) => {
    setCurrentGame(game);
    setGameSession({
      id: Date.now(),
      gameId: game.id,
      startTime: new Date(),
      score: 0,
      progress: 0,
      currentScenario: 0,
      responses: [],
      timeSpent: 0
    });
    setGameTimer(0);
    setIsGameActive(true);
  }, []);

  const endGame = useCallback((finalScore) => {
    if (gameSession) {
      const completedSession = {
        ...gameSession,
        endTime: new Date(),
        finalScore,
        completed: true,
        timeSpent: gameTimer
      };
      
      setGameResults(prev => [completedSession, ...prev].slice(0, 10));
      
      // Update player stats
      setPlayerStats(prev => {
        const newStats = { ...prev };
        newStats.totalGamesPlayed += 1;
        newStats.experience += finalScore;
        newStats.averageScore = ((prev.averageScore * (prev.totalGamesPlayed - 1)) + finalScore) / prev.totalGamesPlayed;
        
        // Level up calculation
        const newLevel = Math.floor(newStats.experience / 1000) + 1;
        if (newLevel > prev.level) {
          newStats.level = newLevel;
          // Add achievement for leveling up
          newStats.achievements.push({
            id: `level-${newLevel}`,
            title: `Level ${newLevel} Achieved!`,
            description: `Reached communication skill level ${newLevel}`,
            date: new Date(),
            icon: 'level'
          });
        }
        
        // Update skill ratings based on game performance
        if (currentGame && finalScore > 70) {
          currentGame.skillsTargeted.forEach(skill => {
            newStats.skillRatings[skill] = Math.min(100, newStats.skillRatings[skill] + 2);
          });
        }
        
        return newStats;
      });
    }
    
    setCurrentGame(null);
    setGameSession(null);
    setIsGameActive(false);
    setGameTimer(0);
  }, [gameSession, gameTimer, currentGame]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isGameActive) {
      interval = setInterval(() => {
        setGameTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate skill level
  const getSkillLevel = (rating) => {
    if (rating >= 90) return { level: 'Expert', color: 'success' };
    if (rating >= 75) return { level: 'Advanced', color: 'info' };
    if (rating >= 60) return { level: 'Intermediate', color: 'warning' };
    return { level: 'Beginner', color: 'error' };
  };

  const renderGameCenter = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <GameIcon color="primary" />
        Communication Gaming Center
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Develop your communication skills through interactive games and challenges. 
        Each game targets specific skills and adapts to your progress level.
      </Alert>

      {/* Player Stats Dashboard */}
      <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <CardContent>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 1 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {playerStats.level}
                  </Typography>
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Level {playerStats.level}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Communication Expert
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerStats.experience}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Experience
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerStats.streak}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Day Streak
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerStats.totalGamesPlayed}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Games Played
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {Math.round(playerStats.averageScore)}%
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Avg Score
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {playerStats.achievements.length}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      Achievements
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6} md={2}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {Math.round(Object.values(playerStats.skillRatings).reduce((a, b) => a + b, 0) / Object.keys(playerStats.skillRatings).length)}%
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

      {/* Game Selection */}
      <Grid container spacing={3}>
        {communicationGames.map((game) => {
          const GameIconComponent = game.icon;
          return (
            <Grid item xs={12} md={6} lg={4} key={game.id}>
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
                    <Avatar sx={{ bgcolor: `${game.color}.main` }}>
                      <GameIconComponent />
                    </Avatar>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {game.title}
                      </Typography>
                      <Chip 
                        label={game.category} 
                        color={game.color} 
                        size="small"
                        sx={{ mt: 0.5 }}
                      />
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {game.description}
                  </Typography>
                  
                  <Grid container spacing={1} sx={{ mb: 2 }}>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <TimerIcon fontSize="small" color="action" />
                        <Typography variant="caption" display="block">
                          {game.duration}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                        <TeamIcon fontSize="small" color="action" />
                        <Typography variant="caption" display="block">
                          {game.players}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Skills Targeted:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                    {game.skillsTargeted.map((skill) => (
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
                    color={game.color}
                    fullWidth
                    startIcon={<PlayIcon />}
                    onClick={() => startGame(game)}
                    disabled={isGameActive}
                  >
                    {isGameActive ? 'Game in Progress' : 'Start Game'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );

  const renderSkillAssessment = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SkillIcon color="primary" />
        Skill Assessment & Progress
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Track your communication skill development across key areas. 
        Skills improve through consistent practice and game performance.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(playerStats.skillRatings).map(([skill, rating]) => {
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
                    {rating >= 90 ? 'Exceptional mastery of this skill area' :
                     rating >= 75 ? 'Strong proficiency with room for refinement' :
                     rating >= 60 ? 'Good foundation, continue practicing' :
                     'Focus area for improvement through targeted practice'}
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

      {/* Recent Game Results */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AnalyticsIcon color="primary" />
          Recent Game Results
        </Typography>
        
        {gameResults.length === 0 ? (
          <Card variant="outlined">
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <GameIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No Games Played Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Start playing communication games to see your progress and results here.
              </Typography>
            </CardContent>
          </Card>
        ) : (
          <List>
            {gameResults.slice(0, 5).map((result) => {
              const game = communicationGames.find(g => g.id === result.gameId);
              return (
                <ListItem key={result.id} divider>
                  <ListItemIcon>
                    {game && <game.icon color={game.color} />}
                  </ListItemIcon>
                  <ListItemText
                    primary={game?.title || 'Unknown Game'}
                    secondary={
                      <Box>
                        <Typography variant="body2">
                          Score: {result.finalScore}% | Time: {formatTime(result.timeSpent)} | 
                          Played: {new Date(result.endTime).toLocaleDateString()}
                        </Typography>
                      </Box>
                    }
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip 
                      label={`${result.finalScore}%`} 
                      color={result.finalScore >= 80 ? 'success' : result.finalScore >= 60 ? 'warning' : 'error'}
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

  const renderLearningModules = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LearnIcon color="primary" />
        Learning Modules & Guides
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Comprehensive learning materials to support your communication skill development. 
        Study these modules to enhance your game performance and real-world application.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Active Listening Fundamentals
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Active listening is the foundation of effective communication. It involves fully concentrating, 
                understanding, responding, and remembering what is being said.
              </Typography>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                Key Techniques:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Give full attention - put away distractions" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Use verbal and non-verbal encouragers" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Reflect and paraphrase what you heard" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><CheckCircleIcon color="success" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Ask clarifying questions" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Emotional Expression Framework
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Learn to express emotions constructively using the "I" statement framework 
                for clear, non-threatening communication.
              </Typography>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                Framework: "I feel [emotion] when [behavior] because [impact]"
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><TipIcon color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Use specific emotion words, not 'good' or 'bad'" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><TipIcon color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Describe behavior, not character" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><TipIcon color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Explain the impact on you" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><TipIcon color="warning" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Make a specific request for change" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Non-Verbal Communication Mastery
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Over 55% of communication is non-verbal. Master body language, facial expressions, 
                and tone to enhance your message effectiveness.
              </Typography>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                Key Elements:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><ObserveIcon color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Facial expressions should match your words" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ObserveIcon color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Open body posture shows receptiveness" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ObserveIcon color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Eye contact demonstrates engagement" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><ObserveIcon color="info" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Tone of voice conveys emotion" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Empathy Development Strategies
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" paragraph>
                Empathy is the ability to understand and share the feelings of another. 
                It's crucial for deep emotional connection and effective communication.
              </Typography>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                Development Techniques:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemIcon><HeartIcon color="error" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Practice perspective-taking exercises" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HeartIcon color="error" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Listen for emotions behind words" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HeartIcon color="error" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Validate feelings before problem-solving" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><HeartIcon color="error" fontSize="small" /></ListItemIcon>
                  <ListItemText primary="Share your own vulnerable experiences" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );

  const renderAchievements = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AchievementIcon color="primary" />
        Achievements & Milestones
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Celebrate your communication skill development journey! Unlock achievements 
        by completing games, reaching milestones, and demonstrating consistent progress.
      </Alert>

      {playerStats.achievements.length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <AchievementIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Achievements Yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Start playing games and developing your skills to unlock achievements!
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {playerStats.achievements.map((achievement) => (
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
            { title: 'First Steps', description: 'Complete your first communication game', requirement: 'Play 1 game' },
            { title: 'Dedicated Learner', description: 'Play games for 7 consecutive days', requirement: '7-day streak' },
            { title: 'Communication Expert', description: 'Reach level 5 in communication skills', requirement: 'Level 5' },
            { title: 'Perfect Score', description: 'Achieve 100% score in any game', requirement: '100% score' },
            { title: 'Well Rounded', description: 'Reach intermediate level in all skill areas', requirement: 'All skills 60%+' },
            { title: 'Master Communicator', description: 'Reach expert level in any skill area', requirement: 'Any skill 90%+' }
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
          🎮 Advanced Communication Skill Development
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Master relationship communication through interactive games, skill assessments, and comprehensive learning modules. 
          Develop active listening, emotional expression, empathy, and non-verbal communication skills.
        </Typography>

        {/* Current Game Session */}
        {isGameActive && currentGame && (
          <Alert severity="info" sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography>
                Currently playing: <strong>{currentGame.title}</strong>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="body2">
                  Time: {formatTime(gameTimer)}
                </Typography>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<StopIcon />}
                  onClick={() => endGame(0)}
                >
                  End Game
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
            label="Gaming Center" 
            icon={<GameIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Skill Assessment" 
            icon={<SkillIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Learning Modules" 
            icon={<LearnIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Achievements" 
            icon={<AchievementIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderGameCenter()}
          {activeTab === 1 && renderSkillAssessment()}
          {activeTab === 2 && renderLearningModules()}
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
            Game Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<SettingsIcon />}
          >
            Game Settings
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
            disabled={isGameActive}
            sx={{ minWidth: 200 }}
          >
            {isGameActive ? 'Game in Progress' : 'Start Quick Game'}
          </Button>
        </Box>
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Communication Skill Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={Object.values(playerStats.skillRatings).reduce((a, b) => a + b, 0) / Object.keys(playerStats.skillRatings).length} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          Level {playerStats.level} | {playerStats.experience} XP | {playerStats.totalGamesPlayed} Games Played
        </Typography>
      </Box>
    </Container>
  );
};

export default AdvancedCommunicationSkillDevelopment;

