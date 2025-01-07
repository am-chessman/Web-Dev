/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: { max: '639px' }, // Applies to screens ≤ 639px
      sm: { max: '767px' }, // Applies to screens ≤ 767px
      md: { max: '1023px' }, // Applies to screens ≤ 1023px
      lg: { max: '1279px' }, // Applies to screens ≤ 1279px
      xl: { max: '1535px' }, // Applies to screens ≤ 1535px
      '2xl': { max: '1920px' },// Applies to screens ≤ 1920px
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      fontFamily: {
        'jetbrains-mono': ["JetBrains Mono"]
      }, 
      backgroundImage: {
        'profilePhoto': "url('/profpic.webp')",
      },
    },
  },
  plugins: [],
};
