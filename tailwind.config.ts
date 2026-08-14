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
          950: "#000000",
          900: "#0A0A0A",
          800: "#141414",
          700: "#222222",
        },
        cream: {
          50: "#FFFFFF",
          100: "#F7F7F7",
          200: "#EDEDED",
        },
        ember: {
          400: "#FA003F",
          500: "#FA003F",
          600: "#FA003FCC",
          700: "#FA003F",
        },
        gold: {
          300: "#FA003F",
          400: "#FA003F",
          500: "#FA003F",
        },
        steel: {
          300: "#A3A3A3",
          400: "#737373",
          500: "#525252",
          600: "#404040",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "horizon-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.95) 100%)",
        "ember-gradient": "linear-gradient(135deg, #FA003F 0%, #FA003F 100%)",
      },
      boxShadow: {
        luxury: "0 20px 60px -15px rgba(0,0,0,0.35)",
        "luxury-lg": "0 30px 90px -20px rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(250,0,63,0.35)",
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
