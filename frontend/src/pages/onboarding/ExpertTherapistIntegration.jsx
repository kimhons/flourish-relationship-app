import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Tabs,
  Tab,
  Chip,
  Alert,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Avatar,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Switch,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  RadioGroup,
  Radio,
  FormLabel,
  Checkbox,
  FormGroup,
  Divider,
  Badge,
  Rating,
  CircularProgress
} from '@mui/material';
import {
  Psychology as TherapistIcon,
  VideoCall as VideoIcon,
  Phone as PhoneIcon,
  Chat as ChatIcon,
  Schedule as ScheduleIcon,
  Person as PersonIcon,
  Group as CoupleIcon,
  Star as RatingIcon,
  Verified as VerifiedIcon,
  School as EducationIcon,
  Work as ExperienceIcon,
  Language as LanguageIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
  AttachMoney as PriceIcon,
  CalendarToday as CalendarIcon,
  Event as EventIcon,
  Notifications as NotificationIcon,
  Security as SecurityIcon,
  Lock as PrivacyIcon,
  HealthAndSafety as HealthIcon,
  Assignment as AssessmentIcon,
  Analytics as AnalyticsIcon,
  Insights as InsightsIcon,
  TrendingUp as ProgressIcon,
  EmojiEvents as AchievementIcon,
  Favorite as HeartIcon,
  ConnectWithoutContact as ConnectionIcon,
  SelfImprovement as GrowthIcon,
  Balance as BalanceIcon,
  Healing as HealingIcon,
  Transform as TransformIcon,
  AutoAwesome as AIIcon,
  Support as SupportIcon,
  Help as HelpIcon,
  Info as InfoIcon,
  Settings as SettingsIcon,
  Save as SaveIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Refresh as RefreshIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Sort as SortIcon,
  MoreVert as MoreIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CheckCircle as CompleteIcon,
  Cancel as CancelIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Forward as ForwardIcon,
  Replay as ReplayIcon,
  VolumeUp as VolumeIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  ScreenShare as ScreenShareIcon,
  RecordVoiceOver as RecordIcon,
  Message as MessageIcon,
  Send as SendIcon,
  Attachment as AttachmentIcon,
  Folder as FolderIcon,
  Description as DocumentIcon,
  Image as ImageIcon,
  PictureAsPdf as PdfIcon,
  CloudUpload as CloudIcon,
  CloudDownload as DownloadCloudIcon,
  Sync as SyncIcon,
  Update as UpdateIcon,
  Backup as BackupIcon,
  Restore as RestoreIcon,
  History as HistoryIcon,
  Timeline as TimelineIcon,
  DateRange as DateRangeIcon,
  Today as TodayIcon,
  Tomorrow as TomorrowIcon,
  Weekend as WeekendIcon,
  EventAvailable as AvailableIcon,
  EventBusy as BusyIcon,
  EventNote as NoteIcon,
  Alarm as AlarmIcon,
  AlarmOn as AlarmOnIcon,
  AlarmOff as AlarmOffIcon,
  Timer as TimerIcon,
  Timelapse as TimelapseIcon,
  AccessAlarm as AccessAlarmIcon,
  WatchLater as WatchLaterIcon,
  QueryBuilder as QueryBuilderIcon,
  Schedule as ScheduleIcon2,
  Today as TodayIcon2,
  DateRange as DateRangeIcon2,
  Event as EventIcon2,
  EventAvailable as EventAvailableIcon,
  EventBusy as EventBusyIcon,
  EventNote as EventNoteIcon
} from '@mui/icons-material';

