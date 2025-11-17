import React from "react";
import { CardContent } from "@/components/ui/card";

import { IArticle } from "@/types/article";
import RecentUpdatesItem from "./item";

interface IRecentUpdateContentProps {
  recentNews: IArticle[];
}

const RecentUpdatesContent = ({ recentNews }: IRecentUpdateContentProps) => {
  return (
    <CardContent className="space-y-4">
      {recentNews.map((article: IArticle) => (
        <RecentUpdatesItem key={article.id} article={article} />
      ))}
    </CardContent>
  );
};

export default RecentUpdatesContent;
