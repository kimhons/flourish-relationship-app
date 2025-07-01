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
  TextField,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
  RadioGroup,
  Radio,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Psychology,
  Chat,
  Favorite,
  Star,
  AutoAwesome,
  TrendingUp,
  Analytics,
  PersonSearch,
  Groups,
  School,
  Work,
  FitnessCenter,
  Restaurant,
  Movie,
  MusicNote,
  Flight,
  Home,
  Child,
  Pets,
  Info,
  ExpandMore,
  CheckCircle,
  Warning,
  Error,
  Refresh,
  Pause,
  PlayArrow,
  VolumeUp,
  VideoCall,
  Phone,
  Message,
  Schedule,
  Notifications,
  Security,
  Privacy,
  Settings,
  Help,
  Support,
  Lightbulb,
  EmojiObjects,
  Healing,
  SelfImprovement,
  Mood,
  Insights,
  Timeline,
  Assessment,
  Assignment,
  BookmarkBorder,
  Bookmark,
  Speed,
  Tune,
  SmartToy,
  RecordVoiceOver,
  Hearing,
  Visibility,
  TouchApp,
  EmojiEmotions,
  SentimentSatisfied,
  SentimentVeryDissatisfied,
  ThumbUp,
  ThumbDown,
  QuestionAnswer,
  Forum,
  Feedback,
  Flag,
  CalendarToday,
  Timer,
  Alarm,
  DateRange,
  Event,
  Today,
  AccessTime,
  Update,
  Cached,
  Loop,
  Repeat,
  RotateRight,
  Sync,
  CloudSync,
  Backup,
  Save,
  Edit,
  Add,
  Remove,
  Clear,
  Delete,
  Archive,
  Unarchive,
  Restore,
  Undo,
  Redo,
  Forward,
  Reply,
  Share,
  Download,
  Upload,
  CloudUpload,
  CloudDownload,
  Publish,
  Public,
  Lock,
  LockOpen,
  Visibility as VisibilityIcon,
  VisibilityOff
} from '@mui/icons-material';

