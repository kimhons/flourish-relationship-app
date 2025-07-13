"""
Comprehensive Test Suite for Advanced AI Manager
Tests all components of the Mixture of Experts architecture and prompt engineering
"""

import pytest
import asyncio
import json
import time
from unittest.mock import Mock, AsyncMock, patch
from datetime import datetime, timedelta

# Import the AI system components
import sys
import os
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from services.advanced_ai_manager import (
    AdvancedAIManager, AIRequest, AIResponse, ExpertType, PromptTemplate,
    AdvancedPromptEngine, MixtureOfExpertsRouter, HybridLLMCoordinator,
    ModelCapability, create_advanced_ai_manager
)

class TestAdvancedPromptEngine:
    """Test suite for the Advanced Prompt Engine"""
    
    @pytest.fixture
    def prompt_engine(self):
        return AdvancedPromptEngine()
    
    def test_prompt_templates_initialization(self, prompt_engine):
        """Test that all prompt templates are properly initialized"""
        templates = prompt_engine.prompt_templates
        
        # Verify all expected templates exist
        expected_templates = [
            PromptTemplate.CHAIN_OF_THOUGHT,
            PromptTemplate.FEW_SHOT_LEARNING,
            PromptTemplate.STRUCTURED_OUTPUT,
            PromptTemplate.ROLE_PLAYING,
            PromptTemplate.SOCRATIC_QUESTIONING,
            PromptTemplate.EMOTIONAL_INTELLIGENCE,
            PromptTemplate.CRISIS_INTERVENTION,
            PromptTemplate.MULTI_PERSPECTIVE
        ]
        
        for template in expected_templates:
            assert template in templates
            assert len(templates[template]) > 100  # Ensure templates have substantial content
    
    def test_few_shot_examples_initialization(self, prompt_engine):
        """Test that few-shot examples are properly loaded"""
        examples = prompt_engine.few_shot_examples
        
        # Verify examples exist for key expert types
        key_experts = [
            ExpertType.RELATIONSHIP_COUNSELOR,
            ExpertType.DATING_COACH,
            ExpertType.CRISIS_INTERVENTIONIST
        ]
        
        for expert in key_experts:
            assert expert in examples
            assert len(examples[expert]) >= 1
            
            # Verify example structure
            for example in examples[expert]:
                assert "user_input" in example
                assert "expert_response" in example
                assert len(example["user_input"]) > 0
                assert len(example["expert_response"]) > 0
    
    def test_chain_of_thought_generation(self, prompt_engine):
        """Test Chain of Thought prompt generation"""
        expert_type = ExpertType.RELATIONSHIP_COUNSELOR
        user_input = "I'm struggling with communication in my relationship"
        context = {"emotional_state": "anxious", "session_history": []}
        
        prompt = prompt_engine.generate_prompt(
            template=PromptTemplate.CHAIN_OF_THOUGHT,
            expert_type=expert_type,
            user_input=user_input,
            context=context
        )
        
        # Verify prompt structure
        assert "step by step" in prompt.lower()
        assert "situation analysis" in prompt.lower()
        assert "emotional assessment" in prompt.lower()
        assert user_input in prompt
        assert expert_type.value.replace("_", " ").title() in prompt
    
    def test_crisis_intervention_prompt(self, prompt_engine):
        """Test crisis intervention prompt generation"""
        expert_type = ExpertType.CRISIS_INTERVENTIONIST
        user_input = "I'm feeling hopeless and don't know what to do"
        context = {
            "risk_level": "high",
            "crisis_type": "emotional distress",
            "safety_concerns": "immediate support needed"
        }
        
        prompt = prompt_engine.generate_prompt(
            template=PromptTemplate.CRISIS_INTERVENTION,
            expert_type=expert_type,
            user_input=user_input,
            context=context
        )
        
        # Verify crisis-specific elements
        assert "CRISIS INTERVENTION PROTOCOL" in prompt
        assert "immediate safety" in prompt.lower()
        assert "professional help" in prompt.lower()
        assert context["risk_level"] in prompt
        assert context["crisis_type"] in prompt

