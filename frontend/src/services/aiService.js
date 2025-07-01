/**
 * Flourish App: AI Service Integration
 * Frontend service for interacting with AI backend endpoints
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

class AIService {
  constructor() {
    this.baseURL = `${API_BASE_URL}/api/ai`;
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  // Set authentication token
  setAuthToken(token) {
    if (token) {
      this.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete this.headers['Authorization'];
    }
  }

  // Generic API request method
  async makeRequest(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: this.headers,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`AI Service Error (${endpoint}):`, error);
      throw error;
    }
  }

  // AI Health Check
  async checkHealth() {
    return this.makeRequest('/health');
  }

  // Dr. Love AI Coach Services
  async startCoachingSession(coachingMode = 'general', sessionType = 'text_chat') {
    return this.makeRequest('/coaching/start', {
      method: 'POST',
      body: JSON.stringify({
        coaching_mode: coachingMode,
        session_type: sessionType,
      }),
    });
  }

  async sendCoachingMessage(sessionId, message, context = {}) {
    return this.makeRequest('/coaching/message', {
      method: 'POST',
      body: JSON.stringify({
        session_id: sessionId,
        message: message,
        context: context,
      }),
    });
  }

  async endCoachingSession(sessionId, satisfactionRating = null) {
    return this.makeRequest('/coaching/end', {
      method: 'POST',
      body: JSON.stringify({
        session_id: sessionId,
        satisfaction_rating: satisfactionRating,
      }),
    });
  }

  async getCoachingAnalytics(days = 30) {
    return this.makeRequest(`/coaching/analytics?days=${days}`);
  }

  // AI Matching Services
  async calculateCompatibility(targetUserId) {
    return this.makeRequest('/matching/compatibility', {
      method: 'POST',
      body: JSON.stringify({
        target_user_id: targetUserId,
      }),
    });
  }

  async findMatches(maxMatches = 10, filters = {}) {
    return this.makeRequest('/matching/find-matches', {
      method: 'POST',
      body: JSON.stringify({
        max_matches: maxMatches,
        filters: filters,
      }),
    });
  }

  async getMatchingAnalytics(days = 30) {
    return this.makeRequest(`/matching/analytics?days=${days}`);
  }

  // Content Generation Services
  async generateContent(contentType, topic, prompt = '') {
    return this.makeRequest('/content/generate', {
      method: 'POST',
      body: JSON.stringify({
        content_type: contentType,
        topic: topic,
        prompt: prompt,
      }),
    });
  }

  // Voice Processing Services
  async processVoice(audioData, sessionId = null) {
    return this.makeRequest('/voice/process', {
      method: 'POST',
      body: JSON.stringify({
        audio_data: audioData,
        session_id: sessionId,
      }),
    });
  }

  // Safety and Moderation Services
  async checkContentSafety(content, context = {}) {
    return this.makeRequest('/safety/check', {
      method: 'POST',
      body: JSON.stringify({
        content: content,
        context: context,
      }),
    });
  }

  // Analytics Services
  async getRelationshipAnalytics(days = 30) {
    return this.makeRequest(`/analytics/relationship?days=${days}`);
  }

  async getModelPerformance() {
    return this.makeRequest('/models/performance');
  }
}

// Coaching Mode Constants
export const COACHING_MODES = {
  GENERAL: 'general',
  DATING: 'dating',
  RELATIONSHIP: 'relationship',
  MARRIAGE: 'marriage',
  BREAKUP: 'breakup',
  CRISIS: 'crisis',
};

// Session Type Constants
export const SESSION_TYPES = {
  TEXT_CHAT: 'text_chat',
  VOICE_CHAT: 'voice_chat',
  VIDEO_CHAT: 'video_chat',
  QUICK_ADVICE: 'quick_advice',
  DEEP_SESSION: 'deep_session',
};

// Content Type Constants
export const CONTENT_TYPES = {
  ARTICLE: 'article',
  EXERCISE: 'exercise',
  MEDITATION: 'meditation',
  AFFIRMATION: 'affirmation',
  CONVERSATION_STARTER: 'conversation_starter',
};

// Create singleton instance
const aiService = new AIService();

export default aiService;

// Hook for React components
export const useAIService = () => {
  return aiService;
};

// Error handling utilities
export const handleAIError = (error, fallbackMessage = 'An AI service error occurred') => {
  console.error('AI Service Error:', error);
  
  // Check for specific error types
  if (error.message?.includes('API key')) {
    return 'AI services are currently unavailable. Please try again later.';
  }
  
  if (error.message?.includes('rate limit')) {
    return 'Too many requests. Please wait a moment and try again.';
  }
  
  if (error.message?.includes('network')) {
    return 'Network error. Please check your connection and try again.';
  }
  
  return error.message || fallbackMessage;
};

// Utility functions for AI responses
export const formatAIResponse = (response) => {
  if (!response || !response.data) {
    return null;
  }
  
  return {
    success: response.status === 'success',
    data: response.data,
    timestamp: new Date().toISOString(),
  };
};

export const extractCoachingInsights = (coachingResponse) => {
  if (!coachingResponse?.data) return null;
  
  return {
    message: coachingResponse.data.response || '',
    insights: coachingResponse.data.insights || [],
    recommendations: coachingResponse.data.recommendations || [],
    mood: coachingResponse.data.mood_assessment || null,
    nextSteps: coachingResponse.data.next_steps || [],
  };
};

export const extractCompatibilityData = (compatibilityResponse) => {
  if (!compatibilityResponse?.data) return null;
  
  return {
    overallScore: compatibilityResponse.data.overall_score || 0,
    dimensionScores: compatibilityResponse.data.dimension_scores || {},
    strengths: compatibilityResponse.data.strengths || [],
    challenges: compatibilityResponse.data.challenges || [],
    conversationStarters: compatibilityResponse.data.conversation_starters || [],
    relationshipPotential: compatibilityResponse.data.relationship_potential || 'unknown',
    confidenceLevel: compatibilityResponse.data.confidence_level || 0,
  };
};

