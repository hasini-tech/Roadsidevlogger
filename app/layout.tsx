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

const siteUrl = "https://divithdigitalmarketing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Divith Digital Marketing - We Create Impact",
    template: "%s | Divith Digital Marketing",
  },
  description:
    "Divith Digital Marketing builds digital success stories through creative strategy, social media growth, performance marketing, content, branding, and visual storytelling.",
  keywords: [
    "digital marketing",
    "performance marketing",
    "social media marketing",
    "brand storytelling",
    "content creation",
  ],
  authors: [{ name: "Divith Digital Marketing" }],
  openGraph: {
    title: "Divith Digital Marketing - We Create Impact",
    description:
      "Creative ideas, smart strategy, and measurable results for brands that want to stand out, connect, and grow.",
    url: siteUrl,
    siteName: "Divith Digital Marketing",
    type: "website",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divith Digital Marketing - We Create Impact",
    description:
      "Creative strategy, performance marketing, branding, content, and visual storytelling under one roof.",
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
