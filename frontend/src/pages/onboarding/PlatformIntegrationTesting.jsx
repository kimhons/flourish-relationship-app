import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Switch,
  FormControlLabel,
  Slider,
  Button,
  Tabs,
  Tab,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  Alert,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Paper,
  Rating,
  Badge,
  ToggleButton,
  ToggleButtonGroup,
  Avatar,
  Stepper,
  Step,
  StepLabel,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Integration as IntegrationIcon,
  BugReport as TestingIcon,
  Devices as DeviceIcon,
  Assessment as MetricsIcon,
  CheckCircle as PassIcon,
  Error as FailIcon,
  Warning as WarningIcon,
  PlayArrow as RunIcon,
  Refresh as RefreshIcon,
  CloudSync as CloudIcon,
  Api as ApiIcon,
  Storage as DatabaseIcon,
  Security as SecurityIcon,
  Speed as PerformanceIcon,
  Accessibility as AccessibilityIcon,
  PhoneAndroid as MobileIcon,
  Computer as DesktopIcon,
  Tablet as TabletIcon,
  Language as BrowserIcon,
  NetworkCheck as NetworkIcon,
  Memory as MemoryIcon,
  Timer as LoadTimeIcon,
  TrendingUp as ThroughputIcon,
  Shield as SecurityTestIcon,
  Visibility as UITestIcon,
  Code as CodeTestIcon,
  DataUsage as DataTestIcon,
  Psychology as AITestIcon,
  Message as CommunicationTestIcon,
  Notifications as NotificationTestIcon,
  AccountCircle as UserTestIcon,
  Settings as ConfigIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  Report as ReportIcon,
  Download as ExportIcon,
  Share as ShareIcon,
  Schedule as ScheduleIcon,
  AutoAwesome as AutomationIcon,
  Science as ExperimentIcon,
  Insights as InsightsIcon
} from '@mui/icons-material';

