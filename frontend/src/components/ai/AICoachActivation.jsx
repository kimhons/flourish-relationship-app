import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Box, 
  Button, 
  LinearProgress, 
  Alert,
  Avatar,
  Chip,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Fade,
  Zoom
} from '@mui/material';
import {
  Psychology,
  Smart,
  Star,
  PlayArrow,
  Check,
  ChatBubble,
  Insights,
  TrendingUp,
  Shield,
  Science,
  School,
  EmojiEmotions,
  Favorite,
  Settings,
  Lightbulb,
  AutoAwesome
} from '@mui/icons-material';

const AICoachActivation = ({ userData, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActivating, setIsActivating] = useState(false);
  const [coachPersonality, setCoachPersonality] = useState(null);
  const [firstSessionStarted, setFirstSessionStarted] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionInsights, setSessionInsights] = useState([]);
  const [showTour, setShowTour] = useState(false);

  const activationSteps = [
    {
      label: "Initializing AI Systems",
      description: "Setting up your personalized AI coach with advanced capabilities",
      duration: 2000
    },
    {
      label: "Analyzing Your Profile",
      description: "Processing your preferences, goals, and coaching areas",
      duration: 3000
    },
    {
      label: "Expert Assignment",
      description: "Matching you with the most suitable AI expert specialists",
      duration: 2500
    },
    {
      label: "Personalization Calibration",
      description: "Customizing coaching style and approach for your needs",
      duration: 2000
    },
    {
      label: "Safety Protocols Active",
      description: "Activating crisis detection and intervention systems",
      duration: 1500
    },
    {
      label: "Coach Ready",
      description: "Your AI coach is ready to begin your first session",
      duration: 1000
    }
  ];

  // Simulate AI coach personality generation based on user data
  const generateCoachPersonality = () => {
    const personalities = [
      {
        name: "Dr. Sarah Chen",
        type: "Relationship Counselor",
        specialties: ["Communication", "Conflict Resolution", "Intimacy Building"],
        approach: "Warm, empathetic, and solution-focused",
        avatar: "👩‍⚕️",
        background: "Licensed therapist with 15+ years in couples counseling",
        style: "Uses evidence-based techniques with a compassionate approach"
      },
      {
        name: "Coach Michael Torres",
        type: "Dating Expert",
        specialties: ["Dating Confidence", "Modern Dating", "Self-Worth"],
        approach: "Motivational, practical, and confidence-building",
        avatar: "👨‍🏫",
        background: "Dating coach helping thousands find meaningful connections",
        style: "Combines psychology with real-world dating strategies"
      },
      {
        name: "Dr. Alex Rivera",
        type: "Personal Growth Specialist",
        specialties: ["Emotional Intelligence", "Boundaries", "Self-Discovery"],
        approach: "Insightful, gentle, and transformative",
        avatar: "🧠",
        background: "Psychologist specializing in personal development",
        style: "Focuses on deep self-awareness and authentic growth"
      }
    ];

    // Select personality based on user's primary coaching areas
    const primaryAreas = userData?.coachingAreas?.selected || [];
    if (primaryAreas.includes('dating_confidence') || primaryAreas.includes('online_dating_mastery')) {
      return personalities[1]; // Dating Expert
    } else if (primaryAreas.includes('emotional_intelligence') || primaryAreas.includes('self_worth_building')) {
      return personalities[2]; // Personal Growth
    } else {
      return personalities[0]; // Relationship Counselor
    }
  };

  const startActivation = async () => {
    setIsActivating(true);

    // Simulate progressive activation steps
    for (let i = 0; i < activationSteps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, activationSteps[i].duration));
    }

    // Generate coach personality
    const personality = generateCoachPersonality();
    setCoachPersonality(personality);

    setIsActivating(false);
    setCurrentStep(activationSteps.length);
  };

  const startFirstSession = async () => {
    setFirstSessionStarted(true);
    
    // Initialize first session with AI-generated welcome message
    const welcomeMessage = {
      id: 1,
      sender: 'coach',
      content: `Hello! I'm ${coachPersonality.name}, your personal AI relationship coach. I'm excited to work with you on your journey toward deeper connections and personal growth.

Based on your profile, I can see you're focusing on ${userData?.coachingAreas?.selected?.slice(0, 2).join(' and ')}. That's wonderful - these are areas where I've helped many people create real, lasting change.

Before we dive in, I'd love to know: What's the most important thing you'd like to achieve in your relationships right now?`,
      timestamp: new Date(),
      type: 'welcome'
    };

    setChatMessages([welcomeMessage]);
    
    // Simulate typing indicator briefly
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsTyping(false);
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    // Add user message
    const userMsg = {
      id: chatMessages.length + 1,
      sender: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMsg]);
    setUserMessage('');
    setIsTyping(true);

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate AI response (this would use our advanced AI system)
    const aiResponse = generateAIResponse(userMessage, chatMessages);
    
    const coachMsg = {
      id: chatMessages.length + 2,
      sender: 'coach',
      content: aiResponse.content,
      timestamp: new Date(),
      insights: aiResponse.insights,
      actionItems: aiResponse.actionItems
    };

    setChatMessages(prev => [...prev, coachMsg]);
    
    // Add insights if any
    if (aiResponse.insights.length > 0) {
      setSessionInsights(prev => [...prev, ...aiResponse.insights]);
    }
    
    setIsTyping(false);
  };

  const generateAIResponse = (userInput, previousMessages) => {
    // This would integrate with our advanced AI system
    // For demo purposes, generating contextual responses
    
    const responses = {
      insights: [],
      actionItems: [],
      content: ""
    };

    if (userInput.toLowerCase().includes('communication')) {
      responses.content = `I can hear that communication is really important to you. That's actually one of the strongest predictors of relationship success - couples who communicate well tend to have much more satisfying relationships.

From what you've shared, it sounds like you might be experiencing some challenges in expressing your needs clearly. This is incredibly common, and the good news is that communication is a skill that can be developed with practice.

Let me ask you this: When you try to communicate something important to someone close to you, what tends to happen? Do you find yourself holding back, or maybe feeling like you're not being heard?`;

      responses.insights = [
        "Communication patterns often reflect our attachment style and past experiences",
        "Clear expression of needs is a learnable skill that improves with practice"
      ];

      responses.actionItems = [
        "Practice using 'I' statements to express feelings",
        "Try the 'mirror' technique - repeat back what you heard before responding"
      ];
    } else if (userInput.toLowerCase().includes('confidence') || userInput.toLowerCase().includes('dating')) {
      responses.content = `Building genuine confidence is such a beautiful journey, and I'm honored to be part of it with you. True confidence isn't about being perfect or never feeling nervous - it's about knowing your worth and being comfortable with who you are.

I notice you mentioned dating, which can definitely bring up feelings of vulnerability. That's completely natural. Dating is essentially putting yourself out there and hoping for connection, which requires courage.

What I'm curious about is: What does confidence mean to you? And are there specific situations where you feel your confidence wavers?`;

      responses.insights = [
        "Authentic confidence comes from self-acceptance, not perfection",
        "Dating anxiety often stems from fear of rejection or not being 'enough'"
      ];

      responses.actionItems = [
        "Practice self-compassion when facing rejection or setbacks",
        "Identify three personal strengths to remember during challenging moments"
      ];
    } else {
      responses.content = `Thank you for sharing that with me. I can sense there's a lot of depth to what you're experiencing, and I want you to know that whatever you're going through, you're not alone in this.

Every person's relationship journey is unique, but the desire for connection, understanding, and growth is universal. You've taken a brave step by seeking support, and that tells me a lot about your commitment to positive change.

I'm here to provide you with personalized guidance, evidence-based tools, and most importantly, a safe space to explore and grow. Together, we'll work at your pace to help you build the relationships you truly want.

What would you like to explore first in our work together?`;

      responses.insights = [
        "Seeking support shows emotional intelligence and growth mindset",
        "Personal awareness is the foundation of all relationship improvement"
      ];

      responses.actionItems = [
        "Reflect on your relationship patterns and what you'd like to change",
        "Set one small, achievable goal for this week"
      ];
    }

    return responses;
  };

  const handleStartTour = () => {
    setShowTour(true);
  };

  const completeTour = () => {
    setShowTour(false);
    onComplete({
      coachActivated: true,
      coachPersonality,
      firstSessionCompleted: true,
      initialInsights: sessionInsights,
      activationTime: new Date()
    });
  };

  useEffect(() => {
    // Auto-start activation when component mounts
    setTimeout(startActivation, 1000);
  }, []);

  if (isActivating) {
    return (
      <Container maxWidth="md">
        <Box py={8} textAlign="center">
          <Box mb={4}>
            <Smart sx={{ fontSize: 80, color: 'primary.main', animation: 'pulse 2s infinite' }} />
          </Box>
          
          <Typography variant="h4" gutterBottom>
            Activating Your AI Coach
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Powered by Advanced AI • Mixture of Experts
          </Typography>
          
          <Box maxWidth={600} mx="auto" mt={4}>
            <Stepper activeStep={currentStep} orientation="vertical">
              {activationSteps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    StepIconComponent={() => (
                      <Box
                        sx={{
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          bgcolor: index <= currentStep ? 'primary.main' : 'grey.300',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {index < currentStep ? (
                          <Check sx={{ fontSize: 16, color: 'white' }} />
                        ) : (
                          <CircularProgress 
                            size={16} 
                            sx={{ color: index === currentStep ? 'white' : 'grey.400' }}
                          />
                        )}
                      </Box>
                    )}
                  >
                    <Typography variant="h6">{step.label}</Typography>
                  </StepLabel>
                  <StepContent>
                    <Typography color="textSecondary">{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
      </Container>
    );
  }

  if (!firstSessionStarted) {
    return (
      <Container maxWidth="lg">
        <Box py={4}>
          <Zoom in={true}>
            <Box textAlign="center" mb={6}>
              <Box mb={3}>
                <AutoAwesome sx={{ fontSize: 60, color: 'primary.main' }} />
              </Box>
              <Typography variant="h3" gutterBottom>
                Meet Your AI Coach
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Your personalized coaching experience is ready!
              </Typography>
            </Box>
          </Zoom>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={8}>
              <Fade in={true} timeout={1000}>
                <Card elevation={8} sx={{ borderRadius: 4 }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box textAlign="center" mb={3}>
                      <Avatar 
                        sx={{ 
                          width: 100, 
                          height: 100, 
                          fontSize: 48, 
                          bgcolor: 'primary.main',
                          mx: 'auto',
                          mb: 2
                        }}
                      >
                        {coachPersonality?.avatar}
                      </Avatar>
                      <Typography variant="h4" gutterBottom>
                        {coachPersonality?.name}
                      </Typography>
                      <Chip 
                        label={coachPersonality?.type} 
                        color="primary" 
                        sx={{ mb: 2 }}
                      />
                      <Typography variant="h6" color="textSecondary" gutterBottom>
                        {coachPersonality?.approach}
                      </Typography>
                    </Box>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            <Star color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Specialties
                          </Typography>
                          <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                            {coachPersonality?.specialties.map((specialty, index) => (
                              <Chip 
                                key={index} 
                                label={specialty} 
                                variant="outlined" 
                                size="small"
                              />
                            ))}
                          </Box>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Box>
                          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            <School color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Background
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {coachPersonality?.background}
                          </Typography>
                        </Box>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Box>
                          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            <Psychology color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                            Coaching Style
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {coachPersonality?.style}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Box mt={4} p={3} bgcolor="primary.50" borderRadius={2}>
                      <Typography variant="h6" gutterBottom>
                        <Lightbulb color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                        Your Personalized Plan
                      </Typography>
                      <Typography variant="body2" mb={2}>
                        Based on your profile, I'll focus on:
                      </Typography>
                      <Box display="flex" flexWrap="wrap" gap={1}>
                        {userData?.coachingAreas?.selected?.slice(0, 4).map((area, index) => (
                          <Chip 
                            key={index} 
                            label={area.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} 
                            color="primary"
                            size="small"
                          />
                        ))}
                      </Box>
                    </Box>

                    <Box textAlign="center" mt={4}>
                      <Button
                        variant="contained"
                        size="large"
                        onClick={startFirstSession}
                        startIcon={<ChatBubble />}
                        sx={{ 
                          px: 4, 
                          py: 1.5,
                          fontSize: '1.1rem',
                          borderRadius: 3
                        }}
                      >
                        Start Your First Session
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: 'fit-content' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    <Shield color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Safety Features
                  </Typography>
                  <Box mb={2}>
                    <Alert severity="success" sx={{ mb: 1 }}>
                      Crisis detection active
                    </Alert>
                    <Alert severity="info">
                      24/7 emergency resources available
                    </Alert>
                  </Box>
                  
                  <Typography variant="h6" gutterBottom mt={3}>
                    <Science color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    AI Technology
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    • Advanced prompt engineering<br/>
                    • Mixture of experts routing<br/>
                    • Real-time emotion analysis<br/>
                    • Personalized response generation
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box py={2}>
        {/* Session Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
              {coachPersonality?.avatar}
            </Avatar>
            <Box>
              <Typography variant="h6">
                Session with {coachPersonality?.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                First Coaching Session • AI-Powered
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap={1}>
            <Chip 
              label={`${sessionInsights.length} Insights`} 
              color="primary" 
              size="small" 
              icon={<Insights />}
            />
            <Button
              variant="outlined"
              size="small"
              onClick={handleStartTour}
              startIcon={<Star />}
            >
              Tour Features
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Chat Interface */}
          <Grid item xs={12} md={8}>
            <Card sx={{ height: 500 }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                {/* Messages */}
                <Box flex={1} sx={{ overflowY: 'auto', mb: 2 }}>
                  {chatMessages.map((message) => (
                    <Box
                      key={message.id}
                      display="flex"
                      justifyContent={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                      mb={2}
                    >
                      <Card
                        sx={{
                          maxWidth: '80%',
                          bgcolor: message.sender === 'user' ? 'primary.main' : 'grey.100',
                          color: message.sender === 'user' ? 'white' : 'text.primary'
                        }}
                      >
                        <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                          <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                            {message.content}
                          </Typography>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              opacity: 0.7, 
                              display: 'block', 
                              mt: 1 
                            }}
                          >
                            {message.timestamp.toLocaleTimeString()}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  ))}
                  
                  {isTyping && (
                    <Box display="flex" justifyContent="flex-start" mb={2}>
                      <Card sx={{ bgcolor: 'grey.100' }}>
                        <CardContent sx={{ p: 2 }}>
                          <Typography variant="body2" color="textSecondary">
                            {coachPersonality?.name} is typing...
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  )}
                </Box>

                {/* Message Input */}
                <Box display="flex" gap={1}>
                  <TextField
                    fullWidth
                    multiline
                    maxRows={3}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Share what's on your mind..."
                    variant="outlined"
                    size="small"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    onClick={sendMessage}
                    disabled={!userMessage.trim() || isTyping}
                    sx={{ alignSelf: 'flex-end' }}
                  >
                    Send
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Session Insights */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: 500 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  <Insights color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Session Insights
                </Typography>

                {sessionInsights.length > 0 ? (
                  <Box>
                    {sessionInsights.map((insight, index) => (
                      <Box key={index} mb={2} p={2} bgcolor="primary.50" borderRadius={1}>
                        <Typography variant="body2">
                          {insight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box textAlign="center" py={4}>
                    <EmojiEmotions sx={{ fontSize: 48, color: 'grey.400', mb: 2 }} />
                    <Typography variant="body2" color="textSecondary">
                      Insights will appear as we chat
                    </Typography>
                  </Box>
                )}

                <Box mt={3}>
                  <Typography variant="subtitle2" gutterBottom>
                    <TrendingUp color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Progress Tracking
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={Math.min((chatMessages.length / 10) * 100, 100)} 
                    sx={{ mb: 1 }}
                  />
                  <Typography variant="caption" color="textSecondary">
                    Session engagement: {Math.min(chatMessages.length * 10, 100)}%
                  </Typography>
                </Box>

                <Box mt={3}>
                  <Alert severity="info" sx={{ fontSize: '0.875rem' }}>
                    Your AI coach learns from each interaction to provide increasingly personalized support.
                  </Alert>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Session Actions */}
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button
            variant="outlined"
            onClick={onBack}
          >
            Back to Setup
          </Button>
          
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              startIcon={<Settings />}
            >
              Coach Settings
            </Button>
            <Button
              variant="contained"
              onClick={completeTour}
              startIcon={<Check />}
            >
              Complete Setup
            </Button>
          </Box>
        </Box>

        {/* Feature Tour Dialog */}
        <Dialog 
          open={showTour} 
          onClose={() => setShowTour(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Star color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
            AI Coach Features Tour
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    <Psychology color="primary" sx={{ mr: 1 }} />
                    Advanced AI Intelligence
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Your coach uses mixture of experts AI to provide specialized guidance for different relationship areas.
                  </Typography>
                </Box>
                
                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    <Insights color="primary" sx={{ mr: 1 }} />
                    Real-time Insights
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Get personalized insights and patterns identified as you chat with your AI coach.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    <Shield color="primary" sx={{ mr: 1 }} />
                    Safety First
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Advanced crisis detection ensures you get appropriate support when you need it most.
                  </Typography>
                </Box>
                
                <Box mb={3}>
                  <Typography variant="h6" gutterBottom>
                    <TrendingUp color="primary" sx={{ mr: 1 }} />
                    Progress Tracking
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Monitor your growth and celebrate breakthroughs with detailed progress analytics.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowTour(false)} color="primary">
              Got it!
            </Button>
            <Button onClick={completeTour} variant="contained" color="primary">
              Start Coaching
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default AICoachActivation;