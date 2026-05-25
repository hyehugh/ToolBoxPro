"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";

export default function NotFoundPage() {
  const { t } = useLocale();

  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {t("notFound.message")}
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        {t("notFound.backHome")}
      </Link>
    </div>
  );
}
