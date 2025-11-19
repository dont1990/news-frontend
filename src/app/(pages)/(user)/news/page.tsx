import { Suspense } from "react";
import { NewsListPage } from "@/features/news";

const NewsPage = () => {
  return (
    <Suspense fallback={null}>
      <NewsListPage />
    </Suspense>
  );
};

export default NewsPage;
