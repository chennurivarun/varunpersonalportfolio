
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
  backgroundImage = "/lovable-uploads/8e5633f3-56df-45ee-8271-d364c247a631.png" 
}: PageContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed background image for all pages */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <Navbar />
      
      <main className={`flex-grow pt-16 ${className}`}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default PageContainer;
