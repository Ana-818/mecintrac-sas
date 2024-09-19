// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

export default defineConfig({
  integrations: [tailwind({
  applyBaseStyles: true,
}), icon()]
});