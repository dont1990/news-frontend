"use client";

import { IArticle } from "@/types/article";
import TrendingItem from "./item";

interface ITrendingList {
  articles: IArticle[];
}

export default function TrendingList({ articles }: ITrendingList) {
  if (!articles?.length) {
    return <p>موردی یافت نشد.</p>;
  }

  return (
    <ul className="gap-y-4 md:gap-y-3 flex md:block overflow-x-auto md:overflow-visible no-scrollbar md:gap-0 flex-col">
      {articles.map((article, index) => (
        <TrendingItem key={article.id} article={article} index={index} />
      ))}
    </ul>
  );
}
