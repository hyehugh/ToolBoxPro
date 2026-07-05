"use client";

import { useEffect, useRef } from "react";

/* ================================================================
 * Firework System — Based on NianBroken/Firework_Simulator (Apache-2.0)
 * 
 * Rendering: clearRect every frame (NO trail canvas, NO fade, NO residue)
 * Trails: each particle stores 40-frame position history, draws gradient streak
 * ================================================================ */

interface Star {
  x: number; y: number;
  speedX: number; speedY: number;
  life: number;
  fullLife: number;
  color: string;
  size: number;
  sparkFreq: number;
  sparkTimer: number;
  sparkSpeed: number;
  sparkLife: number;
  sparkColor: string;
  onDeath?: (s: Star) => void;
  dead: boolean;
  trail: { x: number; y: number }[];
}

interface Spark {
  x: number; y: number;
  speedX: number; speedY: number;
  life: number;
  color: string;
  trail: { x: number; y: number }[];
}

interface Flash { x: number; y: number; radius: number; life: number; }

interface Rocket {
  x: number; y: number;
  speedX: number; speedY: number;
  color: string;
  targetX: number; targetY: number;
  sparkTimer: number;
  sparkColor: string;
  burstFn: () => void;
  trail: { x: number; y: number }[];
}

const AIR_DRAG = 0.985;
const SPARK_DRAG = 0.92;
const GRAVITY = 0.06;
const PI2 = Math.PI * 2;
const STAR_TRAIL = 35;   // Star trail length in frames
const SPARK_TRAIL = 12;  // Spark trail length

const COLORS = [
  "#ff3860", "#ff7060", "#ffdd57", "#ffdd00",
  "#23d160", "#00d1b2", "#3273dc", "#00d4ff",
  "#54a0ff", "#5e72e4", "#8b57d9", "#e056fd",
  "#ff6bdf", "#ffffff",
];

