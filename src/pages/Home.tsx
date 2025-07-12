import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Star, Shield, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillCard from "@/components/SkillCard";

const Home = () => {
  // Mock data for featured users
  const featuredUsers = [
    {
      id: "1",
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b6c8d7fa?w=80&h=80&fit=crop&crop=face",
      location: "San Francisco, CA",
      rating: 4.9,
      reviewCount: 23,
      skillsOffered: ["React", "TypeScript", "UI/UX Design"],
      skillsWanted: ["French", "Guitar", "Photography"],
      availability: "Weekends"
    },
    {
      id: "2", 
      name: "Marcus Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      location: "New York, NY",
      rating: 4.8,
      reviewCount: 31,
      skillsOffered: ["Piano", "Music Theory", "Cooking"],
      skillsWanted: ["Spanish", "Web Development", "Photography"],
      availability: "Evenings"
    },
    {
      id: "3",
      name: "Elena Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      location: "Barcelona, Spain", 
      rating: 4.9,
      reviewCount: 18,
      skillsOffered: ["Spanish", "Graphic Design", "Digital Art"],
      skillsWanted: ["Python", "Data Science", "Mandarin"],
      availability: "Flexible"
    }
  ];

  const stats = [
    { label: "Active Members", value: "10,000+", icon: Users },
    { label: "Skills Exchanged", value: "25,000+", icon: BookOpen },
    { label: "Success Rate", value: "94%", icon: Star },
    { label: "Countries", value: "50+", icon: Globe }
  ];

  const features = [
    {
      icon: Zap,
      title: "Instant Matching",
      description: "Find the perfect skill partner based on your interests and availability."
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified profiles and community guidelines ensure a safe learning environment."
    },
    {
      icon: BookOpen,
      title: "Learn Anything",
      description: "From coding to cooking, music to languages - exchange any skill you can imagine."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="People learning together" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exchange Skills,
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Build Connections
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with passionate learners worldwide. Share what you know, learn what you love, 
            and build meaningful relationships through skill exchange.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                Browse Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose SkillSwap?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make skill exchange simple, safe, and rewarding for everyone.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 bg-gradient-card shadow-card hover:shadow-glow transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with amazing people ready to share their knowledge and learn new skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredUsers.map((user) => (
              <SkillCard 
                key={user.id} 
                user={user} 
                onRequestSwap={(id) => console.log(`Requesting swap with user ${id}`)}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/browse">
              <Button variant="default" size="lg">
                View All Members
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners already exchanging skills and building connections.
          </p>
          <Link to="/signup">
            <Button variant="hero" size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Join SkillSwap Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;