import { Post } from '@/@types/post'
import { format } from 'date-fns'
import Link from 'next/link'

interface PostTitleProps extends Post {
  index: number
}

export default function PostDateAndTitle({
  slug,
  title,
  created_at: createdAt,
  index,
}: PostTitleProps) {
  const hoverLi =
    'group-hover:h-20 transition-all duration-700 ease-in-out group-hover:bg-gray-300'

  return (
    <li className="flex  gap-2 items-center group">
      <div className={`h-0 w-[0.31rem] bg-transparent rounded-sm ${hoverLi}`} />
      <Link className="flex flex-col gap-2" href={`/blog/${slug}`}>
        <span className="text-sm text-gray-800">
          {format(createdAt, 'dd.MM.yyyy')}{' '}
          {index === 0 && '- Última Postagem...'}
        </span>

        <span className={`font-bold ${index === 0 ? 'text-4xl' : 'text-3xl'}`}>
          {title}
        </span>
      </Link>
    </li>
  )
}
