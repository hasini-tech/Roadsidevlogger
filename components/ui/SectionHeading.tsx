"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span
        className={cn(
          "mb-3 inline-block font-heading text-sm font-semibold uppercase tracking-[0.2em]",
          light ? "text-gold-300" : "text-ember-500"
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          "text-balance font-heading text-4xl font-bold leading-tight sm:text-5xl",
          light ? "text-cream-50" : "text-asphalt-950 dark:text-cream-50"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-cream-100/80" : "text-steel-500 dark:text-steel-300"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
