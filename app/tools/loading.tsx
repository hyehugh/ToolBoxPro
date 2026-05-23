export default function ToolsLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="h-8 w-32 bg-muted rounded animate-pulse mb-6" />
      <div className="h-10 w-64 bg-muted rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="p-4 rounded-lg border bg-card">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-muted rounded animate-pulse shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                <div className="h-3 w-full bg-muted rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
