"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShareButton } from "@/components/shared/share";
import { routes } from "@/routes/routes";
import { Separator } from "@/components/ui/separator";
import CategoryBadge from "@/components/shared/category-badge";
import { IArticle } from "@/types/article";
import { HeroMetaInfo } from "./meta-info";

type Props = {
  article: IArticle;
};

export function HeroArticleInfo({ article }: Props) {
  const hasActions =
    !!article.id || !!article.sourceLink || !!article.description;

  return (
    <div className="lg:col-span-5 flex flex-col justify-center gap-6 lg:gap-8 xl:gap-10 text-right">
      {/* ✅ Category */}
      {article.category && (
        <div className="flex items-center">
          <CategoryBadge title={article.category} />
        </div>
      )}

      {/* ✅ Title */}
      {article.title && (
        <p className="text-xl md:text-3xl xl:text-4xl font-extrabold leading-tight text-foreground line-clamp-3 tracking-tight">
          {article.title}
        </p>
      )}

      {/* ✅ Description */}
      {article.description && (
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed border-s-2 sm:border-s-4 border-primary ps-3 sm:ps-4 md:ps-6 line-clamp-2 sm:line-clamp-3 text-justify">
          {article.description}
        </p>
      )}

      {/* ✅ Buttons / Actions */}
      {hasActions && (
        <div className="flex flex-wrap gap-3">
          {article.id && (
            <Link href={routes.news.detail.getHref(article.id)}>
              <Button>مطالعه کامل خبر</Button>
            </Link>
          )}

          {/* <IconActionButton
            icon={<Bookmark className="w-4 h-4" />}
            tooltip="افزودن به نشان‌ها"
            variant="ghost"
            size="lg"
          /> */}

          {article.title && (
            <ShareButton
              url={article.sourceLink ?? window.location.href}
              title={article.title}
              description={article.description}
              variant="outline"
              showLabel
            />
          )}
        </div>
      )}

      {/* ✅ Meta Info */}
      {(article.source || article.publishedAt || article.views) && (
        <>
          <Separator />
          <HeroMetaInfo article={article} />
        </>
      )}
    </div>
  );
}
