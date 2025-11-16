"use client";

import { NAVBAR_HEIGHT } from "@/constants/global";
import { Newsletter } from "@/features/home/sidebar/components/newsletter";
import RecentUpdatesCard from "./components/recent-updates";
import TrendingTopicsCard from "./components/trending-topics";
import IranWeatherSlider from "./components/weather";
import WorldClockSlider from "./components/world-clock";

export function HomePageSidebar() {
  return (
    <div className={`sticky`} style={{ top: NAVBAR_HEIGHT }}>
      <div className="grid gap-y-6" dir="rtl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <TrendingTopicsCard />
          <RecentUpdatesCard />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          <IranWeatherSlider variant="vertical" />
          <WorldClockSlider variant="vertical" />
        </div>
        <Newsletter />
      </div>
    </div>
  );
}
