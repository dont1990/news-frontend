"use client";
import Link from "next/link";
import { IArticle } from "@/types/article";
import { routes } from "@/routes/routes";

interface IArticleRelatedProps {
  relatedArticles: IArticle[];
  loading?: boolean;
}
export default function ArticleRelated({
  relatedArticles,
  loading,
}: IArticleRelatedProps) {
  
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <p className="text-xl mb-6 text-foreground">مقالات مرتبط</p>

      {loading && (
        <p className="text-sm text-muted-foreground">در حال بارگذاری...</p>
      )}

      {!loading && relatedArticles.length === 0 && (
        <p className="text-sm text-muted-foreground">مقاله مشابهی یافت نشد.</p>
      )}

      <div className="space-y-6">
        {relatedArticles.map((relatedArticle) => (
          <Link
            key={relatedArticle.id}
            href={routes.news.detail.getHref(relatedArticle.id)}
          >
            {/* Card content */}
          </Link>
        ))}
      </div>
    </div>
  );
}
