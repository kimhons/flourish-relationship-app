import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, BarChart, Calendar, Clock, 
  FileText, Download, Upload, Settings, Filter,
  Plus, Edit, Trash, CheckCircle, XCircle, AlertCircle,
  Search, ChevronDown, ChevronUp, ArrowRight, ArrowLeft,
  User, Building, Mail, Phone, Globe, Shield,
  CreditCard, DollarSign, Percent, Award, Target,
  Clipboard, MessageSquare, Video, Book, Zap
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Checkbox } from '../../components/ui/checkbox';
import { Label } from '../../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
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

const EnterpriseWellnessPrograms = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isCreatingProgram, setIsCreatingProgram] = useState(false);
  const [newProgramData, setNewProgramData] = useState({
    name: '',
    description: '',
    duration: '8',
    modules: [],
    targetAudience: '',
    goals: []
  });
  
  // Sample data for enterprise programs
  const programs = [
    {
      id: 1,
      name: "Relationship Foundations",
      description: "A comprehensive program focusing on building strong relationship foundations for employees.",
      status: "active",
      participants: 45,
      completionRate: 78,
      duration: "8 weeks",
      startDate: "June 1, 2025",
      endDate: "July 27, 2025",
      modules: [
        "Communication Basics",
        "Conflict Resolution",
        "Quality Time Strategies",
        "Stress Management",
        "Work-Life Balance",
        "Emotional Intelligence",
        "Appreciation Practices",
        "Future Planning"
      ],
      targetAudience: "All employees",
      goals: [
        "Improve relationship satisfaction by 20%",
        "Reduce relationship-related stress by 30%",
        "Increase work-life balance satisfaction by 25%"
      ],
      metrics: {
        satisfactionBefore: 65,
        satisfactionAfter: 82,
        stressReduction: 28,
        workLifeBalance: 24
      }
    },
    {
      id: 2,
      name: "Leadership Couples Retreat",
      description: "An intensive program designed for leadership teams and their partners to strengthen relationships while improving leadership skills.",
      status: "scheduled",
      participants: 12,
      completionRate: 0,
      duration: "4 weeks",
      startDate: "August 15, 2025",
      endDate: "September 12, 2025",
      modules: [
        "Leadership & Relationship Dynamics",
        "Communication Under Pressure",
        "Balancing Authority & Partnership",
        "Supporting Each Other's Growth"
      ],
      targetAudience: "Leadership team",
      goals: [
        "Improve leadership effectiveness through relationship strength",
        "Reduce burnout risk by 40%",
        "Increase partner support satisfaction by 35%"
      ],
      metrics: {
        satisfactionBefore: 70,
        satisfactionAfter: null,
        stressReduction: null,
        workLifeBalance: null
      }
    },
    {
      id: 3,
      name: "New Parent Support",
      description: "A specialized program for employees who are new or expecting parents, focusing on maintaining relationship strength during this major life transition.",
      status: "completed",
      participants: 28,
      completionRate: 92,
      duration: "6 weeks",
      startDate: "March 10, 2025",
      endDate: "April 21, 2025",
      modules: [
        "Relationship Changes During Parenthood",
        "Communication During Sleep Deprivation",
        "Maintaining Connection with Limited Time",
        "Parenting as a Team",
        "Self-Care for Parents",
        "Planning for the Future"
      ],
      targetAudience: "New and expecting parents",
      goals: [
        "Reduce new-parent relationship stress by 40%",
        "Improve parenting teamwork satisfaction by 30%",
        "Increase confidence in relationship resilience by 35%"
      ],
      metrics: {
        satisfactionBefore: 60,
        satisfactionAfter: 78,
        stressReduction: 42,
        workLifeBalance: 38
      }
    }
  ];
  
  // Sample data for employees
  const employees = [
    {
      id: 101,
      name: "Alex Johnson",
      department: "Marketing",
      position: "Marketing Director",
      email: "alex.johnson@company.com",
      programsEnrolled: [1, 2],
      programsCompleted: [],
      progress: {
        1: 75, // Program ID: Completion percentage
        2: 0
      }
    },
    {
      id: 102,
      name: "Jamie Smith",
      department: "Engineering",
      position: "Senior Developer",
      email: "jamie.smith@company.com",
      programsEnrolled: [1],
      programsCompleted: [3],
      progress: {
        1: 50,
        3: 100
      }
    },
    {
      id: 103,
      name: "Taylor Williams",
      department: "Human Resources",
      position: "HR Manager",
      email: "taylor.williams@company.com",
      programsEnrolled: [1, 2],
      programsCompleted: [3],
      progress: {
        1: 90,
        2: 0,
        3: 100
      }
    },
    {
      id: 104,
      name: "Morgan Davis",
      department: "Finance",
      position: "Financial Analyst",
      email: "morgan.davis@company.com",
      programsEnrolled: [1],
      programsCompleted: [],
      progress: {
        1: 25
      }
    },
    {
      id: 105,
      name: "Casey Brown",
      department: "Operations",
      position: "Operations Manager",
      email: "casey.brown@company.com",
      programsEnrolled: [],
      programsCompleted: [3],
      progress: {
        3: 100
      }
    }
  ];
  
  // Sample data for analytics
  const participationData = [
    { month: 'Jan', participants: 0 },
    { month: 'Feb', participants: 0 },
    { month: 'Mar', participants: 28 },
    { month: 'Apr', participants: 28 },
    { month: 'May', participants: 28 },
    { month: 'Jun', participants: 73 },
    { month: 'Jul', participants: 73 }
  ];
  
  const completionRateData = [
    { program: 'Relationship Foundations', rate: 78 },
    { program: 'New Parent Support', rate: 92 },
    { program: 'Leadership Couples Retreat', rate: 0 }
  ];
  
  const satisfactionData = [
    { program: 'Relationship Foundations', before: 65, after: 82 },
    { program: 'New Parent Support', before: 60, after: 78 },
    { program: 'Leadership Couples Retreat', before: 70, after: 70 }
  ];
  
  const departmentParticipationData = [
    { department: 'Marketing', participants: 12 },
    { department: 'Engineering', participants: 18 },
    { department: 'Human Resources', participants: 8 },
    { department: 'Finance', participants: 15 },
    { department: 'Operations', participants: 20 }
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  const handleCreateProgram = () => {
    toast({
      title: "Program Created",
      description: `"${newProgramData.name}" has been created successfully.`,
      duration: 3000,
    });
    
    setIsCreatingProgram(false);
    setNewProgramData({
      name: '',
      description: '',
      duration: '8',
      modules: [],
      targetAudience: '',
      goals: []
    });
  };
  
  const handleEditProgram = (program) => {
    setSelectedProgram(program);
    toast({
      title: "Program Loaded for Editing",
      description: `"${program.name}" is ready to edit.`,
      duration: 3000,
    });
  };
  
  const handleSaveProgram = () => {
    toast({
      title: "Program Updated",
      description: `"${selectedProgram.name}" has been updated successfully.`,
      duration: 3000,
    });
    
    setSelectedProgram(null);
  };
  
  const handleDeleteProgram = (programId) => {
    toast({
      title: "Program Deleted",
      description: "The program has been deleted successfully.",
      duration: 3000,
    });
  };
  
  const handleViewEmployee = (employee) => {
    setSelectedEmployee(employee);
  };
  
  const handleExportData = (format) => {
    toast({
      title: `Data Exported Successfully`,
      description: `Your enterprise wellness data has been exported in ${format.toUpperCase()} format.`,
      duration: 3000,
    });
  };
  
  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: "The enterprise wellness report has been generated and is ready to download.",
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
          <h1 className="text-3xl font-bold mb-2">Enterprise Wellness Programs</h1>
          <p className="text-muted-foreground">
            Manage and track relationship wellness programs for your organization.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
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
                <DialogTitle>Export Data</DialogTitle>
                <DialogDescription>
                  Choose a format to export your enterprise wellness data.
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
                <Button variant="outline" onClick={() => handleExportData('excel')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as Excel
                </Button>
                <Button variant="outline" onClick={() => handleExportData('json')}>
                  <FileText className="mr-2 h-4 w-4" />
                  Export as JSON
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button onClick={() => setIsCreatingProgram(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Program
          </Button>
        </div>
      </div>
      
      {showFilters && (
        <Card className="p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Program Status</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Department</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
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
          </div>
          
          <div className="flex justify-end mt-4">
            <Button variant="outline" className="mr-2">Reset Filters</Button>
            <Button>Apply Filters</Button>
          </div>
        </Card>
      )}
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Total Programs</h3>
                  <div className="text-3xl font-bold">3</div>
                </div>
                <Briefcase className="h-8 w-8 text-primary opacity-80" />
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-muted-foreground">Active</div>
                  <div className="font-medium">1</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Scheduled</div>
                  <div className="font-medium">1</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Completed</div>
                  <div className="font-medium">1</div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Total Participants</h3>
                  <div className="text-3xl font-bold">73</div>
                </div>
                <Users className="h-8 w-8 text-primary opacity-80" />
              </div>
              <ResponsiveContainer width="100%" height={80}>
                <RechartsLineChart data={participationData}>
                  <Line 
                    type="monotone" 
                    dataKey="participants" 
                    stroke="#8884d8" 
                    strokeWidth={2} 
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </Card>
            
            <Card className="p-4">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Average Completion Rate</h3>
                  <div className="text-3xl font-bold">85%</div>
                </div>
                <CheckCircle className="h-8 w-8 text-primary opacity-80" />
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="text-muted-foreground">Highest</div>
                  <div className="font-medium">92%</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Lowest</div>
                  <div className="font-medium">78%</div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Program Completion Rates</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={completionRateData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="program" type="category" width={150} />
                  <RechartsTooltip />
                  <Bar dataKey="rate" name="Completion Rate (%)" fill="#8884d8" />
                </RechartsBarChart>
              </ResponsiveContainer>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Department Participation</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={departmentParticipationData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="participants"
                    label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentParticipationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </Card>
          </div>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Relationship Satisfaction Impact</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsBarChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="program" />
                <YAxis />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="before" name="Before Program" fill="#94a3b8" />
                <Bar dataKey="after" name="After Program" fill="#8884d8" />
              </RechartsBarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Average relationship satisfaction scores (0-100) before and after program completion.</p>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">New Parent Support program completed</p>
                    <p className="text-sm text-muted-foreground">28 participants completed with 92% completion rate</p>
                    <p className="text-xs text-muted-foreground mt-1">April 21, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1.5 rounded-full">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Relationship Foundations program launched</p>
                    <p className="text-sm text-muted-foreground">45 employees enrolled in the 8-week program</p>
                    <p className="text-xs text-muted-foreground mt-1">June 1, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-1.5 rounded-full">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Leadership Couples Retreat scheduled</p>
                    <p className="text-sm text-muted-foreground">12 leadership team members enrolled for August program</p>
                    <p className="text-xs text-muted-foreground mt-1">June 15, 2025</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-4">
              <h3 className="text-lg font-medium mb-4">Program ROI Metrics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Reduced Absenteeism</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Improved Work Satisfaction</span>
                    <span className="text-sm font-medium">24%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Reduced Turnover</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Productivity Increase</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Estimated impact based on employee surveys and organizational metrics.</p>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="programs" className="mt-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search programs..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              {programs.map((program) => (
                <Card key={program.id} className="p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{program.name}</h3>
                        <Badge variant={
                          program.status === 'active' ? 'default' : 
                          program.status === 'scheduled' ? 'secondary' : 
                          program.status === 'completed' ? 'outline' : 'destructive'
                        }>
                          {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Duration</p>
                          <p className="font-medium">{program.duration}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Participants</p>
                          <p className="font-medium">{program.participants}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Completion Rate</p>
                          <p className="font-medium">{program.completionRate}%</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Date Range</p>
                          <p className="font-medium">{program.startDate} - {program.endDate}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button variant="outline" onClick={() => handleEditProgram(program)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            <Users className="mr-2 h-4 w-4" />
                            Participants
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Program Participants</DialogTitle>
                            <DialogDescription>
                              Employees enrolled in {program.name}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="relative w-full mb-4">
                              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input placeholder="Search participants..." className="pl-10" />
                            </div>
                            <div className="border rounded-md">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left p-3">Name</th>
                                    <th className="text-left p-3">Department</th>
                                    <th className="text-left p-3">Progress</th>
                                    <th className="text-left p-3">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {employees
                                    .filter(emp => emp.programsEnrolled.includes(program.id) || emp.programsCompleted.includes(program.id))
                                    .map(employee => (
                                      <tr key={employee.id} className="border-b">
                                        <td className="p-3">{employee.name}</td>
                                        <td className="p-3">{employee.department}</td>
                                        <td className="p-3">
                                          <div className="flex items-center gap-2">
                                            <div className="w-full bg-muted rounded-full h-2.5">
                                              <div 
                                                className="bg-primary h-2.5 rounded-full" 
                                                style={{ width: `${employee.progress[program.id]}%` }}
                                              ></div>
                                            </div>
                                            <span className="text-sm">{employee.progress[program.id]}%</span>
                                          </div>
                                        </td>
                                        <td className="p-3">
                                          <Button variant="ghost" size="sm" onClick={() => handleViewEmployee(employee)}>
                                            View
                                          </Button>
                                        </td>
                                      </tr>
                                    ))
                                  }
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="text-destructive hover:text-destructive">
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Confirm Deletion</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete this program? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <p className="font-medium">{program.name}</p>
                            <p className="text-sm text-muted-foreground">{program.participants} participants, {program.duration}</p>
                          </div>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="destructive" onClick={() => handleDeleteProgram(program.id)}>
                              Delete Program
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="link" className="p-0 h-auto" onClick={() => {
                      const detailsEl = document.getElementById(`program-details-${program.id}`);
                      if (detailsEl) {
                        detailsEl.classList.toggle('hidden');
                      }
                    }}>
                      <ChevronDown className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                    
                    <div id={`program-details-${program.id}`} className="hidden mt-4 pt-4 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Program Modules</h4>
                          <ul className="space-y-1">
                            {program.modules.map((module, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1 rounded-full">
                                  <Book className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm">{module}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Program Goals</h4>
                          <ul className="space-y-1">
                            {program.goals.map((goal, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="bg-primary/10 p-1 rounded-full">
                                  <Target className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm">{goal}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <h4 className="font-medium mt-4 mb-2">Target Audience</h4>
                          <p className="text-sm">{program.targetAudience}</p>
                        </div>
                      </div>
                      
                      {program.status === 'completed' && (
                        <div className="mt-6">
                          <h4 className="font-medium mb-2">Program Results</h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <Card className="p-3">
                              <h5 className="text-sm text-muted-foreground">Satisfaction Improvement</h5>
                              <div className="text-xl font-bold">+{program.metrics.satisfactionAfter - program.metrics.satisfactionBefore}%</div>
                            </Card>
                            <Card className="p-3">
                              <h5 className="text-sm text-muted-foreground">Stress Reduction</h5>
                              <div className="text-xl font-bold">{program.metrics.stressReduction}%</div>
                            </Card>
                            <Card className="p-3">
                              <h5 className="text-sm text-muted-foreground">Work-Life Balance</h5>
                              <div className="text-xl font-bold">+{program.metrics.workLifeBalance}%</div>
                            </Card>
                            <Card className="p-3">
                              <h5 className="text-sm text-muted-foreground">Completion Rate</h5>
                              <div className="text-xl font-bold">{program.completionRate}%</div>
                            </Card>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="employees" className="mt-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search employees..." className="pl-10" />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="hr">Human Resources</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    {programs.map(program => (
                      <SelectItem key={program.id} value={program.id.toString()}>
                        {program.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3">Name</th>
                    <th className="text-left p-3">Department</th>
                    <th className="text-left p-3">Position</th>
                    <th className="text-left p-3">Programs</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(employee => (
                    <tr key={employee.id} className="border-t hover:bg-muted/20">
                      <td className="p-3">{employee.name}</td>
                      <td className="p-3">{employee.department}</td>
                      <td className="p-3">{employee.position}</td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {employee.programsEnrolled.map(progId => (
                            <Badge key={`enrolled-${progId}`} variant="secondary" className="text-xs">
                              {programs.find(p => p.id === progId)?.name.split(' ')[0]}...
                            </Badge>
                          ))}
                          {employee.programsCompleted.map(progId => (
                            <Badge key={`completed-${progId}`} variant="outline" className="text-xs">
                              {programs.find(p => p.id === progId)?.name.split(' ')[0]}...
                            </Badge>
                          ))}
                        </div>
                      </td>
                      <td className="p-3">
                        {employee.programsEnrolled.length > 0 ? (
                          <Badge variant="default">Active</Badge>
                        ) : (
                          <Badge variant="outline">Inactive</Badge>
                        )}
                      </td>
                      <td className="p-3">
                        <Button variant="ghost" size="sm" onClick={() => handleViewEmployee(employee)}>
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing 5 of 5 employees
              </div>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="sm" disabled>
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reports" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Program Performance Report</h3>
                  <p className="text-sm text-muted-foreground">Detailed analysis of all program metrics</p>
                </div>
              </div>
              <Button className="w-full" onClick={handleGenerateReport}>Generate Report</Button>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Participation Report</h3>
                  <p className="text-sm text-muted-foreground">Employee engagement and completion data</p>
                </div>
              </div>
              <Button className="w-full" onClick={handleGenerateReport}>Generate Report</Button>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BarChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">ROI Analysis Report</h3>
                  <p className="text-sm text-muted-foreground">Business impact and return on investment</p>
                </div>
              </div>
              <Button className="w-full" onClick={handleGenerateReport}>Generate Report</Button>
            </Card>
          </div>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Custom Report Builder</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Report Parameters</h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="report-name">Report Name</Label>
                    <Input id="report-name" placeholder="Enter report name" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select defaultValue="program">
                      <SelectTrigger id="report-type" className="mt-1">
                        <SelectValue placeholder="Select report type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="program">Program Performance</SelectItem>
                        <SelectItem value="employee">Employee Participation</SelectItem>
                        <SelectItem value="department">Department Analysis</SelectItem>
                        <SelectItem value="roi">ROI Analysis</SelectItem>
                        <SelectItem value="custom">Custom Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="date-range">Date Range</Label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <Input type="date" placeholder="Start date" />
                      <Input type="date" placeholder="End date" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="programs">Programs to Include</Label>
                    <div className="space-y-2 mt-1">
                      {programs.map(program => (
                        <div key={program.id} className="flex items-center">
                          <Checkbox id={`program-${program.id}`} defaultChecked />
                          <Label htmlFor={`program-${program.id}`} className="ml-2 text-sm">
                            {program.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Report Sections</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox id="section-summary" defaultChecked />
                    <Label htmlFor="section-summary" className="ml-2 text-sm">
                      Executive Summary
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="section-metrics" defaultChecked />
                    <Label htmlFor="section-metrics" className="ml-2 text-sm">
                      Key Performance Metrics
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="section-participation" defaultChecked />
                    <Label htmlFor="section-participation" className="ml-2 text-sm">
                      Participation Analysis
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="section-completion" defaultChecked />
                    <Label htmlFor="section-completion" className="ml-2 text-sm">
                      Completion Rates
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="section-satisfaction" defaultChecked />
                    <Label htmlFor="section-satisfaction" className="ml-2 text-sm">
                      Satisfaction Scores
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="section-roi" defaultChecked />
                    <Label htmlFor="section-roi" className="ml-2 text-sm">
                      ROI Analysis
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox id="section-recommendations" defaultChecked />
                    <Label htmlFor="section-recommendations" className="ml-2 text-sm">
                      Recommendations
                    </Label>
                  </div>
                </div>
                
                <h4 className="font-medium mt-4 mb-2">Report Format</h4>
                <RadioGroup defaultValue="pdf">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pdf" id="format-pdf" />
                    <Label htmlFor="format-pdf">PDF Document</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="excel" id="format-excel" />
                    <Label htmlFor="format-excel">Excel Spreadsheet</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ppt" id="format-ppt" />
                    <Label htmlFor="format-ppt">PowerPoint Presentation</Label>
                  </div>
                </RadioGroup>
                
                <div className="mt-6">
                  <Button className="w-full" onClick={handleGenerateReport}>
                    <FileText className="mr-2 h-4 w-4" />
                    Generate Custom Report
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Scheduled Reports</h3>
            <div className="border rounded-md overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3">Report Name</th>
                    <th className="text-left p-3">Frequency</th>
                    <th className="text-left p-3">Recipients</th>
                    <th className="text-left p-3">Last Generated</th>
                    <th className="text-left p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">Monthly Program Performance</td>
                    <td className="p-3">Monthly (1st)</td>
                    <td className="p-3">Leadership Team</td>
                    <td className="p-3">July 1, 2025</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">Quarterly ROI Analysis</td>
                    <td className="p-3">Quarterly</td>
                    <td className="p-3">Executive Team</td>
                    <td className="p-3">June 30, 2025</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Schedule New Report
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Create Program Dialog */}
      <Dialog open={isCreatingProgram} onOpenChange={setIsCreatingProgram}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create New Program</DialogTitle>
            <DialogDescription>
              Create a new enterprise wellness program for your organization.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="program-name">Program Name</Label>
                <Input 
                  id="program-name" 
                  placeholder="Enter program name" 
                  className="mt-1"
                  value={newProgramData.name}
                  onChange={(e) => setNewProgramData({...newProgramData, name: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="program-duration">Duration (weeks)</Label>
                <Select 
                  value={newProgramData.duration}
                  onValueChange={(value) => setNewProgramData({...newProgramData, duration: value})}
                >
                  <SelectTrigger id="program-duration" className="mt-1">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4">4 weeks</SelectItem>
                    <SelectItem value="6">6 weeks</SelectItem>
                    <SelectItem value="8">8 weeks</SelectItem>
                    <SelectItem value="12">12 weeks</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mb-4">
              <Label htmlFor="program-description">Description</Label>
              <Textarea 
                id="program-description" 
                placeholder="Enter program description" 
                className="mt-1"
                value={newProgramData.description}
                onChange={(e) => setNewProgramData({...newProgramData, description: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <Label htmlFor="program-target">Target Audience</Label>
              <Input 
                id="program-target" 
                placeholder="E.g., All employees, Leadership team, New parents" 
                className="mt-1"
                value={newProgramData.targetAudience}
                onChange={(e) => setNewProgramData({...newProgramData, targetAudience: e.target.value})}
              />
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <Label>Program Modules</Label>
                <Button variant="ghost" size="sm" type="button" onClick={() => {
                  setNewProgramData({
                    ...newProgramData, 
                    modules: [...newProgramData.modules, '']
                  });
                }}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Module
                </Button>
              </div>
              <div className="space-y-2">
                {newProgramData.modules.length > 0 ? (
                  newProgramData.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Input 
                        placeholder={`Module ${idx + 1}`} 
                        value={module}
                        onChange={(e) => {
                          const updatedModules = [...newProgramData.modules];
                          updatedModules[idx] = e.target.value;
                          setNewProgramData({...newProgramData, modules: updatedModules});
                        }}
                      />
                      <Button variant="ghost" size="icon" onClick={() => {
                        const updatedModules = newProgramData.modules.filter((_, i) => i !== idx);
                        setNewProgramData({...newProgramData, modules: updatedModules});
                      }}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-muted-foreground">No modules added yet.</div>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <Label>Program Goals</Label>
                <Button variant="ghost" size="sm" type="button" onClick={() => {
                  setNewProgramData({
                    ...newProgramData, 
                    goals: [...newProgramData.goals, '']
                  });
                }}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Goal
                </Button>
              </div>
              <div className="space-y-2">
                {newProgramData.goals.length > 0 ? (
                  newProgramData.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Input 
                        placeholder={`Goal ${idx + 1}`} 
                        value={goal}
                        onChange={(e) => {
                          const updatedGoals = [...newProgramData.goals];
                          updatedGoals[idx] = e.target.value;
                          setNewProgramData({...newProgramData, goals: updatedGoals});
                        }}
                      />
                      <Button variant="ghost" size="icon" onClick={() => {
                        const updatedGoals = newProgramData.goals.filter((_, i) => i !== idx);
                        setNewProgramData({...newProgramData, goals: updatedGoals});
                      }}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-muted-foreground">No goals added yet.</div>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsCreatingProgram(false)}>Cancel</Button>
            <Button onClick={handleCreateProgram} disabled={!newProgramData.name || !newProgramData.description}>
              Create Program
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Edit Program Dialog */}
      {selectedProgram && (
        <Dialog open={!!selectedProgram} onOpenChange={(open) => !open && setSelectedProgram(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Edit Program</DialogTitle>
              <DialogDescription>
                Update the details of {selectedProgram.name}.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="edit-program-name">Program Name</Label>
                  <Input 
                    id="edit-program-name" 
                    defaultValue={selectedProgram.name} 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-program-status">Status</Label>
                  <Select defaultValue={selectedProgram.status}>
                    <SelectTrigger id="edit-program-status" className="mt-1">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="edit-program-description">Description</Label>
                <Textarea 
                  id="edit-program-description" 
                  defaultValue={selectedProgram.description} 
                  className="mt-1"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="edit-program-start">Start Date</Label>
                  <Input 
                    id="edit-program-start" 
                    type="date" 
                    defaultValue={selectedProgram.startDate.split(' ').reverse().join('-')} 
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="edit-program-end">End Date</Label>
                  <Input 
                    id="edit-program-end" 
                    type="date" 
                    defaultValue={selectedProgram.endDate.split(' ').reverse().join('-')} 
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <Label htmlFor="edit-program-target">Target Audience</Label>
                <Input 
                  id="edit-program-target" 
                  defaultValue={selectedProgram.targetAudience} 
                  className="mt-1"
                />
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Label>Program Modules</Label>
                  <Button variant="ghost" size="sm" type="button">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Module
                  </Button>
                </div>
                <div className="space-y-2">
                  {selectedProgram.modules.map((module, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Input defaultValue={module} />
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <Label>Program Goals</Label>
                  <Button variant="ghost" size="sm" type="button">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Goal
                  </Button>
                </div>
                <div className="space-y-2">
                  {selectedProgram.goals.map((goal, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Input defaultValue={goal} />
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedProgram(null)}>Cancel</Button>
              <Button onClick={handleSaveProgram}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      {/* Employee Details Dialog */}
      {selectedEmployee && (
        <Dialog open={!!selectedEmployee} onOpenChange={(open) => !open && setSelectedEmployee(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Employee Details</DialogTitle>
              <DialogDescription>
                View and manage program participation for {selectedEmployee.name}.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-primary/40" />
                    </div>
                    <h3 className="text-xl font-bold">{selectedEmployee.name}</h3>
                    <p className="text-muted-foreground">{selectedEmployee.position}</p>
                    
                    <div className="w-full mt-6 space-y-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{selectedEmployee.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{selectedEmployee.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{selectedEmployee.programsCompleted.length} Programs Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <Tabs defaultValue="active">
                    <TabsList className="mb-4">
                      <TabsTrigger value="active">Active Programs</TabsTrigger>
                      <TabsTrigger value="completed">Completed Programs</TabsTrigger>
                      <TabsTrigger value="available">Available Programs</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="active">
                      {selectedEmployee.programsEnrolled.length > 0 ? (
                        <div className="space-y-4">
                          {selectedEmployee.programsEnrolled.map(progId => {
                            const program = programs.find(p => p.id === progId);
                            if (!program) return null;
                            
                            return (
                              <Card key={progId} className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-medium">{program.name}</h4>
                                    <p className="text-sm text-muted-foreground">{program.duration}</p>
                                  </div>
                                  <Badge variant={
                                    program.status === 'active' ? 'default' : 
                                    program.status === 'scheduled' ? 'secondary' : 'outline'
                                  }>
                                    {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                                  </Badge>
                                </div>
                                
                                <div className="mb-2">
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Progress</span>
                                    <span>{selectedEmployee.progress[progId]}%</span>
                                  </div>
                                  <div className="w-full bg-muted rounded-full h-2.5">
                                    <div 
                                      className="bg-primary h-2.5 rounded-full" 
                                      style={{ width: `${selectedEmployee.progress[progId]}%` }}
                                    ></div>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                  <span>Start Date: {program.startDate}</span>
                                  <span>End Date: {program.endDate}</span>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <div className="mb-2 text-muted-foreground">
                            <AlertCircle className="h-12 w-12 mx-auto mb-2" />
                            <h3 className="text-lg font-medium">No Active Programs</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            This employee is not currently enrolled in any programs.
                          </p>
                          <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Enroll in Program
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="completed">
                      {selectedEmployee.programsCompleted.length > 0 ? (
                        <div className="space-y-4">
                          {selectedEmployee.programsCompleted.map(progId => {
                            const program = programs.find(p => p.id === progId);
                            if (!program) return null;
                            
                            return (
                              <Card key={progId} className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="font-medium">{program.name}</h4>
                                    <p className="text-sm text-muted-foreground">{program.duration}</p>
                                  </div>
                                  <Badge variant="outline">
                                    Completed
                                  </Badge>
                                </div>
                                
                                <div className="mb-2">
                                  <div className="flex justify-between text-sm mb-1">
                                    <span>Completion</span>
                                    <span>100%</span>
                                  </div>
                                  <div className="w-full bg-muted rounded-full h-2.5">
                                    <div className="bg-green-500 h-2.5 rounded-full w-full"></div>
                                  </div>
                                </div>
                                
                                <div className="flex justify-between text-sm">
                                  <span>Completed on: {program.endDate}</span>
                                  <Button variant="link" className="p-0 h-auto">
                                    View Certificate
                                  </Button>
                                </div>
                              </Card>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <div className="mb-2 text-muted-foreground">
                            <AlertCircle className="h-12 w-12 mx-auto mb-2" />
                            <h3 className="text-lg font-medium">No Completed Programs</h3>
                          </div>
                          <p className="text-muted-foreground">
                            This employee has not completed any programs yet.
                          </p>
                        </div>
                      )}
                    </TabsContent>
                    
                    <TabsContent value="available">
                      <div className="space-y-4">
                        {programs
                          .filter(program => 
                            !selectedEmployee.programsEnrolled.includes(program.id) && 
                            !selectedEmployee.programsCompleted.includes(program.id) &&
                            program.status !== 'completed'
                          )
                          .map(program => (
                            <Card key={program.id} className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-medium">{program.name}</h4>
                                  <p className="text-sm text-muted-foreground">{program.description}</p>
                                </div>
                                <Badge variant={
                                  program.status === 'active' ? 'default' : 
                                  program.status === 'scheduled' ? 'secondary' : 'outline'
                                }>
                                  {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                                </Badge>
                              </div>
                              
                              <div className="flex justify-between text-sm mb-4">
                                <span>Duration: {program.duration}</span>
                                <span>Participants: {program.participants}</span>
                              </div>
                              
                              <Button className="w-full">
                                <Plus className="mr-2 h-4 w-4" />
                                Enroll Employee
                              </Button>
                            </Card>
                          ))
                        }
                        
                        {programs.filter(program => 
                          !selectedEmployee.programsEnrolled.includes(program.id) && 
                          !selectedEmployee.programsCompleted.includes(program.id) &&
                          program.status !== 'completed'
                        ).length === 0 && (
                          <div className="text-center py-6">
                            <div className="mb-2 text-muted-foreground">
                              <AlertCircle className="h-12 w-12 mx-auto mb-2" />
                              <h3 className="text-lg font-medium">No Available Programs</h3>
                            </div>
                            <p className="text-muted-foreground">
                              There are no additional programs available for enrollment at this time.
                            </p>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedEmployee(null)}>Close</Button>
              <Button>
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
      
      <div className="bg-muted rounded-lg p-6 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold mb-2">Enterprise Wellness Benefits</h3>
        <p className="text-muted-foreground mb-4">
          Implementing relationship wellness programs in your organization can lead to improved employee satisfaction, reduced stress, better work-life balance, and increased productivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-2">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Improved Retention</h4>
            <p className="text-sm text-muted-foreground">Reduce turnover by supporting employee relationships</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-2">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Increased Productivity</h4>
            <p className="text-sm text-muted-foreground">Happier employees are more engaged and productive</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-2">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-medium">Reduced Stress</h4>
            <p className="text-sm text-muted-foreground">Lower stress levels lead to better overall health</p>
          </div>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Download Enterprise Wellness Guide
        </Button>
      </div>
    </motion.div>
  );
};

export default EnterpriseWellnessPrograms;

