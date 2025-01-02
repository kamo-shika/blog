import { jsxRenderer } from 'hono/jsx-renderer'

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang='ja' class="dark">
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {<title>{title ?? frontmatter?.title ?? 'My Blog'}</title>}
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/style.css" />
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
      </head>
      <body>
        <header className="bg-gray-800 text-white p-4">
          <h1>
            <a href='/' className="text-2xl font-bold">kamoshikaの遊び場</a>
          </h1>
        </header>
        <main className="md:mx-[32rem] min-h-screen flex flex-col">
          <article className="markdown flex-grow">{children}</article>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
})