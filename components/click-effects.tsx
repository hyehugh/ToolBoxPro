"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 *  Realistic Firework Particle System — First Principles
 * ================================================================
 *
 *  Physics:
 *  1. Instantaneous burst from a single point
 *  2. Quadratic air drag (F ∝ v²) — fast decel at high speed, drift at low speed
 *  3. Each particle sheds micro-sparks continuously (sparkler effect)
 *  4. Color temperature: white-hot → target hue → dim orange as it dies
 *  5. Large-scale: initial speed 12-22 px/frame → fills the screen
 *
 *  Timing @ 60fps:
 *  - Launch: ~1.5s (90 frames)
 *  - Burst phase: 0.1s (instant)
 *  - Spread + drift: 4-6s (240-360 frames)
 *  - Fade: last 20% of life
 *
 *  Types (all real, no novelty shapes):
 *  - Peony: random sphere, uneven density (most common)
 *  - Chrysanthemum: dense radial with trailing sparks
 *  - Willow: slow upward then heavy drooping fall
 *  - Palm: narrow fan upward then gravity arc
 *  - Crossette: arms that secondary-burst mid-flight
 *  - Ring: imperfect circle with elliptical stretch
 * ================================================================ */

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
  // Sparkler: emit small sparks every few frames
  sparkTimer: number;
  sparkle: boolean;
  gravity: number;
  wind: number;
  canBurst: boolean;
  burst: boolean;
}

interface MicroSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  size: number;
}

interface Rocket {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hue: number;
  hue2: number;
  targetY: number;
  type: string;
  windX: number;
  sparkTimer: number;
}

const G = 0.015; // Gravity — gentle arc
const TRAIL_LEN = 14;

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