class TestMixtureOfExpertsRouter:
    """Test suite for the Mixture of Experts Router"""
    
    @pytest.fixture
    def moe_router(self):
        return MixtureOfExpertsRouter()
    
    def test_expert_initialization(self, moe_router):
        """Test that all experts are properly initialized"""
        experts = moe_router.experts
        
        # Verify all expected experts exist
        expected_experts = [
            ExpertType.RELATIONSHIP_COUNSELOR,
            ExpertType.DATING_COACH,
            ExpertType.CRISIS_INTERVENTIONIST,
            ExpertType.PERSONALITY_ANALYST,
            ExpertType.MATCHING_SPECIALIST
        ]
        
        for expert_type in expected_experts:
            assert expert_type in experts
            
            expert_config = experts[expert_type]
            assert len(expert_config.models) > 0
            assert len(expert_config.specializations) > 0
            assert 0.0 <= expert_config.confidence_threshold <= 1.0
            assert 0.0 <= expert_config.quality_weight <= 1.0
    
    def test_crisis_detection(self, moe_router):
        """Test crisis detection functionality"""
        # Test positive crisis detection
        crisis_messages = [
            "I want to kill myself",
            "I can't go on anymore, I'm hopeless",
            "I'm being abused and feel unsafe"
        ]
        
        for message in crisis_messages:
            assert moe_router._detect_crisis(message) == True
        
        # Test negative crisis detection
        normal_messages = [
            "I'm having trouble communicating with my partner",
            "I need dating advice",
            "I want to improve my relationship"
        ]
        
        for message in normal_messages:
            assert moe_router._detect_crisis(message) == False
    
    def test_expert_routing_logic(self, moe_router):
        """Test that expert routing works correctly"""
        # Test dating coach routing
        dating_request = AIRequest(
            task_type="coaching",
            content="I need help with online dating confidence",
            user_id="test_user",
            context={}
        )
        
        expert = moe_router.route_request(dating_request)
        assert expert == ExpertType.DATING_COACH
        
        # Test relationship counselor routing
        relationship_request = AIRequest(
            task_type="coaching",
            content="My partner and I keep having communication problems",
            user_id="test_user",
            context={}
        )
        
        expert = moe_router.route_request(relationship_request)
        assert expert == ExpertType.RELATIONSHIP_COUNSELOR
        
        # Test crisis intervention routing
        crisis_request = AIRequest(
            task_type="coaching",
            content="I feel hopeless and want to hurt myself",
            user_id="test_user",
            context={}
        )
        
        expert = moe_router.route_request(crisis_request)
        assert expert == ExpertType.CRISIS_INTERVENTIONIST
    
    def test_performance_tracking(self, moe_router):
        """Test performance metrics tracking"""
        expert_type = ExpertType.RELATIONSHIP_COUNSELOR
        
        # Update performance metrics
        moe_router.update_performance(
            expert_type=expert_type,
            quality_score=0.9,
            processing_time=2.5,
            user_satisfaction=0.8
        )
        
        # Verify metrics are tracked
        metrics = moe_router.performance_metrics[expert_type]
        assert metrics["avg_quality"] > 0
        assert metrics["avg_processing_time"] > 0
        assert metrics["avg_satisfaction"] > 0
        assert metrics["total_requests"] == 1

