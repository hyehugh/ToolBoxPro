"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Only count once per browser session
    if (sessionStorage.getItem("v_counted")) {
      // Fetch count without incrementing
      fetch("/api/visitor?peek=1")
        .then((r) => r.json())
        .then((d) => {
          if (d.count !== null) setCount(d.count);
        })
        .catch(() => {})
        .finally(() => setReady(true));
      return;
    }

    fetch("/api/visitor")
      .then((r) => r.json())
      .then((d) => {
        if (d.count !== null) {
          setCount(d.count);
          sessionStorage.setItem("v_counted", "1");
        }
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  if (!ready || count === null) return null;

  const formatted = count.toLocaleString("en-US");

  return (
    <span className="text-xs text-muted-foreground" title="Total site visits">
      {formatted} visits
    </span>
  );
}
