import { NextResponse } from "next/server";

export function GET() {
  const body = "google.com, pub-6323528813462144, DIRECT, f08c47fec0942fa0";
  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
