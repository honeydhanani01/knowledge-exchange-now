import { Users, Target, Shield, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Users,
    title: "Community Learning",
    description: "Connect with like-minded individuals and build meaningful learning relationships through skill exchange."
  },
  {
    icon: Target,
    title: "Skill Matching",
    description: "Our smart matching algorithm helps you find the perfect learning partners based on your interests and expertise."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Built with privacy and security in mind. Your data is protected, and all interactions are moderated."
  },
  {
    icon: Heart,
    title: "Collaborative Growth",
    description: "Learn together, grow together. Share knowledge and build a supportive community of learners."
  }
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former software engineer turned education advocate, passionate about democratizing learning."
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Full-stack developer with expertise in building scalable platforms for knowledge sharing."
  },
  {
    name: "Emily Rodriguez",
    role: "Community Manager",
    bio: "Community building expert focused on creating inclusive and supportive learning environments."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-6">About SkillSwap</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe that everyone has something valuable to teach and something exciting to learn. 
            SkillSwap connects people who want to exchange knowledge, creating a vibrant community 
            where learning is mutual, personal, and rewarding.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To democratize learning by creating a platform where knowledge flows freely between individuals. 
              We're building bridges between people who have skills to share and those eager to learn, 
              fostering a global community where everyone can both teach and learn.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose SkillSwap?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={feature.title} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <feature.icon className="h-8 w-8 text-primary" />
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

        {/* How It Works */}
        <Card className="mb-16 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">List the skills you can teach and what you'd like to learn</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Find Your Match</h3>
                <p className="text-muted-foreground">Browse and connect with people who complement your skills</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
                <p className="text-muted-foreground">Exchange knowledge and grow together through collaborative learning</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={member.name} className="text-center hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="text-center animate-fade-in bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already exchanging skills and building meaningful connections.
            </p>
            <div className="space-x-4">
              <a href="/signup" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Get Started
              </a>
              <a href="/browse" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Browse Skills
              </a>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}