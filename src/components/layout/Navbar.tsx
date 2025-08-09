
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
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

  // Accessibility: close on Escape and lock body scroll when menu is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);


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
      scrolled ? "bg-black/20 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        <NavLink 
          to="/" 
          className="text-xl md:text-2xl font-bold transition-transform hover:scale-105"
        >
          <span className="font-pixel text-sm md:text-base relative text-white">
            Varun
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white opacity-80"></span>
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
                  "px-3 py-2 rounded-md text-sm font-medium transition-all relative group text-white",
                  isActive
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, white 0%, white 50%, transparent 50%, transparent 100%)",
                        backgroundSize: "6px 3px",
                      }}
                    ></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button - Enhanced hamburger animation */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-3 bg-black/30 backdrop-blur-md rounded-lg text-white border border-white/20 transition-all hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 relative flex justify-center items-center">
              <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation - Glass Morphism Floating Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true" id="mobile-menu">
          {/* Background with same image and glass effect */}
          <div 
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage: 'url(https://img.freepik.com/premium-photo/pixel-art-mystical-background_1093524-2023.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl"></div>
          </div>
          
          {/* Floating Menu Container */}
          <div className="relative z-50 h-full flex items-center justify-center p-8" tabIndex={-1}>
            <div className="w-full max-w-sm mx-auto bg-black/40 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl p-8 animate-scale-in">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 backdrop-blur-sm"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="space-y-4">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block text-xl font-medium py-4 px-6 rounded-xl transition-all relative group",
                        "animate-slide-in-bottom opacity-0 bg-white/5 backdrop-blur-sm border border-white/10",
                        "hover:bg-white/10 hover:border-white/20",
                        isActive
                          ? "text-white bg-white/15 border-white/30"
                          : "text-white/90 hover:text-white"
                      )
                    }
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <span className="relative flex items-center justify-center">
                      {link.name}
                      <span className={cn(
                        "absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white w-0 transition-all duration-300 group-hover:w-8"
                      )}></span>
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
