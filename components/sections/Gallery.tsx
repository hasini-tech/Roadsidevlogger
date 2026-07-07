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

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filtered.map((image, i) => (
            <motion.button
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              onClick={() => setActiveIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl shadow-luxury"
              style={{ breakInside: "avoid" }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-asphalt-950/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-2 text-sm font-semibold text-cream-50">
                  <Expand size={16} /> {image.location}
                </span>
              </div>
            </motion.button>
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
