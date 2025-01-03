import { Meta } from "../../types";

interface HeadProps {
    title: string;
    frontmatter: Meta;
}

export default function Head({ title, frontmatter }: HeadProps) {
    return (
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
    )
}
  