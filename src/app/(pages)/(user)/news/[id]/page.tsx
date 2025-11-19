import { Metadata } from "next";
import ArticlePageWrapper from "@/features/article/wrapper";
import { getArticleById } from "@/features/article/services/getArticleById";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { id } =await params;
  const article = await getArticleById(id);

  if (!article) {
    return {
      title: "مقاله یافت نشد | خبرنامه",
      description: "مقاله مورد نظر یافت نشد.",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonicalUrl = `${siteUrl}/news/${id}`;

  return {
    title: `${article.title} | خبرنامه`,
    description: article.description,
    openGraph: { title: article.title, description: article.description },
    twitter: { title: article.title, description: article.description },
    alternates: { canonical: canonicalUrl },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } =await params;
  return <ArticlePageWrapper id={id} />;
}
