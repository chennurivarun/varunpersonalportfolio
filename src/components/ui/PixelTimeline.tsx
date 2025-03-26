
import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  date: string;
  description: string;
  icon?: React.ReactNode;
}

interface PixelTimelineProps {
  items: TimelineItem[];
  className?: string;
}

export const PixelTimeline = ({ items, className }: PixelTimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div 
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 -ml-0.5 md:-ml-0.5" 
        style={{
          backgroundImage: "linear-gradient(to bottom, #8B5CF6 50%, transparent 50%)",
          backgroundSize: "2px 8px",
        }}
      ></div>
      
      {items.map((item, index) => (
        <div 
          key={index} 
          className={cn(
            "relative flex flex-col md:items-center md:flex-row md:even:flex-row-reverse",
            "mb-10 last:mb-0"
          )}
        >
          <div className="flex items-center md:w-1/2 z-10">
            <div 
              className={cn(
                "w-8 h-8 flex items-center justify-center bg-background border-2 border-primary rounded-none",
                "ml-0 md:ml-auto md:mr-auto"
              )}
              style={{
                borderImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H4H8V4V8H4H0V4V0Z' fill='%238B5CF6'/%3E%3C/svg%3E") 2 / 2px / 0 round`,
              }}
            >
              {item.icon || (
                <div 
                  className="w-3 h-3 bg-primary" 
                  style={{
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                  }}
                ></div>
              )}
            </div>
            <div 
              className={cn(
                "flex-1 border-2 border-border p-4 ml-4 md:ml-0 md:mr-0",
                "md:mr-4 md:even:ml-4 md:even:mr-0",
                "relative"
              )}
              style={{
                borderImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H4H8V4V8H4H0V4V0Z' fill='%238B5CF6'/%3E%3C/svg%3E") 2 / 2px / 0 round`,
              }}
            >
              <div className="absolute -bottom-1 -right-1 h-2 w-2 border-b-2 border-r-2 border-primary"></div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <span className="text-sm text-muted-foreground block mb-2">{item.date}</span>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          </div>
          <div className="md:w-1/2"></div>
        </div>
      ))}
    </div>
  );
};
