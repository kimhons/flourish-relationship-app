/**
 * Screen 135: Learning & Growth Plan Assessment
 * Comprehensive assessment of learning preferences and personal growth goals
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
  Grid,
  Slider,
  Rating,
  FormGroup,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  School,
  Info,
  CheckCircle,
  Timer,
  TrendingUp,
  Psychology,
  SelfImprovement,
  MenuBook,
  Lightbulb,
  Group,
  Star,
  ExpandMore,
  AutoStories,
  Fitness,
  Brush,
  Language,
  Computer,
  Business,
  HealthAndSafety,
  MusicNote,
  Science,
  Public,
  Volunteer,
  EmojiObjects,
  Timeline,
  Support,
  Celebration,
  WorkspacePremium
} from '@mui/icons-material';

const LearningGrowthPlan = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeSpent, setTimeSpent] = useState(0);
  const [showInsight, setShowInsight] = useState(false);

  // Learning and growth assessment questions
  const questions = [
    // Learning Style & Preferences
    {
      id: 'LG1',
      domain: 'Learning Style',
      category: 'Learning Preferences',
      type: 'preference_choice',
      text: 'Your preferred way of learning new things:',
      scenario: 'When you want to develop a new skill or gain knowledge',
      options: [
        { value: 1, label: 'Hands-on practice and experimentation', style: 'Kinesthetic', approach: 'Experiential' },
        { value: 2, label: 'Reading books, articles, and research', style: 'Visual/Reading', approach: 'Academic' },
        { value: 3, label: 'Watching videos and visual demonstrations', style: 'Visual/Auditory', approach: 'Multimedia' },
        { value: 4, label: 'Group discussions and collaborative learning', style: 'Social', approach: 'Collaborative' },
        { value: 5, label: 'One-on-one mentoring and guidance', style: 'Personal', approach: 'Mentored' }
      ],
      culturalNote: 'Learning preferences vary across cultures and educational backgrounds',
      insight: 'Learning style compatibility affects how couples can grow together',
      icon: <School />
    },
    {
      id: 'LG2',
      domain: 'Learning Style',
      category: 'Learning Pace',
      type: 'preference_choice',
      text: 'Your preferred pace for personal development:',
      scenario: 'How you like to approach personal growth and skill development',
      options: [
        { value: 1, label: 'Intensive, focused learning in short bursts', style: 'Sprint', pace: 'Intensive' },
        { value: 2, label: 'Steady, consistent progress over time', style: 'Marathon', pace: 'Consistent' },
        { value: 3, label: 'Flexible pace based on interest and motivation', style: 'Adaptive', pace: 'Variable' },
        { value: 4, label: 'Slow and thorough, mastering each step', style: 'Methodical', pace: 'Deliberate' },
        { value: 5, label: 'Fast-paced, covering multiple areas simultaneously', style: 'Multitasking', pace: 'Accelerated' }
      ],
      culturalNote: 'Learning pace preferences vary across personality types and life circumstances',
      insight: 'Pace compatibility affects how couples can support each other\'s growth',
      icon: <Timeline />
    },

    // Growth Areas & Interests
    {
      id: 'GA1',
      domain: 'Growth Areas',
      category: 'Personal Development',
      type: 'multiple_choice',
      text: 'Areas of personal growth you\'re most interested in (select up to 5):',
      scenario: 'Personal development areas you\'d like to focus on in the coming years',
      options: [
        { value: 'emotional', label: 'Emotional intelligence and self-awareness', icon: <Psychology /> },
        { value: 'physical', label: 'Physical fitness and health', icon: <Fitness /> },
        { value: 'intellectual', label: 'Intellectual and academic learning', icon: <School /> },
        { value: 'creative', label: 'Creative arts and expression', icon: <Brush /> },
        { value: 'spiritual', label: 'Spiritual and philosophical development', icon: <Star /> },
        { value: 'social', label: 'Social skills and relationships', icon: <Group /> },
        { value: 'professional', label: 'Career and professional development', icon: <Business /> },
        { value: 'financial', label: 'Financial literacy and management', icon: <TrendingUp /> },
        { value: 'communication', label: 'Communication and language skills', icon: <Language /> },
        { value: 'technical', label: 'Technology and digital skills', icon: <Computer /> },
        { value: 'leadership', label: 'Leadership and management skills', icon: <WorkspacePremium /> },
        { value: 'wellness', label: 'Mental health and wellness', icon: <HealthAndSafety /> }
      ],
      maxSelections: 5,
      culturalNote: 'Growth interests vary across cultures, ages, and life stages',
      insight: 'Shared growth interests create opportunities for mutual development',
      icon: <SelfImprovement />
    },
    {
      id: 'GA2',
      domain: 'Growth Areas',
      category: 'Skill Development',
      type: 'multiple_choice',
      text: 'Specific skills you\'d like to develop (select up to 4):',
      scenario: 'Concrete skills you\'re interested in learning or improving',
      options: [
        { value: 'cooking', label: 'Cooking and culinary arts', icon: <Celebration /> },
        { value: 'music', label: 'Musical instruments or singing', icon: <MusicNote /> },
        { value: 'languages', label: 'Foreign languages', icon: <Language /> },
        { value: 'writing', label: 'Writing and storytelling', icon: <AutoStories /> },
        { value: 'photography', label: 'Photography and visual arts', icon: <Brush /> },
        { value: 'gardening', label: 'Gardening and horticulture', icon: <Science /> },
        { value: 'crafts', label: 'Crafts and DIY projects', icon: <EmojiObjects /> },
        { value: 'sports', label: 'Sports and athletic activities', icon: <Fitness /> },
        { value: 'meditation', label: 'Meditation and mindfulness', icon: <SelfImprovement /> },
        { value: 'public_speaking', label: 'Public speaking and presentation', icon: <Group /> },
        { value: 'investing', label: 'Investing and financial planning', icon: <TrendingUp /> },
        { value: 'volunteering', label: 'Community service and volunteering', icon: <Volunteer /> }
      ],
      maxSelections: 4,
      culturalNote: 'Skill interests vary across cultures and personal backgrounds',
      insight: 'Shared skill development creates bonding opportunities and mutual support',
      icon: <MenuBook />
    },

    // Learning Together & Support
    {
      id: 'LT1',
      domain: 'Learning Together',
      category: 'Shared Learning',
      type: 'priority_scale',
      text: 'How important is learning and growing together as a couple?',
      scenario: 'Taking classes, developing skills, or pursuing growth activities together',
      culturalNote: 'Shared learning importance varies across relationship styles and cultures',
      insight: 'Shared learning strengthens bonds and creates common experiences',
      icon: <Group />
    },
    {
      id: 'LT2',
      domain: 'Learning Together',
      category: 'Learning Activities',
      type: 'multiple_choice',
      text: 'Types of learning activities you\'d enjoy doing together (select all that apply):',
      scenario: 'Shared learning experiences you\'d find meaningful and enjoyable',
      options: [
        { value: 'classes', label: 'Taking classes or workshops together', icon: <School /> },
        { value: 'travel', label: 'Educational travel and cultural experiences', icon: <Public /> },
        { value: 'reading', label: 'Reading and discussing books together', icon: <MenuBook /> },
        { value: 'documentaries', label: 'Watching documentaries and educational content', icon: <Science /> },
        { value: 'museums', label: 'Visiting museums and cultural institutions', icon: <AutoStories /> },
        { value: 'lectures', label: 'Attending lectures and seminars', icon: <Group /> },
        { value: 'online', label: 'Online courses and digital learning', icon: <Computer /> },
        { value: 'practical', label: 'Hands-on projects and skill building', icon: <EmojiObjects /> },
        { value: 'nature', label: 'Nature exploration and outdoor learning', icon: <Science /> },
        { value: 'cultural', label: 'Cultural events and artistic experiences', icon: <Brush /> }
      ],
      culturalNote: 'Learning activity preferences vary across interests and cultural backgrounds',
      insight: 'Shared learning activities create bonding experiences and mutual growth',
      icon: <Celebration />
    },

    // Growth Support & Motivation
    {
      id: 'GS1',
      domain: 'Growth Support',
      category: 'Support Style',
      type: 'preference_choice',
      text: 'How you prefer to receive support for your personal growth:',
      scenario: 'The type of encouragement and support that motivates you most',
      options: [
        { value: 1, label: 'Active encouragement and cheerleading', style: 'Enthusiastic', approach: 'Motivational' },
        { value: 2, label: 'Practical help and resource sharing', style: 'Practical', approach: 'Supportive' },
        { value: 3, label: 'Gentle accountability and check-ins', style: 'Accountable', approach: 'Structured' },
        { value: 4, label: 'Space to pursue growth independently', style: 'Independent', approach: 'Autonomous' },
        { value: 5, label: 'Collaborative planning and goal setting', style: 'Collaborative', approach: 'Partnership' }
      ],
      culturalNote: 'Support preferences vary across personality types and cultural backgrounds',
      insight: 'Support style compatibility affects motivation and growth success',
      icon: <Support />
    },
    {
      id: 'GS2',
      domain: 'Growth Support',
      category: 'Motivation Style',
      type: 'preference_choice',
      text: 'What motivates you most in personal development:',
      scenario: 'The driving forces that inspire you to grow and learn',
      options: [
        { value: 1, label: 'Achieving specific goals and milestones', style: 'Goal-Oriented', motivation: 'Achievement' },
        { value: 2, label: 'The joy of learning and discovery', style: 'Curiosity-Driven', motivation: 'Intrinsic' },
        { value: 3, label: 'Becoming a better person for my relationships', style: 'Relationship-Focused', motivation: 'Relational' },
        { value: 4, label: 'Professional advancement and success', style: 'Career-Focused', motivation: 'Professional' },
        { value: 5, label: 'Personal fulfillment and self-actualization', style: 'Self-Actualization', motivation: 'Personal' }
      ],
      culturalNote: 'Motivation styles vary across cultures and life stages',
      insight: 'Understanding motivation styles helps partners support each other effectively',
      icon: <TrendingUp />
    },

    // Challenge & Resilience
    {
      id: 'CR1',
      domain: 'Challenge & Resilience',
      category: 'Challenge Approach',
      type: 'preference_choice',
      text: 'Your approach to learning challenges and setbacks:',
      scenario: 'How you handle difficulties and obstacles in your growth journey',
      options: [
        { value: 1, label: 'Push through with determination and persistence', style: 'Persistent', approach: 'Determined' },
        { value: 2, label: 'Take breaks and return with fresh perspective', style: 'Reflective', approach: 'Strategic' },
        { value: 3, label: 'Seek help and guidance from others', style: 'Collaborative', approach: 'Supported' },
        { value: 4, label: 'Adapt approach and try different methods', style: 'Adaptive', approach: 'Flexible' },
        { value: 5, label: 'Accept limitations and focus on strengths', style: 'Accepting', approach: 'Realistic' }
      ],
      culturalNote: 'Challenge approaches vary across cultures and personality types',
      insight: 'Challenge approach compatibility affects how couples support each other through difficulties',
      icon: <Psychology />
    },
    {
      id: 'CR2',
      domain: 'Challenge & Resilience',
      category: 'Resilience Building',
      type: 'priority_scale',
      text: 'How important is building resilience and mental strength?',
      scenario: 'Developing emotional resilience, stress management, and mental toughness',
      culturalNote: 'Resilience importance varies across cultures and life experiences',
      insight: 'Resilience building creates stronger individuals and relationships',
      icon: <HealthAndSafety />
    },

    // Future Learning Goals
    {
      id: 'FL1',
      domain: 'Future Learning',
      category: 'Learning Timeline',
      type: 'preference_choice',
      text: 'Your timeline for major learning goals:',
      scenario: 'How you prefer to plan and pursue significant learning objectives',
      options: [
        { value: 1, label: 'Short-term goals (3-6 months)', style: 'Sprint', timeline: 'Immediate' },
        { value: 2, label: 'Medium-term goals (6 months - 2 years)', style: 'Project', timeline: 'Moderate' },
        { value: 3, label: 'Long-term goals (2-5 years)', style: 'Journey', timeline: 'Extended' },
        { value: 4, label: 'Lifelong learning without specific timelines', style: 'Continuous', timeline: 'Ongoing' },
        { value: 5, label: 'Flexible timelines based on life circumstances', style: 'Adaptive', timeline: 'Variable' }
      ],
      culturalNote: 'Learning timelines vary across cultures and life stages',
      insight: 'Timeline compatibility affects planning and mutual support for growth goals',
      icon: <Timeline />
    },
    {
      id: 'FL2',
      domain: 'Future Learning',
      category: 'Growth Investment',
      type: 'priority_scale',
      text: 'How important is investing time and money in personal development?',
      scenario: 'Prioritizing resources (time, money, energy) for learning and growth',
      culturalNote: 'Investment priorities vary across economic situations and cultural values',
      insight: 'Investment alignment affects ability to pursue growth goals together',
      icon: <TrendingUp />
    },

    // Learning Environment & Preferences
    {
      id: 'LE1',
      domain: 'Learning Environment',
      category: 'Environment Preferences',
      type: 'multiple_choice',
      text: 'Your preferred learning environments (select up to 3):',
      scenario: 'Settings where you feel most comfortable and effective learning',
      options: [
        { value: 'quiet', label: 'Quiet, focused spaces', icon: <MenuBook /> },
        { value: 'social', label: 'Group settings with others', icon: <Group /> },
        { value: 'outdoor', label: 'Outdoor and natural environments', icon: <Science /> },
        { value: 'structured', label: 'Structured classroom settings', icon: <School /> },
        { value: 'informal', label: 'Informal, casual environments', icon: <Celebration /> },
        { value: 'digital', label: 'Online and digital platforms', icon: <Computer /> },
        { value: 'hands_on', label: 'Workshops and hands-on spaces', icon: <EmojiObjects /> },
        { value: 'cultural', label: 'Museums and cultural institutions', icon: <AutoStories /> }
      ],
      maxSelections: 3,
      culturalNote: 'Environment preferences vary across personality types and cultural backgrounds',
      insight: 'Environment compatibility affects shared learning experiences',
      icon: <School />
    },

    // Growth Mindset & Philosophy
    {
      id: 'GM1',
      domain: 'Growth Mindset',
      category: 'Growth Philosophy',
      type: 'preference_choice',
      text: 'Your philosophy about personal growth and development:',
      scenario: 'Your fundamental beliefs about learning and self-improvement',
      options: [
        { value: 1, label: 'Growth is essential for a fulfilling life', style: 'Growth-Essential', philosophy: 'Progressive' },
        { value: 2, label: 'Growth is important but should be balanced', style: 'Balanced-Growth', philosophy: 'Moderate' },
        { value: 3, label: 'Growth happens naturally through life experiences', style: 'Natural-Growth', philosophy: 'Organic' },
        { value: 4, label: 'Growth is good but not a primary focus', style: 'Casual-Growth', philosophy: 'Relaxed' },
        { value: 5, label: 'Contentment with current self is most important', style: 'Self-Acceptance', philosophy: 'Accepting' }
      ],
      culturalNote: 'Growth philosophies vary across cultures and life stages',
      insight: 'Growth philosophy alignment affects long-term relationship development',
      icon: <Star />
    }
  ];

  const priorityOptions = [
    { value: 1, label: 'Not Important', color: '#EF4444' },
    { value: 2, label: 'Somewhat Important', color: '#F97316' },
    { value: 3, label: 'Moderately Important', color: '#EAB308' },
    { value: 4, label: 'Very Important', color: '#22C55E' },
    { value: 5, label: 'Extremely Important', color: '#059669' }
  ];

  const domainColors = {
    'Learning Style': '#3B82F6',
    'Growth Areas': '#EC4899',
    'Learning Together': '#10B981',
    'Growth Support': '#F59E0B',
    'Challenge & Resilience': '#8B5CF6',
    'Future Learning': '#EF4444',
    'Learning Environment': '#06B6D4',
    'Growth Mindset': '#6366F1'
  };

  const domainDescriptions = {
    'Learning Style': 'Preferred learning methods and pace for personal development',
    'Growth Areas': 'Areas of personal development and skill building interests',
    'Learning Together': 'Preferences for shared learning and growth activities',
    'Growth Support': 'Support styles and motivation preferences for development',
    'Challenge & Resilience': 'Approaches to handling challenges and building resilience',
    'Future Learning': 'Timeline and investment priorities for learning goals',
    'Learning Environment': 'Preferred settings and environments for learning',
    'Growth Mindset': 'Philosophy and beliefs about personal growth and development'
  };

  const domainIcons = {
    'Learning Style': <School />,
    'Growth Areas': <SelfImprovement />,
    'Learning Together': <Group />,
    'Growth Support': <Support />,
    'Challenge & Resilience': <Psychology />,
    'Future Learning': <Timeline />,
    'Learning Environment': <MenuBook />,
    'Growth Mindset': <Star />
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

  const handleMultipleChoice = (value) => {
    const currentQuestionData = questions[currentQuestion];
    const currentSelections = responses[currentQuestionData.id] || [];
    const maxSelections = currentQuestionData.maxSelections || currentQuestionData.options.length;
    
    let newSelections;
    if (currentSelections.includes(value)) {
      newSelections = currentSelections.filter(item => item !== value);
    } else if (currentSelections.length < maxSelections) {
      newSelections = [...currentSelections, value];
    } else {
      return; // Max selections reached
    }
    
    setResponses(prev => ({
      ...prev,
      [currentQuestionData.id]: newSelections
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setShowInsight(false);
    } else {
      // Save responses and navigate to next screen
      const existingResponses = JSON.parse(localStorage.getItem('assessmentResponses') || '{}');
      localStorage.setItem('assessmentResponses', JSON.stringify({
        ...existingResponses,
        learningGrowth: responses
      }));
      navigate('/onboarding/matching-preferences');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowInsight(false);
    } else {
      navigate('/onboarding/relationship-goals-expectations');
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

  // Check if current response is valid
  const isResponseValid = () => {
    if (currentQuestionData.type === 'multiple_choice') {
      return currentResponse && currentResponse.length > 0;
    }
    return currentResponse !== undefined && currentResponse !== null;
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Progress Header */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Learning & Growth Plan Assessment
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
      <Grid container spacing={1} sx={{ mb: 4 }}>
        {Object.entries(domainProgress).map(([domain, count]) => (
          <Grid item xs={12/8} key={domain}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 1, 
                textAlign: 'center',
                border: '1px solid #E5E7EB',
                backgroundColor: count > 0 ? `${domainColors[domain]}10` : 'transparent',
                minHeight: 70
              }}
            >
              {React.cloneElement(domainIcons[domain], { 
                sx: { color: domainColors[domain], fontSize: 16, mb: 0.5 } 
              })}
              <Typography variant="caption" display="block" color={domainColors[domain]} fontWeight="semibold" sx={{ fontSize: '0.6rem', lineHeight: 1 }}>
                {domain.split(' ')[0]}
              </Typography>
              <Typography variant="h6" color={domainColors[domain]} sx={{ fontSize: '0.9rem' }}>
                {count}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Card elevation={0} sx={{ border: '1px solid #E5E7EB', borderRadius: 3 }}>
        <CardContent sx={{ p: 4 }}>
          {/* Assessment Header */}
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
              <TrendingUp sx={{ color: domainColors[currentQuestionData.domain], fontSize: 32 }} />
              <Typography variant="h5" fontWeight="semibold" color={domainColors[currentQuestionData.domain]}>
                Learning & Growth Plan
              </Typography>
              <Tooltip title="Comprehensive assessment of learning preferences and personal growth goals">
                <IconButton size="small">
                  <Info sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Understanding your learning style and growth goals for mutual development
            </Typography>
          </Box>

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
            </Box>
            <Typography variant="body2" color="text.secondary">
              {domainDescriptions[currentQuestionData.domain]}
            </Typography>
          </Box>

          {/* Scenario Context */}
          <Box sx={{ mb: 3, p: 3, backgroundColor: '#F8FAFC', borderRadius: 2, border: '1px solid #E2E8F0' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              <strong>Context:</strong>
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              {currentQuestionData.scenario}
            </Typography>
          </Box>

          {/* Question */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" fontWeight="semibold" gutterBottom sx={{ textAlign: 'center' }}>
              {currentQuestionData.text}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 2 }}>
              {currentQuestionData.type === 'priority_scale' ? 
                'Rate the importance to you:' : 
                currentQuestionData.type === 'multiple_choice' ?
                `Select ${currentQuestionData.maxSelections ? `up to ${currentQuestionData.maxSelections}` : 'all that apply'}:` :
                'Choose the option that best describes your preference:'
              }
            </Typography>
          </Box>

          {/* Response Options */}
          <FormControl component="fieldset" sx={{ width: '100%', mb: 4 }}>
            {currentQuestionData.type === 'multiple_choice' ? (
              <FormGroup>
                <Grid container spacing={2}>
                  {currentQuestionData.options.map((option) => (
                    <Grid item xs={12} sm={6} key={option.value}>
                      <Paper
                        elevation={0}
                        sx={{
                          border: (currentResponse || []).includes(option.value) ? 
                            `2px solid ${domainColors[currentQuestionData.domain]}` : 
                            '1px solid #E5E7EB',
                          borderRadius: 2,
                          p: 2,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease-in-out',
                          '&:hover': {
                            borderColor: domainColors[currentQuestionData.domain],
                            backgroundColor: '#F9FAFB'
                          }
                        }}
                        onClick={() => handleMultipleChoice(option.value)}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={(currentResponse || []).includes(option.value)}
                              onChange={() => handleMultipleChoice(option.value)}
                              sx={{ 
                                color: domainColors[currentQuestionData.domain],
                                '&.Mui-checked': {
                                  color: domainColors[currentQuestionData.domain]
                                }
                              }}
                            />
                          }
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              {option.icon}
                              <Typography variant="body2" fontWeight={(currentResponse || []).includes(option.value) ? 'semibold' : 'normal'}>
                                {option.label}
                              </Typography>
                            </Box>
                          }
                          sx={{ margin: 0, width: '100%' }}
                        />
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            ) : currentQuestionData.type === 'priority_scale' ? (
              <RadioGroup
                value={currentResponse || ''}
                onChange={(e) => handleResponseChange(e.target.value)}
                sx={{ gap: 2 }}
              >
                {priorityOptions.map((option) => (
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
            ) : (
              <RadioGroup
                value={currentResponse || ''}
                onChange={(e) => handleResponseChange(e.target.value)}
                sx={{ gap: 2 }}
              >
                {currentQuestionData.options.map((option) => (
                  <Paper
                    key={option.value}
                    elevation={0}
                    sx={{
                      border: currentResponse === option.value ? 
                        `2px solid ${domainColors[currentQuestionData.domain]}` : 
                        '1px solid #E5E7EB',
                      borderRadius: 2,
                      p: 2,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: domainColors[currentQuestionData.domain],
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
                            color: domainColors[currentQuestionData.domain],
                            '&.Mui-checked': {
                              color: domainColors[currentQuestionData.domain]
                            }
                          }} 
                        />
                      }
                      label={
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                          <Box>
                            <Typography variant="body1" fontWeight={currentResponse === option.value ? 'semibold' : 'normal'}>
                              {option.label}
                            </Typography>
                            {(option.style || option.approach || option.pace || option.timeline || option.motivation || option.philosophy) && (
                              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                                {(option.style || option.approach || option.pace) && (
                                  <Chip 
                                    label={option.style || option.approach || option.pace} 
                                    size="small" 
                                    variant="outlined"
                                    sx={{ fontSize: '0.75rem' }}
                                  />
                                )}
                                {(option.timeline || option.motivation || option.philosophy) && (
                                  <Chip 
                                    label={option.timeline || option.motivation || option.philosophy} 
                                    size="small" 
                                    sx={{ 
                                      backgroundColor: `${domainColors[currentQuestionData.domain]}20`,
                                      color: domainColors[currentQuestionData.domain],
                                      fontSize: '0.75rem'
                                    }}
                                  />
                                )}
                              </Box>
                            )}
                          </Box>
                          {currentResponse === option.value && (
                            <CheckCircle sx={{ color: domainColors[currentQuestionData.domain], ml: 2 }} />
                          )}
                        </Box>
                      }
                      sx={{ margin: 0, width: '100%' }}
                    />
                  </Paper>
                ))}
              </RadioGroup>
            )}
          </FormControl>

          {/* Cultural & Learning Insight */}
          <Fade in={showInsight}>
            <Alert 
              severity="info" 
              sx={{ mb: 4 }}
              icon={<Lightbulb />}
            >
              <Typography variant="body2">
                <strong>Cultural Context:</strong> {currentQuestionData.culturalNote}
                <br />
                <strong>Learning Insight:</strong> {currentQuestionData.insight}
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
              {currentQuestion === 0 ? 'Back to Goals' : 'Previous'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {!showInsight && (
                <Button
                  variant="text"
                  onClick={() => setShowInsight(true)}
                  sx={{ color: 'text.secondary' }}
                >
                  Learning Insights
                </Button>
              )}
              
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleNext}
                disabled={!isResponseValid()}
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
                {currentQuestion === questions.length - 1 ? 'Continue to Matching' : 'Next Question'}
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
              <strong>Domains:</strong> Learning Style, Growth Areas, Learning Together, Support, Resilience, Future, Environment, Mindset
              <br />
              <strong>Estimated time remaining:</strong> {Math.max(0, Math.ceil((questions.length - currentQuestion - 1) * 1))} minutes
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LearningGrowthPlan;

