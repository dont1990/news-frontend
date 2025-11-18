"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollPercent(percent);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <button
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white shadow-xl hover:bg-primary/90 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />

            {/* SVG double-ring */}
            <svg
              className="absolute -inset-1 w-18 h-18"
              viewBox="0 0 64 64"
            >
              {/* Static outer ring */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="4"
                fill="transparent"
              />

              {/* Dynamic progress ring */}
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="white"
                strokeWidth="4"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
              />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
