/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customgray: "#161616",
        logocolor: "#34d186",
        lightgray: "#e3e0de",
        btnhover: "#d3d4d7",
        footertxt: "#888a92",
        extendedmenu: "#e3e5e7",
        darkgradient: "#090909",
        midgradient: "#787171",
        lightgradient: "#000000"
      },
        backgroundImage: {
          hero: "url(/images/hero.webp)"
        }
      ,
      fontFamily: {
        galano: ['GalanoClassic', 'san-serif'],
        euclid: ['EuclidCircular'],
      }
    },
  },
  plugins: [],
};
