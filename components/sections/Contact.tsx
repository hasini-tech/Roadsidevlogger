"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2, Instagram, Youtube, Twitter } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const socials = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with real submission endpoint (e.g. an API route or form service)
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="bg-cream-100 py-24 dark:bg-asphalt-950 sm:py-32">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Build Something Extraordinary Together"
          description="Share your brand goals, campaign needs, or growth challenge. DDM can help with strategy, content, performance marketing, branding, and visual storytelling."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-luxury dark:bg-asphalt-800"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-asphalt-950 dark:text-cream-50"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-steel-500/20 bg-cream-50 px-4 py-3 text-asphalt-950 outline-none transition focus:border-ember-500 dark:bg-asphalt-900 dark:text-cream-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-asphalt-950 dark:text-cream-50"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-steel-500/20 bg-cream-50 px-4 py-3 text-asphalt-950 outline-none transition focus:border-ember-500 dark:bg-asphalt-900 dark:text-cream-50"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-asphalt-950 dark:text-cream-50"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Digital marketing inquiry"
                className="w-full rounded-lg border border-steel-500/20 bg-cream-50 px-4 py-3 text-asphalt-950 outline-none transition focus:border-ember-500 dark:bg-asphalt-900 dark:text-cream-50"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-asphalt-950 dark:text-cream-50"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your business, goals, timeline, and the services you need..."
                className="w-full resize-none rounded-lg border border-steel-500/20 bg-cream-50 px-4 py-3 text-asphalt-950 outline-none transition focus:border-ember-500 dark:bg-asphalt-900 dark:text-cream-50"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="mt-6 w-full"
              disabled={status !== "idle"}
              icon={
                status === "sent" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <Send size={18} />
                )
              }
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="overflow-hidden rounded-2xl shadow-luxury">
              <iframe
                title="Divith Digital Marketing office location in Vallam, Thanjavur"
                src="https://www.google.com/maps?q=58+Balaji+Nagar,+Vallam,+Thanjavur&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-luxury dark:bg-asphalt-800">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-asphalt-950 dark:text-cream-50">
                    Email
                  </p>
                  <a
                    href="mailto:hello@divithdigitalmarketing.com"
                    className="text-steel-500 transition hover:text-ember-500 dark:text-steel-300"
                  >
                    hello@divithdigitalmarketing.com
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-asphalt-950 dark:text-cream-50">
                    Phone
                  </p>
                  <a
                    href="tel:9626411111"
                    className="text-steel-500 transition hover:text-ember-500 dark:text-steel-300"
                  >
                    96264 11111
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ember-500/10 text-ember-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-heading font-semibold text-asphalt-950 dark:text-cream-50">
                    Address
                  </p>
                  <p className="text-steel-500 dark:text-steel-300">
                    58 Balaji Nagar, Vallam, Thanjavur
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-steel-500/20 text-steel-500 transition hover:border-ember-500 hover:text-ember-500 dark:text-steel-300"
                  >
                    <Icon size={19} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
