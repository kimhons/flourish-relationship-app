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
  Emergency as EmergencyIcon,
  Phone as PhoneIcon,
  Chat as ChatIcon,
  VideoCall as VideoIcon,
  SOS as SOSIcon,
  LocalHospital as HospitalIcon,
  Psychology as TherapyIcon,
  Support as SupportIcon,
  HealthAndSafety as SafetyIcon,
  Security as SecurityIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  AccessTime as TimeIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Group as GroupIcon,
  Family as FamilyIcon,
  Favorite as HeartIcon,
  Healing as HealingIcon,
  SelfImprovement as GrowthIcon,
  Balance as BalanceIcon,
  Transform as TransformIcon,
  ConnectWithoutContact as ConnectionIcon,
  AutoAwesome as AIIcon,
  Insights as InsightsIcon,
  Analytics as AnalyticsIcon,
  TrendingUp as TrendIcon,
  Assessment as AssessmentIcon,
  Assignment as TaskIcon,
  MenuBook as GuideIcon,
  School as EducationIcon,
  Help as HelpIcon,
  ContactSupport as ContactIcon,
  Forum as ForumIcon,
  QuestionAnswer as QAIcon,
  RecordVoiceOver as VoiceIcon,
  Hearing as ListenIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Lock as PrivacyIcon,
  Shield as ShieldIcon,
  Verified as VerifiedIcon,
  Star as StarIcon,
  Flag as FlagIcon,
  Report as ReportIcon,
  Block as BlockIcon,
  NotificationsActive as AlertIcon,
  Alarm as AlarmIcon,
  Schedule as ScheduleIcon,
  Event as EventIcon,
  CalendarToday as CalendarIcon,
  Today as TodayIcon,
  AccessAlarm as AccessAlarmIcon,
  Timer as TimerIcon,
  Speed as SpeedIcon,
  FlashOn as FlashIcon,
  Bolt as BoltIcon,
  LocalFireDepartment as FireIcon,
  Whatshot as HotIcon,
  TrendingDown as DeclineIcon,
  TrendingFlat as StableIcon,
  ArrowUpward as UpIcon,
  ArrowDownward as DownIcon,
  Remove as NeutralIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Refresh as RefreshIcon,
  Sync as SyncIcon,
  Update as UpdateIcon,
  Settings as SettingsIcon,
  MoreVert as MoreIcon,
  Launch as LaunchIcon,
  OpenInNew as OpenIcon,
  Close as CloseIcon,
  Clear as ClearIcon,
  Done as DoneIcon,
  DoneAll as DoneAllIcon,
  Undo as UndoIcon,
  Redo as RedoIcon,
  Forward as ForwardIcon,
  Reply as ReplyIcon,
  Send as SendIcon,
  Message as MessageIcon,
  Email as EmailIcon,
  Sms as SmsIcon,
  Call as CallIcon,
  CallEnd as CallEndIcon,
  CallMade as CallMadeIcon,
  CallReceived as CallReceivedIcon,
  CallMissed as CallMissedIcon,
  Voicemail as VoicemailIcon,
  VoiceChat as VoiceChatIcon,
  RecordVoiceOver as RecordVoiceOverIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  VolumeUp as VolumeUpIcon,
  VolumeDown as VolumeDownIcon,
  VolumeOff as VolumeOffIcon,
  VolumeMute as VolumeMuteIcon,
  Speaker as SpeakerIcon,
  SpeakerPhone as SpeakerPhoneIcon,
  Headset as HeadsetIcon,
  HeadsetMic as HeadsetMicIcon,
  Bluetooth as BluetoothIcon,
  BluetoothAudio as BluetoothAudioIcon,
  Wifi as WifiIcon,
  WifiOff as WifiOffIcon,
  Signal as SignalIcon,
  SignalWifi4Bar as SignalWifi4BarIcon,
  SignalWifiOff as SignalWifiOffIcon,
  NetworkCheck as NetworkCheckIcon,
  NetworkWifi as NetworkWifiIcon,
  Router as RouterIcon,
  DeviceHub as DeviceHubIcon,
  Devices as DevicesIcon,
  Computer as ComputerIcon,
  Laptop as LaptopIcon,
  Tablet as TabletIcon,
  PhoneAndroid as PhoneAndroidIcon,
  PhoneIphone as PhoneIphoneIcon,
  Watch as WatchIcon,
  Tv as TvIcon,
  Speaker as SpeakerIcon2,
  Headphones as HeadphonesIcon,
  Keyboard as KeyboardIcon,
  Mouse as MouseIcon,
  Gamepad as GamepadIcon,
  SportsEsports as GamingIcon,
  Casino as CasinoIcon,
  Celebration as CelebrationIcon,
  Cake as CakeIcon,
  Gift as GiftIcon,
  CardGiftcard as CardGiftcardIcon,
  Redeem as RedeemIcon,
  LocalOffer as OfferIcon,
  Discount as DiscountIcon,
  MonetizationOn as MonetizationOnIcon,
  AttachMoney as AttachMoneyIcon,
  Money as MoneyIcon,
  CreditCard as CreditCardIcon,
  Payment as PaymentIcon,
  AccountBalance as AccountBalanceIcon,
  AccountBalanceWallet as WalletIcon,
  Savings as SavingsIcon,
  TrendingUp as TrendingUpIcon,
  ShowChart as ShowChartIcon,
  BarChart as BarChartIcon,
  PieChart as PieChartIcon,
  DonutLarge as DonutLargeIcon,
  Timeline as TimelineIcon,
  MultilineChart as MultilineChartIcon,
  StackedLineChart as StackedLineChartIcon,
  BubbleChart as BubbleChartIcon,
  ScatterPlot as ScatterPlotIcon,
  Equalizer as EqualizerIcon,
  GraphicEq as GraphicEqIcon,
  Leaderboard as LeaderboardIcon,
  Poll as PollIcon,
  HowToVote as HowToVoteIcon,
  ThumbUp as ThumbUpIcon,
  ThumbDown as ThumbDownIcon,
  ThumbsUpDown as ThumbsUpDownIcon,
  Recommend as RecommendIcon,
  NotInterested as NotInterestedIcon,
  Block as BlockIcon2,
  Report as ReportIcon2,
  Flag as FlagIcon2,
  Feedback as FeedbackIcon,
  RateReview as RateReviewIcon,
  Reviews as ReviewsIcon,
  Comment as CommentIcon,
  Comments as CommentsIcon,
  Forum as ForumIcon2,
  Chat as ChatIcon2,
  ChatBubble as ChatBubbleIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  QuestionAnswer as QuestionAnswerIcon,
  LiveHelp as LiveHelpIcon,
  ContactSupport as ContactSupportIcon,
  SupportAgent as SupportAgentIcon,
  HeadsetMic as HeadsetMicIcon2,
  RecordVoiceOver as RecordVoiceOverIcon2,
  Hearing as HearingIcon,
  HearingDisabled as HearingDisabledIcon,
  Accessibility as AccessibilityIcon,
  AccessibilityNew as AccessibilityNewIcon,
  Accessible as AccessibleIcon,
  AccessibleForward as AccessibleForwardIcon,
  Elderly as ElderlyIcon,
  ElderlyCare as ElderlyCareIcon,
  ChildCare as ChildCareIcon,
  ChildFriendly as ChildFriendlyIcon,
  FamilyRestroom as FamilyRestroomIcon,
  Pregnant as PregnantIcon,
  PregnantWoman as PregnantWomanIcon,
  Baby as BabyIcon,
  BabyChangingStation as BabyChangingStationIcon,
  Stroller as StrollerIcon,
  Toys as ToysIcon,
  SportsBaseball as SportsBaseballIcon,
  SportsBasketball as SportsBasketballIcon,
  SportsFootball as SportsFootballIcon,
  SportsSoccer as SportsSoccerIcon,
  SportsTennis as SportsTennisIcon,
  SportsGolf as SportsGolfIcon,
  SportsHockey as SportsHockeyIcon,
  SportsVolleyball as SportsVolleyballIcon,
  SportsCricket as SportsCricketIcon,
  SportsRugby as SportsRugbyIcon,
  SportsHandball as SportsHandballIcon,
  SportsMma as SportsMmaIcon,
  SportsKabaddi as SportsKabaddiIcon,
  FitnessCenter as FitnessCenterIcon,
  SelfImprovement as SelfImprovementIcon,
  Spa as SpaIcon,
  HotTub as HotTubIcon,
  Pool as PoolIcon,
  BeachAccess as BeachAccessIcon,
  Umbrella as UmbrellaIcon,
  WbSunny as WbSunnyIcon,
  WbCloudy as WbCloudyIcon,
  Cloud as CloudIcon2,
  CloudQueue as CloudQueueIcon,
  CloudDone as CloudDoneIcon,
  CloudOff as CloudOffIcon,
  Thunderstorm as ThunderstormIcon,
  AcUnit as AcUnitIcon,
  Grain as GrainIcon,
  Opacity as OpacityIcon,
  InvertColors as InvertColorsIcon,
  ColorLens as ColorLensIcon,
  Palette as PaletteIcon,
  Brush as BrushIcon,
  FormatPaint as FormatPaintIcon,
  FormatColorFill as FormatColorFillIcon,
  FormatColorReset as FormatColorResetIcon,
  FormatColorText as FormatColorTextIcon,
  TextFields as TextFieldsIcon,
  Title as TitleIcon,
  Subject as SubjectIcon,
  Notes as NotesIcon,
  Note as NoteIcon,
  NoteAdd as NoteAddIcon,
  PostAdd as PostAddIcon,
  Create as CreateIcon,
  CreateNewFolder as CreateNewFolderIcon,
  Folder as FolderIcon2,
  FolderOpen as FolderOpenIcon,
  FolderShared as FolderSharedIcon,
  FolderSpecial as FolderSpecialIcon,
  Archive as ArchiveIcon,
  Unarchive as UnarchiveIcon,
  Inbox as InboxIcon,
  Outbox as OutboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon2,
  Forward as ForwardIcon2,
  Reply as ReplyIcon2,
  ReplyAll as ReplyAllIcon,
  Undo as UndoIcon2,
  Redo as RedoIcon2,
  Refresh as RefreshIcon2,
  Sync as SyncIcon2,
  SyncAlt as SyncAltIcon,
  SyncDisabled as SyncDisabledIcon,
  SyncLock as SyncLockIcon,
  SyncProblem as SyncProblemIcon,
  Update as UpdateIcon2,
  Upgrade as UpgradeIcon,
  GetApp as GetAppIcon,
  Publish as PublishIcon,
  CloudUpload as CloudUploadIcon,
  CloudDownload as CloudDownloadIcon,
  FileUpload as FileUploadIcon,
  FileDownload as FileDownloadIcon,
  Backup as BackupIcon,
  Restore as RestoreIcon2,
  RestoreFromTrash as RestoreFromTrashIcon,
  RestorePage as RestorePageIcon,
  History as HistoryIcon2,
  HistoryToggleOff as HistoryToggleOffIcon,
  Schedule as ScheduleIcon2,
  ScheduleSend as ScheduleSendIcon,
  Snooze as SnoozeIcon,
  AlarmAdd as AlarmAddIcon,
  AlarmOn as AlarmOnIcon,
  AlarmOff as AlarmOffIcon,
  Timer as TimerIcon2,
  TimerOff as TimerOffIcon,
  Timelapse as TimelapseIcon2,
  MoreTime as MoreTimeIcon,
  AccessTime as AccessTimeIcon2,
  AccessTimeFilled as AccessTimeFilledIcon,
  AccessAlarm as AccessAlarmIcon2,
  AccessAlarms as AccessAlarmsIcon,
  AvTimer as AvTimerIcon,
  HourglassEmpty as HourglassEmptyIcon,
  HourglassFull as HourglassFullIcon,
  HourglassTop as HourglassTopIcon,
  HourglassBottom as HourglassBottomIcon,
  Update as UpdateIcon3,
  Pending as PendingIcon,
  PendingActions as PendingActionsIcon,
  Schedule as ScheduleIcon3,
  Event as EventIcon3,
  EventAvailable as EventAvailableIcon2,
  EventBusy as EventBusyIcon2,
  EventNote as EventNoteIcon2,
  EventSeat as EventSeatIcon,
  Today as TodayIcon3,
  DateRange as DateRangeIcon3,
  CalendarToday as CalendarTodayIcon,
  CalendarViewDay as CalendarViewDayIcon,
  CalendarViewWeek as CalendarViewWeekIcon,
  CalendarViewMonth as CalendarViewMonthIcon,
  EditCalendar as EditCalendarIcon,
  NextWeek as NextWeekIcon,
  Weekend as WeekendIcon2,
  WatchLater as WatchLaterIcon2,
  QueryBuilder as QueryBuilderIcon2,
  Autorenew as AutorenewIcon,
  Cached as CachedIcon,
  Loop as LoopIcon,
  Repeat as RepeatIcon,
  RepeatOne as RepeatOneIcon,
  RepeatOn as RepeatOnIcon,
  Shuffle as ShuffleIcon,
  ShuffleOn as ShuffleOnIcon,
  SkipNext as SkipNextIcon,
  SkipPrevious as SkipPreviousIcon,
  FastForward as FastForwardIcon,
  FastRewind as FastRewindIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon2,
  Stop as StopIcon2,
  Replay as ReplayIcon2,
  Replay10 as Replay10Icon,
  Replay30 as Replay30Icon,
  Forward10 as Forward10Icon,
  Forward30 as Forward30Icon,
  PlayCircleFilled as PlayCircleFilledIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  PauseCircleFilled as PauseCircleFilledIcon,
  PauseCircleOutline as PauseCircleOutlineIcon,
  StopCircle as StopCircleIcon,
  PlaylistAdd as PlaylistAddIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  PlaylistPlay as PlaylistPlayIcon,
  QueueMusic as QueueMusicIcon,
  Queue as QueueIcon,
  QueuePlayNext as QueuePlayNextIcon,
  AddToQueue as AddToQueueIcon,
  RemoveFromQueue as RemoveFromQueueIcon,
  ClearAll as ClearAllIcon,
  SelectAll as SelectAllIcon,
  Deselect as DeselectIcon,
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  IndeterminateCheckBox as IndeterminateCheckBoxIcon,
  RadioButtonChecked as RadioButtonCheckedIcon,
  RadioButtonUnchecked as RadioButtonUncheckedIcon,
  ToggleOn as ToggleOnIcon,
  ToggleOff as ToggleOffIcon,
  Star as StarIcon2,
  StarBorder as StarBorderIcon,
  StarHalf as StarHalfIcon,
  StarOutline as StarOutlineIcon,
  StarRate as StarRateIcon,
  Grade as GradeIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  BookmarkAdd as BookmarkAddIcon,
  BookmarkAdded as BookmarkAddedIcon,
  BookmarkRemove as BookmarkRemoveIcon,
  Bookmarks as BookmarksIcon,
  Label as LabelIcon,
  LabelImportant as LabelImportantIcon,
  LabelOff as LabelOffIcon,
  LabelOutline as LabelOutlineIcon,
  LocalOffer as LocalOfferIcon,
  Loyalty as LoyaltyIcon,
  CardMembership as CardMembershipIcon,
  CardTravel as CardTravelIcon,
  Redeem as RedeemIcon2,
  Gift as GiftIcon2,
  CardGiftcard as CardGiftcardIcon2,
  Celebration as CelebrationIcon2,
  Cake as CakeIcon2,
  Party as PartyIcon,
  Mood as MoodIcon,
  MoodBad as MoodBadIcon,
  SentimentDissatisfied as SentimentDissatisfiedIcon,
  SentimentNeutral as SentimentNeutralIcon,
  SentimentSatisfied as SentimentSatisfiedIcon,
  SentimentSatisfiedAlt as SentimentSatisfiedAltIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  SentimentVerySatisfied as SentimentVerySatisfiedIcon,
  EmojiEmotions as EmojiEmotionsIcon,
  EmojiEvents as EmojiEventsIcon,
  EmojiFlags as EmojiFlagsIcon,
  EmojiFoodBeverage as EmojiFoodBeverageIcon,
  EmojiNature as EmojiNatureIcon,
  EmojiObjects as EmojiObjectsIcon,
  EmojiPeople as EmojiPeopleIcon,
  EmojiSymbols as EmojiSymbolsIcon,
  EmojiTransportation as EmojiTransportationIcon,
  Face as FaceIcon,
  Face2 as Face2Icon,
  Face3 as Face3Icon,
  Face4 as Face4Icon,
  Face5 as Face5Icon,
  Face6 as Face6Icon,
  FaceRetouchingNatural as FaceRetouchingNaturalIcon,
  FaceRetouchingOff as FaceRetouchingOffIcon,
  TagFaces as TagFacesIcon,
  SickIcon,
  CoronavirusIcon,
  MasksIcon,
  VaccinesIcon,
  LocalPharmacyIcon,
  MedicalServicesIcon,
  LocalHospitalIcon,
  EmergencyIcon,
  LocalPoliceIcon,
  FireTruckIcon,
  AmbulanceIcon
} from '@mui/icons-material';

