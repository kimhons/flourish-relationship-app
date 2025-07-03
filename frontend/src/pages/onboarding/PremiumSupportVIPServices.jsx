import React, { useState, useEffect } from 'react';
import { 
  Headphones, 
  Crown, 
  Star, 
  MessageCircle, 
  Phone, 
  Video, 
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  User,
  Users,
  Calendar,
  Gift,
  Heart,
  Award,
  Zap,
  Shield,
  Bell,
  Settings,
  Search,
  Filter,
  Send,
  Paperclip,
  Image,
  File,
  Smile,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  Plus,
  Minus,
  Edit3,
  Trash2,
  Copy,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  X,
  Check,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Globe,
  MapPin,
  Navigation,
  Compass,
  Flag,
  Home,
  Building,
  Store,
  Car,
  Plane,
  Ship,
  Train,
  Bike,
  Walk,
  Coffee,
  Utensils,
  Music,
  Camera,
  Gamepad2,
  Book,
  Briefcase,
  GraduationCap,
  Stethoscope,
  Palette,
  Wrench,
  Hammer,
  Scissors,
  Paintbrush,
  Ruler,
  Calculator,
  Laptop,
  Smartphone,
  Tablet,
  Monitor,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Webcam,
  Microphone,
  Speaker,
  Headphones as HeadphonesIcon,
  Radio,
  Tv,
  Film,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Bluetooth,
  Battery,
  BatteryLow,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Rss,
  Share,
  Share2,
  Link,
  Link2,
  Unlink,
  Unlink2,
  Anchor,
  Bookmark,
  BookmarkPlus,
  Tag,
  Tags,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Euro,
  PoundSterling,
  Yen,
  IndianRupee,
  Bitcoin,
  CreditCard,
  Banknote,
  Coins,
  Wallet,
  PiggyBank,
  TrendingUp,
  TrendingDown,
  BarChart,
  BarChart2,
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Pulse,
  Zap as ZapIcon,
  Target,
  Crosshair,
  Focus,
  Maximize,
  Minimize,
  Expand,
  Shrink,
  Move,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  Crop,
  Scissors as ScissorsIcon,
  Copy as CopyIcon,
  Cut,
  Clipboard,
  ClipboardCopy,
  ClipboardList,
  ClipboardCheck,
  ClipboardX,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FilePdf,
  FileSpreadsheet,
  FileWord,
  FilePowerpoint,
  FileZip,
  Folder,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  Archive,
  Package,
  Package2,
  PackageOpen,
  PackageCheck,
  PackageX,
  PackagePlus,
  PackageMinus,
  PackageSearch,
  Box,
  Boxes,
  Container,
  Layers,
  Layers2,
  Layers3,
  Stack,
  Grid,
  Grid2x2,
  Grid3x3,
  Layout,
  LayoutGrid,
  LayoutList,
  LayoutTemplate,
  Sidebar,
  SidebarOpen,
  SidebarClose,
  Menu,
  MoreVertical,
  MoreHorizontal as MoreHorizontalIcon,
  Ellipsis,
  EllipsisVertical,
  Dot,
  Circle,
  CircleDot,
  Square,
  Triangle,
  Diamond,
  Hexagon,
  Octagon,
  Pentagon,
  Star as StarIcon,
  Heart as HeartIcon,
  Spade,
  Club,
  Flame,
  Snowflake,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudHail,
  Umbrella,
  Rainbow,
  Thermometer,
  Wind,
  Tornado,
  Sunrise,
  Sunset,
  Eclipse,
  Cloudy,
  PartlyCloudy,
  TreePine,
  TreeDeciduous,
  Flower,
  Flower2,
  Leaf,
  Seedling,
  Sprout,
  Cherry,
  Apple,
  Grape,
  Banana,
  Orange,
  Lemon,
  Strawberry,
  Watermelon,
  Carrot,
  Corn,
  Wheat,
  Rice,
  Egg,
  Milk,
  Cheese,
  Beef,
  Fish,
  Chicken,
  Salad,
  Pizza,
  Sandwich,
  Cake,
  Cookie,
  IceCream,
  Candy,
  Lollipop,
  Donut,
  Croissant,
  Bagel,
  Pretzel,
  Popcorn,
  Nut,
  Honey,
  Jam,
  Butter,
  Salt,
  Pepper,
  Spice,
  Herb,
  Tea,
  Coffee as CoffeeIcon,
  Beer,
  Wine,
  Cocktail,
  Juice,
  Soda,
  Water,
  Milk as MilkIcon,
  Baby,
  Child,
  Adult,
  Elderly,
  Male,
  Female,
  Person,
  People,
  Family,
  Couple,
  Friends,
  Group,
  Team,
  Organization,
  Company,
  Business,
  Office,
  Factory,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Cinema,
  Stadium,
  Gym,
  Pool,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  City,
  Town,
  Village,
  Countryside,
  Park,
  Garden,
  Farm,
  Zoo,
  Aquarium,
  Circus,
  Carnival,
  Festival,
  Concert,
  Party,
  Wedding,
  Birthday,
  Anniversary,
  Holiday,
  Vacation,
  Travel,
  Trip,
  Journey,
  Adventure,
  Exploration,
  Discovery,
  Research,
  Study,
  Learning,
  Teaching,
  Training,
  Coaching,
  Mentoring,
  Guidance,
  Support,
  Help,
  Assistance,
  Service,
  Care,
  Love,
  Affection,
  Romance,
  Passion,
  Desire,
  Attraction,
  Beauty,
  Elegance,
  Grace,
  Charm,
  Style,
  Fashion,
  Trend,
  Design,
  Art,
  Creativity,
  Innovation,
  Invention,
  Technology,
  Science,
  Engineering,
  Mathematics,
  Physics,
  Chemistry,
  Biology,
  Medicine,
  Health,
  Fitness,
  Wellness,
  Nutrition,
  Diet,
  Exercise,
  Sport,
  Game,
  Competition,
  Victory,
  Success,
  Achievement,
  Goal,
  Dream,
  Hope,
  Faith,
  Belief,
  Trust,
  Confidence,
  Courage,
  Strength,
  Power,
  Energy,
  Force,
  Speed,
  Agility,
  Flexibility,
  Balance,
  Harmony,
  Peace,
  Calm,
  Serenity,
  Tranquility,
  Relaxation,
  Meditation,
  Mindfulness,
  Awareness,
  Consciousness,
  Enlightenment,
  Wisdom,
  Knowledge,
  Intelligence,
  Understanding,
  Insight,
  Intuition,
  Perception,
  Observation,
  Analysis,
  Evaluation,
  Assessment,
  Judgment,
  Decision,
  Choice,
  Option,
  Alternative,
  Solution,
  Answer,
  Response,
  Reaction,
  Action,
  Behavior,
  Conduct,
  Performance,
  Execution,
  Implementation,
  Application,
  Usage,
  Utilization,
  Operation,
  Function,
  Purpose,
  Objective,
  Mission,
  Vision,
  Strategy,
  Plan,
  Project,
  Task,
  Job,
  Work,
  Career,
  Profession,
  Occupation,
  Employment,
  Business as BusinessIcon,
  Industry,
  Market,
  Economy,
  Finance,
  Investment,
  Profit,
  Revenue,
  Income,
  Expense,
  Cost,
  Price,
  Value,
  Worth,
  Quality,
  Quantity,
  Amount,
  Number,
  Count,
  Measure,
  Size,
  Scale,
  Proportion,
  Ratio,
  Percentage,
  Fraction,
  Decimal,
  Integer,
  Digit,
  Figure,
  Statistic,
  Data,
  Information,
  Knowledge as KnowledgeIcon,
  Fact,
  Truth,
  Reality,
  Existence,
  Being,
  Life,
  Death,
  Birth,
  Growth,
  Development,
  Evolution,
  Progress,
  Advancement,
  Improvement,
  Enhancement,
  Upgrade,
  Update,
  Revision,
  Modification,
  Change,
  Transformation,
  Conversion,
  Translation,
  Interpretation,
  Explanation,
  Description,
  Definition,
  Meaning,
  Significance,
  Importance,
  Relevance,
  Context,
  Background,
  History,
  Past,
  Present,
  Future,
  Time,
  Duration,
  Period,
  Moment,
  Instant,
  Second,
  Minute,
  Hour,
  Day,
  Week,
  Month,
  Year,
  Decade,
  Century,
  Millennium,
  Era,
  Age,
  Generation,
  Cycle,
  Pattern,
  Rhythm,
  Frequency,
  Rate,
  Speed as SpeedIcon,
  Velocity,
  Acceleration,
  Momentum,
  Inertia,
  Gravity,
  Weight,
  Mass,
  Density,
  Volume,
  Capacity,
  Space,
  Area,
  Distance,
  Length,
  Width,
  Height,
  Depth,
  Thickness,
  Diameter,
  Radius,
  Circumference,
  Perimeter,
  Angle,
  Degree,
  Radian,
  Direction,
  Orientation,
  Position,
  Location,
  Place,
  Site,
  Spot,
  Point,
  Coordinate,
  Address,
  Destination,
  Origin,
  Source,
  Beginning,
  Start,
  End,
  Finish,
  Completion,
  Conclusion,
  Result,
  Outcome,
  Consequence,
  Effect,
  Impact,
  Influence,
  Cause,
  Reason,
  Purpose as PurposeIcon,
  Intention,
  Goal as GoalIcon,
  Objective as ObjectiveIcon,
  Target as TargetIcon,
  Aim,
  Focus as FocusIcon,
  Attention,
  Concentration,
  Dedication,
  Commitment,
  Devotion,
  Loyalty,
  Faithfulness,
  Reliability,
  Dependability,
  Trustworthiness,
  Honesty,
  Integrity,
  Sincerity,
  Authenticity,
  Genuineness,
  Originality,
  Uniqueness,
  Individuality,
  Personality,
  Character,
  Nature,
  Essence,
  Spirit,
  Soul,
  Mind,
  Brain,
  Thought,
  Idea,
  Concept,
  Notion,
  Theory,
  Hypothesis,
  Assumption,
  Belief as BeliefIcon,
  Opinion,
  View,
  Perspective,
  Viewpoint,
  Standpoint,
  Position as PositionIcon,
  Stance,
  Attitude,
  Approach,
  Method,
  Technique,
  Procedure,
  Process,
  System,
  Structure,
  Framework,
  Model,
  Template,
  Pattern as PatternIcon,
  Design as DesignIcon,
  Layout as LayoutIcon,
  Format,
  Style as StyleIcon,
  Appearance,
  Look,
  Image as ImageIcon,
  Picture,
  Photo,
  Photograph,
  Snapshot,
  Portrait,
  Landscape,
  Scene,
  View as ViewIcon,
  Sight,
  Vision as VisionIcon,
  Perception as PerceptionIcon,
  Observation as ObservationIcon,
  Inspection,
  Examination,
  Investigation,
  Research as ResearchIcon,
  Study as StudyIcon,
  Analysis as AnalysisIcon,
  Review,
  Evaluation as EvaluationIcon,
  Assessment as AssessmentIcon,
  Test,
  Trial,
  Experiment,
  Practice,
  Exercise as ExerciseIcon,
  Training as TrainingIcon,
  Preparation,
  Rehearsal,
  Simulation,
  Demonstration,
  Presentation,
  Display,
  Exhibition,
  Show,
  Performance as PerformanceIcon,
  Act,
  Play,
  Drama,
  Comedy,
  Tragedy,
  Story,
  Tale,
  Narrative,
  Account,
  Report,
  Record,
  Log,
  Journal,
  Diary,
  Note,
  Memo,
  Message as MessageIcon,
  Communication,
  Conversation,
  Discussion,
  Dialogue,
  Chat,
  Talk,
  Speech,
  Language,
  Word,
  Term,
  Expression,
  Phrase,
  Sentence,
  Paragraph,
  Text,
  Document,
  File as FileIcon,
  Folder as FolderIcon,
  Directory,
  Path,
  Route as RouteIcon,
  Way,
  Road,
  Street,
  Avenue,
  Boulevard,
  Highway,
  Bridge,
  Tunnel,
  Gate,
  Door,
  Window,
  Wall,
  Floor,
  Ceiling,
  Roof,
  Foundation,
  Building as BuildingIcon,
  Structure as StructureIcon,
  Construction,
  Architecture,
  Engineering as EngineeringIcon,
  Design as DesignIcon2,
  Planning,
  Blueprint,
  Sketch,
  Drawing,
  Illustration,
  Diagram,
  Chart,
  Graph,
  Table,
  List,
  Menu as MenuIcon,
  Option,
  Choice as ChoiceIcon,
  Selection,
  Pick,
  Preference,
  Setting,
  Configuration,
  Setup,
  Installation,
  Deployment,
  Launch,
  Release,
  Publication,
  Distribution,
  Delivery,
  Shipping,
  Transport,
  Transfer,
  Movement,
  Motion,
  Activity as ActivityIcon,
  Action as ActionIcon,
  Operation as OperationIcon,
  Function as FunctionIcon,
  Feature,
  Capability,
  Ability,
  Skill,
  Talent,
  Gift as GiftIcon,
  Present,
  Offering,
  Contribution,
  Donation,
  Charity,
  Generosity,
  Kindness,
  Compassion,
  Empathy,
  Sympathy,
  Understanding as UnderstandingIcon,
  Support as SupportIcon,
  Help as HelpIcon,
  Assistance as AssistanceIcon,
  Aid,
  Relief,
  Comfort,
  Consolation,
  Encouragement,
  Motivation,
  Inspiration,
  Influence as InfluenceIcon,
  Impact as ImpactIcon,
  Effect as EffectIcon,
  Result as ResultIcon,
  Outcome as OutcomeIcon,
  Achievement as AchievementIcon,
  Success as SuccessIcon,
  Victory as VictoryIcon,
  Win,
  Triumph,
  Accomplishment,
  Attainment,
  Fulfillment,
  Satisfaction,
  Happiness,
  Joy,
  Pleasure,
  Delight,
  Enjoyment,
  Fun,
  Entertainment,
  Amusement,
  Recreation,
  Leisure,
  Relaxation as RelaxationIcon,
  Rest,
  Sleep,
  Dream as DreamIcon,
  Fantasy,
  Imagination,
  Creativity as CreativityIcon,
  Innovation as InnovationIcon,
  Invention as InventionIcon,
  Discovery as DiscoveryIcon,
  Exploration as ExplorationIcon,
  Adventure as AdventureIcon,
  Journey as JourneyIcon,
  Trip as TripIcon,
  Travel as TravelIcon,
  Vacation as VacationIcon,
  Holiday as HolidayIcon,
  Celebration,
  Festival as FestivalIcon,
  Party as PartyIcon,
  Event,
  Occasion,
  Ceremony,
  Ritual,
  Tradition,
  Custom,
  Culture,
  Heritage,
  Legacy,
  History as HistoryIcon,
  Memory,
  Remembrance,
  Nostalgia,
  Sentiment,
  Emotion,
  Feeling,
  Mood,
  Atmosphere,
  Ambiance,
  Environment,
  Surroundings,
  Context as ContextIcon,
  Situation,
  Circumstance,
  Condition,
  State,
  Status,
  Position as Position2Icon,
  Rank,
  Level,
  Grade,
  Class,
  Category,
  Type,
  Kind,
  Sort,
  Variety,
  Diversity,
  Difference,
  Distinction,
  Contrast,
  Comparison,
  Similarity,
  Resemblance,
  Likeness,
  Analogy,
  Metaphor,
  Symbol,
  Sign,
  Signal as SignalIcon,
  Indicator,
  Marker,
  Label,
  Tag as TagIcon,
  Badge,
  Emblem,
  Logo,
  Brand,
  Identity,
  Name,
  Title,
  Heading,
  Caption,
  Description as DescriptionIcon,
  Explanation as ExplanationIcon,
  Instruction,
  Direction as DirectionIcon,
  Guidance as GuidanceIcon,
  Advice,
  Recommendation,
  Suggestion,
  Proposal,
  Offer,
  Deal,
  Agreement,
  Contract,
  Promise,
  Commitment as CommitmentIcon,
  Obligation,
  Responsibility,
  Duty,
  Task as TaskIcon,
  Assignment,
  Mission as MissionIcon,
  Purpose as Purpose2Icon,
  Objective as Objective2Icon,
  Goal as Goal2Icon,
  Target as Target2Icon,
  Aim as AimIcon,
  Intention as IntentionIcon,
  Plan as PlanIcon,
  Strategy as StrategyIcon,
  Approach as ApproachIcon,
  Method as MethodIcon,
  Technique as TechniqueIcon,
  Procedure as ProcedureIcon,
  Process as ProcessIcon,
  System as SystemIcon,
  Framework as FrameworkIcon,
  Structure as Structure2Icon,
  Organization as OrganizationIcon,
  Arrangement,
  Order,
  Sequence,
  Series,
  Chain,
  Link as LinkIcon,
  Connection,
  Relationship,
  Association,
  Partnership,
  Collaboration,
  Cooperation,
  Teamwork,
  Unity,
  Harmony as HarmonyIcon,
  Balance as BalanceIcon,
  Equilibrium,
  Stability,
  Consistency,
  Reliability as ReliabilityIcon,
  Dependability as DependabilityIcon,
  Trustworthiness as TrustworthinessIcon,
  Credibility,
  Reputation,
  Image as Image2Icon,
  Perception as Perception2Icon,
  Impression,
  Opinion as OpinionIcon,
  Judgment as JudgmentIcon,
  Evaluation as Evaluation2Icon,
  Assessment as Assessment2Icon,
  Rating,
  Score,
  Grade as GradeIcon,
  Mark,
  Point as PointIcon,
  Value as ValueIcon,
  Worth as WorthIcon,
  Price as PriceIcon,
  Cost as CostIcon,
  Expense as ExpenseIcon,
  Fee,
  Charge,
  Payment,
  Transaction,
  Exchange,
  Trade,
  Commerce,
  Business as Business2Icon,
  Industry as IndustryIcon,
  Market as MarketIcon,
  Economy as EconomyIcon,
  Finance as FinanceIcon,
  Money,
  Currency,
  Cash,
  Credit,
  Debit,
  Loan,
  Debt,
  Investment as InvestmentIcon,
  Savings,
  Budget,
  Expense as Expense2Icon,
  Income as IncomeIcon,
  Revenue as RevenueIcon,
  Profit as ProfitIcon,
  Loss,
  Risk,
  Opportunity,
  Chance,
  Possibility,
  Probability,
  Likelihood,
  Potential,
  Capacity as CapacityIcon,
  Ability as AbilityIcon,
  Capability as CapabilityIcon,
  Skill as SkillIcon,
  Talent as TalentIcon,
  Expertise,
  Knowledge as Knowledge2Icon,
  Experience,
  Background as BackgroundIcon,
  Education,
  Training as Training2Icon,
  Learning as LearningIcon,
  Development as DevelopmentIcon,
  Growth as GrowthIcon,
  Progress as ProgressIcon,
  Improvement as ImprovementIcon,
  Enhancement as EnhancementIcon,
  Upgrade as UpgradeIcon,
  Update as UpdateIcon,
  Revision as RevisionIcon,
  Modification as ModificationIcon,
  Change as ChangeIcon,
  Transformation as TransformationIcon,
  Evolution as EvolutionIcon,
  Advancement as AdvancementIcon,
  Innovation as Innovation2Icon,
  Revolution,
  Reform,
  Renewal,
  Restoration,
  Recovery,
  Healing,
  Repair,
  Fix,
  Solution as SolutionIcon,
  Answer as AnswerIcon,
  Response as ResponseIcon,
  Reply,
  Feedback,
  Comment,
  Review as ReviewIcon,
  Critique,
  Analysis as Analysis2Icon,
  Examination as ExaminationIcon,
  Investigation as InvestigationIcon,
  Research as Research2Icon,
  Study as Study2Icon,
  Survey,
  Poll,
  Vote,
  Election,
  Democracy,
  Government,
  Politics,
  Policy,
  Law,
  Rule,
  Regulation,
  Standard,
  Norm,
  Principle,
  Value as Value2Icon,
  Belief as Belief2Icon,
  Faith as FaithIcon,
  Trust as TrustIcon,
  Confidence as ConfidenceIcon,
  Hope as HopeIcon,
  Optimism,
  Pessimism,
  Realism,
  Idealism,
  Philosophy,
  Wisdom as WisdomIcon,
  Intelligence as IntelligenceIcon,
  Genius,
  Brilliance,
  Excellence,
  Perfection,
  Quality as QualityIcon,
  Standard as StandardIcon,
  Benchmark,
  Criterion,
  Requirement,
  Specification,
  Detail,
  Feature as FeatureIcon,
  Characteristic,
  Attribute,
  Property,
  Trait,
  Quality as Quality2Icon,
  Aspect,
  Element,
  Component,
  Part,
  Piece,
  Section,
  Segment,
  Division,
  Department,
  Unit,
  Module,
  Block,
  Brick,
  Stone,
  Rock,
  Mountain as MountainIcon,
  Hill,
  Valley,
  Plain,
  Field,
  Meadow,
  Grass,
  Flower as Flower3Icon,
  Tree,
  Forest as ForestIcon,
  Wood,
  Jungle,
  Desert as DesertIcon,
  Sand,
  Beach as BeachIcon,
  Ocean,
  Sea,
  Lake,
  River,
  Stream,
  Creek,
  Pond,
  Pool as PoolIcon,
  Water as WaterIcon,
  Ice,
  Snow,
  Rain,
  Storm,
  Thunder,
  Lightning,
  Wind as WindIcon,
  Air,
  Sky,
  Cloud as CloudIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
  Star as Star2Icon,
  Planet,
  Earth,
  World,
  Universe,
  Galaxy,
  Space as SpaceIcon,
  Cosmos,
  Infinity,
  Eternity,
  Forever,
  Always,
  Never,
  Sometimes,
  Often,
  Rarely,
  Seldom,
  Occasionally,
  Frequently,
  Regularly,
  Constantly,
  Continuously,
  Permanently,
  Temporarily,
  Briefly,
  Quickly,
  Slowly,
  Fast,
  Slow,
  Rapid,
  Gradual,
  Sudden,
  Immediate,
  Instant as InstantIcon,
  Moment as MomentIcon,
  Second as SecondIcon,
  Minute as MinuteIcon,
  Hour as HourIcon,
  Day as DayIcon,
  Week as WeekIcon,
  Month as MonthIcon,
  Year as YearIcon,
  Decade as DecadeIcon,
  Century as CenturyIcon,
  Millennium as MillenniumIcon,
  Era as EraIcon,
  Age as AgeIcon,
  Time as TimeIcon,
  Clock as ClockIcon,
  Watch,
  Timer,
  Stopwatch,
  Alarm,
  Schedule,
  Timetable,
  Calendar as CalendarIcon2,
  Date,
  Appointment,
  Meeting,
  Conference,
  Seminar,
  Workshop,
  Class as ClassIcon,
  Course,
  Lesson,
  Lecture,
  Presentation as PresentationIcon,
  Speech as SpeechIcon,
  Talk as TalkIcon,
  Discussion as DiscussionIcon,
  Debate,
  Argument,
  Dispute,
  Conflict,
  Problem,
  Issue,
  Challenge,
  Difficulty,
  Obstacle,
  Barrier,
  Hurdle,
  Impediment,
  Hindrance,
  Limitation,
  Restriction,
  Constraint,
  Boundary,
  Border,
  Edge,
  Margin,
  Limit,
  Maximum,
  Minimum,
  Range,
  Scope,
  Extent,
  Degree as DegreeIcon,
  Level as LevelIcon,
  Scale as ScaleIcon,
  Measure as MeasureIcon,
  Size as SizeIcon,
  Dimension,
  Proportion as ProportionIcon,
  Ratio as RatioIcon,
  Percentage as PercentageIcon,
  Fraction as FractionIcon,
  Decimal as DecimalIcon,
  Number as NumberIcon,
  Digit as DigitIcon,
  Figure as FigureIcon,
  Amount as AmountIcon,
  Quantity as QuantityIcon,
  Count as CountIcon,
  Total,
  Sum,
  Average,
  Mean,
  Median,
  Mode,
  Variance,
  Deviation,
  Error,
  Mistake,
  Fault,
  Defect,
  Flaw,
  Bug,
  Glitch,
  Issue as IssueIcon,
  Problem as ProblemIcon,
  Trouble,
  Difficulty as DifficultyIcon,
  Challenge as ChallengeIcon,
  Obstacle as ObstacleIcon,
  Barrier as BarrierIcon,
  Hurdle as HurdleIcon,
  Impediment as ImpedimentIcon,
  Hindrance as HindranceIcon,
  Limitation as LimitationIcon,
  Restriction as RestrictionIcon,
  Constraint as ConstraintIcon,
  Boundary as BoundaryIcon,
  Border as BorderIcon,
  Edge as EdgeIcon,
  Margin as MarginIcon,
  Limit as LimitIcon,
  Maximum as MaximumIcon,
  Minimum as MinimumIcon,
  Range as RangeIcon,
  Scope as ScopeIcon,
  Extent as ExtentIcon
} from 'lucide-react';

