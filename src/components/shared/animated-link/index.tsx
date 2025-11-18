"use client";

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import type { FC, ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface AnimatedLinkProps extends Omit<AnchorProps, "href">, LinkProps {
  children: ReactNode;
  className?: string;
  icon?: FC<React.SVGProps<SVGSVGElement>>; // optional SVG icon
  tooltip?: string; // ✅ optional tooltip
}

export const AnimatedLink: FC<AnimatedLinkProps> = ({
  children,
  className,
  icon: Icon,
  tooltip,
  ...props
}) => {
  const content = (
    <Link
      {...props}
      className={`transition-colors duration-300 group-hover/link:text-primary hover:font-medium flex items-center gap-1 ${className}`}
    >
      {Icon && (
        <Icon className="w-4 h-4 inline-block text-muted-foreground mr-1 group-hover/link:text-primary" />
      )}
      {children}
    </Link>
  );

  if (!tooltip)
    return (
      <motion.div
        whileHover={{ x: -4, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="inline-flex items-center gap-2 group/link"
      >
        {content}
      </motion.div>
    );

  // Wrap with tooltip
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileHover={{ x: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="inline-flex items-center gap-2 group/link"
        >
          {content}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top">{tooltip}</TooltipContent>
    </Tooltip>
  );
};
