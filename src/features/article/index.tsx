"use client";

import ArticleHeader from "./components/header";
import ArticleHeroImage from "./components/hero-image";
import ArticleRelated from "./components/related";
import { IArticle } from "@/types/article";
import Container from "@/components/shared/container";
import { AnimatedLink } from "@/components/shared/animated-link";
import ArrowLeft from "../../assets/shared-icons/arrow-left";
import { NAVBAR_HEIGHT } from "@/constants/global";
import { routes } from "@/routes/routes";
import ArticleHashTags from "@/components/shared/hash-tags";
import ArticleDescription from "./components/description";
import { useLimitedNews } from "../home/hooks/useLimitedNews";

interface IArticlePageContentProps {
  article: IArticle;
}

export default function ArticlePageContent({
  article,
}: IArticlePageContentProps) {
  const { data: relatedArticles = [], isLoading } = useLimitedNews({
    category: article.category,
    sort: "latest",
    excludeId: article.id,
  });


  return (
    <Container>
      <div className="mb-8">
        <AnimatedLink href={routes.home.getHref()}>
          بازگشت به اخبار
          <ArrowLeft className="h-4 w-4 mt-0.5 ms-0.5" />
        </AnimatedLink>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
        <article className="xl:col-span-3">
          <ArticleHeader article={article} />
          <ArticleHeroImage article={article} />
          <ArticleDescription article={article} />
          <div className="my-5">
            <ArticleHashTags tags={article.tags || []} />
          </div>
        </article>

        <aside className="xl:col-span-1 sticky" style={{ top: NAVBAR_HEIGHT }}>
          <ArticleRelated relatedArticles={relatedArticles} />
        </aside>
      </div>
    </Container>
  );
}
