import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Heart, 
  Brain, 
  Users, 
  BookOpen, 
  Star, 
  ArrowRight, 
  Play,
  CheckCircle,
  Sparkles,
  Target,
  Crown,
  MessageCircle,
  TrendingUp,
  Shield,
  Smartphone,
  Gamepad2,
  Zap,
  Award,
  Globe,
  Lock,
  Camera,
  Calendar,
  BarChart3,
  HeartHandshake,
  Lightbulb,
  Headphones
} from 'lucide-react'
import { FlourishButton, FlourishCard, FlourishLogo } from '../../components/flourish'
import { Badge } from '@/components/ui/badge'

const LandingPage = () => {
  const navigate = useNavigate()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: Brain,
      title: 'Dr. Love AI Coach',
      description: 'Advanced AI coaching system with Mixture of Experts (MoE) technology, providing personalized relationship guidance powered by cutting-edge psychology and relationship science.',
      color: 'text-purple-600',
      details: ['Real-time coaching', 'Personality analysis', 'Relationship patterns', 'Growth tracking']
    },
    {
      icon: Target,
      title: 'Smart Compatibility Matching',
      description: 'Our sophisticated AI analyzes 50+ compatibility factors including personality, values, communication styles, and life goals to find your perfect match.',
      color: 'text-pink-600',
      details: ['Advanced algorithms', 'Personality matching', 'Values alignment', 'Lifestyle compatibility']
    },
    {
      icon: Gamepad2,
      title: 'Interactive Relationship Games',
      description: 'Mind-bending relationship games including Empathy Engine, Conflict Alchemy, and Intimacy Paradox designed to deepen connection and understanding.',
      color: 'text-blue-600',
      details: ['7 unique games', 'Psychological insights', 'Couple challenges', 'Growth tracking']
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Experience',
      description: 'Full-featured mobile apps for iOS and Android with seamless web integration, offline capabilities, and push notifications.',
      color: 'text-green-600',
      details: ['iOS & Android apps', 'Web platform', 'Offline mode', 'Real-time sync']
    },
    {
      icon: BookOpen,
      title: 'Premium Content Library',
      description: 'Exclusive access to thousands of articles, videos, podcasts, meditations, and expert workshops from world-renowned relationship experts.',
      color: 'text-orange-600',
      details: ['Expert content', 'Video library', 'Guided meditations', 'Workshop access']
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with end-to-end encryption, biometric authentication, and comprehensive privacy controls.',
      color: 'text-red-600',
      details: ['End-to-end encryption', 'Biometric auth', 'Privacy controls', 'Secure messaging']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & Michael',
      story: 'Found each other through Flourish and got married 8 months later! The compatibility matching was incredible - we connected on levels we never knew existed.',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Married 2 years',
      location: 'New York, NY'
    },
    {
      name: 'Jessica Chen',
      story: 'Dr. Love helped me understand my attachment style and build healthier relationships. The AI coaching is like having a personal therapist available 24/7.',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Premium Member',
      location: 'San Francisco, CA'
    },
    {
      name: 'David & Emma',
      story: 'The relationship games are amazing! We play them together and learn so much about each other. The Empathy Engine game was life-changing.',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Dating 1 year',
      location: 'Austin, TX'
    },
    {
      name: 'Marcus Thompson',
      story: 'As someone who struggled with dating apps, Flourish was different. The AI coaching helped me improve my communication and build confidence.',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Elite Member',
      location: 'Chicago, IL'
    }
  ]

  const stats = [
    { number: '2M+', label: 'Happy Couples', description: 'Successful relationships formed' },
    { number: '95%', label: 'Match Success Rate', description: 'Meaningful connections made' },
    { number: '4.9/5', label: 'User Rating', description: 'App Store & Play Store' },
    { number: '50+', label: 'Countries', description: 'Global community' }
  ]

  const appFeatures = [
    {
      category: 'AI-Powered Features',
      items: [
        { name: 'Dr. Love AI Coach', icon: Brain, description: 'Personal relationship coach available 24/7' },
        { name: 'Smart Matching Algorithm', icon: Target, description: '50+ compatibility factors analyzed' },
        { name: 'Conversation Starter AI', icon: MessageCircle, description: 'Intelligent icebreakers and topics' },
        { name: 'Relationship Analytics', icon: BarChart3, description: 'Track your relationship growth' }
      ]
    },
    {
      category: 'Interactive Experiences',
      items: [
        { name: 'Relationship Games', icon: Gamepad2, description: '7 mind-bending games for couples' },
        { name: 'Virtual Reality Dates', icon: Globe, description: 'Immersive VR meeting spaces' },
        { name: 'Live Coaching Sessions', icon: Headphones, description: 'Real-time expert guidance' },
        { name: 'Milestone Celebrations', icon: Award, description: 'Celebrate relationship achievements' }
      ]
    },
    {
      category: 'Premium Content',
      items: [
        { name: 'Expert Workshops', icon: BookOpen, description: 'World-class relationship experts' },
        { name: 'Video Library', icon: Play, description: 'Educational content and exercises' },
        { name: 'Meditation Library', icon: Lightbulb, description: 'Mindfulness and relationship growth' },
        { name: 'Exclusive Events', icon: Calendar, description: 'Members-only virtual events' }
      ]
    }
  ]

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic profile creation',
        'Limited daily matches (5)',
        'Basic messaging',
        'Community resources access',
        'Basic compatibility analysis'
      ],
      cta: 'Get Started Free',
      popular: false,
      description: 'Perfect for exploring the platform'
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'month',
      features: [
        'Unlimited matches',
        'Dr. Love AI coaching',
        'Advanced compatibility analysis',
        'All relationship games',
        'Premium content library',
        'Priority support',
        'Read receipts',
        'Advanced search filters'
      ],
      cta: 'Start Free Trial',
      popular: true,
      description: 'Most popular for serious daters'
    },
    {
      name: 'Elite',
      price: '$39.99',
      period: 'month',
      features: [
        'Everything in Premium',
        'Personal relationship coach',
        'VIP customer support',
        'Exclusive events access',
        'Advanced analytics dashboard',
        'Concierge dating service',
        'Early feature access',
        'Custom coaching plans'
      ],
      cta: 'Go Elite',
      popular: false,
      description: 'Ultimate relationship experience'
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flourish-min-h-screen" style={{ background: 'var(--flourish-background)' }}>
      {/* Navigation */}
      <nav className="flourish-fixed flourish-w-full" style={{ 
        top: 0, 
        background: 'rgba(255, 255, 255, 0.9)', 
        backdropFilter: 'blur(8px)', 
        borderBottom: '1px solid var(--flourish-border-light)',
        zIndex: 'var(--flourish-z-fixed)'
      }}>
        <div className="flourish-container-lg">
          <div className="flourish-flex-between" style={{ height: '4rem' }}>
            <FlourishLogo size={32} showText={true} />
            
            <div className="flourish-hidden md:flourish-flex" style={{ gap: 'var(--flourish-space-xl)' }}>
              <Link to="#features" className="flourish-body" style={{ 
                color: 'var(--flourish-text-secondary)', 
                textDecoration: 'none',
                transition: 'var(--flourish-transition-fast)'
              }}>Features</Link>
              <Link to="#games" className="flourish-body" style={{ 
                color: 'var(--flourish-text-secondary)', 
                textDecoration: 'none',
                transition: 'var(--flourish-transition-fast)'
              }}>Games</Link>
              <Link to="#pricing" className="flourish-body" style={{ 
                color: 'var(--flourish-text-secondary)', 
                textDecoration: 'none',
                transition: 'var(--flourish-transition-fast)'
              }}>Pricing</Link>
              <Link to="/blog" className="flourish-body" style={{ 
                color: 'var(--flourish-text-secondary)', 
                textDecoration: 'none',
                transition: 'var(--flourish-transition-fast)'
              }}>Blog</Link>
            </div>
            
            <div className="flourish-flex" style={{ gap: 'var(--flourish-space-md)' }}>
              <Link to="/login">
                <FlourishButton variant="secondary">Sign In</FlourishButton>
              </Link>
              <Link to="/register">
                <FlourishButton variant="primary">Get Started</FlourishButton>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flourish-p-4xl flourish-pt-4xl">
        <div className="flourish-container-lg">
          <div className="flourish-text-center">
            <div className="flourish-mb-lg">
              <Badge className="flourish-p-sm" style={{ 
                background: 'var(--flourish-gradient-primary)', 
                color: 'var(--flourish-text-inverse)',
                borderRadius: 'var(--flourish-radius-full)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--flourish-space-xs)'
              }}>
                <Sparkles className="h-3 w-3" />
                #1 AI-Powered Dating Platform
              </Badge>
            </div>
            
            <div className="flourish-mb-xl">
              <FlourishLogo size={120} showText={false} />
            </div>
            
            <h1 className="flourish-heading-1 flourish-mb-lg" style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 'var(--flourish-line-height-tight)',
              maxWidth: '800px',
              margin: '0 auto var(--flourish-space-lg) auto'
            }}>
              Find Love with AI-Powered Coaching
            </h1>
            
            <p className="flourish-body-lg flourish-mb-2xl" style={{ 
              maxWidth: '600px',
              margin: '0 auto var(--flourish-space-2xl) auto'
            }}>
              Revolutionary relationship platform that helps you build stronger, more meaningful connections 
              through personalized coaching, interactive games, and community support.
            </p>
            
            <div className="flourish-flex flourish-flex-col sm:flourish-flex-row flourish-mb-2xl" style={{ 
              gap: 'var(--flourish-space-md)',
              justifyContent: 'center'
            }}>
              <FlourishButton 
                size="large" 
                variant="primary"
                onClick={() => navigate('/register')}
                icon={<ArrowRight className="h-5 w-5" />}
                iconPosition="right"
              >
                Start Your Journey Free
              </FlourishButton>
              
              <FlourishButton 
                size="large"
                variant="secondary"
                icon={<Play className="h-5 w-5" />}
                iconPosition="left"
              >
                Watch Demo
              </FlourishButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold flourish-text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six powerful pillars working together to transform your relationship journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {feature.details.map((detail, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {detail}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features for Modern Love
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the comprehensive tools that make Flourish the leading relationship platform
            </p>
          </div>

          <div className="space-y-16">
            {appFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-8 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Love Stories That Inspire
            </h2>
            <p className="text-xl text-muted-foreground">
              Real couples, real results, real happiness from around the world
            </p>
          </div>

          <Card className="p-8 text-center">
            <CardContent>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6 italic">
                "{testimonials[currentTestimonial].story}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].relationship} • {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Love Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you're ready for more advanced features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 flourish-gradient text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular ? 'flourish-gradient text-white' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate('/register')}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download the Flourish App
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Take your relationship journey with you - available on iOS, Android, and Web
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Mobile Apps</div>
                <div className="text-sm text-muted-foreground">iOS & Android</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Web Platform</div>
                <div className="text-sm text-muted-foreground">Any device</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="flourish-gradient text-white" onClick={() => navigate('/register')}>
              <Smartphone className="mr-2 h-5 w-5" />
              Download iOS App
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/register')}>
              <Smartphone className="mr-2 h-5 w-5" />
              Download Android App
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Love Life?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join over 2 million people who've found lasting love with Flourish's AI-powered platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="flourish-gradient text-white text-lg px-8 py-6"
              onClick={() => navigate('/register')}
            >
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => navigate('/login')}
            >
              Already have an account?
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flourish-gradient rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold flourish-text-gradient">Flourish</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                The world's most comprehensive relationship platform for finding and building lasting love through AI-powered matching and expert guidance.
              </p>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="text-xs">2M+ Couples</Badge>
                <Badge variant="secondary" className="text-xs">4.9★ Rating</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary">Features</Link></li>
                <li><Link to="/games" className="hover:text-primary">Relationship Games</Link></li>
                <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link to="/mobile" className="hover:text-primary">Mobile Apps</Link></li>
                <li><Link to="/security" className="hover:text-primary">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/community" className="hover:text-primary">Community</Link></li>
                <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
                <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
                <li><Link to="/safety" className="hover:text-primary">Safety Guidelines</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center text-sm text-muted-foreground mb-4 md:mb-0">
                &copy; 2024 Flourish. All rights reserved. Made with ❤️ for love.
              </p>
              <div className="flex space-x-4 text-sm text-muted-foreground">
                <span>🌟 4.9/5 Rating</span>
                <span>📱 iOS & Android</span>
                <span>🔒 Enterprise Security</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

