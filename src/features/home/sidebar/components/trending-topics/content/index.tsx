"use client";

import React from "react";
import { CardContent } from "@/components/ui/card";
import TrendingTopicsItem from "./item";

interface ITrendingTopicsContentProps {
  topics: { tag: string; clicks: number }[];
  navigateWithTags: (tags: string[]) => void;
}

const TrendingTopicsContent = ({
  topics,
  navigateWithTags,
}: ITrendingTopicsContentProps) => {
  return (
    <CardContent className="space-y-3">
      {topics.map((item, index) => (
        <TrendingTopicsItem
          key={index}
          item={item}
          navigateWithTags={navigateWithTags}
        />
      ))}
    </CardContent>
  );
};

export default TrendingTopicsContent;
