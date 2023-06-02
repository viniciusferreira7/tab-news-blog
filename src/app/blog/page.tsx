import { getAllPosts } from '@/services/tab-news'
import { format } from 'date-fns'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <article>
      <header>
        <h1 className="text-3xl lg:text-4xl font-bold">Blog</h1>
      </header>
      <ul
        className="w-full max-w-[41.375rem] flex flex-col gap-6 mt-12"
        aria-label="posts"
      >
        {posts.map((post, index) => (
          <li key={post.id}>
            {index === 0 && (
              <h3>
                {format(post.created_at, 'dd.MM.yyyy')} ...Última Postagem
              </h3>
            )}
            <h2
              className={`font-bold ${index === 0 ? 'text-4xl' : 'text-3xl'}`}
            >
              {post.title}
            </h2>
          </li>
        ))}
      </ul>
    </article>
  )
}
