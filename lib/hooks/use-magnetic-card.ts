"use client";

import { useCallback, useRef } from "react";

export function useMagneticCard() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Magnetic pull: max ±4px toward cursor
    const pullX = ((x - centerX) / centerX) * 4;
    const pullY = ((y - centerY) / centerY) * 4;

    // Edge glow: brighter near the edge the cursor is closest to
    const edgeX = x < rect.width * 0.3 ? "left" : x > rect.width * 0.7 ? "right" : "center";
    const edgeY = y < rect.height * 0.3 ? "top" : y > rect.height * 0.7 ? "bottom" : "center";

    let glowColor = "transparent";
    if (edgeX === "left") glowColor = "rgba(92, 143, 122, 0.15)";
    else if (edgeX === "right") glowColor = "rgba(92, 143, 122, 0.15)";
    else if (edgeY === "top") glowColor = "rgba(92, 143, 122, 0.12)";
    else if (edgeY === "bottom") glowColor = "rgba(92, 143, 122, 0.12)";

    card.style.transform = `translate(${pullX}px, ${pullY}px) translateY(-2px) scale(1.01)`;
    card.style.boxShadow = `0 4px 20px ${glowColor}, 0 8px 32px rgba(0,0,0,0.08)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "";
    card.style.boxShadow = "";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
