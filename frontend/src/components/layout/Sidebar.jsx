import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home,
  Compass,
  Heart,
  MessageCircle,
  Brain,
  User,
  BookOpen,
  Crown,
  Settings,
  BarChart3,
  Shield,
  Headphones,
  Sparkles,
  Target,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '../../contexts/AuthContext'

const Sidebar = ({ open, onOpenChange, className }) => {
  const location = useLocation()
  const { user, isSubscribed, hasRole } = useAuth()

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const navigationItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: Home,
      description: 'Your relationship journey overview'
    },
    {
      title: 'Discover',
      href: '/discover',
      icon: Compass,
      description: 'Find your perfect match',
      badge: 'New profiles'
    },
    {
      title: 'Matches',
      href: '/matches',
      icon: Heart,
      description: 'Your compatibility matches',
      badge: '2'
    },
    {
      title: 'Messages',
      href: '/messages',
      icon: MessageCircle,
      description: 'Chat with your connections',
      badge: '5'
    },
    {
      title: 'Dr. Love AI',
      href: '/coaching',
      icon: Brain,
      description: 'AI-powered relationship coaching',
      premium: true
    }
  ]

  const profileItems = [
    {
      title: 'My Profile',
      href: '/profile',
      icon: User,
      description: 'Manage your dating profile'
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: Settings,
      description: 'App preferences and privacy'
    }
  ]

  const resourceItems = [
    {
      title: 'Resources Hub',
      href: '/resources',
      icon: BookOpen,
      description: 'Articles, podcasts, and guides'
    },
    {
      title: 'Meditations',
      href: '/resources/meditations',
      icon: Sparkles,
      description: 'Mindfulness and relationship meditations'
    },
    {
      title: 'Exercises',
      href: '/resources/exercises',
      icon: Target,
      description: 'Relationship building exercises'
    },
    {
      title: 'Expert Sessions',
      href: '/resources/experts',
      icon: Headphones,
      description: 'Live sessions with relationship experts',
      premium: true
    }
  ]

  const premiumItems = [
    {
      title: 'Premium Features',
      href: '/premium',
      icon: Crown,
      description: 'Unlock advanced relationship tools'
    }
  ]

  const adminItems = [
    {
      title: 'Admin Dashboard',
      href: '/admin',
      icon: BarChart3,
      description: 'Platform analytics and management'
    },
    {
      title: 'Moderation',
      href: '/admin/moderation',
      icon: Shield,
      description: 'Content and user moderation'
    },
    {
      title: 'User Management',
      href: '/admin/users',
      icon: Users,
      description: 'Manage platform users'
    }
  ]

  const NavItem = ({ item, isActive }) => {
    const Icon = item.icon
    const isPremiumFeature = item.premium && !isSubscribed()
    
    return (
      <Link to={item.href} className="block">
        <Button
          variant={isActive ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start h-auto p-3 text-left",
            isActive && "bg-primary/10 text-primary border-primary/20",
            isPremiumFeature && "opacity-60"
          )}
        >
          <div className="flex items-center space-x-3 w-full">
            <div className="relative">
              <Icon className={cn(
                "h-5 w-5",
                isActive && "text-primary",
                isPremiumFeature && "text-muted-foreground"
              )} />
              {item.premium && !isSubscribed() && (
                <Crown className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className={cn(
                  "font-medium text-sm",
                  isActive && "text-primary"
                )}>
                  {item.title}
                </span>
                {item.badge && (
                  <Badge 
                    variant={isActive ? "default" : "secondary"} 
                    className="ml-2 text-xs"
                  >
                    {item.badge}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5 truncate">
                {item.description}
              </p>
            </div>
          </div>
        </Button>
      </Link>
    )
  }

  const NavSection = ({ title, items, showPremiumBadge = false }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between px-3 py-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
        {showPremiumBadge && !isSubscribed() && (
          <Crown className="h-3 w-3 text-yellow-500" />
        )}
      </div>
      {items.map((item) => (
        <NavItem 
          key={item.href} 
          item={item} 
          isActive={isActive(item.href)} 
        />
      ))}
    </div>
  )

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out",
      open ? "translate-x-0" : "-translate-x-full",
      className
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <Link to="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 flourish-gradient rounded-xl flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold flourish-text-gradient">
                Flourish
              </h1>
              <p className="text-xs text-muted-foreground">
                Relationship Platform
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 space-y-6">
          {/* Main Navigation */}
          <NavSection title="Main" items={navigationItems} />
          
          <Separator className="mx-4" />
          
          {/* Resources */}
          <NavSection 
            title="Resources" 
            items={resourceItems} 
            showPremiumBadge={true}
          />
          
          <Separator className="mx-4" />
          
          {/* Profile & Settings */}
          <NavSection title="Account" items={profileItems} />
          
          {/* Premium (if not subscribed) */}
          {!isSubscribed() && (
            <>
              <Separator className="mx-4" />
              <NavSection title="Upgrade" items={premiumItems} />
            </>
          )}
          
          {/* Admin (if admin user) */}
          {hasRole('admin') && (
            <>
              <Separator className="mx-4" />
              <NavSection title="Administration" items={adminItems} />
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          {isSubscribed() ? (
            <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg">
              <Crown className="h-4 w-4 text-yellow-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  Premium Active
                </p>
                <p className="text-xs text-yellow-600 dark:text-yellow-300">
                  Unlimited access to all features
                </p>
              </div>
            </div>
          ) : (
            <Link to="/premium">
              <Button className="w-full flourish-gradient text-white hover:opacity-90">
                <Crown className="mr-2 h-4 w-4" />
                Upgrade to Premium
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

