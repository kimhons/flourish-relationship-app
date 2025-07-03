import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Calendar, Star, Zap, Users, Clock, Trophy, Gift, Camera, Coffee, Moon } from 'lucide-react';

const DailyConnectionHub = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dailyStreak, setDailyStreak] = useState(12);
  const [connectionScore, setConnectionScore] = useState(87);
  const [todayCompleted, setTodayCompleted] = useState({
    morningCheckin: true,
    conversationStarter: false,
    gratitudeShare: false,
    moodCheck: true
  });

  const [morningQuestion] = useState("What's one thing you're looking forward to sharing with your partner today?");
  const [eveningPrompt] = useState("Share three things you appreciated about your partner today");
  const [conversationStarter] = useState("If you could relive any moment from our relationship, which would it be and why?");

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

  const getGreeting = () => {
    const timeOfDay = getTimeOfDay();
    const greetings = {
      morning: "Good morning! Ready to connect?",
      afternoon: "Good afternoon! How's your day going?",
      evening: "Good evening! Time to reflect together"
    };
    return greetings[timeOfDay];
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

  const completedCount = Object.values(todayCompleted).filter(Boolean).length;
  const totalTasks = Object.keys(todayCompleted).length;
  const progressPercentage = (completedCount / totalTasks) * 100;

  const TimeIcon = getTimeIcon();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full">
                <TimeIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{getGreeting()}</h1>
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

          {/* Progress Bar */}
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
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Morning Check-in */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Morning Check-in</h2>
              </div>
              {todayCompleted.morningCheckin && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 mb-3">{morningQuestion}</p>
              {todayCompleted.morningCheckin ? (
                <div className="bg-white rounded-lg p-3">
                  <p className="text-sm text-gray-600 italic">"I'm excited to share the surprise I've been planning for our anniversary dinner tonight!"</p>
                  <p className="text-xs text-gray-500 mt-2">Completed at 8:30 AM</p>
                </div>
              ) : (
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
                  Share Your Thoughts
                </button>
              )}
            </div>
          </div>

          {/* Conversation Starter */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Conversation Starter</h2>
              </div>
              {todayCompleted.conversationStarter && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 mb-3">{conversationStarter}</p>
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
              <span>💡 Tip: Ask follow-up questions!</span>
              <button className="text-blue-600 hover:text-blue-800">Get New Question</button>
            </div>
          </div>

          {/* Mood Check */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-full">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Mood Check</h2>
              </div>
              {todayCompleted.moodCheck && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 mb-3">How are you both feeling today?</p>
              {todayCompleted.moodCheck ? (
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

          {/* Evening Gratitude */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Evening Gratitude</h2>
              </div>
              {todayCompleted.gratitudeShare && (
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="w-5 h-5 text-green-600" />
                </div>
              )}
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
              <p className="text-gray-700 mb-3">{eveningPrompt}</p>
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
                <p className="text-sm text-yellow-800">🌙 Perfect time for evening reflection!</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-200">
              <Camera className="w-8 h-8 text-pink-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Share Photo</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-200">
              <Gift className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Send Love Note</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl hover:shadow-md transition-all duration-200">
              <Calendar className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Plan Date</span>
            </button>
            <button className="flex flex-col items-center p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl hover:shadow-md transition-all duration-200">
              <Clock className="w-8 h-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Set Reminder</span>
            </button>
          </div>
        </div>

        {/* Dr. Love Tip of the Day */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 mt-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Dr. Love's Daily Tip</h3>
          </div>
          <p className="text-lg mb-4">"The magic happens in the small, daily moments of connection. A simple 'How was your day?' with genuine interest can strengthen your bond more than grand gestures."</p>
          <div className="flex justify-between items-center">
            <span className="text-sm opacity-90">Relationship Science Fact #247</span>
            <button className="bg-white bg-opacity-20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-30 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyConnectionHub;

