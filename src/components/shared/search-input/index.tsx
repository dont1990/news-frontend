"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import CloseIcon from "@/assets/shared-icons/close";
import SearchIcon from "@/assets/shared-icons/search";
import { cn } from "@/lib/utils/cn";

interface ISearchInputProps {
  value: string;
  onChange: (v: string) => void;
  onSearch?: (value?: string) => void; // optional
  onClear?: () => void;
  placeholder?: string;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export function SearchInput({
  value,
  onChange,
  onSearch,
  onClear,
  placeholder = "جستجو...",
  className,
  onKeyDown,
  onFocus,
}: ISearchInputProps) {
  const handleClear = () => {
    onChange("");
    onClear?.();
    onSearch?.(""); // optional call, only if provided
  };

  return (
    <div className={`flex gap-2 relative w-full ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch?.(); // optional call
          onKeyDown?.(e);
        }}
        onFocus={onFocus}
        className="rounded-2xl h-10 w-full"
      />
      <Button
        onClick={() => onSearch?.()} // optional call
        className={cn("absolute left-0 rounded-2xl rounded-r-none h-full")}
        size={"sm"}
      >
        <motion.div
          whileHover={{ scale: 1.2, x: [0, 2, -2, 0] }}
          transition={{ duration: 0.4 }}
        >
          <SearchIcon />
        </motion.div>
      </Button>
      {value && (
        <Button
          variant="ghost"
          type="button"
          onClick={handleClear}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-full size-8"
        >
          <motion.div
            whileHover={{ rotate: [0, -20, 20, -15, 15, 0] }}
            transition={{ duration: 0.4 }}
          >
            <CloseIcon className="h-4 w-4" />
          </motion.div>
        </Button>
      )}
    </div>
  );
}
