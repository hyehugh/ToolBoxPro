"use client";

import { useState, useEffect, useCallback } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const FAVORITES_KEY = "toolboxpro_favorites";

function getFavorites(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggle = useCallback((slug: string) => {
    setFavorites((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites]
  );

  return { favorites, toggle, isFavorite };
}

export function FavoriteButton({ slug }: { slug: string }) {
  const { favorites, toggle } = useFavorites();
  const isFav = favorites.includes(slug);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
      }}
      className={cn(
        "inline-flex items-center justify-center w-8 h-8 rounded-md transition-colors",
        isFav
          ? "text-yellow-500 hover:text-yellow-600"
          : "text-muted-foreground hover:text-foreground"
      )}
      title={isFav ? "Remove from favorites" : "Add to favorites"}
    >
      <Star size={16} fill={isFav ? "currentColor" : "none"} />
    </button>
  );
}
