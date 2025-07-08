import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { 
  Home, 
  Search, 
  PlusCircle, 
  Heart, 
  User,
  Compass,
  BarChart3,
  MessageCircle
} from 'lucide-react'

const NavigationBar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    {
      id: 'feed',
      label: 'Home',
      icon: Home,
      path: '/feed',
      color: 'text-pink-500'
    },
    {
      id: 'explore',
      label: 'Explore',
      icon: Compass,
      path: '/explore',
      color: 'text-purple-500'
    },
    {
      id: 'create',
      label: 'Create',
      icon: PlusCircle,
      path: '/create',
      color: 'text-green-500',
      special: true
    },
    {
      id: 'creator',
      label: 'Analytics',
      icon: BarChart3,
      path: '/creator',
      color: 'text-blue-500'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      path: '/profile',
      color: 'text-orange-500'
    }
  ]

  const handleNavigation = (path) => {
    navigate(path)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="flourish-nav">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path)
            
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path)}
                className={`flourish-nav-item ${active ? 'active' : ''} ${
                  item.special ? 'relative' : ''
                }`}
                aria-label={item.label}
              >
                {item.special ? (
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {active && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <Icon 
                        className={`w-6 h-6 transition-all duration-200 ${
                          active 
                            ? item.color 
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}
                      />
                      {active && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                      )}
                    </div>
                    <span 
                      className={`text-xs font-medium transition-all duration-200 ${
                        active 
                          ? item.color 
                          : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar

