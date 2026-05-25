"use client";

import { useTheme } from "@/components/theme-provider";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export function FooterThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLocale();
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
    >
      {theme === "light" ? (
        <span className="flex items-center gap-1.5">
          <Moon size={14} /> {t("common.darkMode")}
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <Sun size={14} /> {t("common.lightMode")}
        </span>
      )}
    </Button>
  );
}
