"use client";

import Container from "../../components/shared/container";
import { TrendingSidebar } from "./components/trending-sidebar";
import { NewsListArticles } from "./components/articles";
import { NewsListFilter } from "./components/filter";
import NewsListSkeleton from "./skeleton";
import { PageHeader } from "../../components/shared/page-header";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";
import { useNewsListController } from "./hooks/useNewsListController";

export function NewsListPage() {
  const {
    raw,
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
  } = useNewsListController();

  return (
    <>
      <PageHeader
        title={categoryName}
        subtitle={categoryDescription}
        badgeText="مقاله موجود"
        badgeCount={total}
        icon={<TrendingUpIcon />}
      />

      <Container>
        <NewsListFilter
          {...raw}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setCategory={setFilters.category}
          onSearch={(v) => setFilters.search(v ?? searchInput)}
          setSort={setFilters.sort}
          setDateFilter={setFilters.dateFilter}
          setTags={setFilters.tags}
        />

        {loading ? (
          <NewsListSkeleton />
        ) : (
          <div className="flex gap-4 flex-col lg:flex-row">
            <NewsListArticles
              articles={articles}
              category={raw.category}
              categoryName={categoryName}
              query={raw.search}
              infiniteScrollRef={ref}
              isFetchingNextPage={isFetchingNextPage}
            />
            <TrendingSidebar articles={trendingArticles} />
          </div>
        )}
      </Container>
    </>
  );
}
