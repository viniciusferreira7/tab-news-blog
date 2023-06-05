import { getAllPosts, getPostBySlug } from '../services/tab-news'
import PostDetails from '@/components/PostDetails'

export default async function Home() {
  const [post] = await getAllPosts()

  const contentOfPost = await getPostBySlug(post.slug)

  return <PostDetails {...contentOfPost} />
}
