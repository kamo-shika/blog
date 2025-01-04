import { jsxRenderer } from "hono/jsx-renderer";


export default jsxRenderer(({ children, title, frontmatter, Layout }) => {
  if (!frontmatter) {
    return <></>;
  }
  return (
    <Layout title={title} frontmatter={frontmatter}>
      <div className="flex flex-col items-center my-4">
        <img src={frontmatter.iconUrl} alt={frontmatter.title} className='w-16 h-16 mb-2' />
        <h1 className="text-3xl font-bold text-center">{frontmatter.title}</h1>
        <div className="my-2"></div>
        <p className="text-sm text-center">{frontmatter.date}</p>
      </div>
      <div class="markdown bg-white my-4 p-4 rounded-lg">
        {children}
      </div>
    </Layout>
  );
});