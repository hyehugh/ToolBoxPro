"use client";

import { useEffect, useRef } from "react";

/* ──────────────────────────── Types ──────────────────────────── */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
  saturation: number;
  lightness: number;
  /** Trail positions for motion blur */
  trail: { x: number; y: number }[];
  /** Whether this particle sparkles */
  sparkle: boolean;
  /** Drag coefficient — willow particles fall faster */
  drag: number;
  /** Gravity multiplier */
  gravity: number;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number; alpha: number }[];
  hue: number;
  /** Target explosion height */
  targetY: number;
  /** Firework type */
  type: FireworkType;
  /** Secondary hue for two-color fireworks */
  hue2: number;
}

type FireworkType = "peony" | "chrysanthemum" | "willow" | "ring";

/* ──────────────────────────── Constants ──────────────────────────── */

const GRAVITY = 0.06;
const TRAIL_LENGTH = 8;

const FIREWORK_TYPES: FireworkType[] = [
  "peony", "chrysanthemum", "willow", "ring",
];

/** Festive color palettes — each explosion picks one */
const PALETTES: number[][] = [
  [0, 30, 60],        // Warm: red, orange, yellow
  [120, 150, 180],    // Green-teal range
  [200, 220, 260],    // Blue-purple range
  [280, 310, 340],    // Pink-magenta range
  [45, 270, 340],     // Gold + purple + pink (mixed)
  [160, 200, 50],     // Teal + blue + gold (mixed)
];

/* ──────────────────────────── Component ──────────────────────────── */

