"use client";

import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function TrendingTopicsSkeleton() {
  return (
    <CardContent className="space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-primary/5 p-2 rounded-2xl"
        >
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-4 w-24 rounded" />
          <Skeleton className="h-5 w-5 rounded" />
        </div>
      ))}
    </CardContent>
  );
}
