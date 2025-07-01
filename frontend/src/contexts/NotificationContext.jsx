import React, { createContext, useContext, useState, useCallback } from 'react'

const NotificationContext = createContext({})

export const useNotification = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const addNotification = useCallback((notification) => {
    const id = Date.now() + Math.random()
    const newNotification = {
      id,
      type: 'info',
      duration: 5000,
      ...notification,
      timestamp: new Date()
    }

    setNotifications(prev => [...prev, newNotification])

    // Auto-remove notification after duration
    if (newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }

    return id
  }, [])

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id))
  }, [])

  const clearAllNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  // Convenience methods for different notification types
  const showSuccess = useCallback((message, options = {}) => {
    return addNotification({
      type: 'success',
      title: 'Success',
      message,
      ...options
    })
  }, [addNotification])

  const showError = useCallback((message, options = {}) => {
    return addNotification({
      type: 'error',
      title: 'Error',
      message,
      duration: 8000, // Longer duration for errors
      ...options
    })
  }, [addNotification])

  const showWarning = useCallback((message, options = {}) => {
    return addNotification({
      type: 'warning',
      title: 'Warning',
      message,
      ...options
    })
  }, [addNotification])

  const showInfo = useCallback((message, options = {}) => {
    return addNotification({
      type: 'info',
      title: 'Info',
      message,
      ...options
    })
  }, [addNotification])

  const showLoading = useCallback((message, options = {}) => {
    return addNotification({
      type: 'loading',
      title: 'Loading',
      message,
      duration: 0, // Don't auto-remove loading notifications
      ...options
    })
  }, [addNotification])

  // Coaching-specific notifications
  const showCoachingInsight = useCallback((insight, options = {}) => {
    return addNotification({
      type: 'coaching',
      title: 'Dr. Love Insight',
      message: insight,
      duration: 10000, // Longer duration for insights
      ...options
    })
  }, [addNotification])

  const showMatchNotification = useCallback((match, options = {}) => {
    return addNotification({
      type: 'match',
      title: 'New Match! 💕',
      message: `You have a new match with ${match.name}`,
      duration: 8000,
      ...options
    })
  }, [addNotification])

  const showMessageNotification = useCallback((message, options = {}) => {
    return addNotification({
      type: 'message',
      title: 'New Message',
      message: `${message.senderName}: ${message.preview}`,
      duration: 6000,
      ...options
    })
  }, [addNotification])

  // Premium/subscription notifications
  const showSubscriptionNotification = useCallback((type, options = {}) => {
    const messages = {
      upgraded: 'Welcome to Flourish Premium! 🎉',
      expired: 'Your premium subscription has expired',
      trial_ending: 'Your free trial ends in 3 days',
      payment_failed: 'Payment failed. Please update your payment method'
    }

    return addNotification({
      type: type === 'upgraded' ? 'success' : 'warning',
      title: 'Subscription Update',
      message: messages[type] || 'Subscription status changed',
      duration: 8000,
      ...options
    })
  }, [addNotification])

  const value = {
    notifications,
    addNotification,
    removeNotification,
    clearAllNotifications,
    
    // Convenience methods
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showLoading,
    
    // App-specific notifications
    showCoachingInsight,
    showMatchNotification,
    showMessageNotification,
    showSubscriptionNotification
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

