import { useMemo } from "react";
import { useInfinite } from "@/hooks/useInfinite";
import { categories as staticCategories } from "@/constants/categories/categories";
import HashTagIcon from "@/assets/shared-icons/hash";
import { ICategory } from "@/constants/categories/types/category";
import { PER_PAGE } from "@/constants/global";

function mergeCategories(apiCats: string[]): ICategory[] {
  const mappedApiCats: ICategory[] = apiCats.map((title) => {
    const found = staticCategories.find((c) => c.title === title);
    return found || { title, icon: HashTagIcon, description: "" };
  });

  const unique = new Map<string, ICategory>();
  [...staticCategories, ...mappedApiCats].forEach((cat) =>
    unique.set(cat.title, cat)
  );
  return Array.from(unique.values());
}

type CategoryFilters = {
  search?: string;
  sort?: string;
};

export function useInfiniteCategories(
  filters?: CategoryFilters,
  limit: number = PER_PAGE
) {
  const {
    items,
    ref,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    loading,
  } = useInfinite<string>("categories", filters, limit);

  const categories = useMemo(() => mergeCategories(items), [items]);

  return {
    categories,
    ref,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    loading,
  };
}
