"use client";

import { useEffect, useRef } from "react";

const ADSENSE_CLIENT = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "pub-6323528813462144").trim();

interface AdUnitProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
}
export function AdUnit({ slot, format = "auto", className = "" }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    if (!ADSENSE_CLIENT || ADSENSE_CLIENT === "ca-pub-0000000000000000") return;
    try {
      if (!(window as unknown as Record<string, unknown>).adsbygoogle) {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.setAttribute("data-ad-client", `ca-${ADSENSE_CLIENT}`);
        document.head.appendChild(script);
      }
      setTimeout(() => {
        try {
          const w = window as unknown as Record<string, unknown>;
          const adsbygoogle = (w.adsbygoogle ?? []) as Record<string, unknown>[];
          adsbygoogle.push({});
          w.adsbygoogle = adsbygoogle;
        } catch (e) { console.warn("AdSense push failed:", e); }
      }, 500);
    } catch (e) { console.warn("AdSense init failed:", e); }
  }, []);
  if (!ADSENSE_CLIENT || ADSENSE_CLIENT === "ca-pub-0000000000000000") return null;
  return (
    <div className={`ad-container my-6 ${className}`} ref={adRef}>
      <p className="text-xs text-muted-foreground mb-1 text-center">Sponsored</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={`ca-${ADSENSE_CLIENT}`}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
