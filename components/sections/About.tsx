"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fuel, MapPin, Video } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

const highlights = [
  {
    icon: MapPin,
    title: "42 Countries, Zero Fixed Route",
    text: "From the Sahara to the Siberian steppe — the plan has always been to have no plan, only a full tank and a camera.",
  },
  {
    icon: Video,
    title: "Solo Cinematography",
    text: "Every frame filmed alone from the driver's seat: gimbal, drone, and a three-shot rule that turns empty roads into stories.",
  },
  {
    icon: Fuel,
    title: "312 Films, One Truck",
    text: "The same 1994 Land Cruiser has carried the whole archive — engine rebuilds included — across six continents.",
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
              src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=800&q=80"
              alt="Portrait of the roadside vlogger beside an overland truck at sunset"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden rounded-2xl bg-ember-gradient p-6 shadow-luxury sm:block">
            <p className="font-heading text-3xl font-extrabold text-asphalt-950">7yrs</p>
            <p className="text-sm font-medium text-asphalt-950/80">On the road</p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="Who's Behind the Wheel"
            title="I Traded a Desk for a Dashboard"
            align="left"
          />
          <p className="text-lg leading-relaxed text-steel-500 dark:text-steel-300">
            In 2019 I sold an apartment in Lisbon, bought a secondhand Land
            Cruiser, and drove east with no return date. What started as one
            video from a gas station in Marrakech became a full-time practice
            of slow travel and cinematic storytelling — one border crossing,
            one mountain pass, one roadside conversation at a time.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-steel-500 dark:text-steel-300">
            Today the channel is home to nearly a million people who tune in
            not for polish, but for the honest, unscripted texture of life on
            the move.
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
