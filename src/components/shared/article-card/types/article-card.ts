import { IArticle } from "@/types/article";

export interface IArticleCardProps {
  article: IArticle;
  type?: "default" | "overlay" | "bottomOverlay" | "horizontal";
  highlightQuery?: string;
}