import React, { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Shield, 
  Globe, 
  DollarSign, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Settings,
  BarChart3,
  Lock,
  Zap,
  RefreshCw,
  Eye,
  Download,
  Filter,
  Search,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Building,
  Smartphone,
  Banknote,
  PieChart,
  Activity
} from 'lucide-react';

const GlobalPaymentGateway = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedRegion, setSelectedRegion] = useState('global');

  // Simulated real-time payment data
  const [paymentStats, setPaymentStats] = useState({
    totalRevenue: 2847293.45,
    monthlyGrowth: 23.7,
    transactionVolume: 156847,
    successRate: 98.7,
    averageTransaction: 18.23,
    activeSubscriptions: 89456,
    chargebackRate: 0.23,
    processingFees: 45672.89
  });

  const [recentTransactions, setRecentTransactions] = useState([
    {
      id: 'TXN-2025-001847',
      user: 'Sarah Johnson',
      amount: 29.99,
      currency: 'USD',
      method: 'Visa ****4532',
      status: 'completed',
      timestamp: '2 minutes ago',
      type: 'subscription',
      region: 'North America'
    },
    {
      id: 'TXN-2025-001846',
      user: 'Miguel Rodriguez',
      amount: 24.99,
      currency: 'EUR',
      method: 'Mastercard ****8901',
      status: 'completed',
      timestamp: '5 minutes ago',
      type: 'premium_features',
      region: 'Europe'
    },
    {
      id: 'TXN-2025-001845',
      user: 'Yuki Tanaka',
      amount: 3200,
      currency: 'JPY',
      method: 'JCB ****2345',
      status: 'pending',
      timestamp: '8 minutes ago',
      type: 'virtual_gifts',
      region: 'Asia Pacific'
    },
    {
      id: 'TXN-2025-001844',
      user: 'Emma Wilson',
      amount: 49.99,
      currency: 'GBP',
      method: 'Apple Pay',
      status: 'completed',
      timestamp: '12 minutes ago',
      type: 'boost_package',
      region: 'Europe'
    },
    {
      id: 'TXN-2025-001843',
      user: 'Carlos Silva',
      amount: 89.90,
      currency: 'BRL',
      method: 'PIX',
      status: 'failed',
      timestamp: '15 minutes ago',
      type: 'subscription',
      region: 'Latin America'
    }
  ]);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 'credit_cards',
      name: 'Credit/Debit Cards',
      providers: ['Visa', 'Mastercard', 'American Express', 'Discover'],
      volume: 67.3,
      revenue: 1916847.23,
      regions: ['Global'],
      status: 'active',
      fees: '2.9% + $0.30'
    },
    {
      id: 'digital_wallets',
      name: 'Digital Wallets',
      providers: ['Apple Pay', 'Google Pay', 'Samsung Pay', 'PayPal'],
      volume: 18.7,
      revenue: 532456.78,
      regions: ['North America', 'Europe', 'Asia Pacific'],
      status: 'active',
      fees: '2.7% + $0.25'
    },
    {
      id: 'bank_transfers',
      name: 'Bank Transfers',
      providers: ['ACH', 'SEPA', 'Wire Transfer', 'PIX'],
      volume: 8.9,
      revenue: 253478.90,
      regions: ['North America', 'Europe', 'Latin America'],
      status: 'active',
      fees: '0.8% + $0.50'
    },
    {
      id: 'local_methods',
      name: 'Local Payment Methods',
      providers: ['Alipay', 'WeChat Pay', 'iDEAL', 'Sofort'],
      volume: 3.8,
      revenue: 108234.56,
      regions: ['Asia Pacific', 'Europe'],
      status: 'active',
      fees: '1.9% + $0.20'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      providers: ['Bitcoin', 'Ethereum', 'USDC', 'LOVE Token'],
      volume: 1.3,
      revenue: 36275.98,
      regions: ['Global'],
      status: 'beta',
      fees: '1.5% + $0.10'
    }
  ]);

  const [regionalData, setRegionalData] = useState([
    {
      region: 'North America',
      revenue: 1247893.45,
      transactions: 67234,
      growth: 18.9,
      topMethod: 'Credit Cards',
      currency: 'USD',
      successRate: 99.1
    },
    {
      region: 'Europe',
      revenue: 892456.78,
      transactions: 45678,
      growth: 24.3,
      topMethod: 'Digital Wallets',
      currency: 'EUR',
      successRate: 98.8
    },
    {
      region: 'Asia Pacific',
      revenue: 456789.12,
      transactions: 28934,
      growth: 31.7,
      topMethod: 'Local Methods',
      currency: 'Mixed',
      successRate: 97.9
    },
    {
      region: 'Latin America',
      revenue: 189234.56,
      transactions: 12456,
      growth: 42.1,
      topMethod: 'Bank Transfers',
      currency: 'Mixed',
      successRate: 96.8
    },
    {
      region: 'Other',
      revenue: 60919.54,
      transactions: 2545,
      growth: 28.4,
      topMethod: 'Credit Cards',
      currency: 'Mixed',
      successRate: 95.2
    }
  ]);

  const [securityMetrics, setSecurityMetrics] = useState({
    fraudDetectionRate: 99.7,
    falsePositiveRate: 0.8,
    pciCompliance: 100,
    encryptionStrength: '256-bit AES',
    tokenizationRate: 94.3,
    threeDSecureAdoption: 87.6,
    riskScore: 'Low',
    lastSecurityAudit: '2024-12-15'
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPaymentStats(prev => ({
        ...prev,
        totalRevenue: prev.totalRevenue + (Math.random() * 100),
        transactionVolume: prev.transactionVolume + Math.floor(Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(amount);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+{paymentStats.monthlyGrowth}%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{formatCurrency(paymentStats.totalRevenue)}</div>
          <div className="text-gray-600">Total Revenue</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Activity className="h-6 w-6 text-blue-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+12.4%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{paymentStats.transactionVolume.toLocaleString()}</div>
          <div className="text-gray-600">Transactions</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+0.3%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{paymentStats.successRate}%</div>
          <div className="text-gray-600">Success Rate</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">+8.7%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{paymentStats.activeSubscriptions.toLocaleString()}</div>
          <div className="text-gray-600">Active Subscriptions</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Revenue Trends</h3>
          <div className="flex space-x-2">
            {['24h', '7d', '30d', '90d'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedTimeframe(period)}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  selectedTimeframe === period
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">Revenue chart visualization would be displayed here</p>
            <p className="text-sm text-gray-500">Showing {selectedTimeframe} data with real-time updates</p>
          </div>
        </div>
      </div>

      {/* Payment Methods Performance */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Methods Performance</h3>
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    {method.id === 'credit_cards' && <CreditCard className="h-5 w-5 text-gray-600" />}
                    {method.id === 'digital_wallets' && <Smartphone className="h-5 w-5 text-gray-600" />}
                    {method.id === 'bank_transfers' && <Building className="h-5 w-5 text-gray-600" />}
                    {method.id === 'local_methods' && <Globe className="h-5 w-5 text-gray-600" />}
                    {method.id === 'crypto' && <Wallet className="h-5 w-5 text-gray-600" />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{method.name}</h4>
                    <p className="text-sm text-gray-600">{method.providers.join(', ')}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{method.volume}%</div>
                  <div className="text-sm text-gray-600">Volume Share</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-gray-600">Revenue</div>
                  <div className="font-semibold">{formatCurrency(method.revenue)}</div>
                </div>
                <div>
                  <div className="text-gray-600">Regions</div>
                  <div className="font-semibold">{method.regions.join(', ')}</div>
                </div>
                <div>
                  <div className="text-gray-600">Processing Fees</div>
                  <div className="font-semibold">{method.fees}</div>
                </div>
                <div>
                  <div className="text-gray-600">Status</div>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                    method.status === 'active' ? 'bg-green-100 text-green-800' :
                    method.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {method.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recent Transactions</h3>
          <button className="text-purple-600 hover:text-purple-700 font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Transaction ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Method</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-mono text-sm">{transaction.id}</td>
                  <td className="py-3 px-4">{transaction.user}</td>
                  <td className="py-3 px-4 font-semibold">
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </td>
                  <td className="py-3 px-4">{transaction.method}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-800' :
                      transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{transaction.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderRegionalAnalytics = () => (
    <div className="space-y-8">
      {/* Regional Performance */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Regional Performance</h3>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="global">Global View</option>
            <option value="north_america">North America</option>
            <option value="europe">Europe</option>
            <option value="asia_pacific">Asia Pacific</option>
            <option value="latin_america">Latin America</option>
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regionalData.map((region) => (
            <div key={region.region} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">{region.region}</h4>
                <span className="text-green-600 text-sm font-medium">+{region.growth}%</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Revenue</span>
                  <span className="font-semibold">{formatCurrency(region.revenue)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Transactions</span>
                  <span className="font-semibold">{region.transactions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold">{region.successRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Top Method</span>
                  <span className="font-semibold">{region.topMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Primary Currency</span>
                  <span className="font-semibold">{region.currency}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Currency Distribution */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Currency Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Revenue by Currency</h4>
            <div className="space-y-3">
              {[
                { currency: 'USD', amount: 1247893.45, percentage: 43.8 },
                { currency: 'EUR', amount: 892456.78, percentage: 31.4 },
                { currency: 'GBP', amount: 234567.89, percentage: 8.2 },
                { currency: 'JPY', amount: 189234.56, percentage: 6.6 },
                { currency: 'Other', amount: 283140.77, percentage: 10.0 }
              ].map((item) => (
                <div key={item.currency} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-600 rounded mr-3" style={{opacity: item.percentage / 50}}></div>
                    <span className="font-medium">{item.currency}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{formatCurrency(item.amount)}</div>
                    <div className="text-sm text-gray-600">{item.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Exchange Rate Impact</h4>
            <div className="space-y-3">
              {[
                { pair: 'EUR/USD', rate: 1.0847, change: 0.23, impact: '+$2,847' },
                { pair: 'GBP/USD', rate: 1.2634, change: -0.15, impact: '-$1,234' },
                { pair: 'JPY/USD', rate: 0.0067, change: 0.08, impact: '+$567' },
                { pair: 'CAD/USD', rate: 0.7234, change: 0.12, impact: '+$890' }
              ].map((item) => (
                <div key={item.pair} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{item.pair}</div>
                    <div className="text-sm text-gray-600">{item.rate}</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.change >= 0 ? '+' : ''}{item.change}%
                    </div>
                    <div className={`text-sm ${item.impact.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {item.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-8">
      {/* Security Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{securityMetrics.fraudDetectionRate}%</div>
          <div className="text-gray-600">Fraud Detection</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <CheckCircle className="h-5 w-5 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{securityMetrics.pciCompliance}%</div>
          <div className="text-gray-600">PCI Compliance</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">Low</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{securityMetrics.falsePositiveRate}%</div>
          <div className="text-gray-600">False Positives</div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
            <span className="text-green-600 text-sm font-medium">Active</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{securityMetrics.tokenizationRate}%</div>
          <div className="text-gray-600">Tokenization</div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Security Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Advanced Fraud Detection</div>
                  <div className="text-sm text-gray-600">AI-powered risk assessment</div>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Lock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">End-to-End Encryption</div>
                  <div className="text-sm text-gray-600">{securityMetrics.encryptionStrength}</div>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold">Real-time Monitoring</div>
                  <div className="text-sm text-gray-600">24/7 transaction monitoring</div>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg mr-3">
                  <CreditCard className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold">3D Secure Authentication</div>
                  <div className="text-sm text-gray-600">{securityMetrics.threeDSecureAdoption}% adoption</div>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <RefreshCw className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold">Token Vault</div>
                  <div className="text-sm text-gray-600">Secure card data storage</div>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold">Compliance Monitoring</div>
                  <div className="text-sm text-gray-600">Automated compliance checks</div>
                </div>
              </div>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Risk Assessment</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-2xl font-bold text-green-600">LOW</div>
            </div>
            <div className="font-semibold text-gray-900">Overall Risk Score</div>
            <div className="text-sm text-gray-600">Based on transaction patterns and fraud indicators</div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Chargeback Rate</span>
              <span className="font-semibold text-green-600">{paymentStats.chargebackRate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Decline Rate</span>
              <span className="font-semibold text-green-600">{(100 - paymentStats.successRate).toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Fraud Attempts</span>
              <span className="font-semibold text-yellow-600">0.3%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Suspicious Activity</span>
              <span className="font-semibold text-green-600">0.1%</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="text-sm">
              <div className="text-gray-600 mb-1">Last Security Audit</div>
              <div className="font-semibold">{securityMetrics.lastSecurityAudit}</div>
            </div>
            <div className="text-sm">
              <div className="text-gray-600 mb-1">Next Audit Due</div>
              <div className="font-semibold">2025-06-15</div>
            </div>
            <div className="text-sm">
              <div className="text-gray-600 mb-1">Certification Status</div>
              <div className="font-semibold text-green-600">PCI DSS Level 1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      {/* Payment Gateway Configuration */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Gateway Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>USD - US Dollar</option>
                <option>EUR - Euro</option>
                <option>GBP - British Pound</option>
                <option>JPY - Japanese Yen</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Timeout</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>30 seconds</option>
                <option>60 seconds</option>
                <option>120 seconds</option>
                <option>300 seconds</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Retry Attempts</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>1 attempt</option>
                <option>2 attempts</option>
                <option>3 attempts</option>
                <option>5 attempts</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fraud Detection Level</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Low - Minimal checks</option>
                <option>Medium - Standard checks</option>
                <option>High - Enhanced checks</option>
                <option>Maximum - All available checks</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">3D Secure</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Optional</option>
                <option>Required for high-risk</option>
                <option>Always required</option>
                <option>Disabled</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Webhook Endpoint</label>
              <input
                type="url"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://api.flourish.com/webhooks/payments"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end mt-6">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Save Configuration
          </button>
        </div>
      </div>

      {/* API Keys Management */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-xl font-bold text-gray-900 mb-6">API Keys Management</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-semibold">Production API Key</div>
              <div className="text-sm text-gray-600 font-mono">pk_live_••••••••••••••••••••••••••••••••</div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-semibold">Test API Key</div>
              <div className="text-sm text-gray-600 font-mono">pk_test_••••••••••••••••••••••••••••••••</div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <div className="font-semibold">Webhook Secret</div>
              <div className="text-sm text-gray-600 font-mono">whsec_••••••••••••••••••••••••••••••••</div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <Eye className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg mr-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Global Payment Gateway</h1>
                  <p className="text-sm text-gray-600">Secure, scalable payment processing worldwide</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Total Revenue</div>
                <div className="text-lg font-bold text-green-600">{formatCurrency(paymentStats.totalRevenue)}</div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                View Reports
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'regional', name: 'Regional Analytics', icon: Globe },
              { id: 'security', name: 'Security', icon: Shield },
              { id: 'settings', name: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'regional' && renderRegionalAnalytics()}
        {activeTab === 'security' && renderSecurity()}
        {activeTab === 'settings' && renderSettings()}
      </div>
    </div>
  );
};

export default GlobalPaymentGateway;

