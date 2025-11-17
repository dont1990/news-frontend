"use client";

import { Card } from "@/components/ui/card";
import { useTrendingTags } from "../../hooks/useTrendingTags";
import { useTagNavigation } from "@/components/shared/hash-tags/hooks/useTagNavigation";
import { TrendingTopicsSkeleton } from "./skeleton";
import TrendingTopicsTitle from "./title";
import TrendingTopicsContent from "./content";

export default function TrendingTopicsCard() {
  const { data: topics = [], isLoading, error } = useTrendingTags();
  const { navigateWithTags } = useTagNavigation();

  if (error) return null;

  return (
    <Card>
      <TrendingTopicsTitle />
      {isLoading ? (
        <TrendingTopicsSkeleton />
      ) : (
        <TrendingTopicsContent
          topics={topics}
          navigateWithTags={navigateWithTags}
        />
      )}
    </Card>
  );
}
