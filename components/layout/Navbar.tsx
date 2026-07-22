"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed left-1/2 top-3 z-[60] w-[calc(100%-1rem)] max-w-7xl -translate-x-1/2 rounded-full border px-2 py-2.5 transition-all duration-300 sm:top-4 sm:w-[calc(100%-2rem)]",
        scrolled
          ? "border-white/70 bg-white/90 text-asphalt-950 shadow-luxury backdrop-blur-xl"
          : "border-white/15 bg-asphalt-950/45 text-cream-50 shadow-luxury-lg backdrop-blur-xl"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex w-full items-center justify-between gap-4 px-3 sm:px-5 lg:px-6">
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 font-heading text-xl font-bold text-current transition"
        >
          <Compass
            className={cn(
              "transition",
              scrolled ? "text-ember-500" : "text-ember-400"
            )}
            size={24}
          />
          DDM<span className="text-ember-500">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-current/80 transition hover:text-ember-400"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex">
          <Button size="sm" onClick={() => handleNavClick("#contact")}>
            Work With Us
          </Button>
        </div>

        <div className="flex items-center lg:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 text-current transition hover:bg-white/10"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "mx-3 mt-3 overflow-hidden rounded-[24px] border backdrop-blur-xl lg:hidden",
              scrolled
                ? "border-white/70 bg-white/90 text-asphalt-950 shadow-luxury"
                : "border-white/15 bg-asphalt-950/90 text-cream-50 shadow-luxury-lg"
            )}
          >
            <ul className="flex flex-col gap-1 px-4 py-4 sm:px-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full rounded-full py-3 text-left font-medium text-current transition hover:bg-ember-500/10"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
