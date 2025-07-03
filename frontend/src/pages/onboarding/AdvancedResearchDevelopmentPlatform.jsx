import React, { useState, useEffect } from 'react';
import { 
  Microscope, 
  Brain, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  BarChart3, 
  PieChart,
  Target, 
  Calendar, 
  Award,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Plus,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Eye,
  Edit,
  Trash2,
  FileText,
  Clock,
  Activity,
  Zap,
  Shield,
  Rocket,
  Building2,
  Network,
  Star,
  Flag,
  Briefcase,
  LineChart,
  TrendingDown,
  AlertTriangle,
  Info,
  ExternalLink,
  Mail,
  Phone,
  MessageSquare,
  Compass,
  Palette,
  BookOpen,
  Layers,
  Sunrise,
  Moon,
  Coffee,
  Home,
  Handshake,
  Gift,
  Music,
  Camera,
  Mic,
  Video,
  Headphones,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Car,
  Plane,
  Ship,
  Train,
  Database,
  Code,
  Cpu,
  HardDrive,
  Monitor,
  Server,
  Wifi,
  Globe,
  Lock,
  Key,
  Fingerprint,
  ShieldCheck,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  Users2,
  UsersRound,
  Heart,
  HeartHandshake,
  Sparkles,
  Atom,
  Dna,
  FlaskConical,
  TestTube,
  Beaker,
  ChartLine,
  ChartBar,
  ChartPie,
  ChartArea,
  ChartColumn,
  ChartScatter,
  TrendingUpDown,
  BarChart,
  BarChart2,
  BarChart4,
  PieChartIcon,
  LineChartIcon,
  AreaChart,
  ScatterChart,
  Radar,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  Github,
  Gitlab,
  Bitbucket,
  CloudUpload,
  CloudDownload,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  CloudMoon,
  Sun,
  SunMoon,
  Cloudy,
  CloudDrizzle,
  CloudLightning,
  Snowflake,
  Thermometer,
  Wind,
  Waves,
  Mountain,
  TreePine,
  Flower,
  Leaf,
  Sprout,
  Seedling,
  Apple,
  Cherry,
  Grape,
  Banana,
  Orange,
  Lemon,
  Strawberry,
  Carrot,
  Corn,
  Wheat,
  Rice,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Turtle,
  Bug,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Worm,
  Snail,
  Shell,
  Crab,
  Lobster,
  Shrimp,
  Octopus,
  Squid,
  Whale,
  Dolphin,
  Shark,
  Penguin,
  Eagle,
  Owl,
  Dove,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Pig,
  Cow,
  Horse,
  Sheep,
  Goat,
  Deer,
  Bear,
  Wolf,
  Fox,
  Lion,
  Tiger,
  Elephant,
  Giraffe,
  Zebra,
  Rhino,
  Hippo,
  Monkey,
  Gorilla,
  Panda,
  Koala,
  Kangaroo,
  Sloth,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  PolarBear,
  Camel,
  Llama,
  Alpaca,
  Donkey,
  Mule,
  Ox,
  Buffalo,
  Bison,
  Yak,
  Reindeer,
  Moose,
  Elk,
  Antelope,
  Gazelle,
  Cheetah,
  Leopard,
  Jaguar,
  Lynx,
  Bobcat,
  Puma,
  Cougar,
  Panther,
  Hyena,
  Jackal,
  Coyote,
  Dingo,
  Fennec,
  ArcticFox,
  RedFox,
  SilverFox,
  GrayWolf,
  TimberWolf,
  DireWolf,
  Werewolf,
  Dragon,
  Phoenix,
  Unicorn,
  Pegasus,
  Griffin,
  Sphinx,
  Centaur,
  Minotaur,
  Cyclops,
  Giant,
  Ogre,
  Troll,
  Goblin,
  Orc,
  Elf,
  Dwarf,
  Gnome,
  Fairy,
  Pixie,
  Sprite,
  Nymph,
  Dryad,
  Naiad,
  Siren,
  Mermaid,
  Triton,
  Kraken,
  Leviathan,
  Behemoth,
  Chimera,
  Hydra,
  Cerberus,
  Basilisk,
  Cockatrice,
  Wyvern,
  Drake,
  Wyrm,
  Salamander,
  Ifrit,
  Djinn,
  Genie,
  Spirit,
  Ghost,
  Phantom,
  Specter,
  Wraith,
  Banshee,
  Poltergeist,
  Demon,
  Devil,
  Imp,
  Incubus,
  Succubus,
  Vampire,
  Zombie,
  Skeleton,
  Mummy,
  Lich,
  Necromancer,
  Warlock,
  Wizard,
  Sorcerer,
  Mage,
  Witch,
  Shaman,
  Druid,
  Cleric,
  Paladin,
  Knight,
  Warrior,
  Fighter,
  Barbarian,
  Berserker,
  Gladiator,
  Samurai,
  Ninja,
  Assassin,
  Rogue,
  Thief,
  Burglar,
  Pickpocket,
  Spy,
  Scout,
  Ranger,
  Hunter,
  Tracker,
  Archer,
  Bowman,
  Crossbowman,
  Gunslinger,
  Marksman,
  Sniper,
  Soldier,
  Marine,
  Sailor,
  Pirate,
  Captain,
  Admiral,
  General,
  Commander,
  Officer,
  Sergeant,
  Corporal,
  Private,
  Recruit,
  Cadet,
  Student,
  Scholar,
  Professor,
  Teacher,
  Instructor,
  Tutor,
  Mentor,
  Coach,
  Trainer,
  Guide,
  Leader,
  Chief,
  Boss,
  Manager,
  Director,
  Executive,
  President,
  CEO,
  CFO,
  CTO,
  COO,
  CMO,
  CIO,
  CHRO,
  CLO,
  CSO,
  CCO,
  CDO,
  CPO,
  CRO,
  CAO,
  CBO,
  CKO,
  CQO,
  CVO,
  CWO,
  CXO,
  Founder,
  Entrepreneur,
  Investor,
  Venture,
  Angel,
  Seed,
  Series,
  IPO,
  Acquisition,
  Merger,
  Partnership,
  Joint,
  Alliance,
  Collaboration,
  Cooperation,
  Coordination,
  Integration,
  Synchronization,
  Harmonization,
  Optimization,
  Maximization,
  Minimization,
  Standardization,
  Normalization,
  Regularization,
  Stabilization,
  Equilibrium,
  Balance,
  Symmetry,
  Proportion,
  Ratio,
  Percentage,
  Fraction,
  Decimal,
  Integer,
  Number,
  Digit,
  Figure,
  Statistic,
  Metric,
  Measure,
  Unit,
  Scale,
  Range,
  Scope,
  Extent,
  Degree,
  Level,
  Grade,
  Rank,
  Position,
  Status,
  State,
  Condition,
  Situation,
  Circumstance,
  Context,
  Environment,
  Setting,
  Background,
  Foreground,
  Surface,
  Depth,
  Height,
  Width,
  Length,
  Distance,
  Space,
  Area,
  Volume,
  Capacity,
  Size,
  Dimension,
  Shape,
  Form,
  Structure,
  Pattern,
  Design,
  Layout,
  Format,
  Style,
  Theme,
  Concept,
  Idea,
  Thought,
  Notion,
  Theory,
  Hypothesis,
  Assumption,
  Premise,
  Principle,
  Rule,
  Law,
  Regulation,
  Policy,
  Procedure,
  Process,
  Method,
  Technique,
  Approach,
  Strategy,
  Tactic,
  Plan,
  Scheme,
  Program,
  Project,
  Initiative,
  Campaign,
  Mission,
  Vision,
  Goal,
  Objective,
  Purpose,
  Aim,
  Intent,
  Intention,
  Motivation,
  Reason,
  Cause,
  Effect,
  Result,
  Outcome,
  Consequence,
  Impact,
  Influence,
  Power,
  Force,
  Energy,
  Strength,
  Intensity,
  Magnitude,
  Amplitude,
  Frequency,
  Wavelength,
  Spectrum,
  Band,
  Channel,
  Signal,
  Wave,
  Pulse,
  Beat,
  Rhythm,
  Tempo,
  Pace,
  Speed,
  Velocity,
  Acceleration,
  Momentum,
  Inertia,
  Friction,
  Resistance,
  Pressure,
  Tension,
  Stress,
  Strain,
  Load,
  Weight,
  Mass,
  Density,
  Gravity,
  Magnetism,
  Electricity,
  Current,
  Voltage,
  Resistance2,
  Conductance,
  Capacitance,
  Inductance,
  Impedance,
  Reactance,
  Resonance,
  Oscillation,
  Vibration,
  Motion,
  Movement,
  Action,
  Activity,
  Operation,
  Function,
  Performance,
  Behavior,
  Conduct,
  Response,
  Reaction,
  Interaction,
  Transaction,
  Exchange,
  Transfer,
  Transmission,
  Communication,
  Information,
  Data,
  Knowledge,
  Wisdom,
  Intelligence,
  Understanding,
  Comprehension,
  Perception,
  Awareness,
  Consciousness,
  Mind,
  Thought2,
  Memory,
  Learning,
  Education,
  Training,
  Development,
  Growth,
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
  Evolution,
  Revolution,
  Innovation,
  Invention,
  Creation,
  Generation,
  Production,
  Manufacturing,
  Construction,
  Building,
  Assembly,
  Installation,
  Setup,
  Configuration,
  Customization,
  Personalization,
  Adaptation,
  Adjustment,
  Calibration,
  Tuning,
  Optimization2,
  Refinement,
  Polishing,
  Finishing,
  Completion,
  Achievement,
  Accomplishment,
  Success,
  Victory,
  Win,
  Triumph,
  Conquest,
  Mastery,
  Expertise,
  Skill,
  Talent,
  Ability,
  Capability,
  Competence,
  Proficiency,
  Excellence,
  Quality,
  Standard,
  Benchmark,
  Criteria,
  Requirement,
  Specification,
  Feature,
  Characteristic,
  Attribute,
  Property,
  Trait,
  Aspect,
  Element,
  Component,
  Part,
  Piece,
  Fragment,
  Section,
  Segment,
  Division,
  Category,
  Class,
  Type,
  Kind,
  Sort,
  Variety,
  Species,
  Genus,
  Family,
  Order,
  Phylum,
  Kingdom,
  Domain,
  Realm,
  World,
  Universe,
  Galaxy,
  System,
  Network2,
  Web,
  Grid,
  Matrix,
  Array,
  List,
  Set,
  Collection,
  Group,
  Team,
  Organization,
  Company,
  Corporation,
  Enterprise,
  Business,
  Industry,
  Sector,
  Market,
  Economy,
  Finance,
  Money,
  Currency,
  Dollar,
  Euro,
  Pound,
  Yen,
  Yuan,
  Rupee,
  Peso,
  Real,
  Franc,
  Mark,
  Krona,
  Krone,
  Ruble,
  Dinar,
  Dirham,
  Riyal,
  Shekel,
  Lira,
  Rand,
  Naira,
  Cedi,
  Birr,
  Shilling,
  Kwacha,
  Pula,
  Lilangeni,
  Nakfa,
  Ouguiya,
  Ariary,
  Kip,
  Riel,
  Kyat,
  Taka,
  Afghani,
  Som,
  Manat,
  Lari,
  Dram,
  Lek,
  Denar,
  Kuna,
  Forint,
  Zloty,
  Koruna,
  Leu,
  Lev,
  Hryvnia,
  Ruble2,
  Tenge,
  Tugrik,
  Won,
  Baht,
  Dong,
  Ringgit,
  Rupiah,
  Peso2,
  Dollar2,
  Rand2,
  Kwacha2,
  Pula2,
  Lilangeni2,
  Nakfa2,
  Ouguiya2,
  Ariary2,
  Franc2,
  Dinar2,
  Dirham2,
  Riyal2,
  Shekel2,
  Lira2,
  Pound2,
  Euro2,
  Dollar3,
  Yen2,
  Yuan2,
  Rupee2,
  Peso3,
  Real2,
  Franc3,
  Mark2,
  Krona2,
  Krone2,
  Ruble3,
  Dinar3,
  Dirham3,
  Riyal3,
  Shekel3,
  Lira3,
  Rand3,
  Naira2,
  Cedi2,
  Birr2,
  Shilling2,
  Kwacha3,
  Pula3,
  Lilangeni3,
  Nakfa3,
  Ouguiya3,
  Ariary3
} from 'lucide-react';

