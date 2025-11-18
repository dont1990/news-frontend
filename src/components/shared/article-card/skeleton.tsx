"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ArticleCardSkeletonProps {
  type?: "default" | "overlay" | "bottomOverlay" | "horizontal";
}

export function ArticleCardSkeleton({
  type = "default",
}: ArticleCardSkeletonProps) {
  if (type === "horizontal") {
    return (
      <Card className="flex min-h-[140px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[170px] xl:min-h-[180px] overflow-hidden rounded-2xl border border-white/10 animate-pulse p-0">
        <div className="flex w-full h-full">
          {/* Content */}
          <div className="w-2/3 p-3 sm:p-4 flex flex-col justify-between">
            <Skeleton className="h-4 w-1/4 mb-2 rounded" />
            <Skeleton className="h-6 w-full mb-2 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
          </div>

          {/* Image */}
          <Skeleton className="w-1/3 rounded-2xl" />
        </div>
      </Card>
    );
  }

  if (type === "overlay") {
    return (
      <Card className="relative h-80 overflow-hidden rounded-2xl animate-pulse">
        <Skeleton className="absolute inset-0 w-full h-full" />
        <CardContent className="relative z-10 flex flex-col justify-end p-4 h-full">
          <Skeleton className="h-4 w-1/4 mb-2 rounded" />
          <Skeleton className="h-6 w-3/4 mb-2 rounded" />
          <Skeleton className="h-4 w-full rounded" />
        </CardContent>
      </Card>
    );
  }

  if (type === "bottomOverlay") {
    return (
      <Card className="relative aspect-video rounded-2xl animate-pulse p-0 mb-20">
        {/* Image */}
        <Skeleton className="absolute inset-0 w-full h-full rounded-2xl" />

        {/* Bottom Overlay */}
        <CardContent className="absolute top-[85%] left-1/2 -translate-x-1/2 z-10 w-[85%] p-4 bg-background/60 backdrop-blur-md rounded-2xl shadow-md flex flex-col gap-3">
          <Skeleton className="h-4 w-20 mx-auto rounded" />
          <Skeleton className="h-5 w-3/4 mx-auto rounded" />
          <Skeleton className="h-4 w-full mx-auto rounded" />
        </CardContent>
      </Card>
    );
  }

  // Default vertical card
  return (
    <Card className="animate-pulse h-full flex flex-col gap-2 p-0">
      <Skeleton className="h-80 w-full rounded-t-lg" />
      <CardContent className="flex flex-col flex-1 justify-between gap-2 p-6">
        <Skeleton className="h-4 w-1/4 rounded" />
        <Skeleton className="h-6 w-full rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <div className="flex justify-between mt-auto pt-4 border-t border-border">
          <Skeleton className="h-4 w-1/4 rounded" />
          <Skeleton className="h-4 w-10 rounded" />
        </div>
      </CardContent>
    </Card>
  );
}
