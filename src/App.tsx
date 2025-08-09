
import React, { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Resume = lazy(() => import("./pages/Resume"));

// Create a client
const queryClient = new QueryClient();

// Simple SEO Manager for per-route meta
const SEOManager: React.FC = () => {
  const location = useLocation();
  React.useEffect(() => {
    const metaMap: Record<string, { title: string; description: string }> = {
      "/": { title: "Varun | Generative AI Engineer", description: "Portfolio of Varun – Generative AI engineer building research, demos, and products." },
      "/about": { title: "About | Varun – Generative AI", description: "Background, skills, and experience across AI, research, and product engineering." },
      "/projects": { title: "Projects | Varun – Generative AI", description: "Selected AI projects and experiments: LLMs, RAG, multimodal, automation." },
      "/blog": { title: "Blog | Varun – Generative AI", description: "Writing on GenAI engineering, research notes, and implementation guides." },
      "/contact": { title: "Contact | Varun – Generative AI", description: "Get in touch for collaborations, consulting, and speaking." },
      "/resume": { title: "Resume | Varun – Generative AI", description: "Resume and career summary." },
    };

    const dynamicDefaults = { title: "Varun – Generative AI", description: "Portfolio of Varun – Generative AI engineer." };
    const meta = metaMap[location.pathname] ?? dynamicDefaults;

    document.title = meta.title;
    let desc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = meta.description;

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin + location.pathname;
  }, [location.pathname]);
  return null;
};

const App: React.FC = () => {
  React.useEffect(() => {
    // Force dark mode on the document
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SEOManager />
          <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center text-muted-foreground">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
