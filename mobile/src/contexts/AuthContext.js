import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { authAPI } from '../services/api';
import { navigationRef } from '../services/NavigationService';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  token: null,
  refreshToken: null,
  error: null,
  lastActivity: null,
  sessionExpiry: null,
};

// Action types
const AUTH_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  UPDATE_USER: 'UPDATE_USER',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  SET_TOKENS: 'SET_TOKENS',
  UPDATE_LAST_ACTIVITY: 'UPDATE_LAST_ACTIVITY',
  SESSION_EXPIRED: 'SESSION_EXPIRED',
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        isAuthenticated: true,
        isLoading: false,
        error: null,
        lastActivity: new Date().toISOString(),
        sessionExpiry: action.payload.sessionExpiry,
      };
    
    case AUTH_ACTIONS.LOGIN_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        refreshToken: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...initialState,
        isLoading: false,
      };
    
    case AUTH_ACTIONS.UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    
    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    
    case AUTH_ACTIONS.SET_TOKENS:
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        sessionExpiry: action.payload.sessionExpiry,
      };
    
    case AUTH_ACTIONS.UPDATE_LAST_ACTIVITY:
      return {
        ...state,
        lastActivity: new Date().toISOString(),
      };
    
    case AUTH_ACTIONS.SESSION_EXPIRED:
      return {
        ...initialState,
        isLoading: false,
        error: 'Session expired. Please log in again.',
      };
    
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Storage keys
const STORAGE_KEYS = {
  TOKEN: 'flourish_token',
  REFRESH_TOKEN: 'flourish_refresh_token',
  USER: 'flourish_user',
  LAST_ACTIVITY: 'flourish_last_activity',
  SESSION_EXPIRY: 'flourish_session_expiry',
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user data from storage on app start
  useEffect(() => {
    loadUserFromStorage();
  }, []);

  // Auto-logout timer
  useEffect(() => {
    let timer;
    if (state.isAuthenticated && state.sessionExpiry) {
      const timeUntilExpiry = new Date(state.sessionExpiry) - new Date();
      if (timeUntilExpiry > 0) {
        timer = setTimeout(() => {
          handleSessionExpiry();
        }, timeUntilExpiry);
      } else {
        handleSessionExpiry();
      }
    }
    return () => clearTimeout(timer);
  }, [state.sessionExpiry]);

  // Load user from storage
  const loadUserFromStorage = async () => {
    try {
      const [token, refreshToken, userData, lastActivity, sessionExpiry] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.TOKEN),
        AsyncStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN),
        AsyncStorage.getItem(STORAGE_KEYS.USER),
        AsyncStorage.getItem(STORAGE_KEYS.LAST_ACTIVITY),
        AsyncStorage.getItem(STORAGE_KEYS.SESSION_EXPIRY),
      ]);

      if (token && userData) {
        const user = JSON.parse(userData);
        
        // Check if session is expired
        if (sessionExpiry && new Date(sessionExpiry) < new Date()) {
          await clearStorage();
          dispatch({ type: AUTH_ACTIONS.SESSION_EXPIRED });
          return;
        }

        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: {
            user,
            token,
            refreshToken,
            sessionExpiry,
          },
        });

        // Try to refresh token if it's close to expiry
        if (refreshToken && sessionExpiry) {
          const timeUntilExpiry = new Date(sessionExpiry) - new Date();
          if (timeUntilExpiry < 24 * 60 * 60 * 1000) { // Less than 24 hours
            await refreshAccessToken();
          }
        }
      } else {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
      }
    } catch (error) {
      console.error('Error loading user from storage:', error);
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
    }
  };

  // Save user to storage
  const saveUserToStorage = async (user, token, refreshToken, sessionExpiry) => {
    try {
      await Promise.all([
        AsyncStorage.setItem(STORAGE_KEYS.TOKEN, token),
        AsyncStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken || ''),
        AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user)),
        AsyncStorage.setItem(STORAGE_KEYS.LAST_ACTIVITY, new Date().toISOString()),
        AsyncStorage.setItem(STORAGE_KEYS.SESSION_EXPIRY, sessionExpiry || ''),
      ]);
    } catch (error) {
      console.error('Error saving user to storage:', error);
    }
  };

  // Clear storage
  const clearStorage = async () => {
    try {
      await Promise.all(
        Object.values(STORAGE_KEYS).map(key => AsyncStorage.removeItem(key))
      );
    } catch (error) {
      console.error('Error clearing storage:', error);
    }
  };

  // Sign in
  const signIn = async (email, password, provider = null) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });

      let response;
      if (provider) {
        // Social login
        response = await authAPI.socialLogin(provider);
      } else {
        // Email/password login
        response = await authAPI.login(email, password);
      }

      if (response.success) {
        const { user, token, refreshToken, sessionExpiry } = response.data;
        
        await saveUserToStorage(user, token, refreshToken, sessionExpiry);
        
        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: { user, token, refreshToken, sessionExpiry },
        });

        // Navigate to main app
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });

        return { success: true };
      } else {
        dispatch({
          type: AUTH_ACTIONS.LOGIN_ERROR,
          payload: response.error || 'Login failed',
        });
        return { success: false, error: response.error };
      }
    } catch (error) {
      console.error('Sign in error:', error);
      dispatch({
        type: AUTH_ACTIONS.LOGIN_ERROR,
        payload: 'Network error. Please try again.',
      });
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Sign up
  const signUp = async (userData) => {
    try {
      dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
      dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });

      const response = await authAPI.register(userData);

      if (response.success) {
        const { user, token, refreshToken, sessionExpiry } = response.data;
        
        await saveUserToStorage(user, token, refreshToken, sessionExpiry);
        
        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: { user, token, refreshToken, sessionExpiry },
        });

        // Navigate to onboarding
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Onboarding' }],
        });

        return { success: true };
      } else {
        dispatch({
          type: AUTH_ACTIONS.LOGIN_ERROR,
          payload: response.error || 'Registration failed',
        });
        return { success: false, error: response.error };
      }
    } catch (error) {
      console.error('Sign up error:', error);
      dispatch({
        type: AUTH_ACTIONS.LOGIN_ERROR,
        payload: 'Network error. Please try again.',
      });
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      // Call API to invalidate token
      if (state.token) {
        await authAPI.logout(state.token);
      }
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // Always clear local state and storage
      await clearStorage();
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
      
      // Navigate to auth screen
      navigationRef.current?.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      });
    }
  };

  // Refresh token
  const refreshAccessToken = async () => {
    try {
      if (!state.refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await authAPI.refreshToken(state.refreshToken);

      if (response.success) {
        const { token, refreshToken, sessionExpiry } = response.data;
        
        await saveUserToStorage(state.user, token, refreshToken, sessionExpiry);
        
        dispatch({
          type: AUTH_ACTIONS.SET_TOKENS,
          payload: { token, refreshToken, sessionExpiry },
        });

        return { success: true };
      } else {
        throw new Error(response.error || 'Token refresh failed');
      }
    } catch (error) {
      console.error('Token refresh error:', error);
      await handleSessionExpiry();
      return { success: false, error: error.message };
    }
  };

  // Handle session expiry
  const handleSessionExpiry = async () => {
    await clearStorage();
    dispatch({ type: AUTH_ACTIONS.SESSION_EXPIRED });
    
    Alert.alert(
      'Session Expired',
      'Your session has expired. Please log in again.',
      [{ text: 'OK', onPress: () => {
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        });
      }}]
    );
  };

  // Update user profile
  const updateUser = async (userData) => {
    try {
      const response = await authAPI.updateProfile(userData, state.token);

      if (response.success) {
        const updatedUser = { ...state.user, ...response.data };
        await saveUserToStorage(updatedUser, state.token, state.refreshToken, state.sessionExpiry);
        
        dispatch({
          type: AUTH_ACTIONS.UPDATE_USER,
          payload: response.data,
        });

        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      console.error('Update user error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Update last activity
  const updateLastActivity = () => {
    dispatch({ type: AUTH_ACTIONS.UPDATE_LAST_ACTIVITY });
  };

  // Forgot password
  const forgotPassword = async (email) => {
    try {
      const response = await authAPI.forgotPassword(email);
      return response;
    } catch (error) {
      console.error('Forgot password error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Reset password
  const resetPassword = async (token, newPassword) => {
    try {
      const response = await authAPI.resetPassword(token, newPassword);
      return response;
    } catch (error) {
      console.error('Reset password error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    try {
      const response = await authAPI.changePassword(currentPassword, newPassword, state.token);
      return response;
    } catch (error) {
      console.error('Change password error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Delete account
  const deleteAccount = async () => {
    try {
      const response = await authAPI.deleteAccount(state.token);

      if (response.success) {
        await clearStorage();
        dispatch({ type: AUTH_ACTIONS.LOGOUT });
        
        navigationRef.current?.reset({
          index: 0,
          routes: [{ name: 'Auth' }],
        });
      }

      return response;
    } catch (error) {
      console.error('Delete account error:', error);
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  };

  const value = {
    // State
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    isLoading: state.isLoading,
    token: state.token,
    error: state.error,
    lastActivity: state.lastActivity,
    
    // Actions
    signIn,
    signUp,
    signOut,
    updateUser,
    updateLastActivity,
    forgotPassword,
    resetPassword,
    changePassword,
    deleteAccount,
    refreshAccessToken,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };