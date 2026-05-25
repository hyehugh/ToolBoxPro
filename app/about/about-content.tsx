"use client";

import { tools } from "@/lib/tools/data";
import { useLocale } from "@/lib/i18n/context";

export function AboutContent() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("about.title")}</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>{t("about.paragraph1").replace("{count}", String(tools.length))}</p>
        <p>{t("about.paragraph2")}</p>
        <p>{t("about.paragraph3")}</p>
        <h2 className="text-xl font-bold text-foreground mt-8">{t("about.principlesTitle")}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {(t("about.principles") as string[]).map((item: string, i: number) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      </div>
    </div>
  );
}
