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
  trail: { x: number; y: number }[];
  sparkle: boolean;
  drag: number;
  gravity: number;
  /** Wind drift — slight horizontal force */
  wind: number;
  /** Can this particle secondary-explode? */
  canBurst: boolean;
  /** Has it already burst? */
  burst: boolean;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
  hue: number;
  hue2: number;
  targetY: number;
  type: string;
  /** Wind direction for this explosion (affects all particles) */
  windX: number;
}

/* ──────────────────────────── Constants ──────────────────────────── */

const GRAVITY = 0.035;
const TRAIL_LENGTH = 12;

/** Realistic firework archetypes — weighted so organic shapes are more common */
const FIREWORK_TYPES = [
  { type: "burst", weight: 3 },       // Irregular burst (most natural)
  { type: "peony", weight: 3 },       // Random scattered sphere
  { type: "willow", weight: 2 },      // Drooping strands
  { type: "palm", weight: 2 },        // Upward fan then droop
  { type: "crossette", weight: 1 },   // Cross-pattern with secondary bursts
  { type: "ring", weight: 1 },        // Ring (less common, more natural now)
];

const PALETTES: number[][] = [
  [0, 30, 60],        // Warm: red, orange, yellow
  [120, 150, 180],    // Green-teal
  [200, 220, 260],    // Blue-purple
  [280, 310, 340],    // Pink-magenta
  [45, 270, 340],     // Gold + purple + pink
  [160, 200, 50],     // Teal + blue + gold
];

/* ──────────────────────────── Helpers ──────────────────────────── */

