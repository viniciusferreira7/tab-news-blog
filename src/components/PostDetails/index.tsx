'use client'

import { format } from 'date-fns'
import RenderMarkdown from '../RenderMarkdown'
import { Post } from '@/@types/post'
import { useParams } from 'next/navigation'

interface PostDetailsProps extends Post {}

export default function PostDetails({
  created_at: createdAt,
  body,
  title,
}: PostDetailsProps) {
  const params = useParams()
  const formatDateOfLastPost = format(createdAt, 'dd.MM.yyyy')

  const isSlug = params.slug ? 'overflow-y-auto' : 'overflow-hidden'

  return (
    <article
      className={`lg:h-[calc(100vh-8.856rem)] h-[calc(100vh-23.55rem)] w-full relative ${isSlug}`}
    >
      <h4 className="text-sm text-gray-500 mb-2">
        {formatDateOfLastPost} - Última Postagem...
      </h4>
      <h1
        className=" font-sans lg:text-3xl text-lg text-gray-900 font-bold 
      w-full max-w-[40.375rem] lg:mb-12 mb-4"
      >
        {title}
      </h1>
      <RenderMarkdown>{body}</RenderMarkdown>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-bottom-white" />
    </article>
  )
}
