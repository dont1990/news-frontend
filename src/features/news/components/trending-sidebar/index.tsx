"use client";

import { IArticle } from "@/types/article";
import { TrendingHeader } from "./header";
import TrendingList from "./list";

interface ITrendingSidebarProps {
  articles: IArticle[] | undefined;
}

export function TrendingSidebar({ articles }: ITrendingSidebarProps) {
  return (
    <aside className="p-3 border border-border rounded-2xl bg-muted/30 shadow-sm h-fit w-full lg:w-80">
      <TrendingHeader />
      <TrendingList articles={articles} />
    </aside>
  );
}
