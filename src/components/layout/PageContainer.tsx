
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NeuralBackground } from "@/components/ui/NeuralBackground";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundVariant?: "matrix" | "neural" | "cyber" | "holographic";
  showParticles?: boolean;
}

const PageContainer = ({ 
  children, 
  className = "",
  backgroundVariant = "neural",
  showParticles = true
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
      
      {/* AI Neural Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />
        
        {/* Neural network background */}
        <NeuralBackground 
          variant={backgroundVariant} 
          intensity="medium" 
          animated={showParticles}
          className="opacity-80"
        />
        
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
