"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-ZYHZ3FW9SL";

export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return;
    // Avoid duplicate injection
    if (document.querySelector(`script[src*="googletagmanager.com/gtag"]`)) return;

    // Load gtag.js
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag with Consent Mode v2
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    gtag("config", GA_ID, {
      page_path: window.location.pathname,
    });
  }, []);

  return null;
}