class TestHybridLLMCoordinator:
    """Test suite for the Hybrid LLM Coordinator"""
    
    @pytest.fixture
    def coordinator(self):
        # Mock configuration for testing
        config = {
            "openai_api_key": "test_key",
            "together_api_key": "test_key",
            "google_api_key": "test_key"
        }
        return HybridLLMCoordinator(config)
    
    def test_provider_initialization(self, coordinator):
        """Test that providers are properly initialized"""
        providers = coordinator.providers
        
        # Should have providers based on available API keys
        assert len(providers) > 0
        
        # Each provider should have required attributes
        for provider_name, provider_config in providers.items():
            assert "models" in provider_config
            assert "strengths" in provider_config
            assert "cost_per_token" in provider_config
            assert "max_tokens" in provider_config
            assert len(provider_config["models"]) > 0
    
    def test_provider_selection_logic(self, coordinator):
        """Test intelligent provider selection"""
        # Test premium budget request
        premium_request = AIRequest(
            task_type="coaching",
            content="Test message",
            user_id="test_user",
            budget_tier="premium",
            quality_requirement=0.9
        )
        
        provider = coordinator._select_optimal_provider(
            premium_request, 
            ExpertType.RELATIONSHIP_COUNSELOR
        )
        
        # Should select a high-quality provider for premium requests
        assert provider in coordinator.providers
        
        # Test economy budget request
        economy_request = AIRequest(
            task_type="coaching",
            content="Test message",
            user_id="test_user",
            budget_tier="economy",
            quality_requirement=0.6
        )
        
        provider = coordinator._select_optimal_provider(
            economy_request, 
            ExpertType.DATING_COACH
        )
        
        assert provider in coordinator.providers
    
    def test_failover_sequence(self, coordinator):
        """Test failover sequence generation"""
        primary_provider = "openai"
        sequence = coordinator._get_failover_sequence(primary_provider)
        
        # Primary should be first
        assert sequence[0] == primary_provider
        
        # Should include other providers
        assert len(sequence) > 1
        
        # No duplicates
        assert len(sequence) == len(set(sequence))
    
    @pytest.mark.asyncio
    async def test_quality_score_calculation(self, coordinator):
        """Test quality score calculation"""
        request = AIRequest(
            task_type="coaching",
            content="I need help with communication",
            user_id="test_user",
            require_structured_output=False
        )
        
        # Test good response
        good_response = "I understand you're struggling with communication. This is a common challenge that many couples face. Here are some specific strategies you can try: practice active listening, use 'I' statements, and schedule regular check-ins."
        
        quality_score = coordinator._calculate_quality_score(good_response, request)
        assert 0.0 <= quality_score <= 1.0
        assert quality_score > 0.5  # Should be reasonably high for good response
        
        # Test structured response when required
        request.require_structured_output = True
        structured_response = '{"advice": "communication tips", "action_items": ["listen", "speak"]}'
        
        structured_score = coordinator._calculate_quality_score(structured_response, request)
        assert structured_score >= quality_score  # Should be higher due to structure bonus

