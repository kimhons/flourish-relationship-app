import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, MessageCircle, Award, Clock, Calendar, 
  Zap, Gift, Star, ChevronRight, ChevronLeft, 
  CheckCircle, XCircle, HelpCircle, AlertCircle,
  Brain, Lightbulb, Smile, ThumbsUp, Activity,
  Sparkles, Bookmark, Send, Mic, Play, Pause,
  Download, Shield, Flame, Scissors, ArrowRight,
  FileText, PenTool, Repeat, Bookmark, Headphones,
  Bell, Briefcase, Users, Clipboard, Layers
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Progress } from '../../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../../components/ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Checkbox } from '../../components/ui/checkbox';
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogHeader, DialogTitle, DialogTrigger, DialogFooter 
} from '../../components/ui/dialog';
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip';
import { ScrollArea } from '../../components/ui/scroll-area';
import { Separator } from '../../components/ui/separator';
import { useToast } from '../../components/ui/use-toast';
import { cn } from '../../lib/utils';

// Dr. Love AI Integration Components
const DrLoveAvatar = () => (
  <Avatar className="h-12 w-12 border-2 border-primary">
    <AvatarImage src="/assets/dr-love-avatar.png" alt="Dr. Love" />
    <AvatarFallback className="bg-primary text-primary-foreground">DL</AvatarFallback>
  </Avatar>
);

const DrLoveChatMessage = ({ message, isUser = false }) => (
  <div className={cn(
    "flex items-start gap-2 mb-4",
    isUser ? "flex-row-reverse" : "flex-row"
  )}>
    {!isUser && <DrLoveAvatar />}
    {isUser && (
      <Avatar className="h-10 w-10">
        <AvatarImage src="/assets/user-avatar.png" alt="You" />
        <AvatarFallback>You</AvatarFallback>
      </Avatar>
    )}
    <div className={cn(
      "rounded-lg p-3 max-w-[80%]",
      isUser ? "bg-primary text-primary-foreground" : "bg-muted"
    )}>
      <p className="text-sm">{message}</p>
    </div>
  </div>
);

