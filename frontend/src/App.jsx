import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Layout Components
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import MobileNav from './components/layout/MobileNav'

// Authentication Pages
import LandingPage from './pages/auth/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import OnboardingFlow from './pages/auth/OnboardingFlow'

// Main App Pages
import Dashboard from './pages/dashboard/Dashboard'
import DiscoverPage from './pages/discover/DiscoverPage'
import MatchesPage from './pages/matches/MatchesPage'
import MessagesPage from './pages/messages/MessagesPage'
import CoachingPage from './pages/coaching/CoachingPage'
import ProfilePage from './pages/profile/ProfilePage'
import ResourcesPage from './pages/resources/ResourcesPage'
import SettingsPage from './pages/settings/SettingsPage'

// Premium Pages
import PremiumPage from './pages/premium/PremiumPage'
import SubscriptionPage from './pages/premium/SubscriptionPage'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'

// Context Providers
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { NotificationProvider } from './contexts/NotificationContext'

// Hooks
import { useLocalStorage } from './hooks/useLocalStorage'

function AppContent() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Public routes (not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    )
  }

  // Authenticated app layout
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sidebar 
          open={sidebarOpen} 
          onOpenChange={setSidebarOpen}
          className="fixed left-0 top-0 h-full"
        />
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <MobileNav 
          open={sidebarOpen} 
          onOpenChange={setSidebarOpen}
        />
      )}

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${
        !isMobile && sidebarOpen ? 'ml-64' : 'ml-0'
      }`}>
        {/* Top Navigation */}
        <Navbar 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          isMobile={isMobile}
        />

        {/* Page Content */}
        <main className="p-4 md:p-6 lg:p-8">
          <Routes>
            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Core Features */}
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/matches" element={<MatchesPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:conversationId" element={<MessagesPage />} />
            
            {/* AI Coaching */}
            <Route path="/coaching" element={<CoachingPage />} />
            <Route path="/coaching/session/:sessionId" element={<CoachingPage />} />
            
            {/* Profile & Settings */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* Resources Hub */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:category" element={<ResourcesPage />} />
            <Route path="/resources/:category/:id" element={<ResourcesPage />} />
            
            {/* Premium Features */}
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
            
            {/* Admin (if user has admin role) */}
            {user?.role === 'admin' && (
              <Route path="/admin/*" element={<AdminDashboard />} />
            )}
            
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <Router>
            <AppContent />
          </Router>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App

