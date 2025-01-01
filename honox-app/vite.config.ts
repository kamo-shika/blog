import honox from 'honox/vite'
import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'

const entry = './app/server.ts'

export default defineConfig(() => {
  return {
    plugins: [honox(), ssg({ entry })]
  }
})
