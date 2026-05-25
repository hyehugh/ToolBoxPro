"use client";

import Link from "next/link";
import { tools } from "@/lib/tools/data";
import { useLocale } from "@/lib/i18n/context";
import { FooterThemeToggle } from "./footer-theme-toggle";

export function Footer() {
  const { t } = useLocale();
  const featuredTools = tools.slice(0, 5);
  const moreTools = tools.slice(5, 10);

  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3">{t("footer.tools")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {featuredTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="hover:text-foreground transition-colors">
                    {t(`toolList.${tool.slug}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">{t("footer.moreTools")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {moreTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="hover:text-foreground transition-colors">
                    {t(`toolList.${tool.slug}.name`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">{t("footer.about")}</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">{t("footer.contact")}</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">{t("footer.blog")}</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">{t("footer.terms")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">ToolboxPro</h3>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}<br />
              {t("footer.taglineDetail")}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ToolboxPro. {t("footer.rights")}</p>
          <FooterThemeToggle />
        </div>
      </div>
    </footer>
  );
}