function pickType(): string {
  const total = FIREWORK_TYPES.reduce((s, t) => s + t.weight, 0);
  let r = Math.random() * total;
  for (const t of FIREWORK_TYPES) {
    r -= t.weight;
    if (r <= 0) return t.type;
  }
  return "burst";
}

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

    /* ─── Click → launch rocket ─── */
    const handleClick = (e: MouseEvent) => {
      const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const hue = palette[Math.floor(Math.random() * palette.length)];
      const hue2 = palette[Math.floor(Math.random() * palette.length)];
      const type = pickType();

      // Random wind direction for this explosion (affects all particles)
      const windX = (Math.random() - 0.5) * 0.06;

      rocketsRef.current.push({
        x: e.clientX + (Math.random() - 0.5) * 15,
        y: e.clientY + 20,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -6 - Math.random() * 2.5,
        trail: [],
        hue,
        hue2,
        targetY: e.clientY - 15 - Math.random() * 40,
        type,
        windX,
      });
    };

    /* ─── Explode rocket ─── */
    const explode = (rocket: Rocket) => {
      const palette = [rocket.hue, rocket.hue2];

      const pushParticle = (
        angle: number,
        speed: number,
        opts?: {
          life?: number;
          size?: number;
          drag?: number;
          gravity?: number;
          wind?: number;
          canBurst?: boolean;
          offset?: number;
        }
      ) => {
        const o = opts ?? {};
        const maxLife = o.life ?? 120 + Math.random() * 60;
        const pSize = o.size ?? 1.5 + Math.random() * 2;
        const hue = palette[Math.floor(Math.random() * palette.length)] + (Math.random() - 0.5) * 25;
        const offX = o.offset ? (Math.random() - 0.5) * o.offset : 0;
        const offY = o.offset ? (Math.random() - 0.5) * o.offset : 0;

        particlesRef.current.push({
          x: rocket.x + offX,
          y: rocket.y + offY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: maxLife,
          maxLife,
          size: pSize,
          hue: ((hue % 360) + 360) % 360,
          saturation: 80 + Math.random() * 20,
          lightness: 55 + Math.random() * 25,
          trail: [],
          sparkle: Math.random() < 0.28,
          drag: o.drag ?? 0.965 + Math.random() * 0.02,
          gravity: o.gravity ?? GRAVITY * (0.8 + Math.random() * 0.4),
          wind: o.wind ?? rocket.windX + (Math.random() - 0.5) * 0.02,
          canBurst: o.canBurst ?? false,
          burst: false,
        });
      };

      const t = rocket.type;

      if (t === "burst") {
        /* ── Irregular organic burst ── */
        // Phase 1: Dense core (fast, short-lived)
        const coreCount = 20 + Math.floor(Math.random() * 15);
        for (let i = 0; i < coreCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = (1.5 + Math.random() * 2.5) * (0.8 + Math.random() * 0.4);
          pushParticle(angle, speed, { life: 80 + Math.random() * 40, size: 1.2 + Math.random() * 1.5 });
        }
        // Phase 2: Outer spray (slower, longer-lived, some can secondary burst)
        const outerCount = 35 + Math.floor(Math.random() * 20);
        for (let i = 0; i < outerCount; i++) {
          // Cluster bias — particles prefer certain directions
          const baseAngle = Math.random() * Math.PI * 2;
          const spread = 0.4 + Math.random() * 0.8;
          const angle = baseAngle + (Math.random() - 0.5) * spread;
          const speed = 2.5 + Math.random() * 2 + Math.random() * Math.random() * 2; // Non-linear for uneven distribution
          pushParticle(angle, speed, {
            life: 140 + Math.random() * 60,
            size: 1.8 + Math.random() * 2.5,
            canBurst: Math.random() < 0.08, // 8% chance of secondary burst
          });
        }
        // Phase 3: Sparse stragglers (random few in unusual directions)
        for (let i = 0; i < 8; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.5 + Math.random() * 1.5;
          pushParticle(angle, speed, { life: 100 + Math.random() * 40, size: 3 + Math.random() * 2 });
        }
      }

      else if (t === "peony") {
        /* ── Scattered sphere — fully random angles & speeds ── */
        const count = 50 + Math.floor(Math.random() * 30);
        for (let i = 0; i < count; i++) {
          // Use Gaussian-like distribution for more natural clustering
          const angle = Math.random() * Math.PI * 2;
          const speedRand = Math.random();
          // Cube for uneven speed distribution (most particles medium speed, few very fast/slow)
          const speed = (2 + speedRand * speedRand * speedRand * 2.5) * (0.9 + Math.random() * 0.2);
          pushParticle(angle, speed, {
            life: 120 + Math.random() * 60,
            canBurst: Math.random() < 0.05,
          });
        }
      }

      else if (t === "willow") {
        /* ── Willow — upward then heavy droop ── */
        const count = 45 + Math.floor(Math.random() * 15);
        for (let i = 0; i < count; i++) {
          // Bias upward, spread outward
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
          const speed = 2 + Math.random() * 2;
          pushParticle(angle, speed, {
            life: 150 + Math.random() * 60,
            drag: 0.978 + Math.random() * 0.012,
            gravity: GRAVITY * (1.5 + Math.random() * 0.6),
            size: 1.2 + Math.random() * 1.5,
          });
        }
      }

      else if (t === "palm") {
        /* ── Palm tree — narrow upward fan then gravity droop ── */
        const count = 40 + Math.floor(Math.random() * 15);
        for (let i = 0; i < count; i++) {
          // Concentrated upward fan
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.2;
          const speed = 3 + Math.random() * 2;
          pushParticle(angle, speed, {
            life: 140 + Math.random() * 50,
            gravity: GRAVITY * 1.3,
            drag: 0.97,
          });
        }
      }

      else if (t === "crossette") {
        /* ── Crossette — cross pattern, particles burst again mid-flight ── */
        const arms = 4 + Math.floor(Math.random() * 3); // 4-6 arms
        const perArm = 8 + Math.floor(Math.random() * 5);
        const armOffset = Math.random() * Math.PI; // Random rotation
        for (let a = 0; a < arms; a++) {
          const armAngle = armOffset + (Math.PI * 2 * a) / arms;
          for (let i = 0; i < perArm; i++) {
            // Each arm has slight scatter
            const angle = armAngle + (Math.random() - 0.5) * 0.25;
            const speed = 2.5 + Math.random() * 1.5;
            pushParticle(angle, speed, {
              life: 100 + Math.random() * 30,
              canBurst: true, // All crossette particles can secondary burst
              size: 2 + Math.random() * 1.5,
            });
          }
        }
      }

      else if (t === "ring") {
        /* ── Ring — but with natural imperfections ── */
        const count = 45 + Math.floor(Math.random() * 10);
        const baseSpeed = 3 + Math.random() * 0.5;
        const ellipticalBias = (Math.random() - 0.5) * 0.4; // Slight ellipse
        const tilt = Math.random() * Math.PI; // Random tilt of the ring
        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count + tilt;
          // Speed varies slightly per particle (not perfect circle)
          const speed = baseSpeed * (0.85 + Math.random() * 0.3);
          // Add slight elliptical stretch
          const stretchedAngle = angle + Math.sin(angle) * ellipticalBias;
          pushParticle(stretchedAngle, speed, {
            life: 130 + Math.random() * 40,
            canBurst: Math.random() < 0.06,
          });
        }
      }

      /* ── Central flash — white burst particles ── */
      const flashCount = 6 + Math.floor(Math.random() * 4);
      for (let i = 0; i < flashCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.8;
        particlesRef.current.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 12 + Math.random() * 8,
          maxLife: 20,
          size: 4 + Math.random() * 4,
          hue: rocket.hue,
          saturation: 20 + Math.random() * 30,
          lightness: 90,
          trail: [],
          sparkle: true,
          drag: 0.88,
          gravity: 0,
          wind: 0,
          canBurst: false,
          burst: false,
        });
      }

      /* ── Smoke / dust particles (very slow, faint) ── */
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.6;
        particlesRef.current.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 200 + Math.random() * 80,
          maxLife: 280,
          size: 5 + Math.random() * 4,
          hue: rocket.hue,
          saturation: 10,
          lightness: 40,
          trail: [],
          sparkle: false,
          drag: 0.95,
          gravity: GRAVITY * 0.3,
          wind: rocket.windX * 2,
          canBurst: false,
          burst: false,
        });
      }
    };

    /* ─── Secondary burst (crossette / burst particles) ─── */
    const secondaryBurst = (p: Particle) => {
      p.burst = true;
      p.life = Math.min(p.life, 20); // Kill the parent quickly
      const count = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 1.5;
        particlesRef.current.push({
          x: p.x,
          y: p.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 40 + Math.random() * 25,
          maxLife: 65,
          size: 1 + Math.random() * 1.5,
          hue: p.hue + (Math.random() - 0.5) * 30,
          saturation: p.saturation,
          lightness: p.lightness,
          trail: [],
          sparkle: Math.random() < 0.3,
          drag: 0.96,
          gravity: GRAVITY * 1.2,
          wind: p.wind,
          canBurst: false,
          burst: false,
        });
      }
    };

    /* ─── Animation loop ─── */
    const animate = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      /* --- Rockets --- */
      rocketsRef.current = rocketsRef.current.filter((r) => {
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 12) r.trail.shift();

        for (let i = 0; i < r.trail.length; i++) {
          const tp = r.trail[i];
          const a = (i / r.trail.length) * 0.6;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, 1.2 + i * 0.08, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${r.hue}, 60%, 70%, ${a})`;
          ctx.fill();
        }

        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.08;
        r.vx *= 0.99;

        // Bright rocket head with glow
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 90%, 85%, 1)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 50%, 98%, 1)`;
        ctx.fill();

        if (r.vy >= -0.5 || r.y <= r.targetY) {
          explode(r);
          return false;
        }
        return true;
      });

      /* --- Particles --- */
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life -= 1;
        if (p.life <= 0) return false;

        // Secondary burst check
        if (p.canBurst && !p.burst && p.life < p.maxLife * 0.5 && Math.random() < 0.04) {
          secondaryBurst(p);
        }

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift();

        // Physics with individual drag, gravity, and wind
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.vx += p.wind; // Wind drift

        const lifeRatio = p.life / p.maxLife;
        const coolHue = p.hue + (1 - lifeRatio) * 15;
        let lightness = p.lightness * lifeRatio;
        let alpha = lifeRatio;

        if (p.sparkle && Math.random() < 0.35) {
          lightness = Math.min(100, lightness + 30);
          alpha = Math.min(1, alpha + 0.3);
        }

        const size = p.size * (0.15 + lifeRatio * 0.85);

        // Draw trail
        for (let i = 0; i < p.trail.length - 1; i++) {
          const tp = p.trail[i];
          const next = p.trail[i + 1];
          const ta = (i / p.trail.length) * alpha * 0.35;
          const ts = size * (i / p.trail.length);
          ctx.beginPath();
          ctx.moveTo(tp.x, tp.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `hsla(${coolHue}, ${p.saturation}%, ${lightness}%, ${ta})`;
          ctx.lineWidth = ts;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // Particle body
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${coolHue}, ${p.saturation}%, ${lightness}%, ${alpha})`;
        ctx.fill();

        // Bright inner core
        if (size > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${coolHue}, 50%, 95%, ${alpha * 0.8})`;
          ctx.fill();
        }

        return true;
      });

      if (particlesRef.current.length > 1400) {
        particlesRef.current = particlesRef.current.slice(-1400);
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
