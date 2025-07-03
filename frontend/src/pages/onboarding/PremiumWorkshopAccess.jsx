import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, Users, Video, BookOpen, 
  Star, Filter, Search, ChevronDown, ChevronUp, 
  MapPin, Globe, Tag, Award, TrendingUp, Eye,
  MessageCircle, User, Heart, Zap, Coffee, Check,
  CalendarDays, CalendarClock, Play, Download, Share2,
  Bell, BellOff, Bookmark, CheckCircle, AlertCircle,
  Info, HelpCircle, ExternalLink
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { Switch } from '../../components/ui/switch';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog';
import { Progress } from '../../components/ui/progress';
import { Checkbox } from '../../components/ui/checkbox';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { Calendar as CalendarComponent } from '../../components/ui/calendar';
import { format } from 'date-fns';

const PremiumWorkshopAccess = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [selectedSort, setSelectedSort] = useState('date-asc');
  const [showFilters, setShowFilters] = useState(false);
  const [registeredOnly, setRegisteredOnly] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [showWorkshopDetails, setShowWorkshopDetails] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationName, setRegistrationName] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [includePartner, setIncludePartner] = useState(false);
  const [partnerEmail, setPartnerEmail] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState('1-hour');
  
  // Sample workshop categories
  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'communication', name: 'Communication', icon: <MessageCircle className="h-4 w-4" /> },
    { id: 'intimacy', name: 'Intimacy', icon: <Heart className="h-4 w-4" /> },
    { id: 'conflict', name: 'Conflict Resolution', icon: <Zap className="h-4 w-4" /> },
    { id: 'growth', name: 'Personal Growth', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'parenting', name: 'Parenting', icon: <Users className="h-4 w-4" /> },
    { id: 'dating', name: 'Dating & Romance', icon: <Coffee className="h-4 w-4" /> }
  ];
  
  // Sample workshop formats
  const formats = [
    { id: 'all', name: 'All Formats' },
    { id: 'live', name: 'Live Workshop', icon: <Video className="h-4 w-4" /> },
    { id: 'interactive', name: 'Interactive Session', icon: <Users className="h-4 w-4" /> },
    { id: 'recorded', name: 'Recorded Workshop', icon: <Play className="h-4 w-4" /> },
    { id: 'series', name: 'Workshop Series', icon: <BookOpen className="h-4 w-4" /> }
  ];
  
  // Sample sort options
  const sortOptions = [
    { id: 'date-asc', name: 'Date (Soonest First)' },
    { id: 'date-desc', name: 'Date (Latest First)' },
    { id: 'popularity', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'az', name: 'A-Z' },
    { id: 'za', name: 'Z-A' }
  ];
  
  // Sample reminder options
  const reminderOptions = [
    { id: '10-min', name: '10 minutes before' },
    { id: '30-min', name: '30 minutes before' },
    { id: '1-hour', name: '1 hour before' },
    { id: '1-day', name: '1 day before' },
    { id: '1-week', name: '1 week before' }
  ];
  
  // Sample upcoming workshops
  const upcomingWorkshops = [
    {
      id: 'workshop-1',
      title: 'The Art of Difficult Conversations',
      description: 'Learn practical techniques for navigating challenging discussions with your partner in a way that strengthens your connection rather than damaging it.',
      longDescription: 'Difficult conversations are inevitable in any relationship, but they don\'t have to be destructive. In this interactive workshop, Dr. Emily Johnson will guide you through research-backed techniques for approaching sensitive topics with empathy and clarity. You\'ll learn how to express your needs effectively, listen actively to your partner\'s perspective, and find collaborative solutions that honor both of your experiences.\n\nThis workshop combines theoretical frameworks with practical exercises that you can implement immediately. You\'ll have the opportunity to practice these techniques in a supportive environment and receive personalized feedback from Dr. Johnson.\n\nWhether you\'re facing specific challenges or simply want to strengthen your communication toolkit, this workshop will provide valuable skills for transforming potential conflicts into opportunities for deeper understanding and connection.',
      category: 'communication',
      format: 'live',
      presenter: 'Dr. Emily Johnson',
      presenterTitle: 'Relationship Psychologist',
      presenterBio: 'Dr. Emily Johnson is a licensed psychologist specializing in couples therapy with over 15 years of clinical experience. She holds a Ph.D. in Clinical Psychology from Stanford University and has published extensively on communication patterns in long-term relationships. Her approach combines cognitive-behavioral techniques with emotionally-focused therapy to help couples build stronger, more resilient connections.',
      presenterAvatar: '/avatars/emily-johnson.jpg',
      coverImage: '/workshops/difficult-conversations.jpg',
      date: '2025-07-15T18:00:00',
      duration: '90 minutes',
      capacity: 100,
      registered: 78,
      isRegistered: false,
      rating: 4.9,
      reviewCount: 142,
      location: 'Virtual (Zoom)',
      price: 'Premium Subscription',
      tags: ['communication', 'conflict resolution', 'emotional intelligence'],
      materials: [
        { name: 'Workshop Handout', type: 'PDF', url: '/materials/difficult-conversations-handout.pdf' },
        { name: 'Communication Exercise Worksheet', type: 'PDF', url: '/materials/communication-exercises.pdf' }
      ],
      prerequisites: 'None - suitable for all couples',
      benefits: [
        'Master the art of bringing up difficult topics without triggering defensiveness',
        'Learn to listen effectively even when emotions are running high',
        'Develop strategies for finding win-win solutions to recurring conflicts',
        'Practice techniques for de-escalating tense situations',
        'Build confidence in addressing issues before they become major problems'
      ]
    },
    {
      id: 'workshop-2',
      title: 'Rekindling Intimacy: Beyond the Bedroom',
      description: 'Explore the multidimensional nature of intimacy and learn practical techniques to deepen connection across emotional, intellectual, and physical domains.',
      longDescription: 'Intimacy is the lifeblood of a fulfilling relationship, encompassing far more than just physical connection. In this comprehensive workshop, renowned intimacy coach Dr. Aisha Patel will guide you through an exploration of the various dimensions of intimacy and how they interrelate to create a deeply connected partnership.\n\nThis workshop takes a holistic approach to intimacy, addressing emotional vulnerability, intellectual sharing, spiritual connection, and physical closeness. Through guided exercises, thoughtful discussions, and evidence-based practices, you\'ll discover new pathways to meaningful connection with your partner.\n\nDr. Patel creates a safe, respectful environment where couples can explore these sensitive topics comfortably. You\'ll leave with a personalized intimacy-building plan and practical tools to implement immediately in your relationship.',
      category: 'intimacy',
      format: 'interactive',
      presenter: 'Dr. Aisha Patel',
      presenterTitle: 'Intimacy & Relationship Coach',
      presenterBio: 'Dr. Aisha Patel is an internationally recognized intimacy coach and relationship therapist with a doctorate in Human Sexuality from the University of California. Her integrative approach combines traditional therapeutic techniques with mindfulness practices and somatic experiencing. Dr. Patel has helped thousands of couples revitalize their connection through her workshops, private practice, and bestselling books on relationship intimacy.',
      presenterAvatar: '/avatars/aisha-patel.jpg',
      coverImage: '/workshops/rekindling-intimacy.jpg',
      date: '2025-07-22T19:00:00',
      duration: '2 hours',
      capacity: 50,
      registered: 42,
      isRegistered: true,
      rating: 4.8,
      reviewCount: 98,
      location: 'Virtual (Zoom)',
      price: 'Premium Subscription',
      tags: ['intimacy', 'connection', 'vulnerability', 'trust'],
      materials: [
        { name: 'Intimacy Workbook', type: 'PDF', url: '/materials/intimacy-workbook.pdf' },
        { name: 'Connection Exercises', type: 'PDF', url: '/materials/connection-exercises.pdf' }
      ],
      prerequisites: 'None - suitable for all couples',
      benefits: [
        'Understand the different dimensions of intimacy and how they support each other',
        'Learn techniques for creating emotional safety and deepening vulnerability',
        'Discover new ways to connect intellectually and spiritually',
        'Develop a shared language for expressing needs and desires',
        'Create a customized plan for nurturing intimacy in your unique relationship'
      ]
    },
    {
      id: 'workshop-3',
      title: 'Financial Harmony: Building Wealth Together',
      description: 'A practical workshop on managing finances as a couple, from daily budgeting to long-term investment strategies that align with your shared values and goals.',
      longDescription: 'Money is one of the leading sources of conflict in relationships, but it doesn\'t have to be. This workshop, led by certified financial planner Michael Torres, transforms financial management from a potential battleground into an opportunity for collaboration and shared vision.\n\nYou\'ll learn practical strategies for merging financial lives, creating budgets that reflect your values, setting meaningful financial goals, and building wealth together. The workshop addresses common financial challenges couples face and provides frameworks for making decisions that honor both partners\' perspectives.\n\nMichael brings a relationship-centered approach to financial planning, focusing not just on the numbers but on the communication, compromise, and clarity needed for financial harmony. This workshop is suitable for couples at any stage, from those just moving in together to those planning for retirement.',
      category: 'finances',
      format: 'live',
      presenter: 'Michael Torres, CFP',
      presenterTitle: 'Financial Advisor',
      presenterBio: 'Michael Torres is a Certified Financial Planner with over a decade of experience specializing in financial planning for couples. After witnessing how money conflicts affected his parents\' marriage, he dedicated his career to helping couples build financial harmony. Michael holds an MBA from the University of Chicago and has been featured in The Wall Street Journal, CNBC, and Forbes for his innovative approaches to couples\' financial planning.',
      presenterAvatar: '/avatars/michael-torres.jpg',
      coverImage: '/workshops/financial-harmony.jpg',
      date: '2025-07-29T18:30:00',
      duration: '2 hours',
      capacity: 75,
      registered: 51,
      isRegistered: false,
      rating: 4.7,
      reviewCount: 86,
      location: 'Virtual (Zoom)',
      price: 'Premium Subscription',
      tags: ['finances', 'budgeting', 'investing', 'goals'],
      materials: [
        { name: 'Financial Planning Workbook', type: 'PDF', url: '/materials/financial-planning-workbook.pdf' },
        { name: 'Budget Template', type: 'Excel', url: '/materials/budget-template.xlsx' },
        { name: 'Investment Guide', type: 'PDF', url: '/materials/investment-guide.pdf' }
      ],
      prerequisites: 'None - suitable for all financial knowledge levels',
      benefits: [
        'Develop a shared vision for your financial future',
        'Learn effective strategies for discussing money without conflict',
        'Create a practical budget that aligns with your values and goals',
        'Understand investment options for building long-term wealth',
        'Establish a framework for making financial decisions as a team'
      ]
    },
    {
      id: 'workshop-4',
      title: 'The Science of Lasting Love: Research-Backed Relationship Strategies',
      description: 'Discover the scientifically-proven methods to build and maintain a fulfilling, long-lasting relationship based on decades of relationship research.',
      longDescription: 'What makes some relationships thrive while others struggle? In this fascinating workshop, Dr. Robert Williams shares insights from decades of relationship research, translating scientific findings into practical strategies you can apply immediately.\n\nDrawing on landmark studies from leading relationship researchers, this workshop explores the habits, behaviors, and mindsets that contribute to relationship longevity and satisfaction. You\'ll learn about attachment theory, emotional bids, the importance of repair attempts, and other evidence-based concepts that illuminate the path to lasting love.\n\nDr. Williams presents complex research in an accessible, engaging way, connecting scientific findings to real-life application. Through interactive exercises and guided discussions, you\'ll discover how to apply these insights to your unique relationship context.',
      category: 'growth',
      format: 'series',
      presenter: 'Dr. Robert Williams',
      presenterTitle: 'Couples Therapist & Researcher',
      presenterBio: 'Dr. Robert Williams is a couples therapist and relationship researcher with over 20 years of experience studying what makes relationships succeed. He earned his Ph.D. in Clinical Psychology from the University of Washington, where he worked with renowned relationship researchers. Dr. Williams has published numerous peer-reviewed articles on relationship dynamics and is known for his ability to translate complex research into practical strategies for couples.',
      presenterAvatar: '/avatars/robert-williams.jpg',
      coverImage: '/workshops/science-of-love.jpg',
      date: '2025-08-05T19:00:00',
      duration: '4 sessions, 90 minutes each',
      capacity: 60,
      registered: 48,
      isRegistered: false,
      rating: 4.9,
      reviewCount: 112,
      location: 'Virtual (Zoom)',
      price: 'Premium Subscription',
      tags: ['research', 'psychology', 'attachment theory', 'love languages'],
      materials: [
        { name: 'Research Summary Guide', type: 'PDF', url: '/materials/research-summary.pdf' },
        { name: 'Relationship Assessment Tools', type: 'PDF', url: '/materials/assessment-tools.pdf' },
        { name: 'Practice Exercises', type: 'PDF', url: '/materials/practice-exercises.pdf' }
      ],
      prerequisites: 'None - suitable for all couples',
      benefits: [
        'Understand the science behind successful relationships',
        'Learn to identify and respond to emotional bids for connection',
        'Discover your attachment style and how it influences your relationship',
        'Master the art of effective repair after conflicts',
        'Build daily habits that strengthen your bond over time'
      ]
    }
  ];
  
  // Sample past workshops (recordings)
  const pastWorkshops = [
    {
      id: 'workshop-5',
      title: 'Navigating Major Life Transitions Together',
      description: 'Learn strategies for supporting each other through significant life changes—from career shifts to health challenges—while maintaining a strong relationship.',
      longDescription: 'Major life transitions can put significant strain on even the strongest relationships. In this recorded workshop, Dr. Sarah Johnson provides a roadmap for navigating these changes as a team rather than as adversaries or disconnected individuals.\n\nDrawing on her extensive clinical experience, Dr. Johnson addresses common transitions such as career changes, becoming parents, relocating, health challenges, and caring for aging parents. She explores the psychological impact of these changes and offers concrete strategies for maintaining connection during turbulent times.\n\nThe workshop includes case studies of couples who successfully navigated major transitions, practical communication techniques for discussing change-related stress, and exercises for building resilience as a couple. This resource is valuable for couples currently facing transitions as well as those who want to prepare for future changes.',
      category: 'growth',
      format: 'recorded',
      presenter: 'Dr. Sarah Johnson',
      presenterTitle: 'Clinical Psychologist',
      presenterBio: 'Dr. Sarah Johnson is a clinical psychologist specializing in helping couples navigate life transitions. With 18 years of experience in private practice, she has guided hundreds of couples through major life changes while strengthening their relationships. Dr. Johnson holds a Psy.D. from Rutgers University and completed specialized training in life transition counseling at the Gottman Institute.',
      presenterAvatar: '/avatars/sarah-johnson.jpg',
      coverImage: '/workshops/life-transitions.jpg',
      date: '2025-06-15T18:00:00',
      duration: '100 minutes',
      views: 342,
      isWatched: true,
      completionPercentage: 100,
      rating: 4.8,
      reviewCount: 76,
      recordingUrl: '/recordings/life-transitions.mp4',
      tags: ['transitions', 'resilience', 'support', 'change'],
      materials: [
        { name: 'Transition Planning Workbook', type: 'PDF', url: '/materials/transition-workbook.pdf' },
        { name: 'Resilience Building Exercises', type: 'PDF', url: '/materials/resilience-exercises.pdf' }
      ],
      chapters: [
        { title: 'Understanding Transitions', timestamp: '00:00', duration: '15 min' },
        { title: 'Psychological Impact of Change', timestamp: '15:00', duration: '20 min' },
        { title: 'Communication During Transitions', timestamp: '35:00', duration: '25 min' },
        { title: 'Building Resilience Together', timestamp: '60:00', duration: '20 min' },
        { title: 'Creating a Transition Plan', timestamp: '80:00', duration: '20 min' }
      ]
    },
    {
      id: 'workshop-6',
      title: 'Emotional Intelligence for Couples',
      description: 'Learn how to recognize, understand, and manage emotions—both yours and your partner's—to create a relationship built on empathy and mutual growth.',
      longDescription: 'Emotional intelligence is a critical factor in relationship success, influencing how well couples communicate, resolve conflicts, and support each other. In this comprehensive recorded workshop, Dr. Elena Rodriguez provides a deep dive into developing emotional intelligence specifically within the context of intimate relationships.\n\nThe workshop covers the four domains of emotional intelligence—self-awareness, self-management, social awareness, and relationship management—with specific applications to couple dynamics. Dr. Rodriguez explains how to recognize emotional triggers, regulate reactions, empathize effectively with your partner, and navigate complex emotional situations together.\n\nThrough demonstrations, case examples, and practical exercises, you\'ll gain tools for improving emotional communication, responding constructively to your partner\'s emotions, and creating an emotionally safe relationship environment. This workshop is valuable for couples at any stage who want to enhance their emotional connection.',
      category: 'communication',
      format: 'recorded',
      presenter: 'Dr. Elena Rodriguez',
      presenterTitle: 'Emotional Intelligence Expert',
      presenterBio: 'Dr. Elena Rodriguez is a psychologist and emotional intelligence specialist who has dedicated her career to helping couples develop stronger emotional connections. She holds a Ph.D. in Psychology from Columbia University and certification in emotional intelligence coaching. Dr. Rodriguez has conducted research on the impact of emotional intelligence on relationship satisfaction and is the author of "Emotional Intelligence for Loving Relationships," a bestselling relationship guide.',
      presenterAvatar: '/avatars/elena-rodriguez.jpg',
      coverImage: '/workshops/emotional-intelligence.jpg',
      date: '2025-05-28T19:00:00',
      duration: '110 minutes',
      views: 289,
      isWatched: false,
      completionPercentage: 0,
      rating: 4.9,
      reviewCount: 94,
      recordingUrl: '/recordings/emotional-intelligence.mp4',
      tags: ['emotional intelligence', 'empathy', 'self-awareness'],
      materials: [
        { name: 'Emotional Intelligence Assessment', type: 'PDF', url: '/materials/ei-assessment.pdf' },
        { name: 'Emotion Regulation Techniques', type: 'PDF', url: '/materials/emotion-regulation.pdf' },
        { name: 'Empathy Building Exercises', type: 'PDF', url: '/materials/empathy-exercises.pdf' }
      ],
      chapters: [
        { title: 'Understanding Emotional Intelligence', timestamp: '00:00', duration: '15 min' },
        { title: 'Self-Awareness in Relationships', timestamp: '15:00', duration: '20 min' },
        { title: 'Managing Your Emotional Responses', timestamp: '35:00', duration: '25 min' },
        { title: 'Empathy and Partner Awareness', timestamp: '60:00', duration: '25 min' },
        { title: 'Navigating Emotional Situations Together', timestamp: '85:00', duration: '25 min' }
      ]
    },
    {
      id: 'workshop-7',
      title: 'The Love Languages Workshop',
      description: 'An interactive workshop that helps you identify and speak your partner's love language, transforming how you express and receive love in your relationship.',
      longDescription: 'Based on Dr. Gary Chapman\'s influential concept of the Five Love Languages, this workshop provides a practical framework for understanding how you and your partner prefer to give and receive love. Led by relationship counselor Dr. Thomas Chapman, this session goes beyond basic love language identification to explore how these preferences develop and how they can evolve over time.\n\nThe workshop includes a guided assessment to identify your primary and secondary love languages, as well as exercises to help you recognize your partner\'s love language through their behaviors and requests. Dr. Chapman provides specific, actionable strategies for expressing love in each language: Words of Affirmation, Quality Time, Receiving Gifts, Acts of Service, and Physical Touch.\n\nYou\'ll learn how to create a "love language map" for your relationship, develop daily practices that address both partners\' needs, and use love languages as a tool for resolving conflicts and misunderstandings. This workshop is ideal for couples at any stage who want to enhance their expression of love and appreciation.',
      category: 'intimacy',
      format: 'recorded',
      presenter: 'Dr. Thomas Chapman',
      presenterTitle: 'Relationship Counselor',
      presenterBio: 'Dr. Thomas Chapman is a relationship counselor with 25 years of experience helping couples strengthen their connections. As a certified Love Languages specialist and family therapist, he has conducted over 500 workshops on applying the Five Love Languages in relationships. Dr. Chapman holds a Ph.D. in Family Therapy from Northwestern University and maintains a private practice specializing in couples counseling.',
      presenterAvatar: '/avatars/thomas-chapman.jpg',
      coverImage: '/workshops/love-languages.jpg',
      date: '2025-05-10T18:30:00',
      duration: '95 minutes',
      views: 412,
      isWatched: true,
      completionPercentage: 75,
      rating: 4.7,
      reviewCount: 128,
      recordingUrl: '/recordings/love-languages.mp4',
      tags: ['love languages', 'communication', 'appreciation'],
      materials: [
        { name: 'Love Languages Assessment', type: 'PDF', url: '/materials/love-languages-assessment.pdf' },
        { name: 'Love Languages Action Plan', type: 'PDF', url: '/materials/love-languages-plan.pdf' }
      ],
      chapters: [
        { title: 'Introduction to Love Languages', timestamp: '00:00', duration: '15 min' },
        { title: 'Words of Affirmation & Quality Time', timestamp: '15:00', duration: '20 min' },
        { title: 'Receiving Gifts & Acts of Service', timestamp: '35:00', duration: '20 min' },
        { title: 'Physical Touch & Identifying Patterns', timestamp: '55:00', duration: '20 min' },
        { title: 'Creating Your Love Language Plan', timestamp: '75:00', duration: '20 min' }
      ]
    },
    {
      id: 'workshop-8',
      title: 'Building a Secure Attachment: The Foundation of Relationship Health',
      description: 'Explore attachment theory and learn how to create a secure bond that allows both partners to thrive independently and as a couple.',
      longDescription: 'Attachment patterns formed in childhood significantly impact our adult relationships, influencing everything from how we communicate needs to how we respond to conflict. In this illuminating workshop, attachment specialist Dr. Maya Wilson guides couples through understanding their attachment styles and building a more secure connection.\n\nThe workshop begins with an overview of attachment theory and the four main attachment styles: secure, anxious, avoidant, and disorganized. Dr. Wilson helps participants identify their own attachment patterns and recognize how these interact with their partner\'s style to create relationship dynamics. Through case studies and research findings, she illustrates how attachment influences trust, intimacy, conflict resolution, and emotional regulation.\n\nThe second half of the workshop focuses on practical strategies for developing more secure attachment, regardless of your starting point. You\'ll learn techniques for creating a secure base for each other, communicating needs clearly, responding to attachment-triggered reactions, and healing attachment wounds from the past. This workshop provides a powerful framework for understanding relationship patterns and creating lasting security.',
      category: 'growth',
      format: 'recorded',
      presenter: 'Dr. Maya Wilson',
      presenterTitle: 'Attachment Specialist',
      presenterBio: 'Dr. Maya Wilson is a psychologist specializing in attachment theory and its applications to adult relationships. She completed her Ph.D. at the University of Michigan with a focus on attachment processes in couples therapy. Dr. Wilson has conducted research on how secure attachment can be developed in adulthood and has trained therapists internationally in attachment-based interventions for couples. Her compassionate, evidence-based approach has helped hundreds of couples create more secure bonds.',
      presenterAvatar: '/avatars/maya-wilson.jpg',
      coverImage: '/workshops/secure-attachment.jpg',
      date: '2025-04-22T19:00:00',
      duration: '120 minutes',
      views: 267,
      isWatched: false,
      completionPercentage: 0,
      rating: 4.8,
      reviewCount: 83,
      recordingUrl: '/recordings/secure-attachment.mp4',
      tags: ['attachment theory', 'security', 'trust', 'bonding'],
      materials: [
        { name: 'Attachment Style Assessment', type: 'PDF', url: '/materials/attachment-assessment.pdf' },
        { name: 'Security-Building Exercises', type: 'PDF', url: '/materials/security-exercises.pdf' },
        { name: 'Attachment Healing Guide', type: 'PDF', url: '/materials/attachment-healing.pdf' }
      ],
      chapters: [
        { title: 'Understanding Attachment Theory', timestamp: '00:00', duration: '20 min' },
        { title: 'Identifying Attachment Styles', timestamp: '20:00', duration: '25 min' },
        { title: 'Attachment Dynamics in Relationships', timestamp: '45:00', duration: '25 min' },
        { title: 'Building Secure Connection', timestamp: '70:00', duration: '25 min' },
        { title: 'Healing Attachment Wounds', timestamp: '95:00', duration: '25 min' }
      ]
    }
  ];
  
  // Filter workshops based on search, category, format, and other filters
  const filterWorkshops = (workshops) => {
    return workshops.filter(workshop => {
      // Filter by search query
      if (searchQuery && !workshop.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          !workshop.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !workshop.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
        return false;
      }
      
      // Filter by category
      if (selectedCategory !== 'all' && workshop.category !== selectedCategory) {
        return false;
      }
      
      // Filter by format
      if (selectedFormat !== 'all' && workshop.format !== selectedFormat) {
        return false;
      }
      
      // Filter registered only
      if (registeredOnly && !workshop.isRegistered && (activeTab === 'upcoming')) {
        return false;
      }
      
      // Filter watched only
      if (registeredOnly && !workshop.isWatched && (activeTab === 'recordings')) {
        return false;
      }
      
      return true;
    });
  };
  
  // Sort filtered workshops
  const sortWorkshops = (workshops) => {
    return [...workshops].sort((a, b) => {
      switch (selectedSort) {
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'popularity':
          return (b.registered || b.views || 0) - (a.registered || a.views || 0);
        case 'rating':
          return b.rating - a.rating;
        case 'az':
          return a.title.localeCompare(b.title);
        case 'za':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  };
  
  // Get workshops for current tab
  const getTabWorkshops = () => {
    switch (activeTab) {
      case 'upcoming':
        return sortWorkshops(filterWorkshops(upcomingWorkshops));
      case 'recordings':
        return sortWorkshops(filterWorkshops(pastWorkshops));
      case 'registered':
        return sortWorkshops(filterWorkshops(upcomingWorkshops.filter(w => w.isRegistered)));
      case 'watched':
        return sortWorkshops(filterWorkshops(pastWorkshops.filter(w => w.isWatched)));
      default:
        return [];
    }
  };
  
  const handleWorkshopSelect = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowWorkshopDetails(true);
  };
  
  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowRegistrationForm(true);
  };
  
  const handleSubmitRegistration = () => {
    // In a real implementation, this would submit to the backend
    toast({
      title: "Registration Successful",
      description: `You have been registered for "${selectedWorkshop.title}". A confirmation has been sent to your email.`,
    });
    setShowRegistrationForm(false);
    setShowWorkshopDetails(false);
  };
  
  const handleAddToCalendar = (workshop) => {
    toast({
      title: "Added to Calendar",
      description: `"${workshop.title}" has been added to your calendar.`,
    });
  };
  
  const handleDownloadMaterials = (material) => {
    toast({
      title: "Material Downloaded",
      description: `${material.name} has been downloaded.`,
    });
  };
  
  const handleShareWorkshop = (workshop) => {
    toast({
      title: "Share Link Copied",
      description: "A link to this workshop has been copied to your clipboard.",
    });
  };
  
  const handleToggleReminder = () => {
    setReminderEnabled(!reminderEnabled);
    toast({
      title: reminderEnabled ? "Reminder Disabled" : "Reminder Enabled",
      description: reminderEnabled 
        ? "You will not receive reminders for this workshop." 
        : "You will receive reminders for this workshop.",
    });
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  };
  
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true
    });
  };
  
  const getFormatIcon = (format) => {
    switch (format) {
      case 'live':
        return <Video className="h-5 w-5" />;
      case 'interactive':
        return <Users className="h-5 w-5" />;
      case 'recorded':
        return <Play className="h-5 w-5" />;
      case 'series':
        return <BookOpen className="h-5 w-5" />;
      default:
        return <Video className="h-5 w-5" />;
    }
  };
  
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };
  
  const getFormatName = (formatId) => {
    const format = formats.find(fmt => fmt.id === formatId);
    return format ? format.name : formatId;
  };
  
  const isUpcoming = (dateString) => {
    const workshopDate = new Date(dateString);
    const now = new Date();
    return workshopDate > now;
  };
  
  const getTimeUntil = (dateString) => {
    const workshopDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(workshopDate - now);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 30) {
      const diffMonths = Math.floor(diffDays / 30);
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''} away`;
    } else if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} away`;
    } else {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours > 0) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} away`;
      } else {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} away`;
      }
    }
  };
  
  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Premium Workshop Access</h1>
            <p className="text-muted-foreground mt-1">
              Live and recorded workshops led by relationship experts
            </p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {showFilters ? (
                <ChevronUp className="h-4 w-4 ml-2" />
              ) : (
                <ChevronDown className="h-4 w-4 ml-2" />
              )}
            </Button>
            
            <div className="relative">
              <Search className="h-4 w-4 absolute left-2.5 top-2.5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search workshops..."
                className="pl-8 w-[200px] md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {showFilters && (
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category" className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category.id} value={category.id}>
                          <div className="flex items-center">
                            {category.icon && <span className="mr-2">{category.icon}</span>}
                            {category.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="format">Format</Label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger id="format" className="mt-1">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      {formats.map(format => (
                        <SelectItem key={format.id} value={format.id}>
                          <div className="flex items-center">
                            {format.icon && <span className="mr-2">{format.icon}</span>}
                            {format.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="sort">Sort By</Label>
                  <Select value={selectedSort} onValueChange={setSelectedSort}>
                    <SelectTrigger id="sort" className="mt-1">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map(option => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center mt-6">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="registered" 
                    checked={registeredOnly}
                    onCheckedChange={setRegisteredOnly}
                  />
                  <Label htmlFor="registered" className="cursor-pointer">
                    {activeTab === 'upcoming' || activeTab === 'registered' 
                      ? 'Registered only' 
                      : 'Watched only'}
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
            <TabsTrigger value="registered">Registered</TabsTrigger>
            <TabsTrigger value="watched">Watched</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getTabWorkshops().map(workshop => (
                <Card key={workshop.id} className="overflow-hidden h-full flex flex-col">
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center" 
                      style={{ backgroundImage: `url(${workshop.coverImage})` }}
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      {workshop.isRegistered && activeTab !== 'recordings' && (
                        <Badge variant="secondary" className="bg-green-500/90 text-white backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Registered
                        </Badge>
                      )}
                      {workshop.isWatched && activeTab === 'recordings' && (
                        <Badge variant="secondary" className="bg-green-500/90 text-white backdrop-blur-sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Watched
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        {getFormatIcon(workshop.format)}
                        <span className="ml-1">{getFormatName(workshop.format)}</span>
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">
                        {getCategoryName(workshop.category)}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium ml-1">{workshop.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl cursor-pointer hover:text-primary transition-colors" onClick={() => handleWorkshopSelect(workshop)}>
                      {workshop.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{formatDate(workshop.date)}</span>
                      <Separator orientation="vertical" className="mx-2 h-3" />
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{formatTime(workshop.date)}</span>
                    </div>
                    {activeTab !== 'recordings' && isUpcoming(workshop.date) && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {getTimeUntil(workshop.date)}
                        </Badge>
                      </div>
                    )}
                    {activeTab === 'recordings' && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <Clock className="h-3 w-3 inline mr-1" />
                        <span>{workshop.duration}</span>
                        <Separator orientation="vertical" className="mx-2 inline-block h-3" />
                        <Eye className="h-3 w-3 inline mr-1" />
                        <span>{workshop.views} views</span>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="py-2 flex-grow">
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {workshop.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="pt-2 pb-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={workshop.presenterAvatar} alt={workshop.presenter} />
                        <AvatarFallback>{workshop.presenter.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm font-medium">{workshop.presenter}</p>
                        <p className="text-xs text-muted-foreground">{workshop.presenterTitle}</p>
                      </div>
                    </div>
                    
                    {activeTab !== 'recordings' ? (
                      <Button 
                        variant={workshop.isRegistered ? "outline" : "default"} 
                        size="sm" 
                        onClick={() => workshop.isRegistered ? handleWorkshopSelect(workshop) : handleRegister(workshop)}
                      >
                        {workshop.isRegistered ? "View Details" : "Register"}
                      </Button>
                    ) : (
                      <Button 
                        variant="default" 
                        size="sm" 
                        onClick={() => handleWorkshopSelect(workshop)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {getTabWorkshops().length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No workshops found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        {/* Workshop Details Dialog */}
        <Dialog open={showWorkshopDetails} onOpenChange={setShowWorkshopDetails}>
          <DialogContent className="max-w-4xl">
            {selectedWorkshop && (
              <>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">
                      {getCategoryName(selectedWorkshop.category)}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-medium ml-1">{selectedWorkshop.rating}</span>
                      <span className="text-xs text-muted-foreground ml-1">({selectedWorkshop.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <DialogTitle className="text-2xl mt-2">{selectedWorkshop.title}</DialogTitle>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Badge variant="secondary" className="mr-2">
                      {getFormatIcon(selectedWorkshop.format)}
                      <span className="ml-1">{getFormatName(selectedWorkshop.format)}</span>
                    </Badge>
                    {activeTab !== 'recordings' ? (
                      <>
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{formatDate(selectedWorkshop.date)}</span>
                        <Separator orientation="vertical" className="mx-2 h-3" />
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{formatTime(selectedWorkshop.date)}</span>
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{selectedWorkshop.duration}</span>
                        <Separator orientation="vertical" className="mx-2 h-3" />
                        <Eye className="h-3 w-3 mr-1" />
                        <span>{selectedWorkshop.views} views</span>
                      </>
                    )}
                  </div>
                </DialogHeader>
                
                <div className="relative">
                  <div 
                    className="h-64 bg-cover bg-center rounded-md" 
                    style={{ backgroundImage: `url(${selectedWorkshop.coverImage})` }}
                  />
                  {activeTab === 'recordings' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary">
                        <Play className="h-8 w-8 text-primary-foreground" />
                      </Button>
                    </div>
                  )}
                </div>
                
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedWorkshop.presenterAvatar} alt={selectedWorkshop.presenter} />
                    <AvatarFallback>{selectedWorkshop.presenter.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedWorkshop.presenter}</p>
                    <p className="text-sm text-muted-foreground">{selectedWorkshop.presenterTitle}</p>
                    <Button variant="link" className="p-0 h-auto text-sm" onClick={() => toast({ title: "Bio Expanded", description: "Presenter bio would expand in a real implementation." })}>
                      View full bio
                    </Button>
                  </div>
                </div>
                
                <DialogDescription className="text-foreground">
                  {selectedWorkshop.longDescription || selectedWorkshop.description}
                </DialogDescription>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedWorkshop.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {activeTab !== 'recordings' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-medium mb-2">Workshop Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start">
                          <Calendar className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Date & Time</p>
                            <p className="text-muted-foreground">{formatDate(selectedWorkshop.date)} at {formatTime(selectedWorkshop.date)}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Duration</p>
                            <p className="text-muted-foreground">{selectedWorkshop.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="text-muted-foreground">{selectedWorkshop.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Capacity</p>
                            <p className="text-muted-foreground">{selectedWorkshop.registered} / {selectedWorkshop.capacity} registered</p>
                            <Progress value={(selectedWorkshop.registered / selectedWorkshop.capacity) * 100} className="h-2 mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">What You'll Learn</h4>
                      <ul className="space-y-1 text-sm">
                        {selectedWorkshop.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 mr-2 mt-0.5 text-green-500" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'recordings' && selectedWorkshop.chapters && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Workshop Chapters</h4>
                    <div className="space-y-2">
                      {selectedWorkshop.chapters.map((chapter, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer">
                          <div className="flex items-center">
                            <Play className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{chapter.title}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <span>{chapter.timestamp}</span>
                            <span className="mx-2">•</span>
                            <span>{chapter.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedWorkshop.materials && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Workshop Materials</h4>
                    <div className="space-y-2">
                      {selectedWorkshop.materials.map((material, index) => (
                        <div key={index} className="flex items-center justify-between p-2 rounded-md hover:bg-muted">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{material.name}</span>
                            <Badge variant="outline" className="ml-2 text-xs">{material.type}</Badge>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDownloadMaterials(material)}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <DialogFooter className="flex-col sm:flex-row gap-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShareWorkshop(selectedWorkshop)}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    
                    {activeTab !== 'recordings' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAddToCalendar(selectedWorkshop)}
                      >
                        <CalendarDays className="h-4 w-4 mr-2" />
                        Add to Calendar
                      </Button>
                    )}
                    
                    {activeTab === 'recordings' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownloadMaterials({ name: 'Full Recording', type: 'Video' })}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                  
                  {activeTab !== 'recordings' ? (
                    selectedWorkshop.isRegistered ? (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleToggleReminder()}
                      >
                        {reminderEnabled ? (
                          <>
                            <BellOff className="h-4 w-4 mr-2" />
                            Disable Reminder
                          </>
                        ) : (
                          <>
                            <Bell className="h-4 w-4 mr-2" />
                            Enable Reminder
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button onClick={() => handleRegister(selectedWorkshop)}>
                        Register Now
                      </Button>
                    )
                  ) : (
                    <Button>
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                  )}
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
        
        {/* Registration Form Dialog */}
        <Dialog open={showRegistrationForm} onOpenChange={setShowRegistrationForm}>
          <DialogContent className="max-w-md">
            {selectedWorkshop && (
              <>
                <DialogHeader>
                  <DialogTitle>Register for Workshop</DialogTitle>
                  <DialogDescription>
                    Complete the form below to register for "{selectedWorkshop.title}"
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      value={registrationName} 
                      onChange={(e) => setRegistrationName(e.target.value)} 
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={registrationEmail} 
                      onChange={(e) => setRegistrationEmail(e.target.value)} 
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="include-partner" 
                        checked={includePartner}
                        onCheckedChange={setIncludePartner}
                      />
                      <Label htmlFor="include-partner" className="cursor-pointer">Include my partner</Label>
                    </div>
                    
                    {includePartner && (
                      <div className="pt-2">
                        <Label htmlFor="partner-email">Partner's Email</Label>
                        <Input 
                          id="partner-email" 
                          type="email" 
                          value={partnerEmail} 
                          onChange={(e) => setPartnerEmail(e.target.value)} 
                          placeholder="Enter your partner's email address"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Set Reminder</Label>
                    <Select defaultValue="1-hour" onValueChange={setReminderTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reminder time" />
                      </SelectTrigger>
                      <SelectContent>
                        {reminderOptions.map(option => (
                          <SelectItem key={option.id} value={option.id}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Workshop Date & Time</Label>
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div>
                        <p className="font-medium">{formatDate(selectedWorkshop.date)}</p>
                        <p className="text-sm text-muted-foreground">{formatTime(selectedWorkshop.date)}</p>
                      </div>
                      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Calendar className="h-4 w-4 mr-2" />
                            View Calendar
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="end">
                          <CalendarComponent
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date || new Date());
                              setCalendarOpen(false);
                            }}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button variant="outline" onClick={() => setShowRegistrationForm(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleSubmitRegistration}>
                    Complete Registration
                  </Button>
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  );
};

export default PremiumWorkshopAccess;

