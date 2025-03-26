
import React from "react";
import { ArrowDownToLine, Award, FileText, GraduationCap, Briefcase, Code } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelCard } from "@/components/ui/PixelCard";
import { PixelButton } from "@/components/ui/PixelButton";

const Resume = () => {
  // Sample resume data - replace with your actual data
  const workExperience = [
    {
      title: "AI Product Architect",
      company: "Genie AI, Ontario, Canada (Remote)",
      period: "April 2024 - Present",
      responsibilities: [
        "Spearheading the design and development of innovative AI-driven products and tools, aligning with Genie's mission to enhance human productivity through advanced technology.",
        "Architecting scalable AI solutions that cater to diverse industries, driving automation and optimization of business processes.",
        "Collaborating with cross-functional teams, including product research, UX design, and AI/ML development, to ensure seamless integration and deployment of AI components.",
        "Leading research and development initiatives to incorporate cutting-edge AI technologies into product offerings, staying ahead of industry trends.",
        "Playing a key role in defining product roadmaps and translating complex business requirements into robust AI architecture."
      ]
    },
    {
      title: "Artificial Intelligence Researcher",
      company: "Genie AI, Ontario, Canada (Remote)",
      period: "Feb 2024 - April 2024",
      responsibilities: [
        "Tasked by the CEO to develop software and hardware architecture for all products, establishing a dedicated wing for architecture design.",
        "Designed product user flows and high-level backend architecture for multiple AI-based tools, enhancing system functionality and user experience.",
        "Collaborated with the research team on UX design and user flow improvements, focusing on enhancing overall system efficiency and performance."
      ]
    },
    {
      title: "RPA Engineer",
      company: "Genie AI, Ontario, Canada (Remote)",
      period: "Sep 2023 - Feb 2024",
      responsibilities: [
        "Led the technical architecture of AI and RPA tools, contributing to product road mapping and the development of scalable solutions.",
        "Integrated robotic process automation into various Genie AI products, optimizing business processes and improving system efficiency.",
        "Utilized Python, RPA tools, and technology road mapping to develop and implement humanoid automation processes, streamlining workflows and reducing manual effort."
      ]
    },
    {
      title: "Technical and Design Lead",
      company: "Google Developer Students Club",
      period: "Aug 2021 - Aug 2022",
      responsibilities: [
        "Spearheaded a team of 10+ students in organizing and executing GDSC events, fostering collaboration and technical skill development.",
        "Delivered 10+ technical talks on emerging technologies, improving team knowledge and project efficiency by 20%.",
        "Mentored junior students on technical skills, significantly enhancing their project contributions and professional growth."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech. in Computer Science Engineering",
      institution: "Bharat Institute of Engineering and Technology, Ibrahimpatnam, Telangana",
      period: "July 2019 - July 2023",
      gpa: "7.5/10"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "Lang chain", "Selenium", "C", "C++", "Java"]
    },
    {
      category: "AI & Machine Learning",
      items: ["GPT-3.5", "Lang chain", "Prompt Engineering", "TensorFlow", "Deep Learning"]
    },
    {
      category: "Automation Tools",
      items: ["Robotic Process Automation (RPA)", "Selenium"]
    },
    {
      category: "Web Development",
      items: ["Streamlit"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"]
    },
    {
      category: "Cloud Technologies",
      items: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"]
    },
    {
      category: "Miscellaneous",
      items: ["Git", "GitHub", "Docker", "REST APIs", "MLOps", "Jira"]
    }
  ];

  const publications = [
    {
      title: "AI-Based Voice Assistants Using Large Language Models",
      description: "Published a research paper focused on the development of AI voice assistants leveraging large language models (LLMs). This paper was recognized at an international conference for its innovative approach to enhancing human-computer interaction."
    }
  ];

  const certifications = [
    {
      title: "Machine Learning with Python",
      issuer: "DeepLearning.AI",
      description: "Comprehensive certification course covering essential machine learning algorithms and techniques, focusing on Python implementations."
    },
    {
      title: "Cybersecurity",
      issuer: "Industry Certification",
      description: "Certification in Cybersecurity, gaining proficiency in modern practices and tools to ensure secure system operations and data handling."
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      description: "Specialized course covering the foundations and applications of deep learning, including neural networks, TensorFlow, and real-world applications of AI."
    },
    {
      title: "Prompt Engineering",
      issuer: "Certification",
      description: "Certification in Prompt Engineering, covering techniques to optimize prompts for AI and language models, improving task completion accuracy."
    }
  ];

  const contactInfo = {
    address: "4-6-20, Venkat Sai Nagar Colony, Boduppal, Hyderabad, Telangana, 500098",
    email: "ch.varun1309@gmail.com",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
      { label: "GitHub", url: "https://github.com/yourusername" },
      { label: "Portfolio", url: "/" }
    ]
  };

  return (
    <PageContainer>
      <div className="container px-4 py-12 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold relative inline-block">
            Resume
            <span 
              className="absolute -bottom-1 left-0 w-full h-1" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
                backgroundSize: "8px 4px",
              }}
            ></span>
          </h1>
          <PixelButton>
            <ArrowDownToLine className="mr-2" size={16} />
            Download PDF
          </PixelButton>
        </div>

        {/* Contact Information */}
        <PixelCard className="mb-8 p-6">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <FileText className="mr-2 text-primary" size={20} />
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-2">{contactInfo.address}</p>
              <p className="text-muted-foreground mb-2">{contactInfo.email}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {contactInfo.links.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </PixelCard>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-2 text-primary" size={24} />
            Work Experience
          </h2>
          
          {workExperience.map((job, index) => (
            <PixelCard key={index} className="mb-4 p-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-muted-foreground">{job.company}</p>
                  <p className="text-sm text-primary">{job.period}</p>
                </div>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </PixelCard>
          ))}
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-2 text-primary" size={24} />
            Education
          </h2>
          
          {education.map((edu, index) => (
            <PixelCard key={index} className="mb-4 p-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-primary">{edu.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground">GPA: {edu.gpa}</p>
            </PixelCard>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Code className="mr-2 text-primary" size={24} />
            Skills & Technologies
          </h2>
          
          <PixelCard className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillCategory, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">{skillCategory.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-none"
                        style={{
                          backgroundColor: "rgba(139, 92, 246, 0.1)",
                          color: "#8B5CF6",
                          border: "2px solid #8B5CF6",
                          boxShadow: "3px 3px 0 rgba(139, 92, 246, 0.4)"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PixelCard>
        </section>

        {/* Publications & Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Award className="mr-2 text-primary" size={24} />
            Publications & Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Publications</h3>
              {publications.map((pub, index) => (
                <PixelCard key={index} className="mb-4 p-6">
                  <h4 className="text-lg font-semibold mb-2">{pub.title}</h4>
                  <p className="text-muted-foreground">{pub.description}</p>
                </PixelCard>
              ))}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              {certifications.map((cert, index) => (
                <PixelCard key={index} className="mb-4 p-6">
                  <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
                  <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                  <p className="text-muted-foreground">{cert.description}</p>
                </PixelCard>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default Resume;
