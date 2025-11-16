"use client";

import { LatestNewsGrid } from "@/features/home/latest-news/components/grid";
import SectionTitle from "@/components/shared/section-title";
import React from "react";
import { useLimitedNews } from "../hooks/useLimitedNews";
import ClockIcon from "@/assets/shared-icons/clock";
import { ArticleCardSkeleton } from "@/components/shared/article-card/skeleton";

const LatestNews = () => {
  const { data: articles, isLoading } = useLimitedNews({
    sort: "desc",
  });

  return (
    <section>
      <SectionTitle
        title="آخرین اخبار"
        icon={<ClockIcon className="w-5 h-5" />}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ArticleCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <LatestNewsGrid articles={articles || []} />
      )}
    </section>
  );
};

export default LatestNews;
