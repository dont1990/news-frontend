import { useQuery } from "@tanstack/react-query";
import { IArticle } from "@/types/article";
import { apiClient } from "@/lib/api/api-client";

interface IUseLimitedNews {
  category?: string;
  limit?: number;
  sort?: "latest" | "oldest";
}

export function useLimitedNews({
  category,
  limit = 6,
  sort = "latest",
}: IUseLimitedNews) {
  return useQuery<IArticle[], Error>({
    queryKey: ["newsByCategory", category, limit, sort],
    queryFn: () =>
      apiClient<{ data: IArticle[] }>("news", {
        category,
        limit,
        sort,
      }).then((res) => res.data),
  });
}
