"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "@/lib/i18n/context";

export function ContactContent() {
  const { locale } = useLocale();
  const isZh = locale === "zh";
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(
      `${form.subject || "Contact from ToolboxPro"} — from ${form.name || "Anonymous"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:hyehugh520@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = "w-full px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-colors";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          {isZh ? "联系我们" : "Get in Touch"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {isZh
            ? "有问题、建议或合作意向？我们通常在 48 小时内回复。"
            : "Questions, suggestions, or partnership ideas? We typically respond within 48 hours."}
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Contact form */}
        <div className="lg:col-span-3">
          <div className="p-6 rounded-xl border bg-card">
            <h2 className="text-xl font-bold mb-4">
              {isZh ? "发送消息" : "Send a Message"}
            </h2>
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3" aria-hidden="true">✉️</div>
                <p className="font-semibold mb-2">
                  {isZh ? "感谢你的消息！" : "Thank you for your message!"}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {isZh
                    ? "你的邮件客户端应该已打开。如果没有，请直接发邮件到："
                    : "Your email client should have opened. If not, please email us directly at:"}
                </p>
                <a
                  href="mailto:hyehugh520@gmail.com"
                  className="text-primary hover:underline"
                >
                  hyehugh520@gmail.com
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground"
                >
                  {isZh ? "← 发送另一条" : "← Send another"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      {isZh ? "你的名字" : "Your Name"}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={isZh ? "张三" : "John Doe"}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      {isZh ? "邮箱地址" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {isZh ? "主题" : "Subject"}
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">{isZh ? "选择一个主题..." : "Select a topic..."}</option>
                    <option value="Bug Report">{isZh ? "报告 Bug" : "Bug Report"}</option>
                    <option value="Feature Request">{isZh ? "功能请求" : "Feature Request"}</option>
                    <option value="Partnership">{isZh ? "合作意向" : "Partnership"}</option>
                    <option value="Feedback">{isZh ? "反馈建议" : "Feedback"}</option>
                    <option value="Other">{isZh ? "其他" : "Other"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    {isZh ? "消息内容" : "Message"}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={
                      isZh
                        ? "告诉我们更多细节...哪个工具？发生了什么？你期望的结果是什么？"
                        : "Tell us more... Which tool? What happened? What did you expect?"
                    }
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  {isZh ? "发送消息" : "Send Message"}
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  {isZh
                    ? "点击发送将通过你的邮件客户端发送。我们不存储表单数据。"
                    : "Clicking send will open your email client. We do not store form data."}
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2 space-y-4">
          {/* Response time */}
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span aria-hidden="true">⏱️</span>
              {isZh ? "响应时间" : "Response Time"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isZh
                ? "我们通常在 48 小时内回复工作日收到的邮件。周末和节假日可能稍长。"
                : "We typically respond within 48 hours on business days. Weekends and holidays may take longer."}
            </p>
          </div>

          {/* Direct email */}
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span aria-hidden="true">📧</span>
              {isZh ? "直接发邮件" : "Direct Email"}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {isZh ? "也可以直接发邮件：" : "Prefer email directly?"}
            </p>
            <a
              href="mailto:hyehugh520@gmail.com"
              className="text-sm text-primary hover:underline"
            >
              hyehugh520@gmail.com
            </a>
          </div>

          {/* FAQ shortcut */}
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span aria-hidden="true">❓</span>
              {isZh ? "常见问题" : "Quick Answers"}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              {isZh
                ? "在联系我们之前，你可能在这些地方找到答案："
                : "Before reaching out, you might find answers here:"}
            </p>
            <div className="space-y-2">
              <Link
                href="/faq"
                className="block text-sm text-primary hover:underline"
              >
                {isZh ? "→ 常见问题页面" : "→ FAQ Page"}
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-primary hover:underline"
              >
                {isZh ? "→ 教程和指南" : "→ Tutorials & Guides"}
              </Link>
              <Link
                href="/guides"
                className="block text-sm text-primary hover:underline"
              >
                {isZh ? "→ 工具使用指南" : "→ Tool How-to Guides"}
              </Link>
            </div>
          </div>

          {/* Bug report tips */}
          <div className="p-4 rounded-lg border bg-card">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <span aria-hidden="true">🐛</span>
              {isZh ? "报告 Bug" : "Reporting a Bug?"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isZh
                ? "请包含：浏览器名称和版本、使用的工具、操作步骤、期望结果和实际结果。截图最有帮助！"
                : "Please include: browser name and version, which tool you used, steps to reproduce, expected vs actual result. Screenshots help a lot!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
