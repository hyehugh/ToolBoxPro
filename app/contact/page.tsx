import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the ToolboxPro team",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-muted-foreground mb-8">
        Have a suggestion, found a bug, or want to partner with us?
        We&apos;d love to hear from you.
      </p>
      <div className="space-y-6">
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">General Inquiries</h2>
          <p className="text-sm text-muted-foreground mt-1">
            For questions, suggestions, or feedback about our tools
          </p>
          <a
            href="mailto:hello@toolboxpro.vercel.app"
            className="text-sm text-primary hover:underline mt-1 block"
          >
            hello@toolboxpro.vercel.app
          </a>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">Report a Bug</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Found something not working? Let us know which tool and what happened
          </p>
          <a
            href="mailto:bugs@toolboxpro.vercel.app"
            className="text-sm text-primary hover:underline mt-1 block"
          >
            bugs@toolboxpro.vercel.app
          </a>
        </div>
        <div className="p-4 rounded-lg border bg-card">
          <h2 className="font-semibold">Advertising & Partnerships</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Interested in advertising on ToolboxPro or partnership opportunities
          </p>
          <a
            href="mailto:ads@toolboxpro.vercel.app"
            className="text-sm text-primary hover:underline mt-1 block"
          >
            ads@toolboxpro.vercel.app
          </a>
        </div>
      </div>
    </div>
  );
}
