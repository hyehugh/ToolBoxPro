"use client";

import { useEffect, useRef, useCallback } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const hueRef = useRef(0);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  const animate = useCallback(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Cycle hue smoothly: full rainbow every 4 seconds
    hueRef.current = (hueRef.current + 0.5) % 360;

    glow.style.opacity = "1";
    glow.style.transform = `translate(${posRef.current.x - 200}px, ${posRef.current.y - 200}px)`;
    glow.style.background = `radial-gradient(circle, hsla(${hueRef.current}, 70%, 60%, 0.15) 0%, hsla(${hueRef.current}, 70%, 60%, 0.05) 40%, transparent 70%)`;

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [animate]);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-0 opacity-0 transition-opacity duration-300"
      style={{
        width: 400,
        height: 400,
        borderRadius: "50%",
        filter: "blur(40px)",
        willChange: "transform",
        mixBlendMode: "screen",
      }}
    />
  );
}
