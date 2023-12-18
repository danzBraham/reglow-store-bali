/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        "mobile-md": "410px",
        wide: "1440px",
      },
      boxShadow: {
        small: "0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
        basic: "0px 8px 24px 0px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        garamond: ["EB Garamond Variable", ...defaultTheme.fontFamily.serif],
        montserrat: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        neutral: {
          base: "#f8f8f8",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
          1000: "#0A0A0A",
        },
        main: {
          50: "#ebfef6",
          100: "#cefde8",
          200: "#a2f8d6",
          base: "#66efc2",
          400: "#29dea8",
          500: "#05c492",
          600: "#00a078",
          700: "#008063",
          800: "#006550",
          900: "#015343",
          950: "#002f26",
        },
        accent: {
          50: "#faf8ec",
          100: "#f4eecd",
          200: "#ebdb9d",
          300: "#dec266",
          base: "#d5ac42",
          500: "#c4942e",
          600: "#a97425",
          700: "#875521",
          800: "#714622",
          900: "#613b22",
          950: "#381e10",
        },
      },
    },
  },
  plugins: [],
};
