import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3B",
        gold: "#C9A227",
        light: "#F5F7FA"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 60px -30px rgba(11, 31, 59, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