const PersonalGrowthGoals = () => {
  const [goals, setGoals] = useState({
    // Personal Development Goals
    personalDevelopment: {
      self_confidence: { priority: 8, timeline: '3_months', specific_goals: [], current_level: 5, target_level: 8 },
      emotional_intelligence: { priority: 7, timeline: '6_months', specific_goals: [], current_level: 6, target_level: 9 },
      communication_skills: { priority: 9, timeline: '3_months', specific_goals: [], current_level: 5, target_level: 8 },
      self_awareness: { priority: 6, timeline: '6_months', specific_goals: [], current_level: 6, target_level: 8 },
      stress_management: { priority: 7, timeline: '3_months', specific_goals: [], current_level: 4, target_level: 7 },
      mindfulness: { priority: 5, timeline: '6_months', specific_goals: [], current_level: 3, target_level: 7 },
      assertiveness: { priority: 6, timeline: '3_months', specific_goals: [], current_level: 4, target_level: 7 },
      empathy: { priority: 7, timeline: '6_months', specific_goals: [], current_level: 7, target_level: 9 }
    },
    
    // Relationship Skills Goals
    relationshipSkills: {
      dating_confidence: { priority: 9, timeline: '2_months', specific_goals: [], current_level: 4, target_level: 8 },
      conversation_skills: { priority: 8, timeline: '2_months', specific_goals: [], current_level: 5, target_level: 8 },
      conflict_resolution: { priority: 7, timeline: '4_months', specific_goals: [], current_level: 4, target_level: 7 },
      intimacy_building: { priority: 6, timeline: '6_months', specific_goals: [], current_level: 5, target_level: 8 },
      boundary_setting: { priority: 8, timeline: '3_months', specific_goals: [], current_level: 3, target_level: 7 },
      trust_building: { priority: 7, timeline: '6_months', specific_goals: [], current_level: 6, target_level: 9 },
      vulnerability: { priority: 5, timeline: '6_months', specific_goals: [], current_level: 4, target_level: 7 },
      active_listening: { priority: 8, timeline: '2_months', specific_goals: [], current_level: 6, target_level: 9 }
    },
    
    // Behavioral Change Goals
    behavioralChange: {
      attachment_patterns: { priority: 6, timeline: '12_months', specific_goals: [], current_level: 4, target_level: 7 },
      jealousy_management: { priority: 5, timeline: '6_months', specific_goals: [], current_level: 6, target_level: 8 },
      codependency: { priority: 4, timeline: '12_months', specific_goals: [], current_level: 7, target_level: 9 },
      people_pleasing: { priority: 7, timeline: '6_months', specific_goals: [], current_level: 3, target_level: 7 },
      fear_of_rejection: { priority: 8, timeline: '6_months', specific_goals: [], current_level: 3, target_level: 7 },
      commitment_issues: { priority: 5, timeline: '12_months', specific_goals: [], current_level: 6, target_level: 8 },
      emotional_regulation: { priority: 7, timeline: '6_months', specific_goals: [], current_level: 5, target_level: 8 },
      social_anxiety: { priority: 6, timeline: '6_months', specific_goals: [], current_level: 4, target_level: 7 }
    },
    
    // Life Balance Goals
    lifeBalance: {
      work_life_balance: { priority: 7, timeline: '3_months', specific_goals: [], current_level: 4, target_level: 7 },
      self_care_routine: { priority: 8, timeline: '2_months', specific_goals: [], current_level: 3, target_level: 8 },
      social_connections: { priority: 6, timeline: '6_months', specific_goals: [], current_level: 5, target_level: 8 },
      hobby_development: { priority: 4, timeline: '6_months', specific_goals: [], current_level: 5, target_level: 7 },
      physical_health: { priority: 7, timeline: '6_months', specific_goals: [], current_level: 5, target_level: 8 },
      mental_health: { priority: 9, timeline: '6_months', specific_goals: [], current_level: 4, target_level: 8 },
      financial_stability: { priority: 6, timeline: '12_months', specific_goals: [], current_level: 6, target_level: 8 },
      career_growth: { priority: 5, timeline: '12_months', specific_goals: [], current_level: 6, target_level: 8 }
    }
  });

  const [goalSettings, setGoalSettings] = useState({
    tracking_frequency: 'weekly', // daily, weekly, biweekly, monthly
    reminder_style: 'gentle', // none, gentle, moderate, persistent
    progress_sharing: 'private', // private, coach_only, community, public
    milestone_celebration: true,
    setback_support: true,
    goal_flexibility: 'moderate', // rigid, moderate, flexible, very_flexible
    accountability_level: 7, // 1-10 scale
    motivation_style: 'progress_based' // achievement_based, progress_based, process_based, outcome_based
  });

  const [currentCategory, setCurrentCategory] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showGoalDialog, setShowGoalDialog] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [customGoal, setCustomGoal] = useState('');

  const categories = [
    { 
      id: 'personalDevelopment', 
      title: 'Personal Development', 
      icon: <SelfImprovement />, 
      color: '#e91e63',
      description: 'Build core personal skills and self-awareness'
    },
    { 
      id: 'relationshipSkills', 
      title: 'Relationship Skills', 
      icon: <Favorite />, 
      color: '#2196f3',
      description: 'Develop skills for healthy relationships'
    },
    { 
      id: 'behavioralChange', 
      title: 'Behavioral Change', 
      icon: <Psychology />, 
      color: '#4caf50',
      description: 'Address patterns and behaviors to change'
    },
    { 
      id: 'lifeBalance', 
      title: 'Life Balance', 
      icon: <TrendingUp />, 
      color: '#ff9800',
      description: 'Create balance across life areas'
    }
  ];

  const timelineOptions = [
    { value: '1_month', label: '1 Month', color: '#f44336' },
    { value: '2_months', label: '2 Months', color: '#ff9800' },
    { value: '3_months', label: '3 Months', color: '#2196f3' },
    { value: '6_months', label: '6 Months', color: '#4caf50' },
    { value: '12_months', label: '12 Months', color: '#9c27b0' },
    { value: 'ongoing', label: 'Ongoing', color: '#607d8b' }
  ];

  useEffect(() => {
    // Calculate progress based on configured goals
    const allGoals = Object.values(goals).flatMap(category => Object.values(category));
    const configuredGoals = allGoals.filter(goal => 
      goal.priority > 0 && goal.timeline && goal.target_level > goal.current_level
    );
    setProgress((configuredGoals.length / allGoals.length) * 100);
  }, [goals]);

  const handleGoalChange = (category, goalKey, field, value) => {
    setGoals(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [goalKey]: {
          ...prev[category][goalKey],
          [field]: value
        }
      }
    }));
  };

  const handleSettingChange = (field, value) => {
    setGoalSettings(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getPriorityLabel = (value) => {
    if (value <= 3) return 'Low Priority';
    if (value <= 6) return 'Medium Priority';
    if (value <= 8) return 'High Priority';
    return 'Critical Priority';
  };

  const getPriorityColor = (value) => {
    if (value <= 3) return '#9e9e9e';
    if (value <= 6) return '#ff9800';
    if (value <= 8) return '#2196f3';
    return '#f44336';
  };

  const getProgressColor = (current, target) => {
    const progress = (current / target) * 100;
    if (progress < 30) return '#f44336';
    if (progress < 60) return '#ff9800';
    if (progress < 80) return '#2196f3';
    return '#4caf50';
  };

  const addSpecificGoal = (category, goalKey, specificGoal) => {
    if (specificGoal.trim()) {
      handleGoalChange(category, goalKey, 'specific_goals', [
        ...goals[category][goalKey].specific_goals,
        specificGoal.trim()
      ]);
    }
  };

  const removeSpecificGoal = (category, goalKey, index) => {
    const updatedGoals = [...goals[category][goalKey].specific_goals];
    updatedGoals.splice(index, 1);
    handleGoalChange(category, goalKey, 'specific_goals', updatedGoals);
  };

  const renderGoalCard = (category, goalKey, goalData) => {
    const goalInfo = {
      // Personal Development
      self_confidence: { label: 'Self-Confidence', description: 'Build confidence in yourself and your abilities' },
      emotional_intelligence: { label: 'Emotional Intelligence', description: 'Understand and manage emotions effectively' },
      communication_skills: { label: 'Communication Skills', description: 'Express yourself clearly and effectively' },
      self_awareness: { label: 'Self-Awareness', description: 'Develop deeper understanding of yourself' },
      stress_management: { label: 'Stress Management', description: 'Learn healthy ways to cope with stress' },
      mindfulness: { label: 'Mindfulness', description: 'Practice present-moment awareness' },
      assertiveness: { label: 'Assertiveness', description: 'Stand up for yourself respectfully' },
      empathy: { label: 'Empathy', description: 'Better understand others\' feelings and perspectives' },
      
      // Relationship Skills
      dating_confidence: { label: 'Dating Confidence', description: 'Feel confident and comfortable while dating' },
      conversation_skills: { label: 'Conversation Skills', description: 'Engage in meaningful conversations' },
      conflict_resolution: { label: 'Conflict Resolution', description: 'Handle disagreements constructively' },
      intimacy_building: { label: 'Intimacy Building', description: 'Create deeper emotional and physical connections' },
      boundary_setting: { label: 'Boundary Setting', description: 'Establish and maintain healthy boundaries' },
      trust_building: { label: 'Trust Building', description: 'Build and maintain trust in relationships' },
      vulnerability: { label: 'Vulnerability', description: 'Share authentically and openly' },
      active_listening: { label: 'Active Listening', description: 'Listen with full attention and understanding' },
      
      // Behavioral Change
      attachment_patterns: { label: 'Attachment Patterns', description: 'Develop secure attachment style' },
      jealousy_management: { label: 'Jealousy Management', description: 'Handle jealousy in healthy ways' },
      codependency: { label: 'Codependency', description: 'Maintain independence in relationships' },
      people_pleasing: { label: 'People Pleasing', description: 'Balance others\' needs with your own' },
      fear_of_rejection: { label: 'Fear of Rejection', description: 'Overcome fear of being rejected' },
      commitment_issues: { label: 'Commitment Issues', description: 'Feel comfortable with commitment' },
      emotional_regulation: { label: 'Emotional Regulation', description: 'Manage intense emotions effectively' },
      social_anxiety: { label: 'Social Anxiety', description: 'Feel comfortable in social situations' },
      
      // Life Balance
      work_life_balance: { label: 'Work-Life Balance', description: 'Balance career and personal life' },
      self_care_routine: { label: 'Self-Care Routine', description: 'Prioritize your physical and mental well-being' },
      social_connections: { label: 'Social Connections', description: 'Build and maintain friendships' },
      hobby_development: { label: 'Hobby Development', description: 'Pursue interests and passions' },
      physical_health: { label: 'Physical Health', description: 'Maintain good physical health and fitness' },
      mental_health: { label: 'Mental Health', description: 'Prioritize mental health and well-being' },
      financial_stability: { label: 'Financial Stability', description: 'Achieve financial security and independence' },
      career_growth: { label: 'Career Growth', description: 'Advance in your professional life' }
    };

    const info = goalInfo[goalKey] || { label: goalKey, description: 'Personal growth goal' };

    return (
      <Card key={goalKey} sx={{ mb: 3, border: goalData.priority > 6 ? `2px solid ${getPriorityColor(goalData.priority)}` : '1px solid #e0e0e0' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {info.label}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {info.description}
              </Typography>
            </Box>
            <Chip 
              label={getPriorityLabel(goalData.priority)}
              size="small"
              sx={{ 
                backgroundColor: getPriorityColor(goalData.priority),
                color: 'white',
                fontWeight: 'bold'
              }}
            />
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Priority Level: {goalData.priority}/10
              </Typography>
              <Slider
                value={goalData.priority}
                onChange={(e, newValue) => handleGoalChange(category, goalKey, 'priority', newValue)}
                min={0}
                max={10}
                step={1}
                marks={[
                  { value: 0, label: 'None' },
                  { value: 3, label: 'Low' },
                  { value: 6, label: 'Med' },
                  { value: 8, label: 'High' },
                  { value: 10, label: 'Critical' }
                ]}
                valueLabelDisplay="auto"
                sx={{ color: getPriorityColor(goalData.priority), mb: 3 }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Timeline</InputLabel>
                <Select
                  value={goalData.timeline}
                  onChange={(e) => handleGoalChange(category, goalKey, 'timeline', e.target.value)}
                  label="Timeline"
                >
                  {timelineOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box 
                          sx={{ 
                            width: 12, 
                            height: 12, 
                            borderRadius: '50%', 
                            backgroundColor: option.color, 
                            mr: 1 
                          }} 
                        />
                        {option.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Current Level: {goalData.current_level}/10
              </Typography>
              <Slider
                value={goalData.current_level}
                onChange={(e, newValue) => handleGoalChange(category, goalKey, 'current_level', newValue)}
                min={1}
                max={10}
                step={1}
                marks={[
                  { value: 1, label: '1' },
                  { value: 5, label: '5' },
                  { value: 10, label: '10' }
                ]}
                valueLabelDisplay="auto"
                sx={{ color: getProgressColor(goalData.current_level, goalData.target_level), mb: 3 }}
              />

              <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
                Target Level: {goalData.target_level}/10
              </Typography>
              <Slider
                value={goalData.target_level}
                onChange={(e, newValue) => handleGoalChange(category, goalKey, 'target_level', newValue)}
                min={goalData.current_level}
                max={10}
                step={1}
                marks={[
                  { value: goalData.current_level, label: 'Current' },
                  { value: 10, label: '10' }
                ]}
                valueLabelDisplay="auto"
                sx={{ color: '#4caf50', mb: 3 }}
              />
            </Grid>
          </Grid>

          {/* Specific Goals */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              Specific Goals & Actions
            </Typography>
            
            {goalData.specific_goals.map((specificGoal, index) => (
              <Chip
                key={index}
                label={specificGoal}
                onDelete={() => removeSpecificGoal(category, goalKey, index)}
                sx={{ mr: 1, mb: 1 }}
                variant="outlined"
              />
            ))}
            
            <Box sx={{ display: 'flex', mt: 2 }}>
              <TextField
                size="small"
                placeholder="Add specific goal or action..."
                value={customGoal}
                onChange={(e) => setCustomGoal(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addSpecificGoal(category, goalKey, customGoal);
                    setCustomGoal('');
                  }
                }}
                sx={{ flexGrow: 1, mr: 1 }}
              />
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  addSpecificGoal(category, goalKey, customGoal);
                  setCustomGoal('');
                }}
                startIcon={<Add />}
              >
                Add
              </Button>
            </Box>
          </Box>

          {/* Progress Indicator */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Progress: {goalData.current_level}/{goalData.target_level} 
              ({Math.round((goalData.current_level / goalData.target_level) * 100)}%)
            </Typography>
            <LinearProgress
              variant="determinate"
              value={(goalData.current_level / goalData.target_level) * 100}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: '#f0f0f0',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  backgroundColor: getProgressColor(goalData.current_level, goalData.target_level)
                }
              }}
            />
          </Box>
        </CardContent>
      </Card>
    );
  };

  const renderCurrentCategory = () => {
    const categoryKey = categories[currentCategory].id;
    const categoryGoals = goals[categoryKey];

    return (
      <Box>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold', color: categories[currentCategory].color }}>
          {categories[currentCategory].title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          {categories[currentCategory].description}
        </Typography>

        {Object.entries(categoryGoals).map(([goalKey, goalData]) =>
          renderGoalCard(categoryKey, goalKey, goalData)
        )}
      </Box>
    );
  };

  const renderGoalSettings = () => (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 3, fontWeight: 'bold' }}>
          Goal Tracking & Support Settings
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Tracking Frequency</InputLabel>
              <Select
                value={goalSettings.tracking_frequency}
                onChange={(e) => handleSettingChange('tracking_frequency', e.target.value)}
                label="Tracking Frequency"
              >
                <MenuItem value="daily">Daily Check-ins</MenuItem>
                <MenuItem value="weekly">Weekly Reviews</MenuItem>
                <MenuItem value="biweekly">Bi-weekly Reviews</MenuItem>
                <MenuItem value="monthly">Monthly Reviews</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Reminder Style</InputLabel>
              <Select
                value={goalSettings.reminder_style}
                onChange={(e) => handleSettingChange('reminder_style', e.target.value)}
                label="Reminder Style"
              >
                <MenuItem value="none">No Reminders</MenuItem>
                <MenuItem value="gentle">Gentle Reminders</MenuItem>
                <MenuItem value="moderate">Moderate Reminders</MenuItem>
                <MenuItem value="persistent">Persistent Reminders</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Progress Sharing</InputLabel>
              <Select
                value={goalSettings.progress_sharing}
                onChange={(e) => handleSettingChange('progress_sharing', e.target.value)}
                label="Progress Sharing"
              >
                <MenuItem value="private">Private (You Only)</MenuItem>
                <MenuItem value="coach_only">Coach Only</MenuItem>
                <MenuItem value="community">Community Support</MenuItem>
                <MenuItem value="public">Public Progress</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Goal Flexibility</InputLabel>
              <Select
                value={goalSettings.goal_flexibility}
                onChange={(e) => handleSettingChange('goal_flexibility', e.target.value)}
                label="Goal Flexibility"
              >
                <MenuItem value="rigid">Rigid (Stick to Plan)</MenuItem>
                <MenuItem value="moderate">Moderate Flexibility</MenuItem>
                <MenuItem value="flexible">Flexible Adaptation</MenuItem>
                <MenuItem value="very_flexible">Very Flexible</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={goalSettings.milestone_celebration}
                    onChange={(e) => handleSettingChange('milestone_celebration', e.target.checked)}
                  />
                }
                label="Milestone Celebrations"
              />
              <Typography variant="body2" color="text.secondary">
                Celebrate when you reach important milestones
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={goalSettings.setback_support}
                    onChange={(e) => handleSettingChange('setback_support', e.target.checked)}
                  />
                }
                label="Setback Support"
              />
              <Typography variant="body2" color="text.secondary">
                Extra support during challenging times
              </Typography>
            </Box>

            <Typography gutterBottom sx={{ fontWeight: 'bold' }}>
              Accountability Level: {goalSettings.accountability_level}/10
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              How much accountability do you want for your goals?
            </Typography>
            <Slider
              value={goalSettings.accountability_level}
              onChange={(e, newValue) => handleSettingChange('accountability_level', newValue)}
              min={1}
              max={10}
              step={1}
              marks={[
                { value: 1, label: 'Low' },
                { value: 5, label: 'Moderate' },
                { value: 10, label: 'High' }
              ]}
              valueLabelDisplay="auto"
              sx={{ color: getPriorityColor(goalSettings.accountability_level), mb: 3 }}
            />

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Motivation Style</InputLabel>
              <Select
                value={goalSettings.motivation_style}
                onChange={(e) => handleSettingChange('motivation_style', e.target.value)}
                label="Motivation Style"
              >
                <MenuItem value="achievement_based">Achievement-Based</MenuItem>
                <MenuItem value="progress_based">Progress-Based</MenuItem>
                <MenuItem value="process_based">Process-Based</MenuItem>
                <MenuItem value="outcome_based">Outcome-Based</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
    }
  };

  const handleComplete = () => {
    // Save goals and navigate to next screen
    localStorage.setItem('personalGrowthGoals', JSON.stringify({ goals, goalSettings }));
    console.log('Personal Growth Goals completed:', { goals, goalSettings });
    // Navigate to Screen 144: Relationship Coaching Areas
  };

  const getGoalSummary = () => {
    const allGoals = Object.values(goals).flatMap(category => Object.values(category));
    const highPriorityGoals = allGoals.filter(goal => goal.priority >= 7);
    const totalSpecificGoals = allGoals.reduce((total, goal) => total + goal.specific_goals.length, 0);
    
    return {
      totalGoals: allGoals.length,
      highPriorityGoals: highPriorityGoals.length,
      totalSpecificGoals,
      averagePriority: Math.round(allGoals.reduce((sum, goal) => sum + goal.priority, 0) / allGoals.length)
    };
  };

  const summary = getGoalSummary();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Personal Growth Goals
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Set your personal development and relationship growth objectives
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
                background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)'
              }
            }} 
          />
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {Math.round(progress)}% Goals Configured
          </Typography>
        </Box>
      </Box>

      {/* Goal Settings */}
      {renderGoalSettings()}

      {/* Category Navigation */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Grid item xs={6} md={3} key={category.id}>
              <Card
                sx={{
                  cursor: 'pointer',
                  border: currentCategory === index ? `2px solid ${category.color}` : '1px solid #e0e0e0',
                  backgroundColor: currentCategory === index ? `${category.color}10` : 'white',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => setCurrentCategory(index)}
              >
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      mx: 'auto',
                      mb: 1,
                      backgroundColor: category.color,
                      color: 'white'
                    }}
                  >
                    {category.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    {Object.values(goals[category.id]).filter(goal => goal.priority > 6).length} high priority
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Current Category Content */}
      {renderCurrentCategory()}

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          onClick={handlePrevious}
          disabled={currentCategory === 0}
        >
          Previous Category
        </Button>

        {currentCategory < categories.length - 1 ? (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleNext}
            sx={{
              background: 'linear-gradient(45deg, #e91e63 30%, #2196f3 90%)',
              color: 'white'
            }}
          >
            Next Category
          </Button>
        ) : (
          <Button
            variant="contained"
            endIcon={<NavigateNext />}
            onClick={handleComplete}
            sx={{
              background: 'linear-gradient(45deg, #2196f3 30%, #4caf50 90%)',
              color: 'white'
            }}
          >
            Complete Goal Setting
          </Button>
        )}
      </Box>

      {/* Summary Card */}
      <Paper sx={{ mt: 4, p: 3, backgroundColor: '#f8f9fa' }}>
        <Typography variant="h6" gutterBottom>
          Your Growth Goals Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>Total Goals:</strong> {summary.totalGoals}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>High Priority:</strong> {summary.highPriorityGoals}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>Specific Actions:</strong> {summary.totalSpecificGoals}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="body2">
              <strong>Avg Priority:</strong> {summary.averagePriority}/10
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>Tracking:</strong> {goalSettings.tracking_frequency} • 
          <strong> Accountability:</strong> {goalSettings.accountability_level}/10 • 
          <strong> Motivation:</strong> {goalSettings.motivation_style.replace('_', ' ')}
        </Typography>
      </Paper>

      {/* Cultural Sensitivity Note */}
      <Alert severity="info" sx={{ mt: 4 }}>
        <Typography variant="body2">
          <strong>Growth Journey Note:</strong> Personal growth is a unique journey that varies by individual and culture. 
          Your AI coach will adapt to your pace, values, and cultural background while supporting your goals with sensitivity and respect.
        </Typography>
      </Alert>
    </Container>
  );
};

export default PersonalGrowthGoals;

