"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, MapPin, Clock, Eye, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredVideos } from "@/lib/data";
import { VideoItem } from "@/types";

export default function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section id="videos" className="bg-cream-100 py-24 dark:bg-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Featured Films"
          title="Stories Filmed From the Driver's Seat"
          description="A selection of the journeys that defined the channel — mountain passes, coastal drives, and the cities in between."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((video, i) => (
            <motion.button
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              onClick={() => setActiveVideo(video)}
              className="group relative overflow-hidden rounded-2xl text-left shadow-luxury transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-asphalt-950/20 transition group-hover:bg-asphalt-950/40" />
                <span className="absolute right-3 top-3 rounded-md bg-asphalt-950/80 px-2 py-1 text-xs font-semibold text-cream-50">
                  {video.duration}
                </span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ember-gradient text-asphalt-950 shadow-glow">
                    <Play size={22} fill="currentColor" />
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-semibold text-asphalt-950">
                  {video.category}
                </span>
              </div>

              <div className="bg-white p-5 dark:bg-asphalt-800">
                <h3 className="font-heading text-lg font-semibold leading-snug text-asphalt-950 dark:text-cream-50">
                  {video.title}
                </h3>
                <div className="mt-3 flex items-center justify-between text-sm text-steel-500 dark:text-steel-300">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} /> {video.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Eye size={14} /> {video.views}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-asphalt-950/95 p-4 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <button
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
              className="absolute right-6 top-6 rounded-full bg-cream-50/10 p-3 text-cream-50 hover:bg-cream-50/20"
            >
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl shadow-luxury-lg"
            >
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
