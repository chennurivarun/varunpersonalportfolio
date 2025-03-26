
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight relative group">
          <span className="text-primary">Varun</span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300" style={{ 
            backgroundImage: "linear-gradient(to right, transparent 0%, transparent 50%, #8B5CF6 50%, #8B5CF6 100%)",
            backgroundSize: "8px 8px",
          }}></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span 
                  className="absolute -bottom-1 left-0 w-full h-1" 
                  style={{ 
                    backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                    backgroundSize: "8px 4px",
                  }}
                ></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-background border-t border-border">
          <div className="flex flex-col space-y-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-2 py-1 text-sm font-medium ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
