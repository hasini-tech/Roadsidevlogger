"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------
const HERO_BG_SRC = "/images/vlogger.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-asphalt-950 px-4 py-24 sm:px-8 lg:px-16"
    >
      {/* Full-bleed background image */}
      <Image
        src={HERO_BG_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover"
      />
      {/* Right-weighted gradient so text stays legible on the left */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-asphalt-950/20 via-asphalt-950/45 to-asphalt-950/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-asphalt-950/60 via-transparent to-asphalt-950/20" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div
          className={`mr-auto w-full max-w-xl text-left transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Eyebrow */}
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream-100/60 sm:text-xs sm:tracking-[0.35em]">
            Divith Digital Marketing{" "}
            <span className="text-ember-400">·</span> Creative Ideas{" "}
            <span className="text-ember-400">·</span> Measurable Results
          </p>

          {/* Headline */}
          <h1 className="font-heading text-[13vw] font-extrabold uppercase leading-[0.95] tracking-tight text-cream-50 sm:text-6xl lg:text-7xl">
            We Create
            <br />
            Impact
            <br />
            <span className="text-ember-400">Not Just</span>
            <br />
            <span className="text-ember-400">Impressions.</span>
          </h1>

          {/* Body copy */}
          <p className="mr-auto mt-6 max-w-md text-sm leading-relaxed text-cream-100/70 sm:text-base">
            We don&apos;t just market brands. We build digital success
            stories through creativity, strategy, and performance-driven
            marketing.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-start gap-6">
            <a
              href="#reel"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-cream-50"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/30 transition-colors group-hover:border-ember-400 group-hover:text-ember-400">
                <Play className="h-3.5 w-3.5 fill-current" />
              </span>
              Watch behind the scenes
            </a>

            <a
              href="#services"
              className="inline-flex items-center rounded-full bg-ember-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-asphalt-950 transition-all hover:scale-[1.03] hover:bg-ember-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
