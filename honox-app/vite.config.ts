import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup';
import honox from 'honox/vite';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite';
import pages from '@hono/vite-cloudflare-pages'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['./app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]'
          }
        }
      }
    }
  } else {
    const entry = "./app/server.ts";

    return {
      plugins: [
        honox(), 
        pages(),
        ssg({ entry }),
        mdx({
          jsxImportSource: 'hono/jsx',
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
      ],
    }
  }
});
