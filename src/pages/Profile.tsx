import { useState } from "react";
import { Camera, Edit3, MapPin, Clock, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockProfile = {
  name: "Alex Thompson",
  email: "alex.thompson@email.com",
  location: "San Francisco, CA",
  avatar: "",
  rating: 4.8,
  totalSwaps: 12,
  skillsOffered: ["React", "TypeScript", "Node.js", "UI/UX Design"],
  skillsWanted: ["Python", "Machine Learning", "Data Science", "AWS"],
  availability: "Weekends & Evenings",
  bio: "Full-stack developer with 5+ years of experience. I love teaching React and learning new technologies. Always excited to connect with fellow developers!",
  isPublic: true
};

const mockFeedback = [
  {
    id: 1,
    fromUser: "Sarah Chen",
    rating: 5,
    comment: "Alex is an amazing teacher! Really helped me understand React hooks.",
    skill: "React",
    date: "2 weeks ago"
  },
  {
    id: 2,
    fromUser: "Marcus Johnson",
    rating: 5,
    comment: "Great mentor for TypeScript. Very patient and knowledgeable.",
    skill: "TypeScript", 
    date: "1 month ago"
  },
  {
    id: 3,
    fromUser: "Elena Rodriguez",
    rating: 4,
    comment: "Learned a lot about UI/UX principles. Highly recommend!",
    skill: "UI/UX Design",
    date: "2 months ago"
  }
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="relative group">
                <Avatar className="h-32 w-32">
                  <AvatarImage src={mockProfile.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary text-3xl font-bold">
                    {mockProfile.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="absolute bottom-0 right-0 h-8 w-8 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">{mockProfile.name}</h1>
                    <div className="flex items-center justify-center md:justify-start space-x-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {mockProfile.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {mockProfile.availability}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    <Edit3 className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      {renderStars(mockProfile.rating)}
                    </div>
                    <p className="text-sm text-muted-foreground">Rating: {mockProfile.rating}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{mockProfile.totalSwaps} Swaps</p>
                  </div>
                </div>

                <p className="text-muted-foreground max-w-2xl">{mockProfile.bio}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills and Feedback */}
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="feedback">Feedback ({mockFeedback.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-green-600 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Skills I Offer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockProfile.skillsOffered.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                <CardHeader>
                  <CardTitle className="text-blue-600 flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Skills I Want to Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockProfile.skillsWanted.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            {mockFeedback.map((feedback, index) => (
              <Card key={feedback.id} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {feedback.fromUser.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{feedback.fromUser}</h4>
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              {renderStars(feedback.rating)}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {feedback.skill}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{feedback.date}</p>
                      </div>
                      <p className="text-muted-foreground">{feedback.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}