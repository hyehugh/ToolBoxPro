"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 * Realistic Fireworks — Proven Visual Techniques
 * ================================================================
 * Key rendering tricks from best-in-class implementations:
 * 1. shadowBlur for real glow (not just additive blend)
 * 2. History-based gradient trails (fading line segments)
 * 3. Rocket emits falling sparks during ascent
 * 4. Burst emits glowing particles with shadow halos
 * 5. Large scale: initial burst speed 12-22px fills screen
 * 6. Quadratic drag: fast decel at high speed, drift at low speed
 * ================================================================ */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;        // Pre-computed hsl string for performance
  glowColor: string;    // Lighter version for shadow
  coords: { x: number; y: number }[];  // History for trail
  gravity: number;
  drag: number;         // Linear drag coefficient (lower = more drag)
  sparkle: boolean;
  canBurst: boolean;
  burst: boolean;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  glowColor: string;
  targetY: number;
  type: string;
  hue: number;
  hue2: number;
  windX: number;
}

const COORD_COUNT = 6;  // Trail history length
const GRAVITY = 0.02;

const TYPES: { type: string; weight: number }[] = [
  { type: "peony", weight: 4 },
  { type: "chrysanthemum", weight: 3 },
  { type: "willow", weight: 2 },
  { type: "palm", weight: 2 },
  { type: "crossette", weight: 1 },
  { type: "ring", weight: 1 },
];

const PALETTES: number[][] = [
  [0, 30, 50],       // Red-orange-gold
  [45, 90, 140],     // Gold-green
  [180, 210, 250],   // Cyan-blue
  [280, 320, 350],   // Purple-pink
  [40, 200, 280],    // Gold-cyan-purple
  [0, 60, 300],      // Red-gold-magenta
];

function pickType(): string {
  const total = TYPES.reduce((s, t) => s + t.weight, 0);
  let r = Math.random() * total;
  for (const t of TYPES) {
    r -= t.weight;
    if (r <= 0) return t.type;
  }
  return "peony";
}

function makeColor(hue: number, sat: number, light: number): string {
  return `hsl(${hue}, ${sat}%, ${light}%)`;
}

