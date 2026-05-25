"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/lib/i18n/context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { nameKey: "categories.developer", href: "/tools?category=developer" },
  { nameKey: "categories.text", href: "/tools?category=text" },
  { nameKey: "categories.image", href: "/tools?category=image" },
  { nameKey: "categories.pdf", href: "/tools?category=pdf" },
  { nameKey: "categories.audio", href: "/tools?category=audio" },
  { nameKey: "categories.network", href: "/tools?category=network" },
  { nameKey: "categories.conversion", href: "/tools?category=conversion" },
  { nameKey: "categories.utilities", href: "/tools?category=utilities" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          ToolboxPro
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {categories.map((cat) => (
            <Link
              key={cat.nameKey}
              href={cat.href}
              className="hover:text-foreground transition-colors"
            >
              {t(cat.nameKey)}
            </Link>
          ))}
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            {t("nav.blog")}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLocale(locale === "en" ? "zh" : "en")}
            className="text-xs gap-1 px-2"
            title={t("locale.language")}
          >
            <Languages size={14} />
            <span className="hidden sm:inline">{locale === "en" ? "中文" : "English"}</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </Button>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-200 border-t",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 py-3 gap-3 text-sm">
          {categories.map((cat) => (
            <Link
              key={cat.nameKey}
              href={cat.href}
              className="py-1 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {t(cat.nameKey)}
            </Link>
          ))}
          <Link
            href="/blog"
            className="py-1 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            {t("nav.blog")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
