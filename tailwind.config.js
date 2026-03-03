/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0614",       // ana arkaplan (çok koyu mor)
        card: "#120A22",     // kart/panel moru
        stroke: "#2B1650",   // border moru
        neon: "#A855F7",     // vurgu moru
      },
    },
  },
  plugins: [],
}