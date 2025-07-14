import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

// API Configuration
const API_CONFIG = {
  baseURL: __DEV__ ? 'http://localhost:5000/api' : 'https://api.flourish-app.com/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create axios instance
const apiClient = axios.create(API_CONFIG);

// Request interceptor - Add auth token
apiClient.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('flourish_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = await AsyncStorage.getItem('flourish_refresh_token');
        if (refreshToken) {
          const response = await axios.post(`${API_CONFIG.baseURL}/auth/refresh`, {
            refreshToken,
          });

          if (response.data.success) {
            const { token } = response.data.data;
            await AsyncStorage.setItem('flourish_token', token);
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          }
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
      }

      // Clear storage and redirect to login
      await AsyncStorage.multiRemove([
        'flourish_token',
        'flourish_refresh_token',
        'flourish_user',
      ]);
      
      // You might want to navigate to login here
      Alert.alert('Session Expired', 'Please log in again');
    }

    return Promise.reject(error);
  }
);

// Helper function to handle API responses
const handleResponse = (response) => {
  if (response.data.success) {
    return response.data;
  }
  throw new Error(response.data.message || 'API request failed');
};

// Helper function to handle API errors
const handleError = (error) => {
  console.error('API Error:', error);
  
  if (error.response) {
    // Server responded with error status
    return {
      success: false,
      error: error.response.data.message || 'Server error',
      status: error.response.status,
    };
  } else if (error.request) {
    // Request made but no response
    return {
      success: false,
      error: 'Network error. Please check your connection.',
    };
  } else {
    // Something else happened
    return {
      success: false,
      error: error.message || 'An unexpected error occurred',
    };
  }
};

