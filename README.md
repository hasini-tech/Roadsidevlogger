# Roadside Vlogger — Portfolio Website

A cinematic, premium portfolio for a roadside/travel vlogger. Built with
Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and
Lucide React.

## Design system

- **Palette:** asphalt (near-black), cream (warm off-white), ember
  (sunset-orange accent), gold (secondary accent), steel (muted blue-gray).
- **Type:** Poppins for headings, Inter for body copy.
- **Signature motif:** numbered "mile markers" used in the travel timeline,
  echoing real highway distance markers.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                    Next.js App Router entry points
  layout.tsx            Root layout: fonts, metadata/SEO, providers
  page.tsx              Homepage — composes all sections
  globals.css           Tailwind layers + theme CSS variables

components/
  layout/                Navbar, Footer, LoadingScreen, ScrollProgress,
                          BackToTop, ThemeToggle
  sections/               Hero, About, FeaturedVideos, Timeline, Gallery,
                          YouTubeSection, BrandsCarousel, Testimonials,
                          Blog, Contact
  ui/                     Button, SectionHeading, AnimatedCounter, Lightbox

hooks/                  useScrollProgress, useScrollVisible, useCountUp
lib/                    data.ts (site content), utils.ts (cn helper)
providers/              ThemeProvider (next-themes wrapper)
types/                  Shared TypeScript interfaces
public/images/          Static assets (brand logos, OG image, etc.)
```

## Notes for production

- Replace the Unsplash placeholder images in `lib/data.ts` with your own
  optimized assets, and add matching `remotePatterns` in `next.config.js`
  if you keep any remote hosts.
- Wire the contact form in `components/sections/Contact.tsx` to a real
  endpoint (API route, Resend, Formspree, etc.) — it currently simulates
  a submission.
- Swap the Google Maps embed URL in `Contact.tsx` for your own location.
- Add real brand SVG logos to `public/images/brands/`.
- Update `metadataBase` and Open Graph image in `app/layout.tsx` to your
  production domain.
