"use client";

import Image from "next/image";
import CategoryBadge from "../../category-badge";
import { useRouter } from "next/navigation";
import { IArticle } from "@/types/article";
import TimeAgo from "../../time-ago";
import ClockIcon from "@/assets/shared-icons/clock";

interface SearchResultItemProps {
  article: IArticle;
  onClick: () => void;
}

export function SearchResultItem({ article, onClick }: SearchResultItemProps) {
  const {
    id,
    imageUrl,
    title,
    category,
    description,
    publishedAt,
    readTime,
    source,
  } = article;

  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/article/${id}`);
        onClick();
      }}
      className="hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/5 transition-all duration-300 cursor-pointer border-b border-border/50 last:border-b-0 group"
    >
      <div className="p-5 flex gap-4">
        <div className="relative overflow-hidden rounded-2xl flex-shrink-0 w-20 h-16">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CategoryBadge title={category} />
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <ClockIcon className="h-3 w-3" />
              <span>
                <TimeAgo date={publishedAt} />
              </span>
            </div>
          </div>

          <p className="font-semibold text-sm line-clamp-2 mb-2 leading-tight group-hover:text-primary transition-colors">
            {title}
          </p>
          <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="mt-2 text-xs text-muted-foreground font-medium flex gap-1">
            <span>{source}</span>•
            <span className="flex gap-1">
              <span>{readTime}</span>
              دقیقه زمان مطالعه
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