const DrLoveChatInterface = ({ toolContext }) => {
  const [messages, setMessages] = useState([
    { text: `I'm Dr. Love, your relationship AI coach! I'll guide you through using the "${toolContext}" tool and provide personalized advice. What specific relationship challenge are you facing today?`, isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // AI response generator based on tool context and user input
  const generateAIResponse = (userMessage, toolContext) => {
    // Contextual responses based on the current tool
    const toolResponses = {
      "Communication Builder": [
        "I notice you're struggling with expressing needs without sounding demanding. Try using 'I feel' statements instead of 'You always' statements.",
        "Based on your description, it sounds like you might benefit from our 'Active Listening Exercise'. Would you like me to guide you through it?",
        "Communication patterns often form early in relationships. The good news is that with awareness and practice, you can establish healthier patterns.",
        "When you feel unheard, try paraphrasing what your partner said before responding. This validates their perspective and ensures you understood correctly."
      ],
      "Conflict Resolution": [
        "Taking a 20-minute break when emotions run high can prevent saying things you'll regret. I recommend establishing this as a relationship rule.",
        "I'm analyzing your conflict pattern. It appears you tend to withdraw while your partner pursues. This is a common pattern called 'pursue-withdraw'.",
        "For this specific situation, I recommend using our 'Structured Disagreement' template. It helps keep the conversation focused on solutions.",
        "Remember that the goal isn't to 'win' the argument but to understand each other better and find a solution that works for both of you."
      ],
      "Intimacy Builder": [
        "Emotional intimacy often precedes physical intimacy. Try sharing something vulnerable with each other before bed tonight.",
        "Based on what you've shared, I recommend the 'Appreciation Exercise' to rebuild connection. Would you like instructions?",
        "Small, consistent gestures often have more impact than grand ones. Try implementing a daily 6-second kiss to maintain connection.",
        "I notice you're focusing on what's missing. Let's shift perspective to identify the positive moments of connection you already have."
      ],
      "Relationship Agreements": [
        "Clear agreements prevent misunderstandings. For this situation, I suggest explicitly discussing expectations around social media boundaries.",
        "When creating this agreement, make sure both partners have equal input and the terms are specific and measurable.",
        "Remember that agreements can be renegotiated as your relationship evolves. Schedule regular check-ins to ensure they still work for both of you.",
        "This agreement template includes sections for consequences if terms aren't met. This creates accountability and clarity."
      ],
      "Crisis Support": [
        "Based on what you've described, this situation requires immediate attention. I recommend using our emergency communication protocol.",
        "While this is challenging, I want to assure you that many couples successfully navigate similar situations with the right support.",
        "Your safety is the priority. I've prepared resources specific to your situation that you can access immediately.",
        "In addition to the steps we're discussing, would you like me to provide information about professional support services in your area?"
      ]
    };

    // Default responses if tool context doesn't match
    const defaultResponses = [
      "I understand this is challenging. Let's break it down into manageable steps.",
      "Based on relationship research, couples who practice this technique report 37% higher satisfaction scores.",
      "I'm analyzing your situation and comparing it with successful patterns from thousands of relationships.",
      "Would you like me to provide a specific exercise tailored to your situation?"
    ];

    // Select appropriate response pool
    const responsePool = toolResponses[toolContext] || defaultResponses;
    
    // Generate contextual response based on user message content
    let response = responsePool[Math.floor(Math.random() * responsePool.length)];
    
    // Add personalization based on user message content
    if (userMessage.toLowerCase().includes("help") || userMessage.toLowerCase().includes("advice")) {
      response = "I'd be happy to help! Based on what you've shared, I recommend starting with our structured communication exercise. Would you like me to walk you through it step by step?";
    } else if (userMessage.toLowerCase().includes("fight") || userMessage.toLowerCase().includes("argument")) {
      response = "Arguments are normal in relationships. What's important is how you navigate them. I notice a pattern in what you've described - you might benefit from our 'Time Out Protocol' to prevent escalation. Would you like details on how to implement this?";
    } else if (userMessage.toLowerCase().includes("listen") || userMessage.toLowerCase().includes("understand")) {
      response = "Feeling understood is a fundamental human need. I've analyzed your situation and recommend our 'Mirroring Exercise' to improve mutual understanding. This technique has helped 89% of couples in similar situations. Shall I explain how it works?";
    }
    
    return response;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { text: inputValue, isUser: true }];
    setMessages(newMessages);
    setInputValue('');
    
    // Simulate AI thinking with a slight delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputValue, toolContext);
      setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);
    }, 1000);
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-full border rounded-lg overflow-hidden">
      <div className="bg-primary p-3 flex items-center gap-2">
        <DrLoveAvatar />
        <div>
          <h3 className="font-semibold text-primary-foreground">Dr. Love</h3>
          <p className="text-xs text-primary-foreground/80">AI Relationship Coach</p>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        {messages.map((msg, idx) => (
          <DrLoveChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>
      
      <div className="p-3 border-t flex gap-2">
        <Input
          placeholder="Describe your situation..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1"
        />
        <Button size="icon" onClick={handleSendMessage}>
          <Send className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="outline">
          <Mic className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// AI Insights Component
const DrLoveInsights = ({ toolContext, userInputs }) => {
  // Generate insights based on tool context and user inputs
  const generateInsights = () => {
    // This would normally come from the AI backend
    return [
      {
        title: "Communication Pattern Analysis",
        description: "Based on your inputs, I've identified a 'Demand-Withdraw' pattern in your communication style. This is when one partner makes demands while the other withdraws to avoid conflict.",
        recommendation: "Try implementing a structured conversation format where each partner gets equal uninterrupted time to speak."
      },
      {
        title: "Emotional Triggers Identified",
        description: "I've detected recurring emotional triggers around 'feeling unheard' and 'perceived criticism' in your interactions.",
        recommendation: "Create a shared vocabulary for when these triggers arise. Example: 'I'm feeling that old pattern now.'"
      },
      {
        title: "Relationship Strength Indicator",
        description: "Despite the challenges, your commitment to improvement and willingness to be vulnerable show significant relationship strength.",
        recommendation: "Build on this foundation by scheduling regular 'relationship check-ins' to maintain progress."
      }
    ];
  };

  const insights = generateInsights();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <DrLoveAvatar />
        <div>
          <h3 className="font-semibold">Dr. Love's Relationship Insights</h3>
          <p className="text-sm text-muted-foreground">AI-powered analysis based on your interactions</p>
        </div>
      </div>
      
      <div className="grid gap-4">
        {insights.map((insight, idx) => (
          <Card key={idx} className="p-4">
            <div className="flex items-start gap-2">
              <div className={cn(
                "rounded-full p-2",
                idx === 0 ? "bg-blue-100" : idx === 1 ? "bg-amber-100" : "bg-green-100"
              )}>
                {idx === 0 ? (
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                ) : idx === 1 ? (
                  <AlertCircle className="h-5 w-5 text-amber-600" />
                ) : (
                  <Heart className="h-5 w-5 text-green-600" />
                )}
              </div>
              <div>
                <h4 className="font-medium">{insight.title}</h4>
                <p className="text-sm mt-1 text-muted-foreground">{insight.description}</p>
                <div className="mt-2 bg-muted p-2 rounded-md">
                  <div className="flex gap-2">
                    <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{insight.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Button className="w-full">
        <Download className="h-4 w-4 mr-2" />
        Save Insights to Relationship Journal
      </Button>
    </div>
  );
};

// Tool Components
const ToolCard = ({ tool, onSelect }) => (
  <Card 
    className="overflow-hidden cursor-pointer transition-all hover:shadow-md"
    onClick={() => onSelect(tool)}
  >
    <div className="aspect-video relative">
      <img 
        src={tool.image} 
        alt={tool.title} 
        className="w-full h-full object-cover"
      />
      {tool.premium && (
        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-yellow-300 text-black">
          PREMIUM
        </Badge>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{tool.title}</h3>
        <Badge variant={tool.difficulty === 'Easy' ? 'outline' : tool.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
          {tool.difficulty}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{tool.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={cn(
                "h-4 w-4",
                i < tool.rating ? "fill-amber-400 text-amber-400" : "text-muted"
              )} 
            />
          ))}
        </div>
      </div>
    </div>
  </Card>
);

// Communication Builder Tool
const CommunicationBuilder = ({ onBack, showAICoach }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    situation: '',
    feelings: '',
    needs: '',
    request: '',
    notes: ''
  });
  
  const steps = [
    {
      title: "Describe the Situation",
      description: "Objectively describe the situation without blame or judgment.",
      placeholder: "When...",
      field: "situation",
      example: "When we're discussing household chores and decisions are made without my input",
      tip: "Focus on specific behaviors or events, not character judgments."
    },
    {
      title: "Express Your Feelings",
      description: "Share how the situation makes you feel using 'I' statements.",
      placeholder: "I feel...",
      field: "feelings",
      example: "I feel frustrated and unimportant",
      tip: "Name the emotion without adding 'that' or 'like' which turns feelings into thoughts."
    },
    {
      title: "Explain Your Needs",
      description: "Clarify what need of yours isn't being met in this situation.",
      placeholder: "Because I need...",
      field: "needs",
      example: "Because I need to feel included in decisions that affect both of us",
      tip: "Focus on your universal human needs, not specific actions from your partner."
    },
    {
      title: "Make a Specific Request",
      description: "Ask for a specific, positive action in the present or future.",
      placeholder: "Would you be willing to...",
      field: "request",
      example: "Would you be willing to have a weekly meeting where we discuss household responsibilities together?",
      tip: "Requests differ from demands - be open to hearing 'no' and finding alternatives."
    },
    {
      title: "Review & Practice",
      description: "Review your complete communication and practice delivering it.",
      field: "notes",
      placeholder: "Additional notes or reflections...",
      tip: "Practice saying this out loud before having the actual conversation."
    }
  ];
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  
  const currentStep = steps[activeStep];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-1">
          <ChevronLeft className="h-4 w-4" />
          Back to Tools
        </Button>
        <Badge variant="outline">
          Step {activeStep + 1} of {steps.length}
        </Badge>
      </div>
      
      <Progress value={((activeStep + 1) / steps.length) * 100} />
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Communication Builder</h2>
        <p className="text-muted-foreground">Create effective, non-violent communication</p>
      </div>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">{currentStep.title}</h3>
        <p className="text-muted-foreground mb-4">{currentStep.description}</p>
        
        {activeStep < steps.length - 1 ? (
          <div className="space-y-4">
            <Textarea
              name={currentStep.field}
              value={formData[currentStep.field]}
              onChange={handleInputChange}
              placeholder={currentStep.placeholder}
              className="min-h-[100px]"
            />
            
            <div className="bg-muted p-3 rounded-md">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Tip</p>
                  <p className="text-sm text-muted-foreground">{currentStep.tip}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 p-3 rounded-md border border-dashed">
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Example</p>
                  <p className="text-sm text-muted-foreground">{currentStep.example}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md">
              <h4 className="font-medium mb-2">Your Complete Communication</h4>
              <p className="mb-2">
                <span className="font-medium">When</span> {formData.situation}
              </p>
              <p className="mb-2">
                <span className="font-medium">I feel</span> {formData.feelings}
              </p>
              <p className="mb-2">
                <span className="font-medium">Because I need</span> {formData.needs}
              </p>
              <p>
                <span className="font-medium">Would you be willing to</span> {formData.request}
              </p>
            </div>
            
            <Textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Additional notes or reflections..."
              className="min-h-[100px]"
            />
            
            <div className="bg-muted p-3 rounded-md">
              <div className="flex items-start gap-2">
                <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Next Steps</p>
                  <p className="text-sm text-muted-foreground">
                    Practice delivering this message with a calm, non-judgmental tone. 
                    Remember to listen actively to your partner's response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Previous
        </Button>
        
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button>
            Save Communication
          </Button>
        )}
      </div>
    </div>
  );
};

// Conflict Resolution Tool
const ConflictResolution = ({ onBack, showAICoach }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    issue: '',
    perspective1: '',
    perspective2: '',
    commonGround: '',
    possibleSolutions: '',
    agreedSolution: '',
    nextSteps: '',
    checkInDate: ''
  });
  
  const steps = [
    {
      title: "Define the Issue",
      description: "Clearly state the specific issue or conflict without blame.",
      field: "issue",
      placeholder: "Describe the specific issue or conflict...",
      example: "We disagree about how much time to spend with extended family during holidays."
    },
    {
      title: "Share Perspectives",
      description: "Each partner shares their perspective without interruption.",
      fields: ["perspective1", "perspective2"],
      placeholders: ["Partner 1's perspective...", "Partner 2's perspective..."],
      examples: [
        "I want to split time equally between both families because I value maintaining close relationships with my parents and siblings.",
        "I prefer spending more time with just us because holidays are stressful for me and I need downtime to recharge."
      ]
    },
    {
      title: "Find Common Ground",
      description: "Identify shared values, goals, or concerns related to this issue.",
      field: "commonGround",
      placeholder: "List points of agreement or shared values...",
      example: "We both value family connections and also want to ensure our relationship has quality time. We both want to avoid excessive stress during holidays."
    },
    {
      title: "Brainstorm Solutions",
      description: "Generate possible solutions without evaluating them yet.",
      field: "possibleSolutions",
      placeholder: "List all possible solutions...",
      example: "1. Alternate holidays between families\n2. Shorter visits to both families\n3. Host families at our home\n4. Schedule dedicated couple time before/after family visits\n5. Create new traditions that work for both of us"
    },
    {
      title: "Choose a Solution",
      description: "Select a solution that addresses both partners' core needs.",
      field: "agreedSolution",
      placeholder: "Describe your agreed-upon solution...",
      example: "We'll spend Christmas Eve and morning just the two of us, then visit each family for shorter periods (3 hours max) on Christmas Day. We'll also schedule a full day of couple time after the holidays to recharge."
    },
    {
      title: "Create an Action Plan",
      description: "Outline specific steps to implement your solution.",
      field: "nextSteps",
      placeholder: "List specific actions, who will do them, and when...",
      example: "1. Partner 1 will call their family by Sunday to explain our new plan\n2. Partner 2 will do the same with their family\n3. We'll block our shared calendar for our couple time\n4. We'll prepare responses for potential pushback from family"
    },
    {
      title: "Schedule a Check-in",
      description: "Set a date to review how your solution is working.",
      field: "checkInDate",
      placeholder: "When will you check in about this agreement?",
      example: "January 2nd, after the holidays"
    }
  ];
  
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };
  
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };
  
  const currentStep = steps[activeStep];
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="gap-1">
          <ChevronLeft className="h-4 w-4" />
          Back to Tools
        </Button>
        <Badge variant="outline">
          Step {activeStep + 1} of {steps.length}
        </Badge>
      </div>
      
      <Progress value={((activeStep + 1) / steps.length) * 100} />
      
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Conflict Resolution</h2>
        <p className="text-muted-foreground">Transform conflicts into opportunities for growth</p>
      </div>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-2">{currentStep.title}</h3>
        <p className="text-muted-foreground mb-4">{currentStep.description}</p>
        
        {activeStep === 1 ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Partner 1's Perspective</label>
              <Textarea
                name="perspective1"
                value={formData.perspective1}
                onChange={handleInputChange}
                placeholder={currentStep.placeholders[0]}
                className="min-h-[100px] mb-4"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Partner 2's Perspective</label>
              <Textarea
                name="perspective2"
                value={formData.perspective2}
                onChange={handleInputChange}
                placeholder={currentStep.placeholders[1]}
                className="min-h-[100px]"
              />
            </div>
            
            <div className="bg-muted/50 p-3 rounded-md border border-dashed">
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Examples</p>
                  <p className="text-sm text-muted-foreground mb-2">Partner 1: {currentStep.examples[0]}</p>
                  <p className="text-sm text-muted-foreground">Partner 2: {currentStep.examples[1]}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Textarea
              name={currentStep.field}
              value={formData[currentStep.field]}
              onChange={handleInputChange}
              placeholder={currentStep.placeholder}
              className="min-h-[100px]"
            />
            
            <div className="bg-muted/50 p-3 rounded-md border border-dashed">
              <div className="flex items-start gap-2">
                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Example</p>
                  <p className="text-sm text-muted-foreground">{currentStep.example}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          Previous
        </Button>
        
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button>
            Save Resolution Plan
          </Button>
        )}
      </div>
    </div>
  );
};

