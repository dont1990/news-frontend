"use client";

import { cn } from "@/lib/utils/cn";
import Chips from "../../ui/chips";
import { useTagNavigation } from "./hooks/useTagNavigation";
import { useCallback } from "react";
import HashTagIcon from "@/assets/shared-icons/hash";

interface IHashTagProps {
  tag: string;
  highlighted?: boolean;
}

const HashTag = ({ tag, highlighted = false }: IHashTagProps) => {
  const { toggleTag, navigateWithTags, recordTagClick, getTagState } =
    useTagNavigation();
  const { isActive } = getTagState(tag, highlighted);

  const handleClick = useCallback(() => {
    const newTags = toggleTag(tag);
    recordTagClick.mutate(tag);
    navigateWithTags(newTags);
  }, [tag, toggleTag, recordTagClick, navigateWithTags]);

  return (
    <Chips
      text={tag}
      onClick={handleClick}
      leftIcon={
        <HashTagIcon
          className={cn(
            "size-3 transition-colors",
            isActive ? "text-primary-500" : "text-gray-500"
          )}
        />
      }
      aria-pressed={isActive}
      className={cn(
        "py-0.5 px-2 text-sm bg-gray-100 transition-colors",
        isActive
          ? "text-primary-500 bg-primary-50"
          : "text-gray-500 hover:text-primary-500"
      )}
    />
  );
};

export default HashTag;
