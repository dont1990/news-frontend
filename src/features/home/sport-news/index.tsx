"use client";

import SectionTitle from "@/components/shared/section-title";
import React from "react";
import SportNewsGrid from "./components/grid";
import { categories } from "@/constants/categories/categories";
import { useLimitedNews } from "../hooks/useLimitedNews";
import { ArticleCardSkeleton } from "@/components/shared/article-card/skeleton";

const SportNews = () => {
  const sportCategory = categories.find((c) => c.title === "ورزش");
  const SportIcon = sportCategory?.icon;

  const { data: articles, isLoading } = useLimitedNews({
    category: "ورزش",
    sort: "desc",
  });

  return (
    <section>
      <SectionTitle
        title="اخبار ورزشی"
        icon={SportIcon ? <SportIcon className="w-5 h-5" /> : undefined}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ArticleCardSkeleton key={idx} type="overlay" />
          ))}
        </div>
      ) : (
        <div>
          <SportNewsGrid articles={articles || []} />
        </div>
      )}
    </section>
  );
};

export default SportNews;
