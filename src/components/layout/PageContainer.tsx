
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ 
  children, 
  className = ""
}: PageContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] px-4 py-2 rounded-md bg-background text-foreground border border-border shadow"
      >
        Skip to content
      </a>
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
        <div className="absolute inset-0 aurora-overlay opacity-30 mix-blend-screen"></div>
      </div>
      
      <Navbar />
      
      <main id="main-content" className={`flex-grow pt-16 relative z-10 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageContainer;
