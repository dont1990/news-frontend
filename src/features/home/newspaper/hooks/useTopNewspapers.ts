import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { INewspaper } from "@/types/newspaper";
import { PER_PAGE } from "@/constants/global";

export function useTopNewspapers(limit = PER_PAGE) {
  return useQuery<INewspaper[]>({
    queryKey: ["top-newspapers", limit],
    queryFn: async () => {
      const res = await apiClient<{ data: INewspaper[] }>("newspapers", {
        limit,
        sort: "az",
        page: 1,
      });
      return res.data;
    },
    refetchOnWindowFocus: false,
  });
}
