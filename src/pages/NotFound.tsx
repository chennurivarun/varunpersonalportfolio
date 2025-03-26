
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelButton } from "@/components/ui/PixelButton";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageContainer>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative inline-block"
            style={{
              textShadow: "4px 4px 0 #8B5CF6",
              fontFamily: "monospace",
            }}>
            404
          </h1>
          <div 
            className="w-16 h-16 mx-auto mb-6"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 0%, transparent 25%, #8B5CF6 25%, #8B5CF6 50%, 
                transparent 50%, transparent 75%, #8B5CF6 75%, #8B5CF6 100%)
              `,
              backgroundSize: "8px 8px",
            }}
          ></div>
          <p className="text-xl md:text-2xl mb-8">Oops! This page doesn't exist in this pixelated world.</p>
          <PixelButton asChild>
            <Link to="/">Return to Home</Link>
          </PixelButton>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotFound;
