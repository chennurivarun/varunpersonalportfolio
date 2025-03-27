
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
    )}>
      <nav className="container mx-auto px-4 flex justify-between items-center h-16">
        <NavLink 
          to="/" 
          className="text-xl md:text-2xl font-bold transition-transform hover:scale-105"
        >
          <span className="font-pixel text-sm md:text-base relative text-white">
            Varun
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-800 opacity-80"></span>
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
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-700"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #333 0%, #333 50%, transparent 50%, transparent 100%)",
                        backgroundSize: "6px 3px",
                      }}
                    ></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button - Enhanced with animation */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 ml-1 bg-black/40 backdrop-blur-md rounded-md text-white border border-gray-800/30 transition-all hover:bg-black/60"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative flex justify-center items-center">
              <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block w-5 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation - Glass morphism with floating effect */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-transparent"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          <div className="relative w-11/12 h-4/5 mx-auto rounded-xl bg-black/60 backdrop-blur-xl border border-gray-800/40 shadow-2xl animate-fade-in overflow-hidden">
            <div className="absolute top-4 right-4">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full bg-black/50 text-white transition-all hover:bg-black/70"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="h-full flex flex-col justify-center p-8">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "text-2xl font-medium py-4 transition-all relative group flex items-center",
                      "animate-slide-in-bottom",
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
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
                      "absolute -bottom-1 left-0 h-0.5 bg-gray-700 w-0 transition-all duration-300 group-hover:w-full",
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