const CrisisInterventionSupport = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [crisisLevel, setCrisisLevel] = useState('none');
  const [emergencyDialog, setEmergencyDialog] = useState(false);
  const [supportDialog, setSupportDialog] = useState(false);
  const [crisisAssessment, setCrisisAssessment] = useState({
    currentMood: 5,
    stressLevel: 3,
    relationshipStrain: 4,
    supportNeeded: 'emotional',
    immediateRisk: false
  });
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'National Suicide Prevention Lifeline', number: '988', type: 'crisis', available: '24/7' },
    { id: 2, name: 'Crisis Text Line', number: 'Text HOME to 741741', type: 'text', available: '24/7' },
    { id: 3, name: 'National Domestic Violence Hotline', number: '1-800-799-7233', type: 'domestic', available: '24/7' },
    { id: 4, name: 'SAMHSA National Helpline', number: '1-800-662-4357', type: 'substance', available: '24/7' }
  ]);
  const [supportHistory, setSupportHistory] = useState([]);

  // Crisis Assessment Questions
  const crisisQuestions = [
    {
      id: 'safety',
      question: 'Do you feel safe right now?',
      type: 'boolean',
      critical: true
    },
    {
      id: 'harm',
      question: 'Are you having thoughts of hurting yourself or your partner?',
      type: 'boolean',
      critical: true
    },
    {
      id: 'support',
      question: 'Do you have someone you can talk to right now?',
      type: 'boolean',
      critical: false
    },
    {
      id: 'stress',
      question: 'On a scale of 1-10, how would you rate your current stress level?',
      type: 'scale',
      critical: false
    },
    {
      id: 'relationship',
      question: 'How would you describe your relationship situation right now?',
      type: 'multiple',
      options: ['Stable', 'Tense', 'Conflicted', 'Dangerous', 'Uncertain'],
      critical: false
    }
  ];

  // Support Resources
  const supportResources = [
    {
      id: 'immediate',
      title: 'Immediate Crisis Support',
      description: 'Get help right now if you\'re in immediate danger',
      resources: [
        { name: 'Call 911', description: 'For immediate physical danger', action: 'call', contact: '911' },
        { name: 'Crisis Hotline', description: 'Speak with a crisis counselor', action: 'call', contact: '988' },
        { name: 'Crisis Chat', description: 'Text-based crisis support', action: 'text', contact: '741741' },
        { name: 'Emergency Therapist', description: 'Connect with on-call therapist', action: 'video', contact: 'therapist' }
      ]
    },
    {
      id: 'emotional',
      title: 'Emotional Support',
      description: 'Resources for emotional distress and mental health support',
      resources: [
        { name: 'Peer Support Chat', description: 'Connect with others who understand', action: 'chat', contact: 'peer' },
        { name: 'Guided Meditation', description: 'Calming exercises and mindfulness', action: 'audio', contact: 'meditation' },
        { name: 'Emotional First Aid', description: 'Self-help techniques for emotional distress', action: 'guide', contact: 'guide' },
        { name: 'Support Groups', description: 'Join virtual support groups', action: 'group', contact: 'group' }
      ]
    },
    {
      id: 'relationship',
      title: 'Relationship Crisis Support',
      description: 'Specialized help for relationship emergencies and conflicts',
      resources: [
        { name: 'Couples Crisis Counselor', description: 'Emergency couples therapy session', action: 'video', contact: 'couples-therapist' },
        { name: 'Domestic Violence Support', description: 'Safety planning and resources', action: 'call', contact: '1-800-799-7233' },
        { name: 'Conflict De-escalation', description: 'Immediate conflict resolution techniques', action: 'guide', contact: 'conflict-guide' },
        { name: 'Safety Planning', description: 'Create a safety plan for dangerous situations', action: 'tool', contact: 'safety-plan' }
      ]
    },
    {
      id: 'practical',
      title: 'Practical Support',
      description: 'Practical assistance and resources for crisis situations',
      resources: [
        { name: 'Emergency Shelter', description: 'Find safe temporary housing', action: 'search', contact: 'shelter' },
        { name: 'Legal Aid', description: 'Emergency legal assistance', action: 'call', contact: 'legal-aid' },
        { name: 'Financial Emergency', description: 'Emergency financial assistance', action: 'resource', contact: 'financial' },
        { name: 'Transportation Help', description: 'Emergency transportation resources', action: 'resource', contact: 'transport' }
      ]
    }
  ];

  // Crisis Level Assessment
  const assessCrisisLevel = useCallback(() => {
    const { currentMood, stressLevel, relationshipStrain, immediateRisk } = crisisAssessment;
    
    if (immediateRisk || currentMood <= 2 || stressLevel >= 8) {
      return 'high';
    } else if (currentMood <= 4 || stressLevel >= 6 || relationshipStrain >= 7) {
      return 'medium';
    } else if (stressLevel >= 4 || relationshipStrain >= 5) {
      return 'low';
    }
    return 'none';
  }, [crisisAssessment]);

  useEffect(() => {
    setCrisisLevel(assessCrisisLevel());
  }, [crisisAssessment, assessCrisisLevel]);

  // Emergency Action Functions
  const triggerEmergencyProtocol = useCallback((type) => {
    const emergencyAction = {
      id: Date.now(),
      type: type,
      timestamp: new Date(),
      status: 'initiated',
      details: `Emergency protocol ${type} activated`
    };
    
    setSupportHistory(prev => [emergencyAction, ...prev]);
    
    // In a real app, this would trigger actual emergency protocols
    console.log(`Emergency protocol activated: ${type}`);
  }, []);

  const connectToSupport = useCallback((resourceType, contactMethod) => {
    const supportAction = {
      id: Date.now(),
      type: 'support-connection',
      resourceType: resourceType,
      contactMethod: contactMethod,
      timestamp: new Date(),
      status: 'connecting',
      details: `Connecting to ${resourceType} via ${contactMethod}`
    };
    
    setSupportHistory(prev => [supportAction, ...prev]);
    
    // In a real app, this would initiate the actual connection
    console.log(`Connecting to support: ${resourceType} via ${contactMethod}`);
  }, []);

  const renderCrisisAssessment = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AssessmentIcon color="primary" />
        Crisis Assessment & Safety Check
      </Typography>
      
      <Alert 
        severity={crisisLevel === 'high' ? 'error' : crisisLevel === 'medium' ? 'warning' : crisisLevel === 'low' ? 'info' : 'success'} 
        sx={{ mb: 3 }}
      >
        {crisisLevel === 'high' && 'High crisis level detected. Immediate support recommended.'}
        {crisisLevel === 'medium' && 'Moderate stress detected. Consider reaching out for support.'}
        {crisisLevel === 'low' && 'Some stress indicators present. Self-care and monitoring recommended.'}
        {crisisLevel === 'none' && 'No immediate crisis indicators detected. Continue regular self-care.'}
      </Alert>

      {/* Crisis Level Indicator */}
      <Card sx={{ 
        mb: 4, 
        background: crisisLevel === 'high' ? 'linear-gradient(135deg, #ff5722 0%, #f44336 100%)' : 
                   crisisLevel === 'medium' ? 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)' :
                   crisisLevel === 'low' ? 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)' :
                   'linear-gradient(135deg, #4caf50 0%, #388e3c 100%)',
        color: 'white'
      }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Avatar sx={{ width: 80, height: 80, bgcolor: 'rgba(255,255,255,0.2)', mx: 'auto', mb: 2 }}>
            {crisisLevel === 'high' ? <EmergencyIcon sx={{ fontSize: 40 }} /> :
             crisisLevel === 'medium' ? <WarningIcon sx={{ fontSize: 40 }} /> :
             crisisLevel === 'low' ? <InfoIcon sx={{ fontSize: 40 }} /> :
             <CheckIcon sx={{ fontSize: 40 }} />}
          </Avatar>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            {crisisLevel === 'high' ? 'HIGH CRISIS' :
             crisisLevel === 'medium' ? 'MODERATE STRESS' :
             crisisLevel === 'low' ? 'LOW STRESS' :
             'STABLE'}
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Current Safety & Wellness Status
          </Typography>
        </CardContent>
      </Card>

      {/* Quick Assessment */}
      <Typography variant="h6" gutterBottom>
        Quick Safety Assessment
      </Typography>
      
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Current Mood (1-10)
              </Typography>
              <Slider
                value={crisisAssessment.currentMood}
                onChange={(e, value) => setCrisisAssessment(prev => ({ ...prev, currentMood: value }))}
                min={1}
                max={10}
                step={1}
                marks
                valueLabelDisplay="on"
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                1 = Very Low, 10 = Very High
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Stress Level (1-10)
              </Typography>
              <Slider
                value={crisisAssessment.stressLevel}
                onChange={(e, value) => setCrisisAssessment(prev => ({ ...prev, stressLevel: value }))}
                min={1}
                max={10}
                step={1}
                marks
                valueLabelDisplay="on"
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                1 = Very Low, 10 = Extremely High
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Relationship Strain (1-10)
              </Typography>
              <Slider
                value={crisisAssessment.relationshipStrain}
                onChange={(e, value) => setCrisisAssessment(prev => ({ ...prev, relationshipStrain: value }))}
                min={1}
                max={10}
                step={1}
                marks
                valueLabelDisplay="on"
                sx={{ mb: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                1 = No Strain, 10 = Severe Strain
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Support Needed
              </Typography>
              <FormControl fullWidth>
                <Select
                  value={crisisAssessment.supportNeeded}
                  onChange={(e) => setCrisisAssessment(prev => ({ ...prev, supportNeeded: e.target.value }))}
                >
                  <MenuItem value="none">No Support Needed</MenuItem>
                  <MenuItem value="emotional">Emotional Support</MenuItem>
                  <MenuItem value="practical">Practical Help</MenuItem>
                  <MenuItem value="professional">Professional Intervention</MenuItem>
                  <MenuItem value="emergency">Emergency Assistance</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Immediate Risk Check */}
      <Card variant="outlined" sx={{ mb: 3, border: crisisAssessment.immediateRisk ? '2px solid red' : undefined }}>
        <CardContent>
          <FormControlLabel
            control={
              <Switch
                checked={crisisAssessment.immediateRisk}
                onChange={(e) => setCrisisAssessment(prev => ({ ...prev, immediateRisk: e.target.checked }))}
                color="error"
              />
            }
            label={
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  I am in immediate danger or having thoughts of self-harm
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check this if you need immediate emergency assistance
                </Typography>
              </Box>
            }
          />
        </CardContent>
      </Card>

      {/* Emergency Actions */}
      {(crisisLevel === 'high' || crisisAssessment.immediateRisk) && (
        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Immediate Action Required
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="error"
              startIcon={<PhoneIcon />}
              onClick={() => triggerEmergencyProtocol('911')}
            >
              Call 911
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<SOSIcon />}
              onClick={() => triggerEmergencyProtocol('crisis-line')}
            >
              Crisis Hotline
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<ChatIcon />}
              onClick={() => triggerEmergencyProtocol('crisis-chat')}
            >
              Crisis Chat
            </Button>
          </Box>
        </Alert>
      )}
    </Box>
  );

  const renderEmergencyResources = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <EmergencyIcon color="primary" />
        Emergency Resources & Hotlines
      </Typography>
      
      <Alert severity="error" sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          🚨 If you are in immediate danger, call 911 immediately
        </Typography>
        <Typography>
          These resources are available 24/7 for crisis support and emergency assistance.
        </Typography>
      </Alert>

      {/* Emergency Contacts */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Crisis Hotlines & Emergency Contacts
      </Typography>
      
      <Grid container spacing={3}>
        {emergencyContacts.map((contact) => (
          <Grid item xs={12} md={6} key={contact.id}>
            <Card 
              variant="outlined" 
              sx={{ 
                height: '100%',
                border: contact.type === 'crisis' ? '2px solid red' : undefined,
                '&:hover': { boxShadow: 3 }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ 
                    bgcolor: contact.type === 'crisis' ? 'error.main' : 
                            contact.type === 'domestic' ? 'warning.main' : 'primary.main' 
                  }}>
                    {contact.type === 'crisis' ? <SOSIcon /> :
                     contact.type === 'text' ? <ChatIcon /> :
                     contact.type === 'domestic' ? <ShieldIcon /> :
                     <SupportIcon />}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {contact.name}
                    </Typography>
                    <Chip 
                      label={contact.available} 
                      color="success" 
                      size="small" 
                    />
                  </Box>
                </Box>
                
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                  {contact.number}
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    color={contact.type === 'crisis' ? 'error' : 'primary'}
                    startIcon={contact.type === 'text' ? <ChatIcon /> : <PhoneIcon />}
                    fullWidth
                    onClick={() => connectToSupport(contact.name, contact.type)}
                  >
                    {contact.type === 'text' ? 'Send Text' : 'Call Now'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Support Categories */}
      <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
        Support Resources by Category
      </Typography>
      
      {supportResources.map((category) => (
        <Card key={category.id} variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {category.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {category.description}
            </Typography>
            
            <Grid container spacing={2}>
              {category.resources.map((resource, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card variant="outlined" sx={{ height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        {resource.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {resource.description}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={
                          resource.action === 'call' ? <PhoneIcon /> :
                          resource.action === 'text' ? <ChatIcon /> :
                          resource.action === 'video' ? <VideoIcon /> :
                          resource.action === 'chat' ? <ForumIcon /> :
                          <SupportIcon />
                        }
                        onClick={() => connectToSupport(resource.name, resource.action)}
                      >
                        {resource.action === 'call' ? 'Call' :
                         resource.action === 'text' ? 'Text' :
                         resource.action === 'video' ? 'Video Call' :
                         resource.action === 'chat' ? 'Chat' :
                         'Access'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderSafetyPlanning = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SafetyIcon color="primary" />
        Safety Planning & Crisis Prevention
      </Typography>
      
      <Alert severity="info" sx={{ mb: 3 }}>
        Create a personalized safety plan to help you stay safe during crisis situations. 
        This plan will help you recognize warning signs and know what steps to take.
      </Alert>

      {/* Safety Plan Components */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Warning Signs
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Identify early warning signs that indicate you might be entering a crisis
              </Typography>
              
              <List dense>
                {[
                  'Increased arguments or tension',
                  'Feeling overwhelmed or hopeless',
                  'Isolation from friends and family',
                  'Changes in sleep or eating patterns',
                  'Increased substance use',
                  'Thoughts of self-harm or suicide'
                ].map((sign, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <WarningIcon color="warning" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={sign} />
                  </ListItem>
                ))}
              </List>
              
              <Button variant="outlined" startIcon={<EditIcon />} fullWidth sx={{ mt: 2 }}>
                Customize Warning Signs
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Coping Strategies
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Healthy ways to cope when you notice warning signs
              </Typography>
              
              <List dense>
                {[
                  'Deep breathing exercises',
                  'Call a trusted friend or family member',
                  'Go for a walk or exercise',
                  'Practice mindfulness or meditation',
                  'Write in a journal',
                  'Listen to calming music'
                ].map((strategy, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <HealingIcon color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={strategy} />
                  </ListItem>
                ))}
              </List>
              
              <Button variant="outlined" startIcon={<EditIcon />} fullWidth sx={{ mt: 2 }}>
                Add Personal Strategies
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Support Network
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                People you can contact for support during difficult times
              </Typography>
              
              <List dense>
                {[
                  { name: 'Best Friend - Sarah', phone: '(555) 123-4567', available: 'Anytime' },
                  { name: 'Family Member - Mom', phone: '(555) 987-6543', available: 'Evenings' },
                  { name: 'Therapist - Dr. Johnson', phone: '(555) 246-8135', available: 'Business Hours' },
                  { name: 'Crisis Hotline', phone: '988', available: '24/7' }
                ].map((contact, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <PersonIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={contact.name}
                      secondary={`${contact.phone} • ${contact.available}`}
                    />
                  </ListItem>
                ))}
              </List>
              
              <Button variant="outlined" startIcon={<AddIcon />} fullWidth sx={{ mt: 2 }}>
                Add Support Contact
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Safe Environment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Steps to make your environment safer during crisis
              </Typography>
              
              <List dense>
                {[
                  'Remove or secure harmful objects',
                  'Identify safe spaces in your home',
                  'Know your exit routes',
                  'Keep important documents accessible',
                  'Have emergency bag prepared',
                  'Know location of nearest safe shelter'
                ].map((step, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ShieldIcon color="info" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
              
              <Button variant="outlined" startIcon={<EditIcon />} fullWidth sx={{ mt: 2 }}>
                Customize Safety Steps
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Emergency Action Plan */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Emergency Action Plan
        </Typography>
        
        <Card variant="outlined">
          <CardContent>
            <Stepper orientation="vertical">
              {[
                {
                  label: 'Immediate Safety',
                  description: 'If in immediate danger, call 911 or go to nearest emergency room'
                },
                {
                  label: 'Crisis Support',
                  description: 'Contact crisis hotline (988) or crisis text line (741741)'
                },
                {
                  label: 'Support Network',
                  description: 'Reach out to trusted friend, family member, or therapist'
                },
                {
                  label: 'Safe Environment',
                  description: 'Go to a safe location and remove access to harmful objects'
                },
                {
                  label: 'Professional Help',
                  description: 'Schedule emergency therapy session or visit mental health professional'
                },
                {
                  label: 'Follow-up',
                  description: 'Create plan for ongoing support and crisis prevention'
                }
              ].map((step, index) => (
                <Step key={index} active>
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent>
                    <Typography variant="body2">{step.description}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const renderSupportHistory = () => (
    <Box>
      <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <HistoryIcon color="primary" />
        Support History & Crisis Log
      </Typography>
      
      <Alert severity="success" sx={{ mb: 3 }}>
        Track your crisis interventions and support usage to identify patterns 
        and improve your crisis prevention strategies.
      </Alert>

      {supportHistory.length === 0 ? (
        <Card variant="outlined">
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <HistoryIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No Support History
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your crisis interventions and support usage will appear here.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <List>
          {supportHistory.map((entry) => (
            <ListItem key={entry.id} divider>
              <ListItemIcon>
                <Avatar sx={{ 
                  bgcolor: entry.type === 'emergency' ? 'error.main' : 
                          entry.type === 'support-connection' ? 'primary.main' : 'success.main' 
                }}>
                  {entry.type === 'emergency' ? <EmergencyIcon /> :
                   entry.type === 'support-connection' ? <SupportIcon /> :
                   <CheckIcon />}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {entry.type === 'emergency' ? 'Emergency Protocol' : 
                       entry.type === 'support-connection' ? 'Support Connection' : 
                       'Support Action'}
                    </Typography>
                    <Chip 
                      label={entry.status} 
                      color={entry.status === 'completed' ? 'success' : 'primary'} 
                      size="small" 
                    />
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(entry.timestamp).toLocaleString()}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {entry.details}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}
        </List>
      )}

      {/* Crisis Statistics */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Crisis Prevention Statistics
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                  {supportHistory.length}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Support Interventions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                  12
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Days Since Last Crisis
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>
                  3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Coping Strategies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Card variant="outlined">
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'info.main' }}>
                  85%
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Crisis Prevention Rate
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
          🆘 Crisis Intervention & Support
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Immediate crisis support, emergency resources, and safety planning tools. 
          Get help when you need it most with 24/7 access to professional crisis intervention.
        </Typography>

        {/* Crisis Alert Banner */}
        {(crisisLevel === 'high' || crisisAssessment.immediateRisk) && (
          <Alert severity="error" sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              🚨 CRISIS DETECTED - IMMEDIATE ACTION RECOMMENDED
            </Typography>
            <Typography sx={{ mb: 2 }}>
              Based on your assessment, you may need immediate support. Please consider contacting emergency services or a crisis hotline.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="error"
                startIcon={<PhoneIcon />}
                onClick={() => window.open('tel:911')}
              >
                Call 911
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<SOSIcon />}
                onClick={() => window.open('tel:988')}
              >
                Crisis Hotline (988)
              </Button>
              <Button
                variant="contained"
                color="error"
                startIcon={<ChatIcon />}
                onClick={() => window.open('sms:741741')}
              >
                Crisis Text (741741)
              </Button>
            </Box>
          </Alert>
        )}
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
            label="Crisis Assessment" 
            icon={<AssessmentIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Emergency Resources" 
            icon={<EmergencyIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Safety Planning" 
            icon={<SafetyIcon />} 
            iconPosition="start"
          />
          <Tab 
            label="Support History" 
            icon={<HistoryIcon />} 
            iconPosition="start"
          />
        </Tabs>

        <Box sx={{ p: 4 }}>
          {activeTab === 0 && renderCrisisAssessment()}
          {activeTab === 1 && renderEmergencyResources()}
          {activeTab === 2 && renderSafetyPlanning()}
          {activeTab === 3 && renderSupportHistory()}
        </Box>
      </Paper>

      {/* Quick Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<HelpIcon />}
          >
            Crisis Guide
          </Button>
          <Button
            variant="outlined"
            startIcon={<PrivacyIcon />}
          >
            Privacy & Safety
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<SafetyIcon />}
            onClick={() => setActiveTab(2)}
          >
            Safety Plan
          </Button>
          <Button 
            variant="contained" 
            size="large"
            color="error"
            startIcon={<EmergencyIcon />}
            onClick={() => setActiveTab(1)}
            sx={{ minWidth: 200 }}
          >
            Emergency Help
          </Button>
        </Box>
      </Box>

      {/* Crisis Status Summary */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Current Crisis Status
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={crisisLevel === 'high' ? 100 : crisisLevel === 'medium' ? 60 : crisisLevel === 'low' ? 30 : 10} 
          color={crisisLevel === 'high' ? 'error' : crisisLevel === 'medium' ? 'warning' : 'success'}
          sx={{ height: 8, borderRadius: 4, mb: 1 }}
        />
        <Typography variant="body2" color="text.secondary">
          {crisisLevel.toUpperCase()} Crisis Level | {supportHistory.length} Support Interventions | 24/7 Help Available
        </Typography>
      </Box>
    </Container>
  );
};

export default CrisisInterventionSupport;

