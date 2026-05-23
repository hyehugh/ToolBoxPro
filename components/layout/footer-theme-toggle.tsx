"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FooterThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
    >
      {theme === "light" ? (
        <span className="flex items-center gap-1.5">
          <Moon size={14} /> Dark Mode
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <Sun size={14} /> Light Mode
        </span>
      )}
    </Button>
  );
}
