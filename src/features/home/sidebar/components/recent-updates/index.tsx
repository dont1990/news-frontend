"use client";

import { RecentUpdatesSkeleton } from "./skeleton";
import { useLimitedNews } from "@/features/home/hooks/useLimitedNews";
import RecentUpdatesTitle from "./title";
import RecentUpdatesContent from "./content";
import { Card } from "@/components/ui/card";

const RecentUpdates = () => {
  const { data: recentNews = [], isLoading } = useLimitedNews({
    sort: "desc",
  });

  return (
    <Card>
      <RecentUpdatesTitle />
      {isLoading ? (
        <RecentUpdatesSkeleton />
      ) : (
        <RecentUpdatesContent recentNews={recentNews} />
      )}
    </Card>
  );
};

export default RecentUpdates;
