"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-ZYHZ3FW9SL";

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // Google Consent Mode v2: default consent to denied
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
          });
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
