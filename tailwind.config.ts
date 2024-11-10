import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        max: "1124px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/img/bg/Mask.svg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        primary: "#D87D4A",
        secondary: "#fbaf85",
        teriary: "#101010",
        smokeWhite: "#F1F1F1",
        shadeWhite: "#FAFAFA",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        primary: ["var(--monrope-font)", "sans-serif"],
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.5rem",
    },
    letterSpacing: {
      wider: ".0625em",
      "extra-wide": "0.715em",
    },
  },
  plugins: [],
};
export default config;
