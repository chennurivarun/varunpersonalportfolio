
import React from "react";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelTimeline } from "@/components/ui/PixelTimeline";
import { PixelProgress } from "@/components/ui/PixelProgress";
import { Link } from "react-router-dom";
import { PixelButton } from "@/components/ui/PixelButton";

const About = () => {
  const experienceItems = [
    {
      title: "AI Product Architect",
      date: "April 2024 - Present",
      description: "Leading the design and development of innovative AI-driven products at Genie AI, focusing on enhancing human productivity through advanced technology.",
      icon: <Briefcase className="text-primary" size={16} />,
    },
    {
      title: "AI Researcher",
      date: "Feb 2024 - April 2024",
      description: "Developed software and hardware architecture for AI products, established architecture design processes at Genie AI.",
      icon: <Code className="text-primary" size={16} />,
    },
    {
      title: "RPA Engineer",
      date: "Sep 2023 - Feb 2024",
      description: "Led technical architecture of AI and RPA tools at Genie AI, contributing to product roadmapping and scalable solutions.",
      icon: <Code className="text-primary" size={16} />,
    },
    {
      title: "Technical & Design Lead",
      date: "Aug 2021 - Aug 2022",
      description: "Led a team at Google Developer Students Club, organizing events and delivering technical talks on emerging technologies.",
      icon: <Briefcase className="text-primary" size={16} />,
    },
    {
      title: "Computer Science Engineering",
      date: "July 2019 - July 2023",
      description: "Completed B.Tech. in Computer Science Engineering at Bharat Institute of Engineering and Technology with a GPA of 7.5/10.",
      icon: <GraduationCap className="text-primary" size={16} />,
    },
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "AI & Machine Learning", level: 85 },
    { name: "RPA", level: 88 },
    { name: "Web Development", level: 70 },
    { name: "Database Management", level: 65 },
  ];

  const facts = [
    { number: "3+", text: "Years Experience" },
    { number: "10+", text: "Projects Completed" },
    { number: "4+", text: "Certifications" },
    { number: "1", text: "Research Paper" },
  ];

  return (
    <PageContainer>
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              About Me
              <span 
                className="absolute -bottom-1 left-0 w-full h-1" 
                style={{ 
                  backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                  backgroundSize: "8px 4px",
                }}
              ></span>
            </h1>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">AI Product Architect & Researcher</h2>
                <p className="text-muted-foreground mb-4">
                  I'm Varun, an AI Product Architect and Researcher with a passion for developing innovative AI-driven solutions. 
                  My expertise lies in designing and implementing scalable AI architectures that enhance human productivity and optimize business processes.
                </p>
                <p className="text-muted-foreground">
                  With a strong background in artificial intelligence, machine learning, and robotic process automation, 
                  I've successfully led multiple projects from conception to deployment, collaborating with cross-functional teams 
                  to ensure seamless integration of cutting-edge technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {facts.map((fact, index) => (
                  <PixelCard key={index} className="p-4 text-center h-full">
                    <h3 className="text-3xl font-bold text-primary mb-1">{fact.number}</h3>
                    <p className="text-sm text-muted-foreground">{fact.text}</p>
                  </PixelCard>
                ))}
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
                <PixelTimeline items={experienceItems} />
              </div>
              
              <div className="flex justify-center mt-8">
                <PixelButton asChild>
                  <Link to="/resume">View Full Resume</Link>
                </PixelButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 order-1 lg:order-2">
            <PixelCard className="p-6 mb-8">
              <div 
                className="w-32 h-32 mx-auto rounded-none mb-6 bg-primary/10 overflow-hidden"
                style={{
                  border: "3px solidrgb(1, 0, 5)",
                  boxShadow: "5px 5px 0 rgba(139, 92, 246, 0.4)",
                }}
              >
                <img 
                  src="/lovable-uploads/546de182-153c-44b9-aaf6-cfcd790339cd.png" 
                  alt="Varun" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-bold mb-1">Varun Chennuri</h2>
                <p className="text-primary mb-4">AI Product Architect</p>
                <div className="flex justify-center space-x-4 mb-4">
                  <a href="https://github.com/chennurivarun" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/varun-chennuri/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="mailto:ch.varun1309@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </a>
                </div>
                <Link to="/contact" className="text-primary hover:underline inline-flex items-center">
                  Contact Me
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </PixelCard>

            <PixelCard className="p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Award className="mr-2 text-primary" size={20} />
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <PixelProgress value={skill.level} />
                  </div>
                ))}
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default About;
