"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Developer", href: "/tools?category=developer" },
  { name: "PDF", href: "/tools?category=pdf" },
  { name: "Image", href: "/tools?category=image" },
  { name: "Text", href: "/tools?category=text" },
  { name: "Conversion", href: "/tools?category=conversion" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
              key={cat.name}
              href={cat.href}
              className="hover:text-foreground transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/blog"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
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
              key={cat.name}
              href={cat.href}
              className="py-1 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
          <Link
            href="/blog"
            className="py-1 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
