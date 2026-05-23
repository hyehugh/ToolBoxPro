export default function BlogLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="h-8 w-48 bg-muted rounded animate-pulse mb-2" />
      <div className="h-4 w-96 bg-muted rounded animate-pulse mb-8" />

      <div className="space-y-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4 rounded-lg border bg-card">
            <div className="w-24 h-24 bg-muted rounded animate-pulse shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-24 bg-muted rounded animate-pulse" />
              <div className="h-5 w-3/4 bg-muted rounded animate-pulse" />
              <div className="h-3 w-full bg-muted rounded animate-pulse" />
              <div className="h-3 w-2/3 bg-muted rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
