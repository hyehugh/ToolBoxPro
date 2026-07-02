"use client";

import { useLocale } from "@/lib/i18n/context";

export function PrivacyContent() {
  const { t, tArray } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("privacy.title")}</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
        <p><strong>{t("privacy.lastUpdated")}</strong> May 24, 2026</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section1Title")}</h2>
        <p>{t("privacy.section1Body")}</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section2Title")}</h2>
        <p>{t("privacy.section2Body")}</p>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section2NoCollect") }} />
        <ul className="list-disc pl-6 space-y-1">
          {(tArray("privacy.section2NoCollectItems")).map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section3Title")}</h2>
        <p>{t("privacy.section3Body1")}</p>
        <p className="font-medium text-foreground">{t("privacy.section3Adsense")}</p>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section3Body2") }} />
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section3Body3") }} />

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section4Title")}</h2>
        <p>{t("privacy.section4Body")}</p>
        <ul className="list-disc pl-6 space-y-1">
          <li dangerouslySetInnerHTML={{ __html: t("privacy.section4GoogleAnalytics") }} />
          <li dangerouslySetInnerHTML={{ __html: t("privacy.section4AdSense") }} />
          <li dangerouslySetInnerHTML={{ __html: t("privacy.section4Vercel") }} />
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section5Title")}</h2>
        <p>{t("privacy.section5Body")}</p>
        <ul className="list-disc pl-6 space-y-1">
          {(tArray("privacy.section5Items")).map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t("privacy.section5Contact")}</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section6Title")}</h2>
        <p>{t("privacy.section6Body")}</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("privacy.section7Title")}</h2>
        <p dangerouslySetInnerHTML={{ __html: t("privacy.section7Body") }} />
      </div>
    </div>
  );
}
