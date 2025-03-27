
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
  backgroundImage = "/lovable-uploads/43894c5e-5af3-4e03-bc32-b10c92bba094.png" 
}: PageContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed background image for all pages */}
      <div className="fixed inset-0 -z-10">
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
