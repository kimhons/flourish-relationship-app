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
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '../../contexts/AuthContext'

const MobileNav = ({ open, onOpenChange }) => {
  const location = useLocation()
  const { isSubscribed } = useAuth()

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const navigationItems = [
    {
      title: 'Home',
      href: '/dashboard',
      icon: Home,
      badge: null
    },
    {
      title: 'Discover',
      href: '/discover',
      icon: Compass,
      badge: null
    },
    {
      title: 'Matches',
      href: '/matches',
      icon: Heart,
      badge: '2'
    },
    {
      title: 'Messages',
      href: '/messages',
      icon: MessageCircle,
      badge: '5'
    },
    {
      title: 'Dr. Love',
      href: '/coaching',
      icon: Brain,
      badge: null,
      premium: true
    },
    {
      title: 'Resources',
      href: '/resources',
      icon: BookOpen,
      badge: null
    },
    {
      title: 'Profile',
      href: '/profile',
      icon: User,
      badge: null
    },
    {
      title: isSubscribed() ? 'Settings' : 'Premium',
      href: isSubscribed() ? '/settings' : '/premium',
      icon: isSubscribed() ? Settings : Crown,
      badge: null
    }
  ]

  const NavItem = ({ item }) => {
    const Icon = item.icon
    const active = isActive(item.href)
    const isPremiumFeature = item.premium && !isSubscribed()
    
    return (
      <Link 
        to={item.href} 
        className="flex-1"
        onClick={() => onOpenChange(false)}
      >
        <div className={cn(
          "flex flex-col items-center justify-center py-2 px-1 relative",
          "transition-colors duration-200",
          active && "text-primary",
          !active && "text-muted-foreground",
          isPremiumFeature && "opacity-60"
        )}>
          <div className="relative">
            <Icon className={cn(
              "h-5 w-5 mb-1",
              active && "text-primary"
            )} />
            {item.badge && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs"
              >
                {item.badge}
              </Badge>
            )}
            {item.premium && !isSubscribed() && (
              <Crown className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500" />
            )}
          </div>
          <span className={cn(
            "text-xs font-medium",
            active && "text-primary"
          )}>
            {item.title}
          </span>
          {active && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />
          )}
        </div>
      </Link>
    )
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="flex items-center justify-around px-2 py-1">
        {navigationItems.map((item) => (
          <NavItem key={item.href} item={item} />
        ))}
      </div>
    </div>
  )
}

export default MobileNav

