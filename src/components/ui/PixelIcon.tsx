
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PixelIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  size?: number;
  pixelColor?: string;
}

const PixelIcon = React.forwardRef<HTMLDivElement, PixelIconProps>(
  ({ className, icon: Icon, size = 24, pixelColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 border-2 border-pixel"
          style={
            pixelColor
              ? {
                  borderImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H4H8V4V8H4H0V4V0Z' fill='${encodeURIComponent(pixelColor)}'/%3E%3C/svg%3E") 2 / 2px / 0 round`,
                }
              : undefined
          }
        />
        <Icon size={size} />
      </div>
    );
  }
);
PixelIcon.displayName = "PixelIcon";

export { PixelIcon };
