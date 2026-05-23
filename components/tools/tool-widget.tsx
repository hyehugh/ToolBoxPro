"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ToolWidgetProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function ToolWidget({ title, children, className }: ToolWidgetProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-6 card-shadow", className)}>
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          Processing on your device — files never leave your browser
        </span>
      </div>
      {children}
    </div>
  );
}
