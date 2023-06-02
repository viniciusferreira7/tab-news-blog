import { format } from 'date-fns'
import { getAllPosts, getPostBySlug } from '../services/tabnews'
import RenderMarkdown from '@/components/RenderMarkdown'

export default async function Home() {
  const [post] = await getAllPosts()

  const contentOfPost = await getPostBySlug(post.slug)

  const formatDateOfLastPost = format(contentOfPost.created_at, 'dd.MM.yyyy')

  return (
    <article className="w-full h-full relative overflow-hidden">
      <h4 className="text-sm text-gray-500 mb-2">
        {formatDateOfLastPost} - Última Postagem...
      </h4>
      <h1
        className=" font-sans lg:text-3xl text-lg text-gray-900 font-bold 
        w-full max-w-[40.375rem] lg:mb-12 mb-4"
      >
        {contentOfPost.title}
      </h1>
      <RenderMarkdown>{contentOfPost.body}</RenderMarkdown>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-bottom-white" />
    </article>
  )
}
