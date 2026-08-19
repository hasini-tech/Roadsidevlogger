"use client";

import { type TouchEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Local road videos (served from /public/video)
const roadVideos: string[] = [
  "/video/road-video1.mp4",
  "/video/road-video2.mp4",
  "/video/road-video3.mp4",
  "/video/road-video4.mp4",
];

export default function Gallery() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveVideo((current) => (current + 1) % roadVideos.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const goToVideo = (index: number) => {
    setActiveVideo((index + roadVideos.length) % roadVideos.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0]?.clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    goToVideo(activeVideo + (distance < 0 ? 1 : -1));
  };

  return (
    <section
      id="gallery"
      className="bg-cream-100 py-24 dark:bg-asphalt-950 sm:py-32"
    >
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Success Stories"
          title="Every Brand Has a Story. We Bring It to Life."
          description="From restaurants and retail to jewelry, real estate, manufacturing, and multiplex cinemas, every project reflects creativity, strategy, and measurable impact."
        />

        {/* Road videos showcase */}
        <div className="mt-16">
          {/* Mobile/tablet carousel */}
          <div
            className="md:hidden"
            role="region"
            aria-roledescription="carousel"
            aria-label="Road video gallery"
            style={{ touchAction: "pan-y" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={roadVideos[activeVideo]}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden rounded-2xl shadow-luxury"
              >
                <div className="relative">
                  <video
                    key={roadVideos[activeVideo]}
                    src={roadVideos[activeVideo]}
                    className="aspect-[9/16] max-h-[72svh] w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-xs font-semibold text-white">
                    <span>Road Story {String(activeVideo + 1).padStart(2, "0")}</span>
                    <span>
                      {String(activeVideo + 1).padStart(2, "0")} / {String(roadVideos.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex items-center justify-between">
              <button
                type="button"
                aria-label="Previous road video"
                onClick={() => goToVideo(activeVideo - 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-asphalt-950/15 text-asphalt-950 transition hover:border-ember-500 hover:text-ember-500 dark:border-cream-50/20 dark:text-cream-50"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-1.5" aria-label="Choose road video">
                {roadVideos.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Go to road video ${index + 1}`}
                    aria-current={index === activeVideo}
                    onClick={() => goToVideo(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeVideo
                        ? "w-6 bg-ember-500"
                        : "w-1.5 bg-asphalt-950/20 dark:bg-cream-50/30"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                aria-label="Next road video"
                onClick={() => goToVideo(activeVideo + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-asphalt-950/15 text-asphalt-950 transition hover:border-ember-500 hover:text-ember-500 dark:border-cream-50/20 dark:text-cream-50"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Desktop grid */}
          <div className="hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
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
