import React from "react";
import TimeAgo from "@/components/shared/time-ago";
import Link from "next/link";
import { routes } from "@/routes/routes";
import { IArticle } from "@/types/article";

interface IRecentUpdatesItemProps {
  article: IArticle;
}

const RecentUpdatesItem = ({ article }: IRecentUpdatesItemProps) => {
  const { id, title, publishedAt } = article;

  return (
    <Link
      href={routes.news.detail.getHref(id)}
      className="space-y-2 pb-3 border-b border-border last:border-b-0 block hover:text-primary"
    >
      <div className="newspaper-body text-sm font-medium leading-tight line-clamp-2">
        {title}
      </div>
      <div className="w-full flex justify-end">
        <TimeAgo date={publishedAt} className="text-xs text-muted-foreground" />
      </div>
    </Link>
  );
};

export default RecentUpdatesItem;
