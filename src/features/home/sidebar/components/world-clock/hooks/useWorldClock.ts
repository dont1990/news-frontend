import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { IWorldClock } from "../types/world-clock";

export function useWorldClock() {
  return useQuery<IWorldClock[]>({
    queryKey: ["worldClock"],
    queryFn: async () => apiClient<IWorldClock[]>("world-clock"),
    refetchInterval: 60 * 1000, // refresh every minute
  });
}
