/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        blue: "#1993c5",
		'light-blue': "#60bad4",
		neutral: colors.neutral
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
