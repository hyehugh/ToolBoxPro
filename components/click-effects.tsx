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
  trail: { x: number; y: number }[];  // History positions for trail
}

interface Spark {
  x: number; y: number;
  prevX: number; prevY: number;
  speedX: number; speedY: number;
  life: number;          // Frames remaining
  color: string;
}

interface Flash { x: number; y: number; radius: number; }

interface Rocket {
  x: number; y: number;
  speedX: number; speedY: number;
  prevX: number; prevY: number;
  color: string;
  targetX: number;
  targetY: number;
  sparkTimer: number;
  sparkColor: string;
  burstFn: () => void;
}

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
  const rocketsRef = useRef<Rocket[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Offscreen trail canvas — particles draw lines here, it fades slowly
    const trailCanvas = document.createElement("canvas");
    const trailCtx = trailCanvas.getContext("2d");
    if (!trailCtx) return;

    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      trailCanvas.width = innerWidth;
      trailCanvas.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);

    // (TRAIL_LEN no longer needed — trail persistence handled by trail canvas fade)

    const addStar = (x: number, y: number, color: string, angle: number, speed: number, life: number, size = 2.5): Star => {
      const s: Star = {
        x, y, prevX: x, prevY: y,
        speedX: Math.sin(angle) * speed,
        speedY: Math.cos(angle) * speed,
        life, fullLife: life, color, size,
        sparkFreq: 0, sparkTimer: 0, sparkSpeed: 1, sparkLife: 60, sparkColor: color,
        dead: false,
        trail: [],
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

    // ─── Pre-compute burst function for this click (passed to rocket) ───
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
        flashesRef.current.push({ x: cx, y: cy, radius: 100 + Math.random() * 50 });
      };
    };

    // ─── Click → Launch rocket from bottom of screen ───
    const handleClick = (e: MouseEvent) => {
      const targetX = e.clientX;
      const targetY = e.clientY;
      const launchX = targetX + (Math.random() - 0.5) * 40;
      const launchY = canvas.height;  // Bottom of screen
      const color = rc();

      // Calculate launch velocity to reach target (projectile motion)
      const dx = targetX - launchX;
      const dy = targetY - launchY;   // Negative (going up)
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Speed proportional to distance, clamped
      const speed = Math.min(16, Math.max(8, dist * 0.04));
      const angle = Math.atan2(dy, dx);

      rocketsRef.current.push({
        x: launchX,
        y: launchY,
        speedX: Math.cos(angle) * speed,
        speedY: Math.sin(angle) * speed,
        prevX: launchX,
        prevY: launchY,
        color: "#ffffff",
        targetX,
        targetY,
        sparkTimer: 0,
        sparkColor: color,
        burstFn: makeBurstFn(targetX, targetY),
      });
    };

    // ─── Animation loop ───
    const animate = () => {
      // ── Trail canvas: fade existing pixels to transparent (NOT black overlay) ──
      // destination-out reduces alpha of already-drawn pixels → they become transparent, not gray
      trailCtx.globalCompositeOperation = "destination-out";
      trailCtx.fillStyle = "rgba(0, 0, 0, 0.06)";  // 6% of pixels become transparent per frame
      trailCtx.fillRect(0, 0, trailCanvas.width, trailCanvas.height);
      trailCtx.globalCompositeOperation = "lighter";

      // ── Rockets on trail canvas ──
      trailCtx.lineCap = "round";
      for (let i = rocketsRef.current.length - 1; i >= 0; i--) {
        const r = rocketsRef.current[i];
        r.prevX = r.x; r.prevY = r.y;
        r.x += r.speedX; r.y += r.speedY;
        r.speedY += 0.08;
        r.speedX *= 0.998;

        r.sparkTimer -= 1;
        if (r.sparkTimer <= 0) {
          r.sparkTimer = 1;
          addSpark(r.x, r.y, r.sparkColor,
            Math.PI / 2 + (Math.random() - 0.5) * 0.5,
            0.3 + Math.random() * 0.4,
            15 + (Math.random() * 10 | 0));
        }

        // Draw rocket on trail canvas (persistent streak)
        trailCtx.strokeStyle = "#ffffff";
        trailCtx.lineWidth = 2.5;
        trailCtx.beginPath();
        trailCtx.moveTo(r.prevX, r.prevY);
        trailCtx.lineTo(r.x, r.y);
        trailCtx.stroke();

        if (r.speedY >= -0.5 || r.y <= r.targetY) {
          r.burstFn();
          rocketsRef.current.splice(i, 1);
        }
      }

      // ── Burst flashes on trail canvas ──
      while (flashesRef.current.length) {
        const f = flashesRef.current.pop()!;
        const g = trailCtx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius);
        g.addColorStop(0.025, "rgba(255,255,255,1)");
        g.addColorStop(0.125, "rgba(255,160,20,0.2)");
        g.addColorStop(0.32, "rgba(255,140,20,0.11)");
        g.addColorStop(1, "rgba(255,120,20,0)");
        trailCtx.fillStyle = g;
        trailCtx.fillRect(f.x - f.radius, f.y - f.radius, f.radius * 2, f.radius * 2);
      }

      // ── Stars: draw trail lines on trail canvas, bright head on main canvas ──
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

        const alpha = Math.min(1, burn * 1.4);

        // Draw star line on TRAIL canvas (will persist and fade slowly)
        trailCtx.strokeStyle = s.color;
        trailCtx.globalAlpha = alpha;
        trailCtx.lineWidth = Math.max(0.5, s.size * burn);
        trailCtx.beginPath();
        trailCtx.moveTo(s.prevX, s.prevY);
        trailCtx.lineTo(s.x, s.y);
        trailCtx.stroke();

        // White-hot core on trail canvas when young
        if (burn > 0.65) {
          trailCtx.strokeStyle = "rgba(255,255,255,0.8)";
          trailCtx.lineWidth = Math.max(0.3, s.size * burn * 0.35);
          trailCtx.beginPath();
          trailCtx.moveTo(s.prevX, s.prevY);
          trailCtx.lineTo(s.x, s.y);
          trailCtx.stroke();
        }
      }
      trailCtx.globalAlpha = 1;

      // ── Sparks on trail canvas ──
      trailCtx.lineCap = "butt";
      trailCtx.lineWidth = 1;
      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const sp = sparksRef.current[i];
        sp.life -= 1;
        if (sp.life <= 0) { sparksRef.current.splice(i, 1); continue; }

        sp.prevX = sp.x; sp.prevY = sp.y;
        sp.x += sp.speedX; sp.y += sp.speedY;
        sp.speedX *= SPARK_DRAG; sp.speedY *= SPARK_DRAG;
        sp.speedY += GRAVITY * 0.5;

        trailCtx.strokeStyle = sp.color;
        trailCtx.globalAlpha = Math.min(1, sp.life / 30);
        trailCtx.beginPath();
        trailCtx.moveTo(sp.prevX, sp.prevY);
        trailCtx.lineTo(sp.x, sp.y);
        trailCtx.stroke();
      }
      trailCtx.globalAlpha = 1;

      // ── Main canvas: clear completely, then composite trail canvas ──
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";
      ctx.drawImage(trailCanvas, 0, 0);

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
