import React, { useState } from 'react'
import { 
  Heart, 
  X, 
  Star, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Coffee,
  Music,
  Camera,
  Book,
  Plane,
  Dumbbell,
  Filter,
  Sparkles,
  Eye,
  MessageCircle,
  Zap
} from 'lucide-react'
import { FlourishButton, FlourishCard, FlourishLogo } from '../../components/flourish'
import { Badge } from '@/components/ui/badge'

const DiscoverPage = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const profiles = [
    {
      id: 1,
      name: "Emma",
      age: 28,
      location: "San Francisco, CA",
      profession: "UX Designer",
      education: "Stanford University",
      photos: ["/api/placeholder/400/600", "/api/placeholder/400/600", "/api/placeholder/400/600"],
      bio: "Passionate about creating meaningful experiences through design. Love hiking, coffee, and exploring new places. Looking for someone to share adventures with! 🌟",
      interests: ["Design", "Hiking", "Coffee", "Travel", "Photography"],
      compatibility: 94,
      distance: "2 miles away",
      verified: true,
      premium: true
    },
    {
      id: 2,
      name: "Alex",
      age: 32,
      location: "New York, NY",
      profession: "Software Engineer",
      education: "MIT",
      photos: ["/api/placeholder/400/600", "/api/placeholder/400/600"],
      bio: "Tech enthusiast who loves building things that matter. Enjoy rock climbing, reading sci-fi, and cooking. Always up for deep conversations over good food! 🚀",
      interests: ["Technology", "Rock Climbing", "Reading", "Cooking", "Music"],
      compatibility: 89,
      distance: "5 miles away",
      verified: true,
      premium: false
    }
  ]

  const currentProfile = profiles[currentProfileIndex]

  const handleLike = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % profiles.length)
  }

  const handlePass = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % profiles.length)
  }

  const handleSuperLike = () => {
    setCurrentProfileIndex((prev) => (prev + 1) % profiles.length)
  }

  return (
    <div className="flourish-container" style={{ 
      padding: 'var(--flourish-space-xl)',
      minHeight: '100vh',
      background: 'var(--flourish-background)'
    }}>
      {/* Header */}
      <div className="flourish-flex-between flourish-mb-xl">
        <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-md)' }}>
          <FlourishLogo size={40} showText={false} />
          <div>
            <h1 className="flourish-heading-2">Discover</h1>
            <p className="flourish-body">Find your perfect match</p>
          </div>
        </div>
        <div className="flourish-flex" style={{ gap: 'var(--flourish-space-sm)' }}>
          <FlourishButton 
            variant="secondary" 
            icon={<Filter className="h-4 w-4" />}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </FlourishButton>
          <FlourishButton 
            variant="primary" 
            icon={<Sparkles className="h-4 w-4" />}
          >
            Boost Profile
          </FlourishButton>
        </div>
      </div>

      <div className="flourish-grid lg:flourish-grid-3" style={{ gap: 'var(--flourish-space-xl)' }}>
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <FlourishCard 
            shadow="2xl" 
            padding="none" 
            className="flourish-relative flourish-overflow-hidden flourish-scale-in"
            style={{ height: '700px' }}
          >
            {/* Profile Image */}
            <div className="flourish-relative flourish-h-full">
              <img 
                src={currentProfile.photos[0]} 
                alt={currentProfile.name}
                className="flourish-w-full flourish-h-full"
                style={{ objectFit: 'cover' }}
              />
              
              {/* Gradient Overlay */}
              <div className="flourish-absolute" style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                zIndex: 1
              }} />
              
              {/* Profile Info Overlay */}
              <div className="flourish-absolute flourish-p-xl" style={{
                bottom: 0,
                left: 0,
                right: 0,
                color: 'white',
                zIndex: 2
              }}>
                <div className="flourish-flex-between flourish-mb-md">
                  <div>
                    <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)', marginBottom: 'var(--flourish-space-xs)' }}>
                      <h2 className="flourish-heading-2" style={{ color: 'white' }}>
                        {currentProfile.name}, {currentProfile.age}
                      </h2>
                      {currentProfile.verified && (
                        <div className="flourish-p-xs flourish-rounded-full" style={{ 
                          background: 'var(--flourish-primary)',
                          color: 'white'
                        }}>
                          <Zap className="h-3 w-3" />
                        </div>
                      )}
                      {currentProfile.premium && (
                        <div className="flourish-p-xs flourish-rounded-full" style={{ 
                          background: 'var(--flourish-accent)',
                          color: 'white'
                        }}>
                          <Star className="h-3 w-3" />
                        </div>
                      )}
                    </div>
                    <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)', marginBottom: 'var(--flourish-space-sm)' }}>
                      <MapPin className="h-4 w-4" />
                      <span className="flourish-body-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                        {currentProfile.distance}
                      </span>
                    </div>
                  </div>
                  <div className="flourish-text-center">
                    <div className="flourish-p-md flourish-rounded-full flourish-mb-xs" style={{ 
                      background: 'var(--flourish-gradient-primary)',
                      color: 'white'
                    }}>
                      <span className="flourish-heading-6">{currentProfile.compatibility}%</span>
                    </div>
                    <p className="flourish-caption" style={{ color: 'rgba(255,255,255,0.8)' }}>
                      Match
                    </p>
                  </div>
                </div>
                
                <div className="flourish-flex" style={{ gap: 'var(--flourish-space-sm)', marginBottom: 'var(--flourish-space-sm)' }}>
                  <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                    <Briefcase className="h-4 w-4" />
                    <span className="flourish-body-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {currentProfile.profession}
                    </span>
                  </div>
                  <div className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-xs)' }}>
                    <GraduationCap className="h-4 w-4" />
                    <span className="flourish-body-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                      {currentProfile.education}
                    </span>
                  </div>
                </div>
                
                <p className="flourish-body-sm" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--flourish-space-md)' }}>
                  {currentProfile.bio}
                </p>
                
                <div className="flourish-flex" style={{ gap: 'var(--flourish-space-xs)', flexWrap: 'wrap' }}>
                  {currentProfile.interests.map((interest, index) => (
                    <Badge 
                      key={index} 
                      className="flourish-p-xs"
                      style={{ 
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: 'none'
                      }}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </FlourishCard>

          {/* Action Buttons */}
          <div className="flourish-flex-center flourish-mt-xl" style={{ gap: 'var(--flourish-space-lg)' }}>
            <FlourishButton 
              variant="secondary" 
              size="large"
              onClick={handlePass}
              className="flourish-rounded-full"
              style={{ 
                width: '60px', 
                height: '60px',
                padding: 0,
                background: 'white',
                border: '2px solid var(--flourish-border)',
                color: 'var(--flourish-text-secondary)'
              }}
            >
              <X className="h-6 w-6" />
            </FlourishButton>
            
            <FlourishButton 
              variant="primary" 
              size="large"
              onClick={handleSuperLike}
              className="flourish-rounded-full"
              style={{ 
                width: '50px', 
                height: '50px',
                padding: 0,
                background: 'var(--flourish-accent)',
                border: 'none'
              }}
            >
              <Star className="h-5 w-5" />
            </FlourishButton>
            
            <FlourishButton 
              variant="primary" 
              size="large"
              onClick={handleLike}
              className="flourish-rounded-full"
              style={{ 
                width: '60px', 
                height: '60px',
                padding: 0,
                background: 'var(--flourish-gradient-primary)',
                border: 'none'
              }}
            >
              <Heart className="h-6 w-6" />
            </FlourishButton>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-md)' }}>
          {/* Quick Stats */}
          <FlourishCard shadow="md" padding="large" className="flourish-fade-in">
            <h3 className="flourish-heading-5 flourish-mb-md">Today's Activity</h3>
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-sm)' }}>
              <div className="flourish-flex-between">
                <span className="flourish-body-sm">Profiles viewed</span>
                <span className="flourish-body-sm flourish-text-gradient">12</span>
              </div>
              <div className="flourish-flex-between">
                <span className="flourish-body-sm">Likes sent</span>
                <span className="flourish-body-sm flourish-text-gradient">8</span>
              </div>
              <div className="flourish-flex-between">
                <span className="flourish-body-sm">Super likes</span>
                <span className="flourish-body-sm flourish-text-gradient">2</span>
              </div>
            </div>
          </FlourishCard>

          {/* Boost Profile */}
          <FlourishCard gradient={true} shadow="lg" padding="large" className="flourish-slide-in-right">
            <div className="flourish-text-center">
              <Sparkles className="h-8 w-8 flourish-mb-md" style={{ margin: '0 auto', color: 'white' }} />
              <h3 className="flourish-heading-5 flourish-mb-sm" style={{ color: 'white' }}>
                Get More Matches
              </h3>
              <p className="flourish-body-sm flourish-mb-md" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Boost your profile to be seen by 10x more people
              </p>
              <FlourishButton 
                variant="secondary" 
                size="small"
                style={{ 
                  background: 'white',
                  color: 'var(--flourish-primary)'
                }}
              >
                Boost Now
              </FlourishButton>
            </div>
          </FlourishCard>

          {/* Recent Likes */}
          <FlourishCard shadow="md" padding="large" className="flourish-fade-in">
            <h3 className="flourish-heading-5 flourish-mb-md">Recent Likes</h3>
            <div className="flourish-flex-col" style={{ gap: 'var(--flourish-space-sm)' }}>
              {[1, 2, 3].map((index) => (
                <div key={index} className="flourish-flex" style={{ alignItems: 'center', gap: 'var(--flourish-space-sm)' }}>
                  <div 
                    className="flourish-rounded-full"
                    style={{ 
                      width: '40px', 
                      height: '40px',
                      background: 'var(--flourish-primary-lighter)'
                    }}
                  />
                  <div className="flourish-flex-1">
                    <p className="flourish-body-sm">Someone liked you</p>
                    <p className="flourish-caption">2 hours ago</p>
                  </div>
                  <Heart className="h-4 w-4" style={{ color: 'var(--flourish-primary)' }} />
                </div>
              ))}
            </div>
          </FlourishCard>
        </div>
      </div>
    </div>
  )
}

export default DiscoverPage
