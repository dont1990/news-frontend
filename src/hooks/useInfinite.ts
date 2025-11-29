import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PER_PAGE } from "@/constants/global";
import { Params } from "@/types";

export interface IPaginatedResponse<T> {
  data: T[];
  page: number;
  hasMore: boolean;
  total: number;
}

export function useInfinite<T>(
  endpoint: string,
  params?: Params,
  limit: number = PER_PAGE
) {
  // 1️⃣ Setup the infinite query
  const query = useInfiniteQuery<IPaginatedResponse<T>, Error>({
    queryKey: [endpoint, params],
    queryFn: ({ pageParam }: QueryFunctionContext) =>
      apiClient<IPaginatedResponse<T>>(endpoint, {
        ...params,
        page: typeof pageParam === "number" ? pageParam : 1,
        limit,
      }),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  // 2️⃣ Setup infinite scroll observer
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && query.hasNextPage) {
      query.fetchNextPage();
    }
  }, [inView, query.hasNextPage, query.fetchNextPage, query]);

  // 3️⃣ Flatten data
  const items: T[] = query.data?.pages.flatMap((p) => p.data) || [];
  const total = query.data?.pages[0]?.total ?? 0;

  return {
    items,
    total,
    loading: query.isLoading,
    fetching: query.isFetching,
    isFetchingNextPage: query.isFetchingNextPage,
    hasNextPage: query.hasNextPage,
    fetchNextPage: query.fetchNextPage,
    ref, // attach this to the element that triggers loading more
  };
}
