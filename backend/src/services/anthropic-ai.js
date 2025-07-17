/**
 * Anthropic AI Service for Flourish App
 * Provides AI coaching and relationship advice using Claude
 */

const Anthropic = require('@anthropic-ai/sdk');

class AnthropicAIService {
  constructor() {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable is required');
    }

    this.anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    this.systemPrompt = `You are Dr. Love, an AI relationship coach for the Flourish app. You provide:

1. Personalized relationship advice
2. Communication tips and strategies
3. Conflict resolution guidance
4. Dating and romance suggestions
5. Emotional support and empathy

Your responses should be:
- Warm and empathetic
- Professional yet friendly
- Actionable and practical
- Respectful of all relationship types
- Focused on healthy relationship dynamics

Always encourage healthy communication, mutual respect, and personal growth.`;
  }

  /**
   * Get relationship advice from Dr. Love AI
   * @param {string} userMessage - User's question or concern
   * @param {Array} conversationHistory - Previous conversation messages
   * @param {Object} userProfile - User's profile information
   * @returns {Promise<string>} AI response
   */
  async getRelationshipAdvice(userMessage, conversationHistory = [], userProfile = {}) {
    try {
      // Prepare conversation context
      const messages = [
        {
          role: 'user',
          content: this.buildContextualPrompt(userMessage, userProfile)
        }
      ];

      // Add conversation history
      if (conversationHistory.length > 0) {
        const historyMessages = conversationHistory.slice(-10).map(msg => ({
          role: msg.role,
          content: msg.content
        }));
        messages.unshift(...historyMessages);
      }

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        temperature: 0.7,
        system: this.systemPrompt,
        messages: messages
      });

      return response.content[0].text;
    } catch (error) {
      console.error('Anthropic AI error:', error);
      throw new Error('Failed to get AI response');
    }
  }

  /**
   * Analyze relationship compatibility
   * @param {Object} user1Profile - First user's profile
   * @param {Object} user2Profile - Second user's profile
   * @returns {Promise<Object>} Compatibility analysis
   */
  async analyzeCompatibility(user1Profile, user2Profile) {
    try {
      const prompt = `Analyze the relationship compatibility between these two people:

Person 1:
- Age: ${user1Profile.age}
- Interests: ${user1Profile.interests?.join(', ') || 'Not specified'}
- Values: ${user1Profile.values?.join(', ') || 'Not specified'}
- Relationship goals: ${user1Profile.relationshipGoals || 'Not specified'}
- Communication style: ${user1Profile.communicationStyle || 'Not specified'}

Person 2:
- Age: ${user2Profile.age}
- Interests: ${user2Profile.interests?.join(', ') || 'Not specified'}
- Values: ${user2Profile.values?.join(', ') || 'Not specified'}
- Relationship goals: ${user2Profile.relationshipGoals || 'Not specified'}
- Communication style: ${user2Profile.communicationStyle || 'Not specified'}

Provide a compatibility analysis with:
1. Overall compatibility score (1-100)
2. Strengths in the relationship
3. Potential challenges
4. Recommendations for success

Format your response as JSON with these fields: score, strengths, challenges, recommendations.`;

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 800,
        temperature: 0.5,
        system: this.systemPrompt,
        messages: [{ role: 'user', content: prompt }]
      });

      return this.parseCompatibilityResponse(response.content[0].text);
    } catch (error) {
      console.error('Compatibility analysis error:', error);
      throw new Error('Failed to analyze compatibility');
    }
  }

  /**
   * Generate conversation starters
   * @param {Object} userProfile - User's profile
   * @param {Object} matchProfile - Match's profile
   * @returns {Promise<Array>} Array of conversation starters
   */
  async generateConversationStarters(userProfile, matchProfile) {
    try {
      const prompt = `Generate 5 personalized conversation starters for someone to message their match:

Your profile:
- Interests: ${userProfile.interests?.join(', ') || 'Not specified'}
- Bio: ${userProfile.bio || 'Not specified'}

Match's profile:
- Interests: ${matchProfile.interests?.join(', ') || 'Not specified'}
- Bio: ${matchProfile.bio || 'Not specified'}

Create engaging, personalized conversation starters that:
1. Reference shared interests or values
2. Are open-ended questions
3. Show genuine interest
4. Are appropriate for a first message
5. Avoid generic pickup lines

Return as a JSON array of strings.`;

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 500,
        temperature: 0.8,
        system: this.systemPrompt,
        messages: [{ role: 'user', content: prompt }]
      });

      return this.parseConversationStarters(response.content[0].text);
    } catch (error) {
      console.error('Conversation starters error:', error);
      throw new Error('Failed to generate conversation starters');
    }
  }

  /**
   * Provide date suggestions
   * @param {Object} preferences - Date preferences
   * @param {string} location - User's location
   * @returns {Promise<Array>} Array of date ideas
   */
  async suggestDates(preferences = {}, location = '') {
    try {
      const prompt = `Suggest 5 creative and thoughtful first date ideas based on these preferences:

Location: ${location || 'General suggestions'}
Budget: ${preferences.budget || 'Moderate'}
Activity type: ${preferences.activityType || 'Any'}
Time of day: ${preferences.timeOfDay || 'Any'}
Season: ${preferences.season || 'Current season'}
Interests: ${preferences.interests?.join(', ') || 'Various'}

Provide diverse date ideas that:
1. Are appropriate for a first date
2. Allow for conversation
3. Are accessible and safe
4. Consider the budget
5. Match the preferences

Return as a JSON array of objects with: title, description, cost, duration, tips.`;

      const response = await this.anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 700,
        temperature: 0.7,
        system: this.systemPrompt,
        messages: [{ role: 'user', content: prompt }]
      });

      return this.parseDateSuggestions(response.content[0].text);
    } catch (error) {
      console.error('Date suggestions error:', error);
      throw new Error('Failed to generate date suggestions');
    }
  }

  /**
   * Build contextual prompt with user information
   */
  buildContextualPrompt(userMessage, userProfile) {
    let context = '';
    
    if (userProfile.name) {
      context += `User's name: ${userProfile.name}\n`;
    }
    
    if (userProfile.relationshipStatus) {
      context += `Relationship status: ${userProfile.relationshipStatus}\n`;
    }
    
    if (userProfile.age) {
      context += `Age: ${userProfile.age}\n`;
    }

    context += `\nUser's message: ${userMessage}`;
    
    return context;
  }

  /**
   * Parse compatibility analysis response
   */
  parseCompatibilityResponse(response) {
    try {
      // Try to extract JSON from the response
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // Fallback: parse manually
      return {
        score: 75,
        strengths: ['Good communication potential'],
        challenges: ['Different life stages'],
        recommendations: ['Focus on open communication']
      };
    } catch (error) {
      console.error('Failed to parse compatibility response:', error);
      return {
        score: 75,
        strengths: ['Unique connection potential'],
        challenges: ['Individual differences'],
        recommendations: ['Take time to understand each other']
      };
    }
  }

  /**
   * Parse conversation starters response
   */
  parseConversationStarters(response) {
    try {
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // Fallback: extract from text
      const lines = response.split('\n').filter(line => 
        line.trim() && (line.includes('?') || line.includes('How') || line.includes('What'))
      );
      
      return lines.slice(0, 5);
    } catch (error) {
      console.error('Failed to parse conversation starters:', error);
      return [
        "I noticed you're interested in [shared interest]. What got you into that?",
        "Your profile mentions [something from bio]. I'd love to hear more about that!",
        "We seem to have [shared value/interest] in common. How important is that to you?",
        "What's been the highlight of your week so far?",
        "I'm curious about your thoughts on [relevant topic from their profile]."
      ];
    }
  }

  /**
   * Parse date suggestions response
   */
  parseDateSuggestions(response) {
    try {
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      
      // Fallback suggestions
      return [
        {
          title: "Coffee & Conversation",
          description: "Meet at a cozy local coffee shop for relaxed conversation.",
          cost: "Low",
          duration: "1-2 hours",
          tips: "Choose a quieter spot where you can easily talk."
        },
        {
          title: "Local Art Gallery",
          description: "Explore art together and discuss your thoughts and interpretations.",
          cost: "Low-Medium",
          duration: "2-3 hours",
          tips: "Great conversation starter with built-in talking points."
        }
      ];
    } catch (error) {
      console.error('Failed to parse date suggestions:', error);
      return [];
    }
  }
}

module.exports = AnthropicAIService;