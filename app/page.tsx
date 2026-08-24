import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedVideos from "@/components/sections/FeaturedVideos";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import YouTubeSection from "@/components/sections/YouTubeSection";
import BrandsCarousel from "@/components/sections/BrandsCarousel";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedVideos />
      <Timeline />
      <Gallery />
      <YouTubeSection />
      <BrandsCarousel />
      <Blog />
      <Contact />
    </>
  );
}
