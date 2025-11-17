"use client";

import React from "react";
import TrendingUpIcon from "@/assets/shared-icons/trending-up";
import { CardHeader, CardTitle } from "@/components/ui/card";

const TrendingTopicsTitle = () => {
  return (
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg text-foreground font-medium">
        <TrendingUpIcon className="h-5 w-5 text-primary" />
        <span className="text-foreground font-medium">موضوعات داغ</span>
      </CardTitle>
    </CardHeader>
  );
};

export default TrendingTopicsTitle;
