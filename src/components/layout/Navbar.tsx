
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        <NavLink 
          to="/" 
          className="text-xl md:text-2xl font-bold transition-transform hover:scale-105"
        >
          <span className="font-pixel text-sm md:text-base relative">
            Varun
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pixel opacity-80"></span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all relative group",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-pixel"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, hsl(var(--pixel-color)) 0%, hsl(var(--pixel-color)) 50%, transparent 50%, transparent 100%)",
                        backgroundSize: "6px 3px",
                      }}
                    ></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
          <div className="pl-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button - Enhanced with animation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 ml-1 bg-background/40 backdrop-blur-sm rounded-md text-foreground border border-border/30 transition-all hover:bg-background/60"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative flex justify-center items-center">
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Full screen with enhanced animations */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 py-16 h-full flex flex-col">
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full text-foreground transition-colors hover:bg-accent/20"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-2xl font-medium py-4 transition-all relative group flex items-center",
                      "animate-slide-in-bottom opacity-0", // Animation classes
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )
                  }
                  style={{ 
                    animationDelay: `${index * 75}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <span className="relative">
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-0 h-0.5 bg-pixel w-0 transition-all duration-300 group-hover:w-full",
                      "bg-gradient-to-r from-foreground to-foreground/70"
                    )}></span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
