"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import WeatherTile from "./item";
import { WeatherTileSkeleton } from "./skeleton";
import { cn } from "@/lib/utils/cn";
import { useIranWeather } from "./hooks/useIranWeather";

interface IranWeatherSliderProps {
  variant?: "horizontal" | "vertical";
  className?: string;
}

export default function IranWeatherSlider({
  variant = "horizontal",
  className,
}: IranWeatherSliderProps) {
  const isVertical = variant === "vertical";
  const { data: weatherData, isLoading, error } = useIranWeather();

  if (error) return null;

  const slides = isLoading
    ? Array.from({ length: 1 }).map((_, i) => <WeatherTileSkeleton key={i} />)
    : weatherData?.map((item, i) => <WeatherTile key={i} weather={item} />) || [];

  return (
    <div
      className={cn(
        "relative w-full mb-0",
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
                ? "!h-full !w-auto flex items-center justify-center"
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
