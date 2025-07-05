import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, Play, Pause, RotateCcw, Trophy, Star, Heart,
  Users, Clock, Target, Zap, Gift, Crown, Medal, Award,
  Shuffle, Volume2, VolumeX, Settings, Share2, Download,
  ChevronLeft, ChevronRight, Plus, Minus, Check, X,
  Sparkles, Fire, ThumbsUp, MessageCircle, Camera, Mic
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const InteractiveDatingGamesPlatform = () => {
  const [selectedGame, setSelectedGame] = useState('compatibility_quiz');
  const [gameState, setGameState] = useState('menu');
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  const [gameScore, setGameScore] = useState({ player1: 0, player2: 0 });
  const [gameTimer, setGameTimer] = useState(60);
  const [isGameActive, setIsGameActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState('medium');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Game progress and achievements
  const [gameProgress, setGameProgress] = useState({
    gamesPlayed: 47,
    gamesWon: 32,
    totalScore: 15420,
    streakRecord: 8,
    currentStreak: 3,
    achievements: 12
  });

  // Current game session
  const [currentSession, setCurrentSession] = useState({
    gameId: 'compatibility_quiz',
    round: 1,
    totalRounds: 5,
    timeRemaining: 45,
    currentQuestion: 1,
    totalQuestions: 10,
    playerAnswers: [],
    partnerAnswers: []
  });

  // Interactive game data
  const gameCategories = [
    { id: 'all', name: 'All Games', icon: '🎮', count: 24 },
    { id: 'compatibility', name: 'Compatibility', icon: '💕', count: 8 },
    { id: 'trivia', name: 'Trivia', icon: '🧠', count: 6 },
    { id: 'creative', name: 'Creative', icon: '🎨', count: 5 },
    { id: 'adventure', name: 'Adventure', icon: '🗺️', count: 3 },
    { id: 'puzzle', name: 'Puzzle', icon: '🧩', count: 2 }
  ];

  const availableGames = [
    {
      id: 'compatibility_quiz',
      name: 'Compatibility Quiz',
      category: 'compatibility',
      description: 'Discover how well you match through fun questions',
      difficulty: 'Easy',
      duration: '5-10 min',
      players: '2',
      rating: 4.8,
      plays: 15420,
      thumbnail: '💕',
      features: ['Real-time scoring', 'Instant feedback', 'Compatibility analysis'],
      isPopular: true,
      isNew: false
    },
    {
      id: 'two_truths_lie',
      name: 'Two Truths & A Lie',
      category: 'trivia',
      description: 'Guess which statement is the lie in this classic game',
      difficulty: 'Medium',
      duration: '10-15 min',
      players: '2',
      rating: 4.6,
      plays: 12890,
      thumbnail: '🤔',
      features: ['Creative storytelling', 'Surprise reveals', 'Trust building'],
      isPopular: true,
      isNew: false
    },
    {
      id: 'story_builder',
      name: 'Story Builder',
      category: 'creative',
      description: 'Create a romantic story together, one sentence at a time',
      difficulty: 'Easy',
      duration: '15-20 min',
      players: '2',
      rating: 4.9,
      plays: 8760,
      thumbnail: '📖',
      features: ['Collaborative creativity', 'Unlimited possibilities', 'Save stories'],
      isPopular: false,
      isNew: true
    },
    {
      id: 'emoji_charades',
      name: 'Emoji Charades',
      category: 'creative',
      description: 'Act out movies, songs, and phrases using only emojis',
      difficulty: 'Medium',
      duration: '8-12 min',
      players: '2',
      rating: 4.7,
      plays: 11230,
      thumbnail: '😄',
      features: ['Emoji creativity', 'Timed challenges', 'Hint system'],
      isPopular: true,
      isNew: false
    },
    {
      id: 'memory_match',
      name: 'Memory Match',
      category: 'puzzle',
      description: 'Test your memory skills with personalized photo cards',
      difficulty: 'Hard',
      duration: '6-10 min',
      players: '2',
      rating: 4.5,
      plays: 9870,
      thumbnail: '🧠',
      features: ['Photo integration', 'Progressive difficulty', 'Memory training'],
      isPopular: false,
      isNew: false
    },
    {
      id: 'virtual_date_planner',
      name: 'Virtual Date Planner',
      category: 'adventure',
      description: 'Plan your perfect date together in this interactive experience',
      difficulty: 'Easy',
      duration: '12-18 min',
      players: '2',
      rating: 4.8,
      plays: 7650,
      thumbnail: '🗓️',
      features: ['Date planning', 'Budget management', 'Location discovery'],
      isPopular: false,
      isNew: true
    },
    {
      id: 'rapid_fire_questions',
      name: 'Rapid Fire Questions',
      category: 'trivia',
      description: 'Quick-fire questions to learn about each other fast',
      difficulty: 'Medium',
      duration: '5-8 min',
      players: '2',
      rating: 4.4,
      plays: 13450,
      thumbnail: '⚡',
      features: ['Fast-paced', 'Surprise questions', 'Instant reactions'],
      isPopular: true,
      isNew: false
    },
    {
      id: 'photo_challenge',
      name: 'Photo Challenge',
      category: 'creative',
      description: 'Complete fun photo challenges and share your creativity',
      difficulty: 'Easy',
      duration: '10-15 min',
      players: '2',
      rating: 4.6,
      plays: 6890,
      thumbnail: '📸',
      features: ['Photo sharing', 'Creative challenges', 'Voting system'],
      isPopular: false,
      isNew: true
    }
  ];

  // Sample compatibility quiz questions
  const compatibilityQuestions = [
    {
      id: 1,
      question: "What's your ideal way to spend a Saturday evening?",
      options: [
        { id: 'a', text: 'Cozy movie night at home', emoji: '🏠' },
        { id: 'b', text: 'Dancing at a lively club', emoji: '💃' },
        { id: 'c', text: 'Romantic dinner at a restaurant', emoji: '🍽️' },
        { id: 'd', text: 'Outdoor adventure or hiking', emoji: '🥾' }
      ],
      category: 'lifestyle'
    },
    {
      id: 2,
      question: "How do you prefer to communicate in a relationship?",
      options: [
        { id: 'a', text: 'Deep, meaningful conversations', emoji: '💭' },
        { id: 'b', text: 'Playful teasing and jokes', emoji: '😄' },
        { id: 'c', text: 'Physical touch and gestures', emoji: '🤗' },
        { id: 'd', text: 'Thoughtful gifts and surprises', emoji: '🎁' }
      ],
      category: 'communication'
    },
    {
      id: 3,
      question: "What's most important to you in a partner?",
      options: [
        { id: 'a', text: 'Emotional intelligence and empathy', emoji: '❤️' },
        { id: 'b', text: 'Sense of humor and fun personality', emoji: '😂' },
        { id: 'c', text: 'Ambition and career success', emoji: '🎯' },
        { id: 'd', text: 'Shared values and beliefs', emoji: '🤝' }
      ],
      category: 'values'
    }
  ];

  // Game statistics and analytics
  const gameStats = [
    { game: 'Compatibility Quiz', plays: 15420, avgRating: 4.8, completionRate: 94 },
    { game: 'Rapid Fire Questions', plays: 13450, avgRating: 4.4, completionRate: 89 },
    { game: 'Two Truths & A Lie', plays: 12890, avgRating: 4.6, completionRate: 91 },
    { game: 'Emoji Charades', plays: 11230, avgRating: 4.7, completionRate: 87 },
    { game: 'Memory Match', plays: 9870, avgRating: 4.5, completionRate: 82 }
  ];

  // Player achievements
  const achievements = [
    { id: 'first_game', name: 'First Game', description: 'Played your first dating game', icon: '🎮', unlocked: true },
    { id: 'compatibility_master', name: 'Compatibility Master', description: 'Scored 90%+ in compatibility quiz', icon: '💕', unlocked: true },
    { id: 'story_teller', name: 'Story Teller', description: 'Created 5 collaborative stories', icon: '📖', unlocked: true },
    { id: 'emoji_expert', name: 'Emoji Expert', description: 'Won 10 emoji charades games', icon: '😄', unlocked: false },
    { id: 'memory_champion', name: 'Memory Champion', description: 'Perfect score in memory match', icon: '🧠', unlocked: false },
    { id: 'social_butterfly', name: 'Social Butterfly', description: 'Played games with 20 different people', icon: '🦋', unlocked: true },
    { id: 'streak_master', name: 'Streak Master', description: 'Won 10 games in a row', icon: '🔥', unlocked: false },
    { id: 'creative_genius', name: 'Creative Genius', description: 'Top rated in creative challenges', icon: '🎨', unlocked: false }
  ];

  // Leaderboard data
  const leaderboard = [
    { rank: 1, name: 'Sarah M.', score: 24680, games: 89, avatar: '👩', badge: '👑' },
    { rank: 2, name: 'Alex K.', score: 23450, games: 76, avatar: '👨', badge: '🥈' },
    { rank: 3, name: 'Emma L.', score: 22890, games: 82, avatar: '👱‍♀️', badge: '🥉' },
    { rank: 4, name: 'You', score: 15420, games: 47, avatar: '😊', badge: '⭐' },
    { rank: 5, name: 'Mike R.', score: 14760, games: 52, avatar: '👨‍🦱', badge: '🏆' }
  ];

  // Real-time game session data
  const [liveSession, setLiveSession] = useState({
    isActive: false,
    partner: { name: 'Sarah M.', avatar: '👩', status: 'online' },
    currentGame: null,
    messages: [
      { id: 1, sender: 'partner', text: 'Ready for a fun game? 😊', timestamp: '2:45 PM' },
      { id: 2, sender: 'you', text: 'Absolutely! What should we play?', timestamp: '2:46 PM' },
      { id: 3, sender: 'partner', text: 'How about the compatibility quiz?', timestamp: '2:46 PM' }
    ]
  });

  // Interactive game controls
  const [gameControls, setGameControls] = useState({
    volume: 75,
    notifications: true,
    autoSave: true,
    showHints: true,
    difficulty: 'medium',
    timeLimit: true
  });

  useEffect(() => {
    // Game timer logic
    let interval;
    if (isGameActive && gameTimer > 0) {
      interval = setInterval(() => {
        setGameTimer(prev => {
          if (prev <= 1) {
            setIsGameActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, gameTimer]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      if (gameState === 'playing') {
        setCurrentSession(prev => ({
          ...prev,
          timeRemaining: Math.max(0, prev.timeRemaining - 1)
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState]);

  const startGame = (gameId) => {
    setSelectedGame(gameId);
    setGameState('playing');
    setIsGameActive(true);
    setGameTimer(60);
    setGameScore({ player1: 0, player2: 0 });
    setCurrentSession(prev => ({
      ...prev,
      gameId,
      round: 1,
      timeRemaining: 45,
      currentQuestion: 1
    }));
    console.log(`Starting game: ${gameId}`);
  };

  const pauseGame = () => {
    setIsGameActive(false);
    console.log('Game paused');
  };

  const resumeGame = () => {
    setIsGameActive(true);
    console.log('Game resumed');
  };

  const endGame = () => {
    setGameState('results');
    setIsGameActive(false);
    console.log('Game ended');
  };

  const resetGame = () => {
    setGameState('menu');
    setIsGameActive(false);
    setGameTimer(60);
    setGameScore({ player1: 0, player2: 0 });
    setCurrentSession(prev => ({
      ...prev,
      round: 1,
      timeRemaining: 45,
      currentQuestion: 1,
      playerAnswers: [],
      partnerAnswers: []
    }));
    console.log('Game reset');
  };

  const selectAnswer = (questionId, answerId) => {
    setCurrentSession(prev => ({
      ...prev,
      playerAnswers: [...prev.playerAnswers, { questionId, answerId }],
      currentQuestion: prev.currentQuestion + 1
    }));
    
    // Simulate partner answer
    const partnerAnswer = ['a', 'b', 'c', 'd'][Math.floor(Math.random() * 4)];
    setCurrentSession(prev => ({
      ...prev,
      partnerAnswers: [...prev.partnerAnswers, { questionId, answerId: partnerAnswer }]
    }));

    console.log(`Answer selected: ${answerId} for question ${questionId}`);
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    console.log(`Sound ${!soundEnabled ? 'enabled' : 'disabled'}`);
  };

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    console.log(`Difficulty changed to: ${newDifficulty}`);
  };

  const filterGamesByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    console.log(`Filtering games by category: ${categoryId}`);
  };

  const invitePartner = (gameId) => {
    console.log(`Inviting partner to play: ${gameId}`);
    // In a real app, this would send game invitation
  };

  const shareGameResult = () => {
    console.log('Sharing game result...');
    // In a real app, this would share results on social media or with partner
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-200 text-yellow-400" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredGames = selectedCategory === 'all' 
    ? availableGames 
    : availableGames.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-purple-600" />
              Interactive Dating Games
            </h1>
            <p className="text-gray-600">
              Connect through fun, interactive games designed to bring couples closer together
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={toggleSound}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                soundEnabled 
                  ? 'bg-green-600 text-white hover:bg-green-700' 
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              Sound
            </button>
            
            <select
              value={difficulty}
              onChange={(e) => changeDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              <Settings className="w-4 h-4" />
              Settings
            </button>
          </div>
        </div>
      </div>

      {/* Game State: Menu */}
      {gameState === 'menu' && (
        <>
          {/* Player Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Gamepad2 className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{gameProgress.gamesPlayed}</div>
                  <div className="text-xs text-gray-500">Games</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Games Played</h3>
                <p className="text-sm text-gray-600">{gameProgress.gamesWon} wins</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Trophy className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-yellow-600">{gameProgress.totalScore.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Points</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Total Score</h3>
                <p className="text-sm text-gray-600">Rank #4 globally</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Fire className="w-6 h-6 text-red-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-red-600">{gameProgress.currentStreak}</div>
                  <div className="text-xs text-gray-500">Current</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Win Streak</h3>
                <p className="text-sm text-gray-600">Record: {gameProgress.streakRecord}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{gameProgress.achievements}</div>
                  <div className="text-xs text-gray-500">Unlocked</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Achievements</h3>
                <p className="text-sm text-gray-600">16 total available</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-pink-600">87%</div>
                  <div className="text-xs text-gray-500">Compatibility</div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Avg Match</h3>
                <p className="text-sm text-gray-600">With partners</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Games Section */}
            <div className="lg:col-span-3 space-y-6">
              {/* Game Categories */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Categories</h3>
                <div className="flex flex-wrap gap-3">
                  {gameCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => filterGamesByCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                      <span className="text-sm opacity-75">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Games Grid */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Available Games</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{filteredGames.length} games</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredGames.map((game) => (
                    <div key={game.id} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer">
                      {/* Game badges */}
                      <div className="absolute top-3 right-3 flex gap-2">
                        {game.isPopular && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                            🔥 Popular
                          </span>
                        )}
                        {game.isNew && (
                          <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                            ✨ New
                          </span>
                        )}
                      </div>

                      {/* Game thumbnail */}
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {game.thumbnail}
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {game.name}
                        </h4>
                      </div>

                      {/* Game info */}
                      <div className="space-y-3 mb-4">
                        <p className="text-sm text-gray-600 text-center">{game.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(game.difficulty)}`}>
                            {game.difficulty}
                          </span>
                          <span>{game.duration}</span>
                          <span>{game.players} players</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {getRatingStars(game.rating)}
                            <span className="text-sm text-gray-600 ml-1">{game.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">{game.plays.toLocaleString()} plays</span>
                        </div>

                        <div className="space-y-1">
                          <div className="text-xs text-gray-500 font-medium">Features:</div>
                          {game.features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="text-xs text-gray-600">• {feature}</div>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => startGame(game.id)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors group-hover:scale-105 transform duration-200"
                        >
                          <Play className="w-4 h-4" />
                          Play Now
                        </button>
                        <button 
                          onClick={() => invitePartner(game.id)}
                          className="px-3 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors"
                        >
                          <Users className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Game Statistics */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Popularity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={gameStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="game" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="plays" fill="#8b5cf6" name="Total Plays" />
                    <Bar dataKey="completionRate" fill="#10b981" name="Completion Rate %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Live Partner Status */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Partner Status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <div className="text-2xl">{liveSession.partner.avatar}</div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{liveSession.partner.name}</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-green-600">{liveSession.partner.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Start Chat
                  </button>
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Recent Messages</h3>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {liveSession.messages.map((message) => (
                    <div key={message.id} className={`p-3 rounded-lg ${
                      message.sender === 'you' 
                        ? 'bg-purple-100 text-purple-900 ml-4' 
                        : 'bg-gray-100 text-gray-900 mr-4'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <span className="text-xs opacity-75">{message.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Achievements
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className={`p-3 border rounded-lg ${
                      achievement.unlocked 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 text-sm">{achievement.name}</div>
                          <div className="text-xs text-gray-600">{achievement.description}</div>
                        </div>
                        {achievement.unlocked && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leaderboard */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Leaderboard
                </h3>
                <div className="space-y-2">
                  {leaderboard.map((player) => (
                    <div key={player.rank} className={`flex items-center gap-3 p-3 rounded-lg ${
                      player.name === 'You' ? 'bg-purple-100 border border-purple-200' : 'bg-gray-50'
                    }`}>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-600">#{player.rank}</span>
                        <span className="text-lg">{player.badge}</span>
                      </div>
                      <div className="text-lg">{player.avatar}</div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{player.name}</div>
                        <div className="text-xs text-gray-600">{player.score.toLocaleString()} pts</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Game State: Playing */}
      {gameState === 'playing' && (
        <div className="max-w-4xl mx-auto">
          {/* Game Header */}
          <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {availableGames.find(g => g.id === selectedGame)?.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Round {currentSession.round} of {currentSession.totalRounds}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{formatTime(currentSession.timeRemaining)}</div>
                  <div className="text-xs text-gray-500">Time Left</div>
                </div>
                
                <div className="flex gap-2">
                  {isGameActive ? (
                    <button 
                      onClick={pauseGame}
                      className="flex items-center gap-2 px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                    >
                      <Pause className="w-4 h-4" />
                      Pause
                    </button>
                  ) : (
                    <button 
                      onClick={resumeGame}
                      className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Resume
                    </button>
                  )}
                  
                  <button 
                    onClick={endGame}
                    className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    End
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentSession.currentQuestion / currentSession.totalQuestions) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Question {currentSession.currentQuestion}</span>
              <span>{currentSession.totalQuestions} total</span>
            </div>
          </div>

          {/* Game Content - Compatibility Quiz */}
          {selectedGame === 'compatibility_quiz' && currentSession.currentQuestion <= compatibilityQuestions.length && (
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {compatibilityQuestions[currentSession.currentQuestion - 1]?.question}
                </h3>
                <p className="text-gray-600">Choose the answer that best describes you</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {compatibilityQuestions[currentSession.currentQuestion - 1]?.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => selectAnswer(currentSession.currentQuestion, option.id)}
                    className="group p-6 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {option.emoji}
                      </span>
                      <div className="flex-1">
                        <span className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                          {option.text}
                        </span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Partner Status */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">Sarah is answering...</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Game completed - show results */}
          {selectedGame === 'compatibility_quiz' && currentSession.currentQuestion > compatibilityQuestions.length && (
            <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quiz Complete!</h3>
              <p className="text-gray-600 mb-6">Calculating your compatibility score...</p>
              
              <div className="text-4xl font-bold text-purple-600 mb-2">87%</div>
              <p className="text-lg text-gray-700 mb-6">Compatibility Match</p>
              
              <div className="flex justify-center gap-4">
                <button 
                  onClick={shareGameResult}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share Result
                </button>
                <button 
                  onClick={resetGame}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Game State: Results */}
      {gameState === 'results' && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-8 border border-gray-200 text-center">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Game Complete!</h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-purple-100 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{gameScore.player1}</div>
                <div className="text-sm text-gray-600">Your Score</div>
              </div>
              <div className="p-4 bg-pink-100 rounded-lg">
                <div className="text-2xl font-bold text-pink-600">{gameScore.player2}</div>
                <div className="text-sm text-gray-600">Partner Score</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-green-100 rounded-lg">
                <div className="text-lg font-bold text-green-600">+250 Points Earned</div>
                <div className="text-sm text-gray-600">Added to your total score</div>
              </div>
              
              <div className="p-4 bg-yellow-100 rounded-lg">
                <div className="text-lg font-bold text-yellow-600">Achievement Unlocked!</div>
                <div className="text-sm text-gray-600">🎮 Game Master - Play 50 games</div>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={shareGameResult}
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button 
                onClick={resetGame}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Play Again
              </button>
              <button 
                onClick={resetGame}
                className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Gamepad2 className="w-4 h-4" />
                New Game
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDatingGamesPlatform;

