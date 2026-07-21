import { brands } from "@/lib/data";

export default function BrandsCarousel() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream-50 to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-20">
          {doubled.map((brand, i) => (
            <div
              key={`${brand.id}-${i}`}
              className="flex shrink-0 items-center justify-center font-heading text-3xl font-bold tracking-tight text-asphalt-950/20 transition hover:text-asphalt-950/60"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}