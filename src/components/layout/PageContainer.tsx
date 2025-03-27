
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
    <div className="flex flex-col min-h-screen relative bg-black">
      {/* Fixed background image for all pages */}
      <div className="fixed inset-0 -z-10">
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
          style={{
            imageRendering: "auto",
          }}
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
