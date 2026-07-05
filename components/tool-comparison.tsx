"use client";

import { useLocale } from "@/lib/i18n/context";
import type { ToolComparison } from "@/lib/tools/comparisons";

/** Auto-translate common English terms in comparison data for Chinese locale. */
const ZH_MAP: Record<string, string> = {
  "Free": "免费", "free": "免费",
  "No signup": "无需注册", "No signup required": "无需注册",
  "No upload": "不上传文件", "No server upload": "不上传到服务器",
  "Privacy": "隐私保护", "Private": "隐私保护",
  "Open source": "开源", "Fast": "快速", "Simple": "简单",
  "Easy to use": "易用", "Lightweight": "轻量",
  "No ads": "无广告", "No limits": "无限制",
  "100% client-side": "100%客户端处理",
  "Tree view": "树状视图", "Validation": "验证",
  "Syntax highlighting": "语法高亮",
  "Works offline": "离线可用",
  "Batch processing": "批量处理",
  "No installation": "免安装", "Browser-based": "浏览器端",
  "Mobile friendly": "移动端友好",
  "Dark mode": "深色模式",
  "Show ads": "显示广告", "Ads": "有广告",
  "Requires upload": "需要上传", "Uploads to server": "上传到服务器",
  "Limited free uses": "免费次数有限",
  "Limited free tier": "免费版功能受限",
  "Requires account": "需要注册账号",
  "Requires installation": "需要安装",
  "Slow for large files": "大文件处理慢",
  "Shows ads": "显示广告",
  "Free tier adds watermark": "免费版加水印",
  "Not open source": "非开源",
  "No batch mode": "不支持批量",
  "Paid features": "付费功能",
  "Good quality results": "效果好",
  "Multiple removal modes": "多种去除模式",
  "Simple interface": "界面简洁",
  "Quick validation": "快速验证",
  "Established tool": "成熟工具",
  "Well-known": "知名度高",
  "Comprehensive features": "功能全面",
  "Good performance": "性能好",
  "Integrates with IDE": "IDE集成",
  "No data leaves browser": "数据不离开浏览器",
};

function tr(text: string, isZh: boolean): string {
  if (!isZh) return text;
  let result = text;
  for (const [en, zh] of Object.entries(ZH_MAP)) {
    result = result.split(en).join(zh);
  }
  return result;
}

export function ToolComparisonSection({ comparison }: { comparison: ToolComparison }) {
  const { locale } = useLocale();
  const isZh = locale === "zh";

  return (
    <section className="mt-10 p-6 rounded-xl border bg-card/50" aria-labelledby="comparison-heading">
      <h2 id="comparison-heading" className="text-lg font-bold mb-4 flex items-center gap-2">
        <span aria-hidden="true">⚖️</span>
        {locale === "zh" ? "与同类工具对比" : "How It Compares"}
      </h2>

      <p className="text-sm text-muted-foreground mb-6">
        {locale === "zh"
          ? `看看 ${comparison.toolName} 与其他工具的区别：`
          : `See how ${comparison.toolName} stacks up against alternatives:`}
      </p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-2 font-medium text-muted-foreground">
                {locale === "zh" ? "特点" : "Feature"}
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
                <td className="py-2 px-2 text-muted-foreground">{tr(adv, isZh)}</td>
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
                {locale === "zh" ? "完全免费 / 无需注册" : "Fully Free / No Signup"}
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
                {locale === "zh" ? "100% 隐私（不上传文件）" : "100% Privacy (No Upload)"}
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
                <p key={`pro-${i}`} className="text-green-600 dark:text-green-400 text-xs">+ {tr(pro, isZh)}</p>
              ))}
              {c.cons.map((con, i) => (
                <p key={`con-${i}`} className="text-red-500 dark:text-red-400 text-xs">- {tr(con, isZh)}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
