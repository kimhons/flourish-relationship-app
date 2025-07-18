"""
Flourish AI Service Orchestrator
Central coordination system for all AI agents
"""

import asyncio
import logging
from typing import Dict, Any, List, Optional
from datetime import datetime
from dataclasses import dataclass, asdict
from enum import Enum
import json
import os

logger = logging.getLogger(__name__)

class AgentType(Enum):
    DR_LOVE_COACH = "dr_love_coach"
    MATCHING_ENGINE = "matching_engine"
    RELATIONSHIP_ADVISOR = "relationship_advisor"
    CRISIS_DETECTOR = "crisis_detector"
    CONTENT_CURATOR = "content_curator"

class Priority(Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"
    URGENT = "urgent"

@dataclass
class AIRequest:
    request_id: str
    user_id: str
    agent_type: AgentType
    priority: Priority
    data: Dict[str, Any]
    context: Optional[Dict[str, Any]] = None
    timestamp: datetime = None
    
    def __post_init__(self):
        if self.timestamp is None:
            self.timestamp = datetime.utcnow()

@dataclass
class AIResponse:
    request_id: str
    agent_type: AgentType
    success: bool
    data: Dict[str, Any]
    processing_time: float
    confidence_score: float
    model_used: str
    cost: float = 0.0
    error: Optional[str] = None
    timestamp: datetime = None
    
    def __post_init__(self):
        if self.timestamp is None:
            self.timestamp = datetime.utcnow()

class AIServiceOrchestrator:
    """
    Central orchestrator for all AI services in the Flourish platform
    """
    
    def __init__(self):
        self.agents = {}
        self.request_queue = asyncio.Queue()
        self.response_handlers = {}
        self.active_requests = {}
        self.metrics = {
            'total_requests': 0,
            'successful_requests': 0,
            'failed_requests': 0,
            'average_response_time': 0.0,
            'agent_usage': {}
        }
        
    async def initialize(self):
        """Initialize all AI agents"""
        try:
            # Initialize Dr. Love Coach
            from .dr_love_coach import DrLoveCoach
            self.agents[AgentType.DR_LOVE_COACH] = DrLoveCoach()
            
            # Initialize Matching Engine
            from .matching_engine import MatchingEngine
            self.agents[AgentType.MATCHING_ENGINE] = MatchingEngine()
            
            # Initialize Relationship Advisor
            from .relationship_advisor import RelationshipAdvisor
            self.agents[AgentType.RELATIONSHIP_ADVISOR] = RelationshipAdvisor()
            
            # Initialize Crisis Detector
            from .crisis_detector import CrisisDetector
            self.agents[AgentType.CRISIS_DETECTOR] = CrisisDetector()
            
            # Initialize Content Curator
            from .content_curator import ContentCurator
            self.agents[AgentType.CONTENT_CURATOR] = ContentCurator()
            
            # Initialize all agents
            for agent in self.agents.values():
                await agent.initialize()
                
            logger.info("All AI agents initialized successfully")
            
        except Exception as e:
            logger.error(f"Failed to initialize AI agents: {e}")
            raise
    
    async def process_request(self, request: AIRequest) -> AIResponse:
        """Process an AI request through the appropriate agent"""
        start_time = asyncio.get_event_loop().time()
        
        try:
            # Validate request
            if request.agent_type not in self.agents:
                raise ValueError(f"Unknown agent type: {request.agent_type}")
            
            # Get the appropriate agent
            agent = self.agents[request.agent_type]
            
            # Process request
            self.active_requests[request.request_id] = request
            
            # Execute agent processing
            result = await agent.process(request.data, request.context)
            
            # Create response
            processing_time = asyncio.get_event_loop().time() - start_time
            
            response = AIResponse(
                request_id=request.request_id,
                agent_type=request.agent_type,
                success=True,
                data=result,
                processing_time=processing_time,
                confidence_score=result.get('confidence_score', 0.8),
                model_used=result.get('model_used', 'unknown'),
                cost=result.get('cost', 0.0)
            )
            
            # Update metrics
            self._update_metrics(request.agent_type, processing_time, True)
            
            return response
            
        except Exception as e:
            processing_time = asyncio.get_event_loop().time() - start_time
            
            response = AIResponse(
                request_id=request.request_id,
                agent_type=request.agent_type,
                success=False,
                data={},
                processing_time=processing_time,
                confidence_score=0.0,
                model_used='error',
                error=str(e)
            )
            
            # Update metrics
            self._update_metrics(request.agent_type, processing_time, False)
            
            logger.error(f"Request {request.request_id} failed: {e}")
            return response
            
        finally:
            # Clean up
            if request.request_id in self.active_requests:
                del self.active_requests[request.request_id]
    
    async def get_coaching_advice(self, user_id: str, message: str, context: Dict[str, Any] = None) -> Dict[str, Any]:
        """Get coaching advice from Dr. Love"""
        request = AIRequest(
            request_id=f"coaching_{user_id}_{datetime.utcnow().timestamp()}",
            user_id=user_id,
            agent_type=AgentType.DR_LOVE_COACH,
            priority=Priority.NORMAL,
            data={'message': message, 'user_id': user_id},
            context=context
        )
        
        response = await self.process_request(request)
        return response.data if response.success else {'error': response.error}
    
    async def find_matches(self, user_id: str, preferences: Dict[str, Any]) -> Dict[str, Any]:
        """Find potential matches for a user"""
        request = AIRequest(
            request_id=f"matching_{user_id}_{datetime.utcnow().timestamp()}",
            user_id=user_id,
            agent_type=AgentType.MATCHING_ENGINE,
            priority=Priority.HIGH,
            data={'user_id': user_id, 'preferences': preferences}
        )
        
        response = await self.process_request(request)
        return response.data if response.success else {'error': response.error}
    
    async def analyze_relationship(self, user_id: str, relationship_data: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze relationship dynamics"""
        request = AIRequest(
            request_id=f"analysis_{user_id}_{datetime.utcnow().timestamp()}",
            user_id=user_id,
            agent_type=AgentType.RELATIONSHIP_ADVISOR,
            priority=Priority.NORMAL,
            data={'user_id': user_id, 'relationship_data': relationship_data}
        )
        
        response = await self.process_request(request)
        return response.data if response.success else {'error': response.error}
    
    async def detect_crisis(self, user_id: str, message: str) -> Dict[str, Any]:
        """Detect potential crisis situations"""
        request = AIRequest(
            request_id=f"crisis_{user_id}_{datetime.utcnow().timestamp()}",
            user_id=user_id,
            agent_type=AgentType.CRISIS_DETECTOR,
            priority=Priority.URGENT,
            data={'user_id': user_id, 'message': message}
        )
        
        response = await self.process_request(request)
        return response.data if response.success else {'error': response.error}
    
    async def curate_content(self, user_id: str, interests: List[str]) -> Dict[str, Any]:
        """Curate personalized content"""
        request = AIRequest(
            request_id=f"content_{user_id}_{datetime.utcnow().timestamp()}",
            user_id=user_id,
            agent_type=AgentType.CONTENT_CURATOR,
            priority=Priority.LOW,
            data={'user_id': user_id, 'interests': interests}
        )
        
        response = await self.process_request(request)
        return response.data if response.success else {'error': response.error}
    
    def _update_metrics(self, agent_type: AgentType, processing_time: float, success: bool):
        """Update service metrics"""
        self.metrics['total_requests'] += 1
        
        if success:
            self.metrics['successful_requests'] += 1
        else:
            self.metrics['failed_requests'] += 1
        
        # Update average response time
        total_time = self.metrics['average_response_time'] * (self.metrics['total_requests'] - 1)
        self.metrics['average_response_time'] = (total_time + processing_time) / self.metrics['total_requests']
        
        # Update agent usage
        agent_key = agent_type.value
        if agent_key not in self.metrics['agent_usage']:
            self.metrics['agent_usage'][agent_key] = 0
        self.metrics['agent_usage'][agent_key] += 1
    
    def get_metrics(self) -> Dict[str, Any]:
        """Get service metrics"""
        return {
            **self.metrics,
            'active_requests': len(self.active_requests),
            'agents_initialized': len(self.agents)
        }
    
    async def health_check(self) -> Dict[str, Any]:
        """Perform health check on all agents"""
        health_status = {
            'orchestrator': 'healthy',
            'agents': {},
            'timestamp': datetime.utcnow().isoformat()
        }
        
        for agent_type, agent in self.agents.items():
            try:
                if hasattr(agent, 'health_check'):
                    status = await agent.health_check()
                else:
                    status = 'healthy'
                health_status['agents'][agent_type.value] = status
            except Exception as e:
                health_status['agents'][agent_type.value] = f'error: {str(e)}'
        
        return health_status

# Global orchestrator instance
orchestrator = AIServiceOrchestrator()