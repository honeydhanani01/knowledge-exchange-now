import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // TODO: Replace with actual auth state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">SS</span>
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            SkillSwap
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/browse" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Browse Skills
          </Link>
          <Link 
            to="/requests" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            My Requests
          </Link>
          <Link 
            to="/profile" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            Profile
          </Link>
          <Link 
            to="/about" 
            className="text-muted-foreground hover:text-foreground transition-smooth"
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="hero">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <Link 
              to="/browse" 
              className="block text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Skills
            </Link>
            <Link 
              to="/requests" 
              className="block text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              My Requests
            </Link>
            <Link 
              to="/profile" 
              className="block text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link 
              to="/about" 
              className="block text-muted-foreground hover:text-foreground transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            
            {!isLoggedIn && (
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full">Login</Button>
                </Link>
                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" className="w-full">Get Started</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;