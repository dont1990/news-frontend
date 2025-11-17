"use client";

import { BreakingNewsTicker } from "./components/slider";
import { useBreakingNews } from "./hooks/useBreakingNews";
import { BreakingNewsSkeleton } from "./skeleton";

export function BreakingNews() {
  const { data: breakingNews, isLoading, error } = useBreakingNews();

  if (isLoading) return <BreakingNewsSkeleton />;
  if (error || !breakingNews || breakingNews.length === 0) return null;
  
  return <BreakingNewsTicker breakingNews={breakingNews} />;
}
