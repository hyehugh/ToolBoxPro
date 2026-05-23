import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ToolboxPro — free online tools with privacy first",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About ToolboxPro</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          ToolboxPro is a free online toolbox offering 100+ utilities for 
          developers, designers, writers, and everyday users. Our mission is 
          simple: provide fast, reliable tools that respect your privacy.
        </p>
        <p>
          Unlike many online tools, we process everything directly in your 
          browser using WebAssembly. Your files never leave your device. No 
          servers, no cloud, no data leaks.
        </p>
        <p>
          Built by developers for developers and anyone who needs a quick 
          tool without the hassle of signups, limits, or watermarks.
        </p>
        <h2 className="text-xl font-bold text-foreground mt-8">Our Principles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Privacy by design</strong> — processing happens on your device</li>
          <li><strong>Zero friction</strong> — no accounts, no payments, no limits</li>
          <li><strong>Speed matters</strong> — every tool loads in under a second</li>
          <li><strong>Always improving</strong> — new tools and features added regularly</li>
        </ul>
      </div>
    </div>
  );
}
