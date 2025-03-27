
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow pt-16 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageContainer;
