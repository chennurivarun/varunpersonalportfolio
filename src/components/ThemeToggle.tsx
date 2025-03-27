
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme } = useTheme();

  // No functionality, just a static dark mode indicator
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full cursor-default"
    >
      <Moon className="h-5 w-5 text-white" />
      <span className="sr-only">Dark mode</span>
    </Button>
  );
}
