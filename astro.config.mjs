import { defineConfig } from 'astro/config';
import metaTags from 'astro-meta-tags';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robots from "astro-robots";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.build',
  integrations: [metaTags(), tailwind(), mdx(), sitemap(), robots(), alpinejs()]
});