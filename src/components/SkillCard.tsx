import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, MapPin, Clock, ArrowUpRight } from "lucide-react";

interface SkillCardProps {
  user: {
    id: string;
    name: string;
    avatar?: string;
    location?: string;
    rating: number;
    reviewCount: number;
    skillsOffered: string[];
    skillsWanted: string[];
    availability: string;
  };
  onRequestSwap?: (userId: string) => void;
}

const SkillCard = ({ user, onRequestSwap }: SkillCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-smooth cursor-pointer bg-gradient-card border-0">
      <CardHeader className="space-y-4">
        {/* User Info */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold group-hover:text-primary transition-smooth">
                {user.name}
              </h3>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{user.rating}</span>
                <span>({user.reviewCount})</span>
              </div>
            </div>
          </div>
          <Button 
            variant="glow" 
            size="icon" 
            className="opacity-0 group-hover:opacity-100 transition-smooth"
            onClick={() => onRequestSwap?.(user.id)}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Location & Availability */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {user.location && (
            <div className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>{user.location}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{user.availability}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Skills Offered */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Offers</h4>
          <div className="flex flex-wrap gap-1">
            {user.skillsOffered.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {user.skillsOffered.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{user.skillsOffered.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Skills Wanted */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Wants to learn</h4>
          <div className="flex flex-wrap gap-1">
            {user.skillsWanted.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {user.skillsWanted.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{user.skillsWanted.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant="default" 
          className="w-full"
          onClick={() => onRequestSwap?.(user.id)}
        >
          Request Skill Swap
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkillCard;