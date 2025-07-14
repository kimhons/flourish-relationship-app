import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Calendar, 
  Clock, 
  User, 
  Heart, 
  Star, 
  ArrowRight, 
  Search,
  Tag,
  Share2,
  BookOpen,
  TrendingUp,
  Award,
  Brain,
  Gamepad2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

const BlogPage = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Featured blog posts
  const featuredPosts = [
    {
      id: 1,
      title: "Five New Mind-Bending Relationship Games That Will Transform Your Love Life",
      excerpt: "Discover revolutionary interactive experiences designed to deepen relationship connections through psychological insights and gamification. These games go beyond traditional relationship exercises to create profound transformations.",
      content: `Revolutionary Interactive Experiences for Deep Relationship Growth

The five new games represent a revolutionary approach to relationship growth through interactive entertainment. Each game is designed to challenge conventional thinking about relationships while providing profound psychological insights and practical skill development.

## Game 1: The Empathy Engine Escape Room ($4.99)
### Revolutionary Perspective-Taking and Emotional Intelligence Adventure

The Empathy Engine Escape Room represents a groundbreaking fusion of escape room mechanics with advanced emotional intelligence training. Couples find themselves trapped in a mysterious facility where the only way to escape is by literally experiencing life through their partner's emotional and psychological perspective.

### Key Features:
- **Chamber 1: Emotional Archaeology Dig** - Discover artifacts representing significant emotional moments
- **Chamber 2: Perspective Prism Laboratory** - Navigate scenarios from your partner's viewpoint
- **Chamber 3: Future Fears and Dreams Decoder** - Identify and navigate deepest relationship fears and aspirations
- **Chamber 4: Communication Style Translator** - Communicate using your partner's style exclusively
- **Chamber 5: Empathy Integration Engine** - Seamlessly integrate both perspectives

## Game 2: Conflict Alchemy - The Transformation Chamber ($4.99)
### Revolutionary Conflict-to-Connection Conversion Experience

Conflict Alchemy transforms the very nature of disagreement from destructive force to creative catalyst. This game teaches couples to become "Conflict Alchemists" who can transform any disagreement into opportunities for deeper understanding and connection.

### Transform Through Five Chambers:
1. **Conflict Archaeology Laboratory** - Examine hidden layers beneath surface disagreements
2. **Emotional Alchemy Forge** - Convert negative emotions into positive connection fuel
3. **Communication Transmutation Workshop** - Transform destructive patterns into connection-building dialogue
4. **Pattern Interruption Engine** - Identify and interrupt destructive relationship patterns
5. **Master Alchemist Integration** - Complete transformation system mastery

## Game 3: The Intimacy Paradox - Vulnerability Vault ($4.99)
### Revolutionary Emotional Courage and Connection Adventure

Navigate the sophisticated psychological dance of intimacy that requires partners to be simultaneously strong and vulnerable, independent and connected. Learn to become "Intimacy Architects" who can consciously design emotional experiences.

### Vault Progression:
- **Safety Foundation Laboratory** - Create personalized emotional safety protocols
- **Vulnerability Calibration Chamber** - Match emotional openness to relationship capacity
- **Emotional Courage Training Ground** - Develop courage for authentic sharing
- **Intimacy Integration Engine** - Balance safety, connection, and individual strength
- **Master Architect Laboratory** - Design conscious intimacy experiences

## Game 4: Memory Palace of Love - Time Travel Adventure ($4.99)
### Revolutionary Relationship History and Pattern Recognition Journey

Travel through time to heal old wounds, celebrate forgotten victories, and create new meaning from shared experiences. Transform how past experiences influence present relationship dynamics.

### Time Travel Portals:
1. **Origin Story Observatory** - Explore individual and relationship origins
2. **Relationship Archaeology Expedition** - Examine key relationship moments
3. **Pattern Recognition Laboratory** - Identify recurring relationship themes
4. **Healing and Integration Chamber** - Heal unresolved emotional experiences
5. **Future Legacy Creation Studio** - Design your relationship's future story

## Game 5: The Parallel Universe Relationship Lab ($4.99)
### Revolutionary Choice Awareness and Conscious Relationship Creation

Explore alternative versions of your relationship based on different choices and approaches. Understand how daily choices create relationship reality and learn conscious relationship creation.

### Universe Exploration:
- **Choice Awareness Observatory** - Examine current relationship choice patterns
- **Alternative Reality Generator** - Explore different relationship possibilities
- **Conscious Creation Laboratory** - Learn intentional choice-making
- **Consequence Prediction Engine** - Predict outcomes of different approaches
- **Master Creator Integration** - Comprehensive relationship reality creation

## The Psychology Behind the Games

Each game integrates cutting-edge psychological research:
- **Emotional Intelligence Theory** (Daniel Goleman)
- **Attachment Theory** applications
- **Gottman Method** repair techniques
- **Nonviolent Communication** principles
- **Memory Reconsolidation** studies
- **Choice Theory** applications

## Dr. Love AI Integration

Throughout all games, Dr. Love AI provides:
- Real-time psychological insights
- Personalized coaching guidance
- Pattern recognition and analysis
- Relationship growth tracking
- Emergency relationship support

## Why These Games Work

The mind-bending element comes from unexpected psychological revelations and paradigm shifts during gameplay. Rather than simply teaching skills, these games create experiential learning that fundamentally changes how couples understand themselves and each other.

## Getting Started

Each game is available for $4.99, with exceptional replayability as your relationship evolves. The games adapt to your growing skills and changing dynamics, providing ongoing value throughout your relationship journey.

Start with the Empathy Engine if you want to understand your partner better, or try Conflict Alchemy if you're ready to transform disagreements into connection opportunities.

Transform your relationship through play, psychology, and profound connection.`,
      author: "Dr. Love AI Research Team",
      date: "2024-01-15",
      readTime: "12 min read",
      category: "relationship-games",
      tags: ["games", "psychology", "relationship-growth", "ai-coaching"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "The Science Behind AI-Powered Relationship Coaching",
      excerpt: "Explore how advanced AI technology, including Mixture of Experts (MoE) systems, is revolutionizing relationship coaching with personalized, science-backed guidance available 24/7.",
      author: "Dr. Sarah Chen",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "ai-technology",
      tags: ["ai", "coaching", "psychology", "technology"],
      featured: true,
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Building Lasting Love: The Psychology of Compatibility Matching",
      excerpt: "Discover how our advanced compatibility algorithm analyzes 50+ factors to create meaningful connections based on personality, values, and long-term relationship potential.",
      author: "Dr. Michael Rodriguez",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "relationship-science",
      tags: ["compatibility", "psychology", "matching", "science"],
      featured: true,
      image: "/api/placeholder/600/400"
    }
  ]

  // Additional blog posts
  const additionalPosts = [
    {
      id: 4,
      title: "Mobile Dating Revolution: How Cross-Platform Apps Are Changing Love",
      excerpt: "The evolution of dating apps from web-only to comprehensive cross-platform experiences that follow you everywhere.",
      author: "Jessica Martinez",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "technology",
      tags: ["mobile", "apps", "technology", "dating"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "Privacy in Digital Dating: Enterprise-Grade Security for Your Heart",
      excerpt: "How end-to-end encryption and biometric authentication protect your most intimate conversations and personal data.",
      author: "Alex Thompson",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "security",
      tags: ["privacy", "security", "encryption", "safety"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "The Future of Virtual Reality Dating: Immersive Connections",
      excerpt: "Exploring how VR technology is creating new possibilities for meaningful connections and virtual date experiences.",
      author: "Dr. Emily Watson",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "technology",
      tags: ["vr", "virtual-reality", "future", "innovation"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 7,
      title: "Attachment Styles in the Digital Age: Understanding Modern Love",
      excerpt: "How traditional attachment theory applies to online dating and building secure relationships in the digital world.",
      author: "Dr. David Kim",
      date: "2024-01-01",
      readTime: "11 min read",
      category: "relationship-science",
      tags: ["attachment", "psychology", "modern-dating", "relationships"],
      image: "/api/placeholder/400/300"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts', count: 7 },
    { id: 'relationship-games', name: 'Relationship Games', count: 1 },
    { id: 'ai-technology', name: 'AI Technology', count: 1 },
    { id: 'relationship-science', name: 'Relationship Science', count: 2 },
    { id: 'technology', name: 'Technology', count: 2 },
    { id: 'security', name: 'Security', count: 1 }
  ]

  const allPosts = [...featuredPosts, ...additionalPosts]
  
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flourish Relationship <span className="flourish-text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover the latest insights in relationship science, AI technology, and love psychology. 
              From interactive games to cutting-edge research, explore how modern technology is transforming relationships.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Star className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-bold">Featured Articles</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main featured post */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={featuredPosts[0].image} 
                    alt={featuredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredPosts[0].category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPosts[0].date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPosts[0].readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                    {featuredPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {featuredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {featuredPosts[0].author}
                      </span>
                    </div>
                    
                    <Link to={`/blog/${featuredPosts[0].id}`}>
                      <Button>
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Secondary featured posts */}
            <div className="space-y-6">
              {featuredPosts.slice(1).map(post => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4" />
              <span>{filteredPosts.length} articles found</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  {post.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {post.author}
                      </span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        Read
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-4">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        <Tag className="h-2 w-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <CardContent>
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Stay Updated on Relationship Science
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get the latest insights on relationship psychology, AI technology, and dating science 
                delivered to your inbox. Join thousands of couples improving their relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button className="flourish-gradient text-white">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                No spam, unsubscribe anytime. Privacy protected.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default BlogPage