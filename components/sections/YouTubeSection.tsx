"use client";

import { motion } from "framer-motion";
import { BarChart3, Layers3, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { youtubeStats, featuredVideos } from "@/lib/data";

const statCards = [
  { icon: Layers3, label: "Solutions", value: youtubeStats.subscribers },
  { icon: BarChart3, label: "Strategy", value: `${youtubeStats.totalViews}°` },
  { icon: Sparkles, label: "Creative Focus", value: `${youtubeStats.videoCount}%` },
];

export default function YouTubeSection() {
  const recent = featuredVideos.slice(0, 3);

  return (
    <section className="bg-asphalt-950 py-24 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Why Brands Choose DDM"
          title="Complete Digital Solutions Under One Roof"
          light
        />

        <div className="mx-auto mb-14 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl bg-white/5 p-8">
          {statCards.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-2 text-ember-500" size={26} />
              <p className="font-heading text-2xl font-bold text-cream-50 sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-wide text-cream-100/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {recent.map((video, i) => (
            <motion.a
              key={video.id}
              href={`https://youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl"
            >
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 line-clamp-2 font-heading text-sm font-semibold text-cream-50">
                {video.title}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            icon={<Users size={20} />}
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start a Growth Conversation
          </Button>
        </div>
      </div>
    </section>
  );
}
