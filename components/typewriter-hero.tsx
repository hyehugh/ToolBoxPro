"use client";

import { useState, useEffect } from "react";

export function TypewriterHero({
  line1,
  line2,
}: {
  line1: string;
  line2: string;
}) {
  const [phase, setPhase] = useState<"line1" | "line2" | "done">("line1");

  useEffect(() => {
    // Line 1 types for 1.2s, then line 2 types for 0.8s
    const t1 = setTimeout(() => setPhase("line2"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
      <span className="typewriter-wrap">
        <span
          className={`typewriter-line ${phase === "line1" ? "typing" : "done"}`}
        >
          {line1}
        </span>
        <br />
        <span
          className={`typewriter-sub text-primary ${phase === "line2" || phase === "done" ? "typing" : ""}`}
        >
          {line2}
        </span>
        {/* Single blinking caret at the very end */}
        <span className="typewriter-caret" />
      </span>
    </h1>
  );
}
