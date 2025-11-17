import React from "react";
import ClockIcon from "@/assets/shared-icons/clock";
import { CardHeader, CardTitle } from "@/components/ui/card";

const RecentUpdatesTitle = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg text-foreground font-medium">
        <ClockIcon className="h-5 w-5 text-primary" />
        <span className="text-foreground font-medium">
          به‌روزرسانی‌های اخیر
        </span>
      </CardTitle>
    </CardHeader>
  );
};

export default RecentUpdatesTitle;
