import { useParams } from 'react-router-dom'
import { MarkdownCard } from '@renderer/components/Markdown-Card'
import { CodeEditor } from '@renderer/components/Editor'
import Sidebar from '@renderer/components/Sidebar'

function Post() {
  const { exercise } = useParams()

  return (
    <div className="flex flex-col">
      <Sidebar />
      <h2 className="mb-4">Post ID: {exercise}</h2>
      <div className="flex">
        <MarkdownCard />
        <CodeEditor />
      </div>
    </div>
  )
}

export default Post