const rc = () => COLORS[(Math.random() * COLORS.length) | 0];

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
  const rocketsRef = useRef<Rocket[]>([]);
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
        x, y, speedX: Math.sin(angle) * speed, speedY: Math.cos(angle) * speed,
        life, fullLife: life, color, size,
        sparkFreq: 0, sparkTimer: 0, sparkSpeed: 1, sparkLife: 60, sparkColor: color,
        dead: false, trail: [{ x, y }],
      };
      starsRef.current.push(s);
      return s;
    };

    const addSpark = (x: number, y: number, color: string, angle: number, speed: number, life: number) => {
      sparksRef.current.push({
        x, y, speedX: Math.sin(angle) * speed, speedY: Math.cos(angle) * speed,
        life, color, trail: [{ x, y }],
      });
    };

    const makeBurstFn = (cx: number, cy: number) => {
      const baseColor = rc();
      const speed = 4 + Math.random() * 2;
      const starCount = 55 + ((Math.random() * 35) | 0);
      const starLife = 260 + (Math.random() * 120 | 0);
      const type = Math.random();

      return () => {
        if (type < 0.25) {
          createBurst(starCount, (a, sm) => {
            const s = addStar(cx, cy, rc(), a, sm * speed, starLife);
            s.sparkFreq = 5; s.sparkSpeed = 0.4; s.sparkLife = 30; s.sparkColor = rc();
          });
        } else if (type < 0.45) {
          const n = 48, rs = speed * 1.3, tilt = Math.random() * PI2;
          for (let i = 0; i < n; i++) addStar(cx, cy, baseColor, (PI2 * i) / n + tilt, rs, starLife);
          createBurst(starCount * 0.3, (a, sm) => addStar(cx, cy, rc(), a, sm * speed * 0.4, starLife * 0.7, 2));
        } else if (type < 0.6) {
          createBurst(starCount * 0.7, (a, sm) => {
            const s = addStar(cx, cy, baseColor, a, sm * speed * 0.85, starLife * 1.5);
            s.sparkFreq = 3; s.sparkSpeed = 0.3; s.sparkLife = 50; s.sparkColor = "#ffdd00";
          });
        } else if (type < 0.75) {
          createBurst(starCount * 0.6, (a, sm) => {
            const s = addStar(cx, cy, baseColor, a, sm * speed * 1.1, starLife * 0.75);
            s.onDeath = (self) => {
              for (let i = 0; i < 4; i++) addStar(self.x, self.y, rc(), Math.random() * PI2, 0.8 + Math.random() * 0.8, 100);
            };
          });
        } else {
          createBurst(starCount, (a, sm) => addStar(cx, cy, rc(), a, sm * speed, starLife));
        }
        flashesRef.current.push({ x: cx, y: cy, radius: 100 + Math.random() * 50, life: 15 });
      };
    };

    const handleClick = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;
      const launchX = targetX + (Math.random() - 0.5) * 40;
      const launchY = canvas.height;
      const color = rc();
      const dx = targetX - launchX;
      const dy = targetY - launchY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const speed = Math.min(16, Math.max(8, dist * 0.04));
      const angle = Math.atan2(dy, dx);

      rocketsRef.current.push({
        x: launchX, y: launchY,
        speedX: Math.cos(angle) * speed, speedY: Math.sin(angle) * speed,
        color: "#ffffff", targetX, targetY,
        sparkTimer: 0, sparkColor: color,
        burstFn: makeBurstFn(targetX, targetY),
        trail: [{ x: launchX, y: launchY }],
      });
    };

    // ─── Helper: draw a gradient trail from position history ───
    const drawTrail = (
      trail: { x: number; y: number }[],
      color: string,
      maxLen: number,
      headSize: number,
      headAlpha: number
    ) => {
      const len = trail.length;
      if (len < 2) return;

      for (let j = 0; j < len - 1; j++) {
        // Newer positions (higher index) = brighter and thicker
        const ratio = (j + 1) / len;  // 0→1
        const a = headAlpha * ratio * ratio;  // Quadratic fade for smoother trail
        const w = Math.max(0.3, headSize * ratio);
        ctx.strokeStyle = color;
        ctx.globalAlpha = a;
        ctx.lineWidth = w;
        ctx.beginPath();
        ctx.moveTo(trail[j].x, trail[j].y);
        ctx.lineTo(trail[j + 1].x, trail[j + 1].y);
        ctx.stroke();
      }
    };

    // ─── Animation loop ───
    const animate = () => {
      // Clear completely — NO fade, NO residue, NO gray fog
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.lineCap = "round";

      // ── Flashes (expanding radial gradient) ──
      for (let i = flashesRef.current.length - 1; i >= 0; i--) {
        const f = flashesRef.current[i];
        f.life -= 1;
        if (f.life <= 0) { flashesRef.current.splice(i, 1); continue; }
        const fAlpha = f.life / 15;
        const fRadius = f.radius * (1 + (1 - fAlpha) * 0.3);
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, fRadius);
        g.addColorStop(0.025, `rgba(255,255,255,${fAlpha})`);
        g.addColorStop(0.125, `rgba(255,160,20,${fAlpha * 0.2})`);
        g.addColorStop(0.32, `rgba(255,140,20,${fAlpha * 0.11})`);
        g.addColorStop(1, "rgba(255,120,20,0)");
        ctx.fillStyle = g;
        ctx.globalAlpha = 1;
        ctx.fillRect(f.x - fRadius, f.y - fRadius, fRadius * 2, fRadius * 2);
      }

      // ── Rockets ──
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.x += r.speedX; r.y += r.speedY;
        r.speedY += 0.08;
        r.speedX *= 0.998;

        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 20) r.trail.shift();

        // Sparks
        r.sparkTimer -= 1;
        if (r.sparkTimer <= 0) {
          r.sparkTimer = 1;
          addSpark(r.x, r.y, r.sparkColor,
            Math.PI / 2 + (Math.random() - 0.5) * 0.5,
            0.3 + Math.random() * 0.4,
            15 + (Math.random() * 10 | 0));
        }

        // Draw rocket trail (white streak)
        drawTrail(r.trail, "#ffffff", 20, 2.5, 0.8);

        // Bright head
        ctx.strokeStyle = "#ffffff";
        ctx.globalAlpha = 1;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(r.trail[r.trail.length - 2]?.x ?? r.x, r.trail[r.trail.length - 2]?.y ?? r.y);
        ctx.lineTo(r.x, r.y);
        ctx.stroke();

        if (r.speedY >= -0.5 || r.y <= r.targetY) {
          r.burstFn();
          rocketsRef.current.splice(i, 1);
        }
      }

      // ── Stars ──
      for (let i = starsRef.current.length - 1; i >= 0; i--) {
        const s = starsRef.current[i];
        s.life -= 1;
        if (s.life <= 0) {
          if (s.onDeath && !s.dead) { s.dead = true; s.onDeath(s); }
          starsRef.current.splice(i, 1);
          continue;
        }
        const burn = Math.pow(s.life / s.fullLife, 0.5);

        s.x += s.speedX; s.y += s.speedY;
        s.speedX *= AIR_DRAG; s.speedY *= AIR_DRAG;
        s.speedY += GRAVITY;

        // Record trail
        s.trail.push({ x: s.x, y: s.y });
        if (s.trail.length > STAR_TRAIL) s.trail.shift();

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

        // Draw trail (gradient streak from history)
        const alpha = Math.min(1, burn * 1.4);
        const headSize = Math.max(0.5, s.size * burn);
        drawTrail(s.trail, s.color, STAR_TRAIL, headSize, alpha);

        // Bright white-hot core at head when young
        if (burn > 0.65 && s.trail.length >= 2) {
          ctx.strokeStyle = "rgba(255,255,255,0.9)";
          ctx.globalAlpha = alpha;
          ctx.lineWidth = Math.max(0.3, headSize * 0.4);
          ctx.beginPath();
          ctx.moveTo(s.trail[s.trail.length - 2].x, s.trail[s.trail.length - 2].y);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();
        }
      }

      // ── Sparks ──
      ctx.lineCap = "butt";
      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const sp = sparksRef.current[i];
        sp.life -= 1;
        if (sp.life <= 0) { sparksRef.current.splice(i, 1); continue; }

        sp.x += sp.speedX; sp.y += sp.speedY;
        sp.speedX *= SPARK_DRAG; sp.speedY *= SPARK_DRAG;
        sp.speedY += GRAVITY * 0.5;

        sp.trail.push({ x: sp.x, y: sp.y });
        if (sp.trail.length > SPARK_TRAIL) sp.trail.shift();

        const alpha = Math.min(1, sp.life / 30);
        drawTrail(sp.trail, sp.color, SPARK_TRAIL, 1.2, alpha);
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
    />
  );
}
