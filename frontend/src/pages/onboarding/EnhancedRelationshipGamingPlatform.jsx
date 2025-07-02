import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Chip,
  Tab,
  Tabs,
  LinearProgress,
  Avatar,
  Badge,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
  Divider,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  Psychology,
  Favorite,
  Star,
  Lock,
  PlayArrow,
  ShoppingCart,
  Diamond,
  EmojiEvents,
  Timeline,
  Insights,
  Security,
  Explore,
  Memory,
  Science,
  ExpandMore,
  CheckCircle,
  Schedule,
  Group,
  TrendingUp,
  AutoAwesome,
  Lightbulb,
  Transform,
  Visibility,
  FlashOn,
  Healing,
  AccessTime,
  Psychology as PsychologyIcon
} from '@mui/icons-material';

const EnhancedRelationshipGamingPlatform = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameDialogOpen, setGameDialogOpen] = useState(false);
  const [userProgress, setUserProgress] = useState({
    gamesCompleted: 3,
    totalXP: 2847,
    relationshipLevel: 'Gold',
    currentStreak: 12
  });

  // Comprehensive game data with pricing tiers
  const games = [
    // FREE TIER (1 Game)
    {
      id: 'gratitude-alchemist',
      title: 'Gratitude Alchemist\'s Laboratory',
      subtitle: 'Transform appreciation into relationship gold',
      tier: 'free',
      price: 0,
      difficulty: 'Beginner-Intermediate',
      duration: '45-60 minutes',
      skills: ['Appreciation', 'Positive Reinforcement', 'Mindfulness'],
      description: 'Master the ancient art of gratitude alchemy! Transform everyday moments into powerful relationship connections through scientific appreciation techniques.',
      features: [
        'Full game access with Dr. Love coaching',
        'Basic progress tracking and achievements',
        'Community leaderboards and challenges',
        'Gratitude pattern analysis and insights'
      ],
      icon: <Science />,
      color: '#4CAF50',
      completed: true,
      rating: 4.8,
      players: '45,000+',
      framework: 'Positive Psychology & Behavioral Science'
    },

    // PREMIUM TIER (2 Games - Subscription Included)
    {
      id: 'heart-heist',
      title: 'The Heart Heist Investigation',
      subtitle: 'Crack the code of love languages',
      tier: 'premium',
      price: 'included',
      difficulty: 'Intermediate',
      duration: '60-75 minutes',
      skills: ['Empathy', 'Understanding Preferences', 'Compromise'],
      description: 'Become master detectives of love! Solve intricate mysteries while discovering your partner\'s deepest desires and love language secrets.',
      features: [
        'Advanced Dr. Love AI coaching and insights',
        'Comprehensive relationship analytics',
        'Unlimited replays with adaptive scenarios',
        'Priority support and expert guidance'
      ],
      icon: <Favorite />,
      color: '#E91E63',
      completed: true,
      rating: 4.9,
      players: '38,000+',
      framework: 'Love Languages & Attachment Theory'
    },
    {
      id: 'communication-codex',
      title: 'Communication Codex Mystery',
      subtitle: 'Decode the language of love',
      tier: 'premium',
      price: 'included',
      difficulty: 'Advanced',
      duration: '75-90 minutes',
      skills: ['Active Listening', 'Emotional Validation', 'Conflict Prevention'],
      description: 'Unravel the mysteries of perfect communication! Master the ancient codex that transforms any conversation into deeper connection.',
      features: [
        'Real-time communication analysis and feedback',
        'Advanced linguistic AI coaching',
        'Communication style adaptation training',
        'Professional-grade conversation insights'
      ],
      icon: <Psychology />,
      color: '#9C27B0',
      completed: false,
      rating: 4.9,
      players: '32,000+',
      framework: 'Emotional Intelligence & Linguistics'
    },

    // PURCHASABLE TIER (7 Games at $4.99 Each)
    {
      id: 'secret-agent-academy',
      title: 'Secret Agent Academy',
      subtitle: 'Master attachment and security',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Advanced',
      duration: '90-120 minutes',
      skills: ['Trust Building', 'Vulnerability', 'Security Creation'],
      description: 'Train as elite relationship agents! Navigate complex attachment challenges and build unbreakable emotional security.',
      features: [
        'Advanced attachment analysis and coaching',
        'Personalized security building protocols',
        'Multiple difficulty levels and scenarios',
        'Deep psychological pattern recognition'
      ],
      icon: <Security />,
      color: '#FF5722',
      completed: true,
      rating: 4.7,
      players: '28,000+',
      framework: 'Attachment Theory & Security Science'
    },
    {
      id: 'values-constellation',
      title: 'Values Constellation Quest',
      subtitle: 'Align your relationship stars',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Expert',
      duration: '120-150 minutes',
      skills: ['Long-term Planning', 'Goal Alignment', 'Shared Vision'],
      description: 'Navigate the cosmic realm of values! Create a shared constellation that guides your relationship toward its highest potential.',
      features: [
        'Advanced values analysis and mapping',
        'Life design and strategic planning tools',
        'Future visualization and goal setting',
        'Expert-level relationship architecture'
      ],
      icon: <Star />,
      color: '#FF9800',
      completed: false,
      rating: 4.8,
      players: '22,000+',
      framework: 'Values Science & Life Design'
    },
    {
      id: 'empathy-engine',
      title: 'The Empathy Engine Escape Room',
      subtitle: 'Master perspective-taking mastery',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Advanced',
      duration: '75-90 minutes',
      skills: ['Perspective-Taking', 'Emotional Intelligence', 'Deep Understanding'],
      description: 'Escape through empathy! Navigate mind-bending challenges that require you to truly see through your partner\'s eyes.',
      features: [
        'Revolutionary perspective-taking training',
        'Emotional archaeology and pattern discovery',
        'Real-time empathy coaching and feedback',
        'Advanced emotional intelligence development'
      ],
      icon: <Visibility />,
      color: '#2196F3',
      completed: false,
      rating: 4.9,
      players: '18,000+',
      framework: 'Emotional Intelligence & Empathy Science'
    },
    {
      id: 'conflict-alchemy',
      title: 'Conflict Alchemy: Transformation Chamber',
      subtitle: 'Transform conflict into connection',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Advanced',
      duration: '90-105 minutes',
      skills: ['Conflict Resolution', 'Pattern Interruption', 'Connection Building'],
      description: 'Master the ancient art of conflict alchemy! Transform your biggest relationship challenges into your greatest connection opportunities.',
      features: [
        'Advanced conflict transformation techniques',
        'Gottman Method integration and coaching',
        'Pattern interruption and repair mastery',
        'Real-time conflict alchemy guidance'
      ],
      icon: <Transform />,
      color: '#673AB7',
      completed: false,
      rating: 4.8,
      players: '15,000+',
      framework: 'Gottman Method & Conflict Science'
    },
    {
      id: 'intimacy-paradox',
      title: 'The Intimacy Paradox: Vulnerability Vault',
      subtitle: 'Balance safety and openness',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Expert',
      duration: '105-120 minutes',
      skills: ['Emotional Courage', 'Vulnerability', 'Intimacy Architecture'],
      description: 'Navigate the ultimate intimacy challenge! Master the delicate balance between emotional safety and vulnerable connection.',
      features: [
        'Advanced vulnerability calibration training',
        'Emotional courage development protocols',
        'Intimacy architecture and design tools',
        'Professional-grade emotional safety creation'
      ],
      icon: <Healing />,
      color: '#E91E63',
      completed: false,
      rating: 4.9,
      players: '12,000+',
      framework: 'Vulnerability Research & Intimacy Science'
    },
    {
      id: 'memory-palace',
      title: 'Memory Palace of Love: Time Travel',
      subtitle: 'Heal the past, create the future',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Expert',
      duration: '120-150 minutes',
      skills: ['Pattern Recognition', 'Emotional Healing', 'Relationship Wisdom'],
      description: 'Journey through time to transform your relationship story! Heal old wounds and create new possibilities through conscious memory work.',
      features: [
        'Advanced relationship timeline analysis',
        'Emotional healing and integration protocols',
        'Pattern recognition and evolution training',
        'Narrative therapy and memory reconsolidation'
      ],
      icon: <Memory />,
      color: '#795548',
      completed: false,
      rating: 4.7,
      players: '9,000+',
      framework: 'Narrative Therapy & Memory Science'
    },
    {
      id: 'parallel-universe',
      title: 'Parallel Universe Relationship Lab',
      subtitle: 'Explore infinite relationship possibilities',
      tier: 'purchasable',
      price: 4.99,
      difficulty: 'Expert',
      duration: '135-180 minutes',
      skills: ['Choice Awareness', 'Conscious Creation', 'Reality Design'],
      description: 'The ultimate mind-bending experience! Explore alternative relationship realities and learn to consciously create your ideal partnership.',
      features: [
        'Revolutionary choice consciousness training',
        'Alternative reality exploration and analysis',
        'Conscious relationship creation protocols',
        'Advanced reality design and manifestation'
      ],
      icon: <Explore />,
      color: '#607D8B',
      completed: false,
      rating: 4.9,
      players: '6,000+',
      framework: 'Choice Theory & Consciousness Science'
    }
  ];

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleGameSelect = (game) => {
    setSelectedGame(game);
    setGameDialogOpen(true);
  };

  const handleGameStart = (game) => {
    // Game start logic would go here
    console.log(`Starting game: ${game.title}`);
    setGameDialogOpen(false);
  };

  const handleGamePurchase = (game) => {
    // Purchase logic would go here
    console.log(`Purchasing game: ${game.title} for $${game.price}`);
  };

  const getTierGames = (tier) => {
    return games.filter(game => game.tier === tier);
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'free': return '#4CAF50';
      case 'premium': return '#9C27B0';
      case 'purchasable': return '#FF5722';
      default: return '#757575';
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case 'free': return <Star />;
      case 'premium': return <Diamond />;
      case 'purchasable': return <ShoppingCart />;
      default: return <PlayArrow />;
    }
  };

  const GameCard = ({ game }) => (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        },
        border: `2px solid ${game.color}20`,
        position: 'relative'
      }}
      onClick={() => handleGameSelect(game)}
    >
      {game.completed && (
        <CheckCircle 
          sx={{ 
            position: 'absolute', 
            top: 8, 
            right: 8, 
            color: '#4CAF50',
            zIndex: 1
          }} 
        />
      )}
      
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ bgcolor: game.color, mr: 2, width: 48, height: 48 }}>
            {game.icon}
          </Avatar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              {game.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game.subtitle}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Chip 
            label={game.tier === 'free' ? 'FREE' : game.tier === 'premium' ? 'PREMIUM' : `$${game.price}`}
            icon={getTierIcon(game.tier)}
            sx={{ 
              bgcolor: getTierColor(game.tier),
              color: 'white',
              fontWeight: 'bold',
              mr: 1,
              mb: 1
            }}
          />
          <Chip 
            label={game.difficulty}
            variant="outlined"
            size="small"
            sx={{ mr: 1, mb: 1 }}
          />
          <Chip 
            label={game.duration}
            variant="outlined"
            size="small"
            icon={<AccessTime />}
            sx={{ mb: 1 }}
          />
        </Box>

        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
          {game.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold' }}>
            Skills Developed:
          </Typography>
          <Box sx={{ mt: 0.5 }}>
            {game.skills.map((skill, index) => (
              <Chip 
                key={index}
                label={skill}
                size="small"
                variant="outlined"
                sx={{ mr: 0.5, mb: 0.5, fontSize: '0.7rem' }}
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Star sx={{ color: '#FFD700', mr: 0.5, fontSize: '1rem' }} />
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
              {game.rating}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
              ({game.players})
            </Typography>
          </Box>
          <Chip 
            label={game.framework}
            size="small"
            sx={{ 
              bgcolor: `${game.color}15`,
              color: game.color,
              fontSize: '0.65rem'
            }}
          />
        </Box>
      </CardContent>

      <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
        <Button
          fullWidth
          variant={game.tier === 'free' || game.tier === 'premium' ? 'contained' : 'outlined'}
          startIcon={game.completed ? <PlayArrow /> : game.tier === 'purchasable' ? <ShoppingCart /> : <PlayArrow />}
          sx={{ 
            bgcolor: game.tier === 'free' || game.tier === 'premium' ? game.color : 'transparent',
            borderColor: game.color,
            color: game.tier === 'free' || game.tier === 'premium' ? 'white' : game.color,
            '&:hover': {
              bgcolor: game.tier === 'free' || game.tier === 'premium' ? `${game.color}DD` : `${game.color}15`
            }
          }}
        >
          {game.completed ? 'Play Again' : 
           game.tier === 'free' ? 'Play Free' :
           game.tier === 'premium' ? 'Play Now' : 
           `Purchase $${game.price}`}
        </Button>
      </CardActions>
    </Card>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: '#1976d2' }}>
          🎮 Enhanced Relationship Gaming Platform
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          10 Mind-Bending Games for Revolutionary Relationship Growth
        </Typography>
        
        {/* User Progress Dashboard */}
        <Card sx={{ maxWidth: 800, mx: 'auto', mb: 4, bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar sx={{ bgcolor: '#FFD700', width: 64, height: 64, mx: 'auto', mb: 1 }}>
                    <EmojiEvents sx={{ fontSize: '2rem' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {userProgress.relationshipLevel} Level
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Relationship Tier
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
                        {userProgress.gamesCompleted}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Games Completed
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FF9800' }}>
                        {userProgress.totalXP.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total XP
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#E91E63' }}>
                        {userProgress.currentStreak}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Day Streak
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#9C27B0' }}>
                        7/10
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Games Unlocked
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Dr. Love Integration Banner */}
      <Alert 
        severity="info" 
        icon={<PsychologyIcon />}
        sx={{ mb: 4, bgcolor: '#E3F2FD', border: '2px solid #2196F3' }}
      >
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          🤖 Dr. Love AI Integration Active
        </Typography>
        <Typography variant="body2">
          Every game includes personalized coaching, real-time insights, and adaptive difficulty based on your unique relationship profile and growth areas.
        </Typography>
      </Alert>

      {/* Pricing Tier Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Star sx={{ mr: 1, color: '#4CAF50' }} />
                Free Tier (1 Game)
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Diamond sx={{ mr: 1, color: '#9C27B0' }} />
                Premium Tier (2 Games)
              </Box>
            } 
          />
          <Tab 
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCart sx={{ mr: 1, color: '#FF5722' }} />
                Purchasable Tier (7 Games)
              </Box>
            } 
          />
        </Tabs>
      </Box>

      {/* Game Grid by Tier */}
      <Box>
        {selectedTab === 0 && (
          <Box>
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#4CAF50' }}>
              🆓 Free Tier: Gateway to Relationship Growth
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              Start your relationship transformation journey with our premium-quality free game. Experience the power of Dr. Love AI coaching and discover why Flourish is the world's most advanced relationship platform.
            </Typography>
            <Grid container spacing={3}>
              {getTierGames('free').map((game) => (
                <Grid item xs={12} md={6} lg={4} key={game.id}>
                  <GameCard game={game} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {selectedTab === 1 && (
          <Box>
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#9C27B0' }}>
              💎 Premium Tier: Core Relationship Skills
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              Included with your premium subscription. Master the fundamental relationship skills that create lasting love and connection. These games provide the foundation for all advanced relationship growth.
            </Typography>
            <Grid container spacing={3}>
              {getTierGames('premium').map((game) => (
                <Grid item xs={12} md={6} lg={4} key={game.id}>
                  <GameCard game={game} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {selectedTab === 2 && (
          <Box>
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center', color: '#FF5722' }}>
              🎮 Purchasable Tier: Advanced Relationship Mastery
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
              Mind-bending games for relationship experts. Each game at $4.99 provides professional-level relationship development that would typically cost hundreds in therapy. Choose your adventure in relationship mastery.
            </Typography>
            
            {/* Bundle Offer */}
            <Card sx={{ mb: 4, bgcolor: '#FFF3E0', border: '2px solid #FF9800' }}>
              <CardContent>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#FF9800', mb: 2 }}>
                    🎁 Relationship Mastery Bundle
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Get all 7 advanced games for just <strong>$24.99</strong> (Save $10!)
                  </Typography>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ bgcolor: '#FF9800', '&:hover': { bgcolor: '#F57C00' } }}
                  >
                    Purchase Bundle - Save 30%
                  </Button>
                </Box>
              </CardContent>
            </Card>

            <Grid container spacing={3}>
              {getTierGames('purchasable').map((game) => (
                <Grid item xs={12} md={6} lg={4} key={game.id}>
                  <GameCard game={game} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>

      {/* Game Detail Dialog */}
      <Dialog 
        open={gameDialogOpen} 
        onClose={() => setGameDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        {selectedGame && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: selectedGame.color, mr: 2, width: 56, height: 56 }}>
                  {selectedGame.icon}
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {selectedGame.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedGame.subtitle}
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Typography variant="caption" color="text.secondary">Difficulty</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {selectedGame.difficulty}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="caption" color="text.secondary">Duration</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {selectedGame.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="caption" color="text.secondary">Rating</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      ⭐ {selectedGame.rating} ({selectedGame.players})
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Typography variant="caption" color="text.secondary">Framework</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {selectedGame.framework}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
                {selectedGame.description}
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h6">Game Features & Benefits</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {selectedGame.features.map((feature, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <CheckCircle sx={{ color: '#4CAF50', mr: 1, fontSize: '1.2rem' }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>Skills You'll Develop</Typography>
                <Box>
                  {selectedGame.skills.map((skill, index) => (
                    <Chip 
                      key={index}
                      label={skill}
                      sx={{ 
                        mr: 1, 
                        mb: 1,
                        bgcolor: `${selectedGame.color}15`,
                        color: selectedGame.color,
                        fontWeight: 'bold'
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </DialogContent>
            
            <DialogActions sx={{ p: 3 }}>
              <Button onClick={() => setGameDialogOpen(false)}>
                Close
              </Button>
              {selectedGame.tier === 'purchasable' && !selectedGame.completed && (
                <Button 
                  variant="outlined"
                  onClick={() => handleGamePurchase(selectedGame)}
                  sx={{ mr: 1 }}
                >
                  Purchase ${selectedGame.price}
                </Button>
              )}
              <Button 
                variant="contained"
                onClick={() => handleGameStart(selectedGame)}
                disabled={selectedGame.tier === 'purchasable' && !selectedGame.completed}
                sx={{ 
                  bgcolor: selectedGame.color,
                  '&:hover': { bgcolor: `${selectedGame.color}DD` }
                }}
              >
                {selectedGame.completed ? 'Play Again' : 'Start Game'}
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Platform Statistics */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          🏆 Platform Excellence Statistics
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
                96%
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Relationship Success Rate
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#2196F3' }}>
                4.8★
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Average Game Rating
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#FF9800' }}>
                180K+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Active Players
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#E91E63' }}>
                2,500+
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Platform Features
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EnhancedRelationshipGamingPlatform;

