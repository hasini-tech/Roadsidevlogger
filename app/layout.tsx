import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import BackToTop from "@/components/layout/BackToTop";
import LoadingScreen from "@/components/layout/LoadingScreen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://roadsidevlogger.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Roadside Vlogger — Exploring Every Road Has a Story",
    template: "%s | Roadside Vlogger",
  },
  description:
    "Cinematic overland travel films, photography, and field notes from 42 countries and 186,000 kilometers of road. Follow the journey.",
  keywords: [
    "travel vlogger",
    "overlanding",
    "road trip films",
    "travel photography",
    "cinematic travel videos",
  ],
  authors: [{ name: "Roadside Vlogger" }],
  openGraph: {
    title: "Roadside Vlogger — Exploring Every Road Has a Story",
    description:
      "Cinematic overland travel films, photography, and field notes from 42 countries and 186,000 kilometers of road.",
    url: siteUrl,
    siteName: "Roadside Vlogger",
    type: "website",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadside Vlogger — Exploring Every Road Has a Story",
    description:
      "Cinematic overland travel films, photography, and field notes from the road.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
