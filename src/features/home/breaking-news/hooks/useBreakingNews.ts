import { useQuery } from "@tanstack/react-query";
import { IArticle } from "@/types/article";
import { apiClient } from "@/lib/api/api-client";
import { PER_PAGE } from "@/constants/global";

export function useBreakingNews(limit: number = PER_PAGE) {
  return useQuery<IArticle[], Error>({
    queryKey: ["breakingNews", limit],
    queryFn: () =>
      apiClient<{ data: IArticle[] }>("news/breaking", { limit }).then(
        (res) => res.data
      ),
  });
}
