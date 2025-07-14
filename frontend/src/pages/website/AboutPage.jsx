import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  Brain, 
  Globe, 
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Lightbulb,
  TrendingUp,
  Shield,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer & Relationship Psychologist",
      bio: "Pioneer in AI-powered relationship coaching with 15+ years in relationship psychology. Led development of Dr. Love AI system.",
      image: "/api/placeholder/300/300",
      expertise: ["AI Psychology", "Relationship Science", "Machine Learning"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@flourish-app.com"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "CEO & Co-Founder",
      bio: "Serial entrepreneur passionate about using technology to solve human connection challenges. Previous exits in SaaS and mobile.",
      image: "/api/placeholder/300/300",
      expertise: ["Product Strategy", "Business Development", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@flourish-app.com"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Science Officer",
      bio: "Relationship researcher and author of 'Digital Love'. Expert in attachment theory and modern relationship dynamics.",
      image: "/api/placeholder/300/300",
      expertise: ["Attachment Theory", "Research", "Publishing"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@flourish-app.com"
      }
    },
    {
      name: "Alex Thompson",
      role: "Chief Technology Officer",
      bio: "Full-stack architect with expertise in AI systems, mobile development, and enterprise security. Built scalable platforms for millions.",
      image: "/api/placeholder/300/300",
      expertise: ["AI Systems", "Mobile Development", "Security"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@flourish-app.com"
      }
    },
    {
      name: "Dr. David Kim",
      role: "Head of Research",
      bio: "Clinical psychologist specializing in couples therapy and relationship assessment. Developed our compatibility algorithm.",
      image: "/api/placeholder/300/300",
      expertise: ["Couples Therapy", "Assessment", "Algorithm Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@flourish-app.com"
      }
    },
    {
      name: "Jessica Martinez",
      role: "Head of User Experience",
      bio: "UX designer focused on creating intuitive, emotionally intelligent interfaces. Expert in dating app psychology.",
      image: "/api/placeholder/300/300",
      expertise: ["UX Design", "User Psychology", "Interface Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "jessica@flourish-app.com"
      }
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "Flourish founded with mission to revolutionize relationships through AI",
      icon: Lightbulb
    },
    {
      year: "2023",
      title: "Dr. Love AI Launch",
      description: "First AI relationship coach powered by Mixture of Experts technology",
      icon: Brain
    },
    {
      year: "2023",
      title: "Mobile Apps",
      description: "iOS and Android apps launched with cross-platform synchronization",
      icon: Globe
    },
    {
      year: "2024",
      title: "2M+ Users",
      description: "Reached 2 million users across 50+ countries worldwide",
      icon: Users
    },
    {
      year: "2024",
      title: "Interactive Games",
      description: "Launched revolutionary relationship games with psychological insights",
      icon: Award
    },
    {
      year: "2024",
      title: "Enterprise Security",
      description: "Achieved enterprise-grade security with end-to-end encryption",
      icon: Shield
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Love-First Approach",
      description: "Every decision is made with genuine care for helping people find and maintain lasting love.",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Science-Backed",
      description: "All features are grounded in peer-reviewed research and evidence-based psychology.",
      color: "text-blue-500"
    },
    {
      icon: Shield,
      title: "Privacy & Safety",
      description: "Your most intimate data deserves the highest level of protection and respect.",
      color: "text-green-500"
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Building a platform where everyone can find love, regardless of background or identity.",
      color: "text-purple-500"
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Continuously pushing boundaries to create new possibilities for human connection.",
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Believing that all relationships can improve with the right tools and guidance.",
      color: "text-orange-500"
    }
  ]

  const stats = [
    { number: "2M+", label: "Active Users", description: "People finding love daily" },
    { number: "50+", label: "Countries", description: "Global reach" },
    { number: "95%", label: "Success Rate", description: "Meaningful connections" },
    { number: "4.9/5", label: "User Rating", description: "App stores" },
    { number: "24/7", label: "AI Support", description: "Always available" },
    { number: "99.9%", label: "Uptime", description: "Reliable service" }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Heart className="mr-1 h-3 w-3" />
              About Flourish
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Love Through 
              <span className="flourish-text-gradient block">Technology & Science</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              We're on a mission to help every person find and build lasting love through AI-powered 
              matching, expert coaching, and evidence-based relationship science. Founded by relationship 
              experts and technologists, we're building the future of human connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="flourish-gradient text-white">
                Join Our Mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize access to world-class relationship guidance through AI technology, 
                making expert-level coaching and evidence-based relationship science available to 
                everyone, everywhere, at any time.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that with the right tools, guidance, and support, every person can 
                build the loving, lasting relationship they deserve. Our technology breaks down 
                barriers to access, cost, and geography that have traditionally limited relationship support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Accessibility</h3>
                    <p className="text-sm text-muted-foreground">Expert guidance available 24/7 at affordable prices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Science-Based</h3>
                    <p className="text-sm text-muted-foreground">Every feature grounded in peer-reviewed research</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Global Impact</h3>
                    <p className="text-sm text-muted-foreground">Serving couples across 50+ countries and cultures</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm font-medium text-foreground mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Flourish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <value.icon className={`h-6 w-6 ${value.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in building the world's most comprehensive relationship platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/20 h-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <milestone.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{milestone.title}</h3>
                            <p className="text-sm text-muted-foreground">{milestone.year}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-full border-4 border-background z-10">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class experts in psychology, technology, and relationship science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
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
          <h2 className="text-3xl font-bold mb-4">Join Us in Transforming Love</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're looking for love or want to help others find it, we'd love to have you be part of our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="flourish-gradient text-white">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/careers">
              <Button size="lg" variant="outline">
                View Open Positions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage