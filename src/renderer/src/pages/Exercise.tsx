import { useParams } from 'react-router-dom'
import { MarkdownCard } from '@renderer/components/Markdown-Card'
import { CodeEditor } from '@renderer/components/Editor'
import Sidebar from '@renderer/components/Sidebar'
import { useExercise } from '@renderer/hooks/useExercise'

function Exercise() {
  const { exercise } = useParams()
  const exerciseTitle = exercise ?? '404'
  const data = useExercise(exerciseTitle)

  return (
    <div className="flex flex-col">
      <Sidebar />
      <div className="flex">
        {data && <MarkdownCard>{data.description}</MarkdownCard>}
        {data && <CodeEditor language={data.languaje}></CodeEditor>}
      </div>
    </div>
  )
}

export default Exercise
