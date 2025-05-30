
import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PixelButtonProps extends ButtonProps {
  pixelColor?: string;
  glassEffect?: boolean;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, pixelColor, glassEffect = true, children, variant = "default", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(
          "relative border-2 border-pixel font-medium transition-all duration-200",
          "before:absolute before:inset-0 before:bg-background before:z-[-1]",
          "before:translate-x-1 before:translate-y-1 before:border-2 before:border-pixel before:transition-transform before:duration-200",
          "hover:before:translate-x-0 hover:before:translate-y-0",
          "active:translate-x-1 active:translate-y-1 active:before:translate-x-0 active:before:translate-y-0",
          "after:absolute after:bottom-[-4px] after:right-[-4px] after:h-3 after:w-3",
          "after:border-b-2 after:border-r-2 after:border-pixel",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          glassEffect && variant === "outline" && "backdrop-blur-sm bg-background/20",
          className
        )}
        style={
          pixelColor
            ? {
                borderImage: `url("data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0H4H8V4V8H4H0V4V0Z' fill='${encodeURIComponent(pixelColor)}'/%3E%3C/svg%3E") 2 / 2px / 0 round`,
              }
            : undefined
        }
        {...props}
      >
        {children}
      </Button>
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton };
