import { getAllPosts } from '@/services/tab-news'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <article>
      <header>
        <h1 className="text-3xl lg:text-4xl font-bold">Blog</h1>
      </header>
      <main>
        {posts.map((post) => (
          <section key={post.id}>
            <h2>{post.title}</h2>
          </section>
        ))}
      </main>
    </article>
  )
}
