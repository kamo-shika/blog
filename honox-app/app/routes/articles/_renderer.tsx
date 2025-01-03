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
      <main className="mx-4 lg:mx-[16rem] xl:mx-[24rem]">
        <div class="markdown bg-white min-h-screen flex flex-col my-4 p-4">
            {children}
        </div>
      </main>
      <Footer />
    </body>
  </html>
  );
});