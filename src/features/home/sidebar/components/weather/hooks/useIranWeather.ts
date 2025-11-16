"use client";

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/api-client";
import { IWeatherResponse } from "../types/weather";
import { iranCities } from "@/constants/iranCities";

export function useIranWeather() {
  return useQuery<IWeatherResponse[]>({
    queryKey: ["iranWeather"],
    queryFn: async () => {
      const cities = iranCities.map((c) => c.en).join(",");
      return apiClient<IWeatherResponse[]>("weather", { cities });
    },
  });
}
