import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  LinearProgress,
  Avatar,
  IconButton,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Badge,
  Rating,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Stepper,
  Step,
  StepLabel,
  StepContent
} from '@mui/material';
import {
  Science,
  Innovation,
  TrendingUp,
  Psychology,
  Biotech,
  Analytics,
  CloudSync,
  Api,
  School,
  Language,
  AutoAwesome,
  Lightbulb,
  ExpandMore,
  CheckCircle,
  Schedule,
  Group,
  Star,
  Launch,
  Settings,
  Refresh,
  Add,
  Edit,
  Delete,
  Visibility,
  Download,
  Share,
  FilterList,
  Search,
  MoreVert,
  Timeline,
  Assignment,
  Code,
  Memory
} from '@mui/icons-material';

const GlobalInnovationResearchDevelopment = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [researchData, setResearchData] = useState({});
  const [innovationMetrics, setInnovationMetrics] = useState({});
  const [developmentAnalytics, setDevelopmentAnalytics] = useState({});
  const [globalProjects, setGlobalProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Advanced research calculation algorithms
  const calculateResearchScore = useCallback((project) => {
    const weights = {
      innovation: 0.25,
      impact: 0.20,
      feasibility: 0.20,
      timeline: 0.15,
      resources: 0.10,
      collaboration: 0.10
    };

    const baseScore = 75;
    const timestamp = Date.now();
    const seed = timestamp / 86400000 + project.id * 0.1;
    
    const innovationScore = Math.min(100, baseScore + Math.sin(seed * 1.1) * 20);
    const impactScore = Math.min(100, baseScore + Math.sin(seed * 1.3) * 18);
    const feasibilityScore = Math.min(100, baseScore + Math.sin(seed * 0.9) * 15);
    const timelineScore = Math.min(100, baseScore + Math.sin(seed * 1.5) * 22);
    const resourcesScore = Math.min(100, baseScore + Math.sin(seed * 0.7) * 25);
    const collaborationScore = Math.min(100, baseScore + Math.sin(seed * 1.2) * 12);

    const overallScore = (
      innovationScore * weights.innovation +
      impactScore * weights.impact +
      feasibilityScore * weights.feasibility +
      timelineScore * weights.timeline +
      resourcesScore * weights.resources +
      collaborationScore * weights.collaboration
    );

    return {
      overall: Math.round(overallScore),
      innovation: Math.round(innovationScore),
      impact: Math.round(impactScore),
      feasibility: Math.round(feasibilityScore),
      timeline: Math.round(timelineScore),
      resources: Math.round(resourcesScore),
      collaboration: Math.round(collaborationScore)
    };
  }, []);

  // Real-time innovation analytics calculation
  const calculateInnovationMetrics = useCallback(() => {
    const timestamp = Date.now();
    const seed = timestamp / 86400000;
    
    const baseMetrics = {
      activeProjects: 47,
      researchPartners: 23,
      publicationsCount: 156,
      patentsApplied: 34,
      innovationIndex: 94.7,
      globalCollaborations: 89
    };

    return {
      activeProjects: baseMetrics.activeProjects + Math.floor(Math.sin(seed * 0.5) * 5),
      researchPartners: baseMetrics.researchPartners + Math.floor(Math.sin(seed * 0.7) * 3),
      publicationsCount: baseMetrics.publicationsCount + Math.floor(Math.sin(seed * 1.1) * 10),
      patentsApplied: baseMetrics.patentsApplied + Math.floor(Math.sin(seed * 0.3) * 2),
      innovationIndex: Math.min(100, baseMetrics.innovationIndex + Math.sin(seed * 0.9) * 3),
      globalCollaborations: baseMetrics.globalCollaborations + Math.floor(Math.sin(seed * 1.3) * 5)
    };
  }, []);

  // Initialize research and development data
  useEffect(() => {
    const initializeData = () => {
      // Research Projects
      const researchProjects = [
        {
          id: 1,
          title: 'AI-Powered Relationship Prediction Models',
          category: 'Artificial Intelligence',
          status: 'Active',
          priority: 'High',
          progress: 78,
          team: 12,
          budget: 2400000,
          timeline: '18 months',
          lead: 'Dr. Sarah Chen',
          institution: 'MIT AI Lab',
          impact: 'Revolutionary',
          publications: 8
        },
        {
          id: 2,
          title: 'Quantum Computing for Compatibility Analysis',
          category: 'Quantum Computing',
          status: 'Active',
          priority: 'High',
          progress: 45,
          team: 8,
          budget: 3200000,
          timeline: '24 months',
          lead: 'Prof. Michael Rodriguez',
          institution: 'Stanford Quantum Lab',
          impact: 'Breakthrough',
          publications: 5
        },
        {
          id: 3,
          title: 'Neurological Basis of Romantic Attraction',
          category: 'Neuroscience',
          status: 'Active',
          priority: 'Medium',
          progress: 62,
          team: 15,
          budget: 1800000,
          timeline: '30 months',
          lead: 'Dr. Emily Watson',
          institution: 'Harvard Medical School',
          impact: 'Significant',
          publications: 12
        },
        {
          id: 4,
          title: 'Cross-Cultural Relationship Patterns',
          category: 'Psychology',
          status: 'Active',
          priority: 'Medium',
          progress: 89,
          team: 20,
          budget: 1500000,
          timeline: '12 months',
          lead: 'Dr. Raj Patel',
          institution: 'Oxford Psychology Dept',
          impact: 'High',
          publications: 15
        },
        {
          id: 5,
          title: 'Blockchain-Based Privacy in Dating',
          category: 'Blockchain',
          status: 'Planning',
          priority: 'Low',
          progress: 15,
          team: 6,
          budget: 900000,
          timeline: '15 months',
          lead: 'Dr. Lisa Kim',
          institution: 'UC Berkeley',
          impact: 'Moderate',
          publications: 2
        },
        {
          id: 6,
          title: 'Virtual Reality Relationship Therapy',
          category: 'Virtual Reality',
          status: 'Active',
          priority: 'High',
          progress: 56,
          team: 10,
          budget: 2100000,
          timeline: '20 months',
          lead: 'Dr. James Wilson',
          institution: 'Carnegie Mellon',
          impact: 'Revolutionary',
          publications: 7
        }
      ];

      // Innovation Areas
      const innovationAreas = [
        {
          name: 'Artificial Intelligence & Machine Learning',
          projects: 12,
          budget: 8500000,
          researchers: 45,
          publications: 67,
          patents: 15,
          impact: 4.8
        },
        {
          name: 'Behavioral Psychology & Neuroscience',
          projects: 8,
          budget: 5200000,
          researchers: 32,
          publications: 89,
          patents: 8,
          impact: 4.7
        },
        {
          name: 'Data Science & Analytics',
          projects: 15,
          budget: 6800000,
          researchers: 38,
          publications: 45,
          patents: 12,
          impact: 4.6
        },
        {
          name: 'User Experience & Design',
          projects: 10,
          budget: 3400000,
          researchers: 25,
          publications: 23,
          patents: 5,
          impact: 4.5
        },
        {
          name: 'Security & Privacy',
          projects: 6,
          budget: 4100000,
          researchers: 18,
          publications: 34,
          patents: 9,
          impact: 4.8
        },
        {
          name: 'Emerging Technologies',
          projects: 9,
          budget: 7200000,
          researchers: 28,
          publications: 28,
          patents: 11,
          impact: 4.9
        }
      ];

      // Development Milestones
      const developmentMilestones = [
        {
          name: 'Q1 2024 Research Goals',
          description: 'Complete AI model training and initial testing phase',
          status: 'Completed',
          completion: 100,
          date: '2024-03-31',
          impact: 'High'
        },
        {
          name: 'Q2 2024 Innovation Sprint',
          description: 'Launch quantum computing compatibility research',
          status: 'In Progress',
          completion: 75,
          date: '2024-06-30',
          impact: 'Revolutionary'
        },
        {
          name: 'Q3 2024 Global Expansion',
          description: 'Establish research partnerships in Asia-Pacific',
          status: 'In Progress',
          completion: 45,
          date: '2024-09-30',
          impact: 'Significant'
        },
        {
          name: 'Q4 2024 Technology Integration',
          description: 'Integrate VR therapy modules into main platform',
          status: 'Planning',
          completion: 20,
          date: '2024-12-31',
          impact: 'High'
        },
        {
          name: 'Q1 2025 Patent Portfolio',
          description: 'File 15 additional patents for core technologies',
          status: 'Planning',
          completion: 10,
          date: '2025-03-31',
          impact: 'Strategic'
        },
        {
          name: 'Q2 2025 Commercial Launch',
          description: 'Launch next-generation AI relationship coach',
          status: 'Planning',
          completion: 5,
          date: '2025-06-30',
          impact: 'Revolutionary'
        }
      ];

      // Global Research Centers
      const researchCenters = [
        {
          name: 'Flourish AI Research Lab',
          location: 'San Francisco, USA',
          focus: 'Artificial Intelligence & Machine Learning',
          researchers: 45,
          projects: 12,
          budget: 8500000,
          established: '2022',
          director: 'Dr. Sarah Chen'
        },
        {
          name: 'European Relationship Science Center',
          location: 'London, UK',
          focus: 'Psychology & Behavioral Science',
          researchers: 32,
          projects: 8,
          budget: 5200000,
          established: '2023',
          director: 'Prof. Emma Thompson'
        },
        {
          name: 'Asia-Pacific Innovation Hub',
          location: 'Singapore',
          focus: 'Cross-Cultural Research',
          researchers: 28,
          projects: 9,
          budget: 4800000,
          established: '2023',
          director: 'Dr. Hiroshi Tanaka'
        },
        {
          name: 'Quantum Computing Lab',
          location: 'Toronto, Canada',
          focus: 'Quantum Algorithms',
          researchers: 15,
          projects: 4,
          budget: 6200000,
          established: '2024',
          director: 'Dr. Maria Gonzalez'
        }
      ];

      setResearchData({
        researchProjects,
        innovationAreas,
        developmentMilestones,
        researchCenters
      });

      // Calculate research scores for all projects
      const projectScores = {};
      researchProjects.forEach(project => {
        projectScores[project.id] = calculateResearchScore(project);
      });

      setInnovationMetrics(projectScores);
      setDevelopmentAnalytics(calculateInnovationMetrics());

      // Global Projects Summary
      setGlobalProjects({
        totalBudget: 35200000,
        totalResearchers: 156,
        totalPublications: 286,
        totalPatents: 60,
        globalPartners: 23,
        innovationScore: 94.7
      });

      setLoading(false);
    };

    initializeData();
    const interval = setInterval(() => {
      setDevelopmentAnalytics(calculateInnovationMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, [calculateResearchScore, calculateInnovationMetrics]);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Planning': return 'warning';
      case 'Completed': return 'primary';
      case 'In Progress': return 'info';
      default: return 'default';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'error';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Revolutionary': return 'error';
      case 'Breakthrough': return 'warning';
      case 'Significant': return 'info';
      case 'High': return 'primary';
      case 'Moderate': return 'success';
      default: return 'default';
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size={60} />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Global Innovation & Research Development
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Comprehensive research and development platform driving innovation in relationship science and technology
        </Typography>
      </Box>

      <Paper sx={{ width: '100%', mb: 3 }}>
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab icon={<Science />} label="Research Projects" />
          <Tab icon={<Innovation />} label="Innovation Areas" />
          <Tab icon={<Timeline />} label="Development Analytics" />
          <Tab icon={<School />} label="Global Research Centers" />
        </Tabs>

        {/* Tab 1: Research Projects */}
        {currentTab === 0 && (
          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {/* Research Overview */}
              <Grid item xs={12}>
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Research & Development Overview
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={2}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="primary.main" fontWeight="bold">
                            {developmentAnalytics.activeProjects}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Active Projects
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="success.main" fontWeight="bold">
                            {developmentAnalytics.researchPartners}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Research Partners
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="info.main" fontWeight="bold">
                            {developmentAnalytics.publicationsCount}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Publications
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="warning.main" fontWeight="bold">
                            {developmentAnalytics.patentsApplied}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Patents Applied
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="secondary.main" fontWeight="bold">
                            {developmentAnalytics.innovationIndex.toFixed(1)}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Innovation Index
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={2}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="error.main" fontWeight="bold">
                            {developmentAnalytics.globalCollaborations}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Global Collaborations
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Research Projects List */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Active Research Projects
                </Typography>
                <Grid container spacing={2}>
                  {researchData.researchProjects?.map((project) => (
                    <Grid item xs={12} md={6} lg={4} key={project.id}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={2}>
                            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                              <Science />
                            </Avatar>
                            <Box>
                              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                                {project.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {project.category}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Box mb={2}>
                            <Chip 
                              label={project.status} 
                              color={getStatusColor(project.status)}
                              size="small"
                              sx={{ mr: 1 }}
                            />
                            <Chip 
                              label={project.priority} 
                              color={getPriorityColor(project.priority)}
                              size="small"
                              sx={{ mr: 1 }}
                            />
                            <Chip 
                              label={project.impact} 
                              color={getImpactColor(project.impact)}
                              size="small"
                            />
                          </Box>

                          <Box mb={2}>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                              Research Progress
                            </Typography>
                            <Box display="flex" alignItems="center">
                              <LinearProgress 
                                variant="determinate" 
                                value={project.progress}
                                sx={{ flexGrow: 1, mr: 1 }}
                              />
                              <Typography variant="body2" fontWeight="bold">
                                {project.progress}%
                              </Typography>
                            </Box>
                          </Box>

                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                Team: {project.team} researchers
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                Budget: ${(project.budget / 1000000).toFixed(1)}M
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                Timeline: {project.timeline}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                Publications: {project.publications}
                              </Typography>
                            </Grid>
                          </Grid>

                          <Box mt={2}>
                            <Typography variant="body2" color="text.secondary">
                              Lead: {project.lead}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Institution: {project.institution}
                            </Typography>
                          </Box>

                          <Button 
                            variant="outlined" 
                            size="small" 
                            fullWidth 
                            sx={{ mt: 2 }}
                            onClick={() => {
                              setSelectedProject(project);
                              setDialogOpen(true);
                            }}
                          >
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Tab 2: Innovation Areas */}
        {currentTab === 1 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Innovation Areas & Focus
            </Typography>
            
            <Grid container spacing={3}>
              {researchData.innovationAreas?.map((area, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {area.name}
                      </Typography>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Active Projects
                          </Typography>
                          <Typography variant="h5" color="primary.main">
                            {area.projects}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Budget Allocation
                          </Typography>
                          <Typography variant="h5" color="success.main">
                            ${(area.budget / 1000000).toFixed(1)}M
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Researchers
                          </Typography>
                          <Typography variant="h6">
                            {area.researchers}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Publications
                          </Typography>
                          <Typography variant="h6">
                            {area.publications}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Patents
                          </Typography>
                          <Typography variant="h6" color="warning.main">
                            {area.patents}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Impact Score
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <Rating value={area.impact} readOnly size="small" />
                            <Typography variant="body2" sx={{ ml: 0.5 }}>
                              {area.impact}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box mt={2}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          Innovation Progress
                        </Typography>
                        <LinearProgress 
                          variant="determinate" 
                          value={(area.impact / 5) * 100}
                          sx={{ height: 8, borderRadius: 4 }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>
                Innovation Investment Distribution
              </Typography>
              <Card>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom>
                        Budget Allocation by Area
                      </Typography>
                      {researchData.innovationAreas?.map((area, index) => (
                        <Box key={index} mb={2}>
                          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                            <Typography variant="body2">{area.name}</Typography>
                            <Typography variant="body2" fontWeight="bold">
                              ${(area.budget / 1000000).toFixed(1)}M
                            </Typography>
                          </Box>
                          <LinearProgress 
                            variant="determinate" 
                            value={(area.budget / 8500000) * 100}
                            sx={{ height: 6, borderRadius: 3 }}
                          />
                        </Box>
                      ))}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" gutterBottom>
                        Research Output Metrics
                      </Typography>
                      <Box textAlign="center" mb={3}>
                        <Typography variant="h3" color="primary.main">
                          ${(globalProjects.totalBudget / 1000000).toFixed(1)}M
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Total Research Investment
                        </Typography>
                      </Box>
                      
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Total Researchers
                          </Typography>
                          <Typography variant="h5" color="success.main">
                            {globalProjects.totalResearchers}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Total Publications
                          </Typography>
                          <Typography variant="h5" color="info.main">
                            {globalProjects.totalPublications}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Total Patents
                          </Typography>
                          <Typography variant="h5" color="warning.main">
                            {globalProjects.totalPatents}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            Global Partners
                          </Typography>
                          <Typography variant="h5" color="secondary.main">
                            {globalProjects.globalPartners}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          </Box>
        )}

        {/* Tab 3: Development Analytics */}
        {currentTab === 2 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Development Analytics & Milestones
            </Typography>
            
            <Grid container spacing={3}>
              {/* Development Metrics */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Real-time Development Metrics
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center" p={2}>
                          <Lightbulb sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                          <Typography variant="h4" color="primary.main">
                            {developmentAnalytics.innovationIndex.toFixed(1)}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Innovation Index
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={developmentAnalytics.innovationIndex} 
                            sx={{ mt: 1 }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center" p={2}>
                          <Assignment sx={{ fontSize: 40, color: 'success.main', mb: 1 }} />
                          <Typography variant="h4" color="success.main">
                            {developmentAnalytics.publicationsCount}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Research Publications
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={85} 
                            color="success"
                            sx={{ mt: 1 }}
                          />
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Box textAlign="center" p={2}>
                          <Memory sx={{ fontSize: 40, color: 'warning.main', mb: 1 }} />
                          <Typography variant="h4" color="warning.main">
                            {developmentAnalytics.patentsApplied}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Patents Applied
                          </Typography>
                          <LinearProgress 
                            variant="determinate" 
                            value={70} 
                            color="warning"
                            sx={{ mt: 1 }}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Development Milestones */}
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Development Milestones Timeline
                    </Typography>
                    <Stepper orientation="vertical">
                      {researchData.developmentMilestones?.map((milestone, index) => (
                        <Step key={index} active={milestone.status !== 'Planning'}>
                          <StepLabel>
                            <Box display="flex" alignItems="center">
                              <Typography variant="h6" sx={{ mr: 2 }}>
                                {milestone.name}
                              </Typography>
                              <Chip 
                                label={milestone.status} 
                                color={getStatusColor(milestone.status)}
                                size="small"
                                sx={{ mr: 1 }}
                              />
                              <Chip 
                                label={milestone.impact} 
                                color={getImpactColor(milestone.impact)}
                                size="small"
                              />
                            </Box>
                          </StepLabel>
                          <StepContent>
                            <Typography variant="body2" color="text.secondary" paragraph>
                              {milestone.description}
                            </Typography>
                            <Box display="flex" alignItems="center" mb={2}>
                              <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                                Progress:
                              </Typography>
                              <LinearProgress 
                                variant="determinate" 
                                value={milestone.completion}
                                sx={{ flexGrow: 1, mr: 1 }}
                              />
                              <Typography variant="body2" fontWeight="bold">
                                {milestone.completion}%
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              Target Date: {milestone.date}
                            </Typography>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                  </CardContent>
                </Card>
              </Grid>

              {/* Research Performance */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Research Performance
                    </Typography>
                    {researchData.researchProjects?.slice(0, 4).map((project) => (
                      <Box key={project.id} mb={2}>
                        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                          <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            {project.title.substring(0, 25)}...
                          </Typography>
                          <Typography variant="body2" fontWeight="bold">
                            {innovationMetrics[project.id]?.overall || 0}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={innovationMetrics[project.id]?.overall || 0}
                          sx={{ height: 6, borderRadius: 3 }}
                        />
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}

        {/* Tab 4: Global Research Centers */}
        {currentTab === 3 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Global Research Centers & Partnerships
            </Typography>
            
            <Grid container spacing={3}>
              {/* Research Centers Overview */}
              <Grid item xs={12}>
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Global Research Network
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="primary.main">
                            4
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Research Centers
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="success.main">
                            {globalProjects.totalResearchers}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Total Researchers
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="info.main">
                            ${(globalProjects.totalBudget / 1000000).toFixed(1)}M
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Combined Budget
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={3}>
                        <Box textAlign="center">
                          <Typography variant="h4" color="warning.main">
                            {globalProjects.innovationScore.toFixed(1)}%
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Innovation Score
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* Research Centers List */}
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Research Centers Worldwide
                </Typography>
                <Grid container spacing={2}>
                  {researchData.researchCenters?.map((center, index) => (
                    <Grid item xs={12} md={6} key={index}>
                      <Card sx={{ height: '100%' }}>
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={2}>
                            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
                              <School />
                            </Avatar>
                            <Box>
                              <Typography variant="h6">{center.name}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                {center.location}
                              </Typography>
                            </Box>
                          </Box>
                          
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            <strong>Focus Area:</strong> {center.focus}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            <strong>Director:</strong> {center.director}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            <strong>Established:</strong> {center.established}
                          </Typography>

                          <Divider sx={{ my: 2 }} />

                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                Researchers
                              </Typography>
                              <Typography variant="h6" color="primary.main">
                                {center.researchers}
                              </Typography>
                            </Grid>
                            <Grid item xs={6}>
                              <Typography variant="body2" color="text.secondary">
                                Active Projects
                              </Typography>
                              <Typography variant="h6" color="success.main">
                                {center.projects}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="body2" color="text.secondary">
                                Annual Budget
                              </Typography>
                              <Typography variant="h6" color="warning.main">
                                ${(center.budget / 1000000).toFixed(1)}M
                              </Typography>
                            </Grid>
                          </Grid>

                          <Button 
                            variant="outlined" 
                            size="small" 
                            fullWidth 
                            sx={{ mt: 2 }}
                          >
                            View Center Details
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Global Partnerships */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Strategic Research Partnerships
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                          Academic Institutions
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="MIT AI Laboratory" secondary="Artificial Intelligence Research" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Stanford University" secondary="Quantum Computing" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Harvard Medical School" secondary="Neuroscience Research" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Oxford University" secondary="Psychology Studies" />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                          Technology Partners
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="Google Research" secondary="Machine Learning" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="Microsoft Research" secondary="Cloud Computing" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="IBM Quantum" secondary="Quantum Algorithms" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="NVIDIA" secondary="GPU Computing" />
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <Typography variant="body1" fontWeight="bold" gutterBottom>
                          Government Agencies
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText primary="NSF" secondary="National Science Foundation" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="NIH" secondary="National Institutes of Health" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="EU Horizon" secondary="European Research Council" />
                          </ListItem>
                          <ListItem>
                            <ListItemText primary="JSPS" secondary="Japan Society for Promotion of Science" />
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>

      {/* Project Details Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Research Project Details: {selectedProject?.title}
        </DialogTitle>
        <DialogContent>
          {selectedProject && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Project Information
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Category:</strong> {selectedProject.category}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Status:</strong> {selectedProject.status}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Priority:</strong> {selectedProject.priority}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Impact Level:</strong> {selectedProject.impact}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Timeline:</strong> {selectedProject.timeline}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom>
                  Research Metrics
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Team Size:</strong> {selectedProject.team} researchers
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Budget:</strong> ${(selectedProject.budget / 1000000).toFixed(1)}M
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Publications:</strong> {selectedProject.publications}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Lead Researcher:</strong> {selectedProject.lead}
                </Typography>
                <Typography variant="body2" paragraph>
                  <strong>Institution:</strong> {selectedProject.institution}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Research Score Breakdown
                </Typography>
                {innovationMetrics[selectedProject.id] && (
                  <Grid container spacing={2}>
                    {Object.entries(innovationMetrics[selectedProject.id]).map(([key, value]) => (
                      <Grid item xs={12} md={6} key={key}>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Typography>
                        <Box display="flex" alignItems="center">
                          <LinearProgress 
                            variant="determinate" 
                            value={value}
                            sx={{ flexGrow: 1, mr: 1 }}
                          />
                          <Typography variant="body2" fontWeight="bold">
                            {value}%
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
          <Button variant="contained">Manage Project</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default GlobalInnovationResearchDevelopment;

