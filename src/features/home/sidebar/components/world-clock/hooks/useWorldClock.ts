// hooks/useWorldClock.ts
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";

export interface IWorldClock {
  city: string;
  timezone: string;
  time: string;
  hour: number;
  timezoneAbbr?: string;
}

export function useWorldClock() {
  return useQuery<IWorldClock[]>({
    queryKey: ["worldClock"],
    queryFn: async () => apiClient<IWorldClock[]>("world-clock"),
    refetchInterval: 60 * 1000, // refresh every minute
  });
}
