import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Check, X, AlertTriangle, Lock, 
  DollarSign, Calendar, User, Mail, Phone, 
  CreditCard as CardIcon, Smartphone, Globe, Shield, 
  ShieldCheck, Eye, EyeOff, ChevronDown, ChevronUp,
  Info, HelpCircle, RefreshCw, ArrowRight, Plus,
  Trash2, Edit, Download, FileText, Clock, Settings,
  ChevronsRight, ChevronsLeft, Search, Filter, Save,
  BarChart, PieChart, TrendingUp, TrendingDown, Percent
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Badge } from '../../components/ui/badge';
import { Switch } from '../../components/ui/switch';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
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
import { 
  Table, TableBody, TableCaption, TableCell, 
  TableHead, TableHeader, TableRow 
} from '../../components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover';
import { Checkbox } from '../../components/ui/checkbox';
import { Progress } from '../../components/ui/progress';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

const PaymentProcessingIntegration = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('payment-methods');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCvc] = useState('');
  const [showCvc, setShowCvc] = useState(false);
  const [saveCard, setSaveCard] = useState(true);
  const [defaultPaymentMethod, setDefaultPaymentMethod] = useState('card');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [autoRenew, setAutoRenew] = useState(true);
  const [receiveReceipts, setReceiveReceipts] = useState(true);
  const [showAddCard, setShowAddCard] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [selectedCurrency, setSelectedCurrency] = useState('usd');
  
  // Sample payment methods
  const paymentMethods = [
    {
      id: 'card-1',
      type: 'card',
      brand: 'visa',
      last4: '4242',
      expMonth: 12,
      expYear: 2028,
      name: 'John Doe',
      isDefault: true
    },
    {
      id: 'card-2',
      type: 'card',
      brand: 'mastercard',
      last4: '5555',
      expMonth: 8,
      expYear: 2026,
      name: 'John Doe',
      isDefault: false
    },
    {
      id: 'paypal-1',
      type: 'paypal',
      email: 'john.doe@example.com',
      isDefault: false
    }
  ];
  
  // Sample subscription plans
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Essential features for couples starting their journey',
      monthlyPrice: {
        usd: 9.99,
        eur: 9.99,
        gbp: 8.99
      },
      annualPrice: {
        usd: 99.99,
        eur: 99.99,
        gbp: 89.99
      },
      features: [
        'Daily Connection Activities',
        'Relationship Journal',
        'Basic Communication Tools',
        'Relationship Assessment',
        'Mobile App Access'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Advanced features for deepening your relationship',
      monthlyPrice: {
        usd: 19.99,
        eur: 19.99,
        gbp: 17.99
      },
      annualPrice: {
        usd: 199.99,
        eur: 199.99,
        gbp: 179.99
      },
      features: [
        'All Basic Features',
        'Relationship Games & Quizzes',
        'Advanced Analytics Dashboard',
        'Conflict Resolution Tools',
        'Priority Support',
        'Ad-Free Experience'
      ],
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      description: 'Comprehensive suite for relationship excellence',
      monthlyPrice: {
        usd: 29.99,
        eur: 29.99,
        gbp: 26.99
      },
      annualPrice: {
        usd: 299.99,
        eur: 299.99,
        gbp: 269.99
      },
      features: [
        'All Premium Features',
        'Professional Coaching Sessions',
        'Personalized Relationship Roadmap',
        'Exclusive Content & Resources',
        'Couples Therapy Integration',
        'Relationship Success Guarantee'
      ],
      popular: false
    }
  ];
  
  // Sample transactions
  const transactions = [
    {
      id: 'txn-1',
      date: '2025-07-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'successful',
      paymentMethod: {
        type: 'card',
        brand: 'visa',
        last4: '4242'
      }
    },
    {
      id: 'txn-2',
      date: '2025-06-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'successful',
      paymentMethod: {
        type: 'card',
        brand: 'visa',
        last4: '4242'
      }
    },
    {
      id: 'txn-3',
      date: '2025-05-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'successful',
      paymentMethod: {
        type: 'card',
        brand: 'visa',
        last4: '4242'
      }
    },
    {
      id: 'txn-4',
      date: '2025-04-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'successful',
      paymentMethod: {
        type: 'paypal',
        email: 'john.doe@example.com'
      }
    },
    {
      id: 'txn-5',
      date: '2025-03-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'successful',
      paymentMethod: {
        type: 'card',
        brand: 'mastercard',
        last4: '5555'
      }
    }
  ];
  
  // Sample invoices
  const invoices = [
    {
      id: 'inv-1',
      number: 'INV-2025-001',
      date: '2025-07-01',
      dueDate: '2025-07-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'paid',
      pdfUrl: '/invoices/INV-2025-001.pdf'
    },
    {
      id: 'inv-2',
      number: 'INV-2025-002',
      date: '2025-06-01',
      dueDate: '2025-06-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'paid',
      pdfUrl: '/invoices/INV-2025-002.pdf'
    },
    {
      id: 'inv-3',
      number: 'INV-2025-003',
      date: '2025-05-01',
      dueDate: '2025-05-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'paid',
      pdfUrl: '/invoices/INV-2025-003.pdf'
    },
    {
      id: 'inv-4',
      number: 'INV-2025-004',
      date: '2025-04-01',
      dueDate: '2025-04-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'paid',
      pdfUrl: '/invoices/INV-2025-004.pdf'
    },
    {
      id: 'inv-5',
      number: 'INV-2025-005',
      date: '2025-03-01',
      dueDate: '2025-03-01',
      amount: 19.99,
      currency: 'USD',
      description: 'Premium Subscription - Monthly',
      status: 'paid',
      pdfUrl: '/invoices/INV-2025-005.pdf'
    }
  ];
  
  // Sample payment processors
  const paymentProcessors = [
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Global payment processing for internet businesses',
      features: [
        'Credit/Debit Cards',
        'Digital Wallets',
        'ACH Transfers',
        'International Payments',
        'Subscription Management',
        'Fraud Prevention'
      ],
      status: 'active',
      logo: '/logos/stripe.svg'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Online payment system supporting online money transfers',
      features: [
        'PayPal Balance',
        'Credit/Debit Cards',
        'Bank Transfers',
        'International Payments',
        'Buyer Protection',
        'Seller Protection'
      ],
      status: 'active',
      logo: '/logos/paypal.svg'
    },
    {
      id: 'square',
      name: 'Square',
      description: 'Financial services and digital payments company',
      features: [
        'Credit/Debit Cards',
        'Digital Wallets',
        'ACH Transfers',
        'Point of Sale',
        'Invoicing',
        'Virtual Terminal'
      ],
      status: 'inactive',
      logo: '/logos/square.svg'
    },
    {
      id: 'braintree',
      name: 'Braintree',
      description: 'Payment gateway for web and mobile payments',
      features: [
        'Credit/Debit Cards',
        'Digital Wallets',
        'Venmo',
        'International Payments',
        'Recurring Billing',
        'Fraud Protection'
      ],
      status: 'inactive',
      logo: '/logos/braintree.svg'
    }
  ];
  
  // Sample security features
  const securityFeatures = [
    {
      id: 'pci-dss',
      name: 'PCI DSS Compliance',
      description: 'Payment Card Industry Data Security Standard compliance ensures secure handling of credit card information.',
      status: 'implemented'
    },
    {
      id: 'encryption',
      name: 'End-to-End Encryption',
      description: 'All payment data is encrypted during transmission and storage using industry-standard encryption.',
      status: 'implemented'
    },
    {
      id: 'tokenization',
      name: 'Tokenization',
      description: 'Sensitive payment information is replaced with unique tokens to prevent exposure of actual data.',
      status: 'implemented'
    },
    {
      id: 'fraud-detection',
      name: 'Fraud Detection',
      description: 'Advanced algorithms detect suspicious activities and prevent fraudulent transactions.',
      status: 'implemented'
    },
    {
      id: 'two-factor',
      name: 'Two-Factor Authentication',
      description: 'Additional security layer requiring verification beyond password for sensitive payment operations.',
      status: 'implemented'
    },
    {
      id: 'audit-logging',
      name: 'Audit Logging',
      description: 'Comprehensive logging of all payment-related activities for security monitoring and compliance.',
      status: 'implemented'
    }
  ];
  
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };
  
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };
  
  const handleExpiryChange = (e) => {
    const formattedValue = formatExpiry(e.target.value);
    setCardExpiry(formattedValue);
  };
  
  const handleAddCard = () => {
    if (cardNumber.length < 19) {
      toast({
        title: "Invalid Card Number",
        description: "Please enter a valid card number.",
        variant: "destructive",
      });
      return;
    }
    
    if (cardName.length < 3) {
      toast({
        title: "Invalid Name",
        description: "Please enter the name on the card.",
        variant: "destructive",
      });
      return;
    }
    
    if (cardExpiry.length < 5) {
      toast({
        title: "Invalid Expiry Date",
        description: "Please enter a valid expiry date (MM/YY).",
        variant: "destructive",
      });
      return;
    }
    
    if (cardCvc.length < 3) {
      toast({
        title: "Invalid CVC",
        description: "Please enter a valid CVC code.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Card Added",
      description: "Your card has been added successfully.",
    });
    
    setShowAddCard(false);
    setCardNumber('');
    setCardName('');
    setCardExpiry('');
    setCvc('');
  };
  
  const handleRemovePaymentMethod = (id) => {
    toast({
      title: "Payment Method Removed",
      description: "The payment method has been removed successfully.",
    });
  };
  
  const handleSetDefaultPaymentMethod = (id) => {
    toast({
      title: "Default Payment Method Updated",
      description: "Your default payment method has been updated.",
    });
  };
  
  const handleChangePlan = () => {
    toast({
      title: "Subscription Plan Updated",
      description: `Your subscription has been updated to the ${selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} plan.`,
    });
  };
  
  const handleCancelSubscription = () => {
    toast({
      title: "Subscription Cancelled",
      description: "Your subscription has been cancelled. You will still have access until the end of your billing period.",
    });
  };
  
  const handleDownloadInvoice = (invoice) => {
    toast({
      title: "Invoice Downloaded",
      description: `Invoice ${invoice.number} has been downloaded.`,
    });
  };
  
  const handleChangeBillingCycle = (value) => {
    setBillingCycle(value);
    toast({
      title: "Billing Cycle Updated",
      description: `Your billing cycle has been updated to ${value}.`,
    });
  };
  
  const handleToggleAutoRenew = () => {
    setAutoRenew(!autoRenew);
    toast({
      title: `Auto-Renewal ${!autoRenew ? 'Enabled' : 'Disabled'}`,
      description: `Your subscription will ${!autoRenew ? 'now' : 'no longer'} renew automatically.`,
    });
  };
  
  const handleToggleReceipts = () => {
    setReceiveReceipts(!receiveReceipts);
    toast({
      title: `Email Receipts ${!receiveReceipts ? 'Enabled' : 'Disabled'}`,
      description: `You will ${!receiveReceipts ? 'now' : 'no longer'} receive email receipts for transactions.`,
    });
  };
  
  const getStatusBadge = (status) => {
    if (status === 'successful' || status === 'paid' || status === 'active' || status === 'implemented') {
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Successful</Badge>;
    } else if (status === 'pending') {
      return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
    } else if (status === 'failed') {
      return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Failed</Badge>;
    } else if (status === 'inactive') {
      return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Inactive</Badge>;
    }
  };
  
  const getPaymentMethodIcon = (method) => {
    if (method.type === 'card') {
      if (method.brand === 'visa') {
        return <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>;
      } else if (method.brand === 'mastercard') {
        return <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>;
      } else if (method.brand === 'amex') {
        return <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center">AMEX</div>;
      } else {
        return <CardIcon className="w-5 h-5 text-gray-500" />;
      }
    } else if (method.type === 'paypal') {
      return <div className="w-12 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center">PayPal</div>;
    }
  };
  
  const formatCurrency = (amount, currency = 'USD') => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    });
    
    return formatter.format(amount);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const getCurrentPlan = () => {
    return subscriptionPlans.find(plan => plan.id === selectedPlan);
  };
  
  const getPlanPrice = (plan) => {
    if (billingCycle === 'monthly') {
      return plan.monthlyPrice[selectedCurrency];
    } else {
      return plan.annualPrice[selectedCurrency];
    }
  };
  
  const getCurrencySymbol = (currency) => {
    switch (currency.toLowerCase()) {
      case 'usd':
        return '$';
      case 'eur':
        return '€';
      case 'gbp':
        return '£';
      default:
        return '$';
    }
  };
  
  const getAnnualSavings = (plan) => {
    const monthlyTotal = plan.monthlyPrice[selectedCurrency] * 12;
    const annualPrice = plan.annualPrice[selectedCurrency];
    const savings = monthlyTotal - annualPrice;
    const savingsPercent = (savings / monthlyTotal) * 100;
    
    return {
      amount: savings,
      percent: Math.round(savingsPercent)
    };
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
          <h1 className="text-3xl font-bold mb-2">Payment Processing Integration</h1>
          <p className="text-muted-foreground">
            Secure, flexible payment solutions for your relationship journey.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD ($)</SelectItem>
              <SelectItem value="eur">EUR (€)</SelectItem>
              <SelectItem value="gbp">GBP (£)</SelectItem>
            </SelectContent>
          </Select>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About Payment Processing</DialogTitle>
                <DialogDescription>
                  Our payment processing system ensures secure, flexible payment options for your subscription.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-sm">
                  <strong>Key Features:</strong>
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Multiple payment methods (credit cards, PayPal)</li>
                  <li>Secure, PCI-compliant payment processing</li>
                  <li>Flexible subscription management</li>
                  <li>Transparent billing history</li>
                  <li>Easy invoice access and download</li>
                  <li>Multiple currency support</li>
                </ul>
                <p className="text-sm">
                  All payment information is securely encrypted and processed through our trusted payment partners.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Payment Methods</div>
              <div className="text-xs text-muted-foreground">{paymentMethods.length} Active</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Current Plan</div>
              <div className="text-xs text-muted-foreground">{getCurrentPlan().name}</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Next Payment</div>
              <div className="text-xs text-muted-foreground">{formatCurrency(getPlanPrice(getCurrentPlan()), selectedCurrency.toUpperCase())} on Aug 1</div>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Security Status</div>
              <div className="text-xs text-muted-foreground">PCI DSS Compliant</div>
            </div>
          </div>
        </Card>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="billing-history">Billing History</TabsTrigger>
          <TabsTrigger value="payment-processors">Payment Processors</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        
        <TabsContent value="payment-methods" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Your Payment Methods</h3>
                  <Button onClick={() => setShowAddCard(true)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Payment Method
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <Card key={method.id} className="p-4 border">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          {getPaymentMethodIcon(method)}
                          <div className="ml-3">
                            {method.type === 'card' ? (
                              <>
                                <div className="font-medium">
                                  {method.brand.charAt(0).toUpperCase() + method.brand.slice(1)} ending in {method.last4}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Expires {method.expMonth}/{method.expYear}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="font-medium">PayPal</div>
                                <div className="text-sm text-muted-foreground">{method.email}</div>
                              </>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          {method.isDefault && (
                            <Badge variant="outline" className="mr-2">Default</Badge>
                          )}
                          
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <Settings className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              {!method.isDefault && (
                                <DropdownMenuItem onClick={() => handleSetDefaultPaymentMethod(method.id)}>
                                  Set as Default
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem onClick={() => handleRemovePaymentMethod(method.id)}>
                                Remove
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                {showAddCard && (
                  <Card className="p-6 mt-6 border">
                    <h4 className="text-md font-medium mb-4">Add New Card</h4>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <div className="relative">
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={19}
                            className="pl-10"
                          />
                          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="card-name">Name on Card</Label>
                        <div className="relative">
                          <Input
                            id="card-name"
                            placeholder="John Doe"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="pl-10"
                          />
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="card-expiry">Expiry Date</Label>
                          <div className="relative">
                            <Input
                              id="card-expiry"
                              placeholder="MM/YY"
                              value={cardExpiry}
                              onChange={handleExpiryChange}
                              maxLength={5}
                              className="pl-10"
                            />
                            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="card-cvc">CVC</Label>
                          <div className="relative">
                            <Input
                              id="card-cvc"
                              type={showCvc ? "text" : "password"}
                              placeholder="123"
                              value={cardCvc}
                              onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))}
                              maxLength={4}
                              className="pl-10 pr-10"
                            />
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="absolute right-0 top-0 h-full"
                              onClick={() => setShowCvc(!showCvc)}
                            >
                              {showCvc ? (
                                <EyeOff className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <Eye className="h-4 w-4 text-muted-foreground" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="save-card" checked={saveCard} onCheckedChange={setSaveCard} />
                        <Label htmlFor="save-card" className="text-sm">Save this card for future payments</Label>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <Button variant="outline" onClick={() => setShowAddCard(false)}>
                          Cancel
                        </Button>
                        <Button onClick={handleAddCard}>
                          Add Card
                        </Button>
                      </div>
                    </div>
                  </Card>
                )}
                
                <div className="mt-6">
                  <h4 className="text-md font-medium mb-4">Payment Preferences</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Default Payment Method</div>
                        <div className="text-sm text-muted-foreground">Select your preferred payment method</div>
                      </div>
                      <Select value={defaultPaymentMethod} onValueChange={setDefaultPaymentMethod}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email Receipts</div>
                        <div className="text-sm text-muted-foreground">Receive email receipts for transactions</div>
                      </div>
                      <Switch checked={receiveReceipts} onCheckedChange={handleToggleReceipts} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Billing Address</div>
                        <div className="text-sm text-muted-foreground">Manage your billing address</div>
                      </div>
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="subscription" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-6">Your Subscription</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Current Plan</div>
                        <div className="text-sm text-muted-foreground">{getCurrentPlan().name}</div>
                      </div>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Active</Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Billing Cycle</div>
                        <div className="text-sm text-muted-foreground">
                          {billingCycle === 'monthly' ? 'Monthly' : 'Annual'} billing
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant={billingCycle === 'monthly' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleChangeBillingCycle('monthly')}
                        >
                          Monthly
                        </Button>
                        <Button
                          variant={billingCycle === 'annual' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => handleChangeBillingCycle('annual')}
                        >
                          Annual
                        </Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Next Payment</div>
                        <div className="text-sm text-muted-foreground">
                          {formatCurrency(getPlanPrice(getCurrentPlan()), selectedCurrency.toUpperCase())} on August 1, 2025
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        via {paymentMethods.find(method => method.isDefault)?.type === 'card' ? 'Credit Card' : 'PayPal'}
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Auto-Renewal</div>
                        <div className="text-sm text-muted-foreground">
                          {autoRenew ? 'Your subscription will renew automatically' : 'Your subscription will not renew'}
                        </div>
                      </div>
                      <Switch checked={autoRenew} onCheckedChange={handleToggleAutoRenew} />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Payment Method</div>
                        <div className="text-sm text-muted-foreground">
                          {paymentMethods.find(method => method.isDefault)?.type === 'card' ? (
                            `${paymentMethods.find(method => method.isDefault)?.brand.charAt(0).toUpperCase() + paymentMethods.find(method => method.isDefault)?.brand.slice(1)} ending in ${paymentMethods.find(method => method.isDefault)?.last4}`
                          ) : (
                            `PayPal (${paymentMethods.find(method => method.isDefault)?.email})`
                          )}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Change
                      </Button>
                    </div>
                    
                    <div className="pt-4 flex items-center justify-between">
                      <Button variant="outline" onClick={handleCancelSubscription}>
                        Cancel Subscription
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>
                            Change Plan
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                          <DialogHeader>
                            <DialogTitle>Change Subscription Plan</DialogTitle>
                            <DialogDescription>
                              Choose the plan that best fits your relationship needs.
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="py-4">
                            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                              {subscriptionPlans.map((plan) => (
                                <div key={plan.id} className={cn(
                                  "relative flex items-start space-x-3 rounded-lg border p-4 mb-3",
                                  plan.popular ? "border-primary" : "border-border"
                                )}>
                                  {plan.popular && (
                                    <div className="absolute -top-2 -right-2">
                                      <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                                    </div>
                                  )}
                                  <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                                  <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                                    <div className="font-medium">{plan.name}</div>
                                    <div className="text-sm text-muted-foreground mb-2">{plan.description}</div>
                                    <div className="flex items-baseline">
                                      <span className="text-xl font-bold">
                                        {getCurrencySymbol(selectedCurrency)}{billingCycle === 'monthly' ? plan.monthlyPrice[selectedCurrency] : plan.annualPrice[selectedCurrency]}
                                      </span>
                                      <span className="text-sm text-muted-foreground ml-1">
                                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                                      </span>
                                      
                                      {billingCycle === 'annual' && (
                                        <span className="ml-2 text-sm text-green-600">
                                          Save {getAnnualSavings(plan).percent}%
                                        </span>
                                      )}
                                    </div>
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                          
                          <DialogFooter>
                            <Button variant="outline" onClick={() => {}}>
                              Cancel
                            </Button>
                            <Button onClick={handleChangePlan}>
                              Confirm Change
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Plan Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">{getCurrentPlan().name} Plan</div>
                      <div className="text-sm text-muted-foreground mb-2">{getCurrentPlan().description}</div>
                      
                      <div className="flex items-baseline mb-4">
                        <span className="text-2xl font-bold">
                          {getCurrencySymbol(selectedCurrency)}{getPlanPrice(getCurrentPlan())}
                        </span>
                        <span className="text-sm text-muted-foreground ml-1">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      
                      {billingCycle === 'annual' && (
                        <div className="bg-green-50 text-green-700 px-3 py-2 rounded-md text-sm mb-4">
                          <div className="font-medium">Annual Savings</div>
                          <div>
                            Save {formatCurrency(getAnnualSavings(getCurrentPlan()).amount, selectedCurrency.toUpperCase())} ({getAnnualSavings(getCurrentPlan()).percent}%) with annual billing
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="font-medium mb-2">Included Features</div>
                      <ul className="space-y-2">
                        {getCurrentPlan().features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="billing-history" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Transaction History</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Payment Method</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{formatDate(transaction.date)}</TableCell>
                          <TableCell>{transaction.description}</TableCell>
                          <TableCell>{formatCurrency(transaction.amount, transaction.currency)}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              {getPaymentMethodIcon(transaction.paymentMethod)}
                              <span className="ml-2 text-sm">
                                {transaction.paymentMethod.type === 'card' ? (
                                  `ending in ${transaction.paymentMethod.last4}`
                                ) : (
                                  transaction.paymentMethod.email
                                )}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Invoices</h3>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice #</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell>{invoice.number}</TableCell>
                          <TableCell>{formatDate(invoice.date)}</TableCell>
                          <TableCell>{formatCurrency(invoice.amount, invoice.currency)}</TableCell>
                          <TableCell>{getStatusBadge(invoice.status)}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon" onClick={() => handleDownloadInvoice(invoice)}>
                              <Download className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="payment-processors" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-6">Payment Processors</h3>
                
                <div className="space-y-6">
                  {paymentProcessors.map((processor) => (
                    <Card key={processor.id} className="p-4 border">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mr-4">
                            <img src={processor.logo} alt={processor.name} className="w-8 h-8" />
                          </div>
                          <div>
                            <div className="font-medium">{processor.name}</div>
                            <div className="text-sm text-muted-foreground mb-2">{processor.description}</div>
                            <div className="flex flex-wrap gap-2">
                              {processor.features.slice(0, 3).map((feature, index) => (
                                <Badge key={index} variant="secondary">{feature}</Badge>
                              ))}
                              {processor.features.length > 3 && (
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <Badge variant="outline" className="cursor-pointer">+{processor.features.length - 3} more</Badge>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-80">
                                    <div className="space-y-2">
                                      <h4 className="font-medium">All Features</h4>
                                      <ul className="space-y-1">
                                        {processor.features.map((feature, index) => (
                                          <li key={index} className="text-sm flex items-center">
                                            <Check className="h-4 w-4 text-green-500 mr-2" />
                                            {feature}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </PopoverContent>
                                </Popover>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          {getStatusBadge(processor.status)}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-6">Integration Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Payment Flow</h4>
                    <div className="relative">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>
                      <div className="relative flex justify-between">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                            1
                          </div>
                          <div className="text-sm mt-2">Payment Initiated</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                            2
                          </div>
                          <div className="text-sm mt-2">Data Encrypted</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                            3
                          </div>
                          <div className="text-sm mt-2">Processor Handles</div>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center z-10">
                            4
                          </div>
                          <div className="text-sm mt-2">Confirmation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Supported Payment Methods</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center mr-2">VISA</div>
                        <span className="text-sm">Visa</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center mr-2">MC</div>
                        <span className="text-sm">Mastercard</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center mr-2">AMEX</div>
                        <span className="text-sm">American Express</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-12 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center mr-2">PayPal</div>
                        <span className="text-sm">PayPal</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center mr-2">ACH</div>
                        <span className="text-sm">ACH Transfer</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-black rounded text-white text-xs flex items-center justify-center mr-2">AP</div>
                        <span className="text-sm">Apple Pay</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-blue-700 rounded text-white text-xs flex items-center justify-center mr-2">GP</div>
                        <span className="text-sm">Google Pay</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <div className="w-8 h-5 bg-yellow-500 rounded text-white text-xs flex items-center justify-center mr-2">+</div>
                        <span className="text-sm">More Options</span>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Supported Currencies</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">USD</span>
                        <span className="text-sm text-muted-foreground">US Dollar</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">EUR</span>
                        <span className="text-sm text-muted-foreground">Euro</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">GBP</span>
                        <span className="text-sm text-muted-foreground">British Pound</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">CAD</span>
                        <span className="text-sm text-muted-foreground">Canadian Dollar</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">AUD</span>
                        <span className="text-sm text-muted-foreground">Australian Dollar</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">JPY</span>
                        <span className="text-sm text-muted-foreground">Japanese Yen</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm font-medium mr-2">CHF</span>
                        <span className="text-sm text-muted-foreground">Swiss Franc</span>
                      </div>
                      <div className="border rounded-md p-3 flex items-center">
                        <span className="text-sm text-muted-foreground">+30 more currencies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="security" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-6">Security Features</h3>
                  
                  <div className="space-y-6">
                    {securityFeatures.map((feature) => (
                      <Card key={feature.id} className="p-4 border">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3">
                              <ShieldCheck className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <div className="font-medium">{feature.name}</div>
                              <div className="text-sm text-muted-foreground">{feature.description}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {getStatusBadge(feature.status)}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Security Status</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Overall Security</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>PCI DSS Compliance</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Encryption</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Fraud Protection</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Data Protection</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-4">Security Resources</h3>
                  
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Security Policy
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      PCI DSS Certification
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Privacy Policy
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Terms of Service
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Security FAQ
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Payment Analytics</h3>
              <Select defaultValue="6months">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30days">Last 30 Days</SelectItem>
                  <SelectItem value="3months">Last 3 Months</SelectItem>
                  <SelectItem value="6months">Last 6 Months</SelectItem>
                  <SelectItem value="12months">Last 12 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <div className="flex flex-col">
                  <div className="text-sm text-muted-foreground">Total Revenue</div>
                  <div className="text-2xl font-bold mt-1">$119.94</div>
                  <div className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+20% from last period</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex flex-col">
                  <div className="text-sm text-muted-foreground">Subscription Renewal Rate</div>
                  <div className="text-2xl font-bold mt-1">95%</div>
                  <div className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+5% from last period</span>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="flex flex-col">
                  <div className="text-sm text-muted-foreground">Average Transaction Value</div>
                  <div className="text-2xl font-bold mt-1">$19.99</div>
                  <div className="text-sm text-muted-foreground flex items-center mt-1">
                    <span>No change from last period</span>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="mt-6">
              <div className="h-60 bg-gray-50 rounded-md border flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <div className="text-muted-foreground">Revenue Chart (Placeholder)</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default PaymentProcessingIntegration;

