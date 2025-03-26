
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Assistant based on GPT-3.5",
      description: "I developed a personal AI voice assistant utilizing GPT-3.5 to enhance user interaction through natural speech. This assistant is capable of understanding and processing user commands, offering a 25% improvement in interaction quality. By implementing custom natural language processing (NLP) models, I was able to make communication more seamless and responsive.",
      tags: ["GPT-3.5", "NLP", "Python", "AI"],
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Image Cartoonify",
      description: "I created an image transformation application using OpenCV and deep learning techniques that allows users to convert images into cartoon-style graphics. The application was trained on a large dataset of images, achieving a 90% accuracy rate in cartoonification. This project showcases the power of machine learning in image manipulation.",
      tags: ["OpenCV", "Deep Learning", "Image Processing", "Python"],
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Crypto Price Prediction Model",
      description: "This project involved developing a deep learning model using Long Short-Term Memory (LSTM) networks and TensorFlow to predict cryptocurrency prices. By analyzing historical market data, the model provides high-accuracy predictions, which can be useful for investors and analysts. This project demonstrates my ability to work with time-series data and build reliable financial models.",
      tags: ["LSTM", "TensorFlow", "Time Series", "Financial Modeling"],
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Zaya - AI Personal Assistant",
      description: "I built Zaya, an AI personal assistant capable of executing real-time tasks through voice commands and CMD control. Zaya offers a highly customizable user experience, allowing individuals to interact with their system hands-free. It features advanced speech interaction and real-time task execution, making everyday operations smoother.",
      tags: ["AI", "Voice Recognition", "Python", "Automation"],
      githubUrl: "https://github.com",
    },
  ];

  return (
    <PageContainer>
      {/* Projects Header */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              My Projects
              <span 
                className="absolute -bottom-1 left-0 w-full h-1" 
                style={{ 
                  backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                  backgroundSize: "8px 4px",
                }}
              ></span>
            </h1>
            <p className="text-lg">
              Below are some of the projects I've worked on. Each project demonstrates different 
              skills and technologies, showcasing my experience in AI, machine learning, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <PixelCard key={project.id} className="h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <PixelButton size="sm" className="inline-flex items-center gap-2" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                    View on GitHub
                  </a>
                </PixelButton>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Projects;
