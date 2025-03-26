
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelProgress } from "@/components/ui/PixelProgress";
import { PixelCard } from "@/components/ui/PixelCard";
import { Calendar, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "AI & Machine Learning", value: 95 },
    { name: "Prompt Engineering", value: 90 },
    { name: "RPA", value: 85 },
    { name: "Web Development", value: 80 },
    { name: "Cloud Technologies", value: 75 },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
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
            <p className="text-lg mb-6">
              I'm an AI Product Architect and Researcher based in Hyderabad, India, with expertise in 
              designing and developing innovative AI-driven products and tools. My focus is on enhancing 
              human productivity through advanced technology.
            </p>
            <p className="text-lg">
              With experience in AI research, robotic process automation, and technical leadership, 
              I bring a comprehensive skill set to develop scalable AI solutions for diverse industries.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
            Work Experience
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h2>

          <div className="space-y-8">
            <PixelCard>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">AI Product Architect</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      April 2024 - Present
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">Genie AI, Ontario, Canada (Remote)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Spearheading the design and development of innovative AI-driven products and tools</li>
                    <li>Architecting scalable AI solutions for diverse industries</li>
                    <li>Collaborating with cross-functional teams for seamless integration</li>
                    <li>Leading research and development initiatives for cutting-edge AI technologies</li>
                    <li>Defining product roadmaps and translating business requirements into AI architecture</li>
                  </ul>
                </div>
              </div>
            </PixelCard>

            <PixelCard>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">Artificial Intelligence Researcher</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      February 2024 - April 2024
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">Genie AI, Ontario, Canada (Remote)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Tasked by the CEO to develop software and hardware architecture for all products</li>
                    <li>Designed product user flows and high-level backend architecture for AI-based tools</li>
                    <li>Collaborated with the research team on UX design and user flow improvements</li>
                  </ul>
                </div>
              </div>
            </PixelCard>

            <PixelCard>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold">RPA Engineer</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      September 2023 - February 2024
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">Genie AI, Ontario, Canada (Remote)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Led the technical architecture of AI and RPA tools</li>
                    <li>Integrated robotic process automation into various Genie AI products</li>
                    <li>Utilized Python, RPA tools, and technology road mapping</li>
                  </ul>
                </div>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
            Skills & Technologies
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <PixelProgress
                key={skill.name}
                label={skill.name}
                value={skill.value}
                pixelColor="#8B5CF6"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
            Education
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h2>

          <PixelCard>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold">B.Tech. in Computer Science Engineering</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    July 2019 - July 2023
                  </div>
                </div>
                <p className="text-muted-foreground mb-2">Bharat Institute of Engineering and Technology, Ibrahimpatnam, Telangana</p>
                <p className="text-sm">GPA: 7.5/10</p>
              </div>
            </div>
          </PixelCard>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 relative inline-block">
            Certifications & Papers
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Papers</h3>
              <PixelCard>
                <h4 className="text-lg font-medium mb-2">AI-Based Voice Assistants Using Large Language Models</h4>
                <p className="text-sm text-muted-foreground">
                  Published research paper focused on the development of AI voice assistants leveraging large 
                  language models (LLMs). Recognized at an international conference.
                </p>
              </PixelCard>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PixelCard>
                  <h4 className="text-lg font-medium mb-2">Machine Learning with Python</h4>
                  <p className="text-sm text-muted-foreground">DeepLearning.AI</p>
                </PixelCard>
                <PixelCard>
                  <h4 className="text-lg font-medium mb-2">Cybersecurity</h4>
                  <p className="text-sm text-muted-foreground">Industry Certification</p>
                </PixelCard>
                <PixelCard>
                  <h4 className="text-lg font-medium mb-2">Deep Learning Specialization</h4>
                  <p className="text-sm text-muted-foreground">Coursera</p>
                </PixelCard>
                <PixelCard>
                  <h4 className="text-lg font-medium mb-2">Prompt Engineering</h4>
                  <p className="text-sm text-muted-foreground">
                    Techniques to optimize prompts for AI and language models
                  </p>
                </PixelCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
