"use client";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { IWeatherResponse } from "./types/weather";

interface IWeatherTileProps {
  weather: IWeatherResponse;
}

export default function WeatherTile({ weather }: IWeatherTileProps) {
  const { city, description, icon, temp } = weather;

  const isWarm = temp > 20;
  const gradient = isWarm
    ? "from-amber-500/20 via-orange-400/10"
    : "from-sky-400/20 via-cyan-400/10";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center rounded-2xl border border-border shadow-sm h-44 p-4 overflow-hidden backdrop-blur-md cursor-grab",
        "bg-primary/5 transition-all duration-300 hover:scale-[1.02]"
      )}
      aria-label={`Weather in ${city}: ${temp}°C, ${description}`}
    >
      <div className={cn("absolute inset-0 blur-2xl opacity-20", gradient)} />
      <Image
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        width={48}
        height={48}
        className="w-12 h-12 mb-1 drop-shadow-sm transition-transform duration-300 hover:scale-105"
      />
      <span className="text-sm font-medium">{city}</span>
      <span
        className={cn(
          "text-lg font-bold transition-colors duration-300",
          isWarm ? "text-amber-500" : "text-sky-400"
        )}
      >
        {temp}°C
      </span>
      <span className="text-xs text-muted-foreground">{description}</span>
    </div>
  );
}
