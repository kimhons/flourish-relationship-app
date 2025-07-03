import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Crown, 
  Star, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Settings,
  Edit3,
  Trash2,
  Plus,
  Download,
  Upload,
  RefreshCw,
  Pause,
  Play,
  SkipForward,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Shield,
  Zap,
  Gift,
  Heart,
  Award,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Bell,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  Copy,
  Check,
  X,
  Search,
  Filter,
  SortAsc,
  Calendar as CalendarIcon,
  FileText,
  Receipt,
  Wallet,
  Building,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  Wifi,
  Database,
  Server,
  Cloud,
  HardDrive,
  Cpu,
  MemoryStick,
  Battery,
  Signal,
  Bluetooth,
  Headphones,
  Camera,
  Video,
  Image,
  Music,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Speaker,
  Radio,
  Tv,
  Film,
  BookOpen,
  Bookmark,
  Tag,
  Hash,
  AtSign,
  Link,
  Paperclip,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileImage,
  FileVideo,
  FileAudio,
  FileCode,
  FilePdf,
  FileSpreadsheet,
  FileWord,
  FilePowerpoint,
  FileZip,
  Layers,
  Package,
  Box,
  Truck,
  MapPin,
  Navigation,
  Compass,
  Map,
  Route,
  Flag,
  Home,
  Building2,
  Store,
  ShoppingCart,
  ShoppingBag,
  Basket,
  Package2,
  Truck2,
  Plane,
  Car,
  Bus,
  Train,
  Bike,
  Walk,
  Ship,
  Anchor,
  Sailboat
} from 'lucide-react';

const AdvancedSubscriptionManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showBillingModal, setShowBillingModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [billingHistory, setBillingHistory] = useState([]);
  const [usageData, setUsageData] = useState({});
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [currentSubscription, setCurrentSubscription] = useState(null);
  const [subscriptionPlans, setSubscriptionPlans] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [notifications, setNotifications] = useState([]);

  // Subscription plans
  useEffect(() => {
    setSubscriptionPlans([
      {
        id: 'free',
        name: 'Free',
        price: 0,
        billing: 'forever',
        description: 'Perfect for getting started with basic relationship tools',
        features: [
          'Basic relationship assessments',
          'Daily connection prompts',
          'Basic goal tracking',
          'Community access',
          'Mobile app access'
        ],
        limits: {
          assessments: 3,
          goals: 5,
          dateIdeas: 10,
          storage: '100MB',
          support: 'Community'
        },
        popular: false,
        current: false,
        color: 'bg-gray-500'
      },
      {
        id: 'premium',
        name: 'Premium',
        price: 29,
        billing: 'monthly',
        description: 'Comprehensive relationship tools for serious couples',
        features: [
          'All Free features',
          'Advanced assessments & insights',
          'AI-powered coaching',
          'Unlimited goals & tracking',
          'Premium date planning',
          'Expert content library',
          'Priority support'
        ],
        limits: {
          assessments: 'Unlimited',
          goals: 'Unlimited',
          dateIdeas: 'Unlimited',
          storage: '5GB',
          support: 'Email & Chat'
        },
        popular: true,
        current: true,
        color: 'bg-blue-500',
        savings: null
      },
      {
        id: 'premium-annual',
        name: 'Premium Annual',
        price: 290,
        billing: 'annually',
        monthlyEquivalent: 24.17,
        description: 'Best value for committed couples',
        features: [
          'All Premium features',
          '2 months free',
          'Annual relationship report',
          'Exclusive workshops',
          'VIP support'
        ],
        limits: {
          assessments: 'Unlimited',
          goals: 'Unlimited',
          dateIdeas: 'Unlimited',
          storage: '10GB',
          support: 'Priority Phone & Chat'
        },
        popular: false,
        current: false,
        color: 'bg-purple-500',
        savings: 58
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 97,
        billing: 'monthly',
        description: 'For couples seeking professional-grade tools and coaching',
        features: [
          'All Premium features',
          'Professional coaching sessions',
          'Advanced analytics dashboard',
          'Certification programs',
          'Concierge services',
          'White-glove onboarding',
          '24/7 VIP support'
        ],
        limits: {
          assessments: 'Unlimited',
          goals: 'Unlimited',
          dateIdeas: 'Unlimited',
          storage: 'Unlimited',
          support: '24/7 VIP'
        },
        popular: false,
        current: false,
        color: 'bg-gradient-to-r from-purple-600 to-pink-600',
        savings: null
      }
    ]);

    setCurrentSubscription({
      id: 'premium',
      name: 'Premium',
      price: 29,
      billing: 'monthly',
      status: 'active',
      nextBilling: '2025-08-03',
      startDate: '2025-01-03',
      autoRenew: true,
      paymentMethod: 'card-1234'
    });

    setBillingHistory([
      {
        id: 1,
        date: '2025-07-03',
        amount: 29.00,
        plan: 'Premium Monthly',
        status: 'paid',
        invoice: 'INV-2025-07-001',
        paymentMethod: 'Visa ****1234'
      },
      {
        id: 2,
        date: '2025-06-03',
        amount: 29.00,
        plan: 'Premium Monthly',
        status: 'paid',
        invoice: 'INV-2025-06-001',
        paymentMethod: 'Visa ****1234'
      },
      {
        id: 3,
        date: '2025-05-03',
        amount: 29.00,
        plan: 'Premium Monthly',
        status: 'paid',
        invoice: 'INV-2025-05-001',
        paymentMethod: 'Visa ****1234'
      },
      {
        id: 4,
        date: '2025-04-03',
        amount: 29.00,
        plan: 'Premium Monthly',
        status: 'paid',
        invoice: 'INV-2025-04-001',
        paymentMethod: 'Visa ****1234'
      },
      {
        id: 5,
        date: '2025-03-03',
        amount: 0.00,
        plan: 'Free Trial',
        status: 'trial',
        invoice: null,
        paymentMethod: null
      }
    ]);

    setPaymentMethods([
      {
        id: 'card-1234',
        type: 'credit',
        brand: 'visa',
        last4: '1234',
        expiry: '12/27',
        name: 'John Doe',
        default: true,
        billing: {
          address: '123 Main St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94105',
          country: 'US'
        }
      },
      {
        id: 'card-5678',
        type: 'credit',
        brand: 'mastercard',
        last4: '5678',
        expiry: '08/26',
        name: 'Jane Doe',
        default: false,
        billing: {
          address: '123 Main St',
          city: 'San Francisco',
          state: 'CA',
          zip: '94105',
          country: 'US'
        }
      }
    ]);

    setUsageData({
      currentPeriod: {
        assessments: { used: 12, limit: 'Unlimited' },
        goals: { used: 8, limit: 'Unlimited' },
        dateIdeas: { used: 45, limit: 'Unlimited' },
        storage: { used: '2.3GB', limit: '5GB' },
        coachingSessions: { used: 2, limit: 4 },
        contentAccess: { used: 156, limit: 'Unlimited' }
      },
      trends: {
        assessments: [8, 10, 12, 15, 12],
        goals: [5, 6, 7, 8, 8],
        dateIdeas: [20, 25, 30, 40, 45],
        storage: [1.2, 1.5, 1.8, 2.1, 2.3]
      }
    });

    setNotifications([
      {
        id: 1,
        type: 'billing',
        title: 'Payment Successful',
        message: 'Your Premium subscription has been renewed for $29.00',
        date: '2025-07-03',
        read: false
      },
      {
        id: 2,
        type: 'usage',
        title: 'Storage Warning',
        message: 'You\'ve used 80% of your storage limit (4GB of 5GB)',
        date: '2025-07-01',
        read: false
      },
      {
        id: 3,
        type: 'feature',
        title: 'New Feature Available',
        message: 'Professional coaching sessions are now available in your plan',
        date: '2025-06-28',
        read: true
      }
    ]);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
      case 'failed':
        return 'bg-red-100 text-red-800';
      case 'trial':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      {/* Current Subscription Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="h-6 w-6" />
              <h2 className="text-2xl font-bold">{currentSubscription?.name} Plan</h2>
            </div>
            <p className="text-blue-100 mb-4">
              Active since {formatDate(currentSubscription?.startDate)}
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{formatCurrency(currentSubscription?.price)}</div>
                <div className="text-sm text-blue-100">per month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{formatDate(currentSubscription?.nextBilling)}</div>
                <div className="text-sm text-blue-100">next billing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {currentSubscription?.autoRenew ? 'Auto' : 'Manual'}
                </div>
                <div className="text-sm text-blue-100">renewal</div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(currentSubscription?.status)}`}>
                {currentSubscription?.status?.toUpperCase()}
              </span>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => setShowUpgradeModal(true)}
                  className="block w-full bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium"
                >
                  Upgrade Plan
                </button>
                <button
                  onClick={() => setShowBillingModal(true)}
                  className="block w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors text-sm font-medium"
                >
                  Manage Billing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">This Month</span>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Assessments</h3>
            <p className="text-2xl font-bold text-blue-600">{usageData.currentPeriod?.assessments.used}</p>
          </div>
          <div className="text-sm text-gray-600">
            of {usageData.currentPeriod?.assessments.limit} used
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">Active</span>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Goals</h3>
            <p className="text-2xl font-bold text-green-600">{usageData.currentPeriod?.goals.used}</p>
          </div>
          <div className="text-sm text-gray-600">
            of {usageData.currentPeriod?.goals.limit} created
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">Explored</span>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Date Ideas</h3>
            <p className="text-2xl font-bold text-purple-600">{usageData.currentPeriod?.dateIdeas.used}</p>
          </div>
          <div className="text-sm text-gray-600">
            of {usageData.currentPeriod?.dateIdeas.limit} viewed
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <HardDrive className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-sm text-gray-500">Storage</span>
          </div>
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Data Used</h3>
            <p className="text-2xl font-bold text-orange-600">{usageData.currentPeriod?.storage.used}</p>
          </div>
          <div className="text-sm text-gray-600">
            of {usageData.currentPeriod?.storage.limit} used
          </div>
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{ width: '46%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {billingHistory.slice(0, 3).map(transaction => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Receipt className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{transaction.plan}</h4>
                  <p className="text-sm text-gray-600">{formatDate(transaction.date)}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-gray-900">{formatCurrency(transaction.amount)}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() => setActiveTab('billing')}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View All Transactions
          </button>
        </div>
      </div>

      {/* Notifications */}
      {notifications.filter(n => !n.read).length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h3>
          <div className="space-y-3">
            {notifications.filter(n => !n.read).map(notification => (
              <div key={notification.id} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bell className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{notification.title}</h4>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{formatDate(notification.date)}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderPlansTab = () => (
    <div className="space-y-6">
      {/* Plans Comparison */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Your Plan</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {subscriptionPlans.map(plan => (
            <div
              key={plan.id}
              className={`relative rounded-xl border-2 p-6 ${
                plan.current 
                  ? 'border-blue-500 bg-blue-50' 
                  : plan.popular 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              } transition-colors`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {plan.current && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Current Plan
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`h-12 w-12 ${plan.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{plan.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  {plan.price === 0 ? 'Free' : formatCurrency(plan.price)}
                </div>
                <div className="text-sm text-gray-600">
                  {plan.billing === 'forever' ? '' : `per ${plan.billing.replace('ly', '')}`}
                </div>
                {plan.monthlyEquivalent && (
                  <div className="text-sm text-green-600 font-medium">
                    {formatCurrency(plan.monthlyEquivalent)}/month
                  </div>
                )}
                {plan.savings && (
                  <div className="text-sm text-green-600 font-medium">
                    Save {formatCurrency(plan.savings)}
                  </div>
                )}
              </div>

              <div className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessments:</span>
                  <span className="font-medium">{plan.limits.assessments}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Goals:</span>
                  <span className="font-medium">{plan.limits.goals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Storage:</span>
                  <span className="font-medium">{plan.limits.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Support:</span>
                  <span className="font-medium">{plan.limits.support}</span>
                </div>
              </div>

              <button
                onClick={() => plan.current ? null : setSelectedPlan(plan)}
                disabled={plan.current}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  plan.current
                    ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : plan.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {plan.current ? 'Current Plan' : plan.price === 0 ? 'Downgrade' : 'Upgrade'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Promo Code */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Have a Promo Code?</h3>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Apply
          </button>
        </div>
      </div>
    </div>
  );

  const renderBillingTab = () => (
    <div className="space-y-6">
      {/* Payment Methods */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Add Payment Method</span>
          </button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map(method => (
            <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900 capitalize">{method.brand}</span>
                    <span className="text-gray-600">****{method.last4}</span>
                    {method.default && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Default
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    Expires {method.expiry} • {method.name}
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit3 className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Billing History</h3>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
            <Download className="h-4 w-4" />
            <span>Download All</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Description</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map(transaction => (
                <tr key={transaction.id} className="border-b border-gray-100">
                  <td className="py-3 px-4 text-gray-900">{formatDate(transaction.date)}</td>
                  <td className="py-3 px-4">
                    <div>
                      <div className="font-medium text-gray-900">{transaction.plan}</div>
                      {transaction.paymentMethod && (
                        <div className="text-sm text-gray-600">{transaction.paymentMethod}</div>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-medium text-gray-900">
                    {formatCurrency(transaction.amount)}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {transaction.invoice ? (
                      <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{transaction.invoice}</span>
                      </button>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Billing Settings */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Billing Settings</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Auto-renewal</h4>
              <p className="text-sm text-gray-600">Automatically renew your subscription</p>
            </div>
            <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              currentSubscription?.autoRenew ? 'bg-blue-600' : 'bg-gray-200'
            }`}>
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                currentSubscription?.autoRenew ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Email receipts</h4>
              <p className="text-sm text-gray-600">Receive email receipts for payments</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Usage alerts</h4>
              <p className="text-sm text-gray-600">Get notified when approaching limits</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsageTab = () => (
    <div className="space-y-6">
      {/* Usage Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Assessments</h3>
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {usageData.currentPeriod?.assessments.used}
          </div>
          <div className="text-sm text-gray-600 mb-4">
            of {usageData.currentPeriod?.assessments.limit} used this month
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Storage</h3>
            <HardDrive className="h-5 w-5 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600 mb-2">
            {usageData.currentPeriod?.storage.used}
          </div>
          <div className="text-sm text-gray-600 mb-4">
            of {usageData.currentPeriod?.storage.limit} used
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-orange-600 rounded-full" style={{ width: '46%' }}></div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Coaching Sessions</h3>
            <Users className="h-5 w-5 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-purple-600 mb-2">
            {usageData.currentPeriod?.coachingSessions.used}
          </div>
          <div className="text-sm text-gray-600 mb-4">
            of {usageData.currentPeriod?.coachingSessions.limit} used this month
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-purple-600 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>
      </div>

      {/* Usage Trends */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Usage Trends</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Assessments Completed</h4>
            <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-between p-4">
              {usageData.trends?.assessments.map((value, index) => (
                <div
                  key={index}
                  className="bg-blue-600 rounded-t"
                  style={{ 
                    height: `${(value / Math.max(...usageData.trends.assessments)) * 100}%`,
                    width: '15%'
                  }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>5 months ago</span>
              <span>This month</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Storage Usage (GB)</h4>
            <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-between p-4">
              {usageData.trends?.storage.map((value, index) => (
                <div
                  key={index}
                  className="bg-orange-600 rounded-t"
                  style={{ 
                    height: `${(value / Math.max(...usageData.trends.storage)) * 100}%`,
                    width: '15%'
                  }}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>5 months ago</span>
              <span>This month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Usage Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Feature Usage Breakdown</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-medium text-gray-900">Relationship Assessments</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm text-gray-600 w-12">75%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Target className="h-4 w-4 text-green-600" />
              </div>
              <span className="font-medium text-gray-900">Goal Tracking</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm text-gray-600 w-12">60%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Heart className="h-4 w-4 text-purple-600" />
              </div>
              <span className="font-medium text-gray-900">Date Planning</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-sm text-gray-600 w-12">85%</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-orange-600" />
              </div>
              <span className="font-medium text-gray-900">Content Library</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-32 bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-sm text-gray-600 w-12">45%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Subscription Management</h1>
                <p className="text-sm text-gray-600">Manage your plan, billing, and usage</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Crown className="h-4 w-4 text-blue-600" />
                <span>{currentSubscription?.name} Plan</span>
              </div>
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
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('plans')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'plans'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Plans & Pricing
            </button>
            <button
              onClick={() => setActiveTab('billing')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'billing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Billing & Payments
            </button>
            <button
              onClick={() => setActiveTab('usage')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'usage'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Usage & Analytics
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverviewTab()}
        {activeTab === 'plans' && renderPlansTab()}
        {activeTab === 'billing' && renderBillingTab()}
        {activeTab === 'usage' && renderUsageTab()}
      </div>
    </div>
  );
};

export default AdvancedSubscriptionManagement;

