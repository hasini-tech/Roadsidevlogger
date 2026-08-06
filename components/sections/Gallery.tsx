"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

// Local road videos (served from /public/video)
const roadVideos: string[] = [
  "/video/road-video1.mp4",
  "/video/road-video2.mp4",
  "/video/road-video3.mp4",
  "/video/road-video4.mp4",
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-100 py-24 dark:bg-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Success Stories"
          title="Every Brand Has a Story. We Bring It to Life."
          description="From restaurants and retail to jewelry, real estate, manufacturing, and multiplex cinemas, every project reflects creativity, strategy, and measurable impact."
        />

        {/* Road videos showcase */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roadVideos.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl shadow-luxury"
              >
                <video
                  src={src}
                  className="aspect-[9/16] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}