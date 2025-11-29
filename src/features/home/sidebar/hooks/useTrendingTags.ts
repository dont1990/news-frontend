"use client";

import { PER_PAGE } from "@/constants/global";
import { apiClient } from "@/lib/api/api-client";
import { useQuery } from "@tanstack/react-query";

export interface TagStat {
  tag: string;
  clicks: number;
}

export function useTrendingTags(limit = PER_PAGE) {
  return useQuery<TagStat[], Error>({
    queryKey: ["trendingTags", limit],
    queryFn: async () => {
      const data = await apiClient<{ data: TagStat[] }>("tags/trending");
      return data.data.slice(0, limit); // limit top N tags
    },
    refetchOnWindowFocus: false,
  });
}
