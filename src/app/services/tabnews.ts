const baseUrl = 'https://www.tabnews.com.br/api/v1/'

export async function getAllPosts() {
  const response = await fetch(`${baseUrl}contents/guscsales`)

  const posts = await response.json()

  return posts
}

export async function getLastPost() {
  const response = await fetch(`${baseUrl}contents/guscsales`)

  const posts = await response.json()

  return posts
}
