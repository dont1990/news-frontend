"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils/cn";

export function WeatherTileSkeleton() {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center rounded-2xl border border-border h-44 p-4 overflow-hidden backdrop-blur-md",
        "bg-muted/10 animate-pulse",
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10 blur-2xl opacity-30" />
      <Skeleton className="w-12 h-12 mb-2 rounded-full" />
      <Skeleton className="w-20 h-4 mb-1 rounded" />
      <Skeleton className="w-12 h-5 mb-1 rounded" />
      <Skeleton className="w-16 h-3 rounded" />
    </div>
  );
}
