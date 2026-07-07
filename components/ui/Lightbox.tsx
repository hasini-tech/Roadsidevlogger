"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/types";
import { useEffect, useCallback } from "react";

interface LightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = activeIndex !== null;
  const image = isOpen ? images[activeIndex] : null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || activeIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onNavigate((activeIndex + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate((activeIndex - 1 + images.length) % images.length);
    },
    [isOpen, activeIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-asphalt-950/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            aria-label="Close lightbox"
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-cream-50/10 p-3 text-cream-50 transition hover:bg-cream-50/20"
          >
            <X size={22} />
          </button>

          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex! - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-cream-50/10 p-3 text-cream-50 transition hover:bg-cream-50/20 sm:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          <motion.div
            key={image.id}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-full w-full object-contain"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-asphalt-950/90 to-transparent p-6">
              <p className="font-heading text-lg font-semibold text-cream-50">
                {image.location}
              </p>
              <p className="text-sm text-cream-100/70">{image.category}</p>
            </div>
          </motion.div>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex! + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-cream-50/10 p-3 text-cream-50 transition hover:bg-cream-50/20 sm:right-8"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
