import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AIButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: "neural" | "holographic" | "cyber" | "quantum" | "matrix";
  baseVariant?: ButtonProps['variant'];
  glowEffect?: boolean;
  pulseEffect?: boolean;
}

const AIButton = React.forwardRef<HTMLButtonElement, AIButtonProps>(
  ({ 
    className, 
    variant = "neural",
    baseVariant = "default", 
    glowEffect = true, 
    pulseEffect = false,
    children, 
    ...props 
  }, ref) => {
    const getVariantStyles = () => {
      switch (variant) {
        case "holographic":
          return "bg-gradient-to-r from-ai-purple via-ai-blue to-ai-cyan text-white border-0 shadow-neural hover:shadow-glow";
        case "cyber":
          return "bg-transparent border-2 border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white cyber-border";
        case "quantum":
          return "glass border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50";
        case "matrix":
          return "bg-matrix-green/10 border border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-background";
        default:
          return "bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground";
      }
    };

    return (
      <Button
        ref={ref}
        variant={baseVariant}
        className={cn(
          "relative overflow-hidden font-medium transition-all duration-300 group",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-500 hover:before:translate-x-[100%]",
          getVariantStyles(),
          glowEffect && "hover:animate-neural-pulse",
          pulseEffect && "animate-neural-pulse",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-primary/60 transform rotate-45 translate-x-[-50%] translate-y-[-50%]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-ai-cyan/60 transform rotate-45 translate-x-[50%] translate-y-[50%]" />
      </Button>
    );
  }
);

AIButton.displayName = "AIButton";

export { AIButton };