import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Varun
              <span style={{
              backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
              backgroundSize: "8px 4px"
            }} className="absolute -bottom-1 left-0 w-full h-1 text-gray-50"></span>
            </h3>
            <p className="text-muted-foreground mb-4">
              AI Product Architect and Researcher <br />
              Based in Hyderabad, Telangana
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/chennurivarun" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/varun-chennuri/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:ch.varun1309@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
                </li>
                <li>
                  <a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
                </li>
                <li>
                  <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Hyderabad, Telangana</li>
                <li>500098</li>
                <li>ch.varun1309@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Varun. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;