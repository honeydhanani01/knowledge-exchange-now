import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">SS</span>
              </div>
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                SkillSwap
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Connect, learn, and grow together. Exchange skills and build meaningful connections in our community.
            </p>
          </div>

          {/* Platform Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <div className="space-y-2 text-sm">
              <Link to="/browse" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Browse Skills
              </Link>
              <Link to="/how-it-works" className="block text-muted-foreground hover:text-foreground transition-smooth">
                How It Works
              </Link>
              <Link to="/safety" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Safety Guidelines
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Help Center
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Contact Us
              </Link>
              <Link to="/feedback" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Feedback
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <Link to="/privacy" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block text-muted-foreground hover:text-foreground transition-smooth">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SkillSwap. All rights reserved. Built with ❤️ for the learning community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;