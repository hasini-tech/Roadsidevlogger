"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import { timelineStops } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="timeline" className="relative bg-white py-24 dark:bg-asphalt-900 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="The Journey So Far"
          title="Mile Markers of the Road"
          description="Each stop is a real waypoint — the mileage is cumulative, tracked from the day the first tank of gas was bought."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-6 top-0 h-full w-px bg-steel-500/20 sm:left-1/2 sm:-translate-x-1/2" />

          {timelineStops.map((stop, i) => (
            <motion.div
              key={stop.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={cn(
                "relative mb-14 flex flex-col gap-6 pl-16 sm:flex-row sm:pl-0",
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              )}
            >
              <div className="absolute left-6 top-1 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-ember-gradient font-heading text-xs font-bold text-asphalt-950 shadow-glow sm:left-1/2">
                {stop.year}
              </div>

              <div
                className={cn(
                  "w-full sm:w-1/2",
                  i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                )}
              >
                <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl shadow-luxury">
                  <Image
                    src={stop.image}
                    alt={stop.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 480px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-asphalt-950 dark:text-cream-50">
                  {stop.title}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-ember-500">
                  {stop.location}
                </p>
                <p className="mt-3 text-steel-500 dark:text-steel-300">
                  {stop.description}
                </p>
                <p className="mt-2 text-xs font-medium text-steel-400">
                  {stop.distanceKm.toLocaleString()} km cumulative
                </p>
              </div>

              <div className="hidden w-1/2 sm:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
