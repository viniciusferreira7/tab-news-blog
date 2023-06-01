import { format } from 'date-fns'
import { getAllPosts } from '../services/tabnews'

export default async function Home() {
  const [post] = await getAllPosts()

  const formatDateOfLastPost = format(post.created_at, 'dd.MM.yyyy')

  return (
    <article className="w-full">
      <h4 className="text-sm text-gray-500">
        {formatDateOfLastPost} - Última Postagem...
      </h4>
      <h1 className=" font-sans text-4xl text-gray-900 font-bold w-full max-w-[40.375rem]">
        {post.title}
      </h1>
    </article>
  )
}
