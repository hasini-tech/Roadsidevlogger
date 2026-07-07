import {
  VideoItem,
  TimelineStop,
  GalleryImage,
  Testimonial,
  BlogPost,
  Brand,
  StatItem,
  NavLink,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#videos" },
  { label: "Process", href: "#timeline" },
  { label: "Work", href: "#gallery" },
  { label: "Insights", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats: StatItem[] = [
  { id: "s1", label: "Growth Services", value: 6 },
  { id: "s2", label: "Business Verticals", value: 6, suffix: "+" },
  { id: "s3", label: "Creative Focus", value: 100, suffix: "%" },
  { id: "s4", label: "Strategy Led", value: 100, suffix: "%" },
];

export const featuredVideos: VideoItem[] = [
  {
    id: "v1",
    title: "Social Media Growth",
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80",
    location: "Engaging content, community building, and channel strategy",
    category: "Social Media",
    duration: "Growth",
    views: "Brand Building",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-07-07",
  },
  {
    id: "v2",
    title: "Performance Marketing",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    location: "Meta and Google campaigns optimized for leads, sales, and ROI",
    category: "Performance",
    duration: "ROI",
    views: "Lead Generation",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-07-07",
  },
  {
    id: "v3",
    title: "Content That Connects",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80",
    location: "Copy, visuals, and stories that turn attention into action",
    category: "Content",
    duration: "Content",
    views: "Storytelling",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-07-07",
  },
  {
    id: "v4",
    title: "Visual Storytelling",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
    location: "Brand films, product showcases, corporate shoots, and reels",
    category: "Video",
    duration: "Video",
    views: "Cinematic",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-07-07",
  },
  {
    id: "v5",
    title: "Vlog and Creator Marketing",
    thumbnail:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=900&q=80",
    location: "Authentic business stories that build trust and connection",
    category: "Creator Marketing",
    duration: "Trust",
    views: "Authentic Reach",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-07-07",
  },
  {
    id: "v6",
    title: "Branding and Creative Studio",
    thumbnail:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&q=80",
    location: "Identity systems, social creatives, marketing assets, and designs",
    category: "Branding",
    duration: "Identity",
    views: "Creative Studio",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-07-07",
  },
];

export const timelineStops: TimelineStop[] = [
  {
    id: "t1",
    year: "01",
    title: "Discover the Brand Story",
    location: "Creative Thinking",
    description:
      "We understand your business, audience, goals, and market position before planning any campaign.",
    distanceKm: 1,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
  },
  {
    id: "t2",
    year: "02",
    title: "Build the Strategy",
    location: "Smart Planning",
    description:
      "Every campaign is designed around long-term growth, clear messaging, and measurable outcomes.",
    distanceKm: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
  },
  {
    id: "t3",
    year: "03",
    title: "Create Content That Connects",
    location: "Brand Storytelling",
    description:
      "From copy to visuals and cinematic video, we craft content that inspires, informs, and converts.",
    distanceKm: 3,
    image:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=900&q=80",
  },
  {
    id: "t4",
    year: "04",
    title: "Launch Performance Campaigns",
    location: "Data-Driven Decisions",
    description:
      "We run and optimize campaigns across digital platforms to improve leads, sales, visibility, and ROI.",
    distanceKm: 4,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    id: "t5",
    year: "05",
    title: "Grow Through Partnership",
    location: "Long-Term Growth",
    description:
      "Transparent communication, consistent support, and continuous improvement keep the brand moving forward.",
    distanceKm: 5,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=80",
    alt: "Restaurant dining space prepared for a brand campaign",
    category: "Restaurant",
    location: "Restaurant Marketing",
    width: 700,
    height: 900,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&q=80",
    alt: "Retail store display with premium product shelves",
    category: "Retail",
    location: "Retail Growth",
    width: 700,
    height: 500,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=80",
    alt: "Jewelry product arranged for a premium brand shoot",
    category: "Jewelry",
    location: "Jewelry Branding",
    width: 700,
    height: 900,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
    alt: "Modern real estate property exterior",
    category: "Real Estate",
    location: "Real Estate Campaigns",
    width: 700,
    height: 700,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=700&q=80",
    alt: "Manufacturing team reviewing production systems",
    category: "Manufacturing",
    location: "Manufacturing Visibility",
    width: 700,
    height: 900,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80",
    alt: "Multiplex cinema seating and screen",
    category: "Cinema",
    location: "Multiplex Cinemas",
    width: 700,
    height: 500,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "te1",
    name: "Restaurant Partner",
    role: "Hospitality Brand",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote:
      "DDM helped us turn everyday content into a stronger local presence, with campaigns that looked polished and brought genuine enquiries.",
    rating: 5,
  },
  {
    id: "te2",
    name: "Retail Founder",
    role: "Lifestyle Store",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "The team understood our brand quickly, created consistent visuals, and gave us a clear marketing direction instead of random posting.",
    rating: 5,
  },
  {
    id: "te3",
    name: "Real Estate Team",
    role: "Property Business",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    quote:
      "Their strategy-first approach made our campaigns easier to track, improve, and scale across digital platforms.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "strategy-first-growth",
    title: "Why Strategy Comes Before Every Campaign",
    excerpt:
      "Strong campaigns are built around business goals, audience clarity, and measurable outcomes, not just clicks.",
    cover:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Digital Strategy",
    readTime: "4 min read",
    publishedAt: "2026-07-07",
  },
  {
    id: "b2",
    slug: "creative-content-that-converts",
    title: "Creative Content That Captures Attention and Builds Trust",
    excerpt:
      "How compelling copy, visuals, video, and consistent storytelling help brands connect with the right audience.",
    cover:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    category: "Content Creation",
    readTime: "5 min read",
    publishedAt: "2026-07-07",
  },
  {
    id: "b3",
    slug: "performance-powered-by-insights",
    title: "Performance Marketing Powered by Insights",
    excerpt:
      "Blending creativity with analytics helps campaigns improve lead quality, visibility, sales, and return on investment.",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Performance Marketing",
    readTime: "5 min read",
    publishedAt: "2026-07-07",
  },
];

export const brands: Brand[] = [
  { id: "br1", name: "Restaurants", logo: "" },
  { id: "br2", name: "Retail", logo: "" },
  { id: "br3", name: "Jewelry", logo: "" },
  { id: "br4", name: "Real Estate", logo: "" },
  { id: "br5", name: "Manufacturing", logo: "" },
  { id: "br6", name: "Multiplex Cinemas", logo: "" },
];

export const youtubeStats = {
  subscribers: "6+",
  totalViews: "360",
  videoCount: 100,
  channelUrl: "https://youtube.com",
};
