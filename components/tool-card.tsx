"use client";

import Link from "next/link";
import { useMagneticCard } from "@/lib/hooks/use-magnetic-card";
import { useFavorites } from "@/lib/hooks/use-favorites";

interface ToolCardProps {
  slug: string;
  icon: string;
  name: string;
  desc: string;
}

export function ToolCard({ slug, icon, name, desc }: ToolCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticCard();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div
      ref={ref}
      className="tool-card relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
    >
      <Link
        href={`/tools/${slug}`}
        className="flex items-start gap-3 p-3.5 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-full"
      >
        <div className="shimmer rounded-lg" />
        <span className="tool-icon text-xl mt-0.5 font-mono flex-shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm">{name}</h3>
          <p className="text-xs text-muted-foreground tool-desc line-clamp-2">{desc}</p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(slug);
        }}
        className={`favorite-btn absolute top-2 right-2 text-sm flex-shrink-0 z-10 ${
          isFavorite(slug) ? "active" : "text-muted-foreground"
        }`}
        aria-label={isFavorite(slug) ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
        aria-pressed={isFavorite(slug)}
      >
        {isFavorite(slug) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
