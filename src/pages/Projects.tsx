
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "ai-assistant",
      title: "AI Assistant based on GPT-3.5",
      description: "I developed a personal AI voice assistant utilizing GPT-3.5 to enhance user interaction through natural speech. This assistant is capable of understanding and processing user commands, offering a 25% improvement in interaction quality.",
      tags: ["GPT-3.5", "NLP", "Python", "AI"],
      githubUrl: "https://github.com/chennurivarun/zaya-ai-assistant",
      image: "/lovable-uploads/61f3e5aa-1846-46df-9aed-ee7a1eb04a69.png",
    },
    {
      id: "image-cartoonify",
      title: "Image Cartoonify",
      description: "I created an image transformation application using OpenCV and deep learning techniques that allows users to convert images into cartoon-style graphics. The application was trained on a large dataset of images, achieving a 90% accuracy rate in cartoonification.",
      tags: ["OpenCV", "Deep Learning", "Image Processing", "Python"],
      githubUrl: "https://github.com/chennurivarun/image_cartooniify",
      image: "/lovable-uploads/d8cd174e-e891-41c0-8003-effbc27d153f.png",
    },
    {
      id: "crypto-price-prediction",
      title: "Crypto Price Prediction Model",
      description: "This project involved developing a deep learning model using Long Short-Term Memory (LSTM) networks and TensorFlow to predict cryptocurrency prices. By analyzing historical market data, the model provides high-accuracy predictions, useful for investors and analysts.",
      tags: ["LSTM", "TensorFlow", "Time Series", "Financial Modeling"],
      githubUrl: "https://github.com/chennurivarun/crypto-price-prediction",
      image: "/lovable-uploads/78d367ff-c6ad-4998-9440-0dce7fa43f95.png",
    },
    {
      id: "zaya-ai-assistant",
      title: "Zaya - AI Personal Assistant",
      description: "I built Zaya, an AI personal assistant capable of executing real-time tasks through voice commands and CMD control. Zaya offers a highly customizable user experience, allowing individuals to interact with their system hands-free.",
      tags: ["AI", "Voice Recognition", "Python", "Automation"],
      githubUrl: "https://github.com/chennurivarun/zaya-ai-assistant",
      image: "/lovable-uploads/0e7c778b-d87d-48be-9214-3978d3b8c22b.png",
    },
  ];

  return (
    <PageContainer>
      {/* Projects Header - Enhanced with consistent styling */}
      <section className="py-16 md:py-20 bg-background/30 backdrop-blur-sm relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: "linear-gradient(45deg, hsl(var(--pixel-color)) 25%, transparent 25%, transparent 50%, hsl(var(--pixel-color)) 50%, hsl(var(--pixel-color)) 75%, transparent 75%, transparent)",
            backgroundSize: "16px 16px",
          }}></div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block pixel-underline">
              My Projects
            </h1>
            <p className="text-lg animate-slide-in-bottom" style={{ animationDelay: "100ms" }}>
              Below are some of the projects I've worked on. Each project demonstrates different 
              skills and technologies, showcasing my experience in AI, machine learning, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid - Enhanced with better cards and animations */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <PixelCard 
                key={project.id} 
                className="h-full flex flex-col overflow-hidden animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link to={`/projects/${project.id}`} className="block h-48 mb-4 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="flex flex-col flex-grow p-4 glass-morphism">
                  <h3 className="text-xl font-semibold mb-3 pixel-underline inline-block">
                    <Link to={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-background/30 backdrop-blur-sm text-primary px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <PixelButton size="sm" variant="outline" asChild className="hover-scale">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-1" />
                        View Code
                      </a>
                    </PixelButton>
                    <PixelButton size="sm" variant="outline" asChild className="hover-scale">
                      <Link to={`/projects/${project.id}`}>
                        View Details
                      </Link>
                    </PixelButton>
                  </div>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Projects;
