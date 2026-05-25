"use client";

import { useLocale } from "@/lib/i18n/context";

export function TermsContent() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("terms.title")}</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
        <p><strong>{t("terms.lastUpdated")}</strong> May 22, 2026</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("terms.section1Title")}</h2>
        <p>{t("terms.section1Body")}</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("terms.section2Title")}</h2>
        <p>{t("terms.section2Body")}</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("terms.section3Title")}</h2>
        <p>{t("terms.section3Body")}</p>
        <ul className="list-disc pl-6 space-y-1">
          {(t("terms.section3Items") as string[]).map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("terms.section4Title")}</h2>
        <p>{t("terms.section4Body")}</p>

        <h2 className="text-lg font-bold text-foreground mt-6">{t("terms.section5Title")}</h2>
        <p>{t("terms.section5Body")}</p>
      </div>
    </div>
  );
}
