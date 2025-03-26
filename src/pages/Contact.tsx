
import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import ContactForm from "@/components/ContactForm";
import { PixelCard } from "@/components/ui/PixelCard";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      details: "ch.varun1309@gmail.com",
      link: "mailto:ch.varun1309@gmail.com"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      details: "Hyderabad, Telangana, India",
      link: "https://maps.google.com/?q=Hyderabad,Telangana"
    },
    {
      icon: <Github className="text-primary" size={24} />,
      title: "GitHub",
      details: "github.com/yourusername",
      link: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      title: "LinkedIn",
      details: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile"
    },
  ];

  return (
    <PageContainer>
      <div className="container px-4 py-12 mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
          Contact Me
          <span 
            className="absolute -bottom-1 left-0 w-full h-1" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
              backgroundSize: "8px 4px",
            }}
          ></span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          I'm always open to new opportunities and collaborations. Feel free to get in touch with me through any of the channels below or by using the contact form.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <PixelCard key={index} className="p-4">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.details}</p>
                  </div>
                </a>
              </PixelCard>
            ))}
            
            <div 
              className="p-6 mt-6"
              style={{
                border: "3px dashed #8B5CF6",
                backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 50%, transparent 50%, transparent 75%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05))",
                backgroundSize: "16px 16px",
              }}
            >
              <h3 className="font-semibold text-lg mb-2">Available For</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <span 
                    className="inline-block w-3 h-3"
                    style={{
                      backgroundColor: "#8B5CF6",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    }}
                  ></span>
                  <span>Freelance Projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span 
                    className="inline-block w-3 h-3"
                    style={{
                      backgroundColor: "#8B5CF6",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    }}
                  ></span>
                  <span>Full-time Positions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span 
                    className="inline-block w-3 h-3"
                    style={{
                      backgroundColor: "#8B5CF6",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    }}
                  ></span>
                  <span>Consulting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span 
                    className="inline-block w-3 h-3"
                    style={{
                      backgroundColor: "#8B5CF6",
                      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                    }}
                  ></span>
                  <span>Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
