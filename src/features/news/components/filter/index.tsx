"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchInput } from "@/components/shared/search-input";
import { useInfiniteCategories } from "../../hooks/useCategories";
import Chips from "@/components/ui/chips";
import CloseIcon from "@/assets/shared-icons/close";
import HashTagIcon from "@/assets/shared-icons/hash";

interface INewsListFilterProps {
  category: string;
  setCategory: (v: string) => void;
  searchInput: string;
  setSearchInput: (v: string) => void;
  onSearch: (value?: string) => void;
  dateFilter: "all" | "today" | "week" | "month";
  setDateFilter: (v: "all" | "today" | "week" | "month") => void;
  sort: string;
  setSort: (v: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}

export function NewsListFilter({
  category,
  setCategory,
  searchInput,
  setSearchInput,
  onSearch,
  dateFilter,
  setDateFilter,
  sort,
  setSort,
  tags,
  setTags,
}: INewsListFilterProps) {
  const filters: {
    label: string;
    value: "all" | "today" | "week" | "month";
  }[] = [
    { label: "همه", value: "all" },
    { label: "امروز", value: "today" },
    { label: "این هفته", value: "week" },
    { label: "این ماه", value: "month" },
  ];

  // ✅ Fetch categories (merged static + API)
  const {
    categories,
    loading: isLoading,
    ref: categoriesRef,
  } = useInfiniteCategories();

  return (
    <>
      <section className="flex flex-col gap-6 mb-6">
        <div className="flex justify-between gap-4 flex-wrap flex-col bml:flex-row">
          {/* 🔍 Search + Button */}
          <div className="flex gap-2 bml:max-w-md w-full relative rounded-2xl h-10 ring ring-primary flex-1">
            <SearchInput
              value={searchInput}
              onChange={setSearchInput}
              onSearch={onSearch}
            />
          </div>

          {/* 📅 Filters + Sort */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-4 justify-between">
            <div className="flex gap-2 flex-1">
              {filters.map((f) => (
                <Button
                  key={f.value}
                  variant={dateFilter === f.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setDateFilter(f.value)}
                  className="flex-1 h-10"
                >
                  {f.label}
                </Button>
              ))}
            </div>

            <div className="flex flex-1 gap-2">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full xs:w-32 flex-1">
                  <SelectValue placeholder="دسته‌بندی" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  <SelectItem value="همه">همه</SelectItem>

                  {isLoading ? (
                    <SelectItem disabled value="loading">
                      در حال بارگذاری...
                    </SelectItem>
                  ) : (
                    categories?.map((c) => (
                      <SelectItem key={c.title} value={c.title}>
                        {c.title}
                      </SelectItem>
                    ))
                  )}
                  <div ref={categoriesRef}></div>
                </SelectContent>
              </Select>

              <Select value={sort} onValueChange={setSort}>
                <SelectTrigger className="w-full xs:w-32 flex-1">
                  <SelectValue placeholder="مرتب‌سازی" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">جدید ترین</SelectItem>
                  <SelectItem value="oldest">قدیمی ترین</SelectItem>
                  <SelectItem value="views">پر بازدیدترین</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* ✅ Active Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chips
                key={tag}
                text={tag}
                rightIcon={<CloseIcon className="size-3 text-primary-500" />}
                leftIcon={<HashTagIcon className="size-3 text-primary-500" />}
                onClick={() => {
                  const newTags = tags.filter((t) => t !== tag);
                  setTags(newTags); // ✅ delegate back to parent
                }}
                className="bg-gray-100 text-primary-500"
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
