"use client";

import { useMutation } from "@tanstack/react-query";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useRouter, usePathname } from "next/navigation";

export function useTagNavigation() {
  const { getParam, updateParams } = useQueryParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentTags = (getParam("tags") || "").split(",").filter(Boolean);

  const toggleTag = (tag: string) =>
    currentTags.includes(tag)
      ? currentTags.filter((t) => t !== tag)
      : [...currentTags, tag];

  const getTagState = (tag: string, highlighted = false) => {
    const isSelected = currentTags.includes(tag);
    return { isSelected, isActive: isSelected || highlighted };
  };

  const navigateWithTags = (tags: string[]) => {
    const isNewsListingPage = pathname === "/news";
    const isSearchPage = pathname.startsWith("/search");
    const query = tags.length
      ? `?tags=${encodeURIComponent(tags.join(","))}`
      : "";

    if (isNewsListingPage || isSearchPage) {
      // stay on current page, just update params
      updateParams(
        { tags: tags.length ? tags.join(",") : null },
        { replace: true }
      );
    } else {
      // redirect to search page from other pages (like /news/[id])
      router.push(`/search${query}`);
    }
  };

  const recordTagClick = useMutation({
    mutationFn: async (tag: string) => {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/tags/${encodeURIComponent(
          tag
        )}/click`,
        { method: "POST" }
      );
    },
  });

  return {
    currentTags,
    toggleTag,
    navigateWithTags,
    recordTagClick,
    getTagState,
  };
}
