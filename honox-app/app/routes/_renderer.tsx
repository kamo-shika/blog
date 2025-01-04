import { jsxRenderer } from 'hono/jsx-renderer'
import Header from '../islands/common/header'
import Footer from '../islands/common/footer'

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang='ja' class="dark">
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        {<title>{title ?? frontmatter?.title ?? 'かもしかの遊び場'}</title>}
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/style.css" />
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
      </head>
      <body className="bg-teal-50 flex flex-col min-h-screen">
        <Header />
        <main className="mx-4 md:mx-[16rem] lg:mx-[24rem] flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
})