/**
 * Flourish App: AI Analytics Dashboard
 * Comprehensive relationship insights and progress tracking
 */

import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Paper,
  Tab,
  Tabs
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Psychology as PsychologyIcon,
  Favorite as FavoriteIcon,
  Timeline as TimelineIcon,
  Assessment as AssessmentIcon,
  Lightbulb as LightbulbIcon,
  Star as StarIcon,
  Warning as WarningIcon,
  Refresh as RefreshIcon,
  Download as DownloadIcon,
  Share as ShareIcon,
  DateRange as DateRangeIcon,
  Person as PersonIcon,
  Chat as ChatIcon,
  EmojiEvents as TrophyIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import aiService, { handleAIError } from '../../services/aiService';

// Styled components
const DashboardCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8],
  },
}));

const MetricCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  color: theme.palette.primary.contrastText,
}));

const InsightCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

const ProgressCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
  color: theme.palette.success.contrastText,
}));

// Color schemes
const CHART_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00ff00', '#ff00ff'];

const AIAnalyticsDashboard = () => {
  // State management
  const [activeTab, setActiveTab] = useState(0);
  const [timeRange, setTimeRange] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Analytics data
  const [relationshipAnalytics, setRelationshipAnalytics] = useState(null);
  const [coachingAnalytics, setCoachingAnalytics] = useState(null);
  const [matchingAnalytics, setMatchingAnalytics] = useState(null);
  const [modelPerformance, setModelPerformance] = useState(null);

  // Load analytics data
  useEffect(() => {
    loadAnalyticsData();
  }, [timeRange]);

  const loadAnalyticsData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const [relationship, coaching, matching, performance] = await Promise.all([
        aiService.getRelationshipAnalytics(timeRange),
        aiService.getCoachingAnalytics(timeRange),
        aiService.getMatchingAnalytics(timeRange),
        aiService.getModelPerformance()
      ]);

      setRelationshipAnalytics(relationship.data);
      setCoachingAnalytics(coaching.data);
      setMatchingAnalytics(matching.data);
      setModelPerformance(performance.data);
    } catch (error) {
      setError(handleAIError(error, 'Failed to load analytics data'));
      
      // Set sample data for demonstration
      setSampleData();
    } finally {
      setIsLoading(false);
    }
  };

  const setSampleData = () => {
    setRelationshipAnalytics({
      overall_score: 78.5,
      growth_trend: 12.3,
      communication_score: 82,
      intimacy_score: 75,
      conflict_resolution: 68,
      weekly_progress: [
        { week: 'Week 1', score: 65 },
        { week: 'Week 2', score: 70 },
        { week: 'Week 3', score: 75 },
        { week: 'Week 4', score: 78.5 }
      ],
      insights: [
        'Your communication has improved significantly this month',
        'Consider working on conflict resolution strategies',
        'Emotional intimacy shows positive growth'
      ]
    });

    setCoachingAnalytics({
      total_sessions: 12,
      average_satisfaction: 4.6,
      most_discussed_topics: ['Communication', 'Trust', 'Intimacy'],
      progress_areas: [
        { area: 'Communication', progress: 85 },
        { area: 'Emotional Intelligence', progress: 78 },
        { area: 'Conflict Resolution', progress: 65 },
        { area: 'Intimacy', progress: 72 }
      ],
      mood_trends: [
        { date: '2025-06-01', mood: 'positive', score: 8 },
        { date: '2025-06-08', mood: 'neutral', score: 6 },
        { date: '2025-06-15', mood: 'positive', score: 9 },
        { date: '2025-06-22', mood: 'positive', score: 8.5 },
        { date: '2025-06-29', mood: 'very_positive', score: 9.2 }
      ]
    });

    setMatchingAnalytics({
      total_matches_generated: 45,
      matches_viewed: 32,
      matches_liked: 12,
      mutual_matches: 3,
      average_compatibility_score: 78.5,
      top_compatibility_dimensions: [
        { dimension: 'values', average_score: 85.2 },
        { dimension: 'personality', average_score: 82.1 },
        { dimension: 'lifestyle', average_score: 76.8 }
      ],
      match_success_rate: 26.7
    });

    setModelPerformance({
      model_health: {
        openai_gpt4: { status: 'healthy', response_time: '1.2s', success_rate: '99.2%' },
        together_llama: { status: 'healthy', response_time: '0.8s', success_rate: '98.7%' },
        together_deepseek: { status: 'healthy', response_time: '0.9s', success_rate: '98.1%' }
      },
      usage_statistics: {
        total_requests_today: 1247,
        coaching_sessions: 89,
        compatibility_analyses: 156,
        content_generations: 67
      },
      cost_optimization: {
        daily_cost: '$23.45',
        cost_per_request: '$0.019',
        savings_from_fallbacks: '$4.67'
      }
    });
  };

  // Render relationship analytics tab
  const renderRelationshipAnalytics = () => (
    <Grid container spacing={3}>
      {/* Overall Score */}
      <Grid item xs={12} md={4}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {relationshipAnalytics?.overall_score || 0}%
          </Typography>
          <Typography variant="h6">
            Overall Relationship Health
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
            <TrendingUpIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              +{relationshipAnalytics?.growth_trend || 0}% this month
            </Typography>
          </Box>
        </MetricCard>
      </Grid>

      {/* Progress Chart */}
      <Grid item xs={12} md={8}>
        <DashboardCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Relationship Progress Over Time
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={relationshipAnalytics?.weekly_progress || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <RechartsTooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#8884d8" 
                  strokeWidth={3}
                  dot={{ fill: '#8884d8', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </DashboardCard>
      </Grid>

      {/* Key Metrics */}
      <Grid item xs={12} md={4}>
        <DashboardCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Key Relationship Metrics
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Communication Score
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={relationshipAnalytics?.communication_score || 0} 
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                {relationshipAnalytics?.communication_score || 0}%
              </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Emotional Intimacy
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={relationshipAnalytics?.intimacy_score || 0} 
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                {relationshipAnalytics?.intimacy_score || 0}%
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" gutterBottom>
                Conflict Resolution
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={relationshipAnalytics?.conflict_resolution || 0} 
                sx={{ height: 8, borderRadius: 4 }}
              />
              <Typography variant="caption" color="text.secondary">
                {relationshipAnalytics?.conflict_resolution || 0}%
              </Typography>
            </Box>
          </CardContent>
        </DashboardCard>
      </Grid>

      {/* AI Insights */}
      <Grid item xs={12} md={8}>
        <DashboardCard>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LightbulbIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6">AI-Generated Insights</Typography>
            </Box>
            
            {relationshipAnalytics?.insights?.map((insight, index) => (
              <InsightCard key={index}>
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="body1">{insight}</Typography>
                </CardContent>
              </InsightCard>
            ))}
          </CardContent>
        </DashboardCard>
      </Grid>
    </Grid>
  );

  // Render coaching analytics tab
  const renderCoachingAnalytics = () => (
    <Grid container spacing={3}>
      {/* Coaching Stats */}
      <Grid item xs={12} md={3}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {coachingAnalytics?.total_sessions || 0}
          </Typography>
          <Typography variant="h6">
            Coaching Sessions
          </Typography>
        </MetricCard>
      </Grid>

      <Grid item xs={12} md={3}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {coachingAnalytics?.average_satisfaction || 0}
          </Typography>
          <Typography variant="h6">
            Avg Satisfaction
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon 
                key={star} 
                sx={{ 
                  color: star <= (coachingAnalytics?.average_satisfaction || 0) ? 'gold' : 'rgba(255,255,255,0.3)',
                  fontSize: 20
                }} 
              />
            ))}
          </Box>
        </MetricCard>
      </Grid>

      {/* Progress Areas */}
      <Grid item xs={12} md={6}>
        <DashboardCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Progress in Key Areas
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={coachingAnalytics?.progress_areas || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="area" />
                <YAxis domain={[0, 100]} />
                <RechartsTooltip />
                <Bar dataKey="progress" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </DashboardCard>
      </Grid>

      {/* Mood Trends */}
      <Grid item xs={12}>
        <DashboardCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Mood Trends Over Time
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={coachingAnalytics?.mood_trends || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[0, 10]} />
                <RechartsTooltip />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#8884d8" 
                  fill="#8884d8" 
                  fillOpacity={0.6}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </DashboardCard>
      </Grid>
    </Grid>
  );

  // Render matching analytics tab
  const renderMatchingAnalytics = () => (
    <Grid container spacing={3}>
      {/* Matching Stats */}
      <Grid item xs={12} md={3}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {matchingAnalytics?.total_matches_generated || 0}
          </Typography>
          <Typography variant="h6">
            Total Matches
          </Typography>
        </MetricCard>
      </Grid>

      <Grid item xs={12} md={3}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {matchingAnalytics?.match_success_rate || 0}%
          </Typography>
          <Typography variant="h6">
            Success Rate
          </Typography>
        </MetricCard>
      </Grid>

      <Grid item xs={12} md={3}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {matchingAnalytics?.average_compatibility_score || 0}%
          </Typography>
          <Typography variant="h6">
            Avg Compatibility
          </Typography>
        </MetricCard>
      </Grid>

      <Grid item xs={12} md={3}>
        <MetricCard>
          <Typography variant="h3" gutterBottom>
            {matchingAnalytics?.mutual_matches || 0}
          </Typography>
          <Typography variant="h6">
            Mutual Matches
          </Typography>
        </MetricCard>
      </Grid>

      {/* Top Compatibility Dimensions */}
      <Grid item xs={12} md={6}>
        <DashboardCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Top Compatibility Dimensions
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={matchingAnalytics?.top_compatibility_dimensions || []}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ dimension, average_score }) => `${dimension}: ${average_score}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="average_score"
                >
                  {(matchingAnalytics?.top_compatibility_dimensions || []).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </DashboardCard>
      </Grid>

      {/* Match Funnel */}
      <Grid item xs={12} md={6}>
        <DashboardCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Match Engagement Funnel
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Matches Generated: {matchingAnalytics?.total_matches_generated || 0}
              </Typography>
              <LinearProgress variant="determinate" value={100} sx={{ height: 8, borderRadius: 4 }} />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Matches Viewed: {matchingAnalytics?.matches_viewed || 0}
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={(matchingAnalytics?.matches_viewed || 0) / (matchingAnalytics?.total_matches_generated || 1) * 100} 
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" gutterBottom>
                Matches Liked: {matchingAnalytics?.matches_liked || 0}
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={(matchingAnalytics?.matches_liked || 0) / (matchingAnalytics?.matches_viewed || 1) * 100} 
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>

            <Box>
              <Typography variant="body2" gutterBottom>
                Mutual Matches: {matchingAnalytics?.mutual_matches || 0}
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={(matchingAnalytics?.mutual_matches || 0) / (matchingAnalytics?.matches_liked || 1) * 100} 
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
          </CardContent>
        </DashboardCard>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          AI Analytics Dashboard
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              label="Time Range"
            >
              <MenuItem value={7}>Last 7 days</MenuItem>
              <MenuItem value={30}>Last 30 days</MenuItem>
              <MenuItem value={90}>Last 3 months</MenuItem>
              <MenuItem value={365}>Last year</MenuItem>
            </Select>
          </FormControl>
          
          <Tooltip title="Refresh Data">
            <IconButton onClick={loadAnalyticsData} disabled={isLoading}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Export Report">
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Tooltip>
          
          <Tooltip title="Share Dashboard">
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Error Alert */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Loading State */}
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress size={60} />
        </Box>
      )}

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
          <Tab 
            label="Relationship Analytics" 
            icon={<FavoriteIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Coaching Progress" 
            icon={<PsychologyIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Matching Insights" 
            icon={<PersonIcon />} 
            iconPosition="start"
          />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {!isLoading && (
        <Box>
          {activeTab === 0 && renderRelationshipAnalytics()}
          {activeTab === 1 && renderCoachingAnalytics()}
          {activeTab === 2 && renderMatchingAnalytics()}
        </Box>
      )}
    </Box>
  );
};

export default AIAnalyticsDashboard;

