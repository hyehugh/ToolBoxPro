import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
        <p><strong>Last updated:</strong> May 22, 2026</p>

        <h2 className="text-lg font-bold text-foreground mt-6">1. Acceptance</h2>
        <p>
          By using ToolboxPro, you agree to these terms. If you do not agree, 
          do not use the service.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">2. Service Description</h2>
        <p>
          ToolboxPro provides free online tools for file conversion, image 
          processing, text manipulation, and other utilities. All tools are 
          provided "as is" without warranty.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">3. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use the service for illegal purposes</li>
          <li>Attempt to reverse engineer or abuse the service</li>
          <li>Upload malicious files or content</li>
          <li>Generate automated traffic or abuse the platform</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">4. Disclaimer</h2>
        <p>
          ToolboxPro is provided free of charge. We make no warranties about 
          the accuracy, reliability, or availability of the service. We are not 
          liable for any damages arising from use of our tools.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">5. Changes</h2>
        <p>
          We may update these terms at any time. Continued use after changes 
          constitutes acceptance of the new terms.
        </p>
      </div>
    </div>
  );
}
