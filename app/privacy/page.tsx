import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
        <p><strong>Last updated:</strong> May 24, 2026</p>

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

        <h2 className="text-lg font-bold text-foreground mt-6">3. Cookies & Advertising</h2>
        <p>
          We use cookies and similar technologies to enhance your experience and
          serve personalized advertisements. Third-party vendors, including
          Google, use cookies to serve ads based on a user&apos;s prior visits
          to this website and other websites.
        </p>
        <p className="font-medium text-foreground">Google AdSense Cookies</p>
        <p>
          Google uses the <strong>DoubleClick cookie</strong> to enable it and
          its partners to serve ads based on your visit to our site and/or other
          sites on the Internet. You may opt out of personalized advertising by
          visiting <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Ad Settings</a>.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Essential cookies</strong> — site functionality (theme preference, recent tool history)</li>
          <li><strong>Analytics cookies</strong> — Google Analytics for anonymous usage tracking</li>
          <li><strong>Advertising cookies</strong> — Google AdSense for personalized and non-personalized ads</li>
        </ul>
        <p>
          You can control cookie preferences through your browser settings or
          visit <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> to opt out of third-party
          cookies used for interest-based advertising.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">4. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Google Analytics</strong> — anonymous usage tracking.
            View <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.
          </li>
          <li>
            <strong>Google AdSense</strong> — advertising. Uses cookies for ad
            personalization and frequency capping.
          </li>
          <li><strong>Vercel</strong> — hosting and CDN.</li>
        </ul>

        <h2 className="text-lg font-bold text-foreground mt-6">5. Data Retention</h2>
        <p>
          We do not store personal data on our servers. Google Analytics data is
          retained for 14 months. AdSense cookie data is managed by Google in
          accordance with their privacy policy.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">6. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided us with personal data, contact us and we will remove it.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">7. Your Rights (GDPR)</h2>
        <p>
          If you are in the European Economic Area (EEA), you have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request deletion of your data</li>
          <li>Opt out of cookies used for personalized advertising</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p>
          To exercise these rights, contact us at hyehugh520@gmail.com.
        </p>

        <h2 className="text-lg font-bold text-foreground mt-6">8. Contact</h2>
        <p>
          For privacy-related questions, contact us at hyehugh520@gmail.com.
        </p>
      </div>
    </div>
  );
}
