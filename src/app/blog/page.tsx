import { getAllPosts } from '@/services/tab-news'
import PostDateAndTitle from './components/PostDateAndTitle'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <article className="lg:h-[calc(100vh-8.856rem)] w-full">
      <header className="mb-7 lg:mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold">Blog</h1>
      </header>
      <ul
        className="w-full max-w-[41.375rem] flex flex-col gap-6"
        aria-label="posts"
      >
        {posts.map((post, index) => (
          <PostDateAndTitle key={post.id} {...post} index={index} />
        ))}
      </ul>
    </article>
  )
}
