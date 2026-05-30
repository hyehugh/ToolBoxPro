export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");

  if (!domain || !domain.includes(".")) {
    return Response.json({ error: "Invalid domain" }, { status: 400 });
  }

  const cleanDomain = domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split("/")[0]
    .split("?")[0];

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`https://rdap.org/domain/${encodeURIComponent(cleanDomain)}`, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.status === 404) {
      return Response.json(
        { error: `Domain "${cleanDomain}" not found` },
        { status: 404 }
      );
    }

    if (!res.ok) {
      return Response.json(
        { error: `RDAP lookup failed (${res.status})` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return Response.json({ error: "Lookup timed out" }, { status: 504 });
    }
    return Response.json({ error: "Lookup failed" }, { status: 500 });
  }
}
