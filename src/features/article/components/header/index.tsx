"use client";

import { Button } from "@/components/ui/button";
import Clock from "../../../../assets/shared-icons/clock";
import UserIcon from "../../assets/user";
import CalendarIcon from "../../../../assets/shared-icons/calendar";
import Share from "../../assets/share";
import BookmarkIcon from "../../assets/bookmark";
import { IArticle } from "@/types/article";
import DateText from "@/components/shared/date-text";
import TimeAgo from "@/components/shared/time-ago";
import CategoryBadge from "@/components/shared/category-badge";
import { routes } from "@/routes/routes";

interface IArticleHeaderProps {
  article: IArticle;
}

export default function ArticleHeader({ article }: IArticleHeaderProps) {
  const { category, source, sourceLink, title, publishedAt, readTime } =
    article;

  return (
    <header className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <CategoryBadge title={category ?? routes.home.getHref()} />
        {sourceLink ? (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {source}
          </a>
        ) : (
          <span className="text-sm text-muted-foreground">{source}</span>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl mb-6 leading-tight text-foreground">
        {title}
      </h1>

      {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
        {description}
      </p> */}

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <UserIcon className="h-4 w-4 text-primary" />
          <span className="font-medium">نام منبع : {source}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-4 w-4 text-primary" />
          <span>
            تاریخ انتشار:{" "}
            <DateText
              date={publishedAt}
              className="text-muted-foreground me-0.5"
            />
            (
            <TimeAgo date={publishedAt} className="text-muted-foreground" />)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>مدت زمان مطالعه: {readTime} دقیقه</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{article.views?.toLocaleString("fa-IR") ?? 0} بازدید</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
          aria-label={`اشتراک‌گذاری مقاله ${title}`}
        >
          <Share className="h-4 w-4" />
          اشتراک‌گذاری
        </Button>
        {/* <Button
          variant="outline"
          size="sm"
          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
        >
          <BookmarkIcon className="h-4 w-4" />
          ذخیره برای بعد
        </Button> */}
      </div>
    </header>
  );
}
