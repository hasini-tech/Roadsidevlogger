import { brands } from "@/lib/data";

export default function BrandsCarousel() {
  const doubled = [...brands, ...brands];

  return (
    <section className="border-y border-steel-500/10 bg-cream-50 py-14 dark:bg-asphalt-900">
      <div className="container-luxe mb-8 text-center">
        <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-steel-500 dark:text-steel-300">
          Industries We Help Grow
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream-50 to-transparent dark:from-asphalt-900" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream-50 to-transparent dark:from-asphalt-900" />

        <div className="flex w-max animate-marquee gap-16">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex h-12 w-40 shrink-0 items-center justify-center font-heading text-lg font-bold text-steel-400 opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
