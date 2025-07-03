import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, MessageCircle, Award, Clock, Calendar, 
  Zap, Gift, Star, ChevronRight, ChevronLeft, 
  CheckCircle, XCircle, HelpCircle, AlertCircle,
  Brain, Lightbulb, Smile, ThumbsUp, Activity,
  Sparkles, Bookmark, Send, Mic, Play, Pause
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger, DialogFooter 
} from '../../components/ui/dialog';
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';

// Dr. Love AI Integration Components
const DrLoveAvatar = () => (
  <Avatar className="h-12 w-12 border-2 border-primary">
    <AvatarImage src="/assets/dr-love-avatar.png" alt="Dr. Love" />
    <AvatarFallback className="bg-primary text-primary-foreground">DL</AvatarFallback>
  </Avatar>
);

const DrLoveChatMessage = ({ message, isUser = false }) => (
  <div className={cn(
    "flex items-start gap-2 mb-4",
    isUser ? "flex-row-reverse" : "flex-row"
  )}>
    {!isUser && <DrLoveAvatar />}
    {isUser && (
      <Avatar className="h-10 w-10">
        <AvatarImage src="/assets/user-avatar.png" alt="You" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
    )}
    <div className={cn(
      "rounded-lg p-3 max-w-[80%]",
      isUser ? "bg-primary text-primary-foreground" : "bg-muted"
    )}>
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

const DrLoveChatInterface = ({ gameContext }) => {
  const [messages, setMessages] = useState([
    { text: `I'm Dr. Love, your relationship AI coach! I'll guide you through this "${gameContext}" game and provide personalized insights based on your responses. Feel free to ask me anything during the game!`, isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // AI response generator based on game context and user input
  const generateAIResponse = (userMessage, gameContext) => {
    // Contextual responses based on the current game
    const gameResponses = {
      "How Well Do You Know Each Other?": [
        "That's a great observation! Understanding your partner's preferences shows deep attention to their needs.",
        "I notice you're discovering new things about each other. This is exactly what makes this game so valuable for your relationship.",
        "The way you're engaging with these questions shows real commitment to understanding each other better.",
        "Remember, there are no wrong answers here - just opportunities to learn more about each other's unique perspectives."
      ],
      "Love Languages Match": [
        "I'm noticing your primary love language might be Quality Time, while your partner seems to value Words of Affirmation.",
        "Understanding each other's love languages can transform how you express and receive love. Let's explore this further.",
        "The mismatch in love languages you're discovering is actually quite common. The key is learning to speak each other's language.",
        "This insight about your different love languages explains some of the patterns I've observed in your communication."
      ],
      "Future Dream Builder": [
        "The vision you're creating together has strong alignment in core values, which is a positive indicator for long-term compatibility.",
        "I notice some differences in your future dreams. These aren't obstacles but opportunities to create a richer shared vision.",
        "The way you're negotiating these future scenarios shows healthy compromise and respect for each other's aspirations.",
        "Your shared excitement about this particular future scenario indicates a strong foundation for joint planning."
      ],
      "Emotional Intelligence Challenge": [
        "That response shows remarkable emotional awareness. You're identifying subtle emotional cues that many people miss.",
        "I'm noticing patterns in how you interpret emotional scenarios. This insight can help you better understand your reactions in real situations.",
        "Your different perspectives on this emotional scenario reflect your unique emotional processing styles.",
        "This exercise is revealing your emotional strengths and growth areas. Let's use these insights to enhance your emotional connection."
      ],
      "Relationship Time Capsule": [
        "The memories you're selecting reveal what you truly value in your relationship journey.",
        "I notice you both chose different types of memories as significant. This diversity enriches your shared narrative.",
        "The way you're reflecting on past experiences shows healthy processing of both joys and challenges.",
        "These time capsule selections are creating a beautiful relationship narrative that you can revisit in the future."
      ]
    };

    // Default responses if game context doesn't match
    const defaultResponses = [
      "That's an interesting perspective! Let me help you explore that further in the context of your relationship.",
      "I notice a pattern in how you're approaching these questions. This insight could be valuable for your relationship growth.",
      "Your engagement with this activity shows commitment to strengthening your relationship. Let's build on that.",
      "I'm analyzing your responses to provide personalized guidance that's specific to your relationship dynamics."
    ];

    // Select appropriate response pool
    const responsePool = gameResponses[gameContext] || defaultResponses;
    
    // Generate contextual response based on user message content
    let response = responsePool[Math.floor(Math.random() * responsePool.length)];
    
    // Add personalization based on user message content
    if (userMessage.toLowerCase().includes("help") || userMessage.toLowerCase().includes("advice")) {
      response = "I'd be happy to help! Based on what I've observed in your relationship patterns, I recommend focusing on " + 
                "active listening and expressing appreciation more frequently. Would you like specific techniques for this?";
    } else if (userMessage.toLowerCase().includes("disagree") || userMessage.toLowerCase().includes("conflict")) {
      response = "Disagreements are natural in relationships. I notice you both have different approaches to conflict. " +
                "Try using 'I feel' statements rather than 'You always' statements to reduce defensiveness.";
    } else if (userMessage.toLowerCase().includes("surprise") || userMessage.toLowerCase().includes("learn")) {
      response = "It's wonderful that you're discovering new things about each other! This continuous learning is " +
                "what keeps relationships fresh and growing. What other aspects would you like to explore together?";
    }
    
    return response;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue('');
    
    // Simulate AI thinking with a slight delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue, gameContext);
      setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      <div className="bg-primary p-3 flex items-center gap-2">
        <DrLoveAvatar />
        <div>
          <h3 className="font-semibold text-primary-foreground">Dr. Love</h3>
          <p className="text-xs text-primary-foreground/80">AI Relationship Coach</p>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, idx) => (
          <DrLoveChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>
      
      <div className="p-3 border-t flex gap-2">
        <Input
          placeholder="Ask Dr. Love for guidance..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1"
        />
        <Button size="icon" onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// AI Insights Component
const DrLoveInsights = ({ gameData, playerResponses }) => {
  // Generate insights based on game data and player responses
  const generateInsights = () => {
    // This would normally come from the AI backend
    return [
      {
        title: "Communication Pattern",
        description: "Based on your responses, I notice you both have complementary communication styles. Partner 1 tends to be more direct, while Partner 2 prefers processing before responding.",
        recommendation: "Try implementing a 'pause and reflect' technique during important conversations to accommodate both styles."
      },
      {
        title: "Knowledge Gaps",
        description: "There were 3 questions where your answers about each other didn't match their self-reported preferences.",
        recommendation: "These areas present wonderful opportunities for deeper conversation and discovery."
      },
      {
        title: "Strength Indicator",
        description: "Your highest alignment was in 'Future Goals & Values' - this is a strong predictor of relationship satisfaction.",
        recommendation: "Continue building on this foundation by regularly discussing your shared vision."
      }
    ];
  };

  const insights = generateInsights();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <DrLoveAvatar />
        <div>
          <h3 className="font-semibold">Dr. Love's Relationship Insights</h3>
          <p className="text-sm text-muted-foreground">AI-powered analysis based on your game interactions</p>
        </div>
      </div>
      
      <div className="grid gap-4">
        {insights.map((insight, idx) => (
          <Card key={idx} className="p-4">
            <div className="flex items-start gap-2">
              <div className={cn(
                "rounded-full p-2",
                idx === 0 ? "bg-blue-100" : idx === 1 ? "bg-amber-100" : "bg-green-100"
              )}>
                {idx === 0 ? (
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                ) : idx === 1 ? (
                  <HelpCircle className="h-5 w-5 text-amber-600" />
                ) : (
                  <Award className="h-5 w-5 text-green-600" />
                )}
              </div>
              <div>
                <h4 className="font-medium">{insight.title}</h4>
                <p className="text-sm mt-1 text-muted-foreground">{insight.description}</p>
                <div className="mt-2 bg-muted p-2 rounded-md">
                  <div className="flex gap-2">
                    <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{insight.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Button className="w-full">
        <Download className="h-4 w-4 mr-2" />
        Save Insights to Relationship Journal
      </Button>
    </div>
  );
};

// Game Components
const GameCard = ({ game, onSelect }) => (
  <Card 
    className="overflow-hidden cursor-pointer transition-all hover:shadow-md"
    onClick={() => onSelect(game)}
  >
    <div className="aspect-video relative">
      <img 
        src={game.image} 
        alt={game.title} 
        className="w-full h-full object-cover"
      />
      {game.premium && (
        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-yellow-300 text-black">
          PREMIUM
        </Badge>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{game.title}</h3>
        <Badge variant={game.difficulty === 'Easy' ? 'outline' : game.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
          {game.difficulty}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{game.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{game.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "h-4 w-4",
                i < game.rating ? "fill-amber-400 text-amber-400" : "text-muted"
              )} 
            />
          ))}
        </div>
      </div>
    </div>
  </Card>
);

// Main Component
const EnhancedCouplesGamesQuizzes = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameState, setGameState] = useState('intro'); // intro, playing, completed
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playerResponses, setPlayerResponses] = useState({
    player1: [],
    player2: []
  });
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  const [showAICoach, setShowAICoach] = useState(false);
  
  // Sample games data
  const games = [
    {
      id: 'know-each-other',
      title: 'How Well Do You Know Each Other?',
      description: 'Test your knowledge of each other's preferences, habits, and desires in this fun challenge.',
      image: '/assets/games/know-each-other.jpg',
      difficulty: 'Easy',
      duration: '15 min',
      rating: 5,
      premium: false,
      questions: [
        {
          text: "What is your partner's favorite way to relax after a stressful day?",
          options: ["Reading a book", "Watching TV", "Taking a bath", "Going for a walk", "Talking with friends"]
        },
        {
          text: "What would your partner say is your most annoying habit?",
          options: ["Being messy", "Being too organized", "Interrupting", "Being on your phone", "Overthinking"]
        },
        {
          text: "What is your partner's biggest fear?",
          options: ["Heights", "Failure", "Being alone", "Spiders/insects", "Public speaking"]
        },
        {
          text: "How does your partner prefer to receive love?",
          options: ["Physical touch", "Quality time", "Gifts", "Acts of service", "Words of affirmation"]
        },
        {
          text: "What would your partner say is the best gift you've ever given them?",
          options: ["Something handmade", "An experience", "Something expensive", "Something practical", "Something sentimental"]
        }
      ]
    },
    {
      id: 'love-languages',
      title: 'Love Languages Match',
      description: 'Discover and compare your love languages to better understand how to express and receive love.',
      image: '/assets/games/love-languages.jpg',
      difficulty: 'Medium',
      duration: '20 min',
      rating: 4,
      premium: false,
      questions: []
    },
    {
      id: 'future-dreams',
      title: 'Future Dream Builder',
      description: 'Explore and align your visions for the future through interactive scenarios and discussions.',
      image: '/assets/games/future-dreams.jpg',
      difficulty: 'Medium',
      duration: '25 min',
      rating: 5,
      premium: true,
      questions: []
    },
    {
      id: 'emotional-intelligence',
      title: 'Emotional Intelligence Challenge',
      description: 'Test and improve your emotional awareness and response patterns as a couple.',
      image: '/assets/games/emotional-intelligence.jpg',
      difficulty: 'Hard',
      duration: '30 min',
      rating: 4,
      premium: true,
      questions: []
    },
    {
      id: 'time-capsule',
      title: 'Relationship Time Capsule',
      description: 'Create a digital time capsule of your relationship memories, milestones, and future hopes.',
      image: '/assets/games/time-capsule.jpg',
      difficulty: 'Easy',
      duration: '20 min',
      rating: 5,
      premium: true,
      questions: []
    }
  ];
  
  const handleGameSelect = (game) => {
    if (game.premium) {
      toast({
        title: "Premium Game",
        description: "This is a premium game. Subscribe to unlock all premium games and features!",
        action: <Button variant="default">Subscribe</Button>
      });
    }
    setSelectedGame(game);
    setGameState('intro');
    setCurrentQuestion(0);
    setPlayerResponses({
      player1: [],
      player2: []
    });
  };
  
  const startGame = () => {
    setGameState('playing');
    setShowAICoach(true);
  };
  
  const handleAnswer = (answer) => {
    // Update player responses
    setPlayerResponses(prev => ({
      ...prev,
      [currentPlayer]: [...prev[currentPlayer], answer]
    }));
    
    // Switch players or advance to next question
    if (currentPlayer === 'player1') {
      setCurrentPlayer('player2');
    } else {
      setCurrentPlayer('player1');
      setCurrentQuestion(prev => prev + 1);
    }
    
    // Check if game is complete
    if (currentPlayer === 'player2' && currentQuestion === selectedGame.questions.length - 1) {
      setGameState('completed');
    }
  };
  
  const resetGame = () => {
    setSelectedGame(null);
    setGameState('intro');
    setCurrentQuestion(0);
    setPlayerResponses({
      player1: [],
      player2: []
    });
    setCurrentPlayer('player1');
    setShowAICoach(false);
    setActiveTab('discover');
  };

  // Render game content based on state
  const renderGameContent = () => {
    if (!selectedGame) return null;
    
    switch (gameState) {
      case 'intro':
        return (
          <div className="text-center space-y-6 p-6">
            <h2 className="text-2xl font-bold">{selectedGame.title}</h2>
            <img 
              src={selectedGame.image} 
              alt={selectedGame.title} 
              className="w-full max-w-md mx-auto rounded-lg"
            />
            <p className="text-lg">{selectedGame.description}</p>
            
            <div className="bg-muted p-4 rounded-lg max-w-md mx-auto">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">How This Helps Your Relationship</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                This game strengthens your connection by improving mutual understanding and revealing new insights about each other's preferences and perspectives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button onClick={startGame} size="lg">
                Start Game
              </Button>
              <Button variant="outline" onClick={resetGame} size="lg">
                Choose Another Game
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-4">
              <Checkbox id="ai-coach" checked={showAICoach} onCheckedChange={setShowAICoach} />
              <label htmlFor="ai-coach" className="text-sm cursor-pointer">
                Enable Dr. Love AI Coach during game
              </label>
            </div>
          </div>
        );
        
      case 'playing':
        const question = selectedGame.questions[currentQuestion];
        return (
          <div className="space-y-6 p-6">
            <div className="flex justify-between items-center">
              <Badge variant="outline">
                Question {currentQuestion + 1} of {selectedGame.questions.length}
              </Badge>
              <Badge variant={currentPlayer === 'player1' ? 'default' : 'secondary'}>
                {currentPlayer === 'player1' ? 'Partner 1' : 'Partner 2'}
              </Badge>
            </div>
            
            <Progress value={(currentQuestion / selectedGame.questions.length) * 100} />
            
            <h2 className="text-xl font-semibold mt-6">{question.text}</h2>
            
            <div className="grid gap-3 mt-4">
              {question.options.map((option, idx) => (
                <Button 
                  key={idx} 
                  variant="outline" 
                  className="justify-start h-auto py-3 px-4 text-left"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>
        );
        
      case 'completed':
        return (
          <div className="space-y-6 p-6">
            <div className="text-center mb-8">
              <Badge className="mb-2">Game Completed</Badge>
              <h2 className="text-2xl font-bold">{selectedGame.title}</h2>
              <p className="text-muted-foreground">Great job! You've completed the game.</p>
            </div>
            
            <Tabs defaultValue="results">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="insights">Dr. Love Insights</TabsTrigger>
                <TabsTrigger value="discussion">Discussion Topics</TabsTrigger>
              </TabsList>
              
              <TabsContent value="results" className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Match Score</h3>
                  <div className="flex items-center gap-2">
                    <Progress value={75} className="flex-1" />
                    <span className="font-bold">75%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    You matched on 3 out of 5 questions. That's a great score!
                  </p>
                </Card>
                
                <div className="space-y-4">
                  {selectedGame.questions.map((question, idx) => (
                    <Card key={idx} className="p-4">
                      <h4 className="font-medium text-sm mb-2">{question.text}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Badge variant="outline" className="mb-1">Partner 1</Badge>
                          <p className="text-sm">{playerResponses.player1[idx]}</p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">Partner 2</Badge>
                          <p className="text-sm">{playerResponses.player2[idx]}</p>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        {playerResponses.player1[idx] === playerResponses.player2[idx] ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-xs text-green-500">Match!</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span className="text-xs text-red-500">Different answers</span>
                          </>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="insights">
                <DrLoveInsights 
                  gameData={selectedGame}
                  playerResponses={playerResponses}
                />
              </TabsContent>
              
              <TabsContent value="discussion" className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Suggested Discussion Topics</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Use these prompts to deepen your conversation based on game results.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="bg-muted p-3 rounded-md">
                      <div className="flex items-start gap-2">
                        <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm">What surprised you most about your partner's answers?</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <div className="flex items-start gap-2">
                        <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm">For the questions where you had different answers, discuss why you chose differently.</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <div className="flex items-start gap-2">
                        <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm">What's one new thing you learned about your partner from this game?</p>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-3 rounded-md">
                      <div className="flex items-start gap-2">
                        <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm">How can you use these insights to strengthen your relationship?</p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Capture Your Thoughts</h3>
                  <Textarea 
                    placeholder="Write down key insights or commitments from your discussion..."
                    className="min-h-[100px]"
                  />
                  <Button className="mt-3 w-full">
                    Save to Relationship Journal
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-center mt-8">
              <Button onClick={resetGame}>
                Play Another Game
              </Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Couples Games & Quizzes</h1>
              <p className="text-muted-foreground">Fun, interactive games to strengthen your relationship</p>
            </div>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    These games are designed by relationship experts to strengthen your connection
                    through fun, interactive experiences. Each game targets specific relationship skills.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {!selectedGame ? (
            <>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="discover">Discover</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="discover" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {games.map(game => (
                      <GameCard 
                        key={game.id} 
                        game={game} 
                        onSelect={handleGameSelect}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="favorites" className="mt-4">
                  <div className="text-center py-12">
                    <div className="bg-muted inline-flex p-4 rounded-full mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Save your favorite games here for quick access
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('discover')}>
                      Discover Games
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="completed" className="mt-4">
                  <div className="text-center py-12">
                    <div className="bg-muted inline-flex p-4 rounded-full mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No completed games yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Your completed games will appear here
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('discover')}>
                      Start Playing
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Unlock Premium Games</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Subscribe to access all premium games, save unlimited results, and get personalized recommendations.
                      </p>
                      <Button>Upgrade Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="p-0">
                {renderGameContent()}
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Dr. Love AI Coach Sidebar */}
        {showAICoach && selectedGame && (
          <div className="w-full md:w-[350px] shrink-0">
            <DrLoveChatInterface gameContext={selectedGame.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedCouplesGamesQuizzes;

