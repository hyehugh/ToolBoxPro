"use client";

import { useLocale } from "@/lib/i18n/context";

export function ContactContent() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">{t("contact.title")}</h1>
      <p className="text-muted-foreground mb-8">
        {t("contact.intro")}
      </p>
      <div className="space-y-6">
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">{t("contact.generalInquiries")}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t("contact.generalInquiriesDesc")}
          </p>
          <a
            href="mailto:hyehugh520@gmail.com"
            className="text-sm text-primary hover:underline mt-1 block"
          >
            hyehugh520@gmail.com
          </a>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">{t("contact.reportBug")}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t("contact.reportBugDesc")}
          </p>
          <a
            href="mailto:hyehugh520@gmail.com"
            className="text-sm text-primary hover:underline mt-1 block"
          >
            hyehugh520@gmail.com
          </a>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">{t("contact.advertising")}</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {t("contact.advertisingDesc")}
          </p>
          <a
            href="mailto:hyehugh520@gmail.com"
            className="text-sm text-primary hover:underline mt-1 block"
          >
            hyehugh520@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
