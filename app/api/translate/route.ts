import { NextRequest, NextResponse } from "next/server";

// Hugging Face Inference API — NLLB-200 distilled 600M model
// Free tier: ~30k input chars/month with token, very limited without
const HF_API_URL =
  "https://api-inference.huggingface.co/models/facebook/nllb-200-distilled-600M";

export async function POST(req: NextRequest) {
  try {
    const { text, sourceLang, targetLang } = await req.json();
    if (!text || !sourceLang || !targetLang) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Truncate very long input to avoid timeout
    const maxChars = 2000;
    const inputText = text.length > maxChars ? text.slice(0, maxChars) + "..." : text;

    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HF_API_TOKEN || ""}`,
      },
      body: JSON.stringify({
        inputs: inputText,
        parameters: {
          src_lang: sourceLang,
          tgt_lang: targetLang,
          wait_for_model: true,
        },
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      // If model is loading, HF returns 503 with "Loading" message
      if (response.status === 503 && body.includes("Loading")) {
        // Wait and retry once
        await new Promise((r) => setTimeout(r, 5000));
        const retry = await fetch(HF_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HF_API_TOKEN || ""}`,
          },
          body: JSON.stringify({
            inputs: inputText,
            parameters: { src_lang: sourceLang, tgt_lang: targetLang, wait_for_model: true },
          }),
        });
        if (!retry.ok) {
          const retryBody = await retry.text().catch(() => "");
          return NextResponse.json(
            { error: `Translation service error (${retry.status})` },
            { status: 502 }
          );
        }
        const data = await retry.json();
        const translation = Array.isArray(data)
          ? data[0]?.translation_text
          : data?.translation_text;
        return NextResponse.json({ translation: translation || "" });
      }

      return NextResponse.json(
        { error: `Translation service error (${response.status})` },
        { status: 502 }
      );
    }

    const data = await response.json();
    const translation = Array.isArray(data)
      ? data[0]?.translation_text
      : data?.translation_text;

    return NextResponse.json({ translation: translation || "" });
  } catch (e: any) {
    console.error("Translation error:", e);
    return NextResponse.json({ error: e?.message || "Internal error" }, { status: 500 });
  }
}
