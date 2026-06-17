"use client";

import dynamic from "next/dynamic";

const MouseGlow = dynamic(
  () => import("@/components/mouse-glow").then((m) => m.MouseGlow),
  { ssr: false }
);

const ClickEffects = dynamic(
  () => import("@/components/click-effects").then((m) => m.ClickEffects),
  { ssr: false }
);

const GridParallax = dynamic(
  () => import("@/components/grid-parallax").then((m) => m.GridParallax),
  { ssr: false }
);

export function GlobalEffects() {
  return (
    <>
      <MouseGlow />
      <GridParallax />
      <ClickEffects />
    </>
  );
}
