import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Network Analysis',
        customCss: ['/src/custom-styles.css', '@fontsource/jost'],
      social: {
        github: 'https://github.com/DHARPA-Project/kiara_plugin.network_analysis',
      },
      sidebar: [
          {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Package Contents',

            autogenerate: { directory: 'info' },

        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'reference' },
        },

      ],
    }),
  ],

  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
