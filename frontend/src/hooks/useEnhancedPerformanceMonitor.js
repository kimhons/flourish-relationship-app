import { useEffect, useState, useRef, useCallback } from 'react'

// Enhanced Performance Monitor Hook with Web Vitals
export const useEnhancedPerformanceMonitor = (options = {}) => {
  const [metrics, setMetrics] = useState({
    // Core Web Vitals
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToFirstByte: 0,
    
    // Custom Performance Metrics
    pageLoadTime: 0,
    domContentLoaded: 0,
    timeToInteractive: 0,
    resourcesLoaded: 0,
    memoryUsage: 0,
    networkType: 'unknown',
    
    // Service Worker Metrics
    cacheHitRate: 0,
    offlineRequests: 0,
    
    // Component Performance
    renderTime: 0,
    componentCount: 0,
    
    // User Experience Metrics
    sessionDuration: 0,
    interactionCount: 0,
    scrollDepth: 0
  })
  
  const [performanceEntries, setPerformanceEntries] = useState([])
  const [alerts, setAlerts] = useState([])
  
  const metricsRef = useRef({})
  const observerRef = useRef(null)
  const sessionStartRef = useRef(Date.now())
  const interactionCountRef = useRef(0)
  const maxScrollDepthRef = useRef(0)
  
  // Performance thresholds for alerts
  const thresholds = {
    firstContentfulPaint: 2000, // 2 seconds
    largestContentfulPaint: 4000, // 4 seconds
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100, // 100ms
    timeToFirstByte: 600, // 600ms
    memoryUsage: 100, // 100MB
    ...options.thresholds
  }
  
  // Initialize Web Vitals monitoring
  useEffect(() => {
    const initWebVitals = async () => {
      try {
        // Dynamic import for Web Vitals
        const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals')
        
        // Core Web Vitals
        getCLS((metric) => {
          updateMetric('cumulativeLayoutShift', metric.value)
          checkThreshold('cumulativeLayoutShift', metric.value)
        })
        
        getFID((metric) => {
          updateMetric('firstInputDelay', metric.value)
          checkThreshold('firstInputDelay', metric.value)
        })
        
        getFCP((metric) => {
          updateMetric('firstContentfulPaint', metric.value)
          checkThreshold('firstContentfulPaint', metric.value)
        })
        
        getLCP((metric) => {
          updateMetric('largestContentfulPaint', metric.value)
          checkThreshold('largestContentfulPaint', metric.value)
        })
        
        getTTFB((metric) => {
          updateMetric('timeToFirstByte', metric.value)
          checkThreshold('timeToFirstByte', metric.value)
        })
        
      } catch (error) {
        console.warn('Web Vitals not available:', error)
      }
    }
    
    initWebVitals()
  }, [])
  
  // Traditional Performance API monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0]
        const paint = performance.getEntriesByType('paint')
        const resources = performance.getEntriesByType('resource')
        
        const newMetrics = {
          pageLoadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : 0,
          domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
          timeToInteractive: navigation ? navigation.domInteractive - navigation.navigationStart : 0,
          resourcesLoaded: resources.length,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          memoryUsage: performance.memory ? performance.memory.usedJSHeapSize / 1024 / 1024 : 0,
          networkType: navigator.connection?.effectiveType || 'unknown'
        }
        
        // Update metrics
        Object.entries(newMetrics).forEach(([key, value]) => {
          updateMetric(key, value)
        })
        
        // Check thresholds
        checkThreshold('firstContentfulPaint', newMetrics.firstContentfulPaint)
        checkThreshold('memoryUsage', newMetrics.memoryUsage)
        
        // Store performance entries
        setPerformanceEntries(prev => [...prev, ...resources.slice(-10)]) // Keep last 10 entries
        
        // Send to analytics
        sendAnalytics(newMetrics)
      }
    }
    
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }
    
    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])
  
  // Service Worker Performance Monitoring
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const messageChannel = new MessageChannel()
      
      messageChannel.port1.onmessage = (event) => {
        if (event.data.type === 'PERFORMANCE_METRICS') {
          const swMetrics = event.data.data
          const totalRequests = swMetrics.cacheHits + swMetrics.cacheMisses
          const cacheHitRate = totalRequests > 0 ? (swMetrics.cacheHits / totalRequests) * 100 : 0
          
          updateMetric('cacheHitRate', cacheHitRate)
          updateMetric('offlineRequests', swMetrics.offlineRequests)
        }
      }
      
      // Request metrics from service worker
      navigator.serviceWorker.ready.then(registration => {
        registration.active?.postMessage(
          { type: 'GET_PERFORMANCE_METRICS' },
          [messageChannel.port2]
        )
      })
    }
  }, [])
  
  // User Experience Monitoring
  useEffect(() => {
    let interactionTimer
    
    const trackInteraction = () => {
      interactionCountRef.current++
      updateMetric('interactionCount', interactionCountRef.current)
      
      // Reset session duration timer
      clearTimeout(interactionTimer)
      interactionTimer = setTimeout(() => {
        const sessionDuration = Date.now() - sessionStartRef.current
        updateMetric('sessionDuration', sessionDuration)
      }, 1000)
    }
    
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollDepth = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      
      if (scrollDepth > maxScrollDepthRef.current) {
        maxScrollDepthRef.current = scrollDepth
        updateMetric('scrollDepth', scrollDepth)
      }
    }
    
    // Add event listeners
    document.addEventListener('click', trackInteraction)
    document.addEventListener('keydown', trackInteraction)
    document.addEventListener('scroll', trackScrollDepth, { passive: true })
    
    return () => {
      document.removeEventListener('click', trackInteraction)
      document.removeEventListener('keydown', trackInteraction)
      document.removeEventListener('scroll', trackScrollDepth)
      clearTimeout(interactionTimer)
    }
  }, [])
  
  // Performance Observer for advanced metrics
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        
        entries.forEach(entry => {
          if (entry.entryType === 'measure') {
            updateMetric('renderTime', entry.duration)
          }
          
          if (entry.entryType === 'navigation') {
            updateMetric('timeToInteractive', entry.domInteractive - entry.fetchStart)
          }
        })
      })
      
      try {
        observer.observe({ entryTypes: ['measure', 'navigation'] })
        observerRef.current = observer
      } catch (error) {
        console.warn('Performance Observer not fully supported:', error)
      }
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])
  
  // Update metric helper
  const updateMetric = useCallback((key, value) => {
    setMetrics(prev => {
      const newMetrics = { ...prev, [key]: value }
      metricsRef.current = newMetrics
      return newMetrics
    })
  }, [])
  
  // Check performance thresholds
  const checkThreshold = useCallback((metric, value) => {
    const threshold = thresholds[metric]
    if (threshold && value > threshold) {
      const alert = {
        id: Date.now(),
        metric,
        value,
        threshold,
        timestamp: new Date().toISOString(),
        severity: value > threshold * 1.5 ? 'high' : 'medium'
      }
      
      setAlerts(prev => [...prev.slice(-9), alert]) // Keep last 10 alerts
      
      // Log performance issue
      console.warn(`🚨 Performance Alert: ${metric} (${value}) exceeded threshold (${threshold})`)
    }
  }, [thresholds])
  
  // Send metrics to analytics
  const sendAnalytics = useCallback((metrics) => {
    if (window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'performance',
        custom_map: {
          page_load_time: metrics.pageLoadTime,
          fcp: metrics.firstContentfulPaint,
          memory_usage: metrics.memoryUsage,
          network_type: metrics.networkType
        }
      })
    }
    
    // Send to custom analytics endpoint
    if (options.analyticsEndpoint) {
      fetch(options.analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          metrics: metrics
        })
      }).catch(error => {
        console.warn('Failed to send analytics:', error)
      })
    }
  }, [options.analyticsEndpoint])
  
  // Generate performance report
  const generateReport = useCallback(() => {
    const report = {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      metrics: metricsRef.current,
      alerts: alerts,
      performanceEntries: performanceEntries.slice(-20), // Last 20 entries
      recommendations: generateRecommendations()
    }
    
    return report
  }, [alerts, performanceEntries])
  
  // Generate performance recommendations
  const generateRecommendations = useCallback(() => {
    const recommendations = []
    const current = metricsRef.current
    
    if (current.firstContentfulPaint > 2000) {
      recommendations.push({
        type: 'warning',
        metric: 'firstContentfulPaint',
        message: 'Consider optimizing critical rendering path',
        suggestions: ['Minimize render-blocking resources', 'Optimize CSS delivery', 'Reduce server response time']
      })
    }
    
    if (current.largestContentfulPaint > 4000) {
      recommendations.push({
        type: 'warning',
        metric: 'largestContentfulPaint',
        message: 'Optimize largest contentful paint',
        suggestions: ['Optimize images', 'Reduce resource load times', 'Remove unused CSS']
      })
    }
    
    if (current.cumulativeLayoutShift > 0.1) {
      recommendations.push({
        type: 'error',
        metric: 'cumulativeLayoutShift',
        message: 'High layout shift detected',
        suggestions: ['Add size attributes to images', 'Reserve space for dynamic content', 'Avoid inserting content above existing content']
      })
    }
    
    if (current.memoryUsage > 100) {
      recommendations.push({
        type: 'warning',
        metric: 'memoryUsage',
        message: 'High memory usage detected',
        suggestions: ['Optimize large objects', 'Clean up event listeners', 'Reduce image sizes']
      })
    }
    
    if (current.cacheHitRate < 70) {
      recommendations.push({
        type: 'info',
        metric: 'cacheHitRate',
        message: 'Low cache hit rate',
        suggestions: ['Optimize caching strategy', 'Increase cache TTL', 'Preload critical resources']
      })
    }
    
    return recommendations
  }, [])
  
  // Console reporting
  const reportMetrics = useCallback(() => {
    const report = generateReport()
    
    console.group('📊 Enhanced Performance Metrics Report')
    console.log('🕐 Timestamp:', report.timestamp)
    console.log('🌐 URL:', report.url)
    
    console.group('📈 Core Web Vitals')
    console.log(`FCP: ${report.metrics.firstContentfulPaint.toFixed(2)}ms`)
    console.log(`LCP: ${report.metrics.largestContentfulPaint.toFixed(2)}ms`)
    console.log(`CLS: ${report.metrics.cumulativeLayoutShift.toFixed(3)}`)
    console.log(`FID: ${report.metrics.firstInputDelay.toFixed(2)}ms`)
    console.log(`TTFB: ${report.metrics.timeToFirstByte.toFixed(2)}ms`)
    console.groupEnd()
    
    console.group('🔧 Performance Metrics')
    console.log(`Page Load Time: ${report.metrics.pageLoadTime.toFixed(2)}ms`)
    console.log(`DOM Content Loaded: ${report.metrics.domContentLoaded.toFixed(2)}ms`)
    console.log(`Time to Interactive: ${report.metrics.timeToInteractive.toFixed(2)}ms`)
    console.log(`Memory Usage: ${report.metrics.memoryUsage.toFixed(2)}MB`)
    console.log(`Network Type: ${report.metrics.networkType}`)
    console.groupEnd()
    
    console.group('📱 Service Worker Metrics')
    console.log(`Cache Hit Rate: ${report.metrics.cacheHitRate.toFixed(1)}%`)
    console.log(`Offline Requests: ${report.metrics.offlineRequests}`)
    console.groupEnd()
    
    console.group('👤 User Experience')
    console.log(`Session Duration: ${(report.metrics.sessionDuration / 1000).toFixed(1)}s`)
    console.log(`Interaction Count: ${report.metrics.interactionCount}`)
    console.log(`Scroll Depth: ${report.metrics.scrollDepth.toFixed(1)}%`)
    console.groupEnd()
    
    if (report.alerts.length > 0) {
      console.group('🚨 Performance Alerts')
      report.alerts.forEach(alert => {
        console.warn(`${alert.metric}: ${alert.value} (threshold: ${alert.threshold})`)
      })
      console.groupEnd()
    }
    
    if (report.recommendations.length > 0) {
      console.group('💡 Recommendations')
      report.recommendations.forEach(rec => {
        console.log(`${rec.type.toUpperCase()}: ${rec.message}`)
        rec.suggestions.forEach(suggestion => {
          console.log(`  • ${suggestion}`)
        })
      })
      console.groupEnd()
    }
    
    console.groupEnd()
    
    return report
  }, [generateReport])
  
  // Start monitoring component renders
  const startRenderMonitoring = useCallback((componentName) => {
    if ('performance' in window) {
      performance.mark(`${componentName}-start`)
    }
  }, [])
  
  const endRenderMonitoring = useCallback((componentName) => {
    if ('performance' in window) {
      performance.mark(`${componentName}-end`)
      performance.measure(`${componentName}-render`, `${componentName}-start`, `${componentName}-end`)
    }
  }, [])
  
  // Export performance data
  const exportData = useCallback(() => {
    const report = generateReport()
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `performance-report-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }, [generateReport])
  
  return {
    metrics,
    alerts,
    performanceEntries,
    reportMetrics,
    generateReport,
    exportData,
    startRenderMonitoring,
    endRenderMonitoring,
    updateMetric
  }
}

export default useEnhancedPerformanceMonitor