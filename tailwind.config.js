/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,astro}"],
  theme: {
    extend: {
      colors: {
        white: {
          50: "#f5f5f5",
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
        },
        main: {
          50: "#f3faf5",
          100: "#e4f4e9",
          200: "#cae8d4",
          300: "#b1dcbf",
          400: "#6fb987",
          500: "#4b9c66",
          600: "#398050",
          700: "#306542",
          800: "#2a5138",
          900: "#24432f",
          950: "#0f2417",
        },
      },
    },
  },
  plugins: [],
};
