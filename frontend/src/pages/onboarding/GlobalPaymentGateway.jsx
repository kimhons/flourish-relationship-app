import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Shield, 
  Globe, 
  DollarSign, 
  Euro, 
  Smartphone, 
  Wallet,
  Lock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  RefreshCw,
  Settings,
  BarChart3,
  PieChart,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  Search,
  Calendar,
  MapPin,
  Zap,
  Star,
  Award,
  Target,
  Activity,
  Banknote,
  Building,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';

const GlobalPaymentGateway = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [timeRange, setTimeRange] = useState('7d');

  // Payment methods data
  const paymentMethods = [
    {
      id: 1,
      name: "Credit/Debit Cards",
      icon: <CreditCard className="w-6 h-6" />,
      providers: ["Visa", "Mastercard", "American Express", "Discover"],
      regions: ["Global"],
      fees: "2.9% + $0.30",
      processingTime: "Instant",
      status: "Active",
      volume: "$2.4M",
      transactions: 15420
    },
    {
      id: 2,
      name: "PayPal",
      icon: <Wallet className="w-6 h-6" />,
      providers: ["PayPal"],
      regions: ["Global"],
      fees: "3.49% + $0.49",
      processingTime: "Instant",
      status: "Active",
      volume: "$1.8M",
      transactions: 8750
    },
    {
      id: 3,
      name: "Apple Pay",
      icon: <Smartphone className="w-6 h-6" />,
      providers: ["Apple"],
      regions: ["US", "EU", "UK", "Canada"],
      fees: "2.9% + $0.30",
      processingTime: "Instant",
      status: "Active",
      volume: "$950K",
      transactions: 6230
    },
    {
      id: 4,
      name: "Google Pay",
      icon: <Smartphone className="w-6 h-6" />,
      providers: ["Google"],
      regions: ["Global"],
      fees: "2.9% + $0.30",
      processingTime: "Instant",
      status: "Active",
      volume: "$720K",
      transactions: 4580
    },
    {
      id: 5,
      name: "Bank Transfer",
      icon: <Building className="w-6 h-6" />,
      providers: ["ACH", "SEPA", "Wire"],
      regions: ["US", "EU"],
      fees: "0.8% (min $5)",
      processingTime: "1-3 days",
      status: "Active",
      volume: "$3.2M",
      transactions: 2100
    },
    {
      id: 6,
      name: "Cryptocurrency",
      icon: <Banknote className="w-6 h-6" />,
      providers: ["Bitcoin", "Ethereum", "USDC"],
      regions: ["Global"],
      fees: "1.5%",
      processingTime: "10-60 min",
      status: "Beta",
      volume: "$450K",
      transactions: 890
    }
  ];

  // Currency support data
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1.00, volume: '$5.2M' },
    { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.85, volume: '$2.8M' },
    { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.73, volume: '$1.9M' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 1.25, volume: '$1.2M' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 1.35, volume: '$890K' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 110.0, volume: '$750K' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rate: 0.92, volume: '$650K' },
    { code: 'SEK', name: 'Swedish Krona', symbol: 'kr', rate: 8.5, volume: '$420K' }
  ];

  // Regional data
  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada", "Mexico"],
      volume: "$6.8M",
      transactions: 28450,
      growth: "+12.5%",
      topMethod: "Credit Cards"
    },
    {
      name: "Europe",
      countries: ["Germany", "France", "UK", "Netherlands", "Sweden"],
      volume: "$4.2M",
      transactions: 19230,
      growth: "+8.7%",
      topMethod: "SEPA Transfer"
    },
    {
      name: "Asia Pacific",
      countries: ["Japan", "Australia", "Singapore", "South Korea"],
      volume: "$2.1M",
      transactions: 12890,
      growth: "+15.2%",
      topMethod: "Mobile Payments"
    },
    {
      name: "Latin America",
      countries: ["Brazil", "Argentina", "Chile", "Colombia"],
      volume: "$890K",
      transactions: 5670,
      growth: "+22.1%",
      topMethod: "Bank Transfer"
    }
  ];

  // Transaction analytics
  const transactionStats = {
    totalVolume: "$14.2M",
    totalTransactions: 67240,
    averageTransaction: "$211.25",
    successRate: "99.2%",
    chargebackRate: "0.3%",
    refundRate: "2.1%",
    monthlyGrowth: "+14.8%",
    activeUsers: 45230
  };

  // Recent transactions
  const recentTransactions = [
    {
      id: "TXN-2024-001",
      user: "Sarah Johnson",
      amount: "$29.99",
      method: "Visa ****4532",
      status: "Completed",
      time: "2 minutes ago",
      country: "US"
    },
    {
      id: "TXN-2024-002",
      user: "Marco Silva",
      amount: "€45.00",
      method: "PayPal",
      status: "Completed",
      time: "5 minutes ago",
      country: "DE"
    },
    {
      id: "TXN-2024-003",
      user: "Yuki Tanaka",
      amount: "¥3,500",
      method: "Apple Pay",
      status: "Processing",
      time: "8 minutes ago",
      country: "JP"
    },
    {
      id: "TXN-2024-004",
      user: "Emma Wilson",
      amount: "£19.99",
      method: "Google Pay",
      status: "Completed",
      time: "12 minutes ago",
      country: "UK"
    },
    {
      id: "TXN-2024-005",
      user: "Alex Chen",
      amount: "$89.99",
      method: "Bank Transfer",
      status: "Pending",
      time: "15 minutes ago",
      country: "CA"
    }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Volume</p>
              <p className="text-2xl font-bold">{transactionStats.totalVolume}</p>
              <p className="text-green-100 text-xs">+14.8% this month</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Transactions</p>
              <p className="text-2xl font-bold">{transactionStats.totalTransactions.toLocaleString()}</p>
              <p className="text-blue-100 text-xs">Success rate: {transactionStats.successRate}</p>
            </div>
            <Activity className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Avg Transaction</p>
              <p className="text-2xl font-bold">{transactionStats.averageTransaction}</p>
              <p className="text-purple-100 text-xs">Chargeback: {transactionStats.chargebackRate}</p>
            </div>
            <BarChart3 className="w-8 h-8 text-purple-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Active Users</p>
              <p className="text-2xl font-bold">{transactionStats.activeUsers.toLocaleString()}</p>
              <p className="text-orange-100 text-xs">Refund rate: {transactionStats.refundRate}</p>
            </div>
            <Users className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </div>

      {/* Payment Methods Overview */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <CreditCard className="w-5 h-5 mr-2 text-blue-500" />
          Payment Methods Performance
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {paymentMethods.map(method => (
            <div key={method.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">{method.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{method.name}</h4>
                    <p className="text-xs text-gray-500">{method.providers.join(', ')}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  method.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {method.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume:</span>
                  <span className="font-semibold">{method.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transactions:</span>
                  <span className="font-semibold">{method.transactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fees:</span>
                  <span className="font-semibold">{method.fees}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing:</span>
                  <span className="font-semibold">{method.processingTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Performance */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Globe className="w-5 h-5 mr-2 text-green-500" />
          Regional Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {regions.map((region, index) => (
            <div key={index} className="border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{region.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume:</span>
                  <span className="font-semibold">{region.volume}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transactions:</span>
                  <span className="font-semibold">{region.transactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Growth:</span>
                  <span className="font-semibold text-green-600">{region.growth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Top Method:</span>
                  <span className="font-semibold">{region.topMethod}</span>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <p className="text-xs text-gray-500">
                  {region.countries.slice(0, 3).join(', ')}
                  {region.countries.length > 3 && ` +${region.countries.length - 3} more`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrencies = () => (
    <div className="space-y-6">
      {/* Currency Overview */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center">
            <Globe className="w-5 h-5 mr-2 text-blue-500" />
            Supported Currencies
          </h3>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Add Currency
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currencies.map(currency => (
            <div key={currency.code} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{currency.code}</h4>
                  <p className="text-sm text-gray-600">{currency.name}</p>
                </div>
                <span className="text-2xl font-bold text-gray-700">{currency.symbol}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Exchange Rate:</span>
                  <span className="font-semibold">{currency.rate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Volume:</span>
                  <span className="font-semibold">{currency.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exchange Rate Trends */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
          Exchange Rate Trends
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-500">Exchange rate chart would be displayed here</p>
            <p className="text-sm text-gray-400">Real-time currency conversion rates</p>
          </div>
        </div>
      </div>

      {/* Currency Settings */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Settings className="w-5 h-5 mr-2 text-purple-500" />
          Currency Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Currency
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Auto-conversion
            </label>
            <div className="flex items-center space-x-3">
              <input type="checkbox" id="autoConvert" className="rounded" defaultChecked />
              <label htmlFor="autoConvert" className="text-sm text-gray-600">
                Automatically convert to user's local currency
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      {/* Transaction Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-500" />
          Recent Transactions
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Transaction ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">User</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Method</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Country</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map(transaction => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <span className="font-mono text-sm text-blue-600">{transaction.id}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-medium text-gray-900">{transaction.user}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-gray-900">{transaction.amount}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-gray-700">{transaction.method}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">{transaction.time}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm text-gray-600">{transaction.country}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transaction Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <PieChart className="w-5 h-5 mr-2 text-purple-500" />
            Payment Method Distribution
          </h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Payment method chart</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
            Transaction Volume Trends
          </h3>
          <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Volume trends chart</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-6">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Security Score</p>
              <p className="text-3xl font-bold">98.7%</p>
              <p className="text-green-100 text-xs">Industry leading</p>
            </div>
            <Shield className="w-8 h-8 text-green-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Fraud Detection</p>
              <p className="text-3xl font-bold">99.4%</p>
              <p className="text-blue-100 text-xs">Accuracy rate</p>
            </div>
            <Target className="w-8 h-8 text-blue-200" />
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Compliance</p>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-purple-100 text-xs">PCI DSS Level 1</p>
            </div>
            <Award className="w-8 h-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Shield className="w-5 h-5 mr-2 text-blue-500" />
          Security Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Lock className="w-6 h-6 text-green-500" />
              <h4 className="font-semibold text-gray-900">End-to-End Encryption</h4>
            </div>
            <p className="text-sm text-gray-600">256-bit SSL encryption for all payment data</p>
            <div className="mt-2">
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Active</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Zap className="w-6 h-6 text-blue-500" />
              <h4 className="font-semibold text-gray-900">Real-time Fraud Detection</h4>
            </div>
            <p className="text-sm text-gray-600">AI-powered fraud prevention and risk scoring</p>
            <div className="mt-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Active</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <CheckCircle className="w-6 h-6 text-purple-500" />
              <h4 className="font-semibold text-gray-900">PCI DSS Compliance</h4>
            </div>
            <p className="text-sm text-gray-600">Level 1 PCI DSS certified infrastructure</p>
            <div className="mt-2">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Certified</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-6 h-6 text-orange-500" />
              <h4 className="font-semibold text-gray-900">3D Secure Authentication</h4>
            </div>
            <p className="text-sm text-gray-600">Additional layer of security for card payments</p>
            <div className="mt-2">
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Enabled</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Activity className="w-6 h-6 text-red-500" />
              <h4 className="font-semibold text-gray-900">Transaction Monitoring</h4>
            </div>
            <p className="text-sm text-gray-600">24/7 monitoring and anomaly detection</p>
            <div className="mt-2">
              <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Monitoring</span>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Globe className="w-6 h-6 text-teal-500" />
              <h4 className="font-semibold text-gray-900">Global Compliance</h4>
            </div>
            <p className="text-sm text-gray-600">GDPR, PSD2, and regional compliance</p>
            <div className="mt-2">
              <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Management */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
          Risk Management
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Risk Scoring Rules</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-700">High-value transactions (>$500)</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Medium Risk</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-700">New user first transaction</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">High Risk</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm text-gray-700">Multiple failed attempts</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Very High Risk</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Security Alerts</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Unusual transaction pattern detected</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 border rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Security scan completed successfully</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Payment Gateway</h1>
              <p className="text-gray-600">Secure, scalable payment processing for global markets</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {currencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.symbol}
                  </option>
                ))}
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: <BarChart3 className="w-4 h-4" /> },
              { id: 'currencies', label: 'Currencies', icon: <Globe className="w-4 h-4" /> },
              { id: 'transactions', label: 'Transactions', icon: <Activity className="w-4 h-4" /> },
              { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3 py-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'currencies' && renderCurrencies()}
          {activeTab === 'transactions' && renderTransactions()}
          {activeTab === 'security' && renderSecurity()}
        </div>
      </div>
    </div>
  );
};

export default GlobalPaymentGateway;

