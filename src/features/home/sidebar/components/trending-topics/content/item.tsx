"use client";

import React from "react";
import HashTagIcon from "@/assets/shared-icons/hash";
import { Badge } from "@/components/ui/badge";

interface ITrendingTopicsItemProps {
  item: { tag: string; clicks: number };
  navigateWithTags: (tags: string[]) => void;
}

const TrendingTopicsItem = ({
  item,
  navigateWithTags,
}: ITrendingTopicsItemProps) => {
  return (
    <div
      className="flex items-center justify-between border-b border-border last:border-b-0 cursor-pointer bg-primary/5 p-2 rounded-2xl"
      onClick={() => navigateWithTags([item.tag])}
    >
      <HashTagIcon className="text-primary size-6" />
      <span className="newspaper-body text-sm font-medium">{item.tag}</span>

      <Badge variant="outline" className="text-xs">
        {item.clicks.toLocaleString("fa-IR")}
      </Badge>
    </div>
  );
};

export default TrendingTopicsItem;
