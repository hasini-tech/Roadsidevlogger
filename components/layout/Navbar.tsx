"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-luxury py-3"
          : "bg-transparent py-5"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ember-500 focus:px-4 focus:py-2 focus:text-cream-50"
      >
        Skip to content
      </a>
      <nav className="container-luxe flex items-center justify-between">
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2 font-heading text-xl font-bold text-asphalt-950 dark:text-cream-50"
        >
          <Compass className="text-ember-500" size={24} />
          Roadside<span className="text-ember-500">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-medium text-sm text-asphalt-950/80 transition hover:text-ember-500 dark:text-cream-50/80"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => handleNavClick("#contact")}
          >
            Work With Me
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full p-2 text-asphalt-950 dark:text-cream-50"
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
            className="glass mt-4 overflow-hidden lg:hidden"
          >
            <ul className="container-luxe flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full py-3 text-left font-medium text-asphalt-950 dark:text-cream-50"
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
