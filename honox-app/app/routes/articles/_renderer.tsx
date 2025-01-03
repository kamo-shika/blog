import { jsxRenderer } from "hono/jsx-renderer";
import Head from "../../islands/common/head";
import Header from "../../islands/common/header";
import Footer from "../../islands/common/footer";

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang='ja' class="dark">
    <Head title={title} frontmatter={frontmatter} />
    <body className="bg-teal-50">
      <Header />
      <main className="mx-4 lg:mx-[16rem] xl:mx-[24rem] min-h-screen flex flex-col">
        <div className="flex flex-col items-center my-4">
          {frontmatter.iconUrl && (
            <img src={frontmatter.iconUrl} alt={frontmatter.title} className='w-16 h-16 mb-2' />
          )}
          <h1 className="text-3xl font-bold text-center">{frontmatter.title}</h1>
          <div className="my-2"></div>
          <p className="text-sm text-center">{frontmatter.date}</p>
        </div>
        <div class="markdown bg-white my-4 p-4">
            {children}
        </div>
      </main>
      <Footer />
    </body>
  </html>
  );
});