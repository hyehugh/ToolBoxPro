"use client";

import { useEffect } from "react";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "pub-6323528813462144";

export function AdSense() {
  useEffect(() => {
    if (!ADSENSE_CLIENT || ADSENSE_CLIENT === "ca-pub-0000000000000000") return;
    // Avoid duplicate injection
    if (document.querySelector(`script[src*="pagead2.googlesyndication.com"]`)) return;

    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_CLIENT}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, []);

  return null;
}
