"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimeAgo from "@/components/shared/time-ago";
import Link from "next/link";
import { routes } from "@/routes/routes";
import ClockIcon from "@/assets/shared-icons/clock";
import { RecentUpdatesCardSkeleton } from "./skeleton";
import { useLimitedNews } from "@/features/home/hooks/useLimitedNews";

export default function RecentUpdatesCard() {
  const { data: recentUpdates = [], isLoading } = useLimitedNews({
    sort: "desc",
  });

  if (isLoading) return <RecentUpdatesCardSkeleton />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <ClockIcon className="h-5 w-5 text-primary" />
          <span className="text-foreground font-medium">
            به‌روزرسانی‌های اخیر
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentUpdates.map((article) => (
          <Link
            href={routes.news.detail.getHref(article.id)}
            key={article.id}
            className="space-y-2 pb-3 border-b border-border last:border-b-0 block hover:text-primary"
          >
            <div className="newspaper-body text-sm font-medium leading-tight line-clamp-2">
              {article.title}
            </div>
            <div className="w-full flex justify-end">
              <TimeAgo
                date={article.publishedAt}
                className="text-xs text-muted-foreground"
              />
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
