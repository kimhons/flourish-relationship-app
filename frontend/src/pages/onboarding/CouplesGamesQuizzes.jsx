import React, { useState, useEffect } from 'react';
import { Heart, Star, Trophy, Users, Zap, Clock, Gift, Sparkles, Target, Award, Play, RotateCcw } from 'lucide-react';

const CouplesGamesQuizzes = () => {
  const [activeGame, setActiveGame] = useState(null);
  const [gameScore, setGameScore] = useState({ player1: 0, player2: 0 });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [gameCompleted, setGameCompleted] = useState(false);
  const [weeklyStreak, setWeeklyStreak] = useState(5);

  const games = [
    {
      id: 'how-well-know',
      title: 'How Well Do You Know Each Other?',
      description: 'Test your knowledge about your partner with fun questions',
      icon: Users,
      difficulty: 'Easy',
      time: '5-10 min',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      questions: [
        {
          question: "What's your partner's biggest fear?",
          options: ["Heights", "Spiders", "Public speaking", "Being alone"],
          correct: 2
        },
        {
          question: "What's your partner's dream vacation destination?",
          options: ["Beach resort", "Mountain cabin", "European cities", "Safari adventure"],
          correct: 1
        },
        {
          question: "What's your partner's favorite way to relax?",
          options: ["Reading a book", "Taking a bath", "Watching movies", "Going for a walk"],
          correct: 0
        }
      ]
    },
    {
      id: 'love-languages',
      title: 'Love Languages Match',
      description: 'Discover how you both prefer to give and receive love',
      icon: Heart,
      difficulty: 'Medium',
      time: '10-15 min',
      color: 'from-pink-500 to-red-600',
      bgColor: 'from-pink-50 to-red-50',
      questions: [
        {
          question: "When you want to show love, you prefer to:",
          options: ["Give compliments", "Spend quality time", "Give gifts", "Physical touch"],
          correct: null // No correct answer for this type
        },
        {
          question: "You feel most loved when your partner:",
          options: ["Helps with tasks", "Says 'I love you'", "Gives you their attention", "Hugs and kisses you"],
          correct: null
        }
      ]
    },
    {
      id: 'future-dreams',
      title: 'Future Dreams Alignment',
      description: 'See how aligned you are on future goals and dreams',
      icon: Star,
      difficulty: 'Deep',
      time: '15-20 min',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'from-purple-50 to-indigo-50',
      questions: [
        {
          question: "In 5 years, where do you see yourselves living?",
          options: ["Same city", "Different city", "Different country", "Traveling the world"],
          correct: null
        },
        {
          question: "What's most important for your future together?",
          options: ["Financial security", "Adventure and travel", "Family and children", "Career success"],
          correct: null
        }
      ]
    },
    {
      id: 'relationship-trivia',
      title: 'Relationship Trivia',
      description: 'Fun facts about your relationship journey together',
      icon: Trophy,
      difficulty: 'Fun',
      time: '5-8 min',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50',
      questions: [
        {
          question: "What was the first movie you watched together?",
          options: ["Action movie", "Romantic comedy", "Horror movie", "Documentary"],
          correct: 1
        },
        {
          question: "Where did you have your first date?",
          options: ["Restaurant", "Coffee shop", "Park", "Movies"],
          correct: 0
        }
      ]
    }
  ];

  const quickChallenges = [
    {
      id: 'daily-appreciation',
      title: 'Daily Appreciation Challenge',
      description: 'Share one thing you appreciate about each other',
      icon: Heart,
      color: 'from-pink-400 to-rose-500',
      points: 10
    },
    {
      id: 'memory-lane',
      title: 'Memory Lane',
      description: 'Share a favorite memory from this week',
      icon: Sparkles,
      color: 'from-purple-400 to-indigo-500',
      points: 15
    },
    {
      id: 'future-planning',
      title: 'Future Planning',
      description: 'Discuss one goal for next month',
      icon: Target,
      color: 'from-blue-400 to-cyan-500',
      points: 20
    },
    {
      id: 'gratitude-round',
      title: 'Gratitude Round',
      description: 'Take turns sharing 3 things you\'re grateful for',
      icon: Gift,
      color: 'from-green-400 to-emerald-500',
      points: 25
    }
  ];

  const startGame = (game) => {
    setActiveGame(game);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setGameCompleted(false);
    setGameScore({ player1: 0, player2: 0 });
  };

  const selectAnswer = (answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: answerIndex
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < activeGame.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      completeGame();
    }
  };

  const completeGame = () => {
    setGameCompleted(true);
    // Calculate score based on correct answers
    let score = 0;
    activeGame.questions.forEach((q, index) => {
      if (q.correct !== null && selectedAnswers[index] === q.correct) {
        score += 10;
      }
    });
    setGameScore(prev => ({ ...prev, player1: score }));
  };

  const resetGame = () => {
    setActiveGame(null);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setGameCompleted(false);
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      'Easy': 'bg-green-100 text-green-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Deep': 'bg-purple-100 text-purple-800',
      'Fun': 'bg-blue-100 text-blue-800'
    };
    return colors[difficulty] || 'bg-gray-100 text-gray-800';
  };

  if (activeGame && !gameCompleted) {
    const question = activeGame.questions[currentQuestion];
    const IconComponent = activeGame.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
        <div className="max-w-2xl mx-auto">
          {/* Game Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`bg-gradient-to-r ${activeGame.color} p-3 rounded-full`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800">{activeGame.title}</h1>
                  <p className="text-gray-600">Question {currentQuestion + 1} of {activeGame.questions.length}</p>
                </div>
              </div>
              <button 
                onClick={resetGame}
                className="text-gray-500 hover:text-gray-700"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className={`bg-gradient-to-r ${activeGame.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${((currentQuestion + 1) / activeGame.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{question.question}</h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                    selectedAnswers[currentQuestion] === index
                      ? `bg-gradient-to-r ${activeGame.color} text-white shadow-lg`
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-white bg-white'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestion] === index && (
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${activeGame.color}`}></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {selectedAnswers[currentQuestion] !== undefined && (
              <button
                onClick={nextQuestion}
                className={`w-full mt-6 bg-gradient-to-r ${activeGame.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}
              >
                {currentQuestion < activeGame.questions.length - 1 ? 'Next Question' : 'Complete Game'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (gameCompleted) {
    const IconComponent = activeGame.icon;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className={`bg-gradient-to-r ${activeGame.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
              <Trophy className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Game Complete!</h1>
            <p className="text-gray-600 mb-6">Great job exploring your relationship together!</p>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Your Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">{gameScore.player1}%</div>
                  <div className="text-sm text-gray-600">Compatibility Score</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">+25</div>
                  <div className="text-sm text-gray-600">Points Earned</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={resetGame}
                className={`w-full bg-gradient-to-r ${activeGame.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200`}
              >
                Play Another Game
              </button>
              <button
                onClick={() => {/* Share results */}}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200"
              >
                Share Results
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                <Play className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Couples Games & Quizzes</h1>
                <p className="text-gray-600">Fun ways to connect and learn about each other</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-lg font-bold text-gray-800">{weeklyStreak} games this week</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-600">Level 5 Game Master</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Challenges */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Challenges (2-5 minutes)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickChallenges.map((challenge) => {
              const IconComponent = challenge.icon;
              return (
                <div key={challenge.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-200">
                  <div className={`bg-gradient-to-r ${challenge.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{challenge.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">+{challenge.points} pts</span>
                    <button className={`bg-gradient-to-r ${challenge.color} text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200`}>
                      Start
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Games */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Relationship Games</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game) => {
              const IconComponent = game.icon;
              return (
                <div key={game.id} className={`bg-gradient-to-br ${game.bgColor} rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-200`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-r ${game.color} p-3 rounded-full`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                        {game.difficulty}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {game.time}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{game.questions.length} questions</span>
                    </div>
                    <button
                      onClick={() => startGame(game)}
                      className={`bg-gradient-to-r ${game.color} text-white px-6 py-2 rounded-lg font-semibold hover:shadow-md transition-all duration-200`}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dr. Love Game Tip */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 mt-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Dr. Love's Game Tip</h3>
          </div>
          <p className="text-lg mb-4">"Games aren't just fun - they're powerful tools for discovery! Even couples together for decades learn new things about each other through playful questions and challenges."</p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Weekly Challenge: Play 3 games together</span>
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-30 transition-all duration-200">
              View Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouplesGamesQuizzes;

