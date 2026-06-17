"use client";

import Script from "next/script";

const ADSENSE_CLIENT = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "").trim();

export function AdSense() {
  if (!ADSENSE_CLIENT || ADSENSE_CLIENT === "ca-pub-0000000000000000") return null;

  return (
    <Script
      id="adsense-auto-ads"
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_CLIENT}`}
    />
  );
}
