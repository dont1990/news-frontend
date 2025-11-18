"use client";

import SectionTitle from "@/components/shared/section-title";
import { ArticleCardSkeleton } from "@/components/shared/article-card/skeleton";
import { IArticle } from "@/types/article";
import { IArticleCardProps } from "../article-card/types/article-card";

interface INewsSectionProps {
  title: string;
  icon?: React.ReactNode;
  link?: string;
  articles: IArticle[] | undefined;
  isLoading: boolean;
  GridComponent: React.ComponentType<{ articles: IArticle[] }>;
  skeletonType?: IArticleCardProps["type"];
  skeletonCount?: number;
  containerClass?: string;
}

export function NewsSection({
  title,
  icon,
  link = "/",
  articles,
  isLoading,
  GridComponent,
  skeletonType = "default",
  skeletonCount = 6,
  containerClass = "",
}: INewsSectionProps) {
  return (
    <section className={containerClass}>
      <SectionTitle title={title} icon={icon} link={link} />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: skeletonCount }).map((_, idx) => (
            <ArticleCardSkeleton key={idx} type={skeletonType} />
          ))}
        </div>
      ) : (
        <GridComponent articles={articles || []} />
      )}
    </section>
  );
}
