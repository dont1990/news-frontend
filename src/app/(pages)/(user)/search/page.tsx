import SearchPageContent from "@/features/search";
import { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback={null}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
