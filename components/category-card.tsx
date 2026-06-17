"use client";

import Link from "next/link";
import { useMagneticCard } from "@/lib/hooks/use-magnetic-card";

interface CategoryCardProps {
  id: string;
  icon: string;
  name: string;
  count: string;
}

export function CategoryCard({ id, icon, name, count }: CategoryCardProps) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticCard();

  return (
    <div
      ref={ref}
      className="tool-card relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.2s ease, box-shadow 0.2s ease" }}
    >
      <Link
        href={`/tools?category=${id}`}
        className="flex flex-col items-center gap-2 p-6 rounded-lg border bg-card card-shadow card-shadow-hover hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="tool-icon text-3xl">{icon}</span>
        <span className="font-medium text-sm text-center">{name}</span>
        <span className="text-xs text-muted-foreground">{count}</span>
      </Link>
    </div>
  );
}
