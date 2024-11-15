/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        'about-blue': "#336589",
        background: "#f1f1f1",
        blue: "#0f4a75",
		    'light-blue': "#1993c5",
		neutral: colors.neutral
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lalezar: ['Lalezar', 'cursive'],
      }
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