export function ClickEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const sparksRef = useRef<Spark[]>([]);
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

    /* ─── Click → Launch ─── */
    const handleClick = (e: MouseEvent) => {
      const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      const hue = pal[Math.floor(Math.random() * pal.length)];
      const hue2 = pal[Math.floor(Math.random() * pal.length)];
      const color = makeColor(hue, 90, 70);
      const glow = makeColor(hue, 80, 60);

      rocketsRef.current.push({
        x: e.clientX + (Math.random() - 0.5) * 10,
        y: e.clientY + 15,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -5 - Math.random() * 1.5,
        color,
        glowColor: glow,
        targetY: e.clientY - 20 - Math.random() * 50,
        type: pickType(),
        hue,
        hue2,
        windX: (Math.random() - 0.5) * 0.025,
      });
    };

    /* ─── Explode ─── */
    const explode = (r: Rocket) => {
      const pal = [r.hue, r.hue2];

      const add = (
        angle: number,
        speed: number,
        opts?: { life?: number; gravity?: number; drag?: number; canBurst?: boolean; size?: number }
      ) => {
        const o = opts ?? {};
        const ml = o.life ?? 280 + Math.random() * 140;
        const hue = pal[Math.floor(Math.random() * pal.length)] + (Math.random() - 0.5) * 18;
        const h = ((hue % 360) + 360) % 360;
        const sat = 85 + Math.random() * 15;
        const sz = o.size ?? 2 + Math.random() * 2;

        particlesRef.current.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: ml,
          maxLife: ml,
          size: sz,
          color: makeColor(h, sat, 58 + Math.random() * 17),
          glowColor: makeColor(h, sat - 20, 68 + Math.random() * 17),
          coords: [],
          gravity: o.gravity ?? GRAVITY * (0.7 + Math.random() * 0.6),
          drag: o.drag ?? 0.985 + Math.random() * 0.01,
          sparkle: Math.random() < 0.25,
          canBurst: o.canBurst ?? false,
          burst: false,
        });
      };

      const t = r.type;

      if (t === "peony") {
        const n = 55 + Math.floor(Math.random() * 25);
        for (let i = 0; i < n; i++) {
          const angle = Math.random() * Math.PI * 2;
          const sr = Math.random();
          const speed = 10 + sr * sr * sr * 10 + Math.random() * 2;
          add(angle, speed, { canBurst: Math.random() < 0.05 });
        }
      } else if (t === "chrysanthemum") {
        const n = 70 + Math.floor(Math.random() * 20);
        for (let i = 0; i < n; i++) {
          const angle = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.12;
          const speed = 12 + Math.random() * 8;
          add(angle, speed, { size: 2.5 + Math.random() * 2 });
        }
      } else if (t === "willow") {
        const n = 50 + Math.floor(Math.random() * 15);
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI;
          const speed = 8 + Math.random() * 8;
          add(angle, speed, {
            life: 360 + Math.random() * 120,
            gravity: GRAVITY * (1.6 + Math.random() * 0.5),
            drag: 0.992,
            size: 1.5 + Math.random() * 1.5,
          });
        }
      } else if (t === "palm") {
        const n = 45 + Math.floor(Math.random() * 15);
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.0;
          const speed = 12 + Math.random() * 8;
          add(angle, speed, {
            life: 340 + Math.random() * 100,
            gravity: GRAVITY * 1.3,
          });
        }
      } else if (t === "crossette") {
        const arms = 4 + Math.floor(Math.random() * 3);
        const perArm = 10 + Math.floor(Math.random() * 5);
        const offset = Math.random() * Math.PI;
        for (let a = 0; a < arms; a++) {
          const armAngle = offset + (Math.PI * 2 * a) / arms;
          for (let i = 0; i < perArm; i++) {
            const angle = armAngle + (Math.random() - 0.5) * 0.2;
            const speed = 10 + Math.random() * 6;
            add(angle, speed, {
              canBurst: true,
              size: 2.5 + Math.random() * 1.5,
            });
          }
        }
      } else if (t === "ring") {
        const n = 50 + Math.floor(Math.random() * 10);
        const base = 16 + Math.random() * 3;
        const stretch = (Math.random() - 0.5) * 0.35;
        const tilt = Math.random() * Math.PI;
        for (let i = 0; i < n; i++) {
          const angle = (Math.PI * 2 * i) / n + tilt;
          const speed = base * (0.9 + Math.random() * 0.2);
          const sa = angle + Math.sin(angle) * stretch;
          add(sa, speed, { canBurst: Math.random() < 0.06 });
        }
      }

      // Central flash — bright white burst
      for (let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 3;
        particlesRef.current.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 30 + Math.random() * 15,
          maxLife: 45,
          size: 6 + Math.random() * 5,
          color: makeColor(r.hue, 20, 92),
          glowColor: makeColor(r.hue, 60, 80),
          coords: [],
          gravity: 0,
          drag: 0.85,
          sparkle: true,
          canBurst: false,
          burst: false,
        });
      }
    };

    /* ─── Secondary burst ─── */
    const secondaryBurst = (p: Particle) => {
      p.burst = true;
      p.life = Math.min(p.life, 25);
      const n = 5 + Math.floor(Math.random() * 4);
      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 4 + Math.random() * 5;
        const h = Math.random() * 360;
        particlesRef.current.push({
          x: p.x,
          y: p.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 120 + Math.random() * 60,
          maxLife: 180,
          size: 1.5 + Math.random() * 1.5,
          color: p.color,
          glowColor: p.glowColor,
          coords: [],
          gravity: GRAVITY * 1.1,
          drag: 0.98,
          sparkle: Math.random() < 0.3,
          canBurst: false,
          burst: false,
        });
      }
    };

    /* ─── Draw a glowing particle with trail ─── */
    const drawParticle = (p: Particle) => {
      const lr = p.life / p.maxLife;
      const alpha = Math.min(1, lr * 1.5);
      const size = p.size * (0.4 + lr * 0.6);

      // Draw trail (history-based gradient lines)
      if (p.coords.length > 1) {
        for (let i = 0; i < p.coords.length - 1; i++) {
          const ratio = i / p.coords.length;
          const ta = ratio * alpha * 0.5;
          const ts = size * ratio * 0.8;
          if (ts < 0.3) continue;
          ctx.beginPath();
          ctx.moveTo(p.coords[i].x, p.coords[i].y);
          ctx.lineTo(p.coords[i + 1].x, p.coords[i + 1].y);
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = ta;
          ctx.lineWidth = ts;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // Draw glowing particle body using shadowBlur
      ctx.shadowBlur = size * 4;
      ctx.shadowColor = p.glowColor;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fill();

      // Bright white-hot core
      if (size > 1.5 && lr > 0.3) {
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * lr * 0.7})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size * 0.35, 0, Math.PI * 2);
      ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    /* ─── Animation loop ─── */
    const animate = () => {
      // Clear completely — no residue
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      /* --- Rockets --- */
      rocketsRef.current = rocketsRef.current.filter((r) => {
        // Emit falling sparks during ascent
        sparksRef.current.push({
          x: r.x + (Math.random() - 0.5) * 2,
          y: r.y + 2,
          vx: (Math.random() - 0.5) * 0.3,
          vy: 0.3 + Math.random() * 0.5,
          life: 12 + Math.random() * 8,
          maxLife: 20,
          color: r.color,
        });

        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.035;
        r.vx *= 0.998;

        // Draw glowing rocket head
        ctx.shadowBlur = 12;
        ctx.shadowColor = r.glowColor;
        ctx.fillStyle = r.color;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // White core
        ctx.fillStyle = "rgba(255,255,255,0.9)";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        if (r.vy >= -0.2 || r.y <= r.targetY) {
          explode(r);
          return false;
        }
        return true;
      });

      /* --- Particles --- */
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life--;
        if (p.life <= 0) return false;

        // Secondary burst
        if (p.canBurst && !p.burst && p.life < p.maxLife * 0.55 && Math.random() < 0.025) {
          secondaryBurst(p);
        }

        // Quadratic drag: strong at high speed, weak at low speed
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 0.01) {
          const dragF = 0.006 * spd;
          const ratio = Math.max(0, 1 - dragF);
          p.vx *= ratio * p.drag;
          p.vy *= ratio * p.drag;
        }

        // Store history
        p.coords.push({ x: p.x, y: p.y });
        if (p.coords.length > COORD_COUNT) p.coords.shift();

        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;

        // Emit micro sparks occasionally (sparkler effect)
        if (p.life % 4 === 0 && p.life > 30) {
          sparksRef.current.push({
            x: p.x,
            y: p.y,
            vx: p.vx * 0.1 + (Math.random() - 0.5) * 0.3,
            vy: p.vy * 0.1 + (Math.random() - 0.5) * 0.3,
            life: 10 + Math.random() * 8,
            maxLife: 18,
            color: p.color,
          });
        }

        // Sparkle flicker
        if (p.sparkle && Math.random() < 0.2) {
          // Boost: draw an extra-bright flash
          ctx.shadowBlur = p.size * 8;
          ctx.shadowColor = "rgba(255,255,255,0.8)";
          ctx.fillStyle = "rgba(255,255,255,0.6)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        drawParticle(p);
        return true;
      });

      /* --- Micro sparks --- */
      sparksRef.current = sparksRef.current.filter((s) => {
        s.life--;
        if (s.life <= 0) return false;

        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.015;
        s.vx *= 0.97;

        const sa = (s.life / s.maxLife) * 0.4;
        ctx.globalAlpha = sa;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;

        return true;
      });

      // Cap
      if (particlesRef.current.length > 1200) particlesRef.current = particlesRef.current.slice(-1200);
      if (sparksRef.current.length > 1500) sparksRef.current = sparksRef.current.slice(-1500);

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
