"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Play, Volume2 } from "lucide-react";
import Button from "@/components/ui/Button";

const heroImage =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1800&q=80&fm=jpg&crop=entropy&cs=tinysrgb";

const modeBadges = ["16:9", "4K", "50FPS"];
const levelBars = [18, 28, 40, 52, 44, 34, 24, 18, 12];

export default function Hero() {
  const sectionRef = useRef(null);

  // Tracks scroll progress across the height of the hero section itself.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Photo keeps a slow continuous push-in as you scroll (parallax).
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  // Viewfinder "lens" chrome shrinks + fades — the zoom-out feel.
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const frameOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [1, 0.35, 0]
  );

  // Headline block rises and fades slightly faster than the frame.
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative isolate mx-3 mt-3 min-h-[calc(100svh-1rem)] overflow-hidden rounded-[32px] border border-black/10 bg-cream-50 text-asphalt-950 shadow-luxury-lg dark:border-white/10 dark:bg-asphalt-950 dark:text-cream-50 sm:mx-4 sm:mt-4 lg:mx-6"
    >
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt="Creative director presenting a brand campaign"
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: "center 45%" }}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,rgba(255,248,240,0.56)_55%,rgba(255,255,255,0.88)_100%)] dark:hidden" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.78)_100%)] hidden dark:block" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/20 to-white/80 opacity-80 mix-blend-multiply dark:from-[#080A0E]/16 dark:via-[#080A0E]/36 dark:to-[#080A0E]/72 dark:mix-blend-screen"
      />
      <div
        className="absolute inset-0 opacity-12 mix-blend-multiply dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,13,16,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,13,16,0.12) 1px, transparent 1px)",
          backgroundSize: "33.333% 100%, 100% 33.333%",
        }}
      />
      <div
        className="absolute inset-0 hidden opacity-30 mix-blend-screen dark:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "33.333% 100%, 100% 33.333%",
        }}
      />

      <motion.div
        style={{ scale: frameScale, opacity: frameOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 border border-black/35 dark:border-white/70"
          style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.35) inset" }}
        />
        <div
          className="absolute inset-x-0 top-1/3 h-px bg-black/25 dark:bg-white/70"
          style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.25)" }}
        />
        <div
          className="absolute inset-x-0 top-2/3 h-px bg-black/25 dark:bg-white/70"
          style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.25)" }}
        />
        <div
          className="absolute inset-y-0 left-1/3 w-px bg-black/25 dark:bg-white/70"
          style={{ boxShadow: "1px 0 0 rgba(255,255,255,0.25)" }}
        />
        <div
          className="absolute inset-y-0 right-1/3 w-px bg-black/25 dark:bg-white/70"
          style={{ boxShadow: "1px 0 0 rgba(255,255,255,0.25)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded border-2 border-black/45 dark:border-white/80"
          style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 0 12px rgba(0,0,0,0.2)" }}
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.45) 100%)",
        }}
      />

      <div className="relative z-20 flex min-h-[100svh] flex-col pt-24 sm:pt-28">
        <motion.div
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="container-luxe flex items-start justify-between gap-4 pt-4 sm:pt-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-asphalt-950 backdrop-blur-md dark:border-white/25 dark:bg-black/25 dark:text-cream-50"
          >
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.85)]" />
              <span className="text-[11px] font-semibold tracking-[0.35em] text-asphalt-950/90 dark:text-cream-50/90">
                REC
              </span>
            </span>
            <span className="font-mono text-[11px] text-asphalt-700 sm:text-xs dark:text-cream-100/80">
              00:00:07:03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="hidden items-center gap-2 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-asphalt-950 backdrop-blur-md dark:border-white/25 dark:bg-black/25 dark:text-cream-50 md:flex"
          >
            {modeBadges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-black/10 bg-white/70 px-2.5 py-1 text-[11px] font-semibold tracking-[0.3em] text-asphalt-950 dark:border-white/20 dark:bg-white/10 dark:text-cream-50/85"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex items-center gap-3 rounded-full border border-black/10 bg-white/75 px-3 py-2 text-asphalt-950 backdrop-blur-md dark:border-white/25 dark:bg-black/25 dark:text-cream-50"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.28em] text-asphalt-950/85 dark:text-cream-50/85">
              <Volume2 size={14} />
              <span>72.5dB</span>
            </div>

            <div className="hidden items-end gap-0.5 sm:flex">
              {levelBars.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-0.5 rounded-full bg-asphalt-950/60 dark:bg-cream-50/80"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <div className="h-4 w-8 rounded-[4px] border border-asphalt-950/40 p-0.5 dark:border-white/75">
                <div className="h-full w-full rounded-[2px] bg-asphalt-950/70 dark:bg-white/80" />
              </div>
              <div className="h-2.5 w-1 rounded-r-sm bg-asphalt-950/60 dark:bg-white/75" />
            </div>
          </motion.div>
        </motion.div>

        <div className="container-luxe flex flex-1 flex-col justify-center pb-10 pt-10 sm:pb-14">
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="mx-auto max-w-5xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-asphalt-950 backdrop-blur-md dark:border-white/25 dark:bg-black/25 dark:text-cream-50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Divith Digital Marketing &middot; Creative Ideas &middot; Measurable Results
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-6 text-balance font-heading text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-asphalt-950 drop-shadow-[0_12px_40px_rgba(255,255,255,0.35)] dark:text-white dark:drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)] sm:text-7xl lg:text-[7rem]"
            >
              <span className="block">WE CREATE IMPACT</span>
              <span className="block text-ember-400">NOT JUST</span>
              <span className="block">IMPRESSIONS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-asphalt-700 sm:text-base md:text-lg dark:text-cream-50/80"
            >
              We don&apos;t just market brands. We build digital success
              stories through creativity, strategy, and performance-driven
              marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-black/10 bg-white/85 text-asphalt-950 backdrop-blur-md hover:bg-white dark:border-white/25 dark:bg-black/20 dark:text-white dark:hover:bg-black/35"
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
                className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-4 text-sm font-semibold text-asphalt-950 backdrop-blur-md transition hover:bg-white dark:border-white/20 dark:bg-black/15 dark:text-cream-50 dark:hover:bg-black/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 dark:border-white/20 dark:bg-white/10">
                  <Play size={16} />
                </span>
                Watch Behind the Scenes
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ scale: frameScale, opacity: frameOpacity }}
          className="container-luxe grid gap-4 pb-6 sm:grid-cols-[1fr_auto_1fr] sm:items-end sm:pb-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="max-w-xs rounded-2xl border border-black/10 bg-white/70 p-4 text-asphalt-950 backdrop-blur-md dark:border-white/20 dark:bg-black/20 dark:text-cream-50/85"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-asphalt-700 dark:text-cream-50/60">
              STRATEGY
            </div>
            <div className="mt-1 text-sm font-semibold">DATA-DRIVEN</div>
            <p className="mt-2 text-xs leading-relaxed text-asphalt-700 dark:text-cream-100/65">
              Campaigns built on insight, tested and optimized to convert.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78 }}
            className="hidden flex-col items-center gap-2 text-asphalt-700 sm:flex dark:text-cream-100/70"
          >
            <div className="font-mono text-[11px] tracking-[0.35em]">
              3..2..1..0..1..2..3
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 7 }).map((_, index) => (
                <span
                  key={`tick-${index}`}
                  className="h-1.5 w-1.5 rounded-full bg-asphalt-950/30 dark:bg-cream-50/60"
                />
              ))}
            </div>
            <div className="h-8 w-px bg-asphalt-950/30 dark:bg-cream-50/75" />
          </motion.div>

          <div className="grid gap-3 sm:justify-self-end">
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.74 }}
              className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-right text-asphalt-950 backdrop-blur-md dark:border-white/20 dark:bg-black/20 dark:text-cream-50/85"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-asphalt-700 dark:text-cream-50/60">
                REACH
              </div>
              <div className="mt-1 text-sm font-semibold">GLOBAL</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.82 }}
              className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-right text-asphalt-950 backdrop-blur-md dark:border-white/20 dark:bg-black/20 dark:text-cream-50/85"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-asphalt-700 dark:text-cream-50/60">
                ROI
              </div>
              <div className="mt-1 text-sm font-semibold">MEASURED</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