export function ClickEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rocketsRef = useRef<Rocket[]>([]);
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

    /* ─── Launch a rocket on click ─── */
    const handleClick = (e: MouseEvent) => {
      const startX = e.clientX + (Math.random() - 0.5) * 20;
      const startY = e.clientY + 20; // Start slightly below click point

      // Pick a random palette and type
      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const hue = palette[Math.floor(Math.random() * palette.length)];
      const hue2 = palette[Math.floor(Math.random() * palette.length)];
      const type = FIREWORK_TYPES[Math.floor(Math.random() * FIREWORK_TYPES.length)];

      // Rocket goes up and explodes slightly above the click point
      const targetY = e.clientY - 20 - Math.random() * 30;

      rocketsRef.current.push({
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -8 - Math.random() * 3, // Strong upward velocity
        trail: [],
        hue,
        hue2,
        targetY,
        type,
      });
    };

    /* ─── Explode a rocket into particles ─── */
    const explode = (rocket: Rocket) => {
      const palette = [rocket.hue, rocket.hue2];
      let count: number;
      let baseSpeed: number;

      switch (rocket.type) {
        case "ring":
          count = 50;
          baseSpeed = 13.5;  // ×3
          break;
        case "chrysanthemum":
          count = 70;
          baseSpeed = 15;    // ×3
          break;
        case "willow":
          count = 55;
          baseSpeed = 10.5;  // ×3
          break;
        default: // peony
          count = 60 + Math.floor(Math.random() * 20);
          baseSpeed = 12 + Math.random() * 6;  // ×3
      }

      for (let i = 0; i < count; i++) {
        let angle: number;
        let speed: number;
        let drag = 0.97;
        let gravity = GRAVITY;

        switch (rocket.type) {
          case "ring": {
            // Perfect ring — uniform angle, same speed
            angle = (Math.PI * 2 * i) / count;
            speed = baseSpeed;
            break;
          }
          case "chrysanthemum": {
            // Dense burst with slight randomness
            angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.15;
            speed = baseSpeed * (0.8 + Math.random() * 0.4);
            break;
          }
          case "willow": {
            // Drooping — low drag, higher gravity, slower
            angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
            speed = baseSpeed * (0.6 + Math.random() * 0.6);
            drag = 0.985; // Less drag = falls further
            gravity = GRAVITY * 1.8;
            break;
          }
          default: { // peony
            angle = Math.random() * Math.PI * 2;
            speed = baseSpeed * (0.5 + Math.random() * 0.8);
          }
        }

        const hue = palette[Math.floor(Math.random() * palette.length)] + (Math.random() - 0.5) * 20;
        const maxLife = 180 + Math.random() * 100;  // ×3-4 longer life

        particlesRef.current.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: maxLife,
          maxLife,
          size: 1.5 + Math.random() * 2,
          hue: ((hue % 360) + 360) % 360,
          saturation: 85 + Math.random() * 15,
          lightness: 55 + Math.random() * 20,
          trail: [],
          sparkle: Math.random() < 0.25, // 25% of particles sparkle
          drag,
          gravity,
        });
      }

      // Central flash burst — a few very bright, short-lived particles
      for (let i = 0; i < 5; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 1.5;
        particlesRef.current.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 15,
          maxLife: 15,
          size: 4 + Math.random() * 3,
          hue: rocket.hue,
          saturation: 30,
          lightness: 90, // Near-white flash
          trail: [],
          sparkle: true,
          drag: 0.9,
          gravity: 0,
        });
      }
    };

    /* ─── Main animation loop ─── */
    const animate = () => {
      // Clear completely every frame — no ghost residue
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use additive blending for all particles — creates realistic glow
      ctx.globalCompositeOperation = "lighter";

      /* --- Update rockets --- */
      rocketsRef.current = rocketsRef.current.filter((r) => {
        // Store trail position
        r.trail.push({ x: r.x, y: r.y, alpha: 1 });
        if (r.trail.length > 10) r.trail.shift();

        // Draw rocket trail (fading)
        for (let i = 0; i < r.trail.length; i++) {
          const t = r.trail[i];
          const tAlpha = (i / r.trail.length) * 0.6;
          ctx.beginPath();
          ctx.arc(t.x, t.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${r.hue}, 60%, 70%, ${tAlpha})`;
          ctx.fill();
        }

        // Move rocket
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.08; // Gravity on rocket
        r.vx *= 0.99;

        // Draw rocket head (bright dot)
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 80%, 80%, 1)`;
        ctx.fill();

        // Check if rocket reached apex (vy ~ 0 or reached target height)
        if (r.vy >= -0.5 || r.y <= r.targetY) {
          explode(r);
          return false; // Remove rocket
        }
        return true;
      });

      /* --- Update explosion particles --- */
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life -= 1;
        if (p.life <= 0) return false;

        // Store trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift();

        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;

        // Color cools as it ages — hue shifts, lightness drops
        const lifeRatio = p.life / p.maxLife;
        const coolHue = p.hue + (1 - lifeRatio) * 15;
        let lightness = p.lightness * lifeRatio;
        let alpha = lifeRatio;

        // Sparkle: random brightness pulses
        if (p.sparkle && Math.random() < 0.4) {
          lightness = Math.min(100, lightness + 30);
          alpha = Math.min(1, alpha + 0.3);
        }

        const size = p.size * (0.3 + lifeRatio * 0.7);

        // Draw trail
        for (let i = 0; i < p.trail.length - 1; i++) {
          const t = p.trail[i];
          const next = p.trail[i + 1];
          const trailAlpha = (i / p.trail.length) * alpha * 0.4;
          const trailSize = size * (i / p.trail.length);
          ctx.beginPath();
          ctx.moveTo(t.x, t.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `hsla(${coolHue}, ${p.saturation}%, ${lightness}%, ${trailAlpha})`;
          ctx.lineWidth = trailSize;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${coolHue}, ${p.saturation}%, ${lightness}%, ${alpha})`;
        ctx.fill();

        // Inner bright core for glow effect
        if (size > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${coolHue}, 50%, 95%, ${alpha * 0.8})`;
          ctx.fill();
        }

        return true;
      });

      // Cap particles to prevent performance issues
      if (particlesRef.current.length > 1500) {
        particlesRef.current = particlesRef.current.slice(-1500);
      }

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
