import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AICardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "neural" | "holographic" | "cyber" | "quantum";
  glowEffect?: boolean;
  floatEffect?: boolean;
}

const AICard = React.forwardRef<HTMLDivElement, AICardProps>(
  ({ 
    className, 
    header, 
    footer, 
    children, 
    variant = "neural",
    glowEffect = true,
    floatEffect = false,
    ...props 
  }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "holographic":
          return "holographic border-2 border-ai-purple/30 shadow-ai";
        case "cyber":
          return "cyber-border bg-background/50 backdrop-blur-xl";
        case "quantum":
          return "glass bg-gradient-to-br from-ai-purple/10 to-ai-cyan/10";
        default:
          return "glass border-2 border-primary/20";
      }
    };

    return (
      <Card
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-500 group",
          getVariantStyles(),
          glowEffect && "hover:shadow-glow hover:scale-[1.02]",
          floatEffect && "hover:animate-ai-float",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/5 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-[100%]",
          className
        )}
        {...props}
      >
        {/* Neural Network Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="neural-bg w-full h-full" />
        </div>
        
        {/* Animated Particles */}
        {variant === "neural" && (
          <div className="absolute inset-0 ai-particles opacity-30 pointer-events-none" />
        )}
        
        {/* Matrix Grid for Cyber Variant */}
        {variant === "cyber" && (
          <div className="absolute inset-0 matrix-grid opacity-20 pointer-events-none" />
        )}
        
        {header && (
          <CardHeader className="relative z-10 glass-dark border-b border-primary/20">
            {header}
          </CardHeader>
        )}
        
        <CardContent className="relative z-10 p-6">
          {children}
        </CardContent>
        
        {footer && (
          <CardFooter className="relative z-10 glass-dark border-t border-primary/20">
            {footer}
          </CardFooter>
        )}
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-ai-cyan/20 to-transparent" />
      </Card>
    );
  }
);

AICard.displayName = "AICard";

export { AICard };