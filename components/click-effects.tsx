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
  wind: number;
  canBurst: boolean;
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
  windX: number;
}

/* ──────────────────────────── Constants ──────────────────────────── */

// Slow & wide — realistic feel
const GRAVITY = 0.012;       // Half the previous value
const TRAIL_LENGTH = 16;     // Longer trails

const FIREWORK_TYPES = [
  { type: "burst", weight: 3 },
  { type: "peony", weight: 3 },
  { type: "willow", weight: 2 },
  { type: "palm", weight: 2 },
  { type: "crossette", weight: 1 },
  { type: "ring", weight: 1 },
];

const PALETTES: number[][] = [
  [0, 30, 60],
  [120, 150, 180],
  [200, 220, 260],
  [280, 310, 340],
  [45, 270, 340],
  [160, 200, 50],
];

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
      const windX = (Math.random() - 0.5) * 0.04;

      rocketsRef.current.push({
        x: e.clientX + (Math.random() - 0.5) * 15,
        y: e.clientY + 20,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -3.5 - Math.random() * 1.5,  // Much slower rise
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
        const maxLife = o.life ?? 240 + Math.random() * 120;  // Double life
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
          drag: o.drag ?? 0.982 + Math.random() * 0.01,  // Higher drag = slower decel
          gravity: o.gravity ?? GRAVITY * (0.8 + Math.random() * 0.4),
          wind: o.wind ?? rocket.windX + (Math.random() - 0.5) * 0.015,
          canBurst: o.canBurst ?? false,
          burst: false,
        });
      };

      const t = rocket.type;

      if (t === "burst") {
        // Dense core
        const coreCount = 20 + Math.floor(Math.random() * 15);
        for (let i = 0; i < coreCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = (2 + Math.random() * 3) * (0.8 + Math.random() * 0.4);  // 2x wider
          pushParticle(angle, speed, { life: 160 + Math.random() * 80, size: 1.2 + Math.random() * 1.5 });
        }
        // Outer spray — 2x wider range
        const outerCount = 35 + Math.floor(Math.random() * 20);
        for (let i = 0; i < outerCount; i++) {
          const baseAngle = Math.random() * Math.PI * 2;
          const spread = 0.4 + Math.random() * 0.8;
          const angle = baseAngle + (Math.random() - 0.5) * spread;
          const speed = 4 + Math.random() * 3.5 + Math.random() * Math.random() * 3;  // Much wider
          pushParticle(angle, speed, {
            life: 280 + Math.random() * 120,
            size: 1.8 + Math.random() * 2.5,
            canBurst: Math.random() < 0.08,
          });
        }
        // Sparse stragglers
        for (let i = 0; i < 8; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 1 + Math.random() * 2;  // Wider
          pushParticle(angle, speed, { life: 200 + Math.random() * 80, size: 3 + Math.random() * 2 });
        }
      }

      else if (t === "peony") {
        const count = 50 + Math.floor(Math.random() * 30);
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speedRand = Math.random();
          // 2x wider speed range
          const speed = (3.5 + speedRand * speedRand * speedRand * 4) * (0.9 + Math.random() * 0.2);
          pushParticle(angle, speed, {
            life: 240 + Math.random() * 120,
            canBurst: Math.random() < 0.05,
          });
        }
      }

      else if (t === "willow") {
        const count = 45 + Math.floor(Math.random() * 15);
        for (let i = 0; i < count; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1;
          const speed = 3 + Math.random() * 3;  // Wider
          pushParticle(angle, speed, {
            life: 300 + Math.random() * 120,
            drag: 0.988 + Math.random() * 0.008,
            gravity: GRAVITY * (1.5 + Math.random() * 0.6),
            size: 1.2 + Math.random() * 1.5,
          });
        }
      }

      else if (t === "palm") {
        const count = 40 + Math.floor(Math.random() * 15);
        for (let i = 0; i < count; i++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 1.2;
          const speed = 5 + Math.random() * 3;  // Wider
          pushParticle(angle, speed, {
            life: 280 + Math.random() * 100,
            gravity: GRAVITY * 1.3,
            drag: 0.978,
          });
        }
      }

      else if (t === "crossette") {
        const arms = 4 + Math.floor(Math.random() * 3);
        const perArm = 8 + Math.floor(Math.random() * 5);
        const armOffset = Math.random() * Math.PI;
        for (let a = 0; a < arms; a++) {
          const armAngle = armOffset + (Math.PI * 2 * a) / arms;
          for (let i = 0; i < perArm; i++) {
            const angle = armAngle + (Math.random() - 0.5) * 0.25;
            const speed = 4 + Math.random() * 2.5;  // Wider
            pushParticle(angle, speed, {
              life: 200 + Math.random() * 60,
              canBurst: true,
              size: 2 + Math.random() * 1.5,
            });
          }
        }
      }

      else if (t === "ring") {
        const count = 45 + Math.floor(Math.random() * 10);
        const baseSpeed = 5.5 + Math.random() * 1;  // Much wider ring
        const ellipticalBias = (Math.random() - 0.5) * 0.4;
        const tilt = Math.random() * Math.PI;
        for (let i = 0; i < count; i++) {
          const angle = (Math.PI * 2 * i) / count + tilt;
          const speed = baseSpeed * (0.85 + Math.random() * 0.3);
          const stretchedAngle = angle + Math.sin(angle) * ellipticalBias;
          pushParticle(stretchedAngle, speed, {
            life: 260 + Math.random() * 80,
            canBurst: Math.random() < 0.06,
          });
        }
      }

      /* ── Central flash ── */
      const flashCount = 6 + Math.floor(Math.random() * 4);
      for (let i = 0; i < flashCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.8;
        particlesRef.current.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 24 + Math.random() * 16,  // Longer flash
          maxLife: 40,
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
    };

    /* ─── Secondary burst ─── */
    const secondaryBurst = (p: Particle) => {
      p.burst = true;
      p.life = Math.min(p.life, 30);  // Slower fade
      const count = 4 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 2;  // Wider
        particlesRef.current.push({
          x: p.x,
          y: p.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 80 + Math.random() * 50,  // Longer
          maxLife: 130,
          size: 1 + Math.random() * 1.5,
          hue: p.hue + (Math.random() - 0.5) * 30,
          saturation: p.saturation,
          lightness: p.lightness,
          trail: [],
          sparkle: Math.random() < 0.3,
          drag: 0.975,
          gravity: GRAVITY * 1.2,
          wind: p.wind,
          canBurst: false,
          burst: false,
        });
      }
    };

    /* ─── Animation loop ─── */
    const animate = () => {
      // Clear completely every frame — no ghost trails / residue
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      /* --- Rockets --- */
      rocketsRef.current = rocketsRef.current.filter((r) => {
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 16) r.trail.shift();  // Longer rocket trail

        for (let i = 0; i < r.trail.length; i++) {
          const tp = r.trail[i];
          const a = (i / r.trail.length) * 0.6;
          ctx.beginPath();
          ctx.arc(tp.x, tp.y, 1.2 + i * 0.06, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${r.hue}, 60%, 70%, ${a})`;
          ctx.fill();
        }

        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.04;  // Slower rocket deceleration
        r.vx *= 0.995;

        // Rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 90%, 85%, 1)`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${r.hue}, 50%, 98%, 1)`;
        ctx.fill();

        if (r.vy >= -0.3 || r.y <= r.targetY) {  // Slower apex detection
          explode(r);
          return false;
        }
        return true;
      });

      /* --- Particles --- */
      particlesRef.current = particlesRef.current.filter((p) => {
        p.life -= 1;
        if (p.life <= 0) return false;

        if (p.canBurst && !p.burst && p.life < p.maxLife * 0.5 && Math.random() < 0.03) {
          secondaryBurst(p);
        }

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > TRAIL_LENGTH) p.trail.shift();

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.vy += p.gravity;
        p.vx += p.wind;

        const lifeRatio = p.life / p.maxLife;
        const coolHue = p.hue + (1 - lifeRatio) * 15;
        let lightness = p.lightness * lifeRatio;
        let alpha = lifeRatio;

        if (p.sparkle && Math.random() < 0.3) {
          lightness = Math.min(100, lightness + 30);
          alpha = Math.min(1, alpha + 0.3);
        }

        const size = p.size * (0.15 + lifeRatio * 0.85);

        // Trail — drawn explicitly, no canvas residue
        for (let i = 0; i < p.trail.length - 1; i++) {
          const tp = p.trail[i];
          const next = p.trail[i + 1];
          const ta = (i / p.trail.length) * alpha * 0.3;
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

        // Inner core
        if (size > 1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${coolHue}, 50%, 95%, ${alpha * 0.8})`;
          ctx.fill();
        }

        return true;
      });

      if (particlesRef.current.length > 2000) {
        particlesRef.current = particlesRef.current.slice(-2000);
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
