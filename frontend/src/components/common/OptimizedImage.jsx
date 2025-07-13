import React, { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '../../lib/utils'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  sizes = '100vw',
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  quality = 75,
  loading = 'lazy',
  onLoad,
  onError,
  onLoadStart,
  fallback,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isVisible, setIsVisible] = useState(priority)
  const [currentSrc, setCurrentSrc] = useState(priority ? src : null)
  
  const imgRef = useRef(null)
  const observerRef = useRef(null)
  const loadStartTimeRef = useRef(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !imgRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setCurrentSrc(src)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    observerRef.current = observer

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [priority, src])

  // Generate responsive image sources
  const generateSrcSet = useCallback((baseSrc) => {
    if (!baseSrc) return ''
    
    const breakpoints = [480, 768, 1024, 1280, 1920]
    const formats = ['webp', 'avif']
    
    // Check if the URL supports query parameters for resizing
    const hasQueryParams = baseSrc.includes('?')
    const separator = hasQueryParams ? '&' : '?'
    
    return breakpoints.map(size => {
      // Generate different sizes for responsive images
      const resizedSrc = `${baseSrc}${separator}w=${size}&q=${quality}`
      return `${resizedSrc} ${size}w`
    }).join(', ')
  }, [quality])

  // Generate WebP and AVIF sources
  const generateModernSources = useCallback((baseSrc) => {
    if (!baseSrc) return []
    
    const sources = []
    const formats = ['avif', 'webp']
    
    formats.forEach(format => {
      const hasQueryParams = baseSrc.includes('?')
      const separator = hasQueryParams ? '&' : '?'
      const formatSrc = `${baseSrc}${separator}format=${format}&q=${quality}`
      
      sources.push({
        type: `image/${format}`,
        srcSet: generateSrcSet(formatSrc),
        sizes: sizes
      })
    })
    
    return sources
  }, [generateSrcSet, quality, sizes])

  const handleLoadStart = useCallback((e) => {
    loadStartTimeRef.current = performance.now()
    setIsLoading(true)
    setIsError(false)
    onLoadStart?.(e)
  }, [onLoadStart])

  const handleLoad = useCallback((e) => {
    const loadTime = loadStartTimeRef.current 
      ? performance.now() - loadStartTimeRef.current 
      : 0
    
    setIsLoaded(true)
    setIsLoading(false)
    
    // Log performance metrics
    if (process.env.NODE_ENV === 'development') {
      console.log(`🖼️ Image loaded: ${src} (${loadTime.toFixed(2)}ms)`)
    }
    
    // Send performance metrics
    if (window.gtag) {
      window.gtag('event', 'image_load', {
        event_category: 'performance',
        event_label: src,
        value: Math.round(loadTime)
      })
    }
    
    onLoad?.(e)
  }, [onLoad, src])

  const handleError = useCallback((e) => {
    setIsError(true)
    setIsLoading(false)
    
    console.warn(`🚨 Image load failed: ${src}`)
    
    // Send error metrics
    if (window.gtag) {
      window.gtag('event', 'image_error', {
        event_category: 'error',
        event_label: src
      })
    }
    
    onError?.(e)
  }, [onError, src])

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
      
      return () => {
        document.head.removeChild(link)
      }
    }
  }, [priority, src])

  // Generate blur placeholder
  const generateBlurPlaceholder = useCallback(() => {
    if (blurDataURL) {
      return blurDataURL
    }
    
    // Generate a simple blur placeholder
    const canvas = document.createElement('canvas')
    canvas.width = 40
    canvas.height = 30
    const ctx = canvas.getContext('2d')
    
    // Create a simple gradient
    const gradient = ctx.createLinearGradient(0, 0, 40, 30)
    gradient.addColorStop(0, '#f0f0f0')
    gradient.addColorStop(1, '#e0e0e0')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 40, 30)
    
    return canvas.toDataURL('image/jpeg', 0.1)
  }, [blurDataURL])

  // Placeholder styles
  const placeholderStyles = {
    backgroundColor: '#f0f0f0',
    backgroundImage: placeholder === 'blur' ? `url(${generateBlurPlaceholder()})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: placeholder === 'blur' ? 'blur(10px)' : 'none',
    transition: 'filter 0.3s ease, opacity 0.3s ease'
  }

  // Image container styles
  const containerStyles = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden'
  }

  // Image styles
  const imageStyles = {
    transition: 'opacity 0.3s ease',
    opacity: isLoaded ? 1 : 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }

  // Skeleton loader
  const SkeletonLoader = () => (
    <div className="animate-pulse bg-gray-200 w-full h-full rounded" />
  )

  // Error fallback
  const ErrorFallback = () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500 rounded">
      {fallback || (
        <div className="text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Image unavailable</p>
        </div>
      )}
    </div>
  )

  // Loading indicator
  const LoadingIndicator = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  )

  return (
    <div
      ref={imgRef}
      className={cn('relative', className)}
      style={{ width, height, ...containerStyles }}
      {...props}
    >
      {/* Placeholder */}
      {!isLoaded && !isError && (
        <div
          className="absolute inset-0 w-full h-full"
          style={placeholderStyles}
        />
      )}
      
      {/* Skeleton loader */}
      {placeholder === 'skeleton' && !isLoaded && !isError && (
        <div className="absolute inset-0">
          <SkeletonLoader />
        </div>
      )}
      
      {/* Loading indicator */}
      {isLoading && !isLoaded && !isError && (
        <LoadingIndicator />
      )}
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 w-full h-full">
          <ErrorFallback />
        </div>
      )}
      
      {/* Main image */}
      {isVisible && currentSrc && !isError && (
        <picture>
          {/* Modern formats (AVIF, WebP) */}
          {generateModernSources(currentSrc).map((source, index) => (
            <source
              key={index}
              type={source.type}
              srcSet={source.srcSet}
              sizes={source.sizes}
            />
          ))}
          
          {/* Fallback image */}
          <img
            src={currentSrc}
            alt={alt}
            className={cn(
              'w-full h-full object-cover',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            style={imageStyles}
            onLoadStart={handleLoadStart}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : loading}
            decoding="async"
            width={width}
            height={height}
            srcSet={generateSrcSet(currentSrc)}
            sizes={sizes}
          />
        </picture>
      )}
    </div>
  )
}

// Higher Order Component for automatic optimization
export const withImageOptimization = (Component) => {
  return (props) => {
    const optimizedProps = {
      ...props,
      // Automatically add loading="lazy" unless priority is set
      loading: props.priority ? 'eager' : 'lazy',
      // Add default quality if not specified
      quality: props.quality || 75,
      // Add default placeholder if not specified
      placeholder: props.placeholder || 'blur'
    }
    
    return <Component {...optimizedProps} />
  }
}

// Preset configurations for common use cases
export const ProfileImage = (props) => (
  <OptimizedImage
    {...props}
    className={cn('rounded-full', props.className)}
    placeholder="blur"
    quality={85}
    sizes="(max-width: 768px) 100px, 150px"
  />
)

export const HeroImage = (props) => (
  <OptimizedImage
    {...props}
    priority={true}
    quality={90}
    placeholder="blur"
    sizes="100vw"
  />
)

export const ThumbnailImage = (props) => (
  <OptimizedImage
    {...props}
    quality={70}
    placeholder="skeleton"
    sizes="(max-width: 768px) 150px, 200px"
  />
)

export const GalleryImage = (props) => (
  <OptimizedImage
    {...props}
    quality={80}
    placeholder="blur"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
)

export default OptimizedImage