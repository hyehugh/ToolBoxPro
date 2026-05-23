import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-7xl font-bold text-muted-foreground mb-4">404</h1>
      <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/tools"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent transition-colors"
        >
          Browse Tools
        </Link>
      </div>
      <div className="mt-12">
        <p className="text-sm text-muted-foreground mb-3">
          Try searching for a tool instead:
        </p>
        <Link href="/tools">
          <div className="relative max-w-xs mx-auto">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full h-10 px-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer"
              readOnly
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
