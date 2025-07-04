import React, { useState, useEffect } from 'react';
import { 
  BarChart, Bar, LineChart, Line, AreaChart, Area, ScatterChart, Scatter,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  Layers, Plus, Minus, Copy, Trash2, Settings, Play,
  Brain, Zap, Target, Eye, Download, Upload, Save,
  RefreshCw, BarChart3, TrendingUp, TrendingDown,
  CheckCircle, AlertTriangle, XCircle, Clock, Activity
} from 'lucide-react';

const NeuralNetworkArchitectureDesigner = () => {
  const [selectedArchitecture, setSelectedArchitecture] = useState('custom');
  const [layers, setLayers] = useState([
    { id: 1, type: 'input', neurons: 512, activation: 'none', dropout: 0.0, name: 'Input Layer' },
    { id: 2, type: 'dense', neurons: 1024, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 1' },
    { id: 3, type: 'dense', neurons: 512, activation: 'relu', dropout: 0.3, name: 'Hidden Layer 2' },
    { id: 4, type: 'dense', neurons: 256, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 3' },
    { id: 5, type: 'output', neurons: 1, activation: 'sigmoid', dropout: 0.0, name: 'Output Layer' }
  ]);
  const [isTraining, setIsTraining] = useState(false);
  const [architectureMetrics, setArchitectureMetrics] = useState({
    totalParams: 2400000,
    trainableParams: 2400000,
    modelSize: 9.6,
    estimatedAccuracy: 94.7,
    trainingTime: 3.2
  });

  // Predefined architectures
  const predefinedArchitectures = [
    {
      id: 'simple_dnn',
      name: 'Simple Deep Neural Network',
      description: 'Basic feedforward network for simple classification',
      layers: [
        { id: 1, type: 'input', neurons: 256, activation: 'none', dropout: 0.0, name: 'Input Layer' },
        { id: 2, type: 'dense', neurons: 512, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 1' },
        { id: 3, type: 'dense', neurons: 256, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 2' },
        { id: 4, type: 'output', neurons: 1, activation: 'sigmoid', dropout: 0.0, name: 'Output Layer' }
      ]
    },
    {
      id: 'deep_network',
      name: 'Deep Neural Network',
      description: 'Multi-layer network for complex pattern recognition',
      layers: [
        { id: 1, type: 'input', neurons: 512, activation: 'none', dropout: 0.0, name: 'Input Layer' },
        { id: 2, type: 'dense', neurons: 1024, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 1' },
        { id: 3, type: 'dense', neurons: 512, activation: 'relu', dropout: 0.3, name: 'Hidden Layer 2' },
        { id: 4, type: 'dense', neurons: 256, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 3' },
        { id: 5, type: 'dense', neurons: 128, activation: 'relu', dropout: 0.2, name: 'Hidden Layer 4' },
        { id: 6, type: 'output', neurons: 1, activation: 'sigmoid', dropout: 0.0, name: 'Output Layer' }
      ]
    },
    {
      id: 'residual_network',
      name: 'Residual Network',
      description: 'Network with skip connections for very deep architectures',
      layers: [
        { id: 1, type: 'input', neurons: 512, activation: 'none', dropout: 0.0, name: 'Input Layer' },
        { id: 2, type: 'dense', neurons: 512, activation: 'relu', dropout: 0.1, name: 'Residual Block 1' },
        { id: 3, type: 'residual', neurons: 512, activation: 'relu', dropout: 0.1, name: 'Residual Connection' },
        { id: 4, type: 'dense', neurons: 256, activation: 'relu', dropout: 0.2, name: 'Residual Block 2' },
        { id: 5, type: 'residual', neurons: 256, activation: 'relu', dropout: 0.2, name: 'Residual Connection' },
        { id: 6, type: 'output', neurons: 1, activation: 'sigmoid', dropout: 0.0, name: 'Output Layer' }
      ]
    }
  ];

  // Layer types
  const layerTypes = [
    { value: 'input', label: 'Input Layer', color: 'bg-blue-100 text-blue-800' },
    { value: 'dense', label: 'Dense Layer', color: 'bg-green-100 text-green-800' },
    { value: 'conv', label: 'Convolutional', color: 'bg-purple-100 text-purple-800' },
    { value: 'lstm', label: 'LSTM', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'dropout', label: 'Dropout', color: 'bg-gray-100 text-gray-800' },
    { value: 'batch_norm', label: 'Batch Normalization', color: 'bg-indigo-100 text-indigo-800' },
    { value: 'residual', label: 'Residual Connection', color: 'bg-pink-100 text-pink-800' },
    { value: 'output', label: 'Output Layer', color: 'bg-red-100 text-red-800' }
  ];

  // Activation functions
  const activationFunctions = [
    'none', 'relu', 'sigmoid', 'tanh', 'softmax', 'leaky_relu', 'elu', 'swish', 'gelu'
  ];

  // Architecture performance comparison
  const architectureComparison = [
    { architecture: 'Simple DNN', accuracy: 87.3, params: '0.8M', trainTime: '1.2h', complexity: 'Low' },
    { architecture: 'Deep Network', accuracy: 94.7, params: '2.4M', trainTime: '3.2h', complexity: 'Medium' },
    { architecture: 'Residual Net', accuracy: 96.2, params: '3.1M', trainTime: '4.8h', complexity: 'High' },
    { architecture: 'Custom Design', accuracy: 95.1, params: '2.8M', trainTime: '3.9h', complexity: 'Medium' }
  ];

  // Training metrics over epochs
  const trainingMetrics = [
    { epoch: 1, accuracy: 0.65, loss: 0.89, valAccuracy: 0.62, valLoss: 0.92 },
    { epoch: 10, accuracy: 0.78, loss: 0.67, valAccuracy: 0.75, valLoss: 0.71 },
    { epoch: 20, accuracy: 0.84, loss: 0.52, valAccuracy: 0.81, valLoss: 0.56 },
    { epoch: 30, accuracy: 0.89, loss: 0.41, valAccuracy: 0.86, valLoss: 0.45 },
    { epoch: 40, accuracy: 0.92, loss: 0.34, valAccuracy: 0.89, valLoss: 0.38 },
    { epoch: 50, accuracy: 0.94, loss: 0.29, valAccuracy: 0.91, valLoss: 0.33 },
    { epoch: 60, accuracy: 0.947, loss: 0.26, valAccuracy: 0.923, valLoss: 0.31 }
  ];

  // Architecture optimization suggestions
  const optimizationSuggestions = [
    {
      type: 'performance',
      title: 'Add Batch Normalization',
      description: 'Adding batch normalization after dense layers can improve training stability',
      impact: '+2.3% accuracy',
      difficulty: 'Easy'
    },
    {
      type: 'efficiency',
      title: 'Reduce Layer Width',
      description: 'Consider reducing neurons in middle layers to decrease model size',
      impact: '-30% parameters',
      difficulty: 'Medium'
    },
    {
      type: 'regularization',
      title: 'Increase Dropout',
      description: 'Higher dropout rates may help prevent overfitting',
      impact: '+1.8% validation accuracy',
      difficulty: 'Easy'
    },
    {
      type: 'architecture',
      title: 'Add Skip Connections',
      description: 'Residual connections can help with gradient flow in deeper networks',
      impact: '+3.1% accuracy',
      difficulty: 'Hard'
    }
  ];

  // Layer visualization data
  const layerVisualization = layers.map((layer, index) => ({
    layer: layer.name,
    neurons: layer.neurons,
    parameters: index === 0 ? 0 : layers[index - 1].neurons * layer.neurons,
    activations: layer.activation !== 'none' ? layer.neurons : 0
  }));

  useEffect(() => {
    // Calculate architecture metrics when layers change
    const totalParams = layers.reduce((total, layer, index) => {
      if (index === 0) return total;
      return total + (layers[index - 1].neurons * layer.neurons);
    }, 0);

    const modelSize = totalParams * 4 / (1024 * 1024); // Assuming 4 bytes per parameter
    const estimatedAccuracy = Math.min(95, 75 + (layers.length - 2) * 3 + (totalParams / 100000));
    const trainingTime = 0.5 + (layers.length * 0.3) + (totalParams / 1000000);

    setArchitectureMetrics({
      totalParams,
      trainableParams: totalParams,
      modelSize,
      estimatedAccuracy: Math.round(estimatedAccuracy * 10) / 10,
      trainingTime: Math.round(trainingTime * 10) / 10
    });
  }, [layers]);

  const addLayer = (afterIndex) => {
    const newLayer = {
      id: Math.max(...layers.map(l => l.id)) + 1,
      type: 'dense',
      neurons: 128,
      activation: 'relu',
      dropout: 0.2,
      name: `Hidden Layer ${layers.length - 1}`
    };
    const newLayers = [...layers];
    newLayers.splice(afterIndex + 1, 0, newLayer);
    setLayers(newLayers);
  };

  const removeLayer = (index) => {
    if (layers.length > 3) { // Keep at least input, one hidden, and output
      const newLayers = layers.filter((_, i) => i !== index);
      setLayers(newLayers);
    }
  };

  const updateLayer = (index, field, value) => {
    const newLayers = [...layers];
    newLayers[index] = { ...newLayers[index], [field]: value };
    setLayers(newLayers);
  };

  const loadPredefinedArchitecture = (architectureId) => {
    const architecture = predefinedArchitectures.find(a => a.id === architectureId);
    if (architecture) {
      setLayers(architecture.layers);
      setSelectedArchitecture(architectureId);
    }
  };

  const duplicateLayer = (index) => {
    const layerToDuplicate = layers[index];
    const newLayer = {
      ...layerToDuplicate,
      id: Math.max(...layers.map(l => l.id)) + 1,
      name: `${layerToDuplicate.name} (Copy)`
    };
    const newLayers = [...layers];
    newLayers.splice(index + 1, 0, newLayer);
    setLayers(newLayers);
  };

  const getLayerTypeColor = (type) => {
    const layerType = layerTypes.find(lt => lt.value === type);
    return layerType ? layerType.color : 'bg-gray-100 text-gray-800';
  };

  const getSuggestionColor = (type) => {
    switch (type) {
      case 'performance': return 'border-green-200 bg-green-50';
      case 'efficiency': return 'border-blue-200 bg-blue-50';
      case 'regularization': return 'border-yellow-200 bg-yellow-50';
      case 'architecture': return 'border-purple-200 bg-purple-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Layers className="w-8 h-8 text-cyan-600" />
              Neural Network Architecture Designer
            </h1>
            <p className="text-gray-600">
              Design, visualize, and optimize neural network architectures for relationship prediction models
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedArchitecture}
              onChange={(e) => {
                if (e.target.value !== 'custom') {
                  loadPredefinedArchitecture(e.target.value);
                }
                setSelectedArchitecture(e.target.value);
              }}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            >
              <option value="custom">Custom Architecture</option>
              {predefinedArchitectures.map(arch => (
                <option key={arch.id} value={arch.id}>{arch.name}</option>
              ))}
            </select>
            
            <button
              onClick={() => setIsTraining(!isTraining)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isTraining 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-cyan-600 text-white hover:bg-cyan-700'
              }`}
            >
              {isTraining ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              {isTraining ? 'Stop Training' : 'Start Training'}
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Save className="w-4 h-4" />
              Save Architecture
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export Model
            </button>
          </div>
        </div>
      </div>

      {/* Architecture Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Brain className="w-6 h-6 text-cyan-600" />
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {architectureMetrics.totalParams.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Parameters</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-6 h-6 text-green-600" />
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {architectureMetrics.estimatedAccuracy}%
          </div>
          <div className="text-sm text-gray-600">Estimated Accuracy</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-6 h-6 text-blue-600" />
            <Activity className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {architectureMetrics.trainingTime}h
          </div>
          <div className="text-sm text-gray-600">Training Time</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <TrendingDown className="w-4 h-4 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {architectureMetrics.modelSize.toFixed(1)} MB
          </div>
          <div className="text-sm text-gray-600">Model Size</div>
        </div>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Layers className="w-6 h-6 text-indigo-600" />
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {layers.length}
          </div>
          <div className="text-sm text-gray-600">Total Layers</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Layer Types */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Available Layer Types</h3>
            <div className="space-y-2">
              {layerTypes.map((layerType) => (
                <div
                  key={layerType.value}
                  className={`px-3 py-2 rounded-lg text-sm font-medium ${layerType.color} cursor-pointer hover:opacity-80 transition-opacity`}
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData('layerType', layerType.value)}
                >
                  {layerType.label}
                </div>
              ))}
            </div>
          </div>

          {/* Optimization Suggestions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Optimization Suggestions</h3>
            <div className="space-y-3">
              {optimizationSuggestions.slice(0, 3).map((suggestion, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getSuggestionColor(suggestion.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{suggestion.title}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(suggestion.difficulty)}`}>
                      {suggestion.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{suggestion.description}</p>
                  <div className="text-sm font-medium text-green-600">{suggestion.impact}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Upload className="w-4 h-4" />
                Import Architecture
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                Visualize Network
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                <Settings className="w-4 h-4" />
                Advanced Settings
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Architecture Designer */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Architecture Designer</h3>
            <div className="space-y-4">
              {layers.map((layer, index) => (
                <div key={layer.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLayerTypeColor(layer.type)}`}>
                        {layerTypes.find(lt => lt.value === layer.type)?.label || layer.type}
                      </span>
                      <input
                        type="text"
                        value={layer.name}
                        onChange={(e) => updateLayer(index, 'name', e.target.value)}
                        className="font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded px-2 py-1"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      {index > 0 && index < layers.length - 1 && (
                        <>
                          <button
                            onClick={() => addLayer(index)}
                            className="p-1 text-green-600 hover:bg-green-100 rounded transition-colors"
                            title="Add layer after"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => duplicateLayer(index)}
                            className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                            title="Duplicate layer"
                          >
                            <Copy className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeLayer(index)}
                            className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                            title="Remove layer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        value={layer.type}
                        onChange={(e) => updateLayer(index, 'type', e.target.value)}
                        disabled={layer.type === 'input' || layer.type === 'output'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:bg-gray-100"
                      >
                        {layerTypes.map(lt => (
                          <option key={lt.value} value={lt.value}>{lt.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Neurons</label>
                      <input
                        type="number"
                        value={layer.neurons}
                        onChange={(e) => updateLayer(index, 'neurons', parseInt(e.target.value) || 0)}
                        min="1"
                        max="4096"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Activation</label>
                      <select
                        value={layer.activation}
                        onChange={(e) => updateLayer(index, 'activation', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      >
                        {activationFunctions.map(af => (
                          <option key={af} value={af}>{af}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dropout</label>
                      <input
                        type="number"
                        value={layer.dropout}
                        onChange={(e) => updateLayer(index, 'dropout', parseFloat(e.target.value) || 0)}
                        min="0"
                        max="0.9"
                        step="0.1"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Visualization & Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Layer Visualization</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={layerVisualization}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="layer" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="neurons" fill="#06b6d4" name="Neurons" />
                  <Bar dataKey="parameters" fill="#3b82f6" name="Parameters" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Architecture Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={architectureComparison}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="architecture" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accuracy" fill="#10b981" name="Accuracy %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Training Progress */}
          {isTraining && (
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Training Progress</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trainingMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={2} name="Training Accuracy" />
                  <Line yAxisId="left" type="monotone" dataKey="valAccuracy" stroke="#3b82f6" strokeWidth={2} name="Validation Accuracy" />
                  <Line yAxisId="right" type="monotone" dataKey="loss" stroke="#f59e0b" strokeWidth={2} name="Training Loss" />
                  <Line yAxisId="right" type="monotone" dataKey="valLoss" stroke="#ef4444" strokeWidth={2} name="Validation Loss" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Architecture Configuration */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Advanced Architecture Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Optimizer</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option value="adam">Adam</option>
                  <option value="adamw">AdamW</option>
                  <option value="sgd">SGD with Momentum</option>
                  <option value="rmsprop">RMSprop</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Loss Function</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option value="binary_crossentropy">Binary Crossentropy</option>
                  <option value="categorical_crossentropy">Categorical Crossentropy</option>
                  <option value="mse">Mean Squared Error</option>
                  <option value="focal">Focal Loss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Learning Rate</label>
                <input
                  type="number"
                  step="0.0001"
                  min="0.0001"
                  max="0.1"
                  defaultValue="0.001"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Batch Size</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option value="32">32</option>
                  <option value="64">64</option>
                  <option value="128">128</option>
                  <option value="256">256</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Weight Initialization</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option value="xavier">Xavier/Glorot</option>
                  <option value="he">He Initialization</option>
                  <option value="random">Random Normal</option>
                  <option value="zeros">Zeros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Regularization</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                  <option value="l2">L2 Regularization</option>
                  <option value="l1">L1 Regularization</option>
                  <option value="elastic">Elastic Net</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors">
                Apply Configuration
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reset to Default
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Auto-Optimize
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkArchitectureDesigner;

