import Editor from '@monaco-editor/react'

interface CodeEditorProps {
  children: string
}

export function CodeEditor({ children }: CodeEditorProps) {
  
  return (
    <div className="w-1/2">
      <Editor
        height="170vh"
        defaultLanguage={children}
        defaultValue="// Escribe aquí tu código!!!"
        theme="vs-dark"
      />
    </div>
  )
}
