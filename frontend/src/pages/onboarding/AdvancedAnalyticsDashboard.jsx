import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, LineChart, PieChart, Calendar, Clock, 
  ArrowUp, ArrowDown, ArrowRight, Filter, Download,
  FileText, Share, Printer, Bookmark, Zap, Activity,
  Heart, MessageCircle, Target, TrendingUp, Users,
  Smile, Frown, Meh, HelpCircle, Info, Settings,
  ChevronDown, ChevronUp, RefreshCw, Search
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger, DialogFooter 
} from '../../components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';

// Import recharts components for data visualization
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend
} from 'recharts';

const AdvancedAnalyticsDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState('month');
  const [showFilters, setShowFilters] = useState(false);
  
  // Sample data for visualizations
  // Note: In a real implementation, this would come from the user's actual data
  const communicationData = [
    { date: 'Week 1', positive: 65, negative: 35 },
    { date: 'Week 2', positive: 60, negative: 40 },
    { date: 'Week 3', positive: 70, negative: 30 },
    { date: 'Week 4', positive: 75, negative: 25 },
    { date: 'Week 5', positive: 72, negative: 28 },
    { date: 'Week 6', positive: 80, negative: 20 },
    { date: 'Week 7', positive: 78, negative: 22 },
    { date: 'Week 8', positive: 85, negative: 15 },
  ];
  
  const connectionScoreData = [
    { date: 'Jan', score: 65 },
    { date: 'Feb', score: 68 },
    { date: 'Mar', score: 72 },
    { date: 'Apr', score: 70 },
    { date: 'May', score: 75 },
    { date: 'Jun', score: 78 },
    { date: 'Jul', score: 82 },
  ];
  
  const activityCompletionData = [
    { name: 'Communication', value: 85 },
    { name: 'Quality Time', value: 70 },
    { name: 'Conflict Resolution', value: 60 },
    { name: 'Intimacy', value: 75 },
    { name: 'Shared Goals', value: 65 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  const conflictResolutionData = [
    { month: 'Jan', resolved: 8, unresolved: 2 },
    { month: 'Feb', resolved: 7, unresolved: 3 },
    { month: 'Mar', resolved: 9, unresolved: 1 },
    { month: 'Apr', resolved: 8, unresolved: 2 },
    { month: 'May', resolved: 10, unresolved: 0 },
    { month: 'Jun', resolved: 9, unresolved: 1 },
    { month: 'Jul', resolved: 10, unresolved: 0 },
  ];
  
  const qualityTimeData = [
    { category: 'Conversation', hours: 12 },
    { category: 'Activities', hours: 8 },
    { category: 'Travel', hours: 5 },
    { category: 'Meals', hours: 10 },
    { category: 'Entertainment', hours: 7 },
  ];
  
  const moodTrendData = [
    { date: 'Week 1', partner1: 7, partner2: 6 },
    { date: 'Week 2', partner1: 6, partner2: 7 },
    { date: 'Week 3', partner1: 8, partner2: 7 },
    { date: 'Week 4', partner1: 7, partner2: 8 },
    { date: 'Week 5', partner1: 9, partner2: 8 },
    { date: 'Week 6', partner1: 8, partner2: 9 },
    { date: 'Week 7', partner1: 9, partner2: 9 },
    { date: 'Week 8', partner1: 8, partner2: 8 },
  ];
  
  // Insights based on the data
  const insights = [
    {
      title: "Communication Improvement",
      description: "Your positive communication ratio has improved by 20% over the last 8 weeks.",
      recommendation: "Continue practicing active listening techniques during discussions."
    },
    {
      title: "Quality Time Distribution",
      description: "You spend most quality time in conversation and shared meals.",
      recommendation: "Consider adding more variety with new shared activities or travel experiences."
    },
    {
      title: "Conflict Resolution Progress",
      description: "Your conflict resolution rate has improved to 100% in recent months.",
      recommendation: "Maintain your current approach to addressing issues promptly and constructively."
    },
    {
      title: "Mood Synchronization",
      description: "Your mood patterns are increasingly synchronized, indicating emotional attunement.",
      recommendation: "Continue checking in with each other daily to maintain this connection."
    }
  ];
  
  // Relationship milestones
  const milestones = [
    {
      date: "July 1, 2025",
      title: "Completed Communication Workshop",
      description: "Both partners completed all modules in the advanced communication workshop."
    },
    {
      date: "June 15, 2025",
      title: "Conflict Resolution Milestone",
      description: "Successfully resolved 10 consecutive conflicts using the structured approach."
    },
    {
      date: "May 20, 2025",
      title: "Quality Time Goal Achieved",
      description: "Reached the goal of 15+ hours of quality time per week for 4 consecutive weeks."
    },
    {
      date: "April 5, 2025",
      title: "Relationship Check-in Streak",
      description: "Completed 30 consecutive daily relationship check-ins."
    }
  ];
  
  // Goals tracking
  const goals = [
    {
      title: "Improve Communication",
      target: "85% positive communication ratio",
      current: "85%",
      status: "achieved",
      dueDate: "July 31, 2025"
    },
    {
      title: "Quality Time",
      target: "15 hours per week",
      current: "12 hours",
      status: "in-progress",
      dueDate: "August 15, 2025"
    },
    {
      title: "Date Nights",
      target: "4 per month",
      current: "3",
      status: "in-progress",
      dueDate: "July 31, 2025"
    },
    {
      title: "Shared Project",
      target: "Complete home renovation plan",
      current: "75% complete",
      status: "in-progress",
      dueDate: "September 1, 2025"
    }
  ];
  
  const handleExportData = (format) => {
    toast({
      title: `Data Exported Successfully`,
      description: `Your relationship analytics have been exported in ${format.toUpperCase()} format.`,
      duration: 3000,
    });
  };
  
  const handleShareReport = () => {
    toast({
      title: "Report Shared",
      description: "Your relationship analytics report has been shared with your partner.",
      duration: 3000,
    });
  };
  
  const handleSaveInsight = (insight) => {
    toast({
      title: "Insight Saved",
      description: `"${insight.title}" has been saved to your relationship journal.`,
      duration: 3000,
    });
  };
  
  const handleRefreshData = () => {
    toast({
      title: "Data Refreshed",
      description: "Your relationship analytics have been updated with the latest data.",
      duration: 3000,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container max-w-6xl py-8"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Advanced Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and visualizations to track and improve your relationship.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon" onClick={handleRefreshData}>
            <RefreshCw className="h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="icon" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4" />
          </Button>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Export Analytics Data</DialogTitle>
                <DialogDescription>
                  Choose a format to export your relationship analytics data.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <Button variant="outline" onClick={() => handleExportData('pdf')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </Button>
                <Button variant="outline" onClick={() => handleExportData('csv')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as CSV
                </Button>
                <Button variant="outline" onClick={() => handleExportData('image')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as Images
                </Button>
                <Button variant="outline" onClick={() => handleExportData('json')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as JSON
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" size="icon" onClick={handleShareReport}>
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {showFilters && (
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Categories</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="communication">Communication</SelectItem>
                  <SelectItem value="quality-time">Quality Time</SelectItem>
                  <SelectItem value="conflict">Conflict Resolution</SelectItem>
                  <SelectItem value="intimacy">Intimacy</SelectItem>
                  <SelectItem value="goals">Shared Goals</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Date Range</label>
              <div className="grid grid-cols-2 gap-2">
                <Input type="date" placeholder="Start date" />
                <Input type="date" placeholder="End date" />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Data Points</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select data points" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Data Points</SelectItem>
                  <SelectItem value="high">High Impact Only</SelectItem>
                  <SelectItem value="trends">Trends Only</SelectItem>
                  <SelectItem value="milestones">Milestones Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button variant="outline" className="mr-2">Reset Filters</Button>
            <Button>Apply Filters</Button>
          </div>
        </Card>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="communication">Communication</TabsTrigger>
          <TabsTrigger value="quality-time">Quality Time</TabsTrigger>
          <TabsTrigger value="conflict">Conflict Resolution</TabsTrigger>
          <TabsTrigger value="goals">Goals & Milestones</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Connection Score</h3>
                  <div className="text-3xl font-bold">82</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  4 pts
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart data={connectionScoreData}>
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Last updated: July 3, 2025
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Communication Ratio</h3>
                  <div className="text-3xl font-bold">85:15</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  7%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsBarChart data={communicationData.slice(-4)}>
                  <Bar dataKey="positive" fill="#4ade80" />
                  <Bar dataKey="negative" fill="#f87171" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Positive to negative interaction ratio
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Quality Time</h3>
                  <div className="text-3xl font-bold">12 hrs/week</div>
                </div>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  2 hrs
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsPieChart>
                  <Pie
                    data={qualityTimeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="hours"
                  >
                    {qualityTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                By category: Conversation, Activities, Travel, Meals, Entertainment
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Communication Trends</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsLineChart data={communicationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="positive" 
                    name="Positive Interactions" 
                    stroke="#4ade80" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="negative" 
                    name="Negative Interactions" 
                    stroke="#f87171" 
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Your positive communication has been steadily increasing over the past 8 weeks.</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Mood Trends</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsLineChart data={moodTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 10]} />
                  <RechartsTooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="partner1" 
                    name="Partner 1" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="partner2" 
                    name="Partner 2" 
                    stroke="#82ca9d" 
                    strokeWidth={2}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Your mood patterns are increasingly synchronized, indicating emotional attunement.</p>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4 md:col-span-2">
              <h3 className="text-lg font-medium mb-4">Key Insights</h3>
              <div className="space-y-4">
                {insights.map((insight, idx) => (
                  <Card key={idx} className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{insight.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                        <div className="mt-2 bg-muted p-2 rounded-md">
                          <div className="flex gap-2">
                            <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <p className="text-sm">{insight.recommendation}</p>
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleSaveInsight(insight)}
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Recent Milestones</h3>
              <div className="space-y-4">
                {milestones.slice(0, 3).map((milestone, idx) => (
                  <div key={idx} className="border-l-2 border-primary pl-4 pb-4">
                    <div className="text-xs text-muted-foreground">{milestone.date}</div>
                    <h4 className="font-medium mt-1">{milestone.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                  </div>
                ))}
                <Button variant="link" className="p-0">
                  View all milestones
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="communication" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Communication Score</h3>
                  <div className="text-3xl font-bold">85</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  7 pts
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart data={connectionScoreData}>
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Based on interaction patterns and communication exercises
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Active Listening</h3>
                  <div className="text-3xl font-bold">78%</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  12%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart data={connectionScoreData}>
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#4ade80" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Based on self-reported check-ins and exercises
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Conversation Topics</h3>
                  <div className="text-3xl font-bold">12</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  3
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsPieChart>
                  <Pie
                    data={[
                      { name: 'Daily Life', value: 30 },
                      { name: 'Future Plans', value: 20 },
                      { name: 'Feelings', value: 15 },
                      { name: 'Shared Interests', value: 25 },
                      { name: 'Other', value: 10 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {qualityTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Unique meaningful conversation topics per week
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Communication Patterns</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={communicationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="positive" name="Positive Interactions" fill="#4ade80" />
                  <Bar dataKey="negative" name="Negative Interactions" fill="#f87171" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 bg-green-400 rounded-sm mr-2"></div>
                  <span>Positive interactions include: appreciation, active listening, validation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded-sm mr-2"></div>
                  <span>Negative interactions include: criticism, defensiveness, stonewalling</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Communication Exercises Completion</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart 
                  data={[
                    { name: 'Active Listening', completed: 90 },
                    { name: 'Appreciation', completed: 85 },
                    { name: 'Conflict Resolution', completed: 70 },
                    { name: 'Emotional Expression', completed: 75 },
                    { name: 'Needs Communication', completed: 80 }
                  ]}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="name" type="category" width={150} />
                  <RechartsTooltip />
                  <Bar dataKey="completed" name="Completion Rate (%)" fill="#8884d8" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Completion rates for communication exercises in your relationship toolkit.</p>
              </div>
            </Card>
          </div>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Communication Strengths & Growth Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Strengths</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Active Listening</p>
                      <p className="text-sm text-muted-foreground">Both partners demonstrate strong active listening skills during conversations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Appreciation Expression</p>
                      <p className="text-sm text-muted-foreground">Regular expressions of appreciation and gratitude in daily interactions.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Emotional Validation</p>
                      <p className="text-sm text-muted-foreground">Strong pattern of validating each other's emotional experiences.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Growth Areas</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                      <ArrowUp className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Non-Verbal Communication</p>
                      <p className="text-sm text-muted-foreground">Opportunity to improve awareness of body language and non-verbal cues.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                      <ArrowUp className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Difficult Conversations</p>
                      <p className="text-sm text-muted-foreground">Continue developing comfort with discussing challenging topics.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-amber-100 p-1 rounded-full mt-0.5">
                      <ArrowUp className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Timing of Discussions</p>
                      <p className="text-sm text-muted-foreground">Being more mindful about when to initiate important conversations.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="quality-time" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Quality Time</h3>
                  <div className="text-3xl font-bold">12 hrs/week</div>
                </div>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  2 hrs
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart 
                  data={[
                    { week: 'Week 1', hours: 8 },
                    { week: 'Week 2', hours: 9 },
                    { week: 'Week 3', hours: 10 },
                    { week: 'Week 4', hours: 11 },
                    { week: 'Week 5', hours: 12 },
                  ]}
                >
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Average hours of quality time per week
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Date Nights</h3>
                  <div className="text-3xl font-bold">3/month</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  1
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsBarChart 
                  data={[
                    { month: 'Mar', count: 1 },
                    { month: 'Apr', count: 2 },
                    { month: 'May', count: 2 },
                    { month: 'Jun', count: 3 },
                    { month: 'Jul', count: 3 },
                  ]}
                >
                  <Bar dataKey="count" fill="#4ade80" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Dedicated date nights per month
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Activity Variety</h3>
                  <div className="text-3xl font-bold">8 types</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  2
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsPieChart>
                  <Pie
                    data={qualityTimeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="hours"
                  >
                    {qualityTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Different types of activities enjoyed together
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Quality Time Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={qualityTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="hours" name="Hours per Week" fill="#8884d8" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Breakdown of how you spend quality time together by category.</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Activity Satisfaction</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart 
                  data={[
                    { activity: 'Cooking Together', partner1: 9, partner2: 8 },
                    { activity: 'Movie Nights', partner1: 8, partner2: 9 },
                    { activity: 'Outdoor Walks', partner1: 9, partner2: 7 },
                    { activity: 'Game Nights', partner1: 7, partner2: 8 },
                    { activity: 'Travel', partner1: 10, partner2: 9 },
                  ]}
                  layout="vertical"
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis dataKey="activity" type="category" width={120} />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="partner1" name="Partner 1" fill="#8884d8" />
                  <Bar dataKey="partner2" name="Partner 2" fill="#82ca9d" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Satisfaction ratings (1-10) for different shared activities.</p>
              </div>
            </Card>
          </div>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Quality Time Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Top Activities</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <Heart className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Cooking Together</p>
                      <p className="text-sm text-muted-foreground">Highest mutual satisfaction and engagement scores.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <Heart className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Travel Experiences</p>
                      <p className="text-sm text-muted-foreground">Creates strongest positive impact on connection scores.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                      <Heart className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium">Deep Conversations</p>
                      <p className="text-sm text-muted-foreground">Most meaningful for emotional connection.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Increase Variety</p>
                      <p className="text-sm text-muted-foreground">Try 1-2 new activities each month to maintain engagement.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Schedule Consistency</p>
                      <p className="text-sm text-muted-foreground">Maintain regular date nights (aim for weekly) for relationship stability.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Balance Activities</p>
                      <p className="text-sm text-muted-foreground">Include both active and relaxing experiences for optimal connection.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="conflict" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Resolution Rate</h3>
                  <div className="text-3xl font-bold">100%</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  10%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart 
                  data={[
                    { month: 'Feb', rate: 70 },
                    { month: 'Mar', rate: 80 },
                    { month: 'Apr', rate: 90 },
                    { month: 'May', rate: 90 },
                    { month: 'Jun', rate: 100 },
                    { month: 'Jul', rate: 100 },
                  ]}
                >
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#4ade80" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Percentage of conflicts successfully resolved
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Resolution Time</h3>
                  <div className="text-3xl font-bold">24 hrs</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  12 hrs
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart 
                  data={[
                    { month: 'Feb', hours: 48 },
                    { month: 'Mar', hours: 36 },
                    { month: 'Apr', hours: 36 },
                    { month: 'May', hours: 24 },
                    { month: 'Jun', hours: 24 },
                    { month: 'Jul', hours: 24 },
                  ]}
                >
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Average time to resolve conflicts
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Recurring Themes</h3>
                  <div className="text-3xl font-bold">3</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowDown className="h-3 w-3 mr-1" />
                  2
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsPieChart>
                  <Pie
                    data={[
                      { name: 'Schedules', value: 40 },
                      { name: 'Chores', value: 30 },
                      { name: 'Communication', value: 20 },
                      { name: 'Other', value: 10 }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {[...Array(4)].map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Common themes in recent discussions
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Conflict Resolution Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={conflictResolutionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <RechartsTooltip />
                  <Legend />
                  <Bar dataKey="resolved" name="Resolved Conflicts" fill="#4ade80" />
                  <Bar dataKey="unresolved" name="Unresolved Conflicts" fill="#f87171" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Monthly breakdown of resolved vs. unresolved conflicts.</p>
              </div>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Conflict Resolution Methods</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={[
                      { name: 'Structured Discussion', value: 40 },
                      { name: 'Time Out & Return', value: 25 },
                      { name: 'Compromise', value: 20 },
                      { name: 'Written Communication', value: 10 },
                      { name: 'Other', value: 5 }
                    ]}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {[...Array(5)].map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Most effective methods used to resolve conflicts.</p>
              </div>
            </Card>
          </div>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Conflict Resolution Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Strengths</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Taking Breaks</p>
                      <p className="text-sm text-muted-foreground">Effectively using time-outs to prevent escalation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Using "I" Statements</p>
                      <p className="text-sm text-muted-foreground">Consistently expressing feelings without blame.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-green-100 p-1 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Finding Compromise</p>
                      <p className="text-sm text-muted-foreground">Regularly finding win-win solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Address Recurring Themes</p>
                      <p className="text-sm text-muted-foreground">Create proactive agreements for schedule coordination.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Repair Attempts</p>
                      <p className="text-sm text-muted-foreground">Practice recognizing and responding to repair attempts during conflicts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded-full mt-0.5">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Preventive Discussions</p>
                      <p className="text-sm text-muted-foreground">Schedule regular check-ins about potential issues before they become conflicts.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="goals" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Goals Progress</h3>
                  <div className="text-3xl font-bold">75%</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  15%
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsLineChart 
                  data={[
                    { month: 'Feb', progress: 40 },
                    { month: 'Mar', progress: 50 },
                    { month: 'Apr', progress: 60 },
                    { month: 'May', progress: 65 },
                    { month: 'Jun', progress: 70 },
                    { month: 'Jul', progress: 75 },
                  ]}
                >
                  <Line 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Overall progress toward relationship goals
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Milestones Achieved</h3>
                  <div className="text-3xl font-bold">12</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  4
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsBarChart 
                  data={[
                    { month: 'Feb', count: 1 },
                    { month: 'Mar', count: 2 },
                    { month: 'Apr', count: 2 },
                    { month: 'May', count: 3 },
                    { month: 'Jun', count: 2 },
                    { month: 'Jul', count: 2 },
                  ]}
                >
                  <Bar dataKey="count" fill="#4ade80" />
                </RechartsBarChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Relationship milestones achieved by month
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Goal Categories</h3>
                  <div className="text-3xl font-bold">5</div>
                </div>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  1
                </Badge>
              </div>
              <ResponsiveContainer width="100%" height={100}>
                <RechartsPieChart>
                  <Pie
                    data={activityCompletionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {activityCompletionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="text-xs text-muted-foreground mt-2">
                Active goal categories in your relationship
              </div>
            </Card>
          </div>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Current Goals</h3>
            <div className="space-y-4">
              {goals.map((goal, idx) => (
                <div key={idx} className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{goal.title}</h4>
                        <Badge variant={
                          goal.status === 'achieved' ? 'default' : 
                          goal.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {goal.status === 'achieved' ? 'Achieved' : 
                           goal.status === 'in-progress' ? 'In Progress' : 'Not Started'}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">Target: {goal.target}</div>
                      <div className="text-sm">Current: {goal.current}</div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <div className="text-sm text-muted-foreground mb-2">Due: {goal.dueDate}</div>
                      <div className="w-full md:w-40">
                        {goal.status === 'achieved' ? (
                          <div className="bg-green-100 text-green-800 text-xs font-medium text-center p-1 rounded">
                            Completed
                          </div>
                        ) : (
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <div 
                              className="bg-primary h-2.5 rounded-full" 
                              style={{ 
                                width: goal.current.includes('%') ? 
                                  goal.current : 
                                  goal.current.includes('/') ? 
                                    `${parseInt(goal.current.split('/')[0]) / parseInt(goal.current.split('/')[1].trim()) * 100}%` : 
                                    '50%' 
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-end mt-4">
              <Button>
                <Target className="mr-2 h-4 w-4" />
                Add New Goal
              </Button>
            </div>
          </Card>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Relationship Milestones</h3>
            <div className="relative border-l-2 border-primary pl-6 ml-4">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="mb-8 relative">
                  <div className="absolute -left-10 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="text-sm text-muted-foreground mb-1">{milestone.date}</div>
                  <h4 className="font-medium mb-1">{milestone.title}</h4>
                  <p className="text-sm">{milestone.description}</p>
                </div>
              ))}
              
              <div className="absolute -left-6 bottom-0 w-4 h-4 rounded-full bg-muted border-2 border-primary"></div>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button variant="outline">
                View All Milestones
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="bg-muted rounded-lg p-6 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Premium Analytics Features</h3>
        <p className="text-muted-foreground mb-4">
          As a premium subscriber, you have access to all advanced analytics features, including data export, custom reports, and historical trend analysis.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Generate Custom Report
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print Dashboard
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Customize Dashboard
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AdvancedAnalyticsDashboard;

