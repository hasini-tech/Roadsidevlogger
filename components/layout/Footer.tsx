import Link from "next/link";
import { Compass, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import { navLinks } from "@/lib/data";

const socials = [
  { icon: Youtube, href: "https://youtube.com/@roadsidevlogger", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/roadsidevlogger", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/roadsidevlogger", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/roadsidevlogger", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="border-t border-steel-500/10 bg-asphalt-950 text-cream-100">
      <div className="container-luxe grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="#home"
            className="flex items-center gap-2 font-heading text-xl font-bold text-cream-50"
          >
            <Compass className="text-ember-500" size={22} />
            Roadside<span className="text-ember-500">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-100/60">
            Cinematic overland travel films from 42 countries and counting.
            Every road has a story — this is where I tell them.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-cream-50">
            Explore
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/60">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-ember-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-cream-50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/60">
            <li>hello@roadsidevlogger.com</li>
            <li>Booking &amp; brand partnerships available</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-cream-50">
            Follow the Journey
          </h3>
          <div className="mt-4 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100/70 transition hover:border-ember-500 hover:text-ember-500"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream-100/10 py-6">
        <p className="container-luxe text-center text-xs text-cream-100/40">
          © {new Date().getFullYear()} Roadside Vlogger. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
