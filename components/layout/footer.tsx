import Link from "next/link";
import { tools } from "@/lib/tools/data";

export function Footer() {
  const featuredTools = tools.slice(0, 5);
  const moreTools = tools.slice(5, 10);

  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {featuredTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="hover:text-foreground transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {moreTools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/tools/${tool.slug}`} className="hover:text-foreground transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">ToolboxPro</h3>
            <p className="text-sm text-muted-foreground">
              Free online tools. Privacy first.<br />
              No signup required. Files stay on your device.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} ToolboxPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
