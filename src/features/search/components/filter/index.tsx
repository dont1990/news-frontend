"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/constants/categories/categories";
import Chips from "@/components/ui/chips";
import HashTagIcon from "@/assets/shared-icons/hash";
import CloseIcon from "@/assets/shared-icons/close";

interface ISearchPageFilterProps {
  category: string;
  setCategory: (v: string) => void;
  dateFilter: "all" | "today" | "week" | "month";
  setDateFilter: (v: "all" | "today" | "week" | "month") => void;
  sort: string;
  setSort: (v: string) => void;
  tags: string[];
  setTags: (tags: string[]) => void;
}

export function SearchPageFilter({
  category,
  setCategory,
  dateFilter,
  setDateFilter,
  sort,
  setSort,
  tags,
  setTags,
}: ISearchPageFilterProps) {
  const filters: {
    label: string;
    value: "all" | "today" | "week" | "month";
  }[] = [
    { label: "همه", value: "all" },
    { label: "امروز", value: "today" },
    { label: "این هفته", value: "week" },
    { label: "این ماه", value: "month" },
  ];

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-wrap justify-between gap-4">
        {/* Date Filters */}
        <div className="flex gap-2 flex-wrap grow md:grow-0">
          {filters.map((f) => (
            <Button
              key={f.value}
              size="sm"
              variant={dateFilter === f.value ? "default" : "outline"}
              onClick={() => setDateFilter(f.value)}
              className="grow md:grow-0"
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Category & Sort */}
        <div className="flex gap-2 flex-wrap grow md:grow-0">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-40 grow md:grow-0">
              <SelectValue placeholder="دسته‌بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="همه">همه</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.title} value={c.title}>
                  {c.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-40 grow md:grow-0">
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
                setTags(newTags);
              }}
              className="bg-gray-100 text-primary-500"
            />
          ))}
        </div>
      )}
    </div>
  );
}
