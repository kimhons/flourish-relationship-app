/**
 * AI Coaching Service - Frontend Integration
 * Connects to the Anthropic AI backend for relationship coaching
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class AICoachingService {
  constructor() {
    this.baseURL = `${API_BASE_URL}/ai-coaching`;
  }

  /**
   * Get auth headers with JWT token
   */
  getAuthHeaders() {
    const token = localStorage.getItem('authToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    };
  }

  /**
   * Get relationship advice from Dr. Love AI
   * @param {string} message - User's question or concern
   * @param {Array} conversationHistory - Previous messages
   * @param {string} conversationId - Optional conversation ID
   * @returns {Promise<Object>} AI response
   */
  async getAdvice(message, conversationHistory = [], conversationId = null) {
    try {
      const response = await fetch(`${this.baseURL}/advice`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          message,
          conversationHistory,
          conversationId
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get AI advice');
      }

      return await response.json();
    } catch (error) {
      console.error('AI advice error:', error);
      throw error;
    }
  }

  /**
   * Analyze compatibility with a match
   * @param {string} matchUserId - Match's user ID
   * @param {Object} matchProfile - Match's profile (optional)
   * @returns {Promise<Object>} Compatibility analysis
   */
  async analyzeCompatibility(matchUserId, matchProfile = null) {
    try {
      const body = { matchUserId };
      if (matchProfile) {
        body.matchProfile = matchProfile;
      }

      const response = await fetch(`${this.baseURL}/compatibility`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to analyze compatibility');
      }

      return await response.json();
    } catch (error) {
      console.error('Compatibility analysis error:', error);
      throw error;
    }
  }

  /**
   * Generate conversation starters for a match
   * @param {string} matchUserId - Match's user ID
   * @param {Object} matchProfile - Match's profile (optional)
   * @returns {Promise<Array>} Conversation starters
   */
  async getConversationStarters(matchUserId, matchProfile = null) {
    try {
      const body = { matchUserId };
      if (matchProfile) {
        body.matchProfile = matchProfile;
      }

      const response = await fetch(`${this.baseURL}/conversation-starters`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to generate conversation starters');
      }

      const data = await response.json();
      return data.conversationStarters || [];
    } catch (error) {
      console.error('Conversation starters error:', error);
      throw error;
    }
  }

  /**
   * Get AI-powered date suggestions
   * @param {Object} preferences - Date preferences
   * @param {string} location - User's location
   * @returns {Promise<Array>} Date suggestions
   */
  async getDateSuggestions(preferences = {}, location = '') {
    try {
      const response = await fetch(`${this.baseURL}/date-suggestions`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          preferences,
          location
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to get date suggestions');
      }

      const data = await response.json();
      return data.dateSuggestions || [];
    } catch (error) {
      console.error('Date suggestions error:', error);
      throw error;
    }
  }

  /**
   * Submit feedback about AI responses
   * @param {string} responseId - Response ID
   * @param {number} rating - Rating (1-5)
   * @param {string} feedback - Optional feedback text
   * @param {boolean} helpful - Whether the response was helpful
   * @returns {Promise<Object>} Feedback confirmation
   */
  async submitFeedback(responseId, rating, feedback = '', helpful = null) {
    try {
      const response = await fetch(`${this.baseURL}/feedback`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({
          responseId,
          rating,
          feedback,
          helpful
        })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to submit feedback');
      }

      return await response.json();
    } catch (error) {
      console.error('Feedback submission error:', error);
      throw error;
    }
  }

  /**
   * Check AI service status
   * @returns {Promise<Object>} Service status
   */
  async getStatus() {
    try {
      const response = await fetch(`${this.baseURL}/status`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Failed to get AI service status');
      }

      return await response.json();
    } catch (error) {
      console.error('AI status error:', error);
      throw error;
    }
  }
}

// Create a singleton instance
const aiCoachingService = new AICoachingService();

export default aiCoachingService;