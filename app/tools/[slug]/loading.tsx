export default function ToolDetailLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-3 w-12 bg-muted rounded animate-pulse" />
        <div className="h-3 w-3 bg-muted rounded animate-pulse" />
        <div className="h-3 w-24 bg-muted rounded animate-pulse" />
        <div className="h-3 w-3 bg-muted rounded animate-pulse" />
        <div className="h-3 w-32 bg-muted rounded animate-pulse" />
      </div>

      {/* Title */}
      <div className="h-8 w-72 bg-muted rounded animate-pulse mb-2" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse mb-8" />

      {/* Tool widget skeleton */}
      <div className="rounded-lg border bg-card p-6 card-shadow">
        <div className="h-6 w-48 bg-muted rounded animate-pulse mb-4" />
        <div className="h-40 bg-muted rounded animate-pulse mb-4" />
        <div className="flex gap-2">
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
