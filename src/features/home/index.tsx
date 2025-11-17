import { HomePageSidebar } from "@/features/home/sidebar";
import Hero from "./hero";
import LatestNews from "./latest-news";
import Container from "../../components/shared/container";
import TechNews from "./tech-news";
import SportNews from "./sport-news";
import NewspapersGrid from "./newspaper";
import { Suspense } from "react";
import { BreakingNews } from "./breaking-news";
import LiveRates from "./live-rates";

export default function HomePageContent() {
  return (
    <>
      <Hero />
      {/* <PageHeader
        title="با اخبار جهانی همراه باشید"
        subtitle="آخرین اخبار فوری، تحلیل‌های عمیق و داستان‌های پرطرفدار از سراسر جهان"
      /> */}

        <Container>
          <div className="flex flex-col lg:flex-row gap-6 mb-0">
            <div className="space-y-20 w-full lg:w-[calc(100%-336px)]">
              {/* <FeaturedNews /> */}
              <div className="flex flex-col gap-6">
                <BreakingNews />
                <LiveRates />
                {/* <IranWeatherSlider />
                <WorldClockSlider /> */}
              </div>
              <LatestNews />
              <SportNews />
              <TechNews />
            </div>
            <div className="w-full lg:w-[320px]">
              <HomePageSidebar />
            </div>
          </div>
        </Container>
        <NewspapersGrid />
     
    </>
  );
}
