/**
 * AI Coaching Routes - Anthropic Integration
 * Provides endpoints for AI-powered relationship coaching
 */

const express = require('express');
const router = express.Router();
const AnthropicAIService = require('../services/anthropic-ai');
const auth = require('../middleware/auth');
const rateLimit = require('express-rate-limit');

// Initialize AI service
const aiService = new AnthropicAIService();

// Rate limiting for AI endpoints
const aiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // Limit each IP to 20 requests per windowMs
  message: 'Too many AI requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * POST /api/ai-coaching/advice
 * Get relationship advice from Dr. Love AI
 */
router.post('/advice', auth, aiRateLimit, async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;
    const userProfile = req.user; // Assuming user info is attached by auth middleware

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'Message is required and must be a string'
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: 'Message is too long (max 1000 characters)'
      });
    }

    const advice = await aiService.getRelationshipAdvice(
      message, 
      conversationHistory, 
      userProfile
    );

    res.json({
      advice,
      timestamp: new Date().toISOString(),
      conversationId: req.body.conversationId || null
    });

  } catch (error) {
    console.error('AI advice error:', error);
    res.status(500).json({
      error: 'Failed to get AI advice',
      message: error.message
    });
  }
});

/**
 * POST /api/ai-coaching/compatibility
 * Analyze compatibility between two users
 */
router.post('/compatibility', auth, aiRateLimit, async (req, res) => {
  try {
    const { matchUserId } = req.body;
    const currentUser = req.user;

    if (!matchUserId) {
      return res.status(400).json({
        error: 'Match user ID is required'
      });
    }

    // In a real app, you'd fetch the match user's profile from the database
    // For now, we'll use the provided profile or mock data
    const matchUserProfile = req.body.matchProfile || {
      age: 28,
      interests: ['reading', 'hiking'],
      values: ['honesty', 'adventure'],
      relationshipGoals: 'long-term',
      communicationStyle: 'direct'
    };

    const compatibility = await aiService.analyzeCompatibility(
      currentUser, 
      matchUserProfile
    );

    res.json({
      compatibility,
      users: {
        current: currentUser.id,
        match: matchUserId
      },
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Compatibility analysis error:', error);
    res.status(500).json({
      error: 'Failed to analyze compatibility',
      message: error.message
    });
  }
});

/**
 * POST /api/ai-coaching/conversation-starters
 * Generate personalized conversation starters
 */
router.post('/conversation-starters', auth, aiRateLimit, async (req, res) => {
  try {
    const { matchUserId } = req.body;
    const currentUser = req.user;

    if (!matchUserId) {
      return res.status(400).json({
        error: 'Match user ID is required'
      });
    }

    // In a real app, fetch match profile from database
    const matchUserProfile = req.body.matchProfile || {
      interests: ['photography', 'travel'],
      bio: 'Love exploring new places and capturing moments'
    };

    const starters = await aiService.generateConversationStarters(
      currentUser, 
      matchUserProfile
    );

    res.json({
      conversationStarters: starters,
      matchUserId,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Conversation starters error:', error);
    res.status(500).json({
      error: 'Failed to generate conversation starters',
      message: error.message
    });
  }
});

/**
 * POST /api/ai-coaching/date-suggestions
 * Get AI-powered date suggestions
 */
router.post('/date-suggestions', auth, aiRateLimit, async (req, res) => {
  try {
    const { preferences = {}, location = '' } = req.body;

    // Validate preferences
    const validBudgets = ['low', 'moderate', 'high'];
    const validActivityTypes = ['indoor', 'outdoor', 'cultural', 'active', 'relaxed'];
    
    if (preferences.budget && !validBudgets.includes(preferences.budget.toLowerCase())) {
      return res.status(400).json({
        error: 'Invalid budget preference',
        validOptions: validBudgets
      });
    }

    if (preferences.activityType && !validActivityTypes.includes(preferences.activityType.toLowerCase())) {
      return res.status(400).json({
        error: 'Invalid activity type preference',
        validOptions: validActivityTypes
      });
    }

    const dateSuggestions = await aiService.suggestDates(preferences, location);

    res.json({
      dateSuggestions,
      preferences,
      location,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Date suggestions error:', error);
    res.status(500).json({
      error: 'Failed to generate date suggestions',
      message: error.message
    });
  }
});

/**
 * GET /api/ai-coaching/status
 * Check AI service status
 */
router.get('/status', async (req, res) => {
  try {
    const status = {
      service: 'Anthropic AI',
      model: 'claude-3-sonnet-20240229',
      available: !!process.env.ANTHROPIC_API_KEY,
      features: [
        'Relationship advice',
        'Compatibility analysis',
        'Conversation starters',
        'Date suggestions'
      ],
      rateLimit: {
        window: '15 minutes',
        maxRequests: 20
      },
      timestamp: new Date().toISOString()
    };

    res.json(status);
  } catch (error) {
    console.error('AI status error:', error);
    res.status(500).json({
      error: 'Failed to get AI service status'
    });
  }
});

/**
 * POST /api/ai-coaching/feedback
 * Submit feedback about AI responses
 */
router.post('/feedback', auth, async (req, res) => {
  try {
    const { responseId, rating, feedback, helpful } = req.body;

    if (!responseId || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return res.status(400).json({
        error: 'Valid response ID and rating (1-5) are required'
      });
    }

    // In a real app, save feedback to database for AI improvement
    const feedbackRecord = {
      userId: req.user.id,
      responseId,
      rating,
      feedback: feedback || '',
      helpful: helpful || null,
      timestamp: new Date().toISOString()
    };

    // TODO: Save to database
    console.log('AI Feedback received:', feedbackRecord);

    res.json({
      message: 'Feedback received successfully',
      feedbackId: `feedback_${Date.now()}`
    });

  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({
      error: 'Failed to submit feedback'
    });
  }
});

module.exports = router;