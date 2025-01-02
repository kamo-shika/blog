import type { Meta } from '../types'

export default function Top() {
  const posts = import.meta.glob<{ frontmatter: Meta }>('./articles/**/*.mdx', {
    eager: true,
  })
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello!</h1>
      <h2>Posts</h2>
      <ul class='article-list'>
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <a href={`${id.replace(/\.mdx$/, '')}`}>{module.frontmatter.title}</a>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}