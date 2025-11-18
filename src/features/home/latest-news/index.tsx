"use client";
import { NewsSection } from "@/components/shared/news-section";
import { useLimitedNews } from "../hooks/useLimitedNews";
import ClockIcon from "@/assets/shared-icons/clock";
import { LatestNewsGrid } from "./components/grid";
import { routes } from "@/routes/routes";

export default function LatestNews() {
  const { data: articles, isLoading } = useLimitedNews({ sort: "desc" });

  return (
    <NewsSection
      title="آخرین اخبار"
      icon={<ClockIcon className="w-5 h-5" />}
      link={routes.news.getHref({ sort: "جدیدترین" })}
      articles={articles}
      isLoading={isLoading}
      GridComponent={LatestNewsGrid}
      skeletonType={undefined}
    />
  );
}
