"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, Handshake, Lightbulb, Target } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

const highlights = [
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    text: "Innovative ideas that make your brand stand out with memorable content, visuals, and storytelling.",
  },
  {
    icon: Target,
    title: "Strategic Growth",
    text: "Customized strategies designed for long-term success, stronger visibility, and meaningful audience connection.",
  },
  {
    icon: BarChart3,
    title: "Result-Oriented Marketing",
    text: "Data-driven campaigns focused on real business outcomes, lead quality, sales, and return on investment.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    text: "Lasting relationships built through transparent communication, quality work, and committed support.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-cream-50 py-24 dark:bg-asphalt-900 sm:py-32">
      <div className="container-luxe grid gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl shadow-luxury-lg">
            <Image
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
              alt="Marketing team collaborating on a digital growth plan"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden rounded-2xl bg-ember-gradient p-6 shadow-luxury sm:block">
            <p className="font-heading text-3xl font-extrabold text-asphalt-950">360</p>
            <p className="text-sm font-medium text-asphalt-950/80">Growth mindset</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About DDM"
            title="More Than a Marketing Agency"
            align="left"
          />
          <p className="text-lg leading-relaxed text-steel-500 dark:text-steel-300">
            At Divith Digital Marketing, we combine creativity, strategy, and
            performance-driven marketing to help businesses stand out in the
            digital world.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-steel-500 dark:text-steel-300">
            From building powerful brand identities to generating quality leads
            and increasing online visibility, we create customized marketing
            solutions designed to deliver real business growth.
          </p>

          <div className="mt-10 space-y-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ember-500/10 text-ember-500">
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-asphalt-950 dark:text-cream-50">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-steel-500 dark:text-steel-300">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-luxe mt-24 grid grid-cols-2 gap-8 rounded-3xl bg-white/60 p-10 shadow-luxury dark:bg-asphalt-800/60 sm:grid-cols-4">
        {stats.map((stat) => (
          <AnimatedCounter
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
