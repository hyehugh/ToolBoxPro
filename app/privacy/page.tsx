import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
        <p><strong>Last updated:</strong> May 22, 2026</p>

        <h2 className="text-lg font-bold text-foreground mt-6">1. Data Processing</h2>
        <p>
          ToolboxPro processes all data locally in your browser. When you use 
          our tools (JSON formatter, image compressor, PDF merger, etc.), your 
          files are processed using WebAssembly or JavaScript on your own device. 
          No file data is transmitted to our servers.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">2. Information We Collect</h2>
        <p>
          We use Google Analytics to collect anonymous usage data: page views, 
          tool usage frequency, browser type, and approximate location (country 
          level). This data helps us improve our tools and understand usage 
          patterns.
        </p>
        <p>
          We do <strong>not</strong> collect, store, or transmit:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Your uploaded files or their contents</li>
          <li>Personal identification information</li>
          <li>Login credentials (we have no user accounts)</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">3. Cookies</h2>
        <p>
          We use essential cookies for site functionality (theme preference, 
          recent tool history) and Google AdSense cookies for personalized 
          advertising. You can control cookie preferences through your browser 
          settings.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">4. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Google Analytics</strong> — anonymous usage tracking</li>
          <li><strong>Google AdSense</strong> — advertising (only on free tier)</li>
          <li><strong>Vercel</strong> — hosting and CDN</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">5. Contact</h2>
        <p>
          For privacy-related questions, contact us at privacy@toolboxpro.com.
        </p>
      </div>
    </div>
  );
}
