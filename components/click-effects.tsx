"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 * Firework System — Based on NianBroken/Firework_Simulator (Apache-2.0)
 * Source: https://github.com/NianBroken/Firework_Simulator
 *
 * Frame-based physics (60fps reference):
 * - Particle speed: 3-5 px/frame → covers ~500px in 3 seconds
 * - Particle life: 240-360 frames → 4-6 seconds visible
 * - Gravity: 0.06 px/frame² → natural downward arc
 * - Trail fade: 0.06 alpha/frame → ~2s persistence
 * ================================================================ */

interface Star {
  x: number; y: number;
  prevX: number; prevY: number;
  speedX: number; speedY: number;
  life: number;          // Frames remaining
  fullLife: number;
  color: string;
  size: number;
  sparkFreq: number;     // Frames between spark emissions
  sparkTimer: number;
  sparkSpeed: number;
  sparkLife: number;
  sparkColor: string;
  onDeath?: (s: Star) => void;
  dead: boolean;
}

interface Spark {
  x: number; y: number;
  prevX: number; prevY: number;
  speedX: number; speedY: number;
  life: number;          // Frames remaining
  color: string;
}

interface Flash { x: number; y: number; radius: number; }

const AIR_DRAG = 0.985;
const SPARK_DRAG = 0.92;
const GRAVITY = 0.06;
const PI2 = Math.PI * 2;

const COLORS = [
  "#ff3860", "#ff7060", "#ffdd57", "#ffdd00",
  "#23d160", "#00d1b2", "#3273dc", "#00d4ff",
  "#54a0ff", "#5e72e4", "#8b57d9", "#e056fd",
  "#ff6bdf", "#ffffff",
];

const rc = () => COLORS[(Math.random() * COLORS.length) | 0];

// Cosine-weighted spherical distribution
function createBurst(count: number, fn: (angle: number, speedMult: number) => void) {
  const radius = 0.5 * Math.sqrt(count / Math.PI);
  const circ = 2 * radius * Math.PI;
  const halfC = circ / 2;
  for (let ring = 0; ring <= halfC; ring++) {
    const ringAngle = (ring / halfC) * (Math.PI / 2);
    const ringSize = Math.cos(ringAngle);
    const perRing = circ * ringSize;
    const inc = PI2 / perRing;
    const off = Math.random() * inc;
    const jitter = inc * 0.33;
    for (let i = 0; i < perRing; i++) {
      fn(inc * i + off + Math.random() * jitter, ringSize);
    }
  }
}

