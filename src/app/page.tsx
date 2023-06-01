import { getAllPosts } from './services/tabnews'

export default async function Home() {
  const posts = await getAllPosts()

  console.log(posts)
  return (
    <article className="w-full">
      <h4 className="text-sm text-gray-500">24.11.2022 - Última Postagem...</h4>
      <h1 className="text-4xl text-gray-900 font-bold w-full max-w-[40.375rem]">
        Uma Boa Maneira de Organizar Suas Branches, Commits e Pull Requests
      </h1>
    </article>
  )
}
