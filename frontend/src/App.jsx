import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Layout Components (keep these as regular imports since they're used immediately)
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import MobileNav from './components/layout/MobileNav'

// Lazy load all page components for code splitting
const LandingPage = React.lazy(() => import('./pages/auth/LandingPage'))
const LoginPage = React.lazy(() => import('./pages/auth/LoginPage'))
const RegisterPage = React.lazy(() => import('./pages/auth/RegisterPage'))
const OnboardingFlow = React.lazy(() => import('./pages/auth/OnboardingFlow'))

// Main App Pages
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))
const DiscoverPage = React.lazy(() => import('./pages/discover/DiscoverPage'))
const MatchesPage = React.lazy(() => import('./pages/matches/MatchesPage'))
const MessagesPage = React.lazy(() => import('./pages/messages/MessagesPage'))
const CoachingPage = React.lazy(() => import('./pages/coaching/CoachingPage'))
const ProfilePage = React.lazy(() => import('./pages/profile/ProfilePage'))
const ResourcesPage = React.lazy(() => import('./pages/resources/ResourcesPage'))
const SettingsPage = React.lazy(() => import('./pages/settings/SettingsPage'))
const AIDemoPage = React.lazy(() => import('./pages/ai/AIDemoPage'))

// Premium Pages
const PremiumPage = React.lazy(() => import('./pages/premium/PremiumPage'))
const SubscriptionPage = React.lazy(() => import('./pages/premium/SubscriptionPage'))

// Website Pages
const BlogPage = React.lazy(() => import('./pages/blog/BlogPage'))
const AboutPage = React.lazy(() => import('./pages/website/AboutPage'))
const FeaturesPage = React.lazy(() => import('./pages/website/FeaturesPage'))
const ContactPage = React.lazy(() => import('./pages/website/ContactPage'))
const PrivacyPage = React.lazy(() => import('./pages/website/PrivacyPage'))
const TermsPage = React.lazy(() => import('./pages/website/TermsPage'))
const HelpPage = React.lazy(() => import('./pages/website/HelpPage'))
const SecurityPage = React.lazy(() => import('./pages/website/SecurityPage'))

// Admin Pages
const AdminDashboard = React.lazy(() => import('./pages/admin/AdminDashboard'))

// Context Providers
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { NotificationProvider } from './contexts/NotificationProvider'

// Hooks
import { useLocalStorage } from './hooks/useLocalStorage'

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

// Enhanced loading component for pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
)

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
    return <LoadingSpinner />
  }

  // Public routes (not authenticated)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/onboarding" element={<OnboardingFlow />} />
            
            {/* Website Pages */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/security" element={<SecurityPage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
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
          <Suspense fallback={<PageLoader />}>
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
              
              {/* AI Demo */}
              <Route path="/ai-demo" element={<AIDemoPage />} />
              
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
              
              {/* Website Pages (accessible when authenticated) */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/security" element={<SecurityPage />} />
              
              {/* Admin (if user has admin role) */}
              {user?.role === 'admin' && (
                <Route path="/admin/*" element={<AdminDashboard />} />
              )}
              
              {/* Default redirect */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Suspense>
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

