/**
 * Simple IP-based rate limiter using Vercel KV.
 * Falls back to in-memory Map when KV is not configured (local dev).
 */

const WINDOW_SECONDS = 60;

interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
}

// In-memory fallback for local dev
const memoryStore = new Map<string, { count: number; resetAt: number }>();

export async function checkRateLimit(
  ip: string,
  maxRequests: number = 10
): Promise<RateLimitResult> {
  const key = `ratelimit:${ip}`;
  const now = Date.now();
  const reset = now + WINDOW_SECONDS * 1000;

  // Try KV first if available
  if (process.env.KV_URL || process.env.KV_REST_API_URL) {
    try {
      const { kv } = await import("@vercel/kv");
      const current = (await kv.get<number>(key)) ?? 0;
      if (current >= maxRequests) {
        const ttl = await kv.ttl(key);
        return {
          success: false,
          remaining: 0,
          reset: now + Math.max(ttl, 0) * 1000,
        };
      }
      const pipeline = kv.pipeline();
      pipeline.incr(key);
      pipeline.expire(key, WINDOW_SECONDS);
      await pipeline.exec();
      return {
        success: true,
        remaining: maxRequests - current - 1,
        reset,
      };
    } catch {
      // Fall through to in-memory
    }
  }

  // In-memory fallback
  const entry = memoryStore.get(ip);
  if (entry && entry.resetAt > now) {
    if (entry.count >= maxRequests) {
      return { success: false, remaining: 0, reset: entry.resetAt };
    }
    entry.count++;
    return { success: true, remaining: maxRequests - entry.count, reset: entry.resetAt };
  }

  memoryStore.set(ip, { count: 1, resetAt: reset });
  return { success: true, remaining: maxRequests - 1, reset };
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIP = request.headers.get("x-real-ip");
  if (realIP) return realIP;
  return "unknown";
}
