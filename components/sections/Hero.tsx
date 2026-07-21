"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="container-luxe relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-asphalt-950/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-asphalt-950/70"
          >
            Divith Digital Marketing &middot; Creative Ideas &middot; Measurable Results
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-balance font-heading text-5xl font-extrabold leading-[1.05] text-asphalt-950 sm:text-6xl lg:text-7xl"
          >
            We Create Impact
            <br />
            <span className="bg-ember-gradient bg-clip-text text-transparent">
              Not Just Impressions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-asphalt-950/70 sm:text-xl"
          >
            We don&apos;t just market brands. We build digital success stories
            through creativity, strategy, and performance-driven marketing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .querySelector("#about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Services
            </Button>

            <button
              onClick={() =>
                document
                  .querySelector("#videos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-sm font-semibold text-asphalt-950"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-asphalt-950/20 transition-colors group-hover:bg-asphalt-950 group-hover:text-white">
                <Play size={16} />
              </span>
              Watch behind the scenes
            </button>
          </motion.div>
        </div>

        {/* Right: photo mosaic collage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative grid h-[420px] grid-cols-2 grid-rows-3 gap-3 sm:h-[520px] sm:grid-cols-3 sm:grid-rows-3"
        >
          {/* Main image: full-width top strip on mobile, big feature tile on sm+ */}
          <div className="relative order-1 col-span-2 row-span-1 overflow-hidden rounded-2xl bg-asphalt-950/5 sm:order-none sm:col-span-2 sm:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
              alt="Creative director presenting a brand campaign"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
          </div>

          <div className="relative order-2 col-span-1 row-span-1 overflow-hidden rounded-2xl bg-asphalt-950/5 sm:order-none sm:col-span-1 sm:row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Marketing team collaborating in a meeting"
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover"
            />
          </div>

          <div className="relative order-3 col-span-1 row-span-1 overflow-hidden rounded-2xl bg-asphalt-950/5 sm:order-none sm:col-span-1 sm:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80"
              alt="Analytics dashboard on a laptop screen"
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover"
            />
          </div>

          <div className="relative order-4 col-span-1 row-span-1 overflow-hidden rounded-2xl bg-asphalt-950/5 sm:order-none sm:col-span-1 sm:row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
              alt="Team reviewing social media content"
              fill
              sizes="(max-width: 768px) 50vw, 200px"
              className="object-cover"
            />
          </div>

          <div className="relative order-5 col-span-1 row-span-1 overflow-hidden rounded-2xl bg-ember-gradient p-4 sm:order-none sm:col-span-1 sm:row-span-1">
            <div className="flex h-full flex-col justify-end">
              <p className="text-sm font-semibold leading-snug text-cream-50">
                Tips for crafting campaigns that convert.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}