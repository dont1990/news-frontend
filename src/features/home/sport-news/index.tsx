"use client";
import { NewsSection } from "@/components/shared/news-section";
import { useLimitedNews } from "../hooks/useLimitedNews";
import SportNewsGrid from "./components/grid";
import { categories } from "@/constants/categories/categories";
import { routes } from "@/routes/routes";

export default function SportNews() {
  const category = categories.find((c) => c.title === "ورزش");
  const { data: articles, isLoading } = useLimitedNews({
    category: "ورزش",
  });

  return (
    <NewsSection
      title="اخبار ورزشی"
      icon={category?.icon ? <category.icon className="w-5 h-5" /> : undefined}
      link={routes.news.getHref({ category: "ورزش" })}
      articles={articles}
      isLoading={isLoading}
      GridComponent={SportNewsGrid}
      skeletonType="overlay"
    />
  );
}
