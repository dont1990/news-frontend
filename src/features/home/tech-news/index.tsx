"use client";
import { useLimitedNews } from "../hooks/useLimitedNews";
import { categories } from "@/constants/categories/categories";
import TechNewsGrid from "./components/grid";
import { NewsSection } from "@/components/shared/news-section";
import { routes } from "@/routes/routes";

export default function TechNews() {
  const category = categories.find((c) => c.title === "فناوری");
  const { data: articles, isLoading } = useLimitedNews({
    category: "فناوری",
  });

  return (
    <NewsSection
      title="اخبار فناوری"
      icon={category?.icon ? <category.icon className="w-5 h-5" /> : undefined}
      link={routes.news.getHref({ category: "فناوری" })}
      articles={articles}
      isLoading={isLoading}
      GridComponent={TechNewsGrid}
      skeletonType="bottomOverlay"
      containerClass="mb-48"
    />
  );
}
