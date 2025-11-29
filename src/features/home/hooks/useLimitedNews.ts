import { useQuery } from "@tanstack/react-query";
import { IArticle } from "@/types/article";
import { apiClient } from "@/lib/api/api-client";
import { PER_GRID } from "@/constants/global";

interface IUseLimitedNews {
  category?: string;
  limit?: number;
  sort?: "latest" | "oldest";
  excludeId?: string;
}

export function useLimitedNews({
  category,
  limit = PER_GRID,
  sort = "latest",
  excludeId,
}: IUseLimitedNews) {
  return useQuery<IArticle[], Error>({
    queryKey: ["newsByCategory", category, limit, sort],
    queryFn: async () => {
      const { data } = await apiClient<{ data: IArticle[] }>("news", {
        category,
        limit,
        sort,
      });

      // Remove the current article from the list
      return excludeId ? data.filter(a => a.id !== excludeId) : data;
    },
  });
}
