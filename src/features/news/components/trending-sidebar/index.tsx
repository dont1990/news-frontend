"use client";

import { IArticle } from "@/types/article";
import { NAVBAR_HEIGHT } from "@/constants/global";
import { TrendingHeader } from "./header";
import TrendingList from "./list";

interface ITrendingSidebarProps {
  articles: IArticle[];
}

export function TrendingSidebar({ articles }: ITrendingSidebarProps) {
  return (
    <aside
      className="p-3 border border-border rounded-2xl bg-muted/30 shadow-sm h-fit w-full lg:w-80 lg:mt-0 sticky"
      style={{ top: NAVBAR_HEIGHT }}
    >
      <TrendingHeader />
      <TrendingList articles={articles} />
    </aside>
  );
}
