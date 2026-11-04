import { defineCollection } from 'astro:content';
import { hexoPostsLoader, postSchema } from 'astro-theme-icarus-thiennguyen/content';

// Posts are read straight from the Hexo source folder while the blog moves over
export const collections = {
  posts: defineCollection({ loader: hexoPostsLoader({ dir: '../source/_posts' }), schema: postSchema }),
};
