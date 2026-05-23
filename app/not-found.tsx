import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
      <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90"
        >
          Go Home
        </Link>
        <Link
          href="/tools"
          className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-input bg-background text-sm font-medium hover:bg-accent"
        >
          Browse Tools
        </Link>
      </div>
    </div>
  );
}
