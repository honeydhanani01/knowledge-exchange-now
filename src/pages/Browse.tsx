import { useState } from "react";
import { Search, Filter, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockUsers = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "San Francisco, CA",
    avatar: "",
    rating: 4.8,
    skillsOffered: ["React", "TypeScript", "UI/UX Design"],
    skillsWanted: ["Python", "Machine Learning"],
    availability: "Weekends"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    location: "New York, NY", 
    avatar: "",
    rating: 4.9,
    skillsOffered: ["Python", "Data Science", "Machine Learning"],
    skillsWanted: ["React", "Frontend Development"],
    availability: "Evenings"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Austin, TX",
    avatar: "",
    rating: 4.7,
    skillsOffered: ["Photography", "Adobe Creative Suite"],
    skillsWanted: ["Web Development", "SEO"],
    availability: "Flexible"
  }
];

export default function Browse() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.skillsOffered.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    ) || user.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLocation = !locationFilter || user.location.includes(locationFilter);
    const matchesAvailability = !availabilityFilter || user.availability === availabilityFilter;
    
    return matchesSearch && matchesLocation && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Browse Skills</h1>
          <p className="text-muted-foreground text-lg">Find people to exchange skills with</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search skills or names..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="San Francisco">San Francisco</SelectItem>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Austin">Austin</SelectItem>
              </SelectContent>
            </Select>

            <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Weekends">Weekends</SelectItem>
                <SelectItem value="Evenings">Evenings</SelectItem>
                <SelectItem value="Flexible">Flexible</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setSearchQuery("");
              setLocationFilter("");
              setAvailabilityFilter("");
            }}>
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user, index) => (
            <Card key={user.id} className="group hover-scale animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {user.location}
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-sm font-medium">{user.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm text-green-600 mb-2">Skills Offered</h4>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsOffered.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-blue-600 mb-2">Skills Wanted</h4>
                  <div className="flex flex-wrap gap-1">
                    {user.skillsWanted.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  Available: {user.availability}
                </div>

                <Button className="w-full" variant="glow">
                  Request Swap
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No users found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}