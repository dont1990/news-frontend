"use client";

import { useState, useEffect, useMemo } from "react";
import { categories } from "@/constants/categories/categories";
import { useNewsFeed } from "@/hooks/useNewsFeed";
import { useNewsQueryFilters } from "@/hooks/useNewsQueryFilters";
import { useTrendingNews } from "./useTrendingNews";

export function useNewsListController() {
  const { filters, setFilters, raw } = useNewsQueryFilters();

  // local search input for UX
  const [searchInput, setSearchInput] = useState(raw.search);

  // sync when URL changes
  useEffect(() => {
    setSearchInput(raw.search);
  }, [raw.search]);

  // fetch items
  const {
    items: articles,
    total,
    ref,
    isFetchingNextPage,
    loading,
  } = useNewsFeed(filters);

  const { data: trendingArticles } = useTrendingNews();

  // category data
  const categoryObj = categories.find((c) => c.title === raw.category);

  const categoryName =
    raw.category === "همه" || !categoryObj?.title ? "همه" : categoryObj?.title;

  const categoryDescription =
    raw.category === "همه"
      ? "مروری بر همه مقالات موجود در سایت..."
      : categoryObj?.description;

  return {
    raw,
    filters,
    setFilters,
    searchInput,
    setSearchInput,
    categoryName,
    categoryDescription,
    articles,
    trendingArticles,
    total,
    ref,
    loading,
    isFetchingNextPage,
  };
}
