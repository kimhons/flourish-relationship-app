import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Menu, 
  Search, 
  Bell, 
  MessageCircle, 
  Heart, 
  User, 
  Settings, 
  LogOut,
  Sun,
  Moon,
  Crown
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useNotification } from '../../contexts/NotificationContext'

const Navbar = ({ onMenuClick, isMobile }) => {
  const { user, logout, isSubscribed } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const { showSuccess } = useNotification()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogout = async () => {
    try {
      await logout()
      showSuccess('Logged out successfully')
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const getInitials = (name) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  // Mock notification counts (would come from real data)
  const notificationCount = 3
  const messageCount = 5
  const matchCount = 2

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-card/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu button and Logo */}
          <div className="flex items-center space-x-4">
            {isMobile && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onMenuClick}
                className="p-2"
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 flourish-gradient rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              {!isMobile && (
                <span className="text-xl font-bold flourish-text-gradient">
                  Flourish
                </span>
              )}
            </Link>
          </div>

          {/* Center - Search bar (desktop only) */}
          {!isMobile && (
            <div className="flex-1 max-w-lg mx-8">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search profiles, resources, or get coaching help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 w-full"
                />
              </form>
            </div>
          )}

          {/* Right side - Actions and Profile */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Quick Actions */}
            <div className="flex items-center space-x-1">
              {/* Matches */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/matches')}
                className="relative p-2"
              >
                <Heart className="h-5 w-5" />
                {matchCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {matchCount}
                  </Badge>
                )}
              </Button>

              {/* Messages */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/messages')}
                className="relative p-2"
              >
                <MessageCircle className="h-5 w-5" />
                {messageCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {messageCount}
                  </Badge>
                )}
              </Button>

              {/* Notifications */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/notifications')}
                className="relative p-2"
              >
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </div>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage 
                      src={user?.profilePicture} 
                      alt={user?.firstName || 'User'} 
                    />
                    <AvatarFallback className="flourish-gradient text-white">
                      {getInitials(user?.firstName + ' ' + user?.lastName)}
                    </AvatarFallback>
                  </Avatar>
                  {isSubscribed() && (
                    <Crown className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                    {isSubscribed() && (
                      <div className="flex items-center space-x-1 mt-1">
                        <Crown className="h-3 w-3 text-yellow-500" />
                        <span className="text-xs text-yellow-600 dark:text-yellow-400">
                          Premium Member
                        </span>
                      </div>
                    )}
                  </div>
                </DropdownMenuLabel>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                
                {!isSubscribed() && (
                  <DropdownMenuItem onClick={() => navigate('/premium')}>
                    <Crown className="mr-2 h-4 w-4" />
                    <span>Upgrade to Premium</span>
                  </DropdownMenuItem>
                )}
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobile && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 w-full"
              />
            </form>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

