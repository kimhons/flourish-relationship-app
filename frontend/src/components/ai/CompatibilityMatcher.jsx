/**
 * Flourish App: AI Compatibility Matcher Component
 * Advanced compatibility analysis and visualization
 */

import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Chip,
  LinearProgress,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CircularProgress,
  Alert,
  Tooltip,
  IconButton,
  Badge
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Favorite as FavoriteIcon,
  Psychology as PsychologyIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Star as StarIcon,
  Close as CloseIcon,
  Refresh as RefreshIcon,
  Share as ShareIcon,
  BookmarkBorder as BookmarkIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend } from 'recharts';
import aiService, { handleAIError, extractCompatibilityData } from '../../services/aiService';

// Styled components
const CompatibilityCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
  color: theme.palette.primary.contrastText,
  marginBottom: theme.spacing(2),
}));

const ScoreDisplay = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
}));

const DimensionCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const InsightChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  '&.strength': {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
  '&.challenge': {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
}));

// Color schemes for different compatibility levels
const getCompatibilityColor = (score) => {
  if (score >= 85) return '#4caf50'; // Green
  if (score >= 70) return '#8bc34a'; // Light Green
  if (score >= 55) return '#ffc107'; // Amber
  if (score >= 40) return '#ff9800'; // Orange
  return '#f44336'; // Red
};

const getCompatibilityLevel = (score) => {
  if (score >= 85) return 'Exceptional';
  if (score >= 70) return 'High';
  if (score >= 55) return 'Good';
  if (score >= 40) return 'Moderate';
  return 'Low';
};

