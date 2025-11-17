"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import { ILiveStat } from "../../types/liveStat";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";
import TrendingDownIcon from "@/assets/shared-icons/trending-down";
import CoinIcon from "../../assets/coin";
import FlashIcon from "../../assets/flash";
import DollarIcon from "../../assets/dollar";
import ChartIcon from "../../assets/chart";

const iconMap: Record<
  ILiveStat["type"],
  React.ComponentType<{ className?: string }>
> = {
  usd: DollarIcon,
  gbp: ChartIcon,
  coin: CoinIcon,
  gold: FlashIcon,
};

export default function LiveStatCard({ stat }: { stat: ILiveStat }) {
  const IconComponent = iconMap[stat.type];

  const isUp = stat.trend === "up";
  const isDown = stat.trend === "down";
  const isNeutral = stat.trend === "neutral";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "relative p-3 rounded-xl overflow-hidden border border-transparent",
          "bg-gradient-to-br from-background via-background/80 to-background/50",
          "transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_-5px_var(--tw-shadow-color)]",

          // Shadow colors
          isUp && "shadow-emerald-500/20",
          isDown && "shadow-rose-500/20",
          isNeutral && "shadow-muted/10"
        )}
      >
        {/* Soft accent ring */}
        <div
          className={cn(
            "absolute inset-0 rounded-xl opacity-10 blur-2xl transition-all duration-300",
            isUp && "bg-emerald-400",
            isDown && "bg-rose-500",
            isNeutral && "bg-gray-400"
          )}
        />

        {/* Header */}
        <div className="relative flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "p-2.5 rounded-xl transition-all duration-300",
                isUp && "bg-emerald-500/10 text-emerald-500",
                isDown && "bg-rose-500/10 text-rose-500",
                isNeutral && "bg-gray-400/10 text-gray-500"
              )}
            >
              <IconComponent className="size-5" />
            </div>

            <p className="text-base font-medium text-foreground/80 tracking-tight">
              {stat.title}
            </p>
          </div>

          <Badge
            variant="outline"
            className={cn(
              "text-xs font-semibold rounded-full border-0",
              "px-2.5 py-1.5 flex items-center gap-1.5",

              isUp && "bg-emerald-500/10 text-emerald-600",
              isDown && "bg-rose-500/10 text-rose-600",
              isNeutral && "bg-gray-400/10 text-gray-600"
            )}
          >
            {/* Dot animation */}
            <span className="relative flex size-2">
              <span
                className={cn(
                  "absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping",
                  isUp && "bg-emerald-500",
                  isDown && "bg-rose-500",
                  isNeutral && "bg-gray-500"
                )}
              />
              <span
                className={cn(
                  "relative inline-flex size-2 rounded-full",
                  isUp && "bg-emerald-500",
                  isDown && "bg-rose-500",
                  isNeutral && "bg-gray-500"
                )}
              />
            </span>
            لحظه‌ای
          </Badge>
        </div>

        {/* Value + Change */}
        <div className="relative mt-4 flex flex-col items-end">
          <motion.span
            key={stat.value}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="text-2xl font-bold text-foreground tracking-tight"
          >
            {stat.value}
          </motion.span>

          <motion.span
            key={stat.change + stat.trend}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 0.05 }}
            className={cn(
              "text-sm font-medium flex items-center gap-1 mt-1",
              isUp && "text-emerald-500",
              isDown && "text-rose-500",
              isNeutral && "text-gray-500"
            )}
          >
            {/* ICONS */}
            {isUp && <TrendingUpIcon className="w-4 h-4" />}
            {isDown && <TrendingDownIcon className="w-4 h-4" />}
            {/* {isNeutral && <span className="text-sm">—</span>} */}

            {stat.change}
          </motion.span>
        </div>
      </Card>
    </motion.div>
  );
}
