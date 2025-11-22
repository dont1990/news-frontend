"use client";

import { useNewsFeed } from "../../hooks/useNewsFeed";
import Container from "../../components/shared/container";
import { SearchPageFilter } from "./components/filter";
import { SearchPageResults } from "./components/results";
import { SearchPageEmpty } from "./components/results/empty";
import { PageHeader } from "../../components/shared/page-header";
import SearchIcon from "@/assets/shared-icons/search";
import { useNewsQueryFilters } from "@/hooks/useNewsQueryFilters";

export default function SearchPageContent() {
  const { filters, setFilters, raw } = useNewsQueryFilters();
  const {
    items: articles,
    total,
    ref,
    isFetchingNextPage,
  } = useNewsFeed(filters);

  return (
    <>
      <PageHeader
        title={raw.search ? `نتایج "${raw.search}"` : "جستجوی اخبار"}
        subtitle={raw.search ? `${total} نتیجه یافت شد` : undefined}
        badgeText="نتایج جستجو"
        badgeCount={total}
        icon={<SearchIcon />}
      />
      <Container>
        <SearchPageFilter
          {...raw}
          setCategory={setFilters.category}
          setDateFilter={setFilters.dateFilter}
          setSort={setFilters.sort}
          setTags={setFilters.tags}
        />

        {articles.length ? (
          <SearchPageResults
            articles={articles}
            query={raw.search}
            infiniteScrollRef={ref}
            isFetchingNextPage={isFetchingNextPage}
          />
        ) : (
          <SearchPageEmpty query={raw.search} />
        )}
      </Container>
    </>
  );
}
