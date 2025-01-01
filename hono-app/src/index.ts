import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  const userAgent = c.req.raw.headers.get("User-Agent")
  return c.text(`Hello Hono! \nUA:${userAgent}`)
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