class TestAdvancedAIManager:
    """Integration tests for the complete AI Manager system"""
    
    @pytest.fixture
    async def ai_manager(self):
        config = {
            "openai_api_key": "test_key",
            "together_api_key": "test_key", 
            "google_api_key": "test_key"
        }
        return AdvancedAIManager(config)
    
    def test_ai_manager_initialization(self, ai_manager):
        """Test that AI manager initializes all components"""
        assert ai_manager.prompt_engine is not None
        assert ai_manager.moe_router is not None
        assert ai_manager.llm_coordinator is not None
        assert ai_manager.request_history is not None
        assert ai_manager.performance_analytics is not None
    
    def test_prompt_template_selection(self, ai_manager):
        """Test intelligent prompt template selection"""
        # Test crisis situation
        crisis_request = AIRequest(
            task_type="coaching",
            content="I want to hurt myself",
            user_id="test_user",
            priority="urgent"
        )
        
        template = ai_manager._select_prompt_template(
            ExpertType.CRISIS_INTERVENTIONIST, 
            crisis_request
        )
        assert template == PromptTemplate.CRISIS_INTERVENTION
        
        # Test structured output requirement
        structured_request = AIRequest(
            task_type="analysis",
            content="Analyze my personality",
            user_id="test_user",
            require_structured_output=True
        )
        
        template = ai_manager._select_prompt_template(
            ExpertType.PERSONALITY_ANALYST,
            structured_request
        )
        assert template == PromptTemplate.STRUCTURED_OUTPUT
        
        # Test high quality requirement
        quality_request = AIRequest(
            task_type="coaching",
            content="Help me with my relationship",
            user_id="test_user",
            quality_requirement=0.9
        )
        
        template = ai_manager._select_prompt_template(
            ExpertType.RELATIONSHIP_COUNSELOR,
            quality_request
        )
        assert template == PromptTemplate.CHAIN_OF_THOUGHT
    
    @pytest.mark.asyncio
    async def test_request_processing_pipeline(self, ai_manager):
        """Test the complete request processing pipeline"""
        with patch.object(ai_manager.llm_coordinator, 'execute_request') as mock_execute:
            # Mock successful AI response
            mock_execute.return_value = AIResponse(
                content="Thank you for sharing. I understand you're looking for help with communication...",
                expert_used=ExpertType.RELATIONSHIP_COUNSELOR,
                model_used="gpt-4",
                confidence_score=0.9,
                quality_score=0.85,
                processing_time=2.1,
                cost=0.005,
                expert_reasoning="Selected relationship counselor expert for communication issues"
            )
            
            request = AIRequest(
                task_type="coaching",
                content="I need help communicating better with my partner",
                user_id="test_user_123",
                priority="high",
                quality_requirement=0.8
            )
            
            response = await ai_manager.process_request(request)
            
            # Verify response structure
            assert response.content is not None
            assert response.expert_used == ExpertType.RELATIONSHIP_COUNSELOR
            assert response.model_used is not None
            assert 0.0 <= response.confidence_score <= 1.0
            assert 0.0 <= response.quality_score <= 1.0
            assert response.processing_time > 0
            assert response.cost >= 0
            
            # Verify request was recorded
            assert "test_user_123" in ai_manager.request_history
            assert len(ai_manager.request_history["test_user_123"]) == 1
    
    @pytest.mark.asyncio
    async def test_analytics_generation(self, ai_manager):
        """Test analytics generation"""
        # Add some mock request history
        mock_response = AIResponse(
            content="Test response",
            expert_used=ExpertType.DATING_COACH,
            model_used="gpt-4", 
            confidence_score=0.8,
            quality_score=0.9,
            processing_time=1.5,
            cost=0.003,
            expert_reasoning="Test reasoning"
        )
        
        ai_manager.request_history["test_user"] = [{
            "request": AIRequest("coaching", "test", "test_user"),
            "response": mock_response,
            "expert_used": ExpertType.DATING_COACH,
            "prompt_template": PromptTemplate.FEW_SHOT_LEARNING,
            "timestamp": datetime.now()
        }]
        
        # Update performance metrics
        ai_manager.moe_router.update_performance(
            ExpertType.DATING_COACH, 0.9, 1.5, 0.8
        )
        
        analytics = await ai_manager.get_analytics("test_user")
        
        # Verify analytics structure
        assert "system_health" in analytics
        assert "quality_metrics" in analytics
        assert "user_analytics" in analytics
        
        # Verify system health metrics
        system_health = analytics["system_health"]
        assert "total_requests" in system_health
        assert "expert_usage" in system_health
        assert "provider_health" in system_health
        
        # Verify user analytics
        user_analytics = analytics["user_analytics"]
        assert "total_requests" in user_analytics
        assert "preferred_experts" in user_analytics
        assert "avg_satisfaction" in user_analytics

