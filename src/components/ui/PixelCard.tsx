
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PixelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  pixelColor?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
}

const PixelCard = React.forwardRef<HTMLDivElement, PixelCardProps>(
  ({ className, header, footer, children, pixelColor, hoverEffect = true, glassEffect = true, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "relative border-2 border-pixel overflow-hidden transition-all duration-300",
          hoverEffect && "hover:-translate-y-1 hover:shadow-lg",
          glassEffect && "backdrop-blur-sm bg-background/30",
          className
        )}
        style={{
          borderImage: pixelColor 
            ? `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H4H8V4V8H4H0V4V0Z' fill='${encodeURIComponent(pixelColor)}'/%3E%3C/svg%3E") 2 / 2px / 0 round`
            : undefined,
        }}
        {...props}
      >
        {header && <CardHeader className="bg-muted/50 backdrop-blur-sm border-b border-border">{header}</CardHeader>}
        <CardContent className="p-6">{children}</CardContent>
        {footer && <CardFooter className="bg-muted/50 backdrop-blur-sm border-t border-border">{footer}</CardFooter>}
        <div 
          className="absolute bottom-[-4px] right-[-4px] h-3 w-3 border-b-2 border-r-2 border-pixel" 
        />
      </Card>
    );
  }
);
PixelCard.displayName = "PixelCard";

export { PixelCard };
