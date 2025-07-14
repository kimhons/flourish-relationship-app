import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Heart, 
  Users, 
  Target, 
  Gamepad2, 
  Smartphone, 
  Shield, 
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Zap,
  Award,
  Globe,
  MessageCircle,
  BarChart3,
  Calendar,
  Headphones,
  Camera,
  Lock,
  Cloud,
  Sparkles,
  TrendingUp,
  Crown,
  Lightbulb
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: Brain,
      title: "Dr. Love AI Coach",
      description: "Advanced AI coaching system with Mixture of Experts (MoE) technology",
      features: [
        "24/7 personal relationship coach",
        "Personality analysis and insights",
        "Real-time conversation guidance",
        "Behavioral pattern recognition",
        "Personalized growth plans",
        "Crisis intervention support"
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Target,
      title: "Smart Compatibility Matching",
      description: "Sophisticated AI analyzing 50+ compatibility factors",
      features: [
        "Advanced personality matching",
        "Values and lifestyle alignment",
        "Communication style compatibility",
        "Long-term relationship potential",
        "Attachment style analysis",
        "Relationship goals matching"
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Gamepad2,
      title: "Interactive Relationship Games",
      description: "Mind-bending games designed to deepen connection",
      features: [
        "Empathy Engine Escape Room",
        "Conflict Alchemy Transformation",
        "Intimacy Paradox Vault",
        "Memory Palace Time Travel",
        "Parallel Universe Lab",
        "Psychological insights and growth"
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Experience",
      description: "Seamless experience across iOS, Android, and web",
      features: [
        "Native iOS and Android apps",
        "Progressive web application",
        "Real-time synchronization",
        "Offline mode capabilities",
        "Push notifications",
        "Biometric authentication"
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
      image: "/api/placeholder/400/300"
    },
    {
      icon: BookOpen,
      title: "Premium Content Library",
      description: "Exclusive access to expert relationship content",
      features: [
        "Expert-authored articles",
        "Video workshops and courses",
        "Guided meditation library",
        "Relationship assessment tools",
        "Live coaching sessions",
        "Community discussions"
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      image: "/api/placeholder/400/300"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Enterprise-grade security protecting your data",
      features: [
        "End-to-end encryption",
        "Biometric authentication",
        "Privacy-first design",
        "GDPR compliance",
        "Secure data storage",
        "Regular security audits"
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
      image: "/api/placeholder/400/300"
    }
  ]

  const advancedFeatures = [
    {
      category: "AI-Powered Intelligence",
      items: [
        { icon: Brain, name: "Mixture of Experts AI", description: "Multiple specialized AI models for different relationship aspects" },
        { icon: MessageCircle, name: "Conversation Analysis", description: "Real-time analysis of communication patterns" },
        { icon: BarChart3, name: "Relationship Analytics", description: "Track progress and identify growth opportunities" },
        { icon: Lightbulb, name: "Predictive Insights", description: "AI predictions for relationship success and challenges" }
      ]
    },
    {
      category: "Interactive Experiences",
      items: [
        { icon: Gamepad2, name: "Psychological Games", description: "7 mind-bending games for relationship growth" },
        { icon: Globe, name: "Virtual Reality Dates", description: "Immersive VR experiences for long-distance couples" },
        { icon: Calendar, name: "Milestone Celebrations", description: "Automated celebration of relationship achievements" },
        { icon: Award, name: "Achievement System", description: "Gamified relationship skill development" }
      ]
    },
    {
      category: "Expert Content",
      items: [
        { icon: Headphones, name: "Live Coaching", description: "Real-time sessions with certified relationship coaches" },
        { icon: Play, name: "Video Library", description: "Comprehensive collection of relationship education" },
        { icon: BookOpen, name: "Research-Based Articles", description: "Latest relationship science and psychology" },
        { icon: Star, name: "Expert Workshops", description: "Interactive sessions with relationship experts" }
      ]
    },
    {
      category: "Premium Services",
      items: [
        { icon: Crown, name: "Concierge Support", description: "Personal relationship concierge for premium members" },
        { icon: Users, name: "VIP Community", description: "Exclusive access to premium member community" },
        { icon: TrendingUp, name: "Advanced Analytics", description: "Deep insights into relationship patterns and growth" },
        { icon: Zap, name: "Priority Features", description: "Early access to new features and capabilities" }
      ]
    }
  ]

  const comparisonFeatures = [
    {
      feature: "AI-Powered Coaching",
      flourish: "✓ Dr. Love AI with MoE technology",
      others: "✗ Basic chatbots or none"
    },
    {
      feature: "Relationship Games",
      flourish: "✓ 7 psychological games",
      others: "✗ Simple quizzes only"
    },
    {
      feature: "Cross-Platform",
      flourish: "✓ iOS, Android, Web with sync",
      others: "✗ Limited platform support"
    },
    {
      feature: "Expert Content",
      flourish: "✓ Thousands of resources",
      others: "✗ Basic articles only"
    },
    {
      feature: "Privacy & Security",
      flourish: "✓ Enterprise-grade encryption",
      others: "✗ Basic security measures"
    },
    {
      feature: "Success Rate",
      flourish: "✓ 95% meaningful connections",
      others: "✗ 60-70% typical rates"
    }
  ]

  const testimonials = [
    {
      name: "Sarah & Michael",
      quote: "The AI coaching is incredible. Dr. Love helped us understand each other in ways we never thought possible.",
      rating: 5,
      feature: "AI Coaching"
    },
    {
      name: "David & Emma",
      quote: "The relationship games are life-changing. We play them together and learn so much about ourselves.",
      rating: 5,
      feature: "Interactive Games"
    },
    {
      name: "Jessica Chen",
      quote: "Having access to expert content and live coaching has transformed my approach to relationships.",
      rating: 5,
      feature: "Premium Content"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Sparkles className="mr-1 h-3 w-3" />
              Comprehensive Features
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need for 
              <span className="flourish-text-gradient block">Lasting Love</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover the comprehensive features that make Flourish the world's most advanced 
              relationship platform. From AI-powered coaching to interactive games, we've built 
              everything you need to find, build, and maintain lasting love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flourish-gradient text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Core Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Six powerful pillars that transform your relationship journey
            </p>
          </div>

          <div className="space-y-16">
            {mainFeatures.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                    <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="flourish-gradient text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="overflow-hidden shadow-lg">
                    <div className="aspect-video bg-muted">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore the sophisticated tools that set Flourish apart
            </p>
          </div>

          <div className="space-y-12">
            {advancedFeatures.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-8 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Flourish Compares
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See why Flourish is the most comprehensive relationship platform
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">
                      <div className="flex items-center justify-center space-x-2">
                        <Heart className="h-4 w-4 text-primary" />
                        <span>Flourish</span>
                      </div>
                    </th>
                    <th className="text-center p-4 font-semibold">Other Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-green-600 font-medium">{row.flourish}</td>
                      <td className="p-4 text-center text-red-600 font-medium">{row.others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real feedback from couples who've transformed their relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.feature}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join over 2 million people who've discovered the power of comprehensive relationship tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="flourish-gradient text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage