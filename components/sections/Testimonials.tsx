"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = testimonials.length;
  const active = testimonials[index];

  const goTo = (nextIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((nextIndex + total) % total);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50 py-24 dark:from-asphalt-900 dark:to-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Growth Partners Say"
        />

        <div className="mx-auto max-w-2xl text-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <Quote className="mb-6 text-ember-500/40" size={40} />

              <p className="text-balance text-lg font-medium leading-relaxed text-asphalt-950/90 dark:text-cream-50/90 sm:text-xl">
                &ldquo;{active.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center gap-1">
                {Array.from({ length: active.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>

              <div className="mt-6 flex flex-col items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={active.avatar}
                    alt={active.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-asphalt-950 dark:text-cream-50">
                    {active.name}
                  </p>
                  <p className="text-sm text-steel-500 dark:text-steel-300">
                    {active.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={() => goTo(index - 1, -1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-500/20 text-asphalt-950 transition hover:bg-ember-500 hover:text-cream-50 dark:text-cream-50"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => goTo(index + 1, 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-500/20 text-asphalt-950 transition hover:bg-ember-500 hover:text-cream-50 dark:text-cream-50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}