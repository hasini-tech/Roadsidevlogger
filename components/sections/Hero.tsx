"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

// ---------------------------------------------------------------------------
// CONFIG
// ---------------------------------------------------------------------------
const VIDEO_SRC = "/video/video.mp4"; // served from /public/video

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const targetTimeRef = useRef<number>(0);
  const lastDrawnTimeRef = useRef<number>(-1);
  const rafRef = useRef<number | null>(null);
  const durationRef = useRef<number>(0);

  const [isReady, setIsReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);

  const box1Opacity = useTransform(
    scrollYProgress,
    [0.06, 0.14, 0.26, 0.32],
    [0, 1, 1, 0]
  );
  const box1Y = useTransform(scrollYProgress, [0.06, 0.14], [24, 0]);

  const box2Opacity = useTransform(
    scrollYProgress,
    [0.4, 0.48, 0.58, 0.64],
    [0, 1, 1, 0]
  );
  const box2Y = useTransform(scrollYProgress, [0.4, 0.48], [24, 0]);

  const box3Opacity = useTransform(
    scrollYProgress,
    [0.72, 0.8, 0.9, 0.96],
    [0, 1, 1, 0]
  );
  const box3Y = useTransform(scrollYProgress, [0.72, 0.8], [24, 0]);

  // -------------------------------------------------------------------------
  // Draw current video frame to canvas — same manual "cover" fit as before.
  // -------------------------------------------------------------------------
  function drawFrame() {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video || video.readyState < 2) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const vw = canvas.clientWidth;
    const vh = canvas.clientHeight;
    const canvasRatio = vw / vh;
    const imgRatio = video.videoWidth / video.videoHeight;

    let drawW: number, drawH: number, offsetX: number, offsetY: number;

    if (imgRatio > canvasRatio) {
      drawH = vh;
      drawW = vh * imgRatio;
      offsetX = (vw - drawW) / 2;
      offsetY = 0;
    } else {
      drawW = vw;
      drawH = vw / imgRatio;
      offsetX = 0;
      offsetY = (vh - drawH) / 2;
    }

    ctx.clearRect(0, 0, vw, vh);
    ctx.drawImage(video, offsetX, offsetY, drawW, drawH);
  }

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const progress = Math.min(Math.max(latest, 0), 1);
    if (durationRef.current > 0) {
      targetTimeRef.current = progress * durationRef.current;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onLoadedMetadata() {
      if (!video) return;
      durationRef.current = video.duration;
      video.currentTime = 0;
    }

    function onSeeked() {
      setIsReady(true);
      drawFrame();
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);
    video.load();

    function resizeCanvas() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawFrame();
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Scrub loop: nudge video.currentTime toward the scroll-derived target
    // and redraw only when it actually changes, so we don't hammer seeks.
    function renderLoop() {
      const v = videoRef.current;
      if (v && v.readyState >= 2) {
        const target = targetTimeRef.current;
        if (Math.abs(v.currentTime - target) > 0.033) {
          v.currentTime = target;
        }
        if (Math.abs(lastDrawnTimeRef.current - v.currentTime) > 0.0001) {
          lastDrawnTimeRef.current = v.currentTime;
          drawFrame();
        }
      }
      rafRef.current = requestAnimationFrame(renderLoop);
    }
    rafRef.current = requestAnimationFrame(renderLoop);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      ref={sectionRef}
      id="videos"
      className="relative h-[800vh] bg-asphalt-950"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Hidden source video — never rendered directly, only drawn to canvas */}
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="hidden"
          muted
          playsInline
          preload="auto"
        />

        <canvas ref={canvasRef} className="block h-full w-full" />

        {!isReady && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember-400" />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember-400"
                style={{ animationDelay: "0.15s" }}
              />
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember-400"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute left-6 top-6 z-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-cream-50/90 mix-blend-difference sm:left-8 sm:top-8">
          <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
          Divith Digital Marketing
        </div>

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[3px] bg-white/10">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-ember-400"
          />
        </div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.35em] text-cream-50/50"
        >
          Scroll to explore
        </motion.div>

        <motion.div
          style={{ opacity: box1Opacity, y: box1Y }}
          className="pointer-events-none absolute left-[6%] top-[22%] z-10 max-w-sm rounded-2xl border border-white/20 bg-black/25 p-6 text-cream-50 backdrop-blur-md"
        >
          <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-ember-400">
            01 — Strategy
          </span>
          <h3 className="mb-3 font-heading text-2xl font-extrabold uppercase leading-[1.05] tracking-tight">
            Strategy First
          </h3>
          <p className="text-sm leading-relaxed text-cream-100/75">
            Every campaign starts with data, not guesswork. We map the
            audience, the channel, and the moment before a single asset
            gets made.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: box2Opacity, y: box2Y }}
          className="pointer-events-none absolute right-[6%] top-[42%] z-10 max-w-sm rounded-2xl border border-white/20 bg-black/25 p-6 text-right text-cream-50 backdrop-blur-md"
        >
          <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-ember-400">
            02 — Creative
          </span>
          <h3 className="mb-3 font-heading text-2xl font-extrabold uppercase leading-[1.05] tracking-tight">
            Creative That Converts
          </h3>
          <p className="text-sm leading-relaxed text-cream-100/75">
            Design and storytelling built to move people, not just
            impressions. Every frame earns its place in the funnel.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: box3Opacity, y: box3Y }}
          className="pointer-events-none absolute bottom-[12%] left-1/2 z-10 max-w-sm -translate-x-1/2 rounded-2xl border border-white/20 bg-black/25 p-6 text-center text-cream-50 backdrop-blur-md"
        >
          <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-ember-400">
            03 — Results
          </span>
          <h3 className="mb-3 font-heading text-2xl font-extrabold uppercase leading-[1.05] tracking-tight">
            Measurable Impact
          </h3>
          <p className="text-sm leading-relaxed text-cream-100/75">
            We track what matters and prove the ROI, every time. No vanity
            metrics — just numbers you can take to the board.
          </p>
        </motion.div>
      </div>
    </section>
  );
}