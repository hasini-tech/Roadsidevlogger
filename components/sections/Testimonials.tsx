"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 py-24 dark:from-asphalt-900 dark:to-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Partner Feedback"
          title="What Brands and Producers Say"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass relative rounded-2xl p-8 shadow-luxury"
            >
              <Quote className="mb-4 text-ember-500/40" size={32} />
              <p className="text-balance leading-relaxed text-asphalt-950/90 dark:text-cream-50/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-asphalt-950 dark:text-cream-50">
                    {t.name}
                  </p>
                  <p className="text-xs text-steel-500 dark:text-steel-300">
                    {t.role}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
