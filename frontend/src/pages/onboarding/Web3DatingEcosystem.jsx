import React, { useState, useEffect } from 'react';
import { 
  Coins, 
  Shield, 
  Users, 
  Trophy, 
  Wallet, 
  Lock, 
  Star, 
  Gift,
  TrendingUp,
  Globe,
  Zap,
  Heart,
  Award,
  Gem,
  Crown,
  Sparkles,
  Link,
  Database,
  Key,
  CheckCircle
} from 'lucide-react';

const Web3DatingEcosystem = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [walletConnected, setWalletConnected] = useState(false);
  const [userTokens, setUserTokens] = useState(1250);
  const [nftCollection, setNftCollection] = useState([]);
  const [stakingRewards, setStakingRewards] = useState(45.7);
  const [daoVotingPower, setDaoVotingPower] = useState(0.12);

  const [web3Features, setWeb3Features] = useState([
    {
      id: 'nft_profiles',
      name: 'NFT Profile Cards',
      description: 'Unique, verifiable digital identity cards that showcase your personality',
      status: 'active',
      users: 12847,
      revenue: 89000
    },
    {
      id: 'token_rewards',
      name: 'LOVE Token Rewards',
      description: 'Earn tokens for positive interactions and successful matches',
      status: 'active',
      users: 8934,
      revenue: 156000
    },
    {
      id: 'decentralized_matching',
      name: 'Decentralized Matching',
      description: 'Community-driven matching algorithm with transparent governance',
      status: 'active',
      users: 15623,
      revenue: 234000
    },
    {
      id: 'smart_contracts',
      name: 'Smart Dating Contracts',
      description: 'Automated agreements for dates, relationships, and commitments',
      status: 'beta',
      users: 3456,
      revenue: 67000
    },
    {
      id: 'dao_governance',
      name: 'Dating DAO',
      description: 'Community governance for platform decisions and feature development',
      status: 'active',
      users: 5678,
      revenue: 123000
    },
    {
      id: 'metaverse_dates',
      name: 'Metaverse Dating',
      description: 'Virtual reality dates in blockchain-verified virtual worlds',
      status: 'coming_soon',
      users: 0,
      revenue: 0
    }
  ]);

  const [tokenomics, setTokenomics] = useState({
    totalSupply: 1000000000,
    circulatingSupply: 450000000,
    stakingAPY: 12.5,
    burnRate: 2.3,
    utilityScore: 94.7
  });

  const [nftMarketplace, setNftMarketplace] = useState([
    {
      id: 1,
      name: 'Romantic Sunset',
      type: 'Profile Background',
      price: 0.5,
      currency: 'ETH',
      rarity: 'Rare',
      owner: 'You',
      image: '/api/placeholder/200/200'
    },
    {
      id: 2,
      name: 'Cupid\'s Arrow',
      type: 'Profile Badge',
      price: 150,
      currency: 'LOVE',
      rarity: 'Epic',
      owner: 'Market',
      image: '/api/placeholder/200/200'
    },
    {
      id: 3,
      name: 'Love Potion',
      type: 'Special Effect',
      price: 0.2,
      currency: 'ETH',
      rarity: 'Common',
      owner: 'Market',
      image: '/api/placeholder/200/200'
    },
    {
      id: 4,
      name: 'Golden Heart',
      type: 'Profile Frame',
      price: 500,
      currency: 'LOVE',
      rarity: 'Legendary',
      owner: 'Market',
      image: '/api/placeholder/200/200'
    }
  ]);

  const [daoProposals, setDaoProposals] = useState([
    {
      id: 1,
      title: 'Implement AI-Powered Compatibility Scoring',
      description: 'Integrate advanced AI algorithms to improve match quality',
      status: 'active',
      votesFor: 15678,
      votesAgainst: 3456,
      endDate: '2025-01-15',
      category: 'Feature'
    },
    {
      id: 2,
      title: 'Reduce Transaction Fees by 50%',
      description: 'Lower platform fees to increase user adoption',
      status: 'passed',
      votesFor: 23456,
      votesAgainst: 8901,
      endDate: '2025-01-10',
      category: 'Economics'
    },
    {
      id: 3,
      title: 'Launch Mobile App Beta',
      description: 'Develop and release mobile application for iOS and Android',
      status: 'pending',
      votesFor: 0,
      votesAgainst: 0,
      endDate: '2025-01-20',
      category: 'Development'
    }
  ]);

  useEffect(() => {
    // Simulate wallet connection check
    const checkWalletConnection = () => {
      // In a real app, this would check for MetaMask or other wallet connections
      setWalletConnected(Math.random() > 0.5);
    };

    checkWalletConnection();
  }, []);

  const connectWallet = () => {
    // Simulate wallet connection
    setWalletConnected(true);
    setUserTokens(1250);
  };

  const handleVote = (proposalId, vote) => {
    setDaoProposals(prev => 
      prev.map(proposal => 
        proposal.id === proposalId 
          ? {
              ...proposal,
              votesFor: vote === 'for' ? proposal.votesFor + 1 : proposal.votesFor,
              votesAgainst: vote === 'against' ? proposal.votesAgainst + 1 : proposal.votesAgainst
            }
          : proposal
      )
    );
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Wallet Connection */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Web3 Wallet</h3>
            {walletConnected ? (
              <div className="space-y-2">
                <p className="text-purple-100">Connected: 0x1234...5678</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Coins className="w-5 h-5" />
                    <span>{userTokens} LOVE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Gem className="w-5 h-5" />
                    <span>{nftCollection.length} NFTs</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-purple-100">Connect your wallet to access Web3 features</p>
            )}
          </div>
          <div>
            {!walletConnected ? (
              <button
                onClick={connectWallet}
                className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                <span>Connected</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">46,538</div>
          <div className="text-sm text-gray-600">Web3 Users</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <Coins className="w-6 h-6 text-yellow-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">$2.4M</div>
          <div className="text-sm text-gray-600">Token Volume</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <Gem className="w-6 h-6 text-purple-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">12,847</div>
          <div className="text-sm text-gray-600">NFTs Minted</div>
        </div>
        <div className="bg-white p-6 rounded-lg border text-center">
          <div className="flex items-center justify-center mb-2">
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <div className="text-2xl font-bold text-gray-900">+127%</div>
          <div className="text-sm text-gray-600">Growth Rate</div>
        </div>
      </div>

      {/* Web3 Features */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Web3 Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {web3Features.map((feature) => (
            <div key={feature.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{feature.name}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  feature.status === 'active' ? 'bg-green-100 text-green-800' :
                  feature.status === 'beta' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {feature.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{feature.users.toLocaleString()} users</span>
                <span className="text-green-600 font-medium">${feature.revenue.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTokenomics = () => (
    <div className="space-y-6">
      {/* Token Overview */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">LOVE Token Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {(tokenomics.totalSupply / 1000000000).toFixed(1)}B
            </div>
            <div className="text-sm text-gray-600">Total Supply</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {(tokenomics.circulatingSupply / 1000000).toFixed(0)}M
            </div>
            <div className="text-sm text-gray-600">Circulating Supply</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {tokenomics.stakingAPY}%
            </div>
            <div className="text-sm text-gray-600">Staking APY</div>
          </div>
        </div>
      </div>

      {/* Staking Interface */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Token Staking</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount to Stake
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="0"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Stake
                </button>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Available Balance:</span>
                <span className="font-medium">{userTokens} LOVE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Current APY:</span>
                <span className="font-medium text-green-600">{tokenomics.stakingAPY}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lock Period:</span>
                <span className="font-medium">30 days</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Your Staking Rewards</h4>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">
                {stakingRewards} LOVE
              </div>
              <div className="text-sm text-green-700">Pending Rewards</div>
              <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                Claim Rewards
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Token Utility */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Token Utility</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Premium Features', icon: Crown, description: 'Access exclusive dating features' },
            { name: 'NFT Purchases', icon: Gem, description: 'Buy unique profile NFTs' },
            { name: 'Governance Voting', icon: Users, description: 'Vote on platform decisions' },
            { name: 'Staking Rewards', icon: TrendingUp, description: 'Earn passive income' }
          ].map((utility, index) => (
            <div key={index} className="text-center p-4 border rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <utility.icon className="w-6 h-6 text-blue-500" />
              </div>
              <h4 className="font-medium text-gray-900 mb-1">{utility.name}</h4>
              <p className="text-sm text-gray-600">{utility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNFTMarketplace = () => (
    <div className="space-y-6">
      {/* Marketplace Header */}
      <div className="bg-white p-6 rounded-lg border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">NFT Marketplace</h3>
          <div className="flex space-x-2">
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Categories</option>
              <option>Profile Backgrounds</option>
              <option>Profile Badges</option>
              <option>Special Effects</option>
              <option>Profile Frames</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>All Rarities</option>
              <option>Common</option>
              <option>Rare</option>
              <option>Epic</option>
              <option>Legendary</option>
            </select>
          </div>
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {nftMarketplace.map((nft) => (
          <div key={nft.id} className="bg-white rounded-lg border overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{nft.name}</h4>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  nft.rarity === 'Common' ? 'bg-gray-100 text-gray-800' :
                  nft.rarity === 'Rare' ? 'bg-blue-100 text-blue-800' :
                  nft.rarity === 'Epic' ? 'bg-purple-100 text-purple-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {nft.rarity}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{nft.type}</p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  <span className="font-semibold text-gray-900">{nft.price}</span>
                  <span className="text-sm text-gray-600">{nft.currency}</span>
                </div>
                <span className="text-sm text-gray-500">by {nft.owner}</span>
              </div>
              {nft.owner === 'Market' ? (
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Buy Now
                </button>
              ) : (
                <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg">
                  Owned
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDAO = () => (
    <div className="space-y-6">
      {/* DAO Overview */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dating DAO Governance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">{daoVotingPower}%</div>
            <div className="text-sm text-gray-600">Your Voting Power</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-sm text-gray-600">Active Proposals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
            <div className="text-sm text-gray-600">Participation Rate</div>
          </div>
        </div>
      </div>

      {/* Proposals */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Proposals</h3>
        <div className="space-y-4">
          {daoProposals.map((proposal) => (
            <div key={proposal.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-medium text-gray-900">{proposal.title}</h4>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      proposal.status === 'active' ? 'bg-green-100 text-green-800' :
                      proposal.status === 'passed' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {proposal.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{proposal.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Category: {proposal.category}</span>
                    <span>Ends: {proposal.endDate}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-green-600">For: {proposal.votesFor.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-red-600">Against: {proposal.votesAgainst.toLocaleString()}</span>
                  </div>
                </div>
                
                {proposal.status === 'active' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleVote(proposal.id, 'for')}
                      className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
                    >
                      Vote For
                    </button>
                    <button
                      onClick={() => handleVote(proposal.id, 'against')}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                    >
                      Vote Against
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full">
              <Link className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Web3 Dating Ecosystem
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the future of dating with blockchain technology, NFTs, and decentralized governance. 
            Own your data, earn rewards, and participate in the evolution of digital romance.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg border mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', name: 'Overview', icon: Globe },
                { id: 'tokenomics', name: 'Tokenomics', icon: Coins },
                { id: 'nft', name: 'NFT Marketplace', icon: Gem },
                { id: 'dao', name: 'DAO Governance', icon: Users }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && renderOverview()}
            {activeTab === 'tokenomics' && renderTokenomics()}
            {activeTab === 'nft' && renderNFTMarketplace()}
            {activeTab === 'dao' && renderDAO()}
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Secure & Transparent</h4>
              <p className="text-sm text-blue-700">
                All transactions are secured by blockchain technology. Your data is encrypted and you maintain 
                full ownership of your digital assets. Smart contracts ensure transparent and fair interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3DatingEcosystem;

