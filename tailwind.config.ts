import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        novo: {
          black: "#0A0A0A",
          white: "#FFFFFF",
          gold: "#C9A962",
          "gold-light": "#D4BC7D",
          "gold-dark": "#A88B4A",
          surface: "#F7F7F5",
          "dark-grey": "#1A1A1A",
          "mid-grey": "#E8E8E8",
          "light-grey": "#F0F0F0",
          muted: "#6B6B6B",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        "accordion-down": "accordionDown 0.3s ease-out",
        "accordion-up": "accordionUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        accordionDown: {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        accordionUp: {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A962 0%, #D4BC7D 50%, #A88B4A 100%)",
        "light-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F7F7F5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
