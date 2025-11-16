"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ClockIcon from "@/assets/shared-icons/clock";

export function RecentUpdatesCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <ClockIcon className="h-5 w-5 text-primary opacity-50" />
          <span className="text-foreground font-medium">به‌روزرسانی‌های اخیر</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="pb-3 border-b border-border last:border-b-0 space-y-2"
          >
            {/* Two-line title skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded" />
              <Skeleton className="h-4 w-3/5 rounded" />
            </div>

            {/* TimeAgo aligned to the right */}
            <div className="w-full flex justify-end">
              <Skeleton className="h-3 w-16 rounded" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