class TestPerformanceAndLoad:
    """Performance and load testing for the AI system"""
    
    @pytest.mark.asyncio
    async def test_concurrent_request_handling(self):
        """Test handling multiple concurrent requests"""
        config = {
            "openai_api_key": "test_key",
            "together_api_key": "test_key"
        }
        ai_manager = AdvancedAIManager(config)
        
        # Mock the LLM coordinator to avoid actual API calls
        with patch.object(ai_manager.llm_coordinator, 'execute_request') as mock_execute:
            mock_execute.return_value = AIResponse(
                content="Mock response",
                expert_used=ExpertType.RELATIONSHIP_COUNSELOR,
                model_used="mock-model",
                confidence_score=0.8,
                quality_score=0.85,
                processing_time=1.0,
                cost=0.001,
                expert_reasoning="Mock reasoning"
            )
            
            # Create multiple concurrent requests
            requests = [
                AIRequest(
                    task_type="coaching",
                    content=f"Test request {i}",
                    user_id=f"user_{i}",
                    priority="normal"
                )
                for i in range(10)
            ]
            
            # Process requests concurrently
            start_time = time.time()
            responses = await asyncio.gather(
                *[ai_manager.process_request(req) for req in requests]
            )
            end_time = time.time()
            
            # Verify all requests were processed
            assert len(responses) == 10
            for response in responses:
                assert response.content is not None
                assert response.expert_used is not None
            
            # Verify reasonable processing time (should be concurrent, not sequential)
            total_time = end_time - start_time
            assert total_time < 5.0  # Should be much faster than sequential processing
    
    def test_memory_efficiency(self):
        """Test memory usage with large number of requests"""
        ai_manager = AdvancedAIManager({})
        
        # Add many mock requests to history
        for i in range(1000):
            user_id = f"user_{i % 100}"  # 100 different users
            mock_response = AIResponse(
                content=f"Response {i}",
                expert_used=ExpertType.RELATIONSHIP_COUNSELOR,
                model_used="test-model",
                confidence_score=0.8,
                quality_score=0.85,
                processing_time=1.0,
                cost=0.001,
                expert_reasoning="Test reasoning"
            )
            
            if user_id not in ai_manager.request_history:
                ai_manager.request_history[user_id] = []
            
            ai_manager.request_history[user_id].append({
                "request": AIRequest("coaching", f"test {i}", user_id),
                "response": mock_response,
                "expert_used": ExpertType.RELATIONSHIP_COUNSELOR,
                "prompt_template": PromptTemplate.CHAIN_OF_THOUGHT,
                "timestamp": datetime.now()
            })
        
        # Verify system can handle analytics with large dataset
        avg_quality = ai_manager._calculate_avg_quality()
        avg_time = ai_manager._calculate_avg_processing_time()
        
        assert 0.0 <= avg_quality <= 1.0
        assert avg_time > 0
    
    def test_expert_routing_performance(self):
        """Test performance of expert routing with many requests"""
        moe_router = MixtureOfExpertsRouter()
        
        # Test routing performance with various request types
        request_templates = [
            "I need dating advice",
            "My relationship has communication problems", 
            "I'm feeling suicidal and hopeless",
            "Help me understand my personality",
            "I want to find my soulmate"
        ]
        
        start_time = time.time()
        
        for _ in range(1000):
            for template in request_templates:
                request = AIRequest(
                    task_type="coaching",
                    content=template,
                    user_id="perf_test_user"
                )
                expert = moe_router.route_request(request)
                assert expert is not None
        
        end_time = time.time()
        routing_time = end_time - start_time
        
        # Routing should be very fast (less than 1 second for 5000 routes)
        assert routing_time < 1.0
        print(f"Routed 5000 requests in {routing_time:.3f} seconds")

class TestErrorHandlingAndResilience:
    """Test error handling and system resilience"""
    
    @pytest.mark.asyncio
    async def test_provider_failure_handling(self):
        """Test handling of provider failures"""
        config = {"openai_api_key": "test_key"}
        coordinator = HybridLLMCoordinator(config)
        
        request = AIRequest(
            task_type="coaching",
            content="Test message",
            user_id="test_user"
        )
        
        expert_type = ExpertType.RELATIONSHIP_COUNSELOR
        
        # Mock all providers to fail
        with patch.object(coordinator, '_execute_with_provider') as mock_execute:
            mock_execute.side_effect = Exception("Provider unavailable")
            
            response = await coordinator.execute_request(request, expert_type, "test prompt")
            
            # Should return fallback response rather than crashing
            assert response is not None
            assert "technical difficulties" in response.content.lower()
            assert response.expert_used == expert_type
            assert response.model_used == "fallback"
    
    def test_invalid_request_handling(self):
        """Test handling of invalid requests"""
        moe_router = MixtureOfExpertsRouter()
        
        # Test with empty content
        empty_request = AIRequest(
            task_type="coaching",
            content="",
            user_id="test_user"
        )
        
        # Should not crash and should return a valid expert
        expert = moe_router.route_request(empty_request)
        assert expert is not None
        
        # Test with None values
        none_request = AIRequest(
            task_type="coaching", 
            content="test",
            user_id="test_user",
            context=None
        )
        
        expert = moe_router.route_request(none_request)
        assert expert is not None

# Pytest configuration and fixtures
@pytest.fixture(scope="session")
def event_loop():
    """Create an instance of the default event loop for the test session."""
    loop = asyncio.get_event_loop_policy().new_event_loop()
    yield loop
    loop.close()

if __name__ == "__main__":
    # Run tests with verbose output
    pytest.main([__file__, "-v", "--tb=short"])