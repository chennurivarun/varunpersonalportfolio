
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Tag, Calendar, ArrowRight } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelCard } from "@/components/ui/PixelCard";
import { Input } from "@/components/ui/input";
import { PixelButton } from "@/components/ui/PixelButton";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "AI-Based Voice Assistants Using Large Language Models",
    excerpt: "An exploration of how voice assistants are evolving with large language models, offering more natural and context-aware interactions.",
    date: "May 15, 2024",
    category: "AI Research",
    tags: ["AI", "Voice Assistants", "LLM"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUklMjBsYW5ndWFnZSUyMG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    title: "The Future of Robotic Process Automation in Business",
    excerpt: "Exploring how RPA is transforming business operations and what we can expect in the coming years.",
    date: "April 22, 2024",
    category: "Automation",
    tags: ["RPA", "Business", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    title: "Getting Started with Prompt Engineering for GPT Models",
    excerpt: "A beginner's guide to crafting effective prompts for GPT and other large language models.",
    date: "March 10, 2024",
    category: "Tutorials",
    tags: ["Prompt Engineering", "GPT", "Tutorial"],
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBwcm9tcHR8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 4,
    title: "Deep Learning vs Machine Learning: Key Differences",
    excerpt: "Understanding the distinctions between deep learning and traditional machine learning approaches.",
    date: "February 28, 2024",
    category: "AI Education",
    tags: ["Deep Learning", "Machine Learning", "AI"],
    imageUrl: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2hpbmUlMjBsZWFybmluZ3xlbnwwfHwwfHx8MA%3D%3D"
  }
];

// All unique categories from blog posts
const allCategories = [...new Set(blogPosts.map(post => post.category))];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <PageContainer className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center relative inline-block">
          Blog
          <span 
            className="absolute -bottom-1 left-0 w-full h-1" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #8B5CF6 0%, #8B5CF6 50%, transparent 50%, transparent 100%)",
              backgroundSize: "8px 4px",
            }}
          ></span>
        </h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on AI, machine learning, and technology.
        </p>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <PixelButton 
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </PixelButton>
            {allCategories.map((category) => (
              <PixelButton 
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </PixelButton>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="block h-full">
                <PixelCard className="h-full hover:-translate-y-1 transition-transform">
                  <div className="aspect-video w-full mb-4 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 flex items-center gap-1">
                      <Tag size={12} />
                      {post.category}
                    </span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-1 flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary text-sm font-medium group">
                    Read more
                    <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </PixelCard>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No blog posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default Blog;
