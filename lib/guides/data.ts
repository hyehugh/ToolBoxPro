export interface Guide {
  slug: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  category: string;
  readTime: string;
  image?: string;
}

export const guides: Guide[] = [
  {
    slug: "best-json-formatters-compared",
    title: "Best Free Online JSON Formatters Compared (2026)",
    titleZh: "最佳免费在线 JSON 格式化工具对比 (2026)",
    description: "We compare the top free online JSON formatters side by side — features, speed, privacy, and usability. Find the right tool for your workflow.",
    descriptionZh: "我们对比了顶级免费在线 JSON 格式化工具的功能、速度、隐私和易用性。找到适合你工作流的工具。",
    category: "comparison",
    readTime: "8 min read",
  },
  {
    slug: "password-security-guide",
    title: "Password Security Guide: What You Need to Know in 2026",
    titleZh: "密码安全指南：2026 年你需要知道的一切",
    description: "Learn how to create, manage, and protect your passwords. Covers passphrases, password managers, and the latest security threats.",
    descriptionZh: "了解如何创建、管理和保护你的密码。涵盖口令短语、密码管理器和最新安全威胁。",
    category: "security",
    readTime: "10 min read",
  },
  {
    slug: "image-format-guide",
    title: "Image Format Guide: When to Use JPG, PNG, WebP, or SVG",
    titleZh: "图片格式指南：何时使用 JPG、PNG、WebP 或 SVG",
    description: "A practical guide to choosing the right image format for web, print, and mobile. Includes compression comparisons and use-case recommendations.",
    descriptionZh: "选择正确图片格式的实用指南，涵盖 Web、打印和移动端。包括压缩对比和使用场景推荐。",
    category: "design",
    readTime: "7 min read",
  },
  {
    slug: "developer-tools-productivity",
    title: "10 Developer Tools That Will Save You Hours Every Week",
    titleZh: "每周为你节省数小时的 10 个开发者工具",
    description: "Essential online tools every developer needs: JSON formatter, regex tester, Base64 encoder, and more. Boost your productivity today.",
    descriptionZh: "每个开发者都需要的在线工具：JSON 格式化器、正则测试器、Base64 编码器等。立即提升你的效率。",
    category: "productivity",
    readTime: "6 min read",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
