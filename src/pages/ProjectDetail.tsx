
import React from "react";
import { useParams } from "react-router-dom";
import { ExternalLink, Github, Calendar, Tag, Code, Users, Laptop } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";

// Sample project data - in a real app, you would fetch this from an API
const projects = [
  {
    id: "ai-assistant",
    title: "AI Assistant based on GPT-3.5",
    description: "A personal AI voice assistant utilizing GPT-3.5 to enhance user interaction through natural speech. This assistant is capable of understanding and processing user commands, offering a 25% improvement in interaction quality. By implementing custom natural language processing (NLP) models, I was able to make communication more seamless and responsive.",
    image: "/lovable-uploads/61f3e5aa-1846-46df-9aed-ee7a1eb04a69.png",
    date: "January 2023",
    technologies: ["GPT-3.5", "NLP", "Python", "Voice Recognition"],
    features: [
      "Natural language processing with GPT-3.5",
      "Voice command recognition and execution",
      "Contextual conversation memory",
      "Customizable responses and behaviors",
      "Multi-language support"
    ],
    challenges: [
      "Optimizing voice recognition accuracy in noisy environments",
      "Reducing latency in API responses for real-time interaction",
      "Managing context windows efficiently for coherent conversations"
    ],
    outcome: "The project resulted in a highly responsive voice assistant with a 25% improvement in interaction quality compared to conventional assistants. It can handle complex queries and maintain context throughout conversations.",
    links: {
      github: "https://github.com",
      live: null
    }
  },
  {
    id: "image-cartoonify",
    title: "Image Cartoonify",
    description: "An image transformation application using OpenCV and deep learning techniques that allows users to convert images into cartoon-style graphics. The application was trained on a large dataset of images, achieving a 90% accuracy rate in cartoonification. This project showcases the power of machine learning in image manipulation.",
    image: "/lovable-uploads/61f3e5aa-1846-46df-9aed-ee7a1eb04a69.png",
    date: "March 2023",
    technologies: ["OpenCV", "Deep Learning", "Python", "Image Processing"],
    features: [
      "Multiple cartoon style options",
      "Batch processing for multiple images",
      "Adjustable cartoonification parameters",
      "Real-time preview of transformations",
      "Support for various image formats"
    ],
    challenges: [
      "Training the model on diverse image types for consistent results",
      "Balancing processing speed with transformation quality",
      "Implementing efficient edge detection algorithms"
    ],
    outcome: "The application achieved a 90% accuracy rate in cartoonification across diverse image types, with positive user feedback on the quality and variety of transformation styles available.",
    links: {
      github: "https://github.com",
      live: "https://demo-site.com"
    }
  },
  {
    id: "crypto-price-prediction",
    title: "Crypto Price Prediction Model",
    description: "A deep learning model using Long Short-Term Memory (LSTM) networks and TensorFlow to predict cryptocurrency prices. By analyzing historical market data, the model provides high-accuracy predictions, which can be useful for investors and analysts. This project demonstrates the ability to work with time-series data and build reliable financial models.",
    image: "/lovable-uploads/78d367ff-c6ad-4998-9440-0dce7fa43f95.png",
    date: "June 2023",
    technologies: ["LSTM", "TensorFlow", "Python", "Time-Series Analysis"],
    features: [
      "Multiple cryptocurrency support (Bitcoin, Ethereum, etc.)",
      "Configurable prediction timeframes",
      "Historical data visualization",
      "Accuracy metrics and performance analysis",
      "Automated data retrieval from exchanges"
    ],
    challenges: [
      "Managing volatility in cryptocurrency markets",
      "Incorporating market sentiment analysis",
      "Dealing with gaps and anomalies in historical data"
    ],
    outcome: "The model achieved an average prediction accuracy of 83% for short-term price movements, providing valuable insights for portfolio management and trading strategies.",
    links: {
      github: "https://github.com",
      live: null
    }
  },
  {
    id: "zaya-ai-assistant",
    title: "Zaya - AI Personal Assistant",
    description: "An AI personal assistant capable of executing real-time tasks through voice commands and CMD control. Zaya offers a highly customizable user experience, allowing individuals to interact with their system hands-free. It features advanced speech interaction and real-time task execution, making everyday operations smoother.",
    image: "/lovable-uploads/0e7c778b-d87d-48be-9214-3978d3b8c22b.png",
    date: "September 2023",
    technologies: ["AI", "Voice Recognition", "Python", "Command Line"],
    features: [
      "System commands execution via voice",
      "Application launching and control",
      "Email and message composition",
      "Calendar management and reminders",
      "Custom command programming interface"
    ],
    challenges: [
      "Ensuring secure execution of system commands",
      "Cross-platform compatibility issues",
      "Real-time response optimization"
    ],
    outcome: "Zaya successfully reduced the time spent on routine computer tasks by 40% for users, with particularly strong performance in multitasking scenarios and accessibility improvements for users with limited mobility.",
    links: {
      github: "https://github.com",
      live: null
    }
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <PageContainer>
        <div className="container px-4 py-12 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground mt-4">The project you're looking for doesn't exist.</p>
          <PixelButton asChild className="mt-8">
            <a href="/projects">Back to Projects</a>
          </PixelButton>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
          {project.title}
          <span 
            className="absolute -bottom-1 left-0 w-full h-1" 
            style={{ 
              backgroundImage: "linear-gradient(to right, hsl(var(--pixel-color)) 0%, hsl(var(--pixel-color)) 50%, transparent 50%, transparent 100%)",
              backgroundSize: "8px 4px",
            }}
          ></span>
        </h1>
        
        <div className="mb-8">
          <div 
            className="w-full h-[400px] relative overflow-hidden mb-8"
            style={{
              border: "3px solid hsl(var(--pixel-color))",
              boxShadow: "10px 10px 0 rgba(var(--pixel-color) / 0.3)",
            }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Pixel corner decorations */}
            <div className="absolute top-0 left-0 w-6 h-6 bg-pixel"></div>
            <div className="absolute top-0 right-0 w-6 h-6 bg-pixel"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-pixel"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-pixel"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar size={16} className="mr-1" />
              {project.date}
            </div>
            
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github size={16} className="mr-1" />
                GitHub Repository
              </a>
            )}
            
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink size={16} className="mr-1" />
                Live Demo
              </a>
            )}
          </div>
          
          <div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          >
            <PixelCard className="p-4 h-full">
              <div className="flex flex-col h-full items-center text-center">
                <Code className="text-pixel mb-2" size={24} />
                <h3 className="font-semibold">Technologies</h3>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs rounded-none"
                      style={{
                        backgroundColor: "hsl(var(--pixel-color) / 0.1)",
                        color: "hsl(var(--pixel-color))",
                        border: "2px solid hsl(var(--pixel-color))",
                        boxShadow: "2px 2px 0 hsl(var(--pixel-color) / 0.4)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </PixelCard>
            
            <PixelCard className="p-4 h-full">
              <div className="flex flex-col h-full items-center text-center">
                <Tag className="text-pixel mb-2" size={24} />
                <h3 className="font-semibold">Type</h3>
                <p className="text-muted-foreground mt-2">Personal Project</p>
              </div>
            </PixelCard>
            
            <PixelCard className="p-4 h-full">
              <div className="flex flex-col h-full items-center text-center">
                <Users className="text-pixel mb-2" size={24} />
                <h3 className="font-semibold">Role</h3>
                <p className="text-muted-foreground mt-2">Developer & Designer</p>
              </div>
            </PixelCard>
            
            <PixelCard className="p-4 h-full">
              <div className="flex flex-col h-full items-center text-center">
                <Laptop className="text-pixel mb-2" size={24} />
                <h3 className="font-semibold">Platform</h3>
                <p className="text-muted-foreground mt-2">
                  {project.id.includes("assistant") ? "Desktop Application" : 
                   project.id.includes("cartoonify") ? "Web & Desktop" : 
                   "Web Application"}
                </p>
              </div>
            </PixelCard>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                {project.description}
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <ul className="list-disc pl-5 text-muted-foreground mb-6 space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-4">Outcome</h2>
              <p className="text-muted-foreground mb-6">
                {project.outcome}
              </p>
            </div>
            
            <div>
              <PixelCard className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((img) => (
                    <div 
                      key={img}
                      className="w-full h-24 overflow-hidden"
                      style={{
                        border: "2px solid hsl(var(--pixel-color))",
                        boxShadow: "3px 3px 0 rgba(var(--pixel-color) / 0.3)",
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot ${img}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </PixelCard>
              
              <PixelCard className="p-6">
                <h3 className="text-xl font-bold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {projects
                    .filter(p => p.id !== project.id)
                    .slice(0, 2)
                    .map((relatedProject) => (
                      <a 
                        key={relatedProject.id}
                        href={`/projects/${relatedProject.id}`}
                        className="block group"
                      >
                        <div 
                          className="relative w-full h-20 overflow-hidden mb-2"
                          style={{
                            border: "2px solid hsl(var(--pixel-color))",
                            boxShadow: "3px 3px 0 rgba(var(--pixel-color) / 0.3)",
                            transition: "all 0.3s ease"
                          }}
                        >
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title}
                            className="w-full h-full object-cover"
                          />
                          <div 
                            className="absolute inset-0 bg-pixel/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                          >
                            <span className="text-white font-medium">View Project</span>
                          </div>
                        </div>
                        <h4 className="font-medium group-hover:text-primary transition-colors">
                          {relatedProject.title}
                        </h4>
                      </a>
                    ))}
                </div>
              </PixelCard>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <PixelButton asChild variant="outline">
            <a href="/projects">Back to Projects</a>
          </PixelButton>
          
          {project.links.github && (
            <PixelButton asChild>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={16} />
                View Code
              </a>
            </PixelButton>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectDetail;
