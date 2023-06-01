import { HTMLAttributes } from 'react'
import './styles.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface RenderMarkdownProps {
  children: string
}

export default function RenderMarkdown({
  children,
  ...props
}: RenderMarkdownProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <ReactMarkdown className={`renderMarkdown ${props.className}`}>
      {children}
    </ReactMarkdown>
  )
}
