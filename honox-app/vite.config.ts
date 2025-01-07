import ssg from '@hono/vite-ssg';
import mdx from '@mdx-js/rollup';
import devServer from '@hono/vite-dev-server';
import honox from 'honox/vite';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite';
import pages from '@hono/vite-cloudflare-pages'
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight';

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
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
          rehypePlugins: [rehypeHighlight],
        }),
        devServer({
          exclude: [
            /.*\.css$/,
            /.*\.ts$/,
            /.*\.tsx$/,
            /^\/@.+$/,
            /\?t\=\d+$/,
            /^\/favicon\.ico$/,
            /^\/site\.webmanifest$/,
            /^\/static\/.+/,
            /^\/node_modules\/.*/,
            /^\/app\/.+/,
            /.*\.(png|jpg|jpeg|svg|webp)$/,
          ],
          ignoreWatching: ['*', /\.wrangler/],
        }),
      ],
    }
  }
});
