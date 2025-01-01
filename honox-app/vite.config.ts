import honox from 'honox/vite'
import ssg from '@hono/vite-ssg'
import { defineConfig } from 'vite'
 
const entry = './app/server.ts'
 
export default defineConfig(() => {
  return {
    plugins: [honox(), ssg({ entry })]
  }
})
