"use client";

import { tools } from "@/lib/tools/data";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";

export function AboutContent() {
  const { locale } = useLocale();
  const isZh = locale === "zh";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Hero */}
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {isZh ? "关于 ToolboxPro" : "About ToolboxPro"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {isZh
            ? `${tools.length}+ 免费在线工具，为开发者、设计师和日常用户而生。所有处理在浏览器中完成——隐私第一，无需注册。`
            : `${tools.length}+ free online tools for developers, designers, and everyday users. Everything runs in your browser — privacy first, no signup required.`}
        </p>
      </header>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {isZh ? "我们的使命" : "Our Mission"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          {isZh
            ? "ToolboxPro 成立于 2025 年，目标很简单：提供一个快速、可靠、尊重隐私的在线工具箱。我们对现有在线工具网站的三个问题感到不满——注册墙、文件上传到服务器、以及满屏广告。于是我们构建了一个完全相反的产品。"
            : "ToolboxPro was founded in 2025 with one simple goal: provide a fast, reliable, and privacy-respecting collection of online tools. We were frustrated with three things about existing tool websites — mandatory signups, files being uploaded to remote servers, and overwhelming ads. So we built the opposite."}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {isZh
            ? "今天，我们提供从 JSON 格式化、图片压缩到 PDF 合并的全方位工具。无论你是调试 API 的开发者、优化图片的设计师，还是需要快速转换文件的学生，都能在这里找到所需的工具。"
            : "Today, we offer everything from JSON formatting and image compression to PDF merging. Whether you are a developer debugging an API, a designer optimizing images for web, or a student who needs to convert a file quickly — you will find the right tool here."}
        </p>
      </section>

      {/* Privacy commitment */}
      <section className="mb-10 p-6 rounded-xl border bg-card">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span aria-hidden="true">🔒</span>
          {isZh ? "隐私承诺" : "Our Privacy Commitment"}
        </h2>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            {isZh
              ? "这是我们的核心承诺：你的文件永远不会离开你的设备。"
              : "This is our core promise: your files never leave your device."}
          </p>
          <p>
            {isZh
              ? "与许多在线工具网站不同，我们不在服务器上处理你的数据。所有的图片编辑、PDF 操作、文本处理都通过浏览器原生的 Canvas API、Web Audio API 和 JavaScript 完成。这意味着："
              : "Unlike many online tool websites, we do not process your data on a server. All image editing, PDF manipulation, and text processing happens through your browser's native Canvas API, Web Audio API, and JavaScript. This means:"}
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              {isZh
                ? "没有上传等待时间——一切即时完成"
                : "No upload latency — everything is instant"}
            </li>
            <li>
              {isZh
                ? "没有文件大小限制（除浏览器内存外）"
                : "No file size limits beyond your browser's memory"}
            </li>
            <li>
              {isZh
                ? "敏感文档（合同、医疗记录、财务报表）绝对安全"
                : "Sensitive documents (contracts, medical records, financial statements) stay absolutely private"}
            </li>
            <li>
              {isZh
                ? "没有服务器存储——你的数据不存在于任何云服务上"
                : "No server-side storage — your data does not exist on any cloud service"}
            </li>
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {isZh ? "技术架构" : "How It Works"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-3">
          {isZh
            ? "ToolboxPro 基于 Next.js 15 构建，采用静态站点生成（SSG）模式。每个工具页面都预渲染为静态 HTML，确保最快的加载速度和最佳的搜索引擎可索引性。"
            : "ToolboxPro is built on Next.js 15 with static site generation (SSG). Every tool page is pre-rendered as static HTML, ensuring the fastest possible load times and optimal search engine indexability."}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          {isZh
            ? "工具组件使用 React 19 的动态导入，按需加载——你打开 JSON 格式化器时，不会加载图片压缩器的代码。这使得每个工具页面保持轻量，首屏加载 JS 仅约 104KB（共享框架）。"
            : "Tool components use React 19's dynamic imports, loaded on-demand — when you open the JSON Formatter, the Image Compressor code is not downloaded. This keeps every tool page lightweight, with only ~104KB of shared framework JS on first load."}
        </p>
      </section>

      {/* Stats */}
      <section className="mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: `${tools.length}+`, label: isZh ? "在线工具" : "Online Tools" },
            { value: "60+", label: isZh ? "教程文章" : "Blog Articles" },
            { value: "100%", label: isZh ? "客户端处理" : "Client-side" },
            { value: "$0", label: isZh ? "永久免费" : "Free Forever" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-lg border bg-card"
            >
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {isZh ? "设计原则" : "Design Principles"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "⚡",
              title: isZh ? "速度优先" : "Speed First",
              desc: isZh
                ? "每个工具在 2 秒内可用。没有加载动画，没有等待队列。"
                : "Every tool usable within 2 seconds. No spinners, no waiting in line.",
            },
            {
              icon: "🚫",
              title: isZh ? "无注册墙" : "No Sign-up Walls",
              desc: isZh
                ? "打开即用。没有账户、没有登录、没有试用限制。"
                : "Just open and use. No accounts, no logins, no trial limits.",
            },
            {
              icon: "🎨",
              title: isZh ? "一致体验" : "Consistent UX",
              desc: isZh
                ? "所有工具遵循相同的设计语言，学会一个就会用所有。"
                : "All tools follow the same design language. Learn one, know them all.",
            },
            {
              icon: "📱",
              title: isZh ? "移动端友好" : "Mobile Friendly",
              desc: isZh
                ? "响应式设计，在手机上操作图片编辑和文本工具同样流畅。"
                : "Responsive design — image editing and text tools work smoothly on phones.",
            },
          ].map((principle) => (
            <div
              key={principle.title}
              className="p-4 rounded-lg border bg-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl" aria-hidden="true">{principle.icon}</span>
                <h3 className="font-semibold">{principle.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">
          {isZh ? "发展路线" : "What's Next"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {isZh
            ? "我们持续新增工具和功能。以下是我们正在开发的方向："
            : "We are continuously adding new tools and features. Here is what we are working on:"}
        </p>
        <ul className="space-y-2">
          {[
            isZh ? "更多 PDF 高级操作（水印、表单填写、OCR）" : "Advanced PDF operations (watermarks, form filling, OCR)",
            isZh ? "批量处理模式（一次处理多张图片/多个文件）" : "Batch processing mode (process multiple files at once)",
            isZh ? "API 接口（开发者可集成到自己的工作流）" : "API access (developers can integrate into their workflows)",
            isZh ? "更多音频和视频处理工具" : "More audio and video processing tools",
            isZh ? "浏览器扩展（右键快速调用工具）" : "Browser extension (quick access from right-click menu)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground">
              <span className="text-primary mt-1" aria-hidden="true">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <div className="text-center pt-6 border-t">
        <p className="text-muted-foreground mb-4">
          {isZh ? "准备好开始了吗？" : "Ready to get started?"}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {isZh ? "浏览所有工具" : "Browse All Tools"}
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-2.5 rounded-lg border text-sm font-medium hover:bg-accent transition-colors"
          >
            {isZh ? "阅读博客" : "Read the Blog"}
          </Link>
        </div>
      </div>
    </div>
  );
}
