import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('flourish_token')
        const storedUser = localStorage.getItem('flourish_user')
        
        if (storedToken && storedUser) {
          setToken(storedToken)
          setUser(JSON.parse(storedUser))
          setIsAuthenticated(true)
          
          // Validate token with backend
          await validateToken(storedToken)
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        logout()
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  const validateToken = async (token) => {
    try {
      const response = await fetch('/api/auth/validate', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Token validation failed')
      }

      const userData = await response.json()
      setUser(userData.user)
      return userData
    } catch (error) {
      console.error('Token validation error:', error)
      logout()
      throw error
    }
  }

  const login = async (email, password) => {
    try {
      setIsLoading(true)
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Login failed')
      }

      const data = await response.json()
      
      // Store auth data
      localStorage.setItem('flourish_token', data.token)
      localStorage.setItem('flourish_user', JSON.stringify(data.user))
      
      setToken(data.token)
      setUser(data.user)
      setIsAuthenticated(true)
      
      return data
    } catch (error) {
      console.error('Login error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (userData) => {
    try {
      setIsLoading(true)
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Registration failed')
      }

      const data = await response.json()
      
      // Store auth data
      localStorage.setItem('flourish_token', data.token)
      localStorage.setItem('flourish_user', JSON.stringify(data.user))
      
      setToken(data.token)
      setUser(data.user)
      setIsAuthenticated(true)
      
      return data
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      // Call logout endpoint if token exists
      if (token) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        })
      }
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Clear local state regardless of API call success
      localStorage.removeItem('flourish_token')
      localStorage.removeItem('flourish_user')
      setToken(null)
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  const updateUser = async (updates) => {
    try {
      const response = await fetch('/api/users/profile', {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Profile update failed')
      }

      const updatedUser = await response.json()
      
      // Update local storage and state
      localStorage.setItem('flourish_user', JSON.stringify(updatedUser))
      setUser(updatedUser)
      
      return updatedUser
    } catch (error) {
      console.error('Profile update error:', error)
      throw error
    }
  }

  const refreshUser = async () => {
    try {
      const response = await fetch('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to refresh user data')
      }

      const userData = await response.json()
      localStorage.setItem('flourish_user', JSON.stringify(userData))
      setUser(userData)
      
      return userData
    } catch (error) {
      console.error('User refresh error:', error)
      throw error
    }
  }

  const resetPassword = async (email) => {
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Password reset failed')
      }

      return await response.json()
    } catch (error) {
      console.error('Password reset error:', error)
      throw error
    }
  }

  const confirmResetPassword = async (token, newPassword) => {
    try {
      const response = await fetch('/api/auth/confirm-reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, newPassword })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Password confirmation failed')
      }

      return await response.json()
    } catch (error) {
      console.error('Password confirmation error:', error)
      throw error
    }
  }

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const response = await fetch('/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentPassword, newPassword })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Password change failed')
      }

      return await response.json()
    } catch (error) {
      console.error('Password change error:', error)
      throw error
    }
  }

  const deleteAccount = async (password) => {
    try {
      const response = await fetch('/api/users/delete-account', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Account deletion failed')
      }

      // Logout after successful deletion
      await logout()
      
      return await response.json()
    } catch (error) {
      console.error('Account deletion error:', error)
      throw error
    }
  }

  // Helper functions
  const hasPermission = (permission) => {
    if (!user || !user.permissions) return false
    return user.permissions.includes(permission)
  }

  const hasRole = (role) => {
    if (!user) return false
    return user.role === role
  }

  const isSubscribed = (tier = null) => {
    if (!user || !user.subscription) return false
    if (tier) {
      return user.subscription.tier === tier && user.subscription.status === 'active'
    }
    return user.subscription.status === 'active'
  }

  const getSubscriptionTier = () => {
    if (!user || !user.subscription) return 'free'
    return user.subscription.tier
  }

  const value = {
    // State
    user,
    isAuthenticated,
    isLoading,
    token,
    
    // Auth methods
    login,
    register,
    logout,
    
    // User management
    updateUser,
    refreshUser,
    
    // Password management
    resetPassword,
    confirmResetPassword,
    changePassword,
    
    // Account management
    deleteAccount,
    
    // Helper methods
    hasPermission,
    hasRole,
    isSubscribed,
    getSubscriptionTier
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

