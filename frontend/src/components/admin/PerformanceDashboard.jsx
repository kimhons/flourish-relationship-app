import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { useEnhancedPerformanceMonitor } from '../../hooks/useEnhancedPerformanceMonitor'
import { cn } from '../../lib/utils'

const PerformanceDashboard = () => {
  const {
    metrics,
    alerts,
    performanceEntries,
    reportMetrics,
    generateReport,
    exportData
  } = useEnhancedPerformanceMonitor()

  const [isMonitoring, setIsMonitoring] = useState(true)
  const [selectedMetric, setSelectedMetric] = useState('overview')
  const [autoRefresh, setAutoRefresh] = useState(true)

  // Auto-refresh metrics every 5 seconds
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      // Trigger metrics collection
      if (typeof reportMetrics === 'function') {
        reportMetrics()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [autoRefresh, reportMetrics])

  const getMetricStatus = (metric, value) => {
    const thresholds = {
      firstContentfulPaint: { good: 2000, needs_improvement: 4000 },
      largestContentfulPaint: { good: 2500, needs_improvement: 4000 },
      cumulativeLayoutShift: { good: 0.1, needs_improvement: 0.25 },
      firstInputDelay: { good: 100, needs_improvement: 300 },
      timeToFirstByte: { good: 600, needs_improvement: 1500 },
      memoryUsage: { good: 50, needs_improvement: 100 },
      cacheHitRate: { good: 80, needs_improvement: 50 }
    }

    const threshold = thresholds[metric]
    if (!threshold) return 'unknown'

    if (metric === 'cacheHitRate') {
      if (value >= threshold.good) return 'good'
      if (value >= threshold.needs_improvement) return 'needs_improvement'
      return 'poor'
    } else {
      if (value <= threshold.good) return 'good'
      if (value <= threshold.needs_improvement) return 'needs_improvement'
      return 'poor'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'good': return 'bg-green-100 text-green-800'
      case 'needs_improvement': return 'bg-yellow-100 text-yellow-800'
      case 'poor': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatMetricValue = (metric, value) => {
    switch (metric) {
      case 'firstContentfulPaint':
      case 'largestContentfulPaint':
      case 'firstInputDelay':
      case 'timeToFirstByte':
      case 'pageLoadTime':
      case 'domContentLoaded':
      case 'timeToInteractive':
      case 'renderTime':
        return `${value.toFixed(0)}ms`
      
      case 'cumulativeLayoutShift':
        return value.toFixed(3)
      
      case 'memoryUsage':
        return `${value.toFixed(1)}MB`
      
      case 'cacheHitRate':
      case 'scrollDepth':
        return `${value.toFixed(1)}%`
      
      case 'sessionDuration':
        return `${(value / 1000).toFixed(1)}s`
      
      case 'resourcesLoaded':
      case 'interactionCount':
      case 'componentCount':
      case 'offlineRequests':
        return value.toString()
      
      default:
        return value.toString()
    }
  }

  const getCoreWebVitals = () => [
    {
      name: 'First Contentful Paint',
      key: 'firstContentfulPaint',
      value: metrics.firstContentfulPaint,
      description: 'Time when the first text/image is painted'
    },
    {
      name: 'Largest Contentful Paint',
      key: 'largestContentfulPaint',
      value: metrics.largestContentfulPaint,
      description: 'Time when the largest text/image is painted'
    },
    {
      name: 'Cumulative Layout Shift',
      key: 'cumulativeLayoutShift',
      value: metrics.cumulativeLayoutShift,
      description: 'Sum of layout shift scores'
    },
    {
      name: 'First Input Delay',
      key: 'firstInputDelay',
      value: metrics.firstInputDelay,
      description: 'Time from first user interaction to browser response'
    }
  ]

  const getCustomMetrics = () => [
    {
      name: 'Memory Usage',
      key: 'memoryUsage',
      value: metrics.memoryUsage,
      description: 'JavaScript heap memory usage'
    },
    {
      name: 'Cache Hit Rate',
      key: 'cacheHitRate',
      value: metrics.cacheHitRate,
      description: 'Percentage of requests served from cache'
    },
    {
      name: 'Page Load Time',
      key: 'pageLoadTime',
      value: metrics.pageLoadTime,
      description: 'Complete page load time'
    },
    {
      name: 'Time to Interactive',
      key: 'timeToInteractive',
      value: metrics.timeToInteractive,
      description: 'Time until page becomes interactive'
    }
  ]

  const getUserExperienceMetrics = () => [
    {
      name: 'Session Duration',
      key: 'sessionDuration',
      value: metrics.sessionDuration,
      description: 'Total session time'
    },
    {
      name: 'Interactions',
      key: 'interactionCount',
      value: metrics.interactionCount,
      description: 'Total user interactions'
    },
    {
      name: 'Scroll Depth',
      key: 'scrollDepth',
      value: metrics.scrollDepth,
      description: 'Maximum scroll depth reached'
    },
    {
      name: 'Network Type',
      key: 'networkType',
      value: metrics.networkType,
      description: 'Connection type'
    }
  ]

  const MetricCard = ({ name, metricKey, value, description }) => {
    const status = getMetricStatus(metricKey, value)
    const statusColor = getStatusColor(status)
    const formattedValue = formatMetricValue(metricKey, value)

    return (
      <Card className="h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">{name}</CardTitle>
            <Badge className={cn('text-xs', statusColor)}>
              {status.replace('_', ' ')}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formattedValue}</div>
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        </CardContent>
      </Card>
    )
  }

  const AlertsPanel = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🚨 Performance Alerts
          {alerts.length > 0 && (
            <Badge variant="destructive">{alerts.length}</Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p className="text-gray-500">No performance alerts</p>
        ) : (
          <div className="space-y-3">
            {alerts.slice(-5).map((alert, index) => (
              <div
                key={alert.id || index}
                className={cn(
                  'p-3 rounded-lg border',
                  alert.severity === 'high' ? 'border-red-200 bg-red-50' :
                  alert.severity === 'medium' ? 'border-yellow-200 bg-yellow-50' :
                  'border-blue-200 bg-blue-50'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{alert.metric}</span>
                  <Badge variant={alert.severity === 'high' ? 'destructive' : 'outline'}>
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Value: {alert.value} | Threshold: {alert.threshold}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )

  const ControlPanel = () => (
    <Card>
      <CardHeader>
        <CardTitle>⚙️ Controls</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Monitoring</label>
            <Button
              variant={isMonitoring ? 'default' : 'outline'}
              onClick={() => setIsMonitoring(!isMonitoring)}
              className="w-full"
            >
              {isMonitoring ? '⏸️ Pause' : '▶️ Start'}
            </Button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Auto Refresh</label>
            <Button
              variant={autoRefresh ? 'default' : 'outline'}
              onClick={() => setAutoRefresh(!autoRefresh)}
              className="w-full"
            >
              {autoRefresh ? '🔄 On' : '⏸️ Off'}
            </Button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Report</label>
            <Button
              variant="outline"
              onClick={() => {
                const report = generateReport()
                console.log('Performance Report:', report)
              }}
              className="w-full"
            >
              📊 Generate
            </Button>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Export</label>
            <Button
              variant="outline"
              onClick={exportData}
              className="w-full"
            >
              💾 Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const ResourcesPanel = () => (
    <Card>
      <CardHeader>
        <CardTitle>📊 Recent Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {performanceEntries.length === 0 ? (
            <p className="text-gray-500">No resource entries</p>
          ) : (
            performanceEntries.slice(-10).map((entry, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="text-sm font-medium truncate flex-1">
                  {entry.name?.split('/').pop() || 'Resource'}
                </span>
                <span className="text-xs text-gray-500">
                  {entry.duration?.toFixed(0) || '0'}ms
                </span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Performance Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Real-time performance monitoring and optimization insights
          </p>
        </div>

        {/* Controls and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <ControlPanel />
          <AlertsPanel />
          <ResourcesPanel />
        </div>

        {/* Core Web Vitals */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">🎯 Core Web Vitals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {getCoreWebVitals().map((metric) => (
              <MetricCard key={metric.key} {...metric} metricKey={metric.key} />
            ))}
          </div>
        </div>

        {/* Custom Performance Metrics */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">⚡ Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {getCustomMetrics().map((metric) => (
              <MetricCard key={metric.key} {...metric} metricKey={metric.key} />
            ))}
          </div>
        </div>

        {/* User Experience Metrics */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">👤 User Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {getUserExperienceMetrics().map((metric) => (
              <MetricCard key={metric.key} {...metric} metricKey={metric.key} />
            ))}
          </div>
        </div>

        {/* Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>📈 Performance Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {getCoreWebVitals().filter(m => getMetricStatus(m.key, m.value) === 'good').length}
                </div>
                <div className="text-sm text-gray-600">Good Metrics</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {getCoreWebVitals().filter(m => getMetricStatus(m.key, m.value) === 'needs_improvement').length}
                </div>
                <div className="text-sm text-gray-600">Needs Improvement</div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {getCoreWebVitals().filter(m => getMetricStatus(m.key, m.value) === 'poor').length}
                </div>
                <div className="text-sm text-gray-600">Poor Metrics</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PerformanceDashboard