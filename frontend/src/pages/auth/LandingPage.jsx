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
  Shield
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const LandingPage = () => {
  const navigate = useNavigate()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: Brain,
      title: 'Dr. Love AI Coach',
      description: 'Get personalized relationship guidance powered by advanced AI and relationship science.',
      color: 'text-purple-600'
    },
    {
      icon: Heart,
      title: 'Smart Matching',
      description: 'Our AI analyzes 50+ compatibility factors to find your perfect match.',
      color: 'text-pink-600'
    },
    {
      icon: Users,
      title: 'Relationship Growth',
      description: 'Track your progress and develop stronger relationship skills with our growth system.',
      color: 'text-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Resources Hub',
      description: 'Access thousands of articles, podcasts, meditations, and expert content.',
      color: 'text-green-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah & Michael',
      story: 'Found each other through Flourish and got married 8 months later!',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Married 2 years'
    },
    {
      name: 'Jessica',
      story: 'Dr. Love helped me understand my attachment style and build healthier relationships.',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Premium Member'
    },
    {
      name: 'David & Emma',
      story: 'The compatibility matching is incredible. We connected on so many levels.',
      rating: 5,
      image: '/api/placeholder/60/60',
      relationship: 'Dating 1 year'
    }
  ]

  const stats = [
    { number: '2M+', label: 'Happy Couples' },
    { number: '95%', label: 'Match Success Rate' },
    { number: '4.9/5', label: 'User Rating' },
    { number: '50+', label: 'Countries' }
  ]

  const pricingPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Basic profile creation',
        'Limited daily matches',
        'Basic messaging',
        'Community resources'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: 'month',
      features: [
        'Unlimited matches',
        'Dr. Love AI coaching',
        'Advanced compatibility analysis',
        'Premium resources',
        'Priority support',
        'Read receipts'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Elite',
      price: '$39.99',
      period: 'month',
      features: [
        'Everything in Premium',
        'Personal relationship coach',
        'Exclusive events',
        'Advanced analytics',
        'Concierge support',
        'Early feature access'
      ],
      cta: 'Go Elite',
      popular: false
    }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flourish-gradient rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold flourish-text-gradient">Flourish</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button className="flourish-gradient text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge className="mb-4 flourish-gradient text-white">
              <Sparkles className="mr-1 h-3 w-3" />
              The Future of Relationships
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Love, Grow Together,
              <span className="flourish-text-gradient block">Build Forever</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The most comprehensive relationship platform combining AI-powered matching, 
              expert coaching, and proven growth tools to help you build lasting love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="flourish-gradient text-white text-lg px-8 py-6"
                onClick={() => navigate('/register')}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold flourish-text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four powerful pillars working together to transform your relationship journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Love Stories That Inspire
            </h2>
            <p className="text-xl text-muted-foreground">
              Real couples, real results, real happiness
            </p>
          </div>

          <Card className="p-8 text-center">
            <CardContent>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6">
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
                    {testimonials[currentTestimonial].relationship}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Love Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you're ready for more
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 flourish-gradient text-white">
                    Most Popular
                  </Badge>
                )}
                
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Love Life?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join millions who've found lasting love with Flourish
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
              <p className="text-muted-foreground text-sm">
                The most comprehensive relationship platform for finding and building lasting love.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/features" className="hover:text-primary">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
                <li><Link to="/security" className="hover:text-primary">Security</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/help" className="hover:text-primary">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                <li><Link to="/community" className="hover:text-primary">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-primary">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Flourish. All rights reserved. Made with ❤️ for love.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