// Authentication API
export const authAPI = {
  // Login
  login: async (email, password) => {
    try {
      const response = await apiClient.post('/auth/login', {
        email,
        password,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Register
  register: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Social login
  socialLogin: async (provider) => {
    try {
      const response = await apiClient.post('/auth/social', {
        provider,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Logout
  logout: async (token) => {
    try {
      const response = await apiClient.post('/auth/logout', {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Refresh token
  refreshToken: async (refreshToken) => {
    try {
      const response = await apiClient.post('/auth/refresh', {
        refreshToken,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Forgot password
  forgotPassword: async (email) => {
    try {
      const response = await apiClient.post('/auth/forgot-password', {
        email,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Reset password
  resetPassword: async (token, newPassword) => {
    try {
      const response = await apiClient.post('/auth/reset-password', {
        token,
        newPassword,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Change password
  changePassword: async (currentPassword, newPassword, token) => {
    try {
      const response = await apiClient.post('/auth/change-password', {
        currentPassword,
        newPassword,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Update profile
  updateProfile: async (userData, token) => {
    try {
      const response = await apiClient.put('/auth/profile', userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Delete account
  deleteAccount: async (token) => {
    try {
      const response = await apiClient.delete('/auth/account', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Verify email
  verifyEmail: async (token) => {
    try {
      const response = await apiClient.post('/auth/verify-email', {
        token,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// User API
export const userAPI = {
  // Get user profile
  getProfile: async (userId) => {
    try {
      const response = await apiClient.get(`/users/${userId}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Update user profile
  updateProfile: async (userData) => {
    try {
      const response = await apiClient.put('/users/profile', userData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Upload profile picture
  uploadProfilePicture: async (imageData) => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.fileName || 'profile.jpg',
      });

      const response = await apiClient.post('/users/profile-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get user preferences
  getPreferences: async () => {
    try {
      const response = await apiClient.get('/users/preferences');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Update user preferences
  updatePreferences: async (preferences) => {
    try {
      const response = await apiClient.put('/users/preferences', preferences);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Block user
  blockUser: async (userId) => {
    try {
      const response = await apiClient.post(`/users/${userId}/block`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Unblock user
  unblockUser: async (userId) => {
    try {
      const response = await apiClient.post(`/users/${userId}/unblock`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Report user
  reportUser: async (userId, reason, description) => {
    try {
      const response = await apiClient.post(`/users/${userId}/report`, {
        reason,
        description,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// Matching API
export const matchingAPI = {
  // Get potential matches
  getMatches: async (filters = {}) => {
    try {
      const response = await apiClient.get('/matches', {
        params: filters,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Like a user
  likeUser: async (userId) => {
    try {
      const response = await apiClient.post(`/matches/${userId}/like`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Pass on a user
  passUser: async (userId) => {
    try {
      const response = await apiClient.post(`/matches/${userId}/pass`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Super like a user
  superLikeUser: async (userId) => {
    try {
      const response = await apiClient.post(`/matches/${userId}/super-like`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get mutual matches
  getMutualMatches: async () => {
    try {
      const response = await apiClient.get('/matches/mutual');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Unmatch
  unmatch: async (matchId) => {
    try {
      const response = await apiClient.delete(`/matches/${matchId}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// Messaging API
export const messagingAPI = {
  // Get conversations
  getConversations: async () => {
    try {
      const response = await apiClient.get('/messages/conversations');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get messages for a conversation
  getMessages: async (conversationId, page = 1) => {
    try {
      const response = await apiClient.get(`/messages/conversations/${conversationId}`, {
        params: { page },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Send message
  sendMessage: async (conversationId, content, type = 'text') => {
    try {
      const response = await apiClient.post(`/messages/conversations/${conversationId}/messages`, {
        content,
        type,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Mark message as read
  markAsRead: async (conversationId, messageId) => {
    try {
      const response = await apiClient.put(`/messages/conversations/${conversationId}/messages/${messageId}/read`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Delete message
  deleteMessage: async (conversationId, messageId) => {
    try {
      const response = await apiClient.delete(`/messages/conversations/${conversationId}/messages/${messageId}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Upload media
  uploadMedia: async (conversationId, mediaData) => {
    try {
      const formData = new FormData();
      formData.append('media', {
        uri: mediaData.uri,
        type: mediaData.type,
        name: mediaData.fileName || 'media.jpg',
      });

      const response = await apiClient.post(`/messages/conversations/${conversationId}/media`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// AI Coaching API
export const coachingAPI = {
  // Start coaching session
  startSession: async (sessionData) => {
    try {
      const response = await apiClient.post('/coaching/sessions', sessionData);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get coaching sessions
  getSessions: async () => {
    try {
      const response = await apiClient.get('/coaching/sessions');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get session details
  getSession: async (sessionId) => {
    try {
      const response = await apiClient.get(`/coaching/sessions/${sessionId}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Send message to AI coach
  sendMessage: async (sessionId, message) => {
    try {
      const response = await apiClient.post(`/coaching/sessions/${sessionId}/messages`, {
        message,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get AI insights
  getInsights: async (userId) => {
    try {
      const response = await apiClient.get(`/coaching/insights/${userId}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Rate coaching session
  rateSession: async (sessionId, rating, feedback) => {
    try {
      const response = await apiClient.post(`/coaching/sessions/${sessionId}/rate`, {
        rating,
        feedback,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// Subscription API
export const subscriptionAPI = {
  // Get subscription plans
  getPlans: async () => {
    try {
      const response = await apiClient.get('/subscriptions/plans');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Subscribe to plan
  subscribe: async (planId, paymentMethodId) => {
    try {
      const response = await apiClient.post('/subscriptions/subscribe', {
        planId,
        paymentMethodId,
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Cancel subscription
  cancelSubscription: async (subscriptionId) => {
    try {
      const response = await apiClient.post(`/subscriptions/${subscriptionId}/cancel`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get subscription status
  getStatus: async () => {
    try {
      const response = await apiClient.get('/subscriptions/status');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// Analytics API
export const analyticsAPI = {
  // Track event
  trackEvent: async (eventName, properties = {}) => {
    try {
      const response = await apiClient.post('/analytics/events', {
        eventName,
        properties,
        timestamp: new Date().toISOString(),
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get user analytics
  getUserAnalytics: async () => {
    try {
      const response = await apiClient.get('/analytics/user');
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// Content API
export const contentAPI = {
  // Get articles
  getArticles: async (category, page = 1) => {
    try {
      const response = await apiClient.get('/content/articles', {
        params: { category, page },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get article by ID
  getArticle: async (articleId) => {
    try {
      const response = await apiClient.get(`/content/articles/${articleId}`);
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get podcasts
  getPodcasts: async (category, page = 1) => {
    try {
      const response = await apiClient.get('/content/podcasts', {
        params: { category, page },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },

  // Get meditations
  getMeditations: async (category, page = 1) => {
    try {
      const response = await apiClient.get('/content/meditations', {
        params: { category, page },
      });
      return handleResponse(response);
    } catch (error) {
      return handleError(error);
    }
  },
};

// Export the API client for custom requests
export { apiClient };

// Export default API object
export default {
  auth: authAPI,
  user: userAPI,
  matching: matchingAPI,
  messaging: messagingAPI,
  coaching: coachingAPI,
  subscription: subscriptionAPI,
  analytics: analyticsAPI,
  content: contentAPI,
};