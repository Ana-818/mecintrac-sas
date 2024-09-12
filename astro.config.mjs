// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import colors from 'tailwindcss/colors';

export default defineConfig({
  integrations: [tailwind()]
});