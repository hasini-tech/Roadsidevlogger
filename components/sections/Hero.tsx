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
const VIDEO_SRC_DESKTOP = "/video/desktop_roadside.mp4";
const VIDEO_SRC_MOBILE = "/video/mobile_roadside.mp4";

// Matches Tailwind's `sm` breakpoint (640px) used elsewhere in this component.
const MOBILE_BREAKPOINT_QUERY = "(max-width: 639px)";

export default function ScrollSequence() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const targetTimeRef = useRef<number>(0);
  const lastDrawnTimeRef = useRef<number>(-1);
  const rafRef = useRef<number | null>(null);
  const durationRef = useRef<number>(0);
  // Video seeks are async — only one can be "in flight" at a time. These two
  // refs turn scroll updates into a queue instead of firing overlapping
  // seeks, which is what was causing the frame to freeze.
  const isSeekingRef = useRef<boolean>(false);
  const pendingSeekRef = useRef<number | null>(null);

  const [isReady, setIsReady] = useState(false);

  // Computed lazily (not in an effect) so the very first render already
  // requests the right file instead of briefly requesting desktop and
  // swapping — avoids a wasted download / flash on mobile.
  const [videoSrc, setVideoSrc] = useState<string>(() => {
    if (typeof window === "undefined") return VIDEO_SRC_DESKTOP;
    return window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches
      ? VIDEO_SRC_MOBILE
      : VIDEO_SRC_DESKTOP;
  });

  // Keep the source in sync if the viewport crosses the breakpoint
  // (e.g. rotating a tablet, resizing a browser window).
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT_QUERY);

    function handleChange(e: MediaQueryListEvent | MediaQueryList) {
      setVideoSrc(e.matches ? VIDEO_SRC_MOBILE : VIDEO_SRC_DESKTOP);
    }

    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

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

  // Only ever issues one seek at a time. If a new target comes in while a
  // seek is still resolving, it replaces the pending target rather than
  // stacking another seek on top — this is what keeps scrubbing responsive
  // instead of freezing on the first frame it started seeking to.
  function seekTo(time: number) {
    const video = videoRef.current;
    if (!video) return;

    if (isSeekingRef.current) {
      pendingSeekRef.current = time;
      return;
    }

    if (Math.abs(video.currentTime - time) < 0.01) return;

    isSeekingRef.current = true;
    video.currentTime = time;
  }

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const progress = Math.min(Math.max(latest, 0), 1);
    if (durationRef.current > 0) {
      targetTimeRef.current = progress * durationRef.current;
    }
  });

  // Re-runs whenever `videoSrc` changes (desktop <-> mobile swap), so the
  // new source gets its own metadata load, seek-unlock, and render loop.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset state for the incoming source.
    setIsReady(false);
    durationRef.current = 0;
    lastDrawnTimeRef.current = -1;
    isSeekingRef.current = false;
    pendingSeekRef.current = null;

    function onLoadedMetadata() {
      if (!video) return;
      durationRef.current = video.duration;

      // iOS/Safari (and some Android browsers) won't actually decode any
      // frame data until the video has been played at least once, even
      // muted — so a currentTime write before this "unlock" just silently
      // does nothing and the canvas stays frozen on a blank/poster frame.
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(() => {
            video.pause();
            video.currentTime = 0;
          })
          .catch(() => {
            // Autoplay blocked — harmless here since we never intended
            // continuous playback, only to unlock decoding for seeks.
            video.currentTime = 0;
          });
      } else {
        video.currentTime = 0;
      }
    }

    function onSeeking() {
      isSeekingRef.current = true;
    }

    function onSeeked() {
      isSeekingRef.current = false;
      setIsReady(true);
      drawFrame();

      // If the scroll position moved on while this seek was resolving,
      // immediately chase the newest target instead of waiting for the
      // next render-loop tick.
      if (pendingSeekRef.current !== null) {
        const next = pendingSeekRef.current;
        pendingSeekRef.current = null;
        seekTo(next);
      }
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeking", onSeeking);
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

    // Scrub loop: only ASKS for a seek toward the scroll-derived target —
    // seekTo() itself decides whether that's safe to issue right now.
    function renderLoop() {
      const v = videoRef.current;
      if (v && v.readyState >= 2) {
        seekTo(targetTimeRef.current);
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
      video.removeEventListener("seeking", onSeeking);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSrc]);

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
          src={videoSrc}
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

        {/* Brand mark — scaled down on mobile */}
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-cream-50/90 mix-blend-difference sm:left-8 sm:top-8 sm:gap-2 sm:text-[11px] sm:tracking-[0.35em]">
          <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
          Divith Digital Marketing
        </div>

        {/* Scroll progress rail — hidden on small screens so it doesn't crowd the stacked text boxes */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-[3px] bg-white/10 sm:block">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-ember-400"
          />
        </div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-[9px] font-semibold uppercase tracking-[0.3em] text-cream-50/50 sm:bottom-7 sm:text-[10px] sm:tracking-[0.35em]"
        >
          Scroll to explore
        </motion.div>

        {/* Copy box 01 — full-width centered stack on mobile, left-anchored from sm: up */}
        <motion.div
          style={{ opacity: box1Opacity, y: box1Y }}
          className="pointer-events-none absolute inset-x-4 top-[18%] z-10 mx-auto max-w-sm rounded-2xl border border-white/20 bg-black/25 p-5 text-center text-cream-50 backdrop-blur-md sm:inset-x-auto sm:left-[6%] sm:top-[22%] sm:mx-0 sm:p-6 sm:text-left"
        >
          <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-ember-400 sm:mb-3 sm:text-[11px] sm:tracking-[0.35em]">
            01 — Strategy
          </span>
          <h3 className="mb-2 font-heading text-xl font-extrabold uppercase leading-[1.05] tracking-tight sm:mb-3 sm:text-2xl">
            Strategy First
          </h3>
          <p className="text-xs leading-relaxed text-cream-100/75 sm:text-sm">
            Every campaign starts with data, not guesswork. We map the
            audience, the channel, and the moment before a single asset
            gets made.
          </p>
        </motion.div>

        {/* Copy box 02 — full-width centered stack on mobile, right-anchored from sm: up */}
        <motion.div
          style={{ opacity: box2Opacity, y: box2Y }}
          className="pointer-events-none absolute inset-x-4 top-[40%] z-10 mx-auto max-w-sm rounded-2xl border border-white/20 bg-black/25 p-5 text-center text-cream-50 backdrop-blur-md sm:inset-x-auto sm:right-[6%] sm:top-[42%] sm:mx-0 sm:p-6 sm:text-right"
        >
          <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-ember-400 sm:mb-3 sm:text-[11px] sm:tracking-[0.35em]">
            02 — Creative
          </span>
          <h3 className="mb-2 font-heading text-xl font-extrabold uppercase leading-[1.05] tracking-tight sm:mb-3 sm:text-2xl">
            Creative That Converts
          </h3>
          <p className="text-xs leading-relaxed text-cream-100/75 sm:text-sm">
            Design and storytelling built to move people, not just
            impressions. Every frame earns its place in the funnel.
          </p>
        </motion.div>

        {/* Copy box 03 — inset-x + mx-auto centering (not left-1/2/-translate-x-1/2, which
            Framer Motion's own y-transform inline style would otherwise override) */}
        <motion.div
          style={{ opacity: box3Opacity, y: box3Y }}
          className="pointer-events-none absolute inset-x-4 bottom-[10%] z-10 mx-auto max-w-sm rounded-2xl border border-white/20 bg-black/25 p-5 text-center text-cream-50 backdrop-blur-md sm:bottom-[12%] sm:p-6"
        >
          <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-ember-400 sm:mb-3 sm:text-[11px] sm:tracking-[0.35em]">
            03 — Results
          </span>
          <h3 className="mb-2 font-heading text-xl font-extrabold uppercase leading-[1.05] tracking-tight sm:mb-3 sm:text-2xl">
            Measurable Impact
          </h3>
          <p className="text-xs leading-relaxed text-cream-100/75 sm:text-sm">
            We track what matters and prove the ROI, every time. No vanity
            metrics — just numbers you can take to the board.
          </p>
        </motion.div>
      </div>
    </section>
  );
}