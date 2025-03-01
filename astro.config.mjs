// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mecintrac.com',
  integrations: [tailwind({
  applyBaseStyles: true,
}), icon(), mdx(), robotsTxt(), sitemap()]
});