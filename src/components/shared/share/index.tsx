"use client";

import { useState } from "react";
import {
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Link2,
  Mail,
  MessageCircle,
  Check,
} from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { IconActionButton } from "@/components/shared/icon-action-button";

interface IShareButtonProps {
  url?: string;
  title?: string;
  description?: string;
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "sm" | "lg" | "icon";
  showLabel?: boolean;
}

export function ShareButton({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "این خبر را ببینید!",
  description = "",
  variant = "ghost",
  size = "default",
  showLabel = false,
}: IShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareOptions = [
    {
      name: "توییتر",
      icon: Twitter,
      color: "hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2]",
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        ),
    },
    {
      name: "فیسبوک",
      icon: Facebook,
      color: "hover:bg-[#1877F2]/10 hover:text-[#1877F2]",
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        ),
    },
    {
      name: "لینکدین",
      icon: Linkedin,
      color: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
      action: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        ),
    },
    {
      name: "واتساپ",
      icon: MessageCircle,
      color: "hover:bg-[#25D366]/10 hover:text-[#25D366]",
      action: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
          "_blank"
        ),
    },
    {
      name: "ایمیل",
      icon: Mail,
      color: "hover:bg-muted hover:text-foreground",
      action: () =>
        (window.location.href = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(description + "\n\n" + url)}`),
    },
    {
      name: copied ? "کپی شد!" : "کپی لینک",
      icon: copied ? Check : Link2,
      color: copied
        ? "bg-green-500/10 text-green-600"
        : "hover:bg-muted hover:text-foreground",
      action: async () => {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error("خطا در کپی:", err);
        }
      },
    },
  ];

  return (
    <IconActionButton
      icon={<Share2 className="w-4 h-4" />}
      label={showLabel ? "اشتراک‌گذاری" : undefined}
      tooltip="اشتراک‌گذاری"
      variant={variant}
      size={size}
      dropdownItems={shareOptions.map((option) => (
        <DropdownMenuItem
          key={option.name}
          onClick={option.action}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-300 cursor-pointer ${option.color}`}
        >
          <option.icon className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm font-medium">{option.name}</span>
        </DropdownMenuItem>
      ))}
    />
  );
}
