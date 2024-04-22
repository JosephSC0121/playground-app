import Editor from '@monaco-editor/react'

export function CodeEditor() {
  return (
    <div className="w-1/2">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </div>
  )
}
