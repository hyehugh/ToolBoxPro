import { kv } from "@vercel/kv";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    if (!process.env.KV_URL && !process.env.KV_REST_API_URL) {
      return Response.json({ count: null, error: "KV not configured" });
    }

    const { searchParams } = new URL(request.url);
    const peek = searchParams.get("peek") === "1";

    let count: number | null;
    if (peek) {
      count = (await kv.get<number>("visitor_count")) ?? 0;
    } else {
      count = await kv.incr("visitor_count");
    }

    return Response.json({ count });
  } catch {
    return Response.json({ count: null });
  }
}
