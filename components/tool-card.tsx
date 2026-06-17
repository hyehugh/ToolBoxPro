"use client";

import Link from "next/link";
import { useMagneticCard } from "@/lib/hooks/use-magnetic-card";
import { useFavorites } from "@/lib/hooks/use-favorites";
import { useLocale } from "@/lib/i18n/context";

interface ToolCardProps {
  slug: string;
  icon: string;
  name: string;
  desc: string;
}

export function ToolCard({ slug, icon, name, desc }: ToolCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticCard();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { locale } = useLocale();

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
        className="flex items-start gap-4 p-4 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-full"
      >
        <div className="shimmer rounded-lg" />
        {/* Icon with 3D micro-tracking via CSS */}
        <span className="tool-icon text-xl mt-1 font-mono">{icon}</span>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground tool-desc">{desc}</p>
        </div>
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(slug);
        }}
        className={`favorite-btn absolute top-3 right-3 text-lg flex-shrink-0 z-10 ${
          isFavorite(slug) ? "active" : "text-muted-foreground"
        }`}
        title={isFavorite(slug) ? "Unfavorite" : "Favorite"}
      >
        {isFavorite(slug) ? "❤️" : "🤍"}
      </button>
    </div>
  );
}
