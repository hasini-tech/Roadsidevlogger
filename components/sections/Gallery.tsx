"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/ui/Lightbox";
import { galleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";
import { GalleryImage } from "@/types";

const categories: Array<GalleryImage["category"] | "All"> = [
  "All",
  "Restaurant",
  "Retail",
  "Jewelry",
  "Real Estate",
  "Manufacturing",
  "Cinema",
];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  return (
    <section id="gallery" className="bg-cream-100 py-24 dark:bg-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Success Stories"
          title="Every Brand Has a Story. We Bring It to Life."
          description="From restaurants and retail to jewelry, real estate, manufacturing, and multiplex cinemas, every project reflects creativity, strategy, and measurable impact."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                filter === cat
                  ? "border-ember-500 bg-ember-500 text-cream-50"
                  : "border-steel-500/20 text-steel-500 hover:border-ember-500/50 dark:text-steel-300"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Mobile: horizontal snap carousel | sm+: masonry columns */}
        <div
          className="
            -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2
            [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
            sm:mx-0 sm:columns-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0
            sm:[&>*]:mb-5 lg:columns-3
          "
        >
          {filtered.map((image, i) => (
            <motion.button
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              onClick={() => setActiveIndex(i)}
              className="
                group relative block w-[78%] flex-shrink-0 snap-center overflow-hidden
                rounded-2xl shadow-luxury
                sm:w-full sm:flex-shrink sm:snap-none
              "
              style={{ breakInside: "avoid" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 sm:hidden"
                />
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="hidden w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:block"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-asphalt-950/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 text-sm font-semibold text-cream-50">
                  <Expand size={16} /> {image.location}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Mobile-only scroll hint dots */}
        <div className="mt-4 flex justify-center gap-1.5 sm:hidden">
          {filtered.map((image) => (
            <span key={image.id} className="h-1.5 w-1.5 rounded-full bg-steel-500/30 dark:bg-cream-100/30" />
          ))}
        </div>
      </div>

      <Lightbox
        images={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(i) => setActiveIndex(i)}
      />
    </section>
  );
}