export function ClickEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const flashesRef = useRef<Flash[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    resize();
    addEventListener("resize", resize);

    const addStar = (x: number, y: number, color: string, angle: number, speed: number, life: number, size = 2.5): Star => {
      const s: Star = {
        x, y, prevX: x, prevY: y,
        speedX: Math.sin(angle) * speed,
        speedY: Math.cos(angle) * speed,
        life, fullLife: life, color, size,
        sparkFreq: 0, sparkTimer: 0, sparkSpeed: 1, sparkLife: 60, sparkColor: color,
        dead: false,
      };
      starsRef.current.push(s);
      return s;
    };

    const addSpark = (x: number, y: number, color: string, angle: number, speed: number, life: number) => {
      sparksRef.current.push({
        x, y, prevX: x, prevY: y,
        speedX: Math.sin(angle) * speed,
        speedY: Math.cos(angle) * speed,
        life, color,
      });
    };

    // ─── Burst at click point (the apex) ───
    const burst = (cx: number, cy: number) => {
      const baseColor = rc();
      const speed = 4 + Math.random() * 2;       // 4-6 px/frame — big explosion
      const starCount = 55 + ((Math.random() * 35) | 0);
      const starLife = 260 + (Math.random() * 120 | 0); // 260-380 frames = 4.3-6.3 seconds
      const type = Math.random();

      if (type < 0.25) {
        // Chrysanthemum: sphere + light glitter
        createBurst(starCount, (a, sm) => {
          const s = addStar(cx, cy, rc(), a, sm * speed, starLife);
          s.sparkFreq = 5;        // Emit spark every 5 frames
          s.sparkSpeed = 0.4;
          s.sparkLife = 30;
          s.sparkColor = rc();
        });
      } else if (type < 0.45) {
        // Ring + pistil
        const n = 48;
        const rs = speed * 1.3;
        const tilt = Math.random() * PI2;
        for (let i = 0; i < n; i++) addStar(cx, cy, baseColor, (PI2 * i) / n + tilt, rs, starLife);
        createBurst(starCount * 0.3, (a, sm) => addStar(cx, cy, rc(), a, sm * speed * 0.4, starLife * 0.7, 2));
      } else if (type < 0.6) {
        // Willow: long life, heavy droop, gold sparks
        createBurst(starCount * 0.7, (a, sm) => {
          const s = addStar(cx, cy, baseColor, a, sm * speed * 0.85, starLife * 1.5);
          s.sparkFreq = 3;
          s.sparkSpeed = 0.3;
          s.sparkLife = 50;
          s.sparkColor = "#ffdd00";
        });
      } else if (type < 0.75) {
        // Crossette: secondary burst on death
        createBurst(starCount * 0.6, (a, sm) => {
          const s = addStar(cx, cy, baseColor, a, sm * speed * 1.1, starLife * 0.75);
          s.onDeath = (self) => {
            for (let i = 0; i < 4; i++) addStar(self.x, self.y, rc(), Math.random() * PI2, 0.8 + Math.random() * 0.8, 100);
          };
        });
      } else {
        // Peony: pure random sphere, multi-color
        createBurst(starCount, (a, sm) => addStar(cx, cy, rc(), a, sm * speed, starLife));
      }

      // Burst flash
      flashesRef.current.push({ x: cx, y: cy, radius: 100 + Math.random() * 50 });
    };

    const handleClick = (e: MouseEvent) => burst(e.clientX, e.clientY);

    // ─── Animation loop ───
    const animate = () => {
      // Trail fade — slow for long persistence
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighten";

      // ── Burst flashes ──
      while (flashesRef.current.length) {
        const f = flashesRef.current.pop()!;
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
        g.addColorStop(0.025, "rgba(255,255,255,1)");
        g.addColorStop(0.125, "rgba(255,160,20,0.2)");
        g.addColorStop(0.32, "rgba(255,140,20,0.11)");
        g.addColorStop(1, "rgba(255,120,20,0)");
        ctx.fillStyle = g;
        ctx.fillRect(f.x - f.radius, f.y - f.radius, f.radius * 2, f.radius * 2);
      }

      // ── Stars ──
      ctx.lineCap = "round";
      for (let i = starsRef.current.length - 1; i >= 0; i--) {
        const s = starsRef.current[i];
        s.life -= 1;
        if (s.life <= 0) {
          if (s.onDeath && !s.dead) { s.dead = true; s.onDeath(s); }
          starsRef.current.splice(i, 1);
          continue;
        }
        const burn = Math.pow(s.life / s.fullLife, 0.5);

        s.prevX = s.x; s.prevY = s.y;
        s.x += s.speedX; s.y += s.speedY;
        s.speedX *= AIR_DRAG; s.speedY *= AIR_DRAG;
        s.speedY += GRAVITY;

        // Emit sparks
        if (s.sparkFreq > 0) {
          s.sparkTimer -= 1;
          while (s.sparkTimer < 0) {
            s.sparkTimer += s.sparkFreq * (0.75 + (1 - burn) * 4);
            addSpark(s.x, s.y, s.sparkColor, Math.random() * PI2,
              Math.random() * s.sparkSpeed * burn,
              s.sparkLife + (Math.random() * s.sparkLife * 0.25 | 0));
          }
        }

        // Draw star as line (motion blur trail)
        const alpha = Math.min(1, burn * 1.4);
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = Math.max(0.5, s.size * burn);
        ctx.beginPath();
        ctx.moveTo(s.prevX, s.prevY);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();

        // White-hot core when young
        if (burn > 0.65) {
          ctx.strokeStyle = "rgba(255,255,255,0.8)";
          ctx.lineWidth = Math.max(0.3, s.size * burn * 0.35);
          ctx.beginPath();
          ctx.moveTo(s.prevX, s.prevY);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      // ── Sparks ──
      ctx.lineCap = "butt";
      ctx.lineWidth = 1;
      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const sp = sparksRef.current[i];
        sp.life -= 1;
        if (sp.life <= 0) { sparksRef.current.splice(i, 1); continue; }

        sp.prevX = sp.x; sp.prevY = sp.y;
        sp.x += sp.speedX; sp.y += sp.speedY;
        sp.speedX *= SPARK_DRAG; sp.speedY *= SPARK_DRAG;
        sp.speedY += GRAVITY * 0.5;

        ctx.strokeStyle = sp.color;
        ctx.globalAlpha = Math.min(1, sp.life / 30);
        ctx.beginPath();
        ctx.moveTo(sp.prevX, sp.prevY);
        ctx.lineTo(sp.x, sp.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (starsRef.current.length > 700) starsRef.current = starsRef.current.slice(-700);
      if (sparksRef.current.length > 1000) sparksRef.current = sparksRef.current.slice(-1000);

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("click", handleClick);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      removeEventListener("resize", resize);
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
