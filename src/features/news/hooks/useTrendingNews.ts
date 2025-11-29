import { PER_PAGE } from "@/constants/global";
import { apiClient } from "@/lib/api/api-client";
import { IArticle } from "@/types/article";
import { useQuery } from "@tanstack/react-query";

export function useTrendingNews(limit: number = PER_PAGE) {
  return useQuery({
    queryKey: ["trendingNews", limit],
    queryFn: () => apiClient<{ data: IArticle[] }>("news/trending", { limit }),
    select: (res) => res.data,
  });
}
