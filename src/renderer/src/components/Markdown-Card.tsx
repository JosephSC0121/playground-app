import ReactMarkdown from 'react-markdown'

interface MarkdownCardProps {
  children: string
}

export function MarkdownCard({ children }: MarkdownCardProps) {
  return (
    <div className="bg-secondary w-1/2 p-4">
      <ReactMarkdown className="prose">{children}</ReactMarkdown>
    </div>
  )
}

export default MarkdownCard
