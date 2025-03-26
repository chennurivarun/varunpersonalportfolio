
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelProgress } from "@/components/ui/PixelProgress";

// Sample project data (in a real app, this would come from an API)
const projects = [
  {
    id: "ai-assistant",
    title: "AI Assistant based on GPT-3.5",
    description: "A personal AI voice assistant utilizing GPT-3.5 to enhance user interaction through natural speech. This assistant is capable of understanding and processing user commands, offering a 25% improvement in interaction quality. By implementing custom natural language processing (NLP) models, I was able to make communication more seamless and responsive.",
    longDescription: `
      <p>This AI assistant leverages the power of GPT-3.5 to create a natural, conversational interface for users to interact with their devices. The project aims to make human-computer interaction more intuitive and accessible.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Natural voice recognition with high accuracy in noisy environments</li>
        <li>Context-aware responses that maintain conversation history</li>
        <li>Custom command creation for personalized automation</li>
        <li>Multi-language support with automatic language detection</li>
        <li>Integration with smart home devices and popular web services</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The assistant was built using Python as the core language, with several key components:</p>
      <ul>
        <li>Speech recognition using advanced audio processing algorithms</li>
        <li>GPT-3.5 API integration for natural language understanding</li>
        <li>Custom NLP models trained on specific domains for improved accuracy</li>
        <li>WebSocket communication for real-time interaction</li>
        <li>Raspberry Pi implementation for edge computing capabilities</li>
      </ul>
      
      <h3>Challenges Overcome</h3>
      <p>One of the major challenges was optimizing the system to work efficiently on devices with limited processing power. This required careful engineering of the audio processing pipeline and implementing a hybrid approach where some processing happens on the device while more complex tasks are offloaded to the cloud.</p>
      
      <p>Another significant challenge was improving context retention across conversations without requiring constant API calls. This was solved by implementing a sophisticated local caching system that maintains conversation state.</p>
    `,
    techStack: [
      { name: "Python", level: 90 },
      { name: "GPT-3.5", level: 85 },
      { name: "NLP", level: 80 },
      { name: "Speech Recognition", level: 75 }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.project.com",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUklMjBsYW5ndWFnZSUyMG1vZGVsfGVufDB8fDB8fHww",
    category: "AI",
    tags: ["AI", "Voice Assistant", "GPT-3.5", "Python"],
    date: "2023"
  },
  {
    id: "image-cartoonify",
    title: "Image Cartoonify",
    description: "An image transformation application using OpenCV and deep learning techniques that allows users to convert images into cartoon-style graphics. The application was trained on a large dataset of images, achieving a 90% accuracy rate in cartoonification.",
    longDescription: `
      <p>Image Cartoonify is a fun and creative application that transforms regular photographs into cartoon-style artwork using computer vision and deep learning techniques. The project demonstrates the creative potential of AI in digital art transformation.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Multiple cartoon style options (classic, anime, comic book, etc.)</li>
        <li>Adjustable effect intensity for customized results</li>
        <li>Batch processing for multiple images</li>
        <li>Browser-based interface for easy access</li>
        <li>Image enhancement options to improve source material</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The application was built using several powerful technologies:</p>
      <ul>
        <li>OpenCV for image processing and manipulation</li>
        <li>Convolutional Neural Networks (CNNs) for style transfer</li>
        <li>Python Flask for the web application backend</li>
        <li>React for the frontend user interface</li>
        <li>AWS S3 for image storage and retrieval</li>
      </ul>
      
      <h3>Development Process</h3>
      <p>The development began with researching various cartoonification algorithms, from traditional image processing techniques to advanced deep learning approaches. After evaluating several methods, I implemented a hybrid approach that combines edge detection, color quantization, and deep learning-based style transfer.</p>
      
      <p>The model was trained on a dataset of over 10,000 image pairs (original photos and their cartoon versions), which helped achieve the high accuracy rate. Fine-tuning the parameters for different cartoon styles was an iterative process that involved both algorithmic adjustments and user feedback.</p>
      
      <h3>Optimizations</h3>
      <p>To make the application accessible on various devices, I implemented several optimizations:</p>
      <ul>
        <li>Model compression techniques to reduce the neural network size</li>
        <li>GPU acceleration for faster processing</li>
        <li>Progressive loading for improved user experience</li>
        <li>Caching mechanisms to avoid redundant processing</li>
      </ul>
    `,
    techStack: [
      { name: "OpenCV", level: 85 },
      { name: "Python", level: 90 },
      { name: "Deep Learning", level: 80 },
      { name: "Flask", level: 75 },
      { name: "React", level: 70 }
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.project.com",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D",
    category: "Image Processing",
    tags: ["OpenCV", "Deep Learning", "Python", "Image Processing"],
    date: "2022"
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(project => project.id === id);

  if (!project) {
    return (
      <PageContainer>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <PixelButton asChild>
            <Link to="/projects">Back to Projects</Link>
          </PixelButton>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <PixelButton variant="outline" size="sm" asChild>
            <Link to="/projects" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
          </PixelButton>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-8">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {project.date}
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2" />
              {project.category}
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-lg mb-8 border-2 border-primary"
            style={{
              borderImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H4H8V4V8H4H0V4V0Z' fill='%238B5CF6'/%3E%3C/svg%3E") 2 / 2px / 0 round`,
            }}>
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <PixelButton size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github size={16} className="mr-2" />
                View on GitHub
              </a>
            </PixelButton>
            <PixelButton size="sm" variant="outline" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </PixelButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <PixelCard>
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="prose prose-headings:font-semibold prose-headings:text-foreground prose-p:text-muted-foreground" dangerouslySetInnerHTML={{ __html: project.longDescription }} />
              </PixelCard>
            </div>
            
            <div>
              <PixelCard>
                <h2 className="text-xl font-semibold mb-4">Technologies</h2>
                <div className="space-y-4">
                  {project.techStack.map((tech) => (
                    <div key={tech.name}>
                      <PixelProgress 
                        value={tech.level} 
                        max={100} 
                        label={tech.name}
                      />
                    </div>
                  ))}
                </div>
              </PixelCard>
              
              <PixelCard className="mt-6">
                <h2 className="text-xl font-semibold mb-4">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </PixelCard>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ProjectDetail;