export function ClickEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const sparksRef = useRef<MicroSpark[]>([]);
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

    /* ─── Emit micro-spark (sparkler trail) ─── */
    const emitSpark = (p: Particle) => {
      sparksRef.current.push({
        x: p.x + (Math.random() - 0.5) * 2,
        y: p.y + (Math.random() - 0.5) * 2,
        vx: p.vx * 0.1 + (Math.random() - 0.5) * 0.5,
        vy: p.vy * 0.1 + (Math.random() - 0.5) * 0.5,
        life: 15 + Math.random() * 15,
        maxLife: 30,
        hue: p.hue,
        size: 0.5 + Math.random() * 0.8,
      });
    };

    /* ─── Click → Launch ─── */
    const handleClick = (e: MouseEvent) => {
      const pal = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      rocketsRef.current.push({
        x: e.clientX + (Math.random() - 0.5) * 10,
        y: e.clientY + 15,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -4.5 - Math.random() * 1.5,
        hue: pal[Math.floor(Math.random() * pal.length)],
        hue2: pal[Math.floor(Math.random() * pal.length)],
        targetY: e.clientY - 20 - Math.random() * 50,
        type: pickType(),
        windX: (Math.random() - 0.5) * 0.03,
        sparkTimer: 0,
      });
    };

    /* ─── Explode ─── */
    const explode = (r: Rocket) => {
      const pal = [r.hue, r.hue2];

      const add = (
        angle: number,
        speed: number,
        opts?: {
          life?: number;
          size?: number;
          gravity?: number;
          canBurst?: boolean;
        }
      ) => {
        const o = opts ?? {};
        const ml = o.life ?? 280 + Math.random() * 140;
        const hue = pal[Math.floor(Math.random() * pal.length)] + (Math.random() - 0.5) * 20;
        particlesRef.current.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: ml,
          maxLife: ml,
          size: o.size ?? 1.8 + Math.random() * 2.2,
          hue: ((hue % 360) + 360) % 360,
          saturation: 85 + Math.random() * 15,
          lightness: 60 + Math.random() * 20,
          sparkTimer: Math.floor(Math.random() * 3),
          sparkle: Math.random() < 0.3,
          gravity: o.gravity ?? G * (0.7 + Math.random() * 0.6),
          wind: r.windX + (Math.random() - 0.5) * 0.01,
          canBurst: o.canBurst ?? false,
          burst: false,
        });
      };

      const t = r.type;

      if (t === "peony") {
        // Random sphere with Gaussian-ish speed clustering
        const n = 55 + Math.floor(Math.random() * 25);
        for (let i = 0; i < n; i++) {
          const angle = Math.random() * Math.PI * 2;
          const sr = Math.random();
          // Wide range: 8 to 18 px/frame
          const speed = 8 + sr * sr * sr * 10 + Math.random() * 2;
          add(angle, speed, { canBurst: Math.random() < 0.05 });
        }
      }

      else if (t === "chrysanthemum") {
        // Dense radial — lots of particles, trailing sparks
        const n = 70 + Math.floor(Math.random() * 20);
        for (let i = 0; i < n; i++) {
          const angle = (Math.PI * 2 * i) / n + (Math.random() - 0.5) * 0.12;
          const speed = 10 + Math.random() * 8;
          add(angle, speed, { size: 2 + Math.random() * 2 });
        }
      }

      else if (t === "willow") {
        // Upward burst then heavy droop
        const n = 50 + Math.floor(Math.random() * 15);
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.0;
          const speed = 7 + Math.random() * 8;
          add(angle, speed, {
            life: 350 + Math.random() * 120,
            gravity: G * (1.6 + Math.random() * 0.5),
            size: 1.5 + Math.random() * 1.5,
          });
        }
      }

      else if (t === "palm") {
        // Narrow upward fan
        const n = 45 + Math.floor(Math.random() * 15);
        for (let i = 0; i < n; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.0;
          const speed = 10 + Math.random() * 8;
          add(angle, speed, {
            life: 320 + Math.random() * 100,
            gravity: G * 1.2,
          });
        }
      }

      else if (t === "crossette") {
        // Arms that burst again
        const arms = 4 + Math.floor(Math.random() * 3);
        const perArm = 10 + Math.floor(Math.random() * 5);
        const offset = Math.random() * Math.PI;
        for (let a = 0; a < arms; a++) {
          const armAngle = offset + (Math.PI * 2 * a) / arms;
          for (let i = 0; i < perArm; i++) {
            const angle = armAngle + (Math.random() - 0.5) * 0.2;
            const speed = 9 + Math.random() * 6;
            add(angle, speed, {
              canBurst: true,
              size: 2.2 + Math.random() * 1.5,
            });
          }
        }
      }

      else if (t === "ring") {
        // Imperfect ring — wide
        const n = 50 + Math.floor(Math.random() * 10);
        const base = 14 + Math.random() * 3; // Very wide ring
        const stretch = (Math.random() - 0.5) * 0.35;
        const tilt = Math.random() * Math.PI;
        for (let i = 0; i < n; i++) {
          const angle = (Math.PI * 2 * i) / n + tilt;
          const speed = base * (0.9 + Math.random() * 0.2);
          const sa = angle + Math.sin(angle) * stretch;
          add(sa, speed, { canBurst: Math.random() < 0.06 });
        }
      }

      // Central white-hot flash
      const flashN = 8 + Math.floor(Math.random() * 4);
      for (let i = 0; i < flashN; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.5 + Math.random() * 2.5;
        particlesRef.current.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 25 + Math.random() * 15,
          maxLife: 40,
          size: 5 + Math.random() * 5,
          hue: r.hue,
          saturation: 15,
          lightness: 95,
          sparkTimer: 0,
          sparkle: true,
          gravity: 0,
          wind: 0,
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
        const speed = 3 + Math.random() * 4;
        particlesRef.current.push({
          x: p.x,
          y: p.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 100 + Math.random() * 60,
          maxLife: 160,
          size: 1.2 + Math.random() * 1.5,
          hue: p.hue + (Math.random() - 0.5) * 25,
          saturation: p.saturation,
          lightness: p.lightness,
          sparkTimer: 0,
          sparkle: Math.random() < 0.3,
          gravity: G * 1.1,
          wind: p.wind,
          canBurst: false,
          burst: false,
        });
      }
    };

    /* ─── Animation loop ─── */
    const animate = () => {
      // Clear completely — NO residue
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      /* --- Rockets --- */
      rocketsRef.current = rocketsRef.current.filter((r) => {
        // Emit rocket trail sparks
        r.sparkTimer++;
        if (r.sparkTimer >= 2) {
          r.sparkTimer = 0;
          sparksRef.current.push({
            x: r.x + (Math.random() - 0.5) * 2,
            y: r.y + (Math.random() - 0.5) * 2,
            vx: (Math.random() - 0.5) * 0.5,
            vy: 0.5 + Math.random() * 0.8,
            life: 15 + Math.random() * 10,
            maxLife: 25,
            hue: r.hue,
            size: 0.8 + Math.random() * 0.6,
          });
        }

        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.035; // Rocket decelerates as it rises
        r.vx *= 0.998;

        // Bright rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 90%, 88%, 1)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 40%, 98%, 1)`;
        ctx.fill();

        if (r.vy >= -0.2 || r.y <= r.targetY) {
          explode(r);
          return false;
        }
        return true;
      });

      /* --- Main particles --- */
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life--;
        if (p.life <= 0) return false;

        // Secondary burst
        if (p.canBurst && !p.burst && p.life < p.maxLife * 0.55 && Math.random() < 0.025) {
          secondaryBurst(p);
        }

        // QUADRATIC DRAG — the key to realism
        // At high speed, drag is strong (fast decel); at low speed, barely any (slow drift)
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.01) {
          const dragForce = 0.008 * speed; // Quadratic: F ∝ v
          const dragRatio = Math.max(0, 1 - dragForce);
          p.vx *= dragRatio;
          p.vy *= dragRatio;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx += p.wind;

        // Emit micro-sparks (sparkler trail)
        p.sparkTimer++;
        if (p.sparkTimer >= 3 && p.life > 20) {
          p.sparkTimer = 0;
          emitSpark(p);
        }

        // Color temperature evolution
        const lr = p.life / p.maxLife;
        let hue: number;
        let lightness: number;
        let alpha: number;

        if (lr > 0.8) {
          // White-hot phase (first 20% of life)
          hue = p.hue;
          lightness = 92;
          alpha = 1;
        } else if (lr > 0.25) {
          // Target color phase
          const blend = (lr - 0.25) / 0.55; // 0→1
          hue = p.hue;
          lightness = p.lightness + blend * 15;
          alpha = 0.4 + lr * 0.6;
        } else {
          // Dying ember phase (last 25%)
          hue = p.hue + (1 - lr / 0.25) * 20; // Shift toward orange
          lightness = p.lightness * (lr / 0.25) * 0.7;
          alpha = lr / 0.25 * 0.6;
        }

        // Sparkle flicker
        if (p.sparkle && Math.random() < 0.25) {
          lightness = Math.min(100, lightness + 25);
          alpha = Math.min(1, alpha + 0.2);
        }

        const size = p.size * (0.3 + lr * 0.7);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${p.saturation}%, ${lightness}%, ${alpha})`;
        ctx.fill();

        // Bright inner core
        if (size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 0.35, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, 40%, 97%, ${alpha * 0.85})`;
          ctx.fill();
        }

        return true;
      });

      /* --- Micro-sparks (sparkler trails) --- */
      sparksRef.current = sparksRef.current.filter((s) => {
        s.life--;
        if (s.life <= 0) return false;

        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.02; // Very gentle gravity on sparks
        s.vx *= 0.97;
        s.vy *= 0.97;

        const sa = (s.life / s.maxLife) * 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 80%, 75%, ${sa})`;
        ctx.fill();

        return true;
      });

      // Cap for performance
      if (particlesRef.current.length > 1500) {
        particlesRef.current = particlesRef.current.slice(-1500);
      }
      if (sparksRef.current.length > 2000) {
        sparksRef.current = sparksRef.current.slice(-2000);
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