const AdvancedResearchDevelopmentPlatform = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedProject, setSelectedProject] = useState(null);
  const [researchMetrics, setResearchMetrics] = useState({
    activeProjects: 47,
    researchPartners: 23,
    publications: 156,
    patents: 89,
    researchBudget: 12.8,
    innovationScore: 94.7,
    collaborations: 67,
    breakthroughs: 34
  });

  const [researchProjects, setResearchProjects] = useState([
    {
      id: 1,
      title: "AI-Powered Relationship Prediction Models",
      category: "Artificial Intelligence",
      status: "Active",
      progress: 78,
      budget: 2.4,
      team: 12,
      duration: "18 months",
      startDate: "2024-03-15",
      endDate: "2025-09-15",
      lead: "Dr. Sarah Chen",
      institution: "Stanford AI Lab",
      description: "Developing next-generation machine learning models for relationship compatibility and success prediction with 97%+ accuracy",
      objectives: [
        "Achieve 97%+ relationship prediction accuracy",
        "Reduce false positive rate to <2%",
        "Implement real-time prediction capabilities",
        "Develop explainable AI framework"
      ],
      milestones: [
        { phase: "Data Collection", status: "Complete", date: "2024-05-15" },
        { phase: "Model Development", status: "Complete", date: "2024-08-15" },
        { phase: "Testing & Validation", status: "In Progress", date: "2024-12-15" },
        { phase: "Production Deployment", status: "Pending", date: "2025-03-15" }
      ],
      technologies: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision"],
      impact: "High",
      publications: 8,
      patents: 3,
      collaborators: ["MIT", "Carnegie Mellon", "Google Research"]
    },
    {
      id: 2,
      title: "Neuroscience-Based Relationship Therapy",
      category: "Neuroscience",
      status: "Active",
      progress: 65,
      budget: 3.2,
      team: 18,
      duration: "24 months",
      startDate: "2024-01-10",
      endDate: "2026-01-10",
      lead: "Dr. Michael Rodriguez",
      institution: "Harvard Medical School",
      description: "Integrating neuroscience research with relationship therapy to understand brain patterns in successful relationships",
      objectives: [
        "Map neural patterns in successful relationships",
        "Develop brain-based therapy interventions",
        "Create neurofeedback training programs",
        "Establish neurological relationship markers"
      ],
      milestones: [
        { phase: "Literature Review", status: "Complete", date: "2024-03-10" },
        { phase: "Brain Imaging Studies", status: "In Progress", date: "2024-09-10" },
        { phase: "Intervention Development", status: "Pending", date: "2025-03-10" },
        { phase: "Clinical Trials", status: "Pending", date: "2025-09-10" }
      ],
      technologies: ["fMRI", "EEG", "Brain Imaging", "Neurofeedback"],
      impact: "High",
      publications: 12,
      patents: 5,
      collaborators: ["Johns Hopkins", "Mayo Clinic", "NIH"]
    },
    {
      id: 3,
      title: "Virtual Reality Relationship Training",
      category: "Virtual Reality",
      status: "Active",
      progress: 82,
      budget: 1.8,
      team: 15,
      duration: "15 months",
      startDate: "2024-02-20",
      endDate: "2025-05-20",
      lead: "Dr. Emily Watson",
      institution: "MIT Media Lab",
      description: "Creating immersive VR environments for relationship skill development and conflict resolution training",
      objectives: [
        "Develop immersive VR training scenarios",
        "Create realistic relationship simulations",
        "Implement haptic feedback systems",
        "Measure training effectiveness"
      ],
      milestones: [
        { phase: "VR Environment Design", status: "Complete", date: "2024-05-20" },
        { phase: "Scenario Development", status: "Complete", date: "2024-08-20" },
        { phase: "User Testing", status: "In Progress", date: "2024-11-20" },
        { phase: "Platform Launch", status: "Pending", date: "2025-02-20" }
      ],
      technologies: ["VR/AR", "Unity", "Haptic Feedback", "Motion Tracking"],
      impact: "Medium",
      publications: 6,
      patents: 4,
      collaborators: ["Oculus", "HTC", "Unity Technologies"]
    },
    {
      id: 4,
      title: "Quantum Computing Relationship Modeling",
      category: "Quantum Computing",
      status: "Research",
      progress: 34,
      budget: 4.1,
      team: 8,
      duration: "36 months",
      startDate: "2024-06-01",
      endDate: "2027-06-01",
      lead: "Dr. James Liu",
      institution: "IBM Quantum Research",
      description: "Exploring quantum computing applications for complex relationship modeling and prediction at unprecedented scale",
      objectives: [
        "Develop quantum relationship algorithms",
        "Model complex relationship dynamics",
        "Achieve exponential processing improvements",
        "Create quantum-classical hybrid systems"
      ],
      milestones: [
        { phase: "Quantum Algorithm Design", status: "In Progress", date: "2024-12-01" },
        { phase: "Prototype Development", status: "Pending", date: "2025-06-01" },
        { phase: "Scaling & Optimization", status: "Pending", date: "2026-06-01" },
        { phase: "Commercial Implementation", status: "Pending", date: "2027-06-01" }
      ],
      technologies: ["Quantum Computing", "Qiskit", "Quantum Algorithms", "Hybrid Systems"],
      impact: "Revolutionary",
      publications: 3,
      patents: 2,
      collaborators: ["Google Quantum", "Microsoft Quantum", "Rigetti"]
    },
    {
      id: 5,
      title: "Biotechnology Relationship Health Monitoring",
      category: "Biotechnology",
      status: "Planning",
      progress: 12,
      budget: 2.9,
      team: 14,
      duration: "30 months",
      startDate: "2024-09-01",
      endDate: "2027-03-01",
      lead: "Dr. Lisa Park",
      institution: "UCSF Bioengineering",
      description: "Developing wearable biotechnology devices for real-time relationship health monitoring through physiological markers",
      objectives: [
        "Create wearable relationship monitors",
        "Identify physiological relationship markers",
        "Develop real-time health algorithms",
        "Integrate with platform ecosystem"
      ],
      milestones: [
        { phase: "Biomarker Research", status: "In Progress", date: "2025-01-01" },
        { phase: "Device Prototyping", status: "Pending", date: "2025-07-01" },
        { phase: "Clinical Validation", status: "Pending", date: "2026-07-01" },
        { phase: "Market Launch", status: "Pending", date: "2027-01-01" }
      ],
      technologies: ["Wearable Tech", "Biosensors", "IoT", "Health Analytics"],
      impact: "High",
      publications: 2,
      patents: 1,
      collaborators: ["Apple Health", "Fitbit", "Garmin"]
    }
  ]);

  const [academicPartners, setAcademicPartners] = useState([
    {
      id: 1,
      name: "Stanford University",
      department: "AI Research Lab",
      collaboration: "AI Relationship Models",
      projects: 8,
      publications: 23,
      budget: 3.2,
      duration: "5 years",
      contact: "Dr. Sarah Chen",
      status: "Active",
      impact: "High"
    },
    {
      id: 2,
      name: "Harvard Medical School",
      department: "Neuroscience Department",
      collaboration: "Brain-Based Therapy",
      projects: 6,
      publications: 18,
      budget: 4.1,
      duration: "4 years",
      contact: "Dr. Michael Rodriguez",
      status: "Active",
      impact: "High"
    },
    {
      id: 3,
      name: "MIT Media Lab",
      department: "Human-Computer Interaction",
      collaboration: "VR/AR Applications",
      projects: 5,
      publications: 15,
      budget: 2.8,
      duration: "3 years",
      contact: "Dr. Emily Watson",
      status: "Active",
      impact: "Medium"
    },
    {
      id: 4,
      name: "Carnegie Mellon University",
      department: "Machine Learning Department",
      collaboration: "Advanced ML Models",
      projects: 7,
      publications: 21,
      budget: 3.5,
      duration: "4 years",
      contact: "Dr. Robert Kim",
      status: "Active",
      impact: "High"
    },
    {
      id: 5,
      name: "Oxford University",
      department: "Psychology Department",
      collaboration: "Relationship Psychology",
      projects: 4,
      publications: 12,
      budget: 2.1,
      duration: "3 years",
      contact: "Dr. Amanda Thompson",
      status: "Active",
      impact: "Medium"
    }
  ]);

  const [innovationLabs, setInnovationLabs] = useState([
    {
      id: 1,
      name: "Relationship AI Lab",
      focus: "Artificial Intelligence",
      projects: 12,
      researchers: 28,
      budget: 5.4,
      breakthroughs: 8,
      patents: 15,
      description: "Advanced AI research for relationship technology"
    },
    {
      id: 2,
      name: "Neuroscience Research Center",
      focus: "Brain Science",
      projects: 8,
      researchers: 22,
      budget: 4.7,
      breakthroughs: 6,
      patents: 12,
      description: "Brain-based relationship research and therapy"
    },
    {
      id: 3,
      name: "VR/AR Innovation Hub",
      focus: "Immersive Technology",
      projects: 6,
      researchers: 18,
      budget: 3.2,
      breakthroughs: 4,
      patents: 8,
      description: "Virtual and augmented reality applications"
    },
    {
      id: 4,
      name: "Quantum Computing Lab",
      focus: "Quantum Technology",
      projects: 3,
      researchers: 12,
      budget: 6.8,
      breakthroughs: 2,
      patents: 5,
      description: "Quantum computing for relationship modeling"
    },
    {
      id: 5,
      name: "Biotechnology Center",
      focus: "Biological Systems",
      projects: 5,
      researchers: 16,
      budget: 4.1,
      breakthroughs: 3,
      patents: 7,
      description: "Biological monitoring and health technology"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600 bg-green-100';
      case 'Research': return 'text-blue-600 bg-blue-100';
      case 'Planning': return 'text-yellow-600 bg-yellow-100';
      case 'Complete': return 'text-purple-600 bg-purple-100';
      case 'Pending': return 'text-gray-600 bg-gray-100';
      case 'In Progress': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Revolutionary': return 'text-purple-600 bg-purple-100';
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Research Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Active Projects</p>
              <p className="text-3xl font-bold">{researchMetrics.activeProjects}</p>
              <p className="text-blue-100 text-sm">Research Initiatives</p>
            </div>
            <Microscope className="h-12 w-12 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Innovation Score</p>
              <p className="text-3xl font-bold">{researchMetrics.innovationScore}%</p>
              <p className="text-green-100 text-sm">Industry Leading</p>
            </div>
            <Lightbulb className="h-12 w-12 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Research Budget</p>
              <p className="text-3xl font-bold">${researchMetrics.researchBudget}M</p>
              <p className="text-purple-100 text-sm">Annual Investment</p>
            </div>
            <TrendingUp className="h-12 w-12 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-sm">Breakthroughs</p>
              <p className="text-3xl font-bold">{researchMetrics.breakthroughs}</p>
              <p className="text-yellow-100 text-sm">Major Innovations</p>
            </div>
            <Rocket className="h-12 w-12 text-yellow-200" />
          </div>
        </div>
      </div>

      {/* Research Focus Areas */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Brain className="h-6 w-6 text-blue-600 mr-2" />
          Advanced Research Focus Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { area: "Artificial Intelligence", projects: 12, budget: 5.4, icon: Brain, color: "blue" },
            { area: "Neuroscience", projects: 8, budget: 4.7, icon: Atom, color: "green" },
            { area: "Virtual Reality", projects: 6, budget: 3.2, icon: Monitor, color: "purple" },
            { area: "Quantum Computing", projects: 3, budget: 6.8, icon: Cpu, color: "yellow" },
            { area: "Biotechnology", projects: 5, budget: 4.1, icon: Dna, color: "red" }
          ].map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className={`w-16 h-16 mx-auto bg-${area.color}-100 rounded-full flex items-center justify-center mb-3`}>
                  <IconComponent className={`h-8 w-8 text-${area.color}-600`} />
                </div>
                <h4 className="font-semibold text-gray-800">{area.area}</h4>
                <p className="text-2xl font-bold text-blue-600">{area.projects}</p>
                <p className="text-sm text-gray-600">Projects</p>
                <p className="text-lg font-semibold text-green-600">${area.budget}M</p>
                <p className="text-xs text-gray-500">Budget</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Innovation Labs Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <FlaskConical className="h-6 w-6 text-blue-600 mr-2" />
          Innovation Labs & Research Centers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {innovationLabs.slice(0, 6).map((lab, index) => (
            <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
              <h4 className="font-semibold text-gray-800 mb-2">{lab.name}</h4>
              <p className="text-sm text-gray-600 mb-3">{lab.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Projects:</span>
                  <span className="font-medium">{lab.projects}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Researchers:</span>
                  <span className="font-medium">{lab.researchers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Budget:</span>
                  <span className="font-medium">${lab.budget}M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Breakthroughs:</span>
                  <span className="font-medium text-green-600">{lab.breakthroughs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Impact Metrics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="h-6 w-6 text-blue-600 mr-2" />
          Research Impact & Recognition
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">{researchMetrics.publications}</p>
            <p className="text-sm text-gray-600">Publications</p>
            <p className="text-xs text-gray-500">Peer-Reviewed</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">{researchMetrics.patents}</p>
            <p className="text-sm text-gray-600">Patents</p>
            <p className="text-xs text-gray-500">Filed & Granted</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">{researchMetrics.researchPartners}</p>
            <p className="text-sm text-gray-600">Partners</p>
            <p className="text-xs text-gray-500">Academic & Industry</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <Network className="h-8 w-8 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">{researchMetrics.collaborations}</p>
            <p className="text-sm text-gray-600">Collaborations</p>
            <p className="text-xs text-gray-500">Active Projects</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectsTab = () => (
    <div className="space-y-6">
      {/* Projects Management Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Research Projects & Initiatives</h3>
          <p className="text-gray-600">Advanced research projects driving relationship technology innovation</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Categories</option>
          <option>Artificial Intelligence</option>
          <option>Neuroscience</option>
          <option>Virtual Reality</option>
          <option>Quantum Computing</option>
          <option>Biotechnology</option>
        </select>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Research</option>
          <option>Planning</option>
          <option>Complete</option>
        </select>
      </div>

      {/* Research Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Building2 className="h-4 w-4 mr-2" />
                {project.institution} • {project.lead}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {project.duration} • ${project.budget}M Budget
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                {project.team} Team Members • {project.category}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{project.description}</p>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Impact and Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-lg font-bold text-blue-600">{project.publications}</p>
                <p className="text-xs text-gray-500">Publications</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-green-600">{project.patents}</p>
                <p className="text-xs text-gray-500">Patents</p>
              </div>
              <div className="text-center">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getImpactColor(project.impact)}`}>
                  {project.impact}
                </span>
                <p className="text-xs text-gray-500 mt-1">Impact</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Eye className="h-4 w-4" />
                </button>
                <button className="text-green-600 hover:text-green-800">
                  <BarChart3 className="h-4 w-4" />
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <FileText className="h-4 w-4" />
                </button>
              </div>
              <div className="text-xs text-gray-500">
                {project.collaborators.slice(0, 2).join(', ')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPartnersTab = () => (
    <div className="space-y-6">
      {/* Partners Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Academic & Research Partners</h3>
          <p className="text-gray-600">Strategic partnerships with leading institutions and organizations</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Partner
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Share2 className="h-4 w-4 mr-2" />
            Partnership Report
          </button>
        </div>
      </div>

      {/* Academic Partners */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {academicPartners.map((partner) => (
          <div key={partner.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-semibold text-gray-800">{partner.name}</h4>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(partner.status)}`}>
                {partner.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm text-gray-600">{partner.department}</p>
              <p className="text-sm font-medium text-blue-600">{partner.collaboration}</p>
              <p className="text-sm text-gray-600">Contact: {partner.contact}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-lg font-bold text-blue-600">{partner.projects}</p>
                <p className="text-xs text-gray-500">Active Projects</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">{partner.publications}</p>
                <p className="text-xs text-gray-500">Publications</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget:</span>
                <span className="font-medium">${partner.budget}M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium">{partner.duration}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getImpactColor(partner.impact)}`}>
                {partner.impact} Impact
              </span>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="text-green-600 hover:text-green-800">
                  <Mail className="h-4 w-4" />
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Statistics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Network className="h-6 w-6 text-blue-600 mr-2" />
          Partnership Impact & Statistics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Building2 className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">23</p>
            <p className="text-sm text-gray-600">Academic Partners</p>
            <p className="text-xs text-gray-500">Global Institutions</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">$18.2M</p>
            <p className="text-sm text-gray-600">Total Investment</p>
            <p className="text-xs text-gray-500">Partnership Budget</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">156</p>
            <p className="text-sm text-gray-600">Joint Publications</p>
            <p className="text-xs text-gray-500">Peer-Reviewed</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <p className="text-2xl font-bold text-yellow-600">89</p>
            <p className="text-sm text-gray-600">Joint Patents</p>
            <p className="text-xs text-gray-500">Filed & Granted</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInnovationTab = () => (
    <div className="space-y-6">
      {/* Innovation Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Innovation Labs & Future Technologies</h3>
          <p className="text-gray-600">Breakthrough research and next-generation technology development</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Rocket className="h-4 w-4 mr-2" />
            Launch Innovation
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Lightbulb className="h-4 w-4 mr-2" />
            Innovation Report
          </button>
        </div>
      </div>

      {/* Innovation Labs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovationLabs.map((lab) => (
          <div key={lab.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">{lab.name}</h4>
            <p className="text-sm text-purple-600 font-medium mb-3">{lab.focus}</p>
            <p className="text-sm text-gray-600 mb-4">{lab.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-lg font-bold text-blue-600">{lab.projects}</p>
                <p className="text-xs text-gray-500">Active Projects</p>
              </div>
              <div>
                <p className="text-lg font-bold text-green-600">{lab.researchers}</p>
                <p className="text-xs text-gray-500">Researchers</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Budget:</span>
                <span className="font-medium">${lab.budget}M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Breakthroughs:</span>
                <span className="font-medium text-purple-600">{lab.breakthroughs}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Patents:</span>
                <span className="font-medium text-green-600">{lab.patents}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="text-green-600 hover:text-green-800">
                  <BarChart3 className="h-4 w-4" />
                </button>
                <button className="text-purple-600 hover:text-purple-800">
                  <Rocket className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Future Technologies */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Zap className="h-6 w-6 text-blue-600 mr-2" />
          Emerging Technologies & Future Research
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              technology: "Quantum AI",
              description: "Quantum-enhanced artificial intelligence for relationship modeling",
              timeline: "2025-2027",
              investment: "$6.8M",
              potential: "Revolutionary",
              icon: Cpu
            },
            {
              technology: "Neural Interfaces",
              description: "Brain-computer interfaces for direct relationship therapy",
              timeline: "2026-2028",
              investment: "$4.2M",
              potential: "High",
              icon: Brain
            },
            {
              technology: "Holographic Therapy",
              description: "3D holographic environments for immersive relationship counseling",
              timeline: "2025-2026",
              investment: "$3.5M",
              potential: "High",
              icon: Monitor
            },
            {
              technology: "Genetic Compatibility",
              description: "DNA-based relationship compatibility analysis and optimization",
              timeline: "2027-2029",
              investment: "$5.1M",
              potential: "Revolutionary",
              icon: Dna
            }
          ].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="w-12 h-12 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <IconComponent className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 text-center mb-2">{tech.technology}</h4>
                <p className="text-sm text-gray-600 text-center mb-3">{tech.description}</p>
                <div className="space-y-1 text-xs text-center">
                  <p className="text-gray-500">Timeline: {tech.timeline}</p>
                  <p className="text-gray-500">Investment: {tech.investment}</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getImpactColor(tech.potential)}`}>
                    {tech.potential}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Innovation Metrics */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Award className="h-6 w-6 text-blue-600 mr-2" />
          Innovation Performance Metrics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Lightbulb className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">34</p>
            <p className="text-sm text-gray-600">Major Breakthroughs</p>
            <p className="text-xs text-gray-500">Last 24 Months</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">94.7%</p>
            <p className="text-sm text-gray-600">Innovation Score</p>
            <p className="text-xs text-gray-500">Industry Leading</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Rocket className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">$12.8M</p>
            <p className="text-sm text-gray-600">R&D Investment</p>
            <p className="text-xs text-gray-500">Annual Budget</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Research Analytics & Performance</h3>
          <p className="text-gray-600">Comprehensive analytics and performance metrics for research initiatives</p>
        </div>
        <div className="flex gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>Last Quarter</option>
            <option>This Year</option>
          </select>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export Analytics
          </button>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Research ROI</p>
              <p className="text-3xl font-bold text-blue-600">347%</p>
              <p className="text-green-600 text-sm">+23% vs Last Year</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Innovation Rate</p>
              <p className="text-3xl font-bold text-green-600">94.7%</p>
              <p className="text-green-600 text-sm">Industry Leading</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Project Success</p>
              <p className="text-3xl font-bold text-purple-600">89.3%</p>
              <p className="text-green-600 text-sm">+12% vs Industry</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Time to Market</p>
              <p className="text-3xl font-bold text-yellow-600">8.4</p>
              <p className="text-green-600 text-sm">Months Average</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Research Performance Trends */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <BarChart3 className="h-6 w-6 text-blue-600 mr-2" />
          Research Performance & Impact Trends
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Research Output by Category</h4>
            {[
              { category: 'AI Research', output: 34, trend: '+18%' },
              { category: 'Neuroscience', output: 28, trend: '+15%' },
              { category: 'VR/AR', output: 22, trend: '+12%' },
              { category: 'Quantum Computing', output: 16, trend: '+25%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm font-medium text-gray-700">{item.category}</span>
                <div className="flex items-center">
                  <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${item.output}%` }}></div>
                  </div>
                  <span className="text-sm font-semibold w-12">{item.output}%</span>
                  <span className="text-sm text-green-600 w-12">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Innovation Impact Metrics</h4>
            <div className="space-y-3">
              {[
                { metric: 'Patent Applications', value: 89, change: '+34%' },
                { metric: 'Publications', value: 156, change: '+28%' },
                { metric: 'Breakthroughs', value: 34, change: '+45%' },
                { metric: 'Collaborations', value: 67, change: '+22%' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-600 mr-2">{item.value}</span>
                    <span className="text-sm text-green-600">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Research Investment Analysis */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <PieChart className="h-6 w-6 text-blue-600 mr-2" />
          Research Investment & Resource Allocation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-blue-600">$12.8M</p>
            <p className="text-sm text-gray-600">Total R&D Budget</p>
            <p className="text-xs text-gray-500">Annual Investment</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-600">96</p>
            <p className="text-sm text-gray-600">Research Team</p>
            <p className="text-xs text-gray-500">Full-time Researchers</p>
          </div>
          <div className="text-center p-4 border rounded-lg">
            <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-purple-600">347%</p>
            <p className="text-sm text-gray-600">Research ROI</p>
            <p className="text-xs text-gray-500">Return on Investment</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectDetailModal = () => {
    if (!selectedProject) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                <p className="text-gray-600">{selectedProject.category} • {selectedProject.institution}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Project Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-600 text-sm font-medium">Progress</p>
                    <p className="text-2xl font-bold text-blue-800">{selectedProject.progress}%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-600 text-sm font-medium">Budget</p>
                    <p className="text-2xl font-bold text-green-800">${selectedProject.budget}M</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-600 text-sm font-medium">Team Size</p>
                    <p className="text-2xl font-bold text-purple-800">{selectedProject.team}</p>
                  </div>
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-600 text-sm font-medium">Duration</p>
                    <p className="text-2xl font-bold text-yellow-800">{selectedProject.duration}</p>
                  </div>
                  <Clock className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Project Description</h3>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>

            {/* Objectives and Milestones */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Project Objectives</h3>
                <div className="space-y-2">
                  {selectedProject.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Project Milestones</h3>
                <div className="space-y-2">
                  {selectedProject.milestones.map((milestone, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white rounded border">
                      <div>
                        <span className="text-sm font-medium text-gray-800">{milestone.phase}</span>
                        <p className="text-xs text-gray-500">{milestone.date}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies and Collaborators */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies & Methods</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Collaborating Institutions</h3>
                <div className="space-y-2">
                  {selectedProject.collaborators.map((collaborator, index) => (
                    <div key={index} className="flex items-center p-2 bg-gray-50 rounded">
                      <Building2 className="h-4 w-4 text-gray-600 mr-2" />
                      <span className="text-sm text-gray-700">{collaborator}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Research Impact & Output</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">{selectedProject.publications}</p>
                  <p className="text-sm text-gray-600">Publications</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{selectedProject.patents}</p>
                  <p className="text-sm text-gray-600">Patents</p>
                </div>
                <div className="text-center">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${getImpactColor(selectedProject.impact)}`}>
                    {selectedProject.impact} Impact
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <FileText className="h-4 w-4 inline mr-2" />
                Download Report
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Share2 className="h-4 w-4 inline mr-2" />
                Share Project
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Edit className="h-4 w-4 inline mr-2" />
                Edit Project
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 flex items-center">
                <Microscope className="h-8 w-8 text-blue-600 mr-3" />
                Advanced Research & Development Platform
              </h1>
              <p className="text-gray-600 mt-2">
                Comprehensive research platform driving relationship technology innovation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Innovation Score</p>
                <p className="text-2xl font-bold text-green-600">94.7%</p>
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Research Overview', icon: Microscope },
                { id: 'projects', label: 'Active Projects', icon: Rocket },
                { id: 'partners', label: 'Academic Partners', icon: Users },
                { id: 'innovation', label: 'Innovation Labs', icon: Lightbulb },
                { id: 'analytics', label: 'Research Analytics', icon: BarChart3 }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'overview' && renderOverviewTab()}
          {activeTab === 'projects' && renderProjectsTab()}
          {activeTab === 'partners' && renderPartnersTab()}
          {activeTab === 'innovation' && renderInnovationTab()}
          {activeTab === 'analytics' && renderAnalyticsTab()}
        </div>

        {/* Project Detail Modal */}
        {renderProjectDetailModal()}

        {/* Success Message */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Advanced Research & Development Platform Successfully Implemented!
              </h3>
              <p className="text-green-700 mt-1">
                Comprehensive research platform with 47 active projects, 23 academic partners, 
                $12.8M annual R&D budget, and 94.7% innovation score. Advanced research capabilities, 
                innovation labs, and academic partnerships enable breakthrough relationship technology development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedResearchDevelopmentPlatform;

