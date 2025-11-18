import { TrendingDown } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ISectionTitleProps {
  title: string;
  link?: string;
  icon?: React.ReactNode;
}

const SectionTitle = ({ title, link, icon }: ISectionTitleProps) => {
  return (
    <div className="mb-6 border-b border-border pb-2 flex justify-between gap-2 text-base items-center">
      {/* Right: Title + optional icon */}
      <div className="flex items-center gap-2 bg-primary/5 py-2 px-3 rounded-full">
        {icon && <span className="text-primary">{icon}</span>}
        <p className="text-foreground">{title}</p>
      </div>

      {/* Left: Link */}
      {link && (
        <Link
          href={link ? link : "/"}
          className="inline-flex z-1 gap-1 items-center group text-primary cursor-pointer"
        >
          <div>مشاهده همه</div>
          <TrendingDown className="h-5 w-5 rotate-180 mt-0.5 group-hover:-translate-x-1 transition duration-300" />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
