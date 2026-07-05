"use client";

import { useLocale } from "@/lib/i18n/context";
import type { ToolComparison } from "@/lib/tools/comparisons";

export function ToolComparisonSection({ comparison }: { comparison: ToolComparison }) {
  const { locale } = useLocale();
  const isZh = locale === "zh";

  return (
    <section className="mt-10 p-6 rounded-xl border bg-card/50" aria-labelledby="comparison-heading">
      <h2 id="comparison-heading" className="text-lg font-bold mb-4 flex items-center gap-2">
        <span aria-hidden="true">⚖️</span>
        {isZh ? "与同类工具对比" : "How It Compares"}
      </h2>

      <p className="text-sm text-muted-foreground mb-6">
        {isZh
          ? `看看 ${isZh ? comparison.toolNameZh : comparison.toolName} 与其他工具的区别：`
          : `See how ${comparison.toolName} stacks up against alternatives:`}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                {isZh ? "特点" : "Feature"}
              </th>
              <th className="text-center py-3 px-2 font-medium text-primary">
                ToolboxPro
              </th>
              {comparison.competitors.map((c) => (
                <th key={c.name} className="text-center py-3 px-2 font-medium text-muted-foreground">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* ToolboxPro advantages */}
            {comparison.toolboxProAdvantages.map((adv, i) => (
              <tr key={`tp-${i}`} className="border-b last:border-0">
                <td className="py-2 px-2 text-muted-foreground">
                  {isZh ? comparison.toolboxProAdvantagesZh?.[i] ?? adv : adv}
                </td>
                <td className="text-center py-2 px-2">✅</td>
                {comparison.competitors.map((c) => (
                  <td key={c.name} className="text-center py-2 px-2">
                    {c.cons.some((con) => con.toLowerCase().includes(adv.toLowerCase().split(" ").slice(0, 3).join(" ")))
                      ? "❌"
                      : "⚠️"}
                  </td>
                ))}
              </tr>
            ))}
            {/* Free / No signup row */}
            <tr className="border-b last:border-0 bg-muted/30">
              <td className="py-2 px-2 font-medium">
                {isZh ? "完全免费 / 无需注册" : "Fully Free / No Signup"}
              </td>
              <td className="text-center py-2 px-2">✅</td>
              {comparison.competitors.map((c) => (
                <td key={c.name} className="text-center py-2 px-2">
                  {c.cons.some((con) => con.includes("account") || con.includes("free tier") || con.includes("limits"))
                    ? "❌"
                    : "⚠️"}
                </td>
              ))}
            </tr>
            {/* Privacy row */}
            <tr className="border-b last:border-0 bg-muted/30">
              <td className="py-2 px-2 font-medium">
                {isZh ? "100% 隐私（不上传文件）" : "100% Privacy (No Upload)"}
              </td>
              <td className="text-center py-2 px-2">✅</td>
              {comparison.competitors.map((c) => (
                <td key={c.name} className="text-center py-2 px-2">
                  {c.cons.some((con) => con.includes("upload") || con.includes("server") || con.includes("Server"))
                    ? "❌"
                    : "⚠️"}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Competitor details */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {comparison.competitors.map((c) => (
          <div key={c.name} className="p-4 rounded-lg border bg-card text-sm">
            <h3 className="font-medium mb-2">{c.name}</h3>
            <div className="space-y-1">
              {c.pros.map((pro, i) => (
                <p key={`pro-${i}`} className="text-green-600 dark:text-green-400 text-xs">
                  + {isZh ? c.prosZh?.[i] ?? pro : pro}
                </p>
              ))}
              {c.cons.map((con, i) => (
                <p key={`con-${i}`} className="text-red-500 dark:text-red-400 text-xs">
                  - {isZh ? c.consZh?.[i] ?? con : con}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
