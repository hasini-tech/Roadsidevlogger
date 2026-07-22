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
      className="relative isolate mx-3 mt-3 min-h-[calc(100svh-1rem)] overflow-hidden rounded-[32px] border border-white/10 bg-asphalt-950 text-cream-50 shadow-luxury-lg sm:mx-4 sm:mt-4 lg:mx-6"
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

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.78) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,10,14,0.16), rgba(8,10,14,0.36) 35%, rgba(8,10,14,0.72) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-screen"
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
          className="absolute inset-0 border border-white/70"
          style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.55) inset" }}
        />
        <div
          className="absolute inset-x-0 top-1/3 h-px bg-white/70"
          style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.55)" }}
        />
        <div
          className="absolute inset-x-0 top-2/3 h-px bg-white/70"
          style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.55)" }}
        />
        <div
          className="absolute inset-y-0 left-1/3 w-px bg-white/70"
          style={{ boxShadow: "1px 0 0 rgba(0,0,0,0.55)" }}
        />
        <div
          className="absolute inset-y-0 right-1/3 w-px bg-white/70"
          style={{ boxShadow: "1px 0 0 rgba(0,0,0,0.55)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded border-2 border-white/80"
          style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.35)" }}
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.55) 100%)",
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
            className="flex items-center gap-3 rounded-full border border-white/25 bg-black/25 px-3 py-2 backdrop-blur-md"
          >
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.85)]" />
              <span className="text-[11px] font-semibold tracking-[0.35em] text-white/90">
                REC
              </span>
            </span>
            <span className="font-mono text-[11px] text-white/80 sm:text-xs">
              00:00:07:03
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="hidden items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-2 backdrop-blur-md md:flex"
          >
            {modeBadges.map((badge) => (
              <span
                key={badge}
                className="rounded border border-white/20 bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.3em] text-white/85"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="flex items-center gap-3 rounded-full border border-white/25 bg-black/25 px-3 py-2 backdrop-blur-md"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.28em] text-white/85">
              <Volume2 size={14} />
              <span>72.5dB</span>
            </div>

            <div className="hidden items-end gap-0.5 sm:flex">
              {levelBars.map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="w-0.5 rounded-full bg-white/80"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>

            <div className="flex items-center gap-1">
              <div className="h-4 w-8 rounded-[4px] border border-white/75 p-0.5">
                <div className="h-full w-full rounded-[2px] bg-white/80" />
              </div>
              <div className="h-2.5 w-1 rounded-r-sm bg-white/75" />
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
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/90 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Divith Digital Marketing &middot; Creative Ideas &middot; Measurable Results
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-6 text-balance font-heading text-5xl font-black uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-7xl lg:text-[7rem]"
              style={{ textShadow: "0 12px 40px rgba(0, 0, 0, 0.6)" }}
            >
              <span className="block">WE CREATE IMPACT</span>
              <span className="block text-ember-400">NOT JUST</span>
              <span className="block">IMPRESSIONS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mx-auto mt-6 max-w-2xl text-pretty text-sm leading-7 text-white/80 sm:text-base md:text-lg"
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
                className="border-white/25 bg-black/20 text-white backdrop-blur-md hover:bg-black/35"
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
                className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/15 px-6 py-4 text-sm font-semibold text-white/95 backdrop-blur-md transition hover:bg-black/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
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
            className="max-w-xs rounded-2xl border border-white/20 bg-black/20 p-4 text-white/85 backdrop-blur-md"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
              STRATEGY
            </div>
            <div className="mt-1 text-sm font-semibold">DATA-DRIVEN</div>
            <p className="mt-2 text-xs leading-relaxed text-white/65">
              Campaigns built on insight, tested and optimized to convert.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78 }}
            className="hidden flex-col items-center gap-2 text-white/70 sm:flex"
          >
            <div className="font-mono text-[11px] tracking-[0.35em]">
              3..2..1..0..1..2..3
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 7 }).map((_, index) => (
                <span
                  key={`tick-${index}`}
                  className="h-1.5 w-1.5 rounded-full bg-white/60"
                />
              ))}
            </div>
            <div className="h-8 w-px bg-white/75" />
          </motion.div>

          <div className="grid gap-3 sm:justify-self-end">
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.74 }}
              className="rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-right text-white/85 backdrop-blur-md"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                REACH
              </div>
              <div className="mt-1 text-sm font-semibold">GLOBAL</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.82 }}
              className="rounded-2xl border border-white/20 bg-black/20 px-4 py-3 text-right text-white/85 backdrop-blur-md"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
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
