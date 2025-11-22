import { useMemo } from "react";
import { useInfinite } from "@/hooks/useInfinite";
import { IArticle } from "@/types/article";

interface INewsFilters {
  category?: string;
  search?: string;
  dateFilter?: string;
  sort?: string;
  tags?: string[];
}

export function useNewsFeed(filters?: INewsFilters) {
  const queryParams = useMemo(
    () => ({
      ...filters,
      category: filters?.category === "همه" ? undefined : filters?.category,
      tags: filters?.tags?.length ? filters.tags.join(",") : undefined,
    }),
    [filters]
  );

  return useInfinite<IArticle>("news", queryParams);
}
