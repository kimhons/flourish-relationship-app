import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext({})

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [systemTheme, setSystemTheme] = useState('light')

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('flourish_theme')
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    
    setSystemTheme(systemPreference)
    
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      setTheme(systemPreference)
    }
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      const newSystemTheme = e.matches ? 'dark' : 'light'
      setSystemTheme(newSystemTheme)
      
      // If user hasn't set a preference, follow system
      const storedTheme = localStorage.getItem('flourish_theme')
      if (!storedTheme) {
        setTheme(newSystemTheme)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const setLightTheme = () => {
    setTheme('light')
    localStorage.setItem('flourish_theme', 'light')
  }

  const setDarkTheme = () => {
    setTheme('dark')
    localStorage.setItem('flourish_theme', 'dark')
  }

  const setSystemThemePreference = () => {
    setTheme(systemTheme)
    localStorage.removeItem('flourish_theme')
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('flourish_theme', newTheme)
  }

  const value = {
    theme,
    systemTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    setLightTheme,
    setDarkTheme,
    setSystemThemePreference,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

