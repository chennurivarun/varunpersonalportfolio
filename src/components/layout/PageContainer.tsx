
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
      {/* High-quality fixed background image */}
      <div className="fixed inset-0 -z-10">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover object-center"
          style={{
            imageRendering: 'auto',
            filter: 'none'
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
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
