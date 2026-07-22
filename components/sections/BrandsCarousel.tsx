import { brands } from "@/lib/data";

export default function BrandsCarousel() {
  const doubled = [...brands, ...brands];

  return (
    <section className="relative isolate overflow-hidden border-y border-black/5 bg-cream-50/80 py-14 dark:border-white/5 dark:bg-asphalt-900/70">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,107,53,0.12),transparent_55%)]" />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-50/95 via-cream-50/80 to-transparent dark:from-asphalt-900 dark:via-asphalt-900/90" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-50/95 via-cream-50/80 to-transparent dark:from-asphalt-900 dark:via-asphalt-900/90" />

        <div className="flex w-max animate-marquee items-center gap-20">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex shrink-0 items-center justify-center font-heading text-3xl font-bold tracking-tight text-asphalt-950/30 transition hover:text-asphalt-950/70 dark:text-cream-50/45 dark:hover:text-cream-50/85"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
