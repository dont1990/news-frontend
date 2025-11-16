"use client";

import SectionTitle from "@/components/shared/section-title";
import React from "react";
import TechNewsGrid from "./components/grid";
import { categories } from "@/constants/categories/categories";
import { useLimitedNews } from "../hooks/useLimitedNews";
import { ArticleCardSkeleton } from "@/components/shared/article-card/skeleton";

const TechNews = () => {
  const techCategory = categories.find((c) => c.title === "فناوری");
  const TechIcon = techCategory?.icon;

  const { data: articles = [], isLoading } = useLimitedNews({
    category: "فناوری",
    sort: "desc",
  });

  return (
    <section className="mb-48">
      <SectionTitle
        title="اخبار فناوری"
        icon={TechIcon ? <TechIcon className="w-5 h-5" /> : undefined}
      />
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-28">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ArticleCardSkeleton key={idx} type="bottomOverlay" />
          ))}
        </div>
      ) : (
        <>
          <TechNewsGrid articles={articles} />
        </>
      )}
    </section>
  );
};

export default TechNews;
