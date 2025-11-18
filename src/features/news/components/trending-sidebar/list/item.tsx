"use client";

import { IArticle } from "@/types/article";
import Link from "next/link";
import Image from "next/image";
import { routes } from "@/routes/routes";

interface ITrendingItemProps {
  article: IArticle;
  index: number;
}

export default function TrendingItem({ article, index }: ITrendingItemProps) {
  return (
    <li className="min-w-[250px] md:min-w-0 flex-shrink-0">
      <Link
        href={routes.news.detail.getHref(article.id)}
        className="group flex items-center gap-2 rounded-2xl hover:bg-accent transition-all duration-300 p-2"
      >
        <span className="flex-shrink-0 text-sm font-bold text-muted-foreground w-5">
          #{index + 1}
        </span>

        {article.imageUrl && (
          <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-2xl border border-border group-hover:scale-105 transition-all duration-300">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <p className="text-sm font-medium text-foreground group-hover:text-primary line-clamp-2 transition-colors duration-300">
          {article.title}
        </p>
      </Link>
    </li>
  );
}
