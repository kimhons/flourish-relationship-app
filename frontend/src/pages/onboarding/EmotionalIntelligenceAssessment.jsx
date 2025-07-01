/**
 * Screen 128: Emotional Intelligence Assessment
 * Comprehensive EQ assessment based on Goleman's four domains
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Chip,
  Alert,
  Fade,
  IconButton,
  Tooltip,
  Grid
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  Psychology,
  Info,
  CheckCircle,
  Timer,
  SelfImprovement,
  Groups,
  Visibility,
  Settings,
  Favorite,
  EmojiEmotions,
  Support,
  Lightbulb
} from '@mui/icons-material';

const EmotionalIntelligenceAssessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Emotional Intelligence questions based on Goleman's four domains
  const questions = [
    // Self-Awareness Domain
    {
      id: 'SA1',
      domain: 'Self-Awareness',
      category: 'Emotional Recognition',
      text: 'I can easily identify what emotions I\'m feeling in the moment.',
      scenario: 'You\'re in a meeting and start feeling uncomfortable but aren\'t sure why.',
      culturalNote: 'Emotional awareness varies across cultures - some emphasize emotional expression, others emotional control',
      insight: 'Self-awareness is the foundation of emotional intelligence and relationship success',
      icon: <Visibility />
    },
    {
      id: 'SA2',
      domain: 'Self-Awareness',
      category: 'Trigger Recognition',
      text: 'I understand what situations or behaviors trigger strong emotions in me.',
      scenario: 'Your partner does something that always seems to upset you.',
      culturalNote: 'Trigger awareness varies with cultural emotional expression norms and family patterns',
      insight: 'Understanding triggers helps prevent emotional reactivity and improves communication',
      icon: <Lightbulb />
    },
    {
      id: 'SA3',
      domain: 'Self-Awareness',
      category: 'Impact Awareness',
      text: 'I\'m aware of how my emotions affect my behavior and decisions.',
      scenario: 'You\'re feeling stressed and notice it\'s affecting how you interact with others.',
      culturalNote: 'Emotional impact awareness influenced by cultural values around emotional responsibility',
      insight: 'Emotional self-awareness prevents unconscious emotional reactions that damage relationships',
      icon: <Psychology />
    },
    {
      id: 'SA4',
      domain: 'Self-Awareness',
      category: 'Strengths & Limitations',
      text: 'I have a realistic understanding of my emotional strengths and weaknesses.',
      scenario: 'Reflecting on how you handle different emotional situations.',
      culturalNote: 'Self-assessment varies across cultures from self-critical to self-protective orientations',
      insight: 'Accurate self-assessment enables targeted emotional growth and better relationship dynamics',
      icon: <SelfImprovement />
    },
    {
      id: 'SA5',
      domain: 'Self-Awareness',
      category: 'Values Clarity',
      text: 'I\'m clear about my core values and how they guide my emotional responses.',
      scenario: 'Making a decision that conflicts with what others expect but aligns with your values.',
      culturalNote: 'Values clarity varies with cultural emphasis on individual vs. collective values',
      insight: 'Values clarity provides emotional stability and authentic relationship expression',
      icon: <Favorite />
    },

    // Self-Regulation Domain
    {
      id: 'SR1',
      domain: 'Self-Regulation',
      category: 'Emotional Control',
      text: 'I can manage my emotions effectively, even in stressful situations.',
      scenario: 'Your partner criticizes something important to you during an argument.',
      culturalNote: 'Emotional control expectations vary greatly across cultures and genders',
      insight: 'Emotional regulation prevents relationship damage during conflicts and stress',
      icon: <Settings />
    },
    {
      id: 'SR2',
      domain: 'Self-Regulation',
      category: 'Impulse Control',
      text: 'I think before I speak when I\'m upset or angry.',
      scenario: 'You feel hurt by something your partner said and want to respond immediately.',
      culturalNote: 'Impulse control valued differently across cultures - some value immediate expression, others restraint',
      insight: 'Impulse control prevents saying things that damage relationships and trust',
      icon: <Psychology />
    },
    {
      id: 'SR3',
      domain: 'Self-Regulation',
      category: 'Adaptability',
      text: 'I adapt well to changes and unexpected situations.',
      scenario: 'Your partner wants to change plans you were looking forward to.',
      culturalNote: 'Adaptability varies across cultures from flexibility emphasis to stability preference',
      insight: 'Emotional adaptability helps relationships navigate life changes and challenges',
      icon: <SelfImprovement />
    },
    {
      id: 'SR4',
      domain: 'Self-Regulation',
      category: 'Stress Management',
      text: 'I have effective ways to calm myself when feeling overwhelmed.',
      scenario: 'You\'re feeling overwhelmed by work and relationship demands.',
      culturalNote: 'Stress management varies across cultures and socioeconomic contexts',
      insight: 'Stress regulation prevents relationship strain and maintains emotional availability',
      icon: <Support />
    },
    {
      id: 'SR5',
      domain: 'Self-Regulation',
      category: 'Optimism',
      text: 'I maintain a positive outlook even during difficult times.',
      scenario: 'You and your partner are going through a challenging period.',
      culturalNote: 'Optimism varies across cultures from positive thinking emphasis to realistic acceptance',
      insight: 'Optimism helps relationships weather difficulties and maintain hope for improvement',
      icon: <EmojiEmotions />
    },

    // Social Awareness Domain
    {
      id: 'SOC1',
      domain: 'Social Awareness',
      category: 'Empathy',
      text: 'I can sense what others are feeling, even when they don\'t express it directly.',
      scenario: 'Your partner seems quiet and distant but says everything is fine.',
      culturalNote: 'Empathy expression varies across cultures - some value emotional attunement, others respect privacy',
      insight: 'Empathy enables deeper connection and responsive support in relationships',
      icon: <Favorite />
    },
    {
      id: 'SOC2',
      domain: 'Social Awareness',
      category: 'Nonverbal Reading',
      text: 'I\'m good at reading body language and facial expressions.',
      scenario: 'Noticing subtle changes in your partner\'s expression during conversation.',
      culturalNote: 'Nonverbal communication varies significantly across cultures and contexts',
      insight: 'Nonverbal awareness helps understand unspoken emotions and needs in relationships',
      icon: <Visibility />
    },
    {
      id: 'SOC3',
      domain: 'Social Awareness',
      category: 'Emotional Contagion',
      text: 'I notice when my emotions are influenced by others\' emotions.',
      scenario: 'Your partner\'s stress starts affecting your own mood.',
      culturalNote: 'Emotional contagion awareness varies with cultural boundaries around emotional sharing',
      insight: 'Understanding emotional contagion helps maintain healthy emotional boundaries',
      icon: <Groups />
    },
    {
      id: 'SOC4',
      domain: 'Social Awareness',
      category: 'Social Dynamics',
      text: 'I understand the emotional dynamics in group situations.',
      scenario: 'Sensing tension between family members during a gathering.',
      culturalNote: 'Social awareness varies across cultures with different group harmony expectations',
      insight: 'Social awareness helps navigate complex relationship and family dynamics',
      icon: <Groups />
    },
    {
      id: 'SOC5',
      domain: 'Social Awareness',
      category: 'Perspective Taking',
      text: 'I can understand situations from other people\'s perspectives.',
      scenario: 'Your partner is upset about something that doesn\'t bother you.',
      culturalNote: 'Perspective-taking varies across cultures from individual focus to collective understanding',
      insight: 'Perspective-taking reduces conflicts and increases relationship understanding',
      icon: <Psychology />
    },

    // Relationship Management Domain
    {
      id: 'RM1',
      domain: 'Relationship Management',
      category: 'Communication Skills',
      text: 'I express my emotions clearly and appropriately to others.',
      scenario: 'You need to tell your partner about something that\'s bothering you.',
      culturalNote: 'Emotional expression varies greatly across cultures and communication styles',
      insight: 'Clear emotional communication prevents misunderstandings and builds intimacy',
      icon: <Support />
    },
    {
      id: 'RM2',
      domain: 'Relationship Management',
      category: 'Conflict Resolution',
      text: 'I handle disagreements in ways that strengthen rather than damage relationships.',
      scenario: 'You and your partner have different opinions about an important decision.',
      culturalNote: 'Conflict resolution varies across cultures from direct confrontation to indirect harmony-seeking',
      insight: 'Constructive conflict resolution builds relationship resilience and deeper understanding',
      icon: <Settings />
    },
    {
      id: 'RM3',
      domain: 'Relationship Management',
      category: 'Influence & Persuasion',
      text: 'I can influence others\' emotions in positive ways.',
      scenario: 'Your partner is feeling discouraged and you want to help them feel better.',
      culturalNote: 'Emotional influence varies across cultures and power dynamics',
      insight: 'Positive emotional influence supports partner well-being and relationship satisfaction',
      icon: <Lightbulb />
    },
    {
      id: 'RM4',
      domain: 'Relationship Management',
      category: 'Support Provision',
      text: 'I know how to comfort and support others when they\'re upset.',
      scenario: 'Your partner has had a difficult day and needs emotional support.',
      culturalNote: 'Support provision varies across cultures and gender expectations',
      insight: 'Effective support provision builds trust and emotional security in relationships',
      icon: <Support />
    },
    {
      id: 'RM5',
      domain: 'Relationship Management',
      category: 'Relationship Building',
      text: 'I\'m skilled at building rapport and connection with others.',
      scenario: 'Meeting your partner\'s friends or family for the first time.',
      culturalNote: 'Relationship building varies across cultures and social contexts',
      insight: 'Relationship building skills enhance social connections and partner support networks',
      icon: <Groups />
    }
  ];

  const responseOptions = [
    { value: 1, label: 'Never True', color: '#EF4444' },
    { value: 2, label: 'Rarely True', color: '#F97316' },
    { value: 3, label: 'Sometimes True', color: '#EAB308' },
    { value: 4, label: 'Often True', color: '#22C55E' },
    { value: 5, label: 'Always True', color: '#059669' }
  ];

  const domainColors = {
    'Self-Awareness': '#8B5CF6',
    'Self-Regulation': '#3B82F6',
    'Social Awareness': '#10B981',
    'Relationship Management': '#F59E0B'
  };

  const domainDescriptions = {
    'Self-Awareness': 'Understanding your own emotions, triggers, and emotional patterns',
    'Self-Regulation': 'Managing and controlling your emotional responses effectively',
    'Social Awareness': 'Reading and understanding others\' emotions and social dynamics',
    'Relationship Management': 'Using emotional information to guide interactions and build relationships'
  };

  const domainIcons = {
    'Self-Awareness': <Visibility />,
    'Self-Regulation': <Settings />,
    'Social Awareness': <Groups />,
    'Relationship Management': <Support />
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResponseChange = (value) => {
    setResponses(prev => ({
      ...prev,
      [questions[currentQuestion].id]: parseInt(value)
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowInsight(false);
    } else {
      // Save responses and navigate to next assessment
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        emotionalIntelligence: responses
      }));
      navigate('/onboarding/love-languages-assessment');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/values-assessment');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQuestionData = questions[currentQuestion];
  const currentResponse = responses[currentQuestionData.id];

  // Calculate domain progress
  const getDomainProgress = () => {
    const counts = {};
    Object.keys(domainColors).forEach(domain => counts[domain] = 0);
    
    Object.keys(responses).forEach(questionId => {
      const question = questions.find(q => q.id === questionId);
      if (question) {
        counts[question.domain]++;
      }
    });
    return counts;
  };

  const domainProgress = getDomainProgress();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Emotional Intelligence Assessment
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip 
              icon={<Timer />} 
              label={formatTime(timeSpent)} 
              size="small" 
              variant="outlined" 
            />
            <Typography variant="body2" color="text.secondary">
              {currentQuestion + 1} of {questions.length}
            </Typography>
          </Box>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: '#E5E7EB',
            '& .MuiLinearProgress-bar': {
              backgroundColor: domainColors[currentQuestionData.domain]
            }
          }} 
        />
      </Box>

      {/* Domain Progress */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {Object.entries(domainProgress).map(([domain, count]) => (
          <Grid item xs={3} key={domain}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${domainColors[domain]}10` : 'transparent'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1 }}>
                {React.cloneElement(domainIcons[domain], { 
                  sx: { color: domainColors[domain], fontSize: 20 } 
                })}
              </Box>
              <Typography variant="body2" fontWeight="semibold" color={domainColors[domain]} sx={{ fontSize: '0.75rem' }}>
                {domain.replace(' ', '\n')}
              </Typography>
              <Typography variant="h6" color={domainColors[domain]}>
                {count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Current Domain Indicator */}
          <Box sx={{ mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Chip 
                icon={React.cloneElement(domainIcons[currentQuestionData.domain], { sx: { color: 'white' } })}
                label={currentQuestionData.domain}
                sx={{ 
                  backgroundColor: domainColors[currentQuestionData.domain],
                  color: 'white',
                  fontWeight: 'semibold'
                }}
              />
              <Chip 
                label={currentQuestionData.category}
                variant="outlined"
                size="small"
              />
              <Tooltip title={domainDescriptions[currentQuestionData.domain]}>
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {domainDescriptions[currentQuestionData.domain]}
            </Typography>
          </Box>

          {/* Scenario Context */}
          <Box sx={{ mb: 3, p: 3, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              <strong>Scenario:</strong>
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {currentQuestionData.scenario}
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              "{currentQuestionData.text}"
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              How accurately does this describe you?
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            <RadioGroup
              value={currentResponse || ''}
              onChange={(e) => handleResponseChange(e.target.value)}
              sx={{ gap: 2 }}
            >
              {responseOptions.map((option) => (
                <Paper
                  key={option.value}
                  elevation={0}
                  sx={{
                    border: currentResponse === option.value ? 
                      `2px solid ${option.color}` : 
                      '1px solid #E5E7EB',
                    borderRadius: 2,
                    p: 2,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      borderColor: option.color,
                      backgroundColor: '#F9FAFB'
                    }
                  }}
                  onClick={() => handleResponseChange(option.value)}
                >
                  <FormControlLabel
                    value={option.value}
                    control={
                      <Radio 
                        sx={{ 
                          color: option.color,
                          '&.Mui-checked': {
                            color: option.color
                          }
                        }} 
                      />
                    }
                    label={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant="body1" fontWeight={currentResponse === option.value ? 'semibold' : 'normal'}>
                          {option.label}
                        </Typography>
                        {currentResponse === option.value && (
                          <CheckCircle sx={{ color: option.color, ml: 2 }} />
                        )}
                      </Box>
                    }
                    sx={{ margin: 0, width: '100%' }}
                  />
                </Paper>
              ))}
            </RadioGroup>
          </FormControl>

          {/* Cultural & EQ Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Psychology />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>EQ Insight:</strong> {currentQuestionData.insight}
              </Typography>
            </Alert>
          </Fade>

          {/* Navigation */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={handleBack}
              sx={{ borderColor: '#E5E7EB' }}
            >
              {currentQuestion === 0 ? 'Back to Values' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  EQ Insights
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!currentResponse}
                sx={{
                  backgroundColor: domainColors[currentQuestionData.domain],
                  '&:hover': {
                    backgroundColor: domainColors[currentQuestionData.domain],
                    opacity: 0.9
                  },
                  '&:disabled': {
                    backgroundColor: '#E5E7EB',
                    color: '#9CA3AF'
                  }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Continue to Love Languages' : 'Next Question'}
              </Button>
            </Box>
          </Box>

          {/* Assessment Info */}
          <Box sx={{ 
            mt: 4, 
            p: 3, 
            backgroundColor: '#F9FAFB',
            borderRadius: 2,
            border: '1px solid #E5E7EB'
          }}>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              <strong>Assessment Progress:</strong> {Object.keys(responses).length} of {questions.length} questions completed
              <br />
              <strong>Based on:</strong> Goleman's Emotional Intelligence framework with cultural adaptations
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 0.3))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmotionalIntelligenceAssessment;

