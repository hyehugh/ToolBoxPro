"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  type: "ripple" | "spark";
}

export function ClickEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const baseHue = () => Math.random() * 360;

    const handleClick = (e: MouseEvent) => {
      const hue = baseHue();

      // Ripple: expanding ring
      particlesRef.current.push({
        x: e.clientX,
        y: e.clientY,
        vx: 0,
        vy: 0,
        life: 1,
        maxLife: 1,
        size: 5,
        hue,
        type: "ripple",
      });

      // Burst: 8-12 spark particles
      const count = 8 + Math.floor(Math.random() * 5);
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 1.5 + Math.random() * 3;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 1,
          size: 2 + Math.random() * 3,
          hue: hue + Math.random() * 40 - 20,
          type: "spark",
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((p) => {
        p.life -= 0.02;
        if (p.life <= 0) return false;

        if (p.type === "ripple") {
          // Expanding ring
          const progress = 1 - p.life;
          const radius = 5 + progress * 80;
          const alpha = p.life * 0.6;
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${p.hue}, 70%, 60%, ${alpha})`;
          ctx.lineWidth = 2 * p.life;
          ctx.stroke();
        } else {
          // Spark particle
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.05; // slight gravity
          p.vx *= 0.98; // friction

          const alpha = p.life;
          const size = p.size * p.life;
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${alpha})`;
          ctx.fill();
        }
        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", handleClick);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
