"use client";

import { useState } from "react";
import { useTopNewspapers } from "./hooks/useTopNewspapers";
import Container from "@/components/shared/container";
import SectionTitle from "@/components/shared/section-title";

import NewspaperIcon from "./assets/newspaper";
import SwiperWrapper from "./components/swiper";
import NewspaperGallery from "./components/gallery";
import NewspapersSwiperSkeleton from "./skeleton";

export default function TopNewspapers() {
  const { data: papers, isLoading, error } = useTopNewspapers();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openGallery = (index: number) => {
    if (!papers?.length) return; 
    setSelectedIndex(index);
    setIsGalleryOpen(true);
  };

  if (error) return null;

  return (
    <section className="w-full py-10 bg-gray-50 relative">
      <div className="bg-primary/5 absolute inset-0 w-1/2 mr-auto"></div>
      <Container>
        <SectionTitle
          link="/newspaper"
          title="روزنامه‌ها"
          icon={<NewspaperIcon className="size-6 text-primary" />}
        />

        {isLoading ? (
          <NewspapersSwiperSkeleton />
        ) : (
          <SwiperWrapper papers={papers || []} onSlideClick={openGallery} />
        )}
      </Container>

      {papers && (
        <NewspaperGallery
          galleryItems={papers}
          isGalleryOpen={isGalleryOpen}
          selectedIndex={selectedIndex}
          setIsGalleryOpen={setIsGalleryOpen}
        />
      )}
    </section>
  );
}
