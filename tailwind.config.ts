import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — "roadside at dusk"
        asphalt: {
          950: "#0B0D10",
          900: "#12151A",
          800: "#1B1F26",
          700: "#262B33",
        },
        cream: {
          50: "#FBF9F5",
          100: "#F6F3EC",
          200: "#EFEADF",
        },
        ember: {
          400: "#FF8A5C",
          500: "#FF6B35",
          600: "#E8532088",
          700: "#C4441C",
        },
        gold: {
          300: "#F0CC85",
          400: "#E8B14D",
          500: "#D19A34",
        },
        steel: {
          300: "#8A99A8",
          400: "#5C6B79",
          500: "#3A4750",
          600: "#2A343C",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "horizon-gradient":
          "linear-gradient(180deg, rgba(11,13,16,0) 0%, rgba(11,13,16,0.6) 60%, rgba(11,13,16,0.95) 100%)",
        "ember-gradient": "linear-gradient(135deg, #FF6B35 0%, #E8B14D 100%)",
      },
      boxShadow: {
        luxury: "0 20px 60px -15px rgba(11,13,16,0.35)",
        "luxury-lg": "0 30px 90px -20px rgba(11,13,16,0.45)",
        glow: "0 0 40px rgba(255,107,53,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
