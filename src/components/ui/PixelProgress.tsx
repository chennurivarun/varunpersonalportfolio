
import React from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PixelProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  pixelColor?: string;
  label?: string;
  showLabel?: boolean;
}

const PixelProgress = ({
  className,
  value,
  max = 100,
  pixelColor,
  label,
  showLabel = true,
  ...props
}: PixelProgressProps) => {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {showLabel && label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{label}</span>
          <span className="text-sm text-muted-foreground">{percentage}%</span>
        </div>
      )}
      <div className="relative h-4">
        <Progress
          value={percentage}
          className="h-4 rounded-none border border-border"
          style={{
            backgroundImage: "linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 50%, #f5f5f5 50%, #f5f5f5 75%, transparent 75%, transparent)",
            backgroundSize: "8px 8px",
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{
            backgroundSize: "4px 100%",
            backgroundImage: `repeating-linear-gradient(to right, transparent, transparent 3px, ${pixelColor || "hsl(var(--pixel-color))"} 3px, ${pixelColor || "hsl(var(--pixel-color))"} 4px)`,
            width: `${percentage}%`,
            maxWidth: "100%",
          }}
        />
      </div>
    </div>
  );
};

export { PixelProgress };
