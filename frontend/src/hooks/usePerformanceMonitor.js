import { useEffect, useState } from 'react'

export const usePerformanceMonitor = () => {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    domContentLoaded: 0,
    resourcesLoaded: 0,
    memoryUsage: 0,
    connectionType: 'unknown'
  })

  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0]
        const paint = performance.getEntriesByType('paint')
        
        const metrics = {
          pageLoadTime: navigation?.loadEventEnd - navigation?.loadEventStart || 0,
          domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart || 0,
          resourcesLoaded: performance.getEntriesByType('resource').length,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          memoryUsage: performance.memory ? performance.memory.usedJSHeapSize / 1024 / 1024 : 0,
          connectionType: navigator.connection?.effectiveType || 'unknown'
        }
        
        setPerformanceMetrics(metrics)
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.group('🚀 Performance Metrics')
          console.log('Page Load Time:', metrics.pageLoadTime.toFixed(2), 'ms')
          console.log('First Contentful Paint:', metrics.firstContentfulPaint.toFixed(2), 'ms')
          console.log('DOM Content Loaded:', metrics.domContentLoaded.toFixed(2), 'ms')
          console.log('Resources Loaded:', metrics.resourcesLoaded)
          console.log('Memory Usage:', metrics.memoryUsage.toFixed(2), 'MB')
          console.log('Connection Type:', metrics.connectionType)
          console.groupEnd()
        }
      }
    }

    // Measure on load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  const reportWebVitals = (metric) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Web Vital ${metric.name}:`, metric.value)
    }
    
    // In production, you might want to send this to an analytics service
    // analytics.track('web_vital', metric)
  }

  return {
    performanceMetrics,
    reportWebVitals
  }
}

export default usePerformanceMonitor