const PlatformIntegrationTesting = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [systemIntegration, setSystemIntegration] = useState({
    apiConnections: { status: 'connected', health: 98, tests: 45, passed: 44 },
    databaseSystems: { status: 'connected', health: 96, tests: 32, passed: 31 },
    cloudServices: { status: 'connected', health: 99, tests: 28, passed: 28 },
    thirdPartyServices: { status: 'connected', health: 94, tests: 22, passed: 21 },
    aiServices: { status: 'connected', health: 97, tests: 38, passed: 37 },
    communicationSystems: { status: 'connected', health: 95, tests: 26, passed: 25 },
    notificationServices: { status: 'connected', health: 93, tests: 34, passed: 32 },
    securitySystems: { status: 'connected', health: 99, tests: 41, passed: 41 }
  });

  const [testingSuite, setTestingSuite] = useState({
    unitTests: { total: 1247, passed: 1235, failed: 8, coverage: 94.2 },
    integrationTests: { total: 342, passed: 338, failed: 3, coverage: 91.8 },
    endToEndTests: { total: 156, passed: 152, failed: 2, coverage: 87.5 },
    performanceTests: { total: 89, passed: 86, failed: 1, coverage: 96.6 },
    securityTests: { total: 127, passed: 125, failed: 1, coverage: 98.4 },
    accessibilityTests: { total: 78, passed: 76, failed: 1, coverage: 97.4 },
    uiTests: { total: 234, passed: 230, failed: 3, coverage: 92.3 },
    apiTests: { total: 198, passed: 195, failed: 2, coverage: 95.5 }
  });

  const [deviceCompatibility, setDeviceCompatibility] = useState({
    mobile: {
      ios: { compatibility: 98, devices: 24, tested: 23, issues: 1 },
      android: { compatibility: 96, devices: 32, tested: 31, issues: 2 },
      responsive: { compatibility: 99, breakpoints: 8, tested: 8, issues: 0 }
    },
    desktop: {
      windows: { compatibility: 97, browsers: 6, tested: 6, issues: 1 },
      macos: { compatibility: 99, browsers: 5, tested: 5, issues: 0 },
      linux: { compatibility: 95, browsers: 4, tested: 4, issues: 1 }
    },
    browsers: {
      chrome: { compatibility: 99, versions: 5, tested: 5, issues: 0 },
      firefox: { compatibility: 97, versions: 4, tested: 4, issues: 1 },
      safari: { compatibility: 98, versions: 3, tested: 3, issues: 0 },
      edge: { compatibility: 96, versions: 3, tested: 3, issues: 1 }
    }
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({
    loadTime: { average: 1.2, target: 2.0, status: 'excellent' },
    throughput: { current: 2847, target: 2000, status: 'excellent' },
    memoryUsage: { average: 156, target: 200, status: 'good' },
    cpuUsage: { average: 23, target: 40, status: 'excellent' },
    networkLatency: { average: 45, target: 100, status: 'excellent' },
    errorRate: { current: 0.02, target: 0.1, status: 'excellent' },
    uptime: { current: 99.97, target: 99.9, status: 'excellent' },
    responseTime: { average: 0.8, target: 1.5, status: 'excellent' }
  });

  const [integrationScore, setIntegrationScore] = useState(0);
  const [testingProgress, setTestingProgress] = useState(0);
  const [runningTests, setRunningTests] = useState(false);

  // Calculate integration score
  useEffect(() => {
    const calculateScore = () => {
      let score = 0;
      
      // System integration health (30 points)
      const avgHealth = Object.values(systemIntegration).reduce((sum, system) => sum + system.health, 0) / Object.keys(systemIntegration).length;
      score += (avgHealth / 100) * 30;
      
      // Testing coverage (25 points)
      const avgCoverage = Object.values(testingSuite).reduce((sum, test) => sum + test.coverage, 0) / Object.keys(testingSuite).length;
      score += (avgCoverage / 100) * 25;
      
      // Device compatibility (25 points)
      const mobileAvg = (deviceCompatibility.mobile.ios.compatibility + deviceCompatibility.mobile.android.compatibility + deviceCompatibility.mobile.responsive.compatibility) / 3;
      const desktopAvg = (deviceCompatibility.desktop.windows.compatibility + deviceCompatibility.desktop.macos.compatibility + deviceCompatibility.desktop.linux.compatibility) / 3;
      const browserAvg = (deviceCompatibility.browsers.chrome.compatibility + deviceCompatibility.browsers.firefox.compatibility + deviceCompatibility.browsers.safari.compatibility + deviceCompatibility.browsers.edge.compatibility) / 4;
      const compatibilityAvg = (mobileAvg + desktopAvg + browserAvg) / 3;
      score += (compatibilityAvg / 100) * 25;
      
      // Performance metrics (20 points)
      const performanceScore = Object.values(performanceMetrics).filter(metric => metric.status === 'excellent').length / Object.keys(performanceMetrics).length;
      score += performanceScore * 20;
      
      setIntegrationScore(Math.round(score));
      
      // Calculate testing progress
      const totalTests = Object.values(testingSuite).reduce((sum, test) => sum + test.total, 0);
      const passedTests = Object.values(testingSuite).reduce((sum, test) => sum + test.passed, 0);
      setTestingProgress(Math.round((passedTests / totalTests) * 100));
    };

    calculateScore();
  }, [systemIntegration, testingSuite, deviceCompatibility, performanceMetrics]);

  const runTestSuite = async () => {
    setRunningTests(true);
    // Simulate test execution
    await new Promise(resolve => setTimeout(resolve, 3000));
    setRunningTests(false);
  };

  const getScoreLevel = (score) => {
    if (score >= 95) return { level: 'Exceptional', color: 'success', description: 'Production-ready platform' };
    if (score >= 85) return { level: 'Excellent', color: 'info', description: 'High-quality integration' };
    if (score >= 75) return { level: 'Good', color: 'warning', description: 'Solid platform foundation' };
    return { level: 'Needs Work', color: 'error', description: 'Requires optimization' };
  };

  const scoreInfo = getScoreLevel(integrationScore);

  const renderSystemIntegration = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IntegrationIcon color="primary" />
        System Integration
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Monitor and manage all system integrations to ensure seamless connectivity across 
        APIs, databases, cloud services, and third-party platforms.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(systemIntegration).map(([system, data]) => (
          <Grid item xs={12} md={6} lg={4} key={system}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                    {system.replace(/([A-Z])/g, ' $1').trim()}
                  </Typography>
                  <Chip 
                    label={data.status} 
                    color={data.status === 'connected' ? 'success' : 'error'}
                    size="small"
                  />
                </Box>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Health Score</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {data.health}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={data.health} 
                    sx={{ height: 6, borderRadius: 3 }}
                    color={data.health >= 95 ? 'success' : data.health >= 85 ? 'info' : 'warning'}
                  />
                </Box>
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Tests: {data.tests}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary">
                      Passed: {data.passed}
                    </Typography>
                  </Grid>
                </Grid>
                
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Button size="small" startIcon={<RunIcon />}>
                    Test
                  </Button>
                  <Button size="small" startIcon={<RefreshIcon />}>
                    Refresh
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderTestingSuite = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TestingIcon color="primary" />
        Testing Suite
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Comprehensive testing framework covering unit tests, integration tests, performance tests, 
        and security validation to ensure platform reliability.
      </Alert>

      <Box sx={{ mb: 3 }}>
        <Button 
          variant="contained" 
          onClick={runTestSuite}
          disabled={runningTests}
          startIcon={runningTests ? <CircularProgress size={20} /> : <RunIcon />}
          sx={{ mr: 2 }}
        >
          {runningTests ? 'Running Tests...' : 'Run Full Test Suite'}
        </Button>
        <Button variant="outlined" startIcon={<ReportIcon />}>
          Generate Report
        </Button>
      </Box>

      <Grid container spacing={3}>
        {Object.entries(testingSuite).map(([testType, data]) => (
          <Grid item xs={12} md={6} lg={4} key={testType}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
                  {testType.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Coverage</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {data.coverage}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={data.coverage} 
                    sx={{ height: 6, borderRadius: 3 }}
                    color={data.coverage >= 95 ? 'success' : data.coverage >= 85 ? 'info' : 'warning'}
                  />
                </Box>
                
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="primary">
                        {data.total}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Total
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="success.main">
                        {data.passed}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Passed
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="error.main">
                        {data.failed}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Failed
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderDeviceCompatibility = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <DeviceIcon color="primary" />
        Device Compatibility
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Ensure optimal user experience across all devices, operating systems, and browsers 
        with comprehensive compatibility testing and validation.
      </Alert>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <MobileIcon />
                Mobile Devices
              </Typography>
              
              {Object.entries(deviceCompatibility.mobile).map(([platform, data]) => (
                <Box key={platform} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {platform}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {data.compatibility}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={data.compatibility} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color={data.compatibility >= 95 ? 'success' : 'warning'}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {platform === 'responsive' ? `${data.breakpoints} breakpoints` : `${data.devices} devices`} tested, {data.issues} issues
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <DesktopIcon />
                Desktop Systems
              </Typography>
              
              {Object.entries(deviceCompatibility.desktop).map(([os, data]) => (
                <Box key={os} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {os}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {data.compatibility}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={data.compatibility} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color={data.compatibility >= 95 ? 'success' : 'warning'}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {data.browsers} browsers tested, {data.issues} issues
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <BrowserIcon />
                Browser Support
              </Typography>
              
              {Object.entries(deviceCompatibility.browsers).map(([browser, data]) => (
                <Box key={browser} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>
                      {browser}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {data.compatibility}%
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={data.compatibility} 
                    sx={{ height: 4, borderRadius: 2, mb: 1 }}
                    color={data.compatibility >= 95 ? 'success' : 'warning'}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {data.versions} versions tested, {data.issues} issues
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  const renderPerformanceMetrics = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <MetricsIcon color="primary" />
        Performance Metrics
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Monitor real-time performance metrics to ensure optimal platform speed, reliability, 
        and resource efficiency across all user interactions.
      </Alert>

      <Grid container spacing={3}>
        {Object.entries(performanceMetrics).map(([metric, data]) => (
          <Grid item xs={12} md={6} lg={3} key={metric}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle2" gutterBottom sx={{ textTransform: 'capitalize' }}>
                  {metric.replace(/([A-Z])/g, ' $1').trim()}
                </Typography>
                
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    {typeof data.current !== 'undefined' ? data.current : data.average}
                    {metric.includes('Time') || metric.includes('Latency') ? 's' : 
                     metric.includes('Usage') ? 'MB' : 
                     metric.includes('Rate') ? '%' : 
                     metric.includes('uptime') ? '%' : ''}
                  </Typography>
                  <Chip 
                    label={data.status} 
                    color={data.status === 'excellent' ? 'success' : data.status === 'good' ? 'info' : 'warning'}
                    size="small"
                  />
                </Box>
                
                <Box sx={{ mb: 1 }}>
                  <Typography variant="caption" color="text.secondary">
                    Target: {data.target}{metric.includes('Time') || metric.includes('Latency') ? 's' : 
                            metric.includes('Usage') ? 'MB' : 
                            metric.includes('Rate') ? '%' : 
                            metric.includes('uptime') ? '%' : ''}
                  </Typography>
                </Box>
                
                <LinearProgress 
                  variant="determinate" 
                  value={Math.min(((typeof data.current !== 'undefined' ? data.current : data.average) / data.target) * 100, 100)}
                  sx={{ height: 6, borderRadius: 3 }}
                  color={data.status === 'excellent' ? 'success' : data.status === 'good' ? 'info' : 'warning'}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Performance Summary
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Metric</TableCell>
                    <TableCell align="right">Current</TableCell>
                    <TableCell align="right">Target</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.entries(performanceMetrics).map(([metric, data]) => (
                    <TableRow key={metric}>
                      <TableCell sx={{ textTransform: 'capitalize' }}>
                        {metric.replace(/([A-Z])/g, ' $1').trim()}
                      </TableCell>
                      <TableCell align="right">
                        {typeof data.current !== 'undefined' ? data.current : data.average}
                      </TableCell>
                      <TableCell align="right">{data.target}</TableCell>
                      <TableCell align="right">
                        <Chip 
                          label={data.status} 
                          color={data.status === 'excellent' ? 'success' : data.status === 'good' ? 'info' : 'warning'}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          Platform Integration & Testing
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Comprehensive platform integration monitoring and testing suite ensuring seamless connectivity, 
          optimal performance, and reliable user experience across all systems and devices.
        </Typography>

        {/* Integration Score Dashboard */}
        <Card sx={{ mb: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {integrationScore}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Integration Score
                  </Typography>
                  <Chip 
                    label={scoreInfo.level} 
                    sx={{ 
                      mt: 1, 
                      bgcolor: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      fontWeight: 600 
                    }} 
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {testingProgress}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Tests Passed
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(systemIntegration).filter(s => s.status === 'connected').length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Systems Online
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Math.round((deviceCompatibility.mobile.ios.compatibility + deviceCompatibility.mobile.android.compatibility) / 2)}%
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Mobile Compatible
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {Object.values(performanceMetrics).filter(m => m.status === 'excellent').length}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Excellent Metrics
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* Main Content Tabs */}
      <Paper sx={{ mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            label="System Integration" 
            icon={<IntegrationIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Testing Suite" 
            icon={<TestingIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Device Compatibility" 
            icon={<DeviceIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Performance Metrics" 
            icon={<MetricsIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderSystemIntegration()}
          {activeTab === 1 && renderTestingSuite()}
          {activeTab === 2 && renderDeviceCompatibility()}
          {activeTab === 3 && renderPerformanceMetrics()}
        </Box>
      </Paper>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<AutomationIcon />}
          >
            Automated Testing
          </Button>
          <Button
            variant="outlined"
            startIcon={<ExportIcon />}
          >
            Export Reports
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large">
            Schedule Tests
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<PassIcon />}
            sx={{ minWidth: 200 }}
          >
            Platform Ready
          </Button>
        </Box>
      </Box>

      {/* Progress Indicator */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Platform Integration Progress
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={integrationScore} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {scoreInfo.description}
        </Typography>
      </Box>
    </Container>
  );
};

export default PlatformIntegrationTesting;

