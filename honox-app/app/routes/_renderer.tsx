import { jsxRenderer } from 'hono/jsx-renderer'
import Header from '../islands/common/header'
import Footer from '../islands/common/footer'
import { html } from 'hono/html';

export default jsxRenderer(({ children, title, frontmatter }) => {

  const _title = title ?? frontmatter?.title ?? 'かもしかの遊び場'
  const _description = frontmatter?.description ?? '2022年新卒入社のバックエンドエンジニア。AWS等の資格を取得しながら、フロントエンド開発の経験を積むために本ブログを開設。技術と趣味の記事を発信していきます。'
  const url = `https://kamoshika-playground.dev/`
  return (
    <html lang='ja' class="dark">
      <head>
        <title>{_title}</title>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name="robots" content="all" />
        <meta name="description" content={_description}/>
        <meta property="og:title" content={_title} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="かもしかの遊び場" />
        <meta property="og:description" content={_description} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={url} />
        {/* スタイルシート */}
        {import.meta.env.PROD ? (
          <link rel="stylesheet" type="text/css" href="/static/assets/style.css" />
        ) : (
          <link rel="stylesheet" type="text/css" href="/app/style/style.css" />
        )}
        {import.meta.env.PROD ? (
          <GoogleAnalytics />
        ) : (
          <></>
        )}
        <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.css" />
      </head>
      <body className="bg-teal-50 flex flex-col min-h-screen">
        <Header />
        <main className="mx-4 2xl:mx-[24rem] flex-grow">
          {children}
        </main>
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js" defer></script>
        <script defer>hljs.highlightAll();</script>
      </body>
    </html>
  )
})

const GoogleAnalytics = () => {
  return (
    <>
      {html`
<!-- Google tag (gtag.js) -->
<script defer src="https://www.googletagmanager.com/gtag/js?id=G-WK6B03DCFL"></script>
<script defer>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-WK6B03DCFL');
</script>
      `}
    </>
  );
};