const ExpertTherapistIntegration = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [bookingDialog, setBookingDialog] = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);
  const [therapistFilters, setTherapistFilters] = useState({
    specialty: 'all',
    sessionType: 'all',
    language: 'all',
    priceRange: [50, 200],
    availability: 'all'
  });
  const [userProfile, setUserProfile] = useState({
    hasInsurance: true,
    preferredLanguage: 'English',
    sessionPreference: 'video',
    therapyGoals: ['communication', 'conflict-resolution', 'intimacy'],
    previousTherapy: true
  });

  // Therapist Database
  const therapists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Licensed Marriage & Family Therapist',
      photo: '/api/placeholder/150/150',
      rating: 4.9,
      reviewCount: 127,
      experience: 12,
      education: ['PhD in Clinical Psychology - Stanford', 'MA in Marriage & Family Therapy - UCLA'],
      specialties: ['Couples Therapy', 'Communication Skills', 'Conflict Resolution', 'Intimacy Issues'],
      languages: ['English', 'Spanish'],
      sessionTypes: ['Video', 'Phone', 'In-Person'],
      location: 'San Francisco, CA',
      timezone: 'PST',
      priceRange: { individual: 150, couple: 200 },
      availability: {
        monday: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
        tuesday: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
        wednesday: ['9:00 AM', '11:00 AM', '2:00 PM'],
        thursday: ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM'],
        friday: ['9:00 AM', '11:00 AM', '1:00 PM'],
        saturday: ['10:00 AM', '12:00 PM'],
        sunday: []
      },
      bio: 'Dr. Johnson specializes in evidence-based couples therapy with over 12 years of experience helping couples build stronger, healthier relationships. She uses Gottman Method and Emotionally Focused Therapy approaches.',
      credentials: ['Licensed MFT #12345', 'Gottman Method Certified', 'EFT Certified'],
      insuranceAccepted: ['Blue Cross', 'Aetna', 'Cigna', 'UnitedHealth'],
      nextAvailable: '2024-02-15T10:00:00',
      responseTime: '< 2 hours',
      completedSessions: 1247,
      successRate: 94
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Clinical Psychologist & Relationship Expert',
      photo: '/api/placeholder/150/150',
      rating: 4.8,
      reviewCount: 89,
      experience: 8,
      education: ['PsyD in Clinical Psychology - Pepperdine', 'MA in Counseling Psychology - USC'],
      specialties: ['Relationship Counseling', 'Attachment Issues', 'Emotional Intelligence', 'Mindfulness-Based Therapy'],
      languages: ['English', 'Mandarin'],
      sessionTypes: ['Video', 'Phone'],
      location: 'Los Angeles, CA',
      timezone: 'PST',
      priceRange: { individual: 130, couple: 180 },
      availability: {
        monday: ['8:00 AM', '10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
        tuesday: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
        wednesday: ['8:00 AM', '10:00 AM', '12:00 PM', '3:00 PM'],
        thursday: ['9:00 AM', '1:00 PM', '4:00 PM', '6:00 PM'],
        friday: ['8:00 AM', '10:00 AM', '2:00 PM'],
        saturday: ['9:00 AM', '11:00 AM'],
        sunday: ['10:00 AM']
      },
      bio: 'Dr. Chen integrates mindfulness and attachment theory in his practice, helping couples develop deeper emotional connections and healthier communication patterns.',
      credentials: ['Licensed Psychologist #67890', 'Mindfulness-Based Therapy Certified', 'Attachment-Based Therapy Specialist'],
      insuranceAccepted: ['Kaiser', 'Blue Cross', 'Anthem', 'Humana'],
      nextAvailable: '2024-02-16T09:00:00',
      responseTime: '< 4 hours',
      completedSessions: 892,
      successRate: 91
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Licensed Clinical Social Worker',
      photo: '/api/placeholder/150/150',
      rating: 4.9,
      reviewCount: 156,
      experience: 15,
      education: ['MSW in Clinical Social Work - Columbia', 'Certificate in Couples Therapy - Gottman Institute'],
      specialties: ['Gottman Method', 'Premarital Counseling', 'Divorce Mediation', 'Blended Family Therapy'],
      languages: ['English', 'Spanish', 'Portuguese'],
      sessionTypes: ['Video', 'Phone', 'In-Person'],
      location: 'New York, NY',
      timezone: 'EST',
      priceRange: { individual: 140, couple: 190 },
      availability: {
        monday: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'],
        tuesday: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'],
        wednesday: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'],
        thursday: ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM'],
        friday: ['9:00 AM', '11:00 AM', '1:00 PM'],
        saturday: ['10:00 AM', '12:00 PM', '2:00 PM'],
        sunday: []
      },
      bio: 'Dr. Rodriguez is a Gottman Method expert with extensive experience in premarital counseling and helping couples navigate major life transitions.',
      credentials: ['Licensed LCSW #11111', 'Gottman Method Level 3 Trained', 'Prepare/Enrich Certified'],
      insuranceAccepted: ['Empire BlueCross', 'Aetna', 'Oxford', 'UnitedHealth'],
      nextAvailable: '2024-02-14T11:00:00',
      responseTime: '< 1 hour',
      completedSessions: 1567,
      successRate: 96
    }
  ];

  // Session History Data
  useEffect(() => {
    const sampleSessions = [
      {
        id: 1,
        therapistId: 1,
        therapistName: 'Dr. Sarah Johnson',
        date: '2024-02-01',
        time: '2:00 PM',
        duration: 50,
        type: 'video',
        status: 'completed',
        notes: 'Focused on communication patterns and active listening techniques',
        homework: ['Practice daily check-ins', 'Complete communication assessment'],
        rating: 5,
        nextSession: '2024-02-08T14:00:00'
      },
      {
        id: 2,
        therapistId: 1,
        therapistName: 'Dr. Sarah Johnson',
        date: '2024-01-25',
        time: '2:00 PM',
        duration: 50,
        type: 'video',
        status: 'completed',
        notes: 'Discussed relationship goals and established therapy objectives',
        homework: ['Complete relationship assessment', 'Identify core values'],
        rating: 5,
        nextSession: '2024-02-01T14:00:00'
      }
    ];
    setSessionHistory(sampleSessions);
  }, []);

  // Filter therapists based on criteria
  const filteredTherapists = useMemo(() => {
    return therapists.filter(therapist => {
      if (therapistFilters.specialty !== 'all' && 
          !therapist.specialties.some(s => s.toLowerCase().includes(therapistFilters.specialty))) {
        return false;
      }
      if (therapistFilters.sessionType !== 'all' && 
          !therapist.sessionTypes.some(t => t.toLowerCase() === therapistFilters.sessionType)) {
        return false;
      }
      if (therapistFilters.language !== 'all' && 
          !therapist.languages.includes(therapistFilters.language)) {
        return false;
      }
      if (therapist.priceRange.couple < therapistFilters.priceRange[0] || 
          therapist.priceRange.couple > therapistFilters.priceRange[1]) {
        return false;
      }
      return true;
    });
  }, [therapistFilters]);

  // Book session function
  const bookSession = useCallback((therapist, sessionDetails) => {
    const newSession = {
      id: Date.now(),
      therapistId: therapist.id,
      therapistName: therapist.name,
      date: sessionDetails.date,
      time: sessionDetails.time,
      duration: sessionDetails.duration || 50,
      type: sessionDetails.type,
      status: 'scheduled',
      notes: '',
      homework: [],
      rating: null,
      nextSession: null
    };
    
    setSessionHistory(prev => [newSession, ...prev]);
    setBookingDialog(false);
    setSelectedTherapist(null);
  }, []);

  const renderTherapistDirectory = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <TherapistIcon color="primary" />
        Expert Therapist Directory
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Connect with licensed relationship therapists and counselors. All therapists are 
        verified professionals with specialized training in couples therapy and relationship counseling.
      </Alert>

      {/* Filters */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Find Your Perfect Therapist
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Specialty</InputLabel>
                <Select
                  value={therapistFilters.specialty}
                  label="Specialty"
                  onChange={(e) => setTherapistFilters(prev => ({ ...prev, specialty: e.target.value }))}
                >
                  <MenuItem value="all">All Specialties</MenuItem>
                  <MenuItem value="couples">Couples Therapy</MenuItem>
                  <MenuItem value="communication">Communication</MenuItem>
                  <MenuItem value="conflict">Conflict Resolution</MenuItem>
                  <MenuItem value="intimacy">Intimacy Issues</MenuItem>
                  <MenuItem value="premarital">Premarital Counseling</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Session Type</InputLabel>
                <Select
                  value={therapistFilters.sessionType}
                  label="Session Type"
                  onChange={(e) => setTherapistFilters(prev => ({ ...prev, sessionType: e.target.value }))}
                >
                  <MenuItem value="all">All Types</MenuItem>
                  <MenuItem value="video">Video Call</MenuItem>
                  <MenuItem value="phone">Phone Call</MenuItem>
                  <MenuItem value="in-person">In-Person</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={therapistFilters.language}
                  label="Language"
                  onChange={(e) => setTherapistFilters(prev => ({ ...prev, language: e.target.value }))}
                >
                  <MenuItem value="all">All Languages</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Spanish">Spanish</MenuItem>
                  <MenuItem value="Mandarin">Mandarin</MenuItem>
                  <MenuItem value="Portuguese">Portuguese</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={3}>
              <Typography gutterBottom>Price Range: ${therapistFilters.priceRange[0]} - ${therapistFilters.priceRange[1]}</Typography>
              <Slider
                value={therapistFilters.priceRange}
                onChange={(e, newValue) => setTherapistFilters(prev => ({ ...prev, priceRange: newValue }))}
                valueLabelDisplay="auto"
                min={50}
                max={300}
                step={10}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Therapist Cards */}
      <Grid container spacing={3}>
        {filteredTherapists.map((therapist) => (
          <Grid item xs={12} md={6} lg={4} key={therapist.id}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                '&:hover': { boxShadow: 3, transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease'
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar 
                    src={therapist.photo} 
                    sx={{ width: 60, height: 60 }}
                  >
                    <TherapistIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {therapist.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {therapist.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <Rating value={therapist.rating} precision={0.1} size="small" readOnly />
                      <Typography variant="caption">
                        {therapist.rating} ({therapist.reviewCount} reviews)
                      </Typography>
                    </Box>
                  </Box>
                  <Chip 
                    icon={<VerifiedIcon />} 
                    label="Verified" 
                    color="success" 
                    size="small" 
                  />
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {therapist.bio.substring(0, 120)}...
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                    Specialties:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {therapist.specialties.slice(0, 3).map((specialty, index) => (
                      <Chip 
                        key={index} 
                        label={specialty} 
                        size="small" 
                        variant="outlined" 
                      />
                    ))}
                    {therapist.specialties.length > 3 && (
                      <Chip 
                        label={`+${therapist.specialties.length - 3} more`} 
                        size="small" 
                        variant="outlined" 
                      />
                    )}
                  </Box>
                </Box>
                
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <ExperienceIcon fontSize="small" color="action" />
                      <Typography variant="caption" display="block">
                        {therapist.experience} years
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box sx={{ textAlign: 'center', p: 1, border: 1, borderColor: 'divider', borderRadius: 1 }}>
                      <PriceIcon fontSize="small" color="action" />
                      <Typography variant="caption" display="block">
                        ${therapist.priceRange.couple}/session
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {therapist.sessionTypes.map((type, index) => (
                    <Chip 
                      key={index}
                      icon={type === 'Video' ? <VideoIcon /> : type === 'Phone' ? <PhoneIcon /> : <PersonIcon />}
                      label={type} 
                      size="small" 
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  <AccessTime fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
                  Next available: {new Date(therapist.nextAvailable).toLocaleDateString()}
                </Typography>
                
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<ScheduleIcon />}
                  onClick={() => {
                    setSelectedTherapist(therapist);
                    setBookingDialog(true);
                  }}
                >
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderSessionManagement = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ScheduleIcon color="primary" />
        Session Management
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Manage your therapy sessions, view upcoming appointments, and track your progress 
        with your chosen therapist. All sessions are secure and confidential.
      </Alert>

      {/* Upcoming Sessions */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Upcoming Sessions
      </Typography>
      
      {sessionHistory.filter(session => session.status === 'scheduled').length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <ScheduleIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Upcoming Sessions
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Book a session with one of our expert therapists to get started.
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setActiveTab(0)}
            >
              Find a Therapist
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Grid container spacing={3}>
          {sessionHistory.filter(session => session.status === 'scheduled').map((session) => (
            <Grid item xs={12} md={6} key={session.id}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {session.therapistName}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)} Session
                      </Typography>
                    </Box>
                    <Chip label="Scheduled" color="primary" size="small" />
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <CalendarIcon color="action" />
                    <Typography variant="body2">
                      {new Date(session.date).toLocaleDateString()} at {session.time}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <TimerIcon color="action" />
                    <Typography variant="body2">
                      {session.duration} minutes
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={session.type === 'video' ? <VideoIcon /> : <PhoneIcon />}
                    >
                      Join Session
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<EditIcon />}
                    >
                      Reschedule
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Session History */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Session History
      </Typography>
      
      {sessionHistory.filter(session => session.status === 'completed').length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <HistoryIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Session History
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your completed sessions will appear here.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <List>
          {sessionHistory.filter(session => session.status === 'completed').map((session) => (
            <ListItem key={session.id} divider>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'success.main' }}>
                  <CompleteIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {session.therapistName}
                    </Typography>
                    <Rating value={session.rating} size="small" readOnly />
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(session.date).toLocaleDateString()} • {session.duration} minutes • {session.type}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {session.notes}
                    </Typography>
                    {session.homework.length > 0 && (
                      <Box sx={{ mt: 1 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          Homework:
                        </Typography>
                        <ul style={{ margin: '4px 0', paddingLeft: '20px' }}>
                          {session.homework.map((task, index) => (
                            <li key={index}>
                              <Typography variant="caption">{task}</Typography>
                            </li>
                          ))}
                        </ul>
                      </Box>
                    )}
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );

  const renderTherapyProgress = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ProgressIcon color="primary" />
        Therapy Progress & Insights
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Track your therapy progress and view insights from your sessions. 
        Monitor improvements in communication, relationship satisfaction, and personal growth.
      </Alert>

      {/* Progress Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <CircularProgress
                variant="determinate"
                value={78}
                size={80}
                thickness={4}
                sx={{ color: 'white', mb: 2 }}
              />
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                78%
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Overall Progress
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: 'success.main', mx: 'auto', mb: 2 }}>
                <CompleteIcon sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                {sessionHistory.filter(s => s.status === 'completed').length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sessions Completed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: 'primary.main', mx: 'auto', mb: 2 }}>
                <GrowthIcon sx={{ fontSize: 30 }} />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                4.8
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Avg Session Rating
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Progress Areas */}
      <Typography variant="h6" gutterBottom>
        Progress by Area
      </Typography>
      
      <Grid container spacing={3}>
        {[
          { area: 'Communication Skills', progress: 85, color: 'primary' },
          { area: 'Conflict Resolution', progress: 72, color: 'secondary' },
          { area: 'Emotional Intimacy', progress: 68, color: 'success' },
          { area: 'Trust Building', progress: 91, color: 'info' },
          { area: 'Future Planning', progress: 76, color: 'warning' },
          { area: 'Individual Growth', progress: 83, color: 'error' }
        ].map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.area}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: `${item.color}.main` }}>
                    {item.progress}%
                  </Typography>
                </Box>
                
                <LinearProgress
                  variant="determinate"
                  value={item.progress}
                  sx={{ 
                    height: 8, 
                    borderRadius: 4,
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: `${item.color}.main`
                    }
                  }}
                />
                
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {item.progress >= 80 ? 'Excellent progress' : 
                   item.progress >= 60 ? 'Good improvement' : 'Needs attention'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Therapy Goals */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Therapy Goals & Milestones
        </Typography>
        
        <List>
          {[
            { goal: 'Improve daily communication', status: 'completed', progress: 100 },
            { goal: 'Resolve recurring conflicts', status: 'in-progress', progress: 75 },
            { goal: 'Increase emotional intimacy', status: 'in-progress', progress: 60 },
            { goal: 'Plan future together', status: 'not-started', progress: 0 }
          ].map((goal, index) => (
            <ListItem key={index} divider>
              <ListItemIcon>
                <Avatar sx={{ 
                  bgcolor: goal.status === 'completed' ? 'success.main' : 
                          goal.status === 'in-progress' ? 'warning.main' : 'grey.300' 
                }}>
                  {goal.status === 'completed' ? <CompleteIcon /> : 
                   goal.status === 'in-progress' ? <ProgressIcon /> : <CircleIcon />}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={goal.goal}
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={goal.progress}
                      sx={{ height: 6, borderRadius: 3 }}
                    />
                    <Typography variant="caption" sx={{ mt: 0.5, display: 'block' }}>
                      {goal.progress}% complete
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const renderInsuranceIntegration = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SecurityIcon color="primary" />
        Insurance & Billing Integration
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Seamlessly manage insurance claims and billing. Many of our therapists accept 
        major insurance plans, making therapy more accessible and affordable.
      </Alert>

      {/* Insurance Status */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Insurance Information
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={userProfile.hasInsurance}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, hasInsurance: e.target.checked }))}
                  />
                }
                label="I have health insurance"
              />
              
              {userProfile.hasInsurance && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Insurance Provider"
                    defaultValue="Blue Cross Blue Shield"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Policy Number"
                    defaultValue="BCBS123456789"
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Group Number"
                    defaultValue="GRP001"
                  />
                </Box>
              )}
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Coverage Summary
              </Typography>
              
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Individual Therapy"
                    secondary="$20 copay per session"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Couples Therapy"
                    secondary="$30 copay per session"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Annual Deductible"
                    secondary="$500 (met: $350)"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Typography variant="h6" gutterBottom>
        Billing History
      </Typography>
      
      <List>
        {[
          { date: '2024-02-01', therapist: 'Dr. Sarah Johnson', amount: 200, copay: 30, status: 'paid' },
          { date: '2024-01-25', therapist: 'Dr. Sarah Johnson', amount: 200, copay: 30, status: 'paid' },
          { date: '2024-01-18', therapist: 'Dr. Sarah Johnson', amount: 200, copay: 30, status: 'pending' }
        ].map((bill, index) => (
          <ListItem key={index} divider>
            <ListItemIcon>
              <Avatar sx={{ bgcolor: bill.status === 'paid' ? 'success.main' : 'warning.main' }}>
                <PriceIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1">
                    Session with {bill.therapist}
                  </Typography>
                  <Chip 
                    label={bill.status} 
                    color={bill.status === 'paid' ? 'success' : 'warning'} 
                    size="small" 
                  />
                </Box>
              }
              secondary={
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(bill.date).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    Session Fee: ${bill.amount} | Your Copay: ${bill.copay} | Insurance Covered: ${bill.amount - bill.copay}
                  </Typography>
                </Box>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          🧠 Expert Therapist Integration
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Connect with licensed relationship therapists and counselors. Get professional guidance, 
          schedule sessions, and track your therapy progress all in one integrated platform.
        </Typography>
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
            label="Therapist Directory" 
            icon={<TherapistIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Session Management" 
            icon={<ScheduleIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Progress Tracking" 
            icon={<ProgressIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Insurance & Billing" 
            icon={<SecurityIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderTherapistDirectory()}
          {activeTab === 1 && renderSessionManagement()}
          {activeTab === 2 && renderTherapyProgress()}
          {activeTab === 3 && renderInsuranceIntegration()}
        </Box>
      </Paper>

      {/* Booking Dialog */}
      <Dialog open={bookingDialog} onClose={() => setBookingDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>
          Book Session with {selectedTherapist?.name}
        </DialogTitle>
        <DialogContent>
          {selectedTherapist && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Available Times
              </Typography>
              
              <Grid container spacing={2}>
                {Object.entries(selectedTherapist.availability).map(([day, times]) => (
                  times.length > 0 && (
                    <Grid item xs={12} md={6} key={day}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {times.map((time, index) => (
                          <Button
                            key={index}
                            variant="outlined"
                            size="small"
                            onClick={() => {
                              const sessionDetails = {
                                date: '2024-02-15', // This would be calculated based on the day
                                time: time,
                                type: 'video',
                                duration: 50
                              };
                              bookSession(selectedTherapist, sessionDetails);
                            }}
                          >
                            {time}
                          </Button>
                        ))}
                      </Box>
                    </Grid>
                  )
                ))}
              </Grid>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setBookingDialog(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Therapy Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<PrivacyIcon />}
          >
            Privacy Policy
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" size="large" startIcon={<SupportIcon />}>
            Get Support
          </Button>
          <Button 
            variant="contained" 
            size="large"
            startIcon={<ScheduleIcon />}
            onClick={() => setActiveTab(0)}
            sx={{ minWidth: 200 }}
          >
            Find a Therapist
          </Button>
        </Box>
      </Box>

      {/* Progress Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Therapy Progress Summary
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={78} 
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          78% Overall Progress | {sessionHistory.filter(s => s.status === 'completed').length} Sessions Completed | 4.8/5 Avg Rating
        </Typography>
      </Box>
    </Container>
  );
};

export default ExpertTherapistIntegration;

