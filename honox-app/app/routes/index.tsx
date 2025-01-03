import { getArticles } from '../lib/articles';

export default function Top() {
  const articles = getArticles();
  return (
    <div className="my-4">
      <ul className='article-list grid grid-cols-1 xl:grid-cols-2 gap-4'>
        {Object.entries(articles).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li className='bg-white rounded-lg p-4 my-1 flex items-center'>
                {module.frontmatter.iconUrl && (
                  <img src={module.frontmatter.iconUrl} alt={module.frontmatter.title} className='w-8 h-8 mr-2' />
                )}
                <div>
                  <a href={`${module.path}`} className='block text-lg font-semibold text-blue-600 hover:underline'>
                    {module.frontmatter.title}
                  </a>
                  <p className='text-gray-500 text-sm mt-1'>{module.frontmatter.date}</p>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}