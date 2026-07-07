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
  { label: "Videos", href: "#videos" },
  { label: "Journey", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats: StatItem[] = [
  { id: "s1", label: "Countries Explored", value: 42 },
  { id: "s2", label: "Kilometers Driven", value: 186000, suffix: "+" },
  { id: "s3", label: "Subscribers", value: 890, suffix: "K" },
  { id: "s4", label: "Videos Published", value: 312 },
];

export const featuredVideos: VideoItem[] = [
  {
    id: "v1",
    title: "The Karakoram Highway: World's Highest Border Crossing",
    thumbnail:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
    location: "Khunjerab Pass, Pakistan",
    category: "Mountain Pass",
    duration: "24:18",
    views: "2.1M",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-03-14",
  },
  {
    id: "v2",
    title: "Sleeping in the Van Above the Clouds — Atlas Mountains",
    thumbnail:
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&q=80",
    location: "Atlas Mountains, Morocco",
    category: "Off-Road",
    duration: "18:42",
    views: "1.4M",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-02-02",
  },
  {
    id: "v3",
    title: "Chasing the Pacific Coast Highway at Golden Hour",
    thumbnail:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80",
    location: "Big Sur, California",
    category: "Coastal Route",
    duration: "15:07",
    views: "3.6M",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2026-01-11",
  },
  {
    id: "v4",
    title: "Lost in Tokyo's Backstreets at 2AM",
    thumbnail:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
    location: "Shinjuku, Tokyo",
    category: "City Drive",
    duration: "21:53",
    views: "980K",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2025-12-20",
  },
  {
    id: "v5",
    title: "12 Hours, One Tank of Fuel — The Nullarbor Crossing",
    thumbnail:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80",
    location: "Nullarbor Plain, Australia",
    category: "Road Trip",
    duration: "27:34",
    views: "1.9M",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2025-11-08",
  },
  {
    id: "v6",
    title: "Fjords, Ferries and Fog — Norway's Ring Road",
    thumbnail:
      "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&q=80",
    location: "Lofoten Islands, Norway",
    category: "Coastal Route",
    duration: "19:26",
    views: "2.7M",
    youtubeId: "dQw4w9WgXcQ",
    publishedAt: "2025-10-02",
  },
];

export const timelineStops: TimelineStop[] = [
  {
    id: "t1",
    year: "2019",
    title: "The First Tank of Gas",
    location: "Lisbon, Portugal",
    description:
      "Sold the apartment, bought a 1994 Land Cruiser, and pointed it east with no return ticket booked.",
    distanceKm: 0,
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=900&q=80",
  },
  {
    id: "t2",
    year: "2020",
    title: "Crossing the Sahara",
    location: "Mauritania to Morocco",
    description:
      "Three weeks of sand, one blown radiator hose, and the loneliest, most beautiful sunsets of the trip.",
    distanceKm: 14200,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=900&q=80",
  },
  {
    id: "t3",
    year: "2021",
    title: "The Pamir Highway",
    location: "Tajikistan",
    description:
      "Above 4,000 meters for eleven straight days, sharing chai with yak herders who'd never seen a camera crew of one.",
    distanceKm: 38900,
    image:
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=900&q=80",
  },
  {
    id: "t4",
    year: "2023",
    title: "South American Spine",
    location: "Patagonia to the Atacama",
    description:
      "Four seasons in four days driving Ruta 40 — the trip that finally taught me to stop planning and start arriving.",
    distanceKm: 89400,
    image:
      "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=900&q=80",
  },
  {
    id: "t5",
    year: "2026",
    title: "186,000 KM and Counting",
    location: "Currently: Southeast Asia",
    description:
      "Still on the road, still filming, still convinced the best story is always one town further.",
    distanceKm: 186000,
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=80",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=80",
    alt: "Winding mountain road through pine forest",
    category: "Roads",
    location: "Dolomites, Italy",
    width: 700,
    height: 900,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80",
    alt: "Overlanding truck parked beside a desert dune at sunset",
    category: "Vehicles",
    location: "Wadi Rum, Jordan",
    width: 700,
    height: 500,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80",
    alt: "Campfire and tent under a starlit sky",
    category: "Camp Life",
    location: "Torres del Paine, Chile",
    width: 700,
    height: 900,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=80",
    alt: "Local fisherman mending nets at dawn",
    category: "People",
    location: "Hoi An, Vietnam",
    width: 700,
    height: 700,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=80",
    alt: "Snow-capped peaks reflected in an alpine lake",
    category: "Landscapes",
    location: "Banff, Canada",
    width: 700,
    height: 900,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?w=700&q=80",
    alt: "Empty highway cutting through red rock canyon",
    category: "Roads",
    location: "Monument Valley, USA",
    width: 700,
    height: 500,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1517401879840-6ee9be7c2c1e?w=700&q=80",
    alt: "Portrait of a nomadic herder in traditional dress",
    category: "People",
    location: "Gobi Desert, Mongolia",
    width: 700,
    height: 900,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&q=80",
    alt: "Turquoise fjord waters beneath dramatic cliffs",
    category: "Landscapes",
    location: "Lofoten, Norway",
    width: 700,
    height: 500,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "te1",
    name: "Marcus Reid",
    role: "Executive Producer, WanderReel Studios",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "Rare to find a creator who can drive twelve hours through a sandstorm and still deliver a frame-perfect cut by morning. An absolute professional.",
    rating: 5,
  },
  {
    id: "te2",
    name: "Priya Nathan",
    role: "Brand Partnerships Lead, TrailForge Gear",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote:
      "Our gear sell-through doubled after the Atacama series aired. The storytelling never feels like an ad — that's the whole point.",
    rating: 5,
  },
  {
    id: "te3",
    name: "Julien Marchetti",
    role: "Founder, Overland Collective",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
    quote:
      "Booked for a three-day shoot, stayed for a week because the community response was so strong. Deeply reliable and genuinely a joy on the road.",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    slug: "surviving-the-pamir-highway",
    title: "What Nobody Tells You About Driving the Pamir Highway",
    excerpt:
      "Altitude sickness, fuel math, and the unexpected kindness of strangers at 4,300 meters.",
    cover:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&q=80",
    category: "Field Notes",
    readTime: "8 min read",
    publishedAt: "2026-04-02",
  },
  {
    id: "b2",
    slug: "packing-list-two-years-on-the-road",
    title: "My Packing List After Two Years Living Out of a Truck",
    excerpt:
      "Everything I added, everything I threw out the window (literally), and what actually earns its space.",
    cover:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    category: "Gear Guide",
    readTime: "6 min read",
    publishedAt: "2026-03-18",
  },
  {
    id: "b3",
    slug: "filming-solo-in-remote-places",
    title: "How I Film Cinematic Solo Travel Footage With No Crew",
    excerpt:
      "The rigs, the routines, and the three-shot rule that turns an empty road into a story.",
    cover:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    category: "Behind the Scenes",
    readTime: "10 min read",
    publishedAt: "2026-02-27",
  },
];

export const brands: Brand[] = [
  { id: "br1", name: "TrailForge Gear", logo: "/images/brands/trailforge.svg" },
  { id: "br2", name: "Overland Collective", logo: "/images/brands/overland.svg" },
  { id: "br3", name: "Nomad Optics", logo: "/images/brands/nomad-optics.svg" },
  { id: "br4", name: "Basecamp Supply Co.", logo: "/images/brands/basecamp.svg" },
  { id: "br5", name: "Ridgeline Roasters", logo: "/images/brands/ridgeline.svg" },
  { id: "br6", name: "Atlas Fuel Cards", logo: "/images/brands/atlas.svg" },
];

export const youtubeStats = {
  subscribers: "890K",
  totalViews: "142M",
  videoCount: 312,
  channelUrl: "https://youtube.com/@roadsidevlogger",
};
