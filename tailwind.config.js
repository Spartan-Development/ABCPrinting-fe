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
          50: "#effafc",
          100: "#d8f1f5",
          200: "#b5e1ec",
          300: "#82cbde",
          400: "#47acc9",
          500: "#2c90ae",
          600: "#277593",
          700: "#265f78",
          800: "#275063",
          900: "#244455",
          950: "#132b39",
        },
      },
    },
  },
  plugins: [],
};
