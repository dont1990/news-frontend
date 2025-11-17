"use client";

import SectionTitle from "../../../components/shared/section-title";
import LiveStatCard from "./components/card";
import LiveStatCardSkeleton from "./components/card/skeleton";
import { useRates } from "./hooks/useRates";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";
import { mapLiveStats } from "./utils/mapLiveStats";

const LiveRates = () => {
  const { data, isLoading, isError } = useRates();

  if (isError) return null;

  const liveStats = data ? mapLiveStats(data) : [];

  return (
    <section>
      <SectionTitle
        title="آخرین قیمت‌ها"
        icon={<TrendingUpIcon className="w-5 h-5" />}
      />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <LiveStatCardSkeleton key={i} />
            ))
          : liveStats.map((stat) => <LiveStatCard key={stat.id} stat={stat} />)}
      </div>
    </section>
  );
};
export default LiveRates;
