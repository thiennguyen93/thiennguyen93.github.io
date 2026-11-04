import { defineConfig } from 'astro/config';
import icarus from 'astro-theme-icarus-thiennguyen';
import theme from './theme.config';

export default defineConfig({
  site: 'https://thiennguyen.dev',
  // Hexo permalinks end with a slash; keep the same URLs
  trailingSlash: 'always',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [icarus(theme)],
});
