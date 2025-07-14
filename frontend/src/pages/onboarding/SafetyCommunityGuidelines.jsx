import React, { useState } from 'react';
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
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Switch,
  FormControlLabel,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Paper,
  Badge,
  Divider
} from '@mui/material';
import {
  NavigateNext,
  NavigateBefore,
  Security,
  Shield,
  Gavel,
  ReportProblem,
  Block,
  Visibility,
  VerifiedUser,
  Lock,
  Warning,
  CheckCircle,
  Error,
  Info,
  Group,
  Forum,
  PersonOff,
  NotInterested,
  Flag,
  Policy,
  AdminPanelSettings,
  Psychology,
  CameraAlt,
  Mic,
  LocationOn,
  Message,
  Phone,
  Emergency,
  LocalPolice,
  HealthAndSafety,
  Help,
  SupportAgent,
  ExpandMore,
  QuestionAnswer,
  Feedback,
  Report,
  Cancel,
  Save
} from '@mui/icons-material';

const SafetyCommunityGuidelines = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [acceptedGuidelines, setAcceptedGuidelines] = useState({
    communityStandards: false,
    safetyGuidelines: false,
    reportingPolicy: false,
    privacyPolicy: false,
    termsOfService: false
  });
  
  const [safetySettings, setSafetySettings] = useState({
    blockUnsafeContent: true,
    requireVerification: true,
    autoModerationEnabled: true,
    reportingEnabled: true,
    emergencyContactsAccess: false,
    locationSharingRestrictions: true,
    photoVerificationRequired: true,
    messagingRestrictions: true
  });

  const [reportingDialog, setReportingDialog] = useState(false);
  const [emergencyDialog, setEmergencyDialog] = useState(false);

  const safetyFeatures = [
    {
      title: 'Photo Verification',
      description: 'Verify your photos to build trust and authenticity',
      icon: <CameraAlt />,
      enabled: safetySettings.photoVerificationRequired
    },
    {
      title: 'Real-time Moderation',
      description: 'AI-powered content moderation for safer interactions',
      icon: <Shield />,
      enabled: safetySettings.autoModerationEnabled
    },
    {
      title: 'Reporting System',
      description: 'Easy reporting tools for inappropriate behavior',
      icon: <Flag />,
      enabled: safetySettings.reportingEnabled
    },
    {
      title: 'Emergency Support',
      description: '24/7 emergency support and crisis intervention',
      icon: <Emergency />,
      enabled: true
    }
  ];

  const communityStandards = [
    {
      title: 'Respectful Communication',
      description: 'Treat all users with kindness and respect',
      icon: <Forum />,
      rules: [
        'No harassment, bullying, or hate speech',
        'Respectful disagreement is welcome',
        'Be mindful of cultural differences',
        'Use inclusive language'
      ]
    },
    {
      title: 'Authentic Profiles',
      description: 'Be genuine and honest in your profile',
      icon: <VerifiedUser />,
      rules: [
        'Use real, recent photos',
        'Provide accurate information',
        'No impersonation or fake profiles',
        'One account per person'
      ]
    },
    {
      title: 'Safe Dating Practices',
      description: 'Prioritize safety in all interactions',
      icon: <HealthAndSafety />,
      rules: [
        'Meet in public places initially',
        'Trust your instincts',
        'Share your plans with friends',
        'Report suspicious behavior'
      ]
    },
    {
      title: 'Privacy Protection',
      description: 'Respect privacy and personal boundaries',
      icon: <Lock />,
      rules: [
        'No sharing personal information without consent',
        'Respect photo and message privacy',
        'No screenshots or recording without permission',
        'Honor blocking and reporting decisions'
      ]
    }
  ];

  const handleGuidelineAcceptance = (guideline, accepted) => {
    setAcceptedGuidelines(prev => ({
      ...prev,
      [guideline]: accepted
    }));
  };

  const handleSafetySettingChange = (setting, value) => {
    setSafetySettings(prev => ({
      ...prev,
      [setting]: value
    }));
  };

  const allGuidelinesAccepted = Object.values(acceptedGuidelines).every(Boolean);

  const renderSafetyOverview = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Security sx={{ mr: 1 }} />
          Safety First
        </Typography>
        
        <Alert severity="info" sx={{ mb: 3 }}>
          Your safety is our top priority. We've built comprehensive safety features to protect you.
        </Alert>

        <Grid container spacing={2}>
          {safetyFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 1 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6">{feature.title}</Typography>
                    {feature.enabled && (
                      <Badge color="success" variant="dot" sx={{ ml: 1 }} />
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );

  const renderCommunityStandards = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Group sx={{ mr: 1 }} />
          Community Standards
        </Typography>

        {communityStandards.map((standard, index) => (
          <Accordion key={index} sx={{ mb: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ color: 'primary.main', mr: 1 }}>
                  {standard.icon}
                </Box>
                <Typography variant="h6">{standard.title}</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {standard.description}
              </Typography>
              <List dense>
                {standard.rules.map((rule, ruleIndex) => (
                  <ListItem key={ruleIndex}>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText primary={rule} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </CardContent>
    </Card>
  );

  const renderReportingSystem = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Flag sx={{ mr: 1 }} />
          Reporting & Support
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          If you encounter any inappropriate behavior, please report it immediately.
        </Alert>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Flag />}
              onClick={() => setReportingDialog(true)}
              sx={{ mb: 2 }}
            >
              Report User
            </Button>
            <Typography variant="body2" color="text.secondary">
              Report inappropriate behavior or content
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<Block />}
              sx={{ mb: 2 }}
            >
              Block User
            </Button>
            <Typography variant="body2" color="text.secondary">
              Block users to prevent further contact
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Button
              variant="outlined"
              color="error"
              fullWidth
              startIcon={<Emergency />}
              onClick={() => setEmergencyDialog(true)}
              sx={{ mb: 2 }}
            >
              Emergency Support
            </Button>
            <Typography variant="body2" color="text.secondary">
              24/7 crisis support and intervention
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" sx={{ mb: 2 }}>Response Times</Typography>
        <List dense>
          <ListItem>
            <ListItemIcon>
              <Emergency color="error" />
            </ListItemIcon>
            <ListItemText 
              primary="Emergency Reports" 
              secondary="Immediate response (24/7)"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Warning color="warning" />
            </ListItemIcon>
            <ListItemText 
              primary="Harassment/Abuse" 
              secondary="Within 1 hour"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Info color="info" />
            </ListItemIcon>
            <ListItemText 
              primary="General Reports" 
              secondary="Within 24 hours"
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );

  const renderSafetySettings = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Shield sx={{ mr: 1 }} />
          Safety Settings
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={safetySettings.blockUnsafeContent}
                  onChange={(e) => handleSafetySettingChange('blockUnsafeContent', e.target.checked)}
                />
              }
              label="Block Unsafe Content"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
              Automatically filter inappropriate content
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={safetySettings.requireVerification}
                  onChange={(e) => handleSafetySettingChange('requireVerification', e.target.checked)}
                />
              }
              label="Require Verification"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
              Only interact with verified users
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={safetySettings.autoModerationEnabled}
                  onChange={(e) => handleSafetySettingChange('autoModerationEnabled', e.target.checked)}
                />
              }
              label="Auto-Moderation"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
              AI-powered content moderation
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={safetySettings.locationSharingRestrictions}
                  onChange={(e) => handleSafetySettingChange('locationSharingRestrictions', e.target.checked)}
                />
              }
              label="Location Restrictions"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
              Enhanced location sharing safety
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={safetySettings.messagingRestrictions}
                  onChange={(e) => handleSafetySettingChange('messagingRestrictions', e.target.checked)}
                />
              }
              label="Messaging Restrictions"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
              Enhanced messaging safety controls
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={safetySettings.emergencyContactsAccess}
                  onChange={(e) => handleSafetySettingChange('emergencyContactsAccess', e.target.checked)}
                />
              }
              label="Emergency Contacts"
            />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
              Allow emergency contact access
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const renderAcceptanceForm = () => (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
          <Gavel sx={{ mr: 1 }} />
          Agreement Required
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          Please read and accept all guidelines to continue using Flourish.
        </Alert>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={acceptedGuidelines.communityStandards}
                  onChange={(e) => handleGuidelineAcceptance('communityStandards', e.target.checked)}
                />
              }
              label="I agree to follow the Community Standards"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={acceptedGuidelines.safetyGuidelines}
                  onChange={(e) => handleGuidelineAcceptance('safetyGuidelines', e.target.checked)}
                />
              }
              label="I agree to follow the Safety Guidelines"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={acceptedGuidelines.reportingPolicy}
                  onChange={(e) => handleGuidelineAcceptance('reportingPolicy', e.target.checked)}
                />
              }
              label="I understand the Reporting Policy"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={acceptedGuidelines.privacyPolicy}
                  onChange={(e) => handleGuidelineAcceptance('privacyPolicy', e.target.checked)}
                />
              }
              label="I agree to the Privacy Policy"
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={acceptedGuidelines.termsOfService}
                  onChange={(e) => handleGuidelineAcceptance('termsOfService', e.target.checked)}
                />
              }
              label="I agree to the Terms of Service"
            />
          </Grid>
        </Grid>

        {allGuidelinesAccepted && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Thank you for accepting our guidelines. You're ready to continue!
          </Alert>
        )}
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
          Safety & Community Guidelines
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Building a safe and respectful community together
        </Typography>
        <LinearProgress variant="determinate" value={76} sx={{ height: 8, borderRadius: 4 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Step 153 of 280
        </Typography>
      </Box>

      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)} sx={{ mb: 3 }}>
        <Tab label="Safety Features" />
        <Tab label="Community Standards" />
        <Tab label="Reporting" />
        <Tab label="Settings" />
        <Tab label="Agreement" />
      </Tabs>

      {selectedTab === 0 && renderSafetyOverview()}
      {selectedTab === 1 && renderCommunityStandards()}
      {selectedTab === 2 && renderReportingSystem()}
      {selectedTab === 3 && renderSafetySettings()}
      {selectedTab === 4 && renderAcceptanceForm()}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<NavigateBefore />}
          size="large"
        >
          Previous
        </Button>
        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          size="large"
          disabled={!allGuidelinesAccepted}
        >
          Continue
        </Button>
      </Box>

      {/* Reporting Dialog */}
      <Dialog open={reportingDialog} onClose={() => setReportingDialog(false)}>
        <DialogTitle>Report User</DialogTitle>
        <DialogContent>
          <Typography>
            If you need to report a user, please use the report button on their profile or in your conversation.
            Our moderation team will review all reports promptly.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setReportingDialog(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      {/* Emergency Dialog */}
      <Dialog open={emergencyDialog} onClose={() => setEmergencyDialog(false)}>
        <DialogTitle>Emergency Support</DialogTitle>
        <DialogContent>
          <Alert severity="error" sx={{ mb: 2 }}>
            If you're in immediate danger, please call emergency services: 911
          </Alert>
          <Typography>
            Our 24/7 crisis support team is available for:
          </Typography>
          <List>
            <ListItem><ListItemText primary="Safety concerns" /></ListItem>
            <ListItem><ListItemText primary="Harassment or threats" /></ListItem>
            <ListItem><ListItemText primary="Mental health crises" /></ListItem>
            <ListItem><ListItemText primary="Domestic violence resources" /></ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEmergencyDialog(false)}>Close</Button>
          <Button variant="contained" color="error">Contact Support</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SafetyCommunityGuidelines;