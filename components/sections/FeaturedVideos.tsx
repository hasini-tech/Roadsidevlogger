"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredVideos } from "@/lib/data";

export default function FeaturedVideos() {
  return (
    <section id="videos" className="bg-cream-100 py-24 dark:bg-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Create"
          title="Powering Brands With Creativity, Strategy and Innovation"
          description="Your business deserves more than marketing. It deserves a digital presence that inspires, connects, and converts."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredVideos.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-luxury transition-transform duration-300 hover:-translate-y-1 dark:bg-asphalt-800"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={service.thumbnail}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-asphalt-950/20 transition group-hover:bg-asphalt-950/35" />
                <span className="absolute left-3 top-3 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-semibold text-asphalt-950">
                  {service.category}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-xl font-semibold leading-snug text-asphalt-950 dark:text-cream-50">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="mt-1 shrink-0 text-ember-500" size={20} />
                </div>
                <p className="mt-3 text-steel-500 dark:text-steel-300">
                  {service.location}
                </p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-ember-500">
                  {service.views}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
