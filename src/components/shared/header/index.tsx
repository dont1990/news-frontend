"use client";

import { Suspense } from "react";
import { SearchPreview } from "@/components/shared/header/search-preview";
import Logo from "./logo";
import NotificationsButton from "./notification-button";
import Hamburger from "./hamburger";
import SearchToggle from "./search-toggle";
import { motion, Variants } from "framer-motion";
import Container from "@/components/shared/container";
import Navigation from "./navigation";
import { useHeader } from "./hook/useHeader";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Header() {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobileSearchOpen,
    setIsMobileSearchOpen,
    mobileSearchRef,
  } = useHeader();

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <Container className="flex flex-col gap-4 !p-4">
        {/* --- Top Row --- */}
        <motion.div
          className="flex items-center justify-between"
          variants={itemVariants}
        >
          <motion.div
            className="flex gap-4 items-center"
            variants={itemVariants}
          >
            <Hamburger
              isOpen={isMobileMenuOpen}
              toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
            <Logo />
          </motion.div>

          <motion.div
            className="flex items-center gap-x-4"
            variants={itemVariants}
          >
            {/* ✅ Desktop search */}
            <Suspense fallback={"loading"}>
              <SearchPreview className="hidden sm:block" />
            </Suspense>

            {/* ✅ Mobile search toggle */}
            <div className="block sm:hidden">
              <SearchToggle
                isOpen={isMobileSearchOpen}
                onToggle={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              />
            </div>

            {/* <NotificationsButton /> */}
          </motion.div>
        </motion.div>

        {/* ✅ Mobile search input */}
        {isMobileSearchOpen && (
          <motion.div
            ref={mobileSearchRef}
            className="block sm:hidden w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            variants={itemVariants}
          >
            <Suspense fallback={"loading"}>
              <SearchPreview className="w-full" />
            </Suspense>
          </motion.div>
        )}
      </Container>

      {/* Navigation */}
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </motion.header>
  );
}
