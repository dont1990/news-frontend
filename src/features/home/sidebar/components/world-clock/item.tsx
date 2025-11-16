"use client";

import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ClockTileProps {
  city: string;
  timezone: string;
  time: string;
  hour: number;
  timezoneAbbr?: string;
}

export default function ClockTile({
  city,
  timezone,
  time,
  hour,
  timezoneAbbr,
}: ClockTileProps) {
  const isNight = hour >= 18 || hour < 6;
  const gradient = isNight
    ? "from-indigo-500/20 via-purple-400/10"
    : "from-blue-400/20 via-sky-300/10";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-center rounded-2xl border border-border shadow-sm h-44 p-4 overflow-hidden backdrop-blur-md cursor-grab",
        "bg-primary/5 transition-all duration-300 hover:scale-[1.02]"
      )}
    >
      <div className={cn("absolute inset-0 blur-2xl opacity-20", gradient)} />
      <div
        className={cn(
          "absolute top-3 right-3 transition-transform duration-300 ease-out",
          "hover:scale-105 hover:rotate-6"
        )}
      >
        {isNight ? (
          <Moon className="w-4 h-4 text-indigo-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-400" />
        )}
      </div>

      <span className="text-sm font-medium text-foreground/80">{city}</span>
      <span
        className={cn(
          "text-lg font-bold tracking-tight transition-colors duration-300",
          isNight ? "text-indigo-400" : "text-sky-500"
        )}
      >
        {time}
      </span>
      <span className="text-xs text-muted-foreground">{timezoneAbbr}</span>
    </div>
  );
}
