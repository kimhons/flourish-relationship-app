/**
 * Flourish App: Dr. Love AI Coach Component
 * Interactive AI coaching interface with real-time chat
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Avatar, 
  Chip, 
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  LinearProgress,
  Alert,
  Fab,
  Tooltip
} from '@mui/material';
import {
  Send as SendIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Psychology as PsychologyIcon,
  Favorite as FavoriteIcon,
  Close as CloseIcon,
  Settings as SettingsIcon,
  TrendingUp as TrendingUpIcon,
  Lightbulb as LightbulbIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import aiService, { COACHING_MODES, SESSION_TYPES, handleAIError, extractCoachingInsights } from '../../services/aiService';

// Styled components
const ChatContainer = styled(Box)(({ theme }) => ({
  height: '600px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  overflowY: 'auto',
  padding: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const MessageBubble = styled(Box)(({ theme, isUser }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1.5),
  borderRadius: theme.spacing(2),
  backgroundColor: isUser 
    ? theme.palette.primary.main 
    : theme.palette.grey[100],
  color: isUser 
    ? theme.palette.primary.contrastText 
    : theme.palette.text.primary,
  alignSelf: isUser ? 'flex-end' : 'flex-start',
  wordWrap: 'break-word',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'flex-end',
}));

const CoachAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 40,
  height: 40,
}));

const InsightCard = styled(Card)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  backgroundColor: theme.palette.info.light,
  '& .MuiCardContent-root': {
    padding: theme.spacing(1.5),
    '&:last-child': {
      paddingBottom: theme.spacing(1.5),
    },
  },
}));

const DrLoveCoach = ({ open, onClose, initialMode = COACHING_MODES.GENERAL }) => {
  // State management
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [coachingMode, setCoachingMode] = useState(initialMode);
  const [sessionType, setSessionType] = useState(SESSION_TYPES.TEXT_CHAT);
  const [isRecording, setIsRecording] = useState(false);
  const [sessionStarted, setSessionStarted] = useState(false);
  const [error, setError] = useState(null);
  const [insights, setInsights] = useState([]);
  const [moodAssessment, setMoodAssessment] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  
  // Refs
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Start coaching session
  const startSession = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await aiService.startCoachingSession(coachingMode, sessionType);
      
      if (response.status === 'success') {
        setSessionId(response.data.session_id);
        setSessionStarted(true);
        
        // Add welcome message
        const welcomeMessage = {
          id: Date.now(),
          text: response.data.welcome_message || "Hello! I'm Dr. Love, your AI relationship coach. How can I help you today?",
          isUser: false,
          timestamp: new Date(),
          type: 'welcome'
        };
        
        setMessages([welcomeMessage]);
      }
    } catch (error) {
      setError(handleAIError(error, 'Failed to start coaching session'));
    } finally {
      setIsLoading(false);
    }
  };

  // Send message to AI coach
  const sendMessage = async () => {
    if (!inputMessage.trim() || !sessionId || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await aiService.sendCoachingMessage(
        sessionId, 
        inputMessage,
        { mood: moodAssessment, previous_insights: insights }
      );

      if (response.status === 'success') {
        const coachingData = extractCoachingInsights(response);
        
        const aiMessage = {
          id: Date.now() + 1,
          text: coachingData.message,
          isUser: false,
          timestamp: new Date(),
          insights: coachingData.insights,
          recommendations: coachingData.recommendations,
          mood: coachingData.mood,
        };

        setMessages(prev => [...prev, aiMessage]);
        
        // Update insights and mood assessment
        if (coachingData.insights.length > 0) {
          setInsights(prev => [...prev, ...coachingData.insights]);
        }
        
        if (coachingData.mood) {
          setMoodAssessment(coachingData.mood);
        }
      }
    } catch (error) {
      setError(handleAIError(error, 'Failed to send message'));
      
      // Add error message to chat
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble responding right now. Please try again.",
        isUser: false,
        timestamp: new Date(),
        isError: true,
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle key press in input
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  // End coaching session
  const endSession = async (rating = null) => {
    if (!sessionId) return;

    try {
      await aiService.endCoachingSession(sessionId, rating);
      setSessionStarted(false);
      setSessionId(null);
      setMessages([]);
      setInsights([]);
      setMoodAssessment(null);
      onClose();
    } catch (error) {
      console.error('Failed to end session:', error);
      // Still close the session locally
      setSessionStarted(false);
      setSessionId(null);
      onClose();
    }
  };

  // Voice recording (placeholder for future implementation)
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement voice recording functionality
  };

  // Render message with insights
  const renderMessage = (message) => (
    <Box key={message.id} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
      {!message.isUser && (
        <CoachAvatar>
          <PsychologyIcon />
        </CoachAvatar>
      )}
      
      <Box sx={{ flex: 1 }}>
        <MessageBubble isUser={message.isUser}>
          <Typography variant="body1">{message.text}</Typography>
          
          {message.timestamp && (
            <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mt: 0.5 }}>
              {message.timestamp.toLocaleTimeString()}
            </Typography>
          )}
        </MessageBubble>
        
        {/* Render insights */}
        {message.insights && message.insights.length > 0 && (
          <InsightCard>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <LightbulbIcon color="info" fontSize="small" />
                <Typography variant="subtitle2" color="info.dark">
                  Insights
                </Typography>
              </Box>
              {message.insights.map((insight, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                  • {insight}
                </Typography>
              ))}
            </CardContent>
          </InsightCard>
        )}
        
        {/* Render recommendations */}
        {message.recommendations && message.recommendations.length > 0 && (
          <Box sx={{ mt: 1 }}>
            {message.recommendations.map((rec, index) => (
              <Chip 
                key={index} 
                label={rec} 
                size="small" 
                variant="outlined" 
                sx={{ mr: 0.5, mb: 0.5 }}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <Dialog 
      open={open} 
      onClose={() => endSession()} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { height: '80vh' }
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'secondary.main' }}>
            <FavoriteIcon />
          </Avatar>
          <Box>
            <Typography variant="h6">Dr. Love AI Coach</Typography>
            <Typography variant="caption" color="text.secondary">
              {sessionStarted ? `${coachingMode} session` : 'Ready to help'}
            </Typography>
          </Box>
        </Box>
        
        <Box>
          <IconButton onClick={() => setShowSettings(true)}>
            <SettingsIcon />
          </IconButton>
          <IconButton onClick={() => endSession()}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 0 }}>
        {error && (
          <Alert severity="error" sx={{ m: 2 }}>
            {error}
          </Alert>
        )}
        
        {!sessionStarted ? (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Welcome to Dr. Love AI Coach
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              I'm here to help you with relationship advice, dating guidance, and personal growth.
              Choose your coaching mode and let's begin!
            </Typography>
            
            <FormControl sx={{ minWidth: 200, mb: 2 }}>
              <InputLabel>Coaching Mode</InputLabel>
              <Select
                value={coachingMode}
                onChange={(e) => setCoachingMode(e.target.value)}
                label="Coaching Mode"
              >
                <MenuItem value={COACHING_MODES.GENERAL}>General Advice</MenuItem>
                <MenuItem value={COACHING_MODES.DATING}>Dating Guidance</MenuItem>
                <MenuItem value={COACHING_MODES.RELATIONSHIP}>Relationship Support</MenuItem>
                <MenuItem value={COACHING_MODES.MARRIAGE}>Marriage Counseling</MenuItem>
                <MenuItem value={COACHING_MODES.BREAKUP}>Breakup Support</MenuItem>
                <MenuItem value={COACHING_MODES.CRISIS}>Crisis Intervention</MenuItem>
              </Select>
            </FormControl>
            
            <Box>
              <Button 
                variant="contained" 
                size="large" 
                onClick={startSession}
                disabled={isLoading}
                startIcon={<PsychologyIcon />}
              >
                {isLoading ? 'Starting Session...' : 'Start Coaching Session'}
              </Button>
            </Box>
          </Box>
        ) : (
          <ChatContainer>
            <MessagesContainer>
              {messages.map(renderMessage)}
              {isLoading && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CoachAvatar>
                    <PsychologyIcon />
                  </CoachAvatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                      Dr. Love is thinking...
                    </Typography>
                    <LinearProgress sx={{ mt: 1 }} />
                  </Box>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </MessagesContainer>

            <InputContainer>
              <TextField
                ref={inputRef}
                fullWidth
                multiline
                maxRows={4}
                placeholder="Share what's on your mind..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                variant="outlined"
                size="small"
              />
              
              <Tooltip title={isRecording ? "Stop recording" : "Voice message"}>
                <IconButton 
                  onClick={toggleRecording}
                  color={isRecording ? "error" : "default"}
                  disabled={isLoading}
                >
                  {isRecording ? <MicOffIcon /> : <MicIcon />}
                </IconButton>
              </Tooltip>
              
              <Button
                variant="contained"
                onClick={sendMessage}
                disabled={!inputMessage.trim() || isLoading}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </InputContainer>
          </ChatContainer>
        )}
      </DialogContent>

      {/* Mood Assessment Display */}
      {moodAssessment && (
        <Box sx={{ p: 2, bgcolor: 'background.default' }}>
          <Typography variant="subtitle2" gutterBottom>
            Current Mood Assessment:
          </Typography>
          <Chip 
            label={`${moodAssessment.mood} (${Math.round(moodAssessment.confidence * 100)}% confidence)`}
            color="primary"
            size="small"
          />
        </Box>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettings} onClose={() => setShowSettings(false)}>
        <DialogTitle>Coaching Settings</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Coaching Mode</InputLabel>
            <Select
              value={coachingMode}
              onChange={(e) => setCoachingMode(e.target.value)}
              label="Coaching Mode"
            >
              <MenuItem value={COACHING_MODES.GENERAL}>General Advice</MenuItem>
              <MenuItem value={COACHING_MODES.DATING}>Dating Guidance</MenuItem>
              <MenuItem value={COACHING_MODES.RELATIONSHIP}>Relationship Support</MenuItem>
              <MenuItem value={COACHING_MODES.MARRIAGE}>Marriage Counseling</MenuItem>
              <MenuItem value={COACHING_MODES.BREAKUP}>Breakup Support</MenuItem>
              <MenuItem value={COACHING_MODES.CRISIS}>Crisis Intervention</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl fullWidth>
            <InputLabel>Session Type</InputLabel>
            <Select
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
              label="Session Type"
            >
              <MenuItem value={SESSION_TYPES.TEXT_CHAT}>Text Chat</MenuItem>
              <MenuItem value={SESSION_TYPES.VOICE_CHAT}>Voice Chat</MenuItem>
              <MenuItem value={SESSION_TYPES.QUICK_ADVICE}>Quick Advice</MenuItem>
              <MenuItem value={SESSION_TYPES.DEEP_SESSION}>Deep Session</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowSettings(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Dialog>
  );
};

export default DrLoveCoach;

