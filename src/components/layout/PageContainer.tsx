
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const PageContainer = ({ 
  children, 
  className = "",
  backgroundImage = "https://img.freepik.com/premium-photo/pixel-art-mystical-background_1093524-2023.jpg" 
}: PageContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] px-4 py-2 rounded-md bg-background text-foreground border border-border shadow"
      >
        Skip to content
      </a>
      {/* High-quality fixed background image */}
      <div className="fixed inset-0 -z-10">
        <img 
          src={backgroundImage} 
          alt="Pixel art mystical background image"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-background/60"></div>
        {/* Subtle aurora gradient overlay */}
        <div className="absolute inset-0 pointer-events-none aurora-overlay opacity-30 mix-blend-screen"></div>
      </div>
      
      <Navbar />
      
      <main id="main-content" className={`flex-grow pt-16 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageContainer;
