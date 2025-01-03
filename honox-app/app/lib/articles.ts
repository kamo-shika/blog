import type { Meta } from "../types";

const articles = import.meta.glob<{ frontmatter: Meta }>('../routes/articles/**/*.mdx', {
  eager: true,
})

const sortByDateDesc = ():
  | ((
      a: [string, { frontmatter: Meta }],
      b: [string, { frontmatter: Meta }],
    ) => number)
  | undefined => {
  return ([_aid, aArticle], [_bid, bArticle]) => {
    const aDate = new Date(aArticle.frontmatter.date);
    const bDate = new Date(bArticle.frontmatter.date);
    return aDate.getTime() < bDate.getTime() ? 1 : -1;
  };
};

export const getArticles = () => {
    const articlesData = Object.entries(articles)
      .sort(sortByDateDesc())
      .map(([id, article]) => {
        const { frontmatter } = article;
        frontmatter.path = id.replace(/\.mdx$/, '').replace(/.\/routes/, '');
        return { id, frontmatter };
      });
    return articlesData;
};
