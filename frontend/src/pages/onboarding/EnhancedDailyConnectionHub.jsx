import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Calendar, Star, Zap, Users, Clock, Trophy, Gift, Camera, Coffee, Moon, Bot, Sparkles, Brain, Target } from 'lucide-react';

const EnhancedDailyConnectionHub = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dailyStreak, setDailyStreak] = useState(12);
  const [connectionScore, setConnectionScore] = useState(87);
  const [drLoveChat, setDrLoveChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [todayCompleted, setTodayCompleted] = useState({
    morningCheckin: true,
    conversationStarter: false,
    gratitudeShare: false,
    moodCheck: true
  });

  // Dr. Love AI responses based on user behavior and time
  const [drLoveInsights] = useState({
    morning: {
      greeting: "Good morning! I've analyzed your relationship patterns and have some personalized insights for you today.",
      tip: "Based on your communication style, I recommend focusing on active listening today. Your partner responds best to feeling truly heard.",
      question: "I notice you both are morning people. What's one way you could start each day more connected?"
    },
    afternoon: {
      greeting: "How's your day going? I'm here to help you navigate any relationship moments that come up.",
      tip: "Your stress levels tend to peak around this time. Remember to use the 'pause and breathe' technique if tensions arise.",
      question: "What's one thing your partner did today that you could appreciate out loud?"
    },
    evening: {
      greeting: "Perfect time for reflection! Let's process today's relationship moments together.",
      tip: "Evening is your optimal time for deep conversations. Your partner is most receptive to emotional sharing now.",
      question: "What's one thing you learned about your partner today, even if it was small?"
    }
  });

  const [personalizedContent, setPersonalizedContent] = useState({
    morningQuestion: "Based on your love language (Quality Time), what's one meaningful moment you want to create with your partner today?",
    conversationStarter: "I've noticed you both enjoy discussing future plans. Here's a question tailored for you: If you could design your perfect weekend together next month, what would it include?",
    eveningPrompt: "Your gratitude practice has been strong this week! Share three specific moments from today when your partner made you smile.",
    moodAnalysis: "I notice you both tend to be energetic in the mornings. How are you feeling right now compared to your usual pattern?"
  });

  const [drLoveRecommendations] = useState([
    {
      type: "communication",
      title: "Practice Active Listening",
      reason: "Your recent conversations show room for deeper understanding",
      action: "Try the 'reflect back' technique during your next chat",
      priority: "high"
    },
    {
      type: "intimacy",
      title: "Schedule Quality Time",
      reason: "It's been 3 days since your last dedicated one-on-one time",
      action: "Plan 30 minutes of phone-free connection tonight",
      priority: "medium"
    },
    {
      type: "appreciation",
      title: "Express Gratitude",
      reason: "Your partner's love language is Words of Affirmation",
      action: "Share one specific thing you appreciate about them",
      priority: "high"
    }
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeOfDay = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const getDrLoveContent = () => {
    return drLoveInsights[getTimeOfDay()];
  };

  const getTimeIcon = () => {
    const timeOfDay = getTimeOfDay();
    const icons = {
      morning: Coffee,
      afternoon: Star,
      evening: Moon
    };
    return icons[timeOfDay];
  };

  const sendMessageToDrLove = () => {
    if (!userInput.trim()) return;

    const newMessage = { type: 'user', content: userInput };
    setChatMessages(prev => [...prev, newMessage]);

    // Simulate Dr. Love AI response
    setTimeout(() => {
      const responses = [
        "That's a great insight! Based on what you've shared, I recommend focusing on emotional validation. When your partner shares feelings, try responding with 'That sounds really important to you' before offering solutions.",
        "I understand your concern. This is actually quite common in relationships. The key is to approach this with curiosity rather than judgment. Have you tried asking your partner what they need in this moment?",
        "Your awareness of this pattern is already a huge step forward! Research shows that couples who recognize their communication patterns are 73% more likely to improve them. Let's work on a specific strategy together.",
        "This reminds me of the Gottman research on relationship success. What you're describing suggests you both care deeply but may have different communication styles. Would you like me to help you understand each other's styles better?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const aiMessage = { type: 'ai', content: randomResponse };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 1500);

    setUserInput('');
  };

  const completedCount = Object.values(todayCompleted).filter(Boolean).length;
  const totalTasks = Object.keys(todayCompleted).length;
  const progressPercentage = (completedCount / totalTasks) * 100;

  const TimeIcon = getTimeIcon();
  const drLoveContent = getDrLoveContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Enhanced Header with Dr. Love Integration */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                <TimeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{drLoveContent.greeting}</h1>
                <p className="text-gray-600">{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 mb-1">
                <Zap className="w-5 h-5 text-orange-500" />
                <span className="text-lg font-bold text-gray-800">{dailyStreak} day streak</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-600">Connection Score: {connectionScore}%</span>
              </div>
            </div>
          </div>

          {/* Progress Bar with AI Insights */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Today's Progress</span>
              <span className="text-sm text-gray-600">{completedCount}/{totalTasks} completed</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 mt-1">Dr. Love: "You're {progressPercentage}% through today's connection goals. Great momentum!"</p>
          </div>

          {/* Dr. Love Chat Toggle */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setDrLoveChat(!drLoveChat)}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-md transition-all duration-200"
            >
              <Bot className="w-4 h-4" />
              <span>Chat with Dr. Love</span>
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Brain className="w-4 h-4 text-purple-600" />
              <span>AI Coaching Active</span>
            </div>
          </div>
        </div>

        {/* Dr. Love Chat Interface */}
        {drLoveChat && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Dr. Love AI Coach</h3>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4 max-h-64 overflow-y-auto">
              {chatMessages.length === 0 ? (
                <div className="text-center text-gray-600">
                  <p className="mb-2">👋 Hi! I'm Dr. Love, your AI relationship coach.</p>
                  <p>Ask me anything about your relationship, communication, or any challenges you're facing!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {chatMessages.map((message, index) => (
                    <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-purple-100 text-purple-800'
                      }`}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessageToDrLove()}
                placeholder="Ask Dr. Love anything about your relationship..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={sendMessageToDrLove}
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-md transition-all duration-200"
              >
                Send
              </button>
            </div>
          </div>
        )}

        {/* Dr. Love Recommendations */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Dr. Love's Personalized Recommendations</h3>
          </div>
          
          <div className="space-y-3">
            {drLoveRecommendations.map((rec, index) => (
              <div key={index} className={`border-l-4 ${rec.priority === 'high' ? 'border-red-500' : 'border-yellow-500'} bg-gray-50 p-4 rounded-r-lg`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-800">{rec.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    rec.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rec.priority} priority
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{rec.reason}</p>
                <p className="text-sm font-medium text-purple-700">{rec.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Activities with AI Coaching */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI-Enhanced Morning Check-in */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">AI-Powered Morning Check-in</h2>
              </div>
              {todayCompleted.morningCheckin && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 mb-4">
              <div className="flex items-start space-x-2 mb-3">
                <Bot className="w-5 h-5 text-purple-600 mt-1" />
                <p className="text-gray-700">{personalizedContent.morningQuestion}</p>
              </div>
              {todayCompleted.morningCheckin ? (
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-600 italic">"I want to create a moment where we cook breakfast together without any distractions - just us, music, and conversation."</p>
                  <p className="text-xs text-gray-500 mt-2">Completed at 8:30 AM</p>
                  <div className="mt-2 p-2 bg-purple-50 rounded-lg">
                    <p className="text-xs text-purple-700">💡 Dr. Love: "Beautiful! Cooking together engages multiple senses and creates natural conversation opportunities. This aligns perfectly with your Quality Time love language."</p>
                  </div>
                </div>
              ) : (
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Share Your Thoughts
                </button>
              )}
            </div>
          </div>

          {/* AI-Enhanced Conversation Starter */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Smart Conversation Starter</h2>
              </div>
              {todayCompleted.conversationStarter && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
              <div className="flex items-start space-x-2 mb-3">
                <Sparkles className="w-5 h-5 text-blue-600 mt-1" />
                <p className="text-gray-700">{personalizedContent.conversationStarter}</p>
              </div>
              {!todayCompleted.conversationStarter && (
                <button 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  onClick={() => setTodayCompleted(prev => ({ ...prev, conversationStarter: true }))}
                >
                  Start This Conversation
                </button>
              )}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>🤖 AI-curated for your relationship</span>
              <button className="text-blue-600 hover:text-blue-800">Get New Question</button>
            </div>
          </div>

          {/* AI-Enhanced Mood Check */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">AI Mood Analysis</h2>
              </div>
              {todayCompleted.moodCheck && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 mb-4">
              <div className="flex items-start space-x-2 mb-3">
                <Brain className="w-5 h-5 text-green-600 mt-1" />
                <p className="text-gray-700">{personalizedContent.moodAnalysis}</p>
              </div>
              {todayCompleted.moodCheck ? (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">😊</div>
                      <p className="text-sm text-gray-600">You: Happy</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-2xl mb-1">🥰</div>
                      <p className="text-sm text-gray-600">Partner: Excited</p>
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-xs text-purple-700">🤖 Dr. Love Analysis: "Great emotional alignment! You're both in positive states, which is optimal for deeper conversations and planning activities together."</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-2">
                  {['😊', '😍', '😌', '🤗', '😴', '😅', '🥰', '😘'].map((emoji, index) => (
                    <button 
                      key={index}
                      className="bg-white hover:bg-gray-50 p-3 rounded-lg text-2xl transition-all duration-200 hover:scale-110"
                      onClick={() => setTodayCompleted(prev => ({ ...prev, moodCheck: true }))}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* AI-Enhanced Evening Gratitude */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Smart Gratitude Practice</h2>
              </div>
              {todayCompleted.gratitudeShare && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
              <div className="flex items-start space-x-2 mb-3">
                <Sparkles className="w-5 h-5 text-purple-600 mt-1" />
                <p className="text-gray-700">{personalizedContent.eveningPrompt}</p>
              </div>
              {!todayCompleted.gratitudeShare && (
                <button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                  onClick={() => setTodayCompleted(prev => ({ ...prev, gratitudeShare: true }))}
                >
                  Share Your Gratitude
                </button>
              )}
            </div>
            
            {getTimeOfDay() === 'evening' && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">🌙 Dr. Love: Perfect timing! Evening gratitude practice strengthens emotional bonds before sleep.</p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Quick Actions with AI Suggestions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">AI-Suggested Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-200 relative">
              <Camera className="w-8 h-8 text-pink-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Share Photo</span>
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">!</div>
            </button>
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-200">
              <Gift className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Send Love Note</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:shadow-md transition-all duration-200 relative">
              <Calendar className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Plan Date</span>
              <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</div>
            </button>
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl hover:shadow-md transition-all duration-200">
              <Clock className="w-8 h-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Set Reminder</span>
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-3 text-center">🤖 Red dots indicate Dr. Love's high-priority suggestions based on your relationship patterns</p>
        </div>

        {/* Enhanced Dr. Love Daily Insight */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 mt-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Dr. Love's Personalized Daily Insight</h3>
          </div>
          <p className="text-lg mb-4">{drLoveContent.tip}</p>
          <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
            <p className="text-sm font-medium mb-2">💭 Reflection Question:</p>
            <p className="text-sm">{drLoveContent.question}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Personalized for your relationship stage</span>
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-30 transition-all duration-200">
              Get More Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDailyConnectionHub;

