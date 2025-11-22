import { useMemo } from "react";
import { useQueryParams } from "@/hooks/useQueryParams";

export function useNewsQueryFilters() {
  const { getParam, setParam } = useQueryParams();

  const category = getParam("category") || "همه";
  const search = getParam("search") || getParam("query") || "";
  const dateFilter =
    (getParam("date") as "all" | "today" | "week" | "month") || "all";
  const sort = getParam("sort") || "latest";
  const tags = (getParam("tags")?.split(",") || []).filter(Boolean);

  const filters = useMemo(
    () => ({ category, search, dateFilter, sort, tags }),
    [category, search, dateFilter, sort, tags]
  );

  const setFilters = {
    category: (val: string | null) => setParam("category", val),
    search: (val: string | null) => setParam("search", val),
    dateFilter: (val: string) => setParam("date", val),
    sort: (val: string) => setParam("sort", val),
    tags: (newTags: string[]) =>
      setParam("tags", newTags.length ? newTags.join(",") : null),
  };

  return {
    filters,
    setFilters,
    raw: { category, search, dateFilter, sort, tags },
  };
}
