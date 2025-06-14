
import React from "react";
import { ArrowRight, Briefcase, Code, FileText } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <PageContainer>
      {/* Hero Section - Enhanced with dark theme and better contrast */}
      <section className="relative py-20 min-h-[80vh] flex items-center">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-pixel-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block text-white text-shadow-md pixel-underline">
              Hello, I'm <span className="text-white">Varun</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 text-shadow-sm animate-slide-in-bottom" style={{
              animationDelay: "100ms"
            }}>
              AI Product Architect & Researcher
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PixelButton asChild variant="outline" className="animate-slide-in-bottom hover-scale bg-black/40 backdrop-blur-lg border-white/30 text-white hover:bg-black/60" style={{
                animationDelay: "200ms"
              }}>
                <Link to="/about">About Me</Link>
              </PixelButton>
              <PixelButton asChild variant="outline" className="animate-slide-in-bottom hover-scale bg-black/40 backdrop-blur-lg border-white/30 text-white hover:bg-black/60" style={{
                animationDelay: "300ms"
              }}>
                <Link to="/projects">View Projects</Link>
              </PixelButton>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections - Enhanced with dark glass morphism */}
      <section className="py-16 bg-black/10 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center relative inline-block pixel-underline text-white">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PixelCard className="h-full glass-card animate-fade-in hover-scale bg-black/40 backdrop-blur-xl border-white/20" style={{
              animationDelay: "100ms"
            }}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 mb-4 flex items-center justify-center backdrop-blur-sm rounded-lg transition-transform hover:scale-105 pixel-border border-white/40">
                  <Briefcase className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">AI Product Architecture</h3>
                <p className="text-white/80">
                  Designing and developing innovative AI-driven products and tools to enhance productivity.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="h-full glass-card animate-fade-in hover-scale bg-black/40 backdrop-blur-xl border-white/20" style={{
              animationDelay: "200ms"
            }}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 mb-4 flex items-center justify-center backdrop-blur-sm rounded-lg transition-transform hover:scale-105 pixel-border border-white/40">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">AI Research</h3>
                <p className="text-white/80">
                  Researching and developing cutting-edge AI technologies for advanced applications.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="h-full glass-card animate-fade-in hover-scale bg-black/40 backdrop-blur-xl border-white/20" style={{
              animationDelay: "300ms"
            }}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 mb-4 flex items-center justify-center backdrop-blur-sm rounded-lg transition-transform hover:scale-105 pixel-border border-white/40">
                  <FileText className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">RPA Engineering</h3>
                <p className="text-white/80">
                  Implementing robotic process automation to optimize business processes and improve efficiency.
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Enhanced with dark theme */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold relative inline-block pixel-underline text-white">
              Featured Projects
            </h2>
            <Link to="/projects" className="text-white flex items-center gap-1 group hover-scale">
              View All
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PixelCard className="h-full overflow-hidden animate-slide-in-bottom hover-scale bg-black/40 backdrop-blur-xl border-white/20" style={{
              animationDelay: "100ms"
            }}>
              <div className="h-48 mb-4 overflow-hidden">
                <img alt="AI Assistant based on GPT-3.5" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="/lovable-uploads/61f3e5aa-1846-46df-9aed-ee7a1eb04a69.png" />
              </div>
              <div className="p-4 glass-morphism bg-black/30">
                <h3 className="text-xl font-semibold mb-3 text-white">AI Assistant based on GPT-3.5</h3>
                <p className="text-white/80 mb-4">
                  A personal AI voice assistant utilizing GPT-3.5 to enhance user interaction through natural speech.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 border border-white/20 rounded">GPT-3.5</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 border border-white/20 rounded">NLP</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 border border-white/20 rounded">Python</span>
                </div>
                <div className="flex justify-between">
                  <PixelButton size="sm" variant="outline" asChild className="hover-scale bg-black/40 backdrop-blur-lg border-white/30 text-white hover:bg-black/60">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </PixelButton>
                  <PixelButton size="sm" variant="outline" asChild className="hover-scale bg-black/40 backdrop-blur-lg border-white/30 text-white hover:bg-black/60">
                    <Link to="/projects/ai-assistant">Details</Link>
                  </PixelButton>
                </div>
              </div>
            </PixelCard>

            <PixelCard className="h-full overflow-hidden animate-slide-in-bottom hover-scale bg-black/40 backdrop-blur-xl border-white/20" style={{
              animationDelay: "200ms"
            }}>
              <div className="h-48 mb-4 overflow-hidden">
                <img src="/lovable-uploads/0e7c778b-d87d-48be-9214-3978d3b8c22b.png" alt="Zaya - AI Personal Assistant" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 glass-morphism bg-black/30">
                <h3 className="text-xl font-semibold mb-3 text-white">Zaya - AI Personal Assistant</h3>
                <p className="text-white/80 mb-4">
                  An AI personal assistant capable of executing real-time tasks through voice commands and CMD control.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 border border-white/20 rounded">AI</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 border border-white/20 rounded">Voice Recognition</span>
                  <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2 py-1 border border-white/20 rounded">Python</span>
                </div>
                <div className="flex justify-between">
                  <PixelButton size="sm" variant="outline" asChild className="hover-scale bg-black/40 backdrop-blur-lg border-white/30 text-white hover:bg-black/60">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      View on GitHub
                    </a>
                  </PixelButton>
                  <PixelButton size="sm" variant="outline" asChild className="hover-scale bg-black/40 backdrop-blur-lg border-white/30 text-white hover:bg-black/60">
                    <Link to="/projects/zaya-ai-assistant">Details</Link>
                  </PixelButton>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Index;
