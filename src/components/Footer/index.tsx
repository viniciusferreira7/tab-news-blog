import { getAllPosts, getPostBySlug } from '@/services/tabnews'
import Link from 'next/link'
import React from 'react'

export default async function Footer() {
  const [post] = await getAllPosts()

  const contentOfPost = await getPostBySlug(post.slug)

  const linkHoverClassName =
    'text-gray-500 hover:text-gray-800 transaction-all ease-in-out duration-200ms'

  return (
    <footer className="flex flex-col gap-4 lg:flex-row justify-between items-center pt-4 border-t border-solid border-t-gray-200">
      <div className="flex items-end gap-3">
        <div>
          <h3 className="text-gray-800 font-bold">Vini!</h3>
          <p className="text-xs text-gray-500">
            viniciusferreiradev07@gmail.com
          </p>
        </div>
        <nav>
          <ul className="flex gap-2.5">
            <li>
              <a
                href="https://www.linkedin.com/in/vinicius-ferreira-84b68b162/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkHoverClassName}
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/viniciusferreira7"
                target="_blank"
                rel="noopener noreferrer"
                className={linkHoverClassName}
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav className="flex items-center">
        <Link
          className="py-2 px-3 text-xs text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out"
          href="/blog"
        >
          Ver Outros Posts
        </Link>
        <Link
          className="py-3 px-4 text-xs font-bold text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-sm transition-all duration-200 ease-in-out"
          href={`/blog/${contentOfPost.slug}`}
        >
          Ver Conteúdo
        </Link>
      </nav>
    </footer>
  )
}