const CompatibilityMatcher = ({ targetUser, open, onClose }) => {
  // State management
  const [compatibilityData, setCompatibilityData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedSection, setExpandedSection] = useState('overview');
  const [showDetails, setShowDetails] = useState(false);

  // Load compatibility data
  useEffect(() => {
    if (open && targetUser) {
      loadCompatibilityData();
    }
  }, [open, targetUser]);

  const loadCompatibilityData = async () => {
    if (!targetUser?.id) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await aiService.calculateCompatibility(targetUser.id);
      
      if (response.status === 'success') {
        const compatibility = extractCompatibilityData(response);
        setCompatibilityData(compatibility);
      }
    } catch (error) {
      setError(handleAIError(error, 'Failed to calculate compatibility'));
    } finally {
      setIsLoading(false);
    }
  };

  // Prepare chart data
  const prepareRadialData = () => {
    if (!compatibilityData) return [];
    
    return [{
      name: 'Compatibility',
      value: compatibilityData.overallScore,
      fill: getCompatibilityColor(compatibilityData.overallScore),
    }];
  };

  const prepareDimensionData = () => {
    if (!compatibilityData?.dimensionScores) return [];
    
    return Object.entries(compatibilityData.dimensionScores).map(([dimension, score]) => ({
      dimension: dimension.replace('_', ' ').toUpperCase(),
      score: Math.round(score),
      fill: getCompatibilityColor(score),
    }));
  };

  // Render compatibility score circle
  const renderCompatibilityScore = () => (
    <CompatibilityCard>
      <CardContent>
        <ScoreDisplay>
          <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
            <CircularProgress
              variant="determinate"
              value={compatibilityData?.overallScore || 0}
              size={120}
              thickness={6}
              sx={{
                color: getCompatibilityColor(compatibilityData?.overallScore || 0),
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h4" component="div" color="inherit">
                {Math.round(compatibilityData?.overallScore || 0)}%
              </Typography>
            </Box>
          </Box>
          
          <Typography variant="h6" gutterBottom>
            {getCompatibilityLevel(compatibilityData?.overallScore || 0)} Compatibility
          </Typography>
          
          <Typography variant="body2" align="center" sx={{ opacity: 0.9 }}>
            Based on {Object.keys(compatibilityData?.dimensionScores || {}).length} compatibility dimensions
          </Typography>
        </ScoreDisplay>
      </CardContent>
    </CompatibilityCard>
  );

  // Render dimension breakdown
  const renderDimensionBreakdown = () => (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Compatibility Dimensions
        </Typography>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={prepareDimensionData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="dimension" 
              angle={-45}
              textAnchor="end"
              height={100}
              fontSize={12}
            />
            <YAxis domain={[0, 100]} />
            <RechartsTooltip />
            <Bar dataKey="score" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );

  // Render strengths and challenges
  const renderInsights = () => (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <StarIcon color="success" sx={{ mr: 1 }} />
              <Typography variant="h6">Relationship Strengths</Typography>
            </Box>
            
            {compatibilityData?.strengths?.map((strength, index) => (
              <InsightChip
                key={index}
                label={strength}
                className="strength"
                size="small"
              />
            ))}
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WarningIcon color="warning" sx={{ mr: 1 }} />
              <Typography variant="h6">Areas to Navigate</Typography>
            </Box>
            
            {compatibilityData?.challenges?.map((challenge, index) => (
              <InsightChip
                key={index}
                label={challenge}
                className="challenge"
                size="small"
              />
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  // Render conversation starters
  const renderConversationStarters = () => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <QuestionAnswerIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">AI-Generated Conversation Starters</Typography>
        </Box>
        
        <List>
          {compatibilityData?.conversationStarters?.map((starter, index) => (
            <ListItem key={index} divider={index < compatibilityData.conversationStarters.length - 1}>
              <ListItemIcon>
                <Typography variant="body2" color="primary" fontWeight="bold">
                  {index + 1}.
                </Typography>
              </ListItemIcon>
              <ListItemText primary={starter} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  if (!targetUser) {
    return null;
  }

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="lg" 
      fullWidth
      PaperProps={{
        sx: { height: '90vh' }
      }}
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={targetUser.photo} sx={{ width: 48, height: 48 }}>
            {targetUser.name?.[0]}
          </Avatar>
          <Box>
            <Typography variant="h6">
              Compatibility with {targetUser.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              AI-powered relationship analysis
            </Typography>
          </Box>
        </Box>
        
        <Box>
          <Tooltip title="Refresh Analysis">
            <IconButton onClick={loadCompatibilityData} disabled={isLoading}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Share Results">
            <IconButton>
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Save Analysis">
            <IconButton>
              <BookmarkIcon />
            </IconButton>
          </Tooltip>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress size={60} sx={{ mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Analyzing Compatibility...
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our AI is processing {Object.keys(compatibilityData?.dimensionScores || {}).length || 10}+ compatibility dimensions
              </Typography>
            </Box>
          </Box>
        ) : compatibilityData ? (
          <Box>
            {/* Overview Section */}
            <Accordion 
              expanded={expandedSection === 'overview'} 
              onChange={() => setExpandedSection(expandedSection === 'overview' ? '' : 'overview')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Compatibility Overview</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    {renderCompatibilityScore()}
                  </Grid>
                  <Grid item xs={12} md={8}>
                    {renderDimensionBreakdown()}
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Insights Section */}
            <Accordion 
              expanded={expandedSection === 'insights'} 
              onChange={() => setExpandedSection(expandedSection === 'insights' ? '' : 'insights')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Relationship Insights</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {renderInsights()}
              </AccordionDetails>
            </Accordion>

            {/* Conversation Starters Section */}
            <Accordion 
              expanded={expandedSection === 'conversation'} 
              onChange={() => setExpandedSection(expandedSection === 'conversation' ? '' : 'conversation')}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Conversation Starters</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {renderConversationStarters()}
              </AccordionDetails>
            </Accordion>

            {/* Relationship Potential */}
            <Card sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Relationship Potential
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Chip 
                    label={compatibilityData.relationshipPotential?.toUpperCase() || 'UNKNOWN'}
                    color={
                      compatibilityData.relationshipPotential === 'exceptional' ? 'success' :
                      compatibilityData.relationshipPotential === 'high' ? 'primary' :
                      compatibilityData.relationshipPotential === 'medium' ? 'warning' : 'default'
                    }
                    size="large"
                  />
                  
                  <Typography variant="body2" color="text.secondary">
                    Confidence: {Math.round((compatibilityData.confidenceLevel || 0) * 100)}%
                  </Typography>
                </Box>
                
                <Typography variant="body1">
                  Based on our comprehensive analysis, this match shows{' '}
                  <strong>{compatibilityData.relationshipPotential}</strong> potential for a 
                  meaningful relationship. The AI analysis considered personality traits, 
                  values alignment, lifestyle compatibility, and communication styles.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <PsychologyIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              No Compatibility Data Available
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Click the button below to generate a comprehensive compatibility analysis.
            </Typography>
            <Button 
              variant="contained" 
              onClick={loadCompatibilityData}
              startIcon={<TrendingUpIcon />}
            >
              Analyze Compatibility
            </Button>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose}>
          Close
        </Button>
        {compatibilityData && (
          <>
            <Button 
              variant="outlined" 
              onClick={() => setShowDetails(true)}
              startIcon={<PsychologyIcon />}
            >
              View Detailed Analysis
            </Button>
            <Button 
              variant="contained" 
              startIcon={<FavoriteIcon />}
            >
              Connect
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CompatibilityMatcher;

