import { Post } from '@/@types/post'

const baseUrl = 'https://www.tabnews.com.br/api/v1/'

export async function getAllPosts() {
  const response = await fetch(`${baseUrl}contents/guscsales`, {
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60 * 24 * 2, // 2 days
    },
  })

  let posts = (await response.json()) as Post[]

  posts = posts.map((post) => ({
    ...post,
    created_at: new Date(post.created_at),
  }))

  posts = posts.sort((a, b) => {
    return b.created_at.getTime() - a.created_at.getTime()
  })

  posts = posts.filter((post) => !!post.title)

  return posts
}

export async function getPostBySlug(slug: string) {
  const response = await fetch(`${baseUrl}contents/guscsales/${slug}`)

  let post = (await response.json()) as Post

  post = { ...post, created_at: new Date(post.created_at) }

  return post
}