// Main Component
const EnhancedRelationshipToolkit = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedTool, setSelectedTool] = useState(null);
  const [showAICoach, setShowAICoach] = useState(true);
  
  // Sample tools data
  const tools = [
    {
      id: 'communication-builder',
      title: 'Communication Builder',
      description: 'Create effective, non-violent communication for difficult conversations.',
      image: '/assets/tools/communication-builder.jpg',
      difficulty: 'Medium',
      duration: '10 min',
      rating: 5,
      premium: false,
      component: CommunicationBuilder
    },
    {
      id: 'conflict-resolution',
      title: 'Conflict Resolution',
      description: 'Transform conflicts into opportunities for growth and deeper understanding.',
      image: '/assets/tools/conflict-resolution.jpg',
      difficulty: 'Hard',
      duration: '20 min',
      rating: 5,
      premium: false,
      component: ConflictResolution
    },
    {
      id: 'intimacy-builder',
      title: 'Intimacy Builder',
      description: 'Strengthen emotional and physical connection through guided exercises.',
      image: '/assets/tools/intimacy-builder.jpg',
      difficulty: 'Medium',
      duration: '15 min',
      rating: 4,
      premium: true,
      component: null
    },
    {
      id: 'relationship-agreements',
      title: 'Relationship Agreements',
      description: 'Create clear agreements on important relationship topics to prevent misunderstandings.',
      image: '/assets/tools/relationship-agreements.jpg',
      difficulty: 'Medium',
      duration: '25 min',
      rating: 5,
      premium: true,
      component: null
    },
    {
      id: 'crisis-support',
      title: 'Crisis Support',
      description: 'Emergency tools and resources for navigating relationship crises.',
      image: '/assets/tools/crisis-support.jpg',
      difficulty: 'Hard',
      duration: '15 min',
      rating: 5,
      premium: true,
      component: null
    }
  ];
  
  const handleToolSelect = (tool) => {
    if (tool.premium) {
      toast({
        title: "Premium Tool",
        description: "This is a premium tool. Subscribe to unlock all premium tools and features!",
        action: <Button variant="default">Subscribe</Button>
      });
      return;
    }
    setSelectedTool(tool);
  };
  
  const handleBackToTools = () => {
    setSelectedTool(null);
  };

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Relationship Toolkit</h1>
              <p className="text-muted-foreground">Practical tools to strengthen your relationship</p>
            </div>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    These tools are designed by relationship experts to help you navigate common
                    challenges and build a stronger connection. Each tool includes step-by-step guidance.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          {!selectedTool ? (
            <>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="discover">All Tools</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                </TabsList>
                
                <TabsContent value="discover" className="mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tools.map(tool => (
                      <ToolCard 
                        key={tool.id} 
                        tool={tool} 
                        onSelect={handleToolSelect}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="favorites" className="mt-4">
                  <div className="text-center py-12">
                    <div className="bg-muted inline-flex p-4 rounded-full mb-4">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Save your favorite tools here for quick access
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('discover')}>
                      Discover Tools
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="recent" className="mt-4">
                  <div className="text-center py-12">
                    <div className="bg-muted inline-flex p-4 rounded-full mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No recent tools</h3>
                    <p className="text-muted-foreground mb-4">
                      Your recently used tools will appear here
                    </p>
                    <Button variant="outline" onClick={() => setActiveTab('discover')}>
                      Start Using Tools
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              <Card className="bg-muted/50 border-dashed">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Unlock Premium Tools</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Subscribe to access all premium tools, save unlimited results, and get personalized recommendations.
                      </p>
                      <Button>Upgrade Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="p-0">
                {selectedTool.component && (
                  <selectedTool.component 
                    onBack={handleBackToTools}
                    showAICoach={showAICoach}
                  />
                )}
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Dr. Love AI Coach Sidebar */}
        {showAICoach && selectedTool && (
          <div className="w-full md:w-[350px] shrink-0">
            <DrLoveChatInterface toolContext={selectedTool.title} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedRelationshipToolkit;

