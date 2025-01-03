import { jsxRenderer } from 'hono/jsx-renderer'
import Header from '../islands/common/header'
import Footer from '../islands/common/footer'
import Head from '../islands/common/head'

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang='ja' class="dark">
      <Head title={title} frontmatter={frontmatter} />
      <body className="bg-teal-50">
        <Header />
        <main className="mx-4 md:mx-[16rem] lg:mx-[24rem] min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
})