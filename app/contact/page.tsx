import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have a suggestion, found a bug, or want to partner with us? 
        We&apos;d love to hear from you.
      </p>
      <div className="space-y-4">
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">General Inquiries</h2>
          <p className="text-sm text-muted-foreground">hello@toolboxpro.com</p>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">Privacy Concerns</h2>
          <p className="text-sm text-muted-foreground">privacy@toolboxpro.com</p>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">Advertising</h2>
          <p className="text-sm text-muted-foreground">ads@toolboxpro.com</p>
        </div>
      </div>
    </div>
  );
}
