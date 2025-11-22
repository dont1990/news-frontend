"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQueryParams } from "@/hooks/useQueryParams";
import { routes } from "@/routes/routes";
import { IArticle } from "@/types/article";
import { useNewsFeed } from "@/hooks/useNewsFeed";

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { getParam, setParam, removeParam } = useQueryParams();

  // Only used to avoid reopening on page load
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    const initial = getParam("query") || "";
    setSearchQuery(initial);
    // Do NOT open preview automatically on mount
    initialized.current = true;
  }, [getParam]);

  // Fetch news based on current search query
  const { items: articles } = useNewsFeed(
    useMemo(
      () => (searchQuery.trim() ? { search: searchQuery.trim() } : {}),
      [searchQuery]
    )
  );

  // Take top 5 for preview
  const results: IArticle[] = articles.slice(0, 5);

  // Open preview when typing
  const handleInputChange = (value: string) => {
    setSearchQuery(value);
    setIsOpen(!!value.trim());
  };

  // Clear search and close preview
  const clearAll = () => {
    setSearchQuery("");
    removeParam("query");
    setIsOpen(false);
  };

  // Handle submit: update query param & navigate
  const handleSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      setParam("query", trimmed);
      router.push(routes.search.getHref({ query: trimmed }));
    }
    setIsOpen(false); // ensure preview closes before navigation
  };

  return {
    searchRef,
    searchQuery,
    setSearchQuery: handleInputChange,
    results,
    isOpen,
    setIsOpen,
    clearAll,
    handleSearch,
  };
}
