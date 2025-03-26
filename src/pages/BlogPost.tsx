
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";
import { PixelButton } from "@/components/ui/PixelButton";
import { PixelCard } from "@/components/ui/PixelCard";

// Sample blog post data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: "1",
    title: "AI-Based Voice Assistants Using Large Language Models",
    content: `
      <p>Voice assistants have become an integral part of our digital lives, from helping us check the weather to scheduling appointments and controlling smart home devices. With the advent of Large Language Models (LLMs), these assistants are becoming more intelligent, context-aware, and natural in their interactions.</p>
      
      <h2>The Evolution of Voice Assistants</h2>
      <p>Early voice assistants relied on simple command-response patterns and predefined sets of questions they could answer. They were essentially glorified voice-activated search engines with limited understanding of context or natural language nuances.</p>
      
      <p>Modern LLM-powered voice assistants, however, can understand complex queries, maintain context across conversations, and generate more natural-sounding responses that feel less robotic and more human-like.</p>
      
      <h2>How LLMs Are Transforming Voice Assistants</h2>
      <p>Large Language Models like GPT-3.5 and GPT-4 have revolutionized what's possible with voice assistants in several key ways:</p>
      
      <ul>
        <li><strong>Contextual Understanding:</strong> LLMs can maintain context throughout a conversation, allowing for more natural dialogue flow.</li>
        <li><strong>Natural Language Generation:</strong> Responses sound more human and less like predefined scripts.</li>
        <li><strong>Complex Query Handling:</strong> These models can understand and respond to complex, multi-part questions that would have confused earlier voice assistants.</li>
        <li><strong>Personalization:</strong> With enough interaction, LLM-powered assistants can adapt to individual users' speech patterns and preferences.</li>
      </ul>
      
      <h2>Challenges and Limitations</h2>
      <p>Despite their impressive capabilities, LLM-powered voice assistants still face challenges:</p>
      
      <ul>
        <li><strong>Hallucinations:</strong> LLMs can sometimes generate plausible-sounding but factually incorrect information.</li>
        <li><strong>Computational Requirements:</strong> Running sophisticated LLMs requires significant processing power, making real-time deployment challenging.</li>
        <li><strong>Privacy Concerns:</strong> The more conversational and context-aware these systems become, the more personal data they potentially process and store.</li>
      </ul>
      
      <h2>The Future of Voice Assistants</h2>
      <p>As LLMs continue to evolve and computational efficiency improves, we can expect voice assistants to become even more integrated into our daily lives, understanding not just what we say but the intent behind our words, our emotional states, and our preferences.</p>
      
      <p>The future may see these assistants becoming true AI companions rather than just tools—entities that can engage in meaningful conversation, anticipate our needs, and adapt to our individual communication styles.</p>
    `,
    date: "May 15, 2024",
    author: "Varun Chilukuri",
    category: "AI Research",
    tags: ["AI", "Voice Assistants", "LLM"],
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QUklMjBsYW5ndWFnZSUyMG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    id: "2",
    title: "The Future of Robotic Process Automation in Business",
    content: `
      <p>Robotic Process Automation (RPA) has emerged as a transformative technology that is reshaping how businesses operate across industries. By automating routine, rule-based tasks, RPA frees human workers to focus on more creative and strategic activities, driving efficiency and innovation.</p>
      
      <h2>What is RPA?</h2>
      <p>RPA uses software robots or "bots" to automate repetitive digital tasks that would typically be performed by humans. These bots interact with digital systems just as a human would—clicking buttons, entering data, copying and pasting information, and navigating between applications.</p>
      
      <p>Unlike traditional automation that often requires coding and system integration, RPA can work with existing software without changing the underlying infrastructure, making it relatively quick and cost-effective to implement.</p>
      
      <h2>Current Business Applications</h2>
      <p>RPA is currently being used across a wide range of business functions:</p>
      
      <ul>
        <li><strong>Finance and Accounting:</strong> Automating invoice processing, accounts payable, and reconciliation tasks.</li>
        <li><strong>Human Resources:</strong> Streamlining onboarding processes, payroll management, and benefits administration.</li>
        <li><strong>Customer Service:</strong> Handling routine customer inquiries and processing simple service requests.</li>
        <li><strong>Supply Chain:</strong> Managing inventory updates, purchase order processing, and logistics coordination.</li>
      </ul>
      
      <h2>The Future Evolution of RPA</h2>
      <p>As RPA technology matures, several key trends are shaping its future:</p>
      
      <h3>1. Integration with AI and Machine Learning</h3>
      <p>The next generation of RPA, sometimes called "Intelligent Automation," combines traditional RPA with AI capabilities. This allows bots to handle unstructured data, make decisions based on patterns, and learn from human interventions to continuously improve.</p>
      
      <h3>2. Hyperautomation</h3>
      <p>Gartner's concept of hyperautomation describes the combination of multiple technologies—RPA, AI, process mining, and advanced analytics—to automate not just tasks but entire business processes from end to end.</p>
      
      <h3>3. Self-Healing Bots</h3>
      <p>Future RPA bots will be able to detect and fix issues in their own operations, reducing the need for human monitoring and maintenance and increasing reliability.</p>
      
      <h3>4. Democratization of Automation</h3>
      <p>Low-code/no-code RPA platforms are making it easier for business users without technical backgrounds to create and deploy their own bots, expanding the reach of automation across organizations.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite its promise, businesses implementing RPA must navigate several challenges:</p>
      
      <ul>
        <li><strong>Change Management:</strong> Employees may resist automation due to fear of job displacement.</li>
        <li><strong>Process Standardization:</strong> Automating inefficient processes simply produces faster inefficiency.</li>
        <li><strong>Governance and Security:</strong> Organizations need robust frameworks to manage bot access and activities.</li>
        <li><strong>Scalability:</strong> Moving from pilot projects to enterprise-wide implementation requires careful planning.</li>
      </ul>
      
      <h2>The Human-Bot Workforce</h2>
      <p>Perhaps the most significant shift will be in how humans and bots work together. Rather than replacing humans, the most successful RPA implementations create a "digital workforce" where bots handle routine tasks, allowing humans to focus on exception handling, relationship building, creative problem-solving, and strategic decision-making.</p>
      
      <p>This human-bot collaboration represents a new paradigm for work—one that has the potential to make jobs more fulfilling while driving unprecedented levels of productivity and innovation.</p>
    `,
    date: "April 22, 2024",
    author: "Varun Chilukuri",
    category: "Automation",
    tags: ["RPA", "Business", "Automation"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <PageContainer>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
          <PixelButton asChild>
            <Link to="/blog">Back to Blog</Link>
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
            <Link to="/blog" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </PixelButton>
        </div>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                {post.category}
              </div>
            </div>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-8">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <PixelCard className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </PixelCard>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </PageContainer>
  );
};

export default BlogPost;
