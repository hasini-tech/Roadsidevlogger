export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  location: string;
  category:
    | "Social Media"
    | "Performance"
    | "Content"
    | "Video"
    | "Creator Marketing"
    | "Branding";
  duration: string;
  views: string;
  youtubeId: string;
  publishedAt: string;
}

export interface TimelineStop {
  id: string;
  year: string;
  title: string;
  location: string;
  description: string;
  distanceKm: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "Restaurant" | "Retail" | "Jewelry" | "Real Estate" | "Manufacturing" | "Cinema";
  location: string;
  width: number;
  height: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
