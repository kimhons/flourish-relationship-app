import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility function to merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Performance utilities
export const performanceUtils = {
  // Measure function execution time
  measureExecutionTime: (fn, name = 'Function') => {
    return (...args) => {
      const start = performance.now()
      const result = fn(...args)
      const end = performance.now()
      
      console.log(`⏱️ ${name} execution time: ${(end - start).toFixed(2)}ms`)
      return result
    }
  },
  
  // Debounce function for performance optimization
  debounce: (func, wait) => {
    let timeout
    return (...args) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(this, args), wait)
    }
  },
  
  // Throttle function for performance optimization
  throttle: (func, limit) => {
    let inThrottle
    return (...args) => {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  },
  
  // Memoization for expensive calculations
  memoize: (fn) => {
    const cache = new Map()
    return (...args) => {
      const key = JSON.stringify(args)
      if (cache.has(key)) {
        return cache.get(key)
      }
      const result = fn(...args)
      cache.set(key, result)
      return result
    }
  }
}

// Image optimization utilities
export const imageUtils = {
  // Generate responsive image sizes
  generateSizes: (breakpoints = [640, 768, 1024, 1280, 1536]) => {
    return breakpoints.map(bp => `(max-width: ${bp}px) ${bp}px`).join(', ') + ', 100vw'
  },
  
  // Calculate optimal image dimensions
  calculateOptimalSize: (originalWidth, originalHeight, maxWidth = 1920, maxHeight = 1080) => {
    const aspectRatio = originalWidth / originalHeight
    let width = Math.min(originalWidth, maxWidth)
    let height = width / aspectRatio
    
    if (height > maxHeight) {
      height = maxHeight
      width = height * aspectRatio
    }
    
    return { width: Math.round(width), height: Math.round(height) }
  },
  
  // Generate blur data URL
  generateBlurDataURL: (width = 40, height = 30) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#f0f0f0')
    gradient.addColorStop(1, '#e0e0e0')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
    
    return canvas.toDataURL('image/jpeg', 0.1)
  }
}

// API utilities
export const apiUtils = {
  // Create cache key for API requests
  createCacheKey: (url, params = {}) => {
    const searchParams = new URLSearchParams(params)
    return `${url}?${searchParams.toString()}`
  },
  
  // Retry mechanism for failed requests
  retryRequest: async (request, maxRetries = 3, delay = 1000) => {
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await request()
        return response
      } catch (error) {
        if (i === maxRetries - 1) throw error
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)))
      }
    }
  },
  
  // Request timeout wrapper
  withTimeout: (promise, timeout = 5000) => {
    return Promise.race([
      promise,
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), timeout)
      )
    ])
  }
}

// Storage utilities
export const storageUtils = {
  // Set item with expiration
  setWithExpiry: (key, value, ttl = 3600000) => { // 1 hour default
    const now = new Date()
    const item = {
      value: value,
      expiry: now.getTime() + ttl
    }
    localStorage.setItem(key, JSON.stringify(item))
  },
  
  // Get item with expiration check
  getWithExpiry: (key) => {
    const itemStr = localStorage.getItem(key)
    if (!itemStr) return null
    
    const item = JSON.parse(itemStr)
    const now = new Date()
    
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key)
      return null
    }
    
    return item.value
  },
  
  // Clear expired items
  clearExpired: () => {
    const now = new Date()
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const itemStr = localStorage.getItem(key)
      
      try {
        const item = JSON.parse(itemStr)
        if (item.expiry && now.getTime() > item.expiry) {
          localStorage.removeItem(key)
        }
      } catch (e) {
        // Not an expiry item, skip
      }
    }
  }
}

// Format utilities
export const formatUtils = {
  // Format file size
  formatFileSize: (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'
    
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  },
  
  // Format duration
  formatDuration: (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m ${seconds % 60}s`
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`
    } else {
      return `${seconds}s`
    }
  },
  
  // Format number with commas
  formatNumber: (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

// Validation utilities
export const validationUtils = {
  // Validate email
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },
  
  // Validate URL
  isValidURL: (url) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  },
  
  // Validate image file
  isValidImageFile: (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    return validTypes.includes(file.type)
  },
  
  // Validate image dimensions
  validateImageDimensions: (file, maxWidth = 1920, maxHeight = 1080) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        resolve({
          valid: img.width <= maxWidth && img.height <= maxHeight,
          dimensions: { width: img.width, height: img.height }
        })
      }
      img.src = URL.createObjectURL(file)
    })
  }
}

// Device utilities
export const deviceUtils = {
  // Check if device is mobile
  isMobile: () => {
    return window.innerWidth <= 768
  },
  
  // Check if device is tablet
  isTablet: () => {
    return window.innerWidth > 768 && window.innerWidth <= 1024
  },
  
  // Check if device is desktop
  isDesktop: () => {
    return window.innerWidth > 1024
  },
  
  // Get device info
  getDeviceInfo: () => {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      screen: {
        width: screen.width,
        height: screen.height,
        colorDepth: screen.colorDepth
      },
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  }
}

// Export all utilities
export default {
  cn,
  performanceUtils,
  imageUtils,
  apiUtils,
  storageUtils,
  formatUtils,
  validationUtils,
  deviceUtils
}

