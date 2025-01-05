import { jsxRenderer } from 'hono/jsx-renderer'
import Header from '../islands/common/header'
import Footer from '../islands/common/footer'
import { html } from 'hono/html';

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang='ja' class="dark">
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name="robots" content="all" />
        {<meta name="description"  content={frontmatter?.description ?? '2022年新卒入社のバックエンドエンジニア。AWS等の資格を取得しながら、フロントエンド開発の経験を積むために本ブログを開設。技術と趣味の記事を発信していきます。'}/>}
        {<title>{title ?? frontmatter?.title ?? 'かもしかの遊び場'}</title>}
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/style.css" />
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
        {import.meta.env.PROD ? (
          <GoogleAnalytics />
        ) : (
          <></>
        )}
      </head>
      <body className="bg-teal-50 flex flex-col min-h-screen">
        <Header />
        <main className="mx-4 2xl:mx-[24rem] flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
})

const GoogleAnalytics = () => {
  return (
    <>
      {html`
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-WK6B03DCFL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WK6B03DCFL');
</script>
      `}
    </>
  );
};
