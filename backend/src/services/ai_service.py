"""
Comprehensive AI Service Layer for Flourish
Manages multiple AI models with intelligent routing and fallbacks
"""

import asyncio
import time
import json
import logging
from typing import Dict, List, Optional, Any, Union
from dataclasses import dataclass, asdict
from enum import Enum
import aiohttp
import openai
from together import Together
import google.generativeai as genai
from datetime import datetime, timedelta

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class ModelProvider(Enum):
    OPENAI = "openai"
    TOGETHER = "together"
    GOOGLE = "google"
    LOCAL = "local"

class TaskType(Enum):
    CHAT = "chat"
    EMBEDDING = "embedding"
    VISION = "vision"
    AUDIO = "audio"
    ANALYSIS = "analysis"

class ModelTier(Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    TERTIARY = "tertiary"
    FALLBACK = "fallback"

@dataclass
class ModelConfig:
    """Configuration for an AI model"""
    name: str
    provider: ModelProvider
    tier: ModelTier
    task_types: List[TaskType]
    max_tokens: int
    cost_per_token: float
    latency_target: float  # seconds
    quality_score: float  # 0-1
    availability: float  # 0-1
    api_endpoint: Optional[str] = None
    model_id: Optional[str] = None

@dataclass
class AIRequest:
    """Standard AI request format"""
    task_type: TaskType
    prompt: str
    max_tokens: Optional[int] = None
    temperature: Optional[float] = None
    user_id: Optional[str] = None
    priority: int = 1  # 1-5, 5 being highest
    budget_limit: Optional[float] = None
    quality_requirement: float = 0.7  # 0-1
    context: Optional[Dict[str, Any]] = None

@dataclass
class AIResponse:
    """Standard AI response format"""
    content: str
    model_used: str
    provider: ModelProvider
    latency: float
    cost: float
    quality_score: float
    timestamp: datetime
    request_id: str
    metadata: Optional[Dict[str, Any]] = None

class ModelPerformanceTracker:
    """Tracks model performance metrics"""
    
    def __init__(self):
        self.metrics = {
            'latency': {},
            'accuracy': {},
            'cost': {},
            'availability': {},
            'quality_scores': {}
        }
        self.request_history = []
    
    def record_request(self, model_name: str, response: AIResponse):
        """Record a model request for performance tracking"""
        self.metrics['latency'].setdefault(model_name, []).append(response.latency)
        self.metrics['cost'].setdefault(model_name, []).append(response.cost)
        self.metrics['quality_scores'].setdefault(model_name, []).append(response.quality_score)
        
        self.request_history.append({
            'model': model_name,
            'timestamp': response.timestamp,
            'latency': response.latency,
            'cost': response.cost,
            'quality': response.quality_score
        })
        
        # Keep only last 1000 requests
        if len(self.request_history) > 1000:
            self.request_history = self.request_history[-1000:]
    
    def get_model_performance(self, model_name: str) -> Dict[str, float]:
        """Get performance metrics for a specific model"""
        if model_name not in self.metrics['latency']:
            return {'avg_latency': 0, 'avg_cost': 0, 'avg_quality': 0, 'availability': 0}
        
        latencies = self.metrics['latency'][model_name]
        costs = self.metrics['cost'][model_name]
        qualities = self.metrics['quality_scores'][model_name]
        
        return {
            'avg_latency': sum(latencies) / len(latencies) if latencies else 0,
            'avg_cost': sum(costs) / len(costs) if costs else 0,
            'avg_quality': sum(qualities) / len(qualities) if qualities else 0,
            'availability': self.metrics['availability'].get(model_name, 1.0),
            'request_count': len(latencies)
        }

class TogetherAIClient:
    """Client for Together.ai models"""
    
    def __init__(self, api_key: str):
        self.client = Together(api_key=api_key)
        self.api_key = api_key
    
    async def chat_completion(self, model: str, messages: List[Dict], **kwargs) -> str:
        """Generate chat completion using Together.ai"""
        try:
            response = self.client.chat.completions.create(
                model=model,
                messages=messages,
                **kwargs
            )
            return response.choices[0].message.content
        except Exception as e:
            logger.error(f"Together.ai chat completion error: {e}")
            raise
    
    async def generate_embedding(self, model: str, text: str) -> List[float]:
        """Generate embeddings using Together.ai"""
        try:
            response = self.client.embeddings.create(
                model=model,
                input=text
            )
            return response.data[0].embedding
        except Exception as e:
            logger.error(f"Together.ai embedding error: {e}")
            raise

class OpenAIClient:
    """Client for OpenAI models"""
    
    def __init__(self, api_key: str):
        self.client = openai.AsyncOpenAI(api_key=api_key)
    
    async def chat_completion(self, model: str, messages: List[Dict], **kwargs) -> str:
        """Generate chat completion using OpenAI"""
        try:
            response = await self.client.chat.completions.create(
                model=model,
                messages=messages,
                **kwargs
            )
            return response.choices[0].message.content
        except Exception as e:
            logger.error(f"OpenAI chat completion error: {e}")
            raise
    
    async def generate_embedding(self, model: str, text: str) -> List[float]:
        """Generate embeddings using OpenAI"""
        try:
            response = await self.client.embeddings.create(
                model=model,
                input=text
            )
            return response.data[0].embedding
        except Exception as e:
            logger.error(f"OpenAI embedding error: {e}")
            raise

class GoogleAIClient:
    """Client for Google AI models"""
    
    def __init__(self, api_key: str):
        genai.configure(api_key=api_key)
        self.api_key = api_key
    
    async def chat_completion(self, model: str, messages: List[Dict], **kwargs) -> str:
        """Generate chat completion using Google AI"""
        try:
            model_instance = genai.GenerativeModel(model)
            
            # Convert messages to Google format
            prompt = ""
            for msg in messages:
                role = "Human" if msg["role"] == "user" else "Assistant"
                prompt += f"{role}: {msg['content']}\n"
            
            response = model_instance.generate_content(prompt)
            return response.text
        except Exception as e:
            logger.error(f"Google AI chat completion error: {e}")
            raise

class AIServiceManager:
    """Main AI service manager with intelligent routing and fallbacks"""
    
    def __init__(self, config: Dict[str, str]):
        self.config = config
        self.performance_tracker = ModelPerformanceTracker()
        
        # Initialize clients
        self.together_client = TogetherAIClient(config.get('TOGETHER_API_KEY'))
        self.openai_client = OpenAIClient(config.get('OPENAI_API_KEY'))
        self.google_client = GoogleAIClient(config.get('GOOGLE_API_KEY'))
        
        # Model registry with comprehensive configurations
        self.model_registry = self._initialize_model_registry()
        
        # Circuit breaker for failed models
        self.circuit_breakers = {}
        
        # Request cache
        self.response_cache = {}
        
    def _initialize_model_registry(self) -> Dict[TaskType, List[ModelConfig]]:
        """Initialize the comprehensive model registry"""
        return {
            TaskType.CHAT: [
                # Primary: OpenAI GPT-4o
                ModelConfig(
                    name="gpt-4o",
                    provider=ModelProvider.OPENAI,
                    tier=ModelTier.PRIMARY,
                    task_types=[TaskType.CHAT, TaskType.ANALYSIS],
                    max_tokens=128000,
                    cost_per_token=0.00003,
                    latency_target=2.0,
                    quality_score=0.95,
                    availability=0.99,
                    model_id="gpt-4o"
                ),
                # Secondary: DeepSeek-R1-0528
                ModelConfig(
                    name="deepseek-r1-0528",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.SECONDARY,
                    task_types=[TaskType.CHAT, TaskType.ANALYSIS],
                    max_tokens=23000,
                    cost_per_token=0.000014,
                    latency_target=3.0,
                    quality_score=0.90,
                    availability=0.98,
                    model_id="deepseek-ai/DeepSeek-R1-0528"
                ),
                # Tertiary: Qwen3 235B
                ModelConfig(
                    name="qwen3-235b",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.TERTIARY,
                    task_types=[TaskType.CHAT],
                    max_tokens=32000,
                    cost_per_token=0.000008,
                    latency_target=4.0,
                    quality_score=0.88,
                    availability=0.97,
                    model_id="Qwen/Qwen3-235B-A22B-FP8-Throughput"
                ),
                # Fallback: Llama 3.3 70B
                ModelConfig(
                    name="llama-3.3-70b",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.FALLBACK,
                    task_types=[TaskType.CHAT],
                    max_tokens=128000,
                    cost_per_token=0.000004,
                    latency_target=5.0,
                    quality_score=0.85,
                    availability=0.99,
                    model_id="meta-llama/Llama-3.3-70B-Instruct"
                )
            ],
            TaskType.EMBEDDING: [
                # Primary: UAE-Large v1
                ModelConfig(
                    name="uae-large-v1",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.PRIMARY,
                    task_types=[TaskType.EMBEDDING],
                    max_tokens=512,
                    cost_per_token=0.0000001,
                    latency_target=1.0,
                    quality_score=0.92,
                    availability=0.99,
                    model_id="WhereIsAI/UAE-Large-V1"
                ),
                # Secondary: BGE-Large-EN v1.5
                ModelConfig(
                    name="bge-large-en-v1.5",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.SECONDARY,
                    task_types=[TaskType.EMBEDDING],
                    max_tokens=512,
                    cost_per_token=0.0000001,
                    latency_target=1.2,
                    quality_score=0.90,
                    availability=0.98,
                    model_id="BAAI/bge-large-en-v1.5"
                ),
                # Fallback: OpenAI text-embedding-3-small
                ModelConfig(
                    name="text-embedding-3-small",
                    provider=ModelProvider.OPENAI,
                    tier=ModelTier.FALLBACK,
                    task_types=[TaskType.EMBEDDING],
                    max_tokens=8191,
                    cost_per_token=0.00000002,
                    latency_target=1.5,
                    quality_score=0.88,
                    availability=0.99,
                    model_id="text-embedding-3-small"
                )
            ],
            TaskType.VISION: [
                # Primary: Google Gemini Pro Vision
                ModelConfig(
                    name="gemini-pro-vision",
                    provider=ModelProvider.GOOGLE,
                    tier=ModelTier.PRIMARY,
                    task_types=[TaskType.VISION, TaskType.CHAT],
                    max_tokens=30720,
                    cost_per_token=0.000025,
                    latency_target=3.0,
                    quality_score=0.93,
                    availability=0.98,
                    model_id="gemini-pro-vision"
                ),
                # Secondary: Qwen2.5-VL 72B
                ModelConfig(
                    name="qwen2.5-vl-72b",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.SECONDARY,
                    task_types=[TaskType.VISION, TaskType.CHAT],
                    max_tokens=32000,
                    cost_per_token=0.000012,
                    latency_target=4.0,
                    quality_score=0.90,
                    availability=0.97,
                    model_id="Qwen/Qwen2.5-VL-72B-Instruct"
                ),
                # Fallback: Llama 3.2 90B Vision
                ModelConfig(
                    name="llama-3.2-90b-vision",
                    provider=ModelProvider.TOGETHER,
                    tier=ModelTier.FALLBACK,
                    task_types=[TaskType.VISION, TaskType.CHAT],
                    max_tokens=128000,
                    cost_per_token=0.000008,
                    latency_target=5.0,
                    quality_score=0.87,
                    availability=0.96,
                    model_id="meta-llama/Llama-3.2-90B-Vision-Instruct"
                )
            ]
        }
    
    def _select_model(self, request: AIRequest) -> ModelConfig:
        """Intelligent model selection based on request requirements"""
        available_models = self.model_registry.get(request.task_type, [])
        
        if not available_models:
            raise ValueError(f"No models available for task type: {request.task_type}")
        
        # Filter models based on requirements
        suitable_models = []
        for model in available_models:
            # Check if model is available (circuit breaker)
            if self._is_model_available(model.name):
                # Check budget constraints
                if request.budget_limit is None or model.cost_per_token <= request.budget_limit:
                    # Check quality requirements
                    if model.quality_score >= request.quality_requirement:
                        suitable_models.append(model)
        
        if not suitable_models:
            # Fallback to any available model
            suitable_models = [m for m in available_models if self._is_model_available(m.name)]
        
        if not suitable_models:
            raise RuntimeError("No suitable models available")
        
        # Sort by priority: tier, then quality, then cost
        suitable_models.sort(key=lambda m: (
            m.tier.value,
            -m.quality_score,
            m.cost_per_token
        ))
        
        return suitable_models[0]
    
    def _is_model_available(self, model_name: str) -> bool:
        """Check if model is available (circuit breaker logic)"""
        breaker = self.circuit_breakers.get(model_name)
        if breaker is None:
            return True
        
        # Simple circuit breaker: if more than 5 failures in last 5 minutes, mark as unavailable
        now = datetime.now()
        recent_failures = [f for f in breaker if now - f < timedelta(minutes=5)]
        
        if len(recent_failures) > 5:
            return False
        
        return True
    
    def _record_failure(self, model_name: str):
        """Record a model failure for circuit breaker"""
        if model_name not in self.circuit_breakers:
            self.circuit_breakers[model_name] = []
        
        self.circuit_breakers[model_name].append(datetime.now())
        
        # Keep only last 10 failures
        self.circuit_breakers[model_name] = self.circuit_breakers[model_name][-10:]
    
    async def _execute_request(self, model: ModelConfig, request: AIRequest) -> AIResponse:
        """Execute request with specific model"""
        start_time = time.time()
        request_id = f"{int(time.time())}_{hash(request.prompt) % 10000}"
        
        try:
            if request.task_type == TaskType.CHAT:
                content = await self._execute_chat_request(model, request)
            elif request.task_type == TaskType.EMBEDDING:
                content = await self._execute_embedding_request(model, request)
            elif request.task_type == TaskType.VISION:
                content = await self._execute_vision_request(model, request)
            else:
                raise ValueError(f"Unsupported task type: {request.task_type}")
            
            latency = time.time() - start_time
            cost = len(request.prompt.split()) * model.cost_per_token  # Rough estimation
            
            response = AIResponse(
                content=content,
                model_used=model.name,
                provider=model.provider,
                latency=latency,
                cost=cost,
                quality_score=model.quality_score,
                timestamp=datetime.now(),
                request_id=request_id
            )
            
            # Record performance
            self.performance_tracker.record_request(model.name, response)
            
            return response
            
        except Exception as e:
            self._record_failure(model.name)
            logger.error(f"Model {model.name} failed: {e}")
            raise
    
    async def _execute_chat_request(self, model: ModelConfig, request: AIRequest) -> str:
        """Execute chat request with specific model"""
        messages = [{"role": "user", "content": request.prompt}]
        
        if model.provider == ModelProvider.OPENAI:
            return await self.openai_client.chat_completion(
                model=model.model_id,
                messages=messages,
                max_tokens=request.max_tokens or 1000,
                temperature=request.temperature or 0.7
            )
        elif model.provider == ModelProvider.TOGETHER:
            return await self.together_client.chat_completion(
                model=model.model_id,
                messages=messages,
                max_tokens=request.max_tokens or 1000,
                temperature=request.temperature or 0.7
            )
        elif model.provider == ModelProvider.GOOGLE:
            return await self.google_client.chat_completion(
                model=model.model_id,
                messages=messages
            )
        else:
            raise ValueError(f"Unsupported provider for chat: {model.provider}")
    
    async def _execute_embedding_request(self, model: ModelConfig, request: AIRequest) -> str:
        """Execute embedding request with specific model"""
        if model.provider == ModelProvider.OPENAI:
            embedding = await self.openai_client.generate_embedding(
                model=model.model_id,
                text=request.prompt
            )
        elif model.provider == ModelProvider.TOGETHER:
            embedding = await self.together_client.generate_embedding(
                model=model.model_id,
                text=request.prompt
            )
        else:
            raise ValueError(f"Unsupported provider for embedding: {model.provider}")
        
        return json.dumps(embedding)
    
    async def _execute_vision_request(self, model: ModelConfig, request: AIRequest) -> str:
        """Execute vision request with specific model"""
        # For now, treat as chat request - would need image handling in production
        return await self._execute_chat_request(model, request)
    
    async def process_request(self, request: AIRequest) -> AIResponse:
        """Main entry point for processing AI requests with fallbacks"""
        # Check cache first
        cache_key = f"{request.task_type}_{hash(request.prompt)}"
        if cache_key in self.response_cache:
            cached_response = self.response_cache[cache_key]
            # Return cached response if less than 1 hour old
            if datetime.now() - cached_response.timestamp < timedelta(hours=1):
                logger.info(f"Returning cached response for request {cache_key}")
                return cached_response
        
        # Try models in order of preference
        available_models = self.model_registry.get(request.task_type, [])
        last_error = None
        
        for model in available_models:
            if not self._is_model_available(model.name):
                continue
            
            try:
                response = await self._execute_request(model, request)
                
                # Cache successful response
                self.response_cache[cache_key] = response
                
                # Clean old cache entries
                if len(self.response_cache) > 1000:
                    oldest_key = min(self.response_cache.keys(), 
                                   key=lambda k: self.response_cache[k].timestamp)
                    del self.response_cache[oldest_key]
                
                logger.info(f"Successfully processed request with model {model.name}")
                return response
                
            except Exception as e:
                last_error = e
                logger.warning(f"Model {model.name} failed, trying next: {e}")
                continue
        
        # If all models failed, raise the last error
        raise RuntimeError(f"All models failed. Last error: {last_error}")
    
    def get_performance_report(self) -> Dict[str, Any]:
        """Get comprehensive performance report"""
        report = {
            'models': {},
            'total_requests': len(self.performance_tracker.request_history),
            'cache_hit_rate': 0,  # Would need to track cache hits
            'average_latency': 0,
            'total_cost': 0
        }
        
        # Calculate overall metrics
        if self.performance_tracker.request_history:
            total_latency = sum(r['latency'] for r in self.performance_tracker.request_history)
            total_cost = sum(r['cost'] for r in self.performance_tracker.request_history)
            
            report['average_latency'] = total_latency / len(self.performance_tracker.request_history)
            report['total_cost'] = total_cost
        
        # Get per-model performance
        for task_type, models in self.model_registry.items():
            for model in models:
                perf = self.performance_tracker.get_model_performance(model.name)
                report['models'][model.name] = {
                    'provider': model.provider.value,
                    'tier': model.tier.value,
                    'task_types': [t.value for t in model.task_types],
                    'performance': perf,
                    'available': self._is_model_available(model.name)
                }
        
        return report

# Singleton instance
ai_service = None

def get_ai_service(config: Dict[str, str] = None) -> AIServiceManager:
    """Get or create AI service instance"""
    global ai_service
    if ai_service is None:
        if config is None:
            raise ValueError("Config required for first initialization")
        ai_service = AIServiceManager(config)
    return ai_service

# Convenience functions for common operations
async def chat_completion(prompt: str, user_id: str = None, **kwargs) -> str:
    """Simple chat completion function"""
    service = get_ai_service()
    request = AIRequest(
        task_type=TaskType.CHAT,
        prompt=prompt,
        user_id=user_id,
        **kwargs
    )
    response = await service.process_request(request)
    return response.content

async def generate_embedding(text: str, **kwargs) -> List[float]:
    """Simple embedding generation function"""
    service = get_ai_service()
    request = AIRequest(
        task_type=TaskType.EMBEDDING,
        prompt=text,
        **kwargs
    )
    response = await service.process_request(request)
    return json.loads(response.content)

async def analyze_image(prompt: str, image_data: str = None, **kwargs) -> str:
    """Simple vision analysis function"""
    service = get_ai_service()
    request = AIRequest(
        task_type=TaskType.VISION,
        prompt=prompt,
        context={'image_data': image_data} if image_data else None,
        **kwargs
    )
    response = await service.process_request(request)
    return response.content

