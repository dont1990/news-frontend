"use client";

import { ArticleCard } from "@/components/shared/article-card";
import { getCategoryColors } from "@/lib/category-colors";
import { IArticle } from "@/types/article";
import { InfiniteLoader } from "@/components/shared/infinite-loader";
import { EmptyCategory } from "./empty";
import { FeaturedArticle } from "./featured-article";

interface INewsListArticlesProps {
  articles: IArticle[];
  category: string;
  categoryName: string;
  query: string;
  infiniteScrollRef?: React.Ref<HTMLDivElement>;
  isFetchingNextPage: boolean;
}

export function NewsListArticles({
  articles,
  category,
  categoryName,
  query,
  infiniteScrollRef,
  isFetchingNextPage,
}: INewsListArticlesProps) {
  const categoryColors = getCategoryColors(category);

  if (!articles || articles.length === 0) {
    return (
      <EmptyCategory
        categoryName={categoryName}
        categoryColors={categoryColors}
      />
    );
  }

  const featuredArticle = articles.length > 1 ? articles[0] : undefined;
  const restArticles = articles.length > 1 ? articles.slice(1) : articles;

  return (
    <div className="flex-1">
      {featuredArticle && <FeaturedArticle article={featuredArticle} />}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {restArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            highlightQuery={query}
          />
        ))}
      </div>

      <div ref={infiniteScrollRef} aria-hidden="true" />
      {isFetchingNextPage && (
        <InfiniteLoader className="my-6" message="در حال بارگذاری ..." />
      )}
    </div>
  );
}
