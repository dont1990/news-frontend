"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ClockTile from "./item";
import { cn } from "@/lib/utils/cn";
import { useWorldClock } from "./hooks/useWorldClock";
import { ClockTileSkeleton } from "./skeleton";

interface IWorldClockSliderProps {
  variant?: "horizontal" | "vertical";
  className?: string;
}

export default function WorldClockSlider({
  variant = "horizontal",
  className,
}: IWorldClockSliderProps) {
  const isVertical = variant === "vertical";
  const { data: clocks, isLoading, error } = useWorldClock();

  if (error) return null;

  const slides = isLoading
    ? Array.from({ length: 1 }).map((_, i) => <ClockTileSkeleton key={i} />)
    : clocks?.map((clock, i) => <ClockTile key={i} clock={clock} />) || [];

  return (
    <div
      className={cn(
        "relative w-full",
        isVertical ? "h-44" : "h-auto",
        className
      )}
    >
      <Swiper
        modules={isVertical ? [Autoplay] : []}
        direction={isVertical ? "vertical" : "horizontal"}
        loop={true}
        slidesPerView={isVertical ? 1 : "auto"}
        spaceBetween={20}
        centeredSlides={false}
        grabCursor={true}
        speed={600}
        autoplay={
          isVertical ? { delay: 2500, disableOnInteraction: false } : undefined
        }
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className={cn(
              isVertical
                ? "!h-full !w-auto flex items-center justify-center mb-0"
                : "!w-[180px] sm:!w-[200px] lg:!w-[220px]"
            )}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
