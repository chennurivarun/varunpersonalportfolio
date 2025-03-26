
import React from "react";
import { ArrowRight, Briefcase, Code, FileText } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative py-20 bg-background">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(45deg, #8B5CF6 25%, transparent 25%, transparent 50%, #8B5CF6 50%, #8B5CF6 75%, transparent 75%, transparent)",
            backgroundSize: "16px 16px",
          }}
        ></div>
        <div className="container px-4 mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
              Hello, I'm <span className="text-primary">Varun</span>
              <span 
                className="absolute -bottom-1 left-0 w-full h-1" 
                style={{ 
                  backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                  backgroundSize: "8px 4px",
                }}
              ></span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI Product Architect & Researcher
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PixelButton asChild>
                <Link to="/about">About Me</Link>
              </PixelButton>
              <PixelButton asChild variant="outline">
                <Link to="/projects">View Projects</Link>
              </PixelButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative inline-block">
            What I Do
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PixelCard className="h-full">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg"
                  style={{
                    backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 50%, transparent 75%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1))",
                    backgroundSize: "8px 8px",
                  }}
                >
                  <Briefcase className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Product Architecture</h3>
                <p className="text-muted-foreground">
                  Designing and developing innovative AI-driven products and tools to enhance productivity.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="h-full">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg"
                  style={{
                    backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 50%, transparent 75%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1))",
                    backgroundSize: "8px 8px",
                  }}
                >
                  <Code className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Research</h3>
                <p className="text-muted-foreground">
                  Researching and developing cutting-edge AI technologies for advanced applications.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="h-full">
              <div className="flex flex-col items-center text-center">
                <div 
                  className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-lg"
                  style={{
                    backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 50%, transparent 75%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1))",
                    backgroundSize: "8px 8px",
                  }}
                >
                  <FileText className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">RPA Engineering</h3>
                <p className="text-muted-foreground">
                  Implementing robotic process automation to optimize business processes and improve efficiency.
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
              Featured Projects
              <span 
                className="absolute -bottom-1 left-0 w-full h-1" 
                style={{ 
                  backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                  backgroundSize: "8px 4px",
                }}
              ></span>
            </h2>
            <Link to="/projects" className="text-primary flex items-center gap-1 group">
              View All
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PixelCard className="h-full">
              <h3 className="text-xl font-semibold mb-3">AI Assistant based on GPT-3.5</h3>
              <p className="text-muted-foreground mb-4">
                A personal AI voice assistant utilizing GPT-3.5 to enhance user interaction through natural speech.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1">GPT-3.5</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1">NLP</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1">Python</span>
              </div>
              <PixelButton size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </PixelButton>
            </PixelCard>

            <PixelCard className="h-full">
              <h3 className="text-xl font-semibold mb-3">Zaya - AI Personal Assistant</h3>
              <p className="text-muted-foreground mb-4">
                An AI personal assistant capable of executing real-time tasks through voice commands and CMD control.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1">AI</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1">Voice Recognition</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1">Python</span>
              </div>
              <PixelButton size="sm" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </PixelButton>
            </PixelCard>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Index;
