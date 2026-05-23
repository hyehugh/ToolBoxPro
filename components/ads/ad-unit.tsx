"use client";

import { useEffect, useRef } from "react";

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

    try {
      // Load AdSense script if not already loaded
      if (!(window as any).adsbygoogle) {
        const script = document.createElement("script");
        script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.setAttribute("data-ad-client", "ca-pub-XXXXXXXXXXXXXX");
        document.head.appendChild(script);
      }

      // Wait for script to load, then push ad
      setTimeout(() => {
        try {
          (window as any).adsbygoogle = (window as any).adsbygoogle || [];
          (window as any).adsbygoogle.push({});
        } catch (e) {
          console.warn("AdSense push failed:", e);
        }
      }, 500);
    } catch (e) {
      console.warn("AdSense init failed:", e);
    }
  }, []);

  return (
    <div className={`ad-container my-6 ${className}`} ref={adRef}>
      <p className="text-xs text-muted-foreground mb-1 text-center">Sponsored</p>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