const PremiumSupportVIPServices = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showNewTicketModal, setShowNewTicketModal] = useState(false);
  const [showConciergeModal, setShowConciergeModal] = useState(false);
  const [supportTickets, setSupportTickets] = useState([]);
  const [conciergeRequests, setConciergeRequests] = useState([]);
  const [supportAgents, setSupportAgents] = useState([]);
  const [vipServices, setVipServices] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userPlan, setUserPlan] = useState('premium');

  // Initialize data
  useEffect(() => {
    setSupportTickets([
      {
        id: 'TKT-001',
        title: 'Unable to access premium assessments',
        description: 'I\'m having trouble accessing the advanced relationship assessments in my premium account.',
        status: 'open',
        priority: 'high',
        category: 'technical',
        created: '2025-07-03T10:30:00Z',
        updated: '2025-07-03T14:15:00Z',
        agent: {
          name: 'Sarah Johnson',
          avatar: '/api/placeholder/32/32',
          title: 'Senior Support Specialist'
        },
        responses: 3,
        satisfaction: null
      },
      {
        id: 'TKT-002',
        title: 'Billing question about annual upgrade',
        description: 'I want to upgrade to the annual plan but have questions about the billing cycle.',
        status: 'in_progress',
        priority: 'medium',
        category: 'billing',
        created: '2025-07-02T16:45:00Z',
        updated: '2025-07-03T09:20:00Z',
        agent: {
          name: 'Michael Chen',
          avatar: '/api/placeholder/32/32',
          title: 'Billing Specialist'
        },
        responses: 5,
        satisfaction: null
      },
      {
        id: 'TKT-003',
        title: 'Feature request: Custom date categories',
        description: 'Would love to see custom categories for date planning beyond the current options.',
        status: 'resolved',
        priority: 'low',
        category: 'feature_request',
        created: '2025-06-30T11:20:00Z',
        updated: '2025-07-01T15:30:00Z',
        agent: {
          name: 'Emily Rodriguez',
          avatar: '/api/placeholder/32/32',
          title: 'Product Support Lead'
        },
        responses: 7,
        satisfaction: 5
      }
    ]);

    setConciergeRequests([
      {
        id: 'CON-001',
        title: 'Anniversary dinner planning',
        description: 'Need help planning a special 5th anniversary dinner in San Francisco. Budget: $500-800.',
        status: 'in_progress',
        priority: 'high',
        created: '2025-07-03T08:00:00Z',
        dueDate: '2025-07-10T19:00:00Z',
        concierge: {
          name: 'Isabella Martinez',
          avatar: '/api/placeholder/32/32',
          title: 'Senior Relationship Concierge'
        },
        category: 'date_planning',
        budget: '$500-800',
        location: 'San Francisco, CA'
      },
      {
        id: 'CON-002',
        title: 'Weekend getaway recommendations',
        description: 'Looking for romantic weekend getaway options within 3 hours of Los Angeles.',
        status: 'completed',
        priority: 'medium',
        created: '2025-06-28T14:30:00Z',
        dueDate: '2025-07-05T12:00:00Z',
        concierge: {
          name: 'James Wilson',
          avatar: '/api/placeholder/32/32',
          title: 'Travel Concierge Specialist'
        },
        category: 'travel',
        budget: '$1000-1500',
        location: 'Los Angeles, CA'
      }
    ]);

    setSupportAgents([
      {
        id: 1,
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/48/48',
        title: 'Senior Support Specialist',
        specialties: ['Technical Issues', 'Account Management'],
        rating: 4.9,
        responseTime: '< 2 hours',
        languages: ['English', 'Spanish'],
        online: true
      },
      {
        id: 2,
        name: 'Dr. Michael Chen',
        avatar: '/api/placeholder/48/48',
        title: 'Relationship Expert & Support Lead',
        specialties: ['Relationship Guidance', 'Premium Features'],
        rating: 4.8,
        responseTime: '< 1 hour',
        languages: ['English', 'Mandarin'],
        online: true
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        avatar: '/api/placeholder/48/48',
        title: 'VIP Concierge Manager',
        specialties: ['Event Planning', 'Travel Coordination'],
        rating: 5.0,
        responseTime: '< 30 minutes',
        languages: ['English', 'Spanish', 'French'],
        online: false
      }
    ]);

    setVipServices([
      {
        id: 1,
        name: 'Personal Relationship Concierge',
        description: 'Dedicated concierge for all your relationship needs',
        features: [
          'Personalized date planning',
          'Event coordination',
          'Gift recommendations',
          'Travel planning',
          'Special occasion assistance'
        ],
        availability: '24/7',
        responseTime: '< 15 minutes',
        included: userPlan === 'professional'
      },
      {
        id: 2,
        name: 'Priority Expert Consultations',
        description: 'Direct access to relationship experts and therapists',
        features: [
          'Skip-the-line booking',
          'Same-day consultations',
          'Extended session times',
          'Follow-up support',
          'Crisis intervention'
        ],
        availability: 'Business hours',
        responseTime: '< 1 hour',
        included: userPlan === 'professional'
      },
      {
        id: 3,
        name: 'White-Glove Onboarding',
        description: 'Personalized setup and optimization of your account',
        features: [
          'One-on-one setup session',
          'Custom goal configuration',
          'Feature walkthrough',
          'Integration assistance',
          'Ongoing optimization'
        ],
        availability: 'By appointment',
        responseTime: '< 24 hours',
        included: userPlan === 'professional'
      },
      {
        id: 4,
        name: 'Exclusive Events Access',
        description: 'VIP access to relationship workshops and events',
        features: [
          'Private workshops',
          'Expert-led seminars',
          'Networking events',
          'Early access booking',
          'Complimentary tickets'
        ],
        availability: 'Monthly events',
        responseTime: 'Event-based',
        included: userPlan === 'professional'
      }
    ]);

    setChatMessages([
      {
        id: 1,
        sender: 'agent',
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/32/32',
        message: 'Hi! I\'m Sarah, your dedicated support specialist. How can I help you today?',
        timestamp: '2025-07-03T14:30:00Z',
        type: 'text'
      },
      {
        id: 2,
        sender: 'user',
        message: 'Hi Sarah! I\'m having trouble accessing the premium assessments feature.',
        timestamp: '2025-07-03T14:32:00Z',
        type: 'text'
      },
      {
        id: 3,
        sender: 'agent',
        name: 'Sarah Johnson',
        avatar: '/api/placeholder/32/32',
        message: 'I\'d be happy to help you with that! Let me check your account status first. Can you tell me which specific assessment you\'re trying to access?',
        timestamp: '2025-07-03T14:33:00Z',
        type: 'text'
      }
    ]);
  }, [userPlan]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* VIP Status Card */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="h-8 w-8" />
              <h2 className="text-2xl font-bold">
                {userPlan === 'professional' ? 'VIP Premium Support' : 'Premium Support'}
              </h2>
            </div>
            <p className="text-purple-100 mb-4">
              {userPlan === 'professional' 
                ? 'Enjoy white-glove service with dedicated concierge support'
                : 'Get priority support with our expert team'
              }
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {userPlan === 'professional' ? '< 15 min' : '< 2 hours'}
                </div>
                <div className="text-sm text-purple-100">avg response time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-purple-100">availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm text-purple-100">satisfaction rating</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <button
                onClick={() => setShowNewTicketModal(true)}
                className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium mb-3 block w-full"
              >
                Get Support
              </button>
              {userPlan === 'professional' && (
                <button
                  onClick={() => setShowConciergeModal(true)}
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-400 transition-colors font-medium block w-full"
                >
                  Request Concierge
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          onClick={() => setActiveTab('chat')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left"
        >
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
          <p className="text-sm text-gray-600">Chat with our support team in real-time</p>
          <div className="mt-3 flex items-center text-sm text-green-600">
            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
            3 agents online
          </div>
        </button>

        <button
          onClick={() => setShowNewTicketModal(true)}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left"
        >
          <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Headphones className="h-6 w-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Submit Ticket</h3>
          <p className="text-sm text-gray-600">Create a support ticket for detailed help</p>
          <div className="mt-3 text-sm text-purple-600">
            Avg response: {userPlan === 'professional' ? '< 15 min' : '< 2 hours'}
          </div>
        </button>

        <button
          onClick={() => setActiveTab('phone')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left"
        >
          <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
          <p className="text-sm text-gray-600">
            {userPlan === 'professional' ? 'Priority phone support' : 'Schedule a callback'}
          </p>
          <div className="mt-3 text-sm text-green-600">
            {userPlan === 'professional' ? 'Direct line available' : 'Callback within 4 hours'}
          </div>
        </button>

        <button
          onClick={() => setActiveTab('video')}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left"
        >
          <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <Video className="h-6 w-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">Video Call</h3>
          <p className="text-sm text-gray-600">
            {userPlan === 'professional' ? 'Instant video support' : 'Schedule video session'}
          </p>
          <div className="mt-3 text-sm text-orange-600">
            Screen sharing available
          </div>
        </button>
      </div>

      {/* Recent Tickets */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Support Tickets</h3>
          <button
            onClick={() => setActiveTab('tickets')}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View All
          </button>
        </div>

        <div className="space-y-4">
          {supportTickets.slice(0, 3).map(ticket => (
            <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{ticket.id}</span>
                    <span>•</span>
                    <span>{formatDate(ticket.created)}</span>
                    <span>•</span>
                    <span>{ticket.responses} responses</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                  {ticket.status.replace('_', ' ')}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                  {ticket.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Services (if professional plan) */}
      {userPlan === 'professional' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Your VIP Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vipServices.slice(0, 4).map(service => (
              <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{service.name}</h4>
                  <Crown className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Response: {service.responseTime}</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Included
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Support Team */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Support Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportAgents.map(agent => (
            <div key={agent.id} className="text-center">
              <div className="relative inline-block mb-4">
                <img
                  src={agent.avatar}
                  alt={agent.name}
                  className="h-16 w-16 rounded-full mx-auto"
                />
                {agent.online && (
                  <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <h4 className="font-medium text-gray-900">{agent.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{agent.title}</p>
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{agent.rating}</span>
              </div>
              <div className="text-xs text-gray-500">
                Responds in {agent.responseTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTicketsTab = () => (
    <div className="space-y-6">
      {/* Tickets Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Support Tickets</h3>
          <p className="text-sm text-gray-600">Track and manage your support requests</p>
        </div>
        <button
          onClick={() => setShowNewTicketModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>New Ticket</span>
        </button>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">All Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {supportTickets.map(ticket => (
            <div
              key={ticket.id}
              className="p-6 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedTicket(ticket)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-gray-900">{ticket.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace('_', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{ticket.id}</span>
                    <span>•</span>
                    <span>Created {formatDate(ticket.created)}</span>
                    <span>•</span>
                    <span>Updated {formatDate(ticket.updated)}</span>
                    <span>•</span>
                    <span>{ticket.responses} responses</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-4">
                  {ticket.agent && (
                    <div className="flex items-center space-x-2">
                      <img
                        src={ticket.agent.avatar}
                        alt={ticket.agent.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <div className="text-sm">
                        <div className="font-medium text-gray-900">{ticket.agent.name}</div>
                        <div className="text-gray-500">{ticket.agent.title}</div>
                      </div>
                    </div>
                  )}
                  {ticket.satisfaction && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < ticket.satisfaction ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderChatTab = () => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-96 flex flex-col">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Live Support Chat</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>3 agents online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Phone className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Video className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {chatMessages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
              message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              {message.sender === 'agent' && (
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="h-8 w-8 rounded-full"
                />
              )}
              <div>
                {message.sender === 'agent' && (
                  <div className="text-xs text-gray-500 mb-1">{message.name}</div>
                )}
                <div className={`px-4 py-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {message.message}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {formatDate(message.timestamp)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Paperclip className="h-4 w-4" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Image className="h-4 w-4" />
          </button>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Smile className="h-4 w-4" />
          </button>
          <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const renderVIPTab = () => (
    <div className="space-y-6">
      {/* VIP Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {vipServices.map(service => (
          <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Crown className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.availability}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                service.included ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {service.included ? 'Included' : 'Upgrade Required'}
              </span>
            </div>

            <p className="text-gray-600 mb-4">{service.description}</p>

            <div className="space-y-2 mb-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Response time: {service.responseTime}</span>
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                service.included
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}>
                {service.included ? 'Request Service' : 'Upgrade Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Concierge Requests */}
      {userPlan === 'professional' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Concierge Requests</h3>
            <button
              onClick={() => setShowConciergeModal(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>New Request</span>
            </button>
          </div>

          <div className="space-y-4">
            {conciergeRequests.map(request => (
              <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{request.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                    {request.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Category:</span>
                    <div className="font-medium text-gray-900">{request.category.replace('_', ' ')}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Budget:</span>
                    <div className="font-medium text-gray-900">{request.budget}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <div className="font-medium text-gray-900">{request.location}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Due Date:</span>
                    <div className="font-medium text-gray-900">{formatDate(request.dueDate)}</div>
                  </div>
                </div>

                {request.concierge && (
                  <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-200">
                    <img
                      src={request.concierge.avatar}
                      alt={request.concierge.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="text-sm">
                      <div className="font-medium text-gray-900">{request.concierge.name}</div>
                      <div className="text-gray-500">{request.concierge.title}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <Headphones className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {userPlan === 'professional' ? 'VIP Support & Concierge' : 'Premium Support'}
                </h1>
                <p className="text-sm text-gray-600">
                  {userPlan === 'professional' 
                    ? 'White-glove support and personalized concierge services'
                    : 'Priority support for your relationship journey'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>Support Available</span>
              </div>
              <Crown className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('tickets')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'tickets'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Support Tickets
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'chat'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Live Chat
            </button>
            {userPlan === 'professional' && (
              <button
                onClick={() => setActiveTab('vip')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'vip'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                VIP Services
              </button>
            )}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'tickets' && renderTicketsTab()}
        {activeTab === 'chat' && renderChatTab()}
        {activeTab === 'vip' && renderVIPTab()}
      </div>
    </div>
  );
};

export default PremiumSupportVIPServices;

