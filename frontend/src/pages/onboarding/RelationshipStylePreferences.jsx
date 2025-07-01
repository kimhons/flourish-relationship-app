import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  LinearProgress,
  Chip,
  Grid,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Alert,
  Divider,
  IconButton,
  Tooltip,
  RadioGroup,
  Radio,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  Rating
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Favorite,
  Schedule,
  Communication,
  Intimacy,
  Groups,
  Home,
  Flight,
  Restaurant,
  Movie,
  SportsEsports,
  MusicNote,
  FitnessCenter,
  School,
  Work,
  Weekend,
  EventNote,
  PhoneInTalk,
  VideoCall,
  Message,
  Email,
  DirectionsWalk,
  DirectionsCar,
  Info,
  Psychology,
  EmojiEmotions,
  Handshake,
  Security,
  Growth,
  Balance
} from '@mui/icons-material';

const RelationshipStylePreferences = () => {
  const [preferences, setPreferences] = useState({
    // Dating Style Preferences
    datingStyle: {
      pace: 'moderate', // slow, moderate, fast
      approach: 'traditional', // traditional, modern, casual, serious
      exclusivity: 'exclusive_early', // exclusive_early, exclusive_later, open_initially
      commitment_timeline: 'flexible' // fast, moderate, slow, flexible
    },
    
    // Communication Style Preferences
    communicationStyle: {
      frequency: 7, // 1-10 scale (daily communication preference)
      method_preference: ['text', 'voice'], // text, voice, video, in_person
      conflict_style: 'collaborative', // avoidant, competitive, collaborative, accommodating
      emotional_expression: 8, // 1-10 scale (comfort with emotional openness)
      response_time_expectation: 'flexible' // immediate, quick, moderate, flexible
    },
    
    // Intimacy & Affection Preferences
    intimacyStyle: {
      physical_affection: 8, // 1-10 scale (importance of physical touch)
      emotional_intimacy: 9, // 1-10 scale (importance of emotional closeness)
      intimacy_pace: 'moderate', // slow, moderate, fast
      public_affection: 6, // 1-10 scale (comfort with PDA)
      love_language_priority: ['quality_time', 'physical_touch'] // words, acts, gifts, time, touch
    },
    
    // Social & Lifestyle Integration
    socialIntegration: {
      friend_integration: 8, // 1-10 scale (importance of partner meeting friends)
      family_integration: 7, // 1-10 scale (importance of family approval/integration)
      social_activities: ['dinner_dates', 'outdoor_activities', 'cultural_events'],
      alone_time_need: 6, // 1-10 scale (need for individual space)
      couple_time_priority: 8 // 1-10 scale (priority of couple time)
    },
    
    // Relationship Dynamics
    relationshipDynamics: {
      decision_making: 'collaborative', // independent, collaborative, leader_follower
      financial_approach: 'shared_proportional', // separate, shared_equal, shared_proportional, traditional
      household_responsibilities: 'shared_equal', // traditional, shared_equal, flexible, strength_based
      career_priority_balance: 'both_important', // mine_priority, theirs_priority, both_important, flexible
      personal_growth: 9 // 1-10 scale (importance of individual growth within relationship)
    },
    
    // Date & Activity Preferences
    datePreferences: {
      preferred_activities: ['dinner_dates', 'outdoor_activities', 'cultural_events', 'home_activities'],
      adventure_level: 6, // 1-10 scale (preference for adventurous vs. comfortable activities)
      planning_style: 'collaborative', // spontaneous, planned, collaborative, flexible
      budget_comfort: 'moderate', // budget_conscious, moderate, comfortable, luxury
      frequency: 'weekly' // multiple_weekly, weekly, biweekly, flexible
    },
    
    // Long-term Relationship Vision
    longTermVision: {
      living_together_timeline: 'year_plus', // months, year, year_plus, flexible
      marriage_timeline: 'flexible', // year, two_years, several_years, flexible, not_important
      children_timeline: 'flexible', // soon, few_years, several_years, flexible, not_applicable
      lifestyle_evolution: 8, // 1-10 scale (openness to lifestyle changes together)
      shared_goals_importance: 9 // 1-10 scale (importance of aligned future goals)
    }
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [progress, setProgress] = useState(0);

  const sections = [
    { id: 'dating_style', title: 'Dating Style', icon: <Favorite />, color: '#e91e63' },
    { id: 'communication', title: 'Communication', icon: <Communication />, color: '#2196f3' },
    { id: 'intimacy', title: 'Intimacy & Affection', icon: <Intimacy />, color: '#9c27b0' },
    { id: 'social', title: 'Social Integration', icon: <Groups />, color: '#4caf50' },
    { id: 'dynamics', title: 'Relationship Dynamics', icon: <Balance />, color: '#ff9800' },
    { id: 'dates', title: 'Date Preferences', icon: <Restaurant />, color: '#795548' },
    { id: 'vision', title: 'Long-term Vision', icon: <Growth />, color: '#607d8b' }
  ];

  useEffect(() => {
    // Calculate progress based on configured preferences
    const allPreferences = [
      Object.values(preferences.datingStyle).filter(v => v !== '').length,
      Object.values(preferences.communicationStyle).filter(v => v !== '' && v !== 0).length,
      Object.values(preferences.intimacyStyle).filter(v => v !== '' && v !== 0).length,
      Object.values(preferences.socialIntegration).filter(v => v !== '' && v !== 0).length,
      Object.values(preferences.relationshipDynamics).filter(v => v !== '' && v !== 0).length,
      Object.values(preferences.datePreferences).filter(v => v !== '' && v !== 0).length,
      Object.values(preferences.longTermVision).filter(v => v !== '' && v !== 0).length
    ];
    
    const totalConfigured = allPreferences.reduce((sum, count) => sum + count, 0);
    const totalPossible = 35; // Approximate total number of preference fields
    setProgress((totalConfigured / totalPossible) * 100);
  }, [preferences]);

  const handlePreferenceChange = (category, field, value) => {
    setPreferences(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const handleArrayPreferenceChange = (category, field, value, isMultiple = false) => {
    if (isMultiple) {
      setPreferences(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: prev[category][field].includes(value)
            ? prev[category][field].filter(item => item !== value)
            : [...prev[category][field], value]
        }
      }));
    } else {
      setPreferences(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: value
        }
      }));
    }
  };

  const renderDatingStyleSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Favorite sx={{ mr: 2, color: '#e91e63' }} />
          <Typography variant="h6">Dating Style Preferences</Typography>
          <Tooltip title="Define your approach to dating and relationship development">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Dating Pace</InputLabel>
              <Select
                value={preferences.datingStyle.pace}
                onChange={(e) => handlePreferenceChange('datingStyle', 'pace', e.target.value)}
                label="Dating Pace"
              >
                <MenuItem value="slow">Slow & Steady</MenuItem>
                <MenuItem value="moderate">Moderate Pace</MenuItem>
                <MenuItem value="fast">Fast-Paced</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Dating Approach</InputLabel>
              <Select
                value={preferences.datingStyle.approach}
                onChange={(e) => handlePreferenceChange('datingStyle', 'approach', e.target.value)}
                label="Dating Approach"
              >
                <MenuItem value="traditional">Traditional Dating</MenuItem>
                <MenuItem value="modern">Modern/Progressive</MenuItem>
                <MenuItem value="casual">Casual & Relaxed</MenuItem>
                <MenuItem value="serious">Serious & Intentional</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Exclusivity Preference</InputLabel>
              <Select
                value={preferences.datingStyle.exclusivity}
                onChange={(e) => handlePreferenceChange('datingStyle', 'exclusivity', e.target.value)}
                label="Exclusivity Preference"
              >
                <MenuItem value="exclusive_early">Exclusive Early</MenuItem>
                <MenuItem value="exclusive_later">Exclusive After Getting to Know</MenuItem>
                <MenuItem value="open_initially">Open Initially</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Commitment Timeline</InputLabel>
              <Select
                value={preferences.datingStyle.commitment_timeline}
                onChange={(e) => handlePreferenceChange('datingStyle', 'commitment_timeline', e.target.value)}
                label="Commitment Timeline"
              >
                <MenuItem value="fast">Fast (Within months)</MenuItem>
                <MenuItem value="moderate">Moderate (6-12 months)</MenuItem>
                <MenuItem value="slow">Slow (1+ years)</MenuItem>
                <MenuItem value="flexible">Flexible/Natural</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCommunicationSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Communication sx={{ mr: 2, color: '#2196f3' }} />
          <Typography variant="h6">Communication Style</Typography>
          <Tooltip title="Configure your communication preferences and conflict resolution style">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Communication Frequency: {preferences.communicationStyle.frequency}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How often do you prefer to communicate with your partner?
            </Typography>
            <Slider
              value={preferences.communicationStyle.frequency}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'frequency', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Constant' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#2196f3', mb: 3 }}
            />

            <Typography gutterBottom>
              Emotional Expression Comfort: {preferences.communicationStyle.emotional_expression}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How comfortable are you with emotional openness?
            </Typography>
            <Slider
              value={preferences.communicationStyle.emotional_expression}
              onChange={(e, newValue) => handlePreferenceChange('communicationStyle', 'emotional_expression', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Reserved' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Open' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#2196f3', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Conflict Resolution Style</InputLabel>
              <Select
                value={preferences.communicationStyle.conflict_style}
                onChange={(e) => handlePreferenceChange('communicationStyle', 'conflict_style', e.target.value)}
                label="Conflict Resolution Style"
              >
                <MenuItem value="avoidant">Avoidant (Prefer to avoid conflict)</MenuItem>
                <MenuItem value="competitive">Competitive (Direct and assertive)</MenuItem>
                <MenuItem value="collaborative">Collaborative (Work together to solve)</MenuItem>
                <MenuItem value="accommodating">Accommodating (Prefer to compromise)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Response Time Expectation</InputLabel>
              <Select
                value={preferences.communicationStyle.response_time_expectation}
                onChange={(e) => handlePreferenceChange('communicationStyle', 'response_time_expectation', e.target.value)}
                label="Response Time Expectation"
              >
                <MenuItem value="immediate">Immediate (Within minutes)</MenuItem>
                <MenuItem value="quick">Quick (Within hours)</MenuItem>
                <MenuItem value="moderate">Moderate (Within a day)</MenuItem>
                <MenuItem value="flexible">Flexible (When convenient)</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Preferred Communication Methods:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {[
                { value: 'text', label: 'Text Messages', icon: <Message /> },
                { value: 'voice', label: 'Voice Calls', icon: <PhoneInTalk /> },
                { value: 'video', label: 'Video Calls', icon: <VideoCall /> },
                { value: 'in_person', label: 'In Person', icon: <DirectionsWalk /> }
              ].map((method) => (
                <Chip
                  key={method.value}
                  icon={method.icon}
                  label={method.label}
                  onClick={() => handleArrayPreferenceChange('communicationStyle', 'method_preference', method.value, true)}
                  variant={preferences.communicationStyle.method_preference.includes(method.value) ? "filled" : "outlined"}
                  color={preferences.communicationStyle.method_preference.includes(method.value) ? "primary" : "default"}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderIntimacySection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Intimacy sx={{ mr: 2, color: '#9c27b0' }} />
          <Typography variant="h6">Intimacy & Affection Style</Typography>
          <Tooltip title="Define your preferences for physical and emotional intimacy">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Physical Affection Importance: {preferences.intimacyStyle.physical_affection}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is physical touch and affection to you?
            </Typography>
            <Slider
              value={preferences.intimacyStyle.physical_affection}
              onChange={(e, newValue) => handlePreferenceChange('intimacyStyle', 'physical_affection', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Emotional Intimacy Importance: {preferences.intimacyStyle.emotional_intimacy}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is deep emotional connection to you?
            </Typography>
            <Slider
              value={preferences.intimacyStyle.emotional_intimacy}
              onChange={(e, newValue) => handlePreferenceChange('intimacyStyle', 'emotional_intimacy', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />

            <Typography gutterBottom>
              Public Affection Comfort: {preferences.intimacyStyle.public_affection}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How comfortable are you with public displays of affection?
            </Typography>
            <Slider
              value={preferences.intimacyStyle.public_affection}
              onChange={(e, newValue) => handlePreferenceChange('intimacyStyle', 'public_affection', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Private' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Open' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#9c27b0', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Intimacy Development Pace</InputLabel>
              <Select
                value={preferences.intimacyStyle.intimacy_pace}
                onChange={(e) => handlePreferenceChange('intimacyStyle', 'intimacy_pace', e.target.value)}
                label="Intimacy Development Pace"
              >
                <MenuItem value="slow">Slow & Gradual</MenuItem>
                <MenuItem value="moderate">Moderate Pace</MenuItem>
                <MenuItem value="fast">Fast Development</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Primary Love Languages (select top 2):
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {[
                { value: 'words', label: 'Words of Affirmation' },
                { value: 'acts', label: 'Acts of Service' },
                { value: 'gifts', label: 'Receiving Gifts' },
                { value: 'time', label: 'Quality Time' },
                { value: 'touch', label: 'Physical Touch' }
              ].map((language) => (
                <Chip
                  key={language.value}
                  label={language.label}
                  onClick={() => {
                    const current = preferences.intimacyStyle.love_language_priority;
                    if (current.includes(language.value)) {
                      handlePreferenceChange('intimacyStyle', 'love_language_priority', 
                        current.filter(item => item !== language.value));
                    } else if (current.length < 2) {
                      handlePreferenceChange('intimacyStyle', 'love_language_priority', 
                        [...current, language.value]);
                    }
                  }}
                  variant={preferences.intimacyStyle.love_language_priority.includes(language.value) ? "filled" : "outlined"}
                  color={preferences.intimacyStyle.love_language_priority.includes(language.value) ? "primary" : "default"}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderSocialIntegrationSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Groups sx={{ mr: 2, color: '#4caf50' }} />
          <Typography variant="h6">Social Integration</Typography>
          <Tooltip title="Configure how you prefer to integrate your partner into your social life">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Friend Integration Importance: {preferences.socialIntegration.friend_integration}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is it that your partner gets along with your friends?
            </Typography>
            <Slider
              value={preferences.socialIntegration.friend_integration}
              onChange={(e, newValue) => handlePreferenceChange('socialIntegration', 'friend_integration', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Not Important' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Important' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#4caf50', mb: 3 }}
            />

            <Typography gutterBottom>
              Family Integration Importance: {preferences.socialIntegration.family_integration}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is family approval and integration?
            </Typography>
            <Slider
              value={preferences.socialIntegration.family_integration}
              onChange={(e, newValue) => handlePreferenceChange('socialIntegration', 'family_integration', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Not Important' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Important' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#4caf50', mb: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Personal Space Need: {preferences.socialIntegration.alone_time_need}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much individual space and alone time do you need?
            </Typography>
            <Slider
              value={preferences.socialIntegration.alone_time_need}
              onChange={(e, newValue) => handlePreferenceChange('socialIntegration', 'alone_time_need', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Minimal' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Significant' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#4caf50', mb: 3 }}
            />

            <Typography gutterBottom>
              Couple Time Priority: {preferences.socialIntegration.couple_time_priority}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is dedicated couple time?
            </Typography>
            <Slider
              value={preferences.socialIntegration.couple_time_priority}
              onChange={(e, newValue) => handlePreferenceChange('socialIntegration', 'couple_time_priority', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#4caf50', mb: 3 }}
            />
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Preferred Social Activities:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
          {[
            { value: 'dinner_dates', label: 'Dinner Dates', icon: <Restaurant /> },
            { value: 'outdoor_activities', label: 'Outdoor Activities', icon: <DirectionsWalk /> },
            { value: 'cultural_events', label: 'Cultural Events', icon: <Movie /> },
            { value: 'home_activities', label: 'Home Activities', icon: <Home /> },
            { value: 'sports_fitness', label: 'Sports & Fitness', icon: <FitnessCenter /> },
            { value: 'music_concerts', label: 'Music & Concerts', icon: <MusicNote /> }
          ].map((activity) => (
            <Chip
              key={activity.value}
              icon={activity.icon}
              label={activity.label}
              onClick={() => handleArrayPreferenceChange('socialIntegration', 'social_activities', activity.value, true)}
              variant={preferences.socialIntegration.social_activities.includes(activity.value) ? "filled" : "outlined"}
              color={preferences.socialIntegration.social_activities.includes(activity.value) ? "primary" : "default"}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );

  const renderRelationshipDynamicsSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Balance sx={{ mr: 2, color: '#ff9800' }} />
          <Typography variant="h6">Relationship Dynamics</Typography>
          <Tooltip title="Define how you prefer to structure your relationship dynamics">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Decision Making Style</InputLabel>
              <Select
                value={preferences.relationshipDynamics.decision_making}
                onChange={(e) => handlePreferenceChange('relationshipDynamics', 'decision_making', e.target.value)}
                label="Decision Making Style"
              >
                <MenuItem value="independent">Independent (Make own decisions)</MenuItem>
                <MenuItem value="collaborative">Collaborative (Decide together)</MenuItem>
                <MenuItem value="leader_follower">Leader/Follower Dynamic</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Financial Approach</InputLabel>
              <Select
                value={preferences.relationshipDynamics.financial_approach}
                onChange={(e) => handlePreferenceChange('relationshipDynamics', 'financial_approach', e.target.value)}
                label="Financial Approach"
              >
                <MenuItem value="separate">Keep Finances Separate</MenuItem>
                <MenuItem value="shared_equal">Share Equally</MenuItem>
                <MenuItem value="shared_proportional">Share Proportionally</MenuItem>
                <MenuItem value="traditional">Traditional (One Primary Provider)</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Household Responsibilities</InputLabel>
              <Select
                value={preferences.relationshipDynamics.household_responsibilities}
                onChange={(e) => handlePreferenceChange('relationshipDynamics', 'household_responsibilities', e.target.value)}
                label="Household Responsibilities"
              >
                <MenuItem value="traditional">Traditional Gender Roles</MenuItem>
                <MenuItem value="shared_equal">Share Equally</MenuItem>
                <MenuItem value="flexible">Flexible Based on Schedule</MenuItem>
                <MenuItem value="strength_based">Based on Strengths/Preferences</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Career Priority Balance</InputLabel>
              <Select
                value={preferences.relationshipDynamics.career_priority_balance}
                onChange={(e) => handlePreferenceChange('relationshipDynamics', 'career_priority_balance', e.target.value)}
                label="Career Priority Balance"
              >
                <MenuItem value="mine_priority">My Career Priority</MenuItem>
                <MenuItem value="theirs_priority">Partner's Career Priority</MenuItem>
                <MenuItem value="both_important">Both Careers Important</MenuItem>
                <MenuItem value="flexible">Flexible Based on Opportunities</MenuItem>
              </Select>
            </FormControl>

            <Typography gutterBottom>
              Personal Growth Importance: {preferences.relationshipDynamics.personal_growth}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is individual growth within the relationship?
            </Typography>
            <Slider
              value={preferences.relationshipDynamics.personal_growth}
              onChange={(e, newValue) => handlePreferenceChange('relationshipDynamics', 'personal_growth', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#ff9800', mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderDatePreferencesSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Restaurant sx={{ mr: 2, color: '#795548' }} />
          <Typography variant="h6">Date & Activity Preferences</Typography>
          <Tooltip title="Configure your ideal dating activities and preferences">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Adventure Level: {preferences.datePreferences.adventure_level}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Do you prefer adventurous or comfortable activities?
            </Typography>
            <Slider
              value={preferences.datePreferences.adventure_level}
              onChange={(e, newValue) => handlePreferenceChange('datePreferences', 'adventure_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Comfortable' },
                { value: 5, label: 'Balanced' },
                { value: 10, label: 'Adventurous' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#795548', mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Planning Style</InputLabel>
              <Select
                value={preferences.datePreferences.planning_style}
                onChange={(e) => handlePreferenceChange('datePreferences', 'planning_style', e.target.value)}
                label="Planning Style"
              >
                <MenuItem value="spontaneous">Spontaneous</MenuItem>
                <MenuItem value="planned">Well-Planned</MenuItem>
                <MenuItem value="collaborative">Collaborative Planning</MenuItem>
                <MenuItem value="flexible">Flexible/Mixed</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Budget Comfort</InputLabel>
              <Select
                value={preferences.datePreferences.budget_comfort}
                onChange={(e) => handlePreferenceChange('datePreferences', 'budget_comfort', e.target.value)}
                label="Budget Comfort"
              >
                <MenuItem value="budget_conscious">Budget-Conscious</MenuItem>
                <MenuItem value="moderate">Moderate Spending</MenuItem>
                <MenuItem value="comfortable">Comfortable Spending</MenuItem>
                <MenuItem value="luxury">Luxury Experiences</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Date Frequency</InputLabel>
              <Select
                value={preferences.datePreferences.frequency}
                onChange={(e) => handlePreferenceChange('datePreferences', 'frequency', e.target.value)}
                label="Date Frequency"
              >
                <MenuItem value="multiple_weekly">Multiple Times Per Week</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="biweekly">Every Two Weeks</MenuItem>
                <MenuItem value="flexible">Flexible Schedule</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="body2" sx={{ mb: 2 }}>
              Preferred Date Activities:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {[
                { value: 'dinner_dates', label: 'Dinner Dates', icon: <Restaurant /> },
                { value: 'outdoor_activities', label: 'Outdoor Activities', icon: <DirectionsWalk /> },
                { value: 'cultural_events', label: 'Cultural Events', icon: <Movie /> },
                { value: 'home_activities', label: 'Home Activities', icon: <Home /> },
                { value: 'sports_fitness', label: 'Sports & Fitness', icon: <FitnessCenter /> },
                { value: 'travel_exploration', label: 'Travel & Exploration', icon: <Flight /> }
              ].map((activity) => (
                <Chip
                  key={activity.value}
                  icon={activity.icon}
                  label={activity.label}
                  onClick={() => handleArrayPreferenceChange('datePreferences', 'preferred_activities', activity.value, true)}
                  variant={preferences.datePreferences.preferred_activities.includes(activity.value) ? "filled" : "outlined"}
                  color={preferences.datePreferences.preferred_activities.includes(activity.value) ? "primary" : "default"}
                  sx={{ cursor: 'pointer' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderLongTermVisionSection = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Growth sx={{ mr: 2, color: '#607d8b' }} />
          <Typography variant="h6">Long-term Relationship Vision</Typography>
          <Tooltip title="Define your timeline and vision for relationship milestones">
            <IconButton size="small">
              <Info fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Living Together Timeline</InputLabel>
              <Select
                value={preferences.longTermVision.living_together_timeline}
                onChange={(e) => handlePreferenceChange('longTermVision', 'living_together_timeline', e.target.value)}
                label="Living Together Timeline"
              >
                <MenuItem value="months">Within Months</MenuItem>
                <MenuItem value="year">Within a Year</MenuItem>
                <MenuItem value="year_plus">After a Year+</MenuItem>
                <MenuItem value="flexible">Flexible/Natural Timing</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Marriage Timeline</InputLabel>
              <Select
                value={preferences.longTermVision.marriage_timeline}
                onChange={(e) => handlePreferenceChange('longTermVision', 'marriage_timeline', e.target.value)}
                label="Marriage Timeline"
              >
                <MenuItem value="year">Within a Year</MenuItem>
                <MenuItem value="two_years">Within Two Years</MenuItem>
                <MenuItem value="several_years">Several Years</MenuItem>
                <MenuItem value="flexible">Flexible/Natural</MenuItem>
                <MenuItem value="not_important">Not Important</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Children Timeline</InputLabel>
              <Select
                value={preferences.longTermVision.children_timeline}
                onChange={(e) => handlePreferenceChange('longTermVision', 'children_timeline', e.target.value)}
                label="Children Timeline"
              >
                <MenuItem value="soon">Soon (1-2 years)</MenuItem>
                <MenuItem value="few_years">Few Years (3-5 years)</MenuItem>
                <MenuItem value="several_years">Several Years (5+ years)</MenuItem>
                <MenuItem value="flexible">Flexible Timeline</MenuItem>
                <MenuItem value="not_applicable">Not Applicable</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              Lifestyle Evolution Openness: {preferences.longTermVision.lifestyle_evolution}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How open are you to lifestyle changes together?
            </Typography>
            <Slider
              value={preferences.longTermVision.lifestyle_evolution}
              onChange={(e, newValue) => handlePreferenceChange('longTermVision', 'lifestyle_evolution', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Prefer Stability' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Very Open' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b', mb: 3 }}
            />

            <Typography gutterBottom>
              Shared Goals Importance: {preferences.longTermVision.shared_goals_importance}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How important is alignment on future goals?
            </Typography>
            <Slider
              value={preferences.longTermVision.shared_goals_importance}
              onChange={(e, newValue) => handlePreferenceChange('longTermVision', 'shared_goals_importance', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'Critical' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: '#607d8b', mb: 3 }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 0: return renderDatingStyleSection();
      case 1: return renderCommunicationSection();
      case 2: return renderIntimacySection();
      case 3: return renderSocialIntegrationSection();
      case 4: return renderRelationshipDynamicsSection();
      case 5: return renderDatePreferencesSection();
      case 6: return renderLongTermVisionSection();
      default: return renderDatingStyleSection();
    }
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleComplete = () => {
    // Save preferences and navigate to next screen
    localStorage.setItem('relationshipStylePreferences', JSON.stringify(preferences));
    console.log('Relationship Style Preferences completed:', preferences);
    // Navigate to Screen 139: Geographic & Lifestyle Matching
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Relationship Style Preferences
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Define your ideal relationship approach and dynamics
        </Typography>
        
        {/* Progress Bar */}
        <Box sx={{ mb: 3 }}>
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              height: 8, 
              borderRadius: 4,
              backgroundColor: '#f0f0f0',
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)'
              }
            }} 
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {Math.round(progress)}% Complete
          </Typography>
        </Box>
      </Box>

      {/* Section Navigation */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={1}>
          {sections.map((section, index) => (
            <Grid item xs={6} sm={4} md={3} lg={1.7} key={section.id}>
              <Chip
                icon={React.cloneElement(section.icon, { sx: { color: section.color } })}
                label={section.title}
                onClick={() => setCurrentSection(index)}
                variant={currentSection === index ? "filled" : "outlined"}
                color={currentSection === index ? "primary" : "default"}
                sx={{ 
                  width: '100%',
                  height: 'auto',
                  py: 1,
                  cursor: 'pointer',
                  '& .MuiChip-label': {
                    fontSize: '0.7rem',
                    whiteSpace: 'normal',
                    lineHeight: 1.2
                  }
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Section Content */}
      {renderCurrentSection()}

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mb: 4 }}>
        <Typography variant="body2">
          <strong>Cultural Note:</strong> Relationship styles vary greatly across cultures and individuals. 
          Our matching algorithm respects diverse relationship approaches while helping you find someone 
          who shares your preferred style and values.
        </Typography>
      </Alert>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentSection === 0}
        >
          Previous Section
        </Button>

        {currentSection < sections.length - 1 ? (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
              color: 'white'
            }}
          >
            Next Section
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleComplete}
            sx={{
              background: 'linear-gradient(45deg, #4ECDC4 30%, #44A08D 90%)',
              color: 'white'
            }}
          >
            Complete Style Preferences
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Relationship Style Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Dating Style:</strong> {preferences.datingStyle.approach?.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Communication:</strong> {preferences.communicationStyle.conflict_style?.replace('_', ' ')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Intimacy Pace:</strong> {preferences.intimacyStyle.intimacy_pace}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body2">
              <strong>Decision Making:</strong> {preferences.relationshipDynamics.decision_making?.replace('_', ' ')}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default RelationshipStylePreferences;

