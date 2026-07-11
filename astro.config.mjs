import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://haku.designjarvis.com',
  integrations: [tailwind()],
});
