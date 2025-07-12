import { useState } from "react";
import { Clock, CheckCircle, XCircle, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const mockRequests = {
  received: [
    {
      id: 1,
      fromUser: "Marcus Johnson",
      fromAvatar: "",
      skillOffered: "Python",
      skillWanted: "React",
      message: "Hi! I'd love to help you learn Python in exchange for React guidance. I have 5+ years of experience.",
      status: "pending",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      fromUser: "Elena Rodriguez", 
      fromAvatar: "",
      skillOffered: "Photography",
      skillWanted: "TypeScript",
      message: "I'm a professional photographer and would love to learn TypeScript from you!",
      status: "pending",
      timestamp: "1 day ago"
    }
  ],
  sent: [
    {
      id: 3,
      toUser: "Sarah Chen",
      toAvatar: "",
      skillOffered: "TypeScript",
      skillWanted: "UI/UX Design",
      message: "Hello! I'm experienced in TypeScript and would love to learn UI/UX design from you.",
      status: "pending",
      timestamp: "3 hours ago"
    },
    {
      id: 4,
      toUser: "David Park",
      toAvatar: "",
      skillOffered: "React",
      skillWanted: "Node.js",
      message: "Hi David! I can help you with React if you can teach me Node.js backend development.",
      status: "accepted",
      timestamp: "2 days ago"
    }
  ]
};

export default function Requests() {
  const [activeTab, setActiveTab] = useState("received");

  const handleAcceptRequest = (id: number) => {
    console.log("Accepting request:", id);
  };

  const handleRejectRequest = (id: number) => {
    console.log("Rejecting request:", id);
  };

  const handleCancelRequest = (id: number) => {
    console.log("Canceling request:", id);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-600"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "accepted":
        return <Badge variant="default" className="bg-green-600"><CheckCircle className="h-3 w-3 mr-1" />Accepted</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Skill Swap Requests</h1>
          <p className="text-muted-foreground text-lg">Manage your incoming and outgoing swap requests</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="received" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>Received ({mockRequests.received.length})</span>
            </TabsTrigger>
            <TabsTrigger value="sent" className="flex items-center space-x-2">
              <Send className="h-4 w-4" />
              <span>Sent ({mockRequests.sent.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-6">
            {mockRequests.received.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg">No incoming requests yet</p>
                </CardContent>
              </Card>
            ) : (
              mockRequests.received.map((request, index) => (
                <Card key={request.id} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={request.fromAvatar} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {request.fromUser.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{request.fromUser}</CardTitle>
                          <p className="text-sm text-muted-foreground">{request.timestamp}</p>
                        </div>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">They offer:</h4>
                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          {request.skillOffered}
                        </Badge>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                        <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-2">They want:</h4>
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {request.skillWanted}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Message:</h4>
                      <p className="text-muted-foreground">{request.message}</p>
                    </div>

                    {request.status === "pending" && (
                      <div className="flex space-x-3">
                        <Button 
                          variant="default" 
                          className="flex-1"
                          onClick={() => handleAcceptRequest(request.id)}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleRejectRequest(request.id)}
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="sent" className="space-y-6">
            {mockRequests.sent.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Send className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg">No sent requests yet</p>
                </CardContent>
              </Card>
            ) : (
              mockRequests.sent.map((request, index) => (
                <Card key={request.id} className="animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={request.toAvatar} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {request.toUser.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">To: {request.toUser}</CardTitle>
                          <p className="text-sm text-muted-foreground">{request.timestamp}</p>
                        </div>
                      </div>
                      {getStatusBadge(request.status)}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                        <h4 className="font-medium text-green-700 dark:text-green-400 mb-2">You offer:</h4>
                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                          {request.skillOffered}
                        </Badge>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                        <h4 className="font-medium text-blue-700 dark:text-blue-400 mb-2">You want:</h4>
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                          {request.skillWanted}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Your message:</h4>
                      <p className="text-muted-foreground">{request.message}</p>
                    </div>

                    {request.status === "pending" && (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => handleCancelRequest(request.id)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Cancel Request
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}