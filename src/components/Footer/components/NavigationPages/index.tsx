'use client'

import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'

interface NavigationPagesProps {
  slugOfPost: string
}

export default function NavigationPages({ slugOfPost }: NavigationPagesProps) {
  const pathName = usePathname()
  const params = useParams()

  return (
    <div className="flex items-center">
      {pathName === '/' && (
        <>
          <Link
            className="py-2 px-3 text-sm text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out"
            href="/blog"
          >
            Ver Outros Posts
          </Link>
          <Link
            className="py-3 px-4 text-sm font-bold text-gray-800 bg-gray-200 hover:bg-gray-300 rounded-sm transition-all duration-200 ease-in-out"
            href={`/blog/${slugOfPost}`}
          >
            Ver Conteúdo
          </Link>
        </>
      )}
      {!!params.slug && (
        <>
          <Link
            className="py-2 px-3 text-sm text-blue-400 hover:text-blue-600 transition-all duration-200 ease-in-out"
            href="/blog"
          >
            Ver Outros Posts
          </Link>
        </>
      )}
    </div>
  )
}
