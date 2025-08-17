import React from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  variant?: "matrix" | "neural" | "cyber" | "holographic";
  intensity?: "low" | "medium" | "high";
  animated?: boolean;
  className?: string;
}

const NeuralBackground: React.FC<NeuralBackgroundProps> = ({
  variant = "neural",
  intensity = "medium",
  animated = true,
  className
}) => {
  const getIntensityOpacity = () => {
    switch (intensity) {
      case "low": return "opacity-10";
      case "high": return "opacity-40";
      default: return "opacity-20";
    }
  };

  const renderVariant = () => {
    switch (variant) {
      case "matrix":
        return (
          <>
            <div className={cn("absolute inset-0 matrix-grid", getIntensityOpacity(), animated && "animate-matrix-rain")} />
            <div className="absolute inset-0 bg-gradient-to-b from-matrix-green/10 via-transparent to-matrix-green/5" />
          </>
        );
      
      case "cyber":
        return (
          <>
            <div className={cn("absolute inset-0 bg-gradient-to-br from-ai-purple/20 via-neon-blue/10 to-cyber-orange/15", getIntensityOpacity())} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(139,92,246,0.1)_25%,rgba(139,92,246,0.1)_26%,transparent_27%,transparent_74%,rgba(139,92,246,0.1)_75%,rgba(139,92,246,0.1)_76%,transparent_77%,transparent)] bg-[length:20px_20px]" />
          </>
        );
      
      case "holographic":
        return (
          <>
            <div className={cn("absolute inset-0 holographic", getIntensityOpacity(), animated && "animate-quantum-shift")} />
            <div className="absolute inset-0 bg-gradient-radial from-ai-purple/20 via-ai-blue/10 to-ai-cyan/15" />
          </>
        );
      
      default:
        return (
          <>
            <div className={cn("absolute inset-0 neural-bg", getIntensityOpacity())} />
            <div className={cn("absolute inset-0 ai-particles", getIntensityOpacity(), animated && "animate-ai-float")} />
          </>
        );
    }
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {renderVariant()}
      
      {/* Data streams */}
      {animated && variant === "neural" && (
        <div className="absolute inset-0">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent animate-data-stream"
              style={{
                left: `${20 + i * 30}%`,
                animationDelay: `${i * 1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}
      
      {/* Floating orbs */}
      {animated && (
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={cn(
                "absolute w-4 h-4 rounded-full blur-sm animate-ai-float",
                i % 3 === 0 ? "bg-ai-purple/30" : i % 3 === 1 ? "bg-ai-cyan/30" : "bg-ai-pink/30"
              )}
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { NeuralBackground };