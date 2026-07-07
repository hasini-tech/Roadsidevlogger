"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Play } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-asphalt-950"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Digital marketing team planning a brand campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-horizon-gradient" />
        <div className="absolute inset-0 bg-asphalt-950/30" />
      </div>

      <div className="container-luxe relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream-100/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cream-100/80"
        >
          Divith Digital Marketing &middot; Creative Ideas &middot; Measurable Results
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-balance font-heading text-5xl font-extrabold leading-[1.05] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
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
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-cream-100/80 sm:text-xl"
        >
          We don&apos;t just market brands. We build digital success stories
          through creativity, strategy, and performance-driven marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            icon={<Play size={18} />}
            onClick={() =>
              document
                .querySelector("#videos")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Services
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Why Choose Us
          </Button>
        </motion.div>
      </div>

      <motion.button
        aria-label="Scroll to About section"
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream-100/70"
      >
        <ChevronDown size={30} />
      </motion.button>
    </section>
  );
}
