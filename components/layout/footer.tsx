import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/json-formatter" className="hover:text-foreground">JSON Formatter</Link></li>
              <li><Link href="/tools/base64-encode-decode" className="hover:text-foreground">Base64 Encoder</Link></li>
              <li><Link href="/tools/regex-tester" className="hover:text-foreground">Regex Tester</Link></li>
              <li><Link href="/tools/color-converter" className="hover:text-foreground">Color Converter</Link></li>
              <li><Link href="/tools/image-compressor" className="hover:text-foreground">Image Compressor</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">More Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/tools/pdf-merger" className="hover:text-foreground">PDF Merger</Link></li>
              <li><Link href="/tools/qr-code-generator" className="hover:text-foreground">QR Code Generator</Link></li>
              <li><Link href="/tools/word-counter" className="hover:text-foreground">Word Counter</Link></li>
              <li><Link href="/tools/url-encoder-decoder" className="hover:text-foreground">URL Encoder</Link></li>
              <li><Link href="/tools/image-converter" className="hover:text-foreground">Image Converter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
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
