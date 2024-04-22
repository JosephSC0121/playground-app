import Editor from '@monaco-editor/react'

export function CodeEditor() {
  return (
    <div className="w-1/2">
      <Editor
        height="120vh"
        defaultLanguage="python"
        defaultValue="// Escribe aquí tu código!!!"
        theme="vs-dark"
      />
    </div>
  )
}
