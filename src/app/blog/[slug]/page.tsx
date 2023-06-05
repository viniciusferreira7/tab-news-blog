import PostDetails from '@/components/PostDetails'
import { getPostBySlug } from '@/services/tab-news'

interface BlogPostDetailsPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostDetailsPage({
  params,
}: BlogPostDetailsPageProps) {
  const contentOfPost = await getPostBySlug(params.slug)

  return <PostDetails {...contentOfPost} />
}
