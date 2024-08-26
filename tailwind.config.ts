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
  },
  plugins: [],
};
export default config;
