"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-24 dark:bg-asphalt-900 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Insights"
          title="Ideas for Smarter Digital Growth"
          description="Practical thinking on strategy, content, performance marketing, and brand storytelling."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`#blog-${post.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl shadow-luxury transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-xs font-semibold text-asphalt-950">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col bg-cream-50 p-6 dark:bg-asphalt-800">
                <p className="text-xs font-medium uppercase tracking-wide text-steel-400">
                  {post.readTime} &middot;{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-asphalt-950 dark:text-cream-50">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-steel-500 dark:text-steel-300">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 font-heading text-sm font-semibold text-ember-500">
                  Read the insight
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